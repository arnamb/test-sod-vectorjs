"use strict";
/**
* @title Control Circle Element
* @description This interactive demonstrates a draggable circle.
* @tags [elements, input]
*/
Object.defineProperty(exports, "__esModule", { value: true });
const index_js_1 = require("../../index.js");
let interactive = new index_js_1.Interactive(index_js_1.getScriptName());
interactive.width = 768;
interactive.height = 150;
interactive.root.style.border = "1px solid grey";
let control = interactive.controlCircle(100, 75);
//# sourceMappingURL=control-circle-element.js.map