// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let fRunning = false;
let runSpeed = 3;
let jumping = false;
let jumpSpeed = 5;
let direction = 360;
let ground, gTube, gTubeTop;
let mario;
let forwardRest, forwardRun, backwardsRun, forwardJump;


//The preload function loads all images and animations
function preload(){

  //Loads mario resting
  forwardRest = loadAnimation('assets/Forward resting00.png');
  mario = createSprite(200, 675);
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
  ground = createSprite(450, 840);
  ground.addImage(groundImg);

  //Loads an image of the green tube from mario
  gTubeTop = loadImage('assets/TubeTop.png');
  tubeTop = createSprite(700, 593);
  tubeTop.addImage(gTubeTop);

  gTube = loadImage('assets/Tube.png');
  tube = createSprite(700, 655);
  tube.addImage(gTube);

}



function setup() {
  createCanvas(windowWidth, windowHeight);
  mario.collide(tubeTop);
  mario.collide(tube);
  mario.collide(tubeTop);
}

function draw() {
  background(70, 140, 180);

  drawSprites();
  
  moving();

}



//This function provides all movements for Mario
function moving(){
  //This if statement makes Mario run forward
    if(keyDown(RIGHT_ARROW)){
      if(mario.collide(tubeTop)){
        mario.setSpeed(0, direction);
      }
       else if(mario.collide(tube)){
          mario.setSpeed(0, direction);
        }
        else{
          runSpeed = 3;
          mario.changeAnimation('forward run');
          mario.setSpeed(runSpeed, direction);//Right
        }
      }



// This if statement makes Mario run towards the left
   if(keyDown(LEFT_ARROW)){
    if(mario.collide(tubeTop)){
      mario.setSpeed(0, direction-180);
    }
     else if(mario.collide(tube)){
        mario.setSpeed(0, direction-180);
      }
      else{
        runSpeed = 3;
        mario.changeAnimation('backwards run');
        mario.setSpeed(runSpeed, direction-180);//Left
      }
     }


     //These if statements make Mario jump as well as let 
     //him know when hes on the ground
     if(keyDown(UP_ARROW)){
      jumping = true;
      jumpSpeed = 5;
      mario.changeImage('forwardJump')
      mario.setSpeed(jumpSpeed, -90)
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
