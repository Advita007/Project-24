
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var box1,box2,box3;
var engine,world
var paperObject;
var poster,poster1,poster2
function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;
 
  box1 = new Box (750,620,20,100);
  box2 = new Box (650,655,200,15);
  box3 = new Box (550,620,20,100);
  

  ground = new Ground(width/2, height-35, width,10);

  paperObject = new Paper(50,50,20);

  poster = new Poster(500,50,10,10);
  poster1 = new Poster1(500,50,10,10);
  poster2 = new Poster2(500,50,10,10);

  


}


function draw() {
  background(0);

  
 
  Engine.update(engine)
  

  box1.display();
  box3.display();
  box2.display();
  poster.display();
  poster1.display();
  poster2.display();
  ground.display();
 
  keyPressed();
  paperObject.display();


 


 
 
}
function keyPressed(){
  if(keyCode === UP_ARROW){
  Matter.Body.applyForce(paperObject.body, paperObject.body.position,{x:5,y:-5})
  }
}




