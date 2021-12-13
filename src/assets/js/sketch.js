var Engine = Matter.Engine;
var World = Matter.World;
var Bodies = Matter.Bodies;

var engine = Engine.create();
var world = engine.world;

var ellipses = [];
var ground, left, right;

let thisWindow = window.innerWidth;
let thisHeight = window.innerHeight;

function setup() {
  createCanvas(thisWindow, thisHeight);
  var options = {
    isStatic: true
  }
  ground = Bodies.rectangle(0, thisHeight, (thisWindow*2), 1, options);
  left = Bodies.rectangle(0, thisHeight, 1, (thisHeight*2), options);
  right = Bodies.rectangle(thisWindow, thisHeight, 1, (thisHeight*2), options);
  World.add(world, ground);
  World.add(world, left);
  World.add(world, right);
  Engine.run(engine);
}

function mouseClicked() {
  ellipses.push(new Ellipse(mouseX, mouseY, 100));
}


window.onload = function() {
  let i = 0;
  while (i < 15) {
    ellipses.push(new Ellipse(random(2000), random(800), 100));
    i++;
  }
};

function mouseDragged() {
  setInterval(ellipses.push(new Ellipse(mouseX, mouseY, 100)), 1000);
}

function draw() {
  background(91, 104, 244);
  for (var i = 0; i < ellipses.length; i++) {
    ellipses[i].draw();
  }
  Engine.update(engine);
}
