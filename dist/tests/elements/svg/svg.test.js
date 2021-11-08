"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const content_model_test_js_1 = require("./content-model.test.js");
const svg_js_1 = __importDefault(require("../../../elements/svg/svg.js"));
const container_js_1 = __importDefault(require("../../container.js"));
describe('SVG', function () {
    describe('constructor', function () {
        // create a new container before each test function
        let container;
        beforeEach(function () {
            container = container_js_1.default.createContainer();
            container.hidden = true;
        });
        it('should construct a new svg object', function () {
            let svg = new svg_js_1.default();
            container.appendChild(svg.root);
            svg.x = 1;
            svg.y = 2;
            svg.width = 3;
            svg.height = 4;
            chai.expect(svg.x).to.equal(1);
            chai.expect(svg.y).to.equal(2);
            chai.expect(svg.width).to.equal(3);
            chai.expect(svg.height).to.equal(4);
        });
        it('should construct a new svg object with the provided properties', function () {
            let svg = new svg_js_1.default(1, 2);
            container.appendChild(svg.root);
            chai.expect(svg.x).to.equal(1);
            chai.expect(svg.y).to.equal(2);
        });
        it('should construct a new svg object with the provided properties', function () {
            let svg = new svg_js_1.default(1, 2, 3, 4);
            container.appendChild(svg.root);
            chai.expect(svg.x).to.equal(1);
            chai.expect(svg.y).to.equal(2);
            chai.expect(svg.width).to.equal(3);
            chai.expect(svg.height).to.equal(4);
        });
        it('should create an svg element within the HTML container with the corresponding id', function () {
            let interactive = svg_js_1.default.SVG(container.id);
            chai.expect(container.contains(interactive.root)).to.be.true;
        });
        it('should create an svg element within the HTML container', function () {
            let interactive = svg_js_1.default.SVG(container);
            chai.expect(container.contains(interactive.root)).to.be.true;
        });
        it('should throw an error when no corresponding id exists', function () {
            let badID = 'bad-id';
            chai.expect(() => { svg_js_1.default.SVG(badID); }).to.throw(Error, `There is no HTML element with the id: ${badID}`);
        });
    });
    describe('content model', function () {
        let element;
        beforeEach(function () {
            element = new svg_js_1.default();
            this.element = element;
        });
        // grouped elements
        content_model_test_js_1.descriptiveElements();
        content_model_test_js_1.shapeElements();
        content_model_test_js_1.structuralElements();
        // individual elements
        content_model_test_js_1.aElement();
        content_model_test_js_1.clipPathElement();
        // filterElement();
        // foreignObject();
        // imageElement();
        // markerElement();
        // maskElement();
        content_model_test_js_1.scriptElement();
        // styleElement(); // TODO: this conflicts with current style property
        // switchElement();
        content_model_test_js_1.textElement();
        content_model_test_js_1.viewElement();
    });
    describe('geometric properties', function () {
        let svg;
        beforeEach(function () {
            svg = svg_js_1.default.SVG(container_js_1.default.createContainer());
        });
        it('test', function () {
            // console.log(this);
            svg.circle(50, 50, 30);
        });
        // it('should have an x and y propertiy that specify the top-left corner of where an embedded svg is placed', function(){
        //   let nested = svg.svg()
        //   nested.x = 50;
        //   nested.y = 50;
        //   nested.width = 100;
        //   nested.height = 100;
        //   nested.style.border = '1px solid black';
        //   nested.setViewBox(0,0,nested.width,nested.height);
        //
        //   nested.circle(0,0,100);
        //
        //   // console.log(svg);
        //   document.body.appendChild(svg.root);
        // });
    });
});
//# sourceMappingURL=svg.test.js.map