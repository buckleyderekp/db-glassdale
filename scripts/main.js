import { getOfficers } from "./officers/OfficerProvider.js";

import CriminalList from "./criminals/CriminalList.js";
import { getConvictions } from "./convictions/convictionProvider.js";
import ConvictionSelect from "./convictions/convictionSelect.js";




getOfficers()
.then(getConvictions)
.then(CriminalList)
.then(ConvictionSelect)
