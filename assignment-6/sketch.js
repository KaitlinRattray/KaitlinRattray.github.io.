/*
ARTG 2262
Kaitlin Rattray
rattray.k@northeastern.edu
Assignment 6

Instructions:
- press and drag the mouse to draw sparkles
- use up and down arrow keys change brush size
- hold E and drag to erase
- press C to clear the screen
- press S to save your drawing
*/

let brushSize = 40; //change brushsize
let spacing = 9; //change spaceing

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  textAlign(CENTER, CENTER);
}

function draw() {

  fill(0);
  textSize(16);
  text("Drag mouse to draw ✨ | UP/DOWN = brush size | Hold E = erase | C = clear | S = save", width/2, 30); //tell the people

  if (mouseIsPressed) {

    // eraser
    if (keyIsDown(69)) {
      noStroke();
      fill(255);
      circle(mouseX, mouseY, brushSize * 1.5);
    }

    // draw
    else {

      let d = dist(mouseX, mouseY, pmouseX, pmouseY);

      if (d > spacing) {
        let sparkleSize = random(brushSize * 0.5, brushSize * 1.5);
        textSize(sparkleSize);
        text("✨", mouseX, mouseY);
      }
    }
  }
}

function keyPressed() { //key functions

  if (keyCode === UP_ARROW) {
    brushSize += 5;
  }

  if (keyCode === DOWN_ARROW) {
    brushSize -= 5;
  }

  if (key === 'c' || key === 'C') {
    background(255);
  }

  if (key === 's' || key === 'S') {
    saveCanvas("sparkle_drawing", "png");
  }
}