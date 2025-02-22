let angle = 0;
let slider;

function setup() {
    createCanvas(800, 600);
    slider = createSlider(0, PI, PI/4, 0.01);
    slider.position(10, 10);
    angleMode(RADIANS);
}

function draw() {
    background(220);
    angle = slider.value();
    stroke(0, 0, 255);
    translate(width/2, height);
    branch(120);
}

function branch(len) {
    line(0, 0, 0, -len);
    translate(0, -len);
    
    if (len > 4) {
        push();
        rotate(angle);
        branch(len * 0.67);
        pop();
        
        push();
        rotate(-angle);
        branch(len * 0.67);
        pop();
    }
}