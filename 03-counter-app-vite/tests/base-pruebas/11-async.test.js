import { getImagen } from "../../src/base-pruebas/11-async-await";

describe('Test async 11-async', () => { 
    test("Must return the url form the API and return an error if whe don't have api key", async() => { 

        const url = await getImagen();///   <------You must use await for the promise to be completed 

        expect( typeof url).toBe('string');

        expect( typeof url).toBe('string');




     });
 });