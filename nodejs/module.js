var a = require("path");
var b = a.resolve();

var x = require("random-number");
var y = x();


var rand = require("random-string");

var num = rand({
    length : 25,
    numeric : true,
    letters : false
});

console.log(num);

// 24-March/2023 

// rohit --- tihor 

// count word in paragrapth 