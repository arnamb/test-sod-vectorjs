"use strict";
/**
* @ignore true
*/
Object.defineProperty(exports, "__esModule", { value: true });
const index_js_1 = require("../../index.js");
// Initialize the interactive
let interactive = new index_js_1.Interactive(index_js_1.getScriptName());
interactive.width = 600;
interactive.height = 300;
interactive.border = true;
// Create a new graph object
let s = 100;
let u = 300;
let f = (x) => { return 1 / (s * Math.sqrt(2 * Math.PI)) * Math.pow(Math.E, -(x - u) * (x - u) / (2 * s * s)); };
let graph = interactive.plot(f, {
    scaleX: 1,
    scaleY: 30000
});
//# sourceMappingURL=normal-distribution.js.map