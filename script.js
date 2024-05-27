console.log("Hallo");

let ansichtkaart = document.querySelector("#ansichtkaart");

let blauw = document.querySelector("#blauw");
let geel = document.querySelector("#geel");
let groen = document.querySelector("#groen");
let paars = document.querySelector("#paars");
let roze = document.querySelector("#roze");
let wit = document.querySelector("#wit");

let bigBen = document.querySelector("#big_ben");
let groteBigBen = document.querySelector("#grote_big_ben");

let eifelToren = document.querySelector("#eifel_toren");
let groteEifelToren = document.querySelector("#grote_eifel_toren");

let molen = document.querySelector("#molen");
let groteMolen = document.querySelector("#grote_molen");

let operaHouse = document.querySelector("#sydney_opera_house");
let groteOperaHouse = document.querySelector("#grote_opera_house");

let torenVanPisa = document.querySelector("#toren_van_pisa");
let groteTorenVanPisa = document.querySelector("#grote_toren_van_pisa");

let vrijheidsbeeld = document.querySelector("#vrijheidsbeeld");
let grotevrijheidsbeeld = document.querySelector("#grote_vrijheidsbeeld");

let klaarKnop = document.querySelector("#klaar_knop");
let goedGedaan = document.querySelector("#goed_gedaan");

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

bigBen.addEventListener("click", () => {
  groteBigBen.classList.toggle("show");
});

eifelToren.addEventListener("click", () => {
  groteEifelToren.classList.toggle("show");
});

molen.addEventListener("click", () => {
  groteMolen.classList.toggle("show");
});

operaHouse.addEventListener("click", () => {
  groteOperaHouse.classList.toggle("show");
});

torenVanPisa.addEventListener("click", () => {
  groteTorenVanPisa.classList.toggle("show");
});

vrijheidsbeeld.addEventListener("click", () => {
  grotevrijheidsbeeld.classList.toggle("show");
});

klaarKnop.addEventListener("click", () => {
  if (
    groteBigBen.classList.contains("show") ||
    groteEifelToren.classList.contains("show") ||
    groteMolen.classList.contains("show") ||
    groteOperaHouse.classList.contains("show") ||
    groteTorenVanPisa.classList.contains("show") ||
    grotevrijheidsbeeld.classList.contains("show")
  ) {
    goedGedaan.textContent = "Super leuk!";
  } else {
    goedGedaan.textContent = "Kies eerst een illustratie";
  }

  setTimeout(() => {
    goedGedaan.textContent = "";
  }, 2000);
});
