var name1 = "amar";
var b = "gaurav";
module.exports = { name1 : name1, name2 : b, demo : (a, b)=>{
    return { 
            ans : a*b,
            hello : ()=>{
                console.log("**********");
            } 
        }
}};
