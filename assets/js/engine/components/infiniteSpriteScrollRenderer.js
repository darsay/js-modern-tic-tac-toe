class InfiniteSpriteScrollRenderer extends SpriteRenderer {
    constructor(spriteUrl, direction, speed) {
        super(spriteUrl);
        this.type = "InfiniteSpriteScrollRenderer";

        this.direction = direction.normalized();
        this.speed = speed;
        this.offset = new Vector2D(0, 0);   

    }

    init(gameObject) {
        super.init(gameObject);
    }

    update(deltaTime) {
        this.offset.x += this.speed * this.direction.x * deltaTime;
        this.offset.y += this.speed * this.direction.y * deltaTime;

        // If the offset becomes larger than the image width, reset it
        if (this.offset.x >= this.gameObject.dimensions.x) {
            this.offset.x -= this.gameObject.dimensions.x;
        }

        if (this.offset.y >= this.gameObject.dimensions.y) {
            this.offset.y -= this.gameObject.dimensions.y;
        }
    }

    draw() {
        let drawPos = this.getNextBgDrawPos();

        ctx.drawImage(this.sprite,  this.gameObject.position.x - this.offset.x,  this.gameObject.position.y - this.offset.y, this.gameObject.dimensions.x, this.gameObject.dimensions.y);
        ctx.drawImage(this.sprite,  drawPos.x, this.gameObject.position.y - this.offset.y, this.gameObject.dimensions.x, this.gameObject.dimensions.y);
        ctx.drawImage(this.sprite,  this.gameObject.position.x - this.offset.x, drawPos.y, this.gameObject.dimensions.x, this.gameObject.dimensions.y);
        ctx.drawImage(this.sprite,  drawPos.x, drawPos.y, this.gameObject.dimensions.x, this.gameObject.dimensions.y);
    }

    getNextBgDrawPos() {
        let drawPos = new Vector2D(0, 0);

        if(this.direction.x * this.speed > 0) {
            drawPos.x =this.gameObject.position.x - this.offset.x + this.gameObject.dimensions.x;
        } else {
            drawPos.x = this.gameObject.position.x - this.offset.x - this.gameObject.dimensions.x;
        }

        if(this.direction.y * this.speed > 0) {
            drawPos.y = this.gameObject.position.y - this.offset.y + this.gameObject.dimensions.y;
        } else {
            drawPos.y = this.gameObject.position.y - this.offset.y - this.gameObject.dimensions.y;
        }

        return drawPos;
    }
}