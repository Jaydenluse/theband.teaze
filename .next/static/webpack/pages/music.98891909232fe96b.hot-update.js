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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_LinkModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/LinkModal */ \"./components/LinkModal.js\");\n\nvar _s = $RefreshSig$();\n\n\nconst videoLinksMap = {\n    \"Copy Copy\": [\n        {\n            title: \"Spotify\",\n            url: \"https://open.spotify.com/track/6svh3u88qilvZAxI2D1tPy\",\n            image: \"/images/spotify.png\"\n        },\n        {\n            title: \"Soundcloud\",\n            url: \"https://soundcloud.com/teaze-band/copy-copy\",\n            image: \"/images/soundcloud.png\"\n        },\n        {\n            title: \"Youtube\",\n            url: \"https://www.youtube.com/watch?v=YM7DNQ4oyfk\",\n            image: \"/images/youtube.png\"\n        },\n        {\n            title: \"Bandcamp\",\n            url: \"https://teaze.bandcamp.com/track/copy-copy\",\n            image: \"/images/bandcamp.png\"\n        },\n        {\n            title: \"Pandora\",\n            url: \"https://www.pandora.com/artist/teaze/copy-copy/copy-copy/TRx9td7zZXbpbXP\",\n            image: \"/images/pandora.png\"\n        },\n        {\n            title: \"Apple\",\n            url: \"https://music.apple.com/us/album/copy-copy/1725708961?i=1725708962\",\n            image: \"/images/apple.png\"\n        }\n    ],\n    \"New Leaf\": [\n        {\n            title: \"Spotify\",\n            url: \"https://open.spotify.com/track/6svh3u88qilvZAxI2D1tPy\",\n            image: \"/images/spotify.png\"\n        },\n        {\n            title: \"Soundcloud\",\n            url: \"https://soundcloud.com/teaze-band/copy-copy\",\n            image: \"/images/soundcloud.png\"\n        },\n        {\n            title: \"Youtube\",\n            url: \"https://www.youtube.com/watch?v=YM7DNQ4oyfk\",\n            image: \"/images/youtube.png\"\n        },\n        {\n            title: \"Bandcamp\",\n            url: \"https://teaze.bandcamp.com/track/copy-copy\",\n            image: \"/images/bandcamp.png\"\n        },\n        {\n            title: \"Pandora\",\n            url: \"https://www.pandora.com/artist/teaze/copy-copy/copy-copy/TRx9td7zZXbpbXP\",\n            image: \"/images/pandora.png\"\n        },\n        {\n            title: \"Apple\",\n            url: \"https://music.apple.com/us/album/copy-copy/1725708961?i=1725708962\",\n            image: \"/images/apple.png\"\n        }\n    ]\n};\nconst albums = [\n    {\n        id: 1,\n        title: \"New Leaf\",\n        imageUrl: \"/images/newleaf.jpg\"\n    },\n    {\n        id: 2,\n        title: \"Copy Copy\",\n        imageUrl: \"/images/copycopy.jpg\"\n    }\n];\nconst AlbumComponent = ()=>{\n    _s();\n    const [isModalOpen, setModalOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [activeAlbum, setActiveAlbum] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const handleAlbumClick = (album)=>{\n        const albumWithLinks = {\n            ...album,\n            links: videoLinksMap[album.title] || [] // Fetch links from the map\n        };\n        setActiveAlbum(albumWithLinks);\n        setModalOpen(true); // Open the modal\n    };\n    const handleCloseModal = ()=>{\n        setModalOpen(false);\n        setActiveAlbum(null); // Clear the active album\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"album-list-container pt-10 flex flex-wrap justify-center\",\n                children: albums.map((album)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"album-container pt-8 mx-4\",\n                        onClick: ()=>handleAlbumClick(album),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"image-crop-container cursor-pointer\",\n                                style: {\n                                    backgroundImage: \"url(\".concat(album.imageUrl, \")\")\n                                }\n                            }, void 0, false, {\n                                fileName: \"/Users/KKYAXYU/theband.teaze/components/YoutubeVideoList.js\",\n                                lineNumber: 55,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                className: \"album-title text-xl font-bold text-white p-3 text-center\",\n                                children: album.title\n                            }, void 0, false, {\n                                fileName: \"/Users/KKYAXYU/theband.teaze/components/YoutubeVideoList.js\",\n                                lineNumber: 59,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, album.id, true, {\n                        fileName: \"/Users/KKYAXYU/theband.teaze/components/YoutubeVideoList.js\",\n                        lineNumber: 54,\n                        columnNumber: 11\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"/Users/KKYAXYU/theband.teaze/components/YoutubeVideoList.js\",\n                lineNumber: 52,\n                columnNumber: 7\n            }, undefined),\n            activeAlbum && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_LinkModal__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                isOpen: isModalOpen,\n                onClose: handleCloseModal,\n                album: activeAlbum\n            }, void 0, false, {\n                fileName: \"/Users/KKYAXYU/theband.teaze/components/YoutubeVideoList.js\",\n                lineNumber: 66,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(AlbumComponent, \"hkYKocSue5x28iONR8/54Eiqvm8=\");\n_c = AlbumComponent;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AlbumComponent);\nvar _c;\n$RefreshReg$(_c, \"AlbumComponent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1lvdXR1YmVWaWRlb0xpc3QuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBbUQ7QUFDSDtBQUVoRCxNQUFNSSxnQkFBZ0I7SUFDcEIsYUFBYTtRQUNYO1lBQUVDLE9BQU87WUFBV0MsS0FBSztZQUF5REMsT0FBTztRQUFzQjtRQUMvRztZQUFFRixPQUFPO1lBQWNDLEtBQUs7WUFBK0NDLE9BQU87UUFBd0I7UUFDMUc7WUFBRUYsT0FBTztZQUFXQyxLQUFLO1lBQStDQyxPQUFPO1FBQXNCO1FBQ3JHO1lBQUVGLE9BQU87WUFBWUMsS0FBSztZQUE4Q0MsT0FBTztRQUF1QjtRQUN0RztZQUFFRixPQUFPO1lBQVdDLEtBQUs7WUFBNEVDLE9BQU87UUFBc0I7UUFDbEk7WUFBRUYsT0FBTztZQUFTQyxLQUFLO1lBQXNFQyxPQUFPO1FBQW9CO0tBRXpIO0lBQ0QsWUFBWTtRQUNWO1lBQUVGLE9BQU87WUFBV0MsS0FBSztZQUF5REMsT0FBTztRQUFzQjtRQUMvRztZQUFFRixPQUFPO1lBQWNDLEtBQUs7WUFBK0NDLE9BQU87UUFBd0I7UUFDMUc7WUFBRUYsT0FBTztZQUFXQyxLQUFLO1lBQStDQyxPQUFPO1FBQXNCO1FBQ3JHO1lBQUVGLE9BQU87WUFBWUMsS0FBSztZQUE4Q0MsT0FBTztRQUF1QjtRQUN0RztZQUFFRixPQUFPO1lBQVdDLEtBQUs7WUFBNEVDLE9BQU87UUFBc0I7UUFDbEk7WUFBRUYsT0FBTztZQUFTQyxLQUFLO1lBQXNFQyxPQUFPO1FBQW9CO0tBQ3pIO0FBRUg7QUFFQSxNQUFNQyxTQUFTO0lBQ2I7UUFBRUMsSUFBSTtRQUFHSixPQUFPO1FBQVlLLFVBQVU7SUFBc0I7SUFDNUQ7UUFBRUQsSUFBSTtRQUFHSixPQUFPO1FBQWFLLFVBQVU7SUFBdUI7Q0FFL0Q7QUFHRCxNQUFNQyxpQkFBaUI7O0lBQ3JCLE1BQU0sQ0FBQ0MsYUFBYUMsYUFBYSxHQUFHWCwrQ0FBUUEsQ0FBQztJQUM3QyxNQUFNLENBQUNZLGFBQWFDLGVBQWUsR0FBR2IsK0NBQVFBLENBQUM7SUFFL0MsTUFBTWMsbUJBQW1CLENBQUNDO1FBQ3hCLE1BQU1DLGlCQUFpQjtZQUNyQixHQUFHRCxLQUFLO1lBQ1JFLE9BQU9mLGFBQWEsQ0FBQ2EsTUFBTVosS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLDJCQUEyQjtRQUNyRTtRQUNBVSxlQUFlRztRQUNmTCxhQUFhLE9BQU8saUJBQWlCO0lBQ3ZDO0lBRUEsTUFBTU8sbUJBQW1CO1FBQ3ZCUCxhQUFhO1FBQ2JFLGVBQWUsT0FBTyx5QkFBeUI7SUFDakQ7SUFFQSxxQkFDRTs7MEJBQ0UsOERBQUNNO2dCQUFJQyxXQUFVOzBCQUNaZCxPQUFPZSxHQUFHLENBQUMsQ0FBQ04sc0JBQ1gsOERBQUNJO3dCQUFtQkMsV0FBVTt3QkFBNEJFLFNBQVMsSUFBTVIsaUJBQWlCQzs7MENBQ3hGLDhEQUFDSTtnQ0FDQ0MsV0FBVTtnQ0FDVkcsT0FBTztvQ0FBRUMsaUJBQWlCLE9BQXNCLE9BQWZULE1BQU1QLFFBQVEsRUFBQztnQ0FBRzs7Ozs7OzBDQUVyRCw4REFBQ2lCO2dDQUFHTCxXQUFVOzBDQUNYTCxNQUFNWixLQUFLOzs7Ozs7O3VCQU5OWSxNQUFNUixFQUFFOzs7Ozs7Ozs7O1lBV3JCSyw2QkFDQyw4REFBQ1gsNkRBQVNBO2dCQUNSeUIsUUFBUWhCO2dCQUNSaUIsU0FBU1Q7Z0JBQ1RILE9BQU9IOzs7Ozs7OztBQUtqQjtHQTFDTUg7S0FBQUE7QUE0Q04sK0RBQWVBLGNBQWNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Zb3V0dWJlVmlkZW9MaXN0LmpzP2U5NDUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGlua01vZGFsIGZyb20gJy4uL2NvbXBvbmVudHMvTGlua01vZGFsJztcblxuY29uc3QgdmlkZW9MaW5rc01hcCA9IHtcbiAgJ0NvcHkgQ29weSc6IFtcbiAgICB7IHRpdGxlOiAnU3BvdGlmeScsIHVybDogJ2h0dHBzOi8vb3Blbi5zcG90aWZ5LmNvbS90cmFjay82c3ZoM3U4OHFpbHZaQXhJMkQxdFB5JywgaW1hZ2U6ICcvaW1hZ2VzL3Nwb3RpZnkucG5nJyB9LFxuICAgIHsgdGl0bGU6ICdTb3VuZGNsb3VkJywgdXJsOiAnaHR0cHM6Ly9zb3VuZGNsb3VkLmNvbS90ZWF6ZS1iYW5kL2NvcHktY29weScsIGltYWdlOiAnL2ltYWdlcy9zb3VuZGNsb3VkLnBuZyd9LFxuICAgIHsgdGl0bGU6ICdZb3V0dWJlJywgdXJsOiAnaHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/dj1ZTTdETlE0b3lmaycsIGltYWdlOiAnL2ltYWdlcy95b3V0dWJlLnBuZycgfSxcbiAgICB7IHRpdGxlOiAnQmFuZGNhbXAnLCB1cmw6ICdodHRwczovL3RlYXplLmJhbmRjYW1wLmNvbS90cmFjay9jb3B5LWNvcHknLCBpbWFnZTogJy9pbWFnZXMvYmFuZGNhbXAucG5nJyB9LFxuICAgIHsgdGl0bGU6ICdQYW5kb3JhJywgdXJsOiAnaHR0cHM6Ly93d3cucGFuZG9yYS5jb20vYXJ0aXN0L3RlYXplL2NvcHktY29weS9jb3B5LWNvcHkvVFJ4OXRkN3paWGJwYlhQJywgaW1hZ2U6ICcvaW1hZ2VzL3BhbmRvcmEucG5nJyB9LFxuICAgIHsgdGl0bGU6ICdBcHBsZScsIHVybDogJ2h0dHBzOi8vbXVzaWMuYXBwbGUuY29tL3VzL2FsYnVtL2NvcHktY29weS8xNzI1NzA4OTYxP2k9MTcyNTcwODk2MicsIGltYWdlOiAnL2ltYWdlcy9hcHBsZS5wbmcnIH1cbiAgICAvLyAuLi4gb3RoZXIgbGlua3NcbiAgXSxcbiAgJ05ldyBMZWFmJzogW1xuICAgIHsgdGl0bGU6ICdTcG90aWZ5JywgdXJsOiAnaHR0cHM6Ly9vcGVuLnNwb3RpZnkuY29tL3RyYWNrLzZzdmgzdTg4cWlsdlpBeEkyRDF0UHknLCBpbWFnZTogJy9pbWFnZXMvc3BvdGlmeS5wbmcnIH0sXG4gICAgeyB0aXRsZTogJ1NvdW5kY2xvdWQnLCB1cmw6ICdodHRwczovL3NvdW5kY2xvdWQuY29tL3RlYXplLWJhbmQvY29weS1jb3B5JywgaW1hZ2U6ICcvaW1hZ2VzL3NvdW5kY2xvdWQucG5nJ30sXG4gICAgeyB0aXRsZTogJ1lvdXR1YmUnLCB1cmw6ICdodHRwczovL3d3dy55b3V0dWJlLmNvbS93YXRjaD92PVlNN0ROUTRveWZrJywgaW1hZ2U6ICcvaW1hZ2VzL3lvdXR1YmUucG5nJyB9LFxuICAgIHsgdGl0bGU6ICdCYW5kY2FtcCcsIHVybDogJ2h0dHBzOi8vdGVhemUuYmFuZGNhbXAuY29tL3RyYWNrL2NvcHktY29weScsIGltYWdlOiAnL2ltYWdlcy9iYW5kY2FtcC5wbmcnIH0sXG4gICAgeyB0aXRsZTogJ1BhbmRvcmEnLCB1cmw6ICdodHRwczovL3d3dy5wYW5kb3JhLmNvbS9hcnRpc3QvdGVhemUvY29weS1jb3B5L2NvcHktY29weS9UUng5dGQ3elpYYnBiWFAnLCBpbWFnZTogJy9pbWFnZXMvcGFuZG9yYS5wbmcnIH0sXG4gICAgeyB0aXRsZTogJ0FwcGxlJywgdXJsOiAnaHR0cHM6Ly9tdXNpYy5hcHBsZS5jb20vdXMvYWxidW0vY29weS1jb3B5LzE3MjU3MDg5NjE/aT0xNzI1NzA4OTYyJywgaW1hZ2U6ICcvaW1hZ2VzL2FwcGxlLnBuZycgfVxuICBdLFxuICAvLyAuLi4gbW9yZSBtYXBwaW5nc1xufTtcblxuY29uc3QgYWxidW1zID0gW1xuICB7IGlkOiAxLCB0aXRsZTogJ05ldyBMZWFmJywgaW1hZ2VVcmw6ICcvaW1hZ2VzL25ld2xlYWYuanBnJyB9LFxuICB7IGlkOiAyLCB0aXRsZTogJ0NvcHkgQ29weScsIGltYWdlVXJsOiAnL2ltYWdlcy9jb3B5Y29weS5qcGcnIH0sXG4gIC8vIC4uLiBvdGhlciBhbGJ1bXNcbl07XG5cblxuY29uc3QgQWxidW1Db21wb25lbnQgPSAoKSA9PiB7XG4gIGNvbnN0IFtpc01vZGFsT3Blbiwgc2V0TW9kYWxPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2FjdGl2ZUFsYnVtLCBzZXRBY3RpdmVBbGJ1bV0gPSB1c2VTdGF0ZShudWxsKTtcblxuICBjb25zdCBoYW5kbGVBbGJ1bUNsaWNrID0gKGFsYnVtKSA9PiB7XG4gICAgY29uc3QgYWxidW1XaXRoTGlua3MgPSB7XG4gICAgICAuLi5hbGJ1bSxcbiAgICAgIGxpbmtzOiB2aWRlb0xpbmtzTWFwW2FsYnVtLnRpdGxlXSB8fCBbXSAvLyBGZXRjaCBsaW5rcyBmcm9tIHRoZSBtYXBcbiAgICB9O1xuICAgIHNldEFjdGl2ZUFsYnVtKGFsYnVtV2l0aExpbmtzKTtcbiAgICBzZXRNb2RhbE9wZW4odHJ1ZSk7IC8vIE9wZW4gdGhlIG1vZGFsXG4gIH07XG5cbiAgY29uc3QgaGFuZGxlQ2xvc2VNb2RhbCA9ICgpID0+IHtcbiAgICBzZXRNb2RhbE9wZW4oZmFsc2UpO1xuICAgIHNldEFjdGl2ZUFsYnVtKG51bGwpOyAvLyBDbGVhciB0aGUgYWN0aXZlIGFsYnVtXG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbGJ1bS1saXN0LWNvbnRhaW5lciBwdC0xMCBmbGV4IGZsZXgtd3JhcCBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICB7YWxidW1zLm1hcCgoYWxidW0pID0+IChcbiAgICAgICAgICA8ZGl2IGtleT17YWxidW0uaWR9IGNsYXNzTmFtZT1cImFsYnVtLWNvbnRhaW5lciBwdC04IG14LTRcIiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVBbGJ1bUNsaWNrKGFsYnVtKX0+XG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImltYWdlLWNyb3AtY29udGFpbmVyIGN1cnNvci1wb2ludGVyXCJcbiAgICAgICAgICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZEltYWdlOiBgdXJsKCR7YWxidW0uaW1hZ2VVcmx9KWAgfX1cbiAgICAgICAgICAgID48L2Rpdj5cbiAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJhbGJ1bS10aXRsZSB0ZXh0LXhsIGZvbnQtYm9sZCB0ZXh0LXdoaXRlIHAtMyB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICB7YWxidW0udGl0bGV9XG4gICAgICAgICAgICA8L2gzPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuICAgICAge2FjdGl2ZUFsYnVtICYmIChcbiAgICAgICAgPExpbmtNb2RhbCBcbiAgICAgICAgICBpc09wZW49e2lzTW9kYWxPcGVufSBcbiAgICAgICAgICBvbkNsb3NlPXtoYW5kbGVDbG9zZU1vZGFsfSBcbiAgICAgICAgICBhbGJ1bT17YWN0aXZlQWxidW19XG4gICAgICAgIC8+XG4gICAgICApfVxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQWxidW1Db21wb25lbnQ7Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJMaW5rTW9kYWwiLCJ2aWRlb0xpbmtzTWFwIiwidGl0bGUiLCJ1cmwiLCJpbWFnZSIsImFsYnVtcyIsImlkIiwiaW1hZ2VVcmwiLCJBbGJ1bUNvbXBvbmVudCIsImlzTW9kYWxPcGVuIiwic2V0TW9kYWxPcGVuIiwiYWN0aXZlQWxidW0iLCJzZXRBY3RpdmVBbGJ1bSIsImhhbmRsZUFsYnVtQ2xpY2siLCJhbGJ1bSIsImFsYnVtV2l0aExpbmtzIiwibGlua3MiLCJoYW5kbGVDbG9zZU1vZGFsIiwiZGl2IiwiY2xhc3NOYW1lIiwibWFwIiwib25DbGljayIsInN0eWxlIiwiYmFja2dyb3VuZEltYWdlIiwiaDMiLCJpc09wZW4iLCJvbkNsb3NlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/YoutubeVideoList.js\n"));

/***/ })

});