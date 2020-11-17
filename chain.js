class Chain{

    constructor(body1,body2){

        var options= {
            bodyA: body1, //first body to be attached
            bodyB: body2, //second body to be attached
            length: 10,   //distance between both the bodies
            stiffness: 0.04  //how stiff the constraint is. 0.7 and above means more stiff
        };

        //creating the constraint 
        this.chain= Constraint.create(options);
        World.add(world,this.chain);
    }

    display(){

        //taking pointA and pointB for the line
        var pointA= this.chain.bodyA.position;
        var pointB= this.chain.bodyB.position;

        //drawing the line to show the connection between constrained bodies
        strokeWeight(3);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
}