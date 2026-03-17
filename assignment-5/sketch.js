/*
Kaitlin Rattray
rattray.k@northeastern.edu
Prototyping with Code
ARTG2262
Assignment 5
Screen Saver: Alternating Orbs
*/

// Global Variables
let orbs = [];
let particles = [];

// Animetion parameiters
let orbCount;
let orbSpeed;
let waveAmplitude;
let waveFrequency;
let orbSize;
let timeDisplaySize;
let baseHueOffset;
let particleEmissionRate;


// Setup Function
function setup() {
    createCanvas(windowWidth, windowHeight);
    initializeVariables();

    for (let i = 0; i < orbCount; i++) {
        orbs.push(new Orb(i));
    }

    noStroke();
    colorMode(HSB, 360, 100, 100, 100);
}


// Initialize Variables
function initializeVariables() {
    orbCount = floor(width / 110);
    orbSpeed = width * 0.00035;
    waveAmplitude = height * 0.14;
    waveFrequency = 0.009;
    orbSize = width * 0.032;
    timeDisplaySize = width * 0.07;
    baseHueOffset = random(180, 230);
    particleEmissionRate = 1.5;
}


// Draw Funciton
function draw() {
    let bgHue = 200 + sin(frameCount * 0.0008) * 30;
    let bgSat = 25 + sin(frameCount * 0.0005) * 8;
    let bgBri = 15 + sin(frameCount * 0.0003) * 5;
    background(bgHue, bgSat, bgBri, 100);

    for (let orb of orbs) {
        orb.update();
        for (let i = 0; i < particleEmissionRate; i++) {
            particles.push(new Particle(orb.x, orb.y, orb.hue, orb.size));
        }
    }

    for (let i = particles.length - 1; i >= 0; i--) {
        particles[i].update();
        particles[i].display();
        if (particles[i].isDead()) {
            particles.splice(i, 1);
        }
    }

    for (let orb of orbs) {
        orb.display();
    }

    displayTime();
}


// Time
function displayTime() {
    let h = hour();
    let m = minute();
    let s = second();
    let d = day();
    let mo = month();
    let yr = year();

    let padding = width * 0.04;
    let x = padding;
    let y_pos = padding;

    let displayHour = h % 12;
    if (displayHour === 0) displayHour = 12;
    let ampm = h >= 12 ? "PM" : "AM";

    fill(0, 0, 100, 95);
    textSize(timeDisplaySize * 0.28);
    textAlign(LEFT, TOP);
    textFont('Arial');

    let dayName = ['SUN','MON','TUE','WED','THU','FRI','SAT'];
    let currentDayName = dayName[new Date().getDay()];

    let monthName = ['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC'];
    let currentMonth = monthName[mo - 1];

    let dateStr = currentDayName + "  •  " + nf(d,2) + " " + currentMonth + " " + yr;
    text(dateStr, x, y_pos);

    fill(0, 0, 100, 100);
    textSize(timeDisplaySize * 0.65);

    let timeStr = nf(displayHour,2) + ":" + nf(m,2) + ":" + nf(s,2) + "  " + ampm;
    text(timeStr, x, y_pos + timeDisplaySize * 0.32);
}


// Particle
class Particle {
    constructor(x, y, hue, orbSize) {
        this.x = x;
        this.y = y;
        this.hue = 190 + random(-40, 40);
        this.life = 255;
        this.maxLife = random(20, 60);
        this.size = orbSize * random(0.08, 0.25);

        let angle = random(TWO_PI);
        this.vx = cos(angle) * random(0.3, 1.5);
        this.vy = sin(angle) * random(0.3, 1.5);
    }

    update() {
        this.x += this.vx;
        this.y += this.vy;
        this.life -= this.maxLife / 30;
        this.vx *= 0.92;
        this.vy *= 0.92;
    }

    display() {
        let alpha = map(this.life, this.maxLife, 0, 60, 0);
        fill(this.hue, 70, 90, alpha);
        noStroke();
        circle(this.x, this.y, this.size);
    }

    isDead() {
        return this.life <= 0;
    }
}


// Orb
class Orb {
    constructor(index) {
        this.index = index;

        this.x = (index / orbCount) * width + random(-width * 0.05, width * 0.05);
        this.y = height * 0.5;

        this.vx = orbSpeed * random(0.5, 2) * (random() < 0.5 ? 1 : -1);
        this.size = orbSize * random(0.7, 1.3);
        this.maxSize = this.size;

        this.hue = random(190, 230);
        this.saturation = random(40, 70);

        this.pulsePhase = random(TWO_PI);
        this.wavePhase = random(TWO_PI);
    }

    update() {
        this.x += this.vx;

        if (this.x > width + this.size) {
            this.x = -this.size;
            this.y = random(height * 0.15, height * 0.85);
            this.wavePhase = random(TWO_PI);
        } else if (this.x < -this.size) {
            this.x = width + this.size;
            this.y = random(height * 0.15, height * 0.85);
            this.wavePhase = random(TWO_PI);
        }

        let waveMotion = sin(frameCount * waveFrequency + this.index + this.wavePhase) * waveAmplitude;
        this.y = height * 0.5 + waveMotion;

        let pulseAmount = sin(frameCount * 0.02 + this.index + this.pulsePhase);
        this.size = this.maxSize * (0.75 + pulseAmount * 0.25);
    }

    display() {
        // Radial fade
        fill(this.hue, this.saturation * 0.4, 100, 20);
        circle(this.x, this.y, this.size * 2.4);

        fill(this.hue, this.saturation * 0.55, 98, 45);
        circle(this.x, this.y, this.size * 1.7);

        fill(this.hue, this.saturation * 0.7, 96, 100);
        circle(this.x, this.y, this.size);
    }
}


// Reponsive Resize
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    initializeVariables();

    orbs = [];
    for (let i = 0; i < orbCount; i++) {
        orbs.push(new Orb(i));
    }
}


// Keyboard Controls
function keyPressed() {
  // r to change make orbs random again
    if (key === 'r' || key === 'R') {
        baseHueOffset = random(180, 230);
        orbs = [];
        for (let i = 0; i < orbCount; i++) {
            orbs.push(new Orb(i));
        }
        return false;
    }
  // s for full screen
    if (key === 's' || key === 'S') {
        fullscreen(!fullscreen());
        return false;
    }
}