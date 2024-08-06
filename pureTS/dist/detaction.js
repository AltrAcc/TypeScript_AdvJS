"use strict";
// narrowing 
function detectTypes(val) {
    if (typeof val === 'string') {
        return val.toLowerCase();
    }
    return val + 3;
}
function provideId(id) {
    if (!id) {
        console.log('Please provide ID');
    }
    id === null || id === void 0 ? void 0 : id.toLowerCase();
}
// from docs
function printAll(strs) {
    // !!!!!!!!!!!!!!!!
    //  DON'T DO THIS!
    //   KEEP READING
    // !!!!!!!!!!!!!!!!
    if (strs) {
        if (typeof strs === "object") {
            for (const s of strs) {
                console.log(s);
            }
        }
        else if (typeof strs === "string") {
            console.log(strs);
        }
    }
}
function isAdminAccount(account) {
    if ('isAdmin' in account) {
        return account.isAdmin;
    }
    return false;
}
// instance of
function logValue(x) {
    if (x instanceof Date) {
        console.log(x.toUTCString());
    }
    else {
        console.log(x.toUpperCase());
    }
}
// function isFish(pet: Fish | Bird) {
//    return (pet as Fish).swim !== undefined
// }
// function getFood(pet: Fish | Bird) {
//    if(isFish(pet)) {
//       pet // hover and still get both types
//       return 'fish food'
//    } else {
//       pet
//       return 'bird food'
//    }
// }
function isFish(pet) {
    return pet.swim !== undefined;
}
function getFood(pet) {
    if (isFish(pet)) {
        pet; // now only Fish
        return 'fish food';
    }
    else {
        pet;
        return 'bird food';
    }
}
function getShape(shape) {
    if (shape.kind === 'circle') {
        return Math.PI * (shape.radius) ** 2;
    }
    // return shape.side * shape.side
}
function getArea(shape) {
    switch (shape.kind) {
        case 'circle':
            return Math.PI * (shape.radius) ** 2;
        case 'square':
            return shape.side * shape.side;
        case 'rectangle':
            return shape.length * shape.width;
        default:
            const _defaultForShape = shape;
            return _defaultForShape;
    }
}
