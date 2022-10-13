// 1 uzduotis

// 1) sukurti futbolininko objekta
// 2) sukurti html saraso elementa
// 3) pavaizduoti futbolininkus html sarase pagal varda ir pavarde
// 4) pavaizduoti i html, kuris greiciausias

var futbolininkai = [
  {
    name: "Jonas",
    lastname: "Jonatis",
    height: "1.8m",
    age: 25,
    speed: 10.5
  },
  {
    name: "Tomas",
    lastname: "Tomaitis",
    height: "1.7m",
    age: 27,
    speed: 7.5
  },
  {
    name: "Juozas",
    lastname: "Juozaitis",
    height: "1.9m",
    age: 30,
    speed: 8.5
  }
];

var list = document.getElementById("list");
var fast = document.getElementById("fastest");


futbolininkai.forEach(function (element) {
  var li = document.createElement("li");
  li.innerText = element.name + " " + element.lastname;
  list.appendChild(li);
});

futbolininkai.forEach(function () {
  var jonoGreitis = futbolininkai[0].speed;
  var tomoGreitis = futbolininkai[1].speed;
  var juozoGreitis = futbolininkai[2].speed;

  if (jonoGreitis < tomoGreitis && jonoGreitis < juozoGreitis) {
    fast.innerHTML = futbolininkai[0].name + " " + "greičiausias, kadangi jo greitis " + jonoGreitis + "s";
  } else if (tomoGreitis < jonoGreitis && tomoGreitis < juozoGreitis) {
    fast.innerHTML = futbolininkai[1].name + " " + "greičiausias, kadangi jo greitis " + tomoGreitis + "s";
  } else if (juozoGreitis < jonoGreitis && juozoGreitis < tomoGreitis) {
    fast.innerHTML = futbolininkai[2].name + " " + "greičiausias, kadangi jo greitis " + juozoGreitis + "s";
  }
});

// 2 uzduotis

// 1. sukurti masinu objekta (pav, greitis, kelias)
// 1.1 sukurti metoda, kuris apskaiciuotu nuvaziuota kelia per valanda

// 2. sukurti mygtuka
// 2.1. sukurti html elementa pavaizdavimui
// 2.2. padaryti, kad paspaudus mygtuka butu galima sukurti 5 masinas ir jas pavaizduoti html elemente



// document.write("<h3>2 užduotis</h3>");


