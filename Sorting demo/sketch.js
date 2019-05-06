// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let values = [];

function setup() {
  noCanvas();
  noLoop();
  populateArray();
}

function populateArray(){
  for(let num = 0; num < 1000; num++){
    values.push(int(random(1, 999)));
  }
}

function binarySearch(n){
  while(values.length > 1){
    let index = int(values.length/2);
    if(values[index] === n){
      return true;
    }
    else{
      if(values[index] > n){
        //get rid of bigger numbers
        values.splice(n);
      }
      else{
        //get rid of smaller numbers
        values.splice(0, int(values.length/2));
      }
    }
  }
  return false;
}

function selectionSort(){
  //One character at a time, find the minimum value and swap it
  for(let index = 0; index < values.length -1; index++){
    let minimum = values[index];
    minimumLoc = index;
    for(let checkIndex = index+1; checkIndex < values.length; checkIndex ++){
      let cur = values[checkIndex];
      if(cur < minimum){
        minimum = cur;
        minimumLoc = checkIndex;
      }
    }
    //swap the item at index with the item at minimumLoc
    let temp = values[index];
    values[index] = values[minimumLoc]
    values[minimumLoc] = temp;
  }
}


function draw() {
  print(values);
  selectionSort();
  print(values);
  print(binarySearch(52));
}
