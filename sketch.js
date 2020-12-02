
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
  leftRect=new Dustbin(690,360,20,100)
  downRect=new Dustbin(800,375,200,20)
  rightRect=new Dustbin(900,360,20,100)

  paperBall=new Paper(200,100,20)

  ground=new Ground(500,390,1000,15)

  
  
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  leftRect.display()
  downRect.display()
  rightRect.display()
  
  
  paperBall.display()

  ground.display()
  

  
  
 
}

function keyPressed(){
  if(keyCode===UP_ARROW){
  Matter.Body.applyForce(paperBall.body,paperBall.body.position,{x:60,y:-70})
  }
}


