// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let x = 45;
let xSpeed = 6;

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
}

function draw() {
  background(345, 98, 1000);
  fill(255, 204, 212);
  ellipse(x, 46, 55, 55);
  fill(255, 201, 0);
  rect(mouseX, mouseY, 100, 120);

  x += xSpeed;
  if(x > windowwidth) x = -30;
  
}
