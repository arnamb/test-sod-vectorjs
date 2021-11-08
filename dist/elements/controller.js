"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dependency_graph_js_1 = __importDefault(require("../model/dependency-graph.js"));
/**
* This controller manages the dependencies between elements.
*/
class Controller {
    /**
    * Constructs a controller
    */
    constructor() {
        this.dependencyGraph = new dependency_graph_js_1.default();
        this.elements = new Map();
    }
    /**
    * Clears all the elements from this controller.
    */
    clear() {
        this.dependencyGraph = new dependency_graph_js_1.default(); // TODO: implement clear method
        this.elements.clear();
    }
    /**
    * Adds an element to this controller.
    */
    add(element) {
        this.dependencyGraph.add(element);
        this.elements.set(element.id, element);
    }
    /**
    * Removes an element from this controller.
    */
    remove(element) {
        this.dependencyGraph.remove(element);
        this.elements.delete(element.id);
    }
    /**
    * Returns the element corresponding to the unique string identifier
    */
    get(id) {
        return this.elements.get(id);
    }
    /**
    * Updates this element and all of its dependents
    */
    update(element) {
        let deps = this.dependencyGraph.getDependents(element);
        for (let d of deps) {
            d.update();
        }
    }
}
exports.default = Controller;
//# sourceMappingURL=controller.js.map