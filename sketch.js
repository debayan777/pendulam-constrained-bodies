const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies
const Constraint=Matter.Constraint

var engine,world,ConstraintBase;
var ball,holder;
var thread,ground


function setup(){
var canas=createCanvas(400,400)
engine=Engine.create()
world=engine.world
var option={
isStatic:true

}
var ballOption={
restitution:1

}
ground=Bodies.rectangle(390,50,400,20,option)
World.add(world,ground)

holder=Bodies.rectangle(200,50,120,20,option)
World.add(world,holder)
ball=Bodies.circle(200,200,40,ballOption)
World.add(world,ball)
thread=new Base(holder.body,ball.body)


}


function draw(){
background(0)
Engine.update(engine)
rectMode(CENTER)
rect(holder.position.x,holder.position.y,120,20)
ellipseMode(CENTER)
ellipse(ball.position.x,ball.position.y,40,40)
thread.display()



}









