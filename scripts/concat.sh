#!/bin/bash
# original script from @gre 
# https://github.com/gre/behind-asteroids/blob/master/scripts/concat.sh
echo "// larga vida al #js13k! "
# pre
cat src/pre.js

if [ "$NODE_ENV" == "production" ]; then
  cat src/env_prod.js
else
  #cat lib/stats.min.js
  cat src/env_dev.js 
fi;

# definitions
#cat src/definitions.js

# libs
#cat lib/utils.js
#cat lib/jsfxr.js
#cat lib/audio.js
#cat lib/webgl.js
cat lib/keyboard.js

# shaders
#cd dist;
#for glsl in *.frag *.vert; do
#  name=`echo $glsl | tr '.' '_' | tr '[:lower:]' '[:upper:]'`
#  cat $glsl | ../scripts/wrapjs.sh $name
#  echo
#done
#cd ..;

# game
#cat src/generatedSprites.js
#cat src/theScript.js
#cat src/spriteLoader.js
#cat src/items.js
#cat src/fighter.js
#cat src/font.js
#cat src/tiles.js
#cat src/sounds.js
#cat src/collisionHandler.js

#cat src/backgroundEffects.js

#cat src/fighterController.js
#cat src/player.js

cat src/canvasRender.js
#cat src/webglRenderer.js
#cat src/effects.js
#cat src/scene_manager.js
#cat src/gameSetup.js
#cat src/gameHud.js
#cat src/levelUpScene.js

cat src/gameObjects.js
cat src/gameloop_open.js

cat src/scenes/obstaclesGame.js

cat src/gameloop_close.js
cat src/post.js
