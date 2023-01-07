import React, { useState } from 'react'

export const AddCategory = ( { setCategories, onNewCategory } ) => { // we need to destruture the props in order to obtain the values

    const [inputValue, setInputValue] = useState(''); 
    
    const onInputChange = (event) => {
    //const onInputChange = ({target}) => { this is an alternative of doing event.target.value    
    
        //console.log( event.target.value );
        setInputValue( event.target.value );//this will register the changes made in the text area

    };

    const onSubmit = ( event ) => {
        event.preventDefault();

        if( inputValue.trim() < 1  ){ return }//this validates that we don't have an empty value and exits the function
        
       // setCategories(  (categories) => [inputValue, ...categories]);//in this case we need a callback to update categories is a good alternative

       onNewCategory(inputValue.trim());

        setInputValue('');//thsi resets the inputvalue

    };

    return (
        <>
            <h3>AddCategory</h3>
            <form onSubmit={ (event) => onSubmit(event) } >
                {/*<form onSubmit={ onSubmit } >  this is a shorter alternative*/}

                <input 
                    type="text" 
                    placeholder='Serch GIFs...' 
                    value={ inputValue } 
                    onChange={ (event) => onInputChange(event) }
                    //onChange={ onInputChange } this is an alternative
                />

                <input type="submit"/>

            </form>
        </>
    )
}
