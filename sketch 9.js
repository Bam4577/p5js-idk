function setup() {
  createCanvas(400, 400);
  background(220);

  
  for (let y = 50; y <= height; y += 50) {
   
    for (let x = 50; x <= width; x += 50) {
      fill(x, y, 200); 
      noStroke();     
      circle(x, y, 20); 
    }
  }
}

function draw() {
  
}
