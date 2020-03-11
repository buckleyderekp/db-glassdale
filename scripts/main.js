import { getOfficers } from "./officers/OfficerProvider.js";

import { CriminalList } from "./criminals/CriminalList.js";
import { getConvictions, useConvictions } from "./convictions/convictionProvider.js";
import ConvictionSelect from "./convictions/convictionSelect.js";
import { getCriminals } from "./criminals/CriminalProvider.js";



getCriminals().then(CriminalList)

// first get all convictions, THEN create the conviction dropdown
getConvictions().then(ConvictionSelect)
