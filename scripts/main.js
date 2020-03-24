import { getOfficers } from "./officers/OfficerProvider.js";

import { CriminalList } from "./criminals/CriminalList.js";
import { getConvictions, useConvictions } from "./convictions/convictionProvider.js";
import ConvictionSelect from "./convictions/convictionSelect.js";
import { getCriminals } from "./criminals/CriminalProvider.js";
import NoteForm from "./notes/NoteForm.js";
import { DisplayNotesButton } from "./notes/DisplayNotesButton.js";
import "./criminals/KnownAssociatesDialog.js"
import { DisplayNoteFormButton } from "./notes/DisplayNoteFormButton.js";
import { NotesList } from "./notes/Notelist.js";
import { getNotes, useNotes } from "./notes/noteDataProvider.js";
import { WitnessStatementButton } from "./witnesses/WitnessStatementButton.js";
import "./witnesses/WitnessList.js"


getCriminals()
  .then(CriminalList)
  .then(getNotes)
  .then(NotesList)
  .then(NoteForm)

// first get all convictions, THEN create the conviction dropdown
getConvictions()
  .then(ConvictionSelect)


DisplayNotesButton()
DisplayNoteFormButton()
WitnessStatementButton()