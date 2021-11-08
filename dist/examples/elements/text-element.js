"use strict";
/**
* @title Text Element
* @description This interactive demonstrates the text element.
* @tags [elements]
*/
Object.defineProperty(exports, "__esModule", { value: true });
const index_js_1 = require("../../index.js");
let interactive = new index_js_1.Interactive(index_js_1.getScriptName());
interactive.width = 768;
interactive.height = 150;
interactive.root.style.border = "1px solid grey";
let line = interactive.text(50, 75, "My Text");
//# sourceMappingURL=text-element.js.map