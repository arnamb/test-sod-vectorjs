"use strict";
/**
* @title Visible Spectrum
* @description
* @tags [elements]
* @ignore true
*/
Object.defineProperty(exports, "__esModule", { value: true });
const index_js_1 = require("../../index.js");
function main(id) {
    let interactive = new index_js_1.Interactive(id, {
        width: 700,
        height: 200
    });
    let ratio = 255 / interactive.width;
    for (let i = 0; i < interactive.width; i++) {
        let rectangle = interactive.rectangle(i, 0, 1, interactive.height);
        let r = i * ratio;
        let g = i * ratio;
        let b = i * ratio;
        rectangle.style.fill = `rgb( ${r}, ${g}, ${b})`;
    }
    let rect = interactive.rectangle(32, interactive.height / 2 - 16, interactive.width - 64, 32);
    rect.style.fill = 'rgb( 127, 127, 127)';
}
exports.default = main;
//# sourceMappingURL=contrast.js.map