console.log("Welcome to 02-Template-String");

const name = "David";
const lastname = "Naranjo";

const fullName = name + ' ' + lastname;//one of the uses of template strings is not having to use this concatenation instead we use `` in oreder to acomplish that

const TSFullName= `${name} ${lastname}`//inside the $ simbol is js code

console.log( TSFullName );


function getGreetings( name ){
    return 'Hello World, '+ name ;
};

console.log(`This is a string: ${getGreetings('John Doe')}`);