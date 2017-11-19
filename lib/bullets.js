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
    this.collided = false;

    this.collidedWith = this.collidedWith.bind(this);
  }

  draw() {
    this.ctx.drawImage(this.image, 0, 0, 30, 30, this.x - 4, this.y - 10, this.width , this.height);
    this.move();
    this.enemyMove();
  }

  collidedWith(object) {
    if (this.x < (object.x + 30) + object.width && this.x + this.width > (object.x + 30) && this.y < object.y + object.height && this.height + this.y > object.y) {
      this.collided = true;
    }
  }

  move() {
    if (this.y > 0) {
      this.y -= 6;
    }
  }

  enemyMove() {
    if (this.y < this.ctx.canvas.height + 10) {
      this.y += 6;
    }
  }
}

module.exports = Bullet;
