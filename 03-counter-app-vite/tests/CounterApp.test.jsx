import { findByText, fireEvent, render, screen } from "@testing-library/react";
import { CounterApp } from "../src/CounterApp";

describe('Testing CounaterApp', () => { 
    
    const initialValue = 100;

    test('Must match the snapshot', () => { 

        const {container} = render(<CounterApp value={initialValue}/>);

        expect(container).toMatchSnapshot();

    });

    test('Must start with initialValue value', () => { 

        render(<CounterApp value={initialValue}/>);

        expect( screen.getByText(initialValue) ).toBeTruthy();
        
    });

    test('Must increment the value', () => { 

        render(<CounterApp value={initialValue}/>);

        fireEvent.click( screen.getByText('+1') );//this will fire the event of click that will interact with the element choosen

        expect( screen.getByText(initialValue+1) ).toBeTruthy();
        

     });

    test('Must decrement the value', () => { 

        render(<CounterApp value={initialValue}/>);

        fireEvent.click( screen.getByText('-1') );

        expect( screen.getByText(initialValue-1) ).toBeTruthy();

    });

    test('Must work Reset', () => { 

        render(<CounterApp value={initialValue}/>);

        fireEvent.click( screen.getByText('-1') );
        
        fireEvent.click( screen.getByRole('button' , {name:'btn-minus'}) );//this is another way to find an element

        fireEvent.click( screen.getByText('-1') );
        
        fireEvent.click( screen.getByText('Reset') );

        screen.debug();

        expect(screen.getByText(initialValue)).toBeTruthy();

     

    });




 })