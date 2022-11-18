import processing.pdf.*;
void setup() {
  size(800, 800, P3D);
  beginRaw(PDF, "raw.pdf");

  background(255);
  //rectMode(CENTER);
  noLoop();
  stroke(50);
  fill(255);
  
  translate(400, 400);
  scale(0.75);

  float w = 320;
  float cell = 30;

  for (float x = -w; x <= w; x += cell) {
    for (float y = -w; y <= w; y += cell) {
      for (float z = -w; z <= w; z += cell / 2) {
        float d = dist(x, y, z, 130, 0, 0);
        float s = 0.01;
        float n = noise(x * s, y * s, z * s);
        if (d < 340 || d > 420) {
          pushMatrix();
          translate(x, y, z);
          rotateX(TAU * n);
          ellipse(0, 0, cell * n, cell * n);
          popMatrix();
        }
      }
    }
  }

  endRaw();
  exit();
}
