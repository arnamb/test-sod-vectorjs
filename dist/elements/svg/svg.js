"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const element_js_1 = __importDefault(require("./element.js"));
const circle_js_1 = __importDefault(require("./circle.js"));
const clip_path_js_1 = __importDefault(require("./clip-path.js"));
const definitions_js_1 = __importDefault(require("./definitions.js"));
const description_js_1 = __importDefault(require("./description.js"));
const ellipse_js_1 = __importDefault(require("./ellipse.js"));
const group_js_1 = __importDefault(require("./group.js"));
const line_js_1 = __importDefault(require("./line.js"));
const marker_js_1 = __importDefault(require("./marker.js"));
const meta_data_js_1 = __importDefault(require("./meta-data.js"));
const path_js_1 = __importDefault(require("./path.js"));
const polygon_js_1 = __importDefault(require("./polygon.js"));
const rectangle_js_1 = __importDefault(require("./rectangle.js"));
const symbol_js_1 = __importDefault(require("./symbol.js"));
const text_js_1 = __importDefault(require("./text.js"));
const title_js_1 = __importDefault(require("./title.js"));
const use_js_1 = __importDefault(require("./use.js"));
const a_js_1 = __importDefault(require("./a.js"));
const script_js_1 = __importDefault(require("./script.js"));
/**
* This class represents a SVG element. There are four geometric properties x, y,
* width, and height. The (x,y) properties only affect nested SVG elements.
*/
class SVG extends element_js_1.default {
    /**
    * Constructs a svg element.
    */
    constructor(x, y, width, height) {
        let svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
        if (x) {
            svg.setAttributeNS(null, 'x', x.toString());
        }
        if (y) {
            svg.setAttributeNS(null, 'y', y.toString());
        }
        if (width) {
            svg.setAttributeNS(null, 'width', width.toString());
        }
        if (height) {
            svg.setAttributeNS(null, 'height', height.toString());
        }
        super(svg);
    }
    /**
    * Constructs and returns a SVG object within the DOM.  If the provided
    * argument is an HTMLElement appends the interactive within that element. If
    * the provided a value is a string, appends the interactive within the HTML
    * element with the corresponding ID. If no element is found throws an error.
    */
    static SVG(idOrElement, x, y, width, height) {
        // get the container element
        let container;
        if (typeof idOrElement == "string") {
            container = document.getElementById(idOrElement);
            if (container === null || container === undefined) {
                throw new Error(`There is no HTML element with the id: ${idOrElement}`);
            }
        }
        else {
            container = idOrElement;
        }
        // construct and append the svg
        let svg = new SVG(x, y, width, height);
        container.appendChild(svg.root);
        return svg;
    }
    /**
    * Return the width of this svg element.
    */
    get width() {
        // return this.root.width.baseVal.value;
        return parseInt(this.root.getAttribute('width'));
    }
    /**
    * Set the width of this svg element.
    */
    set width(value) {
        // this.root.width.baseVal.value = value;
        this.root.setAttributeNS(null, 'width', value.toString());
    }
    /**
    * Returns the height of this svg element.
    */
    get height() {
        // return this.root.height.baseVal.value;
        return parseInt(this.root.getAttribute('height'));
    }
    /**
    * Sets the height of this svg element to the provided value.
    */
    set height(value) {
        // this.root.height.baseVal.value = value;
        this.root.setAttributeNS(null, 'height', value.toString());
    }
    get x() {
        return this.root.x.baseVal.value;
    }
    set x(value) {
        this.root.x.baseVal.value = value;
    }
    get y() {
        return this.root.y.baseVal.value;
    }
    set y(value) {
        this.root.y.baseVal.value = value;
    }
    get viewBox() {
        return this.root.getAttribute('viewBox');
    }
    set viewBox(value) {
        this.root.setAttribute('viewBox', value);
    }
    setViewBox(x, y, width, height) {
        this.viewBox = `${x} ${y} ${width} ${height}`;
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
    // descriptive elements
    description() {
        return this.appendChild(new description_js_1.default());
    }
    metadata() {
        return this.appendChild(new meta_data_js_1.default());
    }
    title() {
        return this.appendChild(new title_js_1.default());
    }
    // shape elements
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
    // structural elements
    defs() {
        return this.appendChild(new definitions_js_1.default());
    }
    group() {
        return this.appendChild(new group_js_1.default());
    }
    svg(x, y, width, height) {
        return this.appendChild(new SVG(x, y, width, height));
    }
    symbol() {
        return this.appendChild(new symbol_js_1.default());
    }
    use(x, y, width, height) {
        return this.appendChild(new use_js_1.default(x, y, width, height));
    }
    // typography elements
    text(x, y, str) {
        return this.appendChild(new text_js_1.default(x, y, str));
    }
    // other elements
    /**
    * Constructs and appends an 'a' (link) element within this element.
    */
    a(href) {
        return this.appendChild(new a_js_1.default(href));
    }
    /**
    * Constructs and appends a 'clipPath' element within this element.
    */
    clipPath() {
        return this.appendChild(new clip_path_js_1.default());
    }
    /**
    * Constructs and appends a 'marker' element within this element.
    */
    marker(refX, refY, width, height) {
        return this.appendChild(new marker_js_1.default(refX, refY, width, height));
    }
    /**
    * Constructs and appends a 'script' element within this element.
    */
    script() {
        return this.appendChild(new script_js_1.default());
    }
}
exports.default = SVG;
//# sourceMappingURL=svg.js.map