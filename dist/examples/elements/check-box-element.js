"use strict";
/**
* @title Checkbox Element
* @description This interactive demonstrates the checkbox element.
* @tags [elements, input]
*/
Object.defineProperty(exports, "__esModule", { value: true });
const index_js_1 = require("../../index.js");
let interactive = new index_js_1.Interactive(index_js_1.getScriptName());
interactive.width = 768;
interactive.height = 150;
interactive.root.style.border = "1px solid grey";
let checkBox = interactive.checkBox(100, 75, "My Checkbox", false);
//# sourceMappingURL=check-box-element.js.map