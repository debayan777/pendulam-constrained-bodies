class Base {
    constructor(bodyA,bodyB){
var options={
bodyA:bodyA,
bodyB:bodyB,
stiffness:0.04,
length:10

}


this.chain=Constraint.create(options);

World.add(world,this.chain)

    }
display(){
var pos=this.chain.bodyA.position
var pos2=this.chain.bodyB.position


strokeWeight(3)
stroke("white")
line(pos.x,pos.y,pos2.x,pos2.y)


}


}