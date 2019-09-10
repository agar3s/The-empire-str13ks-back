
/**
* shoot the laser gun
*/

else if(screenIndex == 6){
  var fire = keyMap&keys[inputs.JUMP];
  if(fire && !luke[1] && luke[2]<=0) {
    luke[2] = 1.2;
    // fireee
    laser.push([-20, 120]);
  }
  luke[2] -= refreshRatio;
  if(luke[2]<=0) luke[2] = 0;

  luke[3] += Math.PI*refreshRatio;
  luke[4] = 120*Math.sin(luke[3]);

  graphics.fillStyle = '#faa';
  for (var i = 0; i < laser.length; i++) {
    laser[i][0] += 320*3*refreshRatio;
    graphics.fillRect(laser[i][0], laser[i][1], 40, 4);
  }

  graphics.fillStyle = '#fff';
  graphics.fillRect(280, luke[4] + 120, 20, 20);

  graphics.fillRect(20, 220, 10, -luke[2]*100);

}
