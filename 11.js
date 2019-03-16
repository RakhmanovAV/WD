function bind(func, a) {
    return function(e) { 
       return func.call(null, e, a);
    };
  } 

function sum(a, b){
    return a+b;
}

// const partsum = sum.bind(null, 1)
// console.log(partsum(4))

const f = bind(sum, 10);
console.log(f(5))

