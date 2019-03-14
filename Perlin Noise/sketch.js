// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let inc = 0.01; 
let start = 0;


function setup() {
  createCanvas(windowWidth, windowHeight);
  background(220);
  
}

function draw() {
  
  randomTerrain();

}

function randomTerrain(){
  background(255);
  fill(0);
  let xOff = start;
  for(let x=0; x<width; x++){
    let y = noise(xOff) * height;
    rect(x, y, 5, height - y);
    xOff += inc;
  }
  start += inc;
}