function setup() {
  createCanvas(800, 800);
  background(220);

  for (let y = 0; y < 15; y++) {
    for (let x = 0; x < 15; x++) {
      noStroke();
      print(y, x);
      fill(x * 64, 50, y * 200);
      square(x * 60, y * 60, 60);
    }
  }
}

function draw() {
  for (let y = 0; y < 15; y++) {
    for (let x = 0; x < 15; x++) {
      let r = (x * 64 + frameCount *15) % 256; 
      //frameCount comme des images de pelicule film// *15  est egale a la vitesse 
      
      let b = (y * 64 + frameCount *3) % 256;

      fill(r, 50, b, 100); 
      square(x * 50, y * 50, 50);
    }
  }
}