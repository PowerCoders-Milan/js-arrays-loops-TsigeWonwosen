// check if a number is prime or not
const isPrime = number => {

    let numberOfDivider = getPrimes (number)

    console.log(`Dividers ${number}'s are : ${numberOfDivider} \n`)

    if (numberOfDivider.length <= 2) {
        return true;
        
    } else {
        return false

    }

}

const getPrimes = amount => {

    const numberOfDivider = [] 
    for(let i=1 ; i<= amount; i ++){
        if(amount % i == 0){
            numberOfDivider.push(i)
        }
    }
    return numberOfDivider;
}

console.log(isPrime(2))
console.log(isPrime(3))
console.log(isPrime(4))
console.log(isPrime(5))
console.log(isPrime(6))
console.log(isPrime(40))