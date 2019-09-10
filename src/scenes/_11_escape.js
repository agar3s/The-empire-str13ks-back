
/**
* escape from the tree maze
* https://www.youtube.com/watch?v=jTcLiEI3Wdg
*/

else if(screenIndex == 11){

  // update
  var pos = maze[luke[1]][luke[0]];
  
  if(keyMap&keys[inputs.UP]&pos){
    if(!luke[2]) {
      luke[1]--;
      luke[2] = true;
    }
  }else {
    luke[2] = false;
  }
  
  if(keyMap&keys[inputs.DOWN]&pos){
    if(!luke[3]) {
      luke[1]++;
      luke[3] = true;
    }
  }else {
    luke[3] = false;
  }

  if(keyMap&keys[inputs.LEFT]&pos){
    if(!luke[4]) {
      luke[0]--;
      luke[4] = true;
    }
  }else {
    luke[4] = false;
  }
  if(keyMap&keys[inputs.RIGHT]&pos){
    if(!luke[5]) {
      luke[0]++;
      luke[5] = true;
    }
  }else {
    luke[5] = false;
  }

  // draw 
  graphics.save();
  graphics.translate(52, 30);
  graphics.fillStyle = '#f66';

  for (var j = 0; j < 7; j++) {
    for (var i = 0; i < 9; i++) {
      var val = maze[j][i];
      if (!(val&1)) {
        graphics.fillRect( i*maze_size, j*maze_size, maze_size, 1);
      }
      if (!(val&2)) {
        graphics.fillRect( i*maze_size, j*maze_size+maze_size-1, maze_size, 1);
      }
      if (!(val&4)) {
        graphics.fillRect( i*maze_size, j*maze_size, 1, maze_size);
      }
      if (!(val&8)) {
        graphics.fillRect( i*maze_size+maze_size-1, j*maze_size, 1, maze_size);
      }
    }
  }

  graphics.fillStyle = '#fff';
  graphics.fillRect( luke[0]*maze_size + 5, luke[1]*maze_size+5, 10, 10);

  graphics.restore();

}
