/* Kaitlin Rattray
   rattray.k@northeastern.edu
   Course: Prototyping with Code
   Section: 04
   Assignment: #3
   Title: Self-Portrait
*/

function setup() {
  createCanvas(800, 600);
  background(245);
}

function draw() {
  background(173, 216, 230);
  noStroke();
  
  // Define key proportions based on canvas size (coding freind helped with)
  let centerX = width / 2;
  let centerY = height * 0.43;
  let scale = min(width, height) / 600; // Scale factor based on smallest dimension
  
  // hair back
  fill(92, 60, 36);
  ellipse(centerX, centerY + height * 0.07, width * 0.45 * scale, height * 0.7 * scale);
  
  // face
  fill(238, 190, 160);
  ellipse(centerX, centerY, width * 0.35 * scale, height * 0.53 * scale);
  
  // hair front
  fill(92, 60, 36);
  beginShape();
  vertex(width * 0.3125, height * 0.317);
  bezierVertex(width * 0.4, height * 0.117, width * 0.6, height * 0.117, width * 0.675, height * 0.3);
  vertex(width * 0.675, height * 0.35);
  vertex(width * 0.325, height * 0.35);
  endShape(CLOSE);
  
  // eyebrows
  stroke(70, 45, 28);
  strokeWeight(3 * scale);
  noFill();
  arc(centerX - width * 0.075, centerY - height * 0.058, width * 0.069 * scale, height * 0.033 * scale, PI, TWO_PI);
  arc(centerX + width * 0.075, centerY - height * 0.058, width * 0.069 * scale, height * 0.033 * scale, PI, TWO_PI);
  
  // eyes
  // eye white
  noStroke();
  fill(255);
  ellipse(centerX - width * 0.075, centerY - height * 0.017, width * 0.056 * scale, height * 0.053 * scale);
  ellipse(centerX + width * 0.075, centerY - height * 0.017, width * 0.056 * scale, height * 0.053 * scale);
  
  // eye blue
  fill(70, 120, 200);
  ellipse(centerX - width * 0.0725, centerY - height * 0.013, width * 0.0275 * scale, height * 0.037 * scale);
  ellipse(centerX + width * 0.0775, centerY - height * 0.013, width * 0.0275 * scale, height * 0.037 * scale);
  
  // eye black
  fill(0);
  ellipse(centerX - width * 0.07125, centerY - height * 0.012, width * 0.0125 * scale, height * 0.017 * scale);
  ellipse(centerX + width * 0.07875, centerY - height * 0.012, width * 0.0125 * scale, height * 0.017 * scale);
  
  // eye highlight
  fill(255, 255, 255, 200);
  ellipse(centerX - width * 0.06875, centerY - height * 0.017, width * 0.00625 * scale, height * 0.0083 * scale);
  ellipse(centerX + width * 0.08125, centerY - height * 0.017, width * 0.00625 * scale, height * 0.0083 * scale);
  
  // eyelids
  noFill();
  stroke(200, 150, 130);
  strokeWeight(2 * scale);
  arc(centerX - width * 0.075, centerY - height * 0.017, width * 0.056 * scale, height * 0.053 * scale, PI, TWO_PI);
  arc(centerX + width * 0.075, centerY - height * 0.017, width * 0.056 * scale, height * 0.053 * scale, PI, TWO_PI);
  
  // nose
  // oval
  noStroke();
  fill(220, 170, 150);
  ellipse(centerX, centerY + height * 0.058, width * 0.03125 * scale, height * 0.025 * scale);
  
  // line
  stroke(200, 150, 130);
  strokeWeight(1.5 * scale);
  noFill();
  line(centerX, centerY + height * 0.017, centerX - width * 0.0025, centerY + height * 0.05);
  
  // mouth
  // semi circle
  noStroke();
  fill(200, 100, 110);
  arc(centerX, centerY + height * 0.117, width * 0.0875 * scale, height * 0.058 * scale, 0, PI);
  
  // highlight
  fill(238, 190, 160);
  arc(centerX, centerY + height * 0.117, width * 0.0875 * scale, height * 0.033 * scale, PI, TWO_PI);
  
  // cheeks
  fill(240, 140, 140, 80);
  ellipse(centerX - width * 0.1, centerY + height * 0.042, width * 0.05 * scale, height * 0.05 * scale);
  ellipse(centerX + width * 0.1, centerY + height * 0.042, width * 0.05 * scale, height * 0.05 * scale);
  
  // neck
  noStroke();
  fill(238, 190, 160);
  rect(centerX - width * 0.05, centerY + height * 0.167, width * 0.1 * scale, height * 0.133 * scale, 20 * scale);
  
  // shirt
  // box
  fill(60, 90, 180);
  rect(centerX - width * 0.175, height * 0.7, width * 0.35 * scale, height * 0.3 * scale, 40 * scale);
  
  // top
  fill(50, 70, 150);
  triangle(centerX - width * 0.05, height * 0.7, centerX, height * 0.767, centerX + width * 0.05, height * 0.7);
  
  // arms
  stroke(60);
  strokeWeight(2 * scale);
  line(centerX - width * 0.125, height * 0.767, centerX - width * 0.175, height * 0.867);
  line(centerX + width * 0.125, height * 0.767, centerX + width * 0.175, height * 0.867);
  
  // name
  noStroke();
  fill(50);
  textSize(18 * scale);
  text("Kaitlin Rattray", width - 140 * scale, height - 20 * scale);
  
  noLoop();
}