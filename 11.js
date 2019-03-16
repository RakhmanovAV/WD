
function bind(func, context, atguments, arg) {

    return function() { 
var args = Array.from(arguments)
args.push(arg);
       return func.apply(context, args);

    };

  } 


function sum(a, b, c){
console.log(1 + '=' + this)
console.log(2 + '=' +a) 
console.log(3 + '=' +b)
console.log(4 + '=' +c)
    return a+b+c;

}


// const partsum = sum.bind(null, 1)

// console.log(partsum(4))


const f = bind(sum, 'context', arguments, 22);

console.log(f(5,9))

