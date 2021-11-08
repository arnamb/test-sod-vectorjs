"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const a_js_1 = __importDefault(require("../../../elements/svg/a.js"));
describe('A (link)', function () {
    describe('constructor', function () {
        it('should create a link element', function () {
            let element = new a_js_1.default("./");
            element.setAttribute('href', 'example.com');
        });
    });
});
//# sourceMappingURL=a.test.js.map