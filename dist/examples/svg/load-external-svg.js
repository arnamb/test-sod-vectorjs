"use strict";
/**
* @title Load External SVG
* @description This interactive demonstrates how to load and use an external svg.
* @tags [svg, maps]
*/
Object.defineProperty(exports, "__esModule", { value: true });
const index_js_1 = require("../../index.js");
const file_js_1 = require("../../util/file.js");
const svg_js_1 = require("../../util/svg.js");
let map = file_js_1.getURL('/maps/united-states.svg');
let data = file_js_1.getURL('/maps/us-population-data.json');
Promise.all([map, data]).then(function (response) {
    let myInteractive = new index_js_1.Interactive(index_js_1.getScriptName(), {
        width: 736,
        height: 400
    });
    let svg = myInteractive.background.root.appendChild(svg_js_1.parseSVG(response[0]));
    let bbox = svg.getBBox();
    myInteractive.setViewBox(bbox.x, bbox.y, bbox.width, bbox.height);
    let json = JSON.parse(response[1]);
    // calculate the min, max, and range of population
    let max = json.data[0].Population;
    let min = json.data[json.data.length - 1].Population;
    let range = max - min;
    // loop through the states an color each based on their population
    for (let i = 0; i < json.data.length; i++) {
        let population = json.data[i].Population;
        let value = (population - min) / range;
        let state = svg.querySelector(`#${json.data[i].ID}`);
        let color = 255 - value * 255;
        state.style.fill = `rgb(${color} ${color} ${255})`;
    }
}).catch(function (error) {
    throw error;
});
//# sourceMappingURL=load-external-svg.js.map