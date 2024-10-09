var radioButtonsContainerElement = document.querySelector(".radio-buttons");
var formElement = document.querySelector("form");
var resultsElement = document.querySelector(".results");
var planets = [
    {
        planet: 'Mercury',
        yearLength: 88 / 365
    },
    {
        planet: 'Venus',
        yearLength: 225 / 365
    },
    {
        planet: 'Mars',
        yearLength: 687 / 365
    },
    {
        planet: 'Jupiter',
        yearLength: 4333 / 365
    },
    {
        planet: 'Saturn',
        yearLength: 10756 / 365
    }
];
planets.forEach(function (planet) {
    var label = document.createElement("label");
    var input = document.createElement("input");
    label.classList.add("planet-selection");
    label.textContent = planet["planet"];
    var inputId = planet["planet"].toLowerCase();
    input.id = inputId;
    input.value = planet["yearLength"].toString();
    label.htmlFor = inputId;
    input.type = "radio";
    input.name = "planets";
    input.className = "radio-input";
    // customRadioButton.className = "custom-radio"
    radioButtonsContainerElement.appendChild(label);
    radioButtonsContainerElement.appendChild(input);
    // radioButtonsContainerElement.appendChild(customRadioButton)
});
formElement.addEventListener("submit", function (event) {
    event.preventDefault();
    var selectedInput = document.querySelector('input[name="planets"]:checked');
    var selectedPlanet = document.querySelector("label[for=\"".concat(selectedInput.id, "\"]")).textContent;
    var planetYear = parseFloat(selectedInput.value);
    var currentAge = parseInt(document.getElementById("current-age").value);
    console.log(selectedPlanet);
    console.log(currentAge);
    console.log(planetYear);
    var ageOnPlanet = Math.round(currentAge / planetYear);
    console.log(ageOnPlanet);
    resultsElement.textContent = "Age on ".concat(selectedPlanet, ": ").concat(ageOnPlanet);
});
