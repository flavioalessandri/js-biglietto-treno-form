
//defining buttons variables

var btnCreate= document.getElementById("btnCreate");
var btnClear= document.getElementById("btnClear");

var day = new Date().getDay();
var month = new Date().getMonth();
var hour = new Date().getHours();
var minutes = new Date().getMinutes();

document.getElementById("countDown").innerHTML= "0"+ day + " / " + "0"+ month + " / " + hour +  " : " + minutes;


// Open FUNCTION 1........................................................

//The document.addEventListener() method attaches an event handler to the document.
btnCreate.addEventListener("click", function() {
  document.getElementById("toShow").className = "show";
  document.getElementById("ticketTable").className = "show"; //after click Button - show content below

  document.getElementById("ticketResume").className = "show";
  document.getElementById("ticketRate").className = "show";
  document.getElementById("ticketBill").className = "show";
  document.getElementById("moneySafe").className = "show";

//main variables definition

//Fill the variables with the element value using the element ID - value return a string
  var name = document.getElementById("name").value;
  var familyName = document.getElementById("familyName").value;
  var userKm = document.getElementById("userKm").value;
  var userAge = document.getElementById("userAge").value;

//Assign value to our variables
  var minNumeroTreno = 90000; // min Math.random value
  var maxNumeroTreno = 100000; // max Math.random value
  var minCarrozza = 1; // min Math.random value
  var maxCarrozza = 10; // max Math.random value
  var ticketCost; // final cost of the ticket
  var sale; // the ticket sale: 20% or 40%
  var standardCost = .21; // tariffa base al km

   if (userAge == "Under18") {
     sale = 20; //20% ticket sale for  under 18 people
     ticketCost =  (userKm * standardCost - (sale/100) * userKm * standardCost ).toFixed(2);
     document.getElementById("ticketRate").innerHTML="TARIFFA YOUNG";
     document.getElementById("ticketBill").innerHTML= ticketCost + "€";
     document.getElementById("moneySafe").innerHTML= "Hai risparmiato " + ((sale/100) * userKm * standardCost).toFixed(2) + "€ sul Biglietto Base!" ;

     console.log("tariffa base" ,(userKm * standardCost));
     console.log(ticketCost , "€ under 18");

  } else if (userAge == "Over65") {
    sale = 40; //40% ticket sale for over 65 people
    ticketCost =  (userKm * standardCost - (sale/100) * userKm * standardCost ).toFixed(2);
    document.getElementById("ticketRate").innerHTML="TARIFFA CONFORT";
    document.getElementById("ticketBill").innerHTML= ticketCost + "€";
    document.getElementById("moneySafe").innerHTML= "Hai risparmiato " + ((sale/100) * userKm * standardCost).toFixed(2) + "€ sul Biglietto Base!" ;

    console.log("tariffa base" , (userKm * standardCost));
    console.log(ticketCost , "€ over 65");

  } else {
     sale = 0; //basic ticket without sale
     ticketCost =  (userKm * standardCost - (sale/100) * userKm * standardCost ).toFixed(2);
     document.getElementById("ticketRate").innerHTML="TARIFFA BASE";
     document.getElementById("ticketBill").innerHTML= ticketCost + "€";
     document.getElementById("moneySafe").innerHTML= "" ;
     // console.log(ticketCost , " euro tariffa base");
  };

    // Generating Random Numbers for the Trian coach
    var carrozza = Math.floor(Math.random() * ( maxCarrozza - minCarrozza) + minCarrozza);
    // Generating Random Numbers for the Trian number
    var numeroTreno = Math.floor(Math.random() * ( maxNumeroTreno - minNumeroTreno) + minNumeroTreno);

    // Insert results into HTML element using getElementById
    document.getElementById("customer").innerHTML = name + " " + familyName;
    document.getElementById("numeroTreno").innerHTML = numeroTreno;
    document.getElementById("carrozza").innerHTML = carrozza;
    document.getElementById("ticketCost").innerHTML = ticketCost + "€";
});

// closing FUNCTION 1.............................................................


// open FUNCTION 2............................................................

//Once button "btnClear" is clicked,  switch selected object opacity to zero
btnClear.addEventListener("click", function() {
  document.getElementById("toShow").className = "hidden";
  document.getElementById("ticketTable").className = "hidden"; //change table class name
  document.getElementById("name").value = "";
  document.getElementById("familyName").value = "";
  document.getElementById("userKm").value = "";
  document.getElementById("ticketCost").value = "";
  document.getElementById("userAge").value = "Maggiorenne";

  document.getElementById("ticketResume").className = "hidden";
  document.getElementById("ticketRate").className = "hidden";
  document.getElementById("ticketBill").className = "hidden";
  document.getElementById("moneySafe").className = "hidden";

});

// closing FUNCTION 2...................................................
