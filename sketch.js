var canvas, background;

var gameState = 0;
var contestantCount;
var contestant;
var answer;
var game;
var form;
var database;
var correctAns;
function preload(){

}

function setup(){
    canvas = createCanvas(1000,500);
    database = firebase.database();
    game = new Game();
  game.getState();
  game.start();
}

function draw(){
   background("teal");
    if(contestantCount === 1){
        game.update(1);
      }
      if(gameState === 1){
        clear();
        game.play();
      }
}
