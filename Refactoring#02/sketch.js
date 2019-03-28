// This example is adapted from Learning Processing Example 5-3 by Daniel Shiffman
// http://www.learningprocessing.com
// Refactor the following code. Be sure the refactored version:
//  - is readable
//  - is able to work easily with any canvas size

function setup(){
  //All that happens in setup is the canvas is created.
  createCanvas(480, 270);
}

function draw(){
//Here we draw the background, set the stroke, draw lines to create 4 sections,
//and the the fill.
  background(255);

  stroke(0);

  line(240, 0, 240, 270);

  line(0, 135, 480, 135);

  noStroke();

  fill(0);


//In this part of draw, we decide what quadrant the mouse is in, using if statements we
//decide what the fill should be in each quadrant at any time.
  if (mouseX < 240 && mouseY < 135){
    rect(0,0,240,135);
  }

  else if (mouseX > 240 && mouseY < 135){
    rect(240,0,240,135);
  }

  else if (mouseX < 240 && mouseY > 135){
    rect(0,135,240,135);
  }

  else if (mouseX > 240 && mouseY > 135){
    rect(240,135,240,135);
  }
}