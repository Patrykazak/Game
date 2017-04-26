  

$(document).ready(function(){


$('#startGry').click(function(event){


  $('#scoreLabel').css('font-size',"600px")
  $('#container').hide('slow');
  $('#timer').show('slow');

      event.preventDefault();
      var startInterval = setInterval(start,100);

  var speed=5000;
  var howOften=1000;
  var score = 0;

  //$('#scoreLabel').html(score);

  var wynikInterval = setInterval(function(){
    $('#scoreLabel').html(score);
  },10);

  

      var count = 60; // ustawiłem licznik 60 sekund gry tak jak miało być
      countDown();
      var counter = setInterval(countDown, 1000); // co 1 sekunde w teorii
      

      function countDown(){
        var out = count;
          if(count<10) out = '0' + count; // koncówka mniej niż 10 sekund to wyświetli sekundy w formacie 00 zamiast 0
          console.log(out);
          $("#timer").html(out); // przypisanie tekstu timera do odpowiedniego elementu html
          if( count <= 0){
              count=00;
              //licznik się wyzerował należy podjąć odpowiednią akcje
              clearInterval(wynikInterval)
              clearInterval(counter); //zatrzymanie licznika i wraca
              clearInterval(startInterval); //zatrzymanie licznika i wraca
              // alert("Game Over!");
              $('#container').show('slow');
              $('[class^="obiekt"]').remove();
              $('#timer').hide('slow');
              $('#scoreLabel').css("font-size", "250px").css();
              return;
            }
            --count;
          }

function start(){


  if (score<=50){
speed=4500;}
if (score>50&&score<=100){
speed=4000;}
if (score>100&&score<=150){
speed=3500;}
if (score>150&&score<=200){
speed=3000;}
if (score>200&&score<=250){
speed=2500;}
if (score>250&&score<=300){
speed=2000;}
if (score>300&&score<=350){
speed=1500;}
if (score>350&&score<=400){
speed=1000;}

  //Zapamietuje wysokosc i szerokosc ekranu w zmiennych
  var wysokoscKlienta = window.innerHeight;
  var szerokoscKlienta = window.innerWidth;
  
  // losowe pojawianie sie obiektu w poziomie
  var x = Math.round(Math.random()*(szerokoscKlienta-100));

  //obiekt pojawia sie 120px nad ekranem
  var y = -120;

  var nowyDiv = document.createElement('div');
  nowyDiv.style.top=y+"px";
  nowyDiv.style.left=x+"px";

  var losoweCoiny = Math.round(Math.random()*2);
  nowyDiv.className = 'obiekt'+losoweCoiny;
  document.body.appendChild(nowyDiv);
  

  $(nowyDiv).animate({
    top: "100vh"
  }, speed, 'linear', function(){
    nowyDiv.remove();
  });

 

  //obiekt po kliknieciu sie usuwa i daje nam punkty
  nowyDiv.addEventListener("mouseover", function removeCoin() {
    
    if(nowyDiv.className=='obiekt0'){
    // setTimeout(function(){
      nowyDiv.remove(nowyDiv);
      // },200);
    count-=2;
    score-=5;
    //speed+=500;
  }

    if(nowyDiv.className=='obiekt1'){
      // setTimeout(function(){
      nowyDiv.remove(nowyDiv);
      // },200);
    //speed-=25;
    score+=1;}

    if(nowyDiv.className=='obiekt2'){
    // setTimeout(function(){
      nowyDiv.remove(nowyDiv);
      // },200);
    //speed-=25;
    score+=2;}
    return false;
  });

  //grawitacja obiektu po zniknie z ekranu automatycznie sie usuwa
  // var spadajInterval = setInterval (function spadaj(){
  //   if(y<(wysokoscKlienta)){
  //     y+=2;
  //     nowyDiv.style.top=y+'px';
  //   } else{nowyDiv.remove();}
  // },speed)
}
});

  

});




