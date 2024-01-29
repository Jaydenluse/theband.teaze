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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Extras; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Header */ \"./components/Header.js\");\n/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Footer */ \"./components/Footer.js\");\n/* harmony import */ var _components_CardInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/CardInput */ \"./components/CardInput.js\");\n/* harmony import */ var _components_SnakeModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/SnakeModal */ \"./components/SnakeModal.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Extras() {\n    _s();\n    const [cards, setCards] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)([]);\n    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(\"\");\n    const [showPrizeModal, setShowPrizeModal] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false);\n    const handleEmailChange = (e)=>{\n        setEmail(e.target.value);\n    };\n    const handleEmailSubmit = async (e)=>{\n        e.preventDefault();\n        console.log(\"Sending email:\", email);\n        try {\n            const response = await fetch(\"https://thebandteazebackend-production.up.railway.app/api/send-email\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                    name: \"Fan\",\n                    email,\n                    message: \"I won a prize in the game!\"\n                })\n            });\n            if (!response.ok) throw new Error(\"Email submission failed\");\n            console.log(\"Email sent successfully\");\n            setShowPrizeModal(false); // Close modal after email is sent\n        } catch (error) {\n            console.error(\"Error:\", error);\n        }\n        setEmail(\"\"); // Reset email state\n    };\n    const handleShowPrizeModal = (show)=>{\n        setShowPrizeModal(show);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{\n        const fetchCards = async ()=>{\n            try {\n                const response = await fetch(\"https://thebandteazebackend-production.up.railway.app/api/getcards\");\n                const data = await response.json();\n                setCards(data);\n            } catch (error) {\n                console.error(\"Error fetching cards:\", error);\n            }\n        };\n        fetchCards();\n    }, []);\n    // Function to update card state\n    const updateCardState = async ()=>{\n        try {\n            const response = await fetch(\"https://thebandteazebackend-production.up.railway.app/api/getcards\");\n            const data = await response.json();\n            setCards(data);\n        } catch (error) {\n            console.error(\"Error fetching updated cards:\", error);\n        }\n    };\n    // brightness-50 and red/pink border when the card is discovered\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/KKYAXYU/theband.teaze/pages/extras.js\",\n                lineNumber: 69,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"key-container flex flex-col items-start\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"card-input-container flex\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_CardInput__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        updateCardState: updateCardState,\n                        onPrizeWin: handleShowPrizeModal\n                    }, void 0, false, {\n                        fileName: \"/Users/KKYAXYU/theband.teaze/pages/extras.js\",\n                        lineNumber: 73,\n                        columnNumber: 17\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/KKYAXYU/theband.teaze/pages/extras.js\",\n                    lineNumber: 72,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/KKYAXYU/theband.teaze/pages/extras.js\",\n                lineNumber: 71,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid-container\",\n                children: cards.map((card, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"card-container\",\n                        style: {\n                            position: \"relative\",\n                            display: \"inline-block\",\n                            margin: \"25px\"\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: \"images/cards/card_\".concat(index + 1, \".JPG\"),\n                                alt: \"Card \".concat(index + 1),\n                                className: \"card-style \".concat(card.found ? \"card-found\" : \"card-not-found\")\n                            }, index, false, {\n                                fileName: \"/Users/KKYAXYU/theband.teaze/pages/extras.js\",\n                                lineNumber: 80,\n                                columnNumber: 25\n                            }, this),\n                            card.found && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: \"images/found.PNG\",\n                                alt: \"Found\",\n                                className: \"found-image\"\n                            }, void 0, false, {\n                                fileName: \"/Users/KKYAXYU/theband.teaze/pages/extras.js\",\n                                lineNumber: 87,\n                                columnNumber: 29\n                            }, this)\n                        ]\n                    }, index, true, {\n                        fileName: \"/Users/KKYAXYU/theband.teaze/pages/extras.js\",\n                        lineNumber: 79,\n                        columnNumber: 21\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/Users/KKYAXYU/theband.teaze/pages/extras.js\",\n                lineNumber: 77,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SnakeModal__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                isOpen: showPrizeModal,\n                onClose: ()=>setShowPrizeModal(false),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    onSubmit: handleEmailSubmit,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: {\n                            display: \"flex\",\n                            alignItems: \"center\"\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"email\",\n                                value: email,\n                                onChange: handleEmailChange,\n                                placeholder: \"Enter Email\",\n                                style: {\n                                    backgroundColor: \"black\",\n                                    color: \"lime\",\n                                    border: \"2px solid lime\",\n                                    borderTopLeftRadius: \"5px\",\n                                    borderBottomLeftRadius: \"5px\",\n                                    outline: \"none\",\n                                    padding: \"10px\",\n                                    width: \"200px\",\n                                    fontSize: \"16px\",\n                                    textAlign: \"center\",\n                                    transition: \"background-color 0.3s ease\",\n                                    \"::placeholder\": {\n                                        color: \"rgba(255, 255, 255, 0.5)\"\n                                    },\n                                    \":focus\": {\n                                        backgroundColor: \"#32CD32\"\n                                    }\n                                }\n                            }, void 0, false, {\n                                fileName: \"/Users/KKYAXYU/theband.teaze/pages/extras.js\",\n                                lineNumber: 98,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                type: \"submit\",\n                                style: {\n                                    backgroundColor: \"black\",\n                                    color: \"lime\",\n                                    border: \"2px solid lime\",\n                                    borderTopRightRadius: \"5px\",\n                                    borderBottomRightRadius: \"5px\",\n                                    padding: \"10px\",\n                                    fontSize: \"16px\",\n                                    transition: \"background-color 0.3s ease\",\n                                    cursor: \"pointer\",\n                                    height: \"100%\",\n                                    marginLeft: \"-2px\" // Align border with input\n                                },\n                                children: \"Submit Email\"\n                            }, void 0, false, {\n                                fileName: \"/Users/KKYAXYU/theband.teaze/pages/extras.js\",\n                                lineNumber: 123,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/KKYAXYU/theband.teaze/pages/extras.js\",\n                        lineNumber: 97,\n                        columnNumber: 17\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/KKYAXYU/theband.teaze/pages/extras.js\",\n                    lineNumber: 96,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/KKYAXYU/theband.teaze/pages/extras.js\",\n                lineNumber: 92,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Footer__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                videoLink: \"https://www.youtube.com/watch?v=FFlWJHOUhhs\"\n            }, void 0, false, {\n                fileName: \"/Users/KKYAXYU/theband.teaze/pages/extras.js\",\n                lineNumber: 143,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Extras, \"nwjWy+9+Ike9tfAEADwPvu8fiFo=\");\n_c = Extras;\nvar _c;\n$RefreshReg$(_c, \"Extras\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O29CQUFLQyxVQUFVdkM7OEJBQ2hCLDRFQUFDc0I7d0JBQUlNLE9BQU87NEJBQUVFLFNBQVM7NEJBQVFVLFlBQVk7d0JBQVM7OzBDQUNoRCw4REFBQ0M7Z0NBQ0dDLE1BQUs7Z0NBQ0wzQyxPQUFPUDtnQ0FDUG1ELFVBQVUvQztnQ0FDVmdELGFBQVk7Z0NBQ1poQixPQUFPO29DQUNIaUIsaUJBQWlCO29DQUNqQkMsT0FBTztvQ0FDUEMsUUFBUTtvQ0FDUkMscUJBQXFCO29DQUNyQkMsd0JBQXdCO29DQUN4QkMsU0FBUztvQ0FDVEMsU0FBUztvQ0FDVEMsT0FBTztvQ0FDUEMsVUFBVTtvQ0FDVkMsV0FBVztvQ0FDWEMsWUFBWTtvQ0FDWixpQkFBaUI7d0NBQ2JULE9BQU87b0NBQ1g7b0NBQ0EsVUFBVTt3Q0FDTkQsaUJBQWlCO29DQUNyQjtnQ0FDSjs7Ozs7OzBDQUVKLDhEQUFDVztnQ0FDR2QsTUFBSztnQ0FDTGQsT0FBTztvQ0FDSGlCLGlCQUFpQjtvQ0FDakJDLE9BQU87b0NBQ1BDLFFBQVE7b0NBQ1JVLHNCQUFzQjtvQ0FDdEJDLHlCQUF5QjtvQ0FDekJQLFNBQVM7b0NBQ1RFLFVBQVU7b0NBQ1ZFLFlBQVk7b0NBQ1pJLFFBQVE7b0NBQ1JDLFFBQVE7b0NBQ1JDLFlBQVksT0FBTywwQkFBMEI7Z0NBQ2pEOzBDQUFHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQU1mLDhEQUFDN0UsMERBQU1BO2dCQUFDOEUsV0FBVTs7Ozs7Ozs7QUFHOUI7R0EzSXdCekU7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZXh0cmFzLmpzPzZkZWEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWRlciBmcm9tIFwiLi4vY29tcG9uZW50cy9IZWFkZXJcIjtcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvRm9vdGVyXCI7XG5pbXBvcnQgQ2FyZElucHV0IGZyb20gXCIuLi9jb21wb25lbnRzL0NhcmRJbnB1dFwiO1xuaW1wb3J0IFNuYWtlTW9kYWwgZnJvbSBcIi4uL2NvbXBvbmVudHMvU25ha2VNb2RhbFwiO1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRXh0cmFzKCkge1xuICAgIGNvbnN0IFtjYXJkcywgc2V0Q2FyZHNdID0gdXNlU3RhdGUoW10pO1xuICAgIGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGUoJycpO1xuICAgIGNvbnN0IFtzaG93UHJpemVNb2RhbCwgc2V0U2hvd1ByaXplTW9kYWxdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gICAgY29uc3QgaGFuZGxlRW1haWxDaGFuZ2UgPSAoZSkgPT4ge1xuICAgICAgICBzZXRFbWFpbChlLnRhcmdldC52YWx1ZSk7XG4gICAgfTtcblxuICAgIGNvbnN0IGhhbmRsZUVtYWlsU3VibWl0ID0gYXN5bmMgKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIlNlbmRpbmcgZW1haWw6XCIsIGVtYWlsKTtcblxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly90aGViYW5kdGVhemViYWNrZW5kLXByb2R1Y3Rpb24udXAucmFpbHdheS5hcHAvYXBpL3NlbmQtZW1haWwnLCB7XG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICAgICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0sXG4gICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBuYW1lOiAnRmFuJywgZW1haWwsIG1lc3NhZ2U6ICdJIHdvbiBhIHByaXplIGluIHRoZSBnYW1lIScgfSlcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKCFyZXNwb25zZS5vaykgdGhyb3cgbmV3IEVycm9yKCdFbWFpbCBzdWJtaXNzaW9uIGZhaWxlZCcpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJFbWFpbCBzZW50IHN1Y2Nlc3NmdWxseVwiKTtcbiAgICAgICAgICAgIHNldFNob3dQcml6ZU1vZGFsKGZhbHNlKTsgLy8gQ2xvc2UgbW9kYWwgYWZ0ZXIgZW1haWwgaXMgc2VudFxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3I6JywgZXJyb3IpO1xuICAgICAgICB9XG5cbiAgICAgICAgc2V0RW1haWwoJycpOyAvLyBSZXNldCBlbWFpbCBzdGF0ZVxuICAgIH07XG5cbiAgICBjb25zdCBoYW5kbGVTaG93UHJpemVNb2RhbCA9IChzaG93KSA9PiB7XG4gICAgc2V0U2hvd1ByaXplTW9kYWwoc2hvdyk7XG4gICAgfTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGZldGNoQ2FyZHMgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vdGhlYmFuZHRlYXplYmFja2VuZC1wcm9kdWN0aW9uLnVwLnJhaWx3YXkuYXBwL2FwaS9nZXRjYXJkc2ApO1xuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgICAgICAgICAgc2V0Q2FyZHMoZGF0YSk7XG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGNhcmRzOicsIGVycm9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBmZXRjaENhcmRzKCk7XG4gICAgfSwgW10pO1xuXG4gICAgLy8gRnVuY3Rpb24gdG8gdXBkYXRlIGNhcmQgc3RhdGVcbiAgICBjb25zdCB1cGRhdGVDYXJkU3RhdGUgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCdodHRwczovL3RoZWJhbmR0ZWF6ZWJhY2tlbmQtcHJvZHVjdGlvbi51cC5yYWlsd2F5LmFwcC9hcGkvZ2V0Y2FyZHMnKTtcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgICAgICBzZXRDYXJkcyhkYXRhKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIHVwZGF0ZWQgY2FyZHM6JywgZXJyb3IpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8vIGJyaWdodG5lc3MtNTAgYW5kIHJlZC9waW5rIGJvcmRlciB3aGVuIHRoZSBjYXJkIGlzIGRpc2NvdmVyZWRcblxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8SGVhZGVyIC8+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwia2V5LWNvbnRhaW5lciBmbGV4IGZsZXgtY29sIGl0ZW1zLXN0YXJ0XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWlucHV0LWNvbnRhaW5lciBmbGV4XCI+XG4gICAgICAgICAgICAgICAgPENhcmRJbnB1dCB1cGRhdGVDYXJkU3RhdGU9e3VwZGF0ZUNhcmRTdGF0ZX0gb25Qcml6ZVdpbj17aGFuZGxlU2hvd1ByaXplTW9kYWx9IC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIHtjYXJkcy5tYXAoKGNhcmQsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0gY2xhc3NOYW1lPVwiY2FyZC1jb250YWluZXJcIiBzdHlsZT17eyBwb3NpdGlvbjogJ3JlbGF0aXZlJywgZGlzcGxheTogJ2lubGluZS1ibG9jaycsIG1hcmdpbjogJzI1cHgnIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9IFxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtgaW1hZ2VzL2NhcmRzL2NhcmRfJHtpbmRleCArIDF9LkpQR2B9IFxuICAgICAgICAgICAgICAgICAgICAgICAgYWx0PXtgQ2FyZCAke2luZGV4ICsgMX1gfSBcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGNhcmQtc3R5bGUgJHtjYXJkLmZvdW5kID8gJ2NhcmQtZm91bmQnIDogJ2NhcmQtbm90LWZvdW5kJ31gfSBcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICB7Y2FyZC5mb3VuZCAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9J2ltYWdlcy9mb3VuZC5QTkcnIGFsdD1cIkZvdW5kXCIgY2xhc3NOYW1lPSdmb3VuZC1pbWFnZScvPlxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxTbmFrZU1vZGFsIFxuICAgICAgICAgICAgICAgIGlzT3Blbj17c2hvd1ByaXplTW9kYWx9IFxuICAgICAgICAgICAgICAgIG9uQ2xvc2U9eygpID0+IHNldFNob3dQcml6ZU1vZGFsKGZhbHNlKX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlRW1haWxTdWJtaXR9PlxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBhbGlnbkl0ZW1zOiAnY2VudGVyJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2VtYWlsfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUVtYWlsQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBFbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ2JsYWNrJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJ2xpbWUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogJzJweCBzb2xpZCBsaW1lJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJUb3BMZWZ0UmFkaXVzOiAnNXB4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJCb3R0b21MZWZ0UmFkaXVzOiAnNXB4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdXRsaW5lOiAnbm9uZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogJzEwcHgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAnMjAwcHgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAnMTZweCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAnYmFja2dyb3VuZC1jb2xvciAwLjNzIGVhc2UnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICc6OnBsYWNlaG9sZGVyJzoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMC41KSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICc6Zm9jdXMnOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyMzMkNEMzInICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnYmxhY2snLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnbGltZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAnMnB4IHNvbGlkIGxpbWUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclRvcFJpZ2h0UmFkaXVzOiAnNXB4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJCb3R0b21SaWdodFJhZGl1czogJzVweCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogJzEwcHgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAnMTZweCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogJ2JhY2tncm91bmQtY29sb3IgMC4zcyBlYXNlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6ICcxMDAlJywgLy8gTWF0Y2ggdGhlIGhlaWdodCBvZiB0aGUgaW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5MZWZ0OiAnLTJweCcgLy8gQWxpZ24gYm9yZGVyIHdpdGggaW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgU3VibWl0IEVtYWlsXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgIDwvU25ha2VNb2RhbD5cbiAgICAgICAgICAgIDxGb290ZXIgdmlkZW9MaW5rPSdodHRwczovL3d3dy55b3V0dWJlLmNvbS93YXRjaD92PUZGbFdKSE9VaGhzJy8+XG4gICAgICAgIDwvPlxuICAgICk7XG59Il0sIm5hbWVzIjpbIkhlYWRlciIsIkZvb3RlciIsIkNhcmRJbnB1dCIsIlNuYWtlTW9kYWwiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkV4dHJhcyIsImNhcmRzIiwic2V0Q2FyZHMiLCJlbWFpbCIsInNldEVtYWlsIiwic2hvd1ByaXplTW9kYWwiLCJzZXRTaG93UHJpemVNb2RhbCIsImhhbmRsZUVtYWlsQ2hhbmdlIiwiZSIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlRW1haWxTdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsImNvbnNvbGUiLCJsb2ciLCJyZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwibmFtZSIsIm1lc3NhZ2UiLCJvayIsIkVycm9yIiwiZXJyb3IiLCJoYW5kbGVTaG93UHJpemVNb2RhbCIsInNob3ciLCJmZXRjaENhcmRzIiwiZGF0YSIsImpzb24iLCJ1cGRhdGVDYXJkU3RhdGUiLCJkaXYiLCJjbGFzc05hbWUiLCJvblByaXplV2luIiwibWFwIiwiY2FyZCIsImluZGV4Iiwic3R5bGUiLCJwb3NpdGlvbiIsImRpc3BsYXkiLCJtYXJnaW4iLCJpbWciLCJzcmMiLCJhbHQiLCJmb3VuZCIsImlzT3BlbiIsIm9uQ2xvc2UiLCJmb3JtIiwib25TdWJtaXQiLCJhbGlnbkl0ZW1zIiwiaW5wdXQiLCJ0eXBlIiwib25DaGFuZ2UiLCJwbGFjZWhvbGRlciIsImJhY2tncm91bmRDb2xvciIsImNvbG9yIiwiYm9yZGVyIiwiYm9yZGVyVG9wTGVmdFJhZGl1cyIsImJvcmRlckJvdHRvbUxlZnRSYWRpdXMiLCJvdXRsaW5lIiwicGFkZGluZyIsIndpZHRoIiwiZm9udFNpemUiLCJ0ZXh0QWxpZ24iLCJ0cmFuc2l0aW9uIiwiYnV0dG9uIiwiYm9yZGVyVG9wUmlnaHRSYWRpdXMiLCJib3JkZXJCb3R0b21SaWdodFJhZGl1cyIsImN1cnNvciIsImhlaWdodCIsIm1hcmdpbkxlZnQiLCJ2aWRlb0xpbmsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/extras.js\n"));

/***/ })

});