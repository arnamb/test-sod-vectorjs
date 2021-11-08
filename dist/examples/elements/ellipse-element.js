"use strict";
/**
* @title Ellipse Element
* @description This interactive demonstrates the ellipse element.
* @tags [elements]
*/
Object.defineProperty(exports, "__esModule", { value: true });
const index_js_1 = require("../../index.js");
let interactive = new index_js_1.Interactive(index_js_1.getScriptName());
interactive.width = 768;
interactive.height = 150;
interactive.root.style.border = "1px solid grey";
let ellipse = interactive.ellipse(100, 75, 80, 40);
ellipse.classList.add('default');
//# sourceMappingURL=ellipse-element.js.map