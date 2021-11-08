"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const shape_js_1 = __importDefault(require("./shape.js"));
/**
* A polygon is a closed shape defined by a series of points.
*/
class Polygon extends shape_js_1.default {
    constructor(points) {
        let polygon = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
        polygon.setAttributeNS(null, 'points', points);
        super(polygon);
    }
    get points() {
        return this.root.getAttribute('points');
    }
}
exports.default = Polygon;
//# sourceMappingURL=polygon.js.map