const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var log, circle, connection;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    log = new Log(600,100,40,PI/2);
    circle = new Box(450,100,20,20);
    connection = new Chain(log.body,circle.body);
}

function draw(){
    background(255);
    Engine.update(engine);

    log.display();
    circle.display();

    if(keyDown("space")){
        console.log("true");
        circle.x = mouseX;
        circle.y = mouseY;
    } 



   

}