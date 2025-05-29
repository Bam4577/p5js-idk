let taille = 0;
let rondsX = [];
let rondsY = [];
let tailles = [];

function setup() {
  createCanvas(800, 800);
  background(99, 161, 246);
}

function draw() {
  
  background(87, 215, 120, 10);

  
  noFill();
  stroke(255); 
  strokeWeight(2);
  circle(400, 400, taille);
  taille = taille + 1;

 
  if (taille > width) {
    taille = 0;
  }

 
  for (let i = 0; i < rondsX.length; i++) {
    noStroke();
    fill(60, 242, 246, 99);
    ellipse(rondsX[i], rondsY[i], tailles[i]);

   
    tailles[i] = tailles[i] * 0.95;
  }
}

function mouseMoved() {
  
  rondsX.push(mouseX);
  rondsY.push(mouseY);
  tailles.push(random(5, 10));
}
