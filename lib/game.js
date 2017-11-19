const Aircraft = require("./aircraft");
const Enemies = require("./enemies");

class Game {
  constructor(ctx, canvas, ctxEnemy, canvasEnemy) {
    this.ctx = ctx;
    this.ctxEnemy = ctxEnemy;
    this.canvas = canvas;
    this.canvasEnemy = canvasEnemy;
    this.start = this.start.bind(this);
    this.render = this.render.bind(this);
    this.aircraft = new Aircraft(this.canvas.width/2, this.canvas.height - 30, 20, 20, this.ctx);
    this.internalClick = 0;
    this.enemy = new Enemies(100, 0, 20, 20, this.ctxEnemy);
    this.enemyTwo = new Enemies(100, 0, 20, 20, this.ctxEnemy);
    this.enemies = [this.enemy, this.enemyTwo];

    this.enemiesRender = this.enemiesRender.bind(this);
    this.score = 0;
  }

  start () {
    this.render();
  }

  enemiesRender() {
    console.log(this.enemies);
    let newArr = [];
    this.enemies.forEach( enemy => {
      if (enemy.healthj < 0) {
        this.score += 20;
      }
      if (enemy.health > 0) {
        newArr.push(enemy);
      }
      enemy.draw();
      enemy.move();
      enemy.bullets.forEach( bullet => {
        bullet.draw();
        bullet.enemyMove();
      });
    });

    this.enemies = newArr;
  }

  render () {

    this.internalClick += 1;
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctxEnemy.clearRect(0, 0, this.canvasEnemy.width, this.canvasEnemy.height);
    this.aircraft.draw();

    if (this.internalClick % 500 === 0 && this.enemies.length < 2) {
      this.enemies.push(new Enemies(100, 0, 20, 20 ,this.ctxEnemy));
    }

    this.enemiesRender();

    this.aircraft.bullets.forEach( bullet => {
      bullet.draw();
      bullet.move();
      this.enemies.forEach( enemy => {
        enemy.collidedWith(bullet);
        bullet.collidedWith(enemy);
      });
    });

    requestAnimationFrame(this.render);
  }
}

module.exports = Game;
