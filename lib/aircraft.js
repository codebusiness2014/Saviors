const Bullets = require('./bullets.js');

class Aircraft {
  constructor(x, y, width, height, ctx) {

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
    this.bulletConditional();

    this.collidedWith = this.collidedWith.bind(this);
    this.health = 100;
  }

  draw() {
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

    if (this.upPressed && this.y > this.width && this.spacePressed && this.bulletClock > 80 && this.bullets.length <= 6) {
      this.y -= 6;
      this.bulletClock = 0;
      this.bullets.push(new Bullets(this.x - 5, this.y - 5, 15, 15, this.ctx));
      this.bullets.push(new Bullets(this.x + 20, this.y - 5, 15, 15, this.ctx));
    } else if (this.downPressed && this.y < this.ctx.canvas.height - this.width - 10 && this.spacePressed && this.bulletClock > 80 && this.bullets.length <= 6) {
      this.y += 6;
      this.bulletClock = 0;
      this.bullets.push(new Bullets(this.x - 5, this.y - 5, 15, 15, this.ctx));
      this.bullets.push(new Bullets(this.x + 20, this.y - 5, 15, 15, this.ctx));
    }

    if (this.leftPressed && this.x > this.width && this.spacePressed && this.bulletClock > 30 && this.bullets.length <= 12) {
      this.x -= 6;
      this.bulletClock = 0;
      this.bullets.push(new Bullets(this.x - 5, this.y - 5, 15, 15, this.ctx));
      this.bullets.push(new Bullets(this.x + 20, this.y - 5, 15, 15, this.ctx));
    } else if (this.rightPressed && this.x < this.ctx.canvas.width - this.width - 15 && this.spacePressed && this.bulletClock > 30 && this.bullets.length <= 12) {
      this.x += 6;
      this.bulletClock = 0;
      this.bullets.push(new Bullets(this.x - 5, this.y - 5, 15, 15, this.ctx));
      this.bullets.push(new Bullets(this.x + 20, this.y - 5, 15, 15, this.ctx));
    }

    if (this.upPressed && this.y > this.width) {
      this.y -= 6;
    } else if (this.downPressed && this.y < this.ctx.canvas.height - this.width - 10) {
      this.y += 6;
    }
    if (this.leftPressed && this.x > this.width) {
      this.x -= 6;
    } else if (this.rightPressed && this.x < this.ctx.canvas.width - this.width - 15) {
      this.x += 6;
    } else if (this.spacePressed && this.bulletClock > 30) {
      this.bulletClock = 0;
      this.bullets.push(new Bullets(this.x - 5, this.y - 5, 15, 15, this.ctx));
      this.bullets.push(new Bullets(this.x + 20, this.y - 5, 15, 15, this.ctx));
    }
  }

  bulletConditional() {
    let newArr = [];
    this.bullets.forEach( (bullet, idx) => {
      if (bullet.y > 0 && bullet.collided === false) {
        newArr.push(bullet);
      }
    });

    this.bullets = newArr;
  }

  collidedWith(object) {
    if (this.x < object.x + object.width && this.x + this.width > object.x && this.y < object.y + object.height && this.height + this.y > object.y) {
      this.health -= 2;
    }
  }

  bindMovements() {
    document.addEventListener('keydown', e => {
      switch (e.keyCode) {
        case 65:
          this.leftPressed = true;
          this.rightPressed = false;
          break;
        case 87:
          this.upPressed = true;
          break;
        case 68:
          this.rightPressed = true;
          this.leftPressed = false;
          break;
        case 83:
          this.downPressed = true;
          break;
        case 32:
          this.spacePressed = true;
          break;
        default:
          break;
      }
    });

    document.addEventListener('keyup', e => {
      switch (e.keyCode) {
        case 65:
          this.leftPressed = false;
          break;
        case 87:
          this.upPressed = false;
          break;
        case 68:
          this.rightPressed = false;
          break;
        case 83:
          this.downPressed = false;
          break;
        case 32:
          this.spacePressed = false;
          break;
        default:
      }
    });
  }
}

module.exports = Aircraft;
