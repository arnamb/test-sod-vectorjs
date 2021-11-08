"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// model
require("./model/linked-list.test.js");
require("./model/dependency-graph.test.js");
// util
require("./util/math.test.js");
// base svg element
require("./elements/svg/element.test.js");
// svg
require("./elements/svg/circle.test.js");
require("./elements/svg/ellipse.test.js");
require("./elements/svg/group.test.js");
require("./elements/svg/line.test.js");
require("./elements/svg/polygon.test.js");
require("./elements/svg/path.test.js");
require("./elements/svg/rectangle.test.js");
require("./elements/svg/svg.test.js");
require("./elements/svg/circle.test.js");
require("./elements/svg/ellipse.test.js");
require("./elements/svg/polygon.test.js");
require("./elements/svg/path.test.js");
require("./elements/svg/text.test.js");
require("./elements/svg/line.test.js");
require("./elements/svg/text.test.js");
// interactive / custom elements
require("./elements/interactive.test.js");
require("./elements/geometry.test.js");
// input tests
require("./elements/input/control.test.js");
// plot tests
require("./elements/math/plot.test.js");
require("./elements/maps/map.test.js");
// math
require("./math/interactives.test.js");
require("./math/modular-arithmetic-wheel.script.js");
// article interactives
require("./articles/color.test.js");
require("./articles/waves.test.js");
// graph
require("./elements/graph/node.test.js");
// Disabled leak checking because google analytics was causing test failures.
// Possible solution would be to run the tests within an embedded HTML page
// using the iframe element or something.
// mocha.checkLeaks();
mocha.run();
//# sourceMappingURL=run.js.map