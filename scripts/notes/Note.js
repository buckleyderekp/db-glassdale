export const Note = (noteObject, criminalObject) => {
    // html representation of one note that will render on the page. button uses primary key from note object and criminal name comes from
    // foreign key
    return `
        <section class="note">
            <header>
                <h2>${criminalObject.name}</h2>
            </header>
            <p>${noteObject.text}</p>
            <p>${new Date(noteObject.timestamp).toLocaleDateString()}</p>
            <p>
              <button id="deleteNote--${noteObject.id}">Delete This Note</button>
            </p>
        </section>
    `
}