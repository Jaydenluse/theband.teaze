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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Extras; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Header */ \"./components/Header.js\");\n/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Footer */ \"./components/Footer.js\");\n/* harmony import */ var _components_CardInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/CardInput */ \"./components/CardInput.js\");\n/* harmony import */ var _components_SnakeModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/SnakeModal */ \"./components/SnakeModal.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Extras() {\n    _s();\n    const [cards, setCards] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)([]);\n    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(\"\");\n    const [showPrizeModal, setShowPrizeModal] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false);\n    const handleEmailChange = (e)=>{\n        setEmail(e.target.value);\n    };\n    const handleEmailSubmit = async (e)=>{\n        e.preventDefault();\n        console.log(\"Sending email:\", email);\n        try {\n            const response = await fetch(\"https://thebandteazebackend-production.up.railway.app/api/send-email\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                    name: \"Fan\",\n                    email,\n                    message: \"I won a prize in the game!\"\n                })\n            });\n            if (!response.ok) throw new Error(\"Email submission failed\");\n            console.log(\"Email sent successfully\");\n            setShowPrizeModal(false); // Close modal after email is sent\n        } catch (error) {\n            console.error(\"Error:\", error);\n        }\n        setEmail(\"\"); // Reset email state\n    };\n    const handleShowPrizeModal = (show)=>{\n        setShowPrizeModal(show);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{\n        const fetchCards = async ()=>{\n            try {\n                const response = await fetch(\"https://thebandteazebackend-production.up.railway.app/api/getcards\");\n                const data = await response.json();\n                setCards(data);\n            } catch (error) {\n                console.error(\"Error fetching cards:\", error);\n            }\n        };\n        fetchCards();\n    }, []);\n    // Function to update card state\n    const updateCardState = async ()=>{\n        try {\n            const response = await fetch(\"https://thebandteazebackend-production.up.railway.app/api/getcards\");\n            const data = await response.json();\n            setCards(data);\n        } catch (error) {\n            console.error(\"Error fetching updated cards:\", error);\n        }\n    };\n    // brightness-50 and red/pink border when the card is discovered\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/KKYAXYU/theband.teaze/pages/extras.js\",\n                lineNumber: 69,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"key-container flex flex-col items-start\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"card-input-container flex\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_CardInput__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        updateCardState: updateCardState,\n                        onPrizeWin: handleShowPrizeModal\n                    }, void 0, false, {\n                        fileName: \"/Users/KKYAXYU/theband.teaze/pages/extras.js\",\n                        lineNumber: 73,\n                        columnNumber: 17\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/KKYAXYU/theband.teaze/pages/extras.js\",\n                    lineNumber: 72,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/KKYAXYU/theband.teaze/pages/extras.js\",\n                lineNumber: 71,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid-container\",\n                children: cards.map((card, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"card-container\",\n                        style: {\n                            position: \"relative\",\n                            display: \"inline-block\",\n                            margin: \"25px\"\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: \"images/cards/card_\".concat(index + 1, \".JPG\"),\n                                alt: \"Card \".concat(index + 1),\n                                className: \"card-style \".concat(card.found ? \"card-found\" : \"card-not-found\")\n                            }, index, false, {\n                                fileName: \"/Users/KKYAXYU/theband.teaze/pages/extras.js\",\n                                lineNumber: 80,\n                                columnNumber: 25\n                            }, this),\n                            card.found && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: \"images/found.PNG\",\n                                alt: \"Found\",\n                                className: \"found-image\"\n                            }, void 0, false, {\n                                fileName: \"/Users/KKYAXYU/theband.teaze/pages/extras.js\",\n                                lineNumber: 87,\n                                columnNumber: 29\n                            }, this)\n                        ]\n                    }, index, true, {\n                        fileName: \"/Users/KKYAXYU/theband.teaze/pages/extras.js\",\n                        lineNumber: 79,\n                        columnNumber: 21\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/Users/KKYAXYU/theband.teaze/pages/extras.js\",\n                lineNumber: 77,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SnakeModal__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                isOpen: showPrizeModal,\n                onClose: ()=>setShowPrizeModal(false),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    onSubmit: handleEmailSubmit,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"email\",\n                        value: email,\n                        onChange: handleEmailChange,\n                        placeholder: \"Enter Email\",\n                        style: {\n                            backgroundColor: \"black\",\n                            color: \"lime\",\n                            border: \"2px solid lime\",\n                            outline: \"none\",\n                            padding: \"10px\",\n                            width: \"200px\",\n                            borderRadius: \"5px\",\n                            fontSize: \"16px\",\n                            textAlign: \"center\",\n                            transition: \"background-color 0.3s ease\",\n                            \"::placeholder\": {\n                                color: \"rgba(255, 255, 255, 0.5)\"\n                            },\n                            \":focus\": {\n                                backgroundColor: \"#32CD32\"\n                            }\n                        }\n                    }, void 0, false, {\n                        fileName: \"/Users/KKYAXYU/theband.teaze/pages/extras.js\",\n                        lineNumber: 97,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/KKYAXYU/theband.teaze/pages/extras.js\",\n                    lineNumber: 96,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/KKYAXYU/theband.teaze/pages/extras.js\",\n                lineNumber: 92,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Footer__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                videoLink: \"https://www.youtube.com/watch?v=FFlWJHOUhhs\"\n            }, void 0, false, {\n                fileName: \"/Users/KKYAXYU/theband.teaze/pages/extras.js\",\n                lineNumber: 123,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Extras, \"nwjWy+9+Ike9tfAEADwPvu8fiFo=\");\n_c = Extras;\nvar _c;\n$RefreshReg$(_c, \"Extras\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O29CQUFLQyxVQUFVdkM7OEJBQ1osNEVBQUN3Qzt3QkFDR0MsTUFBSzt3QkFDTDFDLE9BQU9QO3dCQUNQa0QsVUFBVTlDO3dCQUNWK0MsYUFBWTt3QkFDWmYsT0FBTzs0QkFDSGdCLGlCQUFpQjs0QkFDakJDLE9BQU87NEJBQ1BDLFFBQVE7NEJBQ1JDLFNBQVM7NEJBQ1RDLFNBQVM7NEJBQ1RDLE9BQU87NEJBQ1BDLGNBQWM7NEJBQ2RDLFVBQVU7NEJBQ1ZDLFdBQVc7NEJBQ1hDLFlBQVk7NEJBQ1osaUJBQWlCO2dDQUNiUixPQUFPOzRCQUNYOzRCQUNBLFVBQVU7Z0NBQ05ELGlCQUFpQjs0QkFDckI7d0JBQ0o7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBSVosOERBQUM1RCwwREFBTUE7Z0JBQUNzRSxXQUFVOzs7Ozs7OztBQUc5QjtHQXZId0JqRTtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9leHRyYXMuanM/NmRlYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZGVyIGZyb20gXCIuLi9jb21wb25lbnRzL0hlYWRlclwiO1xuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi4vY29tcG9uZW50cy9Gb290ZXJcIjtcbmltcG9ydCBDYXJkSW5wdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvQ2FyZElucHV0XCI7XG5pbXBvcnQgU25ha2VNb2RhbCBmcm9tIFwiLi4vY29tcG9uZW50cy9TbmFrZU1vZGFsXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBFeHRyYXMoKSB7XG4gICAgY29uc3QgW2NhcmRzLCBzZXRDYXJkc10gPSB1c2VTdGF0ZShbXSk7XG4gICAgY29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSB1c2VTdGF0ZSgnJyk7XG4gICAgY29uc3QgW3Nob3dQcml6ZU1vZGFsLCBzZXRTaG93UHJpemVNb2RhbF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgICBjb25zdCBoYW5kbGVFbWFpbENoYW5nZSA9IChlKSA9PiB7XG4gICAgICAgIHNldEVtYWlsKGUudGFyZ2V0LnZhbHVlKTtcbiAgICB9O1xuXG4gICAgY29uc3QgaGFuZGxlRW1haWxTdWJtaXQgPSBhc3luYyAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiU2VuZGluZyBlbWFpbDpcIiwgZW1haWwpO1xuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCdodHRwczovL3RoZWJhbmR0ZWF6ZWJhY2tlbmQtcHJvZHVjdGlvbi51cC5yYWlsd2F5LmFwcC9hcGkvc2VuZC1lbWFpbCcsIHtcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcbiAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IG5hbWU6ICdGYW4nLCBlbWFpbCwgbWVzc2FnZTogJ0kgd29uIGEgcHJpemUgaW4gdGhlIGdhbWUhJyB9KVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB0aHJvdyBuZXcgRXJyb3IoJ0VtYWlsIHN1Ym1pc3Npb24gZmFpbGVkJyk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkVtYWlsIHNlbnQgc3VjY2Vzc2Z1bGx5XCIpO1xuICAgICAgICAgICAgc2V0U2hvd1ByaXplTW9kYWwoZmFsc2UpOyAvLyBDbG9zZSBtb2RhbCBhZnRlciBlbWFpbCBpcyBzZW50XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvcjonLCBlcnJvcik7XG4gICAgICAgIH1cblxuICAgICAgICBzZXRFbWFpbCgnJyk7IC8vIFJlc2V0IGVtYWlsIHN0YXRlXG4gICAgfTtcblxuICAgIGNvbnN0IGhhbmRsZVNob3dQcml6ZU1vZGFsID0gKHNob3cpID0+IHtcbiAgICBzZXRTaG93UHJpemVNb2RhbChzaG93KTtcbiAgICB9O1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3QgZmV0Y2hDYXJkcyA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly90aGViYW5kdGVhemViYWNrZW5kLXByb2R1Y3Rpb24udXAucmFpbHdheS5hcHAvYXBpL2dldGNhcmRzYCk7XG4gICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgICAgICAgICBzZXRDYXJkcyhkYXRhKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgY2FyZHM6JywgZXJyb3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIGZldGNoQ2FyZHMoKTtcbiAgICB9LCBbXSk7XG5cbiAgICAvLyBGdW5jdGlvbiB0byB1cGRhdGUgY2FyZCBzdGF0ZVxuICAgIGNvbnN0IHVwZGF0ZUNhcmRTdGF0ZSA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vdGhlYmFuZHRlYXplYmFja2VuZC1wcm9kdWN0aW9uLnVwLnJhaWx3YXkuYXBwL2FwaS9nZXRjYXJkcycpO1xuICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgICAgIHNldENhcmRzKGRhdGEpO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgdXBkYXRlZCBjYXJkczonLCBlcnJvcik7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLy8gYnJpZ2h0bmVzcy01MCBhbmQgcmVkL3BpbmsgYm9yZGVyIHdoZW4gdGhlIGNhcmQgaXMgZGlzY292ZXJlZFxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxIZWFkZXIgLz5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJrZXktY29udGFpbmVyIGZsZXggZmxleC1jb2wgaXRlbXMtc3RhcnRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtaW5wdXQtY29udGFpbmVyIGZsZXhcIj5cbiAgICAgICAgICAgICAgICA8Q2FyZElucHV0IHVwZGF0ZUNhcmRTdGF0ZT17dXBkYXRlQ2FyZFN0YXRlfSBvblByaXplV2luPXtoYW5kbGVTaG93UHJpemVNb2RhbH0gLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAge2NhcmRzLm1hcCgoY2FyZCwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2luZGV4fSBjbGFzc05hbWU9XCJjYXJkLWNvbnRhaW5lclwiIHN0eWxlPXt7IHBvc2l0aW9uOiAncmVsYXRpdmUnLCBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJywgbWFyZ2luOiAnMjVweCcgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIFxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH0gXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2BpbWFnZXMvY2FyZHMvY2FyZF8ke2luZGV4ICsgMX0uSlBHYH0gXG4gICAgICAgICAgICAgICAgICAgICAgICBhbHQ9e2BDYXJkICR7aW5kZXggKyAxfWB9IFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgY2FyZC1zdHlsZSAke2NhcmQuZm91bmQgPyAnY2FyZC1mb3VuZCcgOiAnY2FyZC1ub3QtZm91bmQnfWB9IFxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtjYXJkLmZvdW5kICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz0naW1hZ2VzL2ZvdW5kLlBORycgYWx0PVwiRm91bmRcIiBjbGFzc05hbWU9J2ZvdW5kLWltYWdlJy8+XG4gICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPFNuYWtlTW9kYWwgXG4gICAgICAgICAgICAgICAgaXNPcGVuPXtzaG93UHJpemVNb2RhbH0gXG4gICAgICAgICAgICAgICAgb25DbG9zZT17KCkgPT4gc2V0U2hvd1ByaXplTW9kYWwoZmFsc2UpfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVFbWFpbFN1Ym1pdH0+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtlbWFpbH1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVFbWFpbENoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgRW1haWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdibGFjaycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICdsaW1lJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6ICcycHggc29saWQgbGltZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3V0bGluZTogJ25vbmUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6ICcxMHB4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogJzIwMHB4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICc1cHgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAnMTZweCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAnYmFja2dyb3VuZC1jb2xvciAwLjNzIGVhc2UnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICc6OnBsYWNlaG9sZGVyJzoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMC41KSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICc6Zm9jdXMnOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyMzMkNEMzInICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgIDwvU25ha2VNb2RhbD5cbiAgICAgICAgICAgIDxGb290ZXIgdmlkZW9MaW5rPSdodHRwczovL3d3dy55b3V0dWJlLmNvbS93YXRjaD92PUZGbFdKSE9VaGhzJy8+XG4gICAgICAgIDwvPlxuICAgICk7XG59Il0sIm5hbWVzIjpbIkhlYWRlciIsIkZvb3RlciIsIkNhcmRJbnB1dCIsIlNuYWtlTW9kYWwiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkV4dHJhcyIsImNhcmRzIiwic2V0Q2FyZHMiLCJlbWFpbCIsInNldEVtYWlsIiwic2hvd1ByaXplTW9kYWwiLCJzZXRTaG93UHJpemVNb2RhbCIsImhhbmRsZUVtYWlsQ2hhbmdlIiwiZSIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlRW1haWxTdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsImNvbnNvbGUiLCJsb2ciLCJyZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwibmFtZSIsIm1lc3NhZ2UiLCJvayIsIkVycm9yIiwiZXJyb3IiLCJoYW5kbGVTaG93UHJpemVNb2RhbCIsInNob3ciLCJmZXRjaENhcmRzIiwiZGF0YSIsImpzb24iLCJ1cGRhdGVDYXJkU3RhdGUiLCJkaXYiLCJjbGFzc05hbWUiLCJvblByaXplV2luIiwibWFwIiwiY2FyZCIsImluZGV4Iiwic3R5bGUiLCJwb3NpdGlvbiIsImRpc3BsYXkiLCJtYXJnaW4iLCJpbWciLCJzcmMiLCJhbHQiLCJmb3VuZCIsImlzT3BlbiIsIm9uQ2xvc2UiLCJmb3JtIiwib25TdWJtaXQiLCJpbnB1dCIsInR5cGUiLCJvbkNoYW5nZSIsInBsYWNlaG9sZGVyIiwiYmFja2dyb3VuZENvbG9yIiwiY29sb3IiLCJib3JkZXIiLCJvdXRsaW5lIiwicGFkZGluZyIsIndpZHRoIiwiYm9yZGVyUmFkaXVzIiwiZm9udFNpemUiLCJ0ZXh0QWxpZ24iLCJ0cmFuc2l0aW9uIiwidmlkZW9MaW5rIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/extras.js\n"));

/***/ })

});