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
        assert.equal(testInstance.greet("afrikaans"), "PLEASE ENTER VALID NAME");
        assert.equal(testInstance.greet("english"), "PLEASE ENTER VALID NAME");
        assert.equal(testInstance.greet("xhosa"), "PLEASE ENTER VALID NAME");
    });
    
    it('This test takes in numbers and returns the error message', function () {
        var testInstance = GreetingsManager();
        testInstance.add("2313");
        assert.equal(testInstance.greet("english"),"PLEASE ENTER VALID NAME") ;
        assert.equal(testInstance.greet("afrikaans"), "PLEASE ENTER VALID NAME");
        assert.equal(testInstance.greet("xhosa"),"PLEASE ENTER VALID NAME");
    });
    it('This test takes in numbers and letters and returns the error message', function () {
        var testInstance = GreetingsManager();
        testInstance.add("NUIIAEHUO82313");
        assert.equal(testInstance.greet("english"),"PLEASE ENTER VALID NAME") ;
        assert.equal(testInstance.greet("afrikaans"), "PLEASE ENTER VALID NAME");
        assert.equal(testInstance.greet("xhosa"),"PLEASE ENTER VALID NAME");
    });
    it('This test takes in a numbers, letters & special characters and returns the error message', function () {
        var testInstance = GreetingsManager();
        testInstance.add("MUC7927@#$%^&");
        assert.equal(testInstance.greet("english"),"PLEASE ENTER VALID NAME") ;
        assert.equal(testInstance.greet("afrikaans"), "PLEASE ENTER VALID NAME");
        assert.equal(testInstance.greet("xhosa"),"PLEASE ENTER VALID NAME");
    });
    it('Should return 1 when a new name is entered ', function () {
        var testCount = GreetingsManager();
        testCount.add("Steve");
        assert.equal(testCount.count(), 1);
    });
    it('Should return 1 when a new name is entered and remain 1 if the same name is used ', function () {
        var testCount = GreetingsManager();
        testCount.add("Steve");
        testCount.add("Steve");
        assert.equal(testCount.count(), 1);
    });
    it('Should return 3 when different names are entered ', function () {
        var testCount = GreetingsManager();
        testCount.add("Steve");
        testCount.add("Dave");
        testCount.add("Mike");
        assert.equal(testCount.count(), 3);
    });
});