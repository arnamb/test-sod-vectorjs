"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const group_js_1 = __importDefault(require("../svg/group.js"));
/**
* An object that takes in user input in the form of user events.
*/
class Input extends group_js_1.default {
    /**
    * Constructs a new input group.
    */
    constructor() {
        super();
        // set the default behavior of the onchange function
        let input = this;
        input._onchange = function () {
            input.updateDependents();
        };
    }
    /**
    * This function is called whenever the state of an input element changes. The
    * default behavior of this function is to update the dependents of this
    * element. WARNING: changing this function can have unintented side effects.
    */
    set onchange(func) {
        this._onchange = func;
    }
    get onchange() {
        return this._onchange;
    }
}
exports.default = Input;
//# sourceMappingURL=input.js.map