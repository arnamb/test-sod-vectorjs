"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ellipse_js_1 = __importDefault(require("../svg/ellipse.js"));
const group_js_1 = __importDefault(require("../svg/group.js"));
const text_js_1 = __importDefault(require("../svg/text.js"));
//Bostock had something about fitting text here, seems cool https://observablehq.com/@mbostock/fit-text-to-circle
/**
* A Node is a basic element with a position, radius, and text held within it.
*/
class Node extends group_js_1.default {
    /**
    * Constructs a Node element at the position (x,y) with radius r containing the string text
    */
    constructor(cx, cy, rx, ry, text) {
        super();
        this.depth = 0;
        this._cx = cx;
        this._cy = cy;
        this._text = text;
        this._rx = rx;
        this._ry = ry;
        this.edges = new Set();
        this.nodeName = new text_js_1.default(cx, cy, text);
        this.nodeName.style.textAnchor = "middle";
        this.nodeName.root.setAttribute("alignment-baseline", "middle");
        this.nodeEllipse = new ellipse_js_1.default(cx, cy, rx, ry);
        this.nodeEllipse.fill = '#f8f8f8';
        this.children = [];
        this.parents = [];
        this.root.appendChild(this.nodeEllipse.root);
        this.root.appendChild(this.nodeName.root);
    }
    /**
    * Returns the number of edges coming out of this node.
    */
    edgeWeight() {
        return this.edges.size;
    }
    /**
    * Translates this node and all inner elements by x, y.
    */
    translate(x, y) {
        this.nodeEllipse.cx += x;
        this.nodeName.x += x;
        this._cx += x;
        this.nodeEllipse.cy += y;
        this.nodeName.y += y;
        this._cy += y;
    }
    /**
    * Getter for the cx of this node.
    */
    get cx() {
        return this._cx;
    }
    /**
    * Getter for cy of this node
    */
    get cy() {
        return this._cy;
    }
    set cx(cx) {
        this._cx = cx;
        this.nodeEllipse.cx = cx;
        this.nodeName.x = cx;
        this.edges.forEach(function (d) {
            d.redraw();
        });
    }
    /**
    * Getter for cy of this node
    */
    set cy(cy) {
        this._cy = cy;
        this.nodeEllipse.cy = cy;
        this.nodeName.y = cy;
        this.edges.forEach(function (d) {
            d.redraw();
        });
    }
    /**
    * Getter for rx of this node
    */
    get rx() {
        return this._rx;
    }
    /**
    * Getter for ry of this node
    */
    get ry() {
        return this._ry;
    }
    /**
    * Getter for the text of this node
    */
    get label() {
        return this._text;
    }
    /**
    * Setter for the text of this node
    */
    set label(text) {
        this.nodeName.contents = text;
        this._text = text;
    }
    /**
    * Setter for rx of this node
    */
    set rx(rx) {
        this._rx = rx;
        this.nodeEllipse.rx = rx;
    }
    /**
    * Setter for ry of this node
    */
    set ry(ry) {
        this._ry = ry;
        this.nodeEllipse.ry = ry;
    }
    /**
    * Adds an edge to this node.
    */
    addEdge(edge) {
        if (edge.nodeFrom == this) {
            this.children.push(edge.nodeTo);
        }
        else {
            this.depth = edge.nodeFrom.depth + 1;
            this.parents.push(edge.nodeFrom);
        }
        this.edges.add(edge);
    }
}
exports.default = Node;
//# sourceMappingURL=node.js.map