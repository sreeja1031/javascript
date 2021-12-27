const printName = name => "Hi"+name;


const printBill = (name,bill) => `Hi ${name} ,please pay: ${bill}`;

const person = {
    name: "Noam Chomsky",
    age: 92
}

let {name,age} = person;

console.log(name);
console.log(age);