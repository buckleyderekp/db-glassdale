/*
 *   ConvictionSelect component that renders a select HTML element
 *   which lists all convictions in the Glassdale PD API
 */
import { useConvictions } from "./convictionProvider.js"

// declaring event hub in this module
const eventHub = document.querySelector(".container")

// Get a reference to the DOM element where the <select> will be rendered
const contentTarget = document.querySelector(".filters__crime")

const ConvictionSelect = () => {
    // Get all convictions from application state
    const convictions = useConvictions()

    const render = convictionsCollection => {
        /*
            Use interpolation here to invoke the map() method on
            the convictionsCollection to generate the option elements.
            Look back at the example provided above.
        */

        contentTarget.innerHTML = `
            <select class="dropdown" id="crimeSelect">
                <option value="0">Please select a crime...</option>
                ${convictionsCollection.map(crime =>
            `<option class="${crime.id}">${crime.name}</option>`
        )}
            </select>
        `
    }

    render(convictions)
}


//add eventlistener
contentTarget.addEventListener("change", changeEvent => {
    //determine if the id of the target of the event listener is equal too "crime select" (line 25)
    if (changeEvent.target.id === "crimeSelect") {

        //if that is true take the value of of the target and store it in a variable
        //the value of the target is ${crime.name} line 28
        const theCrimeThatWasChosen = changeEvent.target.value

        //create custom event that stores the crime that was chosen in an object 
        //and set it equal to crimeChosenEvent

        const crimeChosenEvent = new CustomEvent("crimeChosen", {
            detail: {
                chosenCrime: theCrimeThatWasChosen
            }
        })
        // send event to event hub so that other modules can listen for it
        eventHub.dispatchEvent(crimeChosenEvent)
    }
})




export default ConvictionSelect