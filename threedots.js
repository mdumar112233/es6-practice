const age = [22, 21,42,44,12,32];
const age1 = [32,21,66,27,36];
// spead all value of age and age1 variable 
const fullages = [...age, ...age1];
console.log(fullages)

// findout max value of age 
const maxvalue = Math.max(...age);
console.log(maxvalue)



