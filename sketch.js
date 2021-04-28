var cat 
var mouse
var backGround
var backGroundImage;
var catImage;
var mouseImage;
var mouseLock


function preload() {
//createCanvas(600,600)
backGroundImage = loadImage('images/garden.png');
mouseImage = loadAnimation('images/jerryOne.png','images/jerryTwo.png','images/jerryThree.png','images/jerryFour.png');
catImage = loadAnimation('images/tomOne.png','images/tomTwo.png','images/tomThree.png','images/tomFour.png');


}

function setup(){
  createCanvas(800,800);
  backGround = createSprite(300,300,800,800);
  backGround.addImage(backGroundImage);

  mouse = createSprite(100,570,50,50)
  
mouse.addAnimation("mouseTaunting",mouseImage);
  mouse.scale=0.1
  
  cat = createSprite(700,570,50,50);
  cat.addAnimation("catRunning",catImage)
  cat.scale=0.15
 
}

function draw() {
    background(255);
  
    drawSprites();
}


function keyPressed(){


if(keyCode === LEFT_ARROW){
 cat.velocityX = -5
 cat.addAnimation("catRunning")


}

}
