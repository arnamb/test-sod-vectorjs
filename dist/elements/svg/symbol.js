"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const element_js_1 = __importDefault(require("./element.js"));
/**
* A symbol is a reusable graphic.
*/
class Symbol extends element_js_1.default {
    constructor() {
        let symbol = document.createElementNS('http://www.w3.org/2000/svg', 'symbol');
        super(symbol);
    }
    // geometric properties
    get x() {
        throw new Error('Not Implemented');
    }
    set x(value) {
        throw new Error('Not Implemented');
    }
    get y() {
        throw new Error('Not Implemented');
    }
    set y(value) {
        throw new Error('Not Implemented');
    }
    get width() {
        throw new Error('Not Implemented');
    }
    set width(value) {
        throw new Error('Not Implemented');
    }
    get height() {
        throw new Error('Not Implemented');
    }
    set height(value) {
        throw new Error('Not Implemented');
    }
    // attributes
    get preserveAspectRatio() {
        throw new Error('Not Implemented');
    }
    set preserveAspectRatio(value) {
        throw new Error('Not Implemented');
    }
    get viewBox() {
        return this.root.getAttribute('viewBox');
    }
    set viewBox(value) {
        this.root.setAttributeNS(null, 'viewBox', value);
    }
    get refX() {
        throw new Error('Not Implemented');
    }
    set refX(value) {
        throw new Error('Not Implemented');
    }
    get refY() {
        throw new Error('Not Implemented');
    }
    set refY(value) {
        throw new Error('Not Implemented');
    }
}
exports.default = Symbol;
//# sourceMappingURL=symbol.js.map