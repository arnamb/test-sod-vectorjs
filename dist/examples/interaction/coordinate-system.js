"use strict";
/**
* @ignore true
* @title Interactive Coordinate System
* @description This interactive demonstrates the coordinate system of the Vector.js library.
* @tags []
*/
Object.defineProperty(exports, "__esModule", { value: true });
// import Interactive from 'https://unpkg.com/@interactive-svg/library/dist/Interactive.js';
const index_js_1 = require("../../index.js");
// Initialize the interactive
let interactive = new index_js_1.Interactive(index_js_1.getScriptName());
interactive.window = true;
interactive.originX = interactive.width / 2;
interactive.originY = interactive.height / 2;
// Create three control points
let point = interactive.control(0, 0);
let xAxis = interactive.line(-interactive.width / 2, 0, interactive.width / 2, 0);
let yAxis = interactive.line(0, -interactive.height / 2, 0, interactive.height / 2);
let xPosition = interactive.line(0, -interactive.height / 2, 0, interactive.height / 2);
xPosition.style.stroke = 'cornflowerblue';
xPosition.addDependency(point);
xPosition.update = function () {
    this.x1 = point.x;
    this.x2 = point.x;
};
let yPosition = interactive.line(-interactive.width / 2, 0, interactive.width / 2, 0);
yPosition.style.stroke = 'cornflowerblue';
yPosition.addDependency(point);
yPosition.update = function () {
    this.y1 = point.y;
    this.y2 = point.y;
};
//# sourceMappingURL=coordinate-system.js.map