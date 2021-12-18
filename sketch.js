var clicks = 0;
var cursor,cursorImg;

function preload()
{
  cursorImg = loadImage("cursor.png")
}

function setup(){
  createCanvas(window.innerWidth,window.innerHeight);
  cursor = createSprite(window.innerWidth/2,window.innerHeight/2,30,30);
  cursor.addImage("cursor",cursorImg);
  cursor.scale=0.2;
  
}

function draw() {
  background("white")
  cursor.x=World.mouseX
  cursor.y=World.mouseY
  drawSprites();
  fill("black")
  textSize(30)
  text("Clicks: "+clicks,window.innerWidth/2-55,window.innerHeight/2)
}

function mouseClicked()
{
  clicks=clicks+1;
}
window.addEventListener('touchend', function() {
  clicks=clicks+1;
 });
