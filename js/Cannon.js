class Cannon {
  constructor(x, y, width, height, angle,) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.angle = angle;
    this.cannonImg = loadImage("assets/canon.png");
    this.cannonBaseImg = loadImage("assets/cannonBase.png");
    
  }
  
   display(){

 //  code to creat the top.

    push();
    translate(this.x,this.y);
    rotate(this.angle);
    imageMode(CENTER);
    image(this.cannonImg,this.x,this.y,this.width,this.height);
    pop();
   
// code to create the cannon bottom.

   image(this.cannonBaseImg,70,20,200,200);
   noFill();


   }

   




}
