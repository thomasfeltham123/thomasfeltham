// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let jumping = false;
let jumpSpeed = 4;
let direction = 360;
let ground, gTube;
let mario;
let forwardRest, forwardRun, backwardsRun, forwardJump;

function preload(){

  //Loads mario resting
  forwardRest = loadAnimation('assets/Forward resting00.png');
  mario = createSprite(200, 660);
  mario.addAnimation('forward', 'assets/Forward resting00.png');

  //Loads images needed to animate Mario running forward.
  forwardRun = loadAnimation('assets/Forward02.png' , 'assets/Forward04.png');
  mario.addAnimation('forward run', 'assets/Forward02.png' , 'assets/Forward04.png');

  //Loads animation for mario running backwards
  backwardsRun = loadAnimation('assets/Backwards08.png' , 'assets/Backwards10.png');
  mario.addAnimation('backwards run' , 'assets/Backwards08.png' , 'assets/Backwards10.png');


  //Loads image of mario jumping
  forwardJump = loadAnimation('assets/Forward Jump05.png');
  mario.addAnimation('forwardJump' , 'assets/Forward Jump05.png');

//Loads a image of the grass from Mario
  groundImg = loadImage('assets/Ground07 - Copy.png');
  ground = createSprite(0, 810);
  ground.addImage(groundImg);

  //Loads an image of the green tube from mario
  gTube = loadImage('assets/Tube.png');
  tube = createSprite(700, 650);
  tube.addImage(gTube);

}



function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(70, 140, 180);
  //makeSprites();
  drawSprites();
  moving();
}

function makeSprites(){
  push(); 
  //translate(width/2, height/2)
  drawSprites();
  pop();
}

function moving(){
  
    if(keyDown(RIGHT_ARROW)){
    mario.changeAnimation('forward run');
    mario.setSpeed(3, direction);
   }

   if(keyDown(LEFT_ARROW)){
     mario.changeAnimation('backwards run');
    mario.setSpeed(3, direction-180);
     }

     if(keyDown(UP_ARROW)){
       jumping = true;
       jumpSpeed = 3;
       mario.changeImage('forwardJump');
       mario.setSpeed(jumpSpeed, -90);
       
     }

      if(jumping){
        jumpSpeed -= 0.1;
         mario.setSpeed(jumpSpeed, -90);
      }

        if(mario.collide(ground) === true){
           mario.changeImage('forward')
            jumping = false;
      }
    }
