class Employee {
    #id: number; // private field (data will not show when console class, more private than private keyword)
    protected name: string; // (protected, can be used by sub classes like manager, but cannot be used outside classes and subclasses)
    address: string;
    // static, can be used even when there's no Employee element
    static getEmployeeCount() : number {
        return 50;
    }
    
    constructor(id: number=0, name: string='', address: string='') {
        this.#id = id;
        this.name = name;
        this.address = address;
    }

    getName() {
        return `Name: ${this.name}`;
    }
    //getter
    get empId(): number {
        return this.#id;
    }
    //setter
    set empId(id:number) {
        this.#id = id;
    }
}

let john = new Employee(1,'John','Somewhere');

// inheritance
class Manager extends Employee {
    constructor(id: number, name:string, address: string) {
        super(id,name,address);
    }
    getName() {
        return `${this.name} is a manager`
    }
}

let mike = new Manager(2,'Mike','Else');

console.log(john.getName());

console.log(mike.getName());

console.log(`Employee count: ${Employee.getEmployeeCount()}`);

console.log(john.empId);
john.empId = 3;
console.log(john.empId);
