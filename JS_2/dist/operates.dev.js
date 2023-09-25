"use strict";

// PLUS
function floatPlus() {
  var floatPlus = 0.1 + 0.2;
  var roundedPlus = floatPlus.toFixed(1);
  console.log(roundedPlus);
} // PLUS


function rowPlus() {
  var row = '1';
  var onenumber = 2;
  console.log(+row + onenumber);
} //FLASH


function fleshCard() {
  var fleshAmount = parseInt(prompt('Write amount of GB'));
  var oneFlash = 0.820;

  if (!isNaN(oneFlash)) {
    if (fleshAmount < oneFlash) {
      console.log("not enough memory");
    } else {
      var fleshquantity = Math.floor(fleshAmount / oneFlash);
      console.log(fleshquantity);
    }
  } else {
    console.log("Add valid number");
  }
} //CASH


function cashInPocket() {
  var moneyAmount = parseInt(prompt('Write amount of money'));
  var oneChoco = parseInt(prompt('Write a prise of one chocolate'));

  if (!isNaN(moneyAmount) && !isNaN(oneChoco)) {
    if (moneyAmount < oneChoco) {
      console.log("not enough money");
    } else {
      var chocoquantity = Math.floor(moneyAmount / oneChoco);
      console.log(chocoquantity);
      var safeMoney = Math.floor(moneyAmount % oneChoco);
      console.log(safeMoney);
    }
  } else {
    console.log("Add valid number");
  }
} //VISAVERSA


function numberVisaVersa() {
  var ordinaryNumber = parseInt(prompt('Write three-digit number'));

  if (!isNaN(ordinaryNumber)) {
    if (ordinaryNumber.toString().length < 3 || ordinaryNumber.toString().length > 3) {
      console.log("Add valid number");
    } else {
      var ones = Math.floor(ordinaryNumber % 10);
      var tens = Math.floor(ordinaryNumber % 100 / 10);
      var hundrets = Math.floor(ordinaryNumber / 100);
      var visaversa = "".concat(ones).concat(tens).concat(hundrets);
      console.log(visaversa);
    }
  } else {
    console.log("Add valid number");
  }
} //BANK


function getProcent() {
  var moneyAmount = parseInt(prompt('Write amount of money'));
  var monthQuantity = 2;
  var annualRate = 5;

  if (!isNaN(moneyAmount)) {
    if (moneyAmount <= 0) {
      console.log('not enough money');
    } else {
      var decimalAnnualRate = annualRate / 100;
      var monthlyAnnualRate = decimalAnnualRate / 12;
      var bankProcent = moneyAmount * (monthlyAnnualRate * monthQuantity);
      var bankProcentNumber = parseFloat(bankProcent).toFixed(1);
      console.log(bankProcentNumber);
    }
  } else {
    console.log('Add valid number');
  }
}