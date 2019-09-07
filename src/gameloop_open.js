// src/gameLoop.js >>>

var timeEnd = 0;
var metronomeTime = 0;
var bpm = 120;
var beatInterval = 60.0 / bpm;
var sixteenthTime = beatInterval / 16;
var currentBeat = 0;
var currentTick = 0;
var tickEvent = false;
var beatEvent = false;

var lives = 0;
var level = 1;

function loop(time) {
  if(DEBUG){}
  var dt = time - timeEnd;
  refreshRatio = dt/1000;
  timeEnd = time;
  
  // metronome
  if (time > 2000) {
    metronomeTime += refreshRatio;
    var nextBeat = ~~((metronomeTime+refreshRatio/2)/sixteenthTime)
    tickEvent = nextBeat != 0;
    currentTick += nextBeat;
    beatEvent = currentTick >= 16;
    if (beatEvent) {
      currentTick = 0;
      currentBeat += 1;
    }

    if (nextBeat >= 1) {
      metronomeTime = metronomeTime - (nextBeat * sixteenthTime);
    }
  }

  graphics.clearRect(0, 0, canvas_width, canvas_height);


