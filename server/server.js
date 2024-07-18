const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const { v4: uuidv4 } = require('uuid');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

const GameModel = require('./models/GameModel');
const GameController = require('./controllers/GameController');

app.use(express.static('../public'));

const rooms = new Map();

io.on('connection', (socket) => {
    console.log('New client connected');

    socket.on('createRoom', () => {
        const roomId = uuidv4();
        const gameModel = new GameModel();
        const gameController = new GameController(gameModel, io, roomId);
        rooms.set(roomId, { gameModel, gameController });
        socket.join(roomId);
        gameController.handleNewConnection(socket);
        socket.emit('roomCreated', roomId);
    });

    socket.on('joinRoom', (roomId) => {
        const room = rooms.get(roomId);
        if (room && room.gameModel.players.length < 2) {
            socket.join(roomId);
            room.gameController.handleNewConnection(socket);
            socket.emit('roomJoined', roomId);
        } else {
            socket.emit('roomJoinError', 'Room not found or full');
        }
    });

    socket.on('disconnect', () => {
        console.log('Client disconnected');
        rooms.forEach((room, roomId) => {
            if (room.gameController.handleDisconnect(socket)) {
                if (room.gameModel.players.length === 0) {
                    rooms.delete(roomId);
                }
            }
        });
    });
});

const PORT = process.env.PORT || 42030;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));