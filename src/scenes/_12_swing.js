
/**
* jump between the vines
* el movimiento parabolico esta pendiente...
*/

else if(screenIndex == 12){

  angle += Math.PI*refreshRatio;
  balance = Math.sin(angle)*Math.PI*0.35;

  if (keyMap&keys[inputs.JUMP] && luke[4]) {
    luke[3] = -0.2*MAX_Y_ACCELERATION;
    luke[4] = false;
    luke[2] = -balance*4;
  }


  if(luke[4]) {
    luke[0] = 80-80*Math.sin(balance);
    luke[1] = 20+80*Math.cos(balance);
  }else {
    applyGravity();
    luke[0] += luke[2];
  }

  graphics.save();
  graphics.translate(-luke[0]+100, 0);


  graphics.save();
  graphics.translate(80, 20);
  graphics.rotate(balance);
  graphics.fillStyle = '#fff';
  graphics.fillRect(-1, 0, 2, 80);
  graphics.restore();

  graphics.save();
  graphics.translate(240, 20);
  graphics.rotate(balance*0);
  graphics.fillStyle = '#fff';
  graphics.fillRect(-1, 0, 2, 80);
  graphics.restore();

  graphics.fillStyle = '#fff';
  graphics.fillRect(luke[0]-5, luke[1]-5, 10, 10);
  graphics.restore();
}
