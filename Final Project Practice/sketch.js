// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
//let bombImg;
let bombArray = [];
let marioPos;
let runSpeed = 0;
let jumping = false;
let jumpSpeed = 5;
let direction = 360;
let ground, gTube, gTubeTop;
let mario, bombImg, bomb;
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
   mario.collide(ground);
  //mario.collide(bomb);
   mario.collide(tube);
   mario.collide(tubeTop);
}

function draw() {

  background(70, 140, 180);

  drawSprites();

  moving();


  bombArray.push(new Bomb(this.x, this.y));

  for(let i = 0; i<bombArray.length; i++){
    bombArray[i].move();
    bombArray.display();
  }

}



//This function provides all movements for Mario
function moving(){
  //This if statement makes Mario run forward and checks for collision
  if(keyDown(RIGHT_ARROW)){
    mario.changeAnimation('forward run');
    mario.position.x += runSpeed;//Right
    ground.position.x -= 0.3;
    tube.position.x -= 0.5;
    tubeTop.position.x -= 0.5;
      if(mario.collide(tubeTop)){
        mario.position.x += 0;
      }
       else if(mario.collide(tube)){
         mario.position.x += 0;
        }
        else{
         runSpeed = 3;
         mario.changeAnimation('forward run');
         //mario.position.x += runSpeed;//Right
       }
    
    }
    


// This if statement makes Mario run towards the left and checks for collision
 if(keyDown(LEFT_ARROW)){
  mario.changeAnimation('backwards run');
  mario.position.x += runSpeed;//Left
  ground.position.x += 0.3;
  tube.position.x += 0.5;
  tubeTop.position.x += 0.5;
  if(mario.collide(tubeTop)){
    mario.position.x += runSpeed;
  }
   else if(mario.collide(tube)){
      mario.position.x += runSpeed;
    }
    else{
      runSpeed = -3;
      mario.changeAnimation('backwards run');
      //mario.position.x += runSpeed;//Left
    }
   }



     //These if statements make Mario jump as well as let 
     //him know when hes on the ground
      if(keyDown(UP_ARROW)){
        if(jumping === false){
        jumping = true;
        jumpSpeed = 5;
        mario.changeImage('forwardJump')
        mario.setSpeed(jumpSpeed, -90)
      }
    }

      if(jumping){
        //ground.position.y += 0.2;
        //tube.position.y += 0.2;
        //tubeTop.position.y += 0.2;
        jumpSpeed -= 0.1;
        mario.setSpeed(jumpSpeed, -90);
        }
      

       if(mario.collide(ground) === true){
         mario.position.y -= 0.1;
          mario.changeImage('forward')
         // ground.position.y -= 0.2;
         // tube.position.y -= 0.2;
         // tubeTop.position.y -= 0.2;
           jumping = false;
       }
       if(mario.collide(tubeTop) === true){
        mario.changeImage('forward')
        jumping = false;
     }
    }


class Bomb{

  constructor(){
    this.x = random(0, width);
    this.y = 10;
    this.GRAVITY = -0.02;
    this.bombImg = loadImage('assets/Bomb.png');
    this.size = 50;
  }

  move(){
    this.ySpeed = this.GRAVITY;
    this.floorCollision();

  }

  display(){
    image(bombImg, 0, 0, this.size, this.size);
  }

  floorCollision(){
    if(this.y > height){
      this.ySpeed *= -1;
    }
  }
}


    