import { Fragment } from "react"
import  PropTypes  from "prop-types";// this will enable us tu select the the type of prop that we need


const newMessage="Im a var!"//if you want to print a var in order to be render you must use {}
const objectMessage={
    message:"I'm an object!",
    title:"Object Message!"
};

const getGreetins = (   ) => {
    const name ='John Doe'; //prompt('Plesae enter you name:','John Doe');


    const greeting = "Welcome "+ name +" !  How are you today?" 

    return greeting;
};


//the properties or props is an object that are being send to the component dependig of what is needed
//the most commund way of using it is by destructuring the props
//export const FirstApp = ( props ) => {
export const FirstApp = ( {title , subtitle, name } ) => {
  /* 
    if( !props.title ) { //this is a way of validating the props but it has many downsides that why we use propTypes
        throw new Error('Unexisting title');
    } ;
     */
    return (

    <div id="firstAppDiv"> {/*this div has no reason to exist but is very commont the alternatives is using a fragment*/}
        
        <h2>{ getGreetins() }</h2>

        <div>FirstApp</div>
        
        <p>I'm a subtitle</p>
        
        <p>{ title }</p> 
        <p>{ subtitle }</p>
        <p>{ name }</p>

        <p>{ newMessage }</p> {/* you can use a permited expresion inside of the {} when it's not an object*/}

        <p>{ JSON.stringify(objectMessage) }</p>{/* if you want to use an object then you must convert it to a JSON */}
    
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
};


FirstApp.propTypes = {
    title: PropTypes.string.isRequired, //here you will include the type and which promps you need
    subtitle:PropTypes.number,
};


FirstApp.defaultProps = { //In case that you dont want to define all the props you can use this...
    title:'No title',
    subtitle:'No subtitle' ,
    name: 'David'
};
