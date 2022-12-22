import { Fragment } from "react"

const newMessage="Im a var!"//if you want to print a var in order to be render you must use {}
const objectMessage={
    message:"I'm an object!",
    title:"Object Message!"
};

const getGreetins = () => {
    const name = prompt('Plesae enter you name:','John Doe');

    const greeting = "Welcome "+ name +" !  How are you today?" 

    return greeting;
};



export const FirstApp = () => {
  return (
    <div id="firstAppDiv"> {/*this div has no reason to exist but is very commont the alternatives is using a fragment*/}
        
        <h2>{ getGreetins() }</h2>

        <div>FirstApp</div>
        
        <p>I'm a subtitle</p>

        <p>{ newMessage }</p> {/* you can use a permited expresion inside of the {} when it's not an object*/}

        <p>{ JSON.stringify(objectMessage) }</p>{/* if you wanto to use an object then you must convert if to a JSON */}
    
    </div>
 /* 
 <Fragment>
        
    <div>FirstApp</div>
        
    <p>I'm a subtitle</p>
    
</Fragment>
 */

//a synonim to this is :

/* 
 <>
    <div>FirstApp</div>
        
    <p>I'm a subtitle</p>
    
</>
 */
        
  )
}
