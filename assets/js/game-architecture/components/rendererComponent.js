class RendererComponent extends Component {
    constructor(ctx) {
        super(ctx);
        this.type = "SpriteRenderer";
        this.isRenderer = true;
    }

    draw(position) {
        console.log("DRAW NOT DEFINED!");    
    }
}