var ship
var bg
var bullets=[]

function preload(){
  bg=loadImage("nebula.jpg")
}
function setup(){
  createCanvas(1200,600)
  ship=new Ship()
  }
function draw(){
  background(bg)
  for(var i=0;i<=500;i=i+1){
    bullets[i].move()
    bullets[i].display()
  }
  ship.display();
}
function keyPressed(){
  if(key==="space"){
    var bullet=new Bullet(ship.x,500)
    bullets.push(bullet)
  }
}       