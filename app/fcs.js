import {FuzzyColorSpace} from "./fuzzycolorspace.js";
import {buildFCS, addPrototypeColorFromPicker, cleanPrototypesList, getISCCBasicPrototypes} from "./utils.js";

let fcs = new FuzzyColorSpace('#fuzzycolor-intro-main', "flex-grow:1;");
fcs.buildSphericalFuzzyColorSpace(getISCCBasicPrototypes());

let intro_prototypes_picker = document.querySelector('#fuzzycolor-intro-prototypes-picker');
intro_prototypes_picker.addEventListener("change", addPrototypeColorFromPicker, false);

let build_fcs_button = document.querySelector('#intro-build-fcs');
build_fcs_button.addEventListener("click", buildFCS);

let clean_protypes_button = document.querySelector("#intro-clean-prototypes");
clean_protypes_button.addEventListener("click", cleanPrototypesList);
