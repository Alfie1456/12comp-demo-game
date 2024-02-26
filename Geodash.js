/*******************************************************/
// P5.play: t01_create_sprite
// Create a sprite
// Written by ??? 
/*******************************************************/
console.log("%c t01_create_sprite", "color: blue;");

/*******************************************************/
// setup()
/*******************************************************/
function setup() {
  console.log("setup: ");
  cnv = new Canvas(windowWidth, windowHeight);
  world.gravity.y = 10;
yellowBox = new Sprite(100, 100, 30, 30, 'd');
  yellowBox.color = 'yellow';
  wall = new Sprite(0, height, windowWidth*2, 15, 'k');
  wall.color = 'lightGreen';
  
  
}
/*******************************************************/
// draw()
/*******************************************************/
function draw() {
  background ('lightBlue')
}

/*******************************************************/
//  END OF APP
/*******************************************************/
