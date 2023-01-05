import { usContext } from "../../src/base-pruebas/06-deses-obj";

describe('Testing 06-deses', () => { 

    test('usContext must return all predicted values', () => { 

        const clave = 1234;
        const age = 21;

        const user ={
            clave:clave,
            nombre:'David',
            edad:age,

        };

        const context = usContext(user);

        console.log(context);

        expect( context ).toEqual( 
            {
                nombreClave: clave,
                anios: age,
                latlng: {
                    lat: 14.1232,
                    lng: -12.3232
                }
            }
        );


        
     });




 })