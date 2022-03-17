

function setup(){
    // setup
    createCanvas(500, 500);
}

var x = 250;
var y = 250;




function draw(){
    let dx = 5;
    let dy = 5;
    // do stuff
    background(250);
    // if(mouseIsPressed){
    //     fill(0);
    // } else {
    //     fill(255);
    // }
    // ellipse(mouseX, mouseY, 80, 80);
    
    // for(i = 0; i < 200; i = i + 5){
    //     ellipse(i,i, 50, 50);
    // }
    x += dx;
    if(x < 0 || x > width){
        dx = -dx;
    }
    
    
    stroke(255, 0, 0);
    fill(0);
    ellipse(x, y, 50, 50);
    
    


}

function mousePressed(){
    
}