import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {
    
    const [categories,setCategories ] = useState([ 'Pingu']);

    const addCategories = ( newCategory ) => {

        if( categories.includes(newCategory) ){
            alert('The category already exists');
            return
        }

        setCategories( [ newCategory , ...categories ] );

     };

    return (
    <>

        <h1>Gif Expert App</h1>

        <AddCategory 
        //setCategories = {setCategories} 
        onNewCategory = { (value) => addCategories(value) }//this will be resive inside addCategory and executed there
        />

        { 
            categories.map( (category) => (//the map function executes the code for every item inside the list
            
                <GifGrid category={category} />
            ))
        }
           
    </>
  )
};
