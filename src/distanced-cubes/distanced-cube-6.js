function setup() {
  createCanvas(800, 800, WEBGL);
  background(255);
  camera(0, 0, 1000, 0, 0, 0);
  //ortho(-width / 2, width / 2, height / 2, -height / 2, 0, 1500);
  //rotateX(PI / 4);
  //rotateY(PI / 4);
  fill(255, 220)
  const bound = 440;
  const cell = 24;
  const c = 8;
  const e = 0.001
  for (let z = -bound; z <= bound; z += cell) {
    for (let x = -bound; x <= bound; x += cell) {
      for (let y = -bound; y <= bound; y += cell) {
        d = dist(x, y, z, 0, 0, 0)
        if (d < bound && d > 240) {
          const angle = noise(x * e, y * e, z * e) * TAU ///random(TAU);
          const pos = createVector(x, y, z);
          const options = [
            createVector(c, 0, 0),
            createVector(-c, 0, 0),
            createVector(0, c, 0),
            createVector(0, -c, 0),
            createVector(0, 0, c),
            createVector(0, 0, -c),
          ];
          for (let i = 0; i < random([1, 1, 34]); i++) {
            push();
            rotateY(angle);
            translate(pos.x, pos.y, pos.z);
            box(c);

            pop();

            const dir = random(options);
            pos.add(dir);
          }
        }
      }
    }
  }
  save("distanced-cube-6.jpg")
}