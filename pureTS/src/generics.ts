const score: Array<number> = []
const names: Array<string> = []

function identityOne(val: boolean | number): boolean | number {
   return val
}

function identityTwo(val: any):any {
   return val
}

function identityThree<Type>(val: Type): Type {
   return val
}

identityThree(3);
identityThree('janvi')

function identityFour<T>(val: T): T {
   return val
}

interface Bottle {
   brand: string,
   type: number
}

// identityFour<Bottle>({brand: 'xyz', type: 2}) 

function getSearchProducts<T>(products: T[]): T {
   // do some db operation
   const myIdx = 3
   return products[myIdx]
}

// arrow function
const getMoreSearchProducts = <T>(products: T[]): T => {
   return products[3];
}

interface Database {
   connection: string,
   username: string,
   password: string
}

function anotherFun<T, U extends Database>(valOne: T, valTwo: U): object {
   return{
      valOne,
      valTwo
   }
}

// anotherFun(3, '4') can't pass string in 2nd arg
anotherFun(3, {
   connection: 'url',
   username: 'jnv',
   password: '12344'
})

interface Quiz {
   name: string,
   type: string
}

interface Course {
   name: string,
   author: string,
   subject: string
}

class Sellable<T> {
   public cart: T[] = []

   addToCart(products: T) {
      this.cart.push(products)
   }
}
