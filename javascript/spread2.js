var data1 = ["rohit", "amar", "vishal", "gaurav"];
var [...data2] = data1;

data1[0] = "james";

console.log(data1)
console.log(data2)