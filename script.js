var formDetails = document.querySelector("#convert");
var distance = document.querySelector("#distance");
var ouput = document.querySelector("#answer");
var convertType = "miles";
var heading = document.querySelector("h1");
var intro = document.querySelector('p');



document.addEventListener("keydown", function (event) {
    var key = event.code;
    if (key === 'KeyK') {
        convertType = "kilometers";
        heading.innerHTML = "Kilometers to Miles Converter";
        intro.innerHTML = "Type in a number of kilometers and click the button to convert distance to miles"
    } else if (key === 'KeyM') {
        convertType = "miles";
        heading.innerHTML = "Miles to Kilometer Converter";
        intro.innerHTML = "Type in a number of kilometers and click the button to convert distance to Kilometers"
    }
});


formDetails.addEventListener("submit", function (eve) {
    eve.preventDefault();
    var getDistanceValue = Number(distance.value);
    if (getDistanceValue) {
        if (convertType == "miles") {
            var conversion = getDistanceValue * 1.609344.toFixed(2);
            ouput.innerHTML = `<h2>${getDistanceValue} Miles convert to ${conversion} kilometers </h2>`;
        } else {
            var conversion = getDistanceValue * 0.621371192.toFixed(2);
            ouput.innerHTML = `<h2>${getDistanceValue} Kilometers convert to ${conversion} Miles </h2>`;
        }
    } else if (getDistanceValue == "") {
        ouput.innerHTML = `<h2>Please enter distance</h2>`
    } else {
        ouput.innerHTML = `<h2>Please enter proper value</h2>`;
    }
})