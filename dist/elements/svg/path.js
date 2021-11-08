"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const shape_js_1 = __importDefault(require("./shape.js"));
const circle_js_1 = __importDefault(require("./circle.js"));
const ellipse_js_1 = __importDefault(require("./ellipse.js"));
const line_js_1 = __importDefault(require("./line.js"));
const rectangle_js_1 = __importDefault(require("./rectangle.js"));
/**
* A path element allows for the creation of complicated shapes and curves.
*/
class Path extends shape_js_1.default {
    /**
    * Construct a new path element with a string of commands.
    */
    constructor(d) {
        // TODO: see comment above the type of the root
        let path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        path.setAttribute('d', d);
        super(path);
    }
    /**
    * Returns the d attribute
    */
    get d() {
        return this.root.getAttribute('d');
    }
    /**
    * Sets the d attribute
    */
    set d(d) {
        this.root.setAttribute('d', d);
    }
    /**
    * Returns the path representation of the provided shape.
    */
    static getPath(shape) {
        throw Error('Not Implemented');
        if (this instanceof circle_js_1.default) {
            throw Error('Not Implemented');
        }
        else if (this instanceof ellipse_js_1.default) {
            throw Error('Not Implemented');
        }
        else if (this instanceof line_js_1.default) {
            throw Error('Not Implemented');
        }
        else if (this instanceof Path) {
            throw Error('Not Implemented');
        }
        else if (this instanceof rectangle_js_1.default) {
            throw Error('Not Implemented');
        }
    }
}
exports.default = Path;
//# sourceMappingURL=path.js.map