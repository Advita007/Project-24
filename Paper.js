class Paper{
    constructor(x,y,radius){
       var options = {
        isStatic : false,
        restitution:0.3,
        frictionAir:0.05,
        density:1.2
           
       }
       this.body = Matter.Bodies.circle(x,y,radius,options); 
       this.radius = radius
       
       World.add(world,this.body);
       
    }

     display(){
        var pos = this.body.position;
        ellipseMode(RADIUS);
        fill(204,102,204);
       ellipse(pos.x,pos.y,this.radius);   
        
     }
    }
   

    
