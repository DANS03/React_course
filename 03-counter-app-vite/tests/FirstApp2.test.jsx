import { getByText, render,screen } from "@testing-library/react"
import { FirstApp } from '../src/FirstApp'


describe('Tests in FirstApp', () => { 

    const title = "I'm titlte";

    test('Must match the snapshot', () => {

        const {container} = render( <FirstApp title = {title} subtitle={1} />);

        expect(container).toMatchSnapshot();
    });

    test('Must show the message of title', () => { 

        render((<FirstApp title = {title} subtitle={1} />));

        screen.debug();//screen is the object tha we are rendering
 
        expect( screen.getByText(title)).toBeTruthy();
        //expect( screen.getByText(title)).not.toBeTruthy();  if we dont't want to see it
         
        
    });

    test('Must show a h2', () => { 

        render((<FirstApp title = {title} subtitle={1} />));
 
        expect( screen.getByRole( 'heading', {level: 2 } ).innerHTML ).toContain("Welcome John Doe !  How are you today?");
    });

    test('Must show names sended by props', () => { 

        render((<FirstApp title = {title} subtitle={1} name={'David'} />));
 
        expect( screen.getAllByText('David').length ).toBe(1);
    });






});