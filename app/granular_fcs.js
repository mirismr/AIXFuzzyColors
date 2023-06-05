import {FuzzyColorSpace} from "./fuzzycolorspace.js";
import {initializeGranularSelect, resetToDefaultGranularFCS, selectGranularColor, getGranularPrototypes} from "./utils.js";

resetToDefaultGranularFCS(getGranularPrototypes(), "granules-wrapper")

let visible_colors = getGranularPrototypes().map(color_prototype => color_prototype[0]);
let fcs = new FuzzyColorSpace('#granular-space', "flex-grow:1;");
fcs.buildGranularSphericalFuzzyColorSpace(getGranularPrototypes(), visible_colors);

initializeGranularSelect(getGranularPrototypes(), "granular-picker", "granular-select");
let select = document.querySelector('#granular-picker');
select.addEventListener("change", selectGranularColor, false);


