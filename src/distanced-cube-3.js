function setup() {
  createCanvas(800, 800, WEBGL);
  background(255);
  const w = 300;
  const cell = 16;

  for (let x = -width / 2; x <= width / 2; x += cell) {
    line(x, -height / 2, x, height / 2);
  }

  for (let x = -w; x <= w; x += cell) {
    for (let y = -w; y <= w; y += cell) {
      for (let z = -w; z <= w; z += cell) {
        if (dist(x, y, z, 0, 0, 0) < w) {
          push();
          translate(x, y, z);
          if (random(0, 1) > 0.8) {
            box(random([2, cell]), random([2, cell]), random([2, cell]));
          }
          pop();
        }
      }
    }
  }

  save("block-sphere.jpg");
}