"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const rectangle_js_1 = __importDefault(require("../svg/rectangle.js"));
const text_js_1 = __importDefault(require("../svg/text.js"));
const input_js_1 = __importDefault(require("./input.js"));
/**
* A checkbox with an label. The can be checked, unchecked, and related to other
* elements.
*/
class CheckBox extends input_js_1.default {
    /**
    * Constructs a control at the position (x,y)
    */
    constructor(x, y, text, value) {
        super();
        /**
        * The state of the checkbox
        */
        this._value = false;
        this.root.setAttribute('transform', `translate(${x},${y})`);
        this.box = new rectangle_js_1.default(-6.5, -6.5, 13, 13);
        this.box.root.setAttribute('rx', '2px');
        this.label = new text_js_1.default(18, 1, text);
        this.label.root.setAttribute('alignment-baseline', 'middle');
        this.root.appendChild(this.box.root);
        this.root.appendChild(this.label.root);
        let temp = this;
        this.value = value;
        this.box.root.onmousedown = function () {
            temp.toggle();
        };
        this.addDependency(this.box);
    }
    /**
    * Sets the value to true and visually checks the box.
    */
    set value(value) {
        if (this._value = value) {
            this.box.style.fill = '#404040';
        }
        else {
            this.box.style.fill = '';
        }
        this.onchange();
    }
    /**
    * Returns true if the box is checked, false if it is not.
    */
    get value() {
        return this._value;
    }
    /**
    * Converts the current true/false state of the checkbox to a zero or one.
    */
    number() {
        return this.value ? 1 : 0;
    }
    /**
    * Toggles the state of this check box.
    */
    toggle() {
        this.value = !this.value;
    }
}
exports.default = CheckBox;
//# sourceMappingURL=check-box.js.map