import React from 'react'
import { getGifs } from '../helpers/getGifs';
import { useState,useEffect } from 'react'; //use effect is a react hook tha is use to trigger secondary effects( a secondary effect is something that gets trigger when another thing happend)

export const GifGrid = ( { category } ) => {

    const [images, setImages] = useState([]);

    const getImages = async() => {

        const newImages = await getGifs( category );
        
        //console.log(newImages);

        setImages(newImages);

        //console.log(images)

    };


    useEffect( () => {  
        
        getImages();
    
    } , [ ]);

   

    return (
    <div>
        
        <h3 > {category} </h3>

        <ol>
            {

            images.map( ( image ) => {
                
                return<li key={image.id}> {image.title} </li>
            })
            }

        </ol>


    </div>
    );
};
