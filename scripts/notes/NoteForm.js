import { saveNote } from "./noteDataProvider.js"

const contentTarget = document.querySelector(".noteFormContainer")
const eventHub = document.querySelector(".container")

let visibility = false

eventHub.addEventListener("noteFormButtonClicked", customEvent => {
    visibility = !visibility

    if (visibility) {
        contentTarget.classList.remove("invisible")
    }
    else {
        contentTarget.classList.add("invisible")
    }
})

// Handle browser-generated click event in component
contentTarget.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveNote") {

        const text = document.querySelector("#noteText").value
        const subject = document.querySelector("#criminal").value

        // Make a new object representation of a note
        const newNote = {
            text: text,
            criminalId: subject,
            timestamp: Date.now()
        }

        // Change API state and application state
        saveNote(newNote)
    }
})

const render = () => {
    contentTarget.classList.add("invisible")
    contentTarget.innerHTML = `
        <fieldset>
            <label for="noteText">Note:</label>
            <input type="text" id="noteText">
        </fieldset>
        <fieldset>
            <label for="criminal">Criminal:</label>
            <input type="text" id="criminal">
        </fieldset>
        <button id="saveNote">Save Note</button>
    `
}

const NoteForm = () => {
    render()
}

export default NoteForm

