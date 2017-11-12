class Enemy {
  constructor() {

  }
}


<!-- <script src="./lib/saviors.js" type="text/javascript"> -->
<!-- //
// document.addEventListener('DOMContentLoaded', () => {
//
//   let canvas = document.getElementById('canvas')
//   let ctx = canvas.getContext('2d');
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
//   document.addEventListener("keydown", keyDownHandler, false)
//   document.addEventListener("keyup", keyUpHandler, false)
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
//   function box () {
//     ctx.beginPath()
//     ctx.fillStyle = 'green';
//     ctx.fillRect(x, y, 20, 20);
//     ctx.closePath();
//   }
//
//   function bullets() {
//     ctx.beginPath();
//     ctx.arc(bx, by, 10, 0, Math.PI * 2)
//     ctx.fillStyle ="blue";
//     ctx.fillStroke = "red";
//     ctx.fill();
//     ctx.closePath;
//   }
//
//   function draw() {
//     ctx.clearRect(0, 0, canvas.width, canvas.height)
//     box();
//
//
//     if (spacePressed) {
//       by = y;
//       bx = x;
//       bullets();
//     }
//
//     if (upPressed && y > 10) {
//       y = y - dx;
//     } else if (downPressed && y < canvas.height - 25) {
//       y = y + dy;
//     } else if (leftPressed && x > 10) {
//       x = x - dx;
//     } else if (rightPressed && x < canvas.width - 32) {
//       x = x + dx;
//     }
//     window.requestAnimationFrame(draw);
//   }
//
//   window.requestAnimationFrame(draw, 80)
//
// });

// </script> -->
