class Component {
    constructor(ctx) {
        this.ctx = ctx;
        this.type = "";
    }

    update(deltaTime) {
        console.log(`Update component ${this.type}`);
    }
}