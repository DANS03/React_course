import PropTypes from 'prop-types';
import React from 'react';
import { useState } from 'react';




export const CounterApp = ({value}) => {


  const [ counter, setCounter ] = useState( value ); 
  
  //console.log('render'); //This is a demostrations that every time that we excecute any of the function the whole component will be render

  function handleClick(){
  
    setCounter( counter + 1);//when we call the setCounter function we are telling react that the state has change there for react must re-render the component

    //setCounter( ( newCounter ) => { newCounter + 1 } )   if we  don't hace access to an element of the hook we can also use this method

  }  

  function handleSustraction(){
  
    setCounter( counter - 1);

  }  
  function handleReset(){
  
    setCounter( value );

  }  




  return (

    <>
    
    <div>CounterApp</div>

    <h2> { counter } </h2>

    <button onClick={ handleClick  }> {/*If you need to pass args to the fucntion you must do it inside the arrow function otherwise you can do it like below */ }
    {/*<button onClick={ handleClick  }> --------Theres no need for parentesis ()*/}
       +1 
    </button>

    <button aria-label="btn-minus" onClick={ handleSustraction  }>{/* aria-label="btn-minus" is an identifire that willbe usa as an id in the test*/}
       -1 
    </button>

    <button onClick={ handleReset }> 
       Reset
    </button>

    </>
    
  )
};


CounterApp.propTypeS = {
    value: PropTypes.number,
};