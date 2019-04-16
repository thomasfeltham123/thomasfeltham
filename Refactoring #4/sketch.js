//Chess Board
let c = 0;

function setup() {
  createCanvas(600, 600);
  }


  function draw() {
   
    checkers();
    
  }


  function checkers(){
    for(let x = 0; x <= 525; x+= 75){
      for(let y = 0; y <= 525; y+=75){
        if(c === 0){
          c = 255;
          
        }
        else{
          c = 0;
          
        }
        fill(c);
        rect(x, y, 75, 75);
      }
      if(c === 0){
        c = 255;
      }
      else{
        c = 0;
      }
    }
  }
  