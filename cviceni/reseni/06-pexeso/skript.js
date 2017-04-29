// Proměnné pro kontrolu hry
let prvniKarticka;
let druhaKarticka;
let faze = 1;


// Před začátkem je potřeba zamíchat pexeso
zamichat("#pexeso img");


function priKliknutiNaKarticku() {
  if (faze === 1) {
    // První fáze je kliknutí na první kartičku
    prvniKarticka = this;
    prvniKarticka.classList.add("otocena");

    // A přejdeme na druhou fázi
    faze = 2;
  } else if (faze === 2) {
    // Druhá fáze je kliknutí na druhou kartičku
    // Nesmí to ale být ta samá kartička jako ta první, jinak by šlo vyhrát hru dvojklikem na každou z kartiček :)
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
    } else {
      // Bohužel, kartičky nejsou stejné
      // Otočíme kartičky zpět obrázkem dolů
      prvniKarticka.classList.remove("otocena");
      druhaKarticka.classList.remove("otocena");
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
