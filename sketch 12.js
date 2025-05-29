function setup() {
  createCanvas(400, 400);
  background(255, 200, 220);

  let cercles = [40, 8, 15, 16, 23, 42, 80, 33, 24, 50, 25];

  fill(255, 100, 180);
  noStroke();

  for (let i = 0; i < cercles.length; i++) {
    let x = (i % 6) * 60 + 30;
    let y = floor(i / 6) * 100 + 150;

    circle(x, y, cercles[i]);
  }

  fill(255);
  textSize(16);
  text("Des cercles qui se baladent 💗", 10, 30);
}

function draw() {}
