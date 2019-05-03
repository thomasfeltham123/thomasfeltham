// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
const WIDTH = 4500;
const HEIGHT = 3000;

let x1 = 950;
//let x2 = 2250;
//let x3 = 3750;
let y1 = 2000;
//let y2 = 1000;
//let y3 = 2000;

function setup() {
  createCanvas(WIDTH, HEIGHT);
  noLoop();
}

function draw() {
  
  makeBackground();
  makeArt();
  makeMiddle();

  keyPressed(); 

}

function makeBackground(){

  for(let x = 0; x < 5000; x += 10){
    for(let y = 0; y < 3500; y += 10){
      fill(random(255), 100, 200);
      ellipse(x, y, 85, 85);
    }
  }
}

function makeArt(){
  strokeWeight(6);
  for(let x = 0; x < 130; x++){
    fill(100, random(0, 255), 100);
    rect(random(0, 4500), random(0, 3000), random(10, 150), random(10, 150));
    fill(200, 100, random(255));
    ellipse(random(0, 4500), random(0, 3000), random(10, 200), random(10, 200));
  }
}

function makeMiddle(){
  for(let i = 0; i < 100; i+=20){
    push();
    fill(200, random(255), 100);
    triangle(x1, y1, x1 + 1500, y1 - 1000, x1 + 3000, y1);
    rotate(radians(25));
    pop();
    x1 -= 20;
    y1 -= 15;
  }
}


function keyPressed(){
  if(key === "s"){
    save();
  }
}
