const Game = require("./game");
const Background = require('./background');
// import Game from './game';
// let gameStart = false;
//
// document.addEventListener('keypress', e => {
//   console.log(e);
//   console.log(gameStart);
//   if (e.key === 'r') {
//     gameStart = true;
//   }
// });

document.addEventListener('DOMContentLoaded', () => {

  // if (gameStart) {
    const canvas = document.getElementById('canvas');
    const canvasEnemy = document.getElementById('enemy');
    const canvasScore = document.getElementById('scoreBoard');
    if (canvas.getContext) {
      const ctx = canvas.getContext('2d');
      const ctxEnemy = canvasEnemy.getContext('2d');
      const ctxScore = canvasScore.getContext('2d');
      new Game(ctx, canvas, ctxEnemy, canvasEnemy, ctxScore, canvasScore).start();
    }
  // } else {
  //   const canvasStart = document.getElementById('start');
  //   if (canvasStart.getContext) {
  //     const ctxStart = canvasStart.getContext('2d');
  //
  //     ctxStart.font = "30px Arial";
  //     ctxStart.fillStyle = 'red';
  //     ctxStart.fillText("Click Space to Start!", canvasStart.width / 2 - 130,canvasStart.height / 2);
  //   }
  //
  // }
  const canvasBack = document.getElementById('background');
  if (canvasBack.getContext) {
    const ctx = canvasBack.getContext('2d');
    new Background(ctx, canvas).start();
  }

});
