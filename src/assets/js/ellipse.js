function Ellipse(x, y, r) {
  var options = {
    friction: 0.2,
    restitution: 1,
    torque: 0.2,
    timeScale: 0.4
  }
  this.body = Bodies.circle(x, y, r, options);
  World.add(world, this.body);

  this.radius = r;
  let newrandom = Math.floor(random(4));
  if (newrandom === 1) {
    this.color =  color(100, 160, 140);
  } else if (newrandom === 2) {
    this.color =  color(0, 0, 0);
  } else if (newrandom === 3) {
    this.color =  color(235, 161, 141);
  } else {
    this.color =  color(245, 205, 93);
  }

  this.draw = function() {
    var pos = this.body.position;
    var angle = this.body.angle;

    push();
    translate(pos.x, pos.y);
    rotate(angle);
    ellipseMode(RADIUS);
    noStroke();
    fill(this.color);
    ellipse(0, 0, this.radius);
    noStroke();
    fill(255);
    line(0, 0, this.radius, 0);
    pop();
  }
}
