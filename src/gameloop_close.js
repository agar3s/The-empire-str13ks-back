
  

  if(beatEvent && --countdown == 0) {
    console.log('change screen');
    changeScreen(nextScreen);
  }

  requestAnimationFrame(loop);
  if(DEBUG){}
}

loop(1);
