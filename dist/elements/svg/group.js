"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const element_js_1 = __importDefault(require("./element.js"));
const a_js_1 = __importDefault(require("./a.js"));
const circle_js_1 = __importDefault(require("./circle.js"));
const clip_path_js_1 = __importDefault(require("./clip-path.js"));
const definitions_js_1 = __importDefault(require("./definitions.js"));
const ellipse_js_1 = __importDefault(require("./ellipse.js"));
const line_js_1 = __importDefault(require("./line.js"));
const path_js_1 = __importDefault(require("./path.js"));
const polygon_js_1 = __importDefault(require("./polygon.js"));
const rectangle_js_1 = __importDefault(require("./rectangle.js"));
const symbol_js_1 = __importDefault(require("./symbol.js"));
const svg_js_1 = __importDefault(require("./svg.js"));
const text_js_1 = __importDefault(require("./text.js"));
const title_js_1 = __importDefault(require("./title.js"));
const use_js_1 = __importDefault(require("./use.js"));
const description_js_1 = __importDefault(require("./description.js"));
const meta_data_js_1 = __importDefault(require("./meta-data.js"));
/**
* A group is a structural element that allows for elements to be grouped
* together and have styles and transformations applied to the elements in the
* group.
*/
class Group extends element_js_1.default {
    /**
    * Constructs a rectangle element at the position (x,y)
    */
    constructor() {
        let group = document.createElementNS('http://www.w3.org/2000/svg', 'g');
        super(group);
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
    // Descriptive methods
    description() {
        return this.appendChild(new description_js_1.default());
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
        return this.appendChild(new Group());
    }
    svg(x, y, width, height) {
        return this.appendChild(new svg_js_1.default(x, y, width, height));
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
    /**
    * Constructs and appends a text element within this element.
    */
    text(x, y, str) {
        return this.appendChild(new text_js_1.default(x, y, str));
    }
    /**
    * Constructs and appends an 'a' (link) within this element.
    */
    a(href) {
        return this.appendChild(new a_js_1.default(href));
    }
    /**
    * Constructs and appends a clipPath within this element
    */
    clipPath() {
        return this.appendChild(new clip_path_js_1.default());
    }
}
exports.default = Group;
//# sourceMappingURL=group.js.map