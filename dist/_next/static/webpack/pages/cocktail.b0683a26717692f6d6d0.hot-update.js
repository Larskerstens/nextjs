/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/cocktail",{

/***/ "./pages/cocktail.js":
/*!***************************!*\
  !*** ./pages/cocktail.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; },\n/* harmony export */   \"default\": function() { return /* binding */ cocktail; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/larskerstens/Documenten/Full stack developer 2020-2021/React/pokeapp/pages/cocktail.js\";\n //import axios from \"axios\";\n\nvar __N_SSP = true;\nfunction cocktail(_ref) {\n  var _this = this;\n\n  var cocktails = _ref.cocktails;\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n        children: \"Cocktail pagina\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 8,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n      children: \"Cocktail\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n      children: cocktails.map(function (cocktail) {\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n            children: cocktail.strDrink\n          }, cocktail.idDrink, false, {\n            fileName: _jsxFileName,\n            lineNumber: 15,\n            columnNumber: 15\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n            src: cocktail.strDrinkThumb,\n            alt: cocktail.strDrink\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 16,\n            columnNumber: 15\n          }, _this)]\n        }, void 0, true);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 9\n    }, this)]\n  }, void 0, true);\n}\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29ja3RhaWwuanM/MGNhMCJdLCJuYW1lcyI6WyJjb2NrdGFpbCIsImNvY2t0YWlscyIsIm1hcCIsInN0ckRyaW5rIiwiaWREcmluayIsInN0ckRyaW5rVGh1bWIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Q0FDQTs7O0FBRWUsU0FBU0EsUUFBVCxPQUFpQztBQUFBOztBQUFBLE1BQWJDLFNBQWEsUUFBYkEsU0FBYTtBQUM5QyxzQkFDRTtBQUFBLDRCQUNFLDhEQUFDLGtEQUFEO0FBQUEsNkJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFJRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUpGLGVBTUk7QUFBQSxnQkFDR0EsU0FBUyxDQUFDQyxHQUFWLENBQWMsVUFBQ0YsUUFBRDtBQUFBLDRCQUNiO0FBQUEsa0NBQ0U7QUFBQSxzQkFBNEJBLFFBQVEsQ0FBQ0c7QUFBckMsYUFBU0gsUUFBUSxDQUFDSSxPQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBRUU7QUFBSyxlQUFHLEVBQUVKLFFBQVEsQ0FBQ0ssYUFBbkI7QUFBa0MsZUFBRyxFQUFFTCxRQUFRLENBQUNHO0FBQWhEO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkY7QUFBQSx3QkFEYTtBQUFBLE9BQWQ7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTko7QUFBQSxrQkFERjtBQWtCRCIsImZpbGUiOiIuL3BhZ2VzL2NvY2t0YWlsLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuLy9pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvY2t0YWlsKHsgY29ja3RhaWxzIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5Db2NrdGFpbCBwYWdpbmE8L3RpdGxlPlxuICAgICAgPC9IZWFkPlxuICAgICAgPGgxPkNvY2t0YWlsPC9oMT5cbiAgICAgIHtcbiAgICAgICAgPHVsPlxuICAgICAgICAgIHtjb2NrdGFpbHMubWFwKChjb2NrdGFpbCkgPT4gKFxuICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgPGxpIGtleT17Y29ja3RhaWwuaWREcmlua30+e2NvY2t0YWlsLnN0ckRyaW5rfTwvbGk+XG4gICAgICAgICAgICAgIDxpbWcgc3JjPXtjb2NrdGFpbC5zdHJEcmlua1RodW1ifSBhbHQ9e2NvY2t0YWlsLnN0ckRyaW5rfSAvPlxuICAgICAgICAgICAgPC8+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvdWw+XG4gICAgICB9XG4gICAgPC8+XG4gICk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoKSB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgXCJodHRwczovL3d3dy50aGVjb2NrdGFpbGRiLmNvbS9hcGkvanNvbi92MS8xL3NlYXJjaC5waHA/Zj1jXCJcbiAgKTtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgY29uc3QgY29ja3RhaWxzID0gZGF0YS5kcmlua3M7XG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIGNvY2t0YWlsczogY29ja3RhaWxzLFxuICAgICAgLy9jb2NrdGFpbHNcbiAgICB9LFxuICB9O1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/cocktail.js\n");

/***/ })

});