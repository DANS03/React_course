import React, { useState } from 'react'

export const GifExpertApp = () => {
    
    const [categories,setCategories ] = useState([ 'Pingu', "Batman"]);
  
    const onAddCategories =  (newCategory) => {

        setCategories( categories => {
            return [...categories,newCategory];
        } );


    };

    console.log(categories);


    return (
    <>

        {/* Head/title */}
        <h1>Gif Expert App</h1>
        
        {/* Input */}

        {/*<input type = "text" placeholder='Insert category...' id='newCategory'></input>
        <input type = "submit"></input>*/}

        {/* List */}

        <button onClick={onAddCategories}>Add category</button>

        <ul>
            {/* Items*/}

            { 
                categories.map( category => {//the map function executes the code for every items inside the list
                    return <li key={category}> {category} </li>//we have to take in consideration that we must use a unique key for every item of the list
                }) 
            }

        </ul>

           
    </>
  )
};
