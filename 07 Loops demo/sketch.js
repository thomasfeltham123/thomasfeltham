// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let x = 150;
let y = 150;
let colors = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  color.Push(color(255, 0, 100));
  color.Push(color(25, 100, 10));
  color.Push(color(255, 0, 100));
  color.Push(color(25, 0, 100));
  color.Push(color(255, 90, 100));

}

function drawTargetWhile(){
let diameter = 200;
let counter = 0;

while(counter < 5){
  ellipse(width/2, height/2, diameter, diameter);
  diameter -= 42;
  counter ++;
}

}

function drawTargetFor(){

  for(i=5; i>0; i--){
    ellipse(x, y, i*40, i*40)

  }
}

function draw() {
  background(220);
  //drawTargetWhile();
  drawTargetFor();
}
