
  

  
$(document).ready(function(){

  var startInterval = setInterval(start,500);
  

      var count = 60; // ustawiłem licznik 60 sekund gry tak jak miało być
      countDown();
      var counter = setInterval(countDown, 1000); // co 1 sekunde w teorii
      

      function countDown(){
          var out = count;
          if(count<10) out = '0' + count; // koncówka mniej niż 10 sekund to wyświetli sekundy w formacie 00 zamiast 0
          console.log(out);
          $("#timer").html(out); // przypisanie tekstu timera do odpowiedniego elementu html
          if( count <= 0){
              //licznik się wyzerował należy podjąć odpowiednią akcje
              clearInterval(counter); //zatrzymanie licznika i wraca
              clearInterval(startInterval); //zatrzymanie licznika i wraca
              return;
          }
          --count;
      }

  function start(){

  //Zapamietuje wysokosc i szerokosc ekranu w zmiennych
  var wysokoscKlienta = window.innerHeight;
  var szerokoscKlienta = window.innerWidth;
  
  // losowe pojawianie sie obiektu w poziomie
  var x = Math.round(Math.random()*(szerokoscKlienta-100));

  //obiekt pojawia sie 120px nad ekranem
  var y = -120;

  //var wynik = document.createElement('div');
  //wynik.className = 'wyswietlacz';
  //document.body.appendChild(wynik);

  // var className = 'block';
  var nowyDiv = document.createElement('div');


  var losoweCoiny = Math.round(Math.random()*2);


  nowyDiv.className = 'obiekt'+losoweCoiny;

  // nowyDiv.className = className;
  document.body.appendChild(nowyDiv);
  // var klocek = document.querySelector('.'+className);

  nowyDiv.style.top=y+"px";
  nowyDiv.style.left=x+"px";

  //obiekt po kliknieciu sie usuwa i daje nam punkty
    nowyDiv.addEventListener("click", function removeCoin() {
    nowyDiv.remove(nowyDiv);
    console.log("+1");
    return false;
    });


//koniec poprawek

  

  
  //grawitacja obiektu po zniknie z ekranu automatycznie sie usuwa
  var spadajInterval = setInterval (function spadaj(){
        if(y<(wysokoscKlienta)){
        y++;
        nowyDiv.style.top=y+'px';
      } else{nowyDiv.remove();}
    },10)
  }

});

 


