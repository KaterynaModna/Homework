// NAME 
function Username(){
const username = prompt('Write your name');

if(username && username.length && username.length >= 3){
console.log (`Hello ${username}`);
} else{
    console.log (`Too short for this site, sorry)`)
}
}

// AGE
function UserAge(){
    
const birthYear = parseInt(prompt('Write your birth year'));
const currentYear = 2023;

if(!isNaN(birthYear)){
    if(birthYear > currentYear || birthYear < currentYear - 100) {
        console.log (`you don't exist`);
    } else { 
        const userAge = currentYear - birthYear;
        console.log (userAge);
    }
} else {
    console.log (`Add valid number`);
}
}

// PERIMETR
function Perimetr(){
    
    const oneSide = parseInt(prompt('Write one side of square'));
    
    if(!isNaN(oneSide)){
        if(oneSide <= 0) {
            console.log (`you can't build this square`);
        } else { 
            const perimetr = oneSide * 4;
            console.log (perimetr);
        }
    } else {
        console.log (`Add normal number`);
    }
    }
    
    // RADIUS
function Area(){
    
    const radius = parseInt(prompt('Write a radius of your circle'));
    
    if(!isNaN(radius)){
        if(oneSide = 0) {
            console.log (`you can't build this circle`);
        } else { 
            const area = Math.PI * Math.pow(radius, 2);
            const roundedArea = Math.round(area); 
            console.log (roundedArea);
        }
    } else {
        console.log (`Add normal number`);
    }
    }

    // SPEED
function Speed(){
    
    const distance = parseInt(prompt('Choose distance which you like'));
    const time = parseInt(prompt('Choose time which you like'));
    
    if (!isNaN(distance) && distance >= 0 && !isNaN(time) && time >= 0) {
        const speed = distance / time;
        console.log (speed);
    } else {
        console.log (`Add normal data`);
    }
    }

    // CURRENCY
function CurrentCurrancy(){
    
    const amount = parseInt(prompt('Write an amount of dollars'));
    
    if(!isNaN(amount)){
        if(amount <= 0) {
            console.log (`you don't have money`);
        } else { 
            const euro = amount * 0.93;
            console.log (euro);
        }
    } else {
        console.log (`Add normal number`);
    }
    }