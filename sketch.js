var shipImg,ship,seaImage,sea;
function preload() {
  
 shipImg=loadAnimation("ship-1.png", "ship-2.png") 
 seaImage=loadImage("sea.png") 

}
function setup() {
  createCanvas(400,400);
  
  
sea=createSprite(10,30,50,10);
sea.addImage("sea", seaImage)
sea.x=sea.width/2
sea.velocityX=-2;

ship=createSprite(100,200,20,20)
  ship.addAnimation("ship",shipImg)
ship.scale=0.2


}
function draw() {
  
  background("blue");
  


if (sea.x < 0) {
  sea.x = sea.width / 2;
}

drawSprites() 
  
}  
