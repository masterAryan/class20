var fixRect,movRect;

function setup() {
 createCanvas(800,400);
  fixRect = createSprite(400,100,50,70);
  movRect = createSprite(400,300,70,50);
  fixRect.velocityY = 4;
  movRect.velocityY = -4;
}

function draw() {
  background(255,255,255);  
  if(fixRect.y - movRect.y < fixRect.height/2 + movRect.height/2 &&
    movRect.y - fixRect.y < fixRect.height/2 + movRect.height/2){
      fixRect.velocityY = fixRect.velocityY * (-1);
      movRect.velocityY = movRect.velocityY * (-1);
    }
    if(fixRect.x - movRect.x < fixRect.width/2 + movRect.width/2 &&
      movRect.x - fixRect.x < fixRect.width/2 + movRect.width/2){
        fixRect.velocityX = fixRect.velocityX * (-1);
      movRect.velocityX = movRect.velocityX * (-1);
      }
   edges = createEdgeSprites();
   movRect.bounceOff(edges);
   fixRect.bounceOff(edges);
  drawSprites();
}
function isTouching(){
  if(fixRect.x - movRect.x < fixRect.width/2 + movRect.width/2 &&
    movRect.x - fixRect.x < fixRect.width/2 + movRect.width/2 &&
    fixRect.y - movRect.y < fixRect.height/2 + movRect.height/2 &&
    movRect.y - fixRect.y < fixRect.height/2 + movRect.height/2){
      fixRect.shapeColor = "red";
      movRect.shapeColor = "red";
    }else{
      fixRect.shapeColor = "yellow";
      movRect.shapeColor = "yellow";
    }

}