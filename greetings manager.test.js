describe('Greetings Test', function () {
    it('This test takes in a name and returns  it with a greeting, depending on the language selected ', function () {
        var testInstance = GreetingsManager();
        testInstance.add("Steve");
        assert.equal(testInstance.greet("english"), "Hello, Steve");
        assert.equal(testInstance.greet("afrikaans"), "Hallo, Steve");
        assert.equal(testInstance.greet("xhosa"), "Molo, Steve");
    }); 
    
    it('This test takes in an empty string and returns a greeting with no name', function () {
        var testInstance = GreetingsManager();
        testInstance.add(" ");
        assert.equal(testInstance.greet("afrikaans"), "Hallo, ");
        assert.equal(testInstance.greet("english"), "Hello, ");
        assert.equal(testInstance.greet("xhosa"), "Molo, ");
    });
    
    it('This test takes in a number and returns the greeting with undefined', function () {
        var testInstance = GreetingsManager();
        testInstance.add("2313");
        assert.equal(testInstance.greet("english"),"Hello, undefined") ;
        assert.equal(testInstance.greet("afrikaans"), "Hallo, undefined");
        assert.equal(testInstance.greet("xhosa"), "Molo, undefined");
    });

});