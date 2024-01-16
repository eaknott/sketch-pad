# etch-a-sketch

This is a project for The Odin Project's Foundations Course:
https://www.theodinproject.com/lessons/foundations-etch-a-sketch

The task is to make a simple digital sketch pad or something similar to an Etch-a-Sketch toy by creating an interactive square grid in a webpage. 

This Etch-a-Sketch is to be made using HTMl, CSS, Flexbox, and plain Javascript to manipulate the DOM. 


HOW TO USE:

The sketch pad is initialized to paint in blue. 

To change the paintbrush color, simply click on one of the buttons in the left-hand controls panel. The color options are black, red, green, random, and white (eraser).

To clear the sketch pad and start with a clean slate, click on the button at the bottom of the controls panel, marked "CLEAR PAD".

At the top of the controls panel, there indicates a "Coloring Mode", initialized to "ON". Toggle the Coloring Mode between "ON" and "OFF" by clicking anywhere on the screen which is not a button or an input field. While Coloring Mode is "ON", the mouse will paint continuously while hovering over the sketch pad. While it is "OFF", the mouse/paintbrush is disabled.

The input field just below the "Coloring Mode" is for generating the pad size. The user can input any number between 2 and 100. The greater the number, the greater the number of pixels in the sketch pad, and the smaller the paintbrush strokes are. For example, if the user inputs "2", then the sketch pad generated will be a grid of 2 by 2. 