
const GAME_TIME = 18;
const NEXT_SCREEN = 2;
const FLOOR = 120;
const MAX_Y_ACCELERATION = 5;
const gravity = 18;

// game data
var screenIndex = 2;
var lives = 0;
var level = 1;

// game objects

// sprite[0] x
// sprite[1] y
// sprite[2] vx
// sprite[3] vy
var luke = [100, FLOOR, 0, 0, false];

// main screen data
var countdown = 3;
var nextScreen = 0;
var refreshRatio = 0;

// objects translated in game 1
var obstacles = [];

// press counter game 2

function generateObstacles(n, distance, probs) {
  obstacles = [];
  for (var i = 0; i < n; i++) {
    obstacles.push([380 + distance*i, 90+(Math.random()>probs?1:0)*30]);
  }
}


function changeScreen(screen) {
  countdown = GAME_TIME;
  nextScreen = 0;
  if (screen == 0) {
    countdown = 3;
    nextScreen = NEXT_SCREEN || (~~(Math.random()*13) + 1);
  }else if(screen == 1){
    luke = [100, FLOOR, 0, 0, false];
    generateObstacles(12, 200, 0.2);
    
  }else if(screen == 2){
    luke = [0, false, 0, 0, false];
  }else if(screen == 3){
    luke = [0, FLOOR, 0, 0, false];
  }else if(screen == 4){
    luke = [0, FLOOR, 0, 0, false];
  }else if(screen == 5){
    luke = [0, FLOOR, 0, 0, false];
  }else if(screen == 6){
    luke = [0, FLOOR, 0, 0, false];
  }else if(screen == 7){
    luke = [0, FLOOR, 0, 0, false];
  }else if(screen == 8){
    luke = [0, FLOOR, 0, 0, false];
  }else if(screen == 9){
    luke = [1, FLOOR, 0, 0, false];
    generateObstacles(30, 250, 0.5);
  }else if(screen == 10){
    luke = [0, FLOOR, 0, 0, false];
  }else if(screen == 11){
    luke = [0, FLOOR, 0, 0, false];
  }else if(screen == 12){
    luke = [0, FLOOR, 0, 0, false];
  }else if(screen == 13){
    luke = [0, FLOOR, 0, 0, false];
  }
  screenIndex = screen;
}