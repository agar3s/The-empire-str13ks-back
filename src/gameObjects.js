

// game data
var screenIndex = 0;
var lives = 0;
var level = 1;

// game objects

// sprite[0] x
// sprite[1] y
var luke = [0, 0];

// main screen data
var countdown = 3;
var nextScreen = 1;


function changeScreen(screen) {
  countdown = 8
  nextScreen = 0;
  if (screen ==0) {
    countdown = 3;
    nextScreen = ~~(Math.random()*13) + 1;
    console.log('nextScreen', nextScreen);
  }else if(screen == 1){
    luke = [0, 0];
  }else if(screen == 2){
    luke = [0, 0];
  }else if(screen == 3){
    luke = [0, 0];
  }else if(screen == 4){
    luke = [0, 0];
  }else if(screen == 5){
    luke = [0, 0];
  }else if(screen == 6){
    luke = [0, 0];
  }else if(screen == 7){
    luke = [0, 0];
  }else if(screen == 8){
    luke = [0, 0];
  }else if(screen == 9){
    luke = [0, 0];
  }else if(screen == 10){
    luke = [0, 0];
  }else if(screen == 11){
    luke = [0, 0];
  }else if(screen == 12){
    luke = [0, 0];
  }else if(screen == 13){
    luke = [0, 0];
  }
  screenIndex = screen;
}