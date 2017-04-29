/*

  Nápověda:

    Jak poznám, že jsou dvě kartičky stejné?
        Jejich obrázky mají stejnou adresu, tzn. stejnou vlastnost .src neboli platí, že obrazek1.src === obrazek2.src

    Ale já nemám obrázek v proměnné! Kartička je reprezentovaná elementem button, uvnitř kterého je teprve obrázek!
        Funkci querySelector lze použít také z jakéhokoli elementu, pak bude hledat první element pouze uvnitř tohoto elementu - nějak takto:

            function priKliknutiNaKarticku() {
              let karticka = this;
              let adresaObrazkuKarticky = karticka.querySelector("img").src;
            }

    Jak mám vyřešit sledování toho, jestli mám odkrýt první kartičku nebo druhou kartičku nebo dokonce už jsou obě odkryté a já mám zjistit, jestli se shodují?
        Pro tebe bude zřejmě nejjednodušší použít proměnnou, kterou deklaruješ venku mimo funkci - tím do ní můžeš v jedné fázi něco uložit a v jiné to z ní přečíst - nějak takto:

            let faze = 1;
            function priKliknutiNaKarticku() {
              if (faze === 1) {
                // dělám něco v první fázi
                // potom nastavím proměnnou na další fázi, abych při dalším kliknutí věděla, že už jsme dál
                faze = 2;
              } else if (faze === 2) {
                // dělám něco ve druhé fázi
                // obdobně jako předtím se přepnu na další fázi
                faze = 3;
              } else {
                // dělám něco ve třetí fázi
                // a nakonec skočím zase na začátek
                faze = 1;
              }
            }


    Předpřipravené třídy v CSS, které se ti můžou hodit:
      - kartička je ve výchozím stavu otočená obrázkem dolů, přidej jí třídu "otocena", aby se obrázek ukázal, a pak jí zase odeber, pokud se kartičky neshodují
      - pokud se kartičky shodovaly, odebereš je ze stolu tak, že jim přidáš třídu "nalezena"

*/



// Takhle můžeš pexeso zamíchat, aby byly kartičky pokaždé na jiném místě
zamichat("#pexeso img");
