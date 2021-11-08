"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const group_js_1 = __importDefault(require("../svg/group.js"));
const rectangle_js_1 = __importDefault(require("../svg/rectangle.js"));
const text_js_1 = __importDefault(require("../svg/text.js"));
const path_js_1 = __importDefault(require("../svg/path.js"));
const input_js_1 = __importDefault(require("./input.js"));
/**
*  Dropdown with menu item labels that can be selected.
*/
class DropdownControl extends input_js_1.default {
    /**
     * Constructs a dropdown control with given option labels at the given (x,y) position
     * and with the default selection as the label at the given default index.
     */
    constructor(x, y, optionLabels, defaultIndex) {
        if (optionLabels === undefined || optionLabels.length === 0) {
            throw new Error('Dropdown control must have at least one option');
        }
        if (defaultIndex < 0 || defaultIndex >= optionLabels.length) {
            throw new Error('Default index must be within bounds of option labels array.');
        }
        super();
        this.optionLabels = optionLabels;
        this.currentIndex = defaultIndex;
        this.expanded = false;
        this.textWidth = new text_js_1.default(0, 0, this.getLongestString(optionLabels)).length;
        this.x = x;
        this.y = y;
        this.collapsedView = new group_js_1.default();
        this.collapsedView.setAttribute("transform", `translate(${this.x},${this.y})`);
        this.currSelection = new group_js_1.default();
        this.currSelection.root.classList.add('dropdown-control-curr-selection-box');
        this.currSelectionText = new text_js_1.default(0, 1, this.optionLabels[this.currentIndex]);
        this.currSelectionText.root.setAttribute('alignment-baseline', 'middle');
        this.currSelectionText.style.textAnchor = 'middle';
        this.currSelectionBox = new rectangle_js_1.default(0, -16, this.textWidth * 3 + 16, 32);
        this.currSelectionText.x = this.currSelectionBox.x + this.currSelectionBox.width / 2;
        this.currSelection.appendChild(this.currSelectionBox);
        this.currSelection.appendChild(this.currSelectionText);
        let dropdownButton = new group_js_1.default();
        dropdownButton.root.classList.add('dropdown-control-button');
        let buttonBox = new rectangle_js_1.default(this.textWidth * 3 + 16, -16, 32, 32);
        let radius = 8;
        let downArrow = new path_js_1.default(` M ${radius + this.textWidth * 3 + 32} ${radius * Math.sin(-2 * Math.PI / 3) + 1}
                                 L ${radius * Math.cos(-2 * Math.PI / 3) + this.textWidth * 3 + 28} ${radius * Math.sin(-2 * Math.PI / 3) + 1}
                                 L ${(radius + this.textWidth * 3 + 32 + radius * Math.cos(-2 * Math.PI / 3) + this.textWidth * 3 + 28) / 2} ${radius * Math.sin(-4 * Math.PI / 3) + 1}
                                 Z`);
        downArrow.style.fill = '#333333';
        dropdownButton.appendChild(buttonBox);
        dropdownButton.appendChild(downArrow);
        let _this = this;
        dropdownButton.root.onmousedown = function () {
            if (!_this.expanded) {
                _this.updateExpandedView();
                _this.root.appendChild(_this.expandedView.root);
                _this.expanded = true;
            }
            else {
                _this.root.removeChild(_this.expandedView.root);
                _this.expanded = false;
            }
            _this.onchange();
        };
        this.collapsedView.appendChild(this.currSelection);
        this.collapsedView.appendChild(dropdownButton);
        this.root = this.collapsedView.root;
        this.root.id = this.id;
    }
    get value() {
        return this.optionLabels[this.currentIndex];
    }
    /**
    *  Updates the expanded view of menu options.
    */
    updateExpandedView() {
        this.expandedView = new group_js_1.default();
        this.collapsedView.setAttribute("transform", `translate(${this.x},${this.y})`);
        let currSelection = new group_js_1.default();
        currSelection.root.classList.add('dropdown-control-menu-option');
        let currSelectionText = new text_js_1.default(0, 1, this.optionLabels[this.currentIndex]);
        currSelectionText.root.setAttribute('alignment-baseline', 'middle');
        currSelectionText.style.textAnchor = 'middle';
        let currSelectionBox = new rectangle_js_1.default(0, -16, this.textWidth * 3 + 16, 32);
        currSelectionText.x = currSelectionBox.x + currSelectionBox.width / 2;
        currSelection.appendChild(currSelectionBox);
        currSelection.appendChild(currSelectionText);
        this.expandedView.appendChild(currSelection);
        let _this = this;
        let rectY = 32;
        this.optionLabels.forEach((label, i) => {
            if (i == this.currentIndex) {
                return;
            }
            let menuOption = new group_js_1.default();
            menuOption.root.classList.add('dropdown-control-menu-option');
            let optionText = new text_js_1.default(0, 1 + rectY, label);
            optionText.root.setAttribute('alignment-baseline', 'middle');
            optionText.style.textAnchor = 'middle';
            let optionBox = new rectangle_js_1.default(0, -16 + rectY, this.textWidth * 3 + 16, 32);
            optionText.x = optionBox.x + optionBox.width / 2;
            menuOption.appendChild(optionBox);
            menuOption.appendChild(optionText);
            menuOption.root.onmousedown = function () {
                _this.root.removeChild(_this.expandedView.root);
                _this.expanded = false;
                _this.currentIndex = i;
                _this.currSelectionText.contents = label;
                _this.onchange();
            };
            this.expandedView.appendChild(menuOption);
            rectY += 32;
        });
    }
    /**
    * Returns the text of the current selection in from the dropdown menu.
    */
    getCurrentSelection() {
        return this.optionLabels[this.currentIndex];
    }
    /**
    * Returns the longest string in the given string array.
    */
    getLongestString(list) {
        if (list.length == 0) {
            return "";
        }
        let longest = list[0];
        for (let i = 1; i < list.length; i++) {
            if (list[i].length > longest.length) {
                longest = list[i];
            }
        }
        return longest;
    }
}
exports.default = DropdownControl;
//# sourceMappingURL=dropdown-control.js.map