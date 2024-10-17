class ButtonComponent extends Component {
    constructor(ctx, position, dimensions) {
        super(ctx);
        this.type = "ButtonComponent";

        this.position = position;
        this.dimensions = dimensions;

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
            console.log("Click");
        }
    }

    update(deltaTime) {
        console.log(InputManager.mousePos);
    }
}