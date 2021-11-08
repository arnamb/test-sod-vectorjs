"use strict";
/**
* @title Plot Element
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
let functionText = 'Math.cos';
// Create a new graph object
let scaleX = 300 / Math.PI;
let scaleY = 300 / Math.PI;
let plot = interactive.plot(Math.cos, {
    originX: 0,
    originY: 150,
    scaleX: scaleX,
    scaleY: scaleY,
    zoomable: true,
    controls: true
});
// Function input
let functionInput = document.createElement('input');
functionInput.type = 'text';
functionInput.name = 'function';
functionInput.value = functionText;
functionInput.classList.add('input');
functionInput.onchange = function () {
    plot.function = eval(functionInput.value);
    plot.draw();
};
interactive.container.parentElement.insertBefore(functionInput, interactive.container);
//# sourceMappingURL=plot-element-experimental.js.map