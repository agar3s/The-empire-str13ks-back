// src/scene_manager.js >>>
var sceneManager_scenes = []

function sceneManager_add (scene) {
  scene.c();
  sceneManager_scenes.push(scene);
}

function sceneManager_update(time, dt) {
  for (var i = 0; i < sceneManager_scenes.length; i++) {
    sceneManager_scenes[i].u(time, dt);
  }
}
function sceneManager_draw() {
  for (var i = 0; i < sceneManager_scenes.length; i++) {
    sceneManager_scenes[i].d();
  }
}

/**
 * Some class, initialized with a value.
 * @constructor
 */
function Scene() {

  // create
  this.c = function() {

  };
  
  // update
  this.u = function(time, dt) {

  }

  // draw
  this.d = function() {

  }
}

let sceneA = new Scene();
sceneManager_add(sceneA);
