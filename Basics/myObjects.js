"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = {
    name: 'janvi',
    email: 'janvi@gmail.com',
    isActive: true,
};
function createUser(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
createUser({ name: 'janvi', isPaid: true }); // can't pass more param. like this
var newUser = { name: 'janvi', isPaid: true, email: 'janvi@h.com' };
createUser(newUser); // allowing more parameter to pass like this
function createCourse() {
    return { name: 'janvi', price: 300 };
}
function createUsers(user) {
    return { name: '', email: '', isActive: true };
}
createUsers({ name: '', email: '', isActive: true });
var myUser = {
    _id: '1234',
    name: 'j',
    email: 'j@example.com',
    isActive: true,
};
myUser.email = 'j@h.com';
