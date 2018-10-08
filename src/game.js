import * as Vector from './vector.js';
import * as Ship from './ship.js';
import * as Asteroid from './asteroid.js';
import * as Bullet from './bullet.js';
import * as Collision from './collision.js';
import * as Ui from './ui.js';

export default class Game{

  constructor(width, height) {
    this._start = null;
    this.WIDTH = width;
    this.HEIGHT = height;

    this.fireCD = 0;
    this.bullets = [];
    this.ship = new Ship.Ship(width / 2, height / 2, 0, {x: 0, y: 0});
    this.level = 1;
    this.life = 3;
    this.score = 0;
    this.end = true;
    this.asteroids = Asteroid.createAsteroids(5 + 5 * this.level);
    //console.log(this.asteroids)

    this.boom = new Audio('boom.mp3');
    this.laser = new Audio('laser.mp3');

    this.currentInput = {
      space: false,
      front:false,
      left: false,
      right: false,
    }
    this.priorInput = {
      space: false,
      front: false,
      left: false,
      right: false,
    }

    // Set up the back buffer
    this.backBuffer = document.createElement('canvas');
    this.backBuffer.width = this.WIDTH;
    this.backBuffer.height = this.HEIGHT;
    this.backBufferCtx = this.backBuffer.getContext('2d');

    // Set up the screen buffer
    this.screenBuffer = document.createElement('canvas');
    this.screenBuffer.width = this.WIDTH;
    this.screenBuffer.height = this.HEIGHT;
    this.screenBufferCtx = this.screenBuffer.getContext('2d');
    document.body.append(this.screenBuffer);
  }


  update(elapsedTime) {
    // TODO: Update game state
    if(this.currentInput.space && !this.priorInput.space && this.fireCD <= 0) {
      this.bullets.push(new Bullet.Bullet(this.ship));
      this.fireCD = 1000;
      this.laser.play();
    }
    if(this.currentInput.left) {
      this.ship.dir = Ship.turnLeft(this.ship);
    }
    if(this.currentInput.right) {
      this.ship.dir = Ship.turnRight(this.ship);
    }
    if(this.currentInput.front){
      this.ship.v = Ship.speedUp(this.ship);
    }
    else{
      if(Vector.magnitude(this.ship.v) > 0){
        this.ship.v = Ship.attenuation(this.ship);
      }
    }
    this.ship.update(elapsedTime);

    this.bullets.forEach((bullet, index) => {
      bullet.update(elapsedTime);
      if(bullet.y <= 0 || bullet.y >= 700 || bullet.x <= 0 || bullet.x >= 1200) this.bullets.splice(index, 1);
      for(var i = 0; i < this.asteroids.length; i++){
          if(Collision.checkBulletCollision(bullet,this.asteroids[i]) && (this.asteroids[i].m) > 50){
            this.bullets.splice(index, 1);
            var vs = Collision.asteroidBreak(this.asteroids[i]);
            console.log('old mass', this.asteroids[i].m);
            this.asteroids[i].m = this.asteroids[i].m / 2;
            var newR = Math.cbrt(Math.pow(this.asteroids[i].r, 3) / 2);
            this.asteroids[i].r = Math.cbrt(Math.pow(this.asteroids[i].r, 3) / 2);
            this.asteroids[i].v = vs[0];
            console.log('newvel', vs[0]);
            console.log('new coor', this.asteroids[i]);
            var newAst = new Asteroid.Asteroid(this.asteroids[i].x, this.asteroids[i].y, this.asteroids[i].m / 2, newR,vs[1].x, vs[1].y);
            this.asteroids.push(newAst);
            this.score += 50;
          }
          if(Collision.checkBulletCollision(bullet,this.asteroids[i]) && (this.asteroids[i].m) <= 50){
            this.bullets.splice(index, 1);
            this.asteroids.splice(i,1);
            //play destoryed sound
            this.boom.play();
            this.score += 200;

            if(this.asteroids.length === 0){
              this.level++;
              this.asteroids = Asteroid.createAsteroids(5 + 5 * this.level);
            }

          }
      }
    });

    //console.log(this.asteroids);

    this.asteroids.forEach((asteroid, index) => {
      //console.log(asteroid);
      asteroid.update(elapsedTime);
      if(Collision.checkShipCollision(asteroid, this.ship)){
        this.life--;
        this.asteroids.splice(index, 1);
        if(this.life === 0) this.end = true;
        if(this.asteroids.length === 0){
          this.level++;
          this.asteroids = Asteroid.createAsteroids(5 + 5 * this.level);
        }
      }
      for(var i = 0; i < this.asteroids.length; i++){
        var dis = Math.sqrt(Math.pow(asteroid.x - this.asteroids[i].x, 2) + Math.pow(asteroid.y - this.asteroids[i].y, 2));
        if(asteroid === this.asteroids[i]) continue;
          if(Collision.checkAstCollision(asteroid, this.asteroids[i])){
            var newVel = Collision.betweenAsteroid(asteroid,this.asteroids[i]);
            asteroid.v = newVel[0];
            this.asteroids[i].v = newVel[1];
          }
      }
    });
  }

  render(elapsedTime) {
    // Clear the back buffer
    this.backBufferCtx.fillStyle = 'black';
    this.backBufferCtx.fillRect(0,0,this.WIDTH, this.HEIGHT);

    // TODO: Render game
    this.ship.render(this.backBufferCtx);

    this.asteroids.forEach((asteroid) => {
      //console.log(asteroid);
      asteroid.render(this.backBufferCtx);
    });

    this.bullets.forEach((bullet) => {
      //console.log(bullet);
      bullet.render(this.backBufferCtx);
    });

  }

  loop(timestamp) {
    var elapsedTime = this._frame_start ? timestamp - this._frame_start : 0;
    this.update(elapsedTime);
    this.render(elapsedTime);
    if(this.fireCD > 0) this.fireCD -= elapsedTime;
    Ui.displayInterface(this.score, this.life, this.level);
    this.priorInput = JSON.parse(JSON.stringify(this.currentInput));
    this.screenBufferCtx.drawImage(this.backBuffer, 0, 0);
    this._frame_start = timestamp;
    if(!this.end) window.requestAnimationFrame((timestamp) => {this.loop(timestamp)});



  }
}
