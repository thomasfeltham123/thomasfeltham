// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let tWidth = 1;
let start = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  //noLoop();
  rectMode(CORNERS);
}

function draw() {
  background(220);
  drawTerrain();

}

function drawTerrain(){
  //Do all the work to draw terrain once per frame.
  let xOff = start;
  //let highest = height;
  //let highestX = 0;
  for(let x=0; x<width; x+= tWidth){
    let curHeight = noise(xOff) * height;
    rect(x, curHeight, x + tWidth, height);
    xOff += 0.01
  }
  start += 0.01;
}
