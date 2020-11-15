const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground1;
var box1;
var polygon;
var slingshot;

function setup() {
  createCanvas(800, 400);
  engine = Engine.create();
  world = engine.world;

  ground1 = new Ground(400, 385, 800, 15)
  ground2 = new Ground(520, 300, 275, 15)

  box1 = new Box(520, 275)
  box2 = new Box(520, 275)
  box3 = new Box(520, 275)
  box4 = new Box(540, 275)
  box5 = new Box(500, 275)
  box6 = new Box(560, 275)
  box7 = new Box(480, 275)
  box8 = new Box(470, 215)
  box9 = new Box(570, 215)

  polygon = new Polygon(190, 225)
  slingshot = new Slingshot(polygon.body, { x: 190, y: 225 })


  Engine.run(engine);
}

function draw() {
  background(56, 44, 44);
  text("Drag the Octagonal Stone and Release it, to launch it towards the blocks", 10, 25)
  textSize(12)
  fill("white")
  text(mouseX + "," + mouseY, mouseX, mouseY)
  textSize(24)
  text("Press Space to Bring the Polygon Back", 175, 50)


  ground1.display();
  ground2.display();

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();

  polygon.display();
  slingshot.display();

}

function mouseDragged() {
  Matter.Body.setPosition(polygon.body, { x: mouseX, y: mouseY });
}


function mouseReleased() {
  slingshot.fly();
}

function keyPressed() {
  if (keyCode === 32) {
    Matter.Body.setPosition(polygon.body, { x: 190, y: 225 });
    slingshot.attach(polygon.body);

  }
}