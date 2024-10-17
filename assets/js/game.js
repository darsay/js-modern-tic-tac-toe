class Game {
    constructor(ctx) {
        this.ctx = ctx;
        this.gameObjects = [];

        this.previousUpdateTime = 0;
        this.previousDrawTime = 0;

        this.isRunning = false;
    }

    start() {
        this.initEntities();

        this.isRunning = true;
        requestAnimationFrame(this.gameLoop.bind(this));
    }

    initEntities() {
        this.addGameObject(ctx, "Fulanito", new Vector2D(0, 0));

        this.gameObjects[0].addComponent(new InfiniteSpriteScrollRenderer(ctx,
            "assets/images/placeholders/bg.png",
            new Vector2D(600, 600),
            new Vector2D(1, 1),
            60
        ));
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
        console.log(`Delta time: ${deltaTime}.`);

        this.gameObjects.forEach(gO => {
            gO.update(deltaTime);
        });
    }

    draw() {
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
        console.log("Draw");

        this.gameObjects.forEach(gO => {
            gO.draw();
        });
    }

    addGameObject(ctx, name, position) {
        this.gameObjects.push(new GameObject(ctx, name, position));
    }
}