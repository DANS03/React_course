import { getHeroById } from "./fundamentals/07-imp-exp";


const promise = new Promise( (resolve, reject) => { 

    setTimeout( () => {
         //console.log('The time out last 2 seconds');
         
         const hero = getHeroById(2); //we simulate an api conection by importing this fucntion

         resolve( hero);
         reject( 'No hero found' );
         

    } , 2000);
 } );
//an expamle of how promises work https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Promise

promise.then( ( hero ) => {
    console.log('Then of the promise, hero:', hero);
    

} )
.catch( err => console.warn( err ) );



//How to have an promise that recives the id to search
const getHeroByIdAsync = ( id ) => {
  
    const promiseAsyc = new Promise( (resolve, reject) => { 

        setTimeout( () => {
             //console.log('The time out last 2 seconds');
             
             const hero = getHeroById(id); //we simulate an api conection by importing this fucntion
            
             if( hero === undefined ){
                reject( 'No hero found' );
             }else{
                resolve( hero);
             };
    
        } , 2000);
     } );
     return promiseAsyc;
};

getHeroByIdAsync(10)
.then( hero => console.log( "Hero",hero ) )
.catch(  err => console.warn( err ) );