const User = {
   name: 'janvi',
   email: 'janvi@gmail.com',
   isActive: true,
}

function createUser({name: string, isPaid: boolean}) {}

createUser({name: 'janvi', isPaid: true}); // can't pass more param. like this

const newUser = {name: 'janvi', isPaid: true, email: 'janvi@h.com'}; 

createUser(newUser); // allowing more parameter to pass like this

function createCourse(): {name: string, price: number} { // return object
   return {name: 'janvi', price: 300};
}

// use define type
type User = {
   name: string;
   email: string;
   isActive: boolean;
}

function createUsers(user: User): User {
   return {name: '', email: '', isActive: true}
}

createUsers({name: '', email: '', isActive: true});

// READONLY and optional
type User1 = {
   readonly _id: string;
   name: string;
   email: string;
   isActive: boolean,
   creaditCard?: number
}

let myUser: User1 = {
   _id: '1234',
   name: 'j',
   email: 'j@example.com',
   isActive: true,
};

myUser.email = 'j@h.com';
// myUser._id = '124'; can't change as it is readonly

type cardNumber = {
   cardnumber: string
}

type cardDate = {
   carddate: string
}

type cardDetails = cardNumber & cardDate & {
   cvv: number
}

export{}