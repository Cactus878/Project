var seaImg
var ship
var spriteName
function preload(){

}

function setup(){
  createCanvas(400,400);
  
  seaImg = loadImage("sea.png");
  ship = loadAnimation("ship-1.png", "ship-2.png", "ship-3.png", "ship-4.png")
  spriteName.addImage(seaImg);
}

function draw() {
  background("blue");
  if(spriteName.x < 0){
    spriteName.x = spriteName.width/2;
  }

  }