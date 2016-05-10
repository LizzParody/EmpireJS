var mic;
var capture;
var c;

function setup(){
  capture = createCapture(VIDEO);
  capture.size(1000, 600);
  capture.position(0,0);

  c = createCanvas(1000, 600, WEBGL);
  c.position(0,0);
  noStroke();
  colorMode(HSB);
  mic = new p5.AudioIn();
  mic.start();
}

function draw() {
  if(!mouseIsPressed){
    var d = map(mic.getLevel(), 0, 0.5, 10, 50);
    var y = map(mic.getLevel(), 0, 0.5, height, 80);

    translate(-width/2, -height/2, 0);
    translate(mouseX, mouseY, 0);
    ellipsoid(d*3, d);
  }else{
    c.remove();
  }
}
