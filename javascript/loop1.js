/*
    There are 3 loops in JS

    1. for
    2. while
    3. do.... while
*/

/* 
for(init; condition; inc/dec)
{ 
    ---- body of loop
}
*/

var num = 10; // 10+9+8+.... +2+1
var sum = 1;
for(var a = 1; a <= num; a++)
{
    sum *= a;
}
console.log(sum);



