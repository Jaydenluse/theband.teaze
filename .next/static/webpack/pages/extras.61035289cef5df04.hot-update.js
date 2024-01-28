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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Extras; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Header */ \"./components/Header.js\");\n/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Footer */ \"./components/Footer.js\");\n/* harmony import */ var _components_CardInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/CardInput */ \"./components/CardInput.js\");\n/* harmony import */ var _components_PrizeModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/PrizeModal */ \"./components/PrizeModal.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Extras() {\n    _s();\n    const [cards, setCards] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)([]);\n    const [showPrizeModal, setShowPrizeModal] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false);\n    const handleShowPrizeModal = (show)=>{\n        setShowPrizeModal(show);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{\n        const fetchCards = async ()=>{\n            try {\n                const response = await fetch(\"https://thebandteazebackend-production.up.railway.app/api/getcards\");\n                const data = await response.json();\n                setCards(data);\n            } catch (error) {\n                console.error(\"Error fetching cards:\", error);\n            }\n        };\n        fetchCards();\n    }, []);\n    // Function to update card state\n    const updateCardState = async ()=>{\n        s;\n        try {\n            const response = await fetch(\"http://localhost:5000/api/getcards\");\n            const data = await response.json();\n            setCards(data);\n        } catch (error) {\n            console.error(\"Error fetching updated cards:\", error);\n        }\n    };\n    // brightness-50 and red/pink border when the card is discovered\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/KKYAXYU/theband.teaze/pages/extras.js\",\n                lineNumber: 44,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"key-container flex flex-col items-start\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"card-input-container flex\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_CardInput__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        updateCardState: updateCardState,\n                        onPrizeWin: handleShowPrizeModal\n                    }, void 0, false, {\n                        fileName: \"/Users/KKYAXYU/theband.teaze/pages/extras.js\",\n                        lineNumber: 48,\n                        columnNumber: 17\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/KKYAXYU/theband.teaze/pages/extras.js\",\n                    lineNumber: 47,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/KKYAXYU/theband.teaze/pages/extras.js\",\n                lineNumber: 46,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid-container\",\n                children: cards.map((card, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"card-container\",\n                        style: {\n                            position: \"relative\",\n                            display: \"inline-block\",\n                            margin: \"25px\"\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: \"images/cards/card_\".concat(index + 1, \".JPG\"),\n                                alt: \"Card \".concat(index + 1),\n                                className: \"card-style \".concat(card.found ? \"card-found\" : \"card-not-found\")\n                            }, index, false, {\n                                fileName: \"/Users/KKYAXYU/theband.teaze/pages/extras.js\",\n                                lineNumber: 55,\n                                columnNumber: 25\n                            }, this),\n                            card.found && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: \"images/found.PNG\",\n                                alt: \"Found\",\n                                className: \"found-image\"\n                            }, void 0, false, {\n                                fileName: \"/Users/KKYAXYU/theband.teaze/pages/extras.js\",\n                                lineNumber: 62,\n                                columnNumber: 29\n                            }, this)\n                        ]\n                    }, index, true, {\n                        fileName: \"/Users/KKYAXYU/theband.teaze/pages/extras.js\",\n                        lineNumber: 54,\n                        columnNumber: 21\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/Users/KKYAXYU/theband.teaze/pages/extras.js\",\n                lineNumber: 52,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_PrizeModal__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                isOpen: showPrizeModal,\n                onClose: ()=>setShowPrizeModal(false),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: \"Congratulations! You won a prize!\"\n                }, void 0, false, {\n                    fileName: \"/Users/KKYAXYU/theband.teaze/pages/extras.js\",\n                    lineNumber: 71,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/KKYAXYU/theband.teaze/pages/extras.js\",\n                lineNumber: 67,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Footer__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                videoLink: \"https://www.youtube.com/watch?v=FFlWJHOUhhs\"\n            }, void 0, false, {\n                fileName: \"/Users/KKYAXYU/theband.teaze/pages/extras.js\",\n                lineNumber: 73,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Extras, \"5XOMG2LAZdCgFlC/yrZ5bDTr+RE=\");\n_c = Extras;\nvar _c;\n$RefreshReg$(_c, \"Extras\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9leHRyYXMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBMEM7QUFDQTtBQUNNO0FBQ0U7QUFDTjtBQUU3QixTQUFTTTs7SUFDcEIsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdKLCtDQUFRQSxDQUFDLEVBQUU7SUFDckMsTUFBTSxDQUFDSyxnQkFBZ0JDLGtCQUFrQixHQUFHTiwrQ0FBUUEsQ0FBQztJQUVyRCxNQUFNTyx1QkFBdUIsQ0FBQ0M7UUFDOUJGLGtCQUFrQkU7SUFDbEI7SUFFQVAsZ0RBQVNBLENBQUM7UUFDTixNQUFNUSxhQUFhO1lBQ2YsSUFBSTtnQkFDQSxNQUFNQyxXQUFXLE1BQU1DLE1BQU87Z0JBQzlCLE1BQU1DLE9BQU8sTUFBTUYsU0FBU0csSUFBSTtnQkFDaENULFNBQVNRO1lBQ2IsRUFBRSxPQUFPRSxPQUFPO2dCQUNaQyxRQUFRRCxLQUFLLENBQUMseUJBQXlCQTtZQUMzQztRQUNKO1FBRUFMO0lBQ0osR0FBRyxFQUFFO0lBRUwsZ0NBQWdDO0lBQ2hDLE1BQU1PLGtCQUFrQjtRQUFhQztRQUNqQyxJQUFJO1lBQ0EsTUFBTVAsV0FBVyxNQUFNQyxNQUFNO1lBQzdCLE1BQU1DLE9BQU8sTUFBTUYsU0FBU0csSUFBSTtZQUNoQ1QsU0FBU1E7UUFDYixFQUFFLE9BQU9FLE9BQU87WUFDWkMsUUFBUUQsS0FBSyxDQUFDLGlDQUFpQ0E7UUFDbkQ7SUFDSjtJQUVBLGdFQUFnRTtJQUVoRSxxQkFDSTs7MEJBQ0ksOERBQUNsQiwwREFBTUE7Ozs7OzBCQUVQLDhEQUFDc0I7Z0JBQUlDLFdBQVU7MEJBQ1gsNEVBQUNEO29CQUFJQyxXQUFVOzhCQUNmLDRFQUFDckIsNkRBQVNBO3dCQUFDa0IsaUJBQWlCQTt3QkFBaUJJLFlBQVliOzs7Ozs7Ozs7Ozs7Ozs7OzBCQUk3RCw4REFBQ1c7Z0JBQUlDLFdBQVU7MEJBQ1ZoQixNQUFNa0IsR0FBRyxDQUFDLENBQUNDLE1BQU1DLHNCQUNkLDhEQUFDTDt3QkFBZ0JDLFdBQVU7d0JBQWlCSyxPQUFPOzRCQUFFQyxVQUFVOzRCQUFZQyxTQUFTOzRCQUFnQkMsUUFBUTt3QkFBTzs7MENBQy9HLDhEQUFDQztnQ0FFREMsS0FBSyxxQkFBK0IsT0FBVk4sUUFBUSxHQUFFO2dDQUNwQ08sS0FBSyxRQUFrQixPQUFWUCxRQUFRO2dDQUNyQkosV0FBVyxjQUEyRCxPQUE3Q0csS0FBS1MsS0FBSyxHQUFHLGVBQWU7K0JBSGhEUjs7Ozs7NEJBS0pELEtBQUtTLEtBQUssa0JBQ1AsOERBQUNIO2dDQUFJQyxLQUFJO2dDQUFtQkMsS0FBSTtnQ0FBUVgsV0FBVTs7Ozs7Ozt1QkFSaERJOzs7Ozs7Ozs7OzBCQWFsQiw4REFBQ3hCLDhEQUFVQTtnQkFDVGlDLFFBQVEzQjtnQkFDUjRCLFNBQVMsSUFBTTNCLGtCQUFrQjswQkFFL0IsNEVBQUM0Qjs4QkFBRTs7Ozs7Ozs7Ozs7MEJBRVAsOERBQUNyQywwREFBTUE7Z0JBQUNzQyxXQUFVOzs7Ozs7OztBQUc5QjtHQXJFd0JqQztLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9leHRyYXMuanM/NmRlYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZGVyIGZyb20gXCIuLi9jb21wb25lbnRzL0hlYWRlclwiO1xuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi4vY29tcG9uZW50cy9Gb290ZXJcIjtcbmltcG9ydCBDYXJkSW5wdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvQ2FyZElucHV0XCI7XG5pbXBvcnQgUHJpemVNb2RhbCBmcm9tIFwiLi4vY29tcG9uZW50cy9Qcml6ZU1vZGFsXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBFeHRyYXMoKSB7XG4gICAgY29uc3QgW2NhcmRzLCBzZXRDYXJkc10gPSB1c2VTdGF0ZShbXSk7XG4gICAgY29uc3QgW3Nob3dQcml6ZU1vZGFsLCBzZXRTaG93UHJpemVNb2RhbF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgICBjb25zdCBoYW5kbGVTaG93UHJpemVNb2RhbCA9IChzaG93KSA9PiB7XG4gICAgc2V0U2hvd1ByaXplTW9kYWwoc2hvdyk7XG4gICAgfTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGZldGNoQ2FyZHMgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vdGhlYmFuZHRlYXplYmFja2VuZC1wcm9kdWN0aW9uLnVwLnJhaWx3YXkuYXBwL2FwaS9nZXRjYXJkc2ApO1xuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgICAgICAgICAgc2V0Q2FyZHMoZGF0YSk7XG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGNhcmRzOicsIGVycm9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBmZXRjaENhcmRzKCk7XG4gICAgfSwgW10pO1xuXG4gICAgLy8gRnVuY3Rpb24gdG8gdXBkYXRlIGNhcmQgc3RhdGVcbiAgICBjb25zdCB1cGRhdGVDYXJkU3RhdGUgPSBhc3luYyAoKSA9PiB7c1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDo1MDAwL2FwaS9nZXRjYXJkcycpO1xuICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgICAgIHNldENhcmRzKGRhdGEpO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgdXBkYXRlZCBjYXJkczonLCBlcnJvcik7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLy8gYnJpZ2h0bmVzcy01MCBhbmQgcmVkL3BpbmsgYm9yZGVyIHdoZW4gdGhlIGNhcmQgaXMgZGlzY292ZXJlZFxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxIZWFkZXIgLz5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJrZXktY29udGFpbmVyIGZsZXggZmxleC1jb2wgaXRlbXMtc3RhcnRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtaW5wdXQtY29udGFpbmVyIGZsZXhcIj5cbiAgICAgICAgICAgICAgICA8Q2FyZElucHV0IHVwZGF0ZUNhcmRTdGF0ZT17dXBkYXRlQ2FyZFN0YXRlfSBvblByaXplV2luPXtoYW5kbGVTaG93UHJpemVNb2RhbH0gLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAge2NhcmRzLm1hcCgoY2FyZCwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2luZGV4fSBjbGFzc05hbWU9XCJjYXJkLWNvbnRhaW5lclwiIHN0eWxlPXt7IHBvc2l0aW9uOiAncmVsYXRpdmUnLCBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJywgbWFyZ2luOiAnMjVweCcgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIFxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH0gXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2BpbWFnZXMvY2FyZHMvY2FyZF8ke2luZGV4ICsgMX0uSlBHYH0gXG4gICAgICAgICAgICAgICAgICAgICAgICBhbHQ9e2BDYXJkICR7aW5kZXggKyAxfWB9IFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgY2FyZC1zdHlsZSAke2NhcmQuZm91bmQgPyAnY2FyZC1mb3VuZCcgOiAnY2FyZC1ub3QtZm91bmQnfWB9IFxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtjYXJkLmZvdW5kICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz0naW1hZ2VzL2ZvdW5kLlBORycgYWx0PVwiRm91bmRcIiBjbGFzc05hbWU9J2ZvdW5kLWltYWdlJy8+XG4gICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPFByaXplTW9kYWwgXG4gICAgICAgICAgICAgIGlzT3Blbj17c2hvd1ByaXplTW9kYWx9IFxuICAgICAgICAgICAgICBvbkNsb3NlPXsoKSA9PiBzZXRTaG93UHJpemVNb2RhbChmYWxzZSl9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPHA+Q29uZ3JhdHVsYXRpb25zISBZb3Ugd29uIGEgcHJpemUhPC9wPlxuICAgICAgICAgICAgPC9Qcml6ZU1vZGFsPlxuICAgICAgICAgICAgPEZvb3RlciB2aWRlb0xpbms9J2h0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9RkZsV0pIT1VoaHMnLz5cbiAgICAgICAgPC8+XG4gICAgKTtcbn0iXSwibmFtZXMiOlsiSGVhZGVyIiwiRm9vdGVyIiwiQ2FyZElucHV0IiwiUHJpemVNb2RhbCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiRXh0cmFzIiwiY2FyZHMiLCJzZXRDYXJkcyIsInNob3dQcml6ZU1vZGFsIiwic2V0U2hvd1ByaXplTW9kYWwiLCJoYW5kbGVTaG93UHJpemVNb2RhbCIsInNob3ciLCJmZXRjaENhcmRzIiwicmVzcG9uc2UiLCJmZXRjaCIsImRhdGEiLCJqc29uIiwiZXJyb3IiLCJjb25zb2xlIiwidXBkYXRlQ2FyZFN0YXRlIiwicyIsImRpdiIsImNsYXNzTmFtZSIsIm9uUHJpemVXaW4iLCJtYXAiLCJjYXJkIiwiaW5kZXgiLCJzdHlsZSIsInBvc2l0aW9uIiwiZGlzcGxheSIsIm1hcmdpbiIsImltZyIsInNyYyIsImFsdCIsImZvdW5kIiwiaXNPcGVuIiwib25DbG9zZSIsInAiLCJ2aWRlb0xpbmsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/extras.js\n"));

/***/ })

});