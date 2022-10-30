console.log('Welcome to 01-Lets-Const');

//var and const
//using var is not recomended now a days

const name ="David"; // as the name indicates const is for variable that will never change

let age = 20; //Let is use for vars that will eventually change
age = 21;

console.log( name , age);

//scope of vars 

let diceValue = 4;

if( true ){
    let diceValue = 5;// this variable will only live while the "if" statement is running when it ends it will desapear

    console.log(diceValue);
};

console.log(diceValue);