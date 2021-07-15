var PLAY=1;
var END=0;
var gameState=1;

var path,boy,cash,diamonds,jwellery,sword;
var pathImg,boyImg,cashImg,diamondsImg,jwelleryImg,swordImg;
var treasureCollection = 0;
var cashG,diamondsG,jwelleryG,swordGroup;

function preload(){
  
}

function setup(){
  
  createCanvas(400,400);
// Moving background

//creating boy running
boy = createSprite(70,330,20,20);
boy.shapeColor = 255;
  
  
cashG=new Group();
diamondsG=new Group();
jwelleryG=new Group();
swordGroup=new Group();

}

function draw() {

  background(0);
  boy.x = World.mouseX;
  
  edges= createEdgeSprites();
  boy.collide(edges);
  
  //code to reset the background
  
  
  
    createCash();
    createDiamonds();
    createJwellery();
    createSword();

    if (cashG.isTouching(boy)) {
      cashG.destroyEach();
      treasureCollection = treasureCollection+50;
    }
    else if (diamondsG.isTouching(boy)) {
      diamondsG.destroyEach();
      treasureCollection = treasureCollection+50;
    }else if(jwelleryG.isTouching(boy)) {
      jwelleryG.destroyEach();
      treasureCollection = treasureCollection+50;
    }else{
      if(swordGroup.isTouching(boy)) {
        gameState = END;
        swordGroup.destroyEach();
        cashG.destroyEach();
        diamondsG.destroyEach();
        jwelleryG.destroyEach();
        
        cashG.lifetime = 0.01;
        treasureCollection = treasureCollection+0;        
        diamondsG.lifetime = 0.01;
        treasureCollection = treasureCollection+0;
        jwelleryG.lifetime = 0.01;
        treasureCollection = treasureCollection+0;
    }
  }

  drawSprites();
  textSize(20);
  fill(255);
  text("Treasure: "+ treasureCollection,150,30);

}

function createCash() {
  if (World.frameCount % 50 == 0) {
  var cash = createSprite(Math.round(random(50, 350),40, 10, 10));
  cash.shapeColor = 108;
  cash.velocityY = 3;
  cash.lifetime = 150;
  cashG.add(cash);
  }
}

function createDiamonds() {
  if (World.frameCount % 80 == 0) {
  var diamonds = createSprite(Math.round(random(50, 350),40, 10, 10));
  diamonds.shapeColor = 46;
  diamonds.velocityY = 3;
  diamonds.lifetime = 150;
  diamondsG.add(diamonds);
}
}

function createJwellery() {
  if (World.frameCount % 80 == 0) {
  var jwellery = createSprite(Math.round(random(50, 350),40, 10, 10));
  jwellery.shapeColor = 122;
  jwellery.velocityY = 3;
  jwellery.lifetime = 150;
  jwelleryG.add(jwellery);
  }
}

function createSword(){
  if (World.frameCount % 150 == 0) {
  var sword = createSprite(Math.round(random(50, 350),40, 10, 10));
  sword.shapeColor = 248;
  sword.velocityY = 3;
  sword.lifetime = 150;
  swordGroup.add(sword);
  }
}