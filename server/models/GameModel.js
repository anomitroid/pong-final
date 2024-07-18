class GameModel {
    constructor() {
        this.players = [];
        this.ball = { x: 400, y: 300, dx: 5, dy: 5 };
        this.gameState = 'waiting';
    }

    addPlayer(id) {
        if (this.players.length < 2) {
            const playerId = this.players.length;
            this.players.push({
                id: id,
                playerId: playerId,
                y: 250,
                score: 0
            });
            return playerId;
        }
        return null;
    }

    removePlayer(id) {
        const initialLength = this.players.length;
        this.players = this.players.filter(player => player.id !== id);
        return initialLength > this.players.length;
    }

    updatePlayerPosition(id, y) {
        const player = this.players.find(p => p.id === id);
        if (player) {
            player.y = y;
        }
    }

    updateBall(deltaTime) {
        this.ball.x += this.ball.dx * deltaTime * 60;
        this.ball.y += this.ball.dy * deltaTime * 60;

        if (this.ball.y <= 0 || this.ball.y >= 600) {
            this.ball.dy *= -1;
        }

        this.players.forEach((player, index) => {
            if (
                (index === 0 && this.ball.x <= 20 && this.ball.x >= 10) ||
                (index === 1 && this.ball.x >= 780 && this.ball.x <= 790)
            ) {
                if (this.ball.y >= player.y && this.ball.y <= player.y + 100) {
                    this.ball.dx *= -1;
                }
            }
        });

        if (this.ball.x <= 0) {
            this.players[1].score++;
            this.resetBall();
        } else if (this.ball.x >= 800) {
            this.players[0].score++;
            this.resetBall();
        }
    }

    resetBall() {
        this.ball = { x: 400, y: 300, dx: 5, dy: 5 };
    }

    getGameState() {
        return {
            players: this.players,
            ball: this.ball,
            gameState: this.gameState
        };
    }

    getDeltaState() {
        return {
            b: [this.ball.x, this.ball.y],
            p: this.players.map(p => [p.y, p.score])
        };
    }
}

module.exports = GameModel;