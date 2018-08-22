const Aircraft = require("./aircraft");
const Enemies = require("./enemies");
const BigEnemy = require("./bigEnemy");
const DeadAlien = require("./deadAlien");
const CollidedBullet = require("./collidedBullet");

class Game {
  constructor(
    ctx,
    canvas,
    ctxEnemy,
    canvasEnemy,
    ctxScore,
    canvasScore,
    ctxGameOver,
    canvasGameOver,
    score
  ) {
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
    this.aircraft = new Aircraft(
      this.canvas.width / 2,
      this.canvas.height - 30,
      50,
      50,
      this.ctx
    );
    this.internalClick = 0;
    this.enemy = new Enemies(100, 0, 20, 20, this.ctxEnemy);
    this.enemyTwo = new Enemies(100, 0, 20, 20, this.ctxEnemy);
    this.enemies = [this.enemy, this.enemyTwo];
    this.deadEnemies = [];
    this.CollidedBullet = [];

    this.enemiesRender = this.enemiesRender.bind(this);
    this.score = score;
    this.enemyCounter = 0;
    this.restarted = false;
    this.showInput = this.showInput.bind(this);
    this.showLeaderBoard = this.showLeaderBoard.bind(this);
    this.boss = 0;
  }

  start() {
    this.render();
  }

  enemiesRender() {
    let enemies = [];
    let deadEnemies = [];
    this.enemies.forEach(enemy => {
      if (enemy.health <= 0) {
        if (enemy.type === "boss") {
          this.score += 40;
        } else {
          this.score += 20;
          this.deadEnemies.push(
            new DeadAlien(
              enemy.x,
              enemy.y,
              enemy.height,
              enemy.width,
              enemy.ctx
            )
          );
        }
      }
      if (enemy.health > 0) {
        enemies.push(enemy);
        this.CollidedBullet.forEach(bullet => {
          bullet.draw();
        });
        enemy.draw();
        enemy.move();
      }
      this.aircraft.collidedWith(enemy);
      enemy.bullets.forEach(bullet => {
        bullet.draw();
        bullet.enemyMove();

        this.aircraft.collidedWith(bullet);
      });
    });

    this.deadEnemies.forEach(enemy => {
      if (!enemy.finished) {
        deadEnemies.push(enemy);
        enemy.draw();
      }
    });

    this.enemies = enemies;
    this.deadEnemies = deadEnemies;
  }

  showLeaderBoard() {
    let scores = firebase
      .database()
      .ref("/scores")
      .orderByChild("score");
    scores
      .once("value")
      .then(snapshot => {
        orderedScore = [];
        snapshot.forEach(child => {
          orderedScore.unshift(child.val());
        });
        orderedScore = orderedScore.slice(0, 5);
        $("#score-results").empty();
        $("#score-results").append(`<tr>
        <th>Rank</th>
        <th>Name</th>
        <th>Score</th>
        </tr>`);
        for (let i = 0; i < 5; i++) {
          let player = orderedScore[i];
          let key = player.name;
          let value = player.score;
          $("#score-results").append(
            `<tr class='firebase-score'><td>${i +
              1}</td><td>${key}</td> <td>${value}</td></tr>`
          );
        }
        orderedScore = [];
      })
      .catch(err => {
        console.log(err);
      });
  }

  showInput() {
    let inputLength = document.getElementById("inputName").value.length;
    if (inputLength > 0) {
      document.getElementById("inputName").value = "";
    }
    document.getElementById("inputName").type = "text";
    document.getElementById("inputName").addEventListener("keyup", e => {
      e.preventDefault();
      if (e.keyCode === 13) {
        const scores = firebase.database().ref("scores/");
        let name = document.getElementById("inputName").value;
        let score = this.score;
        let highScore = { name, score };
        scores.push(highScore);
        this.score = 0;
        this.showLeaderBoard();
        document.getElementById("inputName").type = "hidden";
      }
    });
  }

  render() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctxEnemy.clearRect(
      0,
      0,
      this.canvasEnemy.width,
      this.canvasEnemy.height
    );
    this.ctxScore.clearRect(
      0,
      0,
      this.canvasScore.width,
      this.canvasScore.height
    );
    this.ctxGameOver.clearRect(
      0,
      0,
      this.canvasGameOver.width,
      this.canvasGameOver.height
    );

    this.ctxScore.font = "60px Arial";
    this.ctxScore.fillStyle = "red";
    if (this.score < 100) {
      this.ctxScore.fillText(this.score, this.canvasScore.width / 2 - 10, 50);
    } else if (this.score < 1000) {
      this.ctxScore.fillText(this.score, this.canvasScore.width / 2 - 20, 50);
    } else {
      this.ctxScore.fillText(this.score, this.canvasScore.width / 2 - 30, 50);
    }

    this.internalClick += 1;
    this.boss += 1;

    if (this.aircraft.health <= 0) {
      this.ctxGameOver.font = "30px games";
      this.ctxGameOver.fillStyle = "red";
      this.ctxGameOver.fillText(
        "Game Over",
        this.canvasGameOver.width / 2 - 100,
        this.canvasGameOver.height / 2 - 50
      );
      this.ctxGameOver.font = "30px games";
      this.ctxGameOver.fillStyle = "red";
      this.ctxGameOver.fillText(
        "Play Again?",
        this.canvasGameOver.width / 2 - 100,
        this.canvasGameOver.height / 2
      );

      if (this.restarted === true) {
        this.showInput();
        this.restarted = false;
      }
    }
    if (this.aircraft.health > 0) {
      this.restarted = true;
      this.aircraft.draw();
      this.ctxScore.fillStyle = "#FF0000";
      this.ctxScore.fillRect(20, 20, (this.aircraft.health / 100) * 100, 25);
      this.ctxScore.strokeStyle = "red";
      this.ctxScore.strokeRect(20, 20, 100, 25);
    }

    if (this.boss === 800) {
      this.enemies.push(new BigEnemy(100, 100, 40, 40, this.ctxEnemy));
      this.boss = 0;
    }

    // if (this.score < 100) {
    // if (this.score <= 80) {
    if (this.internalClick === 200 && this.enemies.length < 10) {
      this.enemies.push(new Enemies(100, 100, 40, 40, this.ctxEnemy));
      this.enemies.push(new Enemies(100, 100, 40, 40, this.ctxEnemy));
      this.internalClick = 0;
    } else if (this.score <= 500) {
      if (this.internalClick === 150 && this.enemies.length < 20) {
        this.enemies.push(new Enemies(100, 100, 40, 40, this.ctxEnemy));
        this.enemies.push(new Enemies(100, 100, 40, 40, this.ctxEnemy));
        this.internalClick = 0;
      }
    } else if (this.score <= 1000) {
      if (this.internalClick === 100 && this.enemies.length < 30) {
        this.enemies.push(new Enemies(100, 100, 40, 40, this.ctxEnemy));
        this.enemies.push(new Enemies(100, 100, 40, 40, this.ctxEnemy));
        this.internalClick = 0;
      }
    }

    // } else if (this.enemies.length < 10) {
    //   if (this.internalClick === 150) {
    //     this.enemies.push(new Enemies(100, 100, 40, 40, this.ctxEnemy));
    //     this.enemies.push(new Enemies(100, 100, 40, 40, this.ctxEnemy));
    //     this.internalClick = 0;
    //   }
    // } else if (this.enemies.length < 10) {
    //   if (this.internalClick === 100) {
    //     this.enemies.push(new Enemies(100, 100, 40, 40, this.ctxEnemy));
    //     this.enemies.push(new Enemies(100, 100, 40, 40, this.ctxEnemy));
    //     this.internalClick = 0;
    //   }
    // } else if (this.enemies.length < 10) {
    //   if (this.internalClick === 50 && this.enemies.length < 40) {
    //     this.enemies.push(new Enemies(100, 100, 40, 40, this.ctxEnemy));
    //     this.enemies.push(new Enemies(100, 100, 40, 40, this.ctxEnemy));
    //     this.internalClick = 0;
    //   }
    // }

    this.enemiesRender();

    this.aircraft.bullets.forEach(bullet => {
      bullet.draw();
      bullet.move();
      this.enemies.forEach(enemy => {
        enemy.collidedWith(bullet);
        bullet.collidedWith(enemy);
      });
      if (bullet.collided === true) {
        this.CollidedBullet.push(
          new CollidedBullet(
            bullet.x,
            bullet.y,
            bullet.height,
            bullet.width,
            bullet.ctx
          )
        );
      }
    });

    requestAnimationFrame(this.render);
  }
}

module.exports = Game;
