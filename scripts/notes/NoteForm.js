import { saveNote } from "./noteDataProvider.js"
import { useCriminals } from "../criminals/CriminalProvider.js"


// searching the DOM for specific class and storing it in a variable 
const contentTarget = document.querySelector(".noteFormContainer")
const eventHub = document.querySelector(".container")
// setting state on page load for noteFormContainer to be invisible
let visibility = false
// defines what happens when noteFormButton is clicked
eventHub.addEventListener("noteFormButtonClicked", customEvent => {
    // change visibility to true
    visibility = !visibility
    // when visibility is true remove the invisiable class
    if (visibility) {
        contentTarget.classList.remove("invisible")
    }
    // when visibility is false add invisible class
    else {
        contentTarget.classList.add("invisible")
    }
})

// Handle browser-generated click event in component
contentTarget.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveNote") {
    //   captures values in input fields and stores them in variables
        const text = document.querySelector("#noteText").value
        const subject = document.querySelector("#criminalDropdown").value

        // Make a new object representation of a note
        const newNote = {
            text: text,
            criminalId: parseInt(subject),
            timestamp: Date.now()
        }

        // Change API state and application state
        saveNote(newNote)
    }
})

// renders note form including dropdown of all criminals to choose from
const render = () => {
    contentTarget.classList.add("invisible")
    const allCriminals = useCriminals()
    contentTarget.innerHTML = `
        <fieldset>
            <label for="noteText">Note:</label>
            <input type="text" id="noteText">
        </fieldset>
        <fieldset>

        <select id="criminalDropdown">
        <option value="0">Please choose a criminal...</option>
        ${
            allCriminals.map(
                (currentCriminalObject) => {
                    return `<option value="${currentCriminalObject.id}">${currentCriminalObject.name}</option>`
                }
                )
            }
            </select>
            </fieldset>
            <button id="saveNote">Save Note</button>
    `
}

const NoteForm = () => {
    render()
}

export default NoteForm

