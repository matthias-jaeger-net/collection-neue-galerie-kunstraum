import processing.pdf.*;
void setup() {
  size(800, 800, P3D);
  beginRaw(PDF, "raw.pdf");

  background(255);
  rectMode(CENTER);
  noLoop();
  
  translate(400, 400);
  scale(0.75);

  float s = 22;
  float w = 600;
  float e = 0.01;
  
  for (float z = -w / 2; z <= w / 2; z += 10) {
    for (float x = -w/2; x <= w/2; x += s) {
      for (float y = -w/2; y <= w/2; y += s) {
        float n = noise(x * e, y * e, z * e);
        float d = dist(x, y, z, 0, 0, 0);
  
        if (d > 380 || d < 280) {
          pushMatrix();
          translate(x, y, z);
          rotateY(n * TAU);
          rotateZ(n * TAU);
          rect(0, 0, 2, n * s * 3);
          rect(2, n * s * 3, n * s * 3, 2);
          popMatrix();
        }
      }
    }
  }
  endRaw();
  exit();
}
