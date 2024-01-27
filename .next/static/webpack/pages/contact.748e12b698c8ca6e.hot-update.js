"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/contact",{

/***/ "./pages/contact.js":
/*!**************************!*\
  !*** ./pages/contact.js ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Contact; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Header_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Header.js */ \"./components/Header.js\");\n/* harmony import */ var _components_Footer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Footer.js */ \"./components/Footer.js\");\n/* harmony import */ var _components_Toast_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Toast.js */ \"./components/Toast.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction Contact() {\n    _s();\n    const [showToast, setShowToast] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [contactInfo, setContactInfo] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        name: \"\",\n        email: \"\",\n        message: \"\"\n    });\n    const musicVideoId = \"0XcYmx57aD0\";\n    const handleInputChange = (e)=>{\n        setContactInfo({\n            ...contactInfo,\n            [e.target.name]: e.target.value\n        });\n    };\n    const handleSubmit = (e)=>{\n        e.preventDefault();\n        console.log(\"Sending contact info:\", contactInfo);\n        fetch(\"https://thebandteazebackend-production.up.railway.app/api/send-email\", {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify(contactInfo)\n        }).then((response)=>{\n            console.log(\"Response status:\", response.status);\n            return response.json();\n        }).then((data)=>{\n            console.log(\"Response data:\", data);\n        }).catch((error)=>{\n            console.error(\"Error:\", error);\n        });\n        setShowToast(true); // Show toast on success\n        setTimeout(()=>setShowToast(false), 3000); // Hide toast after 3 seconds\n        setContactInfo({\n            name: \"\",\n            email: \"\",\n            message: \"\"\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Toast_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                show: showToast,\n                message: \"Message sent!\"\n            }, void 0, false, {\n                fileName: \"/Users/KKYAXYU/theband.teaze/pages/contact.js\",\n                lineNumber: 46,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/KKYAXYU/theband.teaze/pages/contact.js\",\n                lineNumber: 47,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"absolute w-full h-full z-0\",\n                style: {\n                    height: \"100vh\",\n                    width: \"100vw\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: \"images/contact.gif\",\n                    alt: \"Background\",\n                    className: \"h-full w-full object-cover\"\n                }, void 0, false, {\n                    fileName: \"/Users/KKYAXYU/theband.teaze/pages/contact.js\",\n                    lineNumber: 50,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/KKYAXYU/theband.teaze/pages/contact.js\",\n                lineNumber: 49,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"relative z-10 min-h-screen\",\n                style: {\n                    width: \"100vw\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"contact-container absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"absolute bg-black bg-opacity-75 mt-10 border-2 border-pink-700 max-w-full p-5 rounded-md custom-size\"\n                        }, void 0, false, {\n                            fileName: \"/Users/KKYAXYU/theband.teaze/pages/contact.js\",\n                            lineNumber: 55,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"relative z-20\",\n                            style: {\n                                width: \"100%\"\n                            },\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                    className: \"font-bold text-center text-white mb-4 mt-10 text-3xl\",\n                                    children: \"Connect with Teaze\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/KKYAXYU/theband.teaze/pages/contact.js\",\n                                    lineNumber: 57,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"text-white text-center mx-auto max-w-2xl pb-2\",\n                                    children: \"We love hearing from our fans and collaborators. Whether it's about booking us for a gig, inquiring about our latest tracks, or just saying hi, drop us a message!\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/KKYAXYU/theband.teaze/pages/contact.js\",\n                                    lineNumber: 58,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"text-white text-sm text-center mx-auto max-w-2xl\",\n                                    children: \"...snake game improvements/suggestions also welcome.\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/KKYAXYU/theband.teaze/pages/contact.js\",\n                                    lineNumber: 59,\n                                    columnNumber: 25\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/KKYAXYU/theband.teaze/pages/contact.js\",\n                            lineNumber: 56,\n                            columnNumber: 17\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                            onSubmit: handleSubmit,\n                            className: \"z-20\",\n                            style: {\n                                display: \"flex\",\n                                flexDirection: \"column\",\n                                alignItems: \"center\"\n                            },\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"mb-4\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                            htmlFor: \"name\",\n                                            className: \"block text-white text-sm font-bold mb-2 mt-10 \",\n                                            children: \"Name:\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/KKYAXYU/theband.teaze/pages/contact.js\",\n                                            lineNumber: 63,\n                                            columnNumber: 29\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                            type: \"text\",\n                                            id: \"name\",\n                                            name: \"name\",\n                                            value: contactInfo.name,\n                                            onChange: handleInputChange,\n                                            required: true,\n                                            className: \"flex flex-col items-center shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/KKYAXYU/theband.teaze/pages/contact.js\",\n                                            lineNumber: 64,\n                                            columnNumber: 29\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/KKYAXYU/theband.teaze/pages/contact.js\",\n                                    lineNumber: 62,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"mb-4\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                            htmlFor: \"email\",\n                                            className: \"block text-white text-sm font-bold mb-2\",\n                                            children: \"Email:\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/KKYAXYU/theband.teaze/pages/contact.js\",\n                                            lineNumber: 75,\n                                            columnNumber: 29\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                            type: \"email\",\n                                            id: \"email\",\n                                            name: \"email\",\n                                            value: contactInfo.email,\n                                            onChange: handleInputChange,\n                                            required: true,\n                                            className: \"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/KKYAXYU/theband.teaze/pages/contact.js\",\n                                            lineNumber: 76,\n                                            columnNumber: 29\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/KKYAXYU/theband.teaze/pages/contact.js\",\n                                    lineNumber: 74,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"mb-6\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                            htmlFor: \"message\",\n                                            className: \"block text-white text-sm font-bold mb-2\",\n                                            children: \"Message:\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/KKYAXYU/theband.teaze/pages/contact.js\",\n                                            lineNumber: 87,\n                                            columnNumber: 29\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                                            id: \"message\",\n                                            name: \"message\",\n                                            value: contactInfo.message,\n                                            onChange: handleInputChange,\n                                            required: true,\n                                            className: \"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/KKYAXYU/theband.teaze/pages/contact.js\",\n                                            lineNumber: 88,\n                                            columnNumber: 29\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/KKYAXYU/theband.teaze/pages/contact.js\",\n                                    lineNumber: 86,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex items-center justify-between\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        type: \"submit\",\n                                        className: \"bg-gray-700 hover:bg-pink-700 transition duration-300 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline\",\n                                        children: \"Send Message\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/KKYAXYU/theband.teaze/pages/contact.js\",\n                                        lineNumber: 98,\n                                        columnNumber: 29\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/KKYAXYU/theband.teaze/pages/contact.js\",\n                                    lineNumber: 97,\n                                    columnNumber: 25\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/KKYAXYU/theband.teaze/pages/contact.js\",\n                            lineNumber: 61,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/KKYAXYU/theband.teaze/pages/contact.js\",\n                    lineNumber: 54,\n                    columnNumber: 13\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/KKYAXYU/theband.teaze/pages/contact.js\",\n                lineNumber: 53,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Footer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                videoLink: \"https://www.youtube.com/watch?v=FFlWJHOUhhs\"\n            }, void 0, false, {\n                fileName: \"/Users/KKYAXYU/theband.teaze/pages/contact.js\",\n                lineNumber: 106,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Contact, \"g8mqaQPyHLL7ybG+xY0S55NsYqM=\");\n_c = Contact;\nvar _c;\n$RefreshReg$(_c, \"Contact\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFHOzRDQUNIOUMsTUFBSzs0Q0FDTE8sT0FBT1QsWUFBWUcsS0FBSzs0Q0FDeEI4QyxVQUFVM0M7NENBQ1Y0QyxRQUFROzRDQUNScEIsV0FBVTs7Ozs7Ozs7Ozs7OzhDQUdsQiw4REFBQ0Q7b0NBQUlDLFdBQVU7O3NEQUNYLDhEQUFDYzs0Q0FBTUMsU0FBUTs0Q0FBVWYsV0FBVTtzREFBMEM7Ozs7OztzREFDN0UsOERBQUNxQjs0Q0FDR0gsSUFBRzs0Q0FDSDlDLE1BQUs7NENBQ0xPLE9BQU9ULFlBQVlJLE9BQU87NENBQzFCNkMsVUFBVTNDOzRDQUNWNEMsUUFBUTs0Q0FDUnBCLFdBQVU7Ozs7Ozs7Ozs7Ozs4Q0FHbEIsOERBQUNEO29DQUFJQyxXQUFVOzhDQUNYLDRFQUFDc0I7d0NBQU9MLE1BQUs7d0NBQVNqQixXQUFVO2tEQUF1STs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFRdkwsOERBQUNuQyw2REFBTUE7Z0JBQUMwRCxXQUFVOzs7Ozs7OztBQUc5QjtHQXZHd0J4RDtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9jb250YWN0LmpzPzRlNzIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL0hlYWRlci5qcyc7XG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL2NvbXBvbmVudHMvRm9vdGVyLmpzJztcbmltcG9ydCBUb2FzdCBmcm9tICcuLi9jb21wb25lbnRzL1RvYXN0LmpzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ29udGFjdCgpIHtcbiAgICBjb25zdCBbc2hvd1RvYXN0LCBzZXRTaG93VG9hc3RdID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFtjb250YWN0SW5mbywgc2V0Q29udGFjdEluZm9dID0gdXNlU3RhdGUoe1xuICAgICAgICBuYW1lOiAnJyxcbiAgICAgICAgZW1haWw6ICcnLFxuICAgICAgICBtZXNzYWdlOiAnJ1xuICAgIH0pO1xuXG4gICAgY29uc3QgbXVzaWNWaWRlb0lkID0gJzBYY1lteDU3YUQwJztcblxuICAgIGNvbnN0IGhhbmRsZUlucHV0Q2hhbmdlID0gKGUpID0+IHtcbiAgICAgICAgc2V0Q29udGFjdEluZm8oeyAuLi5jb250YWN0SW5mbywgW2UudGFyZ2V0Lm5hbWVdOiBlLnRhcmdldC52YWx1ZSB9KTtcbiAgICB9O1xuXG4gICAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIlNlbmRpbmcgY29udGFjdCBpbmZvOlwiLCBjb250YWN0SW5mbyk7XG4gICAgXG4gICAgICAgIGZldGNoKCdodHRwczovL3RoZWJhbmR0ZWF6ZWJhY2tlbmQtcHJvZHVjdGlvbi51cC5yYWlsd2F5LmFwcC9hcGkvc2VuZC1lbWFpbCcsIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0sXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShjb250YWN0SW5mbylcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJSZXNwb25zZSBzdGF0dXM6XCIsIHJlc3BvbnNlLnN0YXR1cyk7XG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICAgICAgICB9KVxuICAgICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUmVzcG9uc2UgZGF0YTpcIiwgZGF0YSk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvcjonLCBlcnJvcik7XG4gICAgICAgIH0pO1xuICAgICAgICBzZXRTaG93VG9hc3QodHJ1ZSk7IC8vIFNob3cgdG9hc3Qgb24gc3VjY2Vzc1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHNldFNob3dUb2FzdChmYWxzZSksIDMwMDApOyAvLyBIaWRlIHRvYXN0IGFmdGVyIDMgc2Vjb25kc1xuICAgICAgICBzZXRDb250YWN0SW5mbyh7IG5hbWU6ICcnLCBlbWFpbDogJycsIG1lc3NhZ2U6ICcnIH0pO1xuICAgIH07XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPFRvYXN0IHNob3c9e3Nob3dUb2FzdH0gbWVzc2FnZT1cIk1lc3NhZ2Ugc2VudCFcIiAvPlxuICAgICAgICAgICAgPEhlYWRlciAvPlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIHctZnVsbCBoLWZ1bGwgei0wXCIgc3R5bGU9e3sgaGVpZ2h0OiAnMTAwdmgnLCB3aWR0aDogJzEwMHZ3JyB9fT5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImltYWdlcy9jb250YWN0LmdpZlwiIGFsdD1cIkJhY2tncm91bmRcIiBjbGFzc05hbWU9XCJoLWZ1bGwgdy1mdWxsIG9iamVjdC1jb3ZlclwiIC8+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSB6LTEwIG1pbi1oLXNjcmVlblwiIHN0eWxlPXt7IHdpZHRoOiAnMTAwdncnIH19PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWN0LWNvbnRhaW5lciBhYnNvbHV0ZSB0b3AtMCBsZWZ0LTAgdy1mdWxsIGgtZnVsbCBmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBiZy1ibGFjayBiZy1vcGFjaXR5LTc1IG10LTEwIGJvcmRlci0yIGJvcmRlci1waW5rLTcwMCBtYXgtdy1mdWxsIHAtNSByb3VuZGVkLW1kIGN1c3RvbS1zaXplXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSB6LTIwXCIgc3R5bGU9e3t3aWR0aDogJzEwMCUnfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiZm9udC1ib2xkIHRleHQtY2VudGVyIHRleHQtd2hpdGUgbWItNCBtdC0xMCB0ZXh0LTN4bFwiPkNvbm5lY3Qgd2l0aCBUZWF6ZTwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIHRleHQtY2VudGVyIG14LWF1dG8gbWF4LXctMnhsIHBiLTJcIj5XZSBsb3ZlIGhlYXJpbmcgZnJvbSBvdXIgZmFucyBhbmQgY29sbGFib3JhdG9ycy4gV2hldGhlciBpdCdzIGFib3V0IGJvb2tpbmcgdXMgZm9yIGEgZ2lnLCBpbnF1aXJpbmcgYWJvdXQgb3VyIGxhdGVzdCB0cmFja3MsIG9yIGp1c3Qgc2F5aW5nIGhpLCBkcm9wIHVzIGEgbWVzc2FnZSE8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIHRleHQtc20gdGV4dC1jZW50ZXIgbXgtYXV0byBtYXgtdy0yeGxcIj4uLi5zbmFrZSBnYW1lIGltcHJvdmVtZW50cy9zdWdnZXN0aW9ucyBhbHNvIHdlbGNvbWUuPC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0gY2xhc3NOYW1lPVwiei0yMFwiIHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsIGFsaWduSXRlbXM6ICdjZW50ZXInIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi00XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJuYW1lXCIgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC13aGl0ZSB0ZXh0LXNtIGZvbnQtYm9sZCBtYi0yIG10LTEwIFwiPk5hbWU6PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwibmFtZVwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwibmFtZVwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Y29udGFjdEluZm8ubmFtZX0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBzaGFkb3cgYXBwZWFyYW5jZS1ub25lIGJvcmRlciByb3VuZGVkIHctZnVsbCBweS0yIHB4LTMgdGV4dC1ncmF5LTcwMCBsZWFkaW5nLXRpZ2h0IGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpzaGFkb3ctb3V0bGluZVwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZW1haWxcIiBjbGFzc05hbWU9XCJibG9jayB0ZXh0LXdoaXRlIHRleHQtc20gZm9udC1ib2xkIG1iLTJcIj5FbWFpbDo8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiZW1haWxcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImVtYWlsXCIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtjb250YWN0SW5mby5lbWFpbH0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzaGFkb3cgYXBwZWFyYW5jZS1ub25lIGJvcmRlciByb3VuZGVkIHctZnVsbCBweS0yIHB4LTMgdGV4dC1ncmF5LTcwMCBsZWFkaW5nLXRpZ2h0IGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpzaGFkb3ctb3V0bGluZVwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibWVzc2FnZVwiIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtd2hpdGUgdGV4dC1zbSBmb250LWJvbGQgbWItMlwiPk1lc3NhZ2U6PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWEgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwibWVzc2FnZVwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwibWVzc2FnZVwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Y29udGFjdEluZm8ubWVzc2FnZX0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzaGFkb3cgYXBwZWFyYW5jZS1ub25lIGJvcmRlciByb3VuZGVkIHctZnVsbCBweS0yIHB4LTMgdGV4dC1ncmF5LTcwMCBtYi0zIGxlYWRpbmctdGlnaHQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnNoYWRvdy1vdXRsaW5lXCIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvdGV4dGFyZWE+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwiYmctZ3JheS03MDAgaG92ZXI6YmctcGluay03MDAgdHJhbnNpdGlvbiBkdXJhdGlvbi0zMDAgdGV4dC13aGl0ZSBmb250LWJvbGQgcHktMiBweC00IHJvdW5kZWQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnNoYWRvdy1vdXRsaW5lXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNlbmQgTWVzc2FnZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8Rm9vdGVyIHZpZGVvTGluaz0naHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/dj1GRmxXSkhPVWhocycvPlxuICAgICAgICA8Lz5cbiAgICApO1xufSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiSGVhZGVyIiwiRm9vdGVyIiwiVG9hc3QiLCJDb250YWN0Iiwic2hvd1RvYXN0Iiwic2V0U2hvd1RvYXN0IiwiY29udGFjdEluZm8iLCJzZXRDb250YWN0SW5mbyIsIm5hbWUiLCJlbWFpbCIsIm1lc3NhZ2UiLCJtdXNpY1ZpZGVvSWQiLCJoYW5kbGVJbnB1dENoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImhhbmRsZVN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwiY29uc29sZSIsImxvZyIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwidGhlbiIsInJlc3BvbnNlIiwic3RhdHVzIiwianNvbiIsImRhdGEiLCJjYXRjaCIsImVycm9yIiwic2V0VGltZW91dCIsInNob3ciLCJkaXYiLCJjbGFzc05hbWUiLCJzdHlsZSIsImhlaWdodCIsIndpZHRoIiwiaW1nIiwic3JjIiwiYWx0IiwiaDIiLCJwIiwiZm9ybSIsIm9uU3VibWl0IiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJhbGlnbkl0ZW1zIiwibGFiZWwiLCJodG1sRm9yIiwiaW5wdXQiLCJ0eXBlIiwiaWQiLCJvbkNoYW5nZSIsInJlcXVpcmVkIiwidGV4dGFyZWEiLCJidXR0b24iLCJ2aWRlb0xpbmsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/contact.js\n"));

/***/ })

});