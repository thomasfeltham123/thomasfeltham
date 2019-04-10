// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let rectWidth = 10;
let rectHeight = 50;
let colors = ["#39FDE2", "#4BCAFC", "#044863", "#75AD32", "7F9169"];

function setup() {
  createCanvas(windowWidth, windowHeight);
  drawRowRGB(height *= 0.2);
  drawRowHSB(height/2);
  drawRowCustom(height*= 2);
}

function drawRowCustom(yPos){
colorMode(RGB);

let counter = 0;

  for(let x = 0; x < width; x += rectWidth){
    fill(colors[int(random(colors.length))]);
    rect(x, yPos, rectWidth, rectHeight);
  }
}
function drawRowHSB(yPos){
  colorMode(HSB, 360);

  for(let x = 0; x < width; x += rectWidth){
    fill(x%360, 280, 330);
    rect(x, yPos, rectWidth, rectHeight);
  }
}

function drawRowRGB(yPos){
  colorMode(RGB);

  for(let x = 0; x < width; x += rectWidth){
    fill(random(255), random(255), random(255));
    rect(x, yPos, rectWidth, rectHeight);
  }
}



