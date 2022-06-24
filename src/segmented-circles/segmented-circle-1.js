function setup() {
  createCanvas(800, 800, WEBGL);
  background(255);
  const s = 180
  translate(-s / 2, 0)
  for (let radius = 350; radius > 0; radius -= 4) {
    strokeWeight(random([2, 12]))
    beginShape();
    const a = random(TAU)
    for (let angle = a; angle < TAU + a; angle += (TAU + a) / radius) {
      const x = cos(angle) * radius;
      const y = sin(angle) * radius;
      const n = noise(x * 0.001, y * 0.001) * s
      curveVertex(x + n, y);
      if (random(0, 1) > 0.8) {
        endShape();
        beginShape();
      }
    }
    endShape();
  }
  save("segmented-circle-1.jpg")
}