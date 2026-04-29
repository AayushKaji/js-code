//alert(3+3) we are using nodesjs not browser so it will not work

// code readablity should be good

let name = "aayush"
let age = 21
let isLoggedIn = false

//number=>2 to power 53
//bigint
//string = ""
//boolean
//null = standalone value
//undefined
//symbol = uniqueness

//object

console.log(typeof("aayush"));//return the type 

// Types of data types:

// Primitive means they are call by value

// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

// Non Primitive means Reference type

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let my0bj = {
    name: "aayush",
    age: 21,
} 
const myFunction = function(){
    console.log("hello world");
}

console.log(heros)
console.log(my0bj)
myFunction()