/*
    1. only one var
    2. condition equal

*/

var a = 2;

var b = 100;

switch(a){
    
    case 1 : console.log("indore");
            break;
    
    case 2 : 
            switch(b){
                case 100 : console.log("red");
                        break;
                case 200 : console.log("blue");
                        break;
            }
            break;
    
    case 3 : console.log("pune");
            break;

    case 4 : console.log("delhi");
            break;

    case 5 : console.log("bhopal");
            break;

    default : console.log("no city found");

}