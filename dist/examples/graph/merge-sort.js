"use strict";
/**
* @title Merge Sort Interactive
* @description This interactive demonstrates an implementation of the merge sort algorithm using a tree.
* @tags [algorithm, graph]
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.mergeSort = void 0;
const index_js_1 = require("../../index.js");
let interactive = new index_js_1.Interactive(index_js_1.getScriptName());
interactive.width = 704;
interactive.height = 400;
interactive.border = true;
let graph = interactive.graph({ directed: false });
// let leftButton = interactive.icon(5, 345, 50, 50, "animation");
// let rightButton = interactive.icon(649, 345, 50, 50, "animation");
let nodeCounterMax = 1;
let nodeCountTo = 0;
let allArrays = [];
// this HTML input element controls the current tree being drawn
let input = document.createElement('input');
input.type = 'textfield';
input.style.width = '704px';
input.value = '3 2 7 8 9 1 2 3 3 10 1';
input.name = 'number';
input.min = '0';
input.max = '100000';
input.id = index_js_1.getScriptName() + '-number-input';
input.style.padding = '.25rem';
input.style.webkitAppearance = 'textfield';
input.style.fontSize = '14px';
interactive.container.parentElement.insertBefore(input, interactive.container);
input.onchange = function () {
    nodeCounterMax = 1;
    inputChange();
};
function inputChange() {
    let arr = input.value.split(/[ ,]+/);
    let numArr = [];
    for (let i = 0; i < arr.length; i++) {
        numArr.push(parseInt(arr[i]));
    }
    createArrays(numArr);
}
/**
* This is a recursive function that draws the prime factorization tree for the
* input number n.
*/
function createArrays(list) {
    graph.clear();
    allArrays = [];
    let rootNode = graph.addNode(0, 0, list.toString(), list.length * 15, 20);
    nodeCountTo = 1;
    mergeSort(list, 0, rootNode);
    let rect = graph.root.getBBox();
    if (graph.size() == 1) {
        interactive.setViewBox(rect.x - 32, rect.y - 32, rect.width + 64, rect.height + 64);
    }
    else {
        interactive.setViewBox(rect.x - 8, rect.y - 8, rect.width + 16, rect.height + 16);
    }
}
function addNodeToFit(parentNode, arr, leftOrRight) {
    let isLeft = (leftOrRight == "left");
    let otherNodes = graph.getNodes();
    let newNode = undefined;
    if (isLeft) {
        newNode = graph.addNode(parentNode.cx - arr.length * 40, parentNode.cy + 64, arr.toString(), arr.length * 20, 20);
        let overlap = false;
        for (let i = 0; i < otherNodes.length; i++) {
            let rect1 = otherNodes[i].root.getBoundingClientRect();
            let rect2 = newNode.root.getBoundingClientRect();
            let currOverlap = !(rect1.right < rect2.left ||
                rect1.left > rect2.right ||
                rect1.bottom < rect2.top ||
                rect1.top > rect2.bottom);
            if (currOverlap) {
                otherNodes[i].translate(-10, 0);
                newNode.translate(10, 0);
                overlap = true;
            }
        }
    }
    else {
        newNode = graph.addNode(parentNode.cx + arr.length * 40, parentNode.cy + 64, arr.toString(), arr.length * 20, 20);
        let overlap = false;
        for (let i = 0; i < otherNodes.length; i++) {
            let rect1 = otherNodes[i].root.getBoundingClientRect();
            let rect2 = newNode.root.getBoundingClientRect();
            let currOverlap = !(rect1.right < rect2.left ||
                rect1.left > rect2.right ||
                rect1.bottom < rect2.top ||
                rect1.top > rect2.bottom);
            if (currOverlap) {
                otherNodes[i].translate(10, 0);
                newNode.translate(-10, 0);
                overlap = true;
            }
        }
    }
    graph.addEdge(parentNode, newNode);
    return newNode;
}
function mergeSort(array, level, parent) {
    if (array.length <= 1) {
        return array;
    }
    const middle = Math.floor(array.length / 2);
    const left = array.slice(0, middle);
    const right = array.slice(middle);
    let otherNodes = graph.root.getElementsByTagName("ellipse");
    let leafLeft = undefined;
    let leafRight = undefined;
    if (nodeCountTo < nodeCounterMax) {
        parent.nodeEllipse.fill = "palegreen";
        nodeCountTo += 1;
    }
    if (nodeCountTo < nodeCounterMax) {
        parent.nodeName.root.setAttribute("opacity", ".5");
        leafLeft = addNodeToFit(parent, left, "left");
        leafLeft.nodeEllipse.fill = "#FFFF99";
        nodeCountTo += 1;
    }
    else {
        return left;
    }
    if (nodeCountTo < nodeCounterMax) {
        leafLeft.nodeEllipse.fill = "rgb(248, 248, 248)";
        parent.nodeEllipse.fill = "rgb(248, 248, 248)";
    }
    let mergeLeft = mergeSort(left, level + 1, leafLeft);
    if (nodeCountTo < nodeCounterMax) {
        leafLeft.nodeEllipse.fill = "#FFFF99";
        parent.nodeEllipse.fill = "palegreen";
        if (mergeLeft.length == 1) {
            nodeCountTo -= 1;
        }
        nodeCountTo += 1;
    }
    if (nodeCountTo < nodeCounterMax) {
        parent.nodeName.root.setAttribute("opacity", ".5");
        leafRight = addNodeToFit(parent, right, "right");
        leafRight.nodeEllipse.fill = "#FFFF99";
        nodeCountTo += 1;
    }
    else {
        return [];
    }
    if (nodeCountTo < nodeCounterMax) {
        leafLeft.nodeEllipse.fill = "rgb(248, 248, 248)";
        leafRight.nodeEllipse.fill = "rgb(248, 248, 248)";
        parent.nodeEllipse.fill = "rgb(248, 248, 248)";
    }
    let mergeRight = mergeSort(right, level + 1, leafRight);
    if (nodeCountTo < nodeCounterMax) {
        leafLeft.nodeEllipse.fill = "#FFFF99";
        leafRight.nodeEllipse.fill = "#FFFF99";
        parent.nodeEllipse.fill = "palegreen";
        if (mergeRight.length == 1) {
            nodeCountTo -= 1;
        }
        nodeCountTo += 1;
    }
    let mergedArr = merge(mergeLeft, mergeRight);
    if (nodeCountTo < nodeCounterMax) {
        parent.label = mergedArr.toString();
        parent.nodeName.root.setAttribute("opacity", "1");
        nodeCountTo++;
    }
    if (nodeCountTo < nodeCounterMax) {
        leafLeft.nodeEllipse.fill = "rgb(248, 248, 248)";
        leafRight.nodeEllipse.fill = "rgb(248, 248, 248)";
        parent.nodeEllipse.fill = "rgb(248, 248, 248)";
        return mergedArr;
    }
    return [];
}
exports.mergeSort = mergeSort;
/** Merge (conquer) step of mergeSort */
function merge(left, right) {
    const array = [];
    let lIndex = 0;
    let rIndex = 0;
    while (lIndex + rIndex < left.length + right.length) {
        const lItem = left[lIndex];
        const rItem = right[rIndex];
        if (lItem == null) {
            array.push(rItem);
            rIndex++;
        }
        else if (rItem == null) {
            array.push(lItem);
            lIndex++;
        }
        else if (lItem < rItem) {
            array.push(lItem);
            lIndex++;
        }
        else {
            array.push(rItem);
            rIndex++;
        }
    }
    return array;
}
document.addEventListener('keydown', function (event) {
    if (event.keyCode == 37) {
        // leftButton.setAttribute("stroke", "cornflowerblue")
        // console.log(leftButton);
        nodeCounterMax--;
        inputChange();
    }
    else if (event.keyCode == 39) {
        nodeCounterMax++;
        inputChange();
    }
});
//# sourceMappingURL=merge-sort.js.map