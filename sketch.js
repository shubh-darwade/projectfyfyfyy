
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj;
var world;
var a=100;
function setup() {
	createCanvas(1200, 400);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;

	

	dustbinObj=new dustbin(1000,350);

	paperObject=new paper(300,340,40);

  groundObject=new ground(width/2,370,width,20);
  manObj=new man(200,250,50,200);
	//Create a Ground


	var render = Render.create({
	  element: document.body,
	  engine: engine,
	  options: {
	    width: 1200,
	    height: 700,
	    wireframes: false
	  }
	});

	Engine.run(engine);
	//Render.run(render);
  
}


function draw() {
  rectMode(CENTER);
  background("orange");
  
keyPressed();

  dustbinObj.display();
  paperObject.display();
  groundObject.display();
  manObj.display();
 
 

}

function keyPressed() {
  	if (keyCode === UP_ARROW) {

    	Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:5,y:-5});
        
    }
 
  }
