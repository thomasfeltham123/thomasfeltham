// Coloured Grid
// Thomas Feltham
// March 7, 2019
//
// Extra for Experts:
// - I made it so the colors are more aesthetric as they are only partially random.
// - Ive also made it so the window is full of squares, none are cut off by the edges.


let squareSize;

function setup() {
  createCanvas(windowWidth, windowHeight);

  squareSize = 45;

  noLoop();
}

function draw() {
background(0);
drawGrid();


}
//This changes the value of windowWidth and windowHeight based on the dimensions of the window
function windowResized(){
resizeCanvas(windowWidth, windowHeight);
}


//This creates the very first grid, and every other one as the sketch refreshes.
function drawGrid(){
for(let x=0; x<=width; x+=width/squareSize){
  for(let y=0; y<=height; y+=height/squareSize){
    fill(int(random(255)), 100, 200);
    rect(x, y, width/squareSize, height/squareSize);
    }
  }
}

function keyPressed(){
  draw();
}

//This controlls the size change based on which mouse button you press.
function mousePressed(){
    if(mouseButton === LEFT){
      if(squareSize > 1){
        squareSize += 5;
        draw();
      }
    }
    if(mouseButton === RIGHT){
      if(squareSize > 5){
        squareSize -= 5;
        draw();
      }
    }
  }
  
