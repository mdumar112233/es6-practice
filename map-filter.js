const numbers = [2,3,5,3,2,6,6];
const output = [];

for(let i = 0;i <  numbers.length; i++){
    const element = numbers[i];
    const result = element * element;
    output.push(result);
}
// console.log(output);

// MAP 
numbers.map(function(element, index, array){
    // console.log(element, index, array);
})

const result = numbers.map(function(element){
    return element * element;
})
// console.log(result);

const result1 = numbers.map((element) => {
    return element * element;
})

// console.log(result1);

const result2 = numbers.map((element) => element * element)

// console.log(result2);

// FILTER
const biggernumber = numbers.filter((element) => element > 5);
// console.log(biggernumber)

const findSingleBiggerNumber = numbers.find((element) => element > 5);
// console.log(findSingleBiggerNumber);

// forEach() method
let newValue = [];
const newLoop = numbers.forEach((element) => {
    const value = element;
    newValue.push(value);
})
// console.log(newValue);

// resuce()
const reduceLoop = numbers.reduce((total, index) => {
    return total + index;
})
// console.log(reduceLoop);













