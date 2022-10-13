// 1 uzduotis
document.write("<h3>2 užduotis</h3>");

document.getElementById("moku").innerHTML = "Valio pavyko";
document.getElementById("moku").style.backgroundColor = "green";
document.getElementById("moku").style.width = "300px";
document.getElementById("moku").style.height = "300px";
document.getElementById("moku").style.margin = "0 auto";
document.getElementById("moku").style.textAlign = "center";

// 2 uzduotis

var par = document.createElement("div");

// console.log(par);

par.setAttribute("id", "moku1");

par.innerHTML = "Valio pavyko";
par.style.height = "300px";
par.style.width = "300px";
par.style.backgroundColor = "lightgrey";
par.style.margin = "50px auto";
par.style.textAlign = "center";

document.body.appendChild(par);

var btn = document.createElement("button");

btn.setAttribute("id", "spauduliukas");
btn.innerHTML = "paspausti";
btn.style.display = "block";
btn.style.margin = "0 auto";

document.body.appendChild(btn);

btn.addEventListener("click", function () {
  document.getElementById("moku1").remove();
  btn.remove();
});

document.write("<br>");

// 3 uzduotis

document.write("<h3>3 užduotis</h3>");

var karambaBtn = document.createElement("button");

karambaBtn.setAttribute("id", "karamba");
// console.log(karambaBtn);

karambaBtn.innerHTML = "paspausti";
karambaBtn.style.display = "block";
karambaBtn.style.margin = "0 auto";

document.body.appendChild(karambaBtn);

document.write("<br>");

karambaBtn.addEventListener("click", function () {

  var iframe = document.createElement('iframe');

  iframe.src = "https://www.youtube.com/embed/Zz6eOVaaelI";
  iframe.style.display = "block";
  iframe.style.margin = "0 auto";
  iframe.style.height = "315px";
  iframe.style.width = "500px";

  document.body.appendChild(iframe);
});