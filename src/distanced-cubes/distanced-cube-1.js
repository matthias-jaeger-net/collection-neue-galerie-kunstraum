// Feb 19, 2022

function setup() {
  createCanvas(800, 800, WEBGL);
  background(255);
  const s = 8
  w = 500
  translate(-w / 2, -w / 2, -150);
  for (let z = -w / 2; z < w / 2; z += 10) {
    for (let x = 0; x < w; x += s) {
      for (let y = 0; y < w; y += s) {
        const n = noise(x * 0.01, y * 0.01, z * 0.01)
        const d = dist(x, y, z, w / 2, w / 2, z)
        if (d < w / 2) {
          push();
          translate(x, y, z);
          rotateY(n * TAU);
          rotateZ(n * TAU);
          rect(0, 0, 2, n * s * 8);
          pop();

        }
      }
    }
  }
  save("dsphere.jpg");
}