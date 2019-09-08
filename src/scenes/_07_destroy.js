
/**
* use the millenial falcon to destroy imperial starships
*/

else if(screenIndex == 7){
  // read inputs
  if(keyMap&keys[inputs.LEFT]) {
    luke[0] -= 300*refreshRatio;
  } else if(keyMap&keys[inputs.RIGHT]) {
    luke[0] += 300*refreshRatio;
  }

  // fire
  var fire = keyMap&keys[inputs.JUMP];
  if(fire && !luke[1] && luke[2] < 0) {
    luke[2] = 0.18;
    // fireee
    laser.push([luke[0], 200]);
  }
  // update refresh ratio and coldowns
  luke[2] -= refreshRatio;
  luke[1] = fire;

  // enemies update
  graphics.fillStyle = '#666';
  for (var i = enemies.length - 1; i >= 0; i--) {
    enemies[i][0] += refreshRatio*Math.PI*0.8;
    enemies[i][1] = 120*Math.cos(enemies[i][0]) + 160 - 8;
    enemies[i][3] += refreshRatio*20;
    enemies[i][2] = 30*Math.sin(enemies[i][0])*Math.cos(-enemies[i][0]) + enemies[i][3] + 30;
    graphics.fillRect(enemies[i][1], enemies[i][2], 16, 10);
  }

  // luke lasers
  graphics.fillStyle = '#9f9';
  for (var i = laser.length - 1; i >= 0; i--) {
    laser[i][1] -= 200*refreshRatio;
    graphics.fillRect(laser[i][0], laser[i][1], 1, 20);
    if (laser[i][1]<=0) {
      laser.splice(i, 1);
      continue;
    }
    // check collisions
    for (var j = enemies.length - 1; j >= 0; j--) {
      if(laser[i][0]>enemies[j][1] && laser[i][0]<enemies[j][1] + 16 &&
        laser[i][1]+10>enemies[j][2] && laser[i][1]<enemies[j][2]+10) {
        enemies.splice(j, 1);
        laser.splice(i, 1);
        break;
      }
    }
  }

  graphics.fillStyle = '#fff';
  graphics.fillRect(luke[0]-10, 200, 20, 20);
 
}
