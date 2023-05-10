// return type

var demo = (a=2, b=2, c=1)=>{    
    
    // all parameters and var inside of function which is local scope beha

    var x = a*b;
    var y = x/c;
    return [x, y];
    
}

var [a, b] = demo(50, 5, 2);

console.log(a);
console.log(b);

