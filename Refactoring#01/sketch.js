//This initializes all variables used in the program.
let borderWidth, borderHeight, xRandom, yRandom;

function setup() {
  //This gives all variables a first value.
  createCanvas(windowWidth, windowHeight);

  borderWidth = 200; 
  borderHeight = 300; 
  xRandom = random(3, 8); 
  yRandom = random(3, 8);
} 

function draw() {
  //Here we call the function that makes the rectangle move around, 
  //draw the rectangle, and set the background.
  randomizeRect();
  background(80, 80, 80);
  rect(borderWidth, borderHeight, 250, 75);
}

function randomizeRect(){
  //This function does all of the math and comparisons to create a border for
  //the rectangle to bounce off of, making it move randomly. 
  borderWidth += xRandom; 
  borderHeight += yRandom;

  if (borderHeight >= height - 75||borderHeight <= 0){
    yRandom = yRandom*-1;
  }

  if (borderWidth >= width - 250||borderWidth <= 0){
    xRandom = xRandom*-1;
  }
}