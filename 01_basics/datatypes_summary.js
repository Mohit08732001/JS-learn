// Primitive (Call by value)
// String, Number, Boolean, null, undefined, Symbol, BigInt

const id = Symbol("123")
console.log(id);


// Non Primitive (Call by reference)
// Array, Objects, Functions

const arr = [1, 2, 3]
let myObj = {
    name: "Mohit",
    age: 23
}

const myFunction = function(){
    console.log("GG");
}

// +++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive), Heap (Non Primitive)

let myName = "Mohit"

let anotherName = myName
anotherName = "KK"

console.log(anotherName)
console.log(myName);

let userOne = {
    email: "user@mail.com",
    upi: "user@ybl"
}

let userTwo = userOne
userTwo.email = "user2@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);

