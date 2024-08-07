# etch-a-sketch

This is a simple digital sketch pad, similar to an Etch-a-Sketch toy, created with an interactive square grid.

## Overview

This Etch-a-Sketch is made using HTMl, CSS, Flexbox, and vanilla Javascript for DOM manipulation.

When first loaded, the pad grid size is initialized to a 16x16 grid of white tiles, the Coloring Mode is set to ON, and the user can "paint" with the mouse cursor in blue.

<img src="initialized.png" width="400">

## Usage

To the left of the pad, there is a control panel with the following information and controls:

- Coloring Mode (initially set to "ON")
- input field for Size of Pad (initially set to 16)
- Button to set Size of Pad (input allows a number between 2 and 100 inclusive)
- Paintbrush color buttons: Black, Red, Green, Random, Eraser (white)
- Clear Pad Button

<img src="controlpanel.png" width="200">

### Coloring Mode

To toggle to the Coloring Mode, click anywhere on the screen. The Coloring Mode will indicate whether it is "ON" or "OFF". While Coloring Mode is ON, the mouse will paint continuously while hovering over the sketch pad. While Coloring Mode is OFF, the mouse/paintbrush is disabled and will not paint.

### Setting Pad Size

The input field just below the "Coloring Mode" is for generating the pad size. The user can input any number between 2 and 100 inclusive. If a user tries to input a number outside of this range, a message will appear below the "Set Size" button, stating that set a size from 2 to 100.

The greater the input number, the greater the number of pixels in the sketch pad, and therefore the smaller the paintbrush strokes appear. For example, if the user inputs "2", then the sketch pad generated will be a grid of 2 by 2.

<img src="twobytwogrid.png" width="400">

### Paintbrush Color Buttons

To change the paintbrush color, simply click on one of the buttons in the left-hand controls panel. The color options are black, red, green, random, and white (eraser).

Here is an example of the random color paintbrush with a grid size of 100x100:

<img src="randompaint100by100.png" width="400">

Another example below shows the red color paintbrush with a grid size of 32x32:

<img src="redpaint32by32.png" width="400">

### Clearing the Pad

To clear the sketch pad and start again with a clean slate, click on the button at the bottom of the control panel, marked "CLEAR PAD".

<img src="clearedpad.png" width="400">

## Acknowledgments

This is a project built for The Odin Project's Foundations Course:
https://www.theodinproject.com/lessons/foundations-etch-a-sketch
