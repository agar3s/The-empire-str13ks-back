
function applyGravity() {
  luke[1] += luke[3];
  luke[4] = luke[1] >= FLOOR;
  if (luke[4]) {
    luke[1] = FLOOR;
    luke[3] = 0;
  } else {
    luke[3] += gravity * refreshRatio;
    if (luke[3] >= MAX_Y_ACCELERATION) {
      luke[3] = MAX_Y_ACCELERATION;
    }
  }
}
