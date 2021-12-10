"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadScript = exports.setUrlParams = exports.getUrlParams = exports.getURL = exports.saveSVG = exports.download = exports.getScriptName = exports.parseName = void 0;
const save_as_js_1 = require("./save-as.js");
/**
* Returns the filename portion of a file path.
*/
function parseName(path, trimExtension = true) {
    let start = path.lastIndexOf("/") + 1;
    let end = trimExtension ? path.lastIndexOf(".") : path.length;
    return path.substr(start, end - start);
}
exports.parseName = parseName;
/**
* Returns the current script name.
*/
function getScriptName(trimExtension = true) {
    // Variables
    let error = new Error();
    let source;
    let lastStackFrameRegex = new RegExp(/.+\/(.*?):\d+(:\d+)*$/);
    let currentStackFrameRegex = new RegExp(/getScriptName \(.+\/(.*):\d+:\d+\)/);
    // Get the script name
    let name;
    if ((source = lastStackFrameRegex.exec(error.stack.trim())) && source[1] != "") {
        name = source[1];
    }
    else if ((source = currentStackFrameRegex.exec(error.stack.trim()))) {
        name = source[1];
    }
    else if (name = parseName(error.stack.trim(), trimExtension)) {
        return name;
    }
    else {
        return error.message;
    }
    // Return name
    if (trimExtension) {
        let position = name.lastIndexOf(".");
        return name.substr(0, position);
    }
    else {
        return name;
    }
}
exports.getScriptName = getScriptName;
/**
* Downloads the current drawing as an svg file.
*/
function download(id, filename) {
    let svg = document.getElementById(id).firstChild;
    let styleSheet = null;
    for (let i = 0; i < document.styleSheets.length; i += 1) {
        const tempStyleSheet = document.styleSheets[i];
        if (
          tempStyleSheet !== null &&
          tempStyleSheet.href === null &&
          tempStyleSheet.cssRules !== null
        ) {
          if (tempStyleSheet.cssRules[0]) {
            if (
              tempStyleSheet.cssRules[0].cssText.toLowerCase().includes('hatch')
            ) {
              styleSheet = document.styleSheets[i];
              break;
            }
          }
        }
      }
    let style = document.createElementNS('http://www.w3.org/2000/svg', 'style');
    style.type = "text/css";
    let css = "";
    for (let i = 0; i < styleSheet.cssRules.length; i++) {
        let rule = styleSheet.cssRules[i];
        css += rule.cssText + "\n";
    }
    style.innerHTML = css;
    svg.appendChild(style);
    saveSVG(filename, svg.outerHTML);
    style.remove();
}
exports.download = download;
function saveSVG(filename, data) {
    let blob = new Blob([data], { type: 'image/svg+xml' });
    save_as_js_1.saveAs(blob, filename, {});
}
exports.saveSVG = saveSVG;
/**
* Returns a promise containing the response object.
*/
function getURL(url) {
    // Return a new promise.
    return new Promise(function (resolve, reject) {
        // Do the usual XHR stuff
        var req = new XMLHttpRequest();
        req.open('GET', url);
        req.onload = function () {
            // This is called even on 404 etc so check the status
            if (req.status == 200) {
                // Resolve the promise with the response text
                resolve(req.response);
            }
            else {
                // Otherwise reject with the status text
                // which will hopefully be a meaningful error
                reject(Error(req.statusText));
            }
        };
        // Handle network errors
        req.onerror = function () {
            reject(Error("Network Error"));
        };
        // Make the request
        req.send();
    });
}
exports.getURL = getURL;
/**
* Gets the URL parameters of the current session.
*/
function getUrlParams(str) {
    let hashes = str.slice(str.indexOf('?') + 1).split('&');
    let params = new Map();
    for (let h of hashes) {
        let value = h.split('=');
        params.set(value[0], value[1]);
    }
    return params;
}
exports.getUrlParams = getUrlParams;
// TODO: this is unfinished
function setUrlParams(param, value) {
    let url = new URL(window.location.href);
    let params = new URLSearchParams(url.search.slice(1));
    params.set(param, value);
    alert(url.href);
    // window.location.href = url.href;
    window.open(url.href);
}
exports.setUrlParams = setUrlParams;
/**
* Loads the interactive script at the provided url into the provided HTMLElement.
*/
function loadScript(url, element) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield getURL(url);
        let div = document.createElement('div');
        div.id = parseName(url);
        let script = document.createElement('script');
        script.type = 'module';
        script.src = url;
        element.appendChild(div);
        element.appendChild(script);
        return response;
    });
}
exports.loadScript = loadScript;
//# sourceMappingURL=file.js.map