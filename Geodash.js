/*******************************************************/
// P5.play: t01_create_sprite
// Create a sprite
// Written by ??? 
/*******************************************************/
console.log("%c t01_create_sprite", "color: blue;");
const screenWidth = 400;
const screenHeight = 200;
const playerHeight = 50;
const playerWidth = 50;
const obstacleHeight = playerHeight;
const obstacleWidth = playerWidth

var  spawnDist = 0+1;

var obstacles;
/*******************************************************/
// setup()
/*******************************************************/
function setup() {
  console.log("setup: ");
  
  cnv = new Canvas(screenWidth, screenHeight);
  world.gravity.y = 80;
    player = new Sprite(200, 200, playerWidth, playerHeight, 'd');
  player.color = 'yellow';
  wall = new Sprite(0, height, windowWidth*2, 15, 'k');
  wall.color = 'lightGreen';
  
    obstacle = new Sprite(screenWidth-100,  screenHeight - obstacleWidth/2, obstacleWidth, obstacleHeight, 'k');
  obstacle.color = 'lightGreen';
      obstacle.vel.x = -2;

obstacles = new Group();

  
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
  background ('lightBlue')
  newObstacle();
}

function newObstacle(){
    spawnDist=spawnDist + 100;
    obstacle = new Sprite(screenWidth-100,  screenHeight - obstacleWidth/2, obstacleWidth, obstacleHeight, 'k');
    obstacle.color = color("lightGreen");
    obstacle.vel.x = -2;
    
    obstacles.add(obstacle);
}

function youDead(_player, _obstacle){
    console.log("YouDied")
}
/*******************************************************/
//  END OF APP
/*******************************************************/
