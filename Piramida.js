var n = 3;
var a = "#";
var b = "_";
for (let i=0; i<=n; i++){
    var stair = '';
    for(let j = 0; j < n; j--) {
        if(j<=i)
        stair += '#'
        else
        stair += "_"
}
console.log(stair)
}

