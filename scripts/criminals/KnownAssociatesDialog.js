
import { useCriminals } from "./CriminalProvider.js"

const contentTarget = document.querySelector(".knownAssociatesContainer")
const eventHub = document.querySelector(".container")

eventHub.addEventListener("knownAssociatesClicked", customEvent => {
    // Get the criminal id
    const criminalId = customEvent.detail.chosenCriminal

    const criminalArray = useCriminals()

    // Find returns the very first object that matches the condition in the callback function
    const iFoundYou = criminalArray.find(
        (currentCriminal) => {
            if (currentCriminal.id === parseInt(criminalId)) {
                return true
            }
            return false
        }
    )

    KnownAssociatesDialog(iFoundYou)

    const DialogBox = document.querySelector("#dialogBox")
    DialogBox.showModal()
})

export const KnownAssociatesDialog = (criminalObject) => {
    contentTarget.innerHTML = `
        <dialog id="dialogBox">
            ${
                criminalObject.known_associates.map(
                    (currentAssociate) => {
                        return `<div>${currentAssociate.name}</div>
                                <ul>
                                    <li>${currentAssociate.alibi}</li>
                                </ul>
                        `
                    }
                ).join("")
            }
        </dialog>
    `
}