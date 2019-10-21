//Liters to Gallons
var literPrompt = parseInt(prompt("How many liters do you have?"));
var litersToGallon = function(liters) {
  return "Gallons: " + liters * 0.26417;
}

alert(litersToGallon(parseFloat(literPrompt)));

//Gallons to Liters
var gallonPrompt = parseInt(prompt("How many gallons do you have?"));
var gallonsToLiter = function(gallons){
  return "Liters: " + (gallons/ 0.26417).toFixed(2);
}

console.log(gallonsToLiter(gallonPrompt));
