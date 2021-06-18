// function declaration
const nMultiplesOf = (number, limit) => {

    const nMultiplesOfArray = []
    let index = 1;

    while(nMultiplesOfArray.length < limit){

        nMultiplesOfArray.push(number * index);
        index ++;
    }

    return nMultiplesOfArray

}

console.log(nMultiplesOf(2, 10))