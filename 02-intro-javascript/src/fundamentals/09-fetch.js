const apiKey="bhcJGuMA3NkSElGxyoc9J54GCRYJmYbW"; 

const petition = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);//fetch reference https://developer.mozilla.org/es/docs/Web/API/Fetch_API

//Normal promise
//petition.then( resp => {
//    resp.json().then( data => { 
//        console.log( data );
//    } );
//} )

//Chained promise
petition
    .then( resp => resp.json() )
    .then( data => {
        const { url } = data.data.images.original;//we destructure the array an get the image url

        const img= document.createElement('img');//We create an img html element
        img.src= url; //We load the url in the element img

        document.body.append( img );//We load the img in the html

    })
    .catch( console.warn );