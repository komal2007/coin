var gameState='start';
var bgImg;
var game;
var playImg;
var playButton;
var track;
var trackImage;
var coinGroup, coinImage;


function preload(){
  bgImg = loadImage("Bg.jpg");
  playImg = loadImage("play.png");
  trackImage = loadImage("path.png");
  coinImage = loadImage("coin.png");
  
  

}

function setup() {
  createCanvas(displayWidth,displayHeight);
  game = new Game();
  coinGroup = new Group();

  playButton = createSprite(700,550);
  playButton.addImage(playImg);
  

  track = createSprite(530,300,displayWidth,displayHeight);
  track.scale=2;
  track.velocityY=5;

  
  

  



  

  

 
 
}

function draw() {
  background("white")

  spawnCoin();

  
 
  
  

if(gameState === "start"){
  game.start()
  if(mousePressedOver(playButton)){
    gameState = "play";
    console.log("yes");
  
  }
}





if(gameState === "play"){
  
  track.addImage(trackImage);

  
  if(track.y>displayHeight){
    track.y=track.height/2-500
  }
}

  



  
   
  drawSprites();
}

function mousePressed(){
  

}

function spawnCoin(){
  //write code here to spawn the coins
  if (frameCount % 60 === 0) {
    var coin = createSprite(600,120,40,10);
    coin.addImage(coinImage);
    coin.y = Math.round(random(280,320))
    coin.velocity=-1;
    coin.scale=0.15;
    
  }
  
}




