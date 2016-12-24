'use strict';

class Task {

    constructor() {
        this.location = 'jakarta';
    }

}

let task = new Task();
console.log( task.location ); // jakarta

class TaskChild extends Task {
    constructor() {
        super();
        this.location = 'jakarta barat';
    }
}

let taskChild = new TaskChild();
console.log( taskChild.location ); // jakarta barat
