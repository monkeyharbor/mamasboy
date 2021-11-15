//from https://p5js.jp/examples/image-transparency.html


let img;
offset = 8;
easing = 0.04;

function setup() {
  createCanvas(600, 600);
  img = loadImage("rob.png");  // Load an image into the program
  noCursor();
}

function draw() {
  image(img, 0, 0,200, 500);  // Display at full opacity
  dx = (mouseX-img.width/2) - offset;
  // dx = (mouseX-img.width/2);
  offset += dx * easing;
  offset += easing;
  tint(255, 150);  // Display at half opacity
  image(img, offset, 30);
  // image(img, offset, mouseX, mouseY);
  // image(img, mouseX, mouseY);
}
