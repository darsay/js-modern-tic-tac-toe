class GameEngine {
    constructor(ctx) {
        this.ctx = ctx;
        this.gameObjects = [];

        this.previousUpdateTime = 0;
        this.previousDrawTime = 0;

        this.isRunning = false;
    }

    start() {
        this.isRunning = true;
        requestAnimationFrame(this.gameLoop.bind(this));
    }


    gameLoop(timeStamp) {
        if(!this.isRunning) return;

        const deltaTime = (timeStamp - this.previousUpdateTime) / 1000;
        this.previousUpdateTime = timeStamp;

        this.update(deltaTime);

        if(timeStamp - this.previousDrawTime >= 1000 / FRAME_RATE) {
            this.draw();
            this.previousDrawTime = timeStamp;
        }

        requestAnimationFrame(this.gameLoop.bind(this));
    }

    update(deltaTime) {
        this.gameObjects.forEach(gO => {
            if(gO.isActive) {
                gO.update(deltaTime);
            }
        });
    }

    draw() {
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);

        this.gameObjects.forEach(gO => {
            gO.draw();
        });
    }

    addGameObject(gameObject) {
        this.gameObjects.push(gameObject);
    }
}