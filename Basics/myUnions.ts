let score: number | string = 33;

score = '44';

type Users = {
   name: string;
   id: number
}

type Admin = {
   username: string;
   id: number
}

let janvi: Users | Admin = {name: 'janvi', id: 333};
janvi = {username: 'janvi', id: 222};

function getDbId(id: number | string) {
   console.log(`DBid is: ${id}`);
   if (typeof id === 'string') { // have to check
      id.toLowerCase();
   }
}

getDbId(3)
getDbId('4');

// arrays

const data: string[] | number[] = [1, 3, 4, 5]; // either all number or all string

const data1: (string | number)[] = [1, 4, '5']; // mix to number and string


//////////////////////////////////////////////
// Tuples 

// const user: (string | number)[] = [1, 'rj']
let tUser: [number, string, boolean]

tUser = [1, 'rj', true]
// tUser = ['rj', 1, true] not allowed - order matters

let rgb: [number, number, number] = [1, 1, 1]

type User = [number, string]

const newUser: User = [111, 'jnv'];

newUser[1] = 'janviR'
// newUser.push(true) 



