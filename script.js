console.log("Hallo world");

let ansichtkaart = document.querySelector("#ansichtkaart");
let blauw = document.querySelector("#blauw");
let geel = document.querySelector("#geel");
let groen = document.querySelector("#groen");
let paars = document.querySelector("#paars");
let roze = document.querySelector("#roze");
let wit = document.querySelector("#wit");

let bigBen = document.querySelector("#big_ben")
let groteBigBen = document.querySelector("#grote_big_ben")

function wordtBlauw() {
  ansichtkaart.src = "image/ansichtkaart_blauw.png";
}

blauw.addEventListener("click", wordtBlauw);

function wordtGeel() {
  ansichtkaart.src = "image/ansichtkaart_geel.png";
}

geel.addEventListener("click", wordtGeel);

function wordtGroen() {
  ansichtkaart.src = "image/ansichtkaart_groen.png";
}

groen.addEventListener("click", wordtGroen);

function wordtPaars() {
  ansichtkaart.src = "image/ansichtkaart_paars.png";
}

paars.addEventListener("click", wordtPaars);

function wordtRoze() {
  ansichtkaart.src = "image/ansichtkaart_roze.png";
}

roze.addEventListener("click", wordtRoze);

function wordtWit() {
  ansichtkaart.src = "image/ansichtkaart_leeg.png";
}

wit.addEventListener("click", wordtWit);

bigBen.addEventListener("click", ()=>{
  groteBigBen.classList.toggle("show")
  console.log("hallo")
})