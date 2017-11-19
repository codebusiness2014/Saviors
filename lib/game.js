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
    this.enemies = [this.enemy];

    this.RectsColliding = this.RectsColliding.bind(this);
  }

  start () {
    this.render();
  }

  RectsColliding(r1,r2){
        if(r1.x>r2.x+r2.w || r1.x+r1.w<r2.x || r1.y>r2.y+r2.h || r1.y+r1.h<r2.y) {
            alert("collided");
        }
    }

  render () {
    this.internalClick += 1;
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.aircraft.draw();

    if (this.internalClick % 500 === 0 && this.enemies.length < 2) {
      this.enemies.push(new Enemies(100, 0, 20, 20 ,this.ctx));
    }

    this.enemies.forEach( enemy => {
      enemy.draw();
      enemy.move();
      enemy.bullets.forEach( bullet => {
        bullet.draw();
        bullet.enemyMove();
      });
    });
    // if (this.enemy.health !== 0) {
    //   this.enemy.draw();
    //   this.enemy.move();
    // }

    // this.enemy.bullets.forEach( bullet => {
    //   bullet.draw();
    //   bullet.enemyMove();
    //   bullet.collidedWith(this.aircraft);
    //   this.aircraft.collidedWith(bullet);
    // });

    this.aircraft.bullets.forEach( bullet => {
      bullet.draw();
      bullet.move();
      this.enemy.collidedWith(bullet);
    });

    requestAnimationFrame(this.render);
  }
}

module.exports = Game;
