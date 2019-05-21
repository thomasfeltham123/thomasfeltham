let x1=0;
let y1=0;

function setup(){
  createCanvas(windowWidth, windowHeight);
  noLoop();
}

function draw(){
  background(220);
  makeArt();
}

function makeArt(){
  for(i = 0; i < 80; i++){
    horizontalLines();
    verticleLines();
  }
}

function horizontalLines(){
  let x2 = random(width);

  line(x1, y1, x2, y1);
  x1 = x2;
}

function verticleLines(){
  let y2 = random(height);

  line(x1, y1, x1, y2);
  y1 = y2;
}
