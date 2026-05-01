const myName = "Jones";

const greet = (name) => {

 return `Greetings, ${name}!`;

};

const classmates = ["Tung tung", "Sahur", "Tralalero","Jaydee","Allen"];

classmates.map(name => greet(name));

console.log(classmates.map(name => greet(name)));