import {FuzzyColorSpace} from "./fuzzycolorspace.js";
import {simpleParametersChange} from "./utils.js";

let fcs_support = new FuzzyColorSpace('#simple-main-support', "flex-grow:5;");
fcs_support.addSphericalColor({r:154.0, g:78.0, b:174.0});
fcs_support.addPoint2Evaluate(205, 152, 221);

let simple_picker = document.querySelector('#simple-picker');
simple_picker.addEventListener("change", simpleParametersChange, false);

let a_parameter = document.querySelector('#a-parameter');
a_parameter.addEventListener("change", simpleParametersChange, false);

let b_parameter = document.querySelector('#b-parameter');
b_parameter.addEventListener("change", simpleParametersChange, false);

let picker2evaluate = document.querySelector('#simple-point-to-evaluate');
picker2evaluate.addEventListener("change", simpleParametersChange, false);


// construir un granulo
// limitar a < b siempre en el simple
// añadir que se puedan seleccionar los negativos para este simple, calcula el a y b con los negativos
// y que se puedan modificar anyway. Poner solo los prototipos de los negativos para no emborronar el cubo
// poner ejemplos con valores de los parámetros que se pueden tocar y escribir en el texto

// construir un color granular
// en el granular que se pueda montar el granular con un conjunto de positivos y otro de negativos.
// cada granulo tiene de positivo su prototipo y como negativos el conjunto de positivos + negativos.

// en el siguiente (fuzzy color space sin granulos) se explica que se usan como negativos los prototipos
//del resto de colores

// en el siguiente fuzzy color space granular ya por defecto alguno con alguna imagen por defecto que salga bien

