"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Employee_id;
class Employee {
    // static, can be used even when there's no Employee element
    static getEmployeeCount() {
        return 50;
    }
    constructor(id = 0, name = '', address = '') {
        _Employee_id.set(this, void 0); // private field (data will not show when console class, more private than private keyword)
        __classPrivateFieldSet(this, _Employee_id, id, "f");
        this.name = name;
        this.address = address;
    }
    getName() {
        return `Name: ${this.name}`;
    }
    //getter
    get empId() {
        return __classPrivateFieldGet(this, _Employee_id, "f");
    }
    //setter
    set empId(id) {
        __classPrivateFieldSet(this, _Employee_id, id, "f");
    }
}
_Employee_id = new WeakMap();
let john = new Employee(1, 'John', 'Somewhere');
// inheritance
class Manager extends Employee {
    constructor(id, name, address) {
        super(id, name, address);
    }
    getName() {
        return `${this.name} is a manager`;
    }
}
let mike = new Manager(2, 'Mike', 'Else');
console.log(john.getName());
console.log(mike.getName());
console.log(`Employee count: ${Employee.getEmployeeCount()}`);
console.log(john.empId);
john.empId = 3;
console.log(john.empId);
