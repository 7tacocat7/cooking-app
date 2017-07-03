var litres = function(number1) {
  return number1* 3.785411784;
};

var number1 = parseInt(prompt("Enter a  no. of gallons:"));
var result = litres(number1);
alert(result + " litres");
