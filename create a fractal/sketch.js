// Create a Fractal
// Thomas Feltham
// May 28th, 2019
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
//I made it 3D 

//My setup function creates the canvas
function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
}

//My draw function stes the background color, sets a consant seed,
//rotates the whole thing, and calls my makeFractal function
function draw() {
  background(0);
  push();
  randomSeed(10);
  rotateY(radians(frameCount * 2));
  makeFractal(100, 0, 0);
  pop();
}

//This recursive function draws multiple spheres on the outside 
// of the previous one, making a pillow looking shape. 
function makeFractal(r, x, y){

  if(r > 5){
    push();
    fill(random(225), random(225), random(225));
    translate(x, y);
    sphere(r, 12, 8);
    pop();
    let point = r-15
    makeFractal(point, x-point, y- point);
    makeFractal(point, x-point, y+ point);
    makeFractal(point, x+point, y- point);
    makeFractal(point, x+point, y+ point);
  }
}

