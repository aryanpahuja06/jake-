var path,pathImage
var jake,jakeImage
function preload(){
  pathImage=loadImage("path.png")
  jakeImage=loadAnimation("Jake1.png","Jake2.png","jake3.png","jake4.PNG","jake5.png")
  
  
  
  
  //pre-load images
}

function setup(){
  createCanvas(400,400);
path=createSprite(200,200)
  path.addImage(pathImage)
  path.velocityY=4
  path.scale=1.2
  
  jake=createSprite(180,340)
  jake.addAnimation("jakerunning",jakeImage)
  
  
  
  //create sprites here
}

function draw() {
  background(0);
  
  jake.x=mouseX
  
 if(path.y>400){
   path.y=height/2;
 } 
  
  
  
  
  
  
drawSprites();
}
