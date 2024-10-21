class ButtonComponent extends Component {
    constructor() {
        super();
        this.type = "ButtonComponent";
        this.buttonPressCallback = null; 

        this.mouseOverCallback = null;
        this.mouseExitCallback = null;  

        this.isMouseOver = false;
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
            if(this.mouseOverCallback && !this.mouseIsOver) {
                this.mouseIsOver = true;
                this.mouseOverCallback();
            }
            return true;
        } else {
            if(this.mouseExitCallback && this.mouseIsOver) {
                this.mouseIsOver = false;
                this.mouseExitCallback();
            }
            return false;
        }
    }

    clickButton() {
        if(this.mouseIsOver){
            // console.log(`Button from ${this.gameObject.name} pressed!`);
            this.buttonPressCallback();
        }
    }

    update(deltaTime) {
        this.mouseIsOver = this.checkIfMouseOver()
    }
}