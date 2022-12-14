//The extention JSX means that the code is a combination of javascript and html in one file.

import React from "react";
import ReactDOM  from "react-dom/client";
import { App } from "./HelloWorldApp";
import { FirstApp } from "./FirstApp";
import { CounterApp } from "./CounterApp";
import './styles.css' //this will load the css styles inside styles.css

//In order to rendender the app we must select the part of the HTML doc where our app will be render, the we activate the strict mode of react so we can have more control over the way that the code is written and inside that we render our component app.

ReactDOM.createRoot( document.getElementById( 'root' ) ).render(                
    <React.StrictMode>
        <App></App>

        {/*<FirstApp title="Hello I'm prop name Title" subtitle={ 123 }></FirstApp>*/}
        <CounterApp value =  { 123 }></CounterApp>

    </React.StrictMode>
);