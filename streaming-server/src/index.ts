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

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
