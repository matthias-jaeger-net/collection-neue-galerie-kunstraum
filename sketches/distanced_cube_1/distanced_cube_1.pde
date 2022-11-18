import processing.pdf.*;
void setup() {
  size(800, 800, P3D);
  beginRaw(PDF, "raw.pdf");

  background(255);
  //rectMode(CENTER);
  noLoop();
  
  translate(400, 400);
  //scale(0.75);

  float s = 8;
  float w = 500;
  
  translate(-w / 2, -w / 2, -150);
  for (float z = -w / 2; z < w / 2; z += 10) {
    for (float x = 0; x < w; x += s) {
      for (float y = 0; y < w; y += s) {
        float n = noise(x * 0.01, y * 0.01, z * 0.01);
        float d = dist(x, y, z, w / 2, w / 2, z);
        if (d < w / 2) {
          pushMatrix();
          translate(x, y, z);
          rotateY(n * TAU);
          rotateZ(n * TAU);
          rect(0, 0, 2, n * s * 8);
          popMatrix();
        }
      }
    }
  }  

  endRaw();
  exit();
}
