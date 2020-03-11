import { useCriminals, getCriminals } from "./CriminalProvider.js";
import criminalString from "./criminal.js";



const contentTarget = document.querySelector(".criminalsContainer")

const CriminalList = () => {
    
    
 getCriminals().then(() => {

    const allCriminals = useCriminals()

for (const criminal of allCriminals) {
    contentTarget.innerHTML += criminalString(criminal)
    
}
})

}

export default CriminalList