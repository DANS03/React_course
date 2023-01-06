import { getByText, render } from "@testing-library/react"
import { FirstApp } from '../src/FirstApp'


describe('Tests in FirstApp', () => { 
    
    test('Must match the snapshot', () => { 
        
        const greeting = "I'm a subtitle";

        const { container, getByText } = render( <FirstApp  subtitle={1}/>)//The function render does multiple things in this case we want it to return an object with some properties

        expect( container ).toMatchSnapshot();
    });//this test is only usefull when you don't want the rendered page to change


    test('Must find greetitngs ', () => { 

        const { container, getByText } = render( <FirstApp  subtitle={1}/>)//The function render does multiple things in this case we want it to return an object with some properties

        const greeting = "I'm a subtitle";

        expect( getByText(greeting) ).toBeTruthy();

        const h2 = container.querySelector('h2');
         
        expect (h2.innerHTML).toContain('Welcome John Doe !'); 
    });

    test('Get test-id from title', () => { 

        const title = "I'm a test!"

        const { getByTestId } = render(  <FirstApp  title={title} subtitle={1}/> );

        //expect( getByTestId('test-title')).toBeTruthy(); this si an option but is only telling us that the id exists 

        expect( getByTestId('test-title').innerHTML ).toContain(title);

    });

    test('Get name twice', () => { 

        const name = "David" 

        const { getAllByText } = render(  <FirstApp  name={name}/> );//getAllByAltText return a array 


        expect( getAllByText(name).length ).toBe(2);

    });


 });