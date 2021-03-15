var f,m;
function setup() {
  createCanvas(1200,800);
  f=createSprite(200, 200, 50, 80);
  f.shapeColor="green";
  m=createSprite(400,200,80,30);
  m.shapeColor="green";
}

function draw() {
  background(0);  
  m.x=World.mouseX;
  m.y=World.mouseY;
  if(m.x-f.x < f.width/2 + m.width/2){
    m.shapeColor="red";
    f.shapeColor="red";
  }
  else {
    m.shapeColor="green";
    f.shapeColor="green";
  }
  drawSprites();
}