
/**
* dont fall during the training
* reference: https://www.youtube.com/watch?v=WBDB_cO7lpA
*/

else if(screenIndex == 4) {
  if(keyMap&keys[inputs.LEFT]) {
    if(luke[1] > 0) {
      luke[2] = -2;
    }
    luke[1] -= 1*refreshRatio
  } else if(keyMap&keys[inputs.RIGHT]) {
    if(luke[1] < 0) {
      luke[2] = 2;
    }
    luke[1] += 1*refreshRatio;
  }
  luke[2] += luke[1]*0.4;
  luke[0] += luke[2];

  if(luke[0] > 120 || luke[0] < -120){
    graphics.fillStyle = '#F00';
  } else {
    graphics.fillStyle = '#FFF';
  }

  graphics.fillRect(160, 100, luke[0], 20);
}
