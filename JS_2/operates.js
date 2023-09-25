// PLUS
function floatPlus(){
            const floatPlus = 0.1 + 0.2;
            const roundedPlus = floatPlus.toFixed(1); 
            console.log (roundedPlus);
        }

// PLUS
function rowPlus(){
    const row = '1';
    const onenumber = 2;
    console.log(+(row) + onenumber);
}

//FLASH
function fleshCard(){
    
    const fleshAmount = parseInt(prompt('Write amount of GB'));
    const oneFlash = 0.820;
    
    if(!isNaN(oneFlash)){
        if(fleshAmount < oneFlash) {
            console.log (`not enough memory`);
        } else { 
            const fleshquantity = (Math.floor(fleshAmount/oneFlash));
            console.log (fleshquantity);
        }
    } else {
        console.log (`Add valid number`);
    }
    }

    //CASH
function cashInPocket(){
    
    const moneyAmount = parseInt(prompt('Write amount of money'));
    const oneChoco = parseInt(prompt('Write a prise of one chocolate'));
    
    if(!isNaN(moneyAmount) && !isNaN(oneChoco)){
        if(moneyAmount < oneChoco) {
            console.log (`not enough money`);
        } else { 
            const chocoquantity = (Math.floor(moneyAmount/oneChoco));
            console.log (chocoquantity);
            const safeMoney = (Math.floor(moneyAmount%oneChoco));
            console.log (safeMoney);
        }
    } else {
        console.log (`Add valid number`);
    }
    }

    //VISAVERSA
function numberVisaVersa(){

    const ordinaryNumber = parseInt(prompt('Write three-digit number'));

    
    
    if(!isNaN(ordinaryNumber)){
        if (ordinaryNumber.toString().length < 3 || ordinaryNumber.toString().length > 3){
            console.log (`Add valid number`)
        } 
         else { 
            const ones = (Math.floor(ordinaryNumber % 10));
            const tens = (Math.floor((ordinaryNumber % 100)/10));
            const hundrets = (Math.floor(ordinaryNumber / 100));

            const visaversa = `${ones}${tens}${hundrets}` ;

            console.log (visaversa);
        }
    } else {
        console.log (`Add valid number`);
    }
    }

      //BANK
function getProcent(){
    
    const moneyAmount = parseInt(prompt('Write amount of money'));
    const monthQuantity = 2;
    const annualRate = 5;
    
    if(!isNaN(moneyAmount)){
        if(moneyAmount <= 0) {
            console.log ('not enough money');
        } else { 
            const decimalAnnualRate = annualRate / 100;
            const monthlyAnnualRate =  decimalAnnualRate / 12;
            const bankProcent =  (moneyAmount * (monthlyAnnualRate * monthQuantity));
            const bankProcentNumber = parseFloat(bankProcent).toFixed(1);
            
            console.log (bankProcentNumber);
        }
        
    } else {
        console.log ('Add valid number');
    }
    }
