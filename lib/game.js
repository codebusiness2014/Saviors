const Aircraft = require("./aircraft");
const Enemies = require("./enemies");

class Game {
  constructor(ctx, canvas, ctxEnemy, canvasEnemy, ctxScore, canvasScore) {
    this.ctx = ctx;
    this.ctxEnemy = ctxEnemy;
    this.ctxScore = ctxScore;
    this.canvas = canvas;
    this.canvasEnemy = canvasEnemy;
    this.canvasScore = canvasScore;
    this.start = this.start.bind(this);
    this.render = this.render.bind(this);
    this.aircraft = new Aircraft(this.canvas.width/2, this.canvas.height - 30, 20, 20, this.ctx);
    this.internalClick = 0;
    this.enemy = new Enemies(100, 0, 20, 20, this.ctxEnemy);
    this.enemyTwo = new Enemies(100, 0, 20, 20, this.ctxEnemy);
    this.enemies = [this.enemy, this.enemyTwo];

    this.enemiesRender = this.enemiesRender.bind(this);
    this.score = 0;

    this.renderScore = this.renderScore.bind(this);
  }

  start () {
    this.render();
  }

  renderScore() {
    this.ctxScore.font = "30px Arial";
    this.ctxScore.fillStyle = 'red';
    this.ctxScore.fillText(`Score: ${ this.score }`,10,50);
  }

  enemiesRender() {
    console.log(this.score);
    let newArr = [];
    this.enemies.forEach( enemy => {
      if (enemy.health === 0) {
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
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctxEnemy.clearRect(0, 0, this.canvasEnemy.width, this.canvasEnemy.height);
    this.ctxScore.clearRect(0, 0, this.canvasScore.width, this.canvasScore.height);

    this.ctxScore.font = "60px Arial";
    this.ctxScore.fillStyle = 'red';
    this.ctxScore.fillText(this.score,10,50);


    this.internalClick += 1;
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
