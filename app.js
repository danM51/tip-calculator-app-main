// JS Sequence:
//bill////-->
let billAmount = document.getElementById("bill");
let billValue = 0.0; // default value

billAmount.addEventListener("input", setBillValue);

function setBillValue() {
  billValue = parseFloat(billAmount.value);
  console.log(billValue);
}
// selectTip %///////////-->
//select a percentage whereby that percentage is a value of (number/integer)
const five_percent = document.getElementById("five_percent");
const ten_percent = document.getElementById("ten_percent");
const fifteen_percent = document.getElementById("fifteen_percent");
const twentyFive_percent = document.getElementById("twentyFive_percent");
const fifty_percent = document.getElementById("fifty_percent");
const custom = document.getElementById("btn_custom");
//fot 5%
let innerT_five_percent = five_percent.innerText; //<-- after retrieving inner text, thats when we can set it as a number below/after;
let value_five_percent = parseInt(innerT_five_percent);
let percentageOf_five_percent = value_five_percent / 100; //<-- five percent
console.log(percentageOf_five_percent);
//fot 10%
let innerT_ten_percent = ten_percent.innerText;
let value_ten_percent = parseInt(innerT_ten_percent);
let percentageOf_ten_percent = value_ten_percent / 100;
console.log(percentageOf_ten_percent);
//fot 15%
let innerT_fifteen_percent = fifteen_percent.innerText;
let value_fifteen_percent = parseInt(innerT_fifteen_percent);
let percentageOf_fifteen_percent = value_fifteen_percent / 100;
console.log(percentageOf_fifteen_percent);
//fot 25%
let innerT_twentyFive_percent = twentyFive_percent.innerText;
let value_twentyFive_percent = parseInt(innerT_twentyFive_percent);
let percentageOf_twentyFive_percent = value_twentyFive_percent / 100;
console.log(percentageOf_twentyFive_percent);
//fot 50%
let innerT_fifty_percent = fifty_percent.innerText;
let value_fifty_percent = parseInt(innerT_fifty_percent);
let percentageOf_fifty_percent = value_fifty_percent / 100;
console.log(percentageOf_fifty_percent);

//Custom %
let customValue = 0;
custom.addEventListener("input", setCustomValue);

function setCustomValue() {
  customValue = parseInt(custom.value);
  let percentageOf_custom = customValue / 100;
  // console.log(customValue);
  console.log(percentageOf_custom);
}
//////////////////////////////<------------------------------------
// per person//////////-->
let numOfP = document.getElementById("numberOfPeople");
let numOfPValue = 0.0;
numOfP.addEventListener("input", setNumOfPValue);

function setNumOfPValue() {
  numOfPValue = parseInt(numOfP.value);
  console.log(numOfPValue);
}
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

//percentage applied to the bill////////////////////
// (Tips per person) Displayed when clicked
custom.addEventListener("input", function (e) {
  let tipCalculation = (customValue * billValue) / numOfPValue;
  let tip = (tip_amount.innerText = tipCalculation / 100);
  tip;
});
five_percent.addEventListener("click", function (e) {
  let tipCalculation = (percentageOf_five_percent * billValue) / numOfPValue;
  let tip = (tip_amount.innerText = Math.round(tipCalculation * 100) / 100);
  tip;
});
ten_percent.addEventListener("click", function (e) {
  let tipCalculation = (percentageOf_ten_percent * billValue) / numOfPValue;
  let tip = (tip_amount.innerText = Math.round(tipCalculation * 100) / 100);
  tip;
});
fifteen_percent.addEventListener("click", function (e) {
  let tipCalculation = (percentageOf_fifteen_percent * billValue) / numOfPValue;
  let tip = (tip_amount.innerText = Math.round(tipCalculation * 100) / 100);
  tip;
});
twentyFive_percent.addEventListener("click", function (e) {
  let tipCalculation =
    (percentageOf_twentyFive_percent * billValue) / numOfPValue;
  let tip = (tip_amount.innerText = Math.round(tipCalculation * 100) / 100);
  tip;
});
fifty_percent.addEventListener("click", function (e) {
  let tipCalculation = (percentageOf_fifty_percent * billValue) / numOfPValue;
  tipCalculation;
  let tip = (tip_amount.innerText = Math.round(tipCalculation * 100) / 100);
  tip;
});

// (Totals per person) Displayed when clicked
custom.addEventListener("input", function (e) {
  let totalCalculation = billValue / numOfPValue + customValue / numOfPValue;
  let total = (total_amount.innerText =
    Math.round(totalCalculation * 100) / 100);
  total;
});
five_percent.addEventListener("click", function (e) {
  let totalCalculation =
    billValue / numOfPValue +
    (percentageOf_five_percent * billValue) / numOfPValue;
  let total = (total_amount.innerText =
    Math.round(totalCalculation * 100) / 100);
  total;
});
ten_percent.addEventListener("click", function (e) {
  let totalCalculation =
    billValue / numOfPValue +
    (percentageOf_ten_percent * billValue) / numOfPValue;
  let total = (total_amount.innerText =
    Math.round(totalCalculation * 100) / 100);
  total;
});
fifteen_percent.addEventListener("click", function (e) {
  let totalCalculation =
    billValue / numOfPValue +
    (percentageOf_fifteen_percent * billValue) / numOfPValue;
  let total = (total_amount.innerText =
    Math.round(totalCalculation * 100) / 100);
  total;
});
twentyFive_percent.addEventListener("click", function (e) {
  let totalCalculation =
    billValue / numOfPValue +
    (percentageOf_twentyFive_percent * billValue) / numOfPValue;
  let total = (total_amount.innerText =
    Math.round(totalCalculation * 100) / 100);
  total;
});
fifty_percent.addEventListener("click", function (e) {
  let totalCalculation =
    billValue / numOfPValue +
    (percentageOf_fifty_percent * billValue) / numOfPValue;
  let total = (total_amount.innerText =
    Math.round(totalCalculation * 100) / 100);
  total;
});
// reset button
let reset_btn = document.getElementById("reset_btn");
reset_btn.addEventListener("click", resetValues);

function resetValues() {
  billAmount.value = 0;
  billValue = 0;
  numOfP.value = 0;
}
console.log(`we live!`);
