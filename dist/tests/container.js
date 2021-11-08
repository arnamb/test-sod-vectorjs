"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
* This is a static class for creating container elements with unique
* identifiers.
*/
class Container {
    /**
    * Returns a container with a unique id.
    */
    static createContainer() {
        let div = document.createElement('div');
        let section = document.getElementById('tests');
        div.classList.add('test-container');
        div.id = `id-${Container.count++}`;
        section.appendChild(div);
        return div;
    }
}
exports.default = Container;
Container.count = 0;
//# sourceMappingURL=container.js.map