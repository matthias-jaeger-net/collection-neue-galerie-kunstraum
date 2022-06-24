function getCircleVertices(radius, initial, end, increment) {
  const points = [];
  for (let angle = initial; angle < end; angle += increment) {
    points.push(createVector(cos(angle) * radius, sin(angle) * radius));
  }
  return points;
}

function disk(z) {
  let step = random(20, 40);
  let steps = 360;
  let ini = random(TAU);
  let s = 40;
  let shift = 0;
  for (let radius = 380; radius > 100; radius -= step) {
    step = random(10, 40);
    for (let v of getCircleVertices(radius, ini, TAU + ini, TAU / steps)) {
      push();
      translate(v.x, v.y, z);
      rotate(v.heading() + PI);
      line(0, 0, step, 0);
      pop();
    }
    steps = floor(random(20, radius));
    ini = random(TAU);
    shift += 0.1;
  }
}

function setup() {
  createCanvas(800, 800, WEBGL);
  background(255);
  camera(100, 0, 1200, 0, 0, 0);
  //rotateX(random(TAU));
  //rotateY(random(TAU));
  //rotateZ(random(TAU));
  const s = 140;
  const d = 4
  for (let z = -s * d; z < s * d; z += s) {
    disk(z);
  }

  save("segmented-circle-3.jpg")
}