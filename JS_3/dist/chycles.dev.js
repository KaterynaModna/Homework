"use strict";

//Age
function getAge() {
  var userAge = parseInt(prompt('Write your age'));

  if (isNaN(userAge)) {
    return false;
  }

  if (userAge >= 0 && userAge <= 11) {
    console.log('child');
  }

  if (userAge >= 12 && userAge <= 17) {
    console.log('teen');
  }

  if (userAge >= 18 && userAge <= 59) {
    console.log('adult');
  }

  if (userAge >= 60 && userAge <= 100) {
    console.log('old');
  }
} // FROM NUMBER TO SYMBOL


function getSymbol() {
  var userNumber = parseInt(prompt('Write your number'));

  if (isNaN(userNumber)) {
    return false;
  }

  switch (userNumber) {
    case 1:
      console.log('!');
      break;

    case 2:
      console.log('@');
      break;

    case 3:
      console.log('#');
      break;

    case 4:
      console.log('$');
      break;

    case 5:
      console.log('%');
      break;

    case 6:
      console.log('^');
      break;

    case 7:
      console.log('&');
      break;

    case 8:
      console.log('*');
      break;

    case 9:
      console.log('(');
      break;

    case 0:
      console.log(')');
      break;

    default:
      console.log('-_-');
      break;
  }
} //Age


function getSum() {
  var numberStart = parseInt(prompt('Write your start number'));
  var numberFinish = parseInt(prompt('Write your finish number'));

  if (isNaN(numberStart) || isNaN(numberFinish)) {
    return false;
  }

  for (i = numberStart; i <= numberFinish; i++) {
    numberSum += i;
    if (i <= 0) break;
    console.log(numberSum);
  }
} //DILNYK


function getDilnyk() {
  var numberFirst = parseInt(prompt('Write your first number'));
  var numberSecond = parseInt(prompt('Write your second number'));

  if (isNaN(numberFirst) || isNaN(numberSecond)) {
    return false;
  }

  for (i = 1; i <= numberFirst && i <= numberSecond; i++) {
    if (numberFirst % i === 0 && numberSecond % i === 0) {
      numberDilnyk = i;
    }
  }

  console.log('Найбільший спільний дільник:', numberDilnyk);
} //DILNYK


function getDilnyky() {
  var number = parseInt(prompt('Write your number'));

  if (isNaN(number)) {
    return false;
  }

  for (i = 1; i <= number; i++) {
    if (number % i === 0) {
      numberDilnyk = i;
    }

    console.log('Дільники:', numberDilnyk);
  }
} // PALINDROM


function getPalidrom() {
  var number = prompt('Write your number type "00000"');

  if (number.length != 5) {
    return false;
  }

  if (isNaN(number)) {
    return false;
  }

  for (var _i = 0; _i < number.length; _i++) {
    if (_i === 2) {
      continue;
    }

    if (number[_i] === number[number.length - 1 - _i]) {
      console.log("number is palindrom");
    } else {
      console.log("ordinary number");
    }

    ;
    break;
  }
} // DISCOUNT


function getDiscount() {
  var firstSum = parseInt(prompt('Write your purchase amount'));
  var discountedSum = 0;

  if (isNaN(firstSum)) {
    return false;
  }

  if (firstSum < 200) {
    return false;
  }

  if (firstSum >= 200 && firstSum <= 300) {
    discountedSum += Math.round(firstSum - firstSum * 3 / 100);
    console.log(discountedSum);
  }

  if (firstSum >= 300 && firstSum <= 500) {
    discountedSum += Math.round(firstSum - firstSum * 5 / 100);
    console.log(discountedSum);
  }

  if (firstSum >= 500 && firstSum <= Infinity) {
    discountedSum += Math.round(firstSum - firstSum * 7 / 100);
    console.log(discountedSum);
  }
} // 10 NUMBERS


function getTenNumbers() {
  var zero = 0;
  var parne = 0;
  var neParne = 0;
  var minus = 0;
  var plus = 0;

  for (var _i2 = 0; _i2 < 10; _i2++) {
    var tenNumbers = parseInt(prompt("Write number ".concat(_i2 + 1, ":")));

    if (isNaN(tenNumbers)) {
      return false;
    }

    if (tenNumbers === 0) {
      zero++;
    }

    if (tenNumbers < 0) {
      minus++;
    } else {
      plus++;
    }

    if (tenNumbers % 2 === 0) {
      parne++;
    } else {
      neParne++;
    }
  }

  console.log("\u041A\u0456\u043B\u044C\u043A\u0456\u0441\u0442\u044C \u043D\u0443\u043B\u0456\u0432: ".concat(zero));
  console.log("\u041A\u0456\u043B\u044C\u043A\u0456\u0441\u0442\u044C \u043F\u0430\u0440\u043D\u0438\u0445 \u0447\u0438\u0441\u0435\u043B: ".concat(parne));
  console.log("\u041A\u0456\u043B\u044C\u043A\u0456\u0441\u0442\u044C \u043D\u0435\u043F\u0430\u0440\u043D\u0438\u0445 \u0447\u0438\u0441\u0435\u043B: ".concat(neParne));
  console.log("\u041A\u0456\u043B\u044C\u043A\u0456\u0441\u0442\u044C \u0432\u0456\u0434'\u0454\u043C\u043D\u0438\u0445 \u0447\u0438\u0441\u0435\u043B: ".concat(minus));
  console.log("\u041A\u0456\u043B\u044C\u043A\u0456\u0441\u0442\u044C \u0434\u043E\u0434\u0430\u0442\u043D\u0456\u0445 \u0447\u0438\u0441\u0435\u043B: ".concat(plus));
} // WEEK


function getWeekDay() {
  var weekDays = prompt('Хочеш побачити дні тижня? (Напиши "так" якщо хочеш)');

  if (weekDays += 'так') {
    alert('Поїхали');
  } else {
    return false;
  }

  var currentDayIndex = 0;

  while (weekDays) {
    switch (currentDayIndex) {
      case 0:
        alert("Понеділок");
        break;

      case 1:
        alert("Вівторок");
        break;

      case 2:
        alert("Середа");
        break;

      case 3:
        alert("Четвер");
        break;

      case 4:
        alert("П'ятниця");
        break;

      case 5:
        alert("Субота");
        break;

      case 6:
        alert("Неділя");
        break;
    }

    currentDayIndex = (currentDayIndex + 1) % 7;
    var userChoice = confirm('Хочеш побачити наступний день?');

    if (!userChoice) {
      break;
    }
  }
} // GUESS NUMBER


function guessNumber() {
  var minNumber = 0;
  var maxNumber = 100;

  function tryToGuess(from, to) {
    var middle = parseInt(from + (to - from) / 2);
    var biggerOrNot = true;
    var correctOrNot = confirm("\u0426\u0435 \u0442\u0432\u043E\u0454 \u0447\u0438\u0441\u043B\u043E ".concat(middle, "?"));

    if (correctOrNot) {
      console.log("\u0412\u0433\u0430\u0434\u0430\u043B\u0430!");
      return false;
    } else {
      biggerOrNot = confirm("\u0422\u0432\u043E\u0454 \u0447\u0438\u0441\u043B\u043E \u0431\u0456\u043B\u044C\u0448\u0435 \u0437\u0430 ".concat(middle, "?"));
    }

    if (biggerOrNot) {
      tryToGuess(middle, to);
    } else {
      tryToGuess(from, middle);
    }
  }

  tryToGuess(minNumber, maxNumber);
} // TABLE


function multiplicationTable() {
  var showTable = confirm('Таблиця множення');

  if (showTable) {
    for (var _i3 = 2; _i3 < 10; _i3++) {
      for (var x = 1; x <= 10; x++) {
        alert(_i3 + ' * ' + x + ' = ' + _i3 * x);
      }
    }
  }
} // YEAR


function calendar() {
  var userDate = prompt('Введіть дату');
  var dateArray = userDate.split('.');
  console.log(dateArray);
  var day = +dateArray[0];
  var month = +dateArray[1];
  var year = +dateArray[2];
  if (isNaN(day) || isNaN(month) || isNaN(year)) return false;
  var nextDay = day + 1;
  var nextMonth = month;
  var nextYear = year;

  switch (month) {
    case 4:
    case 6:
    case 9:
    case 11:
      if (day === 30) {
        nextDay = 1;
        nextMonth++;
      }

      break;

    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
      if (day === 31) {
        nextDay = 1;
        nextMonth++;
      }

      break;

    case 12:
      if (day === 31) {
        nextDay = 1;
        nextMonth++;
        nextYear++;
      }

      break;

    case 2:
      if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
        if (day === 29) {
          nextDay = 1;
          nextMonth++;
        } else {
          if (day >= 28) {
            nextDay = 1;
            nextMonth++;
          }
        }
      }

      break;

    default:
      break;
  }

  if (month > 12 || day > 30) {
    nextDay = 1;
    nextMonth = 1;
    nextYear++;
  }

  alert("\u041D\u0430\u0441\u0442\u0443\u043F\u043D\u0438\u0439 \u0434\u0435\u043D\u044C: ".concat(nextDay, ".").concat(nextMonth, ".").concat(nextYear));
}