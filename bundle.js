/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Game = __webpack_require__(1);
var Background = __webpack_require__(5);
// import Game from './game';

document.addEventListener('DOMContentLoaded', function () {
  var canvas = document.getElementById('canvas');
  var canvasBack = document.getElementById('background');
  var canvasEnemy = document.getElementById('enemy');
  if (canvas.getContext) {
    var ctx = canvas.getContext('2d');
    var ctxEnemy = canvasEnemy.getContext('2d');
    new Game(ctx, canvas, ctxEnemy, canvasEnemy).start();
  }
  if (canvasBack.getContext) {
    var _ctx = canvasBack.getContext('2d');
    new Background(_ctx, canvas).start();
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

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Aircraft = __webpack_require__(2);
var Enemies = __webpack_require__(4);

var Game = function () {
  function Game(ctx, canvas, ctxEnemy, canvasEnemy) {
    _classCallCheck(this, Game);

    this.ctx = ctx;
    this.ctxEnemy = ctxEnemy;
    this.canvas = canvas;
    this.canvasEnemy = canvasEnemy;
    this.start = this.start.bind(this);
    this.render = this.render.bind(this);
    this.aircraft = new Aircraft(this.canvas.width / 2, this.canvas.height - 30, 20, 20, this.ctx);
    this.internalClick = 0;
    this.enemy = new Enemies(100, 0, 20, 20, this.ctxEnemy);
    this.enemyTwo = new Enemies(100, 0, 20, 20, this.ctxEnemy);
    this.enemies = [this.enemy, this.enemyTwo];

    this.enemiesRender = this.enemiesRender.bind(this);
    this.score = 0;
  }

  _createClass(Game, [{
    key: "start",
    value: function start() {
      this.render();
    }
  }, {
    key: "enemiesRender",
    value: function enemiesRender() {
      var _this = this;

      console.log(this.enemies);
      var newArr = [];
      this.enemies.forEach(function (enemy) {
        if (enemy.healthj < 0) {
          _this.score += 20;
        }
        if (enemy.health > 0) {
          newArr.push(enemy);
        }
        enemy.draw();
        enemy.move();
        enemy.bullets.forEach(function (bullet) {
          bullet.draw();
          bullet.enemyMove();
        });
      });

      this.enemies = newArr;
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      this.internalClick += 1;
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.ctxEnemy.clearRect(0, 0, this.canvasEnemy.width, this.canvasEnemy.height);
      this.aircraft.draw();

      if (this.internalClick % 500 === 0 && this.enemies.length < 2) {
        this.enemies.push(new Enemies(100, 0, 20, 20, this.ctxEnemy));
      }

      this.enemiesRender();

      this.aircraft.bullets.forEach(function (bullet) {
        bullet.draw();
        bullet.move();
        _this2.enemies.forEach(function (enemy) {
          enemy.collidedWith(bullet);
          bullet.collidedWith(enemy);
        });
      });

      requestAnimationFrame(this.render);
    }
  }]);

  return Game;
}();

module.exports = Game;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Bullets = __webpack_require__(3);

var Aircraft = function () {
  function Aircraft(x, y, width, height, ctx) {
    _classCallCheck(this, Aircraft);

    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.ctx = ctx;
    this.bindMovements = this.bindMovements.bind(this);
    this.bindMovements();
    this.draw = this.draw.bind(this);

    this.upPressed = false;
    this.downPressed = false;
    this.leftPressed = false;
    this.rightPressed = false;
    this.spacePressed = false;

    this.image = new Image();
    this.image.src = 'images/Lightning.png';

    this.bullets = [];
    this.bulletClock = 0;

    this.count = 0;
    this.internalClick = 0;

    this.bulletConditional = this.bulletConditional.bind(this);

    this.collidedWith = this.collidedWith.bind(this);
    this.health = 100;
  }

  _createClass(Aircraft, [{
    key: 'draw',
    value: function draw() {
      this.bulletClock += 2;
      this.internalClick += 2;
      if (this.internalClick % 20 === 0) {
        if (this.count === 96) {
          this.count = 0;
        } else {
          this.count += 32;
        }
      }

      this.ctx.drawImage(this.image, this.count, 0, 30, 30, this.x - 11, this.y - 8, 40, 40);
      this.bulletConditional();

      if (this.upPressed && this.y > this.width) {
        this.y -= 15;
      } else if (this.downPressed && this.y < this.ctx.canvas.height - this.width - 10) {
        this.y += 15;
      } else if (this.leftPressed && this.x > this.width) {
        this.x -= 15;
      } else if (this.rightPressed && this.x < this.ctx.canvas.width - this.width - 15) {
        this.x += 15;
      } else if (this.spacePressed && this.bulletClock > 30) {
        this.bulletClock = 0;
        this.bullets.push(new Bullets(this.x - 5, this.y - 5, 15, 15, this.ctx));
        this.bullets.push(new Bullets(this.x + 20, this.y - 5, 15, 15, this.ctx));
      }
    }
  }, {
    key: 'bulletConditional',
    value: function bulletConditional() {
      var newArr = [];
      this.bullets.forEach(function (bullet, idx) {
        if (bullet.y > 0 && bullet.collided === false) {
          newArr.push(bullet);
        }
      });

      this.bullets = newArr;
    }
  }, {
    key: 'collidedWith',
    value: function collidedWith(object) {
      if (this.x < object.x + object.width && this.x + this.width > object.x && this.y < object.y + object.height && this.height + this.y > object.y) {
        this.health -= 2;
      }
    }
  }, {
    key: 'bindMovements',
    value: function bindMovements() {
      var _this = this;

      document.addEventListener('keydown', function (e) {
        switch (e.keyCode) {
          case 65:
            _this.leftPressed = true;
            break;
          case 87:
            _this.upPressed = true;
            break;
          case 68:
            _this.rightPressed = true;
            break;
          case 83:
            _this.downPressed = true;
            break;
          case 32:
            _this.spacePressed = true;
            break;
          default:
            console.log(e);
        }
      });

      document.addEventListener('keyup', function (e) {
        switch (e.keyCode) {
          case 65:
            _this.leftPressed = false;
            break;
          case 87:
            _this.upPressed = false;
            break;
          case 68:
            _this.rightPressed = false;
            break;
          case 83:
            _this.downPressed = false;
            break;
          case 32:
            _this.spacePressed = false;
            break;
          default:
        }
      });
    }
  }]);

  return Aircraft;
}();

module.exports = Aircraft;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Bullet = function () {
  function Bullet(x, y, width, height, ctx) {
    _classCallCheck(this, Bullet);

    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.ctx = ctx;
    this.draw = this.draw.bind(this);
    this.move = this.move.bind(this);
    this.image = new Image();
    this.image.src = 'images/space_bullets.png';
    this.collided = false;

    this.collidedWith = this.collidedWith.bind(this);
  }

  _createClass(Bullet, [{
    key: 'draw',
    value: function draw() {
      this.ctx.drawImage(this.image, 0, 0, 30, 30, this.x - 4, this.y - 10, this.width, this.height);
      this.move();
      this.enemyMove();
    }
  }, {
    key: 'collidedWith',
    value: function collidedWith(object) {
      if (this.x < object.x + object.width && this.x + this.width > object.x && this.y < object.y + object.height && this.height + this.y > object.y) {
        this.collided = true;
      }
    }
  }, {
    key: 'move',
    value: function move() {
      if (this.y > 0) {
        this.y -= 3;
      }
    }
  }, {
    key: 'enemyMove',
    value: function enemyMove() {
      if (this.y < this.ctx.canvas.height + 10) {
        this.y += 3;
      }
    }
  }]);

  return Bullet;
}();

module.exports = Bullet;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Bullets = __webpack_require__(3);

var Enemy = function () {
  function Enemy(x, y, width, height, ctx) {
    _classCallCheck(this, Enemy);

    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.ctx = ctx;
    this.draw = this.draw.bind(this);

    this.image = new Image();
    this.image.src = 'images/aliens.png';

    this.count = 0;

    this.internalClick = 0;
    this.x = Math.floor(Math.random() * this.ctx.canvas.width + 1);

    this.bullets = [];
    this.bulletConditional = this.bulletConditional.bind(this);
    this.movement = this.movement.bind(this);
    this.turnAllFalse = this.turnAllFalse.bind(this);
    this.moveUp = this.moveUp.bind(this);
    this.moveDown = this.moveDown.bind(this);
    this.moveLeft = this.moveLeft.bind(this);
    this.moveRight = this.moveRight.bind(this);

    this.up = false;
    this.down = false;
    this.left = false;
    this.right = false;

    this.health = 100;
  }

  _createClass(Enemy, [{
    key: 'draw',
    value: function draw() {
      console.log(this.health);
      this.bulletConditional();
      this.internalClick += 2;
      // console.log(this.internalClick);
      // if (this.internalClick % 40 === 0) {
      //   if (this.count === 96) {
      //     this.count = 0;
      //   } else {
      //     this.count += 32;
      //   }
      // }
      if (this.internalClick % 500 === 0) {
        this.internalClick = 0;
        this.bullets.push(new Bullets(this.x + 30, this.y - 35, 15, 15, this.ctx));
      }

      if (this.internalClick % 200 === 0) {
        this.movement();
      }
      // this.ctx.rect(this.x, this.y - 100, 60, 60);
      // this.ctx.fillRect(this.x, this.y - 100, 60, 60);
      this.ctx.drawImage(this.image, 0, 0, 50, 50, this.x, this.y - 100, 60, 60);
    }
  }, {
    key: 'move',
    value: function move() {
      if (this.y < this.ctx.canvas.height / 2) {
        this.y += 2;
      }

      if (this.y > 10) {
        if (this.left) {
          this.moveLeft();
        } else if (this.right) {
          this.moveRight();
        } else if (this.up) {
          this.moveUp();
        } else if (this.down) {
          this.moveDown();
        }
      }
    }
  }, {
    key: 'movement',
    value: function movement() {
      this.turnAllFalse();

      var moveArr = ["left", "up", "down", "right"];
      var choice = moveArr[Math.floor(Math.random() * moveArr.length)];
      switch (choice) {
        case "left":
          this.left = true;
          break;
        case "up":
          this.up = true;
          break;
        case "down":
          this.down = true;
          break;
        case "right":
          this.right = true;
          break;
        default:
      }
    }
  }, {
    key: 'collidedWith',
    value: function collidedWith(object) {
      if (this.x < object.x + object.width && this.x + this.width > object.x && this.y < object.y + object.height && this.height + this.y > object.y) {
        this.health -= 10;
      }
    }
  }, {
    key: 'turnAllFalse',
    value: function turnAllFalse() {
      this.left = false;
      this.right = false;
      this.up = false;
      this.down = false;
    }
  }, {
    key: 'moveLeft',
    value: function moveLeft() {
      if (this.x > 0) {
        this.x -= 2;
      }
    }
  }, {
    key: 'moveUp',
    value: function moveUp() {
      if (this.y > 0) {
        this.y -= 2;
      }
    }
  }, {
    key: 'moveDown',
    value: function moveDown() {
      if (this.y < this.ctx.canvas.height / 1.4) {
        this.y += 2;
      }
    }
  }, {
    key: 'moveRight',
    value: function moveRight() {
      if (this.x < this.ctx.canvas.width - 50) {
        this.x += 2;
      }
    }
  }, {
    key: 'bulletConditional',
    value: function bulletConditional() {
      var _this = this;

      // console.log(this.bullets);
      var newArr = [];
      this.bullets.forEach(function (bullet) {
        if (bullet.y < _this.ctx.canvas.height) {
          // this.bullets.splice(idx, 1);
          newArr.push(bullet);
        }
      });

      this.bullets = newArr;
    }
  }]);

  return Enemy;
}();

module.exports = Enemy;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Background = function () {
  function Background(ctx, canvas) {
    _classCallCheck(this, Background);

    this.ctx = ctx;
    this.canvas = canvas;
    this.start = this.start.bind(this);
    this.render = this.render.bind(this);

    this.image = new Image();
    this.image.src = 'images/test.png';

    this.speed = 3;
    this.y = 0;
    this.draw = this.draw.bind(this);
    this.draw();
  }

  _createClass(Background, [{
    key: 'draw',
    value: function draw() {
      this.y += this.speed;
      this.ctx.drawImage(this.image, 0, this.y);
      this.ctx.drawImage(this.image, 0, this.y - this.canvas.height);

      if (this.y > this.canvas.height) {
        this.image.src = 'images/stars_bottom.png';
        this.y = 0;
      }
    }
  }, {
    key: 'render',
    value: function render() {
      this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
      this.draw();
      requestAnimationFrame(this.render);
    }
  }, {
    key: 'start',
    value: function start() {
      this.render();
    }
  }]);

  return Background;
}();

module.exports = Background;

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map