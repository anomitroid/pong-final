class GameModel {
    constructor() {
        this.gameState = {
            players: [
                { score: 0, y: 250 },
                { score: 0, y: 250 }
            ],
            ball: { x: 400, y: 300, dx: 5, dy: 5 },
            gameState: 'waiting'
        };
        this.lastUpdateTime = Date.now();
    }

    updateGameState(newState) {
        console.log('Updating game state:', newState);
        this.gameState = newState;
        this.lastUpdateTime = Date.now();
    }

    updateDeltaState(deltaState) {
        if (!this.gameState) return;

        this.gameState.ball.x = deltaState.b[0];
        this.gameState.ball.y = deltaState.b[1];
        deltaState.p.forEach((p, i) => {
            if (!this.gameState.players[i]) {
                this.gameState.players[i] = { score: 0, y: 250 };
            }
            this.gameState.players[i].y = p[0];
            this.gameState.players[i].score = p[1];
        });
        this.lastUpdateTime = Date.now();
    }

    predict(now) {
        if (!this.gameState || this.gameState.gameState !== 'playing') return this.gameState;

        const deltaTime = (now - this.lastUpdateTime) / 1000;
        const predictedState = JSON.parse(JSON.stringify(this.gameState));

        predictedState.ball.x += predictedState.ball.dx * deltaTime * 60;
        predictedState.ball.y += predictedState.ball.dy * deltaTime * 60;

        return predictedState;
    }
}