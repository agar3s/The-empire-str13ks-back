
const GAME_TIME = 18;
const NEXT_SCREEN = 6;
const FLOOR = 120;
const MAX_Y_ACCELERATION = 5;
const gravity = 18;

// game data
var screenIndex = 0;
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
var laser = [];
var enemies = [];

var spawnTime = 0.5;


var levels = [1, 2, 4, 7, 9, 10, 12, 13];
// press counter game 2
var balance = 0;
var angle = 0;
var balance_2 = 0;
var angle_2 = 0;

// 9 X 7 maze
const mazeData = '531311959'+
                 '69c7ac6ac'+
                 '5a639c73a'+
                 '433be6339'+
                 '49595b59c'+
                 'ccce69c6a'+
                 'c6233a633';
var maze = [];
var maze_size = 24;
for (var i = 0; i < mazeData.length; i++) {
  var x = i%9;
  var y = ~~(i/9);
  if(x==0) maze.push([]);
  maze[y].push(15-parseInt(mazeData[i], 16));
}

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
    nextScreen = NEXT_SCREEN || levels[~~(Math.random()*levels.length)];
  }else if(screen == 1){
    luke = [100, FLOOR, 0, 0, false];
    generateObstacles(12, 200, 0.2);
    
  }else if(screen == 2){
    luke = [0, false, 0, 0, false];
  }else if(screen == 3){
    luke = [0, FLOOR, 0, 0, false];
  }else if(screen == 4){
    luke = [0, Math.random()>0.5?0.5:-0.5, 0, 0, 0];
  }else if(screen == 5){
    luke = [0, FLOOR, 0, 0, false];
  }else if(screen == 6){
    laser = [];
    luke = [0, 0, false, 0, 0];
  }else if(screen == 7) {
    enemies = [];
    for (var i = 0; i < 6; i++) {
      enemies.push([Math.PI/3*i, 0, 0, -20*i]);
    }
    laser = [];
    luke = [160, FLOOR, 0, 0, 0];
  }else if(screen == 8){
    luke = [0, FLOOR, 0, 0, false];
  }else if(screen == 9){
    luke = [1, FLOOR, 0, 0, false];
    generateObstacles(30, 250, 0.5);
  }else if(screen == 10){
    luke = [0, false, 0, 0, false];
  }else if(screen == 11){
    luke = [0, 6, false, false, false, false];
  }else if(screen == 12){
    luke = [0, FLOOR, 0, 0, true];
  }else if(screen == 13){
    luke = [0, FLOOR, 0, 0, false];
    enemies = [];
    laser = [];
  }
  screenIndex = screen;
}