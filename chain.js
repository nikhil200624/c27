class chain{
    constructor(Bodya1,Bodyb1){
    var options = { 
        bodyA:Bodya1,
        bodyB:Bodyb1,
        stiffness:0.01,
        length:5
    }
    this.chain=Constraint.create(options)
World.add(world,this.chain)

    }
    display(){
var posa=this.chain.bodyA.position
var posb=this.chain.bodyB.position
line(posa.x,posa.y,posb.x,posb.y)

    }
}