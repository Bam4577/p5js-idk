function setup() {
  createCanvas(700, 400);
  background(220,13,600);
}

 let taille = 4;


function draw() {
  stroke(300);
  strokeWeight(1,5);
  noFill();
  circle(200,200,taille);
  taille = taille + 7;
}