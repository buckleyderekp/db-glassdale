import { getNotes, useNotes, deleteNote } from "./noteDataProvider.js"
import { Note } from "./Note.js"
import { useCriminals } from "../criminals/CriminalProvider.js"



const contentTarget = document.querySelector(".notesContainer")
const eventHub = document.querySelector(".container")

/*
    State variables
*/
let visibility = false

/*
    Event handlers
*/
// lets page know that something changed and rerenders the notelist
eventHub.addEventListener("noteStateChanged", customEvent => {
    render()
})

// toggles invisibility by using state variable from true to false

eventHub.addEventListener("allNotesClicked", customEvent => {
    visibility = !visibility

    if (visibility) {
        contentTarget.classList.remove("invisible")
    }
    else {
        contentTarget.classList.add("invisible")
    }
})

// listens for browser generated click on a delete button, splits that on the -- to capture the note id and passes that 
// through as an argument on the delete note function

contentTarget.addEventListener("click", clickEvent => {
    if (clickEvent.target.id.startsWith("deleteNote--")) {
        const [_, noteId] = clickEvent.target.id.split("--")
        deleteNote(noteId)
    }
})

const render = () => {
    if (visibility) {
        contentTarget.classList.remove("invisible")
    }
    else {
        contentTarget.classList.add("invisible")
    }

    getNotes().then(() => {
        const allTheNotes = useNotes()
        const criminalCollection = useCriminals()

        contentTarget.innerHTML = allTheNotes.map(
            currentNoteObject => {
                const relatedCriminal = criminalCollection.find(criminal => criminal.id === currentNoteObject.criminalId)
                return Note(currentNoteObject, relatedCriminal)
            }
        ).join("")
    })
}

export const NotesList = () => {
    render()
}