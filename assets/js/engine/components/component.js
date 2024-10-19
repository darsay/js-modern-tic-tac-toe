class Component {
    constructor() {
        this.gameObject = null;
        this.type = "";
        this.isRenderer = false;
        this.isActive = true;
    }

    init(gameObject) {
        this.gameObject = gameObject;
    }

    update(deltaTime) {
    }
}