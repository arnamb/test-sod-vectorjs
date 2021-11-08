"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const element_js_1 = __importDefault(require("./element.js"));
const circle_js_1 = __importDefault(require("./circle.js"));
const definitions_js_1 = __importDefault(require("./definitions.js"));
const definitions_js_2 = __importDefault(require("./definitions.js"));
const ellipse_js_1 = __importDefault(require("./ellipse.js"));
const group_js_1 = __importDefault(require("./group.js"));
const line_js_1 = __importDefault(require("./line.js"));
const meta_data_js_1 = __importDefault(require("./meta-data.js"));
const path_js_1 = __importDefault(require("./path.js"));
const polygon_js_1 = __importDefault(require("./polygon.js"));
const rectangle_js_1 = __importDefault(require("./rectangle.js"));
const symbol_js_1 = __importDefault(require("./symbol.js"));
const svg_js_1 = __importDefault(require("./svg.js"));
const text_js_1 = __importDefault(require("./text.js"));
const title_js_1 = __importDefault(require("./title.js"));
const use_js_1 = __importDefault(require("./use.js"));
/**
* A marker is a shape that can be repeatably drawn on a shape.
*/
class Marker extends element_js_1.default {
    /**
    * Constructs a rectangle element at the position (x,y)
    */
    constructor(refX, refY, width, height) {
        let element = document.createElementNS('http://www.w3.org/2000/svg', 'marker');
        element.setAttributeNS(null, 'refX', refX.toString());
        element.setAttributeNS(null, 'refY', refY.toString());
        element.setAttributeNS(null, 'markerWidth', width.toString());
        element.setAttributeNS(null, 'markerHeight', height.toString());
        super(element);
    }
    // comment inherited from base class
    setAttribute(name, value) {
        this.root.setAttribute(name, value);
        return this;
    }
    // comment inherited from base class
    getAttribute(name) {
        return this.root.getAttribute(name);
    }
    get viewBox() {
        return this.getAttribute('viewBox');
    }
    set viewBox(value) {
        this.setAttribute('viewBox', value);
    }
    get refX() {
        return this.root.refX.baseVal.value;
    }
    set refX(value) {
        this.root.refX.baseVal.value = value;
    }
    get refY() {
        return this.root.refY.baseVal.value;
    }
    set refY(value) {
        this.root.refY.baseVal.value = value;
    }
    get width() {
        return this.root.markerWidth.baseVal.value;
    }
    set width(value) {
        this.root.markerWidth.baseVal.value = value;
    }
    get height() {
        return this.root.markerHeight.baseVal.value;
    }
    set height(value) {
        this.root.markerHeight.baseVal.value = value;
    }
    // Descriptive methods
    description() {
        return this.appendChild(new definitions_js_2.default());
    }
    metadata() {
        return this.appendChild(new meta_data_js_1.default());
    }
    title() {
        return this.appendChild(new title_js_1.default());
    }
    // Structural methods
    defs() {
        return this.appendChild(new definitions_js_1.default());
    }
    group() {
        return this.appendChild(new group_js_1.default());
    }
    svg() {
        return this.appendChild(new svg_js_1.default());
    }
    symbol() {
        return this.appendChild(new symbol_js_1.default());
    }
    use(x, y, width, height) {
        return this.appendChild(new use_js_1.default(x, y, width, height));
    }
    // Shape methods
    circle(cx, cy, r) {
        return this.appendChild(new circle_js_1.default(cx, cy, r));
    }
    ellipse(cx, cy, rx, ry) {
        return this.appendChild(new ellipse_js_1.default(cx, cy, rx, ry));
    }
    line(x1, y1, x2, y2) {
        return this.appendChild(new line_js_1.default(x1, y1, x2, y2));
    }
    path(d) {
        return this.appendChild(new path_js_1.default(d));
    }
    polygon(points) {
        return this.appendChild(new polygon_js_1.default(points));
    }
    rectangle(x, y, width, height) {
        return this.appendChild(new rectangle_js_1.default(x, y, width, height));
    }
    // other methods
    text(x, y, str) {
        return this.appendChild(new text_js_1.default(x, y, str));
    }
}
exports.default = Marker;
//# sourceMappingURL=marker.js.map