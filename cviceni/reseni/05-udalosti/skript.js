let mesto = document.querySelector("#mesto");
let teplota = document.querySelector("#teplota");
let slunicko = document.querySelector("#slunicko");
let vitr = document.querySelector("#vitr");
let ptacci = document.querySelector("#ptacci");
let tlacitko = document.querySelector("#tlacitko");



function priKliknutiNaTlacitko() {
  alert(mesto.value + ": " + teplota.valueAsNumber + "°C");
}

tlacitko.addEventListener("click", priKliknutiNaTlacitko);



function priZmeneTeploty() {
  if (teplota.valueAsNumber === 50) {
    alert("Neskutečné vedro..");
  }
}

teplota.addEventListener("change", priZmeneTeploty);



function priZmeneCheckboxu() {
  if (slunicko.checked && vitr.checked && ptacci.checked) {
    alert("Počasí se zbláznilo!");
  }
}

slunicko.addEventListener("change", priZmeneCheckboxu);
vitr.addEventListener("change", priZmeneCheckboxu);
ptacci.addEventListener("change", priZmeneCheckboxu);



// Bonusy


function priZmeneTeploty_bonus() {
  if (teplota.valueAsNumber < -40) {
    ptacci.disabled = true;
  } else {
    ptacci.disabled = false;
  }
}

teplota.addEventListener("change", priZmeneTeploty_bonus);



function priKliknutiNaTlacitko_bonus() {
  if (slunicko.checked) {
    alert("Sluníčko krásně svítí");
  }
  if (vitr.checked) {
    alert("Vítr krásně fouká");
  }
  if (ptacci.checked) {
    alert("Ptáčci krásně zpívají");
  }
}

tlacitko.addEventListener("click", priKliknutiNaTlacitko_bonus);



function priZmeneMesta_bonus() {
  if (mesto.value === "") {
    teplota.valueAsNumber = 15;
    slunicko.checked = false;
    vitr.checked = false;
    ptacci.checked = false;
  }
}

mesto.addEventListener("change", priZmeneMesta_bonus);
