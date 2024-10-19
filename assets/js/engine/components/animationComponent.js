class AnimationComponent extends Component {
    constructor(animUrl, frameNum, frameTime, cropPos, cropDimensions) {
        super();
        this.type = "AnimationComponent";

        this.animUrl = animUrl;
        this.frameTime =  frameTime;
        this.frameNum = frameNum;
        this.currentFrame = 0;
        this.currentTime = 0;

        this.cropPos = cropPos;
        this.cropDimensions = cropDimensions;

    }

    init(gameObject) {
        super.init(gameObject);

        const spriteRenderer = this.gameObject.components.find(c =>  c.type === "SpriteRenderer");

        if(spriteRenderer) {
            this.spriteRenderer = spriteRenderer;
            this.spriteRenderer.setSpriteUrl(this.animUrl);
            this.spriteRenderer.updateCropSettings(this.cropPos, this.cropDimensions);
        }
        this.isPlaying = true;
    }

    play() {
        this.isPlaying = true;
    }

    stop() {
        this.isPlaying = false;
    }

    update(deltaTime) {
        super.update(deltaTime);

        this.currentTime += deltaTime;

        if(this.currentTime >= this.frameTime) {
            this.currentTime -= this.frameTime;

            if(this.spriteRenderer) {
                this.updateFrame();
            }
        }

    }

    updateFrame() {
        if(this.currentFrame >= this.frameNum) {
            this.currentFrame = 0;
        }

        this.cropPos.x = this.cropDimensions.x * this.currentFrame;



        this.spriteRenderer.updateCropSettings(this.cropPos, this.cropDimensions);

        this.currentFrame++;
    }
}