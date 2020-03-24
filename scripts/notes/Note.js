export const Note = (noteObject, criminalObject) => {
    return `
        <section class="note">
            <header>
                <h2>${criminalObject.name}</h2>
            </header>
            <p>${noteObject.text}</p>
            <p>${new Date(noteObject.timestamp).toLocaleDateString()}</p>
        </section>
    `
}