const Bullets = require('./bullets.js');

class Enemy {
  constructor(x, y, width, height, ctx) {

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
    this.x = Math.floor((Math.random() * this.ctx.canvas.width) + 1);

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
    this.shield = false;
  }

  draw() {
    this.bulletConditional();
    this.internalClick += 2;

    if (this.internalClick % 500 === 0) {
      this.internalClick = 0;
      this.bullets.push(new Bullets(this.x + 30, this.y - 35, 15, 15, this.ctx));
    }

    if (this.internalClick % 200 === 0) {
      this.movement();
    }
    this.ctx.drawImage(this.image, 0, -2, 50, 50, this.x, this.y - 100, 60, 60);
  }

  move() {
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

  movement() {
    this.turnAllFalse();

    const moveArr = ["left", "up", "down", "right"];
    let choice = moveArr[Math.floor(Math.random() * moveArr.length)];
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

  collidedWith(object) {
    if (this.x < object.x + object.width && this.x + this.width > object.x && this.y < object.y + object.height && this.height + this.y > object.y) {
      this.health -= 2;
      this.shield = true;
    }
  }

  turnAllFalse() {
    this.left = false;
    this.right = false;
    this.up = false;
    this.down = false;
  }

  moveLeft() {
    if (this.x > 0) {
      this.x -= 2;
    }
  }

  moveUp() {
    if (this.y > 0) {
      this.y -= 2;
    }
  }

  moveDown() {
    if (this.y < this.ctx.canvas.height / 1.4) {
      this.y += 2;
    }
  }

  moveRight() {
    if (this.x < this.ctx.canvas.width - 50) {
      this.x += 2;
    }
  }

  bulletConditional() {
    // console.log(this.bullets);
    let newArr = [];
    this.bullets.forEach( bullet => {
      if (bullet.y < this.ctx.canvas.height) {
        // this.bullets.splice(idx, 1);
        newArr.push(bullet);
      }
    });

    this.bullets = newArr;
  }
}

module.exports = Enemy;
