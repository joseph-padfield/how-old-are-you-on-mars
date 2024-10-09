const radioButtonsContainerElement: HTMLDivElement = document.querySelector(".radio-buttons")
const formElement: HTMLFormElement = document.querySelector("form")
const resultsElement: HTMLDivElement = document.querySelector(".results")


interface Planets {
    planet: string,
    yearLength: number
}

const planets: Planets[] = [
    {
        planet: 'Mercury',
        yearLength: 88/365
    },
    {
        planet: 'Venus',
        yearLength: 225/365
    },
    {
        planet: 'Mars',
        yearLength: 687/365
    },
    {
        planet: 'Jupiter',
        yearLength: 4333/365
    },
    {
        planet: 'Saturn',
        yearLength: 10756/365
    }
]

planets.forEach(planet => {
    const label: HTMLLabelElement = document.createElement("label")
    const input: HTMLInputElement = document.createElement("input")

    label.classList.add("planet-selection")
    label.textContent = planet["planet"]
    const inputId: string = planet["planet"].toLowerCase()
    input.id = inputId
    input.value = planet["yearLength"].toString()

    label.htmlFor = inputId

    input.type = "radio"
    input.name = "planets"
    input.className = "radio-input"

    // customRadioButton.className = "custom-radio"

    radioButtonsContainerElement.appendChild(label)
    radioButtonsContainerElement.appendChild(input)
    // radioButtonsContainerElement.appendChild(customRadioButton)

})

formElement.addEventListener("submit", (event: SubmitEvent) => {
    event.preventDefault();

    const selectedInput: HTMLInputElement = document.querySelector('input[name="planets"]:checked') as HTMLInputElement;
    const selectedPlanet: string = document.querySelector(`label[for="${selectedInput.id}"]`).textContent;
    const planetYear: number = parseFloat(selectedInput.value);

    const currentAge: number = parseInt((document.getElementById("current-age") as HTMLInputElement).value);

    console.log(selectedPlanet);
    console.log(currentAge);
    console.log(planetYear);
    const ageOnPlanet: number = Math.round(currentAge/planetYear);
    console.log(ageOnPlanet);

    resultsElement.textContent = `Age on ${selectedPlanet}: ${ageOnPlanet}`;
});
