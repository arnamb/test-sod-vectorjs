"use strict";
/**
*
*/
Object.defineProperty(exports, "__esModule", { value: true });
const index_js_1 = require("../../index.js");
/**
* Creates a graph of the sine function within the element with the provided id.
*/
function main(id) {
    let interactive = new index_js_1.Interactive(id);
    interactive.width = 700;
    interactive.height = 400;
    // interactive.rectangle(0,0,interactive.width,interactive.height);
    let plot = interactive.plot(Math.sin, {
        title: "Sine Function",
        originX: 0,
        originY: 150,
        scaleX: 300 / Math.PI,
        scaleY: 300 / Math.PI,
        zoomable: false,
        grid: true
    });
}
exports.default = main;
//# sourceMappingURL=sine.js.map