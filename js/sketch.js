function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0);
}   

function draw() {
    if (random(1) < 9) {
        let x = random(width);
        let y = random(height);
        let r = random(255);

        fill(r, 255, 255, 180);
        noStroke();
        ellipse(x, y, 50, 50);

    }
    fill (0,10);
    rect(0,0,width,height);

    if (mouseIsPressed) {
        fill(255);
        ellipse(mouseX, mouseY, 80, 80);
    }

    if (keyIsPressed) {
        clear();
        background(0);
    }


}