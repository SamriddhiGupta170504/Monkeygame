var monkey, banana, obstacle,monkeyImage,bananaImage,obstacleImage;
var bananaGroup,obstacleGroup,score;

function preload(){
  
  monkeyImage=loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png",
 "sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  
  bananaImage=loadImage("banana.png")
  obstacleImage=loadImage("obstacle.png")
  
}

function setup(){
  
  createCanvas(600,300)
  
  monkey=createSprite(50,250,1,1)
  monkey.addAnimation("running",monkeyImage)
  monkey.scale=0.1
  
  ground=createSprite(300,283,600,10)
  ground.velocityX=-5
  
  bananaGroup=new Group()
  obstacleGroup=new Group()
  
  score=0;
}

function draw(){
  
  background("green")
  
  fill("black")
  text("Score: "+ score,550,50)
  if(ground.x<620){
    ground.x=ground.width/2;
  }
  
  if(keyDown("space")){
    monkey.velocityY=-12;
  }
  
  monkey.velocityY=monkey.velocityY+0.6
  monkey.collide(ground)
  
  spawnbanana();
  
  
  if(bananaGroup.isTouching(monkey)){
    bananaGroup.destroyEach()
    score=score+1          
  }
  
  spawnobstacles();
  
  if(obstacleGroup.isTouching(monkey)){
    ground.velocityX=0
    monkey.velocityY=0
    bananaGroup.setvelocityXEach=0
    obstacle.velocityX=0;
    obstacleGroup.setlifetimeEach(-1)
    
  }
  
  drawSprites();

}

function spawnbanana(){
  
  if(frameCount%150===0){
    
    banana=createSprite(620,90,1,1)
    banana.addImage(bananaImage)
    banana.scale=0.1
    banana.velocityX=-9
    bananaGroup.add(banana)
    monkey.depth=banana.depth;
    monkey.depth=monkey.depth+1;
    banana.lifetime=620;
  }
}

function spawnobstacles(){
  
  if(frameCount%100===0){
    obstacle=createSprite(620,265,1,1)
    obstacle.addImage(obstacleImage)
    obstacle.scale=0.1;
    obstacle.velocityX=-9
    obstacle.lifetime=600;
    obstacleGroup.add(obstacle)
  }
}




