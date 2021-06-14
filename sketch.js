const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var hammerObj, stoneObj, rubberObj, ironObj, plane;
var sandObj1, sandObj2, sandObj3, sandObj4, sandObj5, sandObj6;


function setup() {
	createCanvas(1200, 700);

	engine = Engine.create();
	world = engine.world;

	hammerObj = new hammer(10,100);
	ironObj = new iron(100,200);
	plane = new ground(600,695,1200,10);
	rubberObj = new rubber(700,300,70);
	stoneObj = new stone(500,500,80,80);

	sandObj1 = new sand(500,100,10);
	sandObj2 = new sand(600,200,10);
	sandObj3 = new sand(700,300,10);
	sandObj4 = new sand(800,400,10);
	sandObj5 = new sand(900,500,10);
	sandObj6 = new sand(1000,600,10);
}


function draw() {
  background("lightblue");
  Engine.update(engine)

  hammerObj.display();
  ironObj.display();
  plane.display();
  rubberObj.display();
  stoneObj.display();
  sandObj1.display();
  sandObj2.display();
  sandObj3.display();
  sandObj4.display();
  sandObj5.display();
  sandObj6.display();
  
  drawSprites();
 
}



