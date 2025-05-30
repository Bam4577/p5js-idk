let carré = 40;

function setup() {
  createCanvas(400, 400);
  noStroke();
}

function draw() {
  background(255, 240, 250);

  for (let y = 0; y < height; y += carré) {
    for (let x = 0; x < width; x += carré) {

      if (mouseX > x && mouseX < x + carré && mouseY > y && mouseY < y + carré) {
        fill(255, 180, 220);
      } else {
        fill(200, 230, 255);
      }
      rect(x, y, carré, carré, 10); 
    }
  }
}
