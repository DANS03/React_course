import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas";

describe('Tests in 09-promesas', () => { 
//we must consider that Jest runs linearly, in the case of a promise Jest executes it the background and continues with the evaluation when the excveution in the background ends it will crash Jest
    test('Must return a hero', (done) => { //to avoid the crashe we call the param done

        const id= 1;
        
        getHeroeByIdAsync( id )
        .then(hero => {

            expect(hero).toEqual(
                {
                id: 1,
                name: 'Batman',
                owner: 'DC'
            });

            done();//we must call done for Jest to finish the execution

        })
     });



     test("Must return an error if heroe doesn't exist " , (done) => { //to avoid the crashe we call the param done

        const id= 100;
        
        getHeroeByIdAsync( id )
        .catch(error => {

            expect(error).toBe(`No se pudo encontrar el héroe ${id}`);

            done();//we must call done for Jest to finish the execution

        })
     });


 })