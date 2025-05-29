let emojis = ["🌸", "🍓", "💖", "✨", "🧁"];

function setup() {
  createCanvas(200, 200);
  textAlign(CENTER, CENTER);
  textSize(16);
  noLoop();
}

function draw() {
  background(255);
  for (let x = 20; x < width; x += 40) {
    for (let y = 20; y < height; y += 40) {
      let randEmoji = random(emojis);
      text(randEmoji, x, y);
    }
  }
}
