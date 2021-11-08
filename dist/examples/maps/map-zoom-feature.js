"use strict";
/**
* @title Map Zoom
* @description Type in the names of the countries you want to zoom in on and press enter. This interactive is case-sensitive.
* @tags [maps]
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
let interactive = new index_js_1.Interactive(index_js_1.getScriptName());
interactive.root.style.border = "1px solid grey";
let map = interactive.map(data.globalData, "", { fill: 'red',
    stroke: 'white',
    strokeWidth: 0.5 });
let inputContainer = document.createElement('div');
inputContainer.classList.add('input-container');
let input = document.createElement('input');
input.type = 'text';
input.value = '';
input.id = index_js_1.getScriptName() + '-text-input';
input.classList.add('input');
interactive.container.parentElement.insertBefore(inputContainer, interactive.container);
inputContainer.appendChild(input);
let prev = "";
input.addEventListener("keyup", function (event) {
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
        if (prev != "")
            map.getPathForFeatureName(prev).style.fill = 'red';
        if (input.value != "" && map.getPathForFeatureName(input.value)) {
            prev = input.value;
            map.setViewBoxToFeature(input.value);
            map.getPathForFeatureName(input.value).style.fill = 'blue';
        }
        else {
            map.resetViewBox();
        }
    }
});
//# sourceMappingURL=map-zoom-feature.js.map