var score =0;
var gun,bluebubble,redbubble, bullet, backBoard, space;

var gunImg,bubbleImg, bulletImg, blastImg, backBoardImg, spaceImg;

var redBubbleGroup, redBubbleGroup, bulletGroup;

var fondoImg;


var life =3;
var score=0;
var gameState=1

function preload(){
  gunImg = loadImage("Goku.png")
  bulletImg = loadImage("kame-hame-haaa.png")
  blueBubbleImg = loadImage("saibamenb.png")
  redBubbleImg = loadImage("saibaman1b.png")
  backBoardImg= loadImage("back.jpg")
  spaceImg = loadImage("space.gif");
  fondoImg = loadImage("assets/fondogoku2.png");
}
function setup() {
  createCanvas(windowWidth, windowHeight-20);

  backBoard= createSprite(50, width/2, 100,height);
  backBoard.addImage(backBoardImg)
  
  gun= createSprite(100, height/2, 50,50);
  gun.addImage(gunImg)
  gun.scale=0.6;
  
  space= createSprite(width/2, 40),
  space.addImage(spaceImg);


  bulletGroup = createGroup();   
  blueBubbleGroup = createGroup();   
  redBubbleGroup = createGroup();   
  
  heading= createElement("h1");
  scoreboard= createElement("h1");
}

function draw() {
  background(fondoImg);
  
  heading.html("Vida: "+life)
  heading.style('color:red'); 
  heading.position(150,20)

  scoreboard.html("Puntuación: "+score)
  scoreboard.style('color:red'); 
  scoreboard.position(width-200,20)

  if(gameState===1){
    gun.y=mouseY  

    if (frameCount % 80 === 0) {
      drawblueBubble();
    }

    if (frameCount % 100 === 0) {
      drawredBubble();
    }

    if(keyWentDown("space")){
      shootBullet();
    }

    if (blueBubbleGroup.collide(backBoard)){
      handleGameover(blueBubbleGroup);
      
    }
    if (redBubbleGroup.collide(backBoard)) {
      handleGameover(redBubbleGroup);
    }
    /*if(blueBubbleGroup.(bulletGroup)){
      handleBubbleCollision(blueBubbleGroup);
    }*/

    /*if(blueBubbleGroup.collide(bulletGroup)){
      handleBubbleCollision();
    }*/
    
    /*if(blueBubbleGroup.collide()){
      handleBubbleCollision(blueBubbleGroup);
    }*/
    
    if(blueBubbleGroup.collide(bulletGroup)){
      handleBubbleCollision(blueBubbleGroup);
    }

    if(redBubbleGroup.collide(bulletGroup)){
      handleBubbleCollision(redBubbleGroup);
    }

    drawSprites();
  }
    
  
}

function drawblueBubble(){
  bluebubble = createSprite(windowWidth,random(windowHeight),40,40);
  bluebubble.addImage(blueBubbleImg);
  bluebubble.scale = 0.5;
  bluebubble.velocityX = -8;
  bluebubble.lifetime = 400;
  blueBubbleGroup.add(bluebubble);
}
function drawredBubble(){
  redbubble = createSprite(windowWidth,random(windowHeight),40,40);
  redbubble.addImage(redBubbleImg);
  redbubble.scale = 0.5;
  redbubble.velocityX = -8;
  redbubble.lifetime = 400;
  redBubbleGroup.add(redbubble);
}

function shootBullet(){
  bullet= createSprite(150, width/2, 50,20)
  bullet.y= gun.y-20
  bullet.addImage(bulletImg)
  bullet.scale=0.5
  bullet.velocityX= 10
  bulletGroup.add(bullet)
}

function handleBubbleCollision(bubbleGroup){
    if (life > 0) {
       score=score+1;
    }

 
    bulletGroup.destroyEach()
    bubbleGroup.destroyEach()
}

function handleGameover(bubbleGroup){
  
    life=life-1;
    bubbleGroup.destroyEach();

     /*life=life+1;
    bubbleGroup.destroyEach();*/

     /*life=life-1;
    bubbleGroup.destroy();*/

     /*life=life-1;
    bubble.destroyEach();*/
    

    if (life === 0) {
      gameState=2
      gameOver();
    }
  
}

function gameOver(){
  swal({
    title: `Game over`,
    imageUrl: "GameOver.png",
    imageSize: "400x400",
    confirmButtonText: "Gracias por jugar"
  })
}
//PROYECTO 47 