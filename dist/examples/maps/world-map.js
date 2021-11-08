"use strict";
/**
* @title Interactive World Map
* @description Every country in the world displayed in an interactive.
* @input Input the name of the map you want to see, and the size of the map.
* @tags [maps]
* @weight 1
*/
Object.defineProperty(exports, "__esModule", { value: true });
const index_js_1 = require("../../index.js");
const maps_json_js_1 = require("./maps-json.js");
let myInteractive = new index_js_1.Interactive(index_js_1.getScriptName());
let map = myInteractive.map(maps_json_js_1.globalData);
//# sourceMappingURL=world-map.js.map