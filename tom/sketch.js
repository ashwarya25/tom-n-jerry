var tom,tomImg;
var jerry,jerryImg;
var spike,spikeImg,spikeGroup
var coin,coinImg;
var climber,climberImg,climberGroup;
var cloud,cloudImg;
var bg;
var t
var p
var tom2Img;
var invisibleBlock,invisibleBlockGroup;
var PLAY=1;
var END=0;
var gameState=1;
var h=2000;
var gameOver;
function preload(){
bg=loadImage("background.png")
  tomImg=loadImage("Tom.png")
  climberImg=loadImage("climber.png")
  spikeImg=loadImage("Spike.png")
  jerryImg=loadImage("Jerry.png");
  tom2Img=loadImage("tom2.png");
  gameoverImg=loadImage("go.jpg")
}

function setup()
 {
  createCanvas(600,1200);

  ground=createSprite(300,1200,600,10);
  ground.shapeColor="brown";
  tom= createSprite(500, 1170, 50, 50);
  tom.addImage("tom",  tomImg)
  //tom.addImage("right",tom2Img)
  tom.scale=0.3;
  //tom.debug=true;
    tom.setCollider("rectangle",0,0,100,150);
  climberGroup = createGroup();
  invisibleBlockGroup = createGroup();
  spikeGroup=createGroup();

  jerry=createSprite(170,130,20,20);
  jerry.addImage(jerryImg);
  jerry.scale=0.2;
 
  spawnClimbers();
  gameOver=createSprite(300,600,100,800)
gameOver.addImage(gameoverImg);
gameOver.height=gameOver.height*4;
gameOver.scale=1.5;
  gameOver.visible=false;
}

function draw() {
  background(bg); 
  
if (gameState===1) {
  camera.position.x=300;
  //camera.position.y=ground.y;
  if (keyDown("y")) {
    tom.velocityY=-10;
    0;
}
tom.velocityY=tom.velocityY+0.5;

 tom.collide(ground);
 if (keyDown(RIGHT_ARROW)) {
   tom.x=tom.x+3;
   tom.changeImage(tom2Img)
 }
 if (keyDown(LEFT_ARROW)) {
  tom.x=tom.x-3;
  //tom.changeImage("tom",  tomImg)
}
  if (tom.isTouching(invisibleBlockGroup)) {
    tom.velocityX=0;
    tom.velocityY=0;
   
  }
  if (tom.isTouching(spikeGroup)) {
   gameState=0;
  }
} else
if(gameState===0) {
  tom.velocityX=0;
  tom.velocityY=0;
  gameOver.visible=true;

}

  drawSprites();
}
function spawnClimbers() {
  if (frameCount%200===0) {
   for(var i =1100;i>0;i=i-100){
      climber=createSprite(100,h-i,50,20);
     
      climber.addImage(climberImg);
      climber.x=random(20,500);
 
     
    
        
    
      
      climberGroup.add(climber)
   
      climber.setCollider("rectangle",0,0,100,70);
   
      invisibleBlock=createSprite(10,10,30,30);
      invisibleBlock.shapeColor="red"
      invisibleBlock.x=climber.x;
      invisibleBlock.y=climber.y-22;
      invisibleBlock.width=climber.width;
      invisibleBlock.height=1;
      invisibleBlock.visible=false;

      tom.depth=climber.depth;
      invisibleBlockGroup.add(invisibleBlock);
      //climber.debug=true;
     
      //tom.collide(climberGroup);
      
      spike=createSprite(100,100,50,20);
      spike.addImage(spikeImg);
      t=climber.x+80;
      p=random(10,100)
      spike.x=t-p;
      spike.y=climber.y-60;
      //invisibleBlock.width=climber.width;
      //invisibleBlock.height=1;
      spike.scale=0.3;

      spikeGroup.add(spike);
      //spike.debug=true;
      spike.setCollider("circle",0,0,75)
      tom.depth=spike.depth;
  }

}

}
