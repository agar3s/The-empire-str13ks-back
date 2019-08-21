// src/gameLoop.js >>>

var timeEnd = 0;
function loop(time) {
  if(DEBUG){}
  var dt = time - timeEnd;
  var refreshRatio = dt/1000;
  timeEnd = time;
  
  sceneManager_draw()
  sceneManager_update()

  requestAnimationFrame(loop);
  if(DEBUG){}
}

loop(1);
