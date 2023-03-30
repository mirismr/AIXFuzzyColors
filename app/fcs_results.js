import {FuzzyColorSpace} from "./fuzzycolorspace.js";
import {initializeGranularSelect, visualizeFCSColor, saveFCSImage, getISCCBasicPrototypesWithLabels, initImageLoaded} from "./utils.js";

initImageLoaded("fcs-saved-image-canvas", "fcs-mapped-image", "bandera9_results.png");

let visible_colors = getISCCBasicPrototypesWithLabels().map(color_prototype => color_prototype[0]);
let fcs = new FuzzyColorSpace('#fcs-results-space', "flex-grow:1;");
fcs.buildSphericalFuzzyColorSpaceWithLabels(getISCCBasicPrototypesWithLabels(), visible_colors);

initializeGranularSelect(getISCCBasicPrototypesWithLabels(), "fcs-results-picker", "fcs-results-select");
let selectGranularColor = document.querySelector('#fcs-results-picker');
selectGranularColor.addEventListener("change", visualizeFCSColor, false);

let sourceImage = document.querySelector('#fcs-source-image');
sourceImage.addEventListener("change", saveFCSImage, false);
