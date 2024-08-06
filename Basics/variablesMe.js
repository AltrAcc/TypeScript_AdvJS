"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var greetings = 'Hello Janvi';
console.log(greetings);
// number 
var userId = 332211; // type inference 
userId.toFixed();
// boolean
var isLoggedIn = false;
// variable type become any
var hero;
// hover and you get type : any, best practice to give type : string
// any - bcz TS don't know what value will come in hero variable
function getHero() {
    return 'Rahul';
}
hero = getHero();
