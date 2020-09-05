const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground1, box1;

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  box1 = new Box(330, 235);
  box2 = new Box(360, 235);
  box3 = new Box(390, 235);
  box4 = new Box(420, 235);
  box5 = new Box(450, 235);
  box6 = new Box(480, 235);
  box7 = new Box(360, 150);
  box8 = new Box(390, 150);
  box9 = new Box(420, 150);
  box10 = new Box(450, 150);
  box11 = new Box(390, 100);
  box12 = new Box(420, 100);
  box13 = new Box(405, 50);
  ball1 = new Ball(150, 200);
  ground1 = new Ground(400, 240, 195, 20);
  slingshot1 = new Slingshot(ball1.body, {x:160, y:200});
}

function draw() {
  background("skyblue");  
  Engine.update(engine);
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  ball1.display();
  ground1.display();
  slingshot1.display();
  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(ball1.body, {x:mouseX, y:mouseY});
}

function mouseReleased(){
  slingshot1.fly();
}