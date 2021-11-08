"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.helper = void 0;
const container_js_1 = __importDefault(require("../container.js"));
const index_js_1 = require("../../index.js");
const constants_js_1 = require("../../util/constants.js");
const math_js_1 = require("../../util/math.js");
function helper(fn, container, userOptions = {}) {
    let interactive = new index_js_1.Interactive(container, {
        width: 600,
        height: 150
    });
    let defaultOptions = {
        x: -50,
        y: -50,
        originX: 0,
        originY: 75,
        scaleX: 150 / Math.PI,
        scaleY: 150 / Math.PI,
        height: 250,
        width: 700,
        zoomable: false,
        grid: true,
        labels: false,
        border: false
    };
    let options = Object.assign(Object.assign({}, defaultOptions), userOptions);
    let plot = interactive.plot(fn, options);
    return plot;
}
exports.helper = helper;
describe('Wave Interactives', function () {
    // create a new container before each test function
    let container;
    let plot;
    beforeEach(function () {
        container = container_js_1.default.createContainer();
        window.download = index_js_1.download;
    });
    afterEach(function () {
        plot.export(); // for exporting not testing
    });
    describe('Wave Interactives', function () {
        it('Sinusoidal', function () {
            plot = helper(Math.cos, container);
        });
        it('Square', function () {
            let fn = (x) => {
                return 2 * Math.round(x / 4 - Math.floor(x / 4)) - 1;
            };
            plot = helper(fn, container);
        });
        it('Sawtooth', function () {
            let fn = (x) => {
                return 2 * (x / 4 - Math.floor(x / 4)) - 1;
            };
            plot = helper(fn, container);
        });
        it('Triangular', function () {
            let fn = (x) => {
                return Math.abs(4 * (x / 4 - Math.floor(x / 4)) - 2) - 1;
            };
            plot = helper(fn, container);
        });
        it('Trapezoidal', function () {
            plot = helper(math_js_1.trapezoidalWave(-constants_js_1.TAU * 1 / 3, 2, constants_js_1.TAU), container, {
                scaleX: 300 / Math.PI,
                scaleY: 150 / Math.PI,
                originY: 150
            });
            let str = plot.fPath.d;
            plot.fPath.d = 'M -1200 0 ' + str.substr(str.indexOf('L'), str.length) + 'L 1200 0';
            plot.fPath.style.fill = 'rgb(255, 0, 0)';
            plot = helper(math_js_1.trapezoidalWave(constants_js_1.TAU * 0 / 3, 2, constants_js_1.TAU), container, {
                scaleX: 300 / Math.PI,
                scaleY: 150 / Math.PI,
                originY: 150
            });
            plot.fPath.style.fill = 'rgb(0, 255, 0)';
            plot = helper(math_js_1.trapezoidalWave(constants_js_1.TAU * 1 / 3, 2, constants_js_1.TAU), container, {
                scaleX: 300 / Math.PI,
                scaleY: 150 / Math.PI,
                originY: 150
            });
            plot.fPath.style.fill = 'rgb(0, 0, 255)';
        });
    });
});
//# sourceMappingURL=waves.test.js.map