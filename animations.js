/**
 * Thie file contains variables and a method that update each frame in the 3D world to create animation. The character would perform different action according to user pressed key.
 */

// keyboard and counters
var keyboard = new KeyboardState();
var upCount = 0, downCount = 0, leftCount = 0, rightCount = 0, legCount = 0;

/**
 * Update frame based on user keyboard input
 */
function updateAnimation(){
  // scan keyboard
  keyboard.update();

  const steps = 50;

  // max values
  const maxHeight = 3;
  const handMove = 1.5;
  const headRotate = 1;
  const legRotate = 2.6;
  const downHeight = 0.8;
  const bodyRotate = 0.4;
  const characterRotate = 2;

  // Different animation based on keyboard input
  if (character != null){
    //character.rotation.y += 0.002;

    // If press 'up', the character jump up and move right
    if (upCount > 0){
      upCount--;
      var parabola = (0.25-(upCount/steps-0.5)*(upCount/steps-0.5));
      character.position.y = maxHeight * parabola;
      leftHand.position.x = -handMove * parabola;
      leftHand.position.y = handMove * parabola;
      rightHand.position.x = handMove * parabola;
      rightHand.position.y = handMove * parabola;
      head.rotation.x = -headRotate * parabola;
      character.position.x += 0.03;
      camera.position.x += 0.03;
      light.position.x += 0.03;
    }

    // If press 'down', the character goes down and move right
    else if (downCount > 0){
      downCount--;
      var parabola = (0.25-(downCount/steps-0.5)*(downCount/steps-0.5));
      leftLegPivot.rotation.z = -legRotate * parabola;
      rightLegPivot.rotation.z = legRotate * parabola;
      character.position.y = -downHeight * parabola;
      var handDist = handMove * parabola;
      leftHand.position.set(3 * handDist, -2.5 * handDist, 2.5 * handDist);
      rightHand.position.set(2 * handDist, handDist, -2 * handDist);
      head.rotation.x = headRotate * parabola;
      head.rotation.z = headRotate * parabola;
      body.rotation.x = bodyRotate * parabola;
      character.position.x += 0.03;
      camera.position.x += 0.03;
      light.position.x += 0.03;
    }

    // If press 'left', character jump and spin a circle and move right
    else if (leftCount > 0){
      leftCount--;
      var parabola = (0.25-(leftCount/steps-0.5)*(leftCount/steps-0.5));
      character.position.y = maxHeight * parabola;
      leftHand.position.x = -2 * handMove * parabola;
      rightHand.position.x = 2 * handMove * parabola;
      character.rotation.y = -(steps - leftCount) * 2 * Math.PI / steps;
      character.position.x += 0.03;
      camera.position.x += 0.03;
      light.position.x += 0.03;
    }

    // If press 'right', character rotate, move right, and rotate back
    else if (rightCount > 0){
      rightCount--;
      if (rightCount >= 75) {
        character.rotation.y += Math.PI / 50;
      }
      else if (legCount > 0){
        legCount--;
        var parabola = (0.25-(legCount/steps-0.5)*(legCount/steps-0.5));
        rightLegPivot.rotation.x = -legRotate * parabola;
        leftLegPivot.rotation.x = legRotate * parabola;
        leftHand.position.z = 3 * handMove * parabola;
        rightHand.position.z = -3 * handMove * parabola;
        character.position.x += 0.05;
        camera.position.x += 0.05;
        light.position.x += 0.05;
      }
      else {
        character.rotation.y += -Math.PI / 50;
      }
    }

    else{
      character.position.y = 0;
      character.rotation.y = 0;
      if ( keyboard.pressed('up') ) {
        // jump
        upCount = steps;
        console.log("Jump");
      }
      else if ( keyboard.pressed('down') ) {
        // go down
        downCount = steps;
        console.log("Down");
      }
      else if ( keyboard.pressed('left') ) {
        // move left
        leftCount = steps;
        console.log("Left (for audience)");
      }
      else if ( keyboard.pressed('right') ) {
        // move right
        rightCount = 2 * steps;
        legCount = steps;
        console.log("Right (for audience)");
      }
    }

    // When the camera move close to the edge of the plane and there is no connected plane to its right, create new connect ground to ensure that there is always a ground and a back wall in the camera
    if (camera.position.x > (50 * (rightStageCount - 1))){
      createNewStage();
    }
  }
}

