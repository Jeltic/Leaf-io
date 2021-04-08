function setup(){createCanvas(windowWidth, windowHeight);}
function windowResized(){resizeCanvas(windowWidth, windowHeight);}
function levelBarOutline() {
  noStroke();
  fill(0,0,0);
  rect(5, windowHeight - 20, windowWidth - 10, 15, 5);
}
var xpRange;
var xp;
function levelBarInside() {
  xpRange = 
  noStroke();
  fill(255,204,0);
  rect(8, windowHeight - 18, windowWidth, 10, 4);
}

function hpBarOutline(){
  
}
function draw() {
  background(51);
  levelBarOutline();
  levelBarInside()
}  

