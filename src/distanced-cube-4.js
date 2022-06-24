function setup() {
  createCanvas(800, 800, WEBGL);
  background(255);
  camera(0, 0, 1000, 0, 0, 0);
  stroke("#333333")
  fill(255, 240)
  const w = 320;
  const cell = 20;
  const d = w / cell;

  for (let x = -w; x <= w; x += cell) {
    for (let y = -w; y <= w; y += cell) {
      for (let z = -w; z <= w; z += cell) {
        const d = dist(x, y, z, 0, 0, 0);
        const s = 0.02;
        const n = noise(x * s, y * s, z * s);
        if (d < 100 || d > 420) {
          push();
          translate(x, y, z);
          rotateZ(-TAU * n);
          box(cell, 2, cell * 5);
          pop();
        }
      }
    }
  }
  save("distanced-cube-4.jpg")
}