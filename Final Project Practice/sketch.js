// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let ground;
let mario;

function preload(){
  //Loads images needed to animate Mario running forward.
  let forwardRun = loadAnimation('assets/Forward01.png' , 'assets/Forward03.png');
  mario = createSprite(0, 0, 100, 100);
  mario.addAnimation('forward', forwardRun);

//Loads the image of the grass from Mario
  groundImg = loadImage('assets/Ground05.png');
  ground = createSprite(10,10);
  ground.addImage(groundImg);

}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(200);
  makeSprites();
}

function makeSprites(){
  push(); 
  translate(width/2, height/2)
  scale(2);
  drawSprites();
  pop();
}

// function moving(){
//   if(key === 'LEFT_ARROW'){

//   }
// }



