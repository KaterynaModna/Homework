// .LENGTH
function vseByloTakProsto(){
function func1(a, b, c) {
    console.log(arguments.length)
}
func1(1, 2, 5)
}

// PRYIMAJE 2 CHYSLA

function twoNumbers() {
    const numberOne = prompt(`Введіть перше число`);
    const numberTwo = prompt(`Введіть друге число`);

    function ifNumbers(numberOne, numberTwo){

        if ((isNaN(numberOne)) || (isNaN(numberTwo))) {
            return false
        }

        if (numberOne > numberTwo){
            console.log(1);
        }
        if (numberOne < numberTwo){
            console.log(-1);
        }
        if (numberOne === numberTwo){
            console.log(0);
        }
        
    }
    ifNumbers((numberOne), (numberTwo));
}


// FACTORIAL

function getFactorial() {
    const number = prompt(`Введіть число, факторіал якого бажаєте отримати`);
    let factorial = 1;

    function calcFactorial(number){
       if (isNaN(number)){
        return false
       }
       for(i=1; i<=number; i++){
        factorial *= i;
        console.log(factorial);
       } 
    }
    calcFactorial(number);
}

// KONCATYNACIYA

function getNumberFromString(){
    let stringNumber = '';
    for(i=0; i<3; i++){
    let number = prompt(`Введіть число`);
    stringNumber  += number;
    console.log( number );

    if (isNaN(number)){
        return false
       }
}

const newNumber = parseInt(stringNumber);
console.log(newNumber);
}

// ПЛОЩА КВАДРАТА

function Square(){
    
let h = parseInt(prompt(`Введіть довжину квадрата`));
let w = parseInt(prompt(`Введіть ширину квадрата`));
    function getSquare(h, w){

        if (isNaN(h)) {
            h = w;
        }
        
        if (isNaN(w)) {
            w = h;
        }
return h*w
    }
    console.log(getSquare(h, w));
}

// ДОСКОНАЛЕ ЧИСЛО

function checkNumber(number){
    let dilnyk = 0;
    for (let i=1; i <= number/2; i++ ){
        if (number%i===0){
            dilnyk += i
        }
    }
    return number === dilnyk
}
function showFunction(){
    let number = parseInt(prompt(`Введіть число`));
    console.log(checkNumber(number) ? 'Число є досконалим' : 'Число не є досконалим');
}

function showDiapazon(){
    let minimum = parseInt(prompt(`Введіть мінімальне значення діапазону`));
    let maximum = parseInt(prompt(`Введіть максимальне значення діапазону`));
    let result = '';
    for(let i=minimum; i <= maximum; i++){
        if(checkNumber(i)){
            result += i + ' ';
           
        }
        
    }
    console.log(result);
}