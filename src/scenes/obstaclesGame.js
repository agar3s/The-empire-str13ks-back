
// first micro game avoid obstacles in your back
// a series of obstacles are presented to the player
/**

             O           O          O
X            O                      O
_____________________________________________________
*/

// read inputs
if (keyMap&keys[inputs.JUMP]) {
  luke[1] += -1 + Math.random() * 2;
}


// update

// draw?
graphics.clearRect(0, 0, canvas_width, canvas_height);
graphics.fillStyle = beatEvent?'#0ff':currentTick<4?'#0ff':'#fff';
graphics.fillRect(luke[0], luke[1], 20, 20);


