import React from 'react'

export const GifGrid = ( { category } ) => {

    return (
    <div>
        <h3 key={category}> {category} </h3>
        
        {/*we have to take in to consideration that we must use a unique key for every item of the list*/}
    </div>
    );
};
    
