"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const element_js_1 = __importDefault(require("./element.js"));
class Definitions extends element_js_1.default {
    constructor() {
        let defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
        super(defs);
    }
}
exports.default = Definitions;
//# sourceMappingURL=definitions.js.map