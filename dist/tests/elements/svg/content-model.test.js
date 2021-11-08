"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.scriptElement = exports.viewElement = exports.markerElement = exports.clipPathElement = exports.aElement = exports.tspanElement = exports.textElement = exports.typographyElements = exports.useElement = exports.svgElement = exports.groupElement = exports.defsElement = exports.structuralElements = exports.rectangleElement = exports.polygonElement = exports.pathElement = exports.lineElement = exports.ellipseElement = exports.circleElement = exports.shapeElements = exports.titleElement = exports.metaDataElement = exports.descriptiveElement = exports.descriptiveElements = void 0;
/**
* Tests that the provided element correctly implements the "descriptive" content
* model. Meaning that descriptive elements can be created within the element.
*/
var descriptiveElements = () => {
    descriptiveElement();
    metaDataElement();
    titleElement();
};
exports.descriptiveElements = descriptiveElements;
/**
* Tests that this.element can create and append a descriptive element.
*/
function descriptiveElement() {
    it('should create and append a description element', function () {
        let child = this.element.description();
        chai.expect(child.root.tagName).to.equal('desc');
        chai.expect(this.element.root.contains(child.root));
    });
}
exports.descriptiveElement = descriptiveElement;
/**
* Tests that this.element can create and append a metaData element.
*/
function metaDataElement() {
    it('should create and append a metadata element', function () {
        let child = this.element.metadata();
        chai.expect(child.root.tagName).to.equal('metadata');
        chai.expect(this.element.root.contains(child.root));
    });
}
exports.metaDataElement = metaDataElement;
/**
* Tests that this.element can create and append a title element.
*/
function titleElement() {
    it('should create and append a title element', function () {
        let child = this.element.title();
        chai.expect(child.root.tagName).to.equal('title');
        chai.expect(this.element.root.contains(child.root));
    });
}
exports.titleElement = titleElement;
/**
* Tests that the provided element correctly implements the "shape" content
* model. Meaning that shape elements can be created within the element.
*/
function shapeElements() {
    circleElement();
    ellipseElement();
    lineElement();
    pathElement();
    polygonElement();
    rectangleElement();
}
exports.shapeElements = shapeElements;
;
/**
* Tests that this.element can create and append a circle element.
*/
function circleElement() {
    it('should create and append a circle element', function () {
        let child = this.element.circle(1, 2, 3);
        chai.expect(child.root.tagName).to.equal('circle');
        chai.expect(child.cx).to.equal(1);
        chai.expect(child.cy).to.equal(2);
        chai.expect(child.r).to.equal(3);
        chai.expect(this.element.root.contains(child.root));
    });
}
exports.circleElement = circleElement;
/**
* Tests that this.element can create and append an ellipse element.
*/
function ellipseElement() {
    it('should create and append an ellipse element', function () {
        let child = this.element.ellipse(1, 2, 3, 4);
        chai.expect(child.root.tagName).to.equal('ellipse');
        chai.expect(child.cx).to.equal(1);
        chai.expect(child.cy).to.equal(2);
        chai.expect(child.rx).to.equal(3);
        chai.expect(child.ry).to.equal(4);
        chai.expect(this.element.root.contains(child.root));
    });
}
exports.ellipseElement = ellipseElement;
/**
* Tests that this.element can create and append a line element.
*/
function lineElement() {
    it('should create and append a line element', function () {
        let child = this.element.line(1, 2, 3, 4);
        chai.expect(child.root.tagName).to.equal('line');
        chai.expect(child.x1).to.equal(1);
        chai.expect(child.y1).to.equal(2);
        chai.expect(child.x2).to.equal(3);
        chai.expect(child.y2).to.equal(4);
        chai.expect(this.element.root.contains(child.root));
    });
}
exports.lineElement = lineElement;
/**
* Tests that this.element can create and append a path element.
*/
function pathElement() {
    it('should create and append a path element', function () {
        let child = this.element.path('M 1 2 L 3 4');
        chai.expect(child.root.tagName).to.equal('path');
        chai.expect(child.d).to.equal('M 1 2 L 3 4');
        chai.expect(this.element.root.contains(child.root));
    });
}
exports.pathElement = pathElement;
/**
* Tests that this.element can create and append a polygon element.
*/
function polygonElement() {
    it('should create and append a polygon element', function () {
        let child = this.element.polygon('1,2 3,4');
        chai.expect(child.root.tagName).to.equal('polygon');
        chai.expect(child.points).to.equal('1,2 3,4');
        chai.expect(this.element.root.contains(child.root));
    });
}
exports.polygonElement = polygonElement;
/**
* Tests that this.element can create and append a rectangle element.
*/
function rectangleElement() {
    it('should create and append a rectangle element', function () {
        let child = this.element.rectangle(1, 2, 3, 4);
        chai.expect(child.root.tagName).to.equal('rect');
        chai.expect(child.x).to.equal(1);
        chai.expect(child.y).to.equal(2);
        chai.expect(child.width).to.equal(3);
        chai.expect(child.height).to.equal(4);
        chai.expect(this.element.root.contains(child.root));
    });
}
exports.rectangleElement = rectangleElement;
/**
* Tests that the provided element correctly implements the "structural" content
* model. Meaning that structural elements can be created within the element.
*/
var structuralElements = function () {
    defsElement();
    groupElement();
    svgElement();
    useElement();
};
exports.structuralElements = structuralElements;
/**
* Tests that this.element can create and append a defs element
*/
function defsElement() {
    it('should create and append a defs element', function () {
        let defs = this.element.defs();
        chai.expect(defs.root.tagName).to.equal('defs');
        chai.expect(this.element.root.contains(defs.root));
    });
}
exports.defsElement = defsElement;
/**
* Tests that this.element can create and append a group element
*/
function groupElement() {
    it('should create and append a group element', function () {
        let child = this.element.group();
        chai.expect(child.root.tagName).to.equal('g');
        chai.expect(this.element.root.contains(child.root));
    });
}
exports.groupElement = groupElement;
/**
* Tests that this.element can create and append a svg element
*/
function svgElement() {
    it('should create and append a svg element', function () {
        let child = this.element.svg(1, 2, 3, 4);
        chai.expect(child.root.tagName).to.equal('svg');
        chai.expect(child.x).to.equal(1);
        chai.expect(child.y).to.equal(2);
        chai.expect(child.width).to.equal(3);
        chai.expect(child.height).to.equal(4);
        chai.expect(this.element.root.contains(child.root));
    });
}
exports.svgElement = svgElement;
/**
* Tests that this.element can create and append a use element
*/
function useElement() {
    it('should create and append a use element', function () {
        let child = this.element.use(1, 2, 3, 4);
        chai.expect(child.x).to.equal(1);
        chai.expect(child.y).to.equal(2);
        chai.expect(child.width).to.equal(3);
        chai.expect(child.height).to.equal(4);
        chai.expect(this.element.root.contains(child.root));
    });
}
exports.useElement = useElement;
/**
* Tests that the provided element correctly implements the "typography" content
* model. Meaning that structural elements can be created within the element.
*/
var typographyElements = function () {
    textElement();
};
exports.typographyElements = typographyElements;
/**
* Tests that this.element can create and append a text element
*/
function textElement() {
    it('should create and append a text element', function () {
        let child = this.element.text(1, 2, 'hello-world');
        chai.expect(child.root.tagName).to.equal('text');
        chai.expect(child.x).to.equal(1);
        chai.expect(child.y).to.equal(2);
        chai.expect(child.contents).to.equal('hello-world');
        chai.expect(this.element.root.contains(child.root));
    });
}
exports.textElement = textElement;
/**
* Tests that this.element can create and append a tspan element
*/
function tspanElement() {
    it('should create and append a tspan element', function () {
        let child = this.element.tspan('t1');
        chai.expect(child.root.tagName).to.equal('tspan');
        chai.expect(child.text).to.equal('t1');
        chai.expect(this.element.root.contains(child.root));
    });
}
exports.tspanElement = tspanElement;
/**
* Tests that this.element can create and append an 'a' element
*/
function aElement() {
    it('should create and append a \'a\' element', function () {
        let href = 'example.com';
        let child = this.element.a();
        chai.expect(child.root.tagName).to.equal('a');
        // chai.expect(child.getAttribute('href')).to.equal(href); // TODO:
    });
}
exports.aElement = aElement;
/**
* Tests that this.element can create and append a clipPath element
*/
function clipPathElement() {
    it('should create and append a clipPath element', function () {
        let child = this.element.clipPath();
        chai.expect(child.root.tagName).to.equal('clipPath');
    });
}
exports.clipPathElement = clipPathElement;
/**
* Tests that this.element can create and append a markerElement element
*/
function markerElement() {
    it('should create and append a marker element', function () {
        let child = this.element.marker();
        chai.expect(child.root.tagName).to.equal('marker');
    });
}
exports.markerElement = markerElement;
/**
* Tests that this.element can create and append a markerElement element
*/
function viewElement() {
    // TODO:
}
exports.viewElement = viewElement;
/**
* Tests that this.element can create and append a markerElement element
*/
function scriptElement() {
    // TODO:
}
exports.scriptElement = scriptElement;
//# sourceMappingURL=content-model.test.js.map