class TicTacToeGame {
    constructor(gameEngine) {
        this.gameEngine = gameEngine;
    }

    start() {
        this.initEntities();

        this.gameEngine.start();
    }

    initEntities() {
        const bg = new GameObject(
            ctx,
            "Bg",
            {
                position: new Vector2D(0, 0),
                dimensions: new Vector2D(600, 600)
            }
        );

        bg.addComponent(new InfiniteSpriteScrollRenderer(
            "assets/images/bg.png",
            new Vector2D(0, 1),
            10
        ));

        this.gameEngine.addGameObject(bg);

        const board  = new GameObject(
            ctx,
            "Board",
            {
                position: new Vector2D(0, 0),
                dimensions: new Vector2D(600, 600),
            }
        );

        board.addComponent(new SpriteRenderer());
        board.addComponent(new AnimationComponent(
            "assets/images/board.png",
            2,
            0.3,
            new Vector2D(0,0),
            new Vector2D(512, 512)
            ));

            this.gameEngine.addGameObject(board);


        const button = new GameObject(
            ctx,
            "O",
            {
                position: new Vector2D(400, 70),
                dimensions: new Vector2D(128, 128)
            });     


        let buttonComponent1 = new ButtonComponent();
        button.addComponent(buttonComponent1);

        let sr1 = new SpriteRenderer();
        button.addComponent(sr1);

        button.addComponent(
            new AnimationComponent(
                "assets/images/tictacsprites-Sheet.png",
                2,
                0.3,
                new Vector2D(0,0),
                new Vector2D(64,64)
            ));

        this.gameEngine.addGameObject(button);

        buttonComponent1.buttonPressCallback = function() {console.log(`Button from ${this.gameObject.name} pressed!`)};
        buttonComponent1.mouseOverCallback = () => sr1.setAlpha(0.5);
        buttonComponent1.mouseExitCallback = () => sr1.setAlpha(1);

        const button2 = new GameObject(
            ctx,
            "X",
            {
                position: new Vector2D(100, 400),
                dimensions: new Vector2D(128, 128)
            });     

        let buttonComponent2 = new ButtonComponent();
        let sR = new SpriteRenderer();
       
        button2.addComponent(sR);
        button2.addComponent(buttonComponent2);
        button2.addComponent(
            new AnimationComponent(
                "assets/images/tictacsprites-Sheet.png",
                2,
                0.3,
                new Vector2D(0,64),
                new Vector2D(64,64)
            ));

        button2.addComponent(new SpriteFlicker(0.5, 0.3));

        this.gameEngine.addGameObject(button2);
        buttonComponent2.buttonPressCallback = () => sR.isActive = false;
    }

}