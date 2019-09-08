
/**
* pull down the imperial walkers
* https://www.youtube.com/watch?v=d9qHDfvlmvY
* maybe just hit the button in the right moment?
*/

else if(screenIndex == 10){

  luke[0] -= 50*refreshRatio;
  var pressed = keyMap&keys[inputs.RIGHT];
  if ( pressed && !luke[1]) {
    luke[0] += 10;
  }
  if (luke[0]<=-50) {
    console.log('loose');
  }else if (luke[0]<0) {    
    graphics.fillStyle = '#f66';
  }else if (luke[0] >= 100) {
    console.log('win');
    graphics.fillStyle = '#f6f';
  }else {
    graphics.fillStyle = '#fff';
  }
  luke[1] = pressed;


  graphics.fillRect(75, 200, luke[0], 10);
}
