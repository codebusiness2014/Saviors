class Background {
  constructor(ctx, canvas) {

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

  draw() {
    this.y += this.speed;
    this.ctx.drawImage(this.image, 0, this.y);
    this.ctx.drawImage(this.image, 0, this.y - this.canvas.height);

    if (this.y > this.canvas.height) {
      this.image.src = 'images/stars_bottom.png';
      this.y = 0;
    }
  }

  render () {
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
    this.draw();
    requestAnimationFrame(this.render);
  }

  start() {
    this.render();
  }
}

module.exports = Background;
