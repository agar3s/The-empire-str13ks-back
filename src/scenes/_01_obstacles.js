
// first micro game avoid obstacles in your back
// a series of obstacles are presented to the player
/**

             O           O          O
X            O                      O
_____________________________________________________
*/


else if(screenIndex == 1){

  // read inputs
  if (keyMap&keys[inputs.JUMP]) {
    luke[1] += -1 + Math.random() * 2;
  }


  // update

  // draw?
  graphics.fillStyle = beatEvent?'#0ff':currentTick<4?'#0ff':'#fff';
  graphics.fillRect(luke[0], luke[1], 20, 20);


}
