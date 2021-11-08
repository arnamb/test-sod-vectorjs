"use strict";
/**
* @title Path Element
* @description This interactive demonstrates the path element.
* @tags [elements]
*/
Object.defineProperty(exports, "__esModule", { value: true });
const index_js_1 = require("../../index.js");
let interactive = new index_js_1.Interactive(index_js_1.getScriptName());
interactive.width = 768;
interactive.height = 150;
interactive.root.style.border = "1px solid grey";
let path = interactive.path("M 50 50 Q 100 150 150 50");
path.classList.add('default');
//# sourceMappingURL=path-element.js.map