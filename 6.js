var s = 'kmretasscityylpdhuwjirnqimlkcgxubxmsxpypgzxtenweirknjtasxtvxemtwxuarabssvqdnktqadhyktagjxoanknhgilnm';
var n = 736778906400;

var target = 'a'
function myFunction(s,n, target){
var Count1 =Math.floor(n/s.length);
var Count2 =n%s.length;

var Count = s.split('').
//filter(a => a===target).length*Count1
//+ s.substr(0,Count2).split('').filter(a => a===target).length;
            reduce(function(sum,current){
                if (current === target) 
                    sum += 1;
                    return sum
                    },0)*Count1

+

s.substr(0,Count2).split('').reduce(function(sum,current){
                                if (current === target) 
                                    sum++;
                                    return sum},0)

return Count
}

console.log(myFunction(s,n,target))

// var s = 'aba';
// var n = 89;
// var b ='';
// var target = 'a'
// function myFunction(s,n, target){
// var charMap = 0

// do {
//     b += s
// } while(b.length<n)

// b=b.substr(0,n);

// for (let char of b){
//     if (char == target) {
//         charMap = charMap+1
//     }
// }

// return charMap
// }





// console.log(myFunction(s,n,target))