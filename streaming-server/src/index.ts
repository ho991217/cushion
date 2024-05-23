import express, { Express, Request, Response } from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';
import cors from 'cors';
const { v4: uuidV4 } = require('uuid');

const app: Express = express();
const port = 8000;
app.use(cors());

const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: 'http://localhost:5173',
  },
});

app.get('/', (req: Request, res: Response) => {
  res.send(`Hello World! ${uuidV4()}`);
});

io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('send_message', (data) => {
    console.log(data);
  });

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

server.listen(port, () => {
  console.log(`
  ################################################
  🚀 Server running on port: ${port} 🚀
  ################################################
  `);
});
