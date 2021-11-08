"use strict";
/**
* @title Dropdown Control Element
* @description This interactive demonstrates the dropdown control element.
* @tags [elements, input]
*/
Object.defineProperty(exports, "__esModule", { value: true });
const index_js_1 = require("../../index.js");
let interactive = new index_js_1.Interactive(index_js_1.getScriptName());
interactive.width = 768;
interactive.height = 150;
interactive.root.style.border = "1px solid grey";
interactive.dropdownControl(20, 36, ["red", "green", "blue"], 0);
//# sourceMappingURL=dropdown-control-element.js.map