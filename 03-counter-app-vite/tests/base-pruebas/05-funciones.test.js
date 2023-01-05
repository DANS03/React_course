import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones";

describe('Test in 05 funciones', () => { 

    test('getUser must return an user', () => { 

        const testUser =   {
            uid: 'ABC123',
            username: 'El_Papi1502'
        };     

        const user = getUser();


        console.log(user);

        //expect( testUser ).toBe(user); we migth think that this could be an option but toBe doesn't wprk with objectes beacuase it compares their position in memory
        expect( testUser ).toEqual(user);

    });

    test('getUsuarioActivo must return an user which is passed through a param', () => { 

        const name = 'David';

        const testUser = {
            uid: 'ABC567',
            username: name
        }

        const user = getUsuarioActivo(name);

        expect( user ).toEqual(
            {
                uid: 'ABC567',
                username: name
            }
        );

     });



});