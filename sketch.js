const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint

var box1;
var box2
var box3
var box4
var box5
var box6
var box7
var box8
var box9
var box10
var box11
var box12
var box13
var box14
var box15
var box16
var box17
var box18
var box19
var box20,ball,ground,rope;
var bg;
var monste;
function preload(){
bg = loadImage("GamingBackground.png");
}

function setup() {
  createCanvas(3000,800);
   engine = Engine.create();
   world = engine.world;

   ground = new Ground(600,600,1000,20);

   box1 = new Box(900,100,70,70);
   box2 = new Box(900,100,70,70);
   box3 = new Box(900,100,70,70);
   box4 = new Box(900,100,70,70);
   box5 = new Box(900,100,70,70);
   box6 = new Box(900,100,70,70);

   box7 = new Box(800,100,70,70);
   box8 = new Box(800,100,70,70);
   box9 = new Box(800,100,70,70);
   box10 = new Box(800,100,70,70);
   box11 = new Box(800,100,70,70);
   box12 = new Box(800,100,70,70);

   box13 = new Box(700,100,70,70);
   box14 = new Box(700,100,70,70);
   box15 = new Box(700,100,70,70);
   box16 = new Box(700,100,70,70);
   box17 = new Box(700,100,70,70);
   box18 = new Box(700,100,70,70);
   box19 = new Box(700,100,70,70);
   box20 = new Box(700,100,70,70);

  ball = new Ball(200,200,200,200);

  rope = new SlingShot(ball.body,{x:500,y:50});

  monste = new Monster(1000,490)
   

}

function draw() {
  background(bg);  
  Engine.update(engine);

  ground.display();

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
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();

  ball.display();

  rope.display();
   monste.display();
  drawSprites();
}


function mouseDragged(){
  Matter.Body.setPosition(ball.body,{x:mouseX,y:200});
}

