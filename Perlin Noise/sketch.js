// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let xPosition = 1; 
let yPosition = 1;
function setup() {
  createCanvas(windowWidth, windowHeight);
  //noLoop();
}

function draw() {
  background(220);

  generateTerrain();
}

function generateTerrain(){
for(let i=0; i<=width; i++)
  fill(0);
  rect(xPosition, yPosition, 10, 1000);
  xPosition +=10;
  yPosition +=10;
}