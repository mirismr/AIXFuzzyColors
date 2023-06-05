import {initializeGranularSelect, resetToDefaultGranularFCS, selectGranularColor, getGranularPrototypes} from "./utils.js";

resetToDefaultGranularFCS()
let clean_protypes_button = document.querySelector("#granular-clean-prototypes");
clean_protypes_button.addEventListener("click", resetToDefaultGranularFCS);

initializeGranularSelect(getGranularPrototypes(), "granular-picker", "granular-select");
let select = document.querySelector('#granular-picker');
select.addEventListener("change", selectGranularColor, false);


