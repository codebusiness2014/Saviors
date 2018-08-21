class DeadAlien {
  constructor(x, y, width, height, ctx) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.ctx = ctx;
    this.draw = this.draw.bind(this);

    this.image = new Image();
    this.image.src = "images/aliens.png";

    this.row = 0;
    this.column = -2;

    this.internalClick = 0;

    this.animatedRow = 0;
    this.firstRowCounter = 0;
  }

  draw() {
    this.internalClick += 2;
    this.animatedRow += 4;

    this.ctx.drawImage(
      this.image,
      this.row,
      280,
      50,
      50,
      this.x,
      this.y,
      50,
      50
    );

    if (this.animatedRow === 60) {
      this.animatedRow = 0;
      this.firstRowCounter += 1;
      this.firstRowCounter < 3 ? (this.row += 50) : (this.row += 65);
      this.column = 0;
    }
  }
}

module.exports = DeadAlien;
