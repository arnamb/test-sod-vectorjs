"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tangentGraph = exports.sineGraph = exports.cosineGraph = exports.graph = void 0;
const index_js_1 = require("../../../index.js");
function graph(id, title, f) {
    let interactive = new index_js_1.Interactive(id);
    let scaleX = 50;
    let scaleY = 50;
    let plot = interactive.plot(f, {
        title: title,
        scaleX: scaleX,
        scaleY: scaleY,
    });
}
exports.graph = graph;
function cosineGraph(id) {
    graph(id, "cosine", Math.cos);
}
exports.cosineGraph = cosineGraph;
function sineGraph(id) {
    graph(id, "sine", Math.cos);
}
exports.sineGraph = sineGraph;
function tangentGraph(id) {
    graph(id, "sine", Math.cos);
}
exports.tangentGraph = tangentGraph;
//# sourceMappingURL=cosine.js.map