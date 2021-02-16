const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var  paperObject,groundObject	
var world;
var backGround,backGroundImage
var bird

function preload()
{
	backGroundImage = loadImage("Images/background.jpg");
  
}


function setup() {

	createCanvas(800,600);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;

	bird = new Bird(200,200,60);
	
	
	
	



	Engine.run(engine);
	
}


function draw() {
  
  background(backGroundImage);
  
  bird.display();

  


	



 
 
  
  Engine.update(engine)
 
}

function keyPressed(){
    if(keyCode === 32)
	{
		bird.velocityY = -12;
	}
	bird.velocityY = bird.velocityY + 0.8
}



