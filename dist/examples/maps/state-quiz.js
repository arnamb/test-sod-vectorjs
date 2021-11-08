"use strict";
/**
* @title State Quiz
* @description Quiz on the names of all United States. Type the name of the highlighted state into the text box and press enter to see if you're correct! If you want some help, press the '/' key.
* @tags [maps, games]
*/
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_js_1 = require("../../index.js");
const data = __importStar(require("./maps-json.js"));
let correctCounter = 0;
let incorrectCounter = 0;
let interactive = new index_js_1.Interactive(index_js_1.getScriptName());
interactive.root.style.border = "1px solid grey";
interactive.width = 768;
let map = interactive.map(data.usData);
//only want the 50 states
map.removeFeature('Puerto Rico');
map.removeFeature('District of Columbia');
//set up the input text box
let inputContainer = document.createElement('div');
inputContainer.classList.add('input-container');
let input = document.createElement('input');
input.type = 'text';
input.value = '';
input.id = index_js_1.getScriptName() + '-text-input';
input.classList.add('input');
interactive.container.parentElement.insertBefore(inputContainer, interactive.container);
inputContainer.appendChild(input);
//set up the text on the interactive
let correctLabel = interactive.text(5, 20, "Correct:");
let incorrectLabel = interactive.text(5, 40, "Incorrect:");
let correctScore = interactive.text(75, 20, correctCounter.toString());
let incorrectScore = interactive.text(85, 40, incorrectCounter.toString());
correctScore.style.fill = 'green';
incorrectScore.style.fill = 'red';
let gameOverText = interactive.text(interactive.width / 2 - 180, interactive.height / 2, "Congratulations");
gameOverText.root.setAttribute('font-size', '50');
gameOverText.root.setAttribute('font-weight', 'bold');
gameOverText.root.setAttribute('visibility', 'hidden');
//start the game logic
let states = map.getAllFeaturePaths();
let index = getRandomInt(0, states.length);
let current = states[index];
current.style.fill = 'cyan';
input.addEventListener("keyup", function (event) {
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
        if (input.value.toLowerCase() == current.root.getAttribute('name').toLowerCase()) {
            correctCounter++;
            correctScore.contents = correctCounter.toString();
            current.style.fill = '#c9c9c9';
            states.splice(index, 1);
            if (states.length == 0) {
                gameOverText.root.removeAttribute('visibility');
            }
            else {
                index = getRandomInt(0, states.length);
                current = states[index];
                current.style.fill = 'cyan';
                input.value = '';
            }
        }
        else {
            current.style.fill = 'red';
            incorrectCounter++;
            incorrectScore.contents = incorrectCounter.toString();
            index = getRandomInt(0, states.length);
            current = states[index];
            current.style.fill = 'cyan';
            input.value = '';
        }
    }
    //Number 72 is the key code for the / key
    if (event.keyCode === 191) {
        input.value = current.root.getAttribute('name');
    }
});
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}
//# sourceMappingURL=state-quiz.js.map