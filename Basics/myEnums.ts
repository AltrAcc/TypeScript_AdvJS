// not a good way to restrict any thing like this
// const AISLE = 0
// const MIDDEL = 1
// const WINDOW = 2

// const seat = 0;
// if (seat === AISLE) {}

const enum seatChoice { 
   // AISLE = 'aisles'  also can asign name of it 
   AISLE = 10, // hover and check the value always inc by 1
   MIDDLE,
   WINDOW,
   FOURTH
}

const jrSeat = seatChoice.AISLE