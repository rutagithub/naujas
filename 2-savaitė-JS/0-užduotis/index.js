// 0 užduotis

var x = 10;
var y = 15;

var suma = x + y;

console.log(suma);

suma += 5;

console.log(suma, '+=');

suma -= 10;

console.log(suma, '-=');


var maryte = 15;
var jonukas = 10;

if (maryte > jonukas) {
  console.log("Maryte turi daugiau obuoliu nei jonukas");
} else if (jonukas > maryte) {
  console.log("Jonukas turi daugiau obuoliu nei maryte");
} else if (maryte == jonukas) {
  console.log("Atiduokim obuolius Editai");
}


switch (suma) {
  case 20:
  console.log("Turite 20 obuoliu");
  break;

  case 15:
  console.log("Turite 15 obuoliu");
  break;

  default:
    console.log("Obuoliu skaicius nera standartinis");
    break;
}

var vaisiai = ["obuolys", "bananas", "braske", "kriause", "vynuoge", "vysnia"];

console.log(vaisiai[3], vaisiai[5]);

for (let index = 0; index < vaisiai.length; index++) {
  const vaisius = vaisiai[index];

  console.log(vaisius);
}