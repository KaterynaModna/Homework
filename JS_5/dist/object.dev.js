"use strict";

// let car = {
// manufacturer: "Volkswagen",
// model: "Golf",
// year: 2022,
// averageSpeed: 180,
// fuel: 50,
// averageFuel: 5.5
// };
// function isValueOutput() {
// console.log(car);
// car.name = "Oleg";
// console.log(car);
// if ('name' in car){
//     console.log("item in object");
// } else{
//     console.log("item is not in object");
// }
// }
// function isNewTime() {
// const distance = parseFloat(prompt('Введіть відстань яку бажаєте проїхати'));
// if (isNaN (distance)){
//     return false
// }
// const quantityFuel = ((car.averageFuel/100)*distance).toFixed(1);
// console.log( `${quantityFuel} - це кількість палива`);
// let time = (distance / car.averageSpeed).toFixed(1);
// console.log(`${time} - це час без відпочинку для водія`);
// let intervalsPassed = Math.floor(time / 4);
// let newTime = parseFloat(time) + intervalsPassed;
// if (distance%720===0){
//     newTime--
// }
// console.log( `${newTime} - це необхідний час для подолання відстані враховуючи відпочинок`);
// }
var time = {
  hours: 10,
  minutes: 21,
  seconds: 30
};

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