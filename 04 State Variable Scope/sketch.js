// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let state = 0;
//0 stands for top, 1 stands for right, 2 stands for bottom, and 3 stands
//for left.
let rectSize = 30;
let x = 0;
let y = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);

  if (state === 0) {// on top, going right
    x += 5;
    if (x >= windowWidth - rectSize) state = 1;
  }
  else if (state === 1) {
    y += 5;
    if (y >= windowHeight - rectSize) state = 2;
  }
  else if(state === 2){
    x -= 5;
    if(x <= 0) state = 3;
  }
  else if(state === 3){
    y -= 5;
    if(y <= 0) state = 0;
  }
  rect(x, y, rectSize, rectSize);
}
