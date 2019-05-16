
let video;
let GRID_SPACING = 10;
function setup(){
  createCanvas(640,480);
  video = createCapture(VIDEO);
  //video.hide();
}

function avgPixel(pos){ //pos - index of the R for the current pixel
  return (pixels[pos] + pixels[pos+1] + pixels[pos+2]) / 3;
}

function setPixelColor(pos, r, g, b){
  pixels[pos] = r;
  pixels[pos+1] = g;
  pixels[pos+2] = b;
}

function draw(){
  background(
    0);
  video.loadPixels();
  for(let x = 0; x < video.width; x += GRID_SPACING){
    for(let y = 0; y < video.height; y+= GRID_SPACING){
      let location =(x + y*video.width) * 4;
      let avg = avgPixel(location);

      // fill(avg);
      // fill(pixels[location], pixels[location+1], pixels[location+2]);
      // ellipse(x, y, GRID_SPACING, GRID_SPACING);
      drawCharacter(x, y, avg);
    }
  }
  video.updatePixels();
  //image(video,0,0);
}

function drawCharacter(x, y, avg){
  textSize(GRID_SPACING);
  fill(255);
  noStroke();
  if(avg>200){
    text("&", x, y);
  }
  else if(avg>100){
    text("x", x, y);
  }
  else if(avg>40){
    text(".", x, y); 
  }


}

  // for (let i = 0; i< pixels.length; i+=4){
  //   if (avgPixel(i) > 200){
  //     setPixelColor(i, 200,255,255);
  //   }  
  //   else if(avgPixel(i) > 120){
  //     setPixelColor(i, 180,180,255);
  //   }
  //   else if (avgPixel(i) > 60){
  //     setPixelColor(i, 90,180,80);
  //   }
  //   else{
  //     setPixelColor(i, 40 , 0, 10);
  //   }
  // }