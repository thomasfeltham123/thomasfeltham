// RollOvers
// Thomas Feltham
// Date Feb 28, 2019.
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let quadrant = 1; //Top left = 1, top right = 2,
//bottom left = 3, bottom right = 4.
let color1 = 255; //These values are used for the fade
let color2 = 255;
let color3 = 255;
let color4 = 255;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
}

function draw() {
  determineQuadrant();
  drawSquares();
  colorSquares();
}

//This function draws the four squares or "quadrants"
function drawSquares(){
  rect(0,0, width/2, height/2);
  rect(width/2, 0, width/2, height/2);
  rect(0, height/2, width/2, height/2);
  rect(width/2, height/2, width/2, height/2);
}

//This function determines which quadrant the mouse is in
function determineQuadrant(){
  if(mouseX<=width/2){//Left
    if(mouseY<=height/2) quadrant=1;//Top Left
  else quadrant = 3;//Bottom Left
  }
  else{
    if(mouseX>=width/2){//Right
      if(mouseY>=height/2) quadrant = 4;//Bottom Right
      else quadrant = 2;//Top Right
    }
  } 
}

//This function fills the quadrants black when the mouse is in it,
//and makes it fade back to white once the mouse leaves.
function colorSquares(){
  if(quadrant === 1){
    color1 = 0;
    fill(color1);
    rect(0,0, width/2, height/2);
  }else{
    color1 += 5;
    fill(color1);
    rect(0,0, width/2, height/2);
  }
  if(quadrant === 2){
    color2 = 0;
    fill(color2);
    rect(width/2, 0, width/2, height/2);
  }else{
    color2 += 5;
    fill(color2);
    rect(width/2, 0, width/2, height/2);
  }
  if(quadrant === 3){
    color3 = 0;
    fill(color3);
    rect(0, height/2, width/2, height/2);
  }else{
    color3 += 5
    fill(color3);
    rect(0, height/2, width/2, height/2);
  }
  if(quadrant === 4){
    color4 = 0;
    fill(color4);
    rect(width/2, height/2, width/2, height/2);
  }else{
    color4 += 5;
    fill(color4);
    rect(width/2, height/2, width/2, height/2);
  }
}