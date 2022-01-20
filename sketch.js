var car1, car2, car3;
var BananaObstacle;
var racetrack;

var car1Img, car2Img, car3Img;
var BananaObstacleImg;
var racetrackImg;

function preload(){
  car1Img=loadImage("Imagenes/6hEEAJ.png")
  car2Img=loadImage("Imagenes/bzT6pT.png")
  car3Img=loadImage("Imagenes/cd2AUN.png")
  BananaObstacleImg=loadImage("Imagenes/BananaMK8.png")
  racetrackImg=loadImage("Imagenes/RaceCircuitRedBull2.jpg")
}

function setup(){
createCanvas(2160,1440)
car1=createSprite(1000,200);
car1.addImage(car1Img);
car1.scale=0.15
car2=createSprite(1200,200);
car2.addImage(car2Img);
car2.scale=0.15
car3=createSprite(1400,200);
car3.addImage(car3Img);
car3.scale=0.15
}

function draw(){
  //if(racetrackImg)
  background(racetrackImg)
  noStroke();
  textSize(30)
  text(mouseX+","+mouseY,mouseX,mouseY)
  invisibleBlock();
  drawSprites();
}

function invisibleBlock(){
var invisibleBlock1 = createSprite(1340,300,810,5)
var invisibleBlock2 = createSprite(1340,120,1000,5)
var invisibleBlock3 = createSprite(1340,410,810,5)
var invisibleBlock4 = createSprite(1600,580,790,5)
var invisibleBlock5 = createSprite(1350,750,790,5)
var invisibleBlock6 = createSprite(924,540,5,500)
var invisibleBlock7 = createSprite(680,440,40,400)
var invisibleBlock8 = createSprite(425,550,40,500)
var invisibleBlock9 = createSprite(150,550,40,600)

invisibleBlock1.visible=false;
invisibleBlock2.visible=false;
invisibleBlock3.visible=false;
invisibleBlock4.visible=false;
invisibleBlock5.visible=false;
invisibleBlock6.visible=false;
invisibleBlock7.visible=false;
invisibleBlock8.visible=false;
invisibleBlock9.visible=false;
}