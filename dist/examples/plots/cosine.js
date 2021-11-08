"use strict";
/**
* @title Cosine Plot
* @description This interactive demonstrates the plot element
* @tags [elements]
* @ignore true
*/
Object.defineProperty(exports, "__esModule", { value: true });
const index_js_1 = require("../../index.js");
// Initialize the interactive
let interactive = new index_js_1.Interactive(index_js_1.getScriptName());
interactive.width = 600;
interactive.height = 300;
// Create a new graph object
let scale = 300 / Math.PI;
interactive.plot(Math.cos, {
    originX: 0,
    originY: 150,
    scaleX: scale,
    scaleY: scale,
    zoomable: false,
    controls: false
});
//# sourceMappingURL=cosine.js.map