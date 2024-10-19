const canvas = document.getElementById("game-canvas");

const ctx = canvas.getContext("2d");

const gameEngine = new GameEngine(ctx);

const game = new TicTacToeGame(gameEngine);

game.start();