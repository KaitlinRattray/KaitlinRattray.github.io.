/* ARTG 2262 Prototyping with Code
Kaitlin Rattray
rattray.k@northeastern.edu
Assignment #4
Title: valentines cards
*/

//correct pixels
function setup() {
  createCanvas(1024, 1024);
  noLoop();
  
  // Color's
  let hotPink = color(255, 105, 150);
  let softPink = color(255, 182, 193);
  let cream = color(250, 241, 233);
  let deepRed = color(220, 20, 60);
  let coral = color(255, 127, 127);
  let roseRed = color(194, 59, 89);
  
  background(cream);
  
  // Grid parameters
  let envelopeWidth = 160;
  let envelopeHeight = 110;
  let cols = 6;
  let rows = 8;
  let spacingX = 1024 / cols;
  let spacingY = 1024 / rows;
  
  // Pattern (nested loops)
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      
      let x = col * spacingX + spacingX / 2;
      let y = row * spacingY + spacingY / 2;
      
      // Alternate colors three colors
      let envelopeColor;
      let heartColor;
      let accentColor;
      
      // Conditions colors 
      if ((row + col) % 3 == 0) {
        envelopeColor = softPink;
        accentColor = deepRed;
      } else if ((row + col) % 3 == 1) {
        envelopeColor = hotPink;
        accentColor = roseRed;
      } else {
        envelopeColor = coral;
        accentColor = deepRed;
      }
      
      // Envelopes rotate placment [coding friend helped]
      push();
      translate(x, y);
      
      if (row % 2 == 0) {
        rotate(radians(random(-3, 3)));
      }
      
      // Alternate address side & letter open
      let isOpen = (row + col) % 2 == 0;
      
      drawEnvelope(0, 0, envelopeWidth, envelopeHeight, envelopeColor, accentColor, isOpen);
      
      // Address side gets stamp ONLY
      if (!isOpen) {
        drawStamp(envelopeWidth/2 - 25, -envelopeHeight/2 + 20, 18, hotPink);
      }
      
      pop();
    }
  }
  
  // Save pic
  saveCanvas('assignment4_pattern_Rattray_Kaitlin', 'png');
}

// Draw envelops [Code freind helped we used Claude to fix erros]
function drawEnvelope(x, y, w, h, fillColor, accentColor, isOpen) {
  push();
  translate(x, y);
  
  //body rectangle
  fill(fillColor);
  stroke(accentColor);
  strokeWeight(2);
  rect(-w/2, -h/2, w, h, 3);
  
  if (isOpen) {
    // Open flap more up
    fill(accentColor);
    stroke(accentColor);
    strokeWeight(2);
    
    // Flap opened up
    triangle(-w/2, -h/2, 0, -h/2 - 45, w/2, -h/2);
    
    // Flap line
    stroke(fillColor);
    strokeWeight(1);
    line(-w/2 + 10, -h/2, 0, -h/2 - 40);
    line(w/2 - 10, -h/2, 0, -h/2 - 40);
    
    // Letter
    fill(250, 241, 233);
    stroke(accentColor);
    strokeWeight(1.5);
    rect(-w/2 + 15, -h/2 - 5, w - 30, h - 20, 2);
    
    // Lines on the letter
    stroke(accentColor);
    strokeWeight(0.5);
    for (let i = 0; i < 4; i++) {
      let lineY = -h/2 + 5 + i * 8;
      line(-w/2 + 25, lineY, w/2 - 25, lineY);
    }
    
  } else {
    // envelop address side
    fill(accentColor);
    stroke(accentColor);
    strokeWeight(2);
    triangle(-w/2, -h/2, 0, -h/2 - 30, w/2, -h/2);
    
    // Flap  line
    stroke(fillColor);
    strokeWeight(1);
    line(-w/2 + 10, -h/2, 0, -h/2 - 25);
    line(w/2 - 10, -h/2, 0, -h/2 - 25);
    
    // lines
    stroke(accentColor);
    strokeWeight(1);
    for (let i = 0; i < 3; i++) {
      let lineY = -h/2 + 35 + i * 12;
      line(-w/2 + 20, lineY, w/2 - 20, lineY);
    }
  }
  
  pop();
}

// Stamp only on address side envelops
function drawStamp(x, y, size, fillColor) {
  push();
  translate(x, y);
  
  // Stamp backround
  fill(fillColor);
  stroke(200);
  strokeWeight(1);
  rect(-size/2, -size/2, size, size);
  
  // Dottded edges of stamp
  fill(255);
  noStroke();
  for (let i = 0; i < 5; i++) {
    let dotX = -size/2 + i * (size/4);
    ellipse(dotX, -size/2, 2, 2);
    ellipse(dotX, size/2, 2, 2);
    ellipse(-size/2, -size/2 + i * (size/4), 2, 2);
    ellipse(size/2, -size/2 + i * (size/4), 2, 2);
  }
  
  // Stamp Flower
  fill(220, 20, 60); 
  noStroke();
  
  ellipse(0, 0, size/3, size/3);
  
  for (let i = 0; i < 5; i++) {
    let angle = (TWO_PI / 5) * i;
    let petalX = cos(angle) * size * 0.2;
    let petalY = sin(angle) * size * 0.2;
    ellipse(petalX, petalY, size/4, size/4);
  }
  //put at end
  pop();
}

function draw() {
}