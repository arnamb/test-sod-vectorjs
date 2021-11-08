"use strict";
/**
* @title Rectangle Element
* @description This interactive demonstrates the rectangle element.
* @tags [elements]
*/
Object.defineProperty(exports, "__esModule", { value: true });
const index_js_1 = require("../../index.js");
let interactive = new index_js_1.Interactive(index_js_1.getScriptName());
interactive.width = 768;
interactive.height = 150;
interactive.root.style.border = "1px solid grey";
let rectangle = interactive.rectangle(50, 50, 100, 50);
rectangle.classList.add('default');
//# sourceMappingURL=rectangle-element.js.map