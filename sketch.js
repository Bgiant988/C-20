var box1
var box2


function setup() {
  createCanvas(800,400);
  box1=createSprite(400, 200, 50, 50);
  box1.shapeColor="orange"
  box2=createSprite(200,100,50,40)
  box2.shapeColor="yellow"
}

function draw() {
  background("blue");
box2.x=mouseX
box2.y=mouseY
console.log(box2.x-box1.x)
if(box2.x-box1.x<box1.width/2+box2.width/2&&box1.x-box2.x<box1.width/2+box2.width/2&&box2.y-box1.y<box1.height/2+box2.height/2&&box1.y-box2.y<box1.height/2+box2.height/2){
  box2.shapeColor="black"
  box1.shapeColor="black"

}
else{
  box1.shapeColor="orange"
  box2.shapeColor="yellow" 
}
  drawSprites();
}