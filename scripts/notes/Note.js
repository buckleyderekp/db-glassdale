export const Note = (noteObject, criminalObject) => {
    return `
        <section class="note">
            <header>
                <h2>${noteObject.subject}</h2>
            </header>
            <p>${noteObject.text}</p>
            <p>${new Date(noteObject.timestamp).toLocaleDateString()}</p>
            <p>${criminalObject.name}</p>
        </section>
    `
}