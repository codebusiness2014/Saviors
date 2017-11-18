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
  }

  draw() {
    this.bulletConditional();
    this.internalClick += 2;
    // this.ctx.fillStyle = "green";
    // this.ctx.fillRect(this.x + 11, this.y, this.width, this.height);

    this.internalClick += 2;
    if (this.internalClick % 32 === 0) {
      if (this.count === 256) {
        this.count = 0;
      } else {
        this.count += 32;
      }
    }
    if (this.internalClick % 800 === 0) {
      this.bullets.push(new Bullets(this.x + 30, this.y - 35, 15, 15, this.ctx));
    }

    if (this.internalClick % 200 === 0) {
      this.movement();
    }

    this.ctx.drawImage(this.image, 0, 0, 50, 50, this.x, this.y - 100, 60, 60);
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
    console.log(choice);
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
    if (this.y < this.ctx.canvas.height / 2) {
      this.y += 2;
    }
  }

  moveRight() {
    if (this.x < this.ctx.canvas.width - 50) {
      this.x += 2;
    }
  }

  bulletConditional() {
    this.bullets.forEach( (bullet, idx) => {
      if (bullet.y < 0 || bullet.x < 0) {
        this.bullets.splice(idx, 1);
      }
    });
  }
}

module.exports = Enemy;
