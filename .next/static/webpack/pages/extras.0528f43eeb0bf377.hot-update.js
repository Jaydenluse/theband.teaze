"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/extras",{

/***/ "./components/CardInput.js":
/*!*********************************!*\
  !*** ./components/CardInput.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nconst CardInput = ()=>{\n    _s();\n    const [cardCode, setCardCode] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const handleInputChange = (event)=>{\n        let { value } = event.target;\n        // Remove all non-numeric and non-alphabetic characters\n        value = value.replace(/[^a-zA-Z0-9]/g, \"\");\n        // Insert dash after every 4 characters\n        let newValue = \"\";\n        for(let i = 0; i < value.length; i++){\n            if (i > 0 && i % 4 === 0) {\n                newValue += \"-\";\n            }\n            newValue += value[i];\n        }\n        setCardCode(newValue.toUpperCase());\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n        type: \"text\",\n        id: \"cardCode\",\n        name: \"cardCode\",\n        placeholder: \"Enter unique code\",\n        value: cardCode,\n        onChange: handleInputChange,\n        maxLength: \"19\",\n        className: \"text-black p-2 rounded-l text-sm focus:outline-none\"\n    }, void 0, false, {\n        fileName: \"/Users/KKYAXYU/theband.teaze/components/CardInput.js\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, undefined);\n};\n_s(CardInput, \"4yYz58q73OTEAUE7hDAkT9d+ugE=\");\n_c = CardInput;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CardInput);\nvar _c;\n$RefreshReg$(_c, \"CardInput\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0NhcmRJbnB1dC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQXdDO0FBRXhDLE1BQU1FLFlBQVk7O0lBQ2hCLE1BQU0sQ0FBQ0MsVUFBVUMsWUFBWSxHQUFHSCwrQ0FBUUEsQ0FBQztJQUV6QyxNQUFNSSxvQkFBb0IsQ0FBQ0M7UUFDekIsSUFBSSxFQUFFQyxLQUFLLEVBQUUsR0FBR0QsTUFBTUUsTUFBTTtRQUM1Qix1REFBdUQ7UUFDdkRELFFBQVFBLE1BQU1FLE9BQU8sQ0FBQyxpQkFBaUI7UUFFdkMsdUNBQXVDO1FBQ3ZDLElBQUlDLFdBQVc7UUFDZixJQUFLLElBQUlDLElBQUksR0FBR0EsSUFBSUosTUFBTUssTUFBTSxFQUFFRCxJQUFLO1lBQ3JDLElBQUlBLElBQUksS0FBS0EsSUFBSSxNQUFNLEdBQUc7Z0JBQ3hCRCxZQUFZO1lBQ2Q7WUFDQUEsWUFBWUgsS0FBSyxDQUFDSSxFQUFFO1FBQ3RCO1FBRUFQLFlBQVlNLFNBQVNHLFdBQVc7SUFDbEM7SUFFQSxxQkFDRSw4REFBQ0M7UUFDQ0MsTUFBSztRQUNMQyxJQUFHO1FBQ0hDLE1BQUs7UUFDTEMsYUFBWTtRQUNaWCxPQUFPSjtRQUNQZ0IsVUFBVWQ7UUFDVmUsV0FBVTtRQUNWQyxXQUFVOzs7Ozs7QUFHaEI7R0FoQ01uQjtLQUFBQTtBQWtDTiwrREFBZUEsU0FBU0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0NhcmRJbnB1dC5qcz8wNGI4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuY29uc3QgQ2FyZElucHV0ID0gKCkgPT4ge1xuICBjb25zdCBbY2FyZENvZGUsIHNldENhcmRDb2RlXSA9IHVzZVN0YXRlKCcnKTtcblxuICBjb25zdCBoYW5kbGVJbnB1dENoYW5nZSA9IChldmVudCkgPT4ge1xuICAgIGxldCB7IHZhbHVlIH0gPSBldmVudC50YXJnZXQ7XG4gICAgLy8gUmVtb3ZlIGFsbCBub24tbnVtZXJpYyBhbmQgbm9uLWFscGhhYmV0aWMgY2hhcmFjdGVyc1xuICAgIHZhbHVlID0gdmFsdWUucmVwbGFjZSgvW15hLXpBLVowLTldL2csICcnKTtcbiAgXG4gICAgLy8gSW5zZXJ0IGRhc2ggYWZ0ZXIgZXZlcnkgNCBjaGFyYWN0ZXJzXG4gICAgbGV0IG5ld1ZhbHVlID0gJyc7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB2YWx1ZS5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKGkgPiAwICYmIGkgJSA0ID09PSAwKSB7XG4gICAgICAgIG5ld1ZhbHVlICs9ICctJztcbiAgICAgIH1cbiAgICAgIG5ld1ZhbHVlICs9IHZhbHVlW2ldO1xuICAgIH1cbiAgXG4gICAgc2V0Q2FyZENvZGUobmV3VmFsdWUudG9VcHBlckNhc2UoKSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8aW5wdXRcbiAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgIGlkPVwiY2FyZENvZGVcIlxuICAgICAgbmFtZT1cImNhcmRDb2RlXCJcbiAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgdW5pcXVlIGNvZGVcIlxuICAgICAgdmFsdWU9e2NhcmRDb2RlfVxuICAgICAgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfVxuICAgICAgbWF4TGVuZ3RoPVwiMTlcIlxuICAgICAgY2xhc3NOYW1lPVwidGV4dC1ibGFjayBwLTIgcm91bmRlZC1sIHRleHQtc20gZm9jdXM6b3V0bGluZS1ub25lXCJcbiAgICAvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2FyZElucHV0OyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiQ2FyZElucHV0IiwiY2FyZENvZGUiLCJzZXRDYXJkQ29kZSIsImhhbmRsZUlucHV0Q2hhbmdlIiwiZXZlbnQiLCJ2YWx1ZSIsInRhcmdldCIsInJlcGxhY2UiLCJuZXdWYWx1ZSIsImkiLCJsZW5ndGgiLCJ0b1VwcGVyQ2FzZSIsImlucHV0IiwidHlwZSIsImlkIiwibmFtZSIsInBsYWNlaG9sZGVyIiwib25DaGFuZ2UiLCJtYXhMZW5ndGgiLCJjbGFzc05hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/CardInput.js\n"));

/***/ })

});