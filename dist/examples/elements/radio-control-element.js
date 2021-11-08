"use strict";
/**
* @title Radio Control Element
* @description This interactive demonstrates the radio control element.
* @tags [elements, input]
*/
Object.defineProperty(exports, "__esModule", { value: true });
const index_js_1 = require("../../index.js");
let interactive = new index_js_1.Interactive(index_js_1.getScriptName());
interactive.width = 768;
interactive.height = 150;
interactive.root.style.border = "1px solid grey";
let radio = interactive.radioControl(100, 50, ["red", "green", "blue"]);
// let ellipse = interactive.ellipse(400,75,50,50);
// ellipse.addDependency(radio);
// ellipse.update = function(){
//     ellipse.style.fill = radio.getCurrentValue();
// }
// ellipse.update();
//# sourceMappingURL=radio-control-element.js.map