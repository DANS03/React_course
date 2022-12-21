import heroes , { owners } from '../data/heroes';
//if you have 2 diferent types of exports you must use {} for the non default exportation

//export{heroes,owners};//in this case the importation must be like this :
//import { heroes , owners } from './data/heroes';

//console.log( heroes );

export const getHeroById = (id) =>{
    return(heroes.find( heroe => heroe.id === id  ));
    //An example of how to use .find https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/find
};

//console.log(getHeroById(2));

const getHeroesByOwner =  ( owner ) => {

    return( heroes.filter ( heroe => heroe.owner === owner ));
};//An example of how to use .filter https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

//onsole.log(getHeroesByOwner("DC"));

//console.log(owners);