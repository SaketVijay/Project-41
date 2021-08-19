var sc, scImg, ss, ssImg, bg
var dock = false


function preload(){
  scImg = loadImage("spacecraft1.png")
  bg = loadImage("spacebg.jpg")
  ssImg = loadImage("iss.png")
}
function setup() {
  createCanvas(800,600);
  sc = createSprite(300, 370);
  sc.addImage(scImg);
  sc.scale = 0.15
  ss = createSprite(450,200);
  ss.addImage(ssImg);
}

function draw() {
  background(bg); 
  if(!dock){
    sc.x = sc.x + random(-1, 1)
    if(keyDown(UP_ARROW)){
      sc.y = sc.y-2
    }
    if(keyDown(DOWN_ARROW)){
      sc.y = sc.y+2
    }
    if(keyDown(RIGHT_ARROW)){
      sc.x = sc.x+2
    }
    if(keyDown(LEFT_ARROW)){
      sc.x = sc.x-2
    }
  } 
  if(sc.y<=(ss.y+70) &&sc.x<=(ss.x-10)){
    dock = true;
    textSize(25);
    fill("white")
    text("Docking Successful!", 200, 300)
  }
  drawSprites();
}