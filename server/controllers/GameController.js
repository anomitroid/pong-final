const TICK_RATE = 120;

class GameController {
    constructor(model, io, roomId) {
        this.model = model;
        this.io = io;
        this.roomId = roomId;
        this.gameLoop = null;
        this.lastUpdateTime = Date.now();
    }

    handleNewConnection(socket) {
        const playerId = this.model.addPlayer(socket.id);
        if (playerId !== null) {
            socket.emit('playerAssigned', playerId);
            this.io.to(this.roomId).emit('gameStateFull', this.model.getGameState());

            if (this.model.players.length === 2) {
                this.startGame();
            }
        }

        socket.on('paddleMove', (y) => {
            this.model.updatePlayerPosition(socket.id, y);
        });
    }

    handleDisconnect(socket) {
        const playerRemoved = this.model.removePlayer(socket.id);
        if (playerRemoved) {
            if (this.model.players.length < 2) {
                this.stopGame();
            }
            return true;
        }
        return false;
    }

    startGame() {
        this.model.gameState = 'playing';
        this.lastUpdateTime = Date.now();
        const initialState = this.model.getGameState();
        this.io.to(this.roomId).emit('gameStart', initialState);
        this.gameLoop = setInterval(() => {
            const now = Date.now();
            const deltaTime = (now - this.lastUpdateTime) / 1000;
            this.lastUpdateTime = now;

            this.model.updateBall(deltaTime);
            this.sendGameState();
        }, 1000 / TICK_RATE);
    }

    stopGame() {
        this.model.gameState = 'waiting';
        clearInterval(this.gameLoop);
        this.io.to(this.roomId).emit('gameStateFull', this.model.getGameState());
    }

    sendGameState() {
        const fullState = this.model.getGameState();
        const deltaState = this.model.getDeltaState();
        this.io.to(this.roomId).emit('gameStateDelta', deltaState);

        if (Math.random() < 0.1) {
            this.io.to(this.roomId).emit('gameStateFull', fullState);
        }
    }
}

module.exports = GameController;