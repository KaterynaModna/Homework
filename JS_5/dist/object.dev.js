"use strict";

var car = {
  manufacturer: "Volkswagen",
  model: "Golf",
  year: 2022,
  averageSpeed: 180,
  fuel: 50,
  averageFuel: 5.5
};

function isValueOutput() {
  console.log(car);
  car.name = "Oleg";
  console.log(car);

  if ('name' in car) {
    console.log("item in object");
  } else {
    console.log("item is not in object");
  }
}

function isNewTime() {
  var distance = parseFloat(prompt('Введіть відстань яку бажаєте проїхати'));

  if (isNaN(distance)) {
    return false;
  }

  var quantityFuel = (car.averageFuel / 100 * distance).toFixed(1);
  console.log("".concat(quantityFuel, " - \u0446\u0435 \u043A\u0456\u043B\u044C\u043A\u0456\u0441\u0442\u044C \u043F\u0430\u043B\u0438\u0432\u0430"));
  var time = (distance / car.averageSpeed).toFixed(1);
  console.log("".concat(time, " - \u0446\u0435 \u0447\u0430\u0441 \u0431\u0435\u0437 \u0432\u0456\u0434\u043F\u043E\u0447\u0438\u043D\u043A\u0443 \u0434\u043B\u044F \u0432\u043E\u0434\u0456\u044F"));
  var intervalsPassed = Math.floor(time / 4);
  var newTime = parseFloat(time) + intervalsPassed;

  if (distance % 720 === 0) {
    newTime--;
  }

  console.log("".concat(newTime, " - \u0446\u0435 \u043D\u0435\u043E\u0431\u0445\u0456\u0434\u043D\u0438\u0439 \u0447\u0430\u0441 \u0434\u043B\u044F \u043F\u043E\u0434\u043E\u043B\u0430\u043D\u043D\u044F \u0432\u0456\u0434\u0441\u0442\u0430\u043D\u0456 \u0432\u0440\u0430\u0445\u043E\u0432\u0443\u044E\u0447\u0438 \u0432\u0456\u0434\u043F\u043E\u0447\u0438\u043D\u043E\u043A"));
}

var time = {
  hours: 10,
  minutes: 21,
  seconds: 30
};

function ourTime() {
  function showTime(obj) {
    console.log("hours:".concat(obj.hours, ", minutes:").concat(obj.minutes, ", seconds:").concat(obj.seconds));
  }

  function addHours(obj) {
    var hours = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : +prompt('Додайте години');
    obj.hours = (obj.hours + hours) % 24;
  }

  addHours(time);

  function addMinutes(obj) {
    var min = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : +prompt('Додайте хвилини');
    var sumMin = obj.minutes + min;
    var newMinutes = sumMin % 60;
    var hoursToAdd = (sumMin - newMinutes) / 60;
    addHours(time, hoursToAdd);
    obj.minutes = newMinutes;
  }

  addMinutes(time);

  function addSeconds(obj) {
    var sec = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : +prompt('Додайте секунди');
    var sumSec = obj.seconds + sec;
    var newSeconds = sumSec % 60;
    var minutesToAdd = (sumSec - newSeconds) / 60;
    addMinutes(time, minutesToAdd);
    obj.seconds = newSeconds;
  }

  addSeconds(time);
  showTime(time);
}