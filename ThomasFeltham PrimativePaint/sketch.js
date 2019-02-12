// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let x = mouseX;
let y = mouseY;


function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
}

function draw() {
  textSize(30);
  textFont('Times New Roman');
  fill(255);
  text("Thomas G. Feltham", windowWidth-250, windowHeight-10);
  
}

keyTyped();

function keyTyped(){
  if(key === 'a'){
  fill(random(1, 255), random(1, 255), random(1, 255));
  rect(mouseX, mouseY, 55, 100);
  }
  else if(key === 's'){
    fill(random(1, 255), random(1, 255), random(1, 255));
    ellipse(mouseX, mouseY, 55, 55);
  }
  else if(key === 'd'){
    fill(random(1, 255), random(1, 255), random(1, 255));
    triangle(mouseX += 20, mouseY +=20 , mouseX -= 20, mouseY -= 20, mouseX +=20, mouseY -= 20);
  }

}


