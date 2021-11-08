"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const content_model_test_js_1 = require("./content-model.test.js");
const group_js_1 = __importDefault(require("../../../elements/svg/group.js"));
describe('Group', function () {
    beforeEach(function () {
        this.element = new group_js_1.default();
    });
    describe('content model', function () {
        // grouped elements
        content_model_test_js_1.descriptiveElements();
        content_model_test_js_1.shapeElements();
        content_model_test_js_1.structuralElements();
        // individual elements
        content_model_test_js_1.aElement();
        content_model_test_js_1.clipPathElement();
        // filterElement();
        // foreignObjectElement();
        // imageElement();
        // markerElement();
        // maskElement();
        content_model_test_js_1.scriptElement();
        // styleElement();
        // switchElement();
        content_model_test_js_1.textElement();
        content_model_test_js_1.viewElement();
    });
});
//# sourceMappingURL=group.test.js.map