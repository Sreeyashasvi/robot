var easing=0.04;
var neckHeight=70;
var bodyHeight=160;
var x=60;
var y=440;
var radius=45;
function setup(){
    createCanvas(360,480);
    strokeWeight(2);
    ellipseMode(RADIUS);

}
function draw(){
    background("white");
    var targetX=mouseX;
    x=x+(targetX-x)*easing;
    if(mouseIsPressed){
        neckHeight=16;
        bodyHeight=90;
    }
    else{
        neckHeight=70;
        bodyHeight=160;
 }
     var neckY=y-bodyHeight-neckHeight-radius;
     steoke=100;
     line(x+12,y-bodyHeight,x+12,neckY);
 line(x+12,neckY,x-18,neckY-43);
  line(x+12,neckY,x+42,neckY-99); 
  line(x+12,neckY,x+78,neckY+15);
  noStroke();
  fill("black");
  ellipse(x,y-33,33,33);
  fill("black");
  rect(x-45,y-bodyHeight,90,bodyHeight-33);
  fill("black");
  ellipse(x+12,neckY,radius,radius);
  fill("white");
  ellipse(x+24,neckY-60,14,14);
  ellipse(x+24,neckY-6,3,3);
}