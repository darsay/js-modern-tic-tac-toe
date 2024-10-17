class Vector2D {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    magnitude() {
        return Math.sqrt(x**2 + y**2);
    }

    normalized() {
        if(this.magnitude == 0) {
            return {x: 0, y: 0};
        }

        return {
            x: this.x / this.magnitude,
            y: this.y / this.magnitude
        };
    }
}