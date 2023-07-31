import {FuzzyColorSpace} from "./fuzzycolorspace.js";
import {initializeGranularSelect, visualizeGranularColor, visualizeCustomGranularColor, obtainCurrentGranularPrototypes, getGranularPrototypes, saveImage, initImageLoaded} from "./utils.js";

// initImageLoaded("saved-image-canvas", "mapped-image", "saved-image", "bandera9_granular_results.png");

let visible_colors = getGranularPrototypes().map(color_prototype => color_prototype[0]);
let fcs = new FuzzyColorSpace('#granular-results-space', "flex-grow:1;");
fcs.buildGranularSphericalFuzzyColorSpace(getGranularPrototypes(), visible_colors);

initializeGranularSelect(getGranularPrototypes(), "granular-results-picker", "granular-results-select");
let selectGranularColor = document.querySelector('#granular-results-picker');
selectGranularColor.addEventListener("change", visualizeGranularColor, false);

let sourceImage = document.querySelector('#source-image');
sourceImage.addEventListener("change", saveImage, false);


var rad = document.granular_fcs_form.granular_fcs_to_use;
for (var i = 0; i < rad.length; i++) {
    rad[i].addEventListener('change', function() {
        if (this.value == "default"){
            let visible_colors = getGranularPrototypes().map(color_prototype => color_prototype[0]);
            let fcs = new FuzzyColorSpace('#granular-results-space', "flex-grow:1;");
            fcs.buildGranularSphericalFuzzyColorSpace(getGranularPrototypes(), visible_colors);

            $("#granular-results-picker").remove();
            initializeGranularSelect(getGranularPrototypes(), "granular-results-picker", "granular-results-select");
            let selectGranularColor = document.querySelector('#granular-results-picker');
            selectGranularColor.addEventListener("change", visualizeGranularColor, false);
        }
        else {
            let visible_colors = obtainCurrentGranularPrototypes().map(color_prototype => color_prototype[0]);
            let fcs = new FuzzyColorSpace('#granular-results-space', "flex-grow:1;");
            fcs.buildGranularSphericalFuzzyColorSpace(obtainCurrentGranularPrototypes(), visible_colors);

            $("#granular-results-picker").remove();
            initializeGranularSelect(obtainCurrentGranularPrototypes(), "granular-results-picker", "granular-results-select");
            let selectGranularColor = document.querySelector('#granular-results-picker');
            selectGranularColor.addEventListener("change", visualizeCustomGranularColor, false);
        }
    });
}