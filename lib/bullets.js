class Bullet {
  constructor(x, y, width, height, ctx) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.ctx = ctx;
    this.draw = this.draw.bind(this);
    this.move = this.move.bind(this);
    this.spacePressed = false;
    this.bindMovements = this.bindMovements.bind(this);
    // this.draw();
    // this.move();
  }

  draw() {
    this.ctx.fillStyle = "blue";
    this.ctx.fillRect(this.x, this.y, this.width, this.height);
    this.move();
  }

  move() {
    if (this.y > 0) {
      this.y -= 3;
    } 
  }

  bindMovements() {
    document.addEventListener('keydown', e => {
      switch (e.keyCode) {
        case 32:
          this.spacePressed = true;
          break;
        default:

      }
    });
  }
}

module.exports = Bullet;
