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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_LinkModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/LinkModal */ \"./components/LinkModal.js\");\n\nvar _s = $RefreshSig$();\n\n\nconst videoLinksMap = {\n    \"Copy Copy\": [\n        {\n            title: \"Spotify\",\n            url: \"https://open.spotify.com/track/6svh3u88qilvZAxI2D1tPy\",\n            image: \"/images/spotify.png\"\n        },\n        {\n            title: \"Soundcloud\",\n            url: \"https://soundcloud.com/teaze-band/copy-copy\",\n            image: \"/images/soundcloud.png\"\n        },\n        {\n            title: \"Youtube\",\n            url: \"https://www.youtube.com/watch?v=YM7DNQ4oyfk\",\n            image: \"/images/youtube.png\"\n        },\n        {\n            title: \"Spotify\",\n            url: \"https://teaze.bandcamp.com/track/copy-copy\",\n            image: \"/images/bandcamp.png\"\n        },\n        {\n            title: \"Spotify\",\n            url: \"https://www.pandora.com/artist/teaze/copy-copy/copy-copy/TRx9td7zZXbpbXP\",\n            image: \"/images/pandora.png\"\n        },\n        {\n            title: \"Spotify\",\n            url: \"https://open.spotify.com/track/6svh3u88qilvZAxI2D1tPy\",\n            image: \"/images/spotify.png\"\n        }\n    ],\n    \"New Leaf\": [\n        {\n            title: \"Soundcloud\",\n            url: \"https://soundcloud.com/teaze-band/copy-copy\",\n            image: \"/images/soundcloud.png\"\n        },\n        {\n            title: \"Spotify\",\n            url: \"https://open.spotify.com/track/6svh3u88qilvZAxI2D1tPy\",\n            image: \"/images/spotify.png\"\n        }\n    ]\n};\nconst albums = [\n    {\n        id: 1,\n        title: \"New Leaf\",\n        imageUrl: \"/images/newleaf.jpg\"\n    },\n    {\n        id: 2,\n        title: \"Copy Copy\",\n        imageUrl: \"/images/copycopy.jpg\"\n    }\n];\nconst AlbumComponent = ()=>{\n    _s();\n    const [isModalOpen, setModalOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [activeAlbum, setActiveAlbum] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const handleAlbumClick = (album)=>{\n        setActiveAlbum(album);\n        setModalOpen(true); // Open the modal\n    };\n    const handleCloseModal = ()=>{\n        setModalOpen(false);\n        setActiveAlbum(null); // Clear the active album\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"album-list-container pt-10\",\n                children: albums.map((album)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"album-container pt-8\",\n                        onClick: ()=>handleAlbumClick(album),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"image-crop-container cursor-pointer\",\n                                style: {\n                                    backgroundImage: \"url(\".concat(album.imageUrl, \")\")\n                                }\n                            }, void 0, false, {\n                                fileName: \"/Users/KKYAXYU/theband.teaze/components/YoutubeVideoList.js\",\n                                lineNumber: 47,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                className: \"album-title text-xl font-bold text-white \",\n                                children: album.title\n                            }, void 0, false, {\n                                fileName: \"/Users/KKYAXYU/theband.teaze/components/YoutubeVideoList.js\",\n                                lineNumber: 51,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, album.id, true, {\n                        fileName: \"/Users/KKYAXYU/theband.teaze/components/YoutubeVideoList.js\",\n                        lineNumber: 46,\n                        columnNumber: 11\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"/Users/KKYAXYU/theband.teaze/components/YoutubeVideoList.js\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, undefined),\n            activeAlbum && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_LinkModal__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                isOpen: isModalOpen,\n                onClose: handleCloseModal,\n                album: activeAlbum\n            }, void 0, false, {\n                fileName: \"/Users/KKYAXYU/theband.teaze/components/YoutubeVideoList.js\",\n                lineNumber: 58,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(AlbumComponent, \"hkYKocSue5x28iONR8/54Eiqvm8=\");\n_c = AlbumComponent;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AlbumComponent);\nvar _c;\n$RefreshReg$(_c, \"AlbumComponent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1lvdXR1YmVWaWRlb0xpc3QuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBbUQ7QUFDSDtBQUVoRCxNQUFNSSxnQkFBZ0I7SUFDcEIsYUFBYTtRQUNYO1lBQUVDLE9BQU87WUFBV0MsS0FBSztZQUF5REMsT0FBTztRQUFzQjtRQUMvRztZQUFFRixPQUFPO1lBQWNDLEtBQUs7WUFBK0NDLE9BQU87UUFBd0I7UUFDMUc7WUFBRUYsT0FBTztZQUFXQyxLQUFLO1lBQStDQyxPQUFPO1FBQXNCO1FBQ3JHO1lBQUVGLE9BQU87WUFBV0MsS0FBSztZQUE4Q0MsT0FBTztRQUF1QjtRQUNyRztZQUFFRixPQUFPO1lBQVdDLEtBQUs7WUFBNEVDLE9BQU87UUFBc0I7UUFDbEk7WUFBRUYsT0FBTztZQUFXQyxLQUFLO1lBQXlEQyxPQUFPO1FBQXNCO0tBRWhIO0lBQ0QsWUFBWTtRQUNWO1lBQUVGLE9BQU87WUFBY0MsS0FBSztZQUErQ0MsT0FBTztRQUF3QjtRQUMxRztZQUFFRixPQUFPO1lBQVdDLEtBQUs7WUFBeURDLE9BQU87UUFBcUI7S0FDL0c7QUFFSDtBQUVBLE1BQU1DLFNBQVM7SUFDYjtRQUFFQyxJQUFJO1FBQUdKLE9BQU87UUFBWUssVUFBVTtJQUFzQjtJQUM1RDtRQUFFRCxJQUFJO1FBQUdKLE9BQU87UUFBYUssVUFBVTtJQUF1QjtDQUUvRDtBQUdELE1BQU1DLGlCQUFpQjs7SUFDckIsTUFBTSxDQUFDQyxhQUFhQyxhQUFhLEdBQUdYLCtDQUFRQSxDQUFDO0lBQzdDLE1BQU0sQ0FBQ1ksYUFBYUMsZUFBZSxHQUFHYiwrQ0FBUUEsQ0FBQztJQUUvQyxNQUFNYyxtQkFBbUIsQ0FBQ0M7UUFDeEJGLGVBQWVFO1FBQ2ZKLGFBQWEsT0FBTyxpQkFBaUI7SUFDdkM7SUFFQSxNQUFNSyxtQkFBbUI7UUFDdkJMLGFBQWE7UUFDYkUsZUFBZSxPQUFPLHlCQUF5QjtJQUNqRDtJQUVBLHFCQUNFOzswQkFDRSw4REFBQ0k7Z0JBQUlDLFdBQVU7MEJBQ1paLE9BQU9hLEdBQUcsQ0FBQyxDQUFDSixzQkFDWCw4REFBQ0U7d0JBQW1CQyxXQUFVO3dCQUF1QkUsU0FBUyxJQUFNTixpQkFBaUJDOzswQ0FDbkYsOERBQUNFO2dDQUNDQyxXQUFVO2dDQUNWRyxPQUFPO29DQUFFQyxpQkFBaUIsT0FBc0IsT0FBZlAsTUFBTVAsUUFBUSxFQUFDO2dDQUFHOzs7Ozs7MENBRXJELDhEQUFDZTtnQ0FBR0wsV0FBVTswQ0FDWEgsTUFBTVosS0FBSzs7Ozs7Ozt1QkFOTlksTUFBTVIsRUFBRTs7Ozs7Ozs7OztZQVdyQkssNkJBQ0MsOERBQUNYLDZEQUFTQTtnQkFDUnVCLFFBQVFkO2dCQUNSZSxTQUFTVDtnQkFDVEQsT0FBT0g7Ozs7Ozs7O0FBS2pCO0dBdENNSDtLQUFBQTtBQXdDTiwrREFBZUEsY0FBY0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1lvdXR1YmVWaWRlb0xpc3QuanM/ZTk0NSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMaW5rTW9kYWwgZnJvbSAnLi4vY29tcG9uZW50cy9MaW5rTW9kYWwnO1xuXG5jb25zdCB2aWRlb0xpbmtzTWFwID0ge1xuICAnQ29weSBDb3B5JzogW1xuICAgIHsgdGl0bGU6ICdTcG90aWZ5JywgdXJsOiAnaHR0cHM6Ly9vcGVuLnNwb3RpZnkuY29tL3RyYWNrLzZzdmgzdTg4cWlsdlpBeEkyRDF0UHknLCBpbWFnZTogJy9pbWFnZXMvc3BvdGlmeS5wbmcnIH0sXG4gICAgeyB0aXRsZTogJ1NvdW5kY2xvdWQnLCB1cmw6ICdodHRwczovL3NvdW5kY2xvdWQuY29tL3RlYXplLWJhbmQvY29weS1jb3B5JywgaW1hZ2U6ICcvaW1hZ2VzL3NvdW5kY2xvdWQucG5nJ30sXG4gICAgeyB0aXRsZTogJ1lvdXR1YmUnLCB1cmw6ICdodHRwczovL3d3dy55b3V0dWJlLmNvbS93YXRjaD92PVlNN0ROUTRveWZrJywgaW1hZ2U6ICcvaW1hZ2VzL3lvdXR1YmUucG5nJyB9LFxuICAgIHsgdGl0bGU6ICdTcG90aWZ5JywgdXJsOiAnaHR0cHM6Ly90ZWF6ZS5iYW5kY2FtcC5jb20vdHJhY2svY29weS1jb3B5JywgaW1hZ2U6ICcvaW1hZ2VzL2JhbmRjYW1wLnBuZycgfSxcbiAgICB7IHRpdGxlOiAnU3BvdGlmeScsIHVybDogJ2h0dHBzOi8vd3d3LnBhbmRvcmEuY29tL2FydGlzdC90ZWF6ZS9jb3B5LWNvcHkvY29weS1jb3B5L1RSeDl0ZDd6WlhicGJYUCcsIGltYWdlOiAnL2ltYWdlcy9wYW5kb3JhLnBuZycgfSxcbiAgICB7IHRpdGxlOiAnU3BvdGlmeScsIHVybDogJ2h0dHBzOi8vb3Blbi5zcG90aWZ5LmNvbS90cmFjay82c3ZoM3U4OHFpbHZaQXhJMkQxdFB5JywgaW1hZ2U6ICcvaW1hZ2VzL3Nwb3RpZnkucG5nJyB9XG4gICAgLy8gLi4uIG90aGVyIGxpbmtzXG4gIF0sXG4gICdOZXcgTGVhZic6IFtcbiAgICB7IHRpdGxlOiAnU291bmRjbG91ZCcsIHVybDogJ2h0dHBzOi8vc291bmRjbG91ZC5jb20vdGVhemUtYmFuZC9jb3B5LWNvcHknLCBpbWFnZTogJy9pbWFnZXMvc291bmRjbG91ZC5wbmcnfSxcbiAgICB7IHRpdGxlOiAnU3BvdGlmeScsIHVybDogJ2h0dHBzOi8vb3Blbi5zcG90aWZ5LmNvbS90cmFjay82c3ZoM3U4OHFpbHZaQXhJMkQxdFB5JywgaW1hZ2U6ICcvaW1hZ2VzL3Nwb3RpZnkucG5nJ31cbiAgXSxcbiAgLy8gLi4uIG1vcmUgbWFwcGluZ3Ncbn07XG5cbmNvbnN0IGFsYnVtcyA9IFtcbiAgeyBpZDogMSwgdGl0bGU6ICdOZXcgTGVhZicsIGltYWdlVXJsOiAnL2ltYWdlcy9uZXdsZWFmLmpwZycgfSxcbiAgeyBpZDogMiwgdGl0bGU6ICdDb3B5IENvcHknLCBpbWFnZVVybDogJy9pbWFnZXMvY29weWNvcHkuanBnJyB9LFxuICAvLyAuLi4gb3RoZXIgYWxidW1zXG5dO1xuXG5cbmNvbnN0IEFsYnVtQ29tcG9uZW50ID0gKCkgPT4ge1xuICBjb25zdCBbaXNNb2RhbE9wZW4sIHNldE1vZGFsT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFthY3RpdmVBbGJ1bSwgc2V0QWN0aXZlQWxidW1dID0gdXNlU3RhdGUobnVsbCk7XG5cbiAgY29uc3QgaGFuZGxlQWxidW1DbGljayA9IChhbGJ1bSkgPT4ge1xuICAgIHNldEFjdGl2ZUFsYnVtKGFsYnVtKTtcbiAgICBzZXRNb2RhbE9wZW4odHJ1ZSk7IC8vIE9wZW4gdGhlIG1vZGFsXG4gIH07XG5cbiAgY29uc3QgaGFuZGxlQ2xvc2VNb2RhbCA9ICgpID0+IHtcbiAgICBzZXRNb2RhbE9wZW4oZmFsc2UpO1xuICAgIHNldEFjdGl2ZUFsYnVtKG51bGwpOyAvLyBDbGVhciB0aGUgYWN0aXZlIGFsYnVtXG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbGJ1bS1saXN0LWNvbnRhaW5lciBwdC0xMFwiPlxuICAgICAgICB7YWxidW1zLm1hcCgoYWxidW0pID0+IChcbiAgICAgICAgICA8ZGl2IGtleT17YWxidW0uaWR9IGNsYXNzTmFtZT1cImFsYnVtLWNvbnRhaW5lciBwdC04XCIgb25DbGljaz17KCkgPT4gaGFuZGxlQWxidW1DbGljayhhbGJ1bSl9PlxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbWFnZS1jcm9wLWNvbnRhaW5lciBjdXJzb3ItcG9pbnRlclwiXG4gICAgICAgICAgICAgIHN0eWxlPXt7IGJhY2tncm91bmRJbWFnZTogYHVybCgke2FsYnVtLmltYWdlVXJsfSlgIH19XG4gICAgICAgICAgICA+PC9kaXY+XG4gICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiYWxidW0tdGl0bGUgdGV4dC14bCBmb250LWJvbGQgdGV4dC13aGl0ZSBcIj5cbiAgICAgICAgICAgICAge2FsYnVtLnRpdGxlfVxuICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSl9XG4gICAgICA8L2Rpdj5cbiAgICAgIHthY3RpdmVBbGJ1bSAmJiAoXG4gICAgICAgIDxMaW5rTW9kYWwgXG4gICAgICAgICAgaXNPcGVuPXtpc01vZGFsT3Blbn0gXG4gICAgICAgICAgb25DbG9zZT17aGFuZGxlQ2xvc2VNb2RhbH0gXG4gICAgICAgICAgYWxidW09e2FjdGl2ZUFsYnVtfSAvLyBQYXNzIHRoZSBhY3RpdmUgYWxidW0gdG8gdGhlIG1vZGFsXG4gICAgICAgIC8+XG4gICAgICApfVxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQWxidW1Db21wb25lbnQ7Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJMaW5rTW9kYWwiLCJ2aWRlb0xpbmtzTWFwIiwidGl0bGUiLCJ1cmwiLCJpbWFnZSIsImFsYnVtcyIsImlkIiwiaW1hZ2VVcmwiLCJBbGJ1bUNvbXBvbmVudCIsImlzTW9kYWxPcGVuIiwic2V0TW9kYWxPcGVuIiwiYWN0aXZlQWxidW0iLCJzZXRBY3RpdmVBbGJ1bSIsImhhbmRsZUFsYnVtQ2xpY2siLCJhbGJ1bSIsImhhbmRsZUNsb3NlTW9kYWwiLCJkaXYiLCJjbGFzc05hbWUiLCJtYXAiLCJvbkNsaWNrIiwic3R5bGUiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJoMyIsImlzT3BlbiIsIm9uQ2xvc2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/YoutubeVideoList.js\n"));

/***/ })

});