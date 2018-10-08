import * as Vector from './vector.js';


export function Bullet(s){
  var shipHead = {x: s.x + 20 * Math.cos((s.dir)* Math.PI / 180), y: s.y + 20 * Math.sin((s.dir)* Math.PI / 180)};
  this.x = shipHead.x;
  this.y = shipHead.y;
  this.v = Vector.rotate({x:0.3, y: 0}, s.dir);
}

Bullet.prototype.update = function(deltaT){
  this.x += this.v.x * deltaT;
  this.y += this.v.y * deltaT;
}

Bullet.prototype.render = function(context){
  var head1 = Vector.rotate({x: 0.5, y: 0}, 90);
  var head1Pos = {x: this.x + head1.x, y: this.y + head1.y};
  var head2 = Vector.rotate({x: 0.5, y: 0}, 270);
  var head2Pos = {x: this.x + head2.x, y: this.y + head2.y};
  var length = Vector.rotate({x: 5, y:0}, 180);

  context.beginPath();
  context.moveTo(head1Pos.x, head1Pos.y);
  context.lineTo(head2Pos.x, head2Pos.y);
  context.lineTo(head2Pos.x + length.x, head2Pos.y + length.y);
  context.lineTo(head1Pos.x + length.x, head1Pos.y + length.y);
  context.closePath();
  context.fillStyle = 'pink';
  context.fill();
}
