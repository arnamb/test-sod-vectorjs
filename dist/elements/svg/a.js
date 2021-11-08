"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const element_js_1 = __importDefault(require("./element.js"));
/**
* A hyper link element.
*/
class A extends element_js_1.default {
    /**
    * Constructs a link element with the provided href.
    */
    constructor(href) {
        let root = document.createElementNS('http://www.w3.org/2000/svg', 'a');
        root.setAttributeNS(null, 'href', href);
        super(root);
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
}
exports.default = A;
//# sourceMappingURL=a.js.map