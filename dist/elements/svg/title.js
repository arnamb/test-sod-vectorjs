"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const element_js_1 = __importDefault(require("./element.js"));
class Title extends element_js_1.default {
    constructor() {
        let title = document.createElementNS('http://www.w3.org/2000/svg', 'title');
        super(title);
    }
}
exports.default = Title;
//# sourceMappingURL=title.js.map