// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let ballObjects = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
}


function mouseClicked(){
  ballObjects.push(new Ball (mouseX, mouseY));
}



function draw() {
  //background(220);
  for(let currentBall of ballObjects){
    currentBall.move();
    currentBall.mouseOver();
    currentBall.display();

  }
}

class Ball{
  //Constructor and Class properties
  constructor(x_, y_){
    this.x = x_;
    this.y = y_;
    this.xSpeed = random(-5, 5);
    this.ySpeed = random(-5, 5);
    this.size = 30;
    this.gravity = 0.1;
  }

  //Class Methods
  display(){
    ellipseMode(CENTER);
    //fill(random(255), random(255), random(255));
    ellipse(this.x, this.y, this.size, this.size);
  }

  move(){
    this.x += this.xSpeed;
    this.y += this.ySpeed;
    this.ySpeed += this.gravity;
       //Check Left-Right walls
       if(this.x < 0 || this.x > width){
        this.xSpeed *= -1;
      }

      //Check Top-Bottom
      if(this.y > height){
        this.ySpeed *= -0.999;
        this.y = height;
      }
  }

  mouseOver(){
  let d = dist(this.x, this.y, mouseX, mouseY);
    if(d < this.size / 2){
      if(mouseIsPressed && mouseButton === CENTER){
        this.size += 5;
      }else if(mouseIsPressed && mouseButton === RIGHT){
        this.size -= 5;
      }
      fill(random(255), random(255), random(255));
    }else{
      fill(80, 100, 200);
    }
  }



}