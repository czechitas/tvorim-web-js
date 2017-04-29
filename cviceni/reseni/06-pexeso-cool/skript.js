// Proměnné pro řízení hry:
let maximalniPocetBodu = 8;
let prvniKarticka;
let druhaKarticka;
let faze;
let hrackaNaRade;

// Informace o hráčích:
let hracka1 = document.querySelector("#hracka1");
let hracka2 = document.querySelector("#hracka2");
let bodyHracky1 = 0;
let bodyHracky2 = 0;
let elementNaBodyHracky1 = document.querySelector("#hracka1 .body");
let elementNaBodyHracky2 = document.querySelector("#hracka2 .body");
let jmenoHracky1 = document.querySelector("#hracka1 .jmeno");
let jmenoHracky2 = document.querySelector("#hracka2 .jmeno");

// Startovací tlačítko:
let startovaciTlacitko = document.querySelector("#startovaci-tlacitko");

function priKliknutiNaStartovaciTlacitko() {
  // Při kliknutí na startovací tlačítko nastavíme počáteční hodnoty
  faze = 1;
  hrackaNaRade = 1;
  hracka1.classList.add("hraje");

  // Zamícháme pexeso
  zamichat("#pexeso img");

  // Zablokujeme startovací tlačítko a zobrazíme pexeso
  startovaciTlacitko.disabled = true;
  document.querySelector("#pexeso").classList.add("odstartovano");
}

startovaciTlacitko.addEventListener("click", priKliknutiNaStartovaciTlacitko);


// Kartičky pexesa:
function priKliknutiNaKarticku() {
  if (faze === 1) {
    // První fáze je kliknutí na první kartičku
    prvniKarticka = this;
    prvniKarticka.classList.add("otocena");

    // A přejdeme na druhou fázi
    faze = 2;
  } else if (faze === 2) {
    // Druhá fáze je kliknutí na druhou kartičku
    // Nesmí to ale být ta samá kartička jako ta první
    if (prvniKarticka !== this) {
      druhaKarticka = this;
      druhaKarticka.classList.add("otocena");

      // A přejdeme na třetí fázi
      faze = 3;
    }
  } else {
    // Třetí a poslední fáze je vyhodnocení otočených kartiček
    let adresaObrazkuNaPrvniKarticce = prvniKarticka.querySelector("img").src;
    let adresaObrazkuNaDruheKarticce = druhaKarticka.querySelector("img").src;
    if (adresaObrazkuNaPrvniKarticce === adresaObrazkuNaDruheKarticce) {
      // Jé, kartičky jsou stejné
      // Odebereme je ze stolu
      prvniKarticka.classList.add("nalezena");
      druhaKarticka.classList.add("nalezena");

      // A přičteme hráči bod
      if (hrackaNaRade === 1) {
        bodyHracky1 = bodyHracky1 + 1;
        elementNaBodyHracky1.textContent = bodyHracky1;
      } else {
        bodyHracky2 = bodyHracky2 + 1;
        elementNaBodyHracky2.textContent = bodyHracky2;
      }

      // Zjistíme, jestli už není konec hry
      if (bodyHracky1 + bodyHracky2 === maximalniPocetBodu) {
        // Ano, je konec hry.. Zjistíme, kdo vyhrál
        if (bodyHracky1 > bodyHracky2) {
          alert(jmenoHracky1.value + " vyhrála :)");
        } else if (bodyHracky1 < bodyHracky2) {
          alert(jmenoHracky2.value + " vyhrála :)");
        } else {
          alert("Remíza..");
        }
      }

    } else {
      // Bohužel, kartičky nejsou stejné
      // Otočíme kartičky zpět obrázkem dolů
      prvniKarticka.classList.remove("otocena");
      druhaKarticka.classList.remove("otocena");

      // Teď bude hrát druhý hráč
      if (hrackaNaRade === 1) {
        hrackaNaRade = 2;
        hracka1.classList.remove("hraje");
        hracka2.classList.add("hraje");
      } else {
        hrackaNaRade = 1;
        hracka2.classList.remove("hraje");
        hracka1.classList.add("hraje");
      }
    }

    // Na řadě je opět první fáze
    faze = 1;
  }
}

document.querySelector("#karticka1-1").addEventListener("click", priKliknutiNaKarticku);
document.querySelector("#karticka1-2").addEventListener("click", priKliknutiNaKarticku);
document.querySelector("#karticka1-3").addEventListener("click", priKliknutiNaKarticku);
document.querySelector("#karticka1-4").addEventListener("click", priKliknutiNaKarticku);
document.querySelector("#karticka2-1").addEventListener("click", priKliknutiNaKarticku);
document.querySelector("#karticka2-2").addEventListener("click", priKliknutiNaKarticku);
document.querySelector("#karticka2-3").addEventListener("click", priKliknutiNaKarticku);
document.querySelector("#karticka2-4").addEventListener("click", priKliknutiNaKarticku);
document.querySelector("#karticka3-1").addEventListener("click", priKliknutiNaKarticku);
document.querySelector("#karticka3-2").addEventListener("click", priKliknutiNaKarticku);
document.querySelector("#karticka3-3").addEventListener("click", priKliknutiNaKarticku);
document.querySelector("#karticka3-4").addEventListener("click", priKliknutiNaKarticku);
document.querySelector("#karticka4-1").addEventListener("click", priKliknutiNaKarticku);
document.querySelector("#karticka4-2").addEventListener("click", priKliknutiNaKarticku);
document.querySelector("#karticka4-3").addEventListener("click", priKliknutiNaKarticku);
document.querySelector("#karticka4-4").addEventListener("click", priKliknutiNaKarticku);
