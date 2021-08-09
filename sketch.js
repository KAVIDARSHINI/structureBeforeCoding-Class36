
var db,position;
var form,game,player;
var gameState = 0;
var playerCount;

function setup(){
    db = firebase.database();

    createCanvas(500,500);
    game = new Game();
    game.getState();
    game.start();
}

function draw(){
    background("white");
   
}

