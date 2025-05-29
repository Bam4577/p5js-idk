function setup() {
  createCanvas(200, 200);
  noLoop();
  background(255);
}

function draw() {
  for (let x = 0; x < width; x += 20) {
    for (let y = 0; y < height; y += 20) {
      fill(random(200, 255), random(150, 200), random(200, 255));
      noStroke();
      ellipse(x + 10, y + 10, 10);
    }
  }
}
