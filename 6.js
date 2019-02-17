var s = 'aba';
var n = 89;
var b ='';
var target = 'a'
function myFunction(s,n, target){
var charMap = 0

do {
    b += s
} while(b.length<n)

b=b.substr(0,n);

for (let char of b){
    if (char == target) {
        charMap = charMap+1
    }
}

return charMap
}





console.log(myFunction(s,n,target))