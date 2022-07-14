var ball;
var ground;
var leftSide;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	
	createCanvas(1000, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var ball_options={
	isStatic:false,
	restitution:0.3,
	friction:0,
	destiny:1.2
	}
	ball = Bodies.circle(260,100,20,ball_options)
	World.add(world,ball)
	ground=new Ground(500,395,1000,6);
	//leftSide = new ground(1100,600,20,120);
	rectMode(CENTER)
	ellipseMode(RADIUS)
    
}


function draw() {
  //rectMode(CENTER);
  background(51);
  ground.show(); 
  Engine.update(engine)
 
}



