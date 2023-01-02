import { getSaludo } from "../../src/base-pruebas/02-template-string";

describe('Test in 02-template-string' , () => {
    
    test('GetSaludo must return  "Hola David"', () => {  
        const name = 'David';

        const message = getSaludo( name );

        expect( message ).toBe(`Hola ${name}`);

    })
} ); 