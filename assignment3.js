// Schrijf een loop waarbij de som van 5 elke keer vermenigvuldigd wordt met 4 met een maximum van 950. 
// Indien het 950 heeft behaald laat dit dan tonen in de console log met een succes.

var amount = 5;

while (amount < 950) {
    amount*=4;
  if(amount > 950){
    console.log("succes, 950 gehaald. Het aantal is " + amount)
  }
}

// werkend op https://codepen.io/amandaderijk/pen/QNeYJV