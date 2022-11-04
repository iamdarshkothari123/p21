
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{var ball;
	var ball_options={
		restitution:0.3,
		friction:0,
		density:1.2


	
}

function setup() {
	createCanvas(900, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
matter.bodies.circle (x, y, radius,[options] , [maxSides])  ;
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 ground0bj.display();
ground0bj=new ground(width/2,670,width, 20);
leftside = new ground (1100,600,20,120);
}


function keypressed () {
	if (keycode === UP_ARROW)