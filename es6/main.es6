'use strict';

class Task {

    constructor(){
        console.log('constructor called');
    }

    method1() {
        console.log('method1 called');
    }
}

let task = new Task();
console.log( task instanceof Task ); // true

task.method1();

