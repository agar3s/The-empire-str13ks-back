
/**
* protect c3po
* 
*/

else if(screenIndex == 13) {
  // read inputs
  if(keyMap&keys[inputs.LEFT]) {
    luke[0] = 1;
  } else if(keyMap&keys[inputs.RIGHT]) {
    luke[0] = 0;
  }

  // fire
  var fire = keyMap&keys[inputs.JUMP];
  if(fire && !luke[1] && luke[2] < 0 && luke[3] < 1) {
    luke[2] = 0.1;
    if(luke[3] < 0) {
      luke[3] = 0;
    }
    luke[3] += 0.35;
    if(luke[3]>=1) {
      luke[2] = 0.8;
      luke[3] = 1.5; 
    }
    // fireee
    laser.push([160, -(luke[0] - 0.5)*2]);
  }
  // update refresh ratio and coldowns
  luke[2] -= refreshRatio;
  luke[1] = fire;
  luke[3] -= refreshRatio; 
  if(luke[3]<=0) {
    luke[3] = 0;
  }else if(luke[3]>=1) {
    luke[3] = 1;
  }
  
  // spawn enemy
  if (spawnTime< 0) {
    spawnTime = 0.6;
    var side = Math.random()>0.5?-10:330;
    enemies.push([side, side<0?1:-1]);
  }
  spawnTime -= refreshRatio;

  // enemies
  graphics.fillStyle = '#fff';
  for (var i = enemies.length - 1; i >= 0; i--) {
    enemies[i][0] += enemies[i][1]*refreshRatio*200;
    graphics.fillRect(enemies[i][0]-3, 100, 6, 40);

    
    if((160 - enemies[i][0])/enemies[i][1] < 0) {
      // should die
      enemies.splice(i, 1);
      continue;
    }

    for (var j = laser.length - 1; j >= 0; j--) {
      if(laser[j][1]/enemies[i][1] < 0 && (laser[j][0]-enemies[i][0])/laser[j][1] > 0 ) {
        enemies.splice(i, 1);
        laser.splice(j, 1);
        break;
      }
    }

  }

  graphics.fillStyle = luke[3]<0.7?'#fff':'#f66';
  graphics.fillRect(110, 200, luke[3]*100, 20);

  // draw laser
  graphics.fillStyle = '#f99';
  for (var i = laser.length - 1; i >= 0; i--) {
    laser[i][0] += 520*laser[i][1]*refreshRatio;
    graphics.fillRect(laser[i][0], 120, laser[i][1]*20, 1);
    if(laser[i][0]<-20 || laser[i][0]>340) {
      laser.splice(i, 1);
    }
  }

  // draw character
  graphics.save();
  graphics.translate(160, 120);
  graphics.rotate(Math.PI/4+ Math.PI*luke[0]);
  graphics.fillStyle = '#fff';
  graphics.fillRect(-10, -10, 20, 20);
  graphics.fillStyle = '#222';
  graphics.fillRect(2, -10, 8, 8);
  graphics.restore();


}
