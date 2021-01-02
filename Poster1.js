class Poster1{
    constructor(x,y,width,height){
       var options = {
        isStatic : true
           
       }
       this.body = Bodies.rectangle(x,y,250,250,options); 
       this.width = 250
       this.height = 250
       this.image = loadImage("Waste2.png");
        
       World.add(world,this.body);
    }

     display(){
         var pos = this.body.position;
         rectMode(CENTER)
         fill("yellow");
         image(this.image,100,50,this.width,this.height); 
     }
    }