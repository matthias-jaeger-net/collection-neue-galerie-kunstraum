import processing.pdf.*;
void setup() {
  size(800, 800, P3D);
  beginRaw(PDF, "raw.pdf");
  
  stroke(50);
  fill(255);
  translate(400, 400);
  scale(0.7);
  float w = 320;
  float cell = 20;
  //float d = w / cell;

  for (float x = -w; x <= w; x += cell) {
    for (float y = -w; y <= w; y += cell) {
      for (float z = -w; z <= w; z += cell) {
        float d = dist(x, y, z, 0, 0, 0);
        float s = 0.02;
        float n = noise(x * s, y * s, z * s);
        if (d < 100 || d > 420) {
          pushMatrix();
          translate(x, y, z);
          rotateZ(-TAU * n);
          box(cell, 2, cell * 5);
          popMatrix();
        }
      }
    }
  }

  endRaw();
  exit();
}
