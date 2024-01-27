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

/***/ "./pages/extras.js":
/*!*************************!*\
  !*** ./pages/extras.js ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Extras; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Header */ \"./components/Header.js\");\n/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Footer */ \"./components/Footer.js\");\n/* harmony import */ var _components_CardInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/CardInput */ \"./components/CardInput.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction Extras() {\n    _s();\n    const [cards, setCards] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        const fetchCards = async ()=>{\n            try {\n                const response = await fetch(\"https://thebandteazebackend-production.up.railway.app/api/getcards\");\n                const data = await response.json();\n                setCards(data);\n            } catch (error) {\n                console.error(\"Error fetching cards:\", error);\n            }\n        };\n        fetchCards();\n    }, []);\n    // Function to update card state\n    const updateCardState = async ()=>{\n        s;\n        try {\n            const response = await fetch(\"http://localhost:5000/api/getcards\");\n            const data = await response.json();\n            setCards(data);\n        } catch (error) {\n            console.error(\"Error fetching updated cards:\", error);\n        }\n    };\n    // brightness-50 and red/pink border when the card is discovered\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/KKYAXYU/theband.teaze/pages/extras.js\",\n                lineNumber: 38,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"key-container flex flex-col items-start\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex mb-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"key-item ml-10\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"discovered-key-square bg-white border border-green-\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/KKYAXYU/theband.teaze/pages/extras.js\",\n                                        lineNumber: 43,\n                                        columnNumber: 25\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"text-white ml-3\",\n                                        children: \" Not Found\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/KKYAXYU/theband.teaze/pages/extras.js\",\n                                        lineNumber: 44,\n                                        columnNumber: 25\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/KKYAXYU/theband.teaze/pages/extras.js\",\n                                lineNumber: 42,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"key-item\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"key-square bg-white brightness-50 border border-pink-500\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/KKYAXYU/theband.teaze/pages/extras.js\",\n                                        lineNumber: 47,\n                                        columnNumber: 25\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"text-white ml-3\",\n                                        children: \" Found\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/KKYAXYU/theband.teaze/pages/extras.js\",\n                                        lineNumber: 48,\n                                        columnNumber: 25\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/KKYAXYU/theband.teaze/pages/extras.js\",\n                                lineNumber: 46,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/KKYAXYU/theband.teaze/pages/extras.js\",\n                        lineNumber: 41,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"card-input-container flex\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_CardInput__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            updateCardState: updateCardState\n                        }, void 0, false, {\n                            fileName: \"/Users/KKYAXYU/theband.teaze/pages/extras.js\",\n                            lineNumber: 52,\n                            columnNumber: 17\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/KKYAXYU/theband.teaze/pages/extras.js\",\n                        lineNumber: 51,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/KKYAXYU/theband.teaze/pages/extras.js\",\n                lineNumber: 40,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid-container\",\n                children: cards.map((card, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"card-container\",\n                        style: {\n                            position: \"relative\",\n                            display: \"inline-block\",\n                            margin: \"25px\"\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: \"images/cards/card_\".concat(index + 1, \".JPG\"),\n                                alt: \"Card \".concat(index + 1),\n                                style: {\n                                    height: \"200px\",\n                                    width: \"87%\",\n                                    filter: card.found ? \"brightness(50%)\" : \"\",\n                                    transition: \"filter 500ms ease\",\n                                    borderStyle: \"solid\",\n                                    borderWidth: \"2px\",\n                                    borderColor: card.found ? \"#FF1493\" : \"#00FF00\"\n                                }\n                            }, void 0, false, {\n                                fileName: \"/Users/KKYAXYU/theband.teaze/pages/extras.js\",\n                                lineNumber: 59,\n                                columnNumber: 25\n                            }, this),\n                            card.found && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                style: {\n                                    position: \"absolute\",\n                                    top: \"50%\",\n                                    left: \"42%\",\n                                    transform: \"translate(-50%, -50%)\",\n                                    color: \"#FF1493\",\n                                    fontWeight: \"bold\",\n                                    fontSize: \"24px\",\n                                    textShadow: \"2px 2px 4px rgba(0, 0, 0, 0.5)\"\n                                },\n                                children: \"FOUND\"\n                            }, void 0, false, {\n                                fileName: \"/Users/KKYAXYU/theband.teaze/pages/extras.js\",\n                                lineNumber: 73,\n                                columnNumber: 29\n                            }, this)\n                        ]\n                    }, index, true, {\n                        fileName: \"/Users/KKYAXYU/theband.teaze/pages/extras.js\",\n                        lineNumber: 58,\n                        columnNumber: 21\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/Users/KKYAXYU/theband.teaze/pages/extras.js\",\n                lineNumber: 56,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Footer__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                videoLink: \"https://www.youtube.com/watch?v=FFlWJHOUhhs\"\n            }, void 0, false, {\n                fileName: \"/Users/KKYAXYU/theband.teaze/pages/extras.js\",\n                lineNumber: 90,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Extras, \"M51NroWgc5aUEHiqsZiaQ+7WeWA=\");\n_c = Extras;\nvar _c;\n$RefreshReg$(_c, \"Extras\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9leHRyYXMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUEwQztBQUNBO0FBQ007QUFDSjtBQUU3QixTQUFTSzs7SUFDcEIsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdKLCtDQUFRQSxDQUFDLEVBQUU7SUFFckNDLGdEQUFTQSxDQUFDO1FBQ04sTUFBTUksYUFBYTtZQUNmLElBQUk7Z0JBQ0EsTUFBTUMsV0FBVyxNQUFNQyxNQUFPO2dCQUM5QixNQUFNQyxPQUFPLE1BQU1GLFNBQVNHLElBQUk7Z0JBQ2hDTCxTQUFTSTtZQUNiLEVBQUUsT0FBT0UsT0FBTztnQkFDWkMsUUFBUUQsS0FBSyxDQUFDLHlCQUF5QkE7WUFDM0M7UUFDSjtRQUVBTDtJQUNKLEdBQUcsRUFBRTtJQUVMLGdDQUFnQztJQUNoQyxNQUFNTyxrQkFBa0I7UUFBYUM7UUFDakMsSUFBSTtZQUNBLE1BQU1QLFdBQVcsTUFBTUMsTUFBTTtZQUM3QixNQUFNQyxPQUFPLE1BQU1GLFNBQVNHLElBQUk7WUFDaENMLFNBQVNJO1FBQ2IsRUFBRSxPQUFPRSxPQUFPO1lBQ1pDLFFBQVFELEtBQUssQ0FBQyxpQ0FBaUNBO1FBQ25EO0lBQ0o7SUFFQSxnRUFBZ0U7SUFFaEUscUJBQ0k7OzBCQUNJLDhEQUFDYiwwREFBTUE7Ozs7OzBCQUVQLDhEQUFDaUI7Z0JBQUlDLFdBQVU7O2tDQUNYLDhEQUFDRDt3QkFBSUMsV0FBVTs7MENBQ1gsOERBQUNEO2dDQUFJQyxXQUFVOztrREFDWCw4REFBQ0Q7d0NBQUlDLFdBQVU7Ozs7OztrREFDZiw4REFBQ0M7d0NBQUtELFdBQVU7a0RBQWtCOzs7Ozs7Ozs7Ozs7MENBRXRDLDhEQUFDRDtnQ0FBSUMsV0FBVTs7a0RBQ1gsOERBQUNEO3dDQUFJQyxXQUFVOzs7Ozs7a0RBQ2YsOERBQUNDO3dDQUFLRCxXQUFVO2tEQUFrQjs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQUcxQyw4REFBQ0Q7d0JBQUlDLFdBQVU7a0NBQ2YsNEVBQUNoQiw2REFBU0E7NEJBQUNhLGlCQUFpQkE7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUloQyw4REFBQ0U7Z0JBQUlDLFdBQVU7MEJBQ1ZaLE1BQU1jLEdBQUcsQ0FBQyxDQUFDQyxNQUFNQyxzQkFDZCw4REFBQ0w7d0JBQWdCQyxXQUFVO3dCQUFpQkssT0FBTzs0QkFBRUMsVUFBVTs0QkFBWUMsU0FBUzs0QkFBZ0JDLFFBQVE7d0JBQU87OzBDQUMvRyw4REFBQ0M7Z0NBQ0dDLEtBQUsscUJBQStCLE9BQVZOLFFBQVEsR0FBRTtnQ0FDcENPLEtBQUssUUFBa0IsT0FBVlAsUUFBUTtnQ0FDckJDLE9BQU87b0NBQ0hPLFFBQVE7b0NBQ1JDLE9BQU87b0NBQ1BDLFFBQVFYLEtBQUtZLEtBQUssR0FBRyxvQkFBb0I7b0NBQ3pDQyxZQUFZO29DQUNaQyxhQUFhO29DQUNiQyxhQUFhO29DQUNiQyxhQUFhaEIsS0FBS1ksS0FBSyxHQUFHLFlBQVk7Z0NBQzFDOzs7Ozs7NEJBRUhaLEtBQUtZLEtBQUssa0JBQ1AsOERBQUNkO2dDQUFLSSxPQUFPO29DQUNUQyxVQUFVO29DQUNWYyxLQUFLO29DQUNMQyxNQUFNO29DQUNOQyxXQUFXO29DQUNYQyxPQUFPO29DQUNQQyxZQUFZO29DQUNaQyxVQUFVO29DQUNWQyxZQUFZO2dDQUNoQjswQ0FBRzs7Ozs7Ozt1QkF4QkR0Qjs7Ozs7Ozs7OzswQkFnQ2xCLDhEQUFDckIsMERBQU1BO2dCQUFDNEMsV0FBVTs7Ozs7Ozs7QUFHOUI7R0F2RndCeEM7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZXh0cmFzLmpzPzZkZWEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWRlciBmcm9tIFwiLi4vY29tcG9uZW50cy9IZWFkZXJcIjtcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvRm9vdGVyXCI7XG5pbXBvcnQgQ2FyZElucHV0IGZyb20gXCIuLi9jb21wb25lbnRzL0NhcmRJbnB1dFwiO1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRXh0cmFzKCkge1xuICAgIGNvbnN0IFtjYXJkcywgc2V0Q2FyZHNdID0gdXNlU3RhdGUoW10pO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3QgZmV0Y2hDYXJkcyA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly90aGViYW5kdGVhemViYWNrZW5kLXByb2R1Y3Rpb24udXAucmFpbHdheS5hcHAvYXBpL2dldGNhcmRzYCk7XG4gICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgICAgICAgICBzZXRDYXJkcyhkYXRhKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgY2FyZHM6JywgZXJyb3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIGZldGNoQ2FyZHMoKTtcbiAgICB9LCBbXSk7XG5cbiAgICAvLyBGdW5jdGlvbiB0byB1cGRhdGUgY2FyZCBzdGF0ZVxuICAgIGNvbnN0IHVwZGF0ZUNhcmRTdGF0ZSA9IGFzeW5jICgpID0+IHtzXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjUwMDAvYXBpL2dldGNhcmRzJyk7XG4gICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICAgICAgc2V0Q2FyZHMoZGF0YSk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyB1cGRhdGVkIGNhcmRzOicsIGVycm9yKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvLyBicmlnaHRuZXNzLTUwIGFuZCByZWQvcGluayBib3JkZXIgd2hlbiB0aGUgY2FyZCBpcyBkaXNjb3ZlcmVkXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPEhlYWRlciAvPlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImtleS1jb250YWluZXIgZmxleCBmbGV4LWNvbCBpdGVtcy1zdGFydFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBtYi00XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwia2V5LWl0ZW0gbWwtMTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGlzY292ZXJlZC1rZXktc3F1YXJlIGJnLXdoaXRlIGJvcmRlciBib3JkZXItZ3JlZW4tXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIG1sLTNcIj4gTm90IEZvdW5kPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJrZXktaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJrZXktc3F1YXJlIGJnLXdoaXRlIGJyaWdodG5lc3MtNTAgYm9yZGVyIGJvcmRlci1waW5rLTUwMFwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC13aGl0ZSBtbC0zXCI+IEZvdW5kPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtaW5wdXQtY29udGFpbmVyIGZsZXhcIj5cbiAgICAgICAgICAgICAgICA8Q2FyZElucHV0IHVwZGF0ZUNhcmRTdGF0ZT17dXBkYXRlQ2FyZFN0YXRlfS8+IFxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICB7Y2FyZHMubWFwKChjYXJkLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9IGNsYXNzTmFtZT1cImNhcmQtY29udGFpbmVyXCIgc3R5bGU9e3sgcG9zaXRpb246ICdyZWxhdGl2ZScsIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLCBtYXJnaW46ICcyNXB4JyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtgaW1hZ2VzL2NhcmRzL2NhcmRfJHtpbmRleCArIDF9LkpQR2B9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD17YENhcmQgJHtpbmRleCArIDF9YH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6ICcyMDBweCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAnODclJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyOiBjYXJkLmZvdW5kID8gJ2JyaWdodG5lc3MoNTAlKScgOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogJ2ZpbHRlciA1MDBtcyBlYXNlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyU3R5bGU6ICdzb2xpZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcldpZHRoOiAnMnB4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6IGNhcmQuZm91bmQgPyAnI0ZGMTQ5MycgOiAnIzAwRkYwMCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fSBcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICB7Y2FyZC5mb3VuZCAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogJzUwJScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6ICc0MiUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGUoLTUwJSwgLTUwJSknLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJyNGRjE0OTMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiAnYm9sZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAnMjRweCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRTaGFkb3c6ICcycHggMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuNSknXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZPVU5EXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPEZvb3RlciB2aWRlb0xpbms9J2h0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9RkZsV0pIT1VoaHMnLz5cbiAgICAgICAgPC8+XG4gICAgKTtcbn0iXSwibmFtZXMiOlsiSGVhZGVyIiwiRm9vdGVyIiwiQ2FyZElucHV0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJFeHRyYXMiLCJjYXJkcyIsInNldENhcmRzIiwiZmV0Y2hDYXJkcyIsInJlc3BvbnNlIiwiZmV0Y2giLCJkYXRhIiwianNvbiIsImVycm9yIiwiY29uc29sZSIsInVwZGF0ZUNhcmRTdGF0ZSIsInMiLCJkaXYiLCJjbGFzc05hbWUiLCJzcGFuIiwibWFwIiwiY2FyZCIsImluZGV4Iiwic3R5bGUiLCJwb3NpdGlvbiIsImRpc3BsYXkiLCJtYXJnaW4iLCJpbWciLCJzcmMiLCJhbHQiLCJoZWlnaHQiLCJ3aWR0aCIsImZpbHRlciIsImZvdW5kIiwidHJhbnNpdGlvbiIsImJvcmRlclN0eWxlIiwiYm9yZGVyV2lkdGgiLCJib3JkZXJDb2xvciIsInRvcCIsImxlZnQiLCJ0cmFuc2Zvcm0iLCJjb2xvciIsImZvbnRXZWlnaHQiLCJmb250U2l6ZSIsInRleHRTaGFkb3ciLCJ2aWRlb0xpbmsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/extras.js\n"));

/***/ })

});