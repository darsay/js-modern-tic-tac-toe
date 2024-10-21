class SpriteRenderer extends RendererComponent {
    constructor(spriteUrl, alpha = 1) {
        super();
        this.type = "SpriteRenderer";

        if(spriteUrl) this.setSpriteUrl(spriteUrl);  
        this.alpha = alpha;
    }

    init(gameObject) {
        super.init(gameObject);
        this.position = this.gameObject.position;
        this.dimensions = this.gameObject.dimensions;
        this.offset = new Vector2D(0,0);
        this.cropDimensions = this.dimensions;
    }

    setSpriteUrl(url) {
        this.sprite = new Image();
        this.sprite.src = url;
    }

    setAlpha(alpha) {
        this.alpha = alpha;
    }

    update(deltaTime) {
        super.update(deltaTime);
    }

    draw() {
        this.gameObject.ctx.globalAlpha = this.alpha;

        this.gameObject.ctx.drawImage(this.sprite,
            this.offset.x,
            this.offset.y,
            this.cropDimensions.x,
            this.cropDimensions.y,
            this.gameObject.position.x,
            this.gameObject.position.y,
            this.gameObject.dimensions.x,
            this.gameObject.dimensions.y
        );

        this.gameObject.ctx.globalAlpha = 1;
    }

    updateCropSettings(cropPos, cropDimensions) {
        this.offset = cropPos;
        this.cropDimensions = cropDimensions;
    }
}