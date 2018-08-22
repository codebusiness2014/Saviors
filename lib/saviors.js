const Game = require("./game");
const Background = require("./background");

document.addEventListener("DOMContentLoaded", () => {
  let preGame = () => {
    const canvasStart = document.getElementById("start");
    if (canvasStart.getContext) {
      const ctxStart = canvasStart.getContext("2d");

      ctxStart.font = "30px games";
      ctxStart.fillStyle = "red";
      ctxStart.fillText(
        "Press R to Start!",
        canvasStart.width / 2 - 110,
        canvasStart.height / 2
      );
    }
  };

  preGame();
  document.addEventListener("keypress", e => {
    if (
      e.key === "r" &&
      document.getElementById("inputName").type === "hidden"
    ) {
      let score = 0;
      const canvasStart = document.getElementById("start");
      if (canvasStart.getContext) {
        const ctxStart = canvasStart.getContext("2d");
        ctxStart.clearRect(0, 0, canvasStart.width, canvasStart.height);
      }
      const canvas = document.getElementById("canvas");
      const canvasEnemy = document.getElementById("enemy");
      const canvasScore = document.getElementById("scoreBoard");
      const canvasGameOver = document.getElementById("gameOver");
      if (canvas.getContext) {
        const ctx = canvas.getContext("2d");
        const ctxEnemy = canvasEnemy.getContext("2d");
        const ctxScore = canvasScore.getContext("2d");
        const ctxGameOver = canvasGameOver.getContext("2d");
        new Game(
          ctx,
          canvas,
          ctxEnemy,
          canvasEnemy,
          ctxScore,
          canvasScore,
          ctxGameOver,
          canvasGameOver,
          score
        ).start();
      }
    }
  });
  const canvasBack = document.getElementById("background");
  if (canvasBack.getContext) {
    const ctx = canvasBack.getContext("2d");
    new Background(ctx, canvas).start();
  }
});
