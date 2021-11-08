"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const element_js_1 = __importDefault(require("./element.js"));
class Script extends element_js_1.default {
    /**
    * Constructs a new sript element.
    */
    constructor() {
        let title = document.createElementNS('http://www.w3.org/2000/svg', 'script');
        super(title);
    }
    // comments inherited from base class
    setAttribute(name, value) {
        this.root.setAttribute(name, value);
        return this;
    }
    // comments inherited from base class
    getAttribute(name) {
        return this.root.getAttribute(name);
    }
}
exports.default = Script;
//# sourceMappingURL=script.js.map