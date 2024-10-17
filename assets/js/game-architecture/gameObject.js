class GameObject {
    constructor(ctx, name, position) {
        this.ctx = ctx;
        
        this.name = name;

        this.components = [];
        this.renderer = null;
        
        this.position = position;
    }

    addComponent(component) {
        this.components.push(component);

        if(component.isRenderer) {
            this.renderer = component;
        }
    }

    update(deltaTime) {
        console.log(`Update ${this.name} which is at position ${this.position.x}, ${this.position.y}`);

        this.components.forEach(component => component.update(deltaTime));
    }

    draw() {
        if(this.renderer) this.renderer.draw(this.position);
    }
}