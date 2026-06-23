module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "../next-server/lib/utils":
/*!*****************************************************!*\
  !*** external "next/dist/next-server/lib/utils.js" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "./components/Svg.js":
/*!***************************!*\
  !*** ./components/Svg.js ***!
  \***************************/
/*! exports provided: UploadSvg, ChangeSvg, ScoreSvg, BackSvg, PasswordSvg, UserSvg, EmailSvg, NameSvg, CollegeSvg, SecurityCodeSvg, StudentNumSvg */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadSvg", function() { return UploadSvg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangeSvg", function() { return ChangeSvg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScoreSvg", function() { return ScoreSvg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackSvg", function() { return BackSvg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordSvg", function() { return PasswordSvg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserSvg", function() { return UserSvg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailSvg", function() { return EmailSvg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NameSvg", function() { return NameSvg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollegeSvg", function() { return CollegeSvg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecurityCodeSvg", function() { return SecurityCodeSvg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentNumSvg", function() { return StudentNumSvg; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "D:\\cloudClass-project\\cloudClass\\cloud_class\\components\\Svg.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const UploadSvg = () => {
  return __jsx("svg", {
    t: "1590741692004",
    class: "icon",
    viewBox: "0 0 1024 1024",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    "p-id": "1301",
    width: "24",
    height: "24",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 9
    }
  }, __jsx("path", {
    d: "M952 359.1L676.9 85.3c-5.1-5.1-12.1-8-19.5-8H359.7c-66.7 0-120.9 54-120.9 120.7v288.5L259 467l1.4-1.2 2-1.2c9-7.4 20.1-12.3 31.7-14.4V197.9c0-36.2 29.4-65.6 65.6-65.6H622v156c0 66.7 54.2 121 120.9 121H905V826c0 36.2-29.4 65.7-65.8 65.7H490.4v33.7c0 7.5-1.7 14.6-4.3 21.4h353c66.7 0 120.9-54.4 120.9-120.9V378.6c0-7.4-2.9-14.4-8-19.5zM742.9 354c-36.3 0-65.7-29.5-65.7-65.7v-125L868.7 354H742.9z",
    "p-id": "1302",
    fill: "#707070",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }
  }), __jsx("path", {
    d: "M529.1 264.9H398.9c-12.2 0-22.1 10-22.1 22.2 0.1 12 9.8 22 22.1 22h130.2c12.1 0 22.1-9.9 22.1-22.1s-10-22.1-22.1-22.1zM399 356.6c-12.2 0-22.1 9.9-22.1 22.1 0 12.4 9.9 22.2 22.1 22.2h130.2c12.2 0.1 22.1-9.8 22.1-22.2 0-12.1-10-22.1-22.1-22.1H399zM608 708.3h191.6c12.1 0 22.1-9.9 22.1-22.1 0-12.2-10-22.2-22.1-22.2H608c-12.2 0-22.1 10-22.1 22.2s9.8 22.1 22.1 22.1zM799.6 756H609.4c-12.2 0-22.1 10-22.1 22.2s9.9 22 22.1 22h190.1c12.1 0 22.1-9.7 22.1-22 0.1-12.2-9.9-22.2-22-22.2zM799.6 616.5c12.1 0 22.1-9.9 22.1-22.1 0-12.2-10-22.2-22.1-22.2H608c-12.2 0-22.1 10-22.1 22.2s9.8 22.1 22.1 22.1h191.6zM550.2 721.6c0-5.8-2.7-11.1-7.5-14.9L326.5 499.1c-4.8-4.5-11.6-7.5-19.4-7.5-6.9 0-13.3 2.3-17.7 5.9h-0.6l-217 209c-0.1 0.1-0.4 0.2-0.5 0.4l-0.4 0.4c-4.3 3.8-6.9 8.9-6.9 14.4 0 11.5 11.6 21.2 25.8 21.2h76.8v182.5c0 11.2 11.2 20.4 25 20.4h231.2c13.8 0 25-9.2 25-20.4V742.8h76.6c14.1 0 25.8-9.5 25.8-21.2z",
    "p-id": "1303",
    fill: "#707070",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }
  }));
};
const ChangeSvg = () => {
  return __jsx("svg", {
    t: "1590752896137",
    class: "icon",
    viewBox: "0 0 1024 1024",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    "p-id": "2539",
    width: "24",
    height: "24",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }
  }, __jsx("path", {
    d: "M514 114.3c-219.9 0-398.9 178.9-398.9 398.8 0.1 220 179 398.9 398.9 398.9 219.9 0 398.8-178.9 398.8-398.8S733.9 114.3 514 114.3z m218.3 489v1.7c0 0.5-0.1 1-0.1 1.6 0 0.3 0 0.6-0.1 0.9 0 0.5-0.1 1-0.2 1.5 0 0.3-0.1 0.7-0.1 1-0.1 0.4-0.1 0.8-0.2 1.2-0.1 0.4-0.2 0.9-0.2 1.3-0.1 0.3-0.1 0.6-0.2 0.8-0.1 0.6-0.3 1.2-0.4 1.8 0 0.1-0.1 0.2-0.1 0.3-2.2 8.5-6.6 16.6-13.3 23.3L600.7 755.4c-20 20-52.7 20-72.6 0-20-20-20-52.7 0-72.6l28.9-28.9H347c-28.3 0-51.4-23.1-51.4-51.4 0-28.3 23.1-51.4 51.4-51.4h334c13.2 0 26.4 5 36.4 15s15 23.2 15 36.4c0 0.3-0.1 0.6-0.1 0.8z m0.1-179.5c0 28.3-23.1 51.4-51.4 51.4H347c-13.2 0-26.4-5-36.4-15s-15-23.2-15-36.4v-0.8-1.6c0-0.5 0.1-1.1 0.1-1.6 0-0.3 0-0.6 0.1-0.9 0-0.5 0.1-1 0.2-1.5 0-0.3 0.1-0.7 0.1-1 0.1-0.4 0.1-0.8 0.2-1.2 0.1-0.4 0.2-0.9 0.2-1.3 0.1-0.3 0.1-0.6 0.2-0.8 0.1-0.6 0.3-1.2 0.4-1.8 0-0.1 0.1-0.2 0.1-0.3 2.2-8.5 6.6-16.6 13.3-23.3l116.6-116.6c20-20 52.7-20 72.6 0 20 20 20 52.7 0 72.6L471 372.5h210c28.2 0 51.4 23.1 51.4 51.3z",
    "p-id": "2540",
    fill: "#707070",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }
  }));
};
const ScoreSvg = () => {
  return __jsx("svg", {
    t: "1590753608571",
    class: "icon",
    viewBox: "0 0 1024 1024",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    "p-id": "4782",
    width: "24",
    height: "24",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 9
    }
  }, __jsx("path", {
    d: "M908.992 195.584c-11.52-12.096-24.768-18.432-39.872-19.072h-10.88c-38.08 6.08-71.36 11.968-99.776 17.664-28.416 5.76-51.392 11.648-68.928 17.664-14.528 2.432-34.624 9.536-60.288 21.312-25.728 11.776-55.744 27.648-90.24 47.616-17.536 6.08-35.072 6.08-52.608 0-35.072-16.896-65.024-31.424-89.792-43.52l-55.296-25.408c-19.968-6.016-43.84-11.904-71.616-17.664-27.84-5.76-61.952-11.648-102.464-17.664h-11.776c-17.536 0.64-31.424 6.976-41.728 19.072-10.304 12.096-15.744 27.2-16.32 45.312v440.704c0.576 15.104 5.76 28.736 15.424 40.832 9.664 12.096 22.08 19.648 37.184 22.656 40.512 6.016 76.48 12.864 107.904 20.416 31.424 7.552 57.408 14.336 78.016 20.416l59.84 23.552c25.408 9.664 55.616 23.296 90.688 40.832 17.536 5.44 35.072 5.44 52.608 0 34.432-17.536 64.512-31.872 90.24-43.072 25.664-11.2 45.824-18.304 60.288-21.312 20.544-5.44 46.528-11.52 78.016-18.112l107.904-22.656c14.528-3.008 26.752-9.984 36.736-20.864 9.984-10.88 14.976-25.088 14.976-42.624V240.896c-0.704-18.112-6.72-33.216-18.24-45.312z m-297.664 531.584l-25.6-74.752H438.848l-25.6 74.752h-60.096L489.6 354.944h45.504l136.448 372.224h-60.224z",
    "p-id": "4783",
    fill: "#707070",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 13
    }
  }), __jsx("path", {
    d: "M455.552 604.288h114.496l-56.448-165.184z",
    "p-id": "4784",
    fill: "#707070",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 13
    }
  }));
};
const BackSvg = () => {
  return __jsx("svg", {
    t: "1590756593053",
    className: "icon",
    viewBox: "0 0 1024 1024",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    "p-id": "5592",
    width: "24",
    height: "24",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 9
    }
  }, __jsx("path", {
    d: "M538.622846 950.291255c257.534448-171.658591 308.738643-462.119963-75.504648-453.027887l0 225.514173L121.893676 381.529483 463.118198 40.281425l0 220.701564c218.259956-5.67321 470.02705 96.270601 470.02705 280.69596C933.146271 813.119105 768.337691 874.762047 538.622846 950.291255",
    "p-id": "5593",
    fill: "#707070",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 13
    }
  }));
};
const PasswordSvg = () => {
  return __jsx("svg", {
    t: "1590915292136",
    className: "icon",
    viewBox: "0 0 1024 1024",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    "p-id": "3250",
    width: "24",
    height: "24",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 9
    }
  }, __jsx("path", {
    d: "M512 623.104c-40.448 0-74.24 33.28-74.24 74.24S471.04 771.584 512 771.584s74.24-33.28 74.24-74.24c0-7.168 0-14.336-3.584-22.016-7.168 14.848-18.944 22.016-33.28 22.016-22.016 0-36.864-14.848-36.864-36.864 0-14.848 7.168-26.112 22.016-33.28-8.192-4.608-15.36-4.096-22.528-4.096z m0-37.376c61.952 0 111.104 49.152 111.104 111.104s-49.152 111.104-111.104 111.104-111.104-49.152-111.104-111.104 49.152-111.104 111.104-111.104z m0-73.728c-101.888 0-184.832 83.456-184.832 184.832s83.456 184.832 184.832 184.832 184.832-83.456 184.832-184.832-82.944-184.832-184.832-184.832z m-295.936-36.864h591.872v443.904h-591.872v-443.904z m295.936-370.176c101.888 0 184.832 82.944 184.832 184.832v111.104h-370.176v-111.104c0.512-101.888 83.456-184.832 185.344-184.832z m0-74.24c-142.336 0-259.072 116.736-259.072 259.072v111.104h-110.592V992.768H881.664V400.896h-111.104v-111.104c0.512-142.336-116.224-259.072-258.56-259.072z",
    "p-id": "3251",
    fill: "#707070",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 13
    }
  }));
};
const UserSvg = () => {
  return __jsx("svg", {
    t: "1590915523071",
    className: "icon",
    viewBox: "0 0 1024 1024",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    "p-id": "4117",
    width: "24",
    height: "24",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 9
    }
  }, __jsx("path", {
    d: "M811.739 966.597c-0.048 0-0.095 0-0.143 0l-718.856 0c-10.326 0-18.697-8.371-18.697-18.697l0-22.468c-0.318-6.267-0.911-40.604 21.004-78.307 13.716-23.598 33.431-43.861 58.598-60.225 30.493-19.829 69.116-33.909 114.796-41.849 0.233-0.04 0.467-0.076 0.701-0.107 0.347-0.047 35.499-4.859 71.209-14.273 61.895-16.318 67.308-30.743 67.346-30.884 0.364-1.431 0.894-2.804 1.573-4.095 0.508-2.699 1.764-12.859-0.638-40.08-6.101-69.136-42.12-109.995-71.061-142.826-9.128-10.355-17.749-20.133-24.387-29.723-28.64-41.372-31.297-88.416-31.396-90.399-0.015-0.311-0.023-0.622-0.023-0.933 0-18.78 9.363-27.418 17.624-35.041l0.434-0.401c0.271-0.251 0.442-0.437 0.542-0.557 0.093-1.341-0.567-4.743-1.013-7.041-0.17-0.874-0.34-1.751-0.501-2.633-7.18-38.982-7.671-99.192-1.176-137.837 2.41-50.813 46.225-89.711 48.105-91.356 0.072-0.062 0.143-0.124 0.215-0.185 6.29-5.339 12.672-11.169 16.728-17.637 0.487-0.776 0.828-1.377 1.066-1.837-0.305-0.787-0.742-1.794-1.095-2.608-2.436-5.619-6.118-14.109-4.024-25.024 1.264-6.589 6.078-18.362 24.118-23.174 7.261-1.937 15.022-2.333 20.689-2.622l1.123-0.058c22.39-1.179 46.273-2.177 70.435-0.324 174.73 13.396 234.92 78.686 237.396 81.459 0.14 0.156 0.276 0.314 0.409 0.475 13.987 16.757 24.347 37.635 30.796 62.055 2.015 7.62 3.309 14.016 4.063 20.072 6.103 35.465 5.085 71.904 3.782 96.269-0.733 13.675-2.257 28.03-4.8 45.176-0.692 4.656 0.069 5.565 0.355 5.906 0.758 0.907 1.686 1.892 2.668 2.935 3.863 4.099 9.152 9.713 11.964 18.721 1.41 4.503 2.069 9.36 2.069 15.268 0 0.311-0.008 0.622-0.023 0.933-0.099 1.982-2.756 49.026-31.395 90.398-6.639 9.59-15.26 19.369-24.387 29.723-28.942 32.83-64.96 73.689-71.061 142.828-2.402 27.221-1.145 37.379-0.638 40.08 0.678 1.291 1.208 2.665 1.573 4.094 0.037 0.141 5.472 14.614 67.649 30.964 35.705 9.389 70.558 14.146 70.906 14.193 0.304 0.041 0.607 0.09 0.909 0.145 46.096 8.55 84.957 22.992 115.505 42.923 25.252 16.476 44.93 36.702 58.489 60.114 21.502 37.129 20.627 70.714 20.196 77.444l0 22.333c0 10.326-8.371 18.697-18.697 18.697l-176.883 0c-10.326 0-18.697-8.371-18.697-18.697 0-10.326 8.371-18.697 18.697-18.697L934.07 929.207l0-4.311c0-0.687 0.009-1.106 0.082-1.769 0.104-1.508 1.627-28.332-16.349-58.131-10.82-17.938-26.59-33.609-46.87-46.581-26.1-16.693-59.762-28.968-100.052-36.483-4.64-0.643-39.012-5.565-75.081-15.06-70.761-18.629-87.964-39.353-93.189-54.396-4.004-7.766-6.245-23.195-2.985-60.153 7.181-81.369 49.419-129.282 80.261-164.268 8.747-9.922 16.301-18.491 21.693-26.279 21.12-30.511 24.438-66.3 24.765-70.606-0.033-2.252-0.261-3.223-0.362-3.55-0.249-0.798-1.897-2.547-3.49-4.238-1.25-1.327-2.668-2.833-4.136-4.587-7.95-9.504-10.783-21.079-8.66-35.385 2.368-15.96 3.781-29.206 4.449-41.684 1.951-36.502 0.914-63.748-3.364-88.341-0.057-0.326-0.105-0.655-0.145-0.983-0.531-4.438-1.531-9.354-3.148-15.469-4.987-18.884-12.727-34.771-23.007-47.233-1.714-1.748-15.385-15.125-45.883-29.676C583.715 93.84 517.807 84.174 472.181 80.675c-21.935-1.681-44.442-0.733-65.614 0.383l-1.179 0.06c-1.766 0.09-4.736 0.242-7.558 0.526 2.448 5.841 5.453 14.632 2.296 25.136-1.185 3.94-3.003 7.792-5.723 12.129-6.732 10.733-15.924 19.236-24.055 26.145-1.597 1.442-34.223 31.356-35.351 65.738-0.029 0.87-0.118 1.737-0.267 2.594-5.972 34.304-5.569 90.78 0.898 125.894 0.14 0.765 0.289 1.526 0.436 2.283 1.98 10.205 5.295 27.284-10.88 42.202l-0.435 0.402c-2.087 1.925-4.944 4.561-5.416 5.469l0 0c0.003 0-0.133 0.427-0.165 1.584 0.328 4.296 3.654 40.06 24.764 70.555 5.392 7.788 12.946 16.357 21.693 26.279 30.841 34.985 73.079 82.899 80.26 164.266 3.26 36.959 1.019 52.388-2.985 60.154-5.226 15.043-22.428 35.767-93.189 54.396-36.365 9.574-71.006 14.497-75.189 15.074-39.834 6.958-73.196 18.883-99.16 35.445-20.186 12.876-35.971 28.599-46.919 46.732-18.282 30.282-17.133 57.861-17.055 59.336 0.05 0.543 0.054 0.868 0.054 1.434l0 4.309 700.077 0M631.465 689.874c0.454 0.368 0.89 0.757 1.306 1.165C632.377 690.652 631.942 690.261 631.465 689.874zM414.041 689.874c-0.472 0.383-0.902 0.768-1.292 1.152C413.16 690.625 413.592 690.24 414.041 689.874z",
    "p-id": "4118",
    fill: "#707070",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 13
    }
  }));
};
const EmailSvg = () => {
  return __jsx("svg", {
    t: "1590916880313",
    className: "icon",
    viewBox: "0 0 1024 1024",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    "p-id": "4395",
    width: "24",
    height: "24",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 9
    }
  }, __jsx("path", {
    d: "M85.333333 170.666667v682.666666h853.333334V170.666667H85.333333z m698.453334 85.333333L512 497.578667 240.213333 256h543.573334zM170.666667 768V308.352l341.333333 303.402667 341.333333-303.402667V768H170.666667z",
    "p-id": "4396",
    fill: "#707070",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 13
    }
  }));
};
const NameSvg = () => {
  return __jsx("svg", {
    t: "1590917650588",
    className: "icon",
    viewBox: "0 0 1024 1024",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    "p-id": "5467",
    width: "24",
    height: "24",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 9
    }
  }, __jsx("path", {
    d: "M798.592 682.666667l-45.781333-113.322667L707.029333 682.666667h91.562667z m34.474667 85.333333h-160.512l-21.973334 54.4a42.666667 42.666667 0 1 1-79.146666-32l139.093333-344.192a42.624 42.624 0 0 1 29.568-25.472 42.666667 42.666667 0 0 1 54.4 23.978667l139.605333 345.514666a42.666667 42.666667 0 0 1-79.104 32L833.066667 768zM128 170.666667h768v85.333333H128V170.666667z m0 213.333333h469.333333v85.333333H128V384z m0 170.666667h341.333333v85.333333H128v-85.333333z m0 170.666666h256v85.333334H128v-85.333334z",
    "p-id": "5468",
    fill: "#707070",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 13
    }
  }));
};
const CollegeSvg = () => {
  return __jsx("svg", {
    t: "1590923902537",
    className: "icon",
    viewBox: "0 0 1024 1024",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    "p-id": "6361",
    width: "24",
    height: "24",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 9
    }
  }, __jsx("path", {
    d: "M908.303978 374.670262 510.97874 182.41354 113.64941 374.670262l55.555294 24.820292-0.029676 0c-1.992377 0-5.056156 299.307853-4.257977 346.889545 0.355087 20.974707 16.249079 30.928407 31.928177 30.928407 16.122189 0 32.016181-10.495028 30.618345-30.374798l1.541099-320.995805 61.234643 27.840068L290.239314 732.107023l0 11.168364 7.618515 8.214079c7.933693 8.503675 114.728998 87.12736 226.236628 85.99149 107.588367-1.083681 216.832444-78.982866 221.448578-82.287121l11.803837-8.532327 0-14.56574L757.346871 443.027116l-1.194198 0.358157L908.303978 374.670262 908.303978 374.670262zM199.024869 748.526995c-0.554632 0.159636-1.311879 0.285502-2.179642 0.285502-1.735527 0-2.888793-0.512676-3.190669-0.754177 0.045025 0-0.228197-0.668219-0.239454-2.179642-0.754177-44.488237 1.352811-246.144026 3.047406-317.90235l4.057409 0-1.535983 318.79979-0.028653 1.083681L199.024869 748.526995 199.024869 748.526995zM240.779855 400.005276l-40.048111-18.212804 0 0.594541-19.576871-8.744151 329.824891-159.586648L841.071737 373.786125 511.019673 522.835789l-208.704322-94.848205 0.399089 0-23.342638-10.438747L240.779855 400.005276 240.779855 400.005276zM728.850863 732.107023c0 0-105.267509 75.890434-205.070562 76.889181C418.949744 810.06249 319.41889 732.865293 318.706669 732.107023L318.706669 466.722794l192.272072 87.400582 217.872123-98.40931L728.850863 732.107023 728.850863 732.107023zM728.850863 732.107023",
    "p-id": "6362",
    fill: "#707070",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 13
    }
  }));
};
const SecurityCodeSvg = () => {
  return __jsx("svg", {
    t: "1590926063430",
    className: "icon",
    viewBox: "0 0 1024 1024",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    "p-id": "7231",
    width: "24",
    height: "24",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 9
    }
  }, __jsx("path", {
    d: "M511.92574 1023.975247C357.959389 1023.975247 71.50029 794.49855 71.50029 577.448076V163.162251c0-10.049894 8.416167-18.16902 18.837362-18.379424l24.95146-0.420808c0.953007 0 98.766196-1.967898 199.599304-41.895185 103.481725-40.843164 170.179849-87.936569 170.885322-88.419261l14.691162-10.421195a19.86463 19.86463 0 0 1 11.398956-3.601625 19.480951 19.480951 0 0 1 11.324696 3.539741l14.975826 10.507832c0.680719 0.482692 67.440727 47.526591 170.798685 88.419262 100.932121 39.927287 198.74531 41.895185 199.747825 41.895184l24.753432 0.420809c10.433572 0.210404 18.824985 8.32953 18.824986 18.379423l0.210404 414.285825c0 217.02572-286.508606 446.527171-440.6111 446.527171z m372.625797-812.568556c-37.860375-2.846645-117.516921-12.624251-200.267646-45.385419-84.557726-33.417134-146.725972-71.005221-172.358151-87.602398-25.557919 16.535293-87.763295 54.135757-172.296268 87.602398-82.602205 32.686908-162.03597 42.464514-200.416167 45.385419v366.041385c0 170.216979 249.576484 378.281957 372.712435 378.281957 47.724618 0 140.723264-38.726745 232.137691-123.767163 88.12222-81.909108 140.723264-177.07368 140.723264-254.490041z m-407.948946 435.660414a33.305744 33.305744 0 0 1-23.899439 10.049894 33.738929 33.738929 0 0 1-23.998453-10.037517l-101.674724-102.330691a34.345388 34.345388 0 0 1 0-48.269193 33.664668 33.664668 0 0 1 47.935022 0l77.738155 78.183717 196.269967-197.69329a33.590408 33.590408 0 0 1 47.910269 0 34.18449 34.18449 0 0 1 0 48.269194z m0 0",
    "p-id": "7232",
    fill: "#707070",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 13
    }
  }));
};
const StudentNumSvg = () => {
  return __jsx("svg", {
    t: "1591058256308",
    className: "icon",
    viewBox: "0 0 1024 1024",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    "p-id": "2056",
    width: "24",
    height: "24",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 9
    }
  }, __jsx("path", {
    d: "M153.6 339.2A19.2 19.2 0 0 0 134.4 358.4v460.8c0 10.5984 8.6016 19.2 19.2 19.2h716.8a19.2 19.2 0 0 0 19.2-19.2V358.4A19.2 19.2 0 0 0 870.4 339.2H153.6z m0-64h716.8c45.9264 0 83.2 37.2736 83.2 83.2v460.8c0 45.9264-37.2736 83.2-83.2 83.2H153.6A83.2 83.2 0 0 1 70.4 819.2V358.4c0-45.9264 37.2736-83.2 83.2-83.2z",
    fill: "#707070",
    "p-id": "2057",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 13
    }
  }), __jsx("path", {
    d: "M302.7968 476.8768h33.792l112.128 163.1232h1.2288V476.8768h33.4848v219.3408h-32.5632l-113.3568-164.9664h-1.2288v164.9664h-33.4848V476.8768z m321.024-4.3008c33.1776 0 59.5968 10.752 78.9504 32.5632 18.432 20.5824 27.648 47.9232 27.648 81.7152 0 33.4848-9.216 60.5184-27.648 81.408-19.3536 21.504-45.7728 32.256-78.9504 32.256-33.4848 0-59.904-11.0592-78.9504-32.5632-18.432-20.8896-27.3408-47.9232-27.3408-81.1008 0-33.4848 8.9088-60.5184 27.3408-81.408 19.0464-22.1184 45.4656-32.8704 78.9504-32.8704z m0 29.4912c-23.3472 0-41.472 7.68-54.3744 23.6544-12.288 15.0528-18.432 35.328-18.432 61.1328 0 25.4976 6.144 45.7728 18.432 60.8256 12.9024 15.36 31.0272 23.3472 54.3744 23.3472 23.3472 0 41.472-7.68 54.0672-22.7328 12.288-14.7456 18.7392-35.328 18.7392-61.44 0-26.4192-6.4512-47.0016-18.7392-62.0544-12.5952-15.36-30.72-22.7328-54.0672-22.7328z",
    fill: "#707070",
    "p-id": "2058",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 13
    }
  }), __jsx("path", {
    d: "M474.2144 211.2l12.8 64h49.9712l12.8-64H474.2144z m121.1904 98.1504a37.12 37.12 0 0 1-36.4032 29.8496H464.9984a37.12 37.12 0 0 1-36.352-29.8496l-23.552-117.76a37.12 37.12 0 0 1 29.0816-43.6736c3.584-0.6144 3.584-0.6144 7.2704-0.7168h141.1072c20.48 0 37.12 16.64 37.12 37.12-0.1024 3.6864-0.1024 3.6864-0.7168 7.2704l-23.552 117.76z",
    fill: "#707070",
    "p-id": "2059",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 13
    }
  }));
};

/***/ }),

/***/ "./components/config.js":
/*!******************************!*\
  !*** ./components/config.js ***!
  \******************************/
/*! exports provided: URL, RealAxios */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "URL", function() { return URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RealAxios", function() { return RealAxios; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
 // export const URL = "http://baiyou1024.top:8080/cloud_class-0.0.1-SNAPSHOT";

const URL = "http://localhost:8080";
const RealAxios = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({
  baseURL: URL,
  proxy: {
    '/teacher/*': {
      target: URL,
      //对应后端端口
      secure: false,
      changeOrigin: true
    },
    '/student/*': {
      target: URL,
      //对应后端端口
      secure: false,
      changeOrigin: true
    }
  }
});

/***/ }),

/***/ "./components/teacher/Context.js":
/*!***************************************!*\
  !*** ./components/teacher/Context.js ***!
  \***************************************/
/*! exports provided: PageContext, CourseContext, CoursesContext, TeacherContext, CourseOperateContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageContext", function() { return PageContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseContext", function() { return CourseContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoursesContext", function() { return CoursesContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeacherContext", function() { return TeacherContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseOperateContext", function() { return CourseOperateContext; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const PageContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])("index");
const CourseContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])(null);
const CoursesContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])({});
const TeacherContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])(null);
const CourseOperateContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])([]);

/***/ }),

/***/ "./components/teacher/header.js":
/*!**************************************!*\
  !*** ./components/teacher/header.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_affix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/affix */ "antd/lib/affix");
/* harmony import */ var antd_lib_affix__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_affix__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/row */ "antd/lib/row");
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/menu */ "antd/lib/menu");
/* harmony import */ var antd_lib_menu__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_menu__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/col */ "antd/lib/col");
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_teacher_sculpture__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/teacher/sculpture */ "./components/teacher/sculpture.js");
/* harmony import */ var _public_style_head_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../public/style/head.css */ "./public/style/head.css");
/* harmony import */ var _public_style_head_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_public_style_head_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _Context__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Context */ "./components/teacher/Context.js");




var _jsxFileName = "D:\\cloudClass-project\\cloudClass\\cloud_class\\components\\teacher\\header.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;







const Header = () => {
  const page = Object(react__WEBPACK_IMPORTED_MODULE_4__["useContext"])(_Context__WEBPACK_IMPORTED_MODULE_9__["PageContext"]);
  const {
    0: top,
    1: setTop
  } = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(0);
  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(() => {}, []);
  return __jsx(antd_lib_affix__WEBPACK_IMPORTED_MODULE_0___default.a, {
    offsetTop: top,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_8___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }
  }, __jsx("title", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 17
    }
  }, "\u4E91\u8BFE\u5802"), __jsx("meta", {
    charSet: "utf-8",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 17
    }
  })), __jsx("div", {
    id: "header-wrap",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }
  }, __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    span: 18,
    offset: 3,
    style: {
      height: "50px"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 17
    }
  }, __jsx(antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, {
    type: "flex",
    align: "bottom",
    id: "",
    style: {
      height: '50px'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 21
    }
  }, __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    span: 4,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 25
    }
  }, __jsx("div", {
    id: "logo-text",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 29
    }
  }, "CloudClass")), __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    span: 10,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 25
    }
  }, __jsx(antd_lib_menu__WEBPACK_IMPORTED_MODULE_2___default.a, {
    mode: "horizontal",
    defaultSelectedKeys: page,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 29
    }
  }, __jsx(antd_lib_menu__WEBPACK_IMPORTED_MODULE_2___default.a.Item, {
    key: "index",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 33
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
    href: "/teacher",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 37
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 59
    }
  }, "\u9996\u9875"))), __jsx(antd_lib_menu__WEBPACK_IMPORTED_MODULE_2___default.a.Item, {
    key: "discussion",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 33
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
    href: "/teacher",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 37
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 59
    }
  }, "\u8BA8\u8BBA\u533A"))))), __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    span: 2,
    offset: 8,
    style: {
      height: '100%',
      paddingTop: "5px"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 25
    }
  }, __jsx(_components_teacher_sculpture__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 29
    }
  }))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/teacher/index/archiveCourse.js":
/*!***************************************************!*\
  !*** ./components/teacher/index/archiveCourse.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/modal */ "antd/lib/modal");
/* harmony import */ var antd_lib_modal__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_modal__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/row */ "antd/lib/row");
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/col */ "antd/lib/col");
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_dropdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/dropdown */ "antd/lib/dropdown");
/* harmony import */ var antd_lib_dropdown__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_dropdown__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/menu */ "antd/lib/menu");
/* harmony import */ var antd_lib_menu__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_menu__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_lib_message__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/message */ "antd/lib/message");
/* harmony import */ var antd_lib_message__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_message__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_cookies__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-cookies */ "react-cookies");
/* harmony import */ var react_cookies__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_cookies__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../config */ "./components/config.js");
/* harmony import */ var _courseModule__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./courseModule */ "./components/teacher/index/courseModule.js");
/* harmony import */ var _Context__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Context */ "./components/teacher/Context.js");






var _jsxFileName = "D:\\cloudClass-project\\cloudClass\\cloud_class\\components\\teacher\\index\\archiveCourse.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;





const CourseContext = Object(react__WEBPACK_IMPORTED_MODULE_6__["createContext"])({});

const ArchiveCourse = () => {
  const {
    0: coursesInfo,
    1: setCoursesInfo
  } = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])([]);
  const {
    dispatch
  } = Object(react__WEBPACK_IMPORTED_MODULE_6__["useContext"])(_Context__WEBPACK_IMPORTED_MODULE_10__["CoursesContext"]);
  const {
    0: visible,
    1: setVisible
  } = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(false);

  const MoreOption = () => {
    const {
      coursesInfo,
      dispatch
    } = Object(react__WEBPACK_IMPORTED_MODULE_6__["useContext"])(_Context__WEBPACK_IMPORTED_MODULE_10__["CoursesContext"]);
    const courseInfo = Object(react__WEBPACK_IMPORTED_MODULE_6__["useContext"])(CourseContext);

    const getCourseInfo = () => {
      let result = [];
      Object(_config__WEBPACK_IMPORTED_MODULE_8__["RealAxios"])({
        method: 'post',
        url: '/course/getCourseByTeacher',
        data: {
          phone: react_cookies__WEBPACK_IMPORTED_MODULE_7___default.a.load("id")
        }
      }).then(response => {
        result = response.data;
        dispatch({
          type: "update",
          coursesInfo: []
        });
        dispatch({
          type: "update",
          coursesInfo: result
        });
      }).catch(error => {
        console.log(error);
      });
    };

    const resumeCourse = () => {
      Object(_config__WEBPACK_IMPORTED_MODULE_8__["RealAxios"])({
        method: 'post',
        url: '/course/archiveCourse',
        data: {
          'tcid': courseInfo.tcid,
          'cid': courseInfo.cid,
          'archive': 0
        }
      }).then(response => {
        console.log("msg:" + response.data);

        if (response.data === "success") {
          antd_lib_message__WEBPACK_IMPORTED_MODULE_5___default.a.success("恢复成功");

          getCourseInfo();
          getArchiveCourse();
        } else if (response.data === "failed") antd_lib_message__WEBPACK_IMPORTED_MODULE_5___default.a.error("恢复失败");
      }).catch(error => {
        console.log(error);
      });
    };

    const deleteCourse = () => {
      Object(_config__WEBPACK_IMPORTED_MODULE_8__["RealAxios"])({
        method: 'post',
        url: '/course/deleteCourse',
        data: {
          'cid': courseInfo.cid
        }
      }).then(response => {
        if (response.data === "success") {
          antd_lib_message__WEBPACK_IMPORTED_MODULE_5___default.a.success("课程删除成功");

          getCourseInfo();
          getArchiveCourse();
        } else if (response.data === "failed") antd_lib_message__WEBPACK_IMPORTED_MODULE_5___default.a.success("删除失败");
      }).catch(error => {
        console.log(error);
      });
    };

    const moreOption = __jsx(antd_lib_menu__WEBPACK_IMPORTED_MODULE_4___default.a, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 13
      }
    }, __jsx(antd_lib_menu__WEBPACK_IMPORTED_MODULE_4___default.a.Item, {
      key: "1",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 17
      }
    }, __jsx("span", {
      onClick: resumeCourse,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 21
      }
    }, "\u6062\u590D")), __jsx(antd_lib_menu__WEBPACK_IMPORTED_MODULE_4___default.a.Item, {
      key: "2",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 17
      }
    }, __jsx("span", {
      onClick: deleteCourse,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 21
      }
    }, "\u5220\u9664")));

    return __jsx(antd_lib_dropdown__WEBPACK_IMPORTED_MODULE_3___default.a, {
      overlay: moreOption,
      trigger: ['click'],
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 13
      }
    }, __jsx("span", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 17
      }
    }, "\u66F4\u591A"));
  };

  Object(react__WEBPACK_IMPORTED_MODULE_6__["useEffect"])(() => {
    getArchiveCourse();
  }, []);

  const getArchiveCourse = () => {
    let result = [];
    Object(_config__WEBPACK_IMPORTED_MODULE_8__["RealAxios"])({
      method: 'post',
      url: '/tc/findArchiveCourse',
      data: {
        phone: react_cookies__WEBPACK_IMPORTED_MODULE_7___default.a.load("id")
      }
    }).then(response => {
      result = response.data;
      setCoursesInfo(result);
    }).catch(error => {
      console.log(error);
    });
  };

  const openModal = () => {
    getArchiveCourse();
    setVisible(true);
  };

  const closeModal = () => {
    setVisible(false);
  };

  return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 9
    }
  }, __jsx("a", {
    onClick: openModal,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 13
    }
  }, "\u8BFE\u7A0B\u5F52\u6863"), __jsx(antd_lib_modal__WEBPACK_IMPORTED_MODULE_0___default.a, {
    title: "归档管理",
    visible: visible,
    footer: null,
    onCancel: closeModal,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 13
    }
  }, __jsx(antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, {
    justity: "center",
    style: {
      paddingLeft: 60 + 'px'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 17
    }
  }, coursesInfo.map((item, key) => __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_2___default.a, {
    key: key,
    span: 10,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 21
    }
  }, __jsx(antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, {
    align: "middle",
    gutter: [10, 20],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 25
    }
  }, __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_2___default.a, {
    offset: 1,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 29
    }
  }, __jsx("p", {
    style: {
      fontSize: 15 + 'px',
      width: 100 + 'px',
      margin: 0
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 45
    }
  }, item.cname)), __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_2___default.a, {
    offset: 1,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 29
    }
  }, __jsx(CourseContext.Provider, {
    value: item,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 33
    }
  }, __jsx(MoreOption, {
    onclick: getArchiveCourse,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 37
    }
  })))))))));
};

/* harmony default export */ __webpack_exports__["default"] = (ArchiveCourse);

/***/ }),

/***/ "./components/teacher/index/courseAddModule.js":
/*!*****************************************************!*\
  !*** ./components/teacher/index/courseAddModule.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/modal */ "antd/lib/modal");
/* harmony import */ var antd_lib_modal__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_modal__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/row */ "antd/lib/row");
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/input */ "antd/lib/input");
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_message__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/message */ "antd/lib/message");
/* harmony import */ var antd_lib_message__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_message__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/select */ "antd/lib/select");
/* harmony import */ var antd_lib_select__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_select__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _public_style_teacher_course_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../public/style/teacher/course.css */ "./public/style/teacher/course.css");
/* harmony import */ var _public_style_teacher_course_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_public_style_teacher_course_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../config */ "./components/config.js");
/* harmony import */ var react_cookies__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-cookies */ "react-cookies");
/* harmony import */ var react_cookies__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_cookies__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _Context__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Context */ "./components/teacher/Context.js");





var _jsxFileName = "D:\\cloudClass-project\\cloudClass\\cloud_class\\components\\teacher\\index\\courseAddModule.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;






const CourseAddModule = () => {
  const {
    coursesInfo,
    dispatch
  } = Object(react__WEBPACK_IMPORTED_MODULE_6__["useContext"])(_Context__WEBPACK_IMPORTED_MODULE_9__["CoursesContext"]);
  const {
    0: visible,
    1: setVisible
  } = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(false);
  const {
    0: courseName,
    1: setCourseName
  } = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])('');
  const {
    0: teacherId,
    1: setTeacherId
  } = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])('');
  const {
    0: courseDate,
    1: setCourseDate
  } = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])('2019-2020');
  const {
    Option
  } = antd_lib_select__WEBPACK_IMPORTED_MODULE_4___default.a;
  const data = [{
    'option': '2015-2016'
  }, {
    'option': '2016-2017'
  }, {
    'option': '2017-2018'
  }, {
    'option': '2018-2019'
  }, {
    'option': '2019-2020'
  }, {
    'option': '2021-2022'
  }, {
    'option': '2022-2023'
  }, {
    'option': '2023-2024'
  }];
  Object(react__WEBPACK_IMPORTED_MODULE_6__["useEffect"])(() => {
    getTeacherId();
  }, []);

  const getCourseInfo = () => {
    let result = [];
    Object(_config__WEBPACK_IMPORTED_MODULE_7__["RealAxios"])({
      method: 'post',
      url: '/course/getCourseByTeacher',
      data: {
        phone: react_cookies__WEBPACK_IMPORTED_MODULE_8___default.a.load("id")
      }
    }).then(response => {
      result = response.data;
      dispatch({
        type: "update",
        coursesInfo: []
      });
      dispatch({
        type: "update",
        coursesInfo: result
      });
    }).catch(error => {
      console.log(error);
    });
  };

  const openModal = () => {
    setVisible(true);
  };

  const getTeacherId = () => {
    Object(_config__WEBPACK_IMPORTED_MODULE_7__["RealAxios"])({
      method: 'post',
      url: '/teacher/getInfo',
      data: {
        'phone': react_cookies__WEBPACK_IMPORTED_MODULE_8___default.a.load("id")
      }
    }).then(response => {
      setTeacherId(response.data.tid);
    }).catch(error => {
      console.log(error);
    });
  };

  const handleOk = () => {
    Object(_config__WEBPACK_IMPORTED_MODULE_7__["RealAxios"])({
      method: 'post',
      url: '/course/createCourse',
      data: {
        'tid': teacherId,
        'cname': courseName,
        'cdate': courseDate
      }
    }).then(response => {
      if (response.data.msg === "success") {
        antd_lib_message__WEBPACK_IMPORTED_MODULE_3___default.a.success("课程创建成功");

        getCourseInfo();
      } else if (response.data.msg === "failed") antd_lib_message__WEBPACK_IMPORTED_MODULE_3___default.a.error("课程创建失败");
    }).catch(error => {
      console.log(error);
    });
    setVisible(false);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  return __jsx("div", {
    className: "course-module",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "course-module-add-header",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 13
    }
  }), __jsx("div", {
    style: {
      height: 159 + 'px',
      borderRadius: '0 0 8px 8px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'start'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 13
    }
  }, __jsx("p", {
    style: {
      height: 24 + 'px',
      textAlign: "center",
      cursor: "pointer"
    },
    onClick: openModal,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 17
    }
  }, __jsx("span", {
    style: {
      fontSize: 24 + 'px',
      fontWeight: "bold"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 21
    }
  }, "+"), __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 80
    }
  }), "\u521B\u5EFA\u8BFE\u7A0B"), __jsx(antd_lib_modal__WEBPACK_IMPORTED_MODULE_0___default.a, {
    title: "创建课程",
    visible: visible,
    onOk: handleOk,
    okText: '创建',
    cancelText: '取消',
    onCancel: handleCancel,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 17
    }
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 21
    }
  }, __jsx(antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, {
    style: {
      margin: "10px"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 25
    }
  }, __jsx(antd_lib_input__WEBPACK_IMPORTED_MODULE_2___default.a, {
    size: "large",
    type: "text",
    placeholder: "\u8BFE\u7A0B\u540D\u79F0",
    value: courseName,
    onChange: e => {
      setCourseName(e.target.value);
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 29
    }
  })), __jsx(antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, {
    style: {
      margin: "10px"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 25
    }
  }, __jsx(antd_lib_select__WEBPACK_IMPORTED_MODULE_4___default.a, {
    size: "large",
    defaultValue: "2019-2020",
    style: {
      width: 452 + 'px'
    },
    onChange: value => {
      setCourseDate(value);
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 29
    }
  }, data.map((item, key) => __jsx(Option, {
    value: item.option,
    key: key,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 37
    }
  }, item.option))))))));
};

/* harmony default export */ __webpack_exports__["default"] = (CourseAddModule);

/***/ }),

/***/ "./components/teacher/index/courseAddSpan.js":
/*!***************************************************!*\
  !*** ./components/teacher/index/courseAddSpan.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/modal */ "antd/lib/modal");
/* harmony import */ var antd_lib_modal__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_modal__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/row */ "antd/lib/row");
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/input */ "antd/lib/input");
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_message__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/message */ "antd/lib/message");
/* harmony import */ var antd_lib_message__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_message__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Svg */ "./components/Svg.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../config */ "./components/config.js");
/* harmony import */ var react_cookies__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-cookies */ "react-cookies");
/* harmony import */ var react_cookies__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_cookies__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Context__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Context */ "./components/teacher/Context.js");




var _jsxFileName = "D:\\cloudClass-project\\cloudClass\\cloud_class\\components\\teacher\\index\\courseAddSpan.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;






const CourseAddSpan = () => {
  const {
    0: visible,
    1: setVisible
  } = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false);
  const {
    0: courseCode,
    1: setCourseCode
  } = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])('');
  const {
    dispatch
  } = Object(react__WEBPACK_IMPORTED_MODULE_4__["useContext"])(_Context__WEBPACK_IMPORTED_MODULE_8__["CoursesContext"]);
  const {
    0: teacherId,
    1: setTeacherId
  } = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])('');

  const openModal = () => {
    setVisible(true);
  };

  const getCourseInfo = () => {
    let result = [];
    Object(_config__WEBPACK_IMPORTED_MODULE_6__["RealAxios"])({
      method: 'post',
      url: '/course/getCourseByTeacher',
      data: {
        phone: react_cookies__WEBPACK_IMPORTED_MODULE_7___default.a.load("id")
      }
    }).then(response => {
      result = response.data;
      dispatch({
        type: "update",
        coursesInfo: []
      });
      dispatch({
        type: "update",
        coursesInfo: result
      });
    }).then(error => {
      console.log(error);
    });
  };

  const getTeacherId = () => {
    Object(_config__WEBPACK_IMPORTED_MODULE_6__["RealAxios"])({
      method: 'post',
      url: '/teacher/getInfo',
      data: {
        'phone': react_cookies__WEBPACK_IMPORTED_MODULE_7___default.a.load("id")
      }
    }).then(response => {
      setTeacherId(response.data.tid);
    }).catch(error => {
      console.log(error);
    });
  };

  getTeacherId();

  const handleOk = () => {
    Object(_config__WEBPACK_IMPORTED_MODULE_6__["RealAxios"])({
      method: 'post',
      url: '/tc/addTeachCourse',
      data: {
        'tid': teacherId,
        'invite': courseCode
      }
    }).then(response => {
      if (response.data === "success") {
        antd_lib_message__WEBPACK_IMPORTED_MODULE_3___default.a.success("加入课程成功");

        getCourseInfo();
      } else if (response.data === "failed") antd_lib_message__WEBPACK_IMPORTED_MODULE_3___default.a.error("加课失败");else if (response.data === "existed_error") antd_lib_message__WEBPACK_IMPORTED_MODULE_3___default.a.error("课程已加入，无需再次申请");else if (response.data === "not_exist_error") antd_lib_message__WEBPACK_IMPORTED_MODULE_3___default.a.error("无效课程邀请码");else if (response.data === "illegal_error") antd_lib_message__WEBPACK_IMPORTED_MODULE_3___default.a.error("无效课程邀请码");
    }).catch(error => {
      console.log(error);
    });
    setVisible(false);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 9
    }
  }, __jsx("span", {
    onClick: openModal,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 13
    }
  }, "\u52A0\u5165\u8BFE\u7A0B", visible), __jsx(antd_lib_modal__WEBPACK_IMPORTED_MODULE_0___default.a, {
    title: "加入课程",
    visible: visible,
    onOk: handleOk,
    okText: '加入',
    cancelText: '取消',
    onCancel: handleCancel,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 13
    }
  }, __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 17
    }
  }, __jsx(antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, {
    style: {
      margin: "10px"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 20
    }
  }, __jsx(antd_lib_input__WEBPACK_IMPORTED_MODULE_2___default.a, {
    size: "large",
    type: "text",
    placeholder: "\u8BF7\u8F93\u5165\u8BFE\u7A0B\u52A0\u8BFE\u9A8C\u8BC1\u7801",
    value: courseCode,
    onChange: e => {
      setCourseCode(e.target.value);
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 21
    }
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (CourseAddSpan);

/***/ }),

/***/ "./components/teacher/index/courseCreateSpan.js":
/*!******************************************************!*\
  !*** ./components/teacher/index/courseCreateSpan.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/modal */ "antd/lib/modal");
/* harmony import */ var antd_lib_modal__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_modal__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/row */ "antd/lib/row");
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/input */ "antd/lib/input");
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_message__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/message */ "antd/lib/message");
/* harmony import */ var antd_lib_message__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_message__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/select */ "antd/lib/select");
/* harmony import */ var antd_lib_select__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_select__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Svg */ "./components/Svg.js");
/* harmony import */ var react_cookies__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-cookies */ "react-cookies");
/* harmony import */ var react_cookies__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_cookies__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../config */ "./components/config.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _Context__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Context */ "./components/teacher/Context.js");





var _jsxFileName = "D:\\cloudClass-project\\cloudClass\\cloud_class\\components\\teacher\\index\\courseCreateSpan.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;







const CourseCreateSpan = () => {
  const {
    0: visible,
    1: setVisible
  } = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(false);
  const {
    0: courseName,
    1: setCourseName
  } = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])('');
  const {
    0: teacherId,
    1: setTeacherId
  } = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])('');
  const {
    coursesInfo,
    dispatch
  } = Object(react__WEBPACK_IMPORTED_MODULE_5__["useContext"])(_Context__WEBPACK_IMPORTED_MODULE_10__["CoursesContext"]);
  const {
    0: courseDate,
    1: setCourseDate
  } = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])('2019-2020');
  const {
    Option
  } = antd_lib_select__WEBPACK_IMPORTED_MODULE_4___default.a;
  const data = [{
    'option': '2015-2016'
  }, {
    'option': '2016-2017'
  }, {
    'option': '2017-2018'
  }, {
    'option': '2018-2019'
  }, {
    'option': '2019-2020'
  }, {
    'option': '2021-2022'
  }, {
    'option': '2022-2023'
  }, {
    'option': '2023-2024'
  }];
  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(() => {
    getTeacherId();
  });

  const getCourseInfo = () => {
    let result = [];
    Object(_config__WEBPACK_IMPORTED_MODULE_8__["RealAxios"])({
      method: 'post',
      url: '/course/getCourseByTeacher',
      data: {
        phone: react_cookies__WEBPACK_IMPORTED_MODULE_7___default.a.load("id")
      }
    }).then(response => {
      result = response.data;
      dispatch({
        type: "update",
        coursesInfo: []
      });
      dispatch({
        type: "update",
        coursesInfo: result
      });
    }).catch(error => {
      console.log(error);
    });
  };

  const openModal = () => {
    setVisible(true);
  };

  const getTeacherId = () => {
    Object(_config__WEBPACK_IMPORTED_MODULE_8__["RealAxios"])({
      method: 'post',
      url: '/teacher/getInfo',
      data: {
        'phone': react_cookies__WEBPACK_IMPORTED_MODULE_7___default.a.load("id")
      }
    }).then(response => {
      setTeacherId(response.data.tid);
    }).catch(error => {
      console.log(error);
    });
  };

  const handleOk = () => {
    Object(_config__WEBPACK_IMPORTED_MODULE_8__["RealAxios"])({
      method: 'post',
      url: '/course/createCourse',
      data: {
        'tid': teacherId,
        'cname': courseName,
        'cdate': courseDate
      }
    }).then(response => {
      if (response.data.msg === "success") {
        antd_lib_message__WEBPACK_IMPORTED_MODULE_3___default.a.success("课程创建成功");

        getCourseInfo();
      } else if (response.data.msg === "failed") antd_lib_message__WEBPACK_IMPORTED_MODULE_3___default.a.success("课程创建失败");
    }).catch(error => {
      console.log(error);
    });
    setVisible(false);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 9
    }
  }, __jsx("span", {
    onClick: openModal,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 13
    }
  }, "\u521B\u5EFA\u8BFE\u7A0B", visible), __jsx(antd_lib_modal__WEBPACK_IMPORTED_MODULE_0___default.a, {
    title: "创建课程",
    visible: visible,
    onOk: handleOk,
    okText: '创建',
    cancelText: '取消',
    onCancel: handleCancel,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 13
    }
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 17
    }
  }, __jsx(antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, {
    style: {
      margin: "10px"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 21
    }
  }, __jsx(antd_lib_input__WEBPACK_IMPORTED_MODULE_2___default.a, {
    size: "large",
    type: "text",
    placeholder: "\u8BFE\u7A0B\u540D\u79F0",
    value: courseName,
    onChange: e => {
      setCourseName(e.target.value);
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 25
    }
  })), __jsx(antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, {
    style: {
      margin: "10px"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 21
    }
  }, __jsx(antd_lib_select__WEBPACK_IMPORTED_MODULE_4___default.a, {
    size: "large",
    defaultValue: "2019-2020",
    style: {
      width: 452 + 'px'
    },
    onChange: value => {
      setCourseDate(value);
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 25
    }
  }, data.map((item, key) => __jsx(Option, {
    value: item.option,
    key: key,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 33
    }
  }, item.option)))))));
};

/* harmony default export */ __webpack_exports__["default"] = (CourseCreateSpan);

/***/ }),

/***/ "./components/teacher/index/courseModule.js":
/*!**************************************************!*\
  !*** ./components/teacher/index/courseModule.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/modal */ "antd/lib/modal");
/* harmony import */ var antd_lib_modal__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_modal__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/input */ "antd/lib/input");
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_dropdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/dropdown */ "antd/lib/dropdown");
/* harmony import */ var antd_lib_dropdown__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_dropdown__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/row */ "antd/lib/row");
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/col */ "antd/lib/col");
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_lib_avatar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/avatar */ "antd/lib/avatar");
/* harmony import */ var antd_lib_avatar__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_avatar__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var antd_lib_menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd/lib/menu */ "antd/lib/menu");
/* harmony import */ var antd_lib_menu__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(antd_lib_menu__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var antd_lib_message__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd/lib/message */ "antd/lib/message");
/* harmony import */ var antd_lib_message__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(antd_lib_message__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var antd_lib_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! antd/lib/select */ "antd/lib/select");
/* harmony import */ var antd_lib_select__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(antd_lib_select__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _Context__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Context */ "./components/teacher/Context.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _public_style_teacher_course_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../public/style/teacher/course.css */ "./public/style/teacher/course.css");
/* harmony import */ var _public_style_teacher_course_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_public_style_teacher_course_css__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../config */ "./components/config.js");
/* harmony import */ var react_cookies__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-cookies */ "react-cookies");
/* harmony import */ var react_cookies__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_cookies__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_14__);









var _jsxFileName = "D:\\cloudClass-project\\cloudClass\\cloud_class\\components\\teacher\\index\\courseModule.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement;







const CourseModule = () => {
  const {
    item,
    coursesInfo,
    dispatch
  } = Object(react__WEBPACK_IMPORTED_MODULE_10__["useContext"])(_Context__WEBPACK_IMPORTED_MODULE_9__["CoursesContext"]);
  const {
    0: courseInfo,
    1: setCourseInfo
  } = Object(react__WEBPACK_IMPORTED_MODULE_10__["useState"])(item);
  const {
    0: image,
    1: setImage
  } = Object(react__WEBPACK_IMPORTED_MODULE_10__["useState"])("");
  const {
    0: visible,
    1: setVisible
  } = Object(react__WEBPACK_IMPORTED_MODULE_10__["useState"])(false);
  const {
    0: courseName,
    1: setCourseName
  } = Object(react__WEBPACK_IMPORTED_MODULE_10__["useState"])(courseInfo.cname);
  const {
    0: courseDate,
    1: setCourseDate
  } = Object(react__WEBPACK_IMPORTED_MODULE_10__["useState"])(courseInfo.cdate);
  const {
    Option
  } = antd_lib_select__WEBPACK_IMPORTED_MODULE_8___default.a;
  const data = [{
    'option': '2015-2016'
  }, {
    'option': '2016-2017'
  }, {
    'option': '2017-2018'
  }, {
    'option': '2018-2019'
  }, {
    'option': '2019-2020'
  }, {
    'option': '2021-2022'
  }, {
    'option': '2022-2023'
  }, {
    'option': '2023-2024'
  }];
  Object(react__WEBPACK_IMPORTED_MODULE_10__["useEffect"])(() => {
    Object(_config__WEBPACK_IMPORTED_MODULE_12__["RealAxios"])({
      method: 'post',
      url: "/teacher/getHeaderImg",
      data: {
        'phone': courseInfo.tphone
      }
    }).then(response => {
      setImage('data:image/png;base64,' + response.data.image);
    }).catch(error => {
      console.log(error);
    });
  });

  const getCourseInfo = () => {
    let result = [];
    Object(_config__WEBPACK_IMPORTED_MODULE_12__["RealAxios"])({
      method: 'post',
      url: '/course/getCourseByTeacher',
      data: {
        phone: react_cookies__WEBPACK_IMPORTED_MODULE_13___default.a.load("id")
      }
    }).then(response => {
      result = response.data;
      dispatch({
        type: "update",
        coursesInfo: []
      });
      dispatch({
        type: "update",
        coursesInfo: result
      });
    }).catch(error => {
      console.log(error);
    });
  };

  const openModal = () => {
    setVisible(true);
  };

  const handleOk = () => {
    Object(_config__WEBPACK_IMPORTED_MODULE_12__["RealAxios"])({
      method: 'post',
      url: '/course/updateCourse',
      data: {
        'cid': courseInfo.cid,
        'cname': courseName,
        'cdate': courseDate
      }
    }).then(response => {
      console.log(response.data);

      if (response.data === "success") {
        antd_lib_message__WEBPACK_IMPORTED_MODULE_7___default.a.success("修改成功");
      }

      getCourseInfo();
    }).catch(error => {
      console.log(error);
    });
    setVisible(false);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  const archiveSelf = () => {
    Object(_config__WEBPACK_IMPORTED_MODULE_12__["RealAxios"])({
      method: 'post',
      url: '/tc/archiveCourse',
      data: {
        'tcid': courseInfo.tcid,
        'archive': 1
      }
    }).then(response => {
      console.log(courseInfo.cname + response.data);
      getCourseInfo();
    }).then(error => {
      console.log(error);
    });
  };

  const archiveAll = () => {
    Object(_config__WEBPACK_IMPORTED_MODULE_12__["RealAxios"])({
      method: 'post',
      url: '/course/archiveCourse',
      data: {
        'cid': courseInfo.cid,
        'archive': 1
      }
    }).then(response => {
      console.log(response.data);
      getCourseInfo();
    }).catch(error => {
      console.log(error);
    });
  };

  const deleteCourse = () => {
    Object(_config__WEBPACK_IMPORTED_MODULE_12__["RealAxios"])({
      method: 'post',
      url: '/course/deleteCourse',
      data: {
        'cid': courseInfo.cid
      }
    }).then(response => {
      console.log(response.data);
      getCourseInfo();
    }).catch(error => {
      console.log(error);
    });
  };

  const MoreOption = __jsx(antd_lib_menu__WEBPACK_IMPORTED_MODULE_6___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 9
    }
  }, __jsx(antd_lib_menu__WEBPACK_IMPORTED_MODULE_6___default.a.Item, {
    key: "1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 13
    }
  }, __jsx("span", {
    onClick: openModal,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 17
    }
  }, "\u7F16\u8F91")), __jsx(antd_lib_menu__WEBPACK_IMPORTED_MODULE_6___default.a.Item, {
    key: "2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 13
    }
  }, __jsx("span", {
    onClick: archiveSelf,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 17
    }
  }, "\u5F52\u6863\u81EA\u5DF1")), __jsx(antd_lib_menu__WEBPACK_IMPORTED_MODULE_6___default.a.Item, {
    key: "3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 13
    }
  }, __jsx("span", {
    onClick: archiveAll,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 17
    }
  }, "\u5F52\u6863\u6240\u6709")), __jsx(antd_lib_menu__WEBPACK_IMPORTED_MODULE_6___default.a.Item, {
    key: "4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 13
    }
  }, __jsx("span", {
    onClick: deleteCourse,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 17
    }
  }, "\u5220\u9664")));

  return __jsx("div", {
    className: "course-module",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "course-module-header",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "course-module-header-left",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 17
    }
  }, __jsx("span", {
    style: {
      fontSize: 20 + 'px',
      color: "#fff"
    },
    onClick: () => next_router__WEBPACK_IMPORTED_MODULE_14___default.a.push("/teacher/detail?id=" + courseInfo.cid),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 21
    }
  }, courseInfo.cname), __jsx("span", {
    style: {
      fontSize: 12 + 'px',
      color: "rgba(255,255,255,1)"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 21
    }
  }, courseInfo.invite)), __jsx("span", {
    style: {
      color: "rgba(255,255,255,1)",
      alignSelf: "flex-end"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 17
    }
  }, courseInfo.cdate)), __jsx("ul", {
    className: "course-module-body",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 13
    }
  }, __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 17
    }
  }, __jsx("span", {
    style: {
      color: "rgba(95,99,104,1)",
      fontSize: 12 + 'px'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 21
    }
  }, "\u6700\u8FD1\u4F5C\u4E1A")), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 17
    }
  }, courseInfo.work)), __jsx("div", {
    className: "course-module-footer",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 13
    }
  }, __jsx(antd_lib_row__WEBPACK_IMPORTED_MODULE_3___default.a, {
    justify: "space-between",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 17
    }
  }, __jsx(antd_lib_row__WEBPACK_IMPORTED_MODULE_3___default.a, {
    justity: "start",
    gutter: [10, 0],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 21
    }
  }, __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174,
      columnNumber: 25
    }
  }, __jsx(antd_lib_avatar__WEBPACK_IMPORTED_MODULE_5___default.a, {
    src: image,
    size: 24,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175,
      columnNumber: 29
    }
  })), __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177,
      columnNumber: 25
    }
  }, courseInfo.tname)), __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_4___default.a, {
    justity: "start",
    gutter: "[5,0]",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 21
    }
  }, __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180,
      columnNumber: 25
    }
  }, __jsx(antd_lib_dropdown__WEBPACK_IMPORTED_MODULE_2___default.a, {
    overlay: MoreOption,
    trigger: ['click'],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181,
      columnNumber: 29
    }
  }, __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 33
    }
  }, "\u66F4\u591A")))))), __jsx(antd_lib_modal__WEBPACK_IMPORTED_MODULE_0___default.a, {
    title: "修改课程信息",
    visible: visible,
    onOk: handleOk,
    okText: '保存',
    cancelText: '取消',
    onCancel: handleCancel,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 13
    }
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195,
      columnNumber: 17
    }
  }, __jsx(antd_lib_row__WEBPACK_IMPORTED_MODULE_3___default.a, {
    style: {
      margin: "10px"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196,
      columnNumber: 21
    }
  }, __jsx(antd_lib_input__WEBPACK_IMPORTED_MODULE_1___default.a, {
    size: "large",
    type: "text",
    placeholder: courseName,
    onChange: e => {
      setCourseName(e.target.value);
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197,
      columnNumber: 25
    }
  })), __jsx(antd_lib_row__WEBPACK_IMPORTED_MODULE_3___default.a, {
    style: {
      margin: "10px"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199,
      columnNumber: 21
    }
  }, __jsx(antd_lib_select__WEBPACK_IMPORTED_MODULE_8___default.a, {
    size: "large",
    defaultValue: courseDate,
    style: {
      width: 452 + 'px'
    },
    onChange: value => {
      setCourseDate(value);
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200,
      columnNumber: 25
    }
  }, data.map((item, key) => __jsx(Option, {
    value: item.option,
    key: key,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202,
      columnNumber: 33
    }
  }, item.option)))))));
};

/* harmony default export */ __webpack_exports__["default"] = (CourseModule);

/***/ }),

/***/ "./components/teacher/index/optionMenu.js":
/*!************************************************!*\
  !*** ./components/teacher/index/optionMenu.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/menu */ "antd/lib/menu");
/* harmony import */ var antd_lib_menu__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_menu__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _courseCreateSpan__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./courseCreateSpan */ "./components/teacher/index/courseCreateSpan.js");
/* harmony import */ var _courseAddSpan__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./courseAddSpan */ "./components/teacher/index/courseAddSpan.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "D:\\cloudClass-project\\cloudClass\\cloud_class\\components\\teacher\\index\\optionMenu.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;




const AddOrCreateCourseMenu = __jsx(antd_lib_menu__WEBPACK_IMPORTED_MODULE_0___default.a, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 5
  }
}, __jsx(antd_lib_menu__WEBPACK_IMPORTED_MODULE_0___default.a.Item, {
  key: "1",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 9
  }
}, __jsx(_courseCreateSpan__WEBPACK_IMPORTED_MODULE_1__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 13
  }
})), __jsx(antd_lib_menu__WEBPACK_IMPORTED_MODULE_0___default.a.Item, {
  key: "2",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 9
  }
}, __jsx(_courseAddSpan__WEBPACK_IMPORTED_MODULE_2__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 13
  }
})));

/* harmony default export */ __webpack_exports__["default"] = (AddOrCreateCourseMenu);

/***/ }),

/***/ "./components/teacher/sculpture.js":
/*!*****************************************!*\
  !*** ./components/teacher/sculpture.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_popover__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/popover */ "antd/lib/popover");
/* harmony import */ var antd_lib_popover__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_popover__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_avatar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/avatar */ "antd/lib/avatar");
/* harmony import */ var antd_lib_avatar__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_avatar__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/row */ "antd/lib/row");
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/col */ "antd/lib/col");
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_cookies__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-cookies */ "react-cookies");
/* harmony import */ var react_cookies__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_cookies__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../config */ "./components/config.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _public_style_head_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../public/style/head.css */ "./public/style/head.css");
/* harmony import */ var _public_style_head_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_public_style_head_css__WEBPACK_IMPORTED_MODULE_9__);




var _jsxFileName = "D:\\cloudClass-project\\cloudClass\\cloud_class\\components\\teacher\\sculpture.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;







const action = __jsx(antd_lib_row__WEBPACK_IMPORTED_MODULE_2___default.a, {
  type: "flex",
  justify: "center",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 5
  }
}, __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 9
  }
}, __jsx(antd_lib_row__WEBPACK_IMPORTED_MODULE_2___default.a, {
  type: "flex",
  align: "middle",
  justify: "center",
  gutter: [10, 0],
  className: "header-action",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 13
  }
}, __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
  span: 24,
  onClick: () => {
    next_router__WEBPACK_IMPORTED_MODULE_6___default.a.push("/teacher/personal");
  },
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 17
  }
}, "\u4E2A\u4EBA\u4E2D\u5FC3")), __jsx(antd_lib_row__WEBPACK_IMPORTED_MODULE_2___default.a, {
  typw: "flex",
  align: "middle",
  justify: "center",
  gutter: [20, 0],
  className: "header-action",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 13
  }
}, __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
  span: 24,
  onClick: () => {
    react_cookies__WEBPACK_IMPORTED_MODULE_5___default.a.remove("identify", {
      path: "/"
    });
    react_cookies__WEBPACK_IMPORTED_MODULE_5___default.a.remove("id", {
      path: "/"
    });
    next_router__WEBPACK_IMPORTED_MODULE_6___default.a.push("/teacher/login");
  },
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 17
  }
}, "\u9000\u51FA\u767B\u5F55"))));

const Sculpture = () => {
  const {
    0: image,
    1: setImage
  } = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])("");
  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(() => {
    const phone = react_cookies__WEBPACK_IMPORTED_MODULE_5___default.a.load("id");
    Object(_config__WEBPACK_IMPORTED_MODULE_7__["RealAxios"])({
      method: 'post',
      url: "/teacher/getHeaderImg",
      data: {
        'phone': phone + ""
      }
    }).then(response => {
      setImage('data:image/png;base64,' + response.data.image);
    }).catch(error => {
      console.log(error);
    });
  }, []);
  return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 9
    }
  }, __jsx(antd_lib_popover__WEBPACK_IMPORTED_MODULE_0___default.a, {
    trigger: "hover",
    placement: "bottom",
    arrowPointAtCenter: true,
    content: action,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 13
    }
  }, __jsx(antd_lib_avatar__WEBPACK_IMPORTED_MODULE_1___default.a, {
    src: image,
    size: 36,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 17
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Sculpture);

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _url = __webpack_require__(/*! url */ "url");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "../next-server/lib/utils");

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

var _router2 = __webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js");

function isLocal(href) {
  const url = (0, _url.parse)(href, false, true);
  const origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  let lastHref = null;
  let lastAs = null;
  let lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    const result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

let observer;
const listeners = new Map();
const IntersectionObserver = false ? undefined : null;
const prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      const cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

const listenToIntersections = (el, cb) => {
  const observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: (0, _router2.addBasePath)(formatUrl(href)),
        as: asHref ? (0, _router2.addBasePath)(formatUrl(asHref)) : asHref
      };
    });

    this.linkClicked = e => {
      const {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      let {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      const {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      let {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/vercel/next.js/prefetch-true-deprecated');
      }
    }

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  getPaths() {
    const {
      pathname
    } = window.location;
    const {
      href: parsedHref,
      as: parsedAs
    } = this.formatUrls(this.props.href, this.props.as);
    const resolvedHref = (0, _url.resolve)(pathname, parsedHref);
    return [resolvedHref, parsedAs ? (0, _url.resolve)(pathname, parsedAs) : resolvedHref];
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      const isPrefetched = prefetched[this.getPaths().join( // Join on an invalid URI character
      '%')];

      if (!isPrefetched) {
        this.cleanUpListeners = listenToIntersections(ref, () => {
          this.prefetch();
        });
      }
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch(options) {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    const paths = this.getPaths(); // We need to handle a prefetch error here since we may be
    // loading with priority which can reject but we don't
    // want to force navigation since this is only a prefetch

    _router.default.prefetch(paths[
    /* href */
    0], paths[
    /* asPath */
    1], options).catch(err => {
      if (true) {
        // rethrow to show invalid URL errors
        throw err;
      }
    });

    prefetched[paths.join( // Join on an invalid URI character
    '%')] = true;
  }

  render() {
    let {
      children
    } = this.props;
    const {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = /*#__PURE__*/_react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    const child = _react.Children.only(children);

    const props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch({
          priority: true
        });
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) {}

    return _react.default.cloneElement(child, props);
  }

}

if (true) {
  const warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  const PropTypes = __webpack_require__(/*! prop-types */ "prop-types");

  const exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact"); // @ts-ignore the property is supported, when declaring it on the class it outputs an extra bit of code which is not needed.


  Link.propTypes = exact({
    href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    as: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    prefetch: PropTypes.bool,
    replace: PropTypes.bool,
    shallow: PropTypes.bool,
    passHref: PropTypes.bool,
    scroll: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.element, (props, propName) => {
      const value = props[propName];

      if (typeof value === 'string') {
        warn(`Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>`);
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "../next-server/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error(`Error when running the Router event: ${eventField}`); // tslint:disable-next-line:no-console

          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = `withRouter(${name})`;
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.default = void 0;

var _url2 = __webpack_require__(/*! url */ "url");

var _mitt = _interopRequireDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _isDynamic = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

var _routeMatcher = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

var _routeRegex = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/* global __NEXT_DATA__ */
// tslint:disable:no-console


const basePath =  false || '';

function addBasePath(path) {
  return path.indexOf(basePath) !== 0 ? basePath + path : path;
}

function delBasePath(path) {
  return path.indexOf(basePath) === 0 ? path.substr(basePath.length) || '/' : path;
}

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

const prepareRoute = path => toRoute(!path || path === '/' ? '/index' : path);

function fetchNextData(pathname, query, isServerRender, cb) {
  let attempts = isServerRender ? 3 : 1;

  function getResponse() {
    return fetch((0, _utils.formatWithValidation)({
      pathname: addBasePath( // @ts-ignore __NEXT_DATA__
      `/_next/data/${__NEXT_DATA__.buildId}${delBasePath(pathname)}.json`),
      query
    }), {
      // Cookies are required to be present for Next.js' SSG "Preview Mode".
      // Cookies may also be required for `getServerSideProps`.
      //
      // > `fetch` won’t send cookies, unless you set the credentials init
      // > option.
      // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
      //
      // > For maximum browser compatibility when it comes to sending &
      // > receiving cookies, always supply the `credentials: 'same-origin'`
      // > option instead of relying on the default.
      // https://github.com/github/fetch#caveats
      credentials: 'same-origin'
    }).then(res => {
      if (!res.ok) {
        if (--attempts > 0 && res.status >= 500) {
          return getResponse();
        }

        throw new Error(`Failed to load static props`);
      }

      return res.json();
    });
  }

  return getResponse().then(data => {
    return cb ? cb(data) : data;
  }).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      ;
      err.code = 'PAGE_LOAD_ERROR';
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  constructor(_pathname, _query, _as2, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;

    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname,
          query
        }), (0, _utils.getURL)());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && this.isSsr && e.state.as === this.asPath && (0, _url2.parse)(e.state.url).pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/vercel/next.js/popstate-state-empty');
        }
      }

      this.replace(url, as, options);
    };

    this._getStaticData = asPath => {
      const pathname = prepareRoute((0, _url2.parse)(asPath).pathname);
      return  false ? undefined : fetchNextData(pathname, null, this.isSsr, data => this.sdc[pathname] = data);
    };

    this._getServerData = asPath => {
      let {
        pathname,
        query
      } = (0, _url2.parse)(asPath, true);
      pathname = prepareRoute(pathname);
      return fetchNextData(pathname, query, this.isSsr);
    }; // represents the current component key


    this.route = toRoute(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    (0, _isDynamic.isDynamicRoute)(_pathname) && __NEXT_DATA__.autoExport ? _pathname : _as2;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    if (false) {} else {
      return url;
    }
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = Object.assign({}, data, {
      Component,
      __N_SSG: mod.__N_SSG,
      __N_SSP: mod.__N_SSP
    });
    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new Promise((resolve, reject) => {
      if (!options._h) {
        this.isSsr = false;
      } // marking route changes as a navigation start entry


      if (_utils.ST) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      let url = typeof _url === 'object' ? (0, _utils.formatWithValidation)(_url) : _url;
      let as = typeof _as === 'object' ? (0, _utils.formatWithValidation)(_as) : _as;
      url = addBasePath(url);
      as = addBasePath(as); // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, as, options);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = (0, _url2.parse)(url, true);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/vercel/next.js/invalid-href-passed`);
        }

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      }

      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if ((0, _isDynamic.isDynamicRoute)(route)) {
        const {
          pathname: asPathname
        } = (0, _url2.parse)(as);
        const routeRegex = (0, _routeRegex.getRouteRegex)(route);
        const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);

        if (!routeMatch) {
          const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

          if (missingParams.length > 0) {
            if (true) {
              console.warn(`Mismatching \`as\` and \`href\` failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
            }

            return reject(new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/vercel/next.js/incompatible-href-as`));
          }
        } else {
          // Merge params into `query`, overwriting any specified in search
          Object.assign(query, routeMatch);
        }
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, as, options);

        if (true) {
          const appComp = this.components['/_app'].Component;
          window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
        }

        this.set(route, pathname, query, as, routeInfo).then(() => {
          if (error) {
            Router.events.emit('routeChangeError', error, as);
            throw error;
          }

          Router.events.emit('routeChangeComplete', as);
          return resolve(true);
        });
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      window.history[method]({
        url,
        as,
        options
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return Promise.resolve(cachedRouteInfo);
    }

    const handleError = (err, loadErrorFail) => {
      return new Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR' || loadErrorFail) {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(res => {
          const {
            page: Component
          } = res;
          const routeInfo = {
            Component,
            err
          };
          return new Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }).catch(err => handleError(err, true)));
      });
    };

    return new Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(res => resolve({
        Component: res.page,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }), reject);
    }).then(routeInfo => {
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      return this._getData(() => __N_SSG ? this._getStaticData(as) : __N_SSP ? this._getServerData(as) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      })).then(props => {
        routeInfo.props = props;
        this.components[route] = routeInfo;
        return routeInfo;
      });
    }).catch(handleError);
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  prefetch(url, asPath = url, options = {}) {
    return new Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = (0, _url2.parse)(url);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/vercel/next.js/invalid-href-passed`);
        }

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (true) {
        return;
      }

      const route = delBasePath(toRoute(pathname));
      Promise.all([this.pageLoader.prefetchData(url, delBasePath(asPath)), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]).then(() => resolve(), reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    route = delBasePath(route);
    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    return this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = escapeRegex(normalizedRoute.replace(/\/$/, '') || '/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
    const isOptional = /^\\\[.*\\\]$/.test($1);

    if (isOptional) {
      $1 = $1.slice(2, -2);
    }

    const isCatchAll = /^(\\\.){3}/.test($1);

    if (isCatchAll) {
      $1 = $1.slice(6);
    }

    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? isOptional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
  });
  let namedParameterizedRoute; // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    namedParameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
      const isCatchAll = /^(\\\.){3}/.test($1);
      const key = $1 // Un-escape key
      .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '');
      return isCatchAll ? `/(?<${escapeRegex(key)}>.+?)` : `/(?<${escapeRegex(key)}>[^/]+?)`;
    });
  }

  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups,
    namedRegex: namedParameterizedRoute ? `^${namedParameterizedRoute}(?:/)?$` : undefined
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _url = __webpack_require__(/*! url */ "url");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (true) {
    var _App$prototype;

    if ((_App$prototype = App.prototype) === null || _App$prototype === void 0 ? void 0 : _App$prototype.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/vercel/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/vercel/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return (0, _url.format)(url, options);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js":
/*!*************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./pages/teacher/index.js":
/*!********************************!*\
  !*** ./pages/teacher/index.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/row */ "antd/lib/row");
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_dropdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/dropdown */ "antd/lib/dropdown");
/* harmony import */ var antd_lib_dropdown__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_dropdown__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/col */ "antd/lib/col");
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_cookies__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-cookies */ "react-cookies");
/* harmony import */ var react_cookies__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_cookies__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _public_style_head_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../public/style/head.css */ "./public/style/head.css");
/* harmony import */ var _public_style_head_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_public_style_head_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _public_style_teacher_course_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../public/style/teacher/course.css */ "./public/style/teacher/course.css");
/* harmony import */ var _public_style_teacher_course_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_public_style_teacher_course_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_teacher_header__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/teacher/header */ "./components/teacher/header.js");
/* harmony import */ var _components_teacher_index_courseModule__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/teacher/index/courseModule */ "./components/teacher/index/courseModule.js");
/* harmony import */ var _components_teacher_index_courseAddModule__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/teacher/index/courseAddModule */ "./components/teacher/index/courseAddModule.js");
/* harmony import */ var _components_teacher_index_courseAddSpan__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/teacher/index/courseAddSpan */ "./components/teacher/index/courseAddSpan.js");
/* harmony import */ var _components_teacher_index_courseCreateSpan__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/teacher/index/courseCreateSpan */ "./components/teacher/index/courseCreateSpan.js");
/* harmony import */ var _components_teacher_index_archiveCourse__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/teacher/index/archiveCourse */ "./components/teacher/index/archiveCourse.js");
/* harmony import */ var _components_teacher_index_optionMenu__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../components/teacher/index/optionMenu */ "./components/teacher/index/optionMenu.js");
/* harmony import */ var _components_teacher_Context__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../components/teacher/Context */ "./components/teacher/Context.js");
/* harmony import */ var _components_config__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../components/config */ "./components/config.js");



var _jsxFileName = "D:\\cloudClass-project\\cloudClass\\cloud_class\\pages\\teacher\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;















const reducer = (state, action) => {
  switch (action.type) {
    case "update":
      return action.coursesInfo;

    default:
      return state;
  }
};

const TeacherIndex = props => {
  const {
    0: coursesInfo,
    1: dispatch
  } = Object(react__WEBPACK_IMPORTED_MODULE_3__["useReducer"])(reducer, []);
  const {
    0: teacherId,
    1: setTeacherId
  } = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])('');
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(() => {
    if (react_cookies__WEBPACK_IMPORTED_MODULE_4___default.a.load("identify") != "teacher" || !react_cookies__WEBPACK_IMPORTED_MODULE_4___default.a.load("id")) {
      next_router__WEBPACK_IMPORTED_MODULE_5___default.a.push("/teacher/login");
    }

    let result = [];
    Object(_components_config__WEBPACK_IMPORTED_MODULE_16__["RealAxios"])({
      method: 'post',
      url: '/course/getCourseByTeacher',
      data: {
        phone: react_cookies__WEBPACK_IMPORTED_MODULE_4___default.a.load("id")
      }
    }).then(response => {
      result = response.data;
      dispatch({
        type: "update",
        coursesInfo: result
      });
    }).catch(error => {
      console.log(error);
    });
  }, []);
  return __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_2___default.a, {
    span: 24,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 9
    }
  }, __jsx(_components_teacher_Context__WEBPACK_IMPORTED_MODULE_15__["PageContext"].Provider, {
    value: "index",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 13
    }
  }, __jsx(_components_teacher_header__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 17
    }
  })), __jsx(antd_lib_row__WEBPACK_IMPORTED_MODULE_0___default.a, {
    gutter: [0, 20],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 13
    }
  }, __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_2___default.a, {
    span: 18,
    offset: 3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "ktcon",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 21
    }
  }, __jsx(antd_lib_row__WEBPACK_IMPORTED_MODULE_0___default.a, {
    className: "control-bar",
    justify: "space-between",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 25
    }
  }, __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_2___default.a, {
    style: {
      paddingTop: 14 + "px"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 29
    }
  }, "\u5168\u90E8\u8BFE\u7A0B"), __jsx(antd_lib_row__WEBPACK_IMPORTED_MODULE_0___default.a, {
    justify: "start",
    gutter: [10, 0],
    align: "middle",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 29
    }
  }, __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 33
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 37
    }
  }, "\u8BFE\u7A0B\u6392\u5E8F")), __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 33
    }
  }, __jsx(_components_teacher_Context__WEBPACK_IMPORTED_MODULE_15__["CoursesContext"].Provider, {
    value: {
      coursesInfo,
      dispatch
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 37
    }
  }, __jsx(_components_teacher_index_archiveCourse__WEBPACK_IMPORTED_MODULE_13__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 41
    }
  }))), __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 33
    }
  }, __jsx(_components_teacher_Context__WEBPACK_IMPORTED_MODULE_15__["CoursesContext"].Provider, {
    value: {
      coursesInfo,
      dispatch
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 37
    }
  }, __jsx(antd_lib_dropdown__WEBPACK_IMPORTED_MODULE_1___default.a, {
    overlay: _components_teacher_index_optionMenu__WEBPACK_IMPORTED_MODULE_14__["default"],
    trigger: ['click'],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 41
    }
  }, __jsx("div", {
    className: "course-control-btn",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 45
    }
  }, __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 81
    }
  }, "\u521B\u5EFA/\u52A0\u5165\u8BFE\u7A0B"))))), __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 33
    }
  }, __jsx("div", {
    className: "course-control-btn",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 37
    }
  }, __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 73
    }
  }, "\u5FEB\u901F\u53D1\u5E03\u6D3B\u52A8"))))), __jsx(antd_lib_row__WEBPACK_IMPORTED_MODULE_0___default.a, {
    gutter: [21, 30],
    justify: "start",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 25
    }
  }, coursesInfo.map((item, key) => __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_2___default.a, {
    key: key,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 33
    }
  }, __jsx(_components_teacher_Context__WEBPACK_IMPORTED_MODULE_15__["CoursesContext"].Provider, {
    value: {
      item,
      coursesInfo,
      dispatch
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 37
    }
  }, __jsx(_components_teacher_index_courseModule__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 41
    }
  })))), __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 29
    }
  }, __jsx(_components_teacher_Context__WEBPACK_IMPORTED_MODULE_15__["CoursesContext"].Provider, {
    value: {
      coursesInfo,
      dispatch
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 33
    }
  }, __jsx(_components_teacher_index_courseAddModule__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 37
    }
  }))))))));
};

/* harmony default export */ __webpack_exports__["default"] = (TeacherIndex);

/***/ }),

/***/ "./public/style/head.css":
/*!*******************************!*\
  !*** ./public/style/head.css ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./public/style/teacher/course.css":
/*!*****************************************!*\
  !*** ./public/style/teacher/course.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 7:
/*!**************************************!*\
  !*** multi ./pages/teacher/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\cloudClass-project\cloudClass\cloud_class\pages\teacher\index.js */"./pages/teacher/index.js");


/***/ }),

/***/ "antd/lib/affix":
/*!*********************************!*\
  !*** external "antd/lib/affix" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/affix");

/***/ }),

/***/ "antd/lib/avatar":
/*!**********************************!*\
  !*** external "antd/lib/avatar" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/avatar");

/***/ }),

/***/ "antd/lib/col":
/*!*******************************!*\
  !*** external "antd/lib/col" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/col");

/***/ }),

/***/ "antd/lib/dropdown":
/*!************************************!*\
  !*** external "antd/lib/dropdown" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/dropdown");

/***/ }),

/***/ "antd/lib/input":
/*!*********************************!*\
  !*** external "antd/lib/input" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/input");

/***/ }),

/***/ "antd/lib/menu":
/*!********************************!*\
  !*** external "antd/lib/menu" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/menu");

/***/ }),

/***/ "antd/lib/message":
/*!***********************************!*\
  !*** external "antd/lib/message" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/message");

/***/ }),

/***/ "antd/lib/modal":
/*!*********************************!*\
  !*** external "antd/lib/modal" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/modal");

/***/ }),

/***/ "antd/lib/popover":
/*!***********************************!*\
  !*** external "antd/lib/popover" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/popover");

/***/ }),

/***/ "antd/lib/row":
/*!*******************************!*\
  !*** external "antd/lib/row" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/row");

/***/ }),

/***/ "antd/lib/select":
/*!**********************************!*\
  !*** external "antd/lib/select" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/select");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-cookies":
/*!********************************!*\
  !*** external "react-cookies" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-cookies");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanNcIiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1N2Zy5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2NvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3RlYWNoZXIvQ29udGV4dC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3RlYWNoZXIvaGVhZGVyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvdGVhY2hlci9pbmRleC9hcmNoaXZlQ291cnNlLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvdGVhY2hlci9pbmRleC9jb3Vyc2VBZGRNb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy90ZWFjaGVyL2luZGV4L2NvdXJzZUFkZFNwYW4uanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy90ZWFjaGVyL2luZGV4L2NvdXJzZUNyZWF0ZVNwYW4uanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy90ZWFjaGVyL2luZGV4L2NvdXJzZU1vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3RlYWNoZXIvaW5kZXgvb3B0aW9uTWVudS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3RlYWNoZXIvc2N1bHB0dXJlLmpzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvbGluay50c3giLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9yb3V0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC93aXRoLXJvdXRlci50c3giLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9taXR0LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9pcy1keW5hbWljLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLW1hdGNoZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtcmVnZXgudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi91dGlscy50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9saW5rLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy90ZWFjaGVyL2luZGV4LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImFudGQvbGliL2FmZml4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYW50ZC9saWIvYXZhdGFyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYW50ZC9saWIvY29sXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYW50ZC9saWIvZHJvcGRvd25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhbnRkL2xpYi9pbnB1dFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImFudGQvbGliL21lbnVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhbnRkL2xpYi9tZXNzYWdlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYW50ZC9saWIvbW9kYWxcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhbnRkL2xpYi9wb3BvdmVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYW50ZC9saWIvcm93XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYW50ZC9saWIvc2VsZWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInByb3AtdHlwZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzLWV4YWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1jb29raWVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ1cmxcIiJdLCJuYW1lcyI6WyJVcGxvYWRTdmciLCJDaGFuZ2VTdmciLCJTY29yZVN2ZyIsIkJhY2tTdmciLCJQYXNzd29yZFN2ZyIsIlVzZXJTdmciLCJFbWFpbFN2ZyIsIk5hbWVTdmciLCJDb2xsZWdlU3ZnIiwiU2VjdXJpdHlDb2RlU3ZnIiwiU3R1ZGVudE51bVN2ZyIsIlVSTCIsIlJlYWxBeGlvcyIsImF4aW9zIiwiY3JlYXRlIiwiYmFzZVVSTCIsInByb3h5IiwidGFyZ2V0Iiwic2VjdXJlIiwiY2hhbmdlT3JpZ2luIiwiUGFnZUNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwiQ291cnNlQ29udGV4dCIsIkNvdXJzZXNDb250ZXh0IiwiVGVhY2hlckNvbnRleHQiLCJDb3Vyc2VPcGVyYXRlQ29udGV4dCIsIkhlYWRlciIsInBhZ2UiLCJ1c2VDb250ZXh0IiwidG9wIiwic2V0VG9wIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJoZWlnaHQiLCJwYWRkaW5nVG9wIiwiQXJjaGl2ZUNvdXJzZSIsImNvdXJzZXNJbmZvIiwic2V0Q291cnNlc0luZm8iLCJkaXNwYXRjaCIsInZpc2libGUiLCJzZXRWaXNpYmxlIiwiTW9yZU9wdGlvbiIsImNvdXJzZUluZm8iLCJnZXRDb3Vyc2VJbmZvIiwicmVzdWx0IiwibWV0aG9kIiwidXJsIiwiZGF0YSIsInBob25lIiwiY29va2llIiwibG9hZCIsInRoZW4iLCJyZXNwb25zZSIsInR5cGUiLCJjYXRjaCIsImVycm9yIiwiY29uc29sZSIsImxvZyIsInJlc3VtZUNvdXJzZSIsInRjaWQiLCJjaWQiLCJzdWNjZXNzIiwiZ2V0QXJjaGl2ZUNvdXJzZSIsImRlbGV0ZUNvdXJzZSIsIm1vcmVPcHRpb24iLCJvcGVuTW9kYWwiLCJjbG9zZU1vZGFsIiwicGFkZGluZ0xlZnQiLCJtYXAiLCJpdGVtIiwia2V5IiwiZm9udFNpemUiLCJ3aWR0aCIsIm1hcmdpbiIsImNuYW1lIiwiQ291cnNlQWRkTW9kdWxlIiwiY291cnNlTmFtZSIsInNldENvdXJzZU5hbWUiLCJ0ZWFjaGVySWQiLCJzZXRUZWFjaGVySWQiLCJjb3Vyc2VEYXRlIiwic2V0Q291cnNlRGF0ZSIsIk9wdGlvbiIsImdldFRlYWNoZXJJZCIsInRpZCIsImhhbmRsZU9rIiwibXNnIiwiaGFuZGxlQ2FuY2VsIiwiYm9yZGVyUmFkaXVzIiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsInRleHRBbGlnbiIsImN1cnNvciIsImZvbnRXZWlnaHQiLCJlIiwidmFsdWUiLCJvcHRpb24iLCJDb3Vyc2VBZGRTcGFuIiwiY291cnNlQ29kZSIsInNldENvdXJzZUNvZGUiLCJDb3Vyc2VDcmVhdGVTcGFuIiwiQ291cnNlTW9kdWxlIiwic2V0Q291cnNlSW5mbyIsImltYWdlIiwic2V0SW1hZ2UiLCJjZGF0ZSIsInRwaG9uZSIsImFyY2hpdmVTZWxmIiwiYXJjaGl2ZUFsbCIsImNvbG9yIiwiUm91dGVyIiwicHVzaCIsImludml0ZSIsImFsaWduU2VsZiIsIndvcmsiLCJ0bmFtZSIsIkFkZE9yQ3JlYXRlQ291cnNlTWVudSIsImFjdGlvbiIsInJlbW92ZSIsInBhdGgiLCJTY3VscHR1cmUiLCJvcmlnaW4iLCJsYXN0SHJlZiIsImxhc3RBcyIsImxhc3RSZXN1bHQiLCJocmVmIiwiYXMiLCJmb3JtYXRGdW5jIiwibGlzdGVuZXJzIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJ3aW5kb3ciLCJwcmVmZXRjaGVkIiwib2JzZXJ2ZXIiLCJlbnRyaWVzIiwiZW50cnkiLCJjYiIsInJvb3RNYXJnaW4iLCJsaXN0ZW5Ub0ludGVyc2VjdGlvbnMiLCJnZXRPYnNlcnZlciIsIkNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwicCIsIm1lbW9pemVkRm9ybWF0VXJsIiwiZm9ybWF0VXJsIiwiYXNIcmVmIiwibm9kZU5hbWUiLCJpc0xvY2FsIiwic2Nyb2xsIiwic2hhbGxvdyIsImRvY3VtZW50IiwicHJvcHMiLCJjb21wb25lbnRXaWxsVW5tb3VudCIsImdldFBhdGhzIiwicmVzb2x2ZWRIcmVmIiwicGFyc2VkQXMiLCJoYW5kbGVSZWYiLCJyZWYiLCJpc1ByZWZldGNoZWQiLCJwcmVmZXRjaCIsInBhdGhzIiwiZXJyIiwicmVuZGVyIiwiY2hpbGRyZW4iLCJjaGlsZCIsIkNoaWxkcmVuIiwiZWwiLCJvbk1vdXNlRW50ZXIiLCJwcmlvcml0eSIsIm9uQ2xpY2siLCJwcm9jZXNzIiwiUmVhY3QiLCJ3YXJuIiwiUHJvcFR5cGVzIiwicmVxdWlyZSIsImV4YWN0IiwiTGluayIsInJlcGxhY2UiLCJwYXNzSHJlZiIsInNpbmdsZXRvblJvdXRlciIsInJvdXRlciIsInJlYWR5Q2FsbGJhY2tzIiwicmVhZHkiLCJ1cmxQcm9wZXJ0eUZpZWxkcyIsInJvdXRlckV2ZW50cyIsImNvcmVNZXRob2RGaWVsZHMiLCJPYmplY3QiLCJnZXQiLCJmaWVsZCIsImdldFJvdXRlciIsImV2ZW50IiwiZXZlbnRGaWVsZCIsIl9zaW5nbGV0b25Sb3V0ZXIiLCJtZXNzYWdlIiwic3RhY2siLCJSb3V0ZXJDb250ZXh0IiwiY3JlYXRlUm91dGVyIiwiX3JvdXRlciIsImluc3RhbmNlIiwiQ29tcG9zZWRDb21wb25lbnQiLCJnZXRJbml0aWFsUHJvcHMiLCJXaXRoUm91dGVyV3JhcHBlciIsIm5hbWUiLCJhbGwiLCJvbiIsIm9mZiIsImVtaXQiLCJoYW5kbGVyIiwiYmFzZVBhdGgiLCJwcmVwYXJlUm91dGUiLCJ0b1JvdXRlIiwiYXR0ZW1wdHMiLCJpc1NlcnZlclJlbmRlciIsInBhdGhuYW1lIiwiYWRkQmFzZVBhdGgiLCJfX05FWFRfREFUQV9fIiwiYnVpbGRJZCIsImRlbEJhc2VQYXRoIiwiY3JlZGVudGlhbHMiLCJyZXMiLCJnZXRSZXNwb25zZSIsInJvdXRlIiwicXVlcnkiLCJhc1BhdGgiLCJjb21wb25lbnRzIiwic2RjIiwic3ViIiwiY2xjIiwicGFnZUxvYWRlciIsIl9icHMiLCJldmVudHMiLCJfd3JhcEFwcCIsImlzU3NyIiwiaXNGYWxsYmFjayIsIlByb21pc2UiLCJmZXRjaE5leHREYXRhIiwiX19OX1NTRyIsImluaXRpYWxQcm9wcyIsIl9fTl9TU1AiLCJ1cGRhdGUiLCJtb2QiLCJuZXdEYXRhIiwicmVsb2FkIiwiYmFjayIsIm9wdGlvbnMiLCJjaGFuZ2UiLCJTVCIsInBlcmZvcm1hbmNlIiwicmVzb2x2ZSIsInJvdXRlUmVnZXgiLCJyb3V0ZU1hdGNoIiwibWlzc2luZ1BhcmFtcyIsInBhcmFtIiwicmVqZWN0IiwiYXNQYXRobmFtZSIsInJvdXRlSW5mbyIsImFwcENvbXAiLCJjaGFuZ2VTdGF0ZSIsImdldFJvdXRlSW5mbyIsImNhY2hlZFJvdXRlSW5mbyIsImhhbmRsZUVycm9yIiwiZ2lwRXJyIiwiaXNWYWxpZEVsZW1lbnRUeXBlIiwic2V0IiwiYmVmb3JlUG9wU3RhdGUiLCJvbmx5QUhhc2hDaGFuZ2UiLCJuZXdIYXNoIiwib2xkVXJsTm9IYXNoIiwib2xkSGFzaCIsInNjcm9sbFRvSGFzaCIsImhhc2giLCJpZEVsIiwibmFtZUVsIiwidXJsSXNOZXciLCJjYW5jZWxsZWQiLCJjYW5jZWwiLCJjb21wb25lbnRSZXN1bHQiLCJfZ2V0RGF0YSIsImZuIiwiQXBwVHJlZSIsImN0eCIsImFib3J0Q29tcG9uZW50TG9hZCIsIm5vdGlmeSIsIlRFU1RfUk9VVEUiLCJyZSIsImRlY29kZSIsImRlY29kZVVSSUNvbXBvbmVudCIsInBhcmFtcyIsInNsdWdOYW1lIiwiZyIsImdyb3VwcyIsIm0iLCJzdHIiLCJlc2NhcGVkUm91dGUiLCJlc2NhcGVSZWdleCIsIm5vcm1hbGl6ZWRSb3V0ZSIsImdyb3VwSW5kZXgiLCJwYXJhbWV0ZXJpemVkUm91dGUiLCJpc09wdGlvbmFsIiwiJDEiLCJpc0NhdGNoQWxsIiwicG9zIiwicmVwZWF0IiwibmFtZWRQYXJhbWV0ZXJpemVkUm91dGUiLCJuYW1lZFJlZ2V4IiwidXNlZCIsInByb3RvY29sIiwiaG9zdG5hbWUiLCJwb3J0IiwiZ2V0TG9jYXRpb25PcmlnaW4iLCJBcHAiLCJnZXREaXNwbGF5TmFtZSIsInBhZ2VQcm9wcyIsImxvYWRHZXRJbml0aWFsUHJvcHMiLCJpc1Jlc1NlbnQiLCJ1cmxPYmplY3RLZXlzIiwiU1AiLCJyZWR1Y2VyIiwic3RhdGUiLCJUZWFjaGVySW5kZXgiLCJ1c2VSZWR1Y2VyIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFD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Q0QsVUFBRDtBQUFPakMsaUJBQVA7QUFBb0JFO0FBQXBCLEtBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLDhFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixDQURKLENBREgsQ0FETCxFQVFJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLDJFQUFELENBQWdCLFFBQWhCO0FBQXlCLFNBQUssRUFBRTtBQUFDRixpQkFBRDtBQUFjRTtBQUFkLEtBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLGtGQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixDQURKLENBUkosQ0ExQkosQ0FESixDQURKLENBSkosQ0FESjtBQW9ESCxDQTFFRDs7QUE0RWV5UiwyRUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyR0EsMkM7Ozs7Ozs7Ozs7O0FDQUEsNEM7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsOEM7Ozs7Ozs7Ozs7O0FDQUEsMkM7Ozs7Ozs7Ozs7O0FDQUEsMEM7Ozs7Ozs7Ozs7O0FDQUEsNkM7Ozs7Ozs7Ozs7O0FDQUEsMkM7Ozs7Ozs7Ozs7O0FDQUEsNkM7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsNEM7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsNkM7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsMEM7Ozs7Ozs7Ozs7O0FDQUEscUM7Ozs7Ozs7Ozs7O0FDQUEsZ0MiLCJmaWxlIjoic3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXHRlYWNoZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNyk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanNcIik7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuZXhwb3J0IGNvbnN0IFVwbG9hZFN2ZyA9ICgpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPHN2ZyB0PVwiMTU5MDc0MTY5MjAwNFwiXHJcbiAgICAgICAgICAgICBjbGFzcz1cImljb25cIlxyXG4gICAgICAgICAgICAgdmlld0JveD1cIjAgMCAxMDI0IDEwMjRcIlxyXG4gICAgICAgICAgICAgdmVyc2lvbj1cIjEuMVwiXHJcbiAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgICAgIHAtaWQ9XCIxMzAxXCJcclxuICAgICAgICAgICAgIHdpZHRoPVwiMjRcIlxyXG4gICAgICAgICAgICAgaGVpZ2h0PVwiMjRcIj5cclxuICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgIGQ9XCJNOTUyIDM1OS4xTDY3Ni45IDg1LjNjLTUuMS01LjEtMTIuMS04LTE5LjUtOEgzNTkuN2MtNjYuNyAwLTEyMC45IDU0LTEyMC45IDEyMC43djI4OC41TDI1OSA0NjdsMS40LTEuMiAyLTEuMmM5LTcuNCAyMC4xLTEyLjMgMzEuNy0xNC40VjE5Ny45YzAtMzYuMiAyOS40LTY1LjYgNjUuNi02NS42SDYyMnYxNTZjMCA2Ni43IDU0LjIgMTIxIDEyMC45IDEyMUg5MDVWODI2YzAgMzYuMi0yOS40IDY1LjctNjUuOCA2NS43SDQ5MC40djMzLjdjMCA3LjUtMS43IDE0LjYtNC4zIDIxLjRoMzUzYzY2LjcgMCAxMjAuOS01NC40IDEyMC45LTEyMC45VjM3OC42YzAtNy40LTIuOS0xNC40LTgtMTkuNXpNNzQyLjkgMzU0Yy0zNi4zIDAtNjUuNy0yOS41LTY1LjctNjUuN3YtMTI1TDg2OC43IDM1NEg3NDIuOXpcIlxyXG4gICAgICAgICAgICAgICAgcC1pZD1cIjEzMDJcIlxyXG4gICAgICAgICAgICAgICAgZmlsbD1cIiM3MDcwNzBcIj5cclxuICAgICAgICAgICAgPC9wYXRoPlxyXG4gICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgZD1cIk01MjkuMSAyNjQuOUgzOTguOWMtMTIuMiAwLTIyLjEgMTAtMjIuMSAyMi4yIDAuMSAxMiA5LjggMjIgMjIuMSAyMmgxMzAuMmMxMi4xIDAgMjIuMS05LjkgMjIuMS0yMi4xcy0xMC0yMi4xLTIyLjEtMjIuMXpNMzk5IDM1Ni42Yy0xMi4yIDAtMjIuMSA5LjktMjIuMSAyMi4xIDAgMTIuNCA5LjkgMjIuMiAyMi4xIDIyLjJoMTMwLjJjMTIuMiAwLjEgMjIuMS05LjggMjIuMS0yMi4yIDAtMTIuMS0xMC0yMi4xLTIyLjEtMjIuMUgzOTl6TTYwOCA3MDguM2gxOTEuNmMxMi4xIDAgMjIuMS05LjkgMjIuMS0yMi4xIDAtMTIuMi0xMC0yMi4yLTIyLjEtMjIuMkg2MDhjLTEyLjIgMC0yMi4xIDEwLTIyLjEgMjIuMnM5LjggMjIuMSAyMi4xIDIyLjF6TTc5OS42IDc1Nkg2MDkuNGMtMTIuMiAwLTIyLjEgMTAtMjIuMSAyMi4yczkuOSAyMiAyMi4xIDIyaDE5MC4xYzEyLjEgMCAyMi4xLTkuNyAyMi4xLTIyIDAuMS0xMi4yLTkuOS0yMi4yLTIyLTIyLjJ6TTc5OS42IDYxNi41YzEyLjEgMCAyMi4xLTkuOSAyMi4xLTIyLjEgMC0xMi4yLTEwLTIyLjItMjIuMS0yMi4ySDYwOGMtMTIuMiAwLTIyLjEgMTAtMjIuMSAyMi4yczkuOCAyMi4xIDIyLjEgMjIuMWgxOTEuNnpNNTUwLjIgNzIxLjZjMC01LjgtMi43LTExLjEtNy41LTE0LjlMMzI2LjUgNDk5LjFjLTQuOC00LjUtMTEuNi03LjUtMTkuNC03LjUtNi45IDAtMTMuMyAyLjMtMTcuNyA1LjloLTAuNmwtMjE3IDIwOWMtMC4xIDAuMS0wLjQgMC4yLTAuNSAwLjRsLTAuNCAwLjRjLTQuMyAzLjgtNi45IDguOS02LjkgMTQuNCAwIDExLjUgMTEuNiAyMS4yIDI1LjggMjEuMmg3Ni44djE4Mi41YzAgMTEuMiAxMS4yIDIwLjQgMjUgMjAuNGgyMzEuMmMxMy44IDAgMjUtOS4yIDI1LTIwLjRWNzQyLjhoNzYuNmMxNC4xIDAgMjUuOC05LjUgMjUuOC0yMS4yelwiXHJcbiAgICAgICAgICAgICAgICBwLWlkPVwiMTMwM1wiIGZpbGw9XCIjNzA3MDcwXCI+XHJcbiAgICAgICAgICAgIDwvcGF0aD5cclxuICAgICAgICA8L3N2Zz5cclxuICAgIClcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBDaGFuZ2VTdmcgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxzdmdcclxuICAgICAgICAgICAgdD1cIjE1OTA3NTI4OTYxMzdcIlxyXG4gICAgICAgICAgICBjbGFzcz1cImljb25cIlxyXG4gICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDEwMjQgMTAyNFwiXHJcbiAgICAgICAgICAgIHZlcnNpb249XCIxLjFcIlxyXG4gICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgICAgcC1pZD1cIjI1MzlcIlxyXG4gICAgICAgICAgICB3aWR0aD1cIjI0XCJcclxuICAgICAgICAgICAgaGVpZ2h0PVwiMjRcIj5cclxuICAgICAgICAgICAgPCBwYXRoXHJcbiAgICAgICAgICAgICAgICBkPVwiTTUxNCAxMTQuM2MtMjE5LjkgMC0zOTguOSAxNzguOS0zOTguOSAzOTguOCAwLjEgMjIwIDE3OSAzOTguOSAzOTguOSAzOTguOSAyMTkuOSAwIDM5OC44LTE3OC45IDM5OC44LTM5OC44UzczMy45IDExNC4zIDUxNCAxMTQuM3ogbTIxOC4zIDQ4OXYxLjdjMCAwLjUtMC4xIDEtMC4xIDEuNiAwIDAuMyAwIDAuNi0wLjEgMC45IDAgMC41LTAuMSAxLTAuMiAxLjUgMCAwLjMtMC4xIDAuNy0wLjEgMS0wLjEgMC40LTAuMSAwLjgtMC4yIDEuMi0wLjEgMC40LTAuMiAwLjktMC4yIDEuMy0wLjEgMC4zLTAuMSAwLjYtMC4yIDAuOC0wLjEgMC42LTAuMyAxLjItMC40IDEuOCAwIDAuMS0wLjEgMC4yLTAuMSAwLjMtMi4yIDguNS02LjYgMTYuNi0xMy4zIDIzLjNMNjAwLjcgNzU1LjRjLTIwIDIwLTUyLjcgMjAtNzIuNiAwLTIwLTIwLTIwLTUyLjcgMC03Mi42bDI4LjktMjguOUgzNDdjLTI4LjMgMC01MS40LTIzLjEtNTEuNC01MS40IDAtMjguMyAyMy4xLTUxLjQgNTEuNC01MS40aDMzNGMxMy4yIDAgMjYuNCA1IDM2LjQgMTVzMTUgMjMuMiAxNSAzNi40YzAgMC4zLTAuMSAwLjYtMC4xIDAuOHogbTAuMS0xNzkuNWMwIDI4LjMtMjMuMSA1MS40LTUxLjQgNTEuNEgzNDdjLTEzLjIgMC0yNi40LTUtMzYuNC0xNXMtMTUtMjMuMi0xNS0zNi40di0wLjgtMS42YzAtMC41IDAuMS0xLjEgMC4xLTEuNiAwLTAuMyAwLTAuNiAwLjEtMC45IDAtMC41IDAuMS0xIDAuMi0xLjUgMC0wLjMgMC4xLTAuNyAwLjEtMSAwLjEtMC40IDAuMS0wLjggMC4yLTEuMiAwLjEtMC40IDAuMi0wLjkgMC4yLTEuMyAwLjEtMC4zIDAuMS0wLjYgMC4yLTAuOCAwLjEtMC42IDAuMy0xLjIgMC40LTEuOCAwLTAuMSAwLjEtMC4yIDAuMS0wLjMgMi4yLTguNSA2LjYtMTYuNiAxMy4zLTIzLjNsMTE2LjYtMTE2LjZjMjAtMjAgNTIuNy0yMCA3Mi42IDAgMjAgMjAgMjAgNTIuNyAwIDcyLjZMNDcxIDM3Mi41aDIxMGMyOC4yIDAgNTEuNCAyMy4xIDUxLjQgNTEuM3pcIlxyXG4gICAgICAgICAgICAgICAgcC1pZD1cIjI1NDBcIlxyXG4gICAgICAgICAgICAgICAgZmlsbD1cIiM3MDcwNzBcIj5cclxuICAgICAgICAgICAgPC9wYXRoPlxyXG4gICAgICAgIDwvc3ZnPlxyXG4gICAgKVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IFNjb3JlU3ZnID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8IHN2Z1xyXG4gICAgICAgICAgICB0PVwiMTU5MDc1MzYwODU3MVwiXHJcbiAgICAgICAgICAgIGNsYXNzXHJcbiAgICAgICAgICAgICAgICA9XCJpY29uXCJcclxuICAgICAgICAgICAgdmlld0JveD1cIjAgMCAxMDI0IDEwMjRcIlxyXG4gICAgICAgICAgICB2ZXJzaW9uPVwiMS4xXCJcclxuICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgICAgIHAtaWQ9XCI0NzgyXCJcclxuICAgICAgICAgICAgd2lkdGg9XCIyNFwiXHJcbiAgICAgICAgICAgIGhlaWdodD1cIjI0XCI+XHJcbiAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICBkPVwiTTkwOC45OTIgMTk1LjU4NGMtMTEuNTItMTIuMDk2LTI0Ljc2OC0xOC40MzItMzkuODcyLTE5LjA3MmgtMTAuODhjLTM4LjA4IDYuMDgtNzEuMzYgMTEuOTY4LTk5Ljc3NiAxNy42NjQtMjguNDE2IDUuNzYtNTEuMzkyIDExLjY0OC02OC45MjggMTcuNjY0LTE0LjUyOCAyLjQzMi0zNC42MjQgOS41MzYtNjAuMjg4IDIxLjMxMi0yNS43MjggMTEuNzc2LTU1Ljc0NCAyNy42NDgtOTAuMjQgNDcuNjE2LTE3LjUzNiA2LjA4LTM1LjA3MiA2LjA4LTUyLjYwOCAwLTM1LjA3Mi0xNi44OTYtNjUuMDI0LTMxLjQyNC04OS43OTItNDMuNTJsLTU1LjI5Ni0yNS40MDhjLTE5Ljk2OC02LjAxNi00My44NC0xMS45MDQtNzEuNjE2LTE3LjY2NC0yNy44NC01Ljc2LTYxLjk1Mi0xMS42NDgtMTAyLjQ2NC0xNy42NjRoLTExLjc3NmMtMTcuNTM2IDAuNjQtMzEuNDI0IDYuOTc2LTQxLjcyOCAxOS4wNzItMTAuMzA0IDEyLjA5Ni0xNS43NDQgMjcuMi0xNi4zMiA0NS4zMTJ2NDQwLjcwNGMwLjU3NiAxNS4xMDQgNS43NiAyOC43MzYgMTUuNDI0IDQwLjgzMiA5LjY2NCAxMi4wOTYgMjIuMDggMTkuNjQ4IDM3LjE4NCAyMi42NTYgNDAuNTEyIDYuMDE2IDc2LjQ4IDEyLjg2NCAxMDcuOTA0IDIwLjQxNiAzMS40MjQgNy41NTIgNTcuNDA4IDE0LjMzNiA3OC4wMTYgMjAuNDE2bDU5Ljg0IDIzLjU1MmMyNS40MDggOS42NjQgNTUuNjE2IDIzLjI5NiA5MC42ODggNDAuODMyIDE3LjUzNiA1LjQ0IDM1LjA3MiA1LjQ0IDUyLjYwOCAwIDM0LjQzMi0xNy41MzYgNjQuNTEyLTMxLjg3MiA5MC4yNC00My4wNzIgMjUuNjY0LTExLjIgNDUuODI0LTE4LjMwNCA2MC4yODgtMjEuMzEyIDIwLjU0NC01LjQ0IDQ2LjUyOC0xMS41MiA3OC4wMTYtMTguMTEybDEwNy45MDQtMjIuNjU2YzE0LjUyOC0zLjAwOCAyNi43NTItOS45ODQgMzYuNzM2LTIwLjg2NCA5Ljk4NC0xMC44OCAxNC45NzYtMjUuMDg4IDE0Ljk3Ni00Mi42MjRWMjQwLjg5NmMtMC43MDQtMTguMTEyLTYuNzItMzMuMjE2LTE4LjI0LTQ1LjMxMnogbS0yOTcuNjY0IDUzMS41ODRsLTI1LjYtNzQuNzUySDQzOC44NDhsLTI1LjYgNzQuNzUyaC02MC4wOTZMNDg5LjYgMzU0Ljk0NGg0NS41MDRsMTM2LjQ0OCAzNzIuMjI0aC02MC4yMjR6XCJcclxuICAgICAgICAgICAgICAgIHAtaWQ9XCI0NzgzXCJcclxuICAgICAgICAgICAgICAgIGZpbGw9XCIjNzA3MDcwXCI+XHJcbiAgICAgICAgICAgIDwvcGF0aD5cclxuICAgICAgICAgICAgPHBhdGggZD1cIk00NTUuNTUyIDYwNC4yODhoMTE0LjQ5NmwtNTYuNDQ4LTE2NS4xODR6XCIgcC1pZD1cIjQ3ODRcIiBmaWxsPVwiIzcwNzA3MFwiPlxyXG4gICAgICAgICAgICA8L3BhdGg+XHJcbiAgICAgICAgPC9zdmc+XHJcbiAgICApXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgQmFja1N2ZyA9ICgpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPCBzdmdcclxuICAgICAgICAgICAgdD1cIjE1OTA3NTY1OTMwNTNcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJpY29uXCJcclxuICAgICAgICAgICAgdmlld0JveD1cIjAgMCAxMDI0IDEwMjRcIlxyXG4gICAgICAgICAgICB2ZXJzaW9uPVwiMS4xXCJcclxuICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgICAgIHAtaWQ9XCI1NTkyXCJcclxuICAgICAgICAgICAgd2lkdGg9XCIyNFwiXHJcbiAgICAgICAgICAgIGhlaWdodD1cIjI0XCI+XHJcbiAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICBkPVwiTTUzOC42MjI4NDYgOTUwLjI5MTI1NWMyNTcuNTM0NDQ4LTE3MS42NTg1OTEgMzA4LjczODY0My00NjIuMTE5OTYzLTc1LjUwNDY0OC00NTMuMDI3ODg3bDAgMjI1LjUxNDE3M0wxMjEuODkzNjc2IDM4MS41Mjk0ODMgNDYzLjExODE5OCA0MC4yODE0MjVsMCAyMjAuNzAxNTY0YzIxOC4yNTk5NTYtNS42NzMyMSA0NzAuMDI3MDUgOTYuMjcwNjAxIDQ3MC4wMjcwNSAyODAuNjk1OTZDOTMzLjE0NjI3MSA4MTMuMTE5MTA1IDc2OC4zMzc2OTEgODc0Ljc2MjA0NyA1MzguNjIyODQ2IDk1MC4yOTEyNTVcIlxyXG4gICAgICAgICAgICAgICAgcC1pZD1cIjU1OTNcIlxyXG4gICAgICAgICAgICAgICAgZmlsbD1cIiM3MDcwNzBcIj5cclxuICAgICAgICAgICAgPC9wYXRoPlxyXG4gICAgICAgIDwvc3ZnPlxyXG4gICAgKVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IFBhc3N3b3JkU3ZnID0gKCk9PntcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPHN2ZyB0PVwiMTU5MDkxNTI5MjEzNlwiIGNsYXNzTmFtZT1cImljb25cIiB2aWV3Qm94PVwiMCAwIDEwMjQgMTAyNFwiIHZlcnNpb249XCIxLjFcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgICAgIHAtaWQ9XCIzMjUwXCIgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCI+XHJcbiAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICBkPVwiTTUxMiA2MjMuMTA0Yy00MC40NDggMC03NC4yNCAzMy4yOC03NC4yNCA3NC4yNFM0NzEuMDQgNzcxLjU4NCA1MTIgNzcxLjU4NHM3NC4yNC0zMy4yOCA3NC4yNC03NC4yNGMwLTcuMTY4IDAtMTQuMzM2LTMuNTg0LTIyLjAxNi03LjE2OCAxNC44NDgtMTguOTQ0IDIyLjAxNi0zMy4yOCAyMi4wMTYtMjIuMDE2IDAtMzYuODY0LTE0Ljg0OC0zNi44NjQtMzYuODY0IDAtMTQuODQ4IDcuMTY4LTI2LjExMiAyMi4wMTYtMzMuMjgtOC4xOTItNC42MDgtMTUuMzYtNC4wOTYtMjIuNTI4LTQuMDk2eiBtMC0zNy4zNzZjNjEuOTUyIDAgMTExLjEwNCA0OS4xNTIgMTExLjEwNCAxMTEuMTA0cy00OS4xNTIgMTExLjEwNC0xMTEuMTA0IDExMS4xMDQtMTExLjEwNC00OS4xNTItMTExLjEwNC0xMTEuMTA0IDQ5LjE1Mi0xMTEuMTA0IDExMS4xMDQtMTExLjEwNHogbTAtNzMuNzI4Yy0xMDEuODg4IDAtMTg0LjgzMiA4My40NTYtMTg0LjgzMiAxODQuODMyczgzLjQ1NiAxODQuODMyIDE4NC44MzIgMTg0LjgzMiAxODQuODMyLTgzLjQ1NiAxODQuODMyLTE4NC44MzItODIuOTQ0LTE4NC44MzItMTg0LjgzMi0xODQuODMyeiBtLTI5NS45MzYtMzYuODY0aDU5MS44NzJ2NDQzLjkwNGgtNTkxLjg3MnYtNDQzLjkwNHogbTI5NS45MzYtMzcwLjE3NmMxMDEuODg4IDAgMTg0LjgzMiA4Mi45NDQgMTg0LjgzMiAxODQuODMydjExMS4xMDRoLTM3MC4xNzZ2LTExMS4xMDRjMC41MTItMTAxLjg4OCA4My40NTYtMTg0LjgzMiAxODUuMzQ0LTE4NC44MzJ6IG0wLTc0LjI0Yy0xNDIuMzM2IDAtMjU5LjA3MiAxMTYuNzM2LTI1OS4wNzIgMjU5LjA3MnYxMTEuMTA0aC0xMTAuNTkyVjk5Mi43NjhIODgxLjY2NFY0MDAuODk2aC0xMTEuMTA0di0xMTEuMTA0YzAuNTEyLTE0Mi4zMzYtMTE2LjIyNC0yNTkuMDcyLTI1OC41Ni0yNTkuMDcyelwiXHJcbiAgICAgICAgICAgICAgICBwLWlkPVwiMzI1MVwiIGZpbGw9XCIjNzA3MDcwXCI+PC9wYXRoPlxyXG4gICAgICAgIDwvc3ZnPlxyXG4gICAgKVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IFVzZXJTdmcgPSAoKT0+e1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8c3ZnIHQ9XCIxNTkwOTE1NTIzMDcxXCIgY2xhc3NOYW1lPVwiaWNvblwiIHZpZXdCb3g9XCIwIDAgMTAyNCAxMDI0XCIgdmVyc2lvbj1cIjEuMVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICAgICAgcC1pZD1cIjQxMTdcIiB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIj5cclxuICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgIGQ9XCJNODExLjczOSA5NjYuNTk3Yy0wLjA0OCAwLTAuMDk1IDAtMC4xNDMgMGwtNzE4Ljg1NiAwYy0xMC4zMjYgMC0xOC42OTctOC4zNzEtMTguNjk3LTE4LjY5N2wwLTIyLjQ2OGMtMC4zMTgtNi4yNjctMC45MTEtNDAuNjA0IDIxLjAwNC03OC4zMDcgMTMuNzE2LTIzLjU5OCAzMy40MzEtNDMuODYxIDU4LjU5OC02MC4yMjUgMzAuNDkzLTE5LjgyOSA2OS4xMTYtMzMuOTA5IDExNC43OTYtNDEuODQ5IDAuMjMzLTAuMDQgMC40NjctMC4wNzYgMC43MDEtMC4xMDcgMC4zNDctMC4wNDcgMzUuNDk5LTQuODU5IDcxLjIwOS0xNC4yNzMgNjEuODk1LTE2LjMxOCA2Ny4zMDgtMzAuNzQzIDY3LjM0Ni0zMC44ODQgMC4zNjQtMS40MzEgMC44OTQtMi44MDQgMS41NzMtNC4wOTUgMC41MDgtMi42OTkgMS43NjQtMTIuODU5LTAuNjM4LTQwLjA4LTYuMTAxLTY5LjEzNi00Mi4xMi0xMDkuOTk1LTcxLjA2MS0xNDIuODI2LTkuMTI4LTEwLjM1NS0xNy43NDktMjAuMTMzLTI0LjM4Ny0yOS43MjMtMjguNjQtNDEuMzcyLTMxLjI5Ny04OC40MTYtMzEuMzk2LTkwLjM5OS0wLjAxNS0wLjMxMS0wLjAyMy0wLjYyMi0wLjAyMy0wLjkzMyAwLTE4Ljc4IDkuMzYzLTI3LjQxOCAxNy42MjQtMzUuMDQxbDAuNDM0LTAuNDAxYzAuMjcxLTAuMjUxIDAuNDQyLTAuNDM3IDAuNTQyLTAuNTU3IDAuMDkzLTEuMzQxLTAuNTY3LTQuNzQzLTEuMDEzLTcuMDQxLTAuMTctMC44NzQtMC4zNC0xLjc1MS0wLjUwMS0yLjYzMy03LjE4LTM4Ljk4Mi03LjY3MS05OS4xOTItMS4xNzYtMTM3LjgzNyAyLjQxLTUwLjgxMyA0Ni4yMjUtODkuNzExIDQ4LjEwNS05MS4zNTYgMC4wNzItMC4wNjIgMC4xNDMtMC4xMjQgMC4yMTUtMC4xODUgNi4yOS01LjMzOSAxMi42NzItMTEuMTY5IDE2LjcyOC0xNy42MzcgMC40ODctMC43NzYgMC44MjgtMS4zNzcgMS4wNjYtMS44MzctMC4zMDUtMC43ODctMC43NDItMS43OTQtMS4wOTUtMi42MDgtMi40MzYtNS42MTktNi4xMTgtMTQuMTA5LTQuMDI0LTI1LjAyNCAxLjI2NC02LjU4OSA2LjA3OC0xOC4zNjIgMjQuMTE4LTIzLjE3NCA3LjI2MS0xLjkzNyAxNS4wMjItMi4zMzMgMjAuNjg5LTIuNjIybDEuMTIzLTAuMDU4YzIyLjM5LTEuMTc5IDQ2LjI3My0yLjE3NyA3MC40MzUtMC4zMjQgMTc0LjczIDEzLjM5NiAyMzQuOTIgNzguNjg2IDIzNy4zOTYgODEuNDU5IDAuMTQgMC4xNTYgMC4yNzYgMC4zMTQgMC40MDkgMC40NzUgMTMuOTg3IDE2Ljc1NyAyNC4zNDcgMzcuNjM1IDMwLjc5NiA2Mi4wNTUgMi4wMTUgNy42MiAzLjMwOSAxNC4wMTYgNC4wNjMgMjAuMDcyIDYuMTAzIDM1LjQ2NSA1LjA4NSA3MS45MDQgMy43ODIgOTYuMjY5LTAuNzMzIDEzLjY3NS0yLjI1NyAyOC4wMy00LjggNDUuMTc2LTAuNjkyIDQuNjU2IDAuMDY5IDUuNTY1IDAuMzU1IDUuOTA2IDAuNzU4IDAuOTA3IDEuNjg2IDEuODkyIDIuNjY4IDIuOTM1IDMuODYzIDQuMDk5IDkuMTUyIDkuNzEzIDExLjk2NCAxOC43MjEgMS40MSA0LjUwMyAyLjA2OSA5LjM2IDIuMDY5IDE1LjI2OCAwIDAuMzExLTAuMDA4IDAuNjIyLTAuMDIzIDAuOTMzLTAuMDk5IDEuOTgyLTIuNzU2IDQ5LjAyNi0zMS4zOTUgOTAuMzk4LTYuNjM5IDkuNTktMTUuMjYgMTkuMzY5LTI0LjM4NyAyOS43MjMtMjguOTQyIDMyLjgzLTY0Ljk2IDczLjY4OS03MS4wNjEgMTQyLjgyOC0yLjQwMiAyNy4yMjEtMS4xNDUgMzcuMzc5LTAuNjM4IDQwLjA4IDAuNjc4IDEuMjkxIDEuMjA4IDIuNjY1IDEuNTczIDQuMDk0IDAuMDM3IDAuMTQxIDUuNDcyIDE0LjYxNCA2Ny42NDkgMzAuOTY0IDM1LjcwNSA5LjM4OSA3MC41NTggMTQuMTQ2IDcwLjkwNiAxNC4xOTMgMC4zMDQgMC4wNDEgMC42MDcgMC4wOSAwLjkwOSAwLjE0NSA0Ni4wOTYgOC41NSA4NC45NTcgMjIuOTkyIDExNS41MDUgNDIuOTIzIDI1LjI1MiAxNi40NzYgNDQuOTMgMzYuNzAyIDU4LjQ4OSA2MC4xMTQgMjEuNTAyIDM3LjEyOSAyMC42MjcgNzAuNzE0IDIwLjE5NiA3Ny40NDRsMCAyMi4zMzNjMCAxMC4zMjYtOC4zNzEgMTguNjk3LTE4LjY5NyAxOC42OTdsLTE3Ni44ODMgMGMtMTAuMzI2IDAtMTguNjk3LTguMzcxLTE4LjY5Ny0xOC42OTcgMC0xMC4zMjYgOC4zNzEtMTguNjk3IDE4LjY5Ny0xOC42OTdMOTM0LjA3IDkyOS4yMDdsMC00LjMxMWMwLTAuNjg3IDAuMDA5LTEuMTA2IDAuMDgyLTEuNzY5IDAuMTA0LTEuNTA4IDEuNjI3LTI4LjMzMi0xNi4zNDktNTguMTMxLTEwLjgyLTE3LjkzOC0yNi41OS0zMy42MDktNDYuODctNDYuNTgxLTI2LjEtMTYuNjkzLTU5Ljc2Mi0yOC45NjgtMTAwLjA1Mi0zNi40ODMtNC42NC0wLjY0My0zOS4wMTItNS41NjUtNzUuMDgxLTE1LjA2LTcwLjc2MS0xOC42MjktODcuOTY0LTM5LjM1My05My4xODktNTQuMzk2LTQuMDA0LTcuNzY2LTYuMjQ1LTIzLjE5NS0yLjk4NS02MC4xNTMgNy4xODEtODEuMzY5IDQ5LjQxOS0xMjkuMjgyIDgwLjI2MS0xNjQuMjY4IDguNzQ3LTkuOTIyIDE2LjMwMS0xOC40OTEgMjEuNjkzLTI2LjI3OSAyMS4xMi0zMC41MTEgMjQuNDM4LTY2LjMgMjQuNzY1LTcwLjYwNi0wLjAzMy0yLjI1Mi0wLjI2MS0zLjIyMy0wLjM2Mi0zLjU1LTAuMjQ5LTAuNzk4LTEuODk3LTIuNTQ3LTMuNDktNC4yMzgtMS4yNS0xLjMyNy0yLjY2OC0yLjgzMy00LjEzNi00LjU4Ny03Ljk1LTkuNTA0LTEwLjc4My0yMS4wNzktOC42Ni0zNS4zODUgMi4zNjgtMTUuOTYgMy43ODEtMjkuMjA2IDQuNDQ5LTQxLjY4NCAxLjk1MS0zNi41MDIgMC45MTQtNjMuNzQ4LTMuMzY0LTg4LjM0MS0wLjA1Ny0wLjMyNi0wLjEwNS0wLjY1NS0wLjE0NS0wLjk4My0wLjUzMS00LjQzOC0xLjUzMS05LjM1NC0zLjE0OC0xNS40NjktNC45ODctMTguODg0LTEyLjcyNy0zNC43NzEtMjMuMDA3LTQ3LjIzMy0xLjcxNC0xLjc0OC0xNS4zODUtMTUuMTI1LTQ1Ljg4My0yOS42NzZDNTgzLjcxNSA5My44NCA1MTcuODA3IDg0LjE3NCA0NzIuMTgxIDgwLjY3NWMtMjEuOTM1LTEuNjgxLTQ0LjQ0Mi0wLjczMy02NS42MTQgMC4zODNsLTEuMTc5IDAuMDZjLTEuNzY2IDAuMDktNC43MzYgMC4yNDItNy41NTggMC41MjYgMi40NDggNS44NDEgNS40NTMgMTQuNjMyIDIuMjk2IDI1LjEzNi0xLjE4NSAzLjk0LTMuMDAzIDcuNzkyLTUuNzIzIDEyLjEyOS02LjczMiAxMC43MzMtMTUuOTI0IDE5LjIzNi0yNC4wNTUgMjYuMTQ1LTEuNTk3IDEuNDQyLTM0LjIyMyAzMS4zNTYtMzUuMzUxIDY1LjczOC0wLjAyOSAwLjg3LTAuMTE4IDEuNzM3LTAuMjY3IDIuNTk0LTUuOTcyIDM0LjMwNC01LjU2OSA5MC43OCAwLjg5OCAxMjUuODk0IDAuMTQgMC43NjUgMC4yODkgMS41MjYgMC40MzYgMi4yODMgMS45OCAxMC4yMDUgNS4yOTUgMjcuMjg0LTEwLjg4IDQyLjIwMmwtMC40MzUgMC40MDJjLTIuMDg3IDEuOTI1LTQuOTQ0IDQuNTYxLTUuNDE2IDUuNDY5bDAgMGMwLjAwMyAwLTAuMTMzIDAuNDI3LTAuMTY1IDEuNTg0IDAuMzI4IDQuMjk2IDMuNjU0IDQwLjA2IDI0Ljc2NCA3MC41NTUgNS4zOTIgNy43ODggMTIuOTQ2IDE2LjM1NyAyMS42OTMgMjYuMjc5IDMwLjg0MSAzNC45ODUgNzMuMDc5IDgyLjg5OSA4MC4yNiAxNjQuMjY2IDMuMjYgMzYuOTU5IDEuMDE5IDUyLjM4OC0yLjk4NSA2MC4xNTQtNS4yMjYgMTUuMDQzLTIyLjQyOCAzNS43NjctOTMuMTg5IDU0LjM5Ni0zNi4zNjUgOS41NzQtNzEuMDA2IDE0LjQ5Ny03NS4xODkgMTUuMDc0LTM5LjgzNCA2Ljk1OC03My4xOTYgMTguODgzLTk5LjE2IDM1LjQ0NS0yMC4xODYgMTIuODc2LTM1Ljk3MSAyOC41OTktNDYuOTE5IDQ2LjczMi0xOC4yODIgMzAuMjgyLTE3LjEzMyA1Ny44NjEtMTcuMDU1IDU5LjMzNiAwLjA1IDAuNTQzIDAuMDU0IDAuODY4IDAuMDU0IDEuNDM0bDAgNC4zMDkgNzAwLjA3NyAwTTYzMS40NjUgNjg5Ljg3NGMwLjQ1NCAwLjM2OCAwLjg5IDAuNzU3IDEuMzA2IDEuMTY1QzYzMi4zNzcgNjkwLjY1MiA2MzEuOTQyIDY5MC4yNjEgNjMxLjQ2NSA2ODkuODc0ek00MTQuMDQxIDY4OS44NzRjLTAuNDcyIDAuMzgzLTAuOTAyIDAuNzY4LTEuMjkyIDEuMTUyQzQxMy4xNiA2OTAuNjI1IDQxMy41OTIgNjkwLjI0IDQxNC4wNDEgNjg5Ljg3NHpcIlxyXG4gICAgICAgICAgICAgICAgcC1pZD1cIjQxMThcIiBmaWxsPVwiIzcwNzA3MFwiPjwvcGF0aD5cclxuICAgICAgICA8L3N2Zz5cclxuICAgIClcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBFbWFpbFN2ZyA9ICgpPT57XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxzdmcgdD1cIjE1OTA5MTY4ODAzMTNcIiBjbGFzc05hbWU9XCJpY29uXCIgdmlld0JveD1cIjAgMCAxMDI0IDEwMjRcIiB2ZXJzaW9uPVwiMS4xXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgICAgICBwLWlkPVwiNDM5NVwiIHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIyNFwiPlxyXG4gICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgZD1cIk04NS4zMzMzMzMgMTcwLjY2NjY2N3Y2ODIuNjY2NjY2aDg1My4zMzMzMzRWMTcwLjY2NjY2N0g4NS4zMzMzMzN6IG02OTguNDUzMzM0IDg1LjMzMzMzM0w1MTIgNDk3LjU3ODY2NyAyNDAuMjEzMzMzIDI1Nmg1NDMuNTczMzM0ek0xNzAuNjY2NjY3IDc2OFYzMDguMzUybDM0MS4zMzMzMzMgMzAzLjQwMjY2NyAzNDEuMzMzMzMzLTMwMy40MDI2NjdWNzY4SDE3MC42NjY2Njd6XCJcclxuICAgICAgICAgICAgICAgIHAtaWQ9XCI0Mzk2XCIgZmlsbD1cIiM3MDcwNzBcIj48L3BhdGg+XHJcbiAgICAgICAgPC9zdmc+XHJcbiAgICApXHJcbn07XHJcbmV4cG9ydCBjb25zdCBOYW1lU3ZnID0gKCk9PntcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPHN2ZyB0PVwiMTU5MDkxNzY1MDU4OFwiIGNsYXNzTmFtZT1cImljb25cIiB2aWV3Qm94PVwiMCAwIDEwMjQgMTAyNFwiIHZlcnNpb249XCIxLjFcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgICAgIHAtaWQ9XCI1NDY3XCIgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCI+XHJcbiAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICBkPVwiTTc5OC41OTIgNjgyLjY2NjY2N2wtNDUuNzgxMzMzLTExMy4zMjI2NjdMNzA3LjAyOTMzMyA2ODIuNjY2NjY3aDkxLjU2MjY2N3ogbTM0LjQ3NDY2NyA4NS4zMzMzMzNoLTE2MC41MTJsLTIxLjk3MzMzNCA1NC40YTQyLjY2NjY2NyA0Mi42NjY2NjcgMCAxIDEtNzkuMTQ2NjY2LTMybDEzOS4wOTMzMzMtMzQ0LjE5MmE0Mi42MjQgNDIuNjI0IDAgMCAxIDI5LjU2OC0yNS40NzIgNDIuNjY2NjY3IDQyLjY2NjY2NyAwIDAgMSA1NC40IDIzLjk3ODY2N2wxMzkuNjA1MzMzIDM0NS41MTQ2NjZhNDIuNjY2NjY3IDQyLjY2NjY2NyAwIDAgMS03OS4xMDQgMzJMODMzLjA2NjY2NyA3Njh6TTEyOCAxNzAuNjY2NjY3aDc2OHY4NS4zMzMzMzNIMTI4VjE3MC42NjY2Njd6IG0wIDIxMy4zMzMzMzNoNDY5LjMzMzMzM3Y4NS4zMzMzMzNIMTI4VjM4NHogbTAgMTcwLjY2NjY2N2gzNDEuMzMzMzMzdjg1LjMzMzMzM0gxMjh2LTg1LjMzMzMzM3ogbTAgMTcwLjY2NjY2NmgyNTZ2ODUuMzMzMzM0SDEyOHYtODUuMzMzMzM0elwiXHJcbiAgICAgICAgICAgICAgICBwLWlkPVwiNTQ2OFwiIGZpbGw9XCIjNzA3MDcwXCI+PC9wYXRoPlxyXG4gICAgICAgIDwvc3ZnPlxyXG4gICAgKVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IENvbGxlZ2VTdmcgPSAoKT0+e1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8c3ZnIHQ9XCIxNTkwOTIzOTAyNTM3XCIgY2xhc3NOYW1lPVwiaWNvblwiIHZpZXdCb3g9XCIwIDAgMTAyNCAxMDI0XCIgdmVyc2lvbj1cIjEuMVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICAgICAgcC1pZD1cIjYzNjFcIiB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIj5cclxuICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgIGQ9XCJNOTA4LjMwMzk3OCAzNzQuNjcwMjYyIDUxMC45Nzg3NCAxODIuNDEzNTQgMTEzLjY0OTQxIDM3NC42NzAyNjJsNTUuNTU1Mjk0IDI0LjgyMDI5Mi0wLjAyOTY3NiAwYy0xLjk5MjM3NyAwLTUuMDU2MTU2IDI5OS4zMDc4NTMtNC4yNTc5NzcgMzQ2Ljg4OTU0NSAwLjM1NTA4NyAyMC45NzQ3MDcgMTYuMjQ5MDc5IDMwLjkyODQwNyAzMS45MjgxNzcgMzAuOTI4NDA3IDE2LjEyMjE4OSAwIDMyLjAxNjE4MS0xMC40OTUwMjggMzAuNjE4MzQ1LTMwLjM3NDc5OGwxLjU0MTA5OS0zMjAuOTk1ODA1IDYxLjIzNDY0MyAyNy44NDAwNjhMMjkwLjIzOTMxNCA3MzIuMTA3MDIzbDAgMTEuMTY4MzY0IDcuNjE4NTE1IDguMjE0MDc5YzcuOTMzNjkzIDguNTAzNjc1IDExNC43Mjg5OTggODcuMTI3MzYgMjI2LjIzNjYyOCA4NS45OTE0OSAxMDcuNTg4MzY3LTEuMDgzNjgxIDIxNi44MzI0NDQtNzguOTgyODY2IDIyMS40NDg1NzgtODIuMjg3MTIxbDExLjgwMzgzNy04LjUzMjMyNyAwLTE0LjU2NTc0TDc1Ny4zNDY4NzEgNDQzLjAyNzExNmwtMS4xOTQxOTggMC4zNTgxNTdMOTA4LjMwMzk3OCAzNzQuNjcwMjYyIDkwOC4zMDM5NzggMzc0LjY3MDI2MnpNMTk5LjAyNDg2OSA3NDguNTI2OTk1Yy0wLjU1NDYzMiAwLjE1OTYzNi0xLjMxMTg3OSAwLjI4NTUwMi0yLjE3OTY0MiAwLjI4NTUwMi0xLjczNTUyNyAwLTIuODg4NzkzLTAuNTEyNjc2LTMuMTkwNjY5LTAuNzU0MTc3IDAuMDQ1MDI1IDAtMC4yMjgxOTctMC42NjgyMTktMC4yMzk0NTQtMi4xNzk2NDItMC43NTQxNzctNDQuNDg4MjM3IDEuMzUyODExLTI0Ni4xNDQwMjYgMy4wNDc0MDYtMzE3LjkwMjM1bDQuMDU3NDA5IDAtMS41MzU5ODMgMzE4Ljc5OTc5LTAuMDI4NjUzIDEuMDgzNjgxTDE5OS4wMjQ4NjkgNzQ4LjUyNjk5NSAxOTkuMDI0ODY5IDc0OC41MjY5OTV6TTI0MC43Nzk4NTUgNDAwLjAwNTI3NmwtNDAuMDQ4MTExLTE4LjIxMjgwNCAwIDAuNTk0NTQxLTE5LjU3Njg3MS04Ljc0NDE1MSAzMjkuODI0ODkxLTE1OS41ODY2NDhMODQxLjA3MTczNyAzNzMuNzg2MTI1IDUxMS4wMTk2NzMgNTIyLjgzNTc4OWwtMjA4LjcwNDMyMi05NC44NDgyMDUgMC4zOTkwODkgMC0yMy4zNDI2MzgtMTAuNDM4NzQ3TDI0MC43Nzk4NTUgNDAwLjAwNTI3NiAyNDAuNzc5ODU1IDQwMC4wMDUyNzZ6TTcyOC44NTA4NjMgNzMyLjEwNzAyM2MwIDAtMTA1LjI2NzUwOSA3NS44OTA0MzQtMjA1LjA3MDU2MiA3Ni44ODkxODFDNDE4Ljk0OTc0NCA4MTAuMDYyNDkgMzE5LjQxODg5IDczMi44NjUyOTMgMzE4LjcwNjY2OSA3MzIuMTA3MDIzTDMxOC43MDY2NjkgNDY2LjcyMjc5NGwxOTIuMjcyMDcyIDg3LjQwMDU4MiAyMTcuODcyMTIzLTk4LjQwOTMxTDcyOC44NTA4NjMgNzMyLjEwNzAyMyA3MjguODUwODYzIDczMi4xMDcwMjN6TTcyOC44NTA4NjMgNzMyLjEwNzAyM1wiXHJcbiAgICAgICAgICAgICAgICBwLWlkPVwiNjM2MlwiIGZpbGw9XCIjNzA3MDcwXCI+PC9wYXRoPlxyXG4gICAgICAgIDwvc3ZnPlxyXG4gICAgKVxyXG59O1xyXG5leHBvcnQgY29uc3QgU2VjdXJpdHlDb2RlU3ZnID0gKCk9PntcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPHN2ZyB0PVwiMTU5MDkyNjA2MzQzMFwiIGNsYXNzTmFtZT1cImljb25cIiB2aWV3Qm94PVwiMCAwIDEwMjQgMTAyNFwiIHZlcnNpb249XCIxLjFcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgICAgIHAtaWQ9XCI3MjMxXCIgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCI+XHJcbiAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICBkPVwiTTUxMS45MjU3NCAxMDIzLjk3NTI0N0MzNTcuOTU5Mzg5IDEwMjMuOTc1MjQ3IDcxLjUwMDI5IDc5NC40OTg1NSA3MS41MDAyOSA1NzcuNDQ4MDc2VjE2My4xNjIyNTFjMC0xMC4wNDk4OTQgOC40MTYxNjctMTguMTY5MDIgMTguODM3MzYyLTE4LjM3OTQyNGwyNC45NTE0Ni0wLjQyMDgwOGMwLjk1MzAwNyAwIDk4Ljc2NjE5Ni0xLjk2Nzg5OCAxOTkuNTk5MzA0LTQxLjg5NTE4NSAxMDMuNDgxNzI1LTQwLjg0MzE2NCAxNzAuMTc5ODQ5LTg3LjkzNjU2OSAxNzAuODg1MzIyLTg4LjQxOTI2MWwxNC42OTExNjItMTAuNDIxMTk1YTE5Ljg2NDYzIDE5Ljg2NDYzIDAgMCAxIDExLjM5ODk1Ni0zLjYwMTYyNSAxOS40ODA5NTEgMTkuNDgwOTUxIDAgMCAxIDExLjMyNDY5NiAzLjUzOTc0MWwxNC45NzU4MjYgMTAuNTA3ODMyYzAuNjgwNzE5IDAuNDgyNjkyIDY3LjQ0MDcyNyA0Ny41MjY1OTEgMTcwLjc5ODY4NSA4OC40MTkyNjIgMTAwLjkzMjEyMSAzOS45MjcyODcgMTk4Ljc0NTMxIDQxLjg5NTE4NSAxOTkuNzQ3ODI1IDQxLjg5NTE4NGwyNC43NTM0MzIgMC40MjA4MDljMTAuNDMzNTcyIDAuMjEwNDA0IDE4LjgyNDk4NSA4LjMyOTUzIDE4LjgyNDk4NiAxOC4zNzk0MjNsMC4yMTA0MDQgNDE0LjI4NTgyNWMwIDIxNy4wMjU3Mi0yODYuNTA4NjA2IDQ0Ni41MjcxNzEtNDQwLjYxMTEgNDQ2LjUyNzE3MXogbTM3Mi42MjU3OTctODEyLjU2ODU1NmMtMzcuODYwMzc1LTIuODQ2NjQ1LTExNy41MTY5MjEtMTIuNjI0MjUxLTIwMC4yNjc2NDYtNDUuMzg1NDE5LTg0LjU1NzcyNi0zMy40MTcxMzQtMTQ2LjcyNTk3Mi03MS4wMDUyMjEtMTcyLjM1ODE1MS04Ny42MDIzOTgtMjUuNTU3OTE5IDE2LjUzNTI5My04Ny43NjMyOTUgNTQuMTM1NzU3LTE3Mi4yOTYyNjggODcuNjAyMzk4LTgyLjYwMjIwNSAzMi42ODY5MDgtMTYyLjAzNTk3IDQyLjQ2NDUxNC0yMDAuNDE2MTY3IDQ1LjM4NTQxOXYzNjYuMDQxMzg1YzAgMTcwLjIxNjk3OSAyNDkuNTc2NDg0IDM3OC4yODE5NTcgMzcyLjcxMjQzNSAzNzguMjgxOTU3IDQ3LjcyNDYxOCAwIDE0MC43MjMyNjQtMzguNzI2NzQ1IDIzMi4xMzc2OTEtMTIzLjc2NzE2MyA4OC4xMjIyMi04MS45MDkxMDggMTQwLjcyMzI2NC0xNzcuMDczNjggMTQwLjcyMzI2NC0yNTQuNDkwMDQxeiBtLTQwNy45NDg5NDYgNDM1LjY2MDQxNGEzMy4zMDU3NDQgMzMuMzA1NzQ0IDAgMCAxLTIzLjg5OTQzOSAxMC4wNDk4OTQgMzMuNzM4OTI5IDMzLjczODkyOSAwIDAgMS0yMy45OTg0NTMtMTAuMDM3NTE3bC0xMDEuNjc0NzI0LTEwMi4zMzA2OTFhMzQuMzQ1Mzg4IDM0LjM0NTM4OCAwIDAgMSAwLTQ4LjI2OTE5MyAzMy42NjQ2NjggMzMuNjY0NjY4IDAgMCAxIDQ3LjkzNTAyMiAwbDc3LjczODE1NSA3OC4xODM3MTcgMTk2LjI2OTk2Ny0xOTcuNjkzMjlhMzMuNTkwNDA4IDMzLjU5MDQwOCAwIDAgMSA0Ny45MTAyNjkgMCAzNC4xODQ0OSAzNC4xODQ0OSAwIDAgMSAwIDQ4LjI2OTE5NHogbTAgMFwiXHJcbiAgICAgICAgICAgICAgICBwLWlkPVwiNzIzMlwiIGZpbGw9XCIjNzA3MDcwXCI+PC9wYXRoPlxyXG4gICAgICAgIDwvc3ZnPlxyXG4gICAgKTtcclxufTtcclxuZXhwb3J0IGNvbnN0IFN0dWRlbnROdW1TdmcgPSAoKT0+e1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8c3ZnIHQ9XCIxNTkxMDU4MjU2MzA4XCIgY2xhc3NOYW1lPVwiaWNvblwiIHZpZXdCb3g9XCIwIDAgMTAyNCAxMDI0XCIgdmVyc2lvbj1cIjEuMVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICAgICAgcC1pZD1cIjIwNTZcIiB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIj5cclxuICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgIGQ9XCJNMTUzLjYgMzM5LjJBMTkuMiAxOS4yIDAgMCAwIDEzNC40IDM1OC40djQ2MC44YzAgMTAuNTk4NCA4LjYwMTYgMTkuMiAxOS4yIDE5LjJoNzE2LjhhMTkuMiAxOS4yIDAgMCAwIDE5LjItMTkuMlYzNTguNEExOS4yIDE5LjIgMCAwIDAgODcwLjQgMzM5LjJIMTUzLjZ6IG0wLTY0aDcxNi44YzQ1LjkyNjQgMCA4My4yIDM3LjI3MzYgODMuMiA4My4ydjQ2MC44YzAgNDUuOTI2NC0zNy4yNzM2IDgzLjItODMuMiA4My4ySDE1My42QTgzLjIgODMuMiAwIDAgMSA3MC40IDgxOS4yVjM1OC40YzAtNDUuOTI2NCAzNy4yNzM2LTgzLjIgODMuMi04My4yelwiXHJcbiAgICAgICAgICAgICAgICBmaWxsPVwiIzcwNzA3MFwiIHAtaWQ9XCIyMDU3XCI+PC9wYXRoPlxyXG4gICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgZD1cIk0zMDIuNzk2OCA0NzYuODc2OGgzMy43OTJsMTEyLjEyOCAxNjMuMTIzMmgxLjIyODhWNDc2Ljg3NjhoMzMuNDg0OHYyMTkuMzQwOGgtMzIuNTYzMmwtMTEzLjM1NjgtMTY0Ljk2NjRoLTEuMjI4OHYxNjQuOTY2NGgtMzMuNDg0OFY0NzYuODc2OHogbTMyMS4wMjQtNC4zMDA4YzMzLjE3NzYgMCA1OS41OTY4IDEwLjc1MiA3OC45NTA0IDMyLjU2MzIgMTguNDMyIDIwLjU4MjQgMjcuNjQ4IDQ3LjkyMzIgMjcuNjQ4IDgxLjcxNTIgMCAzMy40ODQ4LTkuMjE2IDYwLjUxODQtMjcuNjQ4IDgxLjQwOC0xOS4zNTM2IDIxLjUwNC00NS43NzI4IDMyLjI1Ni03OC45NTA0IDMyLjI1Ni0zMy40ODQ4IDAtNTkuOTA0LTExLjA1OTItNzguOTUwNC0zMi41NjMyLTE4LjQzMi0yMC44ODk2LTI3LjM0MDgtNDcuOTIzMi0yNy4zNDA4LTgxLjEwMDggMC0zMy40ODQ4IDguOTA4OC02MC41MTg0IDI3LjM0MDgtODEuNDA4IDE5LjA0NjQtMjIuMTE4NCA0NS40NjU2LTMyLjg3MDQgNzguOTUwNC0zMi44NzA0eiBtMCAyOS40OTEyYy0yMy4zNDcyIDAtNDEuNDcyIDcuNjgtNTQuMzc0NCAyMy42NTQ0LTEyLjI4OCAxNS4wNTI4LTE4LjQzMiAzNS4zMjgtMTguNDMyIDYxLjEzMjggMCAyNS40OTc2IDYuMTQ0IDQ1Ljc3MjggMTguNDMyIDYwLjgyNTYgMTIuOTAyNCAxNS4zNiAzMS4wMjcyIDIzLjM0NzIgNTQuMzc0NCAyMy4zNDcyIDIzLjM0NzIgMCA0MS40NzItNy42OCA1NC4wNjcyLTIyLjczMjggMTIuMjg4LTE0Ljc0NTYgMTguNzM5Mi0zNS4zMjggMTguNzM5Mi02MS40NCAwLTI2LjQxOTItNi40NTEyLTQ3LjAwMTYtMTguNzM5Mi02Mi4wNTQ0LTEyLjU5NTItMTUuMzYtMzAuNzItMjIuNzMyOC01NC4wNjcyLTIyLjczMjh6XCJcclxuICAgICAgICAgICAgICAgIGZpbGw9XCIjNzA3MDcwXCIgcC1pZD1cIjIwNThcIj48L3BhdGg+XHJcbiAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICBkPVwiTTQ3NC4yMTQ0IDIxMS4ybDEyLjggNjRoNDkuOTcxMmwxMi44LTY0SDQ3NC4yMTQ0eiBtMTIxLjE5MDQgOTguMTUwNGEzNy4xMiAzNy4xMiAwIDAgMS0zNi40MDMyIDI5Ljg0OTZINDY0Ljk5ODRhMzcuMTIgMzcuMTIgMCAwIDEtMzYuMzUyLTI5Ljg0OTZsLTIzLjU1Mi0xMTcuNzZhMzcuMTIgMzcuMTIgMCAwIDEgMjkuMDgxNi00My42NzM2YzMuNTg0LTAuNjE0NCAzLjU4NC0wLjYxNDQgNy4yNzA0LTAuNzE2OGgxNDEuMTA3MmMyMC40OCAwIDM3LjEyIDE2LjY0IDM3LjEyIDM3LjEyLTAuMTAyNCAzLjY4NjQtMC4xMDI0IDMuNjg2NC0wLjcxNjggNy4yNzA0bC0yMy41NTIgMTE3Ljc2elwiXHJcbiAgICAgICAgICAgICAgICBmaWxsPVwiIzcwNzA3MFwiIHAtaWQ9XCIyMDU5XCI+PC9wYXRoPlxyXG4gICAgICAgIDwvc3ZnPlxyXG4gICAgKVxyXG59O1xyXG5cclxuXHJcbiIsImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcbi8vIGV4cG9ydCBjb25zdCBVUkwgPSBcImh0dHA6Ly9iYWl5b3UxMDI0LnRvcDo4MDgwL2Nsb3VkX2NsYXNzLTAuMC4xLVNOQVBTSE9UXCI7XHJcbmV4cG9ydCBjb25zdCBVUkwgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6ODA4MFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IFJlYWxBeGlvcyA9IGF4aW9zLmNyZWF0ZSh7XHJcbiAgICBiYXNlVVJMOlVSTCxcclxuICAgIHByb3h5OiB7XHJcbiAgICAgICAgJy90ZWFjaGVyLyonOiB7XHJcbiAgICAgICAgICAgIHRhcmdldDogVVJMLC8v5a+55bqU5ZCO56uv56uv5Y+jXHJcbiAgICAgICAgICAgIHNlY3VyZTogZmFsc2UsXHJcbiAgICAgICAgICAgIGNoYW5nZU9yaWdpbjogdHJ1ZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgJy9zdHVkZW50LyonOiB7XHJcbiAgICAgICAgICAgIHRhcmdldDogVVJMLC8v5a+55bqU5ZCO56uv56uv5Y+jXHJcbiAgICAgICAgICAgIHNlY3VyZTogZmFsc2UsXHJcbiAgICAgICAgICAgIGNoYW5nZU9yaWdpbjogdHJ1ZVxyXG4gICAgICAgIH0sXHJcbiAgICB9XHJcbn0pO1xyXG4iLCJpbXBvcnQgUmVhY3Qse2NyZWF0ZUNvbnRleHR9IGZyb20gJ3JlYWN0JztcclxuXHJcbmV4cG9ydCBjb25zdCBQYWdlQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoXCJpbmRleFwiKTtcclxuZXhwb3J0IGNvbnN0IENvdXJzZUNvbnRleHQgPSBjcmVhdGVDb250ZXh0KG51bGwpO1xyXG5leHBvcnQgY29uc3QgQ291cnNlc0NvbnRleHQgPSBjcmVhdGVDb250ZXh0KHt9KTtcclxuZXhwb3J0IGNvbnN0IFRlYWNoZXJDb250ZXh0ID0gY3JlYXRlQ29udGV4dChudWxsKTtcclxuZXhwb3J0IGNvbnN0IENvdXJzZU9wZXJhdGVDb250ZXh0ID0gY3JlYXRlQ29udGV4dChbXSk7XHJcbiIsImltcG9ydCBSZWFjdCwge3VzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZUNvbnRleHR9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQge0NvbCwgTWVudSwgUm93LEFmZml4fSBmcm9tICdhbnRkJ1xyXG5pbXBvcnQgU2N1bHB0dXJlIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3RlYWNoZXIvc2N1bHB0dXJlXCI7XHJcbmltcG9ydCBcIi4uLy4uL3B1YmxpYy9zdHlsZS9oZWFkLmNzc1wiXHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5pbXBvcnQge1BhZ2VDb250ZXh0fSBmcm9tIFwiLi9Db250ZXh0XCI7XHJcblxyXG5jb25zdCBIZWFkZXIgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBwYWdlID0gdXNlQ29udGV4dChQYWdlQ29udGV4dCk7XHJcbiAgICBjb25zdCBbdG9wLCBzZXRUb3BdID0gdXNlU3RhdGUoMCk7XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgfSwgW10pO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8QWZmaXggb2Zmc2V0VG9wPXt0b3B9PlxyXG4gICAgICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgICAgIDx0aXRsZT7kupHor77loII8L3RpdGxlPlxyXG4gICAgICAgICAgICAgICAgPG1ldGEgY2hhclNldD0ndXRmLTgnIC8+XHJcbiAgICAgICAgICAgIDwvSGVhZD5cclxuICAgICAgICAgICAgPGRpdiBpZD0naGVhZGVyLXdyYXAnPlxyXG4gICAgICAgICAgICAgICAgPENvbCBzcGFuPXsxOH0gb2Zmc2V0PXszfSBzdHlsZT17e2hlaWdodDogXCI1MHB4XCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICA8Um93IHR5cGU9J2ZsZXgnIGFsaWduPSdib3R0b20nIGlkPScnIHN0eWxlPXt7aGVpZ2h0OiAnNTBweCd9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENvbCBzcGFuPXs0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9J2xvZ28tdGV4dCc+Q2xvdWRDbGFzczwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENvbCBzcGFuPXsxMH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGU9XCJob3Jpem9udGFsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0U2VsZWN0ZWRLZXlzPXtwYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PSdpbmRleCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy90ZWFjaGVyJz48YT7pppbpobU8L2E+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTWVudS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PSdkaXNjdXNzaW9uJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj0nL3RlYWNoZXInPjxhPuiuqOiuuuWMujwvYT48L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L01lbnU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q29sIHNwYW49ezJ9IG9mZnNldD17OH0gc3R5bGU9e3toZWlnaHQ6ICcxMDAlJywgcGFkZGluZ1RvcDogXCI1cHhcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNjdWxwdHVyZS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvQWZmaXg+XHJcbiAgICApXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XHJcbiIsImltcG9ydCBSZWFjdCwge3VzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZUNvbnRleHQsY3JlYXRlQ29udGV4dH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBjb29raWUgZnJvbSBcInJlYWN0LWNvb2tpZXNcIjtcclxuaW1wb3J0IHtSZWFsQXhpb3N9IGZyb20gXCIuLi8uLi9jb25maWdcIjtcclxuaW1wb3J0IHtNb2RhbCwgUm93LCBDb2wsIERyb3Bkb3duLCBNZW51LCBtZXNzYWdlfSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQgQ291cnNlTW9kdWxlIGZyb20gXCIuL2NvdXJzZU1vZHVsZVwiO1xyXG5pbXBvcnQge0NvdXJzZXNDb250ZXh0fSBmcm9tIFwiLi4vQ29udGV4dFwiO1xyXG5cclxuY29uc3QgQ291cnNlQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoe30pO1xyXG5cclxuXHJcbmNvbnN0IEFyY2hpdmVDb3Vyc2UgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBbY291cnNlc0luZm8sIHNldENvdXJzZXNJbmZvXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IHsgZGlzcGF0Y2h9ID0gdXNlQ29udGV4dChDb3Vyc2VzQ29udGV4dCk7XHJcbiAgICBjb25zdCBbdmlzaWJsZSwgc2V0VmlzaWJsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gICAgY29uc3QgTW9yZU9wdGlvbiA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCB7Y291cnNlc0luZm8sZGlzcGF0Y2h9ID0gdXNlQ29udGV4dChDb3Vyc2VzQ29udGV4dCk7XHJcbiAgICAgICAgY29uc3QgY291cnNlSW5mbyA9IHVzZUNvbnRleHQoQ291cnNlQ29udGV4dCk7XHJcblxyXG4gICAgICAgIGNvbnN0IGdldENvdXJzZUluZm8gPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCByZXN1bHQgPSBbXTtcclxuICAgICAgICAgICAgUmVhbEF4aW9zKHtcclxuICAgICAgICAgICAgICAgIG1ldGhvZDogJ3Bvc3QnLFxyXG4gICAgICAgICAgICAgICAgdXJsOiAnL2NvdXJzZS9nZXRDb3Vyc2VCeVRlYWNoZXInLFxyXG4gICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgIHBob25lOiBjb29raWUubG9hZChcImlkXCIpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSByZXNwb25zZS5kYXRhO1xyXG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goe3R5cGU6XCJ1cGRhdGVcIixjb3Vyc2VzSW5mbzpbXX0pO1xyXG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goe3R5cGU6XCJ1cGRhdGVcIixjb3Vyc2VzSW5mbzpyZXN1bHR9KTtcclxuICAgICAgICAgICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGNvbnN0IHJlc3VtZUNvdXJzZSA9ICgpID0+IHtcclxuICAgICAgICAgICAgUmVhbEF4aW9zKHtcclxuICAgICAgICAgICAgICAgIG1ldGhvZDoncG9zdCcsXHJcbiAgICAgICAgICAgICAgICB1cmw6ICcvY291cnNlL2FyY2hpdmVDb3Vyc2UnLFxyXG4gICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgICd0Y2lkJzpjb3Vyc2VJbmZvLnRjaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2NpZCc6Y291cnNlSW5mby5jaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2FyY2hpdmUnOjBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwibXNnOlwiICsgcmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UuZGF0YSA9PT0gXCJzdWNjZXNzXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlLnN1Y2Nlc3MoXCLmgaLlpI3miJDlip9cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgZ2V0Q291cnNlSW5mbygpO1xyXG4gICAgICAgICAgICAgICAgICAgIGdldEFyY2hpdmVDb3Vyc2UoKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZihyZXNwb25zZS5kYXRhID09PSBcImZhaWxlZFwiKVxyXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UuZXJyb3IoXCLmgaLlpI3lpLHotKVcIik7XHJcbiAgICAgICAgICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgY29uc3QgZGVsZXRlQ291cnNlID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBSZWFsQXhpb3Moe1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOidwb3N0JyxcclxuICAgICAgICAgICAgICAgIHVybDonL2NvdXJzZS9kZWxldGVDb3Vyc2UnLFxyXG4gICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgICdjaWQnOmNvdXJzZUluZm8uY2lkXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UuZGF0YSA9PT0gXCJzdWNjZXNzXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlLnN1Y2Nlc3MoXCLor77nqIvliKDpmaTmiJDlip9cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgZ2V0Q291cnNlSW5mbygpO1xyXG4gICAgICAgICAgICAgICAgICAgIGdldEFyY2hpdmVDb3Vyc2UoKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZihyZXNwb25zZS5kYXRhID09PSBcImZhaWxlZFwiKVxyXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2Uuc3VjY2VzcyhcIuWIoOmZpOWksei0pVwiKTtcclxuICAgICAgICAgICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgY29uc3QgbW9yZU9wdGlvbiA9IChcclxuICAgICAgICAgICAgPE1lbnU+XHJcbiAgICAgICAgICAgICAgICA8TWVudS5JdGVtIGtleT0nMSc+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gb25DbGljaz17cmVzdW1lQ291cnNlfT7mgaLlpI08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PScyJz5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBvbkNsaWNrPXtkZWxldGVDb3Vyc2V9PuWIoOmZpDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvTWVudS5JdGVtPlxyXG4gICAgICAgICAgICA8L01lbnU+XHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPERyb3Bkb3duIG92ZXJsYXk9e21vcmVPcHRpb259IHRyaWdnZXI9e1snY2xpY2snXX0+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj7mm7TlpJo8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvRHJvcGRvd24+XHJcbiAgICAgICAgKTtcclxuICAgIH07XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBnZXRBcmNoaXZlQ291cnNlKCk7XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgY29uc3QgZ2V0QXJjaGl2ZUNvdXJzZSA9ICgpID0+IHtcclxuICAgICAgICBsZXQgcmVzdWx0ID0gW107XHJcbiAgICAgICAgUmVhbEF4aW9zKHtcclxuICAgICAgICAgICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgICAgICAgICAgIHVybDogJy90Yy9maW5kQXJjaGl2ZUNvdXJzZScsXHJcbiAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgIHBob25lOiBjb29raWUubG9hZChcImlkXCIpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICByZXN1bHQgPSByZXNwb25zZS5kYXRhO1xyXG4gICAgICAgICAgICBzZXRDb3Vyc2VzSW5mbyhyZXN1bHQpO1xyXG4gICAgICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3Qgb3Blbk1vZGFsID0gKCkgPT4ge1xyXG4gICAgICAgIGdldEFyY2hpdmVDb3Vyc2UoKTtcclxuICAgICAgICBzZXRWaXNpYmxlKHRydWUpO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IGNsb3NlTW9kYWwgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0VmlzaWJsZShmYWxzZSk7XHJcbiAgICB9O1xyXG5cclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8YSBvbkNsaWNrPXtvcGVuTW9kYWx9Puivvueoi+W9kuahozwvYT5cclxuICAgICAgICAgICAgPE1vZGFsXHJcbiAgICAgICAgICAgICAgICB0aXRsZT17XCLlvZLmoaPnrqHnkIZcIn1cclxuICAgICAgICAgICAgICAgIHZpc2libGU9e3Zpc2libGV9XHJcbiAgICAgICAgICAgICAgICBmb290ZXI9e251bGx9XHJcbiAgICAgICAgICAgICAgICBvbkNhbmNlbD17Y2xvc2VNb2RhbH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPFJvdyBqdXN0aXR5PVwiY2VudGVyXCIgc3R5bGU9e3twYWRkaW5nTGVmdDo2MCsncHgnLH19PlxyXG4gICAgICAgICAgICAgICAge2NvdXJzZXNJbmZvLm1hcCgoaXRlbSxrZXkpID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8Q29sIGtleT17a2V5fSBzcGFuPXsxMH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxSb3cgYWxpZ249XCJtaWRkbGVcIiBndXR0ZXI9e1sxMCwyMF19ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgb2Zmc2V0PXsxfT48cCBzdHlsZT17e2ZvbnRTaXplOjE1KydweCcsIHdpZHRoOjEwMCsncHgnLG1hcmdpbjowfX0+e2l0ZW0uY25hbWV9PC9wPjwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbCBvZmZzZXQ9ezF9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb3Vyc2VDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtpdGVtfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1vcmVPcHRpb24gb25jbGljaz17Z2V0QXJjaGl2ZUNvdXJzZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvdXJzZUNvbnRleHQuUHJvdmlkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICA8L01vZGFsPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFyY2hpdmVDb3Vyc2U7XHJcbiIsImltcG9ydCAnLi4vLi4vLi4vcHVibGljL3N0eWxlL3RlYWNoZXIvY291cnNlLmNzcyc7XHJcbmltcG9ydCBSZWFjdCwge3VzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZUNvbnRleHR9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQge01vZGFsLCBTZWxlY3QsIElucHV0LCBSb3csIG1lc3NhZ2V9IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCB7UmVhbEF4aW9zfSBmcm9tIFwiLi4vLi4vY29uZmlnXCI7XHJcbmltcG9ydCBjb29raWUgZnJvbSBcInJlYWN0LWNvb2tpZXNcIjtcclxuaW1wb3J0IHtDb3Vyc2VzQ29udGV4dH0gZnJvbSBcIi4uL0NvbnRleHRcIjtcclxuXHJcbmNvbnN0IENvdXJzZUFkZE1vZHVsZSA9ICgpID0+IHtcclxuICAgIGNvbnN0IHsgY291cnNlc0luZm8sZGlzcGF0Y2h9ID0gdXNlQ29udGV4dChDb3Vyc2VzQ29udGV4dCk7XHJcbiAgICBjb25zdCBbdmlzaWJsZSwgc2V0VmlzaWJsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbY291cnNlTmFtZSwgc2V0Q291cnNlTmFtZV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbdGVhY2hlcklkLCBzZXRUZWFjaGVySWRdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW2NvdXJzZURhdGUsIHNldENvdXJzZURhdGVdID0gdXNlU3RhdGUoJzIwMTktMjAyMCcpO1xyXG4gICAgY29uc3Qge09wdGlvbn0gPSBTZWxlY3Q7XHJcbiAgICBjb25zdCBkYXRhID0gW1xyXG4gICAgICAgIHsnb3B0aW9uJzonMjAxNS0yMDE2J30sXHJcbiAgICAgICAgeydvcHRpb24nOicyMDE2LTIwMTcnfSxcclxuICAgICAgICB7J29wdGlvbic6JzIwMTctMjAxOCd9LFxyXG4gICAgICAgIHsnb3B0aW9uJzonMjAxOC0yMDE5J30sXHJcbiAgICAgICAgeydvcHRpb24nOicyMDE5LTIwMjAnfSxcclxuICAgICAgICB7J29wdGlvbic6JzIwMjEtMjAyMid9LFxyXG4gICAgICAgIHsnb3B0aW9uJzonMjAyMi0yMDIzJ30sXHJcbiAgICAgICAgeydvcHRpb24nOicyMDIzLTIwMjQnfSxdO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgZ2V0VGVhY2hlcklkKCk7XHJcbiAgICB9LFtdKTtcclxuXHJcbiAgICBjb25zdCBnZXRDb3Vyc2VJbmZvID0gKCkgPT4ge1xyXG4gICAgICAgIGxldCByZXN1bHQgPSBbXTtcclxuICAgICAgICBSZWFsQXhpb3Moe1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdwb3N0JyxcclxuICAgICAgICAgICAgdXJsOiAnL2NvdXJzZS9nZXRDb3Vyc2VCeVRlYWNoZXInLFxyXG4gICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICBwaG9uZTogY29va2llLmxvYWQoXCJpZFwiKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgcmVzdWx0ID0gcmVzcG9uc2UuZGF0YTtcclxuICAgICAgICAgICAgZGlzcGF0Y2goe3R5cGU6XCJ1cGRhdGVcIixjb3Vyc2VzSW5mbzpbXX0pO1xyXG4gICAgICAgICAgICBkaXNwYXRjaCh7dHlwZTpcInVwZGF0ZVwiLGNvdXJzZXNJbmZvOnJlc3VsdH0pO1xyXG4gICAgICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3Qgb3Blbk1vZGFsID0gKCkgPT4ge1xyXG4gICAgICAgIHNldFZpc2libGUodHJ1ZSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGdldFRlYWNoZXJJZCA9ICgpID0+IHtcclxuICAgICAgICBSZWFsQXhpb3Moe1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdwb3N0JyxcclxuICAgICAgICAgICAgdXJsOiAnL3RlYWNoZXIvZ2V0SW5mbycsXHJcbiAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICdwaG9uZSc6Y29va2llLmxvYWQoXCJpZFwiKSxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgIHNldFRlYWNoZXJJZChyZXNwb25zZS5kYXRhLnRpZCk7XHJcbiAgICAgICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVPayA9ICgpID0+IHtcclxuICAgICAgICBSZWFsQXhpb3Moe1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdwb3N0JyxcclxuICAgICAgICAgICAgdXJsOiAnL2NvdXJzZS9jcmVhdGVDb3Vyc2UnLFxyXG4gICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAndGlkJzogdGVhY2hlcklkLFxyXG4gICAgICAgICAgICAgICAgJ2NuYW1lJzogY291cnNlTmFtZSxcclxuICAgICAgICAgICAgICAgICdjZGF0ZSc6IGNvdXJzZURhdGVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgIGlmKHJlc3BvbnNlLmRhdGEubXNnID09PSBcInN1Y2Nlc3NcIikge1xyXG4gICAgICAgICAgICAgICAgbWVzc2FnZS5zdWNjZXNzKFwi6K++56iL5Yib5bu65oiQ5YqfXCIpO1xyXG4gICAgICAgICAgICAgICAgZ2V0Q291cnNlSW5mbygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYocmVzcG9uc2UuZGF0YS5tc2cgPT09IFwiZmFpbGVkXCIpXHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlLmVycm9yKFwi6K++56iL5Yib5bu65aSx6LSlXCIpO1xyXG4gICAgICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgICB9KTtcclxuICAgICAgICBzZXRWaXNpYmxlKGZhbHNlKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ2FuY2VsID0gKCkgPT4ge1xyXG4gICAgICAgIHNldFZpc2libGUoZmFsc2UpO1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gKDxkaXYgY2xhc3NOYW1lPSdjb3Vyc2UtbW9kdWxlJz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb3Vyc2UtbW9kdWxlLWFkZC1oZWFkZXJcIj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3toZWlnaHQ6IDE1OSsncHgnLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnMCAwIDhweCA4cHgnLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxyXG4gICAgICAgICAgICAgICAgYWxpZ25JdGVtczogJ3N0YXJ0J319PlxyXG4gICAgICAgICAgICAgICAgPHAgc3R5bGU9e3toZWlnaHQ6IDI0KydweCcsdGV4dEFsaWduOlwiY2VudGVyXCIsY3Vyc29yOlwicG9pbnRlclwifX0gb25DbGljaz17b3Blbk1vZGFsfT5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17e2ZvbnRTaXplOjI0KydweCcsZm9udFdlaWdodDpcImJvbGRcIn19Pis8L3NwYW4+PGJyLz7liJvlu7ror77nqIs8L3A+XHJcbiAgICAgICAgICAgICAgICA8TW9kYWxcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZSA9IHtcIuWIm+W7uuivvueoi1wifVxyXG4gICAgICAgICAgICAgICAgICAgIHZpc2libGUgPSB7dmlzaWJsZX1cclxuICAgICAgICAgICAgICAgICAgICBvbk9rID0ge2hhbmRsZU9rfVxyXG4gICAgICAgICAgICAgICAgICAgIG9rVGV4dCA9IHsn5Yib5bu6J31cclxuICAgICAgICAgICAgICAgICAgICBjYW5jZWxUZXh0ID0geyflj5bmtognfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2FuY2VsID0ge2hhbmRsZUNhbmNlbH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFJvdyBzdHlsZT17e21hcmdpbjpcIjEwcHhcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0IHNpemU9XCJsYXJnZVwiIHR5cGU9J3RleHQnIHBsYWNlaG9sZGVyPSfor77nqIvlkI3np7AnIHZhbHVlPXtjb3Vyc2VOYW1lfSBvbkNoYW5nZT17KGUpPT57c2V0Q291cnNlTmFtZShlLnRhcmdldC52YWx1ZSl9fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Um93IHN0eWxlPXt7bWFyZ2luOlwiMTBweFwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2VsZWN0IHNpemU9XCJsYXJnZVwiIGRlZmF1bHRWYWx1ZT0nMjAxOS0yMDIwJyBzdHlsZT17eyB3aWR0aDogNDUyKydweCcgfX0gb25DaGFuZ2U9eyh2YWx1ZSk9PntzZXRDb3Vyc2VEYXRlKHZhbHVlKX19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtkYXRhLm1hcCgoaXRlbSxrZXkpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT17aXRlbS5vcHRpb259IGtleT17a2V5fT57aXRlbS5vcHRpb259PC9PcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L01vZGFsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvdXJzZUFkZE1vZHVsZTtcclxuIiwiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlQ29udGV4dH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7SW5wdXQsIG1lc3NhZ2UsIE1vZGFsLCBSb3d9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQge1VzZXJTdmd9IGZyb20gXCIuLi8uLi9TdmdcIjtcclxuaW1wb3J0IHtSZWFsQXhpb3N9IGZyb20gXCIuLi8uLi9jb25maWdcIjtcclxuaW1wb3J0IGNvb2tpZSBmcm9tIFwicmVhY3QtY29va2llc1wiO1xyXG5pbXBvcnQge0NvdXJzZXNDb250ZXh0fSBmcm9tIFwiLi4vQ29udGV4dFwiO1xyXG5cclxuY29uc3QgQ291cnNlQWRkU3BhbiA9ICgpPT57XHJcbiAgICBjb25zdCBbdmlzaWJsZSwgc2V0VmlzaWJsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbY291cnNlQ29kZSwgc2V0Q291cnNlQ29kZV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCB7IGRpc3BhdGNofSA9IHVzZUNvbnRleHQoQ291cnNlc0NvbnRleHQpO1xyXG4gICAgY29uc3QgW3RlYWNoZXJJZCwgc2V0VGVhY2hlcklkXSA9IHVzZVN0YXRlKCcnKTtcclxuXHJcbiAgICBjb25zdCBvcGVuTW9kYWwgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0VmlzaWJsZSh0cnVlKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgZ2V0Q291cnNlSW5mbyA9ICgpID0+IHtcclxuICAgICAgICBsZXQgcmVzdWx0ID0gW107XHJcbiAgICAgICAgUmVhbEF4aW9zKHtcclxuICAgICAgICAgICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgICAgICAgICAgIHVybDogJy9jb3Vyc2UvZ2V0Q291cnNlQnlUZWFjaGVyJyxcclxuICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgcGhvbmU6IGNvb2tpZS5sb2FkKFwiaWRcIilcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgIHJlc3VsdCA9IHJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHt0eXBlOlwidXBkYXRlXCIsY291cnNlc0luZm86W119KTtcclxuICAgICAgICAgICAgZGlzcGF0Y2goe3R5cGU6XCJ1cGRhdGVcIixjb3Vyc2VzSW5mbzpyZXN1bHR9KTtcclxuICAgICAgICB9KS50aGVuKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgZ2V0VGVhY2hlcklkID0gKCkgPT4ge1xyXG4gICAgICAgIFJlYWxBeGlvcyh7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ3Bvc3QnLFxyXG4gICAgICAgICAgICB1cmw6ICcvdGVhY2hlci9nZXRJbmZvJyxcclxuICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgJ3Bob25lJzpjb29raWUubG9hZChcImlkXCIpLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgc2V0VGVhY2hlcklkKHJlc3BvbnNlLmRhdGEudGlkKTtcclxuICAgICAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgZ2V0VGVhY2hlcklkKCk7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlT2sgPSAoKSA9PiB7XHJcbiAgICAgICAgUmVhbEF4aW9zKHtcclxuICAgICAgICAgICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgICAgICAgICAgIHVybDogJy90Yy9hZGRUZWFjaENvdXJzZScsXHJcbiAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICd0aWQnOiB0ZWFjaGVySWQsXHJcbiAgICAgICAgICAgICAgICAnaW52aXRlJzogY291cnNlQ29kZSxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5kYXRhID09PSBcInN1Y2Nlc3NcIikge1xyXG4gICAgICAgICAgICAgICAgbWVzc2FnZS5zdWNjZXNzKFwi5Yqg5YWl6K++56iL5oiQ5YqfXCIpO1xyXG4gICAgICAgICAgICAgICAgZ2V0Q291cnNlSW5mbygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYocmVzcG9uc2UuZGF0YSA9PT0gXCJmYWlsZWRcIilcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2UuZXJyb3IoXCLliqDor77lpLHotKVcIik7XHJcbiAgICAgICAgICAgIGVsc2UgaWYocmVzcG9uc2UuZGF0YSA9PT0gXCJleGlzdGVkX2Vycm9yXCIpXHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlLmVycm9yKFwi6K++56iL5bey5Yqg5YWl77yM5peg6ZyA5YaN5qyh55Sz6K+3XCIpO1xyXG4gICAgICAgICAgICBlbHNlIGlmKHJlc3BvbnNlLmRhdGEgPT09IFwibm90X2V4aXN0X2Vycm9yXCIpXHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlLmVycm9yKFwi5peg5pWI6K++56iL6YKA6K+356CBXCIpO1xyXG4gICAgICAgICAgICBlbHNlIGlmKHJlc3BvbnNlLmRhdGEgPT09IFwiaWxsZWdhbF9lcnJvclwiKVxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZS5lcnJvcihcIuaXoOaViOivvueoi+mCgOivt+eggVwiKTtcclxuICAgICAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgc2V0VmlzaWJsZShmYWxzZSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZUNhbmNlbCA9ICgpID0+IHtcclxuICAgICAgICBzZXRWaXNpYmxlKGZhbHNlKTtcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8c3BhbiBvbkNsaWNrPXtvcGVuTW9kYWx9PuWKoOWFpeivvueoi3t2aXNpYmxlfTwvc3Bhbj5cclxuICAgICAgICAgICAgPE1vZGFsXHJcbiAgICAgICAgICAgICAgICB0aXRsZSA9IHtcIuWKoOWFpeivvueoi1wifVxyXG4gICAgICAgICAgICAgICAgdmlzaWJsZSA9IHt2aXNpYmxlfVxyXG4gICAgICAgICAgICAgICAgb25PayA9IHtoYW5kbGVPa31cclxuICAgICAgICAgICAgICAgIG9rVGV4dCA9IHsn5Yqg5YWlJ31cclxuICAgICAgICAgICAgICAgIGNhbmNlbFRleHQgPSB7J+WPlua2iCd9XHJcbiAgICAgICAgICAgICAgICBvbkNhbmNlbCA9IHtoYW5kbGVDYW5jZWx9PlxyXG4gICAgICAgICAgICAgICAgPHA+PFJvdyBzdHlsZT17e21hcmdpbjpcIjEwcHhcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dCBzaXplPVwibGFyZ2VcIiB0eXBlPSd0ZXh0JyBwbGFjZWhvbGRlcj0n6K+36L6T5YWl6K++56iL5Yqg6K++6aqM6K+B56CBJyAgdmFsdWU9e2NvdXJzZUNvZGV9IG9uQ2hhbmdlPXsoZSk9PntzZXRDb3Vyc2VDb2RlKGUudGFyZ2V0LnZhbHVlKX19Lz5cclxuICAgICAgICAgICAgICAgIDwvUm93PjwvcD5cclxuICAgICAgICAgICAgPC9Nb2RhbD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvdXJzZUFkZFNwYW47IiwiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlQ29udGV4dH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7SW5wdXQsIG1lc3NhZ2UsIE1vZGFsLCBSb3csIFNlbGVjdH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCB7VXNlclN2Z30gZnJvbSBcIi4uLy4uL1N2Z1wiO1xyXG5pbXBvcnQgY29va2llIGZyb20gJ3JlYWN0LWNvb2tpZXMnXHJcbmltcG9ydCB7UmVhbEF4aW9zfSBmcm9tIFwiLi4vLi4vY29uZmlnXCI7XHJcbmltcG9ydCB7Um91dGVyfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHtDb3Vyc2VzQ29udGV4dH0gZnJvbSBcIi4uL0NvbnRleHRcIjtcclxuXHJcbmNvbnN0IENvdXJzZUNyZWF0ZVNwYW4gPSAoKT0+e1xyXG4gICAgY29uc3QgW3Zpc2libGUsIHNldFZpc2libGVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW2NvdXJzZU5hbWUsIHNldENvdXJzZU5hbWVdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW3RlYWNoZXJJZCwgc2V0VGVhY2hlcklkXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IHsgY291cnNlc0luZm8sZGlzcGF0Y2h9ID0gdXNlQ29udGV4dChDb3Vyc2VzQ29udGV4dCk7XHJcbiAgICBjb25zdCBbY291cnNlRGF0ZSwgc2V0Q291cnNlRGF0ZV0gPSB1c2VTdGF0ZSgnMjAxOS0yMDIwJyk7XHJcbiAgICBjb25zdCB7T3B0aW9ufSA9IFNlbGVjdDtcclxuICAgIGNvbnN0IGRhdGEgPSBbXHJcbiAgICAgICAgeydvcHRpb24nOicyMDE1LTIwMTYnfSxcclxuICAgICAgICB7J29wdGlvbic6JzIwMTYtMjAxNyd9LFxyXG4gICAgICAgIHsnb3B0aW9uJzonMjAxNy0yMDE4J30sXHJcbiAgICAgICAgeydvcHRpb24nOicyMDE4LTIwMTknfSxcclxuICAgICAgICB7J29wdGlvbic6JzIwMTktMjAyMCd9LFxyXG4gICAgICAgIHsnb3B0aW9uJzonMjAyMS0yMDIyJ30sXHJcbiAgICAgICAgeydvcHRpb24nOicyMDIyLTIwMjMnfSxcclxuICAgICAgICB7J29wdGlvbic6JzIwMjMtMjAyNCd9LF07XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBnZXRUZWFjaGVySWQoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IGdldENvdXJzZUluZm8gPSAoKSA9PiB7XHJcbiAgICAgICAgbGV0IHJlc3VsdCA9IFtdO1xyXG4gICAgICAgIFJlYWxBeGlvcyh7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ3Bvc3QnLFxyXG4gICAgICAgICAgICB1cmw6ICcvY291cnNlL2dldENvdXJzZUJ5VGVhY2hlcicsXHJcbiAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgIHBob25lOiBjb29raWUubG9hZChcImlkXCIpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICByZXN1bHQgPSByZXNwb25zZS5kYXRhO1xyXG4gICAgICAgICAgICBkaXNwYXRjaCh7dHlwZTpcInVwZGF0ZVwiLGNvdXJzZXNJbmZvOltdfSk7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHt0eXBlOlwidXBkYXRlXCIsY291cnNlc0luZm86cmVzdWx0fSk7XHJcbiAgICAgICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBvcGVuTW9kYWwgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0VmlzaWJsZSh0cnVlKTtcclxuICAgIH07XHJcblxyXG5cclxuICAgIGNvbnN0IGdldFRlYWNoZXJJZCA9ICgpID0+IHtcclxuICAgICAgICBSZWFsQXhpb3Moe1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdwb3N0JyxcclxuICAgICAgICAgICAgdXJsOiAnL3RlYWNoZXIvZ2V0SW5mbycsXHJcbiAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICdwaG9uZSc6Y29va2llLmxvYWQoXCJpZFwiKSxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgIHNldFRlYWNoZXJJZChyZXNwb25zZS5kYXRhLnRpZCk7XHJcbiAgICAgICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVPayA9ICgpID0+IHtcclxuICAgICAgICBSZWFsQXhpb3Moe1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdwb3N0JyxcclxuICAgICAgICAgICAgdXJsOiAnL2NvdXJzZS9jcmVhdGVDb3Vyc2UnLFxyXG4gICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAndGlkJzogdGVhY2hlcklkLFxyXG4gICAgICAgICAgICAgICAgJ2NuYW1lJzogY291cnNlTmFtZSxcclxuICAgICAgICAgICAgICAgICdjZGF0ZSc6IGNvdXJzZURhdGVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5kYXRhLm1zZyA9PT0gXCJzdWNjZXNzXCIpIHtcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2Uuc3VjY2VzcyhcIuivvueoi+WIm+W7uuaIkOWKn1wiKTtcclxuICAgICAgICAgICAgICAgIGdldENvdXJzZUluZm8oKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmKHJlc3BvbnNlLmRhdGEubXNnID09PSBcImZhaWxlZFwiKVxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZS5zdWNjZXNzKFwi6K++56iL5Yib5bu65aSx6LSlXCIpO1xyXG4gICAgICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgICB9KTtcclxuICAgICAgICBzZXRWaXNpYmxlKGZhbHNlKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ2FuY2VsID0gKCkgPT4ge1xyXG4gICAgICAgIHNldFZpc2libGUoZmFsc2UpO1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9e29wZW5Nb2RhbH0+5Yib5bu66K++56iLe3Zpc2libGV9PC9zcGFuPlxyXG4gICAgICAgICAgICA8TW9kYWxcclxuICAgICAgICAgICAgICAgIHRpdGxlID0ge1wi5Yib5bu66K++56iLXCJ9XHJcbiAgICAgICAgICAgICAgICB2aXNpYmxlID0ge3Zpc2libGV9XHJcbiAgICAgICAgICAgICAgICBvbk9rID0ge2hhbmRsZU9rfVxyXG4gICAgICAgICAgICAgICAgb2tUZXh0ID0geyfliJvlu7onfVxyXG4gICAgICAgICAgICAgICAgY2FuY2VsVGV4dCA9IHsn5Y+W5raIJ31cclxuICAgICAgICAgICAgICAgIG9uQ2FuY2VsID0ge2hhbmRsZUNhbmNlbH0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxSb3cgc3R5bGU9e3ttYXJnaW46XCIxMHB4XCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0IHNpemU9XCJsYXJnZVwiIHR5cGU9J3RleHQnIHBsYWNlaG9sZGVyPSfor77nqIvlkI3np7AnIHZhbHVlPXtjb3Vyc2VOYW1lfSBvbkNoYW5nZT17KGUpPT57c2V0Q291cnNlTmFtZShlLnRhcmdldC52YWx1ZSl9fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgPFJvdyBzdHlsZT17e21hcmdpbjpcIjEwcHhcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8U2VsZWN0IHNpemU9XCJsYXJnZVwiIGRlZmF1bHRWYWx1ZT0nMjAxOS0yMDIwJyBzdHlsZT17eyB3aWR0aDogNDUyKydweCcgfX0gb25DaGFuZ2U9eyh2YWx1ZSk9PntzZXRDb3Vyc2VEYXRlKHZhbHVlKX19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2RhdGEubWFwKChpdGVtLGtleSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9e2l0ZW0ub3B0aW9ufSBrZXk9e2tleX0+e2l0ZW0ub3B0aW9ufTwvT3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L01vZGFsPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ291cnNlQ3JlYXRlU3BhbjtcclxuIiwiaW1wb3J0IHsgUm93LCBDb2wsIEF2YXRhciwgRHJvcGRvd24sIE1lbnUsIE1vZGFsLCBJbnB1dCwgU2VsZWN0LCBtZXNzYWdlfSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQgeyBDb3Vyc2VzQ29udGV4dH0gZnJvbSBcIi4uL0NvbnRleHRcIjtcclxuaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlQ29udGV4dH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgJy4uLy4uLy4uL3B1YmxpYy9zdHlsZS90ZWFjaGVyL2NvdXJzZS5jc3MnO1xyXG5pbXBvcnQge1JlYWxBeGlvc30gZnJvbSBcIi4uLy4uL2NvbmZpZ1wiO1xyXG5pbXBvcnQgY29va2llIGZyb20gXCJyZWFjdC1jb29raWVzXCI7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcblxyXG5cclxuXHJcbmNvbnN0IENvdXJzZU1vZHVsZSA9ICgpID0+IHtcclxuICAgIGNvbnN0IHsgaXRlbSxjb3Vyc2VzSW5mbyxkaXNwYXRjaH0gPSB1c2VDb250ZXh0KENvdXJzZXNDb250ZXh0KTtcclxuICAgIGNvbnN0IFtjb3Vyc2VJbmZvLHNldENvdXJzZUluZm9dID0gdXNlU3RhdGUoaXRlbSk7XHJcbiAgICBjb25zdCBbaW1hZ2UsIHNldEltYWdlXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gICAgY29uc3QgW3Zpc2libGUsIHNldFZpc2libGVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW2NvdXJzZU5hbWUsIHNldENvdXJzZU5hbWVdID0gdXNlU3RhdGUoY291cnNlSW5mby5jbmFtZSk7XHJcbiAgICBjb25zdCBbY291cnNlRGF0ZSwgc2V0Q291cnNlRGF0ZV0gPSB1c2VTdGF0ZShjb3Vyc2VJbmZvLmNkYXRlKTtcclxuICAgIGNvbnN0IHtPcHRpb259ID0gU2VsZWN0O1xyXG4gICAgY29uc3QgZGF0YSA9IFtcclxuICAgICAgICB7J29wdGlvbic6JzIwMTUtMjAxNid9LFxyXG4gICAgICAgIHsnb3B0aW9uJzonMjAxNi0yMDE3J30sXHJcbiAgICAgICAgeydvcHRpb24nOicyMDE3LTIwMTgnfSxcclxuICAgICAgICB7J29wdGlvbic6JzIwMTgtMjAxOSd9LFxyXG4gICAgICAgIHsnb3B0aW9uJzonMjAxOS0yMDIwJ30sXHJcbiAgICAgICAgeydvcHRpb24nOicyMDIxLTIwMjInfSxcclxuICAgICAgICB7J29wdGlvbic6JzIwMjItMjAyMyd9LFxyXG4gICAgICAgIHsnb3B0aW9uJzonMjAyMy0yMDI0J30sXTtcclxuXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBSZWFsQXhpb3Moe1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdwb3N0JyxcclxuICAgICAgICAgICAgdXJsOiBcIi90ZWFjaGVyL2dldEhlYWRlckltZ1wiLFxyXG4gICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAncGhvbmUnOiBjb3Vyc2VJbmZvLnRwaG9uZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgc2V0SW1hZ2UoJ2RhdGE6aW1hZ2UvcG5nO2Jhc2U2NCwnICsgcmVzcG9uc2UuZGF0YS5pbWFnZSk7XHJcbiAgICAgICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICB9KVxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgZ2V0Q291cnNlSW5mbyA9ICgpID0+IHtcclxuICAgICAgICBsZXQgcmVzdWx0ID0gW107XHJcbiAgICAgICAgUmVhbEF4aW9zKHtcclxuICAgICAgICAgICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgICAgICAgICAgIHVybDogJy9jb3Vyc2UvZ2V0Q291cnNlQnlUZWFjaGVyJyxcclxuICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgcGhvbmU6IGNvb2tpZS5sb2FkKFwiaWRcIilcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgIHJlc3VsdCA9IHJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHt0eXBlOlwidXBkYXRlXCIsY291cnNlc0luZm86W119KTtcclxuICAgICAgICAgICAgZGlzcGF0Y2goe3R5cGU6XCJ1cGRhdGVcIixjb3Vyc2VzSW5mbzpyZXN1bHR9KTtcclxuICAgICAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfTtcclxuXHJcblxyXG4gICAgY29uc3Qgb3Blbk1vZGFsID0gKCkgPT4ge1xyXG4gICAgICAgIHNldFZpc2libGUodHJ1ZSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZU9rID0gKCkgPT4ge1xyXG4gICAgICAgIFJlYWxBeGlvcyh7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ3Bvc3QnLFxyXG4gICAgICAgICAgICB1cmw6ICcvY291cnNlL3VwZGF0ZUNvdXJzZScsXHJcbiAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICdjaWQnOiBjb3Vyc2VJbmZvLmNpZCxcclxuICAgICAgICAgICAgICAgICdjbmFtZSc6IGNvdXJzZU5hbWUsXHJcbiAgICAgICAgICAgICAgICAnY2RhdGUnOiBjb3Vyc2VEYXRlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhKTtcclxuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmRhdGEgPT09IFwic3VjY2Vzc1wiKSB7XHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlLnN1Y2Nlc3MoXCLkv67mlLnmiJDlip9cIilcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZ2V0Q291cnNlSW5mbygpO1xyXG4gICAgICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgICB9KTtcclxuICAgICAgICBzZXRWaXNpYmxlKGZhbHNlKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ2FuY2VsID0gKCkgPT4ge1xyXG4gICAgICAgIHNldFZpc2libGUoZmFsc2UpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBhcmNoaXZlU2VsZiA9ICgpID0+IHtcclxuICAgICAgICBSZWFsQXhpb3Moe1xyXG4gICAgICAgICAgICBtZXRob2Q6J3Bvc3QnLFxyXG4gICAgICAgICAgICB1cmw6ICcvdGMvYXJjaGl2ZUNvdXJzZScsXHJcbiAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICd0Y2lkJzpjb3Vyc2VJbmZvLnRjaWQsXHJcbiAgICAgICAgICAgICAgICAnYXJjaGl2ZSc6MVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coY291cnNlSW5mby5jbmFtZSArIHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICAgICAgICBnZXRDb3Vyc2VJbmZvKCk7XHJcbiAgICAgICAgfSkudGhlbigoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgICAgfSlcclxuICAgIH07XHJcblxyXG5cclxuICAgIGNvbnN0IGFyY2hpdmVBbGwgPSAoKSA9PiB7XHJcbiAgICAgICAgUmVhbEF4aW9zKHtcclxuICAgICAgICAgICAgbWV0aG9kOidwb3N0JyxcclxuICAgICAgICAgICAgdXJsOiAnL2NvdXJzZS9hcmNoaXZlQ291cnNlJyxcclxuICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgJ2NpZCc6Y291cnNlSW5mby5jaWQsXHJcbiAgICAgICAgICAgICAgICAnYXJjaGl2ZSc6MVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgICAgICAgIGdldENvdXJzZUluZm8oKTtcclxuICAgICAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgICAgfSlcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgZGVsZXRlQ291cnNlID0gKCkgPT4ge1xyXG4gICAgICAgIFJlYWxBeGlvcyh7XHJcbiAgICAgICAgICAgIG1ldGhvZDoncG9zdCcsXHJcbiAgICAgICAgICAgIHVybDonL2NvdXJzZS9kZWxldGVDb3Vyc2UnLFxyXG4gICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAnY2lkJzpjb3Vyc2VJbmZvLmNpZFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgICAgICAgIGdldENvdXJzZUluZm8oKTtcclxuICAgICAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IE1vcmVPcHRpb24gPSAoXHJcbiAgICAgICAgPE1lbnU+XHJcbiAgICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PScxJz5cclxuICAgICAgICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9e29wZW5Nb2RhbH0+57yW6L6RPC9zcGFuPlxyXG4gICAgICAgICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgICAgICAgPE1lbnUuSXRlbSBrZXk9JzInPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gb25DbGljaz17YXJjaGl2ZVNlbGZ9PuW9kuaho+iHquW3sTwvc3Bhbj5cclxuICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XHJcbiAgICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PSczJz5cclxuICAgICAgICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9e2FyY2hpdmVBbGx9PuW9kuaho+aJgOaciTwvc3Bhbj5cclxuICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XHJcbiAgICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PSc0Jz5cclxuICAgICAgICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9e2RlbGV0ZUNvdXJzZX0+5Yig6ZmkPC9zcGFuPlxyXG4gICAgICAgICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgICA8L01lbnU+XHJcbiAgICApO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvdXJzZS1tb2R1bGUnPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvdXJzZS1tb2R1bGUtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvdXJzZS1tb2R1bGUtaGVhZGVyLWxlZnRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17e2ZvbnRTaXplOiAyMCsncHgnLCBjb2xvcjpcIiNmZmZcIn19IG9uQ2xpY2s9eygpPT5Sb3V0ZXIucHVzaChcIi90ZWFjaGVyL2RldGFpbD9pZD1cIitjb3Vyc2VJbmZvLmNpZCl9Pntjb3Vyc2VJbmZvLmNuYW1lfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17e2ZvbnRTaXplOiAxMisncHgnLCBjb2xvcjpcInJnYmEoMjU1LDI1NSwyNTUsMSlcIn19Pntjb3Vyc2VJbmZvLmludml0ZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7Y29sb3I6XCJyZ2JhKDI1NSwyNTUsMjU1LDEpXCIsIGFsaWduU2VsZjogXCJmbGV4LWVuZFwifX0+e2NvdXJzZUluZm8uY2RhdGV9PC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImNvdXJzZS1tb2R1bGUtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgPGxpPjxzcGFuIHN0eWxlPXt7Y29sb3I6XCJyZ2JhKDk1LDk5LDEwNCwxKVwiLCBmb250U2l6ZToxMisncHgnfX0+5pyA6L+R5L2c5LiaPC9zcGFuPjwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGk+e2NvdXJzZUluZm8ud29ya308L2xpPlxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvdXJzZS1tb2R1bGUtZm9vdGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8Um93IGp1c3RpZnk9XCJzcGFjZS1iZXR3ZWVuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFJvdyBqdXN0aXR5PVwic3RhcnRcIiBndXR0ZXI9e1sxMCwwXX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QXZhdGFyIHNyYz17aW1hZ2V9IHNpemU9ezI0fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q29sPntjb3Vyc2VJbmZvLnRuYW1lfTwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb2wganVzdGl0eT1cInN0YXJ0XCIgZ3V0dGVyPSdbNSwwXSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd24gb3ZlcmxheT17TW9yZU9wdGlvbn0gdHJpZ2dlcj17WydjbGljayddfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj7mm7TlpJo8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPE1vZGFsXHJcbiAgICAgICAgICAgICAgICB0aXRsZSA9IHtcIuS/ruaUueivvueoi+S/oeaBr1wifVxyXG4gICAgICAgICAgICAgICAgdmlzaWJsZSA9IHt2aXNpYmxlfVxyXG4gICAgICAgICAgICAgICAgb25PayA9IHtoYW5kbGVPa31cclxuICAgICAgICAgICAgICAgIG9rVGV4dCA9IHsn5L+d5a2YJ31cclxuICAgICAgICAgICAgICAgIGNhbmNlbFRleHQgPSB7J+WPlua2iCd9XHJcbiAgICAgICAgICAgICAgICBvbkNhbmNlbCA9IHtoYW5kbGVDYW5jZWx9PlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8Um93IHN0eWxlPXt7bWFyZ2luOlwiMTBweFwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dCBzaXplPVwibGFyZ2VcIiB0eXBlPSd0ZXh0JyBwbGFjZWhvbGRlcj17Y291cnNlTmFtZX0gb25DaGFuZ2U9eyhlKT0+e3NldENvdXJzZU5hbWUoZS50YXJnZXQudmFsdWUpfX0vPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICAgICAgICAgIDxSb3cgc3R5bGU9e3ttYXJnaW46XCIxMHB4XCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFNlbGVjdCBzaXplPVwibGFyZ2VcIiBkZWZhdWx0VmFsdWU9e2NvdXJzZURhdGV9IHN0eWxlPXt7IHdpZHRoOiA0NTIrJ3B4JyB9fSBvbkNoYW5nZT17KHZhbHVlKT0+e3NldENvdXJzZURhdGUodmFsdWUpfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZGF0YS5tYXAoKGl0ZW0sa2V5KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT17aXRlbS5vcHRpb259IGtleT17a2V5fT57aXRlbS5vcHRpb259PC9PcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9TZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9Nb2RhbD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvdXJzZU1vZHVsZTtcclxuIiwiaW1wb3J0IHtNZW51fSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQgQ291cnNlQ3JlYXRlU3BhbiBmcm9tIFwiLi9jb3Vyc2VDcmVhdGVTcGFuXCI7XHJcbmltcG9ydCBDb3Vyc2VBZGRTcGFuIGZyb20gXCIuL2NvdXJzZUFkZFNwYW5cIjtcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgQWRkT3JDcmVhdGVDb3Vyc2VNZW51ID0gKFxyXG4gICAgPE1lbnU+XHJcbiAgICAgICAgPE1lbnUuSXRlbSBrZXk9JzEnPlxyXG4gICAgICAgICAgICA8Q291cnNlQ3JlYXRlU3Bhbi8+XHJcbiAgICAgICAgPC9NZW51Lkl0ZW0+XHJcbiAgICAgICAgPE1lbnUuSXRlbSBrZXk9JzInPlxyXG4gICAgICAgICAgICA8Q291cnNlQWRkU3Bhbi8+XHJcbiAgICAgICAgPC9NZW51Lkl0ZW0+XHJcbiAgICA8L01lbnU+XHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBZGRPckNyZWF0ZUNvdXJzZU1lbnU7IiwiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7QXZhdGFyLCBDb2wsIFBvcG92ZXIsIFJvd30gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IGNvb2tpZSBmcm9tIFwicmVhY3QtY29va2llc1wiO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQge1JlYWxBeGlvc30gZnJvbSBcIi4uL2NvbmZpZ1wiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBcIi4uLy4uL3B1YmxpYy9zdHlsZS9oZWFkLmNzc1wiXHJcblxyXG5jb25zdCBhY3Rpb24gPSAoXHJcbiAgICA8Um93IHR5cGU9J2ZsZXgnIGp1c3RpZnk9J2NlbnRlcic+XHJcbiAgICAgICAgPENvbD5cclxuICAgICAgICAgICAgPFJvdyB0eXBlPSdmbGV4JyBhbGlnbj1cIm1pZGRsZVwiIGp1c3RpZnk9J2NlbnRlcicgZ3V0dGVyPXtbMTAsIDBdfSBjbGFzc05hbWU9XCJoZWFkZXItYWN0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICA8Q29sIHNwYW49ezI0fSBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgUm91dGVyLnB1c2goXCIvdGVhY2hlci9wZXJzb25hbFwiKVxyXG4gICAgICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAg5Liq5Lq65Lit5b+DXHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgIDxSb3cgdHlwdz0nZmxleCcgYWxpZ249J21pZGRsZScganVzdGlmeT0nY2VudGVyJyBndXR0ZXI9e1syMCwgMF19IGNsYXNzTmFtZT1cImhlYWRlci1hY3Rpb25cIj5cclxuICAgICAgICAgICAgICAgIDxDb2wgc3Bhbj17MjR9IG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb29raWUucmVtb3ZlKFwiaWRlbnRpZnlcIix7cGF0aDpcIi9cIn0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvb2tpZS5yZW1vdmUoXCJpZFwiLHtwYXRoOlwiL1wifSk7XHJcbiAgICAgICAgICAgICAgICAgICAgUm91dGVyLnB1c2goXCIvdGVhY2hlci9sb2dpblwiKTtcclxuICAgICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIOmAgOWHuueZu+W9lVxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgIDwvQ29sPlxyXG4gICAgPC9Sb3c+XHJcbik7XHJcblxyXG5jb25zdCBTY3VscHR1cmUgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBbaW1hZ2UsIHNldEltYWdlXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zdCBwaG9uZSA9IGNvb2tpZS5sb2FkKFwiaWRcIik7XHJcbiAgICAgICAgUmVhbEF4aW9zKHtcclxuICAgICAgICAgICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgICAgICAgICAgIHVybDogXCIvdGVhY2hlci9nZXRIZWFkZXJJbWdcIixcclxuICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgJ3Bob25lJzogcGhvbmUgKyBcIlwiLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgc2V0SW1hZ2UoJ2RhdGE6aW1hZ2UvcG5nO2Jhc2U2NCwnICsgcmVzcG9uc2UuZGF0YS5pbWFnZSk7XHJcbiAgICAgICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICB9KVxyXG4gICAgfSwgW10pO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8UG9wb3ZlciB0cmlnZ2VyPVwiaG92ZXJcIiBwbGFjZW1lbnQ9XCJib3R0b21cIiBhcnJvd1BvaW50QXRDZW50ZXJcclxuICAgICAgICAgICAgICAgICAgICAgY29udGVudD17YWN0aW9ufT5cclxuICAgICAgICAgICAgICAgIDxBdmF0YXIgc3JjPXtpbWFnZX0gc2l6ZT17MzZ9Lz5cclxuICAgICAgICAgICAgPC9Qb3BvdmVyPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2N1bHB0dXJlO1xyXG4iLCJkZWNsYXJlIGNvbnN0IF9fTkVYVF9EQVRBX186IGFueVxuXG5pbXBvcnQgUmVhY3QsIHsgQ2hpbGRyZW4sIENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgcGFyc2UsIHJlc29sdmUsIFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7IFByZWZldGNoT3B0aW9ucyB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHtcbiAgZXhlY09uY2UsXG4gIGZvcm1hdFdpdGhWYWxpZGF0aW9uLFxuICBnZXRMb2NhdGlvbk9yaWdpbixcbn0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzJ1xuaW1wb3J0IFJvdXRlciBmcm9tICcuL3JvdXRlcidcbmltcG9ydCB7IGFkZEJhc2VQYXRoIH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXInXG5cbmZ1bmN0aW9uIGlzTG9jYWwoaHJlZjogc3RyaW5nKTogYm9vbGVhbiB7XG4gIGNvbnN0IHVybCA9IHBhcnNlKGhyZWYsIGZhbHNlLCB0cnVlKVxuICBjb25zdCBvcmlnaW4gPSBwYXJzZShnZXRMb2NhdGlvbk9yaWdpbigpLCBmYWxzZSwgdHJ1ZSlcblxuICByZXR1cm4gKFxuICAgICF1cmwuaG9zdCB8fCAodXJsLnByb3RvY29sID09PSBvcmlnaW4ucHJvdG9jb2wgJiYgdXJsLmhvc3QgPT09IG9yaWdpbi5ob3N0KVxuICApXG59XG5cbnR5cGUgVXJsID0gc3RyaW5nIHwgVXJsT2JqZWN0XG50eXBlIEZvcm1hdFJlc3VsdCA9IHsgaHJlZjogc3RyaW5nOyBhcz86IHN0cmluZyB9XG5cbmZ1bmN0aW9uIG1lbW9pemVkRm9ybWF0VXJsKGZvcm1hdEZ1bmM6IChocmVmOiBVcmwsIGFzPzogVXJsKSA9PiBGb3JtYXRSZXN1bHQpIHtcbiAgbGV0IGxhc3RIcmVmOiBudWxsIHwgVXJsID0gbnVsbFxuICBsZXQgbGFzdEFzOiB1bmRlZmluZWQgfCBudWxsIHwgVXJsID0gbnVsbFxuICBsZXQgbGFzdFJlc3VsdDogbnVsbCB8IEZvcm1hdFJlc3VsdCA9IG51bGxcbiAgcmV0dXJuIChocmVmOiBVcmwsIGFzPzogVXJsKSA9PiB7XG4gICAgaWYgKGxhc3RSZXN1bHQgJiYgaHJlZiA9PT0gbGFzdEhyZWYgJiYgYXMgPT09IGxhc3RBcykge1xuICAgICAgcmV0dXJuIGxhc3RSZXN1bHRcbiAgICB9XG5cbiAgICBjb25zdCByZXN1bHQgPSBmb3JtYXRGdW5jKGhyZWYsIGFzKVxuICAgIGxhc3RIcmVmID0gaHJlZlxuICAgIGxhc3RBcyA9IGFzXG4gICAgbGFzdFJlc3VsdCA9IHJlc3VsdFxuICAgIHJldHVybiByZXN1bHRcbiAgfVxufVxuXG5mdW5jdGlvbiBmb3JtYXRVcmwodXJsOiBVcmwpOiBzdHJpbmcge1xuICByZXR1cm4gdXJsICYmIHR5cGVvZiB1cmwgPT09ICdvYmplY3QnID8gZm9ybWF0V2l0aFZhbGlkYXRpb24odXJsKSA6IHVybFxufVxuXG5leHBvcnQgdHlwZSBMaW5rUHJvcHMgPSB7XG4gIGhyZWY6IFVybFxuICBhcz86IFVybFxuICByZXBsYWNlPzogYm9vbGVhblxuICBzY3JvbGw/OiBib29sZWFuXG4gIHNoYWxsb3c/OiBib29sZWFuXG4gIHBhc3NIcmVmPzogYm9vbGVhblxuICBwcmVmZXRjaD86IGJvb2xlYW5cbn1cblxubGV0IG9ic2VydmVyOiBJbnRlcnNlY3Rpb25PYnNlcnZlclxuY29uc3QgbGlzdGVuZXJzID0gbmV3IE1hcDxFbGVtZW50LCAoKSA9PiB2b2lkPigpXG5jb25zdCBJbnRlcnNlY3Rpb25PYnNlcnZlciA9XG4gIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gd2luZG93LkludGVyc2VjdGlvbk9ic2VydmVyIDogbnVsbFxuY29uc3QgcHJlZmV0Y2hlZDogeyBbY2FjaGVLZXk6IHN0cmluZ106IGJvb2xlYW4gfSA9IHt9XG5cbmZ1bmN0aW9uIGdldE9ic2VydmVyKCk6IEludGVyc2VjdGlvbk9ic2VydmVyIHwgdW5kZWZpbmVkIHtcbiAgLy8gUmV0dXJuIHNoYXJlZCBpbnN0YW5jZSBvZiBJbnRlcnNlY3Rpb25PYnNlcnZlciBpZiBhbHJlYWR5IGNyZWF0ZWRcbiAgaWYgKG9ic2VydmVyKSB7XG4gICAgcmV0dXJuIG9ic2VydmVyXG4gIH1cblxuICAvLyBPbmx5IGNyZWF0ZSBzaGFyZWQgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgaWYgc3VwcG9ydGVkIGluIGJyb3dzZXJcbiAgaWYgKCFJbnRlcnNlY3Rpb25PYnNlcnZlcikge1xuICAgIHJldHVybiB1bmRlZmluZWRcbiAgfVxuXG4gIHJldHVybiAob2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoXG4gICAgKGVudHJpZXMpID0+IHtcbiAgICAgIGVudHJpZXMuZm9yRWFjaCgoZW50cnkpID0+IHtcbiAgICAgICAgaWYgKCFsaXN0ZW5lcnMuaGFzKGVudHJ5LnRhcmdldCkpIHtcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGNiID0gbGlzdGVuZXJzLmdldChlbnRyeS50YXJnZXQpIVxuICAgICAgICBpZiAoZW50cnkuaXNJbnRlcnNlY3RpbmcgfHwgZW50cnkuaW50ZXJzZWN0aW9uUmF0aW8gPiAwKSB7XG4gICAgICAgICAgb2JzZXJ2ZXIudW5vYnNlcnZlKGVudHJ5LnRhcmdldClcbiAgICAgICAgICBsaXN0ZW5lcnMuZGVsZXRlKGVudHJ5LnRhcmdldClcbiAgICAgICAgICBjYigpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSxcbiAgICB7IHJvb3RNYXJnaW46ICcyMDBweCcgfVxuICApKVxufVxuXG5jb25zdCBsaXN0ZW5Ub0ludGVyc2VjdGlvbnMgPSAoZWw6IEVsZW1lbnQsIGNiOiAoKSA9PiB2b2lkKSA9PiB7XG4gIGNvbnN0IG9ic2VydmVyID0gZ2V0T2JzZXJ2ZXIoKVxuICBpZiAoIW9ic2VydmVyKSB7XG4gICAgcmV0dXJuICgpID0+IHt9XG4gIH1cblxuICBvYnNlcnZlci5vYnNlcnZlKGVsKVxuICBsaXN0ZW5lcnMuc2V0KGVsLCBjYilcbiAgcmV0dXJuICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgb2JzZXJ2ZXIudW5vYnNlcnZlKGVsKVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc29sZS5lcnJvcihlcnIpXG4gICAgfVxuICAgIGxpc3RlbmVycy5kZWxldGUoZWwpXG4gIH1cbn1cblxuY2xhc3MgTGluayBleHRlbmRzIENvbXBvbmVudDxMaW5rUHJvcHM+IHtcbiAgcDogYm9vbGVhblxuXG4gIGNvbnN0cnVjdG9yKHByb3BzOiBMaW5rUHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgaWYgKHByb3BzLnByZWZldGNoKSB7XG4gICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAnTmV4dC5qcyBhdXRvLXByZWZldGNoZXMgYXV0b21hdGljYWxseSBiYXNlZCBvbiB2aWV3cG9ydC4gVGhlIHByZWZldGNoIGF0dHJpYnV0ZSBpcyBubyBsb25nZXIgbmVlZGVkLiBNb3JlOiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9wcmVmZXRjaC10cnVlLWRlcHJlY2F0ZWQnXG4gICAgICAgIClcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5wID0gcHJvcHMucHJlZmV0Y2ggIT09IGZhbHNlXG4gIH1cblxuICBjbGVhblVwTGlzdGVuZXJzID0gKCkgPT4ge31cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpOiB2b2lkIHtcbiAgICB0aGlzLmNsZWFuVXBMaXN0ZW5lcnMoKVxuICB9XG5cbiAgZ2V0UGF0aHMoKTogc3RyaW5nW10ge1xuICAgIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHdpbmRvdy5sb2NhdGlvblxuICAgIGNvbnN0IHsgaHJlZjogcGFyc2VkSHJlZiwgYXM6IHBhcnNlZEFzIH0gPSB0aGlzLmZvcm1hdFVybHMoXG4gICAgICB0aGlzLnByb3BzLmhyZWYsXG4gICAgICB0aGlzLnByb3BzLmFzXG4gICAgKVxuICAgIGNvbnN0IHJlc29sdmVkSHJlZiA9IHJlc29sdmUocGF0aG5hbWUsIHBhcnNlZEhyZWYpXG4gICAgcmV0dXJuIFtyZXNvbHZlZEhyZWYsIHBhcnNlZEFzID8gcmVzb2x2ZShwYXRobmFtZSwgcGFyc2VkQXMpIDogcmVzb2x2ZWRIcmVmXVxuICB9XG5cbiAgaGFuZGxlUmVmKHJlZjogRWxlbWVudCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnAgJiYgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgJiYgcmVmICYmIHJlZi50YWdOYW1lKSB7XG4gICAgICB0aGlzLmNsZWFuVXBMaXN0ZW5lcnMoKVxuXG4gICAgICBjb25zdCBpc1ByZWZldGNoZWQgPVxuICAgICAgICBwcmVmZXRjaGVkW1xuICAgICAgICAgIHRoaXMuZ2V0UGF0aHMoKS5qb2luKFxuICAgICAgICAgICAgLy8gSm9pbiBvbiBhbiBpbnZhbGlkIFVSSSBjaGFyYWN0ZXJcbiAgICAgICAgICAgICclJ1xuICAgICAgICAgIClcbiAgICAgICAgXVxuICAgICAgaWYgKCFpc1ByZWZldGNoZWQpIHtcbiAgICAgICAgdGhpcy5jbGVhblVwTGlzdGVuZXJzID0gbGlzdGVuVG9JbnRlcnNlY3Rpb25zKHJlZiwgKCkgPT4ge1xuICAgICAgICAgIHRoaXMucHJlZmV0Y2goKVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIFRoZSBmdW5jdGlvbiBpcyBtZW1vaXplZCBzbyB0aGF0IG5vIGV4dHJhIGxpZmVjeWNsZXMgYXJlIG5lZWRlZFxuICAvLyBhcyBwZXIgaHR0cHM6Ly9yZWFjdGpzLm9yZy9ibG9nLzIwMTgvMDYvMDcveW91LXByb2JhYmx5LWRvbnQtbmVlZC1kZXJpdmVkLXN0YXRlLmh0bWxcbiAgZm9ybWF0VXJscyA9IG1lbW9pemVkRm9ybWF0VXJsKChocmVmLCBhc0hyZWYpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgaHJlZjogYWRkQmFzZVBhdGgoZm9ybWF0VXJsKGhyZWYpKSxcbiAgICAgIGFzOiBhc0hyZWYgPyBhZGRCYXNlUGF0aChmb3JtYXRVcmwoYXNIcmVmKSkgOiBhc0hyZWYsXG4gICAgfVxuICB9KVxuXG4gIGxpbmtDbGlja2VkID0gKGU6IFJlYWN0Lk1vdXNlRXZlbnQpOiB2b2lkID0+IHtcbiAgICBjb25zdCB7IG5vZGVOYW1lLCB0YXJnZXQgfSA9IGUuY3VycmVudFRhcmdldCBhcyBIVE1MQW5jaG9yRWxlbWVudFxuICAgIGlmIChcbiAgICAgIG5vZGVOYW1lID09PSAnQScgJiZcbiAgICAgICgodGFyZ2V0ICYmIHRhcmdldCAhPT0gJ19zZWxmJykgfHxcbiAgICAgICAgZS5tZXRhS2V5IHx8XG4gICAgICAgIGUuY3RybEtleSB8fFxuICAgICAgICBlLnNoaWZ0S2V5IHx8XG4gICAgICAgIChlLm5hdGl2ZUV2ZW50ICYmIGUubmF0aXZlRXZlbnQud2hpY2ggPT09IDIpKVxuICAgICkge1xuICAgICAgLy8gaWdub3JlIGNsaWNrIGZvciBuZXcgdGFiIC8gbmV3IHdpbmRvdyBiZWhhdmlvclxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgbGV0IHsgaHJlZiwgYXMgfSA9IHRoaXMuZm9ybWF0VXJscyh0aGlzLnByb3BzLmhyZWYsIHRoaXMucHJvcHMuYXMpXG5cbiAgICBpZiAoIWlzTG9jYWwoaHJlZikpIHtcbiAgICAgIC8vIGlnbm9yZSBjbGljayBpZiBpdCdzIG91dHNpZGUgb3VyIHNjb3BlIChlLmcuIGh0dHBzOi8vZ29vZ2xlLmNvbSlcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHdpbmRvdy5sb2NhdGlvblxuICAgIGhyZWYgPSByZXNvbHZlKHBhdGhuYW1lLCBocmVmKVxuICAgIGFzID0gYXMgPyByZXNvbHZlKHBhdGhuYW1lLCBhcykgOiBocmVmXG5cbiAgICBlLnByZXZlbnREZWZhdWx0KClcblxuICAgIC8vICBhdm9pZCBzY3JvbGwgZm9yIHVybHMgd2l0aCBhbmNob3IgcmVmc1xuICAgIGxldCB7IHNjcm9sbCB9ID0gdGhpcy5wcm9wc1xuICAgIGlmIChzY3JvbGwgPT0gbnVsbCkge1xuICAgICAgc2Nyb2xsID0gYXMuaW5kZXhPZignIycpIDwgMFxuICAgIH1cblxuICAgIC8vIHJlcGxhY2Ugc3RhdGUgaW5zdGVhZCBvZiBwdXNoIGlmIHByb3AgaXMgcHJlc2VudFxuICAgIFJvdXRlclt0aGlzLnByb3BzLnJlcGxhY2UgPyAncmVwbGFjZScgOiAncHVzaCddKGhyZWYsIGFzLCB7XG4gICAgICBzaGFsbG93OiB0aGlzLnByb3BzLnNoYWxsb3csXG4gICAgfSkudGhlbigoc3VjY2VzczogYm9vbGVhbikgPT4ge1xuICAgICAgaWYgKCFzdWNjZXNzKSByZXR1cm5cbiAgICAgIGlmIChzY3JvbGwpIHtcbiAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApXG4gICAgICAgIGRvY3VtZW50LmJvZHkuZm9jdXMoKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBwcmVmZXRjaChvcHRpb25zPzogUHJlZmV0Y2hPcHRpb25zKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLnAgfHwgdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHJldHVyblxuICAgIC8vIFByZWZldGNoIHRoZSBKU09OIHBhZ2UgaWYgYXNrZWQgKG9ubHkgaW4gdGhlIGNsaWVudClcbiAgICBjb25zdCBwYXRocyA9IHRoaXMuZ2V0UGF0aHMoKVxuICAgIC8vIFdlIG5lZWQgdG8gaGFuZGxlIGEgcHJlZmV0Y2ggZXJyb3IgaGVyZSBzaW5jZSB3ZSBtYXkgYmVcbiAgICAvLyBsb2FkaW5nIHdpdGggcHJpb3JpdHkgd2hpY2ggY2FuIHJlamVjdCBidXQgd2UgZG9uJ3RcbiAgICAvLyB3YW50IHRvIGZvcmNlIG5hdmlnYXRpb24gc2luY2UgdGhpcyBpcyBvbmx5IGEgcHJlZmV0Y2hcbiAgICBSb3V0ZXIucHJlZmV0Y2gocGF0aHNbLyogaHJlZiAqLyAwXSwgcGF0aHNbLyogYXNQYXRoICovIDFdLCBvcHRpb25zKS5jYXRjaChcbiAgICAgIChlcnIpID0+IHtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAvLyByZXRocm93IHRvIHNob3cgaW52YWxpZCBVUkwgZXJyb3JzXG4gICAgICAgICAgdGhyb3cgZXJyXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICApXG4gICAgcHJlZmV0Y2hlZFtcbiAgICAgIHBhdGhzLmpvaW4oXG4gICAgICAgIC8vIEpvaW4gb24gYW4gaW52YWxpZCBVUkkgY2hhcmFjdGVyXG4gICAgICAgICclJ1xuICAgICAgKVxuICAgIF0gPSB0cnVlXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IHsgY2hpbGRyZW4gfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCB7IGhyZWYsIGFzIH0gPSB0aGlzLmZvcm1hdFVybHModGhpcy5wcm9wcy5ocmVmLCB0aGlzLnByb3BzLmFzKVxuICAgIC8vIERlcHJlY2F0ZWQuIFdhcm5pbmcgc2hvd24gYnkgcHJvcFR5cGUgY2hlY2suIElmIHRoZSBjaGlsZHJlbiBwcm92aWRlZCBpcyBhIHN0cmluZyAoPExpbms+ZXhhbXBsZTwvTGluaz4pIHdlIHdyYXAgaXQgaW4gYW4gPGE+IHRhZ1xuICAgIGlmICh0eXBlb2YgY2hpbGRyZW4gPT09ICdzdHJpbmcnKSB7XG4gICAgICBjaGlsZHJlbiA9IDxhPntjaGlsZHJlbn08L2E+XG4gICAgfVxuXG4gICAgLy8gVGhpcyB3aWxsIHJldHVybiB0aGUgZmlyc3QgY2hpbGQsIGlmIG11bHRpcGxlIGFyZSBwcm92aWRlZCBpdCB3aWxsIHRocm93IGFuIGVycm9yXG4gICAgY29uc3QgY2hpbGQ6IGFueSA9IENoaWxkcmVuLm9ubHkoY2hpbGRyZW4pXG4gICAgY29uc3QgcHJvcHM6IHtcbiAgICAgIG9uTW91c2VFbnRlcjogUmVhY3QuTW91c2VFdmVudEhhbmRsZXJcbiAgICAgIG9uQ2xpY2s6IFJlYWN0Lk1vdXNlRXZlbnRIYW5kbGVyXG4gICAgICBocmVmPzogc3RyaW5nXG4gICAgICByZWY/OiBhbnlcbiAgICB9ID0ge1xuICAgICAgcmVmOiAoZWw6IGFueSkgPT4ge1xuICAgICAgICB0aGlzLmhhbmRsZVJlZihlbClcblxuICAgICAgICBpZiAoY2hpbGQgJiYgdHlwZW9mIGNoaWxkID09PSAnb2JqZWN0JyAmJiBjaGlsZC5yZWYpIHtcbiAgICAgICAgICBpZiAodHlwZW9mIGNoaWxkLnJlZiA9PT0gJ2Z1bmN0aW9uJykgY2hpbGQucmVmKGVsKVxuICAgICAgICAgIGVsc2UgaWYgKHR5cGVvZiBjaGlsZC5yZWYgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICBjaGlsZC5yZWYuY3VycmVudCA9IGVsXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgb25Nb3VzZUVudGVyOiAoZTogUmVhY3QuTW91c2VFdmVudCkgPT4ge1xuICAgICAgICBpZiAoY2hpbGQucHJvcHMgJiYgdHlwZW9mIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlcihlKVxuICAgICAgICB9XG4gICAgICAgIHRoaXMucHJlZmV0Y2goeyBwcmlvcml0eTogdHJ1ZSB9KVxuICAgICAgfSxcbiAgICAgIG9uQ2xpY2s6IChlOiBSZWFjdC5Nb3VzZUV2ZW50KSA9PiB7XG4gICAgICAgIGlmIChjaGlsZC5wcm9wcyAmJiB0eXBlb2YgY2hpbGQucHJvcHMub25DbGljayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIGNoaWxkLnByb3BzLm9uQ2xpY2soZSlcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWUuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgICAgIHRoaXMubGlua0NsaWNrZWQoZSlcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICB9XG5cbiAgICAvLyBJZiBjaGlsZCBpcyBhbiA8YT4gdGFnIGFuZCBkb2Vzbid0IGhhdmUgYSBocmVmIGF0dHJpYnV0ZSwgb3IgaWYgdGhlICdwYXNzSHJlZicgcHJvcGVydHkgaXNcbiAgICAvLyBkZWZpbmVkLCB3ZSBzcGVjaWZ5IHRoZSBjdXJyZW50ICdocmVmJywgc28gdGhhdCByZXBldGl0aW9uIGlzIG5vdCBuZWVkZWQgYnkgdGhlIHVzZXJcbiAgICBpZiAoXG4gICAgICB0aGlzLnByb3BzLnBhc3NIcmVmIHx8XG4gICAgICAoY2hpbGQudHlwZSA9PT0gJ2EnICYmICEoJ2hyZWYnIGluIGNoaWxkLnByb3BzKSlcbiAgICApIHtcbiAgICAgIHByb3BzLmhyZWYgPSBhcyB8fCBocmVmXG4gICAgfVxuXG4gICAgLy8gQWRkIHRoZSBlbmRpbmcgc2xhc2ggdG8gdGhlIHBhdGhzLiBTbywgd2UgY2FuIHNlcnZlIHRoZVxuICAgIC8vIFwiPHBhZ2U+L2luZGV4Lmh0bWxcIiBkaXJlY3RseS5cbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0VYUE9SVF9UUkFJTElOR19TTEFTSCkge1xuICAgICAgY29uc3QgcmV3cml0ZVVybEZvck5leHRFeHBvcnQgPSByZXF1aXJlKCcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3Jld3JpdGUtdXJsLWZvci1leHBvcnQnKVxuICAgICAgICAucmV3cml0ZVVybEZvck5leHRFeHBvcnRcbiAgICAgIGlmIChcbiAgICAgICAgcHJvcHMuaHJlZiAmJlxuICAgICAgICB0eXBlb2YgX19ORVhUX0RBVEFfXyAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICAgICAgX19ORVhUX0RBVEFfXy5uZXh0RXhwb3J0XG4gICAgICApIHtcbiAgICAgICAgcHJvcHMuaHJlZiA9IHJld3JpdGVVcmxGb3JOZXh0RXhwb3J0KHByb3BzLmhyZWYpXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChjaGlsZCwgcHJvcHMpXG4gIH1cbn1cblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gIGNvbnN0IHdhcm4gPSBleGVjT25jZShjb25zb2xlLmVycm9yKVxuXG4gIC8vIFRoaXMgbW9kdWxlIGdldHMgcmVtb3ZlZCBieSB3ZWJwYWNrLklnbm9yZVBsdWdpblxuICBjb25zdCBQcm9wVHlwZXMgPSByZXF1aXJlKCdwcm9wLXR5cGVzJylcbiAgY29uc3QgZXhhY3QgPSByZXF1aXJlKCdwcm9wLXR5cGVzLWV4YWN0JylcbiAgLy8gQHRzLWlnbm9yZSB0aGUgcHJvcGVydHkgaXMgc3VwcG9ydGVkLCB3aGVuIGRlY2xhcmluZyBpdCBvbiB0aGUgY2xhc3MgaXQgb3V0cHV0cyBhbiBleHRyYSBiaXQgb2YgY29kZSB3aGljaCBpcyBub3QgbmVlZGVkLlxuICBMaW5rLnByb3BUeXBlcyA9IGV4YWN0KHtcbiAgICBocmVmOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMub2JqZWN0XSkuaXNSZXF1aXJlZCxcbiAgICBhczogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm9iamVjdF0pLFxuICAgIHByZWZldGNoOiBQcm9wVHlwZXMuYm9vbCxcbiAgICByZXBsYWNlOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBzaGFsbG93OiBQcm9wVHlwZXMuYm9vbCxcbiAgICBwYXNzSHJlZjogUHJvcFR5cGVzLmJvb2wsXG4gICAgc2Nyb2xsOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBjaGlsZHJlbjogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgICBQcm9wVHlwZXMuZWxlbWVudCxcbiAgICAgIChwcm9wczogYW55LCBwcm9wTmFtZTogc3RyaW5nKSA9PiB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gcHJvcHNbcHJvcE5hbWVdXG5cbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICB3YXJuKFxuICAgICAgICAgICAgYFdhcm5pbmc6IFlvdSdyZSB1c2luZyBhIHN0cmluZyBkaXJlY3RseSBpbnNpZGUgPExpbms+LiBUaGlzIHVzYWdlIGhhcyBiZWVuIGRlcHJlY2F0ZWQuIFBsZWFzZSBhZGQgYW4gPGE+IHRhZyBhcyBjaGlsZCBvZiA8TGluaz5gXG4gICAgICAgICAgKVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgIH0sXG4gICAgXSkuaXNSZXF1aXJlZCxcbiAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgTGlua1xuIiwiLyogZ2xvYmFsIHdpbmRvdyAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJvdXRlciwgeyBOZXh0Um91dGVyIH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyBSb3V0ZXJDb250ZXh0IH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0J1xuXG50eXBlIENsYXNzQXJndW1lbnRzPFQ+ID0gVCBleHRlbmRzIG5ldyAoLi4uYXJnczogaW5mZXIgVSkgPT4gYW55ID8gVSA6IGFueVxuXG50eXBlIFJvdXRlckFyZ3MgPSBDbGFzc0FyZ3VtZW50czx0eXBlb2YgUm91dGVyPlxuXG50eXBlIFNpbmdsZXRvblJvdXRlckJhc2UgPSB7XG4gIHJvdXRlcjogUm91dGVyIHwgbnVsbFxuICByZWFkeUNhbGxiYWNrczogQXJyYXk8KCkgPT4gYW55PlxuICByZWFkeShjYjogKCkgPT4gYW55KTogdm9pZFxufVxuXG5leHBvcnQgeyBSb3V0ZXIsIE5leHRSb3V0ZXIgfVxuXG5leHBvcnQgdHlwZSBTaW5nbGV0b25Sb3V0ZXIgPSBTaW5nbGV0b25Sb3V0ZXJCYXNlICYgTmV4dFJvdXRlclxuXG5jb25zdCBzaW5nbGV0b25Sb3V0ZXI6IFNpbmdsZXRvblJvdXRlckJhc2UgPSB7XG4gIHJvdXRlcjogbnVsbCwgLy8gaG9sZHMgdGhlIGFjdHVhbCByb3V0ZXIgaW5zdGFuY2VcbiAgcmVhZHlDYWxsYmFja3M6IFtdLFxuICByZWFkeShjYjogKCkgPT4gdm9pZCkge1xuICAgIGlmICh0aGlzLnJvdXRlcikgcmV0dXJuIGNiKClcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRoaXMucmVhZHlDYWxsYmFja3MucHVzaChjYilcbiAgICB9XG4gIH0sXG59XG5cbi8vIENyZWF0ZSBwdWJsaWMgcHJvcGVydGllcyBhbmQgbWV0aG9kcyBvZiB0aGUgcm91dGVyIGluIHRoZSBzaW5nbGV0b25Sb3V0ZXJcbmNvbnN0IHVybFByb3BlcnR5RmllbGRzID0gW1xuICAncGF0aG5hbWUnLFxuICAncm91dGUnLFxuICAncXVlcnknLFxuICAnYXNQYXRoJyxcbiAgJ2NvbXBvbmVudHMnLFxuICAnaXNGYWxsYmFjaycsXG4gICdiYXNlUGF0aCcsXG5dXG5jb25zdCByb3V0ZXJFdmVudHMgPSBbXG4gICdyb3V0ZUNoYW5nZVN0YXJ0JyxcbiAgJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLFxuICAncm91dGVDaGFuZ2VDb21wbGV0ZScsXG4gICdyb3V0ZUNoYW5nZUVycm9yJyxcbiAgJ2hhc2hDaGFuZ2VTdGFydCcsXG4gICdoYXNoQ2hhbmdlQ29tcGxldGUnLFxuXVxuY29uc3QgY29yZU1ldGhvZEZpZWxkcyA9IFtcbiAgJ3B1c2gnLFxuICAncmVwbGFjZScsXG4gICdyZWxvYWQnLFxuICAnYmFjaycsXG4gICdwcmVmZXRjaCcsXG4gICdiZWZvcmVQb3BTdGF0ZScsXG5dXG5cbi8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsICdldmVudHMnLCB7XG4gIGdldCgpIHtcbiAgICByZXR1cm4gUm91dGVyLmV2ZW50c1xuICB9LFxufSlcblxudXJsUHJvcGVydHlGaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgLy8gSGVyZSB3ZSBuZWVkIHRvIHVzZSBPYmplY3QuZGVmaW5lUHJvcGVydHkgYmVjYXVzZSwgd2UgbmVlZCB0byByZXR1cm5cbiAgLy8gdGhlIHByb3BlcnR5IGFzc2lnbmVkIHRvIHRoZSBhY3R1YWwgcm91dGVyXG4gIC8vIFRoZSB2YWx1ZSBtaWdodCBnZXQgY2hhbmdlZCBhcyB3ZSBjaGFuZ2Ugcm91dGVzIGFuZCB0aGlzIGlzIHRoZVxuICAvLyBwcm9wZXIgd2F5IHRvIGFjY2VzcyBpdFxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCBmaWVsZCwge1xuICAgIGdldCgpIHtcbiAgICAgIGNvbnN0IHJvdXRlciA9IGdldFJvdXRlcigpIGFzIGFueVxuICAgICAgcmV0dXJuIHJvdXRlcltmaWVsZF0gYXMgc3RyaW5nXG4gICAgfSxcbiAgfSlcbn0pXG5cbmNvcmVNZXRob2RGaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgLy8gV2UgZG9uJ3QgcmVhbGx5IGtub3cgdGhlIHR5cGVzIGhlcmUsIHNvIHdlIGFkZCB0aGVtIGxhdGVyIGluc3RlYWRcbiAgOyhzaW5nbGV0b25Sb3V0ZXIgYXMgYW55KVtmaWVsZF0gPSAoLi4uYXJnczogYW55W10pID0+IHtcbiAgICBjb25zdCByb3V0ZXIgPSBnZXRSb3V0ZXIoKSBhcyBhbnlcbiAgICByZXR1cm4gcm91dGVyW2ZpZWxkXSguLi5hcmdzKVxuICB9XG59KVxuXG5yb3V0ZXJFdmVudHMuZm9yRWFjaCgoZXZlbnQpID0+IHtcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5KCgpID0+IHtcbiAgICBSb3V0ZXIuZXZlbnRzLm9uKGV2ZW50LCAoLi4uYXJncykgPT4ge1xuICAgICAgY29uc3QgZXZlbnRGaWVsZCA9IGBvbiR7ZXZlbnQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCl9JHtldmVudC5zdWJzdHJpbmcoXG4gICAgICAgIDFcbiAgICAgICl9YFxuICAgICAgY29uc3QgX3NpbmdsZXRvblJvdXRlciA9IHNpbmdsZXRvblJvdXRlciBhcyBhbnlcbiAgICAgIGlmIChfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSguLi5hcmdzKVxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tY29uc29sZVxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIHdoZW4gcnVubmluZyB0aGUgUm91dGVyIGV2ZW50OiAke2V2ZW50RmllbGR9YClcbiAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tY29uc29sZVxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYCR7ZXJyLm1lc3NhZ2V9XFxuJHtlcnIuc3RhY2t9YClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gIH0pXG59KVxuXG5mdW5jdGlvbiBnZXRSb3V0ZXIoKTogUm91dGVyIHtcbiAgaWYgKCFzaW5nbGV0b25Sb3V0ZXIucm91dGVyKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9XG4gICAgICAnTm8gcm91dGVyIGluc3RhbmNlIGZvdW5kLlxcbicgK1xuICAgICAgJ1lvdSBzaG91bGQgb25seSB1c2UgXCJuZXh0L3JvdXRlclwiIGluc2lkZSB0aGUgY2xpZW50IHNpZGUgb2YgeW91ciBhcHAuXFxuJ1xuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICB9XG4gIHJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyXG59XG5cbi8vIEV4cG9ydCB0aGUgc2luZ2xldG9uUm91dGVyIGFuZCB0aGlzIGlzIHRoZSBwdWJsaWMgQVBJLlxuZXhwb3J0IGRlZmF1bHQgc2luZ2xldG9uUm91dGVyIGFzIFNpbmdsZXRvblJvdXRlclxuXG4vLyBSZWV4cG9ydCB0aGUgd2l0aFJvdXRlIEhPQ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB3aXRoUm91dGVyIH0gZnJvbSAnLi93aXRoLXJvdXRlcidcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVJvdXRlcigpOiBOZXh0Um91dGVyIHtcbiAgcmV0dXJuIFJlYWN0LnVzZUNvbnRleHQoUm91dGVyQ29udGV4dClcbn1cblxuLy8gSU5URVJOQUwgQVBJU1xuLy8gLS0tLS0tLS0tLS0tLVxuLy8gKGRvIG5vdCB1c2UgZm9sbG93aW5nIGV4cG9ydHMgaW5zaWRlIHRoZSBhcHApXG5cbi8vIENyZWF0ZSBhIHJvdXRlciBhbmQgYXNzaWduIGl0IGFzIHRoZSBzaW5nbGV0b24gaW5zdGFuY2UuXG4vLyBUaGlzIGlzIHVzZWQgaW4gY2xpZW50IHNpZGUgd2hlbiB3ZSBhcmUgaW5pdGlsaXppbmcgdGhlIGFwcC5cbi8vIFRoaXMgc2hvdWxkICoqbm90KiogdXNlIGluc2lkZSB0aGUgc2VydmVyLlxuZXhwb3J0IGNvbnN0IGNyZWF0ZVJvdXRlciA9ICguLi5hcmdzOiBSb3V0ZXJBcmdzKTogUm91dGVyID0+IHtcbiAgc2luZ2xldG9uUm91dGVyLnJvdXRlciA9IG5ldyBSb3V0ZXIoLi4uYXJncylcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzLmZvckVhY2goKGNiKSA9PiBjYigpKVxuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3MgPSBbXVxuXG4gIHJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyXG59XG5cbi8vIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCB0byBjcmVhdGUgdGhlIGB3aXRoUm91dGVyYCByb3V0ZXIgaW5zdGFuY2VcbmV4cG9ydCBmdW5jdGlvbiBtYWtlUHVibGljUm91dGVySW5zdGFuY2Uocm91dGVyOiBSb3V0ZXIpOiBOZXh0Um91dGVyIHtcbiAgY29uc3QgX3JvdXRlciA9IHJvdXRlciBhcyBhbnlcbiAgY29uc3QgaW5zdGFuY2UgPSB7fSBhcyBhbnlcblxuICBmb3IgKGNvbnN0IHByb3BlcnR5IG9mIHVybFByb3BlcnR5RmllbGRzKSB7XG4gICAgaWYgKHR5cGVvZiBfcm91dGVyW3Byb3BlcnR5XSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGluc3RhbmNlW3Byb3BlcnR5XSA9IE9iamVjdC5hc3NpZ24oe30sIF9yb3V0ZXJbcHJvcGVydHldKSAvLyBtYWtlcyBzdXJlIHF1ZXJ5IGlzIG5vdCBzdGF0ZWZ1bFxuICAgICAgY29udGludWVcbiAgICB9XG5cbiAgICBpbnN0YW5jZVtwcm9wZXJ0eV0gPSBfcm91dGVyW3Byb3BlcnR5XVxuICB9XG5cbiAgLy8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuICBpbnN0YW5jZS5ldmVudHMgPSBSb3V0ZXIuZXZlbnRzXG5cbiAgY29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAgIGluc3RhbmNlW2ZpZWxkXSA9ICguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgICAgcmV0dXJuIF9yb3V0ZXJbZmllbGRdKC4uLmFyZ3MpXG4gICAgfVxuICB9KVxuXG4gIHJldHVybiBpbnN0YW5jZVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgTmV4dENvbXBvbmVudFR5cGUsIE5leHRQYWdlQ29udGV4dCB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi91dGlscydcbmltcG9ydCB7IE5leHRSb3V0ZXIsIHVzZVJvdXRlciB9IGZyb20gJy4vcm91dGVyJ1xuXG5leHBvcnQgdHlwZSBXaXRoUm91dGVyUHJvcHMgPSB7XG4gIHJvdXRlcjogTmV4dFJvdXRlclxufVxuXG5leHBvcnQgdHlwZSBFeGNsdWRlUm91dGVyUHJvcHM8UD4gPSBQaWNrPFxuICBQLFxuICBFeGNsdWRlPGtleW9mIFAsIGtleW9mIFdpdGhSb3V0ZXJQcm9wcz5cbj5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gd2l0aFJvdXRlcjxcbiAgUCBleHRlbmRzIFdpdGhSb3V0ZXJQcm9wcyxcbiAgQyA9IE5leHRQYWdlQ29udGV4dFxuPihcbiAgQ29tcG9zZWRDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPEMsIGFueSwgUD5cbik6IFJlYWN0LkNvbXBvbmVudFR5cGU8RXhjbHVkZVJvdXRlclByb3BzPFA+PiB7XG4gIGZ1bmN0aW9uIFdpdGhSb3V0ZXJXcmFwcGVyKHByb3BzOiBhbnkpIHtcbiAgICByZXR1cm4gPENvbXBvc2VkQ29tcG9uZW50IHJvdXRlcj17dXNlUm91dGVyKCl9IHsuLi5wcm9wc30gLz5cbiAgfVxuXG4gIFdpdGhSb3V0ZXJXcmFwcGVyLmdldEluaXRpYWxQcm9wcyA9IENvbXBvc2VkQ29tcG9uZW50LmdldEluaXRpYWxQcm9wc1xuICAvLyBUaGlzIGlzIG5lZWRlZCB0byBhbGxvdyBjaGVja2luZyBmb3IgY3VzdG9tIGdldEluaXRpYWxQcm9wcyBpbiBfYXBwXG4gIDsoV2l0aFJvdXRlcldyYXBwZXIgYXMgYW55KS5vcmlnR2V0SW5pdGlhbFByb3BzID0gKENvbXBvc2VkQ29tcG9uZW50IGFzIGFueSkub3JpZ0dldEluaXRpYWxQcm9wc1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGNvbnN0IG5hbWUgPVxuICAgICAgQ29tcG9zZWRDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9zZWRDb21wb25lbnQubmFtZSB8fCAnVW5rbm93bidcbiAgICBXaXRoUm91dGVyV3JhcHBlci5kaXNwbGF5TmFtZSA9IGB3aXRoUm91dGVyKCR7bmFtZX0pYFxuICB9XG5cbiAgcmV0dXJuIFdpdGhSb3V0ZXJXcmFwcGVyXG59XG4iLCIvKlxuTUlUIExpY2Vuc2VcblxuQ29weXJpZ2h0IChjKSBKYXNvbiBNaWxsZXIgKGh0dHBzOi8vamFzb25mb3JtYXQuY29tLylcblxuUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuKi9cblxuLy8gVGhpcyBmaWxlIGlzIGJhc2VkIG9uIGh0dHBzOi8vZ2l0aHViLmNvbS9kZXZlbG9waXQvbWl0dC9ibG9iL3YxLjEuMy9zcmMvaW5kZXguanNcbi8vIEl0J3MgYmVlbiBlZGl0ZWQgZm9yIHRoZSBuZWVkcyBvZiB0aGlzIHNjcmlwdFxuLy8gU2VlIHRoZSBMSUNFTlNFIGF0IHRoZSB0b3Agb2YgdGhlIGZpbGVcblxudHlwZSBIYW5kbGVyID0gKC4uLmV2dHM6IGFueVtdKSA9PiB2b2lkXG5cbmV4cG9ydCB0eXBlIE1pdHRFbWl0dGVyID0ge1xuICBvbih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpOiB2b2lkXG4gIG9mZih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpOiB2b2lkXG4gIGVtaXQodHlwZTogc3RyaW5nLCAuLi5ldnRzOiBhbnlbXSk6IHZvaWRcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWl0dCgpOiBNaXR0RW1pdHRlciB7XG4gIGNvbnN0IGFsbDogeyBbczogc3RyaW5nXTogSGFuZGxlcltdIH0gPSBPYmplY3QuY3JlYXRlKG51bGwpXG5cbiAgcmV0dXJuIHtcbiAgICBvbih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpIHtcbiAgICAgIDsoYWxsW3R5cGVdIHx8IChhbGxbdHlwZV0gPSBbXSkpLnB1c2goaGFuZGxlcilcbiAgICB9LFxuXG4gICAgb2ZmKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcikge1xuICAgICAgaWYgKGFsbFt0eXBlXSkge1xuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYml0d2lzZVxuICAgICAgICBhbGxbdHlwZV0uc3BsaWNlKGFsbFt0eXBlXS5pbmRleE9mKGhhbmRsZXIpID4+PiAwLCAxKVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBlbWl0KHR5cGU6IHN0cmluZywgLi4uZXZ0czogYW55W10pIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBhcnJheS1jYWxsYmFjay1yZXR1cm5cbiAgICAgIDsoYWxsW3R5cGVdIHx8IFtdKS5zbGljZSgpLm1hcCgoaGFuZGxlcjogSGFuZGxlcikgPT4ge1xuICAgICAgICBoYW5kbGVyKC4uLmV2dHMpXG4gICAgICB9KVxuICAgIH0sXG4gIH1cbn1cbiIsIi8qIGdsb2JhbCBfX05FWFRfREFUQV9fICovXG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1jb25zb2xlXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgQ29tcG9uZW50VHlwZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgcGFyc2UsIFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCBtaXR0LCB7IE1pdHRFbWl0dGVyIH0gZnJvbSAnLi4vbWl0dCdcbmltcG9ydCB7XG4gIEFwcENvbnRleHRUeXBlLFxuICBmb3JtYXRXaXRoVmFsaWRhdGlvbixcbiAgZ2V0VVJMLFxuICBsb2FkR2V0SW5pdGlhbFByb3BzLFxuICBOZXh0UGFnZUNvbnRleHQsXG4gIFNULFxufSBmcm9tICcuLi91dGlscydcbmltcG9ydCB7IGlzRHluYW1pY1JvdXRlIH0gZnJvbSAnLi91dGlscy9pcy1keW5hbWljJ1xuaW1wb3J0IHsgZ2V0Um91dGVNYXRjaGVyIH0gZnJvbSAnLi91dGlscy9yb3V0ZS1tYXRjaGVyJ1xuaW1wb3J0IHsgZ2V0Um91dGVSZWdleCB9IGZyb20gJy4vdXRpbHMvcm91dGUtcmVnZXgnXG5cbmNvbnN0IGJhc2VQYXRoID0gKHByb2Nlc3MuZW52Ll9fTkVYVF9ST1VURVJfQkFTRVBBVEggYXMgc3RyaW5nKSB8fCAnJ1xuXG5leHBvcnQgZnVuY3Rpb24gYWRkQmFzZVBhdGgocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHBhdGguaW5kZXhPZihiYXNlUGF0aCkgIT09IDAgPyBiYXNlUGF0aCArIHBhdGggOiBwYXRoXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gcGF0aC5pbmRleE9mKGJhc2VQYXRoKSA9PT0gMFxuICAgID8gcGF0aC5zdWJzdHIoYmFzZVBhdGgubGVuZ3RoKSB8fCAnLydcbiAgICA6IHBhdGhcbn1cblxuZnVuY3Rpb24gdG9Sb3V0ZShwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gcGF0aC5yZXBsYWNlKC9cXC8kLywgJycpIHx8ICcvJ1xufVxuXG5jb25zdCBwcmVwYXJlUm91dGUgPSAocGF0aDogc3RyaW5nKSA9PlxuICB0b1JvdXRlKCFwYXRoIHx8IHBhdGggPT09ICcvJyA/ICcvaW5kZXgnIDogcGF0aClcblxudHlwZSBVcmwgPSBVcmxPYmplY3QgfCBzdHJpbmdcblxudHlwZSBDb21wb25lbnRSZXMgPSB7IHBhZ2U6IENvbXBvbmVudFR5cGU7IG1vZDogYW55IH1cblxuZXhwb3J0IHR5cGUgQmFzZVJvdXRlciA9IHtcbiAgcm91dGU6IHN0cmluZ1xuICBwYXRobmFtZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBhc1BhdGg6IHN0cmluZ1xuICBiYXNlUGF0aDogc3RyaW5nXG59XG5cbmV4cG9ydCB0eXBlIE5leHRSb3V0ZXIgPSBCYXNlUm91dGVyICZcbiAgUGljazxcbiAgICBSb3V0ZXIsXG4gICAgfCAncHVzaCdcbiAgICB8ICdyZXBsYWNlJ1xuICAgIHwgJ3JlbG9hZCdcbiAgICB8ICdiYWNrJ1xuICAgIHwgJ3ByZWZldGNoJ1xuICAgIHwgJ2JlZm9yZVBvcFN0YXRlJ1xuICAgIHwgJ2V2ZW50cydcbiAgICB8ICdpc0ZhbGxiYWNrJ1xuICA+XG5cbmV4cG9ydCB0eXBlIFByZWZldGNoT3B0aW9ucyA9IHtcbiAgcHJpb3JpdHk/OiBib29sZWFuXG59XG5cbnR5cGUgUm91dGVJbmZvID0ge1xuICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgX19OX1NTRz86IGJvb2xlYW5cbiAgX19OX1NTUD86IGJvb2xlYW5cbiAgcHJvcHM/OiBhbnlcbiAgZXJyPzogRXJyb3JcbiAgZXJyb3I/OiBhbnlcbn1cblxudHlwZSBTdWJzY3JpcHRpb24gPSAoZGF0YTogUm91dGVJbmZvLCBBcHA/OiBDb21wb25lbnRUeXBlKSA9PiBQcm9taXNlPHZvaWQ+XG5cbnR5cGUgQmVmb3JlUG9wU3RhdGVDYWxsYmFjayA9IChzdGF0ZTogYW55KSA9PiBib29sZWFuXG5cbnR5cGUgQ29tcG9uZW50TG9hZENhbmNlbCA9ICgoKSA9PiB2b2lkKSB8IG51bGxcblxudHlwZSBIaXN0b3J5TWV0aG9kID0gJ3JlcGxhY2VTdGF0ZScgfCAncHVzaFN0YXRlJ1xuXG5mdW5jdGlvbiBmZXRjaE5leHREYXRhKFxuICBwYXRobmFtZTogc3RyaW5nLFxuICBxdWVyeTogUGFyc2VkVXJsUXVlcnkgfCBudWxsLFxuICBpc1NlcnZlclJlbmRlcjogYm9vbGVhbixcbiAgY2I/OiAoLi4uYXJnczogYW55KSA9PiBhbnlcbikge1xuICBsZXQgYXR0ZW1wdHMgPSBpc1NlcnZlclJlbmRlciA/IDMgOiAxXG4gIGZ1bmN0aW9uIGdldFJlc3BvbnNlKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuIGZldGNoKFxuICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oe1xuICAgICAgICBwYXRobmFtZTogYWRkQmFzZVBhdGgoXG4gICAgICAgICAgLy8gQHRzLWlnbm9yZSBfX05FWFRfREFUQV9fXG4gICAgICAgICAgYC9fbmV4dC9kYXRhLyR7X19ORVhUX0RBVEFfXy5idWlsZElkfSR7ZGVsQmFzZVBhdGgocGF0aG5hbWUpfS5qc29uYFxuICAgICAgICApLFxuICAgICAgICBxdWVyeSxcbiAgICAgIH0pLFxuICAgICAge1xuICAgICAgICAvLyBDb29raWVzIGFyZSByZXF1aXJlZCB0byBiZSBwcmVzZW50IGZvciBOZXh0LmpzJyBTU0cgXCJQcmV2aWV3IE1vZGVcIi5cbiAgICAgICAgLy8gQ29va2llcyBtYXkgYWxzbyBiZSByZXF1aXJlZCBmb3IgYGdldFNlcnZlclNpZGVQcm9wc2AuXG4gICAgICAgIC8vXG4gICAgICAgIC8vID4gYGZldGNoYCB3b27igJl0IHNlbmQgY29va2llcywgdW5sZXNzIHlvdSBzZXQgdGhlIGNyZWRlbnRpYWxzIGluaXRcbiAgICAgICAgLy8gPiBvcHRpb24uXG4gICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9GZXRjaF9BUEkvVXNpbmdfRmV0Y2hcbiAgICAgICAgLy9cbiAgICAgICAgLy8gPiBGb3IgbWF4aW11bSBicm93c2VyIGNvbXBhdGliaWxpdHkgd2hlbiBpdCBjb21lcyB0byBzZW5kaW5nICZcbiAgICAgICAgLy8gPiByZWNlaXZpbmcgY29va2llcywgYWx3YXlzIHN1cHBseSB0aGUgYGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nYFxuICAgICAgICAvLyA+IG9wdGlvbiBpbnN0ZWFkIG9mIHJlbHlpbmcgb24gdGhlIGRlZmF1bHQuXG4gICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9naXRodWIvZmV0Y2gjY2F2ZWF0c1xuICAgICAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJyxcbiAgICAgIH1cbiAgICApLnRoZW4oKHJlcykgPT4ge1xuICAgICAgaWYgKCFyZXMub2spIHtcbiAgICAgICAgaWYgKC0tYXR0ZW1wdHMgPiAwICYmIHJlcy5zdGF0dXMgPj0gNTAwKSB7XG4gICAgICAgICAgcmV0dXJuIGdldFJlc3BvbnNlKClcbiAgICAgICAgfVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0YXRpYyBwcm9wc2ApXG4gICAgICB9XG4gICAgICByZXR1cm4gcmVzLmpzb24oKVxuICAgIH0pXG4gIH1cblxuICByZXR1cm4gZ2V0UmVzcG9uc2UoKVxuICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICByZXR1cm4gY2IgPyBjYihkYXRhKSA6IGRhdGFcbiAgICB9KVxuICAgIC5jYXRjaCgoZXJyOiBFcnJvcikgPT4ge1xuICAgICAgLy8gV2Ugc2hvdWxkIG9ubHkgdHJpZ2dlciBhIHNlcnZlci1zaWRlIHRyYW5zaXRpb24gaWYgdGhpcyB3YXMgY2F1c2VkXG4gICAgICAvLyBvbiBhIGNsaWVudC1zaWRlIHRyYW5zaXRpb24uIE90aGVyd2lzZSwgd2UnZCBnZXQgaW50byBhbiBpbmZpbml0ZVxuICAgICAgLy8gbG9vcC5cbiAgICAgIGlmICghaXNTZXJ2ZXJSZW5kZXIpIHtcbiAgICAgICAgOyhlcnIgYXMgYW55KS5jb2RlID0gJ1BBR0VfTE9BRF9FUlJPUidcbiAgICAgIH1cbiAgICAgIHRocm93IGVyclxuICAgIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJvdXRlciBpbXBsZW1lbnRzIEJhc2VSb3V0ZXIge1xuICByb3V0ZTogc3RyaW5nXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGFzUGF0aDogc3RyaW5nXG4gIGJhc2VQYXRoOiBzdHJpbmdcblxuICAvKipcbiAgICogTWFwIG9mIGFsbCBjb21wb25lbnRzIGxvYWRlZCBpbiBgUm91dGVyYFxuICAgKi9cbiAgY29tcG9uZW50czogeyBbcGF0aG5hbWU6IHN0cmluZ106IFJvdXRlSW5mbyB9XG4gIC8vIFN0YXRpYyBEYXRhIENhY2hlXG4gIHNkYzogeyBbYXNQYXRoOiBzdHJpbmddOiBvYmplY3QgfSA9IHt9XG4gIHN1YjogU3Vic2NyaXB0aW9uXG4gIGNsYzogQ29tcG9uZW50TG9hZENhbmNlbFxuICBwYWdlTG9hZGVyOiBhbnlcbiAgX2JwczogQmVmb3JlUG9wU3RhdGVDYWxsYmFjayB8IHVuZGVmaW5lZFxuICBldmVudHM6IE1pdHRFbWl0dGVyXG4gIF93cmFwQXBwOiAoQXBwOiBDb21wb25lbnRUeXBlKSA9PiBhbnlcbiAgaXNTc3I6IGJvb2xlYW5cbiAgaXNGYWxsYmFjazogYm9vbGVhblxuXG4gIHN0YXRpYyBldmVudHM6IE1pdHRFbWl0dGVyID0gbWl0dCgpXG5cbiAgY29uc3RydWN0b3IoXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICB7XG4gICAgICBpbml0aWFsUHJvcHMsXG4gICAgICBwYWdlTG9hZGVyLFxuICAgICAgQXBwLFxuICAgICAgd3JhcEFwcCxcbiAgICAgIENvbXBvbmVudCxcbiAgICAgIGVycixcbiAgICAgIHN1YnNjcmlwdGlvbixcbiAgICAgIGlzRmFsbGJhY2ssXG4gICAgfToge1xuICAgICAgc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb25cbiAgICAgIGluaXRpYWxQcm9wczogYW55XG4gICAgICBwYWdlTG9hZGVyOiBhbnlcbiAgICAgIENvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICAgICAgQXBwOiBDb21wb25lbnRUeXBlXG4gICAgICB3cmFwQXBwOiAoQXBwOiBDb21wb25lbnRUeXBlKSA9PiBhbnlcbiAgICAgIGVycj86IEVycm9yXG4gICAgICBpc0ZhbGxiYWNrOiBib29sZWFuXG4gICAgfVxuICApIHtcbiAgICAvLyByZXByZXNlbnRzIHRoZSBjdXJyZW50IGNvbXBvbmVudCBrZXlcbiAgICB0aGlzLnJvdXRlID0gdG9Sb3V0ZShwYXRobmFtZSlcblxuICAgIC8vIHNldCB1cCB0aGUgY29tcG9uZW50IGNhY2hlIChieSByb3V0ZSBrZXlzKVxuICAgIHRoaXMuY29tcG9uZW50cyA9IHt9XG4gICAgLy8gV2Ugc2hvdWxkIG5vdCBrZWVwIHRoZSBjYWNoZSwgaWYgdGhlcmUncyBhbiBlcnJvclxuICAgIC8vIE90aGVyd2lzZSwgdGhpcyBjYXVzZSBpc3N1ZXMgd2hlbiB3aGVuIGdvaW5nIGJhY2sgYW5kXG4gICAgLy8gY29tZSBhZ2FpbiB0byB0aGUgZXJyb3JlZCBwYWdlLlxuICAgIGlmIChwYXRobmFtZSAhPT0gJy9fZXJyb3InKSB7XG4gICAgICB0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0gPSB7XG4gICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgcHJvcHM6IGluaXRpYWxQcm9wcyxcbiAgICAgICAgZXJyLFxuICAgICAgICBfX05fU1NHOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU0csXG4gICAgICAgIF9fTl9TU1A6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTUCxcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10gPSB7IENvbXBvbmVudDogQXBwIH1cblxuICAgIC8vIEJhY2t3YXJkcyBjb21wYXQgZm9yIFJvdXRlci5yb3V0ZXIuZXZlbnRzXG4gICAgLy8gVE9ETzogU2hvdWxkIGJlIHJlbW92ZSB0aGUgZm9sbG93aW5nIG1ham9yIHZlcnNpb24gYXMgaXQgd2FzIG5ldmVyIGRvY3VtZW50ZWRcbiAgICB0aGlzLmV2ZW50cyA9IFJvdXRlci5ldmVudHNcblxuICAgIHRoaXMucGFnZUxvYWRlciA9IHBhZ2VMb2FkZXJcbiAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICB0aGlzLnF1ZXJ5ID0gcXVlcnlcbiAgICAvLyBpZiBhdXRvIHByZXJlbmRlcmVkIGFuZCBkeW5hbWljIHJvdXRlIHdhaXQgdG8gdXBkYXRlIGFzUGF0aFxuICAgIC8vIHVudGlsIGFmdGVyIG1vdW50IHRvIHByZXZlbnQgaHlkcmF0aW9uIG1pc21hdGNoXG4gICAgdGhpcy5hc1BhdGggPVxuICAgICAgLy8gQHRzLWlnbm9yZSB0aGlzIGlzIHRlbXBvcmFyaWx5IGdsb2JhbCAoYXR0YWNoZWQgdG8gd2luZG93KVxuICAgICAgaXNEeW5hbWljUm91dGUocGF0aG5hbWUpICYmIF9fTkVYVF9EQVRBX18uYXV0b0V4cG9ydCA/IHBhdGhuYW1lIDogYXNcbiAgICB0aGlzLmJhc2VQYXRoID0gYmFzZVBhdGhcbiAgICB0aGlzLnN1YiA9IHN1YnNjcmlwdGlvblxuICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIHRoaXMuX3dyYXBBcHAgPSB3cmFwQXBwXG4gICAgLy8gbWFrZSBzdXJlIHRvIGlnbm9yZSBleHRyYSBwb3BTdGF0ZSBpbiBzYWZhcmkgb24gbmF2aWdhdGluZ1xuICAgIC8vIGJhY2sgZnJvbSBleHRlcm5hbCBzaXRlXG4gICAgdGhpcy5pc1NzciA9IHRydWVcblxuICAgIHRoaXMuaXNGYWxsYmFjayA9IGlzRmFsbGJhY2tcblxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gbWFrZSBzdXJlIFwiYXNcIiBkb2Vzbid0IHN0YXJ0IHdpdGggZG91YmxlIHNsYXNoZXMgb3IgZWxzZSBpdCBjYW5cbiAgICAgIC8vIHRocm93IGFuIGVycm9yIGFzIGl0J3MgY29uc2lkZXJlZCBpbnZhbGlkXG4gICAgICBpZiAoYXMuc3Vic3RyKDAsIDIpICE9PSAnLy8nKSB7XG4gICAgICAgIC8vIGluIG9yZGVyIGZvciBgZS5zdGF0ZWAgdG8gd29yayBvbiB0aGUgYG9ucG9wc3RhdGVgIGV2ZW50XG4gICAgICAgIC8vIHdlIGhhdmUgdG8gcmVnaXN0ZXIgdGhlIGluaXRpYWwgcm91dGUgdXBvbiBpbml0aWFsaXphdGlvblxuICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWUsIHF1ZXJ5IH0pLFxuICAgICAgICAgIGFzXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywgdGhpcy5vblBvcFN0YXRlKVxuICAgIH1cbiAgfVxuXG4gIC8vIEBkZXByZWNhdGVkIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5IGV2ZW4gdGhvdWdoIGl0J3MgYSBwcml2YXRlIG1ldGhvZC5cbiAgc3RhdGljIF9yZXdyaXRlVXJsRm9yTmV4dEV4cG9ydCh1cmw6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9FWFBPUlRfVFJBSUxJTkdfU0xBU0gpIHtcbiAgICAgIGNvbnN0IHJld3JpdGVVcmxGb3JOZXh0RXhwb3J0ID0gcmVxdWlyZSgnLi9yZXdyaXRlLXVybC1mb3ItZXhwb3J0JylcbiAgICAgICAgLnJld3JpdGVVcmxGb3JOZXh0RXhwb3J0XG4gICAgICByZXR1cm4gcmV3cml0ZVVybEZvck5leHRFeHBvcnQodXJsKVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdXJsXG4gICAgfVxuICB9XG5cbiAgb25Qb3BTdGF0ZSA9IChlOiBQb3BTdGF0ZUV2ZW50KTogdm9pZCA9PiB7XG4gICAgaWYgKCFlLnN0YXRlKSB7XG4gICAgICAvLyBXZSBnZXQgc3RhdGUgYXMgdW5kZWZpbmVkIGZvciB0d28gcmVhc29ucy5cbiAgICAgIC8vICAxLiBXaXRoIG9sZGVyIHNhZmFyaSAoPCA4KSBhbmQgb2xkZXIgY2hyb21lICg8IDM0KVxuICAgICAgLy8gIDIuIFdoZW4gdGhlIFVSTCBjaGFuZ2VkIHdpdGggI1xuICAgICAgLy9cbiAgICAgIC8vIEluIHRoZSBib3RoIGNhc2VzLCB3ZSBkb24ndCBuZWVkIHRvIHByb2NlZWQgYW5kIGNoYW5nZSB0aGUgcm91dGUuXG4gICAgICAvLyAoYXMgaXQncyBhbHJlYWR5IGNoYW5nZWQpXG4gICAgICAvLyBCdXQgd2UgY2FuIHNpbXBseSByZXBsYWNlIHRoZSBzdGF0ZSB3aXRoIHRoZSBuZXcgY2hhbmdlcy5cbiAgICAgIC8vIEFjdHVhbGx5LCBmb3IgKDEpIHdlIGRvbid0IG5lZWQgdG8gbm90aGluZy4gQnV0IGl0J3MgaGFyZCB0byBkZXRlY3QgdGhhdCBldmVudC5cbiAgICAgIC8vIFNvLCBkb2luZyB0aGUgZm9sbG93aW5nIGZvciAoMSkgZG9lcyBubyBoYXJtLlxuICAgICAgY29uc3QgeyBwYXRobmFtZSwgcXVlcnkgfSA9IHRoaXNcbiAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lLCBxdWVyeSB9KSxcbiAgICAgICAgZ2V0VVJMKClcbiAgICAgIClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIE1ha2Ugc3VyZSB3ZSBkb24ndCByZS1yZW5kZXIgb24gaW5pdGlhbCBsb2FkLFxuICAgIC8vIGNhbiBiZSBjYXVzZWQgYnkgbmF2aWdhdGluZyBiYWNrIGZyb20gYW4gZXh0ZXJuYWwgc2l0ZVxuICAgIGlmIChcbiAgICAgIGUuc3RhdGUgJiZcbiAgICAgIHRoaXMuaXNTc3IgJiZcbiAgICAgIGUuc3RhdGUuYXMgPT09IHRoaXMuYXNQYXRoICYmXG4gICAgICBwYXJzZShlLnN0YXRlLnVybCkucGF0aG5hbWUgPT09IHRoaXMucGF0aG5hbWVcbiAgICApIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIElmIHRoZSBkb3duc3RyZWFtIGFwcGxpY2F0aW9uIHJldHVybnMgZmFsc3ksIHJldHVybi5cbiAgICAvLyBUaGV5IHdpbGwgdGhlbiBiZSByZXNwb25zaWJsZSBmb3IgaGFuZGxpbmcgdGhlIGV2ZW50LlxuICAgIGlmICh0aGlzLl9icHMgJiYgIXRoaXMuX2JwcyhlLnN0YXRlKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgeyB1cmwsIGFzLCBvcHRpb25zIH0gPSBlLnN0YXRlXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmICh0eXBlb2YgdXJsID09PSAndW5kZWZpbmVkJyB8fCB0eXBlb2YgYXMgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAnYHBvcHN0YXRlYCBldmVudCB0cmlnZ2VyZWQgYnV0IGBldmVudC5zdGF0ZWAgZGlkIG5vdCBoYXZlIGB1cmxgIG9yIGBhc2AgaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvcG9wc3RhdGUtc3RhdGUtZW1wdHknXG4gICAgICAgIClcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5yZXBsYWNlKHVybCwgYXMsIG9wdGlvbnMpXG4gIH1cblxuICB1cGRhdGUocm91dGU6IHN0cmluZywgbW9kOiBhbnkpIHtcbiAgICBjb25zdCBDb21wb25lbnQ6IENvbXBvbmVudFR5cGUgPSBtb2QuZGVmYXVsdCB8fCBtb2RcbiAgICBjb25zdCBkYXRhID0gdGhpcy5jb21wb25lbnRzW3JvdXRlXVxuICAgIGlmICghZGF0YSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBDYW5ub3QgdXBkYXRlIHVuYXZhaWxhYmxlIHJvdXRlOiAke3JvdXRlfWApXG4gICAgfVxuXG4gICAgY29uc3QgbmV3RGF0YSA9IE9iamVjdC5hc3NpZ24oe30sIGRhdGEsIHtcbiAgICAgIENvbXBvbmVudCxcbiAgICAgIF9fTl9TU0c6IG1vZC5fX05fU1NHLFxuICAgICAgX19OX1NTUDogbW9kLl9fTl9TU1AsXG4gICAgfSlcbiAgICB0aGlzLmNvbXBvbmVudHNbcm91dGVdID0gbmV3RGF0YVxuXG4gICAgLy8gcGFnZXMvX2FwcC5qcyB1cGRhdGVkXG4gICAgaWYgKHJvdXRlID09PSAnL19hcHAnKSB7XG4gICAgICB0aGlzLm5vdGlmeSh0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0pXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAocm91dGUgPT09IHRoaXMucm91dGUpIHtcbiAgICAgIHRoaXMubm90aWZ5KG5ld0RhdGEpXG4gICAgfVxuICB9XG5cbiAgcmVsb2FkKCk6IHZvaWQge1xuICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKVxuICB9XG5cbiAgLyoqXG4gICAqIEdvIGJhY2sgaW4gaGlzdG9yeVxuICAgKi9cbiAgYmFjaygpIHtcbiAgICB3aW5kb3cuaGlzdG9yeS5iYWNrKClcbiAgfVxuXG4gIC8qKlxuICAgKiBQZXJmb3JtcyBhIGBwdXNoU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi9cbiAgcHVzaCh1cmw6IFVybCwgYXM6IFVybCA9IHVybCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdwdXNoU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKVxuICB9XG5cbiAgLyoqXG4gICAqIFBlcmZvcm1zIGEgYHJlcGxhY2VTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqL1xuICByZXBsYWNlKHVybDogVXJsLCBhczogVXJsID0gdXJsLCBvcHRpb25zID0ge30pIHtcbiAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3JlcGxhY2VTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpXG4gIH1cblxuICBjaGFuZ2UoXG4gICAgbWV0aG9kOiBIaXN0b3J5TWV0aG9kLFxuICAgIF91cmw6IFVybCxcbiAgICBfYXM6IFVybCxcbiAgICBvcHRpb25zOiBhbnlcbiAgKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGlmICghb3B0aW9ucy5faCkge1xuICAgICAgICB0aGlzLmlzU3NyID0gZmFsc2VcbiAgICAgIH1cbiAgICAgIC8vIG1hcmtpbmcgcm91dGUgY2hhbmdlcyBhcyBhIG5hdmlnYXRpb24gc3RhcnQgZW50cnlcbiAgICAgIGlmIChTVCkge1xuICAgICAgICBwZXJmb3JtYW5jZS5tYXJrKCdyb3V0ZUNoYW5nZScpXG4gICAgICB9XG5cbiAgICAgIC8vIElmIHVybCBhbmQgYXMgcHJvdmlkZWQgYXMgYW4gb2JqZWN0IHJlcHJlc2VudGF0aW9uLFxuICAgICAgLy8gd2UnbGwgZm9ybWF0IHRoZW0gaW50byB0aGUgc3RyaW5nIHZlcnNpb24gaGVyZS5cbiAgICAgIGxldCB1cmwgPSB0eXBlb2YgX3VybCA9PT0gJ29iamVjdCcgPyBmb3JtYXRXaXRoVmFsaWRhdGlvbihfdXJsKSA6IF91cmxcbiAgICAgIGxldCBhcyA9IHR5cGVvZiBfYXMgPT09ICdvYmplY3QnID8gZm9ybWF0V2l0aFZhbGlkYXRpb24oX2FzKSA6IF9hc1xuXG4gICAgICB1cmwgPSBhZGRCYXNlUGF0aCh1cmwpXG4gICAgICBhcyA9IGFkZEJhc2VQYXRoKGFzKVxuXG4gICAgICAvLyBBZGQgdGhlIGVuZGluZyBzbGFzaCB0byB0aGUgcGF0aHMuIFNvLCB3ZSBjYW4gc2VydmUgdGhlXG4gICAgICAvLyBcIjxwYWdlPi9pbmRleC5odG1sXCIgZGlyZWN0bHkgZm9yIHRoZSBTU1IgcGFnZS5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfRVhQT1JUX1RSQUlMSU5HX1NMQVNIKSB7XG4gICAgICAgIGNvbnN0IHJld3JpdGVVcmxGb3JOZXh0RXhwb3J0ID0gcmVxdWlyZSgnLi9yZXdyaXRlLXVybC1mb3ItZXhwb3J0JylcbiAgICAgICAgICAucmV3cml0ZVVybEZvck5leHRFeHBvcnRcbiAgICAgICAgLy8gQHRzLWlnbm9yZSB0aGlzIGlzIHRlbXBvcmFyaWx5IGdsb2JhbCAoYXR0YWNoZWQgdG8gd2luZG93KVxuICAgICAgICBpZiAoX19ORVhUX0RBVEFfXy5uZXh0RXhwb3J0KSB7XG4gICAgICAgICAgYXMgPSByZXdyaXRlVXJsRm9yTmV4dEV4cG9ydChhcylcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB0aGlzLmFib3J0Q29tcG9uZW50TG9hZChhcylcblxuICAgICAgLy8gSWYgdGhlIHVybCBjaGFuZ2UgaXMgb25seSByZWxhdGVkIHRvIGEgaGFzaCBjaGFuZ2VcbiAgICAgIC8vIFdlIHNob3VsZCBub3QgcHJvY2VlZC4gV2Ugc2hvdWxkIG9ubHkgY2hhbmdlIHRoZSBzdGF0ZS5cblxuICAgICAgLy8gV0FSTklORzogYF9oYCBpcyBhbiBpbnRlcm5hbCBvcHRpb24gZm9yIGhhbmRpbmcgTmV4dC5qcyBjbGllbnQtc2lkZVxuICAgICAgLy8gaHlkcmF0aW9uLiBZb3VyIGFwcCBzaG91bGQgX25ldmVyXyB1c2UgdGhpcyBwcm9wZXJ0eS4gSXQgbWF5IGNoYW5nZSBhdFxuICAgICAgLy8gYW55IHRpbWUgd2l0aG91dCBub3RpY2UuXG4gICAgICBpZiAoIW9wdGlvbnMuX2ggJiYgdGhpcy5vbmx5QUhhc2hDaGFuZ2UoYXMpKSB7XG4gICAgICAgIHRoaXMuYXNQYXRoID0gYXNcbiAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlU3RhcnQnLCBhcylcbiAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMpXG4gICAgICAgIHRoaXMuc2Nyb2xsVG9IYXNoKGFzKVxuICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VDb21wbGV0ZScsIGFzKVxuICAgICAgICByZXR1cm4gcmVzb2x2ZSh0cnVlKVxuICAgICAgfVxuXG4gICAgICBjb25zdCB7IHBhdGhuYW1lLCBxdWVyeSwgcHJvdG9jb2wgfSA9IHBhcnNlKHVybCwgdHJ1ZSlcblxuICAgICAgaWYgKCFwYXRobmFtZSB8fCBwcm90b2NvbCkge1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgIGBJbnZhbGlkIGhyZWYgcGFzc2VkIHRvIHJvdXRlcjogJHt1cmx9IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2ludmFsaWQtaHJlZi1wYXNzZWRgXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXNvbHZlKGZhbHNlKVxuICAgICAgfVxuXG4gICAgICAvLyBJZiBhc2tlZCB0byBjaGFuZ2UgdGhlIGN1cnJlbnQgVVJMIHdlIHNob3VsZCByZWxvYWQgdGhlIGN1cnJlbnQgcGFnZVxuICAgICAgLy8gKG5vdCBsb2NhdGlvbi5yZWxvYWQoKSBidXQgcmVsb2FkIGdldEluaXRpYWxQcm9wcyBhbmQgb3RoZXIgTmV4dC5qcyBzdHVmZnMpXG4gICAgICAvLyBXZSBhbHNvIG5lZWQgdG8gc2V0IHRoZSBtZXRob2QgPSByZXBsYWNlU3RhdGUgYWx3YXlzXG4gICAgICAvLyBhcyB0aGlzIHNob3VsZCBub3QgZ28gaW50byB0aGUgaGlzdG9yeSAoVGhhdCdzIGhvdyBicm93c2VycyB3b3JrKVxuICAgICAgLy8gV2Ugc2hvdWxkIGNvbXBhcmUgdGhlIG5ldyBhc1BhdGggdG8gdGhlIGN1cnJlbnQgYXNQYXRoLCBub3QgdGhlIHVybFxuICAgICAgaWYgKCF0aGlzLnVybElzTmV3KGFzKSkge1xuICAgICAgICBtZXRob2QgPSAncmVwbGFjZVN0YXRlJ1xuICAgICAgfVxuXG4gICAgICBjb25zdCByb3V0ZSA9IHRvUm91dGUocGF0aG5hbWUpXG4gICAgICBjb25zdCB7IHNoYWxsb3cgPSBmYWxzZSB9ID0gb3B0aW9uc1xuXG4gICAgICBpZiAoaXNEeW5hbWljUm91dGUocm91dGUpKSB7XG4gICAgICAgIGNvbnN0IHsgcGF0aG5hbWU6IGFzUGF0aG5hbWUgfSA9IHBhcnNlKGFzKVxuICAgICAgICBjb25zdCByb3V0ZVJlZ2V4ID0gZ2V0Um91dGVSZWdleChyb3V0ZSlcbiAgICAgICAgY29uc3Qgcm91dGVNYXRjaCA9IGdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4KShhc1BhdGhuYW1lKVxuICAgICAgICBpZiAoIXJvdXRlTWF0Y2gpIHtcbiAgICAgICAgICBjb25zdCBtaXNzaW5nUGFyYW1zID0gT2JqZWN0LmtleXMocm91dGVSZWdleC5ncm91cHMpLmZpbHRlcihcbiAgICAgICAgICAgIChwYXJhbSkgPT4gIXF1ZXJ5W3BhcmFtXVxuICAgICAgICAgIClcblxuICAgICAgICAgIGlmIChtaXNzaW5nUGFyYW1zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgICAgICBgTWlzbWF0Y2hpbmcgXFxgYXNcXGAgYW5kIFxcYGhyZWZcXGAgZmFpbGVkIHRvIG1hbnVhbGx5IHByb3ZpZGUgYCArXG4gICAgICAgICAgICAgICAgICBgdGhlIHBhcmFtczogJHttaXNzaW5nUGFyYW1zLmpvaW4oXG4gICAgICAgICAgICAgICAgICAgICcsICdcbiAgICAgICAgICAgICAgICAgICl9IGluIHRoZSBcXGBocmVmXFxgJ3MgXFxgcXVlcnlcXGBgXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHJlamVjdChcbiAgICAgICAgICAgICAgbmV3IEVycm9yKFxuICAgICAgICAgICAgICAgIGBUaGUgcHJvdmlkZWQgXFxgYXNcXGAgdmFsdWUgKCR7YXNQYXRobmFtZX0pIGlzIGluY29tcGF0aWJsZSB3aXRoIHRoZSBcXGBocmVmXFxgIHZhbHVlICgke3JvdXRlfSkuIGAgK1xuICAgICAgICAgICAgICAgICAgYFJlYWQgbW9yZTogaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvaW5jb21wYXRpYmxlLWhyZWYtYXNgXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gTWVyZ2UgcGFyYW1zIGludG8gYHF1ZXJ5YCwgb3ZlcndyaXRpbmcgYW55IHNwZWNpZmllZCBpbiBzZWFyY2hcbiAgICAgICAgICBPYmplY3QuYXNzaWduKHF1ZXJ5LCByb3V0ZU1hdGNoKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VTdGFydCcsIGFzKVxuXG4gICAgICAvLyBJZiBzaGFsbG93IGlzIHRydWUgYW5kIHRoZSByb3V0ZSBleGlzdHMgaW4gdGhlIHJvdXRlciBjYWNoZSB3ZSByZXVzZSB0aGUgcHJldmlvdXMgcmVzdWx0XG4gICAgICB0aGlzLmdldFJvdXRlSW5mbyhyb3V0ZSwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgc2hhbGxvdykudGhlbihcbiAgICAgICAgKHJvdXRlSW5mbykgPT4ge1xuICAgICAgICAgIGNvbnN0IHsgZXJyb3IgfSA9IHJvdXRlSW5mb1xuXG4gICAgICAgICAgaWYgKGVycm9yICYmIGVycm9yLmNhbmNlbGxlZCkge1xuICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUoZmFsc2UpXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdiZWZvcmVIaXN0b3J5Q2hhbmdlJywgYXMpXG4gICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMpXG5cbiAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgY29uc3QgYXBwQ29tcDogYW55ID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudFxuICAgICAgICAgICAgOyh3aW5kb3cgYXMgYW55KS5uZXh0LmlzUHJlcmVuZGVyZWQgPVxuICAgICAgICAgICAgICBhcHBDb21wLmdldEluaXRpYWxQcm9wcyA9PT0gYXBwQ29tcC5vcmlnR2V0SW5pdGlhbFByb3BzICYmXG4gICAgICAgICAgICAgICEocm91dGVJbmZvLkNvbXBvbmVudCBhcyBhbnkpLmdldEluaXRpYWxQcm9wc1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHRoaXMuc2V0KHJvdXRlLCBwYXRobmFtZSwgcXVlcnksIGFzLCByb3V0ZUluZm8pLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGVycm9yLCBhcylcbiAgICAgICAgICAgICAgdGhyb3cgZXJyb3JcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywgYXMpXG4gICAgICAgICAgICByZXR1cm4gcmVzb2x2ZSh0cnVlKVxuICAgICAgICAgIH0pXG4gICAgICAgIH0sXG4gICAgICAgIHJlamVjdFxuICAgICAgKVxuICAgIH0pXG4gIH1cblxuICBjaGFuZ2VTdGF0ZShcbiAgICBtZXRob2Q6IEhpc3RvcnlNZXRob2QsXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXM6IHN0cmluZyxcbiAgICBvcHRpb25zID0ge31cbiAgKTogdm9pZCB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnkgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5IGlzIG5vdCBhdmFpbGFibGUuYClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnlbbWV0aG9kXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkuJHttZXRob2R9IGlzIG5vdCBhdmFpbGFibGVgKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobWV0aG9kICE9PSAncHVzaFN0YXRlJyB8fCBnZXRVUkwoKSAhPT0gYXMpIHtcbiAgICAgIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0oXG4gICAgICAgIHtcbiAgICAgICAgICB1cmwsXG4gICAgICAgICAgYXMsXG4gICAgICAgICAgb3B0aW9ucyxcbiAgICAgICAgfSxcbiAgICAgICAgLy8gTW9zdCBicm93c2VycyBjdXJyZW50bHkgaWdub3JlcyB0aGlzIHBhcmFtZXRlciwgYWx0aG91Z2ggdGhleSBtYXkgdXNlIGl0IGluIHRoZSBmdXR1cmUuXG4gICAgICAgIC8vIFBhc3NpbmcgdGhlIGVtcHR5IHN0cmluZyBoZXJlIHNob3VsZCBiZSBzYWZlIGFnYWluc3QgZnV0dXJlIGNoYW5nZXMgdG8gdGhlIG1ldGhvZC5cbiAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0hpc3RvcnkvcmVwbGFjZVN0YXRlXG4gICAgICAgICcnLFxuICAgICAgICBhc1xuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIGdldFJvdXRlSW5mbyhcbiAgICByb3V0ZTogc3RyaW5nLFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IGFueSxcbiAgICBhczogc3RyaW5nLFxuICAgIHNoYWxsb3c6IGJvb2xlYW4gPSBmYWxzZVxuICApOiBQcm9taXNlPFJvdXRlSW5mbz4ge1xuICAgIGNvbnN0IGNhY2hlZFJvdXRlSW5mbyA9IHRoaXMuY29tcG9uZW50c1tyb3V0ZV1cblxuICAgIC8vIElmIHRoZXJlIGlzIGEgc2hhbGxvdyByb3V0ZSB0cmFuc2l0aW9uIHBvc3NpYmxlXG4gICAgLy8gSWYgdGhlIHJvdXRlIGlzIGFscmVhZHkgcmVuZGVyZWQgb24gdGhlIHNjcmVlbi5cbiAgICBpZiAoc2hhbGxvdyAmJiBjYWNoZWRSb3V0ZUluZm8gJiYgdGhpcy5yb3V0ZSA9PT0gcm91dGUpIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoY2FjaGVkUm91dGVJbmZvKVxuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZUVycm9yID0gKFxuICAgICAgZXJyOiBFcnJvciAmIHsgY29kZTogYW55OyBjYW5jZWxsZWQ6IGJvb2xlYW4gfSxcbiAgICAgIGxvYWRFcnJvckZhaWw/OiBib29sZWFuXG4gICAgKSA9PiB7XG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgICAgaWYgKGVyci5jb2RlID09PSAnUEFHRV9MT0FEX0VSUk9SJyB8fCBsb2FkRXJyb3JGYWlsKSB7XG4gICAgICAgICAgLy8gSWYgd2UgY2FuJ3QgbG9hZCB0aGUgcGFnZSBpdCBjb3VsZCBiZSBvbmUgb2YgZm9sbG93aW5nIHJlYXNvbnNcbiAgICAgICAgICAvLyAgMS4gUGFnZSBkb2Vzbid0IGV4aXN0c1xuICAgICAgICAgIC8vICAyLiBQYWdlIGRvZXMgZXhpc3QgaW4gYSBkaWZmZXJlbnQgem9uZVxuICAgICAgICAgIC8vICAzLiBJbnRlcm5hbCBlcnJvciB3aGlsZSBsb2FkaW5nIHRoZSBwYWdlXG5cbiAgICAgICAgICAvLyBTbywgZG9pbmcgYSBoYXJkIHJlbG9hZCBpcyB0aGUgcHJvcGVyIHdheSB0byBkZWFsIHdpdGggdGhpcy5cbiAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFzXG5cbiAgICAgICAgICAvLyBDaGFuZ2luZyB0aGUgVVJMIGRvZXNuJ3QgYmxvY2sgZXhlY3V0aW5nIHRoZSBjdXJyZW50IGNvZGUgcGF0aC5cbiAgICAgICAgICAvLyBTbywgd2UgbmVlZCB0byBtYXJrIGl0IGFzIGEgY2FuY2VsbGVkIGVycm9yIGFuZCBzdG9wIHRoZSByb3V0aW5nIGxvZ2ljLlxuICAgICAgICAgIGVyci5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICAgICAgLy8gQHRzLWlnbm9yZSBUT0RPOiBmaXggdGhlIGNvbnRyb2wgZmxvdyBoZXJlXG4gICAgICAgICAgcmV0dXJuIHJlc29sdmUoeyBlcnJvcjogZXJyIH0pXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZXJyLmNhbmNlbGxlZCkge1xuICAgICAgICAgIC8vIEB0cy1pZ25vcmUgVE9ETzogZml4IHRoZSBjb250cm9sIGZsb3cgaGVyZVxuICAgICAgICAgIHJldHVybiByZXNvbHZlKHsgZXJyb3I6IGVyciB9KVxuICAgICAgICB9XG5cbiAgICAgICAgcmVzb2x2ZShcbiAgICAgICAgICB0aGlzLmZldGNoQ29tcG9uZW50KCcvX2Vycm9yJylcbiAgICAgICAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgeyBwYWdlOiBDb21wb25lbnQgfSA9IHJlc1xuICAgICAgICAgICAgICBjb25zdCByb3V0ZUluZm86IFJvdXRlSW5mbyA9IHsgQ29tcG9uZW50LCBlcnIgfVxuICAgICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmdldEluaXRpYWxQcm9wcyhDb21wb25lbnQsIHtcbiAgICAgICAgICAgICAgICAgIGVycixcbiAgICAgICAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgICAgICAgfSBhcyBhbnkpLnRoZW4oXG4gICAgICAgICAgICAgICAgICAocHJvcHMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcm91dGVJbmZvLnByb3BzID0gcHJvcHNcbiAgICAgICAgICAgICAgICAgICAgcm91dGVJbmZvLmVycm9yID0gZXJyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocm91dGVJbmZvKVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIChnaXBFcnIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcbiAgICAgICAgICAgICAgICAgICAgICAnRXJyb3IgaW4gZXJyb3IgcGFnZSBgZ2V0SW5pdGlhbFByb3BzYDogJyxcbiAgICAgICAgICAgICAgICAgICAgICBnaXBFcnJcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICByb3V0ZUluZm8uZXJyb3IgPSBlcnJcbiAgICAgICAgICAgICAgICAgICAgcm91dGVJbmZvLnByb3BzID0ge31cbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyb3V0ZUluZm8pXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICB9KSBhcyBQcm9taXNlPFJvdXRlSW5mbz5cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goKGVycikgPT4gaGFuZGxlRXJyb3IoZXJyLCB0cnVlKSlcbiAgICAgICAgKVxuICAgICAgfSkgYXMgUHJvbWlzZTxSb3V0ZUluZm8+XG4gICAgfVxuXG4gICAgcmV0dXJuIChuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBpZiAoY2FjaGVkUm91dGVJbmZvKSB7XG4gICAgICAgIHJldHVybiByZXNvbHZlKGNhY2hlZFJvdXRlSW5mbylcbiAgICAgIH1cblxuICAgICAgdGhpcy5mZXRjaENvbXBvbmVudChyb3V0ZSkudGhlbihcbiAgICAgICAgKHJlcykgPT5cbiAgICAgICAgICByZXNvbHZlKHtcbiAgICAgICAgICAgIENvbXBvbmVudDogcmVzLnBhZ2UsXG4gICAgICAgICAgICBfX05fU1NHOiByZXMubW9kLl9fTl9TU0csXG4gICAgICAgICAgICBfX05fU1NQOiByZXMubW9kLl9fTl9TU1AsXG4gICAgICAgICAgfSksXG4gICAgICAgIHJlamVjdFxuICAgICAgKVxuICAgIH0pIGFzIFByb21pc2U8Um91dGVJbmZvPilcbiAgICAgIC50aGVuKChyb3V0ZUluZm86IFJvdXRlSW5mbykgPT4ge1xuICAgICAgICBjb25zdCB7IENvbXBvbmVudCwgX19OX1NTRywgX19OX1NTUCB9ID0gcm91dGVJbmZvXG5cbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICBjb25zdCB7IGlzVmFsaWRFbGVtZW50VHlwZSB9ID0gcmVxdWlyZSgncmVhY3QtaXMnKVxuICAgICAgICAgIGlmICghaXNWYWxpZEVsZW1lbnRUeXBlKENvbXBvbmVudCkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgICAgYFRoZSBkZWZhdWx0IGV4cG9ydCBpcyBub3QgYSBSZWFjdCBDb21wb25lbnQgaW4gcGFnZTogXCIke3BhdGhuYW1lfVwiYFxuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXREYXRhPFJvdXRlSW5mbz4oKCkgPT5cbiAgICAgICAgICBfX05fU1NHXG4gICAgICAgICAgICA/IHRoaXMuX2dldFN0YXRpY0RhdGEoYXMpXG4gICAgICAgICAgICA6IF9fTl9TU1BcbiAgICAgICAgICAgID8gdGhpcy5fZ2V0U2VydmVyRGF0YShhcylcbiAgICAgICAgICAgIDogdGhpcy5nZXRJbml0aWFsUHJvcHMoXG4gICAgICAgICAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICAgICAgICAgIC8vIHdlIHByb3ZpZGUgQXBwVHJlZSBsYXRlciBzbyB0aGlzIG5lZWRzIHRvIGJlIGBhbnlgXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAgICAgICAgIGFzUGF0aDogYXMsXG4gICAgICAgICAgICAgICAgfSBhcyBhbnlcbiAgICAgICAgICAgICAgKVxuICAgICAgICApLnRoZW4oKHByb3BzKSA9PiB7XG4gICAgICAgICAgcm91dGVJbmZvLnByb3BzID0gcHJvcHNcbiAgICAgICAgICB0aGlzLmNvbXBvbmVudHNbcm91dGVdID0gcm91dGVJbmZvXG4gICAgICAgICAgcmV0dXJuIHJvdXRlSW5mb1xuICAgICAgICB9KVxuICAgICAgfSlcbiAgICAgIC5jYXRjaChoYW5kbGVFcnJvcilcbiAgfVxuXG4gIHNldChcbiAgICByb3V0ZTogc3RyaW5nLFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IGFueSxcbiAgICBhczogc3RyaW5nLFxuICAgIGRhdGE6IFJvdXRlSW5mb1xuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICB0aGlzLmlzRmFsbGJhY2sgPSBmYWxzZVxuXG4gICAgdGhpcy5yb3V0ZSA9IHJvdXRlXG4gICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgdGhpcy5xdWVyeSA9IHF1ZXJ5XG4gICAgdGhpcy5hc1BhdGggPSBhc1xuICAgIHJldHVybiB0aGlzLm5vdGlmeShkYXRhKVxuICB9XG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIHRvIGV4ZWN1dGUgYmVmb3JlIHJlcGxhY2luZyByb3V0ZXIgc3RhdGVcbiAgICogQHBhcmFtIGNiIGNhbGxiYWNrIHRvIGJlIGV4ZWN1dGVkXG4gICAqL1xuICBiZWZvcmVQb3BTdGF0ZShjYjogQmVmb3JlUG9wU3RhdGVDYWxsYmFjaykge1xuICAgIHRoaXMuX2JwcyA9IGNiXG4gIH1cblxuICBvbmx5QUhhc2hDaGFuZ2UoYXM6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIGlmICghdGhpcy5hc1BhdGgpIHJldHVybiBmYWxzZVxuICAgIGNvbnN0IFtvbGRVcmxOb0hhc2gsIG9sZEhhc2hdID0gdGhpcy5hc1BhdGguc3BsaXQoJyMnKVxuICAgIGNvbnN0IFtuZXdVcmxOb0hhc2gsIG5ld0hhc2hdID0gYXMuc3BsaXQoJyMnKVxuXG4gICAgLy8gTWFrZXMgc3VyZSB3ZSBzY3JvbGwgdG8gdGhlIHByb3ZpZGVkIGhhc2ggaWYgdGhlIHVybC9oYXNoIGFyZSB0aGUgc2FtZVxuICAgIGlmIChuZXdIYXNoICYmIG9sZFVybE5vSGFzaCA9PT0gbmV3VXJsTm9IYXNoICYmIG9sZEhhc2ggPT09IG5ld0hhc2gpIHtcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIHVybHMgYXJlIGNoYW5nZSwgdGhlcmUncyBtb3JlIHRoYW4gYSBoYXNoIGNoYW5nZVxuICAgIGlmIChvbGRVcmxOb0hhc2ggIT09IG5ld1VybE5vSGFzaCkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIGhhc2ggaGFzIGNoYW5nZWQsIHRoZW4gaXQncyBhIGhhc2ggb25seSBjaGFuZ2UuXG4gICAgLy8gVGhpcyBjaGVjayBpcyBuZWNlc3NhcnkgdG8gaGFuZGxlIGJvdGggdGhlIGVudGVyIGFuZFxuICAgIC8vIGxlYXZlIGhhc2ggPT09ICcnIGNhc2VzLiBUaGUgaWRlbnRpdHkgY2FzZSBmYWxscyB0aHJvdWdoXG4gICAgLy8gYW5kIGlzIHRyZWF0ZWQgYXMgYSBuZXh0IHJlbG9hZC5cbiAgICByZXR1cm4gb2xkSGFzaCAhPT0gbmV3SGFzaFxuICB9XG5cbiAgc2Nyb2xsVG9IYXNoKGFzOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBjb25zdCBbLCBoYXNoXSA9IGFzLnNwbGl0KCcjJylcbiAgICAvLyBTY3JvbGwgdG8gdG9wIGlmIHRoZSBoYXNoIGlzIGp1c3QgYCNgIHdpdGggbm8gdmFsdWVcbiAgICBpZiAoaGFzaCA9PT0gJycpIHtcbiAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gRmlyc3Qgd2UgY2hlY2sgaWYgdGhlIGVsZW1lbnQgYnkgaWQgaXMgZm91bmRcbiAgICBjb25zdCBpZEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaGFzaClcbiAgICBpZiAoaWRFbCkge1xuICAgICAgaWRFbC5zY3JvbGxJbnRvVmlldygpXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgLy8gSWYgdGhlcmUncyBubyBlbGVtZW50IHdpdGggdGhlIGlkLCB3ZSBjaGVjayB0aGUgYG5hbWVgIHByb3BlcnR5XG4gICAgLy8gVG8gbWlycm9yIGJyb3dzZXJzXG4gICAgY29uc3QgbmFtZUVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoaGFzaClbMF1cbiAgICBpZiAobmFtZUVsKSB7XG4gICAgICBuYW1lRWwuc2Nyb2xsSW50b1ZpZXcoKVxuICAgIH1cbiAgfVxuXG4gIHVybElzTmV3KGFzUGF0aDogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuYXNQYXRoICE9PSBhc1BhdGhcbiAgfVxuXG4gIC8qKlxuICAgKiBQcmVmZXRjaCBwYWdlIGNvZGUsIHlvdSBtYXkgd2FpdCBmb3IgdGhlIGRhdGEgZHVyaW5nIHBhZ2UgcmVuZGVyaW5nLlxuICAgKiBUaGlzIGZlYXR1cmUgb25seSB3b3JrcyBpbiBwcm9kdWN0aW9uIVxuICAgKiBAcGFyYW0gdXJsIHRoZSBocmVmIG9mIHByZWZldGNoZWQgcGFnZVxuICAgKiBAcGFyYW0gYXNQYXRoIHRoZSBhcyBwYXRoIG9mIHRoZSBwcmVmZXRjaGVkIHBhZ2VcbiAgICovXG4gIHByZWZldGNoKFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzUGF0aDogc3RyaW5nID0gdXJsLFxuICAgIG9wdGlvbnM6IFByZWZldGNoT3B0aW9ucyA9IHt9XG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBjb25zdCB7IHBhdGhuYW1lLCBwcm90b2NvbCB9ID0gcGFyc2UodXJsKVxuXG4gICAgICBpZiAoIXBhdGhuYW1lIHx8IHByb3RvY29sKSB7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgYEludmFsaWQgaHJlZiBwYXNzZWQgdG8gcm91dGVyOiAke3VybH0gaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvaW52YWxpZC1ocmVmLXBhc3NlZGBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIC8vIFByZWZldGNoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gZGV2ZWxvcG1lbnQgbW9kZSBiZWNhdXNlIGl0IHdvdWxkIHRyaWdnZXIgb24tZGVtYW5kLWVudHJpZXNcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgY29uc3Qgcm91dGUgPSBkZWxCYXNlUGF0aCh0b1JvdXRlKHBhdGhuYW1lKSlcbiAgICAgIFByb21pc2UuYWxsKFtcbiAgICAgICAgdGhpcy5wYWdlTG9hZGVyLnByZWZldGNoRGF0YSh1cmwsIGRlbEJhc2VQYXRoKGFzUGF0aCkpLFxuICAgICAgICB0aGlzLnBhZ2VMb2FkZXJbb3B0aW9ucy5wcmlvcml0eSA/ICdsb2FkUGFnZScgOiAncHJlZmV0Y2gnXShyb3V0ZSksXG4gICAgICBdKS50aGVuKCgpID0+IHJlc29sdmUoKSwgcmVqZWN0KVxuICAgIH0pXG4gIH1cblxuICBhc3luYyBmZXRjaENvbXBvbmVudChyb3V0ZTogc3RyaW5nKTogUHJvbWlzZTxDb21wb25lbnRSZXM+IHtcbiAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2VcbiAgICBjb25zdCBjYW5jZWwgPSAodGhpcy5jbGMgPSAoKSA9PiB7XG4gICAgICBjYW5jZWxsZWQgPSB0cnVlXG4gICAgfSlcbiAgICByb3V0ZSA9IGRlbEJhc2VQYXRoKHJvdXRlKVxuXG4gICAgY29uc3QgY29tcG9uZW50UmVzdWx0ID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmxvYWRQYWdlKHJvdXRlKVxuXG4gICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgY29uc3QgZXJyb3I6IGFueSA9IG5ldyBFcnJvcihcbiAgICAgICAgYEFib3J0IGZldGNoaW5nIGNvbXBvbmVudCBmb3Igcm91dGU6IFwiJHtyb3V0ZX1cImBcbiAgICAgIClcbiAgICAgIGVycm9yLmNhbmNlbGxlZCA9IHRydWVcbiAgICAgIHRocm93IGVycm9yXG4gICAgfVxuXG4gICAgaWYgKGNhbmNlbCA9PT0gdGhpcy5jbGMpIHtcbiAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIH1cblxuICAgIHJldHVybiBjb21wb25lbnRSZXN1bHRcbiAgfVxuXG4gIF9nZXREYXRhPFQ+KGZuOiAoKSA9PiBQcm9taXNlPFQ+KTogUHJvbWlzZTxUPiB7XG4gICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlXG4gICAgY29uc3QgY2FuY2VsID0gKCkgPT4ge1xuICAgICAgY2FuY2VsbGVkID0gdHJ1ZVxuICAgIH1cbiAgICB0aGlzLmNsYyA9IGNhbmNlbFxuICAgIHJldHVybiBmbigpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgICAgfVxuXG4gICAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICAgIGNvbnN0IGVycjogYW55ID0gbmV3IEVycm9yKCdMb2FkaW5nIGluaXRpYWwgcHJvcHMgY2FuY2VsbGVkJylcbiAgICAgICAgZXJyLmNhbmNlbGxlZCA9IHRydWVcbiAgICAgICAgdGhyb3cgZXJyXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkYXRhXG4gICAgfSlcbiAgfVxuXG4gIF9nZXRTdGF0aWNEYXRhID0gKGFzUGF0aDogc3RyaW5nKTogUHJvbWlzZTxvYmplY3Q+ID0+IHtcbiAgICBjb25zdCBwYXRobmFtZSA9IHByZXBhcmVSb3V0ZShwYXJzZShhc1BhdGgpLnBhdGhuYW1lISlcblxuICAgIHJldHVybiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nICYmIHRoaXMuc2RjW3BhdGhuYW1lXVxuICAgICAgPyBQcm9taXNlLnJlc29sdmUodGhpcy5zZGNbcGF0aG5hbWVdKVxuICAgICAgOiBmZXRjaE5leHREYXRhKFxuICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgIG51bGwsXG4gICAgICAgICAgdGhpcy5pc1NzcixcbiAgICAgICAgICAoZGF0YSkgPT4gKHRoaXMuc2RjW3BhdGhuYW1lXSA9IGRhdGEpXG4gICAgICAgIClcbiAgfVxuXG4gIF9nZXRTZXJ2ZXJEYXRhID0gKGFzUGF0aDogc3RyaW5nKTogUHJvbWlzZTxvYmplY3Q+ID0+IHtcbiAgICBsZXQgeyBwYXRobmFtZSwgcXVlcnkgfSA9IHBhcnNlKGFzUGF0aCwgdHJ1ZSlcbiAgICBwYXRobmFtZSA9IHByZXBhcmVSb3V0ZShwYXRobmFtZSEpXG4gICAgcmV0dXJuIGZldGNoTmV4dERhdGEocGF0aG5hbWUsIHF1ZXJ5LCB0aGlzLmlzU3NyKVxuICB9XG5cbiAgZ2V0SW5pdGlhbFByb3BzKFxuICAgIENvbXBvbmVudDogQ29tcG9uZW50VHlwZSxcbiAgICBjdHg6IE5leHRQYWdlQ29udGV4dFxuICApOiBQcm9taXNlPGFueT4ge1xuICAgIGNvbnN0IHsgQ29tcG9uZW50OiBBcHAgfSA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXVxuICAgIGNvbnN0IEFwcFRyZWUgPSB0aGlzLl93cmFwQXBwKEFwcClcbiAgICBjdHguQXBwVHJlZSA9IEFwcFRyZWVcbiAgICByZXR1cm4gbG9hZEdldEluaXRpYWxQcm9wczxBcHBDb250ZXh0VHlwZTxSb3V0ZXI+PihBcHAsIHtcbiAgICAgIEFwcFRyZWUsXG4gICAgICBDb21wb25lbnQsXG4gICAgICByb3V0ZXI6IHRoaXMsXG4gICAgICBjdHgsXG4gICAgfSlcbiAgfVxuXG4gIGFib3J0Q29tcG9uZW50TG9hZChhczogc3RyaW5nKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY2xjKSB7XG4gICAgICBjb25zdCBlID0gbmV3IEVycm9yKCdSb3V0ZSBDYW5jZWxsZWQnKVxuICAgICAgOyhlIGFzIGFueSkuY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZSwgYXMpXG4gICAgICB0aGlzLmNsYygpXG4gICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB9XG4gIH1cblxuICBub3RpZnkoZGF0YTogUm91dGVJbmZvKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIHRoaXMuc3ViKGRhdGEsIHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnQpXG4gIH1cbn1cbiIsIi8vIElkZW50aWZ5IC9bcGFyYW1dLyBpbiByb3V0ZSBzdHJpbmdcbmNvbnN0IFRFU1RfUk9VVEUgPSAvXFwvXFxbW14vXSs/XFxdKD89XFwvfCQpL1xuXG5leHBvcnQgZnVuY3Rpb24gaXNEeW5hbWljUm91dGUocm91dGU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICByZXR1cm4gVEVTVF9ST1VURS50ZXN0KHJvdXRlKVxufVxuIiwiaW1wb3J0IHsgZ2V0Um91dGVSZWdleCB9IGZyb20gJy4vcm91dGUtcmVnZXgnXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleDogUmV0dXJuVHlwZTx0eXBlb2YgZ2V0Um91dGVSZWdleD4pIHtcbiAgY29uc3QgeyByZSwgZ3JvdXBzIH0gPSByb3V0ZVJlZ2V4XG4gIHJldHVybiAocGF0aG5hbWU6IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQpID0+IHtcbiAgICBjb25zdCByb3V0ZU1hdGNoID0gcmUuZXhlYyhwYXRobmFtZSEpXG4gICAgaWYgKCFyb3V0ZU1hdGNoKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBjb25zdCBkZWNvZGUgPSAocGFyYW06IHN0cmluZykgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChwYXJhbSlcbiAgICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgY29uc3QgZXJyOiBFcnJvciAmIHsgY29kZT86IHN0cmluZyB9ID0gbmV3IEVycm9yKFxuICAgICAgICAgICdmYWlsZWQgdG8gZGVjb2RlIHBhcmFtJ1xuICAgICAgICApXG4gICAgICAgIGVyci5jb2RlID0gJ0RFQ09ERV9GQUlMRUQnXG4gICAgICAgIHRocm93IGVyclxuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBwYXJhbXM6IHsgW3BhcmFtTmFtZTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW10gfSA9IHt9XG5cbiAgICBPYmplY3Qua2V5cyhncm91cHMpLmZvckVhY2goKHNsdWdOYW1lOiBzdHJpbmcpID0+IHtcbiAgICAgIGNvbnN0IGcgPSBncm91cHNbc2x1Z05hbWVdXG4gICAgICBjb25zdCBtID0gcm91dGVNYXRjaFtnLnBvc11cbiAgICAgIGlmIChtICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcGFyYW1zW3NsdWdOYW1lXSA9IH5tLmluZGV4T2YoJy8nKVxuICAgICAgICAgID8gbS5zcGxpdCgnLycpLm1hcCgoZW50cnkpID0+IGRlY29kZShlbnRyeSkpXG4gICAgICAgICAgOiBnLnJlcGVhdFxuICAgICAgICAgID8gW2RlY29kZShtKV1cbiAgICAgICAgICA6IGRlY29kZShtKVxuICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIHBhcmFtc1xuICB9XG59XG4iLCIvLyB0aGlzIGlzbid0IGltcG9ydGluZyB0aGUgZXNjYXBlLXN0cmluZy1yZWdleCBtb2R1bGVcbi8vIHRvIHJlZHVjZSBieXRlc1xuZnVuY3Rpb24gZXNjYXBlUmVnZXgoc3RyOiBzdHJpbmcpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC9bfFxcXFx7fSgpW1xcXV4kKyo/Li1dL2csICdcXFxcJCYnKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Um91dGVSZWdleChcbiAgbm9ybWFsaXplZFJvdXRlOiBzdHJpbmdcbik6IHtcbiAgcmU6IFJlZ0V4cFxuICBuYW1lZFJlZ2V4Pzogc3RyaW5nXG4gIGdyb3VwczogeyBbZ3JvdXBOYW1lOiBzdHJpbmddOiB7IHBvczogbnVtYmVyOyByZXBlYXQ6IGJvb2xlYW4gfSB9XG59IHtcbiAgLy8gRXNjYXBlIGFsbCBjaGFyYWN0ZXJzIHRoYXQgY291bGQgYmUgY29uc2lkZXJlZCBSZWdFeFxuICBjb25zdCBlc2NhcGVkUm91dGUgPSBlc2NhcGVSZWdleChub3JtYWxpemVkUm91dGUucmVwbGFjZSgvXFwvJC8sICcnKSB8fCAnLycpXG5cbiAgY29uc3QgZ3JvdXBzOiB7IFtncm91cE5hbWU6IHN0cmluZ106IHsgcG9zOiBudW1iZXI7IHJlcGVhdDogYm9vbGVhbiB9IH0gPSB7fVxuICBsZXQgZ3JvdXBJbmRleCA9IDFcblxuICBjb25zdCBwYXJhbWV0ZXJpemVkUm91dGUgPSBlc2NhcGVkUm91dGUucmVwbGFjZShcbiAgICAvXFwvXFxcXFxcWyhbXi9dKz8pXFxcXFxcXSg/PVxcL3wkKS9nLFxuICAgIChfLCAkMSkgPT4ge1xuICAgICAgY29uc3QgaXNPcHRpb25hbCA9IC9eXFxcXFxcWy4qXFxcXFxcXSQvLnRlc3QoJDEpXG4gICAgICBpZiAoaXNPcHRpb25hbCkge1xuICAgICAgICAkMSA9ICQxLnNsaWNlKDIsIC0yKVxuICAgICAgfVxuICAgICAgY29uc3QgaXNDYXRjaEFsbCA9IC9eKFxcXFxcXC4pezN9Ly50ZXN0KCQxKVxuICAgICAgaWYgKGlzQ2F0Y2hBbGwpIHtcbiAgICAgICAgJDEgPSAkMS5zbGljZSg2KVxuICAgICAgfVxuICAgICAgZ3JvdXBzW1xuICAgICAgICAkMVxuICAgICAgICAgIC8vIFVuLWVzY2FwZSBrZXlcbiAgICAgICAgICAucmVwbGFjZSgvXFxcXChbfFxcXFx7fSgpW1xcXV4kKyo/Li1dKS9nLCAnJDEnKVxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VxdWVuY2VzXG4gICAgICBdID0geyBwb3M6IGdyb3VwSW5kZXgrKywgcmVwZWF0OiBpc0NhdGNoQWxsIH1cbiAgICAgIHJldHVybiBpc0NhdGNoQWxsID8gKGlzT3B0aW9uYWwgPyAnKD86LyguKz8pKT8nIDogJy8oLis/KScpIDogJy8oW14vXSs/KSdcbiAgICB9XG4gIClcblxuICBsZXQgbmFtZWRQYXJhbWV0ZXJpemVkUm91dGU6IHN0cmluZyB8IHVuZGVmaW5lZFxuXG4gIC8vIGRlYWQgY29kZSBlbGltaW5hdGUgZm9yIGJyb3dzZXIgc2luY2UgaXQncyBvbmx5IG5lZWRlZFxuICAvLyB3aGlsZSBnZW5lcmF0aW5nIHJvdXRlcy1tYW5pZmVzdFxuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZSA9IGVzY2FwZWRSb3V0ZS5yZXBsYWNlKFxuICAgICAgL1xcL1xcXFxcXFsoW14vXSs/KVxcXFxcXF0oPz1cXC98JCkvZyxcbiAgICAgIChfLCAkMSkgPT4ge1xuICAgICAgICBjb25zdCBpc0NhdGNoQWxsID0gL14oXFxcXFxcLil7M30vLnRlc3QoJDEpXG4gICAgICAgIGNvbnN0IGtleSA9ICQxXG4gICAgICAgICAgLy8gVW4tZXNjYXBlIGtleVxuICAgICAgICAgIC5yZXBsYWNlKC9cXFxcKFt8XFxcXHt9KClbXFxdXiQrKj8uLV0pL2csICckMScpXG4gICAgICAgICAgLnJlcGxhY2UoL15cXC57M30vLCAnJylcblxuICAgICAgICByZXR1cm4gaXNDYXRjaEFsbFxuICAgICAgICAgID8gYC8oPzwke2VzY2FwZVJlZ2V4KGtleSl9Pi4rPylgXG4gICAgICAgICAgOiBgLyg/PCR7ZXNjYXBlUmVnZXgoa2V5KX0+W14vXSs/KWBcbiAgICAgIH1cbiAgICApXG4gIH1cblxuICByZXR1cm4ge1xuICAgIHJlOiBuZXcgUmVnRXhwKCdeJyArIHBhcmFtZXRlcml6ZWRSb3V0ZSArICcoPzovKT8kJywgJ2knKSxcbiAgICBncm91cHMsXG4gICAgbmFtZWRSZWdleDogbmFtZWRQYXJhbWV0ZXJpemVkUm91dGVcbiAgICAgID8gYF4ke25hbWVkUGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgXG4gICAgICA6IHVuZGVmaW5lZCxcbiAgfVxufVxuIiwiaW1wb3J0IHsgSW5jb21pbmdNZXNzYWdlLCBTZXJ2ZXJSZXNwb25zZSB9IGZyb20gJ2h0dHAnXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgQ29tcG9uZW50VHlwZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgZm9ybWF0LCBVUkxGb3JtYXRPcHRpb25zLCBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQgeyBNYW5pZmVzdEl0ZW0gfSBmcm9tICcuLi9zZXJ2ZXIvbG9hZC1jb21wb25lbnRzJ1xuaW1wb3J0IHsgTmV4dFJvdXRlciB9IGZyb20gJy4vcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IEVudiB9IGZyb20gJy4uLy4uL2xpYi9sb2FkLWVudi1jb25maWcnXG5cbi8qKlxuICogVHlwZXMgdXNlZCBieSBib3RoIG5leHQgYW5kIG5leHQtc2VydmVyXG4gKi9cblxuZXhwb3J0IHR5cGUgTmV4dENvbXBvbmVudFR5cGU8XG4gIEMgZXh0ZW5kcyBCYXNlQ29udGV4dCA9IE5leHRQYWdlQ29udGV4dCxcbiAgSVAgPSB7fSxcbiAgUCA9IHt9XG4+ID0gQ29tcG9uZW50VHlwZTxQPiAmIHtcbiAgLyoqXG4gICAqIFVzZWQgZm9yIGluaXRpYWwgcGFnZSBsb2FkIGRhdGEgcG9wdWxhdGlvbi4gRGF0YSByZXR1cm5lZCBmcm9tIGBnZXRJbml0aWFsUHJvcHNgIGlzIHNlcmlhbGl6ZWQgd2hlbiBzZXJ2ZXIgcmVuZGVyZWQuXG4gICAqIE1ha2Ugc3VyZSB0byByZXR1cm4gcGxhaW4gYE9iamVjdGAgd2l0aG91dCB1c2luZyBgRGF0ZWAsIGBNYXBgLCBgU2V0YC5cbiAgICogQHBhcmFtIGN0eCBDb250ZXh0IG9mIGBwYWdlYFxuICAgKi9cbiAgZ2V0SW5pdGlhbFByb3BzPyhjb250ZXh0OiBDKTogSVAgfCBQcm9taXNlPElQPlxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudFR5cGUgPSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgRG9jdW1lbnRDb250ZXh0LFxuICBEb2N1bWVudEluaXRpYWxQcm9wcyxcbiAgRG9jdW1lbnRQcm9wc1xuPiAmIHtcbiAgcmVuZGVyRG9jdW1lbnQoXG4gICAgRG9jdW1lbnQ6IERvY3VtZW50VHlwZSxcbiAgICBwcm9wczogRG9jdW1lbnRQcm9wc1xuICApOiBSZWFjdC5SZWFjdEVsZW1lbnRcbn1cblxuZXhwb3J0IHR5cGUgQXBwVHlwZSA9IE5leHRDb21wb25lbnRUeXBlPFxuICBBcHBDb250ZXh0VHlwZSxcbiAgQXBwSW5pdGlhbFByb3BzLFxuICBBcHBQcm9wc1R5cGVcbj5cblxuZXhwb3J0IHR5cGUgQXBwVHJlZVR5cGUgPSBDb21wb25lbnRUeXBlPFxuICBBcHBJbml0aWFsUHJvcHMgJiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfVxuPlxuXG5leHBvcnQgdHlwZSBFbmhhbmNlcjxDPiA9IChDb21wb25lbnQ6IEMpID0+IENcblxuZXhwb3J0IHR5cGUgQ29tcG9uZW50c0VuaGFuY2VyID1cbiAgfCB7XG4gICAgICBlbmhhbmNlQXBwPzogRW5oYW5jZXI8QXBwVHlwZT5cbiAgICAgIGVuaGFuY2VDb21wb25lbnQ/OiBFbmhhbmNlcjxOZXh0Q29tcG9uZW50VHlwZT5cbiAgICB9XG4gIHwgRW5oYW5jZXI8TmV4dENvbXBvbmVudFR5cGU+XG5cbmV4cG9ydCB0eXBlIFJlbmRlclBhZ2VSZXN1bHQgPSB7XG4gIGh0bWw6IHN0cmluZ1xuICBoZWFkPzogQXJyYXk8SlNYLkVsZW1lbnQgfCBudWxsPlxufVxuXG5leHBvcnQgdHlwZSBSZW5kZXJQYWdlID0gKFxuICBvcHRpb25zPzogQ29tcG9uZW50c0VuaGFuY2VyXG4pID0+IFJlbmRlclBhZ2VSZXN1bHQgfCBQcm9taXNlPFJlbmRlclBhZ2VSZXN1bHQ+XG5cbmV4cG9ydCB0eXBlIEJhc2VDb250ZXh0ID0ge1xuICByZXM/OiBTZXJ2ZXJSZXNwb25zZVxuICBbazogc3RyaW5nXTogYW55XG59XG5cbmV4cG9ydCB0eXBlIE5FWFRfREFUQSA9IHtcbiAgcHJvcHM6IGFueVxuICBwYWdlOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGJ1aWxkSWQ6IHN0cmluZ1xuICBhc3NldFByZWZpeD86IHN0cmluZ1xuICBydW50aW1lQ29uZmlnPzogeyBba2V5OiBzdHJpbmddOiBhbnkgfVxuICBuZXh0RXhwb3J0PzogYm9vbGVhblxuICBhdXRvRXhwb3J0PzogYm9vbGVhblxuICBpc0ZhbGxiYWNrPzogYm9vbGVhblxuICBkeW5hbWljSWRzPzogc3RyaW5nW11cbiAgZXJyPzogRXJyb3IgJiB7IHN0YXR1c0NvZGU/OiBudW1iZXIgfVxuICBnc3A/OiBib29sZWFuXG4gIGdzc3A/OiBib29sZWFuXG4gIGN1c3RvbVNlcnZlcj86IGJvb2xlYW5cbiAgZ2lwPzogYm9vbGVhblxuICBhcHBHaXA/OiBib29sZWFuXG59XG5cbi8qKlxuICogYE5leHRgIGNvbnRleHRcbiAqL1xuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lIGludGVyZmFjZS1uYW1lXG5leHBvcnQgaW50ZXJmYWNlIE5leHRQYWdlQ29udGV4dCB7XG4gIC8qKlxuICAgKiBFcnJvciBvYmplY3QgaWYgZW5jb3VudGVyZWQgZHVyaW5nIHJlbmRlcmluZ1xuICAgKi9cbiAgZXJyPzogKEVycm9yICYgeyBzdGF0dXNDb2RlPzogbnVtYmVyIH0pIHwgbnVsbFxuICAvKipcbiAgICogYEhUVFBgIHJlcXVlc3Qgb2JqZWN0LlxuICAgKi9cbiAgcmVxPzogSW5jb21pbmdNZXNzYWdlXG4gIC8qKlxuICAgKiBgSFRUUGAgcmVzcG9uc2Ugb2JqZWN0LlxuICAgKi9cbiAgcmVzPzogU2VydmVyUmVzcG9uc2VcbiAgLyoqXG4gICAqIFBhdGggc2VjdGlvbiBvZiBgVVJMYC5cbiAgICovXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgLyoqXG4gICAqIFF1ZXJ5IHN0cmluZyBzZWN0aW9uIG9mIGBVUkxgIHBhcnNlZCBhcyBhbiBvYmplY3QuXG4gICAqL1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgLyoqXG4gICAqIGBTdHJpbmdgIG9mIHRoZSBhY3R1YWwgcGF0aCBpbmNsdWRpbmcgcXVlcnkuXG4gICAqL1xuICBhc1BhdGg/OiBzdHJpbmdcbiAgLyoqXG4gICAqIGBDb21wb25lbnRgIHRoZSB0cmVlIG9mIHRoZSBBcHAgdG8gdXNlIGlmIG5lZWRpbmcgdG8gcmVuZGVyIHNlcGFyYXRlbHlcbiAgICovXG4gIEFwcFRyZWU6IEFwcFRyZWVUeXBlXG59XG5cbmV4cG9ydCB0eXBlIEFwcENvbnRleHRUeXBlPFIgZXh0ZW5kcyBOZXh0Um91dGVyID0gTmV4dFJvdXRlcj4gPSB7XG4gIENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8TmV4dFBhZ2VDb250ZXh0PlxuICBBcHBUcmVlOiBBcHBUcmVlVHlwZVxuICBjdHg6IE5leHRQYWdlQ29udGV4dFxuICByb3V0ZXI6IFJcbn1cblxuZXhwb3J0IHR5cGUgQXBwSW5pdGlhbFByb3BzID0ge1xuICBwYWdlUHJvcHM6IGFueVxufVxuXG5leHBvcnQgdHlwZSBBcHBQcm9wc1R5cGU8XG4gIFIgZXh0ZW5kcyBOZXh0Um91dGVyID0gTmV4dFJvdXRlcixcbiAgUCA9IHt9XG4+ID0gQXBwSW5pdGlhbFByb3BzICYge1xuICBDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPE5leHRQYWdlQ29udGV4dCwgYW55LCBQPlxuICByb3V0ZXI6IFJcbiAgX19OX1NTRz86IGJvb2xlYW5cbiAgX19OX1NTUD86IGJvb2xlYW5cbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRDb250ZXh0ID0gTmV4dFBhZ2VDb250ZXh0ICYge1xuICByZW5kZXJQYWdlOiBSZW5kZXJQYWdlXG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50SW5pdGlhbFByb3BzID0gUmVuZGVyUGFnZVJlc3VsdCAmIHtcbiAgc3R5bGVzPzogUmVhY3QuUmVhY3RFbGVtZW50W10gfCBSZWFjdC5SZWFjdEZyYWdtZW50XG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50UHJvcHMgPSBEb2N1bWVudEluaXRpYWxQcm9wcyAmIHtcbiAgX19ORVhUX0RBVEFfXzogTkVYVF9EQVRBXG4gIGRhbmdlcm91c0FzUGF0aDogc3RyaW5nXG4gIGFtcFBhdGg6IHN0cmluZ1xuICBpbkFtcE1vZGU6IGJvb2xlYW5cbiAgaHlicmlkQW1wOiBib29sZWFuXG4gIHN0YXRpY01hcmt1cDogYm9vbGVhblxuICBpc0RldmVsb3BtZW50OiBib29sZWFuXG4gIGRldkZpbGVzOiBzdHJpbmdbXVxuICBmaWxlczogc3RyaW5nW11cbiAgbG93UHJpb3JpdHlGaWxlczogc3RyaW5nW11cbiAgcG9seWZpbGxGaWxlczogc3RyaW5nW11cbiAgZHluYW1pY0ltcG9ydHM6IE1hbmlmZXN0SXRlbVtdXG4gIGFzc2V0UHJlZml4Pzogc3RyaW5nXG4gIGNhbm9uaWNhbEJhc2U6IHN0cmluZ1xuICBodG1sUHJvcHM6IGFueVxuICBib2R5VGFnczogYW55W11cbiAgaGVhZFRhZ3M6IGFueVtdXG4gIHVuc3RhYmxlX3J1bnRpbWVKUz86IGZhbHNlXG59XG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSByZXF1ZXN0XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTmV4dEFwaVJlcXVlc3QgZXh0ZW5kcyBJbmNvbWluZ01lc3NhZ2Uge1xuICAvKipcbiAgICogT2JqZWN0IG9mIGBxdWVyeWAgdmFsdWVzIGZyb20gdXJsXG4gICAqL1xuICBxdWVyeToge1xuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdXG4gIH1cbiAgLyoqXG4gICAqIE9iamVjdCBvZiBgY29va2llc2AgZnJvbSBoZWFkZXJcbiAgICovXG4gIGNvb2tpZXM6IHtcbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmdcbiAgfVxuXG4gIGJvZHk6IGFueVxuXG4gIGVudjogRW52XG59XG5cbi8qKlxuICogU2VuZCBib2R5IG9mIHJlc3BvbnNlXG4gKi9cbnR5cGUgU2VuZDxUPiA9IChib2R5OiBUKSA9PiB2b2lkXG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSByZXNwb25zZVxuICovXG5leHBvcnQgdHlwZSBOZXh0QXBpUmVzcG9uc2U8VCA9IGFueT4gPSBTZXJ2ZXJSZXNwb25zZSAmIHtcbiAgLyoqXG4gICAqIFNlbmQgZGF0YSBgYW55YCBkYXRhIGluIHJlc3BvbnNlXG4gICAqL1xuICBzZW5kOiBTZW5kPFQ+XG4gIC8qKlxuICAgKiBTZW5kIGRhdGEgYGpzb25gIGRhdGEgaW4gcmVzcG9uc2VcbiAgICovXG4gIGpzb246IFNlbmQ8VD5cbiAgc3RhdHVzOiAoc3RhdHVzQ29kZTogbnVtYmVyKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cblxuICAvKipcbiAgICogU2V0IHByZXZpZXcgZGF0YSBmb3IgTmV4dC5qcycgcHJlcmVuZGVyIG1vZGVcbiAgICovXG4gIHNldFByZXZpZXdEYXRhOiAoXG4gICAgZGF0YTogb2JqZWN0IHwgc3RyaW5nLFxuICAgIG9wdGlvbnM/OiB7XG4gICAgICAvKipcbiAgICAgICAqIFNwZWNpZmllcyB0aGUgbnVtYmVyIChpbiBzZWNvbmRzKSBmb3IgdGhlIHByZXZpZXcgc2Vzc2lvbiB0byBsYXN0IGZvci5cbiAgICAgICAqIFRoZSBnaXZlbiBudW1iZXIgd2lsbCBiZSBjb252ZXJ0ZWQgdG8gYW4gaW50ZWdlciBieSByb3VuZGluZyBkb3duLlxuICAgICAgICogQnkgZGVmYXVsdCwgbm8gbWF4aW11bSBhZ2UgaXMgc2V0IGFuZCB0aGUgcHJldmlldyBzZXNzaW9uIGZpbmlzaGVzXG4gICAgICAgKiB3aGVuIHRoZSBjbGllbnQgc2h1dHMgZG93biAoYnJvd3NlciBpcyBjbG9zZWQpLlxuICAgICAgICovXG4gICAgICBtYXhBZ2U/OiBudW1iZXJcbiAgICB9XG4gICkgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIGNsZWFyUHJldmlld0RhdGE6ICgpID0+IE5leHRBcGlSZXNwb25zZTxUPlxufVxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgaGFuZGxlclxuICovXG5leHBvcnQgdHlwZSBOZXh0QXBpSGFuZGxlcjxUID0gYW55PiA9IChcbiAgcmVxOiBOZXh0QXBpUmVxdWVzdCxcbiAgcmVzOiBOZXh0QXBpUmVzcG9uc2U8VD5cbikgPT4gdm9pZCB8IFByb21pc2U8dm9pZD5cblxuLyoqXG4gKiBVdGlsc1xuICovXG5leHBvcnQgZnVuY3Rpb24gZXhlY09uY2U8VCBleHRlbmRzICguLi5hcmdzOiBhbnlbXSkgPT4gUmV0dXJuVHlwZTxUPj4oXG4gIGZuOiBUXG4pOiBUIHtcbiAgbGV0IHVzZWQgPSBmYWxzZVxuICBsZXQgcmVzdWx0OiBSZXR1cm5UeXBlPFQ+XG5cbiAgcmV0dXJuICgoLi4uYXJnczogYW55W10pID0+IHtcbiAgICBpZiAoIXVzZWQpIHtcbiAgICAgIHVzZWQgPSB0cnVlXG4gICAgICByZXN1bHQgPSBmbiguLi5hcmdzKVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0XG4gIH0pIGFzIFRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldExvY2F0aW9uT3JpZ2luKCkge1xuICBjb25zdCB7IHByb3RvY29sLCBob3N0bmFtZSwgcG9ydCB9ID0gd2luZG93LmxvY2F0aW9uXG4gIHJldHVybiBgJHtwcm90b2NvbH0vLyR7aG9zdG5hbWV9JHtwb3J0ID8gJzonICsgcG9ydCA6ICcnfWBcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFVSTCgpIHtcbiAgY29uc3QgeyBocmVmIH0gPSB3aW5kb3cubG9jYXRpb25cbiAgY29uc3Qgb3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW4oKVxuICByZXR1cm4gaHJlZi5zdWJzdHJpbmcob3JpZ2luLmxlbmd0aClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERpc3BsYXlOYW1lPFA+KENvbXBvbmVudDogQ29tcG9uZW50VHlwZTxQPikge1xuICByZXR1cm4gdHlwZW9mIENvbXBvbmVudCA9PT0gJ3N0cmluZydcbiAgICA/IENvbXBvbmVudFxuICAgIDogQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvbmVudC5uYW1lIHx8ICdVbmtub3duJ1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNSZXNTZW50KHJlczogU2VydmVyUmVzcG9uc2UpIHtcbiAgcmV0dXJuIHJlcy5maW5pc2hlZCB8fCByZXMuaGVhZGVyc1NlbnRcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvYWRHZXRJbml0aWFsUHJvcHM8XG4gIEMgZXh0ZW5kcyBCYXNlQ29udGV4dCxcbiAgSVAgPSB7fSxcbiAgUCA9IHt9XG4+KEFwcDogTmV4dENvbXBvbmVudFR5cGU8QywgSVAsIFA+LCBjdHg6IEMpOiBQcm9taXNlPElQPiB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKEFwcC5wcm90b3R5cGU/LmdldEluaXRpYWxQcm9wcykge1xuICAgICAgY29uc3QgbWVzc2FnZSA9IGBcIiR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICAgIEFwcFxuICAgICAgKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBpcyBkZWZpbmVkIGFzIGFuIGluc3RhbmNlIG1ldGhvZCAtIHZpc2l0IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2dldC1pbml0aWFsLXByb3BzLWFzLWFuLWluc3RhbmNlLW1ldGhvZCBmb3IgbW9yZSBpbmZvcm1hdGlvbi5gXG4gICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgICB9XG4gIH1cbiAgLy8gd2hlbiBjYWxsZWQgZnJvbSBfYXBwIGBjdHhgIGlzIG5lc3RlZCBpbiBgY3R4YFxuICBjb25zdCByZXMgPSBjdHgucmVzIHx8IChjdHguY3R4ICYmIGN0eC5jdHgucmVzKVxuXG4gIGlmICghQXBwLmdldEluaXRpYWxQcm9wcykge1xuICAgIGlmIChjdHguY3R4ICYmIGN0eC5Db21wb25lbnQpIHtcbiAgICAgIC8vIEB0cy1pZ25vcmUgcGFnZVByb3BzIGRlZmF1bHRcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHBhZ2VQcm9wczogYXdhaXQgbG9hZEdldEluaXRpYWxQcm9wcyhjdHguQ29tcG9uZW50LCBjdHguY3R4KSxcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHt9IGFzIElQXG4gIH1cblxuICBjb25zdCBwcm9wcyA9IGF3YWl0IEFwcC5nZXRJbml0aWFsUHJvcHMoY3R4KVxuXG4gIGlmIChyZXMgJiYgaXNSZXNTZW50KHJlcykpIHtcbiAgICByZXR1cm4gcHJvcHNcbiAgfVxuXG4gIGlmICghcHJvcHMpIHtcbiAgICBjb25zdCBtZXNzYWdlID0gYFwiJHtnZXREaXNwbGF5TmFtZShcbiAgICAgIEFwcFxuICAgICl9LmdldEluaXRpYWxQcm9wcygpXCIgc2hvdWxkIHJlc29sdmUgdG8gYW4gb2JqZWN0LiBCdXQgZm91bmQgXCIke3Byb3BzfVwiIGluc3RlYWQuYFxuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICB9XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoT2JqZWN0LmtleXMocHJvcHMpLmxlbmd0aCA9PT0gMCAmJiAhY3R4LmN0eCkge1xuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICBgJHtnZXREaXNwbGF5TmFtZShcbiAgICAgICAgICBBcHBcbiAgICAgICAgKX0gcmV0dXJuZWQgYW4gZW1wdHkgb2JqZWN0IGZyb20gXFxgZ2V0SW5pdGlhbFByb3BzXFxgLiBUaGlzIGRlLW9wdGltaXplcyBhbmQgcHJldmVudHMgYXV0b21hdGljIHN0YXRpYyBvcHRpbWl6YXRpb24uIGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2VtcHR5LW9iamVjdC1nZXRJbml0aWFsUHJvcHNgXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHByb3BzXG59XG5cbmV4cG9ydCBjb25zdCB1cmxPYmplY3RLZXlzID0gW1xuICAnYXV0aCcsXG4gICdoYXNoJyxcbiAgJ2hvc3QnLFxuICAnaG9zdG5hbWUnLFxuICAnaHJlZicsXG4gICdwYXRoJyxcbiAgJ3BhdGhuYW1lJyxcbiAgJ3BvcnQnLFxuICAncHJvdG9jb2wnLFxuICAncXVlcnknLFxuICAnc2VhcmNoJyxcbiAgJ3NsYXNoZXMnLFxuXVxuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0V2l0aFZhbGlkYXRpb24oXG4gIHVybDogVXJsT2JqZWN0LFxuICBvcHRpb25zPzogVVJMRm9ybWF0T3B0aW9uc1xuKTogc3RyaW5nIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgaWYgKHVybCAhPT0gbnVsbCAmJiB0eXBlb2YgdXJsID09PSAnb2JqZWN0Jykge1xuICAgICAgT2JqZWN0LmtleXModXJsKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgaWYgKHVybE9iamVjdEtleXMuaW5kZXhPZihrZXkpID09PSAtMSkge1xuICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgIGBVbmtub3duIGtleSBwYXNzZWQgdmlhIHVybE9iamVjdCBpbnRvIHVybC5mb3JtYXQ6ICR7a2V5fWBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZvcm1hdCh1cmwgYXMgVVJMLCBvcHRpb25zKVxufVxuXG5leHBvcnQgY29uc3QgU1AgPSB0eXBlb2YgcGVyZm9ybWFuY2UgIT09ICd1bmRlZmluZWQnXG5leHBvcnQgY29uc3QgU1QgPVxuICBTUCAmJlxuICB0eXBlb2YgcGVyZm9ybWFuY2UubWFyayA9PT0gJ2Z1bmN0aW9uJyAmJlxuICB0eXBlb2YgcGVyZm9ybWFuY2UubWVhc3VyZSA9PT0gJ2Z1bmN0aW9uJ1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvY2xpZW50L2xpbmsnKVxuIiwiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDsiLCJ2YXIgX3R5cGVvZiA9IHJlcXVpcmUoXCIuLi9oZWxwZXJzL3R5cGVvZlwiKTtcblxuZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICBpZiAodHlwZW9mIFdlYWtNYXAgIT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIG51bGw7XG4gIHZhciBjYWNoZSA9IG5ldyBXZWFrTWFwKCk7XG5cbiAgX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlID0gZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICAgIHJldHVybiBjYWNoZTtcbiAgfTtcblxuICByZXR1cm4gY2FjaGU7XG59XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikge1xuICBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7XG4gICAgcmV0dXJuIG9iajtcbiAgfVxuXG4gIGlmIChvYmogPT09IG51bGwgfHwgX3R5cGVvZihvYmopICE9PSBcIm9iamVjdFwiICYmIHR5cGVvZiBvYmogIT09IFwiZnVuY3Rpb25cIikge1xuICAgIHJldHVybiB7XG4gICAgICBcImRlZmF1bHRcIjogb2JqXG4gICAgfTtcbiAgfVxuXG4gIHZhciBjYWNoZSA9IF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpO1xuXG4gIGlmIChjYWNoZSAmJiBjYWNoZS5oYXMob2JqKSkge1xuICAgIHJldHVybiBjYWNoZS5nZXQob2JqKTtcbiAgfVxuXG4gIHZhciBuZXdPYmogPSB7fTtcbiAgdmFyIGhhc1Byb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG4gIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkge1xuICAgICAgdmFyIGRlc2MgPSBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KSA6IG51bGw7XG5cbiAgICAgIGlmIChkZXNjICYmIChkZXNjLmdldCB8fCBkZXNjLnNldCkpIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaiwga2V5LCBkZXNjKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5ld09ialtrZXldID0gb2JqW2tleV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmV3T2JqW1wiZGVmYXVsdFwiXSA9IG9iajtcblxuICBpZiAoY2FjaGUpIHtcbiAgICBjYWNoZS5zZXQob2JqLCBuZXdPYmopO1xuICB9XG5cbiAgcmV0dXJuIG5ld09iajtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZDsiLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX3R5cGVvZihvYmopO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90eXBlb2Y7IiwiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGUsIHVzZVJlZHVjZXIsIHVzZUVmZmVjdCwgY3JlYXRlQ29udGV4dCwgdXNlQ29udGV4dH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBjb29raWUgZnJvbSAncmVhY3QtY29va2llcydcclxuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHtDb2wsIFJvdywgQWZmaXgsIE1lbnUsIERyb3Bkb3dufSBmcm9tICdhbnRkJztcclxuaW1wb3J0IFwiLi4vLi4vcHVibGljL3N0eWxlL2hlYWQuY3NzXCI7XHJcbmltcG9ydCBcIi4uLy4uL3B1YmxpYy9zdHlsZS90ZWFjaGVyL2NvdXJzZS5jc3NcIjtcclxuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy90ZWFjaGVyL2hlYWRlclwiO1xyXG5pbXBvcnQgQ291cnNlTW9kdWxlIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3RlYWNoZXIvaW5kZXgvY291cnNlTW9kdWxlXCI7XHJcbmltcG9ydCBDb3Vyc2VBZGRNb2R1bGUgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvdGVhY2hlci9pbmRleC9jb3Vyc2VBZGRNb2R1bGVcIjtcclxuaW1wb3J0IENvdXJzZUFkZFNwYW4gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvdGVhY2hlci9pbmRleC9jb3Vyc2VBZGRTcGFuXCI7XHJcbmltcG9ydCBDb3Vyc2VDcmVhdGVTcGFuIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3RlYWNoZXIvaW5kZXgvY291cnNlQ3JlYXRlU3BhblwiO1xyXG5pbXBvcnQgQXJjaGl2ZUNvdXJzZSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy90ZWFjaGVyL2luZGV4L2FyY2hpdmVDb3Vyc2VcIlxyXG5pbXBvcnQgQWRkT3JDcmVhdGVDb3Vyc2VNZW51IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3RlYWNoZXIvaW5kZXgvb3B0aW9uTWVudVwiO1xyXG5pbXBvcnQge0NvdXJzZXNDb250ZXh0LCBQYWdlQ29udGV4dCwgQ291cnNlQ29udGV4dH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvdGVhY2hlci9Db250ZXh0XCI7XHJcbmltcG9ydCB7UmVhbEF4aW9zfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9jb25maWdcIjtcclxuXHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICAgIGNhc2UgXCJ1cGRhdGVcIjpcclxuICAgICAgICAgICAgcmV0dXJuIGFjdGlvbi5jb3Vyc2VzSW5mb1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZVxyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBUZWFjaGVySW5kZXggPSAocHJvcHMpID0+IHtcclxuICAgIGNvbnN0IFtjb3Vyc2VzSW5mbywgZGlzcGF0Y2hdID0gdXNlUmVkdWNlcihyZWR1Y2VyLCBbXSk7XHJcbiAgICBjb25zdCBbdGVhY2hlcklkLCBzZXRUZWFjaGVySWRdID0gdXNlU3RhdGUoJycpO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKGNvb2tpZS5sb2FkKFwiaWRlbnRpZnlcIikgIT0gXCJ0ZWFjaGVyXCIgfHwgIWNvb2tpZS5sb2FkKFwiaWRcIikpIHtcclxuICAgICAgICAgICAgUm91dGVyLnB1c2goXCIvdGVhY2hlci9sb2dpblwiKVxyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgcmVzdWx0ID0gW107XHJcbiAgICAgICAgUmVhbEF4aW9zKHtcclxuICAgICAgICAgICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgICAgICAgICAgIHVybDogJy9jb3Vyc2UvZ2V0Q291cnNlQnlUZWFjaGVyJyxcclxuICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgcGhvbmU6IGNvb2tpZS5sb2FkKFwiaWRcIilcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgIHJlc3VsdCA9IHJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHt0eXBlOiBcInVwZGF0ZVwiLCBjb3Vyc2VzSW5mbzogcmVzdWx0fSlcclxuICAgICAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgICAgfSk7XHJcbiAgICB9LCBbXSk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxDb2wgc3Bhbj17MjR9PlxyXG4gICAgICAgICAgICA8UGFnZUNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e1wiaW5kZXhcIn0+XHJcbiAgICAgICAgICAgICAgICA8SGVhZGVyLz5cclxuICAgICAgICAgICAgPC9QYWdlQ29udGV4dC5Qcm92aWRlcj5cclxuICAgICAgICAgICAgPFJvdyBndXR0ZXI9e1swLDIwXX0+XHJcbiAgICAgICAgICAgICAgICA8Q29sIHNwYW49ezE4fSBvZmZzZXQ9ezN9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdrdGNvbic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxSb3cgY2xhc3NOYW1lPSdjb250cm9sLWJhcicganVzdGlmeT0nc3BhY2UtYmV0d2Vlbic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29sIHN0eWxlPXt7cGFkZGluZ1RvcDogMTQgKyBcInB4XCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDlhajpg6jor77nqItcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJvdyBqdXN0aWZ5PSdzdGFydCcgZ3V0dGVyPXtbMTAsIDBdfSBhbGlnbj0nbWlkZGxlJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT7or77nqIvmjpLluo88L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvdXJzZXNDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7Y291cnNlc0luZm8sIGRpc3BhdGNofX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QXJjaGl2ZUNvdXJzZS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ291cnNlc0NvbnRleHQuUHJvdmlkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvdXJzZXNDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7Y291cnNlc0luZm8sIGRpc3BhdGNofX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd24gb3ZlcmxheT17QWRkT3JDcmVhdGVDb3Vyc2VNZW51fSB0cmlnZ2VyPXtbJ2NsaWNrJ119PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb3Vyc2UtY29udHJvbC1idG4nPjxzcGFuPuWIm+W7ui/liqDlhaXor77nqIs8L3NwYW4+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvdXJzZXNDb250ZXh0LlByb3ZpZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb3Vyc2UtY29udHJvbC1idG4nPjxzcGFuPuW/q+mAn+WPkeW4g+a0u+WKqDwvc3Bhbj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFJvdyBndXR0ZXI9e1syMSwgMzBdfSBqdXN0aWZ5PSdzdGFydCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y291cnNlc0luZm8ubWFwKChpdGVtLCBrZXkpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29sIGtleT17a2V5fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvdXJzZXNDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7aXRlbSwgY291cnNlc0luZm8sIGRpc3BhdGNofX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q291cnNlTW9kdWxlLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Db3Vyc2VzQ29udGV4dC5Qcm92aWRlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q291cnNlc0NvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3tjb3Vyc2VzSW5mbywgZGlzcGF0Y2h9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvdXJzZUFkZE1vZHVsZS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Db3Vyc2VzQ29udGV4dC5Qcm92aWRlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICA8L0NvbD5cclxuICAgIClcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRlYWNoZXJJbmRleDtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYW50ZC9saWIvYWZmaXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYW50ZC9saWIvYXZhdGFyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFudGQvbGliL2NvbFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhbnRkL2xpYi9kcm9wZG93blwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhbnRkL2xpYi9pbnB1dFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhbnRkL2xpYi9tZW51XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFudGQvbGliL21lc3NhZ2VcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYW50ZC9saWIvbW9kYWxcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYW50ZC9saWIvcG9wb3ZlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhbnRkL2xpYi9yb3dcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYW50ZC9saWIvc2VsZWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByb3AtdHlwZXMtZXhhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtY29va2llc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ1cmxcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==