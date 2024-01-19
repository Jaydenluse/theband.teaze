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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst LinkModal = (param)=>{\n    let { album, isOpen, onClose } = param;\n    if (!isOpen || !album) return null;\n    const handleBackdropClick = (event)=>{\n        event.stopPropagation(); // Prevents modal content clicks from propagating\n        onClose();\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"fixed inset-0 bg-black bg-opacity-50 backdrop-blur-md flex justify-center items-center z-50\",\n        onClick: handleBackdropClick,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"bg-white p-8 md:p-12 shadow-lg max-w-md mx-auto rounded-lg relative\",\n            onClick: (e)=>e.stopPropagation(),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: onClose,\n                    className: \"absolute top-4 right-6 text-2xl text-gray-600 hover:text-gray-800\",\n                    \"aria-label\": \"Close\",\n                    children: \"\\xd7\"\n                }, void 0, false, {\n                    fileName: \"/Users/KKYAXYU/theband.teaze/components/LinkModal.js\",\n                    lineNumber: 14,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    className: \"text-xl font-bold mb-8\",\n                    children: [\n                        \"Teaze - \",\n                        album.title\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/KKYAXYU/theband.teaze/components/LinkModal.js\",\n                    lineNumber: 21,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"space-y-4\",\n                    children: video.links.map((link, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex justify-between border-2 items-center bg-gray-100 rounded transition-colors p-2\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex items-center\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                        src: link.image,\n                                        alt: link.title,\n                                        className: \"logo mr-8\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/KKYAXYU/theband.teaze/components/LinkModal.js\",\n                                        lineNumber: 26,\n                                        columnNumber: 33\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/KKYAXYU/theband.teaze/components/LinkModal.js\",\n                                    lineNumber: 25,\n                                    columnNumber: 29\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    href: link.url,\n                                    target: \"_blank\",\n                                    rel: \"noopener noreferrer\",\n                                    className: \"py-2 px-4 bg-gray-400 text-white rounded hover:bg-gray-700 transition-colors\",\n                                    children: \"Play\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/KKYAXYU/theband.teaze/components/LinkModal.js\",\n                                    lineNumber: 28,\n                                    columnNumber: 29\n                                }, undefined)\n                            ]\n                        }, index, true, {\n                            fileName: \"/Users/KKYAXYU/theband.teaze/components/LinkModal.js\",\n                            lineNumber: 24,\n                            columnNumber: 25\n                        }, undefined))\n                }, void 0, false, {\n                    fileName: \"/Users/KKYAXYU/theband.teaze/components/LinkModal.js\",\n                    lineNumber: 22,\n                    columnNumber: 17\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/KKYAXYU/theband.teaze/components/LinkModal.js\",\n            lineNumber: 13,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/KKYAXYU/theband.teaze/components/LinkModal.js\",\n        lineNumber: 12,\n        columnNumber: 9\n    }, undefined);\n};\n_c = LinkModal;\n/* harmony default export */ __webpack_exports__[\"default\"] = (LinkModal);\nvar _c;\n$RefreshReg$(_c, \"LinkModal\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0xpbmtNb2RhbC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBMEI7QUFFMUIsTUFBTUMsWUFBWTtRQUFDLEVBQUVDLEtBQUssRUFBRUMsTUFBTSxFQUFFQyxPQUFPLEVBQUU7SUFDekMsSUFBSSxDQUFDRCxVQUFVLENBQUNELE9BQU8sT0FBTztJQUU5QixNQUFNRyxzQkFBc0IsQ0FBQ0M7UUFDekJBLE1BQU1DLGVBQWUsSUFBSSxpREFBaUQ7UUFDMUVIO0lBQ0o7SUFFQSxxQkFDSSw4REFBQ0k7UUFBSUMsV0FBVTtRQUE4RkMsU0FBU0w7a0JBQ2xILDRFQUFDRztZQUFJQyxXQUFVO1lBQXNFQyxTQUFTLENBQUNDLElBQU1BLEVBQUVKLGVBQWU7OzhCQUNsSCw4REFBQ0s7b0JBQ0dGLFNBQVNOO29CQUNUSyxXQUFVO29CQUNWSSxjQUFXOzhCQUNkOzs7Ozs7OEJBR0QsOERBQUNDO29CQUFHTCxXQUFVOzt3QkFBeUI7d0JBQVNQLE1BQU1hLEtBQUs7Ozs7Ozs7OEJBQzNELDhEQUFDUDtvQkFBSUMsV0FBVTs4QkFDVk8sTUFBTUMsS0FBSyxDQUFDQyxHQUFHLENBQUMsQ0FBQ0MsTUFBTUMsc0JBQ3BCLDhEQUFDWjs0QkFBZ0JDLFdBQVU7OzhDQUN2Qiw4REFBQ0Q7b0NBQUlDLFdBQVU7OENBQ1gsNEVBQUNZO3dDQUFJQyxLQUFLSCxLQUFLSSxLQUFLO3dDQUFFQyxLQUFLTCxLQUFLSixLQUFLO3dDQUFFTixXQUFVOzs7Ozs7Ozs7Ozs4Q0FFckQsOERBQUNnQjtvQ0FDR0MsTUFBTVAsS0FBS1EsR0FBRztvQ0FDZEMsUUFBTztvQ0FDUEMsS0FBSTtvQ0FDSnBCLFdBQVU7OENBQ2I7Ozs7Ozs7MkJBVEtXOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFrQmxDO0tBdkNNbkI7QUF5Q04sK0RBQWVBLFNBQVNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MaW5rTW9kYWwuanM/YWIyMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5jb25zdCBMaW5rTW9kYWwgPSAoeyBhbGJ1bSwgaXNPcGVuLCBvbkNsb3NlIH0pID0+IHtcbiAgICBpZiAoIWlzT3BlbiB8fCAhYWxidW0pIHJldHVybiBudWxsO1xuXG4gICAgY29uc3QgaGFuZGxlQmFja2Ryb3BDbGljayA9IChldmVudCkgPT4ge1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTsgLy8gUHJldmVudHMgbW9kYWwgY29udGVudCBjbGlja3MgZnJvbSBwcm9wYWdhdGluZ1xuICAgICAgICBvbkNsb3NlKCk7XG4gICAgfTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZml4ZWQgaW5zZXQtMCBiZy1ibGFjayBiZy1vcGFjaXR5LTUwIGJhY2tkcm9wLWJsdXItbWQgZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgei01MFwiIG9uQ2xpY2s9e2hhbmRsZUJhY2tkcm9wQ2xpY2t9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy13aGl0ZSBwLTggbWQ6cC0xMiBzaGFkb3ctbGcgbWF4LXctbWQgbXgtYXV0byByb3VuZGVkLWxnIHJlbGF0aXZlXCIgb25DbGljaz17KGUpID0+IGUuc3RvcFByb3BhZ2F0aW9uKCl9PlxuICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17b25DbG9zZX1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdG9wLTQgcmlnaHQtNiB0ZXh0LTJ4bCB0ZXh0LWdyYXktNjAwIGhvdmVyOnRleHQtZ3JheS04MDBcIlxuICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiQ2xvc2VcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgJnRpbWVzO1xuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtYm9sZCBtYi04XCI+VGVhemUgLSB7YWxidW0udGl0bGV9PC9oMj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktNFwiPlxuICAgICAgICAgICAgICAgICAgICB7dmlkZW8ubGlua3MubWFwKChsaW5rLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2luZGV4fSBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiBib3JkZXItMiBpdGVtcy1jZW50ZXIgYmctZ3JheS0xMDAgcm91bmRlZCB0cmFuc2l0aW9uLWNvbG9ycyBwLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtsaW5rLmltYWdlfSBhbHQ9e2xpbmsudGl0bGV9IGNsYXNzTmFtZT1cImxvZ28gbXItOFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17bGluay51cmx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJweS0yIHB4LTQgYmctZ3JheS00MDAgdGV4dC13aGl0ZSByb3VuZGVkIGhvdmVyOmJnLWdyYXktNzAwIHRyYW5zaXRpb24tY29sb3JzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFBsYXlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExpbmtNb2RhbDsiXSwibmFtZXMiOlsiUmVhY3QiLCJMaW5rTW9kYWwiLCJhbGJ1bSIsImlzT3BlbiIsIm9uQ2xvc2UiLCJoYW5kbGVCYWNrZHJvcENsaWNrIiwiZXZlbnQiLCJzdG9wUHJvcGFnYXRpb24iLCJkaXYiLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwiZSIsImJ1dHRvbiIsImFyaWEtbGFiZWwiLCJoMiIsInRpdGxlIiwidmlkZW8iLCJsaW5rcyIsIm1hcCIsImxpbmsiLCJpbmRleCIsImltZyIsInNyYyIsImltYWdlIiwiYWx0IiwiYSIsImhyZWYiLCJ1cmwiLCJ0YXJnZXQiLCJyZWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/LinkModal.js\n"));

/***/ })

});