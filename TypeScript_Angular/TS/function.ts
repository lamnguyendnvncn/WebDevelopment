function add(a: number, b: number) {
    return a + b;
}

//arrow function
const sub = (num1: number, num2: number): number => num1 - num2

function add2(a: number, b: number, c: number): number {
    return c ? a + b + c : a + b;
}

function addAll(...number:number[]) : number {
    return number.reduce((a,b)=>a+b,0);
}

function addAllWith2(a:number,b:number,...c:number[]) : number {
    return a+b+c.reduce((a,b)=>a+b);
}

console.log(addAll(1,2,3,4,5,6,7,8,9,10))

console.log(addAllWith2(23,34,45))


function createArray<T>(...items:T[]) : T[] {
    return new Array<T>().concat(items);
}

console.log(createArray(1,2,3,4,5))
console.log(createArray('a','b','c'))