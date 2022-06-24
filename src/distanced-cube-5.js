function setup() {
  createCanvas(800, 800, WEBGL);
  background(255);
  camera(0, 0, 800, 0, 0, 0);
  rotateY(random(-0.2, 0.2));
  rotateX(random(-0.2, 0.2));
  for (let radius = width / 2 - 30; radius > 0; radius -= 8) {
    for (let angle = 0; angle < TAU; angle += (TAU / radius) * 2) {
      const x = cos(angle) * radius;
      const y = sin(angle) * radius;
      const n = noise(x * 0.01, y * 0.01);
      push();
      translate(x, y);
      box(2, 2, n * 400);
      pop();
    }
  }
  save("distanced-cube-5.jpg")
}