let oldX = 0;
let oldY = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  let R = random (255);
  let V = random (255);
  let B = random (255);
  background(R,V,B) ;
  noStroke();
}

function draw() {
  //mouseX - oldX
  
  oldX = oldX + (mouseX - oldX) / 50;
  oldY+= (mouseY- oldY) /50;
  
  circle(oldX,oldY,50);
}

function mouseClicked(){
  let R = random (255);
  let V = random (255);
  let B = random (255);
  
  fill(R,V,B)
}

function keyPressed(){
  if(key== "s"){
  save("drawing.png")
  }
  if (key == "x"){
    
  let R = random (255);
  let V = random (255);
  let B = random (255);
  background(R,V,B) ;
  }
}