console.log('Welcome to 06-Destructuring');

const person ={
    name:'Bruce',
    lastname:'Wayne',
    id:1939,
};

const { name:personName, lastname,  id } = person;

console.log(personName);
console.log(lastname);
console.log(id);

const returnPerson = ( { name , lastname, id ,age = 20} ) => {
    
    console.log( name, lastname , id, age);
    
    return {
        age : age,
        name: name,
    };

}

const {age} =  returnPerson(person);

console.log(age);

const address = {
    city :'Gotham',
    zip:1989,
    latlng: {
        lat:129012,
        lng:123993,
    }
};

const {latlng : {lat, lng}} = address;//This is how you can destructurate an object inside of an object

console.log(lat,lng)
