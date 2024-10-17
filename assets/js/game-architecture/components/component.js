class Component {
    constructor(ctx) {
        this.ctx = ctx;
        this.type = "";
        this.isRenderer = false;
    }

    update(deltaTime) {
        console.log(`Update component ${this.type}`);
    }
}