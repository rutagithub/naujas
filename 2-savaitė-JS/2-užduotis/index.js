// 1 uzduotis
document.write("<h3>1 užduotis</h3>");

var divas = document.createElement("div");

function iskviestiTeksta() {
  divas.innerHTML = "Mėgstu programuoti. Yey &#128522;";
  document.body.appendChild(divas);

}

iskviestiTeksta();

document.write("<br>");
document.write("<br>");


// 2 uzduotis
document.write("<h3>2 užduotis</h3>");

var par = document.createElement("div");
par.setAttribute("id", "fruit");
document.body.appendChild(par);

function fruit(price, fruitName) {
  var fruitPrice = price * 5;
  return "Penkių " + fruitName + " kaina " + fruitPrice;
}

var totalPrice = fruit(2.5, "Obuolys");

document.getElementById("fruit").innerHTML = totalPrice;

// 3 uzduotis

// 1) susikurti html input

// 2) paimti reiksmes, kai paspaudziamas mygtukas

// 3) suskaiciuoti kaina pagal kieki

// 4) pavaizduoti ekrane

var btn = document.getElementById("total");
btn.addEventListener('click', function () {
  var pavadinimas = document.getElementById('pavadinimas').value;
  var kiekis = document.getElementById('kiekis').value;
  var kaina = document.getElementById('kaina').value;
  var totalKaina = kaina * kiekis;

  // console.log(pavadinimas, kiekis, kaina);

  var para = document.getElementById('totalInfo')
  para.innerHTML = "Vaisių kaina: " + totalKaina + ". Buvo pirkta " + kiekis + " vnt. vaisiaus " + pavadinimas;

  // console.log(para);

});

// 4 užduotis

// 1. susikurti heroju masyva su objektais
// 2. naudojant for each pavaizduoti masyve html elemente
//  3. nuspalvinti kas antra elementa melynai su baltos spalvos tekstu

document.write("<h3>4 užduotis</h3>");


var herojai = [
  {
    name: "Thor",
    skill: "Hammer"
  },
  {
    name: "Hulk",
    skill: "Big green monster"
  },
  {
    name: "Spiderman",
    skill: "shoots spider webs"
  },
  {
    name: "Iron man",
    skill: "Genius with iron suits"
  }
];

herojai.forEach(function (element, index) {
  var lyginis = index + 1;
  if (lyginis % 2 == 0) {
    // console.log(lyginis, element, "lyginis");
    var divLine = document.createElement("div");
    divLine.innerHTML = element.name + " " + element.skill;
    divLine.style.color = "white";
    divLine.style.backgroundColor = "blue";
    document.body.appendChild(divLine);
  } else {
    var divLine = document.createElement("div");
    divLine.innerHTML = element.name + " " + element.skill;
    document.body.appendChild(divLine);
  }
  // console.log(element, index);
});