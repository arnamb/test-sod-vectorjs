"use strict";
/**
* @title Animate Along Path
* @description This interactive demonstrates how a element can be animated along a path.
* @tags [animation]
*/
Object.defineProperty(exports, "__esModule", { value: true });
const index_js_1 = require("../../index.js");
let interactive = new index_js_1.Interactive(index_js_1.getScriptName());
interactive.width = 736;
interactive.height = 225;
interactive.border = true;
let circle = interactive.circle(interactive.width / 2, interactive.height / 3, 50);
circle.classList.add('default');
let displayCircle = interactive.circle(0, 0, 6);
displayCircle.style.fill = '#333333';
let scrubber = interactive.scrubber(100, 175, {});
let pathLength = circle.getTotalLength();
function animate() {
    let currentPosition = scrubber.value / (scrubber.max - scrubber.min);
    let point = circle.getPointAtLength(currentPosition * pathLength);
    displayCircle.cx = point.x;
    displayCircle.cy = point.y;
    requestAnimationFrame(animate);
}
requestAnimationFrame(animate);
//# sourceMappingURL=animate-along-path.js.map