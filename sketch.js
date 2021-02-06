var hr,min,sec
var scAngle,mnAngle,hrAngle;
var hrArc

function setup() {
  createCanvas(400,400);
  createSprite(400, 200, 50, 50);
 
}

function draw() {
  background(0,0,0);
  


   fill("black");

  strokeWeight(7);
  stroke(7);
 
 
  circle =  ellipse(200,200,250);
  hr = hour();
  min = minute();
  sec = second();  
  scAngle= map(sec,0,60,0,360);

  translate(200,200)
 
  rotate(-90);
  push();
  rotate(scAngle)
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,100,0);
  pop();
  mnAngle = map(min,0,60,0,360);
  push();
  rotate(mnAngle)
  stroke(0,255,0);
  strokeWeight(7);
  line(0,0,75,0);
  pop();
  hrAngle= map(hr%12,0,12,0,360) + map(min,0,60,0,30) ;
 
  push();
  rotate(hrAngle)
  stroke(0,0,255);
  strokeWeight(7);
  line(0,0,50,0);
  pop();
  strokeWeight(7);
  
 
  stroke("red");
  noFill();
  arc(0,0, 300, 300, 0, scAngle );
  stroke(0,255,0)
  arc(0,0, 280, 280, 0, mnAngle );
  stroke(0,0,255)
  arc(0,0, 260, 260, 0, hrAngle );
  drawSprites();
}