const Aircraft = require("./aircraft");
const Enemies = require("./enemies");

class Game {
  constructor(
    ctx,
    canvas,
    ctxEnemy,
    canvasEnemy,
    ctxScore,
    canvasScore,
    ctxGameOver,
    canvasGameOver
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

    this.enemiesRender = this.enemiesRender.bind(this);
    this.score = 0;
    this.enemyCounter = 0;
    this.restarted = false;
    this.showInput = this.showInput.bind(this);
    this.showLeaderBoard = this.showLeaderBoard.bind(this);
  }

  start() {
    this.render();
  }

  enemiesRender() {
    let newArr = [];
    this.enemies.forEach(enemy => {
      if (enemy.health === 0) {
        this.score += 20;
      }
      if (enemy.health > 0) {
        newArr.push(enemy);
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

    this.enemies = newArr;
  }

  showLeaderBoard() {
    $("#score-results").empty();
    $("#score-results").append(`<tr>
    <th>Rank</th>
    <th>Name</th>
    <th>Score</th>
    </tr>`);
    let orderedScore = [];
    let scores = firebase
      .database()
      .ref("/scores")
      .orderByChild("score");
    let topFive = scores
      .once("value")
      .then(snapshot => {
        snapshot.forEach(child => {
          orderedScore.unshift(child.val());
        });
        for (let i = 0; i < 5; i++) {
          let player = orderedScore[i];
          let key = player.name;
          let value = player.score;
          $("#score-results").append(
            `<tr class='firebase-score'><td>${i +
              1}</td><td>${key}</td> <td>${value}</td></tr>`
          );
        }
      })
      .catch(err => {
        console.log(err);
      });
  }

  showInput() {
    document.getElementById("inputName").type = "text";
    document.getElementById("inputName").addEventListener("keyup", e => {
      e.preventDefault();
      if (e.keyCode === 13) {
        const scores = firebase.database().ref("scores/");
        let name = document.getElementById("inputName").value;
        let score = this.score;
        let highScore = { name, score };
        scores.push(highScore);

        document.getElementById("inputName").type = "hidden";
        this.showLeaderBoard();
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

    if (this.score < 80) {
      if (this.internalClick === 400 && this.enemies.length < 10) {
        this.enemies.push(new Enemies(100, 100, 40, 40, this.ctxEnemy));
        this.enemies.push(new Enemies(100, 100, 40, 40, this.ctxEnemy));
        this.internalClick = 0;
      }
    } else if (this.score < 120) {
      if (this.internalClick === 250 && this.enemies.length < 20) {
        this.enemies.push(new Enemies(100, 100, 40, 40, this.ctxEnemy));
        this.enemies.push(new Enemies(100, 100, 40, 40, this.ctxEnemy));
        this.internalClick = 0;
      }
    } else if (this.score > 120) {
      if (this.enemies.length < 50) {
        this.enemies.push(new Enemies(100, 100, 40, 40, this.ctxEnemy));
        this.enemies.push(new Enemies(100, 100, 40, 40, this.ctxEnemy));
        this.internalClick = 0;
      }
    }

    this.enemiesRender();

    this.aircraft.bullets.forEach(bullet => {
      bullet.draw();
      bullet.move();
      this.enemies.forEach(enemy => {
        enemy.collidedWith(bullet);
        bullet.collidedWith(enemy);
      });
    });

    requestAnimationFrame(this.render);
  }
}

module.exports = Game;
