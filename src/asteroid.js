
export function Asteroid(x, y, m, r, vx, vy){
  this.x = x;
  this.y = y;
  this.m = m;
  this.r = r;
  this.v = {x: vx, y: vy};
  return this;
}

Asteroid.prototype.update = function(deltaT){
  this.x += this.v.x * deltaT;
  this.y += this.v.y * deltaT;
  if(this.x < 0) this.x += 1200;
  if(this.y < 0) this.y += 700;
  this.x = this.x % 1200;
  this.y = this.y % 700;
}

Asteroid.prototype.render = function(context){
  context.beginPath();
  context.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
  context.fillStyle = 'white';
  context.closePath();
  context.fill();
}


export function createAsteroids(cont){
  var tmpAst = [];
  var coordinate = [];
  var i = 0;
  for(i=0; i < cont; i++){
    //console.log('a before', i, tmpAst);
    var x = Math.floor(Math.random()*1200);
    var y = Math.floor(Math.random()*700);
    while(coordinate.indexOf({x: x, y: y}) > -1) {
      x = Math.floor(Math.random()*1200);
      y = Math.floor(Math.random()*700);
    }
    coordinate.push({x: x, y: y});
    var r = Math.floor(Math.random()*20) + 10;
    var vx = Math.random() * (0.01 - 0.001) + 0.001;
    var vy = Math.random() * (0.01 - 0.001) + 0.001;
    //var coor = {a: x, b: y};
    //if(coordinate.indexOf(coor) > -1) continue;
    //coordinate[coordinate.length] = coor;
    var asteroid = new Asteroid(x, y, 20 * 4 * Math.pow(r / 10, 3) / 3, r, vx, vy);
    //console.log('pushing asteroid', i, asteroid)
    tmpAst.push(asteroid);

  }
  //console.log('asteroids', tmpAst)
  return tmpAst;
}
