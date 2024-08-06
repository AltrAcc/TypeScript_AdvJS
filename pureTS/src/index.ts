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

   // private _courseCount = 1;
   protected _courseCount = 1; // so that other class inherit it

   readonly city: string = 'Rajkot';
   constructor(
      public email: string,
      public name: string,
      private userId: string
      ) {
     
   }

   private deleteToken() {
      console.log('Token deleted')
   }

   get getAppleEmail(): string {
      return `apple${this.email}`
   }

   get getCourseCount(): number {
      return this._courseCount
   }

   set setCourseCount(value: number) {
      this._courseCount = value
   }
}

class subUser extends User {
   isFamily: boolean = true;
   changeCourseCount() {
      this._courseCount = 4
   }

}

const janvi = new User('janvi@gmail.com', 'Janvi', '111');

// janvi.deleteToken()

janvi.setCourseCount = 2;

console.log(janvi.getCourseCount)


