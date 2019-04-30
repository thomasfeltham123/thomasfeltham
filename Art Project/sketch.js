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
  
  makeBackground();
  makeArt();
  //makeLine();

  keyPressed(); 

}

function makeBackground(){

  for(let x = 0; x < 5000; x += 10){
    for(let y = 0; y < 3500; y += 10){
      fill(random(255), 100, 100);
      ellipse(x, y, 85, 85);
    }
  }
}

function makeArt(){
  strokeWeight(6);
  for(let x = 0; x < 130; x++){
    fill(100, random(0, 255), 100);
    rect(random(0, 4500), random(0, 3000), random(10, 150), random(10, 150));
    ellipse(random(0, 4500), random(0, 3000), random(10, 200), random(10, 200));
    
  }
}

// function makeLine(){
//   for()
// }


function keyPressed(){
  if(key === "s"){
    save();
  }
}
