const EventEmitter = require('events')

class Emitter extends EventEmitter { }

const emitter = new Emitter();

// function emitFirstOnce(name) {
//     console.log(`I emit first for only one, and my name is ${name}.`);
// }

const emitterOptions = {
    dataLimit: 6,
    dataCount: 0
}

function dataListener() {
    console.log("event is occured!!");
    emitterOptions.dataCount +=1;
    console.log("count : ",emitterOptions.dataCount);
}

emitter.on("data", dataListener)

emitter.on('remove-data', ()=>{
    emitter.removeListener("data", dataListener)
})
const mesg = setInterval(() => {
    emitter.emit("data")
    if(emitterOptions.dataCount === emitterOptions.dataLimit){
        emitter.emit("remove-data")
    }
}, 1000);

// emitter.on("message", function () {
//     console.log("hi amira");

// }).on("data", function () {
//     console.log("age is 23");
// }).once("message", () => {
//     console.log("I emit only one time");
// }).prependListener("message", () => {
//     console.log("I emit first");
// }).prependOnceListener("message", emitFirstOnce)

// emitter.on("data", dataListener)
// const mesg = setInterval(() => {
//     // emitter.emit("message", "amira")
//     emitter.emit("data")
//     if(emitterOptions.dataCount === emitterOptions.dataLimit){
//         emitter.emit("remove-data")
//     }
// }, 1000);


// const removeEvent = setTimeout(() => {
    // emitter.emit('remove-data')
    // emitter.removeAllListeners()
    // emitter.removeListener("data", dataListener)
    
// }, 5000)

