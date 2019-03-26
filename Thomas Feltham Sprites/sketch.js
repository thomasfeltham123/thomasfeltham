// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let spaceman = [];
let speed = 20;
let counter = 0;
let sprite = spaceman[counter];
let x = 400;
let y = 400;

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
  image(sprite, x, y)
  spriteCycle();
  //keyTyped();

}




function spriteCycle(){
  if (frameCount % int(speed) === 0){
    counter ++;
    if (counter > 8) counter = 0;
  }
}

function keyTyped(){

  if(key === 'LEFT_ARROW'){
    x -= 5;
  }


}



