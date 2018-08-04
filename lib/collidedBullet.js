class CollidedBullet {
  constructor(x, y, width, height, ctx) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.ctx = ctx;
    this.draw = this.draw.bind(this);

    this.image = new Image();
    this.image.src = "images/explosion.png";

    this.row = 0;
    this.column = -2;

    this.internalClick = 0;

    this.animatedRow = 0;
    this.firstRowCounter = 0;
  }

  draw() {
    this.internalClick += 2;
    this.animatedRow += 4;

    if (this.animatedRow < 80) {
      this.ctx.drawImage(this.image, 0, 0, 50, 50, this.x, this.y - 10, 20, 20);
    }
  }
}

module.exports = CollidedBullet;
