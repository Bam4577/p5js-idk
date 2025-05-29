let myImage;

function preload() {
  myImage = loadImage("img/P2140023.jpg");
}

function setup() {
  createCanvas(800, 400);
  background(255);
  myImage.resize(400, 300);

  image(myImage, 0, 0);

  myImage.loadPixels();

  for (let i = 0; i < myImage.pixels.length; i += 4) {
    
    myImage.pixels[i] += 80;
    myImage.pixels[i + 1] += 10;
    myImage.pixels[i + 2] -= 10;
  }

  myImage.updatePixels();

  image(myImage, myImage.width, 0);
  

  fill(255, 100, 180);
  textSize(24);
  text("Filtre cute 💕", 10, height - 10);
}

function draw() {}
