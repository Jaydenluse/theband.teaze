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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Extras; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Header */ \"./components/Header.js\");\n/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Footer */ \"./components/Footer.js\");\n/* harmony import */ var _components_CardInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/CardInput */ \"./components/CardInput.js\");\n/* harmony import */ var _components_PrizeModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/PrizeModal */ \"./components/PrizeModal.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Extras() {\n    _s();\n    const [cards, setCards] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)([]);\n    const [showPrizeModal, setShowPrizeModal] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false);\n    const handleShowPrizeModal = (show)=>{\n        setShowPrizeModal(show);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{\n        const fetchCards = async ()=>{\n            try {\n                const response = await fetch(\"https://thebandteazebackend-production.up.railway.app/api/getcards\");\n                const data = await response.json();\n                setCards(data);\n            } catch (error) {\n                console.error(\"Error fetching cards:\", error);\n            }\n        };\n        fetchCards();\n    }, []);\n    // Function to update card state\n    const updateCardState = async ()=>{\n        try {\n            const response = await fetch(\"http://localhost:5000/api/getcards\");\n            const data = await response.json();\n            setCards(data);\n        } catch (error) {\n            console.error(\"Error fetching updated cards:\", error);\n        }\n    };\n    // brightness-50 and red/pink border when the card is discovered\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/KKYAXYU/theband.teaze/pages/extras.js\",\n                lineNumber: 44,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"key-container flex flex-col items-start\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"card-input-container flex\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_CardInput__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        updateCardState: updateCardState,\n                        onPrizeWin: handleShowPrizeModal\n                    }, void 0, false, {\n                        fileName: \"/Users/KKYAXYU/theband.teaze/pages/extras.js\",\n                        lineNumber: 48,\n                        columnNumber: 17\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/KKYAXYU/theband.teaze/pages/extras.js\",\n                    lineNumber: 47,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/KKYAXYU/theband.teaze/pages/extras.js\",\n                lineNumber: 46,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid-container\",\n                children: cards.map((card, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"card-container\",\n                        style: {\n                            position: \"relative\",\n                            display: \"inline-block\",\n                            margin: \"25px\"\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: \"images/cards/card_\".concat(index + 1, \".JPG\"),\n                                alt: \"Card \".concat(index + 1),\n                                className: \"card-style \".concat(card.found ? \"card-found\" : \"card-not-found\")\n                            }, index, false, {\n                                fileName: \"/Users/KKYAXYU/theband.teaze/pages/extras.js\",\n                                lineNumber: 55,\n                                columnNumber: 25\n                            }, this),\n                            card.found && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: \"images/found.PNG\",\n                                alt: \"Found\",\n                                className: \"found-image\"\n                            }, void 0, false, {\n                                fileName: \"/Users/KKYAXYU/theband.teaze/pages/extras.js\",\n                                lineNumber: 62,\n                                columnNumber: 29\n                            }, this)\n                        ]\n                    }, index, true, {\n                        fileName: \"/Users/KKYAXYU/theband.teaze/pages/extras.js\",\n                        lineNumber: 54,\n                        columnNumber: 21\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/Users/KKYAXYU/theband.teaze/pages/extras.js\",\n                lineNumber: 52,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_PrizeModal__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                isOpen: showPrizeModal,\n                onClose: ()=>setShowPrizeModal(false),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: \"Congratulations! You won a prize!\"\n                }, void 0, false, {\n                    fileName: \"/Users/KKYAXYU/theband.teaze/pages/extras.js\",\n                    lineNumber: 71,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/KKYAXYU/theband.teaze/pages/extras.js\",\n                lineNumber: 67,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Footer__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                videoLink: \"https://www.youtube.com/watch?v=FFlWJHOUhhs\"\n            }, void 0, false, {\n                fileName: \"/Users/KKYAXYU/theband.teaze/pages/extras.js\",\n                lineNumber: 73,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Extras, \"5XOMG2LAZdCgFlC/yrZ5bDTr+RE=\");\n_c = Extras;\nvar _c;\n$RefreshReg$(_c, \"Extras\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9leHRyYXMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBMEM7QUFDQTtBQUNNO0FBQ0U7QUFDTjtBQUU3QixTQUFTTTs7SUFDcEIsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdKLCtDQUFRQSxDQUFDLEVBQUU7SUFDckMsTUFBTSxDQUFDSyxnQkFBZ0JDLGtCQUFrQixHQUFHTiwrQ0FBUUEsQ0FBQztJQUVyRCxNQUFNTyx1QkFBdUIsQ0FBQ0M7UUFDOUJGLGtCQUFrQkU7SUFDbEI7SUFFQVAsZ0RBQVNBLENBQUM7UUFDTixNQUFNUSxhQUFhO1lBQ2YsSUFBSTtnQkFDQSxNQUFNQyxXQUFXLE1BQU1DLE1BQU87Z0JBQzlCLE1BQU1DLE9BQU8sTUFBTUYsU0FBU0csSUFBSTtnQkFDaENULFNBQVNRO1lBQ2IsRUFBRSxPQUFPRSxPQUFPO2dCQUNaQyxRQUFRRCxLQUFLLENBQUMseUJBQXlCQTtZQUMzQztRQUNKO1FBRUFMO0lBQ0osR0FBRyxFQUFFO0lBRUwsZ0NBQWdDO0lBQ2hDLE1BQU1PLGtCQUFrQjtRQUNwQixJQUFJO1lBQ0EsTUFBTU4sV0FBVyxNQUFNQyxNQUFNO1lBQzdCLE1BQU1DLE9BQU8sTUFBTUYsU0FBU0csSUFBSTtZQUNoQ1QsU0FBU1E7UUFDYixFQUFFLE9BQU9FLE9BQU87WUFDWkMsUUFBUUQsS0FBSyxDQUFDLGlDQUFpQ0E7UUFDbkQ7SUFDSjtJQUVBLGdFQUFnRTtJQUVoRSxxQkFDSTs7MEJBQ0ksOERBQUNsQiwwREFBTUE7Ozs7OzBCQUVQLDhEQUFDcUI7Z0JBQUlDLFdBQVU7MEJBQ1gsNEVBQUNEO29CQUFJQyxXQUFVOzhCQUNmLDRFQUFDcEIsNkRBQVNBO3dCQUFDa0IsaUJBQWlCQTt3QkFBaUJHLFlBQVlaOzs7Ozs7Ozs7Ozs7Ozs7OzBCQUk3RCw4REFBQ1U7Z0JBQUlDLFdBQVU7MEJBQ1ZmLE1BQU1pQixHQUFHLENBQUMsQ0FBQ0MsTUFBTUMsc0JBQ2QsOERBQUNMO3dCQUFnQkMsV0FBVTt3QkFBaUJLLE9BQU87NEJBQUVDLFVBQVU7NEJBQVlDLFNBQVM7NEJBQWdCQyxRQUFRO3dCQUFPOzswQ0FDL0csOERBQUNDO2dDQUVEQyxLQUFLLHFCQUErQixPQUFWTixRQUFRLEdBQUU7Z0NBQ3BDTyxLQUFLLFFBQWtCLE9BQVZQLFFBQVE7Z0NBQ3JCSixXQUFXLGNBQTJELE9BQTdDRyxLQUFLUyxLQUFLLEdBQUcsZUFBZTsrQkFIaERSOzs7Ozs0QkFLSkQsS0FBS1MsS0FBSyxrQkFDUCw4REFBQ0g7Z0NBQUlDLEtBQUk7Z0NBQW1CQyxLQUFJO2dDQUFRWCxXQUFVOzs7Ozs7O3VCQVJoREk7Ozs7Ozs7Ozs7MEJBYWxCLDhEQUFDdkIsOERBQVVBO2dCQUNUZ0MsUUFBUTFCO2dCQUNSMkIsU0FBUyxJQUFNMUIsa0JBQWtCOzBCQUUvQiw0RUFBQzJCOzhCQUFFOzs7Ozs7Ozs7OzswQkFFUCw4REFBQ3BDLDBEQUFNQTtnQkFBQ3FDLFdBQVU7Ozs7Ozs7O0FBRzlCO0dBckV3QmhDO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2V4dHJhcy5qcz82ZGVhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvSGVhZGVyXCI7XG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuLi9jb21wb25lbnRzL0Zvb3RlclwiO1xuaW1wb3J0IENhcmRJbnB1dCBmcm9tIFwiLi4vY29tcG9uZW50cy9DYXJkSW5wdXRcIjtcbmltcG9ydCBQcml6ZU1vZGFsIGZyb20gXCIuLi9jb21wb25lbnRzL1ByaXplTW9kYWxcIjtcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEV4dHJhcygpIHtcbiAgICBjb25zdCBbY2FyZHMsIHNldENhcmRzXSA9IHVzZVN0YXRlKFtdKTtcbiAgICBjb25zdCBbc2hvd1ByaXplTW9kYWwsIHNldFNob3dQcml6ZU1vZGFsXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICAgIGNvbnN0IGhhbmRsZVNob3dQcml6ZU1vZGFsID0gKHNob3cpID0+IHtcbiAgICBzZXRTaG93UHJpemVNb2RhbChzaG93KTtcbiAgICB9O1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3QgZmV0Y2hDYXJkcyA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly90aGViYW5kdGVhemViYWNrZW5kLXByb2R1Y3Rpb24udXAucmFpbHdheS5hcHAvYXBpL2dldGNhcmRzYCk7XG4gICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgICAgICAgICBzZXRDYXJkcyhkYXRhKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgY2FyZHM6JywgZXJyb3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIGZldGNoQ2FyZHMoKTtcbiAgICB9LCBbXSk7XG5cbiAgICAvLyBGdW5jdGlvbiB0byB1cGRhdGUgY2FyZCBzdGF0ZVxuICAgIGNvbnN0IHVwZGF0ZUNhcmRTdGF0ZSA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9hcGkvZ2V0Y2FyZHMnKTtcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgICAgICBzZXRDYXJkcyhkYXRhKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIHVwZGF0ZWQgY2FyZHM6JywgZXJyb3IpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8vIGJyaWdodG5lc3MtNTAgYW5kIHJlZC9waW5rIGJvcmRlciB3aGVuIHRoZSBjYXJkIGlzIGRpc2NvdmVyZWRcblxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8SGVhZGVyIC8+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwia2V5LWNvbnRhaW5lciBmbGV4IGZsZXgtY29sIGl0ZW1zLXN0YXJ0XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWlucHV0LWNvbnRhaW5lciBmbGV4XCI+XG4gICAgICAgICAgICAgICAgPENhcmRJbnB1dCB1cGRhdGVDYXJkU3RhdGU9e3VwZGF0ZUNhcmRTdGF0ZX0gb25Qcml6ZVdpbj17aGFuZGxlU2hvd1ByaXplTW9kYWx9IC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIHtjYXJkcy5tYXAoKGNhcmQsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0gY2xhc3NOYW1lPVwiY2FyZC1jb250YWluZXJcIiBzdHlsZT17eyBwb3NpdGlvbjogJ3JlbGF0aXZlJywgZGlzcGxheTogJ2lubGluZS1ibG9jaycsIG1hcmdpbjogJzI1cHgnIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9IFxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtgaW1hZ2VzL2NhcmRzL2NhcmRfJHtpbmRleCArIDF9LkpQR2B9IFxuICAgICAgICAgICAgICAgICAgICAgICAgYWx0PXtgQ2FyZCAke2luZGV4ICsgMX1gfSBcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGNhcmQtc3R5bGUgJHtjYXJkLmZvdW5kID8gJ2NhcmQtZm91bmQnIDogJ2NhcmQtbm90LWZvdW5kJ31gfSBcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICB7Y2FyZC5mb3VuZCAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9J2ltYWdlcy9mb3VuZC5QTkcnIGFsdD1cIkZvdW5kXCIgY2xhc3NOYW1lPSdmb3VuZC1pbWFnZScvPlxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxQcml6ZU1vZGFsIFxuICAgICAgICAgICAgICBpc09wZW49e3Nob3dQcml6ZU1vZGFsfSBcbiAgICAgICAgICAgICAgb25DbG9zZT17KCkgPT4gc2V0U2hvd1ByaXplTW9kYWwoZmFsc2UpfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxwPkNvbmdyYXR1bGF0aW9ucyEgWW91IHdvbiBhIHByaXplITwvcD5cbiAgICAgICAgICAgIDwvUHJpemVNb2RhbD5cbiAgICAgICAgICAgIDxGb290ZXIgdmlkZW9MaW5rPSdodHRwczovL3d3dy55b3V0dWJlLmNvbS93YXRjaD92PUZGbFdKSE9VaGhzJy8+XG4gICAgICAgIDwvPlxuICAgICk7XG59Il0sIm5hbWVzIjpbIkhlYWRlciIsIkZvb3RlciIsIkNhcmRJbnB1dCIsIlByaXplTW9kYWwiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkV4dHJhcyIsImNhcmRzIiwic2V0Q2FyZHMiLCJzaG93UHJpemVNb2RhbCIsInNldFNob3dQcml6ZU1vZGFsIiwiaGFuZGxlU2hvd1ByaXplTW9kYWwiLCJzaG93IiwiZmV0Y2hDYXJkcyIsInJlc3BvbnNlIiwiZmV0Y2giLCJkYXRhIiwianNvbiIsImVycm9yIiwiY29uc29sZSIsInVwZGF0ZUNhcmRTdGF0ZSIsImRpdiIsImNsYXNzTmFtZSIsIm9uUHJpemVXaW4iLCJtYXAiLCJjYXJkIiwiaW5kZXgiLCJzdHlsZSIsInBvc2l0aW9uIiwiZGlzcGxheSIsIm1hcmdpbiIsImltZyIsInNyYyIsImFsdCIsImZvdW5kIiwiaXNPcGVuIiwib25DbG9zZSIsInAiLCJ2aWRlb0xpbmsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/extras.js\n"));

/***/ })

});