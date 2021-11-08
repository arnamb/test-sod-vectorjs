"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseSVG = void 0;
/**
* Parses and returns the SVG documented represented by the string argument.
*/
function parseSVG(svg) {
    let parser = new DOMParser();
    let doc = parser.parseFromString(svg, 'image/svg+xml');
    return doc.documentElement;
}
exports.parseSVG = parseSVG;
//# sourceMappingURL=svg.js.map