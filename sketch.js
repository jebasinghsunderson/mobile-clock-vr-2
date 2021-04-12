var hr,mim,sec;
var hrangle,secangle,minangle;

function setup() {
  createCanvas(400,windowWidth);
   angleMode(DEGREES)
}

function draw() {
  background("black");
  stroke("white")
  textSize(20)
  text(hr%12+":"+min+":"+sec,30,30)
  
  translate(105,200)
  rotate(-90)
  //calculating  time using predefined function
  hr = hour();
  min= minute();
  sec = second();

 
  //to create interactive rotation
  secangle= map(sec,0,60,0,360);
  minangle= map(min,0,60,0,360);
  hrangle= map(hr%12,0,12,0,360);
  //second hand
  push();
  rotate(secangle);
 
  stroke("green");
  strokeWeight(5);
  line(0,0,70,0);
  pop();

  //minute hand
  push();
  rotate(minangle);
  
  stroke("yellow");
  strokeWeight(5);
  line(0,0,50,0);
  pop();

  //hour hand
  push();
  rotate(hrangle);
  
  stroke("blue");
  strokeWeight(5);
  line(0,0,30,0);
  pop();

  stroke("blue");
  point(0,0);
 
  //drawing arc
  strokeWeight(8);
  noFill();
  stroke("green")
  arc(0,0,200,200,0,secangle);
  stroke("yellow")
  arc(0,0,180,180,0,minangle);
  stroke("blue")
  arc(0,0,160,160,0,hrangle);

  
 
}