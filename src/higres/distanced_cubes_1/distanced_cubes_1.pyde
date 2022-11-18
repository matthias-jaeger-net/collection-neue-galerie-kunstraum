def setup():
  size(800, 800, P3D)
  background(255)
  s = 8
  w = 500
  
  translate(-w / 2, -w / 2, -150)
  
  for z in range(-w / 2, w / 2, 10): 
    for x in range(0, w, s):
      for y in range(0, w, s):
        n = noise(x * 0.01, y * 0.01, z * 0.01)
        d = dist(x, y, z, w / 2, w / 2, z)
        
        if (d < w / 2):
          push()
          translate(x, y, z)
          rotateY(n * TAU)
          rotateZ(n * TAU)
          rect(0, 0, 2, n * s * 8)
          pop();
