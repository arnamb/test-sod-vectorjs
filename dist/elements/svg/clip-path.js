"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const circle_js_1 = __importDefault(require("./circle.js"));
const ellipse_js_1 = __importDefault(require("./ellipse.js"));
const line_js_1 = __importDefault(require("./line.js"));
const path_js_1 = __importDefault(require("./path.js"));
const polygon_js_1 = __importDefault(require("./polygon.js"));
const rectangle_js_1 = __importDefault(require("./rectangle.js"));
const element_js_1 = __importDefault(require("./element.js"));
const description_js_1 = __importDefault(require("./description.js"));
const meta_data_js_1 = __importDefault(require("./meta-data.js"));
const title_js_1 = __importDefault(require("./title.js"));
class ClipPath extends element_js_1.default {
    constructor() {
        let clipPath = document.createElementNS('http://www.w3.org/2000/svg', 'clipPath');
        super(clipPath);
    }
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
    description() {
        return this.appendChild(new description_js_1.default());
    }
    metadata() {
        return this.appendChild(new meta_data_js_1.default());
    }
    title() {
        return this.appendChild(new title_js_1.default());
    }
}
exports.default = ClipPath;
//# sourceMappingURL=clip-path.js.map