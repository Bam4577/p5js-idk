let mesCarrés = [];

function setup() {
  createCanvas(400, 400);
  for (let i = 0; i < 20; i++) {
    mesCarrés.push({
      x: random(width),
      y: random(height),
      size: 20,
      vx: random(-2, 2),
      vy: random(-2, 2)
    });
  }
}

function draw() {
  background(255, 240, 250);

  for (let c of mesCarrés) {
    c.x += c.vx;
    c.y += c.vy;

    if (c.x < 0 || c.x + c.size > width) c.vx *= -1;
    if (c.y < 0 || c.y + c.size > height) c.vy *= -1;

    fill(255, 180, 220);
    noStroke();
    rect(c.x, c.y, c.size, c.size, 5);
  }
}

 