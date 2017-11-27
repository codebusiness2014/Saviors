const Aircraft = require("./aircraft");
const Enemies = require("./enemies");

class Game {
  constructor(ctx, canvas, ctxEnemy, canvasEnemy, ctxScore, canvasScore, ctxGameOver, canvasGameOver) {
    this.ctx = ctx;
    this.ctxEnemy = ctxEnemy;
    this.ctxScore = ctxScore;
    this.ctxGameOver = ctxGameOver;
    this.canvas = canvas;
    this.canvasEnemy = canvasEnemy;
    this.canvasScore = canvasScore;
    this.canvasGameOver = canvasGameOver;
    this.start = this.start.bind(this);
    this.render = this.render.bind(this);
    this.aircraft = new Aircraft(this.canvas.width/2, this.canvas.height - 30, 20, 20, this.ctx);
    this.internalClick = 0;
    this.enemy = new Enemies(100, 0, 20, 20, this.ctxEnemy);
    this.enemyTwo = new Enemies(100, 0, 20, 20, this.ctxEnemy);
    this.enemies = [this.enemy, this.enemyTwo];

    this.enemiesRender = this.enemiesRender.bind(this);
    this.score = 0;

    // this.renderScore = this.renderScore.bind(this);
  }

  start () {
    this.render();
  }

  // renderScore() {
  //   this.ctxScore.font = "30px Arial";
  //   this.ctxScore.fillStyle = 'red';
  //   this.ctxScore.fillText(`Score: ${ this.score }`,10,50);
  // }

  enemiesRender() {
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
      this.aircraft.collidedWith(enemy);
      enemy.bullets.forEach( bullet => {
        bullet.draw();
        bullet.enemyMove();

        this.aircraft.collidedWith(bullet);
      });
    });

    this.enemies = newArr;
  }

  render () {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctxEnemy.clearRect(0, 0, this.canvasEnemy.width, this.canvasEnemy.height);
    this.ctxScore.clearRect(0, 0, this.canvasScore.width, this.canvasScore.height);
    this.ctxGameOver.clearRect(0, 0, this.canvasGameOver.width, this.canvasGameOver.height);


    this.ctxScore.font = "60px Arial";
    this.ctxScore.fillStyle = 'red';
    this.ctxScore.fillText(this.score,this.canvasScore.width / 2,50);

    this.internalClick += 1;


    if (this.aircraft.health <= 0) {

      this.ctxGameOver.font = "30px Arial";
      this.ctxGameOver.fillStyle = 'red';
      this.ctxGameOver.fillText("Game Over", this.canvasGameOver.width / 2 - 50, this.canvasGameOver.height / 2 - 50);
      this.ctxGameOver.font = "30px Arial";
      this.ctxGameOver.fillStyle = 'red';
      this.ctxGameOver.fillText("Play Again?", this.canvasGameOver.width / 2 - 50, this.canvasGameOver.height / 2);
    }
    if (this.aircraft.health > 0) {
      this.aircraft.draw();
      this.ctxScore.fillStyle="#FF0000";
      this.ctxScore.fillRect(20,20,(this.aircraft.health/100) * 100,25);
      this.ctxScore.strokeStyle = "red";
      this.ctxScore.strokeRect(20, 20, 100, 25);
    }


    if (this.internalClick % 500 === 0 && this.enemies.length < 5) {
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
