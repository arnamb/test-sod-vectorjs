"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const element_js_1 = __importDefault(require("./element.js"));
/**
* A tspan element is a text element that allows the user to change the style
* or position of the rendered text inside the tspan.
*/
class TSpan extends element_js_1.default {
    /**
    * Constructs a tspan element
    */
    constructor(str) {
        let tspan = document.createElementNS('http://www.w3.org/2000/svg', 'tspan');
        tspan.innerHTML = str;
        super(tspan);
    }
    /**
    * The text contents of this tspan element
    */
    get text() {
        return this.root.innerHTML;
    }
    /**
    * Sets the text contents of this tspan element to the provided string
    */
    set text(str) {
        this.root.innerHTML = str;
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
    /**
    * Creates a child tspan element.
    */
    tspan(str) {
        let tspan = new TSpan(str);
        this.root.appendChild(tspan.root);
        return tspan;
    }
}
exports.default = TSpan;
//# sourceMappingURL=t-span.js.map