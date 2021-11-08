"use strict";
/**
* @title Control Element
* @description This interactive demonstrates a draggable point.
* @tags [elements, input]
*/
Object.defineProperty(exports, "__esModule", { value: true });
const index_js_1 = require("../../index.js");
let interactive = new index_js_1.Interactive(index_js_1.getScriptName());
interactive.width = 768;
interactive.height = 150;
interactive.root.style.border = "1px solid grey";
let control = interactive.control(100, 75);
//# sourceMappingURL=control-element.js.map