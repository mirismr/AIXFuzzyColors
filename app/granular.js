import {FuzzyColorSpace} from "./fuzzycolorspace.js";
import {addGranularFromPicker, buildGranule, cleanGranule} from "./utils.js";

let fcs_support = new FuzzyColorSpace('#granular-main-support', "flex-grow:5;");
fcs_support.addSphericalColor({r:154.0, g:78.0, b:174.0});
fcs_support.addSphericalColor({r:194.0, g:81.0, b:225.0});
fcs_support.addSphericalColor({r:170.0, g:81.0, b:225.0});
fcs_support.addPoint2Evaluate(170, 80, 130);

let simple_picker_negatives = document.querySelector('#granular-picker-prototypes');
simple_picker_negatives.addEventListener("change", addGranularFromPicker, false);

let a_parameter = document.querySelector('#granular-a-parameter');
a_parameter.addEventListener("change", buildGranule, false);

let b_parameter = document.querySelector('#granular-b-parameter');
b_parameter.addEventListener("change", buildGranule, false);


let build_button = document.querySelector('#granule-build-button');
build_button.addEventListener("click", buildGranule);

let clean_button = document.querySelector("#granule-clean-button");
clean_button.addEventListener("click", cleanGranule);

let picker2evaluate = document.querySelector('#granular-point-to-evaluate');
picker2evaluate.addEventListener("change", buildGranule, false);
