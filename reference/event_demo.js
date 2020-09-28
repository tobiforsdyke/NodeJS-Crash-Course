const EventEmitter = require('events');

// CREATE CLASS
class MyEmitter extends EventEmitter {}

// INIT OBJECT
const myEmitter = new MyEmitter();

// EVENT LISTENER
myEmitter.on('event', () => console.log('Event fired!'));

// INIT EVENT
myEmitter.emit('event');