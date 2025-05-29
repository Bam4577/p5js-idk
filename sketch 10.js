let img;

function preload() {
  img = loadImage('img/test.jpg');
}

function setup() {1
  createCanvas(800, 500);
  img.resize(800, 500);
  noLoop();
}

function draw() {
  background(50);

  let taille = 5;
  for (let x = 0; x < width; x += taille) {
    for (let y = 0; y < height; y += taille) {
      let couleur = img.get(x, y);
      fill(couleur);
      noStroke();
      rect(x, y, taille, taille);
    }
  }
}