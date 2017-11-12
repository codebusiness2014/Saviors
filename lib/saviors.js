const Game = require("./game");
// import Game from './game';

document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('canvas');
  if (canvas.getContext) {
    const ctx = canvas.getContext('2d');
    new Game(ctx, canvas).start();
  }
});




























  // class Movement {
  //   constructor(x, y, width, height) {
  //     this.init = () => {
  //       this.x = x;
  //       this.y = y;
  //       this.width = width;
  //       this.height = height;
  //     };
  //   }
  // }
  //
  // class Aircraft extends Movement {
  //   constructor(x, y) {
  //     super();
  //     this.x = x;
  //     this.y = y;
  //   }
  //
  //   draw() {
  //     ctx.beginPath();
  //     ctx.fillStyle = 'green';
  //     ctx.fillRect(this.x, this.y, 30, 30);
  //     ctx.closePath();
  //   }
  // }
  //
  //
  // class Bullets extends Movement {
  //   constructor(x, y) {
  //     super();
  //     this.x = x;
  //     this.y = y;
  //   }
  //
  //   draw() {
  //     ctx.beginPath();
  //     ctx.arc(this.x, this.y, 10, 0, Math.PI * 2);
  //     ctx.fillStyle = "blue";
  //     // ctx.fillStroke = "red";
  //     ctx.fill();
  //     ctx.closePath();
  //   }
  // }
























  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  // // let canvas = document.getElementById('canvas');
  // //   let ctx = canvas.getContext('2d');
  //
  //
  //
  //   let x = 2;
  //   let y = 2;
  //   let dx = 12;
  //   let dy = 12;
  //   let bx = x;
  //   let by = y;
  //   let leftPressed = false;
  //   let upPressed = false;
  //   let rightPressed = false;
  //   let downPressed = false;
  //   let spacePressed = false;
  //   let center = (canvas.width - 10) / 2;
  //
  //
  //   document.addEventListener("keydown", keyDownHandler, false);
  //   document.addEventListener("keyup", keyUpHandler, false);
  //
  //   function keyDownHandler (e) {
  //     switch (e.keyCode) {
  //       case 65:
  //         leftPressed = true;
  //         break;
  //       case 87:
  //         upPressed = true;
  //         break;
  //       case 68:
  //         rightPressed = true;
  //         break;
  //       case 83:
  //         downPressed = true;
  //         break;
  //       case 32:
  //         spacePressed = true;
  //         break;
  //       default:
  //
  //     }
  //   }
  //
  //   function keyUpHandler (e) {
  //     switch (e.keyCode) {
  //       case 65:
  //         leftPressed = false;
  //         break;
  //       case 87:
  //         upPressed = false;
  //         break;
  //       case 68:
  //         rightPressed = false;
  //         break;
  //       case 83:
  //         downPressed = false;
  //         break;
  //       case 32:
  //         spacePressed = false;
  //         break;
  //       default:
  //
  //     }
  //   }
  //
  //   function bullets() {
  //     ctx.beginPath();
  //     ctx.arc(bx, by, 10, 0, Math.PI * 2);
  //     ctx.fillStyle ="blue";
  //     ctx.fillStroke = "red";
  //     ctx.fill();
  //     ctx.closePath();
  //   }
  //
  //   function draw() {
  //     ctx.clearRect(0, 0, canvas.width, canvas.height);
  //     let aircraft = new Aircraft(x, y);
  //     aircraft.draw();
  //
  //     let bullet = new Bullets(x, y);
  //     // debugger
  //     bullet.draw();
  //     // if (spacePressed) {
  //     //   bullet.draw();
  //     //   // bullet.fire(x);
  //     // }
  //
  //     if (upPressed && y > 10) {
  //       y = y - dx;
  //     } else if (downPressed && y < canvas.height - 25) {
  //       y = y + dy;
  //     } else if (leftPressed && x > 10) {
  //       x = x - dx;
  //     } else if (rightPressed && x < canvas.width - 32) {
  //       x = x + dx;
  //     } else if (spacePressed) {
  //       // debugger
  //       bullet.x = aircraft.x + 15;
  //       bullet.y = aircraft.y - 15;
  //     }
  //     window.requestAnimationFrame(draw);
  //   }
  //
  //   window.requestAnimationFrame(draw, 80);
  //
  // });