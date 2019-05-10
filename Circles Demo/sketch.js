// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


function setup() {
  createCanvas(windowWidth, windowHeight);
  ellipseMode(CENTER);
  noFill();
  noLoop();
}

function draw() {
  background(255);
  circles(width/2, height/3, height*0.6);
}

function circles(x, y, d){

  if(d > 1){
    ellipse(x, y, d, d,);
    circles(x-d/2, y, d/2);
    circles(x+d/2, y, d/2);
    circles(x, y+d/2, d/2);
  }

}