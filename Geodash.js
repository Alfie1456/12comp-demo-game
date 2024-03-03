/*******************************************************/
// P5.play: t01_create_sprite
// Create a sprite
// Written by ??? 
/*******************************************************/
console.log("%c t01_create_sprite", "color: blue;");
const screenWidth = 400;
const screenHeight = 200;
const playerHeight = 25;
const playerWidth = 25;
const obstacleHeight = playerHeight;
const obstacleWidth = playerWidth

var  spawnDist = 0+1;
var nextSpawn = 0;
var score = 0;
var screenSelector = "start"; 
var obstacles;

/*******************************************************/
// setup()
/*******************************************************/
function setup() {
  console.log("setup: ");
  
cnv = new Canvas(screenWidth, screenHeight);
  world.gravity.y = 80;
  player = new Sprite(playerWidth*1.2,  screenHeight/2, playerWidth, playerHeight, 'd');
  player.color = 'yellow';
  obstacles = new Group();
  wall = new Sprite(0, height, windowWidth*2, 15, 'k');
  wall.color = 'lightGreen';
  


    obstacle = new Sprite(screenWidth-100,  screenHeight - obstacleWidth/2, obstacleWidth, obstacleHeight, 'd');
    obstacle.color = 'yellow';
    obstacle.vel.x = -2;


  
  document.addEventListener("keydown",
  function(event) {
    console.log = ("key pressed" + player.y);
    if(player.y > 150){
        console.log = ("key pressed!");
    player.vel.y = -20;
  }
  
});

    player.collides(obstacle, youDead);


}
/*******************************************************/
// draw()
/*******************************************************/

function draw() {
 if(screenSelector=="game"){
    gameScreen();
 }else if(screenSelector=="end"){
     endScreen();
 }else if(screenSelector=="start"){
     startScreen();
 }else{
         text("wrong screen - you shouldnt get here", 50, 50);
console.log("wrong screen - you shouldnt get here")
 }
}
function newObstacle(){

    obstacle = new Sprite((screenWidth -100),  screenHeight - obstacleHeight/2, obstacleWidth, obstacleHeight, 'k');
    obstacle.color = color("yellow");
    obstacle.vel.x = -5;
    
    obstacles.add(obstacle);
}

function youDead(_player, _obstacle){
screenSelector = "end";    
}

// Main screen functions

function startScreen(){
    console.log("Start screen")
    background("white");

    allSprites.visible = false;
    textSize(32);
    fill(255);
    stroke(0);
    strokeWeight(4);
    text("Welcome to the game", 50, 50);
    textSize(24);
    text("Press any key to start", 50, 110);
}

function gameScreen(){
    background("lightGreen");
    allSprites.visible = true;
    score++;
    if(frameCount> nextSpawn){
        newObstacle();
        nextSpawn = frameCount + random(10,100);
    }
    textSize(32);
    fill(255);
    stroke(0);
    strokeWeight(4);
    text(score, 50, 50);
}

function endScreen(){
    console.log("End screen")
    background("white");

    allSprites.visible = false;
    textSize(32);
    fill(255);
    stroke(0);
    strokeWeight(4);
    text("You died! Too bad :-(", 50, 50);
    textSize(24);
    text("your score was: "+score, 50, 110);
    textSize(14);
    //text("press any key to restart", 50, 150);
}



/*******************************************************/
//  END OF APP
/*******************************************************/
