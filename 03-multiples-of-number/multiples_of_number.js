// define your function here

const multiplesOf = (number, limit) => {
    let multiples = []
    for(let i=1; i<= limit; i++){
        multiples.push(number * i);
    }

    return multiples;
}


console.log(`Multiple of a 2 : \n`)
const multiplesOfNumber1 = multiplesOf(2, 5)

console.log(multiplesOfNumber1)

console.log(`\n`)
console.log(`Multiple of a 11 : \n`)

const multiplesOfNumber2 = multiplesOf(11, 5)

console.log(multiplesOfNumber2)