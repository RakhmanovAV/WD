var n = 10;
var a = "#";
var b = "_";
for (let i=0; i<n; i++){
    var stair = '';
    for(let j = 0; j < n; j++) {
        if(j<=i)
        stair += a
        else
        stair += b
}
console.log(stair)
}

