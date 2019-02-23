var a = [2, 3, 4, 6, 8, 9, 8, 16, 8, 6, 3];

 var b = 4;

function  Shift (a,b){
    var c = a.splice(0, b);
    var d = a.concat(c);
    
    return d 
    
};
 

console.log(Shift(a, b));