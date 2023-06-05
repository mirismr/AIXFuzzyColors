import {FuzzyColorSpace} from "./fuzzycolorspace.js";
import {initializeGranularSelect, visualizeFCSColor, visualizeFCSCustomColor, saveFCSImage, getISCCBasicPrototypesWithLabels, initImageLoaded, obtainCustomPrototypesLabelsFCS} from "./utils.js";

initImageLoaded("fcs-saved-image-canvas", "fcs-mapped-image", "bandera9_results.png");

let visible_colors = getISCCBasicPrototypesWithLabels().map(color_prototype => color_prototype[0]);
let fcs = new FuzzyColorSpace('#fcs-results-space', "flex-grow:1;");
fcs.buildSphericalFuzzyColorSpaceWithLabels(getISCCBasicPrototypesWithLabels(), visible_colors);

initializeGranularSelect(getISCCBasicPrototypesWithLabels(), "fcs-results-picker", "fcs-results-select");
let selectGranularColor = document.querySelector('#fcs-results-picker');
selectGranularColor.addEventListener("change", visualizeFCSColor, false);

let sourceImageFCS = document.querySelector('#fcs-source-image');
sourceImageFCS.addEventListener("change", saveFCSImage, false);

var rad = document.fcs_form.fcs_to_use;
var prev = null;
for (var i = 0; i < rad.length; i++) {
    rad[i].addEventListener('change', function() {
        if (this.value == "default"){
            let visible_colors = getISCCBasicPrototypesWithLabels().map(color_prototype => color_prototype[0]);
            let fcs = new FuzzyColorSpace('#fcs-results-space', "flex-grow:1;");
            fcs.buildSphericalFuzzyColorSpaceWithLabels(getISCCBasicPrototypesWithLabels(), visible_colors);

            $("#fcs-results-picker").remove();
            initializeGranularSelect(getISCCBasicPrototypesWithLabels(), "fcs-results-picker", "fcs-results-select");
            let selectGranularColor = document.querySelector('#fcs-results-picker');
            selectGranularColor.addEventListener("change", visualizeFCSColor, false);
        }
        else {
            $("#fcs-results-picker").remove();
            initializeGranularSelect(obtainCustomPrototypesLabelsFCS(), "fcs-results-picker", "fcs-results-select");
            let selectGranularColor = document.querySelector('#fcs-results-picker');
            selectGranularColor.addEventListener("change", visualizeFCSCustomColor, false);
        }
    });
}
