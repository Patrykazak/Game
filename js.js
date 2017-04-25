
  window.onload = setInterval(start,1000);
  



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



  


  nowyDiv.className = losoweCoiny;

  // nowyDiv.className = className;
  document.body.appendChild(nowyDiv);
  // var klocek = document.querySelector('.'+className);
  console.log(losoweCoiny);

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
  setInterval (function spadaj(){
    if(y<(wysokoscKlienta)){
    y++;
    nowyDiv.style.top=y+'px';
  } else{nowyDiv.remove();}
},10)
}


