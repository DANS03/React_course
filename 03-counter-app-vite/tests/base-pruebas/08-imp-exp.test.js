import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";

describe('Evaluating 08-imp-exp', () => { 

    test('find heroe by introducing id', () => { 

        const id = 1; 
        const heroe = getHeroeById(1);

        expect( heroe ).toEqual(
            {
                id: 1,
                name: 'Batman',
                owner: 'DC'
            }
        );

     });



    test('heroe by id must return UNDEFINED', () => { 
     
        const id = 100;

        const heroe = getHeroeById(id);

        expect( heroe ).toBeFalsy();//this will expect false values as: false, null, undefined...
 
    });


    test('Must return the heroes by owner', () => { 
     
        const owner = 'DC';

        const heroes = getHeroesByOwner(owner);

        expect(heroes.length).toBe(3);

        console.log(heroes);

        expect(heroes).toEqual(
            [
                { id: 1, name: 'Batman', owner: 'DC' },
                { id: 3, name: 'Superman', owner: 'DC' },
                { id: 4, name: 'Flash', owner: 'DC' }
            ]
        );

    });



 });