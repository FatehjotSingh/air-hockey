var  player1,player2;
var p1Img,p2Img;
var p1S,p2S;
var gameState,edges;
var backgroundImg,back
var s,sI

function preload(){
  backgroundImg=loadImage("image bases/Stage.png")
  p1Img=loadImage("image bases/Schtick 1.png")
  p2Img=loadImage("image bases/Schtick 2.png")
  sI=loadImage("image bases/striker.png")
}


function setup() {
  createCanvas(1100,530)
  edges=createEdgeSprites();
  
 player1 = createSprite(800,280,70,10);
 player1.addImage(p1Img)
 player1.setCollider("circle",0,0,30)
 player2 = createSprite(300,280,70,10);
 player2.addImage(p2Img)
 player2.setCollider("circle",0,0,30)
 s = createSprite(550,280,10,10);
 s.addImage(sI)
 s.setCollider("circle",0,0,22)
l1=createSprite(937,280,10,500)
l2=createSprite(162,280,10,500)
l3=createSprite(600,78.5,1000,10)
l4=createSprite(600,510,1000,10)
g1=createSprite(165,280,10,200)
g2=createSprite(933,280,10,200)
l1.visible=false
l2.visible=false
l3.visible=false
l4.visible=false
g1.visible=false
g2.visible=false


 gameState = "serve"

  p1S=0
  p2S=0
  
}

function draw() {
 background(backgroundImg)
 player1.setVelocity(0,0)
 player2.setVelocity(0,0)
  if (gameState === "serve") {
    textSize(20);
    s.setVelocity(0,0)
    s.x=550
    s.y=280
    fill("red");
    text("Press Space to Strike",50,50);
  }
   textSize(20);
   fill("white")
   text(p2S,500,50)
   text(p1S,600,50)

  
  function serve() {
  s.velocityX = 16;
  s.velocityY = 1;
}

function reset() {
  //s.x = 200;
  //s.y = 200;
  //s.velocityX = 0;
  //s.velocityY = 0;
}
  
  

  s.bounceOff(player1);
  s.bounceOff(player2);
  s.bounceOff(l1)
  s.bounceOff(l2)
  s.bounceOff(l3)
  s.bounceOff(l4)
  player1.bounceOff(player2);
  player1.bounceOff(l1)
  player1.bounceOff(l2)
  player1.bounceOff(l3)
  player1.bounceOff(l4)
  player2.bounceOff(player1);
  player2.bounceOff(l1)
  player2.bounceOff(l2)
  player2.bounceOff(l3)
  player2.bounceOff(l4)
  
  
 
  
  if (keyDown("space") && gameState === "serve") {
    serve();
    gameState = "play";
  }
  if (keyDown("up")){
    player1.velocityY= -16
  }
  if (keyDown("down")){
    player1.velocityY= 16;
  }
  if (keyDown("left")){
    player1.velocityX= -16
  }
  if (keyDown("right")){
    player1.velocityX= 16
  } 
  if (keyDown("w")){
    player2.velocityY= -16
  }
  if (keyDown("s")){
    player2.velocityY= 16;
  }
  if (keyDown("a")){
    player2.velocityX= -16
  }
  if (keyDown("d")){
    player2.velocityX= 16
  } 
  
 
 
    if((s.isTouching(g1) || s.isTouching(g2)) && frameCount%2===0) {
      
    if(s.isTouching(g2)){
      p2S++
    }
    if(s.isTouching(g1)){
      p1S++
    }
    reset();
    gameState = "serve";
    }
   if(p1S===10||p2S===10){
      gameState = "end";
      textSize(25);
      fill("red")
      text("GAME OVER",550,265);
      text ("Press R to Restart",550,365);
  }
  if(keyDown("r") && gameState==="end"){
    p1S=0;
    p2S=0;
    gameState="serve";
    
  }

  drawSprites();
}