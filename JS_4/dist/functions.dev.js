"use strict";

// .LENGTH
function vseByloTakProsto() {
  function func1(a, b, c) {
    console.log(arguments.length);
  }

  func1(1, 2, 5);
} // PRYIMAJE 2 CHYSLA


function twoNumbers() {
  var numberOne = prompt("\u0412\u0432\u0435\u0434\u0456\u0442\u044C \u043F\u0435\u0440\u0448\u0435 \u0447\u0438\u0441\u043B\u043E");
  var numberTwo = prompt("\u0412\u0432\u0435\u0434\u0456\u0442\u044C \u0434\u0440\u0443\u0433\u0435 \u0447\u0438\u0441\u043B\u043E");

  function ifNumbers(numberOne, numberTwo) {
    if (isNaN(numberOne) || isNaN(numberTwo)) {
      return false;
    }

    if (numberOne > numberTwo) {
      console.log(1);
    }

    if (numberOne < numberTwo) {
      console.log(-1);
    }

    if (numberOne === numberTwo) {
      console.log(0);
    }
  }

  ifNumbers(numberOne, numberTwo);
} // FACTORIAL


function getFactorial() {
  var number = prompt("\u0412\u0432\u0435\u0434\u0456\u0442\u044C \u0447\u0438\u0441\u043B\u043E, \u0444\u0430\u043A\u0442\u043E\u0440\u0456\u0430\u043B \u044F\u043A\u043E\u0433\u043E \u0431\u0430\u0436\u0430\u0454\u0442\u0435 \u043E\u0442\u0440\u0438\u043C\u0430\u0442\u0438");
  var factorial = 1;

  function calcFactorial(number) {
    if (isNaN(number)) {
      return false;
    }

    for (i = 1; i <= number; i++) {
      factorial *= i;
      console.log(factorial);
    }
  }

  calcFactorial(number);
} // KONCATYNACIYA


function getNumberFromString() {
  var stringNumber = '';

  for (i = 0; i < 3; i++) {
    var number = prompt("\u0412\u0432\u0435\u0434\u0456\u0442\u044C \u0447\u0438\u0441\u043B\u043E");
    stringNumber += number;
    console.log(number);

    if (isNaN(number)) {
      return false;
    }
  }

  var newNumber = parseInt(stringNumber);
  console.log(newNumber);
} // ПЛОЩА КВАДРАТА


function Square() {
  var h = parseInt(prompt("\u0412\u0432\u0435\u0434\u0456\u0442\u044C \u0434\u043E\u0432\u0436\u0438\u043D\u0443 \u043A\u0432\u0430\u0434\u0440\u0430\u0442\u0430"));
  var w = parseInt(prompt("\u0412\u0432\u0435\u0434\u0456\u0442\u044C \u0448\u0438\u0440\u0438\u043D\u0443 \u043A\u0432\u0430\u0434\u0440\u0430\u0442\u0430"));

  function getSquare(h, w) {
    if (isNaN(h)) {
      h = w;
    }

    if (isNaN(w)) {
      w = h;
    }

    return h * w;
  }

  console.log(getSquare(h, w));
} // ДОСКОНАЛЕ ЧИСЛО


function checkNumber(number) {
  var dilnyk = 0;

  for (var _i = 1; _i <= number / 2; _i++) {
    if (number % _i === 0) {
      dilnyk += _i;
    }
  }

  return number === dilnyk;
}

function showFunction() {
  var number = parseInt(prompt("\u0412\u0432\u0435\u0434\u0456\u0442\u044C \u0447\u0438\u0441\u043B\u043E"));
  console.log(checkNumber(number) ? 'Число є досконалим' : 'Число не є досконалим');
}

function showDiapazon() {
  var minimum = parseInt(prompt("\u0412\u0432\u0435\u0434\u0456\u0442\u044C \u043C\u0456\u043D\u0456\u043C\u0430\u043B\u044C\u043D\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044F \u0434\u0456\u0430\u043F\u0430\u0437\u043E\u043D\u0443"));
  var maximum = parseInt(prompt("\u0412\u0432\u0435\u0434\u0456\u0442\u044C \u043C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044F \u0434\u0456\u0430\u043F\u0430\u0437\u043E\u043D\u0443"));
  var result = '';

  for (var _i2 = minimum; _i2 <= maximum; _i2++) {
    if (checkNumber(_i2)) {
      result += _i2 + ' ';
    }
  }

  console.log(result);
}