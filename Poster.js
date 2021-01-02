class Poster{
    constructor(x,y,width,height){
       var options = {
        isStatic : true
           
       }
       this.body = Bodies.rectangle(x,y,250,250,options); 
       this.width = 280
       this.height = 260
       this.image = loadImage("Waste.png");
        
       World.add(world,this.body);
    }

     display(){
         var pos = this.body.position;
         rectMode(CENTER)
         fill("yellow");
         image(this.image,450,50,this.width,this.height); 
     }
    }

