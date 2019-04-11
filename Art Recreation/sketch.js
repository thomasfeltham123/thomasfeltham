// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let lineX = 650;
let lineY = 700;
let x = 0;
let y = 0;



function setup() {
  createCanvas(windowWidth, windowHeight);
  noLoop();
}

function draw() {
  background(220);

  drawArt();
}



function drawArt(){


  for(let i = 1; i <= 99; i ++){
    x = random(200, 600);
    y = random(1, 700);

    line(lineX, lineY, x, y);

    lineX = x;
    lineY = y;
  }

}