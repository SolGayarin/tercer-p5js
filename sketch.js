let contador=0;
let colorRojo;
let colorAmarillo;
let colorAzul;


function setup() {
  createCanvas(400, 550);
  frameRate(60); //Velocidad de reproducción del Draw
}

function draw() {
  //console.log(frameCount); // frameCount es una variable, devuelve los fotogramas ejecutados
  background(255);
  


//.............................CONDICIONALES..............................
  
  switch(contador){
    case 0:
        colorRojo=color(194, 26, 29);// Original
        colorAmarillo=color(211, 188, 46);
        colorAzul=color(48, 140, 187);
        break;
 
    case 60:
        colorRojo=color(214, 110, 92); //tonos mas claros
        colorAmarillo=color(240, 183, 95);
        colorAzul=color(124,182,194);
        break;
     case 120:
        colorRojo=color(240, 139, 100); //tonos anaranjados
        colorAmarillo=color(216, 220, 145);
        colorAzul=color(148,195,189);
        break;
    case 180:
        colorRojo=color(148,195,189); //del 2
        colorAmarillo=color(240, 139, 100);
        colorAzul=color(194, 26, 29);
        break;
    case 240:
        colorRojo=color(240, 183, 95); // del 1
        colorAmarillo=color(214, 110, 92);
        colorAzul=color(216, 220, 145);
        break;
    case 300:
        colorRojo=color(240, 139, 100); // todo naranja
        colorAmarillo=color(240, 139, 100);
        colorAzul=color(240, 139, 100);
        break;
    case 360:
        colorRojo=color(240, 183, 95); //todo amarillo
        colorAmarillo=color(240, 183, 95);
        colorAzul=color(240, 183, 95);
        break;  
  }
  
  if (keyIsPressed) {
    if (key == "a" || key == "A") {
    contador=contador+10;}
  }else{contador++;} // Si mantengo apretada A, el contador acelera
  
  if(contador>=360){
    contador=0;
  } // Reinicio contador

  
// ..............................Figuras...........................................
  
  // Rectángulo fondo
  fill(210, 203, 197);
  beginShape(); // Inicio de forma personalizada
  noStroke();  //sin borde
  vertex(0,0);
  vertex(393,0);
  vertex(393,550);
  vertex(0,550);
  endShape(CLOSE); // Fin de forma personalizada
  
  
  // Primer rectángulo negro
  fill(15, 15, 15);
  beginShape(); // Inicio de forma personalizada
  noStroke();  //sin borde
  vertex(0,0);
  vertex(120,0);
  vertex(120, 75);
  vertex(0, 76);
  endShape(CLOSE); // Fin de forma personalizada
  
  // Rectángulo amarillo
  fill(colorAmarillo);
  beginShape(); // Inicio de forma personalizada
  noStroke();  //sin borde
  vertex(0, 325);
  vertex(40,325);
  vertex(40, 550);
  vertex(0,550);
  endShape(CLOSE); // Fin de forma personalizada

  // Segundo rectángulo negro
  fill(15, 15, 15);
  beginShape(); // Inicio de forma personalizada
  noStroke();  //sin borde
  vertex(0, 325);
  vertex(40,325);
  vertex(40, 355);
  vertex(0,355);
  endShape(CLOSE); // Fin de forma personalizada
  
  //Rectángulo rojo
  fill(colorRojo);
  noStroke();  //sin borde
  beginShape();
  vertex(120, 0);
  vertex(400,0);
  vertex(393, 220);
  vertex(120, 220);
  endShape(CLOSE);
  
  // Rectángulo gris grande arriba
  fill(189, 189, 187);
  noStroke();  //sin borde
  beginShape();
  vertex(120, 220);
  vertex(375,220);
  vertex(375, 440);
  vertex(120, 440);
  endShape(CLOSE);
  
  // Rectángulo gris vertical izquierda
  fill(189, 189, 187);
  noStroke();  //sin borde
  beginShape();
  vertex(40,325);
  vertex(120,325);
  vertex(120, 550);
  vertex(40, 550);
  endShape(CLOSE);
  
  // Rectángulo azul
  fill(colorAzul);
  noStroke();  //sin borde
  beginShape();
  vertex(305,440);
  vertex(393,440);
  vertex(393, 550);
  vertex(305, 550);
  endShape(CLOSE);
  
  
// ..................................líneas..................................
 
  fill(15, 15, 15);
  stroke(15, 15, 15);
  strokeCap(SQUARE); //Línea con borde recto
  strokeWeight(6);
  
  push();
  for (var x = 20; x < width; x++) {
    var mx=mouseX/70;
    var desplazamientoA=random(-mx,mx);
    var desplazamientoB=random(-mx,mx);
  } //lineas tiemblan
  
  line(120,220+desplazamientoA,393,220-desplazamientoB);// Línea 1 horizontal
  line(0,325+desplazamientoA,393,325-desplazamientoB);// Línea 2 horizontal
  line(120,440+desplazamientoA,393,440-desplazamientoB);// Línea 3 horizontal
  line(120,547+desplazamientoA,393,547-desplazamientoB); // Línea 4 horizontal
  line(40+desplazamientoA,325,40-desplazamientoB,550); // Línea 1 vertical
  line(120+desplazamientoA,0,120-desplazamientoB,550); // Línea 2 vertical
  line(305+desplazamientoA,440,305-desplazamientoB,550);// Línea 3 vertical
  line(375+desplazamientoA,220,375-desplazamientoB,440);// Línea 4 vertical
  
  pop(); //por qué las lineas se pintan amarillo??
  
}