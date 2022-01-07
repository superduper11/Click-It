var clicks = 0;
var cursor,cursorImg;

function preload()
{
  cursorImg = loadImage("cursor.png")
}

function setup(){
  createCanvas(window.innerWidth,window.innerHeight);
  if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
    
  }else{
    cursor = createSprite(window.innerWidth/2,window.innerHeight/2,30,30);
    cursor.addImage("cursor",cursorImg);
    cursor.scale=0.2;
  }
}

function draw() {
  background("white")
  if(keyDown("r")||keyDown("backspace"))
  {
    clicks=0;
  }
  cursor.x=World.mouseX
  cursor.y=World.mouseY
  drawSprites();
  fill("black")
  textSize(30)
  text("Clicks: "+clicks,window.innerWidth/2-55,window.innerHeight/2)
  text("Press R or Backspace to reset clicks",window.innerWidth/2-235,window.innerHeight/2+40)
}

function mouseClicked()
{
  clicks=clicks+1;
}
window.addEventListener('touchend', function() {
  clicks=clicks+1;
 });

 document.title = 'Click!';
