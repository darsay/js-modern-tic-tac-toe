const gameCanvas = document.getElementById("game-canvas");

gameCanvas.addEventListener("mousemove", (e) =>{
    const rect = gameCanvas.getBoundingClientRect();

    InputManager.mousePos = new Vector2D(
        e.clientX - rect.left,
        e.clientY - rect.top
    );
});

gameCanvas.addEventListener("mouseenter", () => InputManager.isMouseOver = true);

gameCanvas.addEventListener("mouseleave", () => InputManager.isMouseOver = false);


gameCanvas.addEventListener("mousemove", (e) =>{
    const rect = gameCanvas.getBoundingClientRect();

    InputManager.mousePos = new Vector2D(
        e.clientX - rect.left,
        e.clientY - rect.top
    )
});

gameCanvas.addEventListener("click", () => InputManager.executeInput("click"));
gameCanvas.addEventListener("keydown", (e) => InputManager.executeInput(`${e.key}-down`));
gameCanvas.addEventListener("keyup", (e) => InputManager.executeInput(`${e.key}-up`));
gameCanvas.addEventListener("keypress", (e) => InputManager.executeInput(`${e.key}-press`));


class InputManager {
    static isMouseOver = false;
    static mousePos = null;

    static inputCallbacks = {};

    static addInputCallback(inputId, callBack) {
        if (! this.inputCallbacks[inputId]) {
            this.inputCallbacks[inputId] = [];
        }

        this.inputCallbacks[inputId].push(callBack);
    }

    static executeInput(inputId) {
        const callBacks = this.inputCallbacks[inputId];
        if(callBacks) {
            callBacks.forEach(c => {
                c();
            });
        }
    }
}