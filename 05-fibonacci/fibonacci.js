// program to generate fibonacci series up to a certain number
const maxNumber = Math.ceil(Math.random()*200);
let n1 = 0, n2 = 1, nextTerm;

console.log( `Fibonacci Series of ${maxNumber} :  \n`)

const getFibonacciSequence = (maxNumber) => {

let i;
const fib = []; 

fib[0] = 0;
fib[1] = 1;
for (i = 2; i <= maxNumber; i++) {
  // Next fibonacci number = previous + one before previous
  
  fib[i] = fib[i - 2] + fib[i - 1];
}
    return fib

} 

console.log(getFibonacciSequence(maxNumber))