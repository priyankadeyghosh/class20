var f,m;
function setup() {
  createCanvas(1200,800);
  f=createSprite(200,200,50,80);
  f.shapeColor="blue";
  m=createSprite(400,200,80,30);
  m.shapeColor="blue";
}

function draw() {
  background(0,0,0);  
  m.x=World.mouseX;
  m.y=World.mouseY;
  if(m.x-f.x < m.width/2 + f.width/2){
    f.shapeColor="red";
    m.shapeColor="red";
  }
  drawSprites();
}