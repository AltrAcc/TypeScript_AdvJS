"use strict";
// class User {
//    email: string;
//    name: string;
//    private readonly city: string = 'Rajkot';
//    constructor(email: string, name: string) {
//       this.email = email;
//       this.name = name;
//    }
// }
// const janvi = new User('janvi@gmail.com', 'Janvi');
// janvi.city = 'Rajkot' can't do 
// janvi.city can't do 
class User {
    constructor(email, name, userId) {
        this.email = email;
        this.name = name;
        this.userId = userId;
        // private _courseCount = 1;
        this._courseCount = 1; // so that other class inherit it
        this.city = 'Rajkot';
    }
    deleteToken() {
        console.log('Token deleted');
    }
    get getAppleEmail() {
        return `apple${this.email}`;
    }
    get getCourseCount() {
        return this._courseCount;
    }
    set setCourseCount(value) {
        this._courseCount = value;
    }
}
class subUser extends User {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
    changeCourseCount() {
        this._courseCount = 4;
    }
}
const janvi = new User('janvi@gmail.com', 'Janvi', '111');
// janvi.deleteToken()
janvi.setCourseCount = 2;
console.log(janvi.getCourseCount);
