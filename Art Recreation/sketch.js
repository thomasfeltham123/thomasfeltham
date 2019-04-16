// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let lineX = 650;
let lineY = 700;
let x = -100;
let y = -100;



function setup() {
  createCanvas(windowWidth, windowHeight);
  noLoop();
}

function draw() {
  background(220);

  drawArt();
}



function drawArt(){


  for(let i = 1; i <= 70; i ++){

    if(x >= width/2){//Right Side
      x = random(width/4, width/2);
    }

    if(x <= width/2){//Left Side
      x = random(width/2 * 1.5, 100);
    }

    //x = random(200, 600);
    y = random(1, 700);

    line(lineX, lineY, x, y);
    
    lineX = x;
    lineY = y;
  }

}
