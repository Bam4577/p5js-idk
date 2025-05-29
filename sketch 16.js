function setup() {
  function setup() {
    createCanvas(200, 200);
    noLoop();
  }
  
  function draw() {
    for (let x = 0; x < width; x += 20) {
      for (let y = 0; y < height; y += 20) {
        if ((x + y) % 40 == 0) {
          fill(255, 200, 230);
        } else {
          fill(200, 240, 255);
        }
        noStroke();
        rect(x, y, 20, 20);
      }
    }
  }
}