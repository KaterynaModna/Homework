const allProducts = [
    {
        name: "banana",
        uniqId: 74638,
        price: 8,
        quantity: 200,
        discount: 0.03,
        isDiscount: true,
    },
    {
        name: "cucumber",
        uniqId: 2334,
        price: 4,
        quantity: 100,
        discount: 0,
        isDiscount: false,
    },
    {
        name: "pear",
        uniqId: 234,
        price: 18,
        quantity: 12,
        discount: 0.5,
        isDiscount: true,
    },
    {
        name: "apple",
        uniqId: 3322,
        price: 18,
        quantity: 2,
        discount: 0.1,
        isDiscount: true,
    },
    {
        name: "potato",
        uniqId: 333,
        price: 2,
        quantity: 2000,
        discount: 0,
        isDiscount: false,
    },
    {
        name: "coconut",
        uniqId: 3498,
        price: 80,
        quantity: 10,
        discount: 0.1,
        isDiscount: true,
    },
];
const userCard =[];
const newBase =[];

function addToCard(){
    let productName = prompt("Введіть назву продукту:");
    let findProduct = allProducts.find((el) => el.name === productName);
    if (!findProduct){
        return false
    }
    const quantity = parseInt(prompt("Введіть кількість продукту:"));
    if (findProduct.quantity< quantity){
        return false
    }
    newBase.push(findProduct);
    userCard.push({name:findProduct.name,quantity:quantity,price:findProduct.price});
    setQuantity(productName, findProduct.quantity - quantity);
}

function setQuantity(name, quantity) {
    let findProductIndex = allProducts.findIndex((el) => el.name === name);
    allProducts[findProductIndex].quantity = quantity;
    return quantity;
}

function userCardProducts(){
const userProducts = userCard.map((el) => {
    console.log(el);
    return {name: el.name, quantity: el.quantity} ;
});
console.log(userProducts);
}

function deleteProducts() {
    const deleteProduct = prompt("Введіть продукт який хочете видалити:");
    let newCard = userCard.slice();
    let userProductIndex = newCard.findIndex((el) => el.name === deleteProduct);
    newCard.splice(userProductIndex, 1);
    console.log(newCard);
    console.log(`${deleteProduct} успішно видалено`);
}


function getSortedList(){
    const sortedList = allProducts.slice()
    sortedList.sort((a,b) => {

        return a.quantity-b.quantity
    })

console.log(sortedList);
}

function getCardSum() {
    let sumPrice = userCard.reduce((sum, product ) => sum + (product.price*product.quantity), 0);
    console.log(sumPrice);
}

function getSumNotBuying(){
let sumPrice = allProducts.reduce((sum, product ) => sum + (product.price*product.quantity), 0);
console.log(sumPrice);
}

function getMinMax(minormax){
const sortedList = allProducts.slice();
sortedList.forEach(product =>{
    product.sum = product.price * product.quantity
});
if (minormax === "min") {
    sortedList.sort((a, b) => {
        return a.sum - b.sum;
    });  
}  
if (minormax === "max") {
sortedList.sort((a, b) => {
        return b.sum - a.sum;
      });
    }
console.log(sortedList);
} 