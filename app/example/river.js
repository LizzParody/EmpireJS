var mic;
var img;

function preload() {
  img = loadImage("assets/river.jpg");
}

function setup() {
  createCanvas(800, 420);
  noStroke();
  colorMode(HSB);
  background(img);

  mic = new p5.AudioIn();
  mic.start();
}

function draw() {
  fill(random(255), 255, 255);
  var d = map(mic.getLevel(), 0, 0.5, 0.0001, 30);
  ellipse(mouseX, mouseY, d, d);
}
