
var bg, bgImage;



function preload()
{
  bgImage=loadImage("./assets/UnderWaterBg3.jpg");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  bg= createSprite(displayWidth / 2 -20, displayHeight / 2 -40,20,20);
  bg.addImage(bgImage);
 
}

function draw() 
{
  
  drawSprites();
}


