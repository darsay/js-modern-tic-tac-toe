class Game {
    constructor(ctx) {
        this.ctx = ctx;
        this.gameObjects = [];

        this.gameLoopId = null;

        this.previousTime = new Date().getTime();
    }

    start() {
        this.addGameObject(ctx, "Fulanito", new Vector2D(5, 69));

        this.gameObjects[0].addComponent(new SpriteRenderer(ctx, ""));

        this.gameLoopId = setInterval(() => this.gameLoop(), 1000 / 60);
    }

    gameLoop() {
        const currentTime = new Date().getTime();
        const deltaTime = currentTime - this.previousTime;
        this.previousTime = currentTime;

        console.log(deltaTime);

        this.gameObjects.forEach(gO => {
            gO.update(deltaTime);
        });
    }

    addGameObject(ctx, name, position) {
        this.gameObjects.push(new GameObject(ctx, name, position));
    }
}