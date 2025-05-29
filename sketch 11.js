function setup() {
  createCanvas(400, 400);
  background(255, 100, 200);
  
  
  
  textSize(36);
  textFont("Comic Sans MS");
  
}

function draw() {}

let mots = [ "Rond Point", "ART", "PROJET","PINK"];

mots[2] = "Flower";
mots.push("<3");

let i = 0;

function mousePressed (){
  text(mots[i],mouseX,mouseY);
  i++;
  if (i> mots.length){i = 0;}
}

console.log( mots.length);
console.log(mots)