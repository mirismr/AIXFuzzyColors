import {FuzzyColorSpace} from "./fuzzycolorspace.js";
import {initializeGranularSelect, selectGranularColor, getGranularPrototypes} from "./utils.js";

let visible_colors = getGranularPrototypes().map(color_prototype => color_prototype[0]);
let fcs = new FuzzyColorSpace('#granular-space', "flex-grow:5;");
fcs.buildGranularSphericalFuzzyColorSpace(getGranularPrototypes(), visible_colors);

initializeGranularSelect(getGranularPrototypes(), "granular-picker", "granular-select");
let select = document.querySelector('#granular-picker');
select.addEventListener("change", selectGranularColor, false);
