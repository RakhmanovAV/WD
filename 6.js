var s = 'aba';
var n = 50;
var b ='';
var target = 'a'
function myFunction(s,n, target){
var charMap = 0
do {
    b += s
} while(b.length<10)
b=b.substr(0,n);
for (let char of b){
    if (char == target) {
        charMap = charMap+1
    }
    
}
console.log(charMap[target]);
console.log(charMap)
return charMap[target]
}





myFunction(s,n, target)