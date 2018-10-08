import Game from './game.js'


export function displayInterface(score, life, level){
  document.getElementById("ui").innerHTML =
  "Life: " + life + "<br />" +
  "Level: " + level + "<br />" +
  "Score: " + score;
}

export function start(game){
  var startButton = document.createElement("BUTTON");
  //displayInterface(0,3,1);
  startButton.onclick = function(){

    game.end = false;
    game.loop();
    if(game.end) start(game);

  }
  var t = document.createTextNode("Start!");
  startButton.appendChild(t);
  document.getElementById('ui').appendChild(startButton);
}
