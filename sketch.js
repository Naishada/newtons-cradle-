const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Mouse = Matter.Mouse;
const MouseConstraint = Matter.MouseConstraint;

var myMouse, mConstraint;
var bob1,bob2,bob3,bob4,bob5,roof1;
var rope1,rope2,rope3,rope4,rope5;
 function setup(){
     canvas = createCanvas(windowWidth,windowHeight);
     engine = Engine.create();
     world = engine.world;

     let canvasmouse = Mouse.create(canvas.elt);
     canvasmouse.pixelRatio = pixelDensity();
     var options={
         mouse : canvasmouse
     }
     mConstraint = MouseConstraint.create(engine,options);
     World.add(world,mConstraint);

     roof1 = new Roof(700,90,1200,25);
     bob1 = new Pendulam(700,503,"yellow");
     rope1 = new Sling(bob1.body,{x:700,y:90});
     bob2 = new Pendulam(800,503,"yellow");
     rope2 = new Sling(bob2.body,{x:800,y:90});
     bob3 = new Pendulam(900,503,"yellow");
     rope3 = new Sling(bob3.body,{x:900,y:90});
     bob4 = new Pendulam(600,503,"yellow");
     rope4 = new Sling(bob4.body,{x:600,y:90});
     bob5 = new Pendulam(500,503,"yellow");
     rope5 = new Sling(bob5.body,{x:500,y:90});
     Engine.run(engine);
     
 }
 function draw(){
     background("purple");
     text("Drag any any bob using your mouse to observe the pendulam work",72,170);
     text(mouseX+","+mouseY,mouseX,mouseY);
     roof1.display();
     bob1.display();
     rope1.display();
     bob2.display();
     rope2.display();
     bob3.display();
     rope3.display();
     bob4.display();
     rope4.display();
     bob5.display();
     rope5.display();
 }
 