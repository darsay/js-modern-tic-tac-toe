class SpriteRenderer extends RendererComponent {
    constructor(ctx, spriteUrl, dimensions) {
        super(ctx);
        this.type = "SpriteRenderer";

        this.setSprite(spriteUrl);
        this.dimensions = dimensions;
    }

    setSprite(url) {
        this.sprite = new Image();
        this.sprite.src = url;
    }

    update(deltaTime) {
        super.update(deltaTime);
    }

    draw(position) {
        ctx.drawImage(this.sprite,
            position.x,
            position.y,
            this.dimensions.x,
            this.dimensions.y
        );
    }
}