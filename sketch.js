var car;
var wall;
var speed;
var weight;
var deformation;
var GreenSignal;
var YellowSignal;
var RedSignal;
function setup() {
  createCanvas(1600,400);
  car = createSprite(100, 100, 50, 25);
  car.shapeColor = "White";
  wall = createSprite(1565,100,60,200);
  wall.shapeColor = "black";
  speed = random(55,90);
  weight = random(400,1500);
  car.velocityX = speed;
  GreenSignal = createSprite(650,300,50,100);
  GreenSignal.shapeColor = "White";
  YellowSignal = createSprite(800,300,50,100);
  YellowSignal.shapeColor = "white";
  RedSignal = createSprite(950,300,50,100);
  RedSignal.shapeColor = "white";
}

function draw() {
  background("gray");  
  drawSprites();
  
  
  if(wall.x-car.x<(wall.width/2+car.width)/2){
    car.velocityX = 0;
    deformation = (0.5 * weight * speed * speed)/22500;
    if(deformation<100){
      GreenSignal.shapeColor = color("Lime");
    }
    if(deformation<180 && deformation>100){
      YellowSignal.shapeColor = color("Yellow");
    }
    if(deformation>180){
      RedSignal.shapeColor = color("Red");
    }
  }
  
  
}