
  //Black and White Target

function setup() {
  //Setup just creates the canvas.
  createCanvas(400, 400);
  }


  function draw() {
//Here we create the background.
  background(240);

//This loop draws 10 circles creating a target.
    for(var i = 400; i >= 40; i -= 40){
      ellipse(200, 200, i, i);
    }
  }

