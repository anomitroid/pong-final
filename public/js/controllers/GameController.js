class GameController {
    constructor(model, view, socket, playerId) {
        this.model = model;
        this.view = view;
        this.socket = socket;
        this.playerId = playerId;

        this.setupInputListeners();
    }

    setupInputListeners() {
        this.view.canvas.addEventListener('mousemove', (e) => this.handleInput(e.clientY));
        this.view.canvas.addEventListener('touchmove', (e) => {
            e.preventDefault();
            const touch = e.touches[0];
            this.handleInput(touch.clientY);
        }, { passive: false });
    }

    handleInput(clientY) {
        const canvasRect = this.view.canvas.getBoundingClientRect();
        const y = clientY - canvasRect.top;
        const scaledY = (y / this.view.canvas.height) * 600;
        this.socket.emit('paddleMove', scaledY - 50);
    }

    start() {
        this.update();
    }

    update() {
        const now = Date.now();
        const predictedState = this.model.predict(now);
        if (predictedState && predictedState.players && predictedState.players.length > 0) {
            this.view.render(predictedState, this.playerId);
        }
        requestAnimationFrame(() => this.update());
    }
}