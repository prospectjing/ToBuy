/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	__webpack_require__.p = "/dist";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/page/index/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/page/commons/nav-single/index.css":
/*!***********************************************!*\
  !*** ./src/page/commons/nav-single/index.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/page/commons/nav-single/index.css?");

/***/ }),

/***/ "./src/page/commons/nav-single/index.js":
/*!**********************************************!*\
  !*** ./src/page/commons/nav-single/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/*\r\n* @Author: Administrator\r\n* @Date:   2018-11-20 08:26:15\r\n* @Last Modified by:   Administrator\r\n* @Last Modified time: 2018-11-20 08:29:00\r\n*/\r\n__webpack_require__(/*! ./index.css */ \"./src/page/commons/nav-single/index.css\");\n\n//# sourceURL=webpack:///./src/page/commons/nav-single/index.js?");

/***/ }),

/***/ "./src/page/index/index.js":
/*!*********************************!*\
  !*** ./src/page/index/index.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/*\r\n* @Author: Administrator\r\n* @Date:   2018-11-17 19:45:34\r\n* @Last Modified by:   Administrator\r\n* @Last Modified time: 2018-11-20 09:12:56\r\n*/\r\n// var $$ = require('jquery');\r\n// $$('body').text(\"fdasss\");\r\n\r\n\r\n\r\n\r\n// require('./index.css');\r\n// require('../commons/commons.js');\r\n\r\n// console.log('this is index.html');\r\n// var _util = require('util/util.js');\r\n\r\n// _util.request({\r\n//     url:'http://happymmall/product/list.do?keyword=1',\r\n//     success:function(res){\r\n//         console.log(res);\r\n//     },\r\n//     error:function(errMsg){\r\n//         console.log(errMsg);\r\n//     }\r\n// })\r\n// console.log(_util.getUrlParam('test'));\r\n\r\n// var html = '<div>{{data}}</div>';\r\n// var data = {\r\n//     data:1111\r\n// }\r\n\r\n// console.log(_util.renderHtml(html,data));\r\n\r\n__webpack_require__(/*! page/commons/nav-single/index.js */ \"./src/page/commons/nav-single/index.js\");\n\n//# sourceURL=webpack:///./src/page/index/index.js?");

/***/ })

/******/ });