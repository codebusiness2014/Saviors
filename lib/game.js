const Aircraft = require("./aircraft");
const Enemies = require("./enemies");
// const Background = require('./background');
// const Bullets = require('./bullets');

class Game {
  constructor(ctx, canvas) {
    this.ctx = ctx;
    this.canvas = canvas;
    this.start = this.start.bind(this);
    this.render = this.render.bind(this);
    this.aircraft = new Aircraft(this.canvas.width/2, this.canvas.height - 30, 20, 20, this.ctx);
    this.internalClick = 0;
    this.enemy = new Enemies(100, 0, 20, 20, this.ctx);
    this.enemies = [];
  }

  start () {
    this.render();
  }

  render () {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.aircraft.draw();
    this.enemy.draw();
    this.enemy.move();
    this.enemy.bullets.forEach( bullet => {
      bullet.draw();
      bullet.enemyMove();
    });
    this.aircraft.bullets.forEach( bullet => {
      bullet.draw();
      bullet.move();
    });

    requestAnimationFrame(this.render);
  }
}

module.exports = Game;
