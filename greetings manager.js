function GreetingsManager(refreshData) {
    var keep = refreshData || {};
    var counter = 0;
    var newName;

    function updatesCounter() {
        var keys = Object.keys(keep);
        counter = keys.length;
        return counter;
    }
    function addNewName(name) {

        if (name.trim()) {
            if (testNames(name)) {
                if (keep[name] === undefined) {

                    keep[name] = 0;
                    updatesCounter();
                }


            }

        }
    } 
    
    function greetLanguage(languageType) {
        var english = "Hello, ";
        var afrikaans = "Hallo, ";
        var xhosa = "Molo, ";
        var end;
        if (languageType === "english") {
            end = english + newName;

        }
        if (languageType === "afrikaans") {
            end = afrikaans + newName;

        }
        if (languageType === "xhosa") {
            end = xhosa + newName;

        }
        return end;

    }
    function testNames(input) {

        var regex = /\d/;
        var wack = regex.test(input);
        if (wack !== true) {
            newName = input.trim().toLowerCase();
            newName = newName.charAt(0).toUpperCase() + newName.slice(1);
            return true;
        }

    }

    function displayRecords() {
        return keep;
    }
    return {
        add: addNewName,
        count: updatesCounter,
        records: displayRecords,
        greet: greetLanguage
    }
}