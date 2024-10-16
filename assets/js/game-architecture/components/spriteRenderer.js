class SpriteRenderer extends Component {
    constructor(ctx, spriteUrl) {
        super(ctx);
        this.type = "SpriteRenderer";

        this.setSprite(spriteUrl);
    }

    setSprite(url) {
        this.sprite = new Image();
        this.sprite.src = url;
    }

    update(deltaTime) {
        super.update(deltaTime);
    }
}