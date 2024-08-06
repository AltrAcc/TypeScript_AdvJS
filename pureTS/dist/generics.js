"use strict";
const score = [];
const names = [];
function identityOne(val) {
    return val;
}
function identityTwo(val) {
    return val;
}
function identityThree(val) {
    return val;
}
identityThree(3);
identityThree('janvi');
function identityFour(val) {
    return val;
}
// identityFour<Bottle>({brand: 'xyz', type: 2}) 
function getSearchProducts(products) {
    // do some db operation
    const myIdx = 3;
    return products[myIdx];
}
// arrow function
const getMoreSearchProducts = (products) => {
    return products[3];
};
function anotherFun(valOne, valTwo) {
    return {
        valOne,
        valTwo
    };
}
// anotherFun(3, '4') can't pass string in 2nd arg
anotherFun(3, {
    connection: 'url',
    username: 'jnv',
    password: '12344'
});
class Sellable {
    constructor() {
        this.cart = [];
    }
    addToCart(products) {
        this.cart.push(products);
    }
}
