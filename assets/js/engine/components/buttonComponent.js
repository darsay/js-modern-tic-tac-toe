class ButtonComponent extends Component {
    constructor() {
        super();
        this.type = "ButtonComponent";
        this.callback = null;   
    }

    init(gameObject) {
        super.init(gameObject);

        this.position = this.gameObject.position;
        this.dimensions = this.gameObject.dimensions;

        InputManager.addInputCallback("click", () => this.clickButton());
    }
    
    
    checkIfMouseOver() {
        const mousePos = InputManager.mousePos;

        if(!mousePos) return false;

        if(!InputManager.isMouseOver) return false;

        if( mousePos.x >= this.position.x &&
            mousePos.x <= this.position.x + this.dimensions.x &&
            mousePos.y >= this.position.y &&
            mousePos.y <= this.position.y + this.dimensions.y
        ) {
            return true;
        } else {
            return false;
        }
    }

    clickButton() {
        if(this.checkIfMouseOver()){
            // console.log(`Button from ${this.gameObject.name} pressed!`);
            this.callback();
        }
    }

    update(deltaTime) {
    }
}