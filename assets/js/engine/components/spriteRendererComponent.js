class SpriteRenderer extends RendererComponent {
    constructor(spriteUrl) {
        super();
        this.type = "SpriteRenderer";

        if(spriteUrl) this.setSpriteUrl(spriteUrl);   
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

    update(deltaTime) {
        super.update(deltaTime);
    }

    draw() {
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
    }

    updateCropSettings(cropPos, cropDimensions) {
        this.offset = cropPos;
        this.cropDimensions = cropDimensions;
    }
}