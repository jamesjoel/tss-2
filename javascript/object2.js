var obj = { name : "rohit", age : 25, city : "indore"};
var data = [10, 20, 15];
/*
var a = obj.name;
var b = obj.age;
var c = obj.city;*/

// Destructring of Array/ Object

var { name } = obj; // copy
var [a] = data;


obj.name = "amar";

console.log(obj)
console.log(obj2)

