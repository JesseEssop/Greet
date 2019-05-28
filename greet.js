var languageTypeRadio = document.querySelector("languageTypeRadio")
var textArea = document.querySelector(".textArea");
var greetAmount = document.querySelector(".greetAmount")
var greetBtn = document.querySelector(".greetBtn");
var greetNameElement = document.querySelector(".greetName")



var final = "";
var existing = JSON.parse(localStorage.getItem("Name"))
var greetInstance = GreetingsManager(existing);


window.onload = function () {
    document.getElementById("total").innerHTML = greetInstance.count();
}




greetBtn.addEventListener('click', function () {
        var checkedRadioBtn = document.querySelector("input[name='languageType']:checked");
        if (checkedRadioBtn) {
            var languageType = checkedRadioBtn.value;
        }
        greetInstance.add(textArea.value);
        localStorage.setItem("Name", JSON.stringify(greetInstance.records()));
        document.getElementById("total").innerHTML = greetInstance.count();
        greetNameElement.innerHTML = greetInstance.greet(languageType);
})




