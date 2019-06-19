// CS30 - Final Programming Challenge
// Complete this comment header - - - (it's being graded!)
//
//
//
//
//

//variable declarations - included for convenience, but you don't have to use these.
//                        feel free to handle this in a different way if you prefer.

let staticImages = [];      //array to hold 1 image for each direction -> should use this to start  
let animationImages = [];   //array to hold all 8 images in each direction

let imgSize = 80;
let pepsi = false;
let direction = 0;
let foxX = 500;
let foxY = 500;


function preload(){
  loadStatic();     //defined at bottom
  loadAnimation();  //also defined at bottom


}


function loadStatic(){
  staticImages.push(loadImage("/assets/left1.png"));   //0 - left
  staticImages.push(loadImage("/assets/right1.png"));   //1 - right
  staticImages.push(loadImage("/assets/up1.png"));   //2 - up
  staticImages.push(loadImage("/assets/down1.png"));   //3 - down
}




function loadAnimation(){
  for(let i = 1; i <= 8; i++){    //0-7 LEFT
    animationImages.push(loadImage("/assets/left" + i + ".png"))
  }

  for(let i = 1; i <= 8; i++){  //8-15 RIGHT
    animationImages.push(loadImage("/assets/right" + i + ".png"))
  }

  for(let i = 1; i <= 8; i++){  //16-23 UP
    animationImages.push(loadImage("/assets/up" + i + ".png"))
  }

  for(let i = 1; i <= 8; i++){  //24-31 DOWN
    animationImages.push(loadImage("/assets/down" + i + ".png"))
  }
}






function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
}


function draw() {
  background(220);

  displayFox(foxX, foxY);

  keyPressed();

  mouseClicked();

  boundaries();
 
}


function displayFox(x, y){
  //This draws the starting image of the fox
  image(staticImages[direction], x, y, imgSize, imgSize); 

}


function keyPressed(){

  if(key === 'w'){

    //This will move the fox around the canvas as well as tell it he had a pepsi or not
    //It also picks what sprite is visible based on the direction they are facing
    if(pepsi){
      direction = 2; //Up
      imgSize = imgSize + random(-12, 12);
      foxX = foxX + (random(-10, 10));
      foxY = foxY + (random(-10, 10));
      tint(random(255), random(255), random(255));
      foxY -= 5;
    }else{
    pepsi = false;
    direction = 2; //Up
    foxY -= 5;
    }
  }


  if(key === 'd'){
    if(pepsi){
      direction = 1; //right
      imgSize = imgSize + random(-12, 12);
      foxX = foxX + (random(-10, 10));
      foxY = foxY + (random(-10, 10));
      tint(random(255), random(255), random(255));
      foxX += 5;
    }else{
      direction = 1; //right
      foxX += 5;
    }
  }

  if(key === 'a'){
    if(pepsi){
      direction = 0; //left
      imgSize = imgSize + random(-12, 12);
      foxX = foxX + (random(-10, 10));
      foxY = foxY + (random(-10, 10));
      tint(random(255), random(255), random(255));
      foxX -= 5;
    }else{
      direction = 0; //left
      foxX -= 5;
    }
  }

  if(key === 's'){
    if(pepsi){
      direction = 3; //down
      imgSize = imgSize + random(-12, 12);
      foxX = foxX + (random(-10, 10));
      foxY = foxY + (random(-10, 10));
      tint(random(255), random(255), random(255));
      foxY += 5;
    }else{
    direction = 3; //down
    foxY += 5;
    }
  }
//this enables/disables the pepsi mode
  if(key === 'p'){
    if(pepsi === true){
      pepsi = false;
      tint(255);

    }else{
      pepsi = true;
      imgSize = imgSize + random(-12, 12);
      foxX = foxX + (random(-10, 10));
      foxY = foxY + (random(-10, 10));
      tint(random(255), random(255), random(255));
      }
    }
    //This resets everything back to square one
    if(key === 'r'){
      pepsi = false;
      direction = 0;
      tint(255); 
      imgSize = 80;
      foxX = 500;
      foxY = 500;
      
    }
  }



function mouseClicked(){
//Increases size
  if(mouseY < height/2 && mouseIsPressed){
    if(imgSize <= 140){
      imgSize = imgSize += 10;
    }
  }

    //decreases size
    if(mouseY > height/2 && mouseIsPressed){
      if(imgSize >= 40){
      imgSize = imgSize -= 10;
      }
    }
  }



  function boundaries(){
//These if statements are just checking if the player is at the edge of the screen
      if(foxX > width){
        foxX = width;
      }

      if(foxY > height){
        foxY = height;
      }

      if(foxX <= 0){
        foxX = 0;
      }

      if(foxY <= 0){
        foxY = 0;
      }
    }