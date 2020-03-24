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
eventHub.addEventListener("noteStateChanged", customEvent => {
    render()
})

eventHub.addEventListener("allNotesClicked", customEvent => {
    visibility = !visibility

    if (visibility) {
        contentTarget.classList.remove("invisible")
    }
    else {
        contentTarget.classList.add("invisible")
    }
})

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