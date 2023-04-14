interface IAddress {
    street?: string;
    city?: string;
    state?: string;
    pin?: string;
}

class Employee2 {
    id: number;
    address: IAddress;
    name: string;

    constructor(id: number, address: IAddress, name: string) {
        this.id = id;
        this.address = address;
        this.name = name;
    }
}

interface Addresses extends IAddress {
    apt: number;
}

let john2 = new Employee2(1,{
    street: 'ABC',
    city: 'DN',
    state: 'Fl',
    pin: '33617'
},'John')

let address1 : Addresses = {
    apt: 186,
    
}



console.log(john2)

