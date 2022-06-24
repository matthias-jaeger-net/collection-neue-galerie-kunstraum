function setup() {
  createCanvas(800, 800, WEBGL);
  background(255);
  rectMode(CENTER)
  const s = 22
  w = 600
  translate(-w / 2, -w / 2, -150);
  for (let z = -w / 2; z <= w / 2; z += 10) {
    for (let x = 0; x <= w; x += s) {
      for (let y = 0; y <= w; y += s) {
        const n = noise(x * 0.01, y * 0.01, z * 0.01)
        const d = dist(x, y, z, w / 2, w / 2, 0)
        if (d > 400 || d < 300) {
          push();
          translate(x, y, z);
          rotateY(n * TAU);
          rotateZ(n * TAU);
          rect(0, 0, 2, n * s * 3);
          rect(2, n * s * 3, n * s * 3, 2);
          pop();

        }
      }
    }
  }
  save("distanced-cube-2.jpg");
}