"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const element_js_1 = __importDefault(require("./element.js"));
class Description extends element_js_1.default {
    constructor() {
        let desc = document.createElementNS('http://www.w3.org/2000/svg', 'desc');
        super(desc);
    }
}
exports.default = Description;
//# sourceMappingURL=description.js.map