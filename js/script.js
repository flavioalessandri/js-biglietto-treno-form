
var btn= document.getElementById("btn");

btn.addEventListener("click", function() {
  var name = document.getElementById("name").value;
  var familyName = document.getElementById("familyName").value;
  var userKm = document.getElementById("userKm").value;
  var userAge = document.getElementById("userAge").value;
  var minCarrozza = 1;
  var maxCarrozza = 10;
  var minNumeroTreno = 90000;
  var maxNumerotreno = 100000;

  var ticketCost;
  var sale;
  var standardCost = .21; // tariffa base al km

   if (userAge == "Maggiorenne"){
    sale = 0; //senza sconto tariffa base
    ticketCost =  (userKm * standardCost - (sale/100) * userKm * standardCost ).toFixed(2);
    console.log(document.getElementById("ticketRate").innerHTML="TARIFFA BASE");
    console.log(document.getElementById("ticketCost").innerHTML= ticketCost + "€");
    console.log(ticketCost , " euro tariffa base");


  } else if (userAge == "Over65") {
    sale = 40; //40% over 65
    ticketCost =  (userKm * standardCost - (sale/100) * userKm * standardCost ).toFixed(2);
    console.log(document.getElementById("ticketRate").innerHTML="TARIFFA CONFORT");
    console.log(document.getElementById("ticketCost").innerHTML= ticketCost + "€");
    console.log("tariffa base" , (userKm * standardCost));
    console.log(ticketCost , " euro over 65");

  } else if (userAge == "Under18") {
    sale = 20; //20% under 18
    ticketCost =  (userKm * standardCost - (sale/100) * userKm * standardCost ).toFixed(2);
    console.log(document.getElementById("ticketRate").innerHTML="TARIFFA YOUNG");
    console.log(document.getElementById("ticketCost").innerHTML= ticketCost + "€");
    console.log("tariffa base" ,(userKm * standardCost));
    console.log(ticketCost , "euro under 18");
  }

  document.getElementById("tbName").innerHTML = name + " " + familyName;
  document.getElementById("ticketCost").innerHTML = ticketCost;

} );


// var numero = Math.floor(Math.random());
