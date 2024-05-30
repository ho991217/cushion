import { VideoCapture } from 'camera-capture';
const express = require('express');
const Stream = require('node-rtsp-stream');
const cors = require('cors');

const app = express();
const port = 3002;
let stream = null as any;

app.use(
  cors({
    origin: '*',
    credentials: true,
  })
);

app.get('/stream', (req: any, res: any) => {
  try {
    const newRtspStreamUrl = req.query.rtsp;
    let currentRtspStreamUrl = '';

    if (!stream || currentRtspStreamUrl !== newRtspStreamUrl) {
      if (stream || newRtspStreamUrl === 'stop') {
        stream.stop();
      }
      stream = new Stream({
        name: 'Camera Stream',
        streamUrl: newRtspStreamUrl,
        wsPort: 9999,
      });
      currentRtspStreamUrl = newRtspStreamUrl;
    }

    res.send(200).json({ url: `ws://localhost:9999` });
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const { writeFileSync } = require('fs');

app.get('/hello', async (req: any, res: any) => {
  const c = new VideoCapture({ port: 8082 });
  await c.initialize();
  await c.startRecording();
  await sleep(5_000);
  const data = await c.stopRecording();
  writeFileSync('src/model/input_videos/tmp6.mp4', data);

  const spawn = require('child_process').spawn;

  const process = spawn('python', [
    'src/model/frame.py',
    'src/model/input_videos',
  ]);

  process.stdout.on('data', function (data: any) {
    res.send(data.toString());
  });

  process.stderr.on('data', function (data: any) {
    console.error(data.toString());
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
