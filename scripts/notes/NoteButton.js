// return HTML for toggle buttons

const eventHub = document.querySelector(".noteFormContainer")
const contentTarget =  document.querySelector(".noteFormContainer")

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id.startsWith("btnToggle--")) {

        // Get the chosen component to be toggled
        const [prefix, chosenComponent] = clickEvent.target.id.split("--")

        // Construct the toggledEvent
        const toggleEvent = new CustomEvent("visibilityToggled", {
            detail: {
                chosenComponent: chosenComponent,
            }
        })

        // Dispatch event to system
        eventHub.dispatchEvent(toggleEvent)
    }
})
export const ToggleButtons = () => {
    return `
        <article class="leaveNotes">
            <fieldset>
                <button id="btnToggle--notes">Make Notes</button>
            </fieldset>
        </article>
    `
}

export const renderToggleButtons = () => {
    contentTarget.innerHTML = ToggleButtons()
}