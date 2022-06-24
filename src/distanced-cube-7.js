function setup() {
  createCanvas(800, 800, WEBGL);
  background(255);
  camera(0, 0, 1000, 0, 0, 0);
  stroke("#333333")
  fill(255, 240)
  const w = 320;
  const cell = 30;
  const d = w / cell;

  for (let x = -w; x <= w; x += cell) {
    for (let y = -w; y <= w; y += cell) {
      for (let z = -w; z <= w; z += cell / 2) {
        const d = dist(x, y, z, -30, 0, 0);
        const s = 0.01;
        const n = noise(x * s, y * s, z * s);
        if (d < 340 || d > 420) {
          push();
          translate(x, y, z);
          rotateX(-TAU * n);
          circle(0, 0, cell * n);
          pop();
        }
      }
    }
  }
  save("distanced-cube-7.jpg")
}