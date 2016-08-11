var firstName = prompt("Please enter your first name"), 
	lastName = prompt("Please enter your last name"),
	name = firstName.concat(" " + lastName),
	age = prompt("Please enter your age"),
	luckyNumber = 54,
	number = prompt("Please enter a number between 0 and 100");

	number = parseInt(number);

	console.log(number);
if (age < 18){
	alert("You're too young to play");
} else if (age >= 18 && number === luckyNumber){
	document.write(name + " you guessed the lucky number, your number was " + number);

} else {
	document.write(name + " you didn't guess the lucky number, the lucky number was " + luckyNumber);
}