console.log('Welcome to 03-Objects-literals');

const person = {
    name: 'John',
    lastname: 'Doe',
    age: 30,
    adress: {
        city:'Silent Hill',
        zip:12345,
    }
}

console.table( person );

//if you wish to copy the values of an object you must do this

const newPerson = { ...person }; 

newPerson.name = 'Jane';

console.log( person );
console.log( newPerson );

//If you do this newPerson = person is not equivalent because you are coping a reference to the original object not creating a new one

const newPersonFailed = person ; 

newPersonFailed.name = 'Juan';

console.log( 'Failed copy ' );
console.log( person );
console.log( newPersonFailed );
