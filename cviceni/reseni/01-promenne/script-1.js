let mrazivo = "mrazivo";
let chladno = "chladno";
let zamraceno = "zamraceno";
let polojasno = "polojasno";
let slunecno = "slunecno";

// Deklaruj promenou teplota a definuj ji dle aktualni teploty venku.

let teplota = 14;

// Napis podminku (if), ktera zkontroluje hodnotu promene teplota, pokud je nizsi nez 0, vypise pomoci alert hodnotu mrazivo, pokud je mensi nez 10, chladno, atd.. (rozmezi si urci sama)

if (teplota < 0) {
  alert(mrazivo);
} else if (teplota < 10) {
  alert(chladno);
} else if (teplota < 15) {
  alert(zamraceno);
} else if (teplota < 23) {
  alert(polojasno);
} else if (teplota >= 23) {
  alert(slunecno);
} 

// pridej dalsi promennou, teplotaVcera a opet ji deklaruj a definuj se spravnou hodnotou.

let teplotaVcera = 13;

// pridej dalsi podminku,ktera se diva jestli je prumerna teplota za vcera a dnes stejna jako teplota dnes, alertni to do sveta, pokud ne, tak taky :)

if ((teplota + teplotaVcera) / 2 === teplota) {
  alert("dnes je stejne jako prumer!"); 
} else {
  alert("dnes neni stejne jako prumer :("); 
}
