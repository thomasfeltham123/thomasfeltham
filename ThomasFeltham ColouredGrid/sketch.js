// Coloured Grid
// Thomas Feltham
// March 7, 2019
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let squareSize;

function setup() {
  createCanvas(windowWidth, windowHeight);

  squareSize = 10;

  noLoop();
}

function draw() {

drawGrid();

}




function drawGrid(){
for(var x=0; x<=width; x+=width/10){
  for(var y=0; y<=height; y+=height/10){
    fill(int(random(255)), 100, 200);
    rect(x, y, width/squareSize, height/squareSize);
    }
  }
}

function keyPressed(){
  draw();
}


function mousePressed(){
    if(mouseButton === LEFT){
      squareSize += 5;
      draw();
    }
    if(mouseButton === RIGHT){
      squareSize -+ 5;
      draw();
    }
  }
  
