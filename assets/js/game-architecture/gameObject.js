class GameObject {
    constructor(ctx, name, position) {
        this.ctx = ctx;
        
        this.name = name;

        this.components = [];
        
        this.position = position;
    }

    addComponent(component) {
        this.components.push(component);
    }

    update(deltaTime) {
        console.log(`Update ${this.name} which is at position ${this.position.x}, ${this.position.y}`);

        this.components.forEach(component => {
            component.update(deltaTime);
        });
    }
}