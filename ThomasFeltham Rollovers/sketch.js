// RollOvers
// Thomas Feltham
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"



function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
}

function draw() {
  
  if(mouseX<=width/2 && mouseY<=height/2){
    fill(0);
    rect(0,0, width/2, height/2);
  }else{
    fill(255);
    rect(0,0, width/2, height/2);
  }

  if(mouseX>=width/2 && mouseY<=height/2){
    fill(0);
    rect(width/2, 0, width/2, height/2);
  }else{
    fill(255);
    rect(width/2, 0, width/2, height/2);
  }

  if(mouseX<=width/2 && mouseY>=height/2){
    fill(0);
    rect(0, height/2, width/2, height/2);
  }else{
    fill(255);
    rect(0, height/2, width/2, height/2);
  }

  if(mouseX>=width/2 && mouseY>=height/2){
    fill(0);
    rect(width/2, height/2, width/2, height/2);
  }else{
    fill(255);
    rect(width/2, height/2, width/2, height/2);
  }

}

 