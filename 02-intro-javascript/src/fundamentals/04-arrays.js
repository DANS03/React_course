console.log('Welcome to 04-Arryas');

const array = [];

array.push(1);
array.push(2);
array.push(3);
array.push(4);

console.log(array);

let array2 = [ ...array ,  5];

console.log(array);
console.log(array2);

//if we want to apply any modifications to an array we can use the prototype .map for example

let array3 = array2.map( function(number){
    return number * 2;
});

console.log(array3);