"use strict";
/**
* @title Population Density of the United States
* @description Every state of the United States colored by population density.
* @input Input the name of the map you want to see, and the size of the map.
* @tags [maps]
* @weight 1
*/
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_js_1 = require("../../index.js");
const data = __importStar(require("./maps-json.js"));
const us_pop_density_js_1 = require("./us-pop-density.js");
let interactive = new index_js_1.Interactive(index_js_1.getScriptName());
interactive.root.style.border = "1px solid grey";
let map = interactive.map(data.usData);
let hover = interactive.hoverBox("");
hover.setBounds(interactive.width, interactive.height);
let states = map.getAllFeaturePaths();
states.forEach(element => {
    element.setAttribute("style", `stroke:black;stroke-width:0.15px;fill:${getColor(us_pop_density_js_1.usDensityMap[element.root.getAttribute("name")])};`);
    element.root.addEventListener('mousemove', e => {
        let x = e.clientX - interactive.root.getBoundingClientRect().left;
        let y = e.clientY - interactive.root.getBoundingClientRect().top;
        hover.updatePosition(x, y);
    });
    element.root.addEventListener("mouseenter", function () {
        element.setAttribute("style", `stroke:black;stroke-width:0.35px;fill:#ff8e61;`);
        hover.setText(element.root.getAttribute('name') + ': ' + us_pop_density_js_1.usDensityMap[element.root.getAttribute("name")]);
        hover.showHoverBox();
    });
    element.root.addEventListener("mouseleave", function () {
        element.setAttribute("style", `stroke:black;stroke-width:0.15px;fill:${getColor(us_pop_density_js_1.usDensityMap[element.root.getAttribute("name")])};`);
        hover.hideHoverBox();
    });
});
function getColor(d) {
    return d > 1000 ? '#0022ff' :
        d > 500 ? '#1971ff' :
            d > 200 ? '#458cff' :
                d > 100 ? '#6ea5ff' :
                    d > 50 ? '#87b5ff' :
                        d > 20 ? '#a1c5ff' :
                            d > 10 ? '#a1c5ff' :
                                d < 5 ? '#ffffff' :
                                    '#e6efff';
}
//# sourceMappingURL=population-of-united-states.js.map