"use strict";
/**
* @title Button Element
* @description The button element is a user clickable button with some text inside of it.
* @tags [elements, input]
*/
Object.defineProperty(exports, "__esModule", { value: true });
const index_js_1 = require("../../index.js");
let interactive = new index_js_1.Interactive(index_js_1.getScriptName());
interactive.width = 768;
interactive.height = 150;
interactive.root.style.border = "1px solid grey";
let button = interactive.button(100, 75, "My Button");
// interactive.button( 250, 75, "a");
// interactive.button( 400, 75, "abcdefghijklmnopqrstuvwxyz");
//# sourceMappingURL=button-element.js.map