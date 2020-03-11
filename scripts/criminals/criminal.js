const criminalString = (criminal) => {
  return `
    <section class="criminal">
    <header>${criminal.name} </header>
    <ul>
      <li>Age: ${criminal.age}</li>
      <li>Crime: ${criminal.conviction}</li>
      <li>Start Date: ${new Date(criminal.incarceration.start).toLocaleDateString('en-US')}</li>
      <li>End Date: ${new Date(criminal.incarceration.end).toLocaleDateString('en-US')}</li>
    </ul>
    </section>
    `
}

export default criminalString