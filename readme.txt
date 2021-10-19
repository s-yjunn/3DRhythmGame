CSC 252 Final Project

AUTHOR: Yujun Shen


GOAL:
This is an easy version of common music game, where the user press keys corresponding to the falling arrows and the game would evaluate how accurate the timing of the key press is.
There would be a score shown on the top right corner.
The game itself is infinitely long and the character can walk as far as the user wants. The background music is set to loop as well.


GAMEPLAY:
To start the game, click the START button at the top right corner.

As the background music plays, The arrows would fall down from the top, including UP, DOWN, LEFT, and RIGHT arrows.
When the arrow falls near to the receive box (the white arrow outline), press the corresponding key on keyboard. For example, UP arrows corresponds to UP key on the keyboard, and LEFT arrows corresponds to LEFT key on the keyboard.
The game would give a comment about the timing of the key pressing by calculating the distance between the arrow and the receive box when the key is pressed. The comment include "PERFECT!" for great timing, "GOOD" for okay timing, and "MISS" when the arrow already passed the receive box too far.
Each comment would correlate to a change in score. PERFECT = +20, GOOD = +10, and MISS = -15.

Whenever the user press a direction key, the character would perform a corresponding action (dancing) and move right. 
Everytime the camera is about to catch the view of the next stage, a new stage (with a ground and a backwall) would be added to the right of the current stage, and the previous stage would be deleted since it's no longer visible to user.

To pause the game, click the STOP button at the top right corner.
After pausing a game, the user may resume and continue with the game again by clicking the START button again.


NOTICE:
The game is only tested on Chrome on laptop. I'm not sure how it would perform in other browsers.
The game window is able to roughly adjust to different window sizes, but should not be played on windows that are too small.


COPYRIGHTS:
The character design, the images on the background walls, and the arrows + receive boxes are drew and created by myself (Yujun Shen).

The texture (including texture maps and bump maps) of the grounds are from the website http://www.cadhatch.com/free-bump-map-textures/4588167776

The background music is from a noncopyright music website with the following attribute information:
  Music: Zen Garden by Shane Ivers - https://www.silvermansound.com
  Licensed under Creative Commons Attribution 4.0 International License
  https://creativecommons.org/licenses/by/4.0/
  Music promoted by https://www.chosic.com/
