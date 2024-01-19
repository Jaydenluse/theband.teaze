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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ YouTubeVideoList; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_LinkModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/LinkModal */ \"./components/LinkModal.js\");\n\nvar _s = $RefreshSig$();\n\n\nconst videoLinksMap = {\n    \"Copy Copy\": [\n        {\n            title: \"Spotify\",\n            url: \"https://open.spotify.com/track/6svh3u88qilvZAxI2D1tPy\",\n            image: \"/images/spotify.png\"\n        },\n        {\n            title: \"Soundcloud\",\n            url: \"https://soundcloud.com/teaze-band/copy-copy\",\n            image: \"/images/soundcloud.png\"\n        },\n        {\n            title: \"Youtube\",\n            url: \"https://www.youtube.com/watch?v=YM7DNQ4oyfk\",\n            image: \"/images/youtube.png\"\n        },\n        {\n            title: \"Spotify\",\n            url: \"https://teaze.bandcamp.com/track/copy-copy\",\n            image: \"/images/bandcamp.png\"\n        },\n        {\n            title: \"Spotify\",\n            url: \"https://www.pandora.com/artist/teaze/copy-copy/copy-copy/TRx9td7zZXbpbXP\",\n            image: \"/images/pandora.png\"\n        },\n        {\n            title: \"Spotify\",\n            url: \"https://open.spotify.com/track/6svh3u88qilvZAxI2D1tPy\",\n            image: \"/images/spotify.png\"\n        }\n    ],\n    \"New Leaf\": [\n        {\n            title: \"Soundcloud\",\n            url: \"https://soundcloud.com/teaze-band/copy-copy\",\n            image: \"/images/soundcloud.png\"\n        },\n        {\n            title: \"Spotify\",\n            url: \"https://open.spotify.com/track/6svh3u88qilvZAxI2D1tPy\",\n            image: \"/images/spotify.png\"\n        }\n    ]\n};\nconst albums = [\n    {\n        id: 1,\n        title: \"Album 1\",\n        imageUrl: \"/path/to/image1.jpg\"\n    },\n    {\n        id: 2,\n        title: \"Album 2\",\n        imageUrl: \"/path/to/image2.jpg\"\n    }\n];\nfunction YouTubeVideoList() {\n    _s();\n    const [videos, setVideos] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [isModalOpen, setModalOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [activeVideo, setActiveVideo] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null); // State to hold the currently active video\n    // useEffect(() => {\n    //   fetch('/api/youtube')\n    //     .then(response => response.json())\n    //     .then(data => setVideos(data))\n    //     .catch(error => console.error('Error fetching videos:', error));\n    // }, []);\n    const handleVideoClick = (video)=>{\n        setActiveVideo({\n            ...video,\n            links: videoLinksMap[video.snippet.title] || []\n        });\n        setModalOpen(true); // Open the modal\n    };\n    const handleCloseModal = ()=>{\n        setModalOpen(false);\n        setActiveVideo(null); // Clear the active video\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"video-list-container pt-10\",\n                children: videos.map((video)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"video-container\",\n                        onClick: ()=>handleVideoClick(video),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"image-crop-container cursor-pointer\",\n                                style: {\n                                    backgroundImage: \"/images/copycopy.jpg\"\n                                }\n                            }, void 0, false, {\n                                fileName: \"/Users/KKYAXYU/theband.teaze/components/YoutubeVideoList.js\",\n                                lineNumber: 58,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                className: \"video-title text-xl font-bold text-white p-4\",\n                                children: video.snippet.title\n                            }, void 0, false, {\n                                fileName: \"/Users/KKYAXYU/theband.teaze/components/YoutubeVideoList.js\",\n                                lineNumber: 62,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, video.id.videoId, true, {\n                        fileName: \"/Users/KKYAXYU/theband.teaze/components/YoutubeVideoList.js\",\n                        lineNumber: 57,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/Users/KKYAXYU/theband.teaze/components/YoutubeVideoList.js\",\n                lineNumber: 55,\n                columnNumber: 7\n            }, this),\n            activeVideo && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_LinkModal__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                isOpen: isModalOpen,\n                onClose: handleCloseModal,\n                video: activeVideo\n            }, void 0, false, {\n                fileName: \"/Users/KKYAXYU/theband.teaze/components/YoutubeVideoList.js\",\n                lineNumber: 69,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(YouTubeVideoList, \"BCNd7ScqazqkWHIKQGTcN/9SjdA=\");\n_c = YouTubeVideoList;\nvar _c;\n$RefreshReg$(_c, \"YouTubeVideoList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1lvdXR1YmVWaWRlb0xpc3QuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBbUQ7QUFDSDtBQUVoRCxNQUFNSSxnQkFBZ0I7SUFDcEIsYUFBYTtRQUNYO1lBQUVDLE9BQU87WUFBV0MsS0FBSztZQUF5REMsT0FBTztRQUFzQjtRQUMvRztZQUFFRixPQUFPO1lBQWNDLEtBQUs7WUFBK0NDLE9BQU87UUFBd0I7UUFDMUc7WUFBRUYsT0FBTztZQUFXQyxLQUFLO1lBQStDQyxPQUFPO1FBQXNCO1FBQ3JHO1lBQUVGLE9BQU87WUFBV0MsS0FBSztZQUE4Q0MsT0FBTztRQUF1QjtRQUNyRztZQUFFRixPQUFPO1lBQVdDLEtBQUs7WUFBNEVDLE9BQU87UUFBc0I7UUFDbEk7WUFBRUYsT0FBTztZQUFXQyxLQUFLO1lBQXlEQyxPQUFPO1FBQXNCO0tBRWhIO0lBQ0QsWUFBWTtRQUNWO1lBQUVGLE9BQU87WUFBY0MsS0FBSztZQUErQ0MsT0FBTztRQUF3QjtRQUMxRztZQUFFRixPQUFPO1lBQVdDLEtBQUs7WUFBeURDLE9BQU87UUFBcUI7S0FDL0c7QUFFSDtBQUVBLE1BQU1DLFNBQVM7SUFDYjtRQUFFQyxJQUFJO1FBQUdKLE9BQU87UUFBV0ssVUFBVTtJQUFzQjtJQUMzRDtRQUFFRCxJQUFJO1FBQUdKLE9BQU87UUFBV0ssVUFBVTtJQUFzQjtDQUU1RDtBQUdjLFNBQVNDOztJQUN0QixNQUFNLENBQUNDLFFBQVFDLFVBQVUsR0FBR1gsK0NBQVFBLENBQUMsRUFBRTtJQUN2QyxNQUFNLENBQUNZLGFBQWFDLGFBQWEsR0FBR2IsK0NBQVFBLENBQUM7SUFDN0MsTUFBTSxDQUFDYyxhQUFhQyxlQUFlLEdBQUdmLCtDQUFRQSxDQUFDLE9BQU8sMkNBQTJDO0lBRWpHLG9CQUFvQjtJQUNwQiwwQkFBMEI7SUFDMUIseUNBQXlDO0lBQ3pDLHFDQUFxQztJQUNyQyx1RUFBdUU7SUFDdkUsVUFBVTtJQUVWLE1BQU1nQixtQkFBbUIsQ0FBQ0M7UUFDeEJGLGVBQWU7WUFDYixHQUFHRSxLQUFLO1lBQ1JDLE9BQU9oQixhQUFhLENBQUNlLE1BQU1FLE9BQU8sQ0FBQ2hCLEtBQUssQ0FBQyxJQUFJLEVBQUU7UUFDakQ7UUFDQVUsYUFBYSxPQUFPLGlCQUFpQjtJQUN2QztJQUVBLE1BQU1PLG1CQUFtQjtRQUN2QlAsYUFBYTtRQUNiRSxlQUFlLE9BQU8seUJBQXlCO0lBQ2pEO0lBRUEscUJBQ0U7OzBCQUNFLDhEQUFDTTtnQkFBSUMsV0FBVTswQkFDWlosT0FBT2EsR0FBRyxDQUFDLENBQUNOLHNCQUNYLDhEQUFDSTt3QkFBMkJDLFdBQVU7d0JBQWtCRSxTQUFTLElBQU1SLGlCQUFpQkM7OzBDQUN0Riw4REFBQ0k7Z0NBQ0NDLFdBQVU7Z0NBQ1ZHLE9BQU87b0NBQUVDLGlCQUFpQjtnQ0FBdUI7Ozs7OzswQ0FFbkQsOERBQUNDO2dDQUFHTCxXQUFVOzBDQUNYTCxNQUFNRSxPQUFPLENBQUNoQixLQUFLOzs7Ozs7O3VCQU5kYyxNQUFNVixFQUFFLENBQUNxQixPQUFPOzs7Ozs7Ozs7O1lBVzdCZCw2QkFDQyw4REFBQ2IsNkRBQVNBO2dCQUNSNEIsUUFBUWpCO2dCQUNSa0IsU0FBU1Y7Z0JBQ1RILE9BQU9IOzs7Ozs7OztBQUtqQjtHQWpEd0JMO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvWW91dHViZVZpZGVvTGlzdC5qcz9lOTQ1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IExpbmtNb2RhbCBmcm9tICcuLi9jb21wb25lbnRzL0xpbmtNb2RhbCc7XG5cbmNvbnN0IHZpZGVvTGlua3NNYXAgPSB7XG4gICdDb3B5IENvcHknOiBbXG4gICAgeyB0aXRsZTogJ1Nwb3RpZnknLCB1cmw6ICdodHRwczovL29wZW4uc3BvdGlmeS5jb20vdHJhY2svNnN2aDN1ODhxaWx2WkF4STJEMXRQeScsIGltYWdlOiAnL2ltYWdlcy9zcG90aWZ5LnBuZycgfSxcbiAgICB7IHRpdGxlOiAnU291bmRjbG91ZCcsIHVybDogJ2h0dHBzOi8vc291bmRjbG91ZC5jb20vdGVhemUtYmFuZC9jb3B5LWNvcHknLCBpbWFnZTogJy9pbWFnZXMvc291bmRjbG91ZC5wbmcnfSxcbiAgICB7IHRpdGxlOiAnWW91dHViZScsIHVybDogJ2h0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9WU03RE5RNG95ZmsnLCBpbWFnZTogJy9pbWFnZXMveW91dHViZS5wbmcnIH0sXG4gICAgeyB0aXRsZTogJ1Nwb3RpZnknLCB1cmw6ICdodHRwczovL3RlYXplLmJhbmRjYW1wLmNvbS90cmFjay9jb3B5LWNvcHknLCBpbWFnZTogJy9pbWFnZXMvYmFuZGNhbXAucG5nJyB9LFxuICAgIHsgdGl0bGU6ICdTcG90aWZ5JywgdXJsOiAnaHR0cHM6Ly93d3cucGFuZG9yYS5jb20vYXJ0aXN0L3RlYXplL2NvcHktY29weS9jb3B5LWNvcHkvVFJ4OXRkN3paWGJwYlhQJywgaW1hZ2U6ICcvaW1hZ2VzL3BhbmRvcmEucG5nJyB9LFxuICAgIHsgdGl0bGU6ICdTcG90aWZ5JywgdXJsOiAnaHR0cHM6Ly9vcGVuLnNwb3RpZnkuY29tL3RyYWNrLzZzdmgzdTg4cWlsdlpBeEkyRDF0UHknLCBpbWFnZTogJy9pbWFnZXMvc3BvdGlmeS5wbmcnIH1cbiAgICAvLyAuLi4gb3RoZXIgbGlua3NcbiAgXSxcbiAgJ05ldyBMZWFmJzogW1xuICAgIHsgdGl0bGU6ICdTb3VuZGNsb3VkJywgdXJsOiAnaHR0cHM6Ly9zb3VuZGNsb3VkLmNvbS90ZWF6ZS1iYW5kL2NvcHktY29weScsIGltYWdlOiAnL2ltYWdlcy9zb3VuZGNsb3VkLnBuZyd9LFxuICAgIHsgdGl0bGU6ICdTcG90aWZ5JywgdXJsOiAnaHR0cHM6Ly9vcGVuLnNwb3RpZnkuY29tL3RyYWNrLzZzdmgzdTg4cWlsdlpBeEkyRDF0UHknLCBpbWFnZTogJy9pbWFnZXMvc3BvdGlmeS5wbmcnfVxuICBdLFxuICAvLyAuLi4gbW9yZSBtYXBwaW5nc1xufTtcblxuY29uc3QgYWxidW1zID0gW1xuICB7IGlkOiAxLCB0aXRsZTogJ0FsYnVtIDEnLCBpbWFnZVVybDogJy9wYXRoL3RvL2ltYWdlMS5qcGcnIH0sXG4gIHsgaWQ6IDIsIHRpdGxlOiAnQWxidW0gMicsIGltYWdlVXJsOiAnL3BhdGgvdG8vaW1hZ2UyLmpwZycgfSxcbiAgLy8gLi4uIG90aGVyIGFsYnVtc1xuXTtcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBZb3VUdWJlVmlkZW9MaXN0KCkge1xuICBjb25zdCBbdmlkZW9zLCBzZXRWaWRlb3NdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbaXNNb2RhbE9wZW4sIHNldE1vZGFsT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFthY3RpdmVWaWRlbywgc2V0QWN0aXZlVmlkZW9dID0gdXNlU3RhdGUobnVsbCk7IC8vIFN0YXRlIHRvIGhvbGQgdGhlIGN1cnJlbnRseSBhY3RpdmUgdmlkZW9cblxuICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xuICAvLyAgIGZldGNoKCcvYXBpL3lvdXR1YmUnKVxuICAvLyAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAvLyAgICAgLnRoZW4oZGF0YSA9PiBzZXRWaWRlb3MoZGF0YSkpXG4gIC8vICAgICAuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgdmlkZW9zOicsIGVycm9yKSk7XG4gIC8vIH0sIFtdKTtcblxuICBjb25zdCBoYW5kbGVWaWRlb0NsaWNrID0gKHZpZGVvKSA9PiB7XG4gICAgc2V0QWN0aXZlVmlkZW8oe1xuICAgICAgLi4udmlkZW8sXG4gICAgICBsaW5rczogdmlkZW9MaW5rc01hcFt2aWRlby5zbmlwcGV0LnRpdGxlXSB8fCBbXSBcbiAgICB9KTtcbiAgICBzZXRNb2RhbE9wZW4odHJ1ZSk7IC8vIE9wZW4gdGhlIG1vZGFsXG4gIH07XG5cbiAgY29uc3QgaGFuZGxlQ2xvc2VNb2RhbCA9ICgpID0+IHtcbiAgICBzZXRNb2RhbE9wZW4oZmFsc2UpO1xuICAgIHNldEFjdGl2ZVZpZGVvKG51bGwpOyAvLyBDbGVhciB0aGUgYWN0aXZlIHZpZGVvXG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2aWRlby1saXN0LWNvbnRhaW5lciBwdC0xMFwiPlxuICAgICAgICB7dmlkZW9zLm1hcCgodmlkZW8pID0+IChcbiAgICAgICAgICA8ZGl2IGtleT17dmlkZW8uaWQudmlkZW9JZH0gY2xhc3NOYW1lPVwidmlkZW8tY29udGFpbmVyXCIgb25DbGljaz17KCkgPT4gaGFuZGxlVmlkZW9DbGljayh2aWRlbyl9PlxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbWFnZS1jcm9wLWNvbnRhaW5lciBjdXJzb3ItcG9pbnRlclwiXG4gICAgICAgICAgICAgIHN0eWxlPXt7IGJhY2tncm91bmRJbWFnZTogJy9pbWFnZXMvY29weWNvcHkuanBnJyB9fVxuICAgICAgICAgICAgPjwvZGl2PlxuICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInZpZGVvLXRpdGxlIHRleHQteGwgZm9udC1ib2xkIHRleHQtd2hpdGUgcC00XCI+XG4gICAgICAgICAgICAgIHt2aWRlby5zbmlwcGV0LnRpdGxlfVxuICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSl9XG4gICAgICA8L2Rpdj5cbiAgICAgIHthY3RpdmVWaWRlbyAmJiAoIC8vIE9ubHkgcmVuZGVyIHRoZSBMaW5rTW9kYWwgaWYgdGhlcmUgaXMgYW4gYWN0aXZlIHZpZGVvXG4gICAgICAgIDxMaW5rTW9kYWwgXG4gICAgICAgICAgaXNPcGVuPXtpc01vZGFsT3Blbn0gXG4gICAgICAgICAgb25DbG9zZT17aGFuZGxlQ2xvc2VNb2RhbH0gXG4gICAgICAgICAgdmlkZW89e2FjdGl2ZVZpZGVvfSAvLyBQYXNzIHRoZSBhY3RpdmUgdmlkZW8gdG8gdGhlIG1vZGFsXG4gICAgICAgIC8+XG4gICAgICApfVxuICAgIDwvPlxuICApO1xufSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiTGlua01vZGFsIiwidmlkZW9MaW5rc01hcCIsInRpdGxlIiwidXJsIiwiaW1hZ2UiLCJhbGJ1bXMiLCJpZCIsImltYWdlVXJsIiwiWW91VHViZVZpZGVvTGlzdCIsInZpZGVvcyIsInNldFZpZGVvcyIsImlzTW9kYWxPcGVuIiwic2V0TW9kYWxPcGVuIiwiYWN0aXZlVmlkZW8iLCJzZXRBY3RpdmVWaWRlbyIsImhhbmRsZVZpZGVvQ2xpY2siLCJ2aWRlbyIsImxpbmtzIiwic25pcHBldCIsImhhbmRsZUNsb3NlTW9kYWwiLCJkaXYiLCJjbGFzc05hbWUiLCJtYXAiLCJvbkNsaWNrIiwic3R5bGUiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJoMyIsInZpZGVvSWQiLCJpc09wZW4iLCJvbkNsb3NlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/YoutubeVideoList.js\n"));

/***/ })

});