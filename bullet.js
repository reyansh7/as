class Bullet{
    constructor(x,y){
     this.x=x
     this.y=y
     this.r=10
    }
    display(){
        ellipseMode(RADIUS)
        ellipse(this.x,this.y,this.r,this.r)
    }
    move(){
      this.y=this.y-5  
    }
}