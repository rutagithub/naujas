// 1 uzduotis

// 1) sukurti futbolininko objekta
// 2) sukurti html saraso elementa
// 3) pavaizduoti futbolininkus html sarase pagal varda ir pavarde
// 4) pavaizduoti i html, kuris greiciausias

// futbolininko objekto konstruktorius
function Futbolininkas(name, lastname, height, age, speed) {
  this.name = name;
  this.lastname = lastname;
  this.height = height;
  this.age = age;
  this.speed = speed;
}

// trys futbolininko objektai
var fut1 = new Futbolininkas("Jonas", "Jonaitis", "1.8m", 25, 10.5);
var fut2 = new Futbolininkas("Tomas", "Tomaitis", "1.7m", 27, 7.5);
var fut3 = new Futbolininkas("Juozas", "Juozaitis", "1.9m", 30, 8.5);

// metodai futbolininko vardui ir pavardei
fut1.fullName = function () {
  return this.name + " " + this.lastname;
}

fut2.fullName = function () {
  return this.name + " " + this.lastname;
}

fut3.fullName = function () {
  return this.name + " " + this.lastname;
}

// atvaizdavimas sarase
document.getElementById("pirmas").innerHTML = fut1.fullName();
document.getElementById("antras").innerHTML = fut2.fullName();
document.getElementById("trecias").innerHTML = fut3.fullName();


// greiciai

var jonoGreitis = fut1.speed;
var tomoGreitis = fut2.speed;
var juozoGreitis = fut3.speed;


// funkcija nustatyti, kuris greiciausias
function kurisGreiciausias() {
  var fastest = document.getElementById("fastest");
  if (jonoGreitis < tomoGreitis && jonoGreitis < juozoGreitis) {
    fastest.innerHTML = fut1.name + " " + "greičiausias, kadangi jo greitis " + fut1.speed + " m/s";
  } else if (tomoGreitis < jonoGreitis && tomoGreitis < juozoGreitis) {
    fastest.innerHTML = fut2.name + " " + "greičiausias, kadangi jo greitis " + fut2.speed + " m/s";
  } else if (juozoGreitis < jonoGreitis && juozoGreitis < tomoGreitis) {
    fastest.innerHTML = fut3.name + " " + "greičiausias, kadangi jo greitis " + fut3.speed + " m/s";
  }
};

kurisGreiciausias();


// 2 uzduotis

// 1) sukurti objekta
// 2) sukurti objekte metodus, kuriais pasiekciau properties
// 3) sukurti mygtuka
// 4) ant mygtuko paspaudimo butu sukurtos 5 masinos
// 5) sukurti html elementa
// 6) atvaizduoti 5 masinas su visais parametrais html elemente

// objekto konstruktorius
function Car(name, speed, distance) {
  this.name = name;
  this.speed = speed;
  this.distance = distance;
  this.calculateTime = function () {
    return this.distance / this.speed;
  };
}

// 5 masinos su properties

var car1 = new Car("Volvo", 120, 150);
var car2 = new Car("Mercedes", 100, 60);
var car3 = new Car("BMW", 50, 130);
var car4 = new Car("Audi", 60, 100);
var car5 = new Car("Fiat", 80, 110);

// divai atvaizduoti masinas
var divas = document.createElement("div");
divas.style.marginBottom = "20px";
document.body.appendChild(divas);

var divas1 = document.createElement("div");
divas1.style.marginBottom = "20px";
document.body.appendChild(divas1);

var divas2 = document.createElement("div");
divas2.style.marginBottom = "20px";
document.body.appendChild(divas2);

var divas3 = document.createElement("div");
divas3.style.marginBottom = "20px";
document.body.appendChild(divas3);

var divas4 = document.createElement("div");
divas4.style.marginBottom = "20px";
document.body.appendChild(divas4);

var btn = document.createElement("button");
btn.innerHTML = "paspausti";
btn.style.display = "block";
btn.style.margin = "0 auto";
document.body.appendChild(btn);

// mygtukas issaukti 5 masinas

btn.addEventListener("click", function () {
  divas.innerHTML = "Pavadinimas: " + car1.name + "<br>" + "Greitis: " + car1.speed + " km/h" + "<br>" + "Nuvažiuotas atstumas: " + car1.distance + " km" + "<br>" + "Laikas, per kurį nuvažiuotas atstumas: " + car1.calculateTime() + " h";
  divas1.innerHTML = "Pavadinimas: " + car2.name + "<br>" + "Greitis: " + car2.speed + " km/h" + "<br>" + "Nuvažiuotas atstumas: " + car2.distance + " km" + "<br>" + "Laikas, per kurį nuvažiuotas atstumas: " + car2.calculateTime() + " h";
  divas2.innerHTML = "Pavadinimas: " + car3.name + "<br>" + "Greitis: " + car3.speed + " km/h" + "<br>" + "Nuvažiuotas atstumas: " + car3.distance + " km" + "<br>" + "Laikas, per kurį nuvažiuotas atstumas: " + car3.calculateTime() + " h";
  divas3.innerHTML = "Pavadinimas: " + car4.name + "<br>" + "Greitis: " + car4.speed + " km/h" + "<br>" + "Nuvažiuotas atstumas: " + car4.distance + " km" + "<br>" + "Laikas, per kurį nuvažiuotas atstumas: " + car4.calculateTime() + " h";
  divas4.innerHTML = "Pavadinimas: " + car5.name + "<br>" + "Greitis: " + car5.speed + " km/h" + "<br>" + "Nuvažiuotas atstumas: " + car5.distance + " km" + "<br>" + "Laikas, per kurį nuvažiuotas atstumas: " + car5.calculateTime() + " h";
});
