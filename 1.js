var games = ['1:0','2:0','3:0','4:0','2:1','3:1','4:1','1:2','2:2','4:3'];
function points(games) {
    var c = 0;
    console.log(c)
    var gameLengths = games.map(function(game){
        var a = game.split(':')[0];
        var b = game.split(':')[1];
        
        
        if (a>b){c+=3}  //- 3 points
        else if (a<b){c+=0} //- 0 point
        else if (a=b){c+=1}; 
        console.log(a);
        console.log(b);
        console.log(c);
        return c; 
    });
    console.log(c)
        console.log(gameLengths[0]+gameLengths[8]);
        var sum = 0; 
        console.log(gameLengths.length);           
        for(var i = 0; i < gameLengths.length; i++){
            sum += gameLengths[i];
            }
            console.log(sum); 
            return sum;
    };
    



console.log(points(games));
var arr = [3,2,5,6];
function arraySum(array){
var sum = 0;
for(var i = 0; i < array.length; i++){
    sum += array[i];
    }
console.log(sum);
}
arraySum(arr);