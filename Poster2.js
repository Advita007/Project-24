class Poster2{
    constructor(x,y,width,height){
       var options = {
        isStatic : true
           
       }
       this.body = Bodies.rectangle(x,y,250,250,options); 
       this.width = 350
       this.height = 650
       this.image = loadImage("Poster2.jpg");
        
       World.add(world,this.body);
    }

     display(){
         var pos = this.body.position;
         rectMode(CENTER)
         fill("yellow");
         image(this.image,830,15,this.width,this.height); 
     }
    }