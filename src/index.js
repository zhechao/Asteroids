import Game from './game';
import * as Ui from './ui.js';

var game = new Game(1200, 700);
var text = "Hint: Use 'A' and 'D' to change direction and use 'W' to speed up. And you can use space bar to fire a laser to destory asteroids.";
document.getElementById("hint").innerHTML = text;

function handleKeydown(event) {
  switch(event.key) {
    case ' ':
      game.currentInput.space = true;
      break;
    case 'ArrowLeft':
    case 'a':
      game.currentInput.left = true;
      break;
    case 'ArrowRight':
    case 'd':
      game.currentInput.right = true;
      break;
    case 'ArrowUp':
    case 'w':
      game.currentInput.front = true;
      break;
  }
}
window.addEventListener('keydown', handleKeydown);

function handleKeyup(event) {
  switch(event.key) {
    case ' ':
      game.currentInput.space = false;
      break;
    case 'ArrowLeft':
    case 'a':
      game.currentInput.left = false;
      break;
    case 'ArrowRight':
    case 'd':
      game.currentInput.right = false;
      break;
    case 'ArrowUp':
    case 'w':
      game.currentInput.front = false;
      break;
  }
}
window.addEventListener('keyup', handleKeyup);
//game.loop();
if(game.end) Ui.start(game);
