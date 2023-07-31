import {FuzzyColorSpace} from "./fuzzycolorspace.js";
import {initializeGranularSelect, visualizeGranularColor, visualizeCustomGranularColor, obtainCurrentGranularPrototypes,
     getGranularPrototypes, saveImage, resetGranularFCSResult} from "./utils.js";


resetGranularFCSResult()
let resetButton = document.querySelector("#reset-granular-fcs-result");
resetButton.addEventListener("click", resetGranularFCSResult);


var rad = document.granular_fcs_form.granular_fcs_to_use;
for (var i = 0; i < rad.length; i++) {
    rad[i].addEventListener('change', function() {
        if (this.value == "default"){
            let visible_colors = getGranularPrototypes().map(color_prototype => color_prototype[0]);
            let fcs = new FuzzyColorSpace('#granular-results-space', "flex-grow:1;");
            fcs.buildGranularSphericalFuzzyColorSpace(getGranularPrototypes(), visible_colors);

            $("#granular-results-picker").remove();
            initializeGranularSelect(getGranularPrototypes(), "granular-results-picker", "granular-results-select", -1);
            $('#granular-results-picker').on( "change", visualizeGranularColor);
            $('#granular-results-picker').trigger("change");
        }
        else {
            let visible_colors = obtainCurrentGranularPrototypes().map(color_prototype => color_prototype[0]);
            let fcs = new FuzzyColorSpace('#granular-results-space', "flex-grow:1;");
            fcs.buildGranularSphericalFuzzyColorSpace(obtainCurrentGranularPrototypes(), visible_colors);

            $("#granular-results-picker").remove();
            initializeGranularSelect(obtainCurrentGranularPrototypes(), "granular-results-picker", "granular-results-select", -1);
            $('#granular-results-picker').on( "change", visualizeCustomGranularColor);
            $('#granular-results-picker').trigger("change");
        }
    });
}