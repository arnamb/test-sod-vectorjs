"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const use_js_1 = __importDefault(require("../svg/use.js"));
class Icon extends use_js_1.default {
    /**
    * Construct an icon element at the position (x,y) with the provided dimensions
    */
    constructor(x, y, width, height) {
        super(x, y, width, height);
        this.classList.add('icon');
    }
}
exports.default = Icon;
//# sourceMappingURL=icon.js.map