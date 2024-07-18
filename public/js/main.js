const socket = io();
let canvas, model, view, controller;
let playerId = null;

const menu = document.getElementById('menu');
const gameContainer = document.getElementById('game-container');
const createRoomBtn = document.getElementById('createRoomBtn');
const joinRoomBtn = document.getElementById('joinRoomBtn');
const roomIdInput = document.getElementById('roomIdInput');

createRoomBtn.addEventListener('click', () => {
    socket.emit('createRoom');
});

joinRoomBtn.addEventListener('click', () => {
    const roomId = roomIdInput.value.trim();
    if (roomId) {
        socket.emit('joinRoom', roomId);
    }
});

socket.on('roomCreated', (roomId) => {
    alert(`Room created with ID: ${roomId}`);
    startGame();
});

socket.on('roomJoined', (roomId) => {
    alert(`Joined room with ID: ${roomId}`);
    startGame();
});

socket.on('roomJoinError', (error) => {
    alert(error);
});

socket.on('playerAssigned', (assignedPlayerId) => {
    playerId = assignedPlayerId;
});

socket.on('gameStart', (initialState) => {
    console.log('Game started!', initialState);
    if (model) {
        model.updateGameState(initialState);
    }
});

socket.on('gameStateFull', (gameState) => {
    console.log('Received full game state:', gameState);
    if (model) {
        model.updateGameState(gameState);
    }
});

socket.on('gameStateDelta', (deltaState) => {
    if (model) {
        model.updateDeltaState(deltaState);
    }
});

function startGame() {
    menu.style.display = 'none';
    gameContainer.style.display = 'block';

    canvas = document.getElementById('pongCanvas');
    model = new GameModel();
    view = new GameView(canvas);
    controller = new GameController(model, view, socket, playerId);

    controller.start();
}

window.addEventListener('load', () => {
    // The game will start when a room is created or joined
});