import {buildFCS, addPrototypeColorFromPicker, resetToDefaultFCS, openModalFCS} from "./utils.js";

resetToDefaultFCS()

let clean_protypes_button = document.querySelector("#intro-clean-prototypes");
clean_protypes_button.addEventListener("click", resetToDefaultFCS);

let intro_prototypes_picker = document.querySelector('#color-picker-fcs-modal');
intro_prototypes_picker.addEventListener("change", addPrototypeColorFromPicker, false);

let open_modal_button = document.querySelector("#intro-build-fcs");
open_modal_button.addEventListener("click", openModalFCS);

var modal_ok = document.getElementById("#intro-modal-ok");
modal_ok.addEventListener("click", buildFCS);

var modal = document.getElementById("modal-fcs");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}