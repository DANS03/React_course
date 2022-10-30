console.log('Welcome from 05-functions');

function greetings(name){
    return `Hello normal, ${name} ! `;
};

const sayHi = function (name){
    return `Hi const, ${name} ! `;
};

const arrowFunct = (name) => {
    return `Hello arrow, ${name} ! `;
};

console.log(greetings('Anon'));
console.log(sayHi('Anon'));
console.log(arrowFunct('Anon'));

const getUser = (name) => (
    {
        uid:'1234',
        username:name,
    }
) //example of implicit return

console.log( getUser('David'));