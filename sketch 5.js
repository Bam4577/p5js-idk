let boxSize = 10;


let posX = 123;
let posY = 234;

let vitX = 20;
let vitY = 1.234;

let r = Math.random() * 255;
let v = Math.random() * 255;
let b = Math.random() * 255;



function setup() {
  createCanvas(windowWidth, windowHeight);
}


function draw() {
  background(000,000,000);
  fill(r,v,b)
  
  
 circle(posX,posY,boxSize);
  
  posX = posX + vitX;
  posY += vitY; //
  

  
 if (posX + boxSize / 2 >= width) {
    vitX *= -1;
    boxSize += 2;
    posX = width - boxSize / 2; 
    changeColor();
  } else if (posX - boxSize / 2 <= 0) {
    vitX *= -1;
    boxSize += 2;
    posX = boxSize / 2; 
    changeColor();
  }

  if (posY + boxSize / 2 >= height) {
    vitY *= -1;
    boxSize += 3;
    posY = height - boxSize / 2; 
    changeColor();
  } else if (posY - boxSize / 2 <= 0) {
    vitY *= -1;
    boxSize += 3;
    posY = boxSize / 2; 
    changeColor();
  }
}




function changeColor(){
  r = Math.random() * 255;
  v = Math.random() * 255;
  b = Math.random() * 255;
}
