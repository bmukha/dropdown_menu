/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("const toggleVisibility = (item) =>\r\n  !item.style.display || item.style.display === \"none\"\r\n    ? (item.style.display = \"block\")\r\n    : (item.style.display = \"none\");\r\n\r\nconst navWrapper = document.getElementById(\"nav-wrapper\");\r\nnavWrapper.addEventListener(\"click\", (event) => {\r\n  if (event.target.tagName == \"H2\") {\r\n    const parent = event.target.parentNode;\r\n    const children = parent.querySelectorAll(\".subitem\");\r\n    children.forEach((child) => toggleVisibility(child));\r\n  }\r\n});\r\n\n\n//# sourceURL=webpack://dropdown_menu/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;