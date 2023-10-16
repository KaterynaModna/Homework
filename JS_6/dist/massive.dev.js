"use strict";

var allProducts = [{
  name: "banana",
  uniqId: 74638,
  price: 8,
  quantity: 200,
  discount: 0.03,
  isDiscount: true
}, {
  name: "cucumber",
  uniqId: 2334,
  price: 4,
  quantity: 100,
  discount: 0,
  isDiscount: false
}, {
  name: "pear",
  uniqId: 234,
  price: 18,
  quantity: 12,
  discount: 0.5,
  isDiscount: true
}, {
  name: "apple",
  uniqId: 3322,
  price: 18,
  quantity: 2,
  discount: 0.1,
  isDiscount: true
}, {
  name: "potato",
  uniqId: 333,
  price: 2,
  quantity: 2000,
  discount: 0,
  isDiscount: false
}, {
  name: "coconut",
  uniqId: 3498,
  price: 80,
  quantity: 10,
  discount: 0.1,
  isDiscount: true
}];
var userCard = [];
var newBase = [];

function addToCard() {
  var productName = prompt("Введіть назву продукту:");
  var findProduct = allProducts.find(function (el) {
    return el.name === productName;
  });

  if (!findProduct) {
    return false;
  }

  var quantity = parseInt(prompt("Введіть кількість продукту:"));

  if (findProduct.quantity < quantity) {
    return false;
  }

  newBase.push(findProduct);
  userCard.push({
    name: findProduct.name,
    quantity: quantity,
    price: findProduct.price
  });
  setQuantity(productName, findProduct.quantity - quantity);
}

function setQuantity(name, quantity) {
  var findProductIndex = allProducts.findIndex(function (el) {
    return el.name === name;
  });
  allProducts[findProductIndex].quantity = quantity;
  return quantity;
}

function userCardProducts() {
  var userProducts = userCard.map(function (el) {
    console.log(el);
    return {
      name: el.name,
      quantity: el.quantity
    };
  });
  console.log(userProducts);
}

function deleteProducts() {
  var deleteProduct = prompt("Введіть продукт який хочете видалити:");
  var newCard = userCard.slice();
  var userProductIndex = newCard.findIndex(function (el) {
    return el.name === deleteProduct;
  });
  newCard.splice(userProductIndex, 1);
  console.log(newCard);
  console.log("".concat(deleteProduct, " \u0443\u0441\u043F\u0456\u0448\u043D\u043E \u0432\u0438\u0434\u0430\u043B\u0435\u043D\u043E"));
}

function getSortedList() {
  var sortedList = allProducts.slice();
  sortedList.sort(function (a, b) {
    return a.quantity - b.quantity;
  });
  console.log(sortedList);
}

function getCardSum() {
  var sumPrice = userCard.reduce(function (sum, product) {
    return sum + product.price * product.quantity;
  }, 0);
  console.log(sumPrice);
}

function getSumNotBuying() {
  var sumPrice = allProducts.reduce(function (sum, product) {
    return sum + product.price * product.quantity;
  }, 0);
  console.log(sumPrice);
}

function getMinMax(minormax) {
  var sortedList = allProducts.slice();
  sortedList.forEach(function (product) {
    product.sum = product.price * product.quantity;
  });

  if (minormax === "min") {
    sortedList.sort(function (a, b) {
      return a.sum - b.sum;
    });
  }

  if (minormax === "max") {
    sortedList.sort(function (a, b) {
      return b.sum - a.sum;
    });
  }

  console.log(sortedList);
}