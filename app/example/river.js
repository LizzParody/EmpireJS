var mic;
var img;

function preload() {
  img = loadImage("assets/river1.jpg");
}

function setup() {
  createCanvas(800, 420);
  background(img);
  noStroke();
  colorMode(HSB);

  mic = new p5.AudioIn();
  mic.start();
}

function draw(){
  fill(random(255), 255, 255);
  var d = map(mic.getLevel(), 0, 0.5, 0.001, 30);
  ellipse(mouseX, mouseY, d, d);
}
