class Bullet {
  constructor(x, y, width, height, ctx) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.ctx = ctx;
    this.draw = this.draw.bind(this);
    this.move = this.move.bind(this);
    this.image = new Image();
    this.image.src = 'images/space_bullets.png';
  }

  draw() {
    this.ctx.drawImage(this.image, 0, 0, 30, 30, this.x, this.y - 3, this.width , this.height);

    // this.ctx.fillStyle = "blue";
    // this.ctx.fillRect(this.x, this.y, this.width, this.height);
    this.move();
  }

  move() {
    if (this.y > 0) {
      this.y -= 3;
    }
  }
}

module.exports = Bullet;
