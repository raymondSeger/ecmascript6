'use strict';

class Task {

    static get_default_id() {
        return 'hi all';
    }
}

Task.id = 90; // static property

console.log(Task.get_default_id()); // hi all
console.log(Task.id ); // 99