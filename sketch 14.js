function setup() {
  createCanvas(400, 400);
  background(255);
  
  drawFleur(200, 200);
}

function drawFleur(x, y) {
  fill(255, 150, 200);

 
  ellipse(x - 20, y, 40, 40);
  ellipse(x + 20, y, 40, 40);
  ellipse(x, y - 20, 40, 40);
  ellipse(x, y + 20, 40, 40);
  ellipse(x - 14, y - 14, 40, 40);
  ellipse(x + 14, y - 14, 40, 40);
  ellipse(x - 14, y + 14, 40, 40);
  ellipse(x + 14, y + 14, 40, 40);


  fill(255, 220, 100);
  circle(x, y, 30);
}