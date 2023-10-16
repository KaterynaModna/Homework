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

let time = {
    hours: 10,
    minutes: 21,
    seconds: 30
}

function showTime(obj){
console.log(`hours:${obj.hours}, minutes:${obj.minutes}, seconds:${obj.seconds}`);
}

function addHours(obj, hours= +prompt('Додайте години')){
    obj.hours = (obj.hours + hours)%24;
}
addHours(time)

function addMinutes(obj, min= +prompt('Додайте хвилини')){
    let sumMin = obj.minutes + min;
    let newMinutes = sumMin%60;
    let hoursToAdd = (sumMin - newMinutes)/60;
    addHours(time, hoursToAdd);
    obj.minutes = newMinutes;
}
addMinutes(time)

    
function addSeconds(obj, sec = +prompt('Додайте секунди')){
    let sumSec = obj.seconds + sec;
    let newSeconds = sumSec%60;
    let minutesToAdd = (sumSec - newSeconds)/60;
    addMinutes(time, minutesToAdd);
    obj.seconds = newSeconds;
}
addSeconds(time)
showTime(time)


