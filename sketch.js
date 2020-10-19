
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

paper = new Paper(100,650,20,20)
ground= new Dustbin(400,680,800,20)	
  leftSide = new Dustbin(600,630,20,100)
  rightSide = new Dustbin (750,630,20,100)
}


function draw() {
  
  background(0);
  Engine.update(engine)
  
 paper.display()
 ground.display()
 leftSide.display()
 rightSide.display()
 
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-50})
	}

}



