test('This test should not fail', () => {

    //There are 3 steps to the test 
    //  1-Initialization

    const firstMessage = "Hello World";

    //  2-Stimulus

    const secondMesagge = firstMessage.trim();
     
    //  3-See the behavior... expected

    expect ( firstMessage ).toBe( secondMesagge ); //expect is a jest expresion to evaluate the resul or the expected result of something

    expect().to

});//this si a simple callback that jest interprets as a simple test to evaluate, inside the '' is the title of the test and the function is the test itself


//Jest docs
//https://jestjs.io/docs/api