//Age
function getAge() {

    const userAge = parseInt(prompt('Write your age'));

    if (isNaN(userAge)) {
        return false
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
}
// FROM NUMBER TO SYMBOL
function getSymbol() {

    const userNumber = parseInt(prompt('Write your number'));

    if (isNaN(userNumber)) {
        return false
    }
    switch (userNumber) {
        case (1):
            console.log('!');
            break;
        case (2):
            console.log('@');
            break;
        case (3):
            console.log('#');
            break;
        case (4):
            console.log('$');
            break;
        case (5):
            console.log('%');
            break;
        case (6):
            console.log('^');
            break;
        case (7):
            console.log('&');
            break;
        case (8):
            console.log('*');
            break;
        case (9):
            console.log('(');
            break;
        case (0):
            console.log(')');
            break;

        default:
            console.log('-_-');
            break;
    }
}

//Age
function getSum() {

    let numberStart = parseInt(prompt('Write your start number'));
    let numberFinish = parseInt(prompt('Write your finish number'));

    if ((isNaN(numberStart)) || (isNaN(numberFinish))) {
        return false
    }
    for (i = numberStart; i <= numberFinish; i++) {
        numberSum += i;
        if (i <= 0)
            break;
        console.log(numberSum);
    }

}

//DILNYK
function getDilnyk() {

    let numberFirst = parseInt(prompt('Write your first number'));
    let numberSecond = parseInt(prompt('Write your second number'));

    if ((isNaN(numberFirst)) || (isNaN(numberSecond))) {
        return false
    }
    for (i = 1; i <= numberFirst && i <= numberSecond; i++) {
        if (numberFirst % i === 0 && numberSecond % i === 0) {
            numberDilnyk = i;
        }
    }

    console.log('Найбільший спільний дільник:', numberDilnyk);
}

//DILNYK
function getDilnyky() {

    let number = parseInt(prompt('Write your number'));

    if ((isNaN(number))) {
        return false
    }
    for (i = 1; i <= number; i++) {
        if (number % i === 0) {
            numberDilnyk = i;
        }
        console.log('Дільники:', numberDilnyk);
    }
}

// PALINDROM
function getPalidrom() {

    const number = (prompt('Write your number type "00000"'));

    if (number.length != 5) {
        return false
    }

    if ((isNaN(number))) {
        return false
    }
    for (let i = 0; i < number.length; i++) {
        if (i === 2) {
            continue;
        }
        if (number[i] === number[number.length - 1 - i]) {
            console.log(`number is palindrom`);
        }
        else { (console.log(`ordinary number`)) };
        break
    }
}

// DISCOUNT

function getDiscount() {
    let firstSum = parseInt(prompt('Write your purchase amount'));
    let discountedSum = 0;

    if ((isNaN(firstSum))) {
        return false
    }
    if (firstSum < 200) {
        return false
    }

    if (firstSum >= 200 && firstSum <= 300) {
        discountedSum += (Math.round(firstSum - (firstSum * 3) / 100));
        console.log(discountedSum);
    }
    if (firstSum >= 300 && firstSum <= 500) {
        discountedSum += (Math.round(firstSum - (firstSum * 5) / 100));
        console.log(discountedSum);
    }
    if (firstSum >= 500 && firstSum <= Infinity) {
        discountedSum += (Math.round(firstSum - (firstSum * 7) / 100));
        console.log(discountedSum);
    }
}

// 10 NUMBERS
function getTenNumbers() {
    let zero = 0;
    let parne = 0;
    let neParne = 0;
    let minus = 0;
    let plus = 0;

    for (let i = 0; i < 10; i++) {
        let tenNumbers = parseInt(prompt(`Write number ${i + 1}:`));

        if ((isNaN(tenNumbers))) {
            return false
        }

        if (tenNumbers === 0) {
            zero++
        }
        if (tenNumbers < 0) {
            minus++
        } else {
            plus++
        }
        if (tenNumbers % 2 === 0) {
            parne++
        } else {
            neParne++
        }
    }
    console.log(`Кількість нулів: ${zero}`);
    console.log(`Кількість парних чисел: ${parne}`);
    console.log(`Кількість непарних чисел: ${neParne}`);
    console.log(`Кількість від'ємних чисел: ${minus}`);
    console.log(`Кількість додатніх чисел: ${plus}`);
}

// WEEK
function getWeekDay() {
    let weekDays = (prompt('Хочеш побачити дні тижня? (Напиши "так" якщо хочеш)'));
    if (weekDays += 'так') {
        alert('Поїхали')
    } else {
        return false
    }
    let currentDayIndex = 0;
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
        const userChoice = confirm('Хочеш побачити наступний день?');

        if (!userChoice) {
            break;
        }
    }
}

// GUESS NUMBER
function guessNumber() {
    const minNumber = 0;
    const maxNumber = 100;

    function tryToGuess(from, to) {
        const middle = parseInt(from + ((to - from) / 2));
        let biggerOrNot = true; 

        const correctOrNot = confirm(`Це твоє число ${middle}?`);

        if (correctOrNot) {
            console.log(`Вгадала!`);
            return false;
        } else {
            biggerOrNot = confirm(`Твоє число більше за ${middle}?`);
        }

        if (biggerOrNot) {
            tryToGuess(middle, to);
        } else {
            tryToGuess(from, middle);
        }
    }

    tryToGuess(minNumber, maxNumber);
}

// TABLE

function multiplicationTable() {
    let showTable = confirm('Таблиця множення');
    
    if (showTable) {
        for (let i = 2; i < 10; i++) {
            for (let x = 1; x <= 10; x++) {
                alert(i + ' * ' + x + ' = ' + (i * x));
            }
            
        }
    }
}

// YEAR
function calendar() {
const userDate = prompt('Введіть дату');
const dateArray = userDate.split('.');
console.log(dateArray);
const day = +dateArray [0];
const month = +dateArray [1];
const year = +dateArray [2];

if (isNaN(day) || isNaN(month) || isNaN(year)) return false;

let nextDay = day + 1;
let nextMonth = month;
let nextYear = year;

switch (month) {
    case 4:
    case 6:
    case 9:
    case 11:
        if (day === 30){
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
        if (day === 31){
            nextDay = 1;
            nextMonth++;
        }
        break;
    case 12:
        if (day === 31){
            nextDay = 1;
            nextMonth++;
            nextYear++;
        }
        break;
    case 2:
        if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0){
            if (day === 29){
                nextDay = 1;
                nextMonth++;
            }
            
            else {
                if (day >= 28){
                nextDay = 1;
                nextMonth++;
            } 
        }
        }
        break;


    default:
        break;
}
if (month > 12 || day > 30){
    nextDay = 1;
    nextMonth = 1;
    nextYear++;
}
alert(`Наступний день: ${nextDay}.${nextMonth}.${nextYear}`);
}



