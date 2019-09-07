
/**
* use the light saber to deflect laser beams
* reference: https://www.youtube.com/watch?v=x5J7omIClC0
* este funciona casi igual que las cajas de obstaculos, solo que
* debe tenerse el sable laser en una posicion fija
* y la velocidad debe ser mucho mayor
* Alto
* Bajo
*/

else if(screenIndex == 9) {
  // read inputs
  if(keyMap&keys[inputs.UP]) {
    luke[0] = -1;
  } else if(keyMap&keys[inputs.DOWN]) {
    luke[0] = 1;
  }


  graphics.fillStyle = '#f99';
  for (var i = obstacles.length - 1; i >= 0; i--) {
    obstacles[i][0] -= 520*refreshRatio;

    if (obstacles[i][0] > 80 && obstacles[i][0] < 100) {
      if((obstacles[i][1] == 90 && luke[0]==-1) || (obstacles[i][1] != 90 && luke[0]==1)){
        console.log('destroy it');
        obstacles.splice(i, 1);
        continue;
      }
    }
    if(obstacles[i][0] < 70) {
      console.log('dead!');
    }

    graphics.fillRect(obstacles[i][0], obstacles[i][1], 25, 1);
  }

  graphics.save();
  graphics.translate(80, 100);
  graphics.rotate(luke[0]*Math.PI/4);
  graphics.fillStyle = '#9f9';
  graphics.fillRect(0, 0, 30, 2);
  graphics.restore();
}
