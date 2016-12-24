'use strict';

class Task {

    constructor(){
        console.log('constructor Task called');
    }

    method1() {
        console.log('method1 called');
    }

    method3(){
        console.log('method3 Task called');
    }
}

class TaskChild1 extends Task{
    constructor() {
        super(); // don't use class if you won't use the super(), it will get error
        console.log('TaskChild1 Task called');
    }

    method3(){
        console.log('method3 TaskChild1 called');
    }
}

let task = new Task();
console.log( task instanceof Task ); // true
task.method1(); // 'method1 called'

let taskChild = new TaskChild1();
taskChild.method1(); // 'method1 called'
taskChild.method3(); // method3 TaskChild1 called
