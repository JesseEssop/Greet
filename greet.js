var languageTypeRadio = document.querySelector("languageTypeRadio")
var textArea = document.querySelector(".textArea");
var greetAmount = document.querySelector(".greetAmount")
var greetBtn = document.querySelector(".greetBtn");
var greetNameElement = document.querySelector(".greetName")


var english = "Hello, ";
var afrikaans = "Hallo, ";
var xhosa = "Molo, ";
var final = "";
var existing = JSON.parse(localStorage.getItem("Name"))
var keep = existing || {};
var counter = 0;

window.onload = function(){
    var refreshNames= Object.keys(keep);
    counter = refreshNames.length;
    document.getElementById("total").innerHTML = counter;
}

greetBtn.addEventListener('click', function () {
    var newName = textArea.value.trim();
    newName = newName.toUpperCase();
    console.log(newName);
    var checkedRadioBtn = document.querySelector("input[name='languageType']:checked");
    if (checkedRadioBtn) {
        var languageType = checkedRadioBtn.value;
    }

    if (keep[newName] === undefined) {
        keep[newName] = 0;
        counter++;
    }

    if (languageType === "english") {
        final = english + textArea.value.trim();

    }
    if (languageType === "afrikaans") {
        final = afrikaans + textArea.value.trim();

    }
    if (languageType === "xhosa") {
        final = xhosa + textArea.value.trim();

    }
    localStorage.setItem("Name", JSON.stringify(keep));

    document.getElementById("total").innerHTML = counter;

    greetNameElement.innerHTML = final;
})




