var Action = ['U','D','D','D','U','D','U','U','U','D','D','D','U','D','U','U','U','D','D','D','U','D','U','U','U','D','D','D','U','D','U','U']
console.log(Action.length);


function countingValleys(Action){
var valleys = 0;
let seaLevel = 0;
let inValley = false;

for(let step=0; step<Action.length; step++){
    seaLevel += Action[step] === 'U' ? 1 : -1; 
    if (seaLevel < 0) inValley=true;
    if (seaLevel === 0 && inValley){
        valleys+=1;
        inValley = false;
    }
    
}

return valleys;
}

console.log(countingValleys(Action))