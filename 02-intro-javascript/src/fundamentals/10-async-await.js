const getImage = async () => { //async transforms a function in to a promise 


    const apiKey = "bhcJGuMA3NkSElGxyoc9J54GCRYJmYbW";


    try { //try / catch is a way to validate that if an error happens the error is validated 

        const response = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);//fetch reference https://developer.mozilla.org/es/docs/Web/API/Fetch_API
        //Await helps enable us to use the code  and work with it as syncronuos one
        //Await tells the app to await until the petitions in acomplish, 
        //The only condition to work with await is that ypu must work inside an async function

        const data = await response.json(); //this json  will return a promise that's why we must wait for it's response

        const { url } = data.data.images.original;//we destructure the array an get the image url

        const img = document.createElement('img');//We create an img html element
        img.src = url; //We load the url in the element img

        document.body.append(img);//We load the img in the html
    }
    catch(err){
        console.error(err);
    }

};

getImage();
