import express from 'express';
import http from 'http';
import cors from 'cors';
import { Server } from 'socket.io';

const app = express();
app.use(cors());

const port = 3001;
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST'],
  },
});

const totalRooms: Record<string, { users: string[] }> = {};

io.on('connection', (socket: any) => {
  console.log('a user connected');

  socket.on('join', (data: { room: string }) => {
    if (!data.room) return;

    socket.join(data.room);

    // 방이 없으면 방을 만들어준다.
    if (!totalRooms[data.room]) {
      totalRooms[data.room] = { users: [] };
    }

    totalRooms[data.room].users.push(socket.id);
    socket.room = data.room;

    console.log(`join room ${data.room}. Socket ID: ${socket.id}`);
  });

  socket.on('offer', (data: { sdp: string; room: string }) => {
    console.log('offer', data);
    socket.to(data.room).emit('offer', { sdp: data.sdp, sender: socket.id });
  });

  socket.on('answer', (data: { sdp: string; room: string }) => {
    console.log('answer', data);
    socket.to(data.room).emit('answer', { sdp: data.sdp, sender: socket.id });
  });

  socket.on('candidate', (data: { candidate: string; room: string }) => {
    socket.to(data.room).emit('candidate', {
      candidate: data.candidate,
      sender: socket.id,
    });
  });

  socket.on('disconnect', () => {
    // 연결이 끊어지면 방에서 사용자를 제거
    if (socket.room && totalRooms[socket.room]) {
      totalRooms[socket.room].users = totalRooms[socket.room].users.filter(
        (id) => id !== socket.id
      );
      // 사용자가 한명도 없으면 방을 없앰
      if (totalRooms[socket.room].users.length === 0) {
        delete totalRooms[socket.room];
      }
    }

    console.log('Client disconnected');
  });
});

io.listen(port);
