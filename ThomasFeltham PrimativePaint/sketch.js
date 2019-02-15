// Primative Paint
// Thomas F.
// February 15, 2019.
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let rectSize = 50;
let rectSpeed = -1;





function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
}

function draw() {

//This creates the moving rectangle.
  rect(windowWidth/2, windowHeight/2, rectSize, rectSize);
  if(rectSize > 100 || rectSize < 50){
    rectSpeed *= -1;
  }
  rectSize += rectSpeed;

//This creates the text and gives it color.
  fill(10, 100, 170);
  textSize(30);
  textFont('Times New Roman');
  text("Thomas G. Feltham", windowWidth - 250, windowHeight - 10);
  
}




//This function makes all of the required letters to do their jobs.
//A makes a rectangle, S makes a ellipse, D makes a triangle, and
// SPACE Clears everything.
function keyTyped() {
  if (key === 'a') {
    fill(random(1, 255), random(1, 255), random(1, 255));
    rect(mouseX, mouseY, 55, 100);
  }
  else if (key === 's') {
    fill(random(1, 255), random(1, 255), random(1, 255));
    ellipse(mouseX, mouseY, 55, 55);
  }
  else if (key === 'd') {
    fill(random(1, 255), random(1, 255), random(1, 255));
    triangle(mouseX += 20, mouseY += 20, mouseX -= 20, mouseY -= 20, mouseX += 20, mouseY -= 20);
  }
  else if (key === " ") {
    background(0);
  }
}


