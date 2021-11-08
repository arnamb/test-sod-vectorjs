"use strict";
/**
* @title Undirected Graph Element
* @description This interactive demonstrates the undirected graph element.
* @tags [elements]
*/
Object.defineProperty(exports, "__esModule", { value: true });
const index_js_1 = require("../../index.js");
let interactive = new index_js_1.Interactive(index_js_1.getScriptName());
interactive.width = 768;
interactive.height = 150;
interactive.border = true;
let graph = interactive.graph({ directed: false });
let a = graph.addNode(75, 75, 'a');
let b = graph.addNode(200, 75, 'b');
graph.addEdge(a, b);
//# sourceMappingURL=undirected-graph-element.js.map