class Movement {
  constructor() {
    this.init = function(x, y, width, height) {
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
    };
  }
}

module.exports = Movement;
