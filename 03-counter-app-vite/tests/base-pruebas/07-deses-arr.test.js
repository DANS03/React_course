import { retornaArreglo } from "../../src/base-pruebas/07-deses-arr";

describe('Make test with a destructurated array 07-des-array', () => { 

    test('Must return a string an array ', () => { 

        const [letters, numbers] = retornaArreglo();

        expect(typeof letters).toBe('string');

        expect(typeof numbers).toBe('number');//toBe also evaluates the type of the var

        expect( letters ).toEqual( expect.any(String)); //this is expecting any type of string
    });

 });