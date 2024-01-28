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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Toast__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Toast */ \"./components/Toast.js\");\n\nvar _s = $RefreshSig$();\n\n\nconst CardInput = (param)=>{\n    let { updateCardState, onPrizeWin } = param;\n    _s();\n    const [code, setCode] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [showToast, setShowToast] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [toastMessage, setToastMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const checkCode = async (code)=>{\n        try {\n            const response = await fetch(\"https://thebandteazebackend-production.up.railway.app/api/check-code\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                    code\n                })\n            });\n            if (!response.ok) {\n                throw new Error(\"HTTP Error: \".concat(response.status));\n            }\n            const data = await response.json();\n            if (data.match) {\n                console.log(\"Code matched. Prize: \".concat(data.prize));\n                updateCardState(true);\n                setShowToast(true);\n                setToastMessage(data.message);\n                setTimeout(()=>setShowToast(false), 3000);\n                updateCardState();\n            } else {\n                setShowToast(true);\n                console.log(data.message);\n                setToastMessage(data.message);\n                setTimeout(()=>setShowToast(false), 3000);\n            }\n        } catch (error) {\n            console.error(\"Error checking code:\", error.message);\n        }\n    };\n    const handleSubmit = async (e)=>{\n        e.preventDefault(); // Prevent the default form submit action\n        await checkCode(code);\n    };\n    const handleInputChange = (event)=>{\n        let { value } = event.target;\n        // Remove all non-numeric and non-alphabetic characters\n        value = value.replace(/[^a-zA-Z0-9]/g, \"\");\n        // Insert dash after every 4 characters\n        let newValue = \"\";\n        for(let i = 0; i < value.length; i++){\n            if (i > 0 && i % 4 === 0) {\n                newValue += \"-\";\n            }\n            newValue += value[i];\n        }\n        setCode(newValue.toUpperCase());\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                id: \"cardCode\",\n                name: \"cardCode\",\n                placeholder: \"Enter unique code\",\n                value: code,\n                onChange: handleInputChange,\n                maxLength: \"19\",\n                className: \"text-black p-2 rounded-l w-full focus:outline-none flex-grow flex-shrink\"\n            }, void 0, false, {\n                fileName: \"/Users/KKYAXYU/theband.teaze/components/CardInput.js\",\n                lineNumber: 66,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                type: \"submit\",\n                onClick: handleSubmit,\n                className: \"bg-gray-700 hover:bg-pink-700 transition duration-300 text-white font-bold py-2 px-4 rounded-r focus:outline-none focus:shadow-outline sm:py-1 sm:px-3\",\n                children: \"Submit\"\n            }, void 0, false, {\n                fileName: \"/Users/KKYAXYU/theband.teaze/components/CardInput.js\",\n                lineNumber: 76,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Toast__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                show: showToast,\n                message: toastMessage\n            }, void 0, false, {\n                fileName: \"/Users/KKYAXYU/theband.teaze/components/CardInput.js\",\n                lineNumber: 83,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(CardInput, \"D3Z3Y71Ap5lKUPVDJnaO/DyFCuQ=\");\n_c = CardInput;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CardInput);\nvar _c;\n$RefreshReg$(_c, \"CardInput\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0NhcmRJbnB1dC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUF3QztBQUNaO0FBRTVCLE1BQU1HLFlBQVk7UUFBQyxFQUFFQyxlQUFlLEVBQUVDLFVBQVUsRUFBRTs7SUFDaEQsTUFBTSxDQUFDQyxNQUFNQyxRQUFRLEdBQUdOLCtDQUFRQSxDQUFDO0lBQ2pDLE1BQU0sQ0FBQ08sV0FBV0MsYUFBYSxHQUFHUiwrQ0FBUUEsQ0FBQztJQUMzQyxNQUFNLENBQUNTLGNBQWNDLGdCQUFnQixHQUFHViwrQ0FBUUEsQ0FBQztJQUVqRCxNQUFNVyxZQUFZLE9BQU9OO1FBQ3ZCLElBQUk7WUFDRixNQUFNTyxXQUFXLE1BQU1DLE1BQU8sd0VBQXVFO2dCQUNuR0MsUUFBUTtnQkFDUkMsU0FBUztvQkFDUCxnQkFBZ0I7Z0JBQ2xCO2dCQUNBQyxNQUFNQyxLQUFLQyxTQUFTLENBQUM7b0JBQUViO2dCQUFLO1lBQzlCO1lBRUEsSUFBSSxDQUFDTyxTQUFTTyxFQUFFLEVBQUU7Z0JBQ2hCLE1BQU0sSUFBSUMsTUFBTSxlQUErQixPQUFoQlIsU0FBU1MsTUFBTTtZQUNoRDtZQUVBLE1BQU1DLE9BQU8sTUFBTVYsU0FBU1csSUFBSTtZQUNoQyxJQUFJRCxLQUFLRSxLQUFLLEVBQUU7Z0JBQ2RDLFFBQVFDLEdBQUcsQ0FBQyx3QkFBbUMsT0FBWEosS0FBS0ssS0FBSztnQkFDOUN4QixnQkFBZ0I7Z0JBQ2hCSyxhQUFhO2dCQUNiRSxnQkFBZ0JZLEtBQUtNLE9BQU87Z0JBQzVCQyxXQUFXLElBQU1yQixhQUFhLFFBQVE7Z0JBQ3RDTDtZQUNGLE9BQU87Z0JBQ0xLLGFBQWE7Z0JBQ2JpQixRQUFRQyxHQUFHLENBQUNKLEtBQUtNLE9BQU87Z0JBQ3hCbEIsZ0JBQWdCWSxLQUFLTSxPQUFPO2dCQUM1QkMsV0FBVyxJQUFNckIsYUFBYSxRQUFRO1lBQ3hDO1FBQ0YsRUFBRSxPQUFPc0IsT0FBTztZQUNkTCxRQUFRSyxLQUFLLENBQUMsd0JBQXdCQSxNQUFNRixPQUFPO1FBQ3JEO0lBQ0Y7SUFFQSxNQUFNRyxlQUFlLE9BQU9DO1FBQzFCQSxFQUFFQyxjQUFjLElBQUkseUNBQXlDO1FBQzdELE1BQU10QixVQUFVTjtJQUNsQjtJQUVBLE1BQU02QixvQkFBb0IsQ0FBQ0M7UUFDekIsSUFBSSxFQUFFQyxLQUFLLEVBQUUsR0FBR0QsTUFBTUUsTUFBTTtRQUM1Qix1REFBdUQ7UUFDdkRELFFBQVFBLE1BQU1FLE9BQU8sQ0FBQyxpQkFBaUI7UUFFdkMsdUNBQXVDO1FBQ3ZDLElBQUlDLFdBQVc7UUFDZixJQUFLLElBQUlDLElBQUksR0FBR0EsSUFBSUosTUFBTUssTUFBTSxFQUFFRCxJQUFLO1lBQ3JDLElBQUlBLElBQUksS0FBS0EsSUFBSSxNQUFNLEdBQUc7Z0JBQ3hCRCxZQUFZO1lBQ2Q7WUFDQUEsWUFBWUgsS0FBSyxDQUFDSSxFQUFFO1FBQ3RCO1FBRUFsQyxRQUFRaUMsU0FBU0csV0FBVztJQUM5QjtJQUVBLHFCQUNFOzswQkFDRSw4REFBQ0M7Z0JBQ0NDLE1BQUs7Z0JBQ0xDLElBQUc7Z0JBQ0hDLE1BQUs7Z0JBQ0xDLGFBQVk7Z0JBQ1pYLE9BQU8vQjtnQkFDUDJDLFVBQVVkO2dCQUNWZSxXQUFVO2dCQUNWQyxXQUFVOzs7Ozs7MEJBRVYsOERBQUNDO2dCQUNDUCxNQUFLO2dCQUNMUSxTQUFTckI7Z0JBQ1RtQixXQUFVOzBCQUNYOzs7Ozs7MEJBR0gsOERBQUNqRCw4Q0FBS0E7Z0JBQUNvRCxNQUFNOUM7Z0JBQVdxQixTQUFTbkI7Ozs7Ozs7O0FBR3ZDO0dBbEZNUDtLQUFBQTtBQW9GTiwrREFBZUEsU0FBU0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0NhcmRJbnB1dC5qcz8wNGI4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBUb2FzdCBmcm9tICcuL1RvYXN0JzsgXG5cbmNvbnN0IENhcmRJbnB1dCA9ICh7IHVwZGF0ZUNhcmRTdGF0ZSwgb25Qcml6ZVdpbiB9KSA9PiB7XG4gIGNvbnN0IFtjb2RlLCBzZXRDb2RlXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW3Nob3dUb2FzdCwgc2V0U2hvd1RvYXN0XSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3RvYXN0TWVzc2FnZSwgc2V0VG9hc3RNZXNzYWdlXSA9IHVzZVN0YXRlKCcnKTtcblxuICBjb25zdCBjaGVja0NvZGUgPSBhc3luYyAoY29kZSkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL3RoZWJhbmR0ZWF6ZWJhY2tlbmQtcHJvZHVjdGlvbi51cC5yYWlsd2F5LmFwcC9hcGkvY2hlY2stY29kZWAsIHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICB9LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IGNvZGUgfSksXG4gICAgICB9KTtcblxuICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEhUVFAgRXJyb3I6ICR7cmVzcG9uc2Uuc3RhdHVzfWApO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgaWYgKGRhdGEubWF0Y2gpIHtcbiAgICAgICAgY29uc29sZS5sb2coYENvZGUgbWF0Y2hlZC4gUHJpemU6ICR7ZGF0YS5wcml6ZX1gKTtcbiAgICAgICAgdXBkYXRlQ2FyZFN0YXRlKHRydWUpO1xuICAgICAgICBzZXRTaG93VG9hc3QodHJ1ZSk7XG4gICAgICAgIHNldFRvYXN0TWVzc2FnZShkYXRhLm1lc3NhZ2UpO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHNldFNob3dUb2FzdChmYWxzZSksIDMwMDApO1xuICAgICAgICB1cGRhdGVDYXJkU3RhdGUoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNldFNob3dUb2FzdCh0cnVlKTtcbiAgICAgICAgY29uc29sZS5sb2coZGF0YS5tZXNzYWdlKTsgXG4gICAgICAgIHNldFRvYXN0TWVzc2FnZShkYXRhLm1lc3NhZ2UpO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHNldFNob3dUb2FzdChmYWxzZSksIDMwMDApOyBcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgY2hlY2tpbmcgY29kZTonLCBlcnJvci5tZXNzYWdlKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7IC8vIFByZXZlbnQgdGhlIGRlZmF1bHQgZm9ybSBzdWJtaXQgYWN0aW9uXG4gICAgYXdhaXQgY2hlY2tDb2RlKGNvZGUpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUlucHV0Q2hhbmdlID0gKGV2ZW50KSA9PiB7XG4gICAgbGV0IHsgdmFsdWUgfSA9IGV2ZW50LnRhcmdldDtcbiAgICAvLyBSZW1vdmUgYWxsIG5vbi1udW1lcmljIGFuZCBub24tYWxwaGFiZXRpYyBjaGFyYWN0ZXJzXG4gICAgdmFsdWUgPSB2YWx1ZS5yZXBsYWNlKC9bXmEtekEtWjAtOV0vZywgJycpO1xuICBcbiAgICAvLyBJbnNlcnQgZGFzaCBhZnRlciBldmVyeSA0IGNoYXJhY3RlcnNcbiAgICBsZXQgbmV3VmFsdWUgPSAnJztcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHZhbHVlLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoaSA+IDAgJiYgaSAlIDQgPT09IDApIHtcbiAgICAgICAgbmV3VmFsdWUgKz0gJy0nO1xuICAgICAgfVxuICAgICAgbmV3VmFsdWUgKz0gdmFsdWVbaV07XG4gICAgfVxuICBcbiAgICBzZXRDb2RlKG5ld1ZhbHVlLnRvVXBwZXJDYXNlKCkpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxpbnB1dFxuICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgIGlkPVwiY2FyZENvZGVcIlxuICAgICAgICBuYW1lPVwiY2FyZENvZGVcIlxuICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIHVuaXF1ZSBjb2RlXCJcbiAgICAgICAgdmFsdWU9e2NvZGV9XG4gICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX1cbiAgICAgICAgbWF4TGVuZ3RoPVwiMTlcIlxuICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWJsYWNrIHAtMiByb3VuZGVkLWwgdy1mdWxsIGZvY3VzOm91dGxpbmUtbm9uZSBmbGV4LWdyb3cgZmxleC1zaHJpbmtcIlxuICAgICAgICAvPlxuICAgICAgICA8YnV0dG9uIFxuICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIiBcbiAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVTdWJtaXR9IFxuICAgICAgICAgIGNsYXNzTmFtZT1cImJnLWdyYXktNzAwIGhvdmVyOmJnLXBpbmstNzAwIHRyYW5zaXRpb24gZHVyYXRpb24tMzAwIHRleHQtd2hpdGUgZm9udC1ib2xkIHB5LTIgcHgtNCByb3VuZGVkLXIgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnNoYWRvdy1vdXRsaW5lIHNtOnB5LTEgc206cHgtM1wiXG4gICAgICAgID5cbiAgICAgICAgU3VibWl0XG4gICAgICA8L2J1dHRvbj4gICAgXG4gICAgICA8VG9hc3Qgc2hvdz17c2hvd1RvYXN0fSBtZXNzYWdlPXt0b2FzdE1lc3NhZ2V9IC8+XG4gICAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENhcmRJbnB1dDsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIlRvYXN0IiwiQ2FyZElucHV0IiwidXBkYXRlQ2FyZFN0YXRlIiwib25Qcml6ZVdpbiIsImNvZGUiLCJzZXRDb2RlIiwic2hvd1RvYXN0Iiwic2V0U2hvd1RvYXN0IiwidG9hc3RNZXNzYWdlIiwic2V0VG9hc3RNZXNzYWdlIiwiY2hlY2tDb2RlIiwicmVzcG9uc2UiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsIm9rIiwiRXJyb3IiLCJzdGF0dXMiLCJkYXRhIiwianNvbiIsIm1hdGNoIiwiY29uc29sZSIsImxvZyIsInByaXplIiwibWVzc2FnZSIsInNldFRpbWVvdXQiLCJlcnJvciIsImhhbmRsZVN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImhhbmRsZUlucHV0Q2hhbmdlIiwiZXZlbnQiLCJ2YWx1ZSIsInRhcmdldCIsInJlcGxhY2UiLCJuZXdWYWx1ZSIsImkiLCJsZW5ndGgiLCJ0b1VwcGVyQ2FzZSIsImlucHV0IiwidHlwZSIsImlkIiwibmFtZSIsInBsYWNlaG9sZGVyIiwib25DaGFuZ2UiLCJtYXhMZW5ndGgiLCJjbGFzc05hbWUiLCJidXR0b24iLCJvbkNsaWNrIiwic2hvdyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/CardInput.js\n"));

/***/ })

});