import processing.pdf.*;
void setup() {
  size(800, 800, P3D);
  beginRaw(PDF, "raw.pdf");
  background(255);
  
  rectMode(CENTER);
  noLoop();
  
  translate(400, 400);
  scale(0.75);

  float s = 20;
  float w = 600;
  
  for (float z = -w / 2; z <= w / 2; z += s) {
    for (float x = -w / 2; x <= w / 2; x += s) {
      for (float y = -w / 2; y <= w / 2; y += s) {
        float n = noise(x * 0.01, y * 0.01, z * 0.01);
        float d = dist(x, y, z, 200, 0, 0);
        if (d < 300 || d > 400) {
          pushMatrix();
          translate(x, y, z);
          rotateY(n * TAU);
          rotateZ(n * TAU);
          box(n * s * 2 );
          popMatrix();
        }
      }
    }
  }  

  endRaw();
  exit();
}
