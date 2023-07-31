import {FuzzyColorSpace} from "./fuzzycolorspace.js";
import {initializeGranularSelect, visualizeFCSColor, visualizeFCSCustomColor, saveFCSImage,
     getISCCBasicPrototypesWithLabels, obtainCustomPrototypesLabelsFCS,
     resetFCSResult} from "./utils.js";

resetFCSResult()
let resetButton = document.querySelector("#reset-fcs-result");
resetButton.addEventListener("click", resetFCSResult);

var rad = document.fcs_form.fcs_to_use;
for (var i = 0; i < rad.length; i++) {
    rad[i].addEventListener('change', function() {
        if (this.value == "default"){
            let visible_colors = getISCCBasicPrototypesWithLabels().map(color_prototype => color_prototype[0]);
            let fcs = new FuzzyColorSpace('#fcs-results-space', "flex-grow:1;");
            fcs.buildSphericalFuzzyColorSpaceWithLabels(getISCCBasicPrototypesWithLabels(), visible_colors);

            $("#fcs-results-picker").remove();
            initializeGranularSelect(getISCCBasicPrototypesWithLabels(), "fcs-results-picker", "fcs-results-select", -1);
            $("#fcs-results-picker").on( "change", visualizeFCSColor);
            $("#fcs-results-picker").trigger("change");
        }
        else {
            $("#fcs-results-picker").remove();
            initializeGranularSelect(obtainCustomPrototypesLabelsFCS(), "fcs-results-picker", "fcs-results-select", -1);
            $("#fcs-results-picker").on( "change", visualizeFCSCustomColor);
            $("#fcs-results-picker").trigger("change");
        }
    });
}
