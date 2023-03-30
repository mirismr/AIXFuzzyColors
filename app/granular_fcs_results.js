import {FuzzyColorSpace} from "./fuzzycolorspace.js";
import {initializeGranularSelect, visualizeGranularColor, getGranularPrototypes, saveImage, initImageLoaded} from "./utils.js";

initImageLoaded("saved-image-canvas", "mapped-image", "bandera9_granular_results.png");

let visible_colors = getGranularPrototypes().map(color_prototype => color_prototype[0]);
let fcs = new FuzzyColorSpace('#granular-results-space', "flex-grow:1;");
fcs.buildGranularSphericalFuzzyColorSpace(getGranularPrototypes(), visible_colors);

initializeGranularSelect(getGranularPrototypes(), "granular-results-picker", "granular-results-select");
let selectGranularColor = document.querySelector('#granular-results-picker');
selectGranularColor.addEventListener("change", visualizeGranularColor, false);

let sourceImage = document.querySelector('#source-image');
sourceImage.addEventListener("change", saveImage, false);
