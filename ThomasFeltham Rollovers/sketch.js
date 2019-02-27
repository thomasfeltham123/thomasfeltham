// RollOvers
// Thomas Feltham
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

//constrain(color1, 0, 255);
//constrain(color2, 0, 255);
//constrain(color2, 0, 255);

let quadrant = 1; //Top left = 1, top right = 2,
//bottom left = 3, bottom right = 4.
let color1 = 255;
let color2 = 255;
let color3 = 255;
let color4 = 255;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
}

function drawSquares(){
  rect(0,0, width/2, height/2);
  rect(width/2, 0, width/2, height/2);
  rect(0, height/2, width/2, height/2);
  rect(width/2, height/2, width/2, height/2);
}

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

function colorSquares(){
  if(quadrant === 1){
    color1 = 0
    fill(color1);
    rect(0,0, width/2, height/2);
  }else{
    color1 += 20;
    fill(color2);
    rect(0,0, width/2, height/2);
  }
  if(quadrant === 2){
    fill(0);
    rect(width/2, 0, width/2, height/2);
  }else{
    fill(255);
    rect(width/2, 0, width/2, height/2);
  }
  if(quadrant === 3){
    fill(0);
    rect(0, height/2, width/2, height/2);
  }else{
    fill(255);
    rect(0, height/2, width/2, height/2);
  }
  if(quadrant === 4){
    fill(0);
    rect(width/2, height/2, width/2, height/2);
  }else{
    fill(255);
    rect(width/2, height/2, width/2, height/2);
  }
}




function draw() {
  determineQuadrant();
  drawSquares();
  colorSquares();
  
  //print(quadrant);
  
}




if(mouseX<=width/2 && mouseY<=height/2){
  fill(0);
  rect(0,0, width/2, height/2);
}else{
  fill(255);
  rect(0,0, width/2, height/2);
}

if(mouseX>=width/2 && mouseY<=height/2){
  fill(0);
  rect(width/2, 0, width/2, height/2);
}else{
  fill(255);
  rect(width/2, 0, width/2, height/2);
}

if(mouseX<=width/2 && mouseY>=height/2){
  fill(0);
  rect(0, height/2, width/2, height/2);
}else{
  fill(255);
  rect(0, height/2, width/2, height/2);
}

if(mouseX>=width/2 && mouseY>=height/2){
  fill(0);
  rect(width/2, height/2, width/2, height/2);
}else{
  fill(255);
  rect(width/2, height/2, width/2, height/2);
}