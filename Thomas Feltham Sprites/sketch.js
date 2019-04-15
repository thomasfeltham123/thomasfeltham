// Sprites
// Thomas Feltham
// April 15th, 2019
//

//Declares all variables used in the program
let spaceman = [];
let speed = 20;
let counter = 0;
let sprite = spaceman[counter];
let x = 400;
let y = 400;
let background;


//Sets image mode and creates the canvas
function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
  //background(200);
}

//This preloads all images and puts them into an array.
function preload(){
  for(let i = 1; i < 9; i++){
    spaceman.push(loadImage('assets/Sprite0' + i + '.png'));
    print(i);
  }
  background = loadImage('assets/spaceBackground.png');
}

//Draw calls all functions used, and draws the background.
function draw() {
  push();
  scale(1);
  image(background, windowWidth/2, height/2);
  pop();


  image(spaceman[counter], x, y);
  spriteCycle();
  keyPressed();

}



//This just loops through all of the spriyes, making an idle animation.
function spriteCycle(){
  if (frameCount % int(speed) === 0){
    counter ++;
    if (counter >= 8) counter = 0;
  }
}

//This decides what sprite should be on screen based on what arrow key is pressed.
function keyPressed(){

  if(keyCode === LEFT_ARROW){
    if(x >= 0){
      counter = 7;
      x -= 1;
    }
  }

  if(keyCode === RIGHT_ARROW){
    if(x <= width){
      counter = 3;
      x += 1;
    }
  }

  if(keyCode === UP_ARROW){
    if(y >= 0){
      counter = 3;
      y -= 1;
    }
  }

  if(keyCode === DOWN_ARROW){
    if(y <= height){
      counter = 0;
      y += 1;
    }
  }
}




