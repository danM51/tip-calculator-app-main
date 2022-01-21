// so what is the goal?

// select bill/////////-->

//We'll have to get the bill amount first i think...
//like so...
//to get bill amount ... take the value within the input turn it into a number instead of string then save it to bill amount.
/////////////////////
// JS Sequence:

let billAmount = document.getElementById("bill").value;
// console.log(parseInt(billAmount));
let numOf_billAmount = parseFloat(billAmount); //<--this is the bill amount set as an integer
console.log(numOf_billAmount);
//billAmount = process of taking the value --> turning it into a number;

// selectTip %///////////-->

//select a percentage whereby that percentage is a value of (number/integer)
const five_percent = document.getElementById("five_percent");
const ten_percent = document.getElementById("ten_percent");
const fifteen_percent = document.getElementById("fifteen_percent");
const twentyFive_percent = document.getElementById("twentyFive_percent");
const fifty_percent = document.getElementById("fifty_percent");
const custom = document.getElementById("custom");

//now we'll have to calculate the tip amount
//how the hell do i calculate the tip amount ...
// example:
//to get a tip amount of 5% = ( 5 / 100) * 100; then save this to a variable named tipAmount
////////////////////
// JS Sequence:
//add event lisener 'onclick' that adds the function that calculates the percentage to the bill.

//fot 5%
let innerT_five_percent = five_percent.innerText; //<-- after retrieving inner text, thats when we can set it as a number below/after;
let value_five_percent = parseInt(innerT_five_percent);
let percentageOf_five_percent = value_five_percent / 100; //<-- five percent
console.log(percentageOf_five_percent);

// five_percent.addEventListener("click", function (e) {
//   console.log(percentageOf_five_percent * numOf_billAmount); //<- tip to be paid on amount of bill
//   //we want then to change the tip amount and total
// });

//fot 10%
let innerT_ten_percent = ten_percent.innerText;
let value_ten_percent = parseInt(innerT_ten_percent);
let percentageOf_ten_percent = value_ten_percent / 100;
console.log(percentageOf_ten_percent);

// ten_percent.addEventListener("click", function (e) {
//   console.log(percentageOf_ten_percent * numOf_billAmount);
// });
//fot 15%
let innerT_fifteen_percent = fifteen_percent.innerText;
let value_fifteen_percent = parseInt(innerT_fifteen_percent);
let percentageOf_fifteen_percent = value_fifteen_percent / 100;
console.log(percentageOf_fifteen_percent);

// fifteen_percent.addEventListener("click", function (e) {
//   console.log(percentageOf_fifteen_percent * numOf_billAmount);
// });
//fot 25%
let innerT_twentyFive_percent = twentyFive_percent.innerText;
let value_twentyFive_percent = parseInt(innerT_twentyFive_percent);
let percentageOf_twentyFive_percent = value_twentyFive_percent / 100;
console.log(percentageOf_twentyFive_percent);

// twentyFive_percent.addEventListener("click", function (e) {
//   console.log(percentageOf_twentyFive_percent * numOf_billAmount);
// });

//fot 50%
let innerT_fifty_percent = fifty_percent.innerText;
let value_fifty_percent = parseInt(innerT_fifty_percent);
let percentageOf_fifty_percent = value_fifty_percent / 100;
console.log(percentageOf_fifty_percent);

//////////////////////////////<------------------------------------

// tipAmount = (tipPercentage / billAmount) * 100;  <--this gets you the tip amount
//add event lisener 'onclick' that adds the function of displaying the tipAmount
// document.addEventListener('click', function(e){
// console.log(tipAmount);
// })

// per person//////////-->
//we need to display per person the tip amount and billAmount/total
//we need to find out how many people:
//numberOfPersons = document.getElementById('numberOfPeople');
//valueOf_NumberOfPerson = numOfP.try to get the value attribute. --> process of turning the entered value to numerical data we can use/not string;
let numOfP = document.getElementById("numberOfPeople");
let attributeOf_numOfp = numOfP.setAttribute("value", "2"); ///<SOMETHING WRONG HERE *****
let numOfP_value = numOfP.value;
let numOf_numOfP_value = parseInt(numOfP_value); //<--- this is the number of person number set to integer
console.log(numOf_numOfP_value);
// complete

// Tip Amount
let tip_amount = document.getElementById("tip_value");
let innerT_tip_amount = tip_amount.innerText;
let tipAmount_innerT_value = parseFloat(innerT_tip_amount);
console.log(tipAmount_innerT_value);

//Total
let total_amount = document.getElementById("total_value");
let innerT_total_amount = total_amount.innerText;
let totalAmount_innerT_value = parseFloat(innerT_total_amount);
console.log(totalAmount_innerT_value);
// when the user types its considered a value  changes the value
//billAmountPerPerson = billAmount / numOfP
// and we need to display the--> (tipAmount) within the (Tip_Amount) by -->accessing the **tip_value**class and changing inner text value of the DOM
// now we need to display the--> (billAmountPerP) within the (Total) by--> accessing the **total_value**class and changing inner text value of the DOM

////////////////////
//percentage applied to the bill

// (Tips per person) Displayed when clicked
five_percent.addEventListener("click", function (e) {
  let tipCalculation =
    (percentageOf_five_percent * numOf_billAmount) / numOf_numOfP_value;
  let tip = (tip_amount.innerText = Math.round(tipCalculation * 100) / 100);
  tip;
});

ten_percent.addEventListener("click", function (e) {
  let tipCalculation =
    (percentageOf_ten_percent * numOf_billAmount) / numOf_numOfP_value;
  let tip = (tip_amount.innerText = Math.round(tipCalculation * 100) / 100);
  tip;
});
fifteen_percent.addEventListener("click", function (e) {
  let tipCalculation =
    (percentageOf_fifteen_percent * numOf_billAmount) / numOf_numOfP_value;
  let tip = (tip_amount.innerText = Math.round(tipCalculation * 100) / 100);
  tip;
});
twentyFive_percent.addEventListener("click", function (e) {
  let tipCalculation =
    (percentageOf_twentyFive_percent * numOf_billAmount) / numOf_numOfP_value;
  let tip = (tip_amount.innerText = Math.round(tipCalculation * 100) / 100);
  tip;
});
fifty_percent.addEventListener("click", function (e) {
  let tipCalculation =
    (percentageOf_fifty_percent * numOf_billAmount) / numOf_numOfP_value;
  tipCalculation;
  let tip = (tip_amount.innerText = Math.round(tipCalculation * 100) / 100);
  tip;
});

// (Totals per person) Displayed when clicked
five_percent.addEventListener("click", function (e) {
  let totalCalculation =
    numOf_billAmount / numOf_numOfP_value +
    (percentageOf_five_percent * numOf_billAmount) / numOf_numOfP_value;
  let total = (total_amount.innerText =
    Math.round(totalCalculation * 100) / 100);
  total;
});
ten_percent.addEventListener("click", function (e) {
  let totalCalculation =
    numOf_billAmount / numOf_numOfP_value +
    (percentageOf_ten_percent * numOf_billAmount) / numOf_numOfP_value;
  let total = (total_amount.innerText =
    Math.round(totalCalculation * 100) / 100);
  total;
});
fifteen_percent.addEventListener("click", function (e) {
  let totalCalculation =
    numOf_billAmount / numOf_numOfP_value +
    (percentageOf_fifteen_percent * numOf_billAmount) / numOf_numOfP_value;
  let total = (total_amount.innerText =
    Math.round(totalCalculation * 100) / 100);
  total;
});
twentyFive_percent.addEventListener("click", function (e) {
  let totalCalculation =
    numOf_billAmount / numOf_numOfP_value +
    (percentageOf_twentyFive_percent * numOf_billAmount) / numOf_numOfP_value;
  let total = (total_amount.innerText =
    Math.round(totalCalculation * 100) / 100);
  total;
});

fifty_percent.addEventListener("click", function (e) {
  let totalCalculation =
    numOf_billAmount / numOf_numOfP_value +
    (percentageOf_fifty_percent * numOf_billAmount) / numOf_numOfP_value;
  let total = (total_amount.innerText =
    Math.round(totalCalculation * 100) / 100);
  total;
});
console.log(`we live!`);
