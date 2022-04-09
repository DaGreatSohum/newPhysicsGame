
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine, world;
var ground

function preload(){
  
}

function setup() {
  createCanvas(400,400);
  ground = new Ground(100,100,20,20)

  engine = Engine.create();
  world = engine.world;
  
}


function draw() 
{
  background(51);
  ground.display()
  Engine.update(engine);
}

