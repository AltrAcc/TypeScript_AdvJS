"use strict";
class TakePhoto {
    constructor(cameraMode, filter) {
        this.cameraMode = cameraMode;
        this.filter = filter;
    }
    getReel() {
        // some complex code
        return 8;
    }
}
// const rj =  new TakePhoto('test', 'test'); cant make obj
class Instagram extends TakePhoto {
    constructor(cameraMode, filter, burst) {
        super(cameraMode, filter);
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
    getSepia() {
        console.log("sepia");
    }
}
const rj = new Instagram('test', 'test', 3);
rj.getReel();
