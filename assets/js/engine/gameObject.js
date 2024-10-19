// Transform:
// {
//     position: Vector2D
//     scale: Vector2D
// }

class GameObject {
    constructor(ctx, name, transform) {
        this.ctx = ctx;
        
        this.name = name;
        this.isActive = true;

        this.components = [];
        this.renderer = null;
        
        this.position = transform.position;
        this.dimensions = transform.dimensions;
    }

    addComponent(component) {
        component.init(this);
        this.components.push(component);

        if(component.isRenderer) {
            this.renderer = component;
        }
    }

    update(deltaTime) {
        this.components.forEach(component => {
            if(component.isActive) {
                component.update(deltaTime);
            }
        });
    }

    draw() {
        if(this.renderer && this.renderer.isActive) this.renderer.draw(this.position);
    }
}