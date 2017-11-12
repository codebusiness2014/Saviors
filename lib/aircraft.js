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
    this.image.src = 'images/ships_three.png';

    this.bullets = [];

    this.bulletConditional = this.bulletConditional.bind(this);
  }

  draw() {
    // this.ctx.fillStyle = "green";
    // this.ctx.fillRect(this.x, this.y, this.width, this.height);

    this.ctx.drawImage(this.image, 0, 0, 30, 30, this.x - 7, this.y, 30, 30);
    this.bulletConditional();

    if (this.upPressed && this.y > this.width) {
      this.y -= 15;
    } else if (this.downPressed && this.y < this.ctx.canvas.height - this.width - 10) {
      this.y += 15;
    } else if (this.leftPressed && this.x > this.width) {
      this.x -= 15;
    } else if (this.rightPressed && this.x < this.ctx.canvas.width - this.width - 15) {
      this.x += 15;
    } else if (this.spacePressed) {
      this.bullets.push(new Bullets(this.x + 5, this.y, 5, 5, this.ctx));
    }

  }

  bulletConditional() {
    this.bullets.forEach( (bullet, idx) => {
      if (bullet.y < 0) {
        this.bullets.splice(idx, 1);
      }
    });
  }

  bindMovements() {
    document.addEventListener('keydown', e => {
      switch (e.keyCode) {
        case 65:
          this.leftPressed = true;
          break;
        case 87:
          this.upPressed = true;
          break;
        case 68:
          this.rightPressed = true;
          break;
        case 83:
          this.downPressed = true;
          break;
        case 32:
          this.spacePressed = true;
          break;
        default:
          console.log(e);
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
