yPos = 500
diamM = 20
function setup(){
//put setup code here
    createCanvas(500,500);
    // Starts in the middle
    x = width / 2;
    y = height

}

function draw() {
  // put drawing code here
    background("#24ba35");
    // Draw a Circle
    noStroke();
    fill("#c9c9c9");
    ellipse(250,yPos,diamM,diamM);
    fill("#e5a236");
    ellipse(mouseX, mouseY, 50,50);
    yPos = yPos-3;
    fill("#000000");
    textSize(30);
    textFont("Courier New");
    textStyle(NORMAL);
    text("Quick, Catch the Mouse!",50,50);
}
    
function mousePressed(){
    if (mouseX >=230 && mouseX<=270 && mouseY>=yPos-20 && yPos+20){
        diamM=0;
    }

}