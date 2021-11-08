"use strict";
/**
* @title Dependency Relation
* @description This interactive demonstrates how two elements can be made dependent on eachother.
* @tags []
* @ignore true
*/
Object.defineProperty(exports, "__esModule", { value: true });
const index_js_1 = require("../../index.js");
let interactive = new index_js_1.Interactive(index_js_1.getScriptName());
interactive.width = 768;
interactive.height = 200;
interactive.border = true;
let control1 = interactive.control(100, 50);
let control2 = interactive.control(200, 150);
control2.addDependency(control1);
control2.update = function () {
    this.x += control1.dx;
};
//# sourceMappingURL=dependency-function.js.map