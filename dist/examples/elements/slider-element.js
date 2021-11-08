"use strict";
/**
* @title Slider Element
* @description This interactive demonstrates the slider element.
* @tags [elements, input]
*/
Object.defineProperty(exports, "__esModule", { value: true });
const index_js_1 = require("../../index.js");
// Initialize the interactive
let interactive = new index_js_1.Interactive(index_js_1.getScriptName());
interactive.width = 768;
interactive.height = 150;
interactive.root.style.border = "1px solid grey";
let slider = interactive.slider(100, 75, {
    width: 150,
});
//# sourceMappingURL=slider-element.js.map