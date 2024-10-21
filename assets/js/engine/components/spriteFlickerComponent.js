class SpriteFlicker extends Component {
    constructor(flickerTime, alpha) {
        super();

        this.type = "SpriteFlicker";

        this.isOn = true;
        this.currentTime =  0;
        this.alpha =  alpha;
        this.flickerTime = flickerTime;
    }

    init(gameObject) {
        super.init(gameObject);

        const spriteRenderer = this.gameObject.components.find(c =>  c.type === "SpriteRenderer");

        if(spriteRenderer) this.spriteRenderer = spriteRenderer;
    }

    update(deltaTime) {
        this.currentTime+=deltaTime;

        if(this.currentTime >= this.flickerTime) {
            this.currentTime = 0;           

            this.isOn = !this.isOn;

            if(this.spriteRenderer) {
                

                this.spriteRenderer.setAlpha(this.isOn ? 1 : this.alpha);
            }
        }
            
    }
}