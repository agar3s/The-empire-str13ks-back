
// first micro game avoid obstacles in your back
// a series of obstacles are presented to the player
/**

             O           O          O
X            O                      O
_____________________________________________________
*/


else if(screenIndex == 1){

  // read inputs
  if (keyMap&keys[inputs.JUMP] && luke[4]) {
    luke[3] -= MAX_Y_ACCELERATION;
  }

  // update
  applyGravity();

  // translate objects
  graphics.fillStyle = '#f66';
  for (var i = 0; i < obstacles.length; i++) {
    obstacles[i][0] -= 320*refreshRatio;
    graphics.fillRect(obstacles[i][0], obstacles[i][1] - 20, 20, 20);
    // check collisions
    if (luke[0]+18>obstacles[i][0]+2 && luke[0]+2 <obstacles[i][0]+18 && 
        luke[1]+18>obstacles[i][1]+2 && luke[1]+2 <obstacles[i][1]+18) {
      console.log('loseee');
    }
  }

  // draw?
  graphics.fillStyle = beatEvent?'#0ff':currentTick<4?'#0ff':'#fff';
  graphics.fillRect(luke[0], luke[1] - 20, 20, 20);

}
