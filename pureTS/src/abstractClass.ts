abstract class TakePhoto {
   constructor(
      public cameraMode: string,
      public filter: string
   ) {}

   abstract getSepia(): void 

   getReel(): number{
      // some complex code
      return 8
   }
}

// const rj =  new TakePhoto('test', 'test'); cant make obj

class Instagram extends TakePhoto {
   constructor(
      public cameraMode: string,
      public filter: string,
      public burst: number
      ) {
         super(cameraMode, filter)
      }

      getSepia(): void {
          console.log("sepia")
      }
}

const rj =  new Instagram('test', 'test', 3);

rj.getReel();