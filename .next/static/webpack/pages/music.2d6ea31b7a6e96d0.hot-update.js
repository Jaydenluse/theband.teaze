"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/music",{

/***/ "./components/LinkModal.js":
/*!*********************************!*\
  !*** ./components/LinkModal.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst LinkModal = (param)=>{\n    let { album, isOpen, onClose } = param;\n    if (!isOpen || !album) return null;\n    const handleBackdropClick = (event)=>{\n        event.stopPropagation(); // Prevents modal content clicks from propagating\n        onClose();\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"fixed inset-0 bg-black bg-opacity-50 backdrop-blur-md flex justify-center items-center z-50\",\n        onClick: handleBackdropClick,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"phone-modal bg-white p-8 md:p-12 shadow-lg max-w-md mx-auto rounded-lg relative\",\n            onClick: (e)=>e.stopPropagation(),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: onClose,\n                    className: \"absolute top-4 right-6 text-2xl text-gray-600 hover:text-gray-800\",\n                    \"aria-label\": \"Close\",\n                    children: \"\\xd7\"\n                }, void 0, false, {\n                    fileName: \"/Users/KKYAXYU/theband.teaze/components/LinkModal.js\",\n                    lineNumber: 14,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    className: \"phone-modal-text text-xl font-bold mb-8\",\n                    children: [\n                        \"Teaze - \",\n                        album.title\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/KKYAXYU/theband.teaze/components/LinkModal.js\",\n                    lineNumber: 21,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"space-y-4\",\n                    children: album.links.map((link, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"phone-links flex justify-between border-2 items-center bg-gray-100 rounded transition-colors p-2\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex items-center\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                        src: link.image,\n                                        alt: link.title,\n                                        className: \"logo mr-8\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/KKYAXYU/theband.teaze/components/LinkModal.js\",\n                                        lineNumber: 26,\n                                        columnNumber: 33\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/KKYAXYU/theband.teaze/components/LinkModal.js\",\n                                    lineNumber: 25,\n                                    columnNumber: 29\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    href: link.url,\n                                    target: \"_blank\",\n                                    rel: \"noopener noreferrer\",\n                                    className: \"py-2 px-4 bg-gray-400 text-white rounded hover:bg-gray-700 transition-colors\",\n                                    children: \"Play\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/KKYAXYU/theband.teaze/components/LinkModal.js\",\n                                    lineNumber: 28,\n                                    columnNumber: 29\n                                }, undefined)\n                            ]\n                        }, index, true, {\n                            fileName: \"/Users/KKYAXYU/theband.teaze/components/LinkModal.js\",\n                            lineNumber: 24,\n                            columnNumber: 25\n                        }, undefined))\n                }, void 0, false, {\n                    fileName: \"/Users/KKYAXYU/theband.teaze/components/LinkModal.js\",\n                    lineNumber: 22,\n                    columnNumber: 17\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/KKYAXYU/theband.teaze/components/LinkModal.js\",\n            lineNumber: 13,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/KKYAXYU/theband.teaze/components/LinkModal.js\",\n        lineNumber: 12,\n        columnNumber: 9\n    }, undefined);\n};\n_c = LinkModal;\n/* harmony default export */ __webpack_exports__[\"default\"] = (LinkModal);\nvar _c;\n$RefreshReg$(_c, \"LinkModal\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0xpbmtNb2RhbC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBMEI7QUFFMUIsTUFBTUMsWUFBWTtRQUFDLEVBQUVDLEtBQUssRUFBRUMsTUFBTSxFQUFFQyxPQUFPLEVBQUU7SUFDekMsSUFBSSxDQUFDRCxVQUFVLENBQUNELE9BQU8sT0FBTztJQUU5QixNQUFNRyxzQkFBc0IsQ0FBQ0M7UUFDekJBLE1BQU1DLGVBQWUsSUFBSSxpREFBaUQ7UUFDMUVIO0lBQ0o7SUFFQSxxQkFDSSw4REFBQ0k7UUFBSUMsV0FBVTtRQUE4RkMsU0FBU0w7a0JBQ2xILDRFQUFDRztZQUFJQyxXQUFVO1lBQWtGQyxTQUFTLENBQUNDLElBQU1BLEVBQUVKLGVBQWU7OzhCQUM5SCw4REFBQ0s7b0JBQ0dGLFNBQVNOO29CQUNUSyxXQUFVO29CQUNWSSxjQUFXOzhCQUNkOzs7Ozs7OEJBR0QsOERBQUNDO29CQUFHTCxXQUFVOzt3QkFBMEM7d0JBQVNQLE1BQU1hLEtBQUs7Ozs7Ozs7OEJBQzVFLDhEQUFDUDtvQkFBSUMsV0FBVTs4QkFDVlAsTUFBTWMsS0FBSyxDQUFDQyxHQUFHLENBQUMsQ0FBQ0MsTUFBTUMsc0JBQ3BCLDhEQUFDWDs0QkFBZ0JDLFdBQVU7OzhDQUN2Qiw4REFBQ0Q7b0NBQUlDLFdBQVU7OENBQ1gsNEVBQUNXO3dDQUFJQyxLQUFLSCxLQUFLSSxLQUFLO3dDQUFFQyxLQUFLTCxLQUFLSCxLQUFLO3dDQUFFTixXQUFVOzs7Ozs7Ozs7Ozs4Q0FFckQsOERBQUNlO29DQUNHQyxNQUFNUCxLQUFLUSxHQUFHO29DQUNkQyxRQUFPO29DQUNQQyxLQUFJO29DQUNKbkIsV0FBVTs4Q0FDYjs7Ozs7OzsyQkFUS1U7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWtCbEM7S0F2Q01sQjtBQXlDTiwrREFBZUEsU0FBU0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0xpbmtNb2RhbC5qcz9hYjIzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IExpbmtNb2RhbCA9ICh7IGFsYnVtLCBpc09wZW4sIG9uQ2xvc2UgfSkgPT4ge1xuICAgIGlmICghaXNPcGVuIHx8ICFhbGJ1bSkgcmV0dXJuIG51bGw7XG5cbiAgICBjb25zdCBoYW5kbGVCYWNrZHJvcENsaWNrID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpOyAvLyBQcmV2ZW50cyBtb2RhbCBjb250ZW50IGNsaWNrcyBmcm9tIHByb3BhZ2F0aW5nXG4gICAgICAgIG9uQ2xvc2UoKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaXhlZCBpbnNldC0wIGJnLWJsYWNrIGJnLW9wYWNpdHktNTAgYmFja2Ryb3AtYmx1ci1tZCBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciB6LTUwXCIgb25DbGljaz17aGFuZGxlQmFja2Ryb3BDbGlja30+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBob25lLW1vZGFsIGJnLXdoaXRlIHAtOCBtZDpwLTEyIHNoYWRvdy1sZyBtYXgtdy1tZCBteC1hdXRvIHJvdW5kZWQtbGcgcmVsYXRpdmVcIiBvbkNsaWNrPXsoZSkgPT4gZS5zdG9wUHJvcGFnYXRpb24oKX0+XG4gICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtvbkNsb3NlfVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0b3AtNCByaWdodC02IHRleHQtMnhsIHRleHQtZ3JheS02MDAgaG92ZXI6dGV4dC1ncmF5LTgwMFwiXG4gICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJDbG9zZVwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAmdGltZXM7XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInBob25lLW1vZGFsLXRleHQgdGV4dC14bCBmb250LWJvbGQgbWItOFwiPlRlYXplIC0ge2FsYnVtLnRpdGxlfTwvaDI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTRcIj5cbiAgICAgICAgICAgICAgICAgICAge2FsYnVtLmxpbmtzLm1hcCgobGluaywgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0gY2xhc3NOYW1lPVwicGhvbmUtbGlua3MgZmxleCBqdXN0aWZ5LWJldHdlZW4gYm9yZGVyLTIgaXRlbXMtY2VudGVyIGJnLWdyYXktMTAwIHJvdW5kZWQgdHJhbnNpdGlvbi1jb2xvcnMgcC0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17bGluay5pbWFnZX0gYWx0PXtsaW5rLnRpdGxlfSBjbGFzc05hbWU9XCJsb2dvIG1yLThcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e2xpbmsudXJsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHktMiBweC00IGJnLWdyYXktNDAwIHRleHQtd2hpdGUgcm91bmRlZCBob3ZlcjpiZy1ncmF5LTcwMCB0cmFuc2l0aW9uLWNvbG9yc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBQbGF5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBMaW5rTW9kYWw7Il0sIm5hbWVzIjpbIlJlYWN0IiwiTGlua01vZGFsIiwiYWxidW0iLCJpc09wZW4iLCJvbkNsb3NlIiwiaGFuZGxlQmFja2Ryb3BDbGljayIsImV2ZW50Iiwic3RvcFByb3BhZ2F0aW9uIiwiZGl2IiwiY2xhc3NOYW1lIiwib25DbGljayIsImUiLCJidXR0b24iLCJhcmlhLWxhYmVsIiwiaDIiLCJ0aXRsZSIsImxpbmtzIiwibWFwIiwibGluayIsImluZGV4IiwiaW1nIiwic3JjIiwiaW1hZ2UiLCJhbHQiLCJhIiwiaHJlZiIsInVybCIsInRhcmdldCIsInJlbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/LinkModal.js\n"));

/***/ })

});