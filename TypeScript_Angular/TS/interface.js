"use strict";
class Employee2 {
    constructor(id, address, name) {
        this.id = id;
        this.address = address;
        this.name = name;
    }
}
let john2 = new Employee2(1, {
    street: 'ABC',
    city: 'DN',
    state: 'Fl',
    pin: '33617'
}, 'John');
console.log(john2);
