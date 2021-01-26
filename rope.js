class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 1,
            length: 450
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);

        World.add(world, this.sling);
    }

    attach(body){
        this.sling.bodyA = body;
    }

     
    fly(){
        this.sling.bodyA = null;
    }

    display(){
        

        if(this.sling.bodyA){

            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push()
            strokeWeight(0);
            stroke(0);
            line(pointA.x,pointA.y,pointB.x,pointB.y);
            pop()
        }
    }
    
}