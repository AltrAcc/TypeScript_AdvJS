interface iUser {
   readonly dbId: number
   email: string
   userId: number
   googleId?: string
   // stratTrail: () => string
   startTrail(): string 
   getCoupon(name: string, value: number): number
}

// reopening of interface
interface iUser {
   githubToken: string
}

// inheretance , extends
interface iAdmin extends iUser {
   role: 'admin' | 'ta' | 'learner'
}

const ruhi: iUser = {dbId: 22, email: '', userId: 1212, githubToken: 'mycoupon',
   startTrail: () => {
      return 'trail started'
   },
   getCoupon: (name: 'janvi', off: 20) => {
      return 1234
   }
}
ruhi.userId = 234
// ruhi.dbId = 11




