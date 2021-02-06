var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 

  
var detective,detect_img;
var play_button,next;
var next_button,next1_button,next2_button,next3_button,next4_button;
var background,bg0,bg1,bg2,bg4,bg5,bg6,bg7,bg8,bg9,bg10,bg11,bg12,bg13,bg14,bg15,bg16,bg17,bg18,bg19;
var killed;
var gameState = 0;
var start = 0;
var play = 1;

 var container = document.querySelector(".text");

 var speeds = {
    pause: 500, //Higher number = longer delay
    slow: 120,
    normal: 90,
    fast: 40,
    superFast: 10
 };
 
function preload(){
  detect_img = loadImage("images/detective.png");
  bg0 = loadImage("images/start.png");
  bg1 = loadImage("images/house.png");  
  bg2 = loadImage("images/0.PNG");
  bg3 = loadImage("images/1.PNG");
  bg4 = loadImage("images/2.PNG");
  bg5 = loadImage("images/3.PNG");
  next = loadImage("images/arrow.png");
}

function setup(){
 createCanvas(1200,750);
 background = createSprite(600,375,50,50);
 background.addImage(bg0);
 detective = createSprite(150,600,50,50);
 detective.addImage(detect_img);
 play_button =createSprite(643,520,400,200);
 play_button.visible = false;
 next_button = createSprite(1100,600,400,400);
 next_button.visible = false;
 next_button.scale = 0.2;
 next1_button = createSprite(1100,500,400,400);
 next1_button.visible = false;
 next1_button.scale = 0.2;
 next2_button = createSprite(1100,400,400,400);
 next2_button.visible = false;
 next2_button.scale = 0.2;
 next3_button = createSprite(1100,300,400,400);
 next3_button.visible = false;
 next3_button.scale = 0.2;
 next4_button = createSprite(1100,200,400,400);
 next4_button.visible = false;
 next4_button.scale = 0.2;
    
}

function draw(){
  if (mousePressedOver(play_button) && gameState === start){
    background.addImage(bg1);
    detective.visible = false;
    next_button.visible = true;
    next_button.addImage(next);
    
    gameState = play
  }
  if (mousePressedOver(next_button)&&gameState === play ){
    background.addImage(bg2);
    next_button.visible = false;
    next1_button.addImage(next);
    next1_button.visible = true;
    gameState=2;
  }
  if(mousePressedOver(next1_button)&&gameState===2){
    background.addImage(bg3);
    next1_button.visible = false;
    next2_button.addImage(next);
    next2_button.visible = true;
    gameState=3;

  }
  if(mousePressedOver(next2_button)&&gameState===3){
    background.addImage(bg4);
    next2_button.visible = false;
    next3_button.addImage(next);
    next3_button.visible = true;
    gameState=4;

  }
  if(mousePressedOver(next3_button)&&gameState===4){
    background.addImage(bg5);
    next3_button.visible = false;
    next4_button.addImage(next);
    next4_button.visible = true;
    gameState=5;

  }
        
      
 
 
  drawSprites();
  text("("+mouseX+","+mouseY+")",mouseX,mouseY);
}   

