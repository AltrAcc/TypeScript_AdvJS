let greetings: string = 'Hello Janvi';

console.log(greetings);

// number 
let userId = 332211; // type inference 

userId.toFixed();

// boolean
let isLoggedIn: boolean = false;

// variable type become any
let hero; 
// hover and you get type : any, best practice to give type : string
// any - bcz TS don't know what value will come in hero variable

function getHero() {
    return 'Rahul';
}

hero = getHero();

export{}

