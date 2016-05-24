// Schrijf een if/else statement waarbij je 2 getallen met elkaar vergelijkt.Indien de getallen gelijk zijn, laat dit dan in een bericht tonen in de console.
// Indien het eerste getal groter is dan het tweede, laat dan een alert message weergeven.Indien het tweede getal groter is dan het eerste, zorg dan dat er niets gebeurd.

var number = 1;
var getal = 1;

if (number === getal) {
  console.log("De getallen zijn gelijk");
} else if ( number > getal) {
  console.log("Number is groter dan getal");
}

// werkend op https://codepen.io/amandaderijk/pen/EKqGQR



// Er is een gezin met 5 kinderen, in de toekomst heeft de vader een nieuwe functie als web developer. 
// Laat in de console een bericht schrijven waarin aangegeven wordt dat de vader een nieuwe baan krijgt, 
// de moeder een huisvrouw is en dat ze 5 kinderen hebben. Let op de waardes van het aantal kinderen en de beroepen moet je kunnen wijzigen.

var kinderen = 5;
var moeder = "huisvrouw";
var vader = "web developer";

console.log("Er waren eens een vader en een moeder. De vader werkte als " + vader + " en de moeder was een " + moeder + ". Samen hadden ze " + kinderen + " kinderen. Alles ging goed, maar toen wisselde de vader van baan..")

// werkend op https://codepen.io/amandaderijk/pen/ZWgVRv


// Schrijf een loop waarbij de som van 5 elke keer vermenigvuldigd wordt met 4 met een maximum van 950. 
// Indien het 950 heeft behaald laat dit dan tonen in de console log met een succes.

var i = 5;

while (i < 950) {
    i*=4;
  if(i > 950){
    console.log("succes, 950 gehaald. Het aantal is " + i)
  }
}

// werkend op https://codepen.io/amandaderijk/pen/QNeYJV


