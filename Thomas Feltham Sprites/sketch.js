// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let spaceman = [];
let speed = 20;
let counter = 0;


function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
}

function preload(){
  for(let i =1; i<9; i++){
    spaceman.push(loadImage('assets/Sprite0' + i + '.png'));
    print(i);
  }
}


function draw() {
  preload();
  background(220);
  image(spaceman[counter], width/2, height/2)
  spriteCycle();

}




function spriteCycle(){
  if (frameCount % int(speed) === 0){
    counter ++;
    if (counter > 8) counter = 0;
  }
}



