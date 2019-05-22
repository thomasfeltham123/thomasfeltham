// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

// Particle Systems
let pArray = [];
let gear;

function preload(){
  gear = loadImage("/assets/gear.png");

}

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
 // background(0);
}

function draw() {
  imageMode(CENTER);
  background(0);
  pArray.push(new Particle(mouseX, mouseY));
  for (let i = 0; i < pArray.length; i++){
    pArray[i].move();
    pArray[i].display();  
    if (pArray[i].isAlive() === false){
      pArray.splice(i,1);
      i--;  
    }
  }
}

function mouseClicked(){
  
}


class Particle{
  constructor(x_, y_){
    this.x = x_;
    this.y = y_;
    this.c = color(map(x_, 0, width, 0, 255), map(y_, 0, height, 0, 255), map(x_, 0, width, 255, 0));
    this.size = random(10, 30);
    this.ySpeed = random(-1,1);
    this.xSpeed = random(-0.5,0.5);
    this.lifetime = int(random(100,300));
    this.maxLifetime = this.lifetime;
    this.GRAV = -0.02;
    this.noiseLoc = random(0, 10);
  
  }

  move(){
    this.steps = 30;
    this.lifetime -= 1;
    this.ySpeed += this.GRAV;
    this.x += (map(noise(this.noiseLoc), 0, 1, -1, 1));
    this.noiseLoc += 0.01

    //this.x += this.xSpeed;
    this.y += this.ySpeed;
    this.floorCollision();
  }

  floorCollision(){
    if(this.y > height){
      this.y = height;
      this.ySpeed *= -1;
    }
  }

  isAlive(){
    if (this.lifetime > 0) return true;
    else return false;
  }

  display(){
    ellipseMode(CENTER);
    fill(this.c);
    push();
    translate(this.x, this.y);
    scale(map(this.lifetime, 0, this.maxLifetime, 0, 1));
    rotate(radians(this.steps *= 3));
    image(gear, 0, 0, this.size, this.size);
    pop();
  }

}