module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ({

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

/***/ "./pages/teacher/login.js":
/*!********************************!*\
  !*** ./pages/teacher/login.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/button */ "antd/lib/button");
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/row */ "antd/lib/row");
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/col */ "antd/lib/col");
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_message__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/message */ "antd/lib/message");
/* harmony import */ var antd_lib_message__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_message__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/input */ "antd/lib/input");
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_lib_tabs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/tabs */ "antd/lib/tabs");
/* harmony import */ var antd_lib_tabs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_tabs__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_cookies__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-cookies */ "react-cookies");
/* harmony import */ var react_cookies__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_cookies__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_Svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/Svg */ "./components/Svg.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _public_style_login_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../public/style/login.css */ "./public/style/login.css");
/* harmony import */ var _public_style_login_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_public_style_login_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_config__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/config */ "./components/config.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_12__);






var _jsxFileName = "D:\\cloudClass-project\\cloudClass\\cloud_class\\pages\\teacher\\login.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;







const {
  TabPane
} = antd_lib_tabs__WEBPACK_IMPORTED_MODULE_5___default.a;
const {
  Password
} = antd_lib_input__WEBPACK_IMPORTED_MODULE_4___default.a;

const Login = () => {
  const {
    0: action,
    1: setAction
  } = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])('login');
  const {
    0: tPhone,
    1: setTPhone
  } = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])('');
  const {
    0: tPassword,
    1: setTPassword
  } = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])('');
  const {
    0: tEmail,
    1: setTEmail
  } = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])('');
  const {
    0: tName,
    1: setTName
  } = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])('');
  const {
    0: tCollege,
    1: setTCollege
  } = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])('');
  const {
    0: security,
    1: setSecurity
  } = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])('');
  const {
    0: image,
    1: setImage
  } = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])('');
  const {
    0: code,
    1: setCode
  } = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])('');

  const changeCode = () => {
    setSecurity("");
    _components_config__WEBPACK_IMPORTED_MODULE_11__["RealAxios"].get("teacher/getSecurityCode?time=" + new Date().getTime()).then(response => {
      setImage('data:image/png;base64,' + response.data.image);
      setCode(response.data.code);
    });
  };

  Object(react__WEBPACK_IMPORTED_MODULE_6__["useEffect"])(() => {
    changeCode();
  }, []);

  const login = () => {
    if (security.toLowerCase() != code.toString().toLowerCase()) {
      antd_lib_message__WEBPACK_IMPORTED_MODULE_3___default.a.error("验证码错误");

      return;
    }

    Object(_components_config__WEBPACK_IMPORTED_MODULE_11__["RealAxios"])({
      method: 'post',
      url: '/teacher/login',
      data: {
        'code': security,
        'tPhone': tPhone,
        'tPassword': tPassword
      }
    }).then(response => {
      if (response.data.msg == "errorPassword") {
        antd_lib_message__WEBPACK_IMPORTED_MODULE_3___default.a.error("密码错误");

        setTPassword("");
        changeCode();
      } else if (response.data.msg == "noTeacher") {
        antd_lib_message__WEBPACK_IMPORTED_MODULE_3___default.a.error("没有该用户");

        setAction("sign");
        changeCode();
      } else if (response.data.msg == 'ok') {
        react_cookies__WEBPACK_IMPORTED_MODULE_7___default.a.save("identify", "teacher", {
          path: "/"
        });
        react_cookies__WEBPACK_IMPORTED_MODULE_7___default.a.save("id", tPhone, {
          path: "/"
        });
        next_router__WEBPACK_IMPORTED_MODULE_9___default.a.push("/teacher");
      }
    }).catch(error => {
      console.log(error);
      changeCode();
    });
  };

  const signUp = () => {
    if (security.toLowerCase() != code.toString().toLowerCase()) {
      antd_lib_message__WEBPACK_IMPORTED_MODULE_3___default.a.error("验证码错误");

      return;
    }

    Object(_components_config__WEBPACK_IMPORTED_MODULE_11__["RealAxios"])({
      method: 'post',
      url: '/teacher/register',
      data: {
        'code': security,
        'tPhone': tPhone,
        'tPassword': tPassword,
        'tEmail': tEmail,
        'tName': tName,
        'tCollege': tCollege
      }
    }).then(response => {
      if (response.data.msg == "ok") {
        antd_lib_message__WEBPACK_IMPORTED_MODULE_3___default.a.success("注册成功");

        setAction("login");
        changeCode();
      } else if (response.data.msg == "haveTeacher") {
        antd_lib_message__WEBPACK_IMPORTED_MODULE_3___default.a.error("用户已存在");

        setAction("login");
        changeCode();
      } else {
        alert("未知错误");
        changeCode();
      }
    }).catch(error => {
      console.log(error);
    });
  };

  return __jsx(antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "login",
    justify: "center",
    align: "middle",
    style: {
      paddingTop: 50 + "px"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 9
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_12___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 13
    }
  }, __jsx("title", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 17
    }
  }, "\u4E91\u8BFE\u5802"), __jsx("meta", {
    charSet: "utf-8",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 17
    }
  })), __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_2___default.a, {
    span: 6,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "wrap",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 17
    }
  }, __jsx(antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, {
    gutter: [16, 0],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 21
    }
  }, __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_2___default.a, {
    onClick: () => {
      next_router__WEBPACK_IMPORTED_MODULE_9___default.a.push('/');
    },
    style: {
      display: 'flex',
      justifyContent: 'center'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 25
    }
  }, __jsx(_components_Svg__WEBPACK_IMPORTED_MODULE_8__["BackSvg"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 28
    }
  }), "\u9009\u62E9\u8EAB\u4EFD")), __jsx(antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 21
    }
  }, __jsx(antd_lib_tabs__WEBPACK_IMPORTED_MODULE_5___default.a, {
    activeKey: action,
    size: "large",
    style: {
      width: '100%'
    },
    onTabClick: (key, event) => {
      setAction(key);
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 25
    }
  }, __jsx(TabPane, {
    key: "login",
    tab: __jsx("div", {
      style: {
        display: 'flex',
        justifyContent: 'center'
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116,
        columnNumber: 33
      }
    }, "\u767B\u5F55"),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 29
    }
  }, __jsx(antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, {
    style: {
      margin: "10px"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 33
    }
  }, __jsx(antd_lib_input__WEBPACK_IMPORTED_MODULE_4___default.a, {
    size: "large",
    type: "text",
    placeholder: "\u624B\u673A\u53F7",
    prefix: __jsx(_components_Svg__WEBPACK_IMPORTED_MODULE_8__["UserSvg"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 91
      }
    }),
    value: tPhone,
    onChange: e => {
      setTPhone(e.target.value);
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 33
    }
  })), __jsx(antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, {
    style: {
      margin: "10px"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 33
    }
  }, __jsx(Password, {
    size: "large",
    placeholder: "\u5BC6\u7801",
    prefix: __jsx(_components_Svg__WEBPACK_IMPORTED_MODULE_8__["PasswordSvg"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 124,
        columnNumber: 81
      }
    }),
    value: tPassword,
    onChange: e => {
      setTPassword(e.target.value);
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 33
    }
  })), __jsx(antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, {
    style: {
      margin: "10px"
    },
    justify: "space-between",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 33
    }
  }, __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_2___default.a, {
    span: 11,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 37
    }
  }, __jsx(antd_lib_input__WEBPACK_IMPORTED_MODULE_4___default.a, {
    type: "text",
    size: "large",
    placeholder: "\u9A8C\u8BC1\u7801",
    prefix: __jsx(_components_Svg__WEBPACK_IMPORTED_MODULE_8__["SecurityCodeSvg"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 128,
        columnNumber: 99
      }
    }),
    value: security,
    onChange: e => {
      setSecurity(e.target.value);
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 41
    }
  })), __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_2___default.a, {
    span: 11,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 37
    }
  }, __jsx("img", {
    src: image,
    onClick: changeCode,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 41
    }
  }))), __jsx(antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, {
    style: {
      margin: "10px"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 33
    }
  }, __jsx(antd_lib_button__WEBPACK_IMPORTED_MODULE_0___default.a, {
    size: "large",
    type: "primary",
    style: {
      width: '100%'
    },
    onClick: login,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 33
    }
  }, "\u767B\u5F55"))), __jsx(TabPane, {
    tab: __jsx("div", {
      style: {
        display: 'flex',
        justifyContent: 'center'
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 139,
        columnNumber: 33
      }
    }, "\u6CE8\u518C"),
    key: "sign",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 29
    }
  }, __jsx(antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, {
    style: {
      margin: "10px"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 33
    }
  }, __jsx(antd_lib_input__WEBPACK_IMPORTED_MODULE_4___default.a, {
    size: "large",
    type: "text",
    placeholder: "\u624B\u673A\u53F7",
    prefix: __jsx(_components_Svg__WEBPACK_IMPORTED_MODULE_8__["UserSvg"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 144,
        columnNumber: 95
      }
    }),
    value: tPhone,
    onChange: e => {
      setTPhone(e.target.value);
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 37
    }
  })), __jsx(antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, {
    style: {
      margin: "10px"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 33
    }
  }, __jsx(Password, {
    size: "large",
    placeholder: "\u5BC6\u7801",
    prefix: __jsx(_components_Svg__WEBPACK_IMPORTED_MODULE_8__["PasswordSvg"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 147,
        columnNumber: 85
      }
    }),
    value: tPassword,
    onChange: e => {
      setTPassword(e.target.value);
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 37
    }
  })), __jsx(antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, {
    style: {
      margin: '10px'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 33
    }
  }, __jsx(antd_lib_input__WEBPACK_IMPORTED_MODULE_4___default.a, {
    size: "large",
    placeholder: "\u7535\u5B50\u90AE\u7BB1",
    prefix: __jsx(_components_Svg__WEBPACK_IMPORTED_MODULE_8__["EmailSvg"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 150,
        columnNumber: 84
      }
    }),
    value: tEmail,
    onChange: e => {
      setTEmail(e.target.value);
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 37
    }
  })), __jsx(antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, {
    style: {
      margin: '10px'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 33
    }
  }, __jsx(antd_lib_input__WEBPACK_IMPORTED_MODULE_4___default.a, {
    size: "large",
    placeholder: "\u59D3\u540D",
    prefix: __jsx(_components_Svg__WEBPACK_IMPORTED_MODULE_8__["NameSvg"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 153,
        columnNumber: 82
      }
    }),
    value: tName,
    onChange: e => {
      setTName(e.target.value);
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 37
    }
  })), __jsx(antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, {
    style: {
      margin: '10px'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 33
    }
  }, __jsx(antd_lib_input__WEBPACK_IMPORTED_MODULE_4___default.a, {
    size: "large",
    placeholder: "\u5B66\u9662",
    prefix: __jsx(_components_Svg__WEBPACK_IMPORTED_MODULE_8__["CollegeSvg"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 156,
        columnNumber: 82
      }
    }),
    value: tCollege,
    onChange: e => {
      setTCollege(e.target.value);
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 37
    }
  })), __jsx(antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, {
    style: {
      margin: "10px"
    },
    justify: "space-between",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 33
    }
  }, __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_2___default.a, {
    span: 11,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 37
    }
  }, __jsx(antd_lib_input__WEBPACK_IMPORTED_MODULE_4___default.a, {
    type: "text",
    size: "large",
    placeholder: "\u9A8C\u8BC1\u7801",
    prefix: __jsx(_components_Svg__WEBPACK_IMPORTED_MODULE_8__["SecurityCodeSvg"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 160,
        columnNumber: 99
      }
    }),
    value: security,
    onChange: e => {
      setSecurity(e.target.value);
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 41
    }
  })), __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_2___default.a, {
    span: 11,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 37
    }
  }, __jsx("img", {
    src: image,
    onClick: changeCode,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 41
    }
  }))), __jsx(antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, {
    style: {
      margin: "10px"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 33
    }
  }, __jsx(antd_lib_button__WEBPACK_IMPORTED_MODULE_0___default.a, {
    size: "large",
    type: "primary",
    style: {
      width: '100%'
    },
    onClick: signUp,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 37
    }
  }, "\u6CE8\u518C"))))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Login);

/***/ }),

/***/ "./public/style/login.css":
/*!********************************!*\
  !*** ./public/style/login.css ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 6:
/*!**************************************!*\
  !*** multi ./pages/teacher/login.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\cloudClass-project\cloudClass\cloud_class\pages\teacher\login.js */"./pages/teacher/login.js");


/***/ }),

/***/ "antd/lib/button":
/*!**********************************!*\
  !*** external "antd/lib/button" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/button");

/***/ }),

/***/ "antd/lib/col":
/*!*******************************!*\
  !*** external "antd/lib/col" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/col");

/***/ }),

/***/ "antd/lib/input":
/*!*********************************!*\
  !*** external "antd/lib/input" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/input");

/***/ }),

/***/ "antd/lib/message":
/*!***********************************!*\
  !*** external "antd/lib/message" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/message");

/***/ }),

/***/ "antd/lib/row":
/*!*******************************!*\
  !*** external "antd/lib/row" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/row");

/***/ }),

/***/ "antd/lib/tabs":
/*!********************************!*\
  !*** external "antd/lib/tabs" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/tabs");

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

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TdmcuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9jb25maWcuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvdGVhY2hlci9sb2dpbi5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhbnRkL2xpYi9idXR0b25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhbnRkL2xpYi9jb2xcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhbnRkL2xpYi9pbnB1dFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImFudGQvbGliL21lc3NhZ2VcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhbnRkL2xpYi9yb3dcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhbnRkL2xpYi90YWJzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtY29va2llc1wiIl0sIm5hbWVzIjpbIlVwbG9hZFN2ZyIsIkNoYW5nZVN2ZyIsIlNjb3JlU3ZnIiwiQmFja1N2ZyIsIlBhc3N3b3JkU3ZnIiwiVXNlclN2ZyIsIkVtYWlsU3ZnIiwiTmFtZVN2ZyIsIkNvbGxlZ2VTdmciLCJTZWN1cml0eUNvZGVTdmciLCJTdHVkZW50TnVtU3ZnIiwiVVJMIiwiUmVhbEF4aW9zIiwiYXhpb3MiLCJjcmVhdGUiLCJiYXNlVVJMIiwicHJveHkiLCJ0YXJnZXQiLCJzZWN1cmUiLCJjaGFuZ2VPcmlnaW4iLCJUYWJQYW5lIiwiUGFzc3dvcmQiLCJMb2dpbiIsImFjdGlvbiIsInNldEFjdGlvbiIsInVzZVN0YXRlIiwidFBob25lIiwic2V0VFBob25lIiwidFBhc3N3b3JkIiwic2V0VFBhc3N3b3JkIiwidEVtYWlsIiwic2V0VEVtYWlsIiwidE5hbWUiLCJzZXRUTmFtZSIsInRDb2xsZWdlIiwic2V0VENvbGxlZ2UiLCJzZWN1cml0eSIsInNldFNlY3VyaXR5IiwiaW1hZ2UiLCJzZXRJbWFnZSIsImNvZGUiLCJzZXRDb2RlIiwiY2hhbmdlQ29kZSIsImdldCIsIkRhdGUiLCJnZXRUaW1lIiwidGhlbiIsInJlc3BvbnNlIiwiZGF0YSIsInVzZUVmZmVjdCIsImxvZ2luIiwidG9Mb3dlckNhc2UiLCJ0b1N0cmluZyIsImVycm9yIiwibWV0aG9kIiwidXJsIiwibXNnIiwiY29va2llIiwic2F2ZSIsInBhdGgiLCJSb3V0ZXIiLCJwdXNoIiwiY2F0Y2giLCJjb25zb2xlIiwibG9nIiwic2lnblVwIiwic3VjY2VzcyIsImFsZXJ0IiwicGFkZGluZ1RvcCIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsIndpZHRoIiwia2V5IiwiZXZlbnQiLCJtYXJnaW4iLCJlIiwidmFsdWUiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixF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eUM7Ozs7Ozs7Ozs7O0FDQUEsMkM7Ozs7Ozs7Ozs7O0FDQUEsNkM7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsMEM7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsMEMiLCJmaWxlIjoic3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXHRlYWNoZXJcXGxvZ2luLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi8uLi8uLi8uLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDYpO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuZXhwb3J0IGNvbnN0IFVwbG9hZFN2ZyA9ICgpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPHN2ZyB0PVwiMTU5MDc0MTY5MjAwNFwiXHJcbiAgICAgICAgICAgICBjbGFzcz1cImljb25cIlxyXG4gICAgICAgICAgICAgdmlld0JveD1cIjAgMCAxMDI0IDEwMjRcIlxyXG4gICAgICAgICAgICAgdmVyc2lvbj1cIjEuMVwiXHJcbiAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgICAgIHAtaWQ9XCIxMzAxXCJcclxuICAgICAgICAgICAgIHdpZHRoPVwiMjRcIlxyXG4gICAgICAgICAgICAgaGVpZ2h0PVwiMjRcIj5cclxuICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgIGQ9XCJNOTUyIDM1OS4xTDY3Ni45IDg1LjNjLTUuMS01LjEtMTIuMS04LTE5LjUtOEgzNTkuN2MtNjYuNyAwLTEyMC45IDU0LTEyMC45IDEyMC43djI4OC41TDI1OSA0NjdsMS40LTEuMiAyLTEuMmM5LTcuNCAyMC4xLTEyLjMgMzEuNy0xNC40VjE5Ny45YzAtMzYuMiAyOS40LTY1LjYgNjUuNi02NS42SDYyMnYxNTZjMCA2Ni43IDU0LjIgMTIxIDEyMC45IDEyMUg5MDVWODI2YzAgMzYuMi0yOS40IDY1LjctNjUuOCA2NS43SDQ5MC40djMzLjdjMCA3LjUtMS43IDE0LjYtNC4zIDIxLjRoMzUzYzY2LjcgMCAxMjAuOS01NC40IDEyMC45LTEyMC45VjM3OC42YzAtNy40LTIuOS0xNC40LTgtMTkuNXpNNzQyLjkgMzU0Yy0zNi4zIDAtNjUuNy0yOS41LTY1LjctNjUuN3YtMTI1TDg2OC43IDM1NEg3NDIuOXpcIlxyXG4gICAgICAgICAgICAgICAgcC1pZD1cIjEzMDJcIlxyXG4gICAgICAgICAgICAgICAgZmlsbD1cIiM3MDcwNzBcIj5cclxuICAgICAgICAgICAgPC9wYXRoPlxyXG4gICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgZD1cIk01MjkuMSAyNjQuOUgzOTguOWMtMTIuMiAwLTIyLjEgMTAtMjIuMSAyMi4yIDAuMSAxMiA5LjggMjIgMjIuMSAyMmgxMzAuMmMxMi4xIDAgMjIuMS05LjkgMjIuMS0yMi4xcy0xMC0yMi4xLTIyLjEtMjIuMXpNMzk5IDM1Ni42Yy0xMi4yIDAtMjIuMSA5LjktMjIuMSAyMi4xIDAgMTIuNCA5LjkgMjIuMiAyMi4xIDIyLjJoMTMwLjJjMTIuMiAwLjEgMjIuMS05LjggMjIuMS0yMi4yIDAtMTIuMS0xMC0yMi4xLTIyLjEtMjIuMUgzOTl6TTYwOCA3MDguM2gxOTEuNmMxMi4xIDAgMjIuMS05LjkgMjIuMS0yMi4xIDAtMTIuMi0xMC0yMi4yLTIyLjEtMjIuMkg2MDhjLTEyLjIgMC0yMi4xIDEwLTIyLjEgMjIuMnM5LjggMjIuMSAyMi4xIDIyLjF6TTc5OS42IDc1Nkg2MDkuNGMtMTIuMiAwLTIyLjEgMTAtMjIuMSAyMi4yczkuOSAyMiAyMi4xIDIyaDE5MC4xYzEyLjEgMCAyMi4xLTkuNyAyMi4xLTIyIDAuMS0xMi4yLTkuOS0yMi4yLTIyLTIyLjJ6TTc5OS42IDYxNi41YzEyLjEgMCAyMi4xLTkuOSAyMi4xLTIyLjEgMC0xMi4yLTEwLTIyLjItMjIuMS0yMi4ySDYwOGMtMTIuMiAwLTIyLjEgMTAtMjIuMSAyMi4yczkuOCAyMi4xIDIyLjEgMjIuMWgxOTEuNnpNNTUwLjIgNzIxLjZjMC01LjgtMi43LTExLjEtNy41LTE0LjlMMzI2LjUgNDk5LjFjLTQuOC00LjUtMTEuNi03LjUtMTkuNC03LjUtNi45IDAtMTMuMyAyLjMtMTcuNyA1LjloLTAuNmwtMjE3IDIwOWMtMC4xIDAuMS0wLjQgMC4yLTAuNSAwLjRsLTAuNCAwLjRjLTQuMyAzLjgtNi45IDguOS02LjkgMTQuNCAwIDExLjUgMTEuNiAyMS4yIDI1LjggMjEuMmg3Ni44djE4Mi41YzAgMTEuMiAxMS4yIDIwLjQgMjUgMjAuNGgyMzEuMmMxMy44IDAgMjUtOS4yIDI1LTIwLjRWNzQyLjhoNzYuNmMxNC4xIDAgMjUuOC05LjUgMjUuOC0yMS4yelwiXHJcbiAgICAgICAgICAgICAgICBwLWlkPVwiMTMwM1wiIGZpbGw9XCIjNzA3MDcwXCI+XHJcbiAgICAgICAgICAgIDwvcGF0aD5cclxuICAgICAgICA8L3N2Zz5cclxuICAgIClcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBDaGFuZ2VTdmcgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxzdmdcclxuICAgICAgICAgICAgdD1cIjE1OTA3NTI4OTYxMzdcIlxyXG4gICAgICAgICAgICBjbGFzcz1cImljb25cIlxyXG4gICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDEwMjQgMTAyNFwiXHJcbiAgICAgICAgICAgIHZlcnNpb249XCIxLjFcIlxyXG4gICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgICAgcC1pZD1cIjI1MzlcIlxyXG4gICAgICAgICAgICB3aWR0aD1cIjI0XCJcclxuICAgICAgICAgICAgaGVpZ2h0PVwiMjRcIj5cclxuICAgICAgICAgICAgPCBwYXRoXHJcbiAgICAgICAgICAgICAgICBkPVwiTTUxNCAxMTQuM2MtMjE5LjkgMC0zOTguOSAxNzguOS0zOTguOSAzOTguOCAwLjEgMjIwIDE3OSAzOTguOSAzOTguOSAzOTguOSAyMTkuOSAwIDM5OC44LTE3OC45IDM5OC44LTM5OC44UzczMy45IDExNC4zIDUxNCAxMTQuM3ogbTIxOC4zIDQ4OXYxLjdjMCAwLjUtMC4xIDEtMC4xIDEuNiAwIDAuMyAwIDAuNi0wLjEgMC45IDAgMC41LTAuMSAxLTAuMiAxLjUgMCAwLjMtMC4xIDAuNy0wLjEgMS0wLjEgMC40LTAuMSAwLjgtMC4yIDEuMi0wLjEgMC40LTAuMiAwLjktMC4yIDEuMy0wLjEgMC4zLTAuMSAwLjYtMC4yIDAuOC0wLjEgMC42LTAuMyAxLjItMC40IDEuOCAwIDAuMS0wLjEgMC4yLTAuMSAwLjMtMi4yIDguNS02LjYgMTYuNi0xMy4zIDIzLjNMNjAwLjcgNzU1LjRjLTIwIDIwLTUyLjcgMjAtNzIuNiAwLTIwLTIwLTIwLTUyLjcgMC03Mi42bDI4LjktMjguOUgzNDdjLTI4LjMgMC01MS40LTIzLjEtNTEuNC01MS40IDAtMjguMyAyMy4xLTUxLjQgNTEuNC01MS40aDMzNGMxMy4yIDAgMjYuNCA1IDM2LjQgMTVzMTUgMjMuMiAxNSAzNi40YzAgMC4zLTAuMSAwLjYtMC4xIDAuOHogbTAuMS0xNzkuNWMwIDI4LjMtMjMuMSA1MS40LTUxLjQgNTEuNEgzNDdjLTEzLjIgMC0yNi40LTUtMzYuNC0xNXMtMTUtMjMuMi0xNS0zNi40di0wLjgtMS42YzAtMC41IDAuMS0xLjEgMC4xLTEuNiAwLTAuMyAwLTAuNiAwLjEtMC45IDAtMC41IDAuMS0xIDAuMi0xLjUgMC0wLjMgMC4xLTAuNyAwLjEtMSAwLjEtMC40IDAuMS0wLjggMC4yLTEuMiAwLjEtMC40IDAuMi0wLjkgMC4yLTEuMyAwLjEtMC4zIDAuMS0wLjYgMC4yLTAuOCAwLjEtMC42IDAuMy0xLjIgMC40LTEuOCAwLTAuMSAwLjEtMC4yIDAuMS0wLjMgMi4yLTguNSA2LjYtMTYuNiAxMy4zLTIzLjNsMTE2LjYtMTE2LjZjMjAtMjAgNTIuNy0yMCA3Mi42IDAgMjAgMjAgMjAgNTIuNyAwIDcyLjZMNDcxIDM3Mi41aDIxMGMyOC4yIDAgNTEuNCAyMy4xIDUxLjQgNTEuM3pcIlxyXG4gICAgICAgICAgICAgICAgcC1pZD1cIjI1NDBcIlxyXG4gICAgICAgICAgICAgICAgZmlsbD1cIiM3MDcwNzBcIj5cclxuICAgICAgICAgICAgPC9wYXRoPlxyXG4gICAgICAgIDwvc3ZnPlxyXG4gICAgKVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IFNjb3JlU3ZnID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8IHN2Z1xyXG4gICAgICAgICAgICB0PVwiMTU5MDc1MzYwODU3MVwiXHJcbiAgICAgICAgICAgIGNsYXNzXHJcbiAgICAgICAgICAgICAgICA9XCJpY29uXCJcclxuICAgICAgICAgICAgdmlld0JveD1cIjAgMCAxMDI0IDEwMjRcIlxyXG4gICAgICAgICAgICB2ZXJzaW9uPVwiMS4xXCJcclxuICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgICAgIHAtaWQ9XCI0NzgyXCJcclxuICAgICAgICAgICAgd2lkdGg9XCIyNFwiXHJcbiAgICAgICAgICAgIGhlaWdodD1cIjI0XCI+XHJcbiAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICBkPVwiTTkwOC45OTIgMTk1LjU4NGMtMTEuNTItMTIuMDk2LTI0Ljc2OC0xOC40MzItMzkuODcyLTE5LjA3MmgtMTAuODhjLTM4LjA4IDYuMDgtNzEuMzYgMTEuOTY4LTk5Ljc3NiAxNy42NjQtMjguNDE2IDUuNzYtNTEuMzkyIDExLjY0OC02OC45MjggMTcuNjY0LTE0LjUyOCAyLjQzMi0zNC42MjQgOS41MzYtNjAuMjg4IDIxLjMxMi0yNS43MjggMTEuNzc2LTU1Ljc0NCAyNy42NDgtOTAuMjQgNDcuNjE2LTE3LjUzNiA2LjA4LTM1LjA3MiA2LjA4LTUyLjYwOCAwLTM1LjA3Mi0xNi44OTYtNjUuMDI0LTMxLjQyNC04OS43OTItNDMuNTJsLTU1LjI5Ni0yNS40MDhjLTE5Ljk2OC02LjAxNi00My44NC0xMS45MDQtNzEuNjE2LTE3LjY2NC0yNy44NC01Ljc2LTYxLjk1Mi0xMS42NDgtMTAyLjQ2NC0xNy42NjRoLTExLjc3NmMtMTcuNTM2IDAuNjQtMzEuNDI0IDYuOTc2LTQxLjcyOCAxOS4wNzItMTAuMzA0IDEyLjA5Ni0xNS43NDQgMjcuMi0xNi4zMiA0NS4zMTJ2NDQwLjcwNGMwLjU3NiAxNS4xMDQgNS43NiAyOC43MzYgMTUuNDI0IDQwLjgzMiA5LjY2NCAxMi4wOTYgMjIuMDggMTkuNjQ4IDM3LjE4NCAyMi42NTYgNDAuNTEyIDYuMDE2IDc2LjQ4IDEyLjg2NCAxMDcuOTA0IDIwLjQxNiAzMS40MjQgNy41NTIgNTcuNDA4IDE0LjMzNiA3OC4wMTYgMjAuNDE2bDU5Ljg0IDIzLjU1MmMyNS40MDggOS42NjQgNTUuNjE2IDIzLjI5NiA5MC42ODggNDAuODMyIDE3LjUzNiA1LjQ0IDM1LjA3MiA1LjQ0IDUyLjYwOCAwIDM0LjQzMi0xNy41MzYgNjQuNTEyLTMxLjg3MiA5MC4yNC00My4wNzIgMjUuNjY0LTExLjIgNDUuODI0LTE4LjMwNCA2MC4yODgtMjEuMzEyIDIwLjU0NC01LjQ0IDQ2LjUyOC0xMS41MiA3OC4wMTYtMTguMTEybDEwNy45MDQtMjIuNjU2YzE0LjUyOC0zLjAwOCAyNi43NTItOS45ODQgMzYuNzM2LTIwLjg2NCA5Ljk4NC0xMC44OCAxNC45NzYtMjUuMDg4IDE0Ljk3Ni00Mi42MjRWMjQwLjg5NmMtMC43MDQtMTguMTEyLTYuNzItMzMuMjE2LTE4LjI0LTQ1LjMxMnogbS0yOTcuNjY0IDUzMS41ODRsLTI1LjYtNzQuNzUySDQzOC44NDhsLTI1LjYgNzQuNzUyaC02MC4wOTZMNDg5LjYgMzU0Ljk0NGg0NS41MDRsMTM2LjQ0OCAzNzIuMjI0aC02MC4yMjR6XCJcclxuICAgICAgICAgICAgICAgIHAtaWQ9XCI0NzgzXCJcclxuICAgICAgICAgICAgICAgIGZpbGw9XCIjNzA3MDcwXCI+XHJcbiAgICAgICAgICAgIDwvcGF0aD5cclxuICAgICAgICAgICAgPHBhdGggZD1cIk00NTUuNTUyIDYwNC4yODhoMTE0LjQ5NmwtNTYuNDQ4LTE2NS4xODR6XCIgcC1pZD1cIjQ3ODRcIiBmaWxsPVwiIzcwNzA3MFwiPlxyXG4gICAgICAgICAgICA8L3BhdGg+XHJcbiAgICAgICAgPC9zdmc+XHJcbiAgICApXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgQmFja1N2ZyA9ICgpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPCBzdmdcclxuICAgICAgICAgICAgdD1cIjE1OTA3NTY1OTMwNTNcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJpY29uXCJcclxuICAgICAgICAgICAgdmlld0JveD1cIjAgMCAxMDI0IDEwMjRcIlxyXG4gICAgICAgICAgICB2ZXJzaW9uPVwiMS4xXCJcclxuICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgICAgIHAtaWQ9XCI1NTkyXCJcclxuICAgICAgICAgICAgd2lkdGg9XCIyNFwiXHJcbiAgICAgICAgICAgIGhlaWdodD1cIjI0XCI+XHJcbiAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICBkPVwiTTUzOC42MjI4NDYgOTUwLjI5MTI1NWMyNTcuNTM0NDQ4LTE3MS42NTg1OTEgMzA4LjczODY0My00NjIuMTE5OTYzLTc1LjUwNDY0OC00NTMuMDI3ODg3bDAgMjI1LjUxNDE3M0wxMjEuODkzNjc2IDM4MS41Mjk0ODMgNDYzLjExODE5OCA0MC4yODE0MjVsMCAyMjAuNzAxNTY0YzIxOC4yNTk5NTYtNS42NzMyMSA0NzAuMDI3MDUgOTYuMjcwNjAxIDQ3MC4wMjcwNSAyODAuNjk1OTZDOTMzLjE0NjI3MSA4MTMuMTE5MTA1IDc2OC4zMzc2OTEgODc0Ljc2MjA0NyA1MzguNjIyODQ2IDk1MC4yOTEyNTVcIlxyXG4gICAgICAgICAgICAgICAgcC1pZD1cIjU1OTNcIlxyXG4gICAgICAgICAgICAgICAgZmlsbD1cIiM3MDcwNzBcIj5cclxuICAgICAgICAgICAgPC9wYXRoPlxyXG4gICAgICAgIDwvc3ZnPlxyXG4gICAgKVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IFBhc3N3b3JkU3ZnID0gKCk9PntcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPHN2ZyB0PVwiMTU5MDkxNTI5MjEzNlwiIGNsYXNzTmFtZT1cImljb25cIiB2aWV3Qm94PVwiMCAwIDEwMjQgMTAyNFwiIHZlcnNpb249XCIxLjFcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgICAgIHAtaWQ9XCIzMjUwXCIgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCI+XHJcbiAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICBkPVwiTTUxMiA2MjMuMTA0Yy00MC40NDggMC03NC4yNCAzMy4yOC03NC4yNCA3NC4yNFM0NzEuMDQgNzcxLjU4NCA1MTIgNzcxLjU4NHM3NC4yNC0zMy4yOCA3NC4yNC03NC4yNGMwLTcuMTY4IDAtMTQuMzM2LTMuNTg0LTIyLjAxNi03LjE2OCAxNC44NDgtMTguOTQ0IDIyLjAxNi0zMy4yOCAyMi4wMTYtMjIuMDE2IDAtMzYuODY0LTE0Ljg0OC0zNi44NjQtMzYuODY0IDAtMTQuODQ4IDcuMTY4LTI2LjExMiAyMi4wMTYtMzMuMjgtOC4xOTItNC42MDgtMTUuMzYtNC4wOTYtMjIuNTI4LTQuMDk2eiBtMC0zNy4zNzZjNjEuOTUyIDAgMTExLjEwNCA0OS4xNTIgMTExLjEwNCAxMTEuMTA0cy00OS4xNTIgMTExLjEwNC0xMTEuMTA0IDExMS4xMDQtMTExLjEwNC00OS4xNTItMTExLjEwNC0xMTEuMTA0IDQ5LjE1Mi0xMTEuMTA0IDExMS4xMDQtMTExLjEwNHogbTAtNzMuNzI4Yy0xMDEuODg4IDAtMTg0LjgzMiA4My40NTYtMTg0LjgzMiAxODQuODMyczgzLjQ1NiAxODQuODMyIDE4NC44MzIgMTg0LjgzMiAxODQuODMyLTgzLjQ1NiAxODQuODMyLTE4NC44MzItODIuOTQ0LTE4NC44MzItMTg0LjgzMi0xODQuODMyeiBtLTI5NS45MzYtMzYuODY0aDU5MS44NzJ2NDQzLjkwNGgtNTkxLjg3MnYtNDQzLjkwNHogbTI5NS45MzYtMzcwLjE3NmMxMDEuODg4IDAgMTg0LjgzMiA4Mi45NDQgMTg0LjgzMiAxODQuODMydjExMS4xMDRoLTM3MC4xNzZ2LTExMS4xMDRjMC41MTItMTAxLjg4OCA4My40NTYtMTg0LjgzMiAxODUuMzQ0LTE4NC44MzJ6IG0wLTc0LjI0Yy0xNDIuMzM2IDAtMjU5LjA3MiAxMTYuNzM2LTI1OS4wNzIgMjU5LjA3MnYxMTEuMTA0aC0xMTAuNTkyVjk5Mi43NjhIODgxLjY2NFY0MDAuODk2aC0xMTEuMTA0di0xMTEuMTA0YzAuNTEyLTE0Mi4zMzYtMTE2LjIyNC0yNTkuMDcyLTI1OC41Ni0yNTkuMDcyelwiXHJcbiAgICAgICAgICAgICAgICBwLWlkPVwiMzI1MVwiIGZpbGw9XCIjNzA3MDcwXCI+PC9wYXRoPlxyXG4gICAgICAgIDwvc3ZnPlxyXG4gICAgKVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IFVzZXJTdmcgPSAoKT0+e1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8c3ZnIHQ9XCIxNTkwOTE1NTIzMDcxXCIgY2xhc3NOYW1lPVwiaWNvblwiIHZpZXdCb3g9XCIwIDAgMTAyNCAxMDI0XCIgdmVyc2lvbj1cIjEuMVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICAgICAgcC1pZD1cIjQxMTdcIiB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIj5cclxuICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgIGQ9XCJNODExLjczOSA5NjYuNTk3Yy0wLjA0OCAwLTAuMDk1IDAtMC4xNDMgMGwtNzE4Ljg1NiAwYy0xMC4zMjYgMC0xOC42OTctOC4zNzEtMTguNjk3LTE4LjY5N2wwLTIyLjQ2OGMtMC4zMTgtNi4yNjctMC45MTEtNDAuNjA0IDIxLjAwNC03OC4zMDcgMTMuNzE2LTIzLjU5OCAzMy40MzEtNDMuODYxIDU4LjU5OC02MC4yMjUgMzAuNDkzLTE5LjgyOSA2OS4xMTYtMzMuOTA5IDExNC43OTYtNDEuODQ5IDAuMjMzLTAuMDQgMC40NjctMC4wNzYgMC43MDEtMC4xMDcgMC4zNDctMC4wNDcgMzUuNDk5LTQuODU5IDcxLjIwOS0xNC4yNzMgNjEuODk1LTE2LjMxOCA2Ny4zMDgtMzAuNzQzIDY3LjM0Ni0zMC44ODQgMC4zNjQtMS40MzEgMC44OTQtMi44MDQgMS41NzMtNC4wOTUgMC41MDgtMi42OTkgMS43NjQtMTIuODU5LTAuNjM4LTQwLjA4LTYuMTAxLTY5LjEzNi00Mi4xMi0xMDkuOTk1LTcxLjA2MS0xNDIuODI2LTkuMTI4LTEwLjM1NS0xNy43NDktMjAuMTMzLTI0LjM4Ny0yOS43MjMtMjguNjQtNDEuMzcyLTMxLjI5Ny04OC40MTYtMzEuMzk2LTkwLjM5OS0wLjAxNS0wLjMxMS0wLjAyMy0wLjYyMi0wLjAyMy0wLjkzMyAwLTE4Ljc4IDkuMzYzLTI3LjQxOCAxNy42MjQtMzUuMDQxbDAuNDM0LTAuNDAxYzAuMjcxLTAuMjUxIDAuNDQyLTAuNDM3IDAuNTQyLTAuNTU3IDAuMDkzLTEuMzQxLTAuNTY3LTQuNzQzLTEuMDEzLTcuMDQxLTAuMTctMC44NzQtMC4zNC0xLjc1MS0wLjUwMS0yLjYzMy03LjE4LTM4Ljk4Mi03LjY3MS05OS4xOTItMS4xNzYtMTM3LjgzNyAyLjQxLTUwLjgxMyA0Ni4yMjUtODkuNzExIDQ4LjEwNS05MS4zNTYgMC4wNzItMC4wNjIgMC4xNDMtMC4xMjQgMC4yMTUtMC4xODUgNi4yOS01LjMzOSAxMi42NzItMTEuMTY5IDE2LjcyOC0xNy42MzcgMC40ODctMC43NzYgMC44MjgtMS4zNzcgMS4wNjYtMS44MzctMC4zMDUtMC43ODctMC43NDItMS43OTQtMS4wOTUtMi42MDgtMi40MzYtNS42MTktNi4xMTgtMTQuMTA5LTQuMDI0LTI1LjAyNCAxLjI2NC02LjU4OSA2LjA3OC0xOC4zNjIgMjQuMTE4LTIzLjE3NCA3LjI2MS0xLjkzNyAxNS4wMjItMi4zMzMgMjAuNjg5LTIuNjIybDEuMTIzLTAuMDU4YzIyLjM5LTEuMTc5IDQ2LjI3My0yLjE3NyA3MC40MzUtMC4zMjQgMTc0LjczIDEzLjM5NiAyMzQuOTIgNzguNjg2IDIzNy4zOTYgODEuNDU5IDAuMTQgMC4xNTYgMC4yNzYgMC4zMTQgMC40MDkgMC40NzUgMTMuOTg3IDE2Ljc1NyAyNC4zNDcgMzcuNjM1IDMwLjc5NiA2Mi4wNTUgMi4wMTUgNy42MiAzLjMwOSAxNC4wMTYgNC4wNjMgMjAuMDcyIDYuMTAzIDM1LjQ2NSA1LjA4NSA3MS45MDQgMy43ODIgOTYuMjY5LTAuNzMzIDEzLjY3NS0yLjI1NyAyOC4wMy00LjggNDUuMTc2LTAuNjkyIDQuNjU2IDAuMDY5IDUuNTY1IDAuMzU1IDUuOTA2IDAuNzU4IDAuOTA3IDEuNjg2IDEuODkyIDIuNjY4IDIuOTM1IDMuODYzIDQuMDk5IDkuMTUyIDkuNzEzIDExLjk2NCAxOC43MjEgMS40MSA0LjUwMyAyLjA2OSA5LjM2IDIuMDY5IDE1LjI2OCAwIDAuMzExLTAuMDA4IDAuNjIyLTAuMDIzIDAuOTMzLTAuMDk5IDEuOTgyLTIuNzU2IDQ5LjAyNi0zMS4zOTUgOTAuMzk4LTYuNjM5IDkuNTktMTUuMjYgMTkuMzY5LTI0LjM4NyAyOS43MjMtMjguOTQyIDMyLjgzLTY0Ljk2IDczLjY4OS03MS4wNjEgMTQyLjgyOC0yLjQwMiAyNy4yMjEtMS4xNDUgMzcuMzc5LTAuNjM4IDQwLjA4IDAuNjc4IDEuMjkxIDEuMjA4IDIuNjY1IDEuNTczIDQuMDk0IDAuMDM3IDAuMTQxIDUuNDcyIDE0LjYxNCA2Ny42NDkgMzAuOTY0IDM1LjcwNSA5LjM4OSA3MC41NTggMTQuMTQ2IDcwLjkwNiAxNC4xOTMgMC4zMDQgMC4wNDEgMC42MDcgMC4wOSAwLjkwOSAwLjE0NSA0Ni4wOTYgOC41NSA4NC45NTcgMjIuOTkyIDExNS41MDUgNDIuOTIzIDI1LjI1MiAxNi40NzYgNDQuOTMgMzYuNzAyIDU4LjQ4OSA2MC4xMTQgMjEuNTAyIDM3LjEyOSAyMC42MjcgNzAuNzE0IDIwLjE5NiA3Ny40NDRsMCAyMi4zMzNjMCAxMC4zMjYtOC4zNzEgMTguNjk3LTE4LjY5NyAxOC42OTdsLTE3Ni44ODMgMGMtMTAuMzI2IDAtMTguNjk3LTguMzcxLTE4LjY5Ny0xOC42OTcgMC0xMC4zMjYgOC4zNzEtMTguNjk3IDE4LjY5Ny0xOC42OTdMOTM0LjA3IDkyOS4yMDdsMC00LjMxMWMwLTAuNjg3IDAuMDA5LTEuMTA2IDAuMDgyLTEuNzY5IDAuMTA0LTEuNTA4IDEuNjI3LTI4LjMzMi0xNi4zNDktNTguMTMxLTEwLjgyLTE3LjkzOC0yNi41OS0zMy42MDktNDYuODctNDYuNTgxLTI2LjEtMTYuNjkzLTU5Ljc2Mi0yOC45NjgtMTAwLjA1Mi0zNi40ODMtNC42NC0wLjY0My0zOS4wMTItNS41NjUtNzUuMDgxLTE1LjA2LTcwLjc2MS0xOC42MjktODcuOTY0LTM5LjM1My05My4xODktNTQuMzk2LTQuMDA0LTcuNzY2LTYuMjQ1LTIzLjE5NS0yLjk4NS02MC4xNTMgNy4xODEtODEuMzY5IDQ5LjQxOS0xMjkuMjgyIDgwLjI2MS0xNjQuMjY4IDguNzQ3LTkuOTIyIDE2LjMwMS0xOC40OTEgMjEuNjkzLTI2LjI3OSAyMS4xMi0zMC41MTEgMjQuNDM4LTY2LjMgMjQuNzY1LTcwLjYwNi0wLjAzMy0yLjI1Mi0wLjI2MS0zLjIyMy0wLjM2Mi0zLjU1LTAuMjQ5LTAuNzk4LTEuODk3LTIuNTQ3LTMuNDktNC4yMzgtMS4yNS0xLjMyNy0yLjY2OC0yLjgzMy00LjEzNi00LjU4Ny03Ljk1LTkuNTA0LTEwLjc4My0yMS4wNzktOC42Ni0zNS4zODUgMi4zNjgtMTUuOTYgMy43ODEtMjkuMjA2IDQuNDQ5LTQxLjY4NCAxLjk1MS0zNi41MDIgMC45MTQtNjMuNzQ4LTMuMzY0LTg4LjM0MS0wLjA1Ny0wLjMyNi0wLjEwNS0wLjY1NS0wLjE0NS0wLjk4My0wLjUzMS00LjQzOC0xLjUzMS05LjM1NC0zLjE0OC0xNS40NjktNC45ODctMTguODg0LTEyLjcyNy0zNC43NzEtMjMuMDA3LTQ3LjIzMy0xLjcxNC0xLjc0OC0xNS4zODUtMTUuMTI1LTQ1Ljg4My0yOS42NzZDNTgzLjcxNSA5My44NCA1MTcuODA3IDg0LjE3NCA0NzIuMTgxIDgwLjY3NWMtMjEuOTM1LTEuNjgxLTQ0LjQ0Mi0wLjczMy02NS42MTQgMC4zODNsLTEuMTc5IDAuMDZjLTEuNzY2IDAuMDktNC43MzYgMC4yNDItNy41NTggMC41MjYgMi40NDggNS44NDEgNS40NTMgMTQuNjMyIDIuMjk2IDI1LjEzNi0xLjE4NSAzLjk0LTMuMDAzIDcuNzkyLTUuNzIzIDEyLjEyOS02LjczMiAxMC43MzMtMTUuOTI0IDE5LjIzNi0yNC4wNTUgMjYuMTQ1LTEuNTk3IDEuNDQyLTM0LjIyMyAzMS4zNTYtMzUuMzUxIDY1LjczOC0wLjAyOSAwLjg3LTAuMTE4IDEuNzM3LTAuMjY3IDIuNTk0LTUuOTcyIDM0LjMwNC01LjU2OSA5MC43OCAwLjg5OCAxMjUuODk0IDAuMTQgMC43NjUgMC4yODkgMS41MjYgMC40MzYgMi4yODMgMS45OCAxMC4yMDUgNS4yOTUgMjcuMjg0LTEwLjg4IDQyLjIwMmwtMC40MzUgMC40MDJjLTIuMDg3IDEuOTI1LTQuOTQ0IDQuNTYxLTUuNDE2IDUuNDY5bDAgMGMwLjAwMyAwLTAuMTMzIDAuNDI3LTAuMTY1IDEuNTg0IDAuMzI4IDQuMjk2IDMuNjU0IDQwLjA2IDI0Ljc2NCA3MC41NTUgNS4zOTIgNy43ODggMTIuOTQ2IDE2LjM1NyAyMS42OTMgMjYuMjc5IDMwLjg0MSAzNC45ODUgNzMuMDc5IDgyLjg5OSA4MC4yNiAxNjQuMjY2IDMuMjYgMzYuOTU5IDEuMDE5IDUyLjM4OC0yLjk4NSA2MC4xNTQtNS4yMjYgMTUuMDQzLTIyLjQyOCAzNS43NjctOTMuMTg5IDU0LjM5Ni0zNi4zNjUgOS41NzQtNzEuMDA2IDE0LjQ5Ny03NS4xODkgMTUuMDc0LTM5LjgzNCA2Ljk1OC03My4xOTYgMTguODgzLTk5LjE2IDM1LjQ0NS0yMC4xODYgMTIuODc2LTM1Ljk3MSAyOC41OTktNDYuOTE5IDQ2LjczMi0xOC4yODIgMzAuMjgyLTE3LjEzMyA1Ny44NjEtMTcuMDU1IDU5LjMzNiAwLjA1IDAuNTQzIDAuMDU0IDAuODY4IDAuMDU0IDEuNDM0bDAgNC4zMDkgNzAwLjA3NyAwTTYzMS40NjUgNjg5Ljg3NGMwLjQ1NCAwLjM2OCAwLjg5IDAuNzU3IDEuMzA2IDEuMTY1QzYzMi4zNzcgNjkwLjY1MiA2MzEuOTQyIDY5MC4yNjEgNjMxLjQ2NSA2ODkuODc0ek00MTQuMDQxIDY4OS44NzRjLTAuNDcyIDAuMzgzLTAuOTAyIDAuNzY4LTEuMjkyIDEuMTUyQzQxMy4xNiA2OTAuNjI1IDQxMy41OTIgNjkwLjI0IDQxNC4wNDEgNjg5Ljg3NHpcIlxyXG4gICAgICAgICAgICAgICAgcC1pZD1cIjQxMThcIiBmaWxsPVwiIzcwNzA3MFwiPjwvcGF0aD5cclxuICAgICAgICA8L3N2Zz5cclxuICAgIClcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBFbWFpbFN2ZyA9ICgpPT57XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxzdmcgdD1cIjE1OTA5MTY4ODAzMTNcIiBjbGFzc05hbWU9XCJpY29uXCIgdmlld0JveD1cIjAgMCAxMDI0IDEwMjRcIiB2ZXJzaW9uPVwiMS4xXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgICAgICBwLWlkPVwiNDM5NVwiIHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIyNFwiPlxyXG4gICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgZD1cIk04NS4zMzMzMzMgMTcwLjY2NjY2N3Y2ODIuNjY2NjY2aDg1My4zMzMzMzRWMTcwLjY2NjY2N0g4NS4zMzMzMzN6IG02OTguNDUzMzM0IDg1LjMzMzMzM0w1MTIgNDk3LjU3ODY2NyAyNDAuMjEzMzMzIDI1Nmg1NDMuNTczMzM0ek0xNzAuNjY2NjY3IDc2OFYzMDguMzUybDM0MS4zMzMzMzMgMzAzLjQwMjY2NyAzNDEuMzMzMzMzLTMwMy40MDI2NjdWNzY4SDE3MC42NjY2Njd6XCJcclxuICAgICAgICAgICAgICAgIHAtaWQ9XCI0Mzk2XCIgZmlsbD1cIiM3MDcwNzBcIj48L3BhdGg+XHJcbiAgICAgICAgPC9zdmc+XHJcbiAgICApXHJcbn07XHJcbmV4cG9ydCBjb25zdCBOYW1lU3ZnID0gKCk9PntcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPHN2ZyB0PVwiMTU5MDkxNzY1MDU4OFwiIGNsYXNzTmFtZT1cImljb25cIiB2aWV3Qm94PVwiMCAwIDEwMjQgMTAyNFwiIHZlcnNpb249XCIxLjFcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgICAgIHAtaWQ9XCI1NDY3XCIgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCI+XHJcbiAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICBkPVwiTTc5OC41OTIgNjgyLjY2NjY2N2wtNDUuNzgxMzMzLTExMy4zMjI2NjdMNzA3LjAyOTMzMyA2ODIuNjY2NjY3aDkxLjU2MjY2N3ogbTM0LjQ3NDY2NyA4NS4zMzMzMzNoLTE2MC41MTJsLTIxLjk3MzMzNCA1NC40YTQyLjY2NjY2NyA0Mi42NjY2NjcgMCAxIDEtNzkuMTQ2NjY2LTMybDEzOS4wOTMzMzMtMzQ0LjE5MmE0Mi42MjQgNDIuNjI0IDAgMCAxIDI5LjU2OC0yNS40NzIgNDIuNjY2NjY3IDQyLjY2NjY2NyAwIDAgMSA1NC40IDIzLjk3ODY2N2wxMzkuNjA1MzMzIDM0NS41MTQ2NjZhNDIuNjY2NjY3IDQyLjY2NjY2NyAwIDAgMS03OS4xMDQgMzJMODMzLjA2NjY2NyA3Njh6TTEyOCAxNzAuNjY2NjY3aDc2OHY4NS4zMzMzMzNIMTI4VjE3MC42NjY2Njd6IG0wIDIxMy4zMzMzMzNoNDY5LjMzMzMzM3Y4NS4zMzMzMzNIMTI4VjM4NHogbTAgMTcwLjY2NjY2N2gzNDEuMzMzMzMzdjg1LjMzMzMzM0gxMjh2LTg1LjMzMzMzM3ogbTAgMTcwLjY2NjY2NmgyNTZ2ODUuMzMzMzM0SDEyOHYtODUuMzMzMzM0elwiXHJcbiAgICAgICAgICAgICAgICBwLWlkPVwiNTQ2OFwiIGZpbGw9XCIjNzA3MDcwXCI+PC9wYXRoPlxyXG4gICAgICAgIDwvc3ZnPlxyXG4gICAgKVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IENvbGxlZ2VTdmcgPSAoKT0+e1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8c3ZnIHQ9XCIxNTkwOTIzOTAyNTM3XCIgY2xhc3NOYW1lPVwiaWNvblwiIHZpZXdCb3g9XCIwIDAgMTAyNCAxMDI0XCIgdmVyc2lvbj1cIjEuMVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICAgICAgcC1pZD1cIjYzNjFcIiB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIj5cclxuICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgIGQ9XCJNOTA4LjMwMzk3OCAzNzQuNjcwMjYyIDUxMC45Nzg3NCAxODIuNDEzNTQgMTEzLjY0OTQxIDM3NC42NzAyNjJsNTUuNTU1Mjk0IDI0LjgyMDI5Mi0wLjAyOTY3NiAwYy0xLjk5MjM3NyAwLTUuMDU2MTU2IDI5OS4zMDc4NTMtNC4yNTc5NzcgMzQ2Ljg4OTU0NSAwLjM1NTA4NyAyMC45NzQ3MDcgMTYuMjQ5MDc5IDMwLjkyODQwNyAzMS45MjgxNzcgMzAuOTI4NDA3IDE2LjEyMjE4OSAwIDMyLjAxNjE4MS0xMC40OTUwMjggMzAuNjE4MzQ1LTMwLjM3NDc5OGwxLjU0MTA5OS0zMjAuOTk1ODA1IDYxLjIzNDY0MyAyNy44NDAwNjhMMjkwLjIzOTMxNCA3MzIuMTA3MDIzbDAgMTEuMTY4MzY0IDcuNjE4NTE1IDguMjE0MDc5YzcuOTMzNjkzIDguNTAzNjc1IDExNC43Mjg5OTggODcuMTI3MzYgMjI2LjIzNjYyOCA4NS45OTE0OSAxMDcuNTg4MzY3LTEuMDgzNjgxIDIxNi44MzI0NDQtNzguOTgyODY2IDIyMS40NDg1NzgtODIuMjg3MTIxbDExLjgwMzgzNy04LjUzMjMyNyAwLTE0LjU2NTc0TDc1Ny4zNDY4NzEgNDQzLjAyNzExNmwtMS4xOTQxOTggMC4zNTgxNTdMOTA4LjMwMzk3OCAzNzQuNjcwMjYyIDkwOC4zMDM5NzggMzc0LjY3MDI2MnpNMTk5LjAyNDg2OSA3NDguNTI2OTk1Yy0wLjU1NDYzMiAwLjE1OTYzNi0xLjMxMTg3OSAwLjI4NTUwMi0yLjE3OTY0MiAwLjI4NTUwMi0xLjczNTUyNyAwLTIuODg4NzkzLTAuNTEyNjc2LTMuMTkwNjY5LTAuNzU0MTc3IDAuMDQ1MDI1IDAtMC4yMjgxOTctMC42NjgyMTktMC4yMzk0NTQtMi4xNzk2NDItMC43NTQxNzctNDQuNDg4MjM3IDEuMzUyODExLTI0Ni4xNDQwMjYgMy4wNDc0MDYtMzE3LjkwMjM1bDQuMDU3NDA5IDAtMS41MzU5ODMgMzE4Ljc5OTc5LTAuMDI4NjUzIDEuMDgzNjgxTDE5OS4wMjQ4NjkgNzQ4LjUyNjk5NSAxOTkuMDI0ODY5IDc0OC41MjY5OTV6TTI0MC43Nzk4NTUgNDAwLjAwNTI3NmwtNDAuMDQ4MTExLTE4LjIxMjgwNCAwIDAuNTk0NTQxLTE5LjU3Njg3MS04Ljc0NDE1MSAzMjkuODI0ODkxLTE1OS41ODY2NDhMODQxLjA3MTczNyAzNzMuNzg2MTI1IDUxMS4wMTk2NzMgNTIyLjgzNTc4OWwtMjA4LjcwNDMyMi05NC44NDgyMDUgMC4zOTkwODkgMC0yMy4zNDI2MzgtMTAuNDM4NzQ3TDI0MC43Nzk4NTUgNDAwLjAwNTI3NiAyNDAuNzc5ODU1IDQwMC4wMDUyNzZ6TTcyOC44NTA4NjMgNzMyLjEwNzAyM2MwIDAtMTA1LjI2NzUwOSA3NS44OTA0MzQtMjA1LjA3MDU2MiA3Ni44ODkxODFDNDE4Ljk0OTc0NCA4MTAuMDYyNDkgMzE5LjQxODg5IDczMi44NjUyOTMgMzE4LjcwNjY2OSA3MzIuMTA3MDIzTDMxOC43MDY2NjkgNDY2LjcyMjc5NGwxOTIuMjcyMDcyIDg3LjQwMDU4MiAyMTcuODcyMTIzLTk4LjQwOTMxTDcyOC44NTA4NjMgNzMyLjEwNzAyMyA3MjguODUwODYzIDczMi4xMDcwMjN6TTcyOC44NTA4NjMgNzMyLjEwNzAyM1wiXHJcbiAgICAgICAgICAgICAgICBwLWlkPVwiNjM2MlwiIGZpbGw9XCIjNzA3MDcwXCI+PC9wYXRoPlxyXG4gICAgICAgIDwvc3ZnPlxyXG4gICAgKVxyXG59O1xyXG5leHBvcnQgY29uc3QgU2VjdXJpdHlDb2RlU3ZnID0gKCk9PntcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPHN2ZyB0PVwiMTU5MDkyNjA2MzQzMFwiIGNsYXNzTmFtZT1cImljb25cIiB2aWV3Qm94PVwiMCAwIDEwMjQgMTAyNFwiIHZlcnNpb249XCIxLjFcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgICAgIHAtaWQ9XCI3MjMxXCIgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCI+XHJcbiAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICBkPVwiTTUxMS45MjU3NCAxMDIzLjk3NTI0N0MzNTcuOTU5Mzg5IDEwMjMuOTc1MjQ3IDcxLjUwMDI5IDc5NC40OTg1NSA3MS41MDAyOSA1NzcuNDQ4MDc2VjE2My4xNjIyNTFjMC0xMC4wNDk4OTQgOC40MTYxNjctMTguMTY5MDIgMTguODM3MzYyLTE4LjM3OTQyNGwyNC45NTE0Ni0wLjQyMDgwOGMwLjk1MzAwNyAwIDk4Ljc2NjE5Ni0xLjk2Nzg5OCAxOTkuNTk5MzA0LTQxLjg5NTE4NSAxMDMuNDgxNzI1LTQwLjg0MzE2NCAxNzAuMTc5ODQ5LTg3LjkzNjU2OSAxNzAuODg1MzIyLTg4LjQxOTI2MWwxNC42OTExNjItMTAuNDIxMTk1YTE5Ljg2NDYzIDE5Ljg2NDYzIDAgMCAxIDExLjM5ODk1Ni0zLjYwMTYyNSAxOS40ODA5NTEgMTkuNDgwOTUxIDAgMCAxIDExLjMyNDY5NiAzLjUzOTc0MWwxNC45NzU4MjYgMTAuNTA3ODMyYzAuNjgwNzE5IDAuNDgyNjkyIDY3LjQ0MDcyNyA0Ny41MjY1OTEgMTcwLjc5ODY4NSA4OC40MTkyNjIgMTAwLjkzMjEyMSAzOS45MjcyODcgMTk4Ljc0NTMxIDQxLjg5NTE4NSAxOTkuNzQ3ODI1IDQxLjg5NTE4NGwyNC43NTM0MzIgMC40MjA4MDljMTAuNDMzNTcyIDAuMjEwNDA0IDE4LjgyNDk4NSA4LjMyOTUzIDE4LjgyNDk4NiAxOC4zNzk0MjNsMC4yMTA0MDQgNDE0LjI4NTgyNWMwIDIxNy4wMjU3Mi0yODYuNTA4NjA2IDQ0Ni41MjcxNzEtNDQwLjYxMTEgNDQ2LjUyNzE3MXogbTM3Mi42MjU3OTctODEyLjU2ODU1NmMtMzcuODYwMzc1LTIuODQ2NjQ1LTExNy41MTY5MjEtMTIuNjI0MjUxLTIwMC4yNjc2NDYtNDUuMzg1NDE5LTg0LjU1NzcyNi0zMy40MTcxMzQtMTQ2LjcyNTk3Mi03MS4wMDUyMjEtMTcyLjM1ODE1MS04Ny42MDIzOTgtMjUuNTU3OTE5IDE2LjUzNTI5My04Ny43NjMyOTUgNTQuMTM1NzU3LTE3Mi4yOTYyNjggODcuNjAyMzk4LTgyLjYwMjIwNSAzMi42ODY5MDgtMTYyLjAzNTk3IDQyLjQ2NDUxNC0yMDAuNDE2MTY3IDQ1LjM4NTQxOXYzNjYuMDQxMzg1YzAgMTcwLjIxNjk3OSAyNDkuNTc2NDg0IDM3OC4yODE5NTcgMzcyLjcxMjQzNSAzNzguMjgxOTU3IDQ3LjcyNDYxOCAwIDE0MC43MjMyNjQtMzguNzI2NzQ1IDIzMi4xMzc2OTEtMTIzLjc2NzE2MyA4OC4xMjIyMi04MS45MDkxMDggMTQwLjcyMzI2NC0xNzcuMDczNjggMTQwLjcyMzI2NC0yNTQuNDkwMDQxeiBtLTQwNy45NDg5NDYgNDM1LjY2MDQxNGEzMy4zMDU3NDQgMzMuMzA1NzQ0IDAgMCAxLTIzLjg5OTQzOSAxMC4wNDk4OTQgMzMuNzM4OTI5IDMzLjczODkyOSAwIDAgMS0yMy45OTg0NTMtMTAuMDM3NTE3bC0xMDEuNjc0NzI0LTEwMi4zMzA2OTFhMzQuMzQ1Mzg4IDM0LjM0NTM4OCAwIDAgMSAwLTQ4LjI2OTE5MyAzMy42NjQ2NjggMzMuNjY0NjY4IDAgMCAxIDQ3LjkzNTAyMiAwbDc3LjczODE1NSA3OC4xODM3MTcgMTk2LjI2OTk2Ny0xOTcuNjkzMjlhMzMuNTkwNDA4IDMzLjU5MDQwOCAwIDAgMSA0Ny45MTAyNjkgMCAzNC4xODQ0OSAzNC4xODQ0OSAwIDAgMSAwIDQ4LjI2OTE5NHogbTAgMFwiXHJcbiAgICAgICAgICAgICAgICBwLWlkPVwiNzIzMlwiIGZpbGw9XCIjNzA3MDcwXCI+PC9wYXRoPlxyXG4gICAgICAgIDwvc3ZnPlxyXG4gICAgKTtcclxufTtcclxuZXhwb3J0IGNvbnN0IFN0dWRlbnROdW1TdmcgPSAoKT0+e1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8c3ZnIHQ9XCIxNTkxMDU4MjU2MzA4XCIgY2xhc3NOYW1lPVwiaWNvblwiIHZpZXdCb3g9XCIwIDAgMTAyNCAxMDI0XCIgdmVyc2lvbj1cIjEuMVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICAgICAgcC1pZD1cIjIwNTZcIiB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIj5cclxuICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgIGQ9XCJNMTUzLjYgMzM5LjJBMTkuMiAxOS4yIDAgMCAwIDEzNC40IDM1OC40djQ2MC44YzAgMTAuNTk4NCA4LjYwMTYgMTkuMiAxOS4yIDE5LjJoNzE2LjhhMTkuMiAxOS4yIDAgMCAwIDE5LjItMTkuMlYzNTguNEExOS4yIDE5LjIgMCAwIDAgODcwLjQgMzM5LjJIMTUzLjZ6IG0wLTY0aDcxNi44YzQ1LjkyNjQgMCA4My4yIDM3LjI3MzYgODMuMiA4My4ydjQ2MC44YzAgNDUuOTI2NC0zNy4yNzM2IDgzLjItODMuMiA4My4ySDE1My42QTgzLjIgODMuMiAwIDAgMSA3MC40IDgxOS4yVjM1OC40YzAtNDUuOTI2NCAzNy4yNzM2LTgzLjIgODMuMi04My4yelwiXHJcbiAgICAgICAgICAgICAgICBmaWxsPVwiIzcwNzA3MFwiIHAtaWQ9XCIyMDU3XCI+PC9wYXRoPlxyXG4gICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgZD1cIk0zMDIuNzk2OCA0NzYuODc2OGgzMy43OTJsMTEyLjEyOCAxNjMuMTIzMmgxLjIyODhWNDc2Ljg3NjhoMzMuNDg0OHYyMTkuMzQwOGgtMzIuNTYzMmwtMTEzLjM1NjgtMTY0Ljk2NjRoLTEuMjI4OHYxNjQuOTY2NGgtMzMuNDg0OFY0NzYuODc2OHogbTMyMS4wMjQtNC4zMDA4YzMzLjE3NzYgMCA1OS41OTY4IDEwLjc1MiA3OC45NTA0IDMyLjU2MzIgMTguNDMyIDIwLjU4MjQgMjcuNjQ4IDQ3LjkyMzIgMjcuNjQ4IDgxLjcxNTIgMCAzMy40ODQ4LTkuMjE2IDYwLjUxODQtMjcuNjQ4IDgxLjQwOC0xOS4zNTM2IDIxLjUwNC00NS43NzI4IDMyLjI1Ni03OC45NTA0IDMyLjI1Ni0zMy40ODQ4IDAtNTkuOTA0LTExLjA1OTItNzguOTUwNC0zMi41NjMyLTE4LjQzMi0yMC44ODk2LTI3LjM0MDgtNDcuOTIzMi0yNy4zNDA4LTgxLjEwMDggMC0zMy40ODQ4IDguOTA4OC02MC41MTg0IDI3LjM0MDgtODEuNDA4IDE5LjA0NjQtMjIuMTE4NCA0NS40NjU2LTMyLjg3MDQgNzguOTUwNC0zMi44NzA0eiBtMCAyOS40OTEyYy0yMy4zNDcyIDAtNDEuNDcyIDcuNjgtNTQuMzc0NCAyMy42NTQ0LTEyLjI4OCAxNS4wNTI4LTE4LjQzMiAzNS4zMjgtMTguNDMyIDYxLjEzMjggMCAyNS40OTc2IDYuMTQ0IDQ1Ljc3MjggMTguNDMyIDYwLjgyNTYgMTIuOTAyNCAxNS4zNiAzMS4wMjcyIDIzLjM0NzIgNTQuMzc0NCAyMy4zNDcyIDIzLjM0NzIgMCA0MS40NzItNy42OCA1NC4wNjcyLTIyLjczMjggMTIuMjg4LTE0Ljc0NTYgMTguNzM5Mi0zNS4zMjggMTguNzM5Mi02MS40NCAwLTI2LjQxOTItNi40NTEyLTQ3LjAwMTYtMTguNzM5Mi02Mi4wNTQ0LTEyLjU5NTItMTUuMzYtMzAuNzItMjIuNzMyOC01NC4wNjcyLTIyLjczMjh6XCJcclxuICAgICAgICAgICAgICAgIGZpbGw9XCIjNzA3MDcwXCIgcC1pZD1cIjIwNThcIj48L3BhdGg+XHJcbiAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICBkPVwiTTQ3NC4yMTQ0IDIxMS4ybDEyLjggNjRoNDkuOTcxMmwxMi44LTY0SDQ3NC4yMTQ0eiBtMTIxLjE5MDQgOTguMTUwNGEzNy4xMiAzNy4xMiAwIDAgMS0zNi40MDMyIDI5Ljg0OTZINDY0Ljk5ODRhMzcuMTIgMzcuMTIgMCAwIDEtMzYuMzUyLTI5Ljg0OTZsLTIzLjU1Mi0xMTcuNzZhMzcuMTIgMzcuMTIgMCAwIDEgMjkuMDgxNi00My42NzM2YzMuNTg0LTAuNjE0NCAzLjU4NC0wLjYxNDQgNy4yNzA0LTAuNzE2OGgxNDEuMTA3MmMyMC40OCAwIDM3LjEyIDE2LjY0IDM3LjEyIDM3LjEyLTAuMTAyNCAzLjY4NjQtMC4xMDI0IDMuNjg2NC0wLjcxNjggNy4yNzA0bC0yMy41NTIgMTE3Ljc2elwiXHJcbiAgICAgICAgICAgICAgICBmaWxsPVwiIzcwNzA3MFwiIHAtaWQ9XCIyMDU5XCI+PC9wYXRoPlxyXG4gICAgICAgIDwvc3ZnPlxyXG4gICAgKVxyXG59O1xyXG5cclxuXHJcbiIsImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcbi8vIGV4cG9ydCBjb25zdCBVUkwgPSBcImh0dHA6Ly9iYWl5b3UxMDI0LnRvcDo4MDgwL2Nsb3VkX2NsYXNzLTAuMC4xLVNOQVBTSE9UXCI7XHJcbmV4cG9ydCBjb25zdCBVUkwgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6ODA4MFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IFJlYWxBeGlvcyA9IGF4aW9zLmNyZWF0ZSh7XHJcbiAgICBiYXNlVVJMOlVSTCxcclxuICAgIHByb3h5OiB7XHJcbiAgICAgICAgJy90ZWFjaGVyLyonOiB7XHJcbiAgICAgICAgICAgIHRhcmdldDogVVJMLC8v5a+55bqU5ZCO56uv56uv5Y+jXHJcbiAgICAgICAgICAgIHNlY3VyZTogZmFsc2UsXHJcbiAgICAgICAgICAgIGNoYW5nZU9yaWdpbjogdHJ1ZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgJy9zdHVkZW50LyonOiB7XHJcbiAgICAgICAgICAgIHRhcmdldDogVVJMLC8v5a+55bqU5ZCO56uv56uv5Y+jXHJcbiAgICAgICAgICAgIHNlY3VyZTogZmFsc2UsXHJcbiAgICAgICAgICAgIGNoYW5nZU9yaWdpbjogdHJ1ZVxyXG4gICAgICAgIH0sXHJcbiAgICB9XHJcbn0pO1xyXG4iLCJpbXBvcnQgUmVhY3Qse3VzZVN0YXRlLHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBjb29raWUgZnJvbSAncmVhY3QtY29va2llcydcclxuaW1wb3J0IHtCdXR0b24sIENvbCwgSW5wdXQsIG1lc3NhZ2UsIFJvdywgVGFic30gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IHtCYWNrU3ZnLCBDb2xsZWdlU3ZnLCBFbWFpbFN2ZywgTmFtZVN2ZywgUGFzc3dvcmRTdmcsIFNlY3VyaXR5Q29kZVN2ZywgVXNlclN2Z30gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvU3ZnXCI7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgJy4uLy4uL3B1YmxpYy9zdHlsZS9sb2dpbi5jc3MnO1xyXG5pbXBvcnQge1JlYWxBeGlvcywgVVJMfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9jb25maWdcIjtcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5cclxuY29uc3Qge1RhYlBhbmV9ID0gVGFicztcclxuY29uc3Qge1Bhc3N3b3JkfSA9IElucHV0O1xyXG5jb25zdCBMb2dpbiA9ICgpPT57XHJcbiAgICBjb25zdCBbYWN0aW9uLHNldEFjdGlvbl0gPSB1c2VTdGF0ZSgnbG9naW4nKTtcclxuICAgIGNvbnN0IFt0UGhvbmUsIHNldFRQaG9uZV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbdFBhc3N3b3JkLHNldFRQYXNzd29yZF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbdEVtYWlsLHNldFRFbWFpbF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbdE5hbWUsc2V0VE5hbWVdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW3RDb2xsZWdlLHNldFRDb2xsZWdlXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFtzZWN1cml0eSwgc2V0U2VjdXJpdHldID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW2ltYWdlLHNldEltYWdlXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFtjb2RlLCBzZXRDb2RlXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IGNoYW5nZUNvZGUgPSAoKT0+e1xyXG4gICAgICAgIHNldFNlY3VyaXR5KFwiXCIpO1xyXG4gICAgICAgIFJlYWxBeGlvcy5nZXQoXCJ0ZWFjaGVyL2dldFNlY3VyaXR5Q29kZT90aW1lPVwiK25ldyBEYXRlKCkuZ2V0VGltZSgpKVxyXG4gICAgICAgICAgICAudGhlbigocmVzcG9uc2UpPT57XHJcbiAgICAgICAgICAgICAgICBzZXRJbWFnZSgnZGF0YTppbWFnZS9wbmc7YmFzZTY0LCcrcmVzcG9uc2UuZGF0YS5pbWFnZSk7XHJcbiAgICAgICAgICAgICAgICBzZXRDb2RlKHJlc3BvbnNlLmRhdGEuY29kZSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICB9O1xyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgY2hhbmdlQ29kZSgpO1xyXG4gICAgfSxbXSk7XHJcbiAgICBjb25zdCBsb2dpbiA9ICgpPT57XHJcbiAgICAgICAgaWYgKHNlY3VyaXR5LnRvTG93ZXJDYXNlKCkgIT0gY29kZS50b1N0cmluZygpLnRvTG93ZXJDYXNlKCkpe1xyXG4gICAgICAgICAgICBtZXNzYWdlLmVycm9yKFwi6aqM6K+B56CB6ZSZ6K+vXCIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFJlYWxBeGlvcyh7XHJcbiAgICAgICAgICAgIG1ldGhvZDoncG9zdCcsXHJcbiAgICAgICAgICAgIHVybDonL3RlYWNoZXIvbG9naW4nLFxyXG4gICAgICAgICAgICBkYXRhOntcclxuICAgICAgICAgICAgICAgICdjb2RlJzpzZWN1cml0eSxcclxuICAgICAgICAgICAgICAgICd0UGhvbmUnOnRQaG9uZSxcclxuICAgICAgICAgICAgICAgICd0UGFzc3dvcmQnOnRQYXNzd29yZCxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pLnRoZW4oKHJlc3BvbnNlKT0+e1xyXG4gICAgICAgICAgICBpZiAocmVzcG9uc2UuZGF0YS5tc2cgPT0gXCJlcnJvclBhc3N3b3JkXCIpe1xyXG4gICAgICAgICAgICAgICAgbWVzc2FnZS5lcnJvcihcIuWvhueggemUmeivr1wiKTtcclxuICAgICAgICAgICAgICAgIHNldFRQYXNzd29yZChcIlwiKTtcclxuICAgICAgICAgICAgICAgIGNoYW5nZUNvZGUoKTtcclxuICAgICAgICAgICAgfWVsc2UgaWYgKHJlc3BvbnNlLmRhdGEubXNnPT1cIm5vVGVhY2hlclwiKXtcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2UuZXJyb3IoXCLmsqHmnInor6XnlKjmiLdcIik7XHJcbiAgICAgICAgICAgICAgICBzZXRBY3Rpb24oXCJzaWduXCIpO1xyXG4gICAgICAgICAgICAgICAgY2hhbmdlQ29kZSgpO1xyXG4gICAgICAgICAgICB9ZWxzZSBpZiAocmVzcG9uc2UuZGF0YS5tc2cgPT0gJ29rJyl7XHJcbiAgICAgICAgICAgICAgICBjb29raWUuc2F2ZShcImlkZW50aWZ5XCIsXCJ0ZWFjaGVyXCIse3BhdGg6XCIvXCJ9KVxyXG4gICAgICAgICAgICAgICAgY29va2llLnNhdmUoXCJpZFwiLHRQaG9uZSx7cGF0aDpcIi9cIn0pXHJcbiAgICAgICAgICAgICAgICBSb3V0ZXIucHVzaChcIi90ZWFjaGVyXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSkuY2F0Y2goKGVycm9yKT0+e1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgICAgIGNoYW5nZUNvZGUoKTtcclxuICAgICAgICB9KVxyXG4gICAgfTtcclxuICAgIGNvbnN0IHNpZ25VcCA9ICgpPT57XHJcbiAgICAgICAgaWYgKHNlY3VyaXR5LnRvTG93ZXJDYXNlKCkgIT0gY29kZS50b1N0cmluZygpLnRvTG93ZXJDYXNlKCkpe1xyXG4gICAgICAgICAgICBtZXNzYWdlLmVycm9yKFwi6aqM6K+B56CB6ZSZ6K+vXCIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFJlYWxBeGlvcyh7XHJcbiAgICAgICAgICAgIG1ldGhvZDoncG9zdCcsXHJcbiAgICAgICAgICAgIHVybDonL3RlYWNoZXIvcmVnaXN0ZXInLFxyXG4gICAgICAgICAgICBkYXRhOntcclxuICAgICAgICAgICAgICAgICdjb2RlJzpzZWN1cml0eSxcclxuICAgICAgICAgICAgICAgICd0UGhvbmUnOnRQaG9uZSxcclxuICAgICAgICAgICAgICAgICd0UGFzc3dvcmQnOnRQYXNzd29yZCxcclxuICAgICAgICAgICAgICAgICd0RW1haWwnOnRFbWFpbCxcclxuICAgICAgICAgICAgICAgICd0TmFtZSc6dE5hbWUsXHJcbiAgICAgICAgICAgICAgICAndENvbGxlZ2UnOnRDb2xsZWdlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KS50aGVuKChyZXNwb25zZSk9PntcclxuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmRhdGEubXNnID09IFwib2tcIil7XHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlLnN1Y2Nlc3MoXCLms6jlhozmiJDlip9cIik7XHJcbiAgICAgICAgICAgICAgICBzZXRBY3Rpb24oXCJsb2dpblwiKTtcclxuICAgICAgICAgICAgICAgIGNoYW5nZUNvZGUoKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChyZXNwb25zZS5kYXRhLm1zZyA9PSBcImhhdmVUZWFjaGVyXCIpe1xyXG4gICAgICAgICAgICAgICAgbWVzc2FnZS5lcnJvcihcIueUqOaIt+W3suWtmOWcqFwiKTtcclxuICAgICAgICAgICAgICAgIHNldEFjdGlvbihcImxvZ2luXCIpO1xyXG4gICAgICAgICAgICAgICAgY2hhbmdlQ29kZSgpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoXCLmnKrnn6XplJnor69cIik7XHJcbiAgICAgICAgICAgICAgICBjaGFuZ2VDb2RlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KS5jYXRjaCgoZXJyb3IpPT57XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICAgIH0pXHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Um93IGlkPSdsb2dpbicganVzdGlmeT0nY2VudGVyJyBhbGlnbj0nbWlkZGxlJyBzdHlsZT17e3BhZGRpbmdUb3A6IDUwICsgXCJweFwifX0+XHJcbiAgICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICAgICAgPHRpdGxlPuS6keivvuWggjwvdGl0bGU+XHJcbiAgICAgICAgICAgICAgICA8bWV0YSBjaGFyU2V0PSd1dGYtOCcgLz5cclxuICAgICAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgICAgICA8Q29sIHNwYW49ezZ9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3dyYXAnPlxyXG4gICAgICAgICAgICAgICAgICAgIDxSb3cgZ3V0dGVyPXtbMTYsIDBdfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENvbCBvbkNsaWNrPXsoKT0+e1JvdXRlci5wdXNoKCcvJyl9fSBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTonZmxleCcsanVzdGlmeUNvbnRlbnQ6J2NlbnRlcidcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX0+PEJhY2tTdmcvPumAieaLqei6q+S7vTwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJzIGFjdGl2ZUtleT17YWN0aW9ufSBzaXplPSdsYXJnZScgc3R5bGU9e3t3aWR0aDonMTAwJSd9fSBvblRhYkNsaWNrPXsoa2V5LGV2ZW50KT0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0QWN0aW9uKGtleSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYlBhbmUga2V5PSdsb2dpbicgdGFiPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7ZGlzcGxheTonZmxleCcsanVzdGlmeUNvbnRlbnQ6J2NlbnRlcid9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg55m75b2VXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSb3cgc3R5bGU9e3ttYXJnaW46XCIxMHB4XCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXQgc2l6ZT1cImxhcmdlXCIgdHlwZT0ndGV4dCcgcGxhY2Vob2xkZXI9J+aJi+acuuWPtycgcHJlZml4PXs8VXNlclN2ZyAvPn0gdmFsdWU9e3RQaG9uZX0gb25DaGFuZ2U9eyhlKT0+e3NldFRQaG9uZShlLnRhcmdldC52YWx1ZSl9fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJvdyBzdHlsZT17e21hcmdpbjpcIjEwcHhcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQYXNzd29yZCBzaXplPSdsYXJnZScgcGxhY2Vob2xkZXI9J+WvhueggScgcHJlZml4PXs8UGFzc3dvcmRTdmcvPn0gdmFsdWU9e3RQYXNzd29yZH0gb25DaGFuZ2U9eyhlKT0+e3NldFRQYXNzd29yZChlLnRhcmdldC52YWx1ZSl9fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJvdyBzdHlsZT17e21hcmdpbjpcIjEwcHhcIn19IGp1c3RpZnk9J3NwYWNlLWJldHdlZW4nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29sIHNwYW49ezExfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dCB0eXBlPSd0ZXh0JyBzaXplPSdsYXJnZScgcGxhY2Vob2xkZXI9J+mqjOivgeeggScgcHJlZml4PXs8U2VjdXJpdHlDb2RlU3ZnLz59IHZhbHVlPXtzZWN1cml0eX0gb25DaGFuZ2U9eyhlKT0+e3NldFNlY3VyaXR5KGUudGFyZ2V0LnZhbHVlKX19Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgc3Bhbj17MTF9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2ltYWdlfSBvbkNsaWNrPXtjaGFuZ2VDb2RlfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSb3cgc3R5bGU9e3ttYXJnaW46XCIxMHB4XCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHNpemU9J2xhcmdlJyB0eXBlPSdwcmltYXJ5JyBzdHlsZT17e3dpZHRoOicxMDAlJ319IG9uQ2xpY2s9e2xvZ2lufT7nmbvlvZU8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFiUGFuZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJQYW5lIHRhYj17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6J2ZsZXgnLGp1c3RpZnlDb250ZW50OidjZW50ZXInfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOazqOWGjFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBrZXk9J3NpZ24nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSb3cgc3R5bGU9e3ttYXJnaW46XCIxMHB4XCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0IHNpemU9XCJsYXJnZVwiIHR5cGU9J3RleHQnIHBsYWNlaG9sZGVyPSfmiYvmnLrlj7cnIHByZWZpeD17PFVzZXJTdmcgLz59IHZhbHVlPXt0UGhvbmV9IG9uQ2hhbmdlPXsoZSk9PntzZXRUUGhvbmUoZS50YXJnZXQudmFsdWUpfX0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSb3cgc3R5bGU9e3ttYXJnaW46XCIxMHB4XCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBhc3N3b3JkIHNpemU9J2xhcmdlJyBwbGFjZWhvbGRlcj0n5a+G56CBJyBwcmVmaXg9ezxQYXNzd29yZFN2Zy8+fSB2YWx1ZT17dFBhc3N3b3JkfSBvbkNoYW5nZT17KGUpPT57c2V0VFBhc3N3b3JkKGUudGFyZ2V0LnZhbHVlKX19Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Um93IHN0eWxlPXt7bWFyZ2luOicxMHB4J319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXQgc2l6ZT0nbGFyZ2UnIHBsYWNlaG9sZGVyPSfnlLXlrZDpgq7nrrEnIHByZWZpeD17PEVtYWlsU3ZnLz59IHZhbHVlPXt0RW1haWx9IG9uQ2hhbmdlPXsoZSk9PntzZXRURW1haWwoZS50YXJnZXQudmFsdWUpfX0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSb3cgc3R5bGU9e3ttYXJnaW46JzEwcHgnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dCBzaXplPSdsYXJnZScgcGxhY2Vob2xkZXI9J+Wnk+WQjScgcHJlZml4PXs8TmFtZVN2Zy8+fSB2YWx1ZT17dE5hbWV9IG9uQ2hhbmdlPXsoZSk9PntzZXRUTmFtZShlLnRhcmdldC52YWx1ZSl9fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJvdyBzdHlsZT17e21hcmdpbjonMTBweCd9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0IHNpemU9J2xhcmdlJyBwbGFjZWhvbGRlcj0n5a2m6ZmiJyBwcmVmaXg9ezxDb2xsZWdlU3ZnLz59IHZhbHVlPXt0Q29sbGVnZX0gb25DaGFuZ2U9eyhlKT0+e3NldFRDb2xsZWdlKGUudGFyZ2V0LnZhbHVlKX19Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Um93IHN0eWxlPXt7bWFyZ2luOlwiMTBweFwifX0ganVzdGlmeT0nc3BhY2UtYmV0d2Vlbic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgc3Bhbj17MTF9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0IHR5cGU9J3RleHQnIHNpemU9J2xhcmdlJyBwbGFjZWhvbGRlcj0n6aqM6K+B56CBJyBwcmVmaXg9ezxTZWN1cml0eUNvZGVTdmcvPn0gdmFsdWU9e3NlY3VyaXR5fSBvbkNoYW5nZT17KGUpPT57c2V0U2VjdXJpdHkoZS50YXJnZXQudmFsdWUpfX0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbCBzcGFuPXsxMX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17aW1hZ2V9IG9uQ2xpY2s9e2NoYW5nZUNvZGV9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJvdyBzdHlsZT17e21hcmdpbjpcIjEwcHhcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHNpemU9J2xhcmdlJyB0eXBlPSdwcmltYXJ5JyBzdHlsZT17e3dpZHRoOicxMDAlJ319IG9uQ2xpY2s9e3NpZ25VcH0+5rOo5YaMPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYlBhbmU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFicz5cclxuICAgICAgICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICA8L1Jvdz5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2dpbjtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYW50ZC9saWIvYnV0dG9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFudGQvbGliL2NvbFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhbnRkL2xpYi9pbnB1dFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhbnRkL2xpYi9tZXNzYWdlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFudGQvbGliL3Jvd1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhbnRkL2xpYi90YWJzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1jb29raWVzXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=