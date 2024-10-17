class InfiniteSpriteScrollRenderer extends SpriteRenderer {
    constructor(ctx, spriteUrl, dimensions, direction, speed) {
        super(ctx, spriteUrl, dimensions);
        this.type = "InfiniteSpriteScrollRenderer";

        this.direction = direction.normalized();
        this.speed = speed;
        this.offset = new Vector2D(0, 0);
    }

    update(deltaTime) {
        this.offset.x += this.speed * deltaTime;
        this.offset.y += this.speed * deltaTime;

        // If the offset becomes larger than the image width, reset it
        if (this.offset.x >= this.dimensions.x) {
            this.offset.x -= this.dimensions.x;
        }

        if (this.offset.y >= this.dimensions.y) {
            this.offset.y -= this.dimensions.y;
        }
    }

    draw(position) {

        ctx.drawImage(this.sprite, position.x - this.offset.x, position.y - this.offset.y, this.dimensions.x, this.dimensions.y);
        ctx.drawImage(this.sprite, position.x - this.offset.x + this.dimensions.x, position.y - this.offset.y, this.dimensions.x, this.dimensions.y);
        ctx.drawImage(this.sprite, position.x - this.offset.x, position.y - this.offset.y + this.dimensions.y, this.dimensions.x, this.dimensions.y);
        ctx.drawImage(this.sprite, position.x - this.offset.x + this.dimensions.x, position.y - this.offset.y + this.dimensions.y, this.dimensions.x, this.dimensions.y);
    }
}