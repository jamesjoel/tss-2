var fs = require("fs");


// fs.readFile("hello.txt", "utf8", (err, data)=>{
//     console.log(data);
// })

var test = ()=>{

    var data = fs.readFileSync("hello.txt", "utf8");
    console.log(data);
}

test();


