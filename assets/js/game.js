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
        const bg = new GameObject(ctx, "Bg", new Vector2D(0, 0));

        bg.addComponent(new InfiniteSpriteScrollRenderer(
            ctx,
            "assets/images/placeholders/bg.png",
            new Vector2D(600, 600),
            new Vector2D(1, 1),
            10
        ));

        this.addGameObject(bg);

        const button = new GameObject(ctx, "Button", new Vector2D(0, 0));     

        button.addComponent(new ButtonComponent(
            ctx,
            new Vector2D(0, 0),
            new Vector2D(300, 300),
        ));

        button.addComponent(new SpriteRenderer(
            ctx,
            "assets/images/placeholders/bg.png",
            new Vector2D(300, 300),
        ));

        this.addGameObject(button);
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
            gO.update(deltaTime);
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