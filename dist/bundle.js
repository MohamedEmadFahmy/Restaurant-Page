/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderContact: () => (/* binding */ renderContact)\n/* harmony export */ });\nfunction renderContact(body) {\r\n    const main = document.createElement(\"main\");\r\n    const mainHeading = document.createElement(\"h2\");\r\n    mainHeading.textContent = \"Contact Information\";\r\n    main.appendChild(mainHeading);\r\n    const contactInfo = document.createElement(\"p\");\r\n    contactInfo.innerHTML = \"Email: info@example.com<br>Phone: 123-456-7890<br>Address: 123 Main Street, City, Country\";\r\n    main.appendChild(contactInfo);\r\n    body.appendChild(main);\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://restaurant-website/./src/contact.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderHome: () => (/* binding */ renderHome)\n/* harmony export */ });\nfunction renderHome(body){\r\n        const header = document.createElement(\"header\");\r\n        header.innerHTML = \"<h1>Welcome to Our Website</h1>\";\r\n        body.appendChild(header);\r\n\r\n    \r\n        const main = document.createElement(\"main\");\r\n        const mainContent = document.createElement(\"p\");\r\n        mainContent.textContent = \"This is the home page content. Welcome to our website!\";\r\n        main.appendChild(mainContent);\r\n        body.appendChild(main);\r\n    \r\n        const footer = document.createElement(\"footer\");\r\n        const footerText = document.createElement(\"p\");\r\n        footerText.textContent = \"\\u00A9 2024 Your Website Name. All rights reserved.\";\r\n        footer.appendChild(footerText);\r\n        body.appendChild(footer);\r\n        // alert(\"Home page loaded\");\r\n}\r\n\r\n\n\n//# sourceURL=webpack://restaurant-website/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n// alert(\"Everything running fine!\")\r\n\r\n\r\n\r\nconst content = document.getElementById(\"content\");\r\n\r\nconst homeButton = document.querySelector(\"button#homeBtn\");\r\nconst menuButton = document.querySelector(\"button#menuBtn\");\r\nconst contactButton = document.querySelector(\"button#contactBtn\");\r\n\r\nhomeButton.addEventListener(\"click\", () =>{\r\n    eraseContent();\r\n    (0,_home__WEBPACK_IMPORTED_MODULE_0__.renderHome)(content);\r\n});\r\nmenuButton.addEventListener(\"click\", () =>{\r\n    eraseContent();\r\n    (0,_menu__WEBPACK_IMPORTED_MODULE_1__.renderMenu)(content);\r\n});\r\ncontactButton.addEventListener(\"click\", () =>{\r\n    eraseContent();\r\n    (0,_contact__WEBPACK_IMPORTED_MODULE_2__.renderContact)(content);\r\n});\r\n\r\nfunction eraseContent(){\r\n    content.innerHTML = \"\";\r\n}\r\n\r\n\r\n(0,_home__WEBPACK_IMPORTED_MODULE_0__.renderHome)(content);\n\n//# sourceURL=webpack://restaurant-website/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderMenu: () => (/* binding */ renderMenu)\n/* harmony export */ });\nfunction renderMenu(body){\r\n    const main = document.createElement(\"main\");\r\n    const mainHeading = document.createElement(\"h2\");\r\n    mainHeading.textContent = \"Menu Items\";\r\n    main.appendChild(mainHeading);\r\n    const itemList = document.createElement(\"ul\");\r\n    const items = [\"Item 1\", \"Item 2\", \"Item 3\"];\r\n    items.forEach(item => {\r\n        const listItem = document.createElement(\"li\");\r\n        listItem.textContent = item;\r\n        itemList.appendChild(listItem);\r\n    });\r\n    main.appendChild(itemList);\r\n    body.appendChild(main);\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://restaurant-website/./src/menu.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;