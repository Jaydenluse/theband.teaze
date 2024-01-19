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

/***/ "./components/YoutubeVideoList.js":
/*!****************************************!*\
  !*** ./components/YoutubeVideoList.js ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ YouTubeVideoList; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_LinkModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/LinkModal */ \"./components/LinkModal.js\");\n\nvar _s = $RefreshSig$();\n\n\nconst videoLinksMap = {\n    \"Copy Copy\": [\n        {\n            title: \"Spotify\",\n            url: \"https://open.spotify.com/track/6svh3u88qilvZAxI2D1tPy\",\n            image: \"/images/spotify.png\"\n        },\n        {\n            title: \"Soundcloud\",\n            url: \"https://soundcloud.com/teaze-band/copy-copy\",\n            image: \"/images/soundcloud.png\"\n        },\n        {\n            title: \"Youtube\",\n            url: \"https://www.youtube.com/watch?v=YM7DNQ4oyfk\",\n            image: \"/images/youtube.png\"\n        },\n        {\n            title: \"Spotify\",\n            url: \"https://teaze.bandcamp.com/track/copy-copy\",\n            image: \"/images/bandcamp.png\"\n        },\n        {\n            title: \"Spotify\",\n            url: \"https://www.pandora.com/artist/teaze/copy-copy/copy-copy/TRx9td7zZXbpbXP\",\n            image: \"/images/pandora.png\"\n        },\n        {\n            title: \"Spotify\",\n            url: \"https://open.spotify.com/track/6svh3u88qilvZAxI2D1tPy\",\n            image: \"/images/spotify.png\"\n        }\n    ],\n    \"New Leaf\": [\n        {\n            title: \"Soundcloud\",\n            url: \"https://soundcloud.com/teaze-band/copy-copy\",\n            image: \"/images/soundcloud.png\"\n        },\n        {\n            title: \"Spotify\",\n            url: \"https://open.spotify.com/track/6svh3u88qilvZAxI2D1tPy\",\n            image: \"/images/spotify.png\"\n        }\n    ]\n};\nfunction YouTubeVideoList() {\n    _s();\n    const [videos, setVideos] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [isModalOpen, setModalOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [activeVideo, setActiveVideo] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null); // State to hold the currently active video\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetch(\"/api/youtube\").then((response)=>response.json()).then((data)=>setVideos(data)).catch((error)=>console.error(\"Error fetching videos:\", error));\n    }, []);\n    const handleVideoClick = (video)=>{\n        setActiveVideo({\n            ...video,\n            links: videoLinksMap[video.snippet.title] || []\n        });\n        setModalOpen(true); // Open the modal\n    };\n    const handleCloseModal = ()=>{\n        setModalOpen(false);\n        setActiveVideo(null); // Clear the active video\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"video-list-container pt-10\",\n                children: videos.map((video)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"video-container\",\n                        onClick: ()=>handleVideoClick(video),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"image-crop-container cursor-pointer\",\n                                style: {\n                                    backgroundImage: \"/images/copycopy.png\"\n                                }\n                            }, void 0, false, {\n                                fileName: \"/Users/KKYAXYU/theband.teaze/components/YoutubeVideoList.js\",\n                                lineNumber: 52,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                className: \"video-title text-xl font-bold text-white p-4\",\n                                children: video.snippet.title\n                            }, void 0, false, {\n                                fileName: \"/Users/KKYAXYU/theband.teaze/components/YoutubeVideoList.js\",\n                                lineNumber: 56,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, video.id.videoId, true, {\n                        fileName: \"/Users/KKYAXYU/theband.teaze/components/YoutubeVideoList.js\",\n                        lineNumber: 51,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/Users/KKYAXYU/theband.teaze/components/YoutubeVideoList.js\",\n                lineNumber: 49,\n                columnNumber: 7\n            }, this),\n            activeVideo && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_LinkModal__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                isOpen: isModalOpen,\n                onClose: handleCloseModal,\n                video: activeVideo\n            }, void 0, false, {\n                fileName: \"/Users/KKYAXYU/theband.teaze/components/YoutubeVideoList.js\",\n                lineNumber: 63,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(YouTubeVideoList, \"SV6eaa/xpnHRYr0i8cQTmgNowug=\");\n_c = YouTubeVideoList;\nvar _c;\n$RefreshReg$(_c, \"YouTubeVideoList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1lvdXR1YmVWaWRlb0xpc3QuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBbUQ7QUFDSDtBQUVoRCxNQUFNSSxnQkFBZ0I7SUFDcEIsYUFBYTtRQUNYO1lBQUVDLE9BQU87WUFBV0MsS0FBSztZQUF5REMsT0FBTztRQUFzQjtRQUMvRztZQUFFRixPQUFPO1lBQWNDLEtBQUs7WUFBK0NDLE9BQU87UUFBd0I7UUFDMUc7WUFBRUYsT0FBTztZQUFXQyxLQUFLO1lBQStDQyxPQUFPO1FBQXNCO1FBQ3JHO1lBQUVGLE9BQU87WUFBV0MsS0FBSztZQUE4Q0MsT0FBTztRQUF1QjtRQUNyRztZQUFFRixPQUFPO1lBQVdDLEtBQUs7WUFBNEVDLE9BQU87UUFBc0I7UUFDbEk7WUFBRUYsT0FBTztZQUFXQyxLQUFLO1lBQXlEQyxPQUFPO1FBQXNCO0tBRWhIO0lBQ0QsWUFBWTtRQUNWO1lBQUVGLE9BQU87WUFBY0MsS0FBSztZQUErQ0MsT0FBTztRQUF3QjtRQUMxRztZQUFFRixPQUFPO1lBQVdDLEtBQUs7WUFBeURDLE9BQU87UUFBcUI7S0FDL0c7QUFFSDtBQUdlLFNBQVNDOztJQUN0QixNQUFNLENBQUNDLFFBQVFDLFVBQVUsR0FBR1IsK0NBQVFBLENBQUMsRUFBRTtJQUN2QyxNQUFNLENBQUNTLGFBQWFDLGFBQWEsR0FBR1YsK0NBQVFBLENBQUM7SUFDN0MsTUFBTSxDQUFDVyxhQUFhQyxlQUFlLEdBQUdaLCtDQUFRQSxDQUFDLE9BQU8sMkNBQTJDO0lBRWpHRCxnREFBU0EsQ0FBQztRQUNSYyxNQUFNLGdCQUNIQyxJQUFJLENBQUNDLENBQUFBLFdBQVlBLFNBQVNDLElBQUksSUFDOUJGLElBQUksQ0FBQ0csQ0FBQUEsT0FBUVQsVUFBVVMsT0FDdkJDLEtBQUssQ0FBQ0MsQ0FBQUEsUUFBU0MsUUFBUUQsS0FBSyxDQUFDLDBCQUEwQkE7SUFDNUQsR0FBRyxFQUFFO0lBRUwsTUFBTUUsbUJBQW1CLENBQUNDO1FBQ3hCVixlQUFlO1lBQ2IsR0FBR1UsS0FBSztZQUNSQyxPQUFPckIsYUFBYSxDQUFDb0IsTUFBTUUsT0FBTyxDQUFDckIsS0FBSyxDQUFDLElBQUksRUFBRTtRQUNqRDtRQUNBTyxhQUFhLE9BQU8saUJBQWlCO0lBQ3ZDO0lBRUEsTUFBTWUsbUJBQW1CO1FBQ3ZCZixhQUFhO1FBQ2JFLGVBQWUsT0FBTyx5QkFBeUI7SUFDakQ7SUFFQSxxQkFDRTs7MEJBQ0UsOERBQUNjO2dCQUFJQyxXQUFVOzBCQUNacEIsT0FBT3FCLEdBQUcsQ0FBQyxDQUFDTixzQkFDWCw4REFBQ0k7d0JBQTJCQyxXQUFVO3dCQUFrQkUsU0FBUyxJQUFNUixpQkFBaUJDOzswQ0FDdEYsOERBQUNJO2dDQUNDQyxXQUFVO2dDQUNWRyxPQUFPO29DQUFFQyxpQkFBaUI7Z0NBQXVCOzs7Ozs7MENBRW5ELDhEQUFDQztnQ0FBR0wsV0FBVTswQ0FDWEwsTUFBTUUsT0FBTyxDQUFDckIsS0FBSzs7Ozs7Ozt1QkFOZG1CLE1BQU1XLEVBQUUsQ0FBQ0MsT0FBTzs7Ozs7Ozs7OztZQVc3QnZCLDZCQUNDLDhEQUFDViw2REFBU0E7Z0JBQ1JrQyxRQUFRMUI7Z0JBQ1IyQixTQUFTWDtnQkFDVEgsT0FBT1g7Ozs7Ozs7O0FBS2pCO0dBakR3Qkw7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Zb3V0dWJlVmlkZW9MaXN0LmpzP2U5NDUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGlua01vZGFsIGZyb20gJy4uL2NvbXBvbmVudHMvTGlua01vZGFsJztcblxuY29uc3QgdmlkZW9MaW5rc01hcCA9IHtcbiAgJ0NvcHkgQ29weSc6IFtcbiAgICB7IHRpdGxlOiAnU3BvdGlmeScsIHVybDogJ2h0dHBzOi8vb3Blbi5zcG90aWZ5LmNvbS90cmFjay82c3ZoM3U4OHFpbHZaQXhJMkQxdFB5JywgaW1hZ2U6ICcvaW1hZ2VzL3Nwb3RpZnkucG5nJyB9LFxuICAgIHsgdGl0bGU6ICdTb3VuZGNsb3VkJywgdXJsOiAnaHR0cHM6Ly9zb3VuZGNsb3VkLmNvbS90ZWF6ZS1iYW5kL2NvcHktY29weScsIGltYWdlOiAnL2ltYWdlcy9zb3VuZGNsb3VkLnBuZyd9LFxuICAgIHsgdGl0bGU6ICdZb3V0dWJlJywgdXJsOiAnaHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/dj1ZTTdETlE0b3lmaycsIGltYWdlOiAnL2ltYWdlcy95b3V0dWJlLnBuZycgfSxcbiAgICB7IHRpdGxlOiAnU3BvdGlmeScsIHVybDogJ2h0dHBzOi8vdGVhemUuYmFuZGNhbXAuY29tL3RyYWNrL2NvcHktY29weScsIGltYWdlOiAnL2ltYWdlcy9iYW5kY2FtcC5wbmcnIH0sXG4gICAgeyB0aXRsZTogJ1Nwb3RpZnknLCB1cmw6ICdodHRwczovL3d3dy5wYW5kb3JhLmNvbS9hcnRpc3QvdGVhemUvY29weS1jb3B5L2NvcHktY29weS9UUng5dGQ3elpYYnBiWFAnLCBpbWFnZTogJy9pbWFnZXMvcGFuZG9yYS5wbmcnIH0sXG4gICAgeyB0aXRsZTogJ1Nwb3RpZnknLCB1cmw6ICdodHRwczovL29wZW4uc3BvdGlmeS5jb20vdHJhY2svNnN2aDN1ODhxaWx2WkF4STJEMXRQeScsIGltYWdlOiAnL2ltYWdlcy9zcG90aWZ5LnBuZycgfVxuICAgIC8vIC4uLiBvdGhlciBsaW5rc1xuICBdLFxuICAnTmV3IExlYWYnOiBbXG4gICAgeyB0aXRsZTogJ1NvdW5kY2xvdWQnLCB1cmw6ICdodHRwczovL3NvdW5kY2xvdWQuY29tL3RlYXplLWJhbmQvY29weS1jb3B5JywgaW1hZ2U6ICcvaW1hZ2VzL3NvdW5kY2xvdWQucG5nJ30sXG4gICAgeyB0aXRsZTogJ1Nwb3RpZnknLCB1cmw6ICdodHRwczovL29wZW4uc3BvdGlmeS5jb20vdHJhY2svNnN2aDN1ODhxaWx2WkF4STJEMXRQeScsIGltYWdlOiAnL2ltYWdlcy9zcG90aWZ5LnBuZyd9XG4gIF0sXG4gIC8vIC4uLiBtb3JlIG1hcHBpbmdzXG59O1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFlvdVR1YmVWaWRlb0xpc3QoKSB7XG4gIGNvbnN0IFt2aWRlb3MsIHNldFZpZGVvc10gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtpc01vZGFsT3Blbiwgc2V0TW9kYWxPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2FjdGl2ZVZpZGVvLCBzZXRBY3RpdmVWaWRlb10gPSB1c2VTdGF0ZShudWxsKTsgLy8gU3RhdGUgdG8gaG9sZCB0aGUgY3VycmVudGx5IGFjdGl2ZSB2aWRlb1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZmV0Y2goJy9hcGkveW91dHViZScpXG4gICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAudGhlbihkYXRhID0+IHNldFZpZGVvcyhkYXRhKSlcbiAgICAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyB2aWRlb3M6JywgZXJyb3IpKTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IGhhbmRsZVZpZGVvQ2xpY2sgPSAodmlkZW8pID0+IHtcbiAgICBzZXRBY3RpdmVWaWRlbyh7XG4gICAgICAuLi52aWRlbyxcbiAgICAgIGxpbmtzOiB2aWRlb0xpbmtzTWFwW3ZpZGVvLnNuaXBwZXQudGl0bGVdIHx8IFtdIFxuICAgIH0pO1xuICAgIHNldE1vZGFsT3Blbih0cnVlKTsgLy8gT3BlbiB0aGUgbW9kYWxcbiAgfTtcblxuICBjb25zdCBoYW5kbGVDbG9zZU1vZGFsID0gKCkgPT4ge1xuICAgIHNldE1vZGFsT3BlbihmYWxzZSk7XG4gICAgc2V0QWN0aXZlVmlkZW8obnVsbCk7IC8vIENsZWFyIHRoZSBhY3RpdmUgdmlkZW9cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInZpZGVvLWxpc3QtY29udGFpbmVyIHB0LTEwXCI+XG4gICAgICAgIHt2aWRlb3MubWFwKCh2aWRlbykgPT4gKFxuICAgICAgICAgIDxkaXYga2V5PXt2aWRlby5pZC52aWRlb0lkfSBjbGFzc05hbWU9XCJ2aWRlby1jb250YWluZXJcIiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVWaWRlb0NsaWNrKHZpZGVvKX0+XG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImltYWdlLWNyb3AtY29udGFpbmVyIGN1cnNvci1wb2ludGVyXCJcbiAgICAgICAgICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZEltYWdlOiAnL2ltYWdlcy9jb3B5Y29weS5wbmcnIH19XG4gICAgICAgICAgICA+PC9kaXY+XG4gICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidmlkZW8tdGl0bGUgdGV4dC14bCBmb250LWJvbGQgdGV4dC13aGl0ZSBwLTRcIj5cbiAgICAgICAgICAgICAge3ZpZGVvLnNuaXBwZXQudGl0bGV9XG4gICAgICAgICAgICA8L2gzPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuICAgICAge2FjdGl2ZVZpZGVvICYmICggLy8gT25seSByZW5kZXIgdGhlIExpbmtNb2RhbCBpZiB0aGVyZSBpcyBhbiBhY3RpdmUgdmlkZW9cbiAgICAgICAgPExpbmtNb2RhbCBcbiAgICAgICAgICBpc09wZW49e2lzTW9kYWxPcGVufSBcbiAgICAgICAgICBvbkNsb3NlPXtoYW5kbGVDbG9zZU1vZGFsfSBcbiAgICAgICAgICB2aWRlbz17YWN0aXZlVmlkZW99IC8vIFBhc3MgdGhlIGFjdGl2ZSB2aWRlbyB0byB0aGUgbW9kYWxcbiAgICAgICAgLz5cbiAgICAgICl9XG4gICAgPC8+XG4gICk7XG59Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJMaW5rTW9kYWwiLCJ2aWRlb0xpbmtzTWFwIiwidGl0bGUiLCJ1cmwiLCJpbWFnZSIsIllvdVR1YmVWaWRlb0xpc3QiLCJ2aWRlb3MiLCJzZXRWaWRlb3MiLCJpc01vZGFsT3BlbiIsInNldE1vZGFsT3BlbiIsImFjdGl2ZVZpZGVvIiwic2V0QWN0aXZlVmlkZW8iLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJkYXRhIiwiY2F0Y2giLCJlcnJvciIsImNvbnNvbGUiLCJoYW5kbGVWaWRlb0NsaWNrIiwidmlkZW8iLCJsaW5rcyIsInNuaXBwZXQiLCJoYW5kbGVDbG9zZU1vZGFsIiwiZGl2IiwiY2xhc3NOYW1lIiwibWFwIiwib25DbGljayIsInN0eWxlIiwiYmFja2dyb3VuZEltYWdlIiwiaDMiLCJpZCIsInZpZGVvSWQiLCJpc09wZW4iLCJvbkNsb3NlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/YoutubeVideoList.js\n"));

/***/ })

});