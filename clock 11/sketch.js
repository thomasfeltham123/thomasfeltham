// Basic transformations clock
// Thomas Feltham
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(20, 50, 190);
  push();
  translate(width/2, height/2);
  strokeWeight(3);
  ellipse(0, 0, 600, 600);

  for(let i=0; i<360; i+=6){
    push();
    rotate(radians(i));
    if(i % 30 === 0){
    //Thick line
      strokeWeight(5);
      line(250, 0, 280, 0);
    }else{
    //thin line
      strokeWeight(2);
      line(260, 0, 280, 0);
  }
    pop();

  }
  push();
  rotate(radians(frameCount/9));
  strokeWeight(5);
  line(0, 0, 200, 0);
  pop();

  pop();
}

