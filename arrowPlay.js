/**
 * This file contains variables and methods related to arrow game play,
 * including generating arrows and animating them, 
 * and checking user pressed key and calculating score correspondingly.
 */

// Types of possible arrows, count, score, and background music
//var arrowList = ["left", "up", "down", "right"];
var arrowList = [3, 3, 0, 0, 4, 4, 4, 0, 0, 2, 2, 2, 0, 0, 1, 1, 1, 0, 0, 4, 3, 4, 0, 0, 1, 2, 1, 0, 0, 3, 4, 3, 0, 0, 2, 1, 2, 0, 0, 0, 1, 0, 1, 0, 3, 0, 3, 0, 2, 2, 2, 0, 0, 0, 4, 4, 1, 0, 0, 3, 3, 2, 0, 0, 0];
var arrowCount = 0;
var score = 0;
var bgm;

// Two repeated interval: create arrows and animate arrows.
var arrowCreation;
var arrowAnimation;

/**
 * When the user click 'start' button, start the game
 */
function startGame(){
  arrowCreation = setInterval(function(){createNewArrow();}, 2100);
  animateArrows();
  bgm.play();
  document.getElementById("startbtn").disabled = true;
  document.getElementById("stopbtn").disabled = false;
}

/**
 * When the user click 'stop' button, stop the game;
 */
function stopGame(){
  clearInterval(arrowAnimation);
  clearInterval(arrowCreation);
  bgm.stop();
  document.getElementById("startbtn").disabled = false;
  document.getElementById("stopbtn").disabled = true;
}

/** 
 * Animate arrows at each route
 */
function animateArrows(){
  console.log("enter animate arrow");
  arrowAnimation = setInterval(function(){
    animateHelper("left");
    animateHelper("right");
    animateHelper("up");
    animateHelper("down");
  }, 50);
}

/**
 * Move every arrow in this route down once.
 * If the position of a arrow is below the receive box, 
 * print 'miss' on the score and subtract the score by 5.
 * Check if the user press a corresponding key.
 * Delete the arrow when it is missed or is validly hit by the user.
 */
function animateHelper(dir){
  var arrows = document.getElementById(dir + "Route").children;
  if (arrows.length == 0) return;

  var p = document.getElementById("message");

  // Loop through all arrows in the current route
  for (var i = arrows.length - 1; i >= 0; i--){
    var pos = parseInt(arrows[i].style.top.slice(0, -2));
    arrows[i].style.top = pos + 5 + "px";

    // If the position of the arrow goes passed the receive box, it is counted as 'miss'.
    if (pos + 5 > windowHeight - 80){
      arrows[i].remove();
      p.innerHTML = "MISS";
      p.style.left = windowWidth / 2 - 80 + "px";
      p.className = "font-effect-3d";
      p.style.display = "block";
      score -= 15;
      document.getElementById("scoreNum").innerHTML = score;
    }
  }

  // Check if the user press a corresponding key
  var msg = checkKeyboard(dir, arrows[0]);
  if (msg != ""){
    // If it's a valid hit, delete the arrow and print corresponding message
    arrows[0].remove();
    p.innerHTML = msg;
    if (msg == "PERFECT!"){
      p.style.left = windowWidth / 2 - 130 + "px";
      p.className = "font-effect-fire-animation";
    }
    else {
      p.style.left = windowWidth / 2 - 90 + "px";
      p.className = "font-effect-anaglyph";
    }
    p.style.display = "block";
  }
}

/**
 * If the user press a corresponding key, check the distance between the arrow and the receive box and determine whether it's a 'perfect' or a 'good' hit.
 */
function checkKeyboard(dir, arrow){
  if (keyboard.pressed(dir)){
    var pos = parseInt(arrow.style.top.slice(0, -2));
    var diff = Math.abs(windowHeight - 170 - pos);
    console.log(diff);

    // When a corresponding key is pressed, if the difference between the position of the arrow and the receive box is small, it's a 'perfect' hit.
    if (diff < 15){
      score += 20;
      document.getElementById("scoreNum").innerHTML = score;
      return "PERFECT!";
    }

    // If the difference is relatively acceptable but not small enough, it's a 'good' hit.
    else if (diff < 50){
      score += 10;
      document.getElementById("scoreNum").innerHTML = score;
      return "GOOD!";
    }
  }

  // If the user does not press a corresponding key, or if the difference is too big, it's not a valid hit.
  return "";
}

/**
 * Create an arrow into the corresponding route.
 */
function createNewArrow(){
  var i = arrowCount % arrowList.length;
  switch (arrowList[i]) {
    case 1: // left
      var img = document.createElement('img');
      img.src = "arrows/left.PNG";
      img.className = "arrows";
      img.style.top = "5px";
      document.getElementById('leftRoute').appendChild(img);
      break;
    case 2: // right
      var img = document.createElement('img');
      img.src = "arrows/right.PNG";
      img.className = "arrows";
      img.style.top = "5px";
      document.getElementById('rightRoute').appendChild(img);
      break;
    case 3: // up
      var img = document.createElement('img');
      img.src = "arrows/up.PNG";
      img.className = "arrows";
      img.style.top = "5px";
      document.getElementById('upRoute').appendChild(img);
      break;
    case 4: // down
      var img = document.createElement('img');
      img.src = "arrows/down.PNG";
      img.className = "arrows";
      img.style.top = "5px";
      document.getElementById('downRoute').appendChild(img);
      break;
  }

  arrowCount++;
}

/**
 * This object code is from W3School.
 * Create a sound object from a given source.
 */
function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.setAttribute("loop", true);
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function(){
        this.sound.play();
    }
    this.stop = function(){
        this.sound.pause();
    }    
}