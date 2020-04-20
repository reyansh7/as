class Ship{
    constructor(){
        this.x=600;
        this.y=500;
        this.xdirection=0
        this.image=loadImage("spaceship.png")        
    }

    display(){
        this.x=mouseX
        imageMode(CENTER)
        image(this.image,this.x,this.y,150,150)
    }
}