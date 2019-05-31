// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let direction = 360;
let ground, skyImg;
let mario;
let forwardRest, forwardRun, backwardsRun, forwardJump;

function preload(){

  //Loads mario resting
  forwardRest = loadAnimation('assets/Forward resting00.png', 'assets/Backwards resting01.png');
  mario = createSprite(0, 107, 100, 100);
  mario.addAnimation('forward', 'assets/Forward resting00.png', 'assets/Backwards resting01.png');

  //Loads images needed to animate Mario running forward.
  forwardRun = loadAnimation('assets/Forward02.png' , 'assets/Forward04.png');
  mario.addAnimation('forward run', 'assets/Forward02.png' , 'assets/Forward04.png');

  //Loads animation for mario running backwards
  backwardsRun = loadAnimation('assets/Backwards08.png' , 'assets/Backwards10.png');
  mario.addAnimation('backwards run' , 'assets/Backwards08.png' , 'assets/Backwards10.png');

  //Loads image of mario jumping
  forwardJump = loadAnimation('assets/Forward Jump05.png');
  mario.addAnimation('forwardJump' , 'assets/Forward Jump05.png');

//Loads the image of the grass from Mario
  groundImg = loadImage('assets/Ground07.png');
  ground = createSprite(-40, 100);
  ground.addImage(groundImg);

  //Loads the blue sky and clouds from mario
  // skyImg = loadImage('assets/SkyBackground11.png');
  // skyBackground = createSprite(0, 0);
  // skyBackground.addImage(skyImg);
  mario.collide(groundImg);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(70, 140, 180);
  makeSprites();
  moving();
}

function makeSprites(){
  push(); 
  translate(width/2, height/2)
  scale(2);
  drawSprites();
  pop();
}

function moving(){
 if(keyDown(RIGHT_ARROW)){
   mario.changeAnimation('forward run');
    mario.setSpeed(2, direction);
   }

   if(keyDown(LEFT_ARROW)){
     mario.changeAnimation('backwards run');
    mario.setSpeed(2, direction-180);
     }

     if(keyDown(UP_ARROW)){
       mario.changeImage('forwardJump');
       mario.setSpeed(2, -90);
     }
 }



