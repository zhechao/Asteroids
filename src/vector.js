
export function add(a, b) {
  return { x: a.x + b.x, y: a.y + b.y};
}

export function subtract(a, b) {
  return {x: a.x - b.x, y: a.y - b.y}
}

export function dotProduct(a, b) {
  return a.x * b.x + a.y + b.y;
}

export function magnitude(a) {
  return Math.sqrt(a.x * a.x + a.y * a.y);
}

export function normalize(a) {
  var mag = magnitude(a);
  return {x: a.x / mag, y: a.y / mag}
}

export function rotate(a, angle) {
  return {
    x: a.x * Math.cos(angle * Math.PI / 180) - a.y * Math.sin(angle * Math.PI / 180),
    y: a.x * Math.sin(angle * Math.PI / 180) + a.y * Math.cos(angle * Math.PI / 180)
  }
}

export function perpendicular(a) {
  return {x: -a.y, y: a.x}
}

export function product(a, c){
  return {x: c * a.x, y: c* a.y};
}

export function radian(a, b){
  return Math.acos(dotProduct(a, b)/ (magnitude(a) * magnitude(b)));
}
