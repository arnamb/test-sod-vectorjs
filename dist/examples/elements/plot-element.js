"use strict";
/**
* @title Plot Element
* @description This interactive demonstrates the plot element
* @tags [elements]
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
    let scale = 300 / Math.PI;
    interactive.plot(Math.sin, {
        title: "Sine Function",
        originX: 0,
        originY: 150,
        scaleX: scale,
        scaleY: scale,
    });
}
exports.default = main;
//# sourceMappingURL=plot-element.js.map