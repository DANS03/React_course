console.log('Welcome to 07-Destructuring-Arrays');

const characters = ['Batman' , 'Superman', 'WonderWoman'];

const  [ , ,p3] = characters;

console.log(p3);

const retunrArray = ()  => {
    return ['ABC', 123];
};

const [letters, numbers] = retunrArray();

console.log(letters , numbers);

const state = (value) => {
    return [value , () => { console.log('Hello World') } ];
};

const arr1 = state('Hi');

const [name , greetings] = arr1;

console.log(name);
greetings();