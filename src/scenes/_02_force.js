
/**
* use the force to get the light saber
* debe haber una fuerza que va en contrario a lo que uno presiona
* como la gravedad
* el objetivo es presionar repetidamente una tecla para 
* atraer el sable laser
*/

else if(screenIndex == 2){

  luke[0] -= 50*refreshRatio;
  var pressed = keyMap&keys[inputs.JUMP];
  if ( pressed && !luke[1]) {
    luke[0] += 10;
  }
  if (luke[0]<=0) {
    luke[0] = 0;
  }
  if (luke[0] >= 100) {
    console.log('win');
    graphics.fillStyle = '#f66';
  }else {
    graphics.fillStyle = '#fff';
  }
  luke[1] = pressed;


  graphics.fillRect(50, 200-luke[0], 10, luke[0]);

}
