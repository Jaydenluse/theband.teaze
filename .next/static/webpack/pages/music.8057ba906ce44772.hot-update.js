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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_LinkModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/LinkModal */ \"./components/LinkModal.js\");\n\nvar _s = $RefreshSig$();\n\n\nconst videoLinksMap = {\n    \"Copy Copy\": [\n        {\n            title: \"Spotify\",\n            url: \"https://open.spotify.com/track/6svh3u88qilvZAxI2D1tPy\",\n            image: \"/images/spotify.png\"\n        },\n        {\n            title: \"Soundcloud\",\n            url: \"https://soundcloud.com/teaze-band/copy-copy\",\n            image: \"/images/soundcloud.png\"\n        },\n        {\n            title: \"Youtube\",\n            url: \"https://www.youtube.com/watch?v=YM7DNQ4oyfk\",\n            image: \"/images/youtube.png\"\n        },\n        {\n            title: \"Bandcamp\",\n            url: \"https://teaze.bandcamp.com/track/copy-copy\",\n            image: \"/images/bandcamp.png\"\n        },\n        {\n            title: \"Pandora\",\n            url: \"https://www.pandora.com/artist/teaze/copy-copy/copy-copy/TRx9td7zZXbpbXP\",\n            image: \"/images/pandora.png\"\n        },\n        {\n            title: \"Apple\",\n            url: \"https://music.apple.com/us/album/copy-copy/1725708961?i=1725708962\",\n            image: \"/images/apple.png\"\n        }\n    ],\n    \"New Leaf\": [\n        {\n            title: \"Spotify\",\n            url: \"https://open.spotify.com/track/6JS5Hs8QDJ5DIstkjs2bEN\",\n            image: \"/images/spotify.png\"\n        },\n        {\n            title: \"Soundcloud\",\n            url: \"https://soundcloud.com/teaze-band/new-leaf\",\n            image: \"/images/soundcloud.png\"\n        },\n        {\n            title: \"Youtube\",\n            url: \"https://www.youtube.com/watch?v=kDo-SQhQFkI\",\n            image: \"/images/youtube.png\"\n        },\n        {\n            title: \"Bandcamp\",\n            url: \"https://teaze.bandcamp.com/track/new-leaf\",\n            image: \"/images/bandcamp.png\"\n        },\n        {\n            title: \"Pandora\",\n            url: \"https://www.pandora.com/artist/teaze/new-leaf/new-leaf/TRcKt66zKrKgqj4\",\n            image: \"/images/pandora.png\"\n        },\n        {\n            title: \"Apple\",\n            url: \"https://music.apple.com/us/album/copy-copy/1725708961?i=1725708962\",\n            image: \"/images/apple.png\"\n        }\n    ]\n};\nconst albums = [\n    {\n        id: 1,\n        title: \"New Leaf\",\n        imageUrl: \"/images/newleaf.jpg\"\n    },\n    {\n        id: 2,\n        title: \"Copy Copy\",\n        imageUrl: \"/images/copycopy.jpg\"\n    }\n];\nconst AlbumComponent = ()=>{\n    _s();\n    const [isModalOpen, setModalOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [activeAlbum, setActiveAlbum] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const handleAlbumClick = (album)=>{\n        const albumWithLinks = {\n            ...album,\n            links: videoLinksMap[album.title] || [] // Fetch links from the map\n        };\n        setActiveAlbum(albumWithLinks);\n        setModalOpen(true); // Open the modal\n    };\n    const handleCloseModal = ()=>{\n        setModalOpen(false);\n        setActiveAlbum(null); // Clear the active album\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"album-list-container pt-10 flex flex-wrap justify-center\",\n                children: albums.map((album)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"album-container pt-8 mx-4\",\n                        onClick: ()=>handleAlbumClick(album),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"image-crop-container cursor-pointer\",\n                                style: {\n                                    backgroundImage: \"url(\".concat(album.imageUrl, \")\")\n                                }\n                            }, void 0, false, {\n                                fileName: \"/Users/KKYAXYU/theband.teaze/components/YoutubeVideoList.js\",\n                                lineNumber: 55,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                className: \"album-title text-xl font-bold text-white p-3 text-center\",\n                                children: album.title\n                            }, void 0, false, {\n                                fileName: \"/Users/KKYAXYU/theband.teaze/components/YoutubeVideoList.js\",\n                                lineNumber: 59,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, album.id, true, {\n                        fileName: \"/Users/KKYAXYU/theband.teaze/components/YoutubeVideoList.js\",\n                        lineNumber: 54,\n                        columnNumber: 11\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"/Users/KKYAXYU/theband.teaze/components/YoutubeVideoList.js\",\n                lineNumber: 52,\n                columnNumber: 7\n            }, undefined),\n            activeAlbum && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_LinkModal__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                isOpen: isModalOpen,\n                onClose: handleCloseModal,\n                album: activeAlbum\n            }, void 0, false, {\n                fileName: \"/Users/KKYAXYU/theband.teaze/components/YoutubeVideoList.js\",\n                lineNumber: 66,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(AlbumComponent, \"hkYKocSue5x28iONR8/54Eiqvm8=\");\n_c = AlbumComponent;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AlbumComponent);\nvar _c;\n$RefreshReg$(_c, \"AlbumComponent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1lvdXR1YmVWaWRlb0xpc3QuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBbUQ7QUFDSDtBQUVoRCxNQUFNSSxnQkFBZ0I7SUFDcEIsYUFBYTtRQUNYO1lBQUVDLE9BQU87WUFBV0MsS0FBSztZQUF5REMsT0FBTztRQUFzQjtRQUMvRztZQUFFRixPQUFPO1lBQWNDLEtBQUs7WUFBK0NDLE9BQU87UUFBd0I7UUFDMUc7WUFBRUYsT0FBTztZQUFXQyxLQUFLO1lBQStDQyxPQUFPO1FBQXNCO1FBQ3JHO1lBQUVGLE9BQU87WUFBWUMsS0FBSztZQUE4Q0MsT0FBTztRQUF1QjtRQUN0RztZQUFFRixPQUFPO1lBQVdDLEtBQUs7WUFBNEVDLE9BQU87UUFBc0I7UUFDbEk7WUFBRUYsT0FBTztZQUFTQyxLQUFLO1lBQXNFQyxPQUFPO1FBQW9CO0tBRXpIO0lBQ0QsWUFBWTtRQUNWO1lBQUVGLE9BQU87WUFBV0MsS0FBSztZQUF5REMsT0FBTztRQUFzQjtRQUMvRztZQUFFRixPQUFPO1lBQWNDLEtBQUs7WUFBOENDLE9BQU87UUFBd0I7UUFDekc7WUFBRUYsT0FBTztZQUFXQyxLQUFLO1lBQStDQyxPQUFPO1FBQXNCO1FBQ3JHO1lBQUVGLE9BQU87WUFBWUMsS0FBSztZQUE2Q0MsT0FBTztRQUF1QjtRQUNyRztZQUFFRixPQUFPO1lBQVdDLEtBQUs7WUFBMEVDLE9BQU87UUFBc0I7UUFDaEk7WUFBRUYsT0FBTztZQUFTQyxLQUFLO1lBQXNFQyxPQUFPO1FBQW9CO0tBQ3pIO0FBRUg7QUFFQSxNQUFNQyxTQUFTO0lBQ2I7UUFBRUMsSUFBSTtRQUFHSixPQUFPO1FBQVlLLFVBQVU7SUFBc0I7SUFDNUQ7UUFBRUQsSUFBSTtRQUFHSixPQUFPO1FBQWFLLFVBQVU7SUFBdUI7Q0FFL0Q7QUFHRCxNQUFNQyxpQkFBaUI7O0lBQ3JCLE1BQU0sQ0FBQ0MsYUFBYUMsYUFBYSxHQUFHWCwrQ0FBUUEsQ0FBQztJQUM3QyxNQUFNLENBQUNZLGFBQWFDLGVBQWUsR0FBR2IsK0NBQVFBLENBQUM7SUFFL0MsTUFBTWMsbUJBQW1CLENBQUNDO1FBQ3hCLE1BQU1DLGlCQUFpQjtZQUNyQixHQUFHRCxLQUFLO1lBQ1JFLE9BQU9mLGFBQWEsQ0FBQ2EsTUFBTVosS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLDJCQUEyQjtRQUNyRTtRQUNBVSxlQUFlRztRQUNmTCxhQUFhLE9BQU8saUJBQWlCO0lBQ3ZDO0lBRUEsTUFBTU8sbUJBQW1CO1FBQ3ZCUCxhQUFhO1FBQ2JFLGVBQWUsT0FBTyx5QkFBeUI7SUFDakQ7SUFFQSxxQkFDRTs7MEJBQ0UsOERBQUNNO2dCQUFJQyxXQUFVOzBCQUNaZCxPQUFPZSxHQUFHLENBQUMsQ0FBQ04sc0JBQ1gsOERBQUNJO3dCQUFtQkMsV0FBVTt3QkFBNEJFLFNBQVMsSUFBTVIsaUJBQWlCQzs7MENBQ3hGLDhEQUFDSTtnQ0FDQ0MsV0FBVTtnQ0FDVkcsT0FBTztvQ0FBRUMsaUJBQWlCLE9BQXNCLE9BQWZULE1BQU1QLFFBQVEsRUFBQztnQ0FBRzs7Ozs7OzBDQUVyRCw4REFBQ2lCO2dDQUFHTCxXQUFVOzBDQUNYTCxNQUFNWixLQUFLOzs7Ozs7O3VCQU5OWSxNQUFNUixFQUFFOzs7Ozs7Ozs7O1lBV3JCSyw2QkFDQyw4REFBQ1gsNkRBQVNBO2dCQUNSeUIsUUFBUWhCO2dCQUNSaUIsU0FBU1Q7Z0JBQ1RILE9BQU9IOzs7Ozs7OztBQUtqQjtHQTFDTUg7S0FBQUE7QUE0Q04sK0RBQWVBLGNBQWNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Zb3V0dWJlVmlkZW9MaXN0LmpzP2U5NDUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGlua01vZGFsIGZyb20gJy4uL2NvbXBvbmVudHMvTGlua01vZGFsJztcblxuY29uc3QgdmlkZW9MaW5rc01hcCA9IHtcbiAgJ0NvcHkgQ29weSc6IFtcbiAgICB7IHRpdGxlOiAnU3BvdGlmeScsIHVybDogJ2h0dHBzOi8vb3Blbi5zcG90aWZ5LmNvbS90cmFjay82c3ZoM3U4OHFpbHZaQXhJMkQxdFB5JywgaW1hZ2U6ICcvaW1hZ2VzL3Nwb3RpZnkucG5nJyB9LFxuICAgIHsgdGl0bGU6ICdTb3VuZGNsb3VkJywgdXJsOiAnaHR0cHM6Ly9zb3VuZGNsb3VkLmNvbS90ZWF6ZS1iYW5kL2NvcHktY29weScsIGltYWdlOiAnL2ltYWdlcy9zb3VuZGNsb3VkLnBuZyd9LFxuICAgIHsgdGl0bGU6ICdZb3V0dWJlJywgdXJsOiAnaHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/dj1ZTTdETlE0b3lmaycsIGltYWdlOiAnL2ltYWdlcy95b3V0dWJlLnBuZycgfSxcbiAgICB7IHRpdGxlOiAnQmFuZGNhbXAnLCB1cmw6ICdodHRwczovL3RlYXplLmJhbmRjYW1wLmNvbS90cmFjay9jb3B5LWNvcHknLCBpbWFnZTogJy9pbWFnZXMvYmFuZGNhbXAucG5nJyB9LFxuICAgIHsgdGl0bGU6ICdQYW5kb3JhJywgdXJsOiAnaHR0cHM6Ly93d3cucGFuZG9yYS5jb20vYXJ0aXN0L3RlYXplL2NvcHktY29weS9jb3B5LWNvcHkvVFJ4OXRkN3paWGJwYlhQJywgaW1hZ2U6ICcvaW1hZ2VzL3BhbmRvcmEucG5nJyB9LFxuICAgIHsgdGl0bGU6ICdBcHBsZScsIHVybDogJ2h0dHBzOi8vbXVzaWMuYXBwbGUuY29tL3VzL2FsYnVtL2NvcHktY29weS8xNzI1NzA4OTYxP2k9MTcyNTcwODk2MicsIGltYWdlOiAnL2ltYWdlcy9hcHBsZS5wbmcnIH1cbiAgICAvLyAuLi4gb3RoZXIgbGlua3NcbiAgXSxcbiAgJ05ldyBMZWFmJzogW1xuICAgIHsgdGl0bGU6ICdTcG90aWZ5JywgdXJsOiAnaHR0cHM6Ly9vcGVuLnNwb3RpZnkuY29tL3RyYWNrLzZKUzVIczhRREo1RElzdGtqczJiRU4nLCBpbWFnZTogJy9pbWFnZXMvc3BvdGlmeS5wbmcnIH0sXG4gICAgeyB0aXRsZTogJ1NvdW5kY2xvdWQnLCB1cmw6ICdodHRwczovL3NvdW5kY2xvdWQuY29tL3RlYXplLWJhbmQvbmV3LWxlYWYnLCBpbWFnZTogJy9pbWFnZXMvc291bmRjbG91ZC5wbmcnfSxcbiAgICB7IHRpdGxlOiAnWW91dHViZScsIHVybDogJ2h0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9a0RvLVNRaFFGa0knLCBpbWFnZTogJy9pbWFnZXMveW91dHViZS5wbmcnIH0sXG4gICAgeyB0aXRsZTogJ0JhbmRjYW1wJywgdXJsOiAnaHR0cHM6Ly90ZWF6ZS5iYW5kY2FtcC5jb20vdHJhY2svbmV3LWxlYWYnLCBpbWFnZTogJy9pbWFnZXMvYmFuZGNhbXAucG5nJyB9LFxuICAgIHsgdGl0bGU6ICdQYW5kb3JhJywgdXJsOiAnaHR0cHM6Ly93d3cucGFuZG9yYS5jb20vYXJ0aXN0L3RlYXplL25ldy1sZWFmL25ldy1sZWFmL1RSY0t0NjZ6S3JLZ3FqNCcsIGltYWdlOiAnL2ltYWdlcy9wYW5kb3JhLnBuZycgfSxcbiAgICB7IHRpdGxlOiAnQXBwbGUnLCB1cmw6ICdodHRwczovL211c2ljLmFwcGxlLmNvbS91cy9hbGJ1bS9jb3B5LWNvcHkvMTcyNTcwODk2MT9pPTE3MjU3MDg5NjInLCBpbWFnZTogJy9pbWFnZXMvYXBwbGUucG5nJyB9XG4gIF0sXG4gIC8vIC4uLiBtb3JlIG1hcHBpbmdzXG59O1xuXG5jb25zdCBhbGJ1bXMgPSBbXG4gIHsgaWQ6IDEsIHRpdGxlOiAnTmV3IExlYWYnLCBpbWFnZVVybDogJy9pbWFnZXMvbmV3bGVhZi5qcGcnIH0sXG4gIHsgaWQ6IDIsIHRpdGxlOiAnQ29weSBDb3B5JywgaW1hZ2VVcmw6ICcvaW1hZ2VzL2NvcHljb3B5LmpwZycgfSxcbiAgLy8gLi4uIG90aGVyIGFsYnVtc1xuXTtcblxuXG5jb25zdCBBbGJ1bUNvbXBvbmVudCA9ICgpID0+IHtcbiAgY29uc3QgW2lzTW9kYWxPcGVuLCBzZXRNb2RhbE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbYWN0aXZlQWxidW0sIHNldEFjdGl2ZUFsYnVtXSA9IHVzZVN0YXRlKG51bGwpO1xuXG4gIGNvbnN0IGhhbmRsZUFsYnVtQ2xpY2sgPSAoYWxidW0pID0+IHtcbiAgICBjb25zdCBhbGJ1bVdpdGhMaW5rcyA9IHtcbiAgICAgIC4uLmFsYnVtLFxuICAgICAgbGlua3M6IHZpZGVvTGlua3NNYXBbYWxidW0udGl0bGVdIHx8IFtdIC8vIEZldGNoIGxpbmtzIGZyb20gdGhlIG1hcFxuICAgIH07XG4gICAgc2V0QWN0aXZlQWxidW0oYWxidW1XaXRoTGlua3MpO1xuICAgIHNldE1vZGFsT3Blbih0cnVlKTsgLy8gT3BlbiB0aGUgbW9kYWxcbiAgfTtcblxuICBjb25zdCBoYW5kbGVDbG9zZU1vZGFsID0gKCkgPT4ge1xuICAgIHNldE1vZGFsT3BlbihmYWxzZSk7XG4gICAgc2V0QWN0aXZlQWxidW0obnVsbCk7IC8vIENsZWFyIHRoZSBhY3RpdmUgYWxidW1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImFsYnVtLWxpc3QtY29udGFpbmVyIHB0LTEwIGZsZXggZmxleC13cmFwIGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgIHthbGJ1bXMubWFwKChhbGJ1bSkgPT4gKFxuICAgICAgICAgIDxkaXYga2V5PXthbGJ1bS5pZH0gY2xhc3NOYW1lPVwiYWxidW0tY29udGFpbmVyIHB0LTggbXgtNFwiIG9uQ2xpY2s9eygpID0+IGhhbmRsZUFsYnVtQ2xpY2soYWxidW0pfT5cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW1hZ2UtY3JvcC1jb250YWluZXIgY3Vyc29yLXBvaW50ZXJcIlxuICAgICAgICAgICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHthbGJ1bS5pbWFnZVVybH0pYCB9fVxuICAgICAgICAgICAgPjwvZGl2PlxuICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImFsYnVtLXRpdGxlIHRleHQteGwgZm9udC1ib2xkIHRleHQtd2hpdGUgcC0zIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgIHthbGJ1bS50aXRsZX1cbiAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICkpfVxuICAgICAgPC9kaXY+XG4gICAgICB7YWN0aXZlQWxidW0gJiYgKFxuICAgICAgICA8TGlua01vZGFsIFxuICAgICAgICAgIGlzT3Blbj17aXNNb2RhbE9wZW59IFxuICAgICAgICAgIG9uQ2xvc2U9e2hhbmRsZUNsb3NlTW9kYWx9IFxuICAgICAgICAgIGFsYnVtPXthY3RpdmVBbGJ1bX1cbiAgICAgICAgLz5cbiAgICAgICl9XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBbGJ1bUNvbXBvbmVudDsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkxpbmtNb2RhbCIsInZpZGVvTGlua3NNYXAiLCJ0aXRsZSIsInVybCIsImltYWdlIiwiYWxidW1zIiwiaWQiLCJpbWFnZVVybCIsIkFsYnVtQ29tcG9uZW50IiwiaXNNb2RhbE9wZW4iLCJzZXRNb2RhbE9wZW4iLCJhY3RpdmVBbGJ1bSIsInNldEFjdGl2ZUFsYnVtIiwiaGFuZGxlQWxidW1DbGljayIsImFsYnVtIiwiYWxidW1XaXRoTGlua3MiLCJsaW5rcyIsImhhbmRsZUNsb3NlTW9kYWwiLCJkaXYiLCJjbGFzc05hbWUiLCJtYXAiLCJvbkNsaWNrIiwic3R5bGUiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJoMyIsImlzT3BlbiIsIm9uQ2xvc2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/YoutubeVideoList.js\n"));

/***/ })

});