// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let lionL, lionR;
let direction = 1; //1 stands for left, 2 stands for right.

let pinImages = [];

function preload(){
  lionL = loadImage('assets/lion-left.png');
  lionR = loadImage('assets/lion-right.png');

  pinImages.push(loadImage('assets/pin-00.png'));
  pinImages.push(loadImage('assets/pin-01.png'));
  pinImages.push(loadImage('assets/pin-02.png'));
  pinImages.push(loadImage('assets/pin-03.png'));
  pinImages.push(loadImage('assets/pin-04.png'));
  pinImages.push(loadImage('assets/pin-05.png'));
  pinImages.push(loadImage('assets/pin-06.png'));
  pinImages.push(loadImage('assets/pin-07.png'));
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}


function draw() {
  background(220);
  lions();
  image(pinImages[0], 200, 200);
}







function moving(){
  //determines direction of mouse
    if(mouseX > pmouseX){
      direction = 2;
    }else if (mouseX <pmouseX){
      direction = 1;
    }
  }
  
  function lions(){
    moving();
    imageMode(CENTER);
    push();
    translate(mouseX, mouseY);
    scale(0.5);
    if(direction === 1){
      image(lionL, 0, 0);
    }else{
      image(lionR, 0, 0);
    }
    pop();
  }
  


