import * as Vector from './vector.js';
import * as Asteroid from './asteroid.js';

export function betweenAsteroid(a1, a2){
  var v1 = Vector.product(Vector.add(Vector.product(a1.v, a1.m - a2.m),Vector.product(a2.v, 2 * a2.m)),1 / (a1.m + a2.m));
  var v2 = Vector.product(Vector.add(Vector.product(a2.v, a2.m - a1.m),Vector.product(a1.v, 2 * a2.m)), 1 / (a1.m + a2.m));
  return [v1, v2];
}

export function asteroidBreak(a){
  //var r = Math.cbrt(Math.pow(oldAst.r, 3) / 2);
  var v1 = Vector.rotate(a.v, 90);
  var v2 = Vector.rotate(a.v, 270);
  console.log('newAst', [v1, v2]);
  return [v1, v2];
}

export function checkAstCollision(a1, a2){
  var dis = Math.sqrt((a1.x - a2.x) * (a1.x - a2.x) + (a1.y - a2.y) * (a1.y - a2.y));
  var newA1 = {x: a1.x + a1.v.x, y: a1.y + a1.v.y};
  var newA2 = {x: a2.x + a2.v.x, y: a2.y + a2.v.y};
  var furtherDis = Math.sqrt((newA1.x - newA2.x) * (newA1.x - newA2.x) + (newA1.y - newA2.y) * (newA1.y - newA2.y));
  if(dis < (a1.r + a2.r) && furtherDis < dis){
    return true;
  };
  return false;
}

export function checkBulletCollision(b,a){
  var dis = Math.sqrt((a.x - b.x) * (a.x - b.x) + (a.y - b.y) * (a.y - b.y));
  if(dis < a.r){
    return true
  }
  return false;
}

export function checkShipCollision(a,s){
  var disV = {x: a.x - s.x, y: a.y - s.y};
  var angleV2D = Vector.radian(a, s) * 180 / Math.PI;
  var realDis = 1000;

  var angleNeed = angleV2D % 120;
  if(angleNeed < 60){
    realDis = 10 / Math.cos((60 - angleNeed) * Math.PI / 180);
  }
  else if (angleNeed > 60) {
    realDis = 10 / Math.cos((angleNeed - 60) * Math.PI / 180);
  }
  else{
    realDis = 10;
  }

  var dis = Math.sqrt((a.x - s.x) * (a.x - s.x) + (a.y - s.y) * (a.y - s.y));
  if(dis < a.r + realDis){
    return true;
  }
  else{
    return false;
  }
}
