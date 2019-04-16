// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


function setup() {
  createCanvas(4500, 3000);
  noLoop();
}

function draw() {
  

  makeArt();
}

function makeArt(){

  for(let x = 0; x < 5000; x += 10){
    for(let y = 0; y < 3500; y += 10){
      fill(random(255), random(255), random(255));
      ellipse(x, y, 85, 85);
    }
    
  }

}
