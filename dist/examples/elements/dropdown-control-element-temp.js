"use strict";
/**
* @title Dropdown Control Element
* @description This interactive demonstrates the dropdown control element.
* @tags [elements, input]
* @ignore true
*/
Object.defineProperty(exports, "__esModule", { value: true });
const index_js_1 = require("../../index.js");
let interactive = new index_js_1.Interactive(index_js_1.getScriptName());
interactive.width = 768;
interactive.height = 500;
interactive.root.style.border = "1px solid grey";
let dropdown = interactive.dropdownControl(20, 60, ["20 px", "50 px", "100 px", "150 px", "200 px"], 0);
let ellipse = interactive.ellipse(400, 250, 100, 100);
ellipse.style.fill = "purple";
ellipse.addDependency(dropdown);
ellipse.update = function () {
    ellipse.ry = +(dropdown.getCurrentSelection().split(" ")[0]);
};
ellipse.update();
//# sourceMappingURL=dropdown-control-element-temp.js.map