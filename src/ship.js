import * as Vector from './vector.js';

export function Ship(x, y, dir, vel){
  this.x = x;
  this.y = y;
  this.dir = dir;
  this.v = {x: vel.x, y:vel.y};
}

Ship.prototype.update = function(deltaT){
    this.x += this.v.x * deltaT;
    this.y += this.v.y * deltaT;
    if(this.x < 0) this.x += 1200;
    if(this.y < 0) this.y += 700;
    this.x = this.x % 1200;
    this.y = this.y % 700;
}

Ship.prototype.render = function(context){
  var head = {x: this.x + 20 * Math.cos((this.dir)* Math.PI / 180), y: this.y + 20 * Math.sin((this.dir)* Math.PI / 180)};
  var back1 = {x: this.x + 20 * Math.cos((this.dir + 120)* Math.PI / 180), y: this.y + 20 * Math.sin((this.dir + 120)* Math.PI / 180)};
  var back2 = {x: this.x + 20 * Math.cos((this.dir + 240)* Math.PI / 180), y: this.y + 20 * Math.sin((this.dir + 240)* Math.PI / 180)};

  context.beginPath();
  context.moveTo(head.x, head.y);
  context.lineTo(back1.x, back1.y);
  context.lineTo(back2.x, back2.y);
  context.closePath();
  context.fillStyle = 'red';
  context.fill();
}

export function turnLeft(s){
  var dir = s.dir;
  if(dir > 0){
    dir -= 5;
  }
  else{
    dir = 355;
  }
  return dir;
}

export function turnRight(s){
  var dir = s.dir;
  if(dir < 360){
    dir += 5;
  }
  else{
    dir = 5;
  }
  return dir;
}

export function speedUp(s){
  var newVel = {x:0.05, y:0};
  var cons = Vector.rotate(newVel, s.dir);
  var v = Vector.add(s.v, cons);
  return v;
}

export function attenuation(s){
  var v = {x: s.v.x / 1.07, y: s.v.y / 1.07};
  return v;
}
