"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/carousel/Carousels.js":
/*!******************************************!*\
  !*** ./components/carousel/Carousels.js ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Carousels; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\n\nfunction Carousels(data) {\n    _s();\n    const [index, setIndex] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [intervalId, setIntervalId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [imageData, setImageData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const handleSelect = (selectedIndex, e)=>{\n        setIndex(selectedIndex);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const id = setInterval(()=>{\n            setIndex((prevIndex)=>prevIndex === data.length - 1 ? 0 : prevIndex + 1);\n        }, 3000);\n        setIntervalId(id);\n        return ()=>clearInterval(intervalId);\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setImageData(data.data);\n    }, [\n        data\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Carousel, {\n        activeIndex: index,\n        onSelect: handleSelect,\n        children: imageData.map((slide)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Carousel.Item, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        className: \"d-block w-100\",\n                        src: slide,\n                        alt: slide\n                    }, void 0, false, {\n                        fileName: \"E:\\\\IMDB\\\\IMDB\\\\components\\\\carousel\\\\Carousels.js\",\n                        lineNumber: 29,\n                        columnNumber: 15\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Carousel.Caption, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                            children: slide\n                        }, void 0, false, {\n                            fileName: \"E:\\\\IMDB\\\\IMDB\\\\components\\\\carousel\\\\Carousels.js\",\n                            lineNumber: 31,\n                            columnNumber: 17\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"E:\\\\IMDB\\\\IMDB\\\\components\\\\carousel\\\\Carousels.js\",\n                        lineNumber: 30,\n                        columnNumber: 15\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"E:\\\\IMDB\\\\IMDB\\\\components\\\\carousel\\\\Carousels.js\",\n                lineNumber: 28,\n                columnNumber: 13\n            }, this))\n    }, void 0, false, {\n        fileName: \"E:\\\\IMDB\\\\IMDB\\\\components\\\\carousel\\\\Carousels.js\",\n        lineNumber: 26,\n        columnNumber: 9\n    }, this);\n}\n_s(Carousels, \"uM7nWtPqyGTLEHQ9x0fzLzBsFcM=\");\n_c = Carousels;\nvar _c;\n$RefreshReg$(_c, \"Carousels\");\n\n\n;\r\n    // Wrapped in an IIFE to avoid polluting the global scope\r\n    ;\r\n    (function () {\r\n        var _a, _b;\r\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\r\n        // to extract CSS. For backwards compatibility, we need to check we're in a\r\n        // browser context before continuing.\r\n        if (typeof self !== 'undefined' &&\r\n            // AMP / No-JS mode does not inject these helpers:\r\n            '$RefreshHelpers$' in self) {\r\n            // @ts-ignore __webpack_module__ is global\r\n            var currentExports = module.exports;\r\n            // @ts-ignore __webpack_module__ is global\r\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\r\n            // This cannot happen in MainTemplate because the exports mismatch between\r\n            // templating and execution.\r\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\r\n            // A module can be accepted automatically based on its exports, e.g. when\r\n            // it is a Refresh Boundary.\r\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\r\n                // Save the previous exports on update so we can compare the boundary\r\n                // signatures.\r\n                module.hot.dispose(function (data) {\r\n                    data.prevExports = currentExports;\r\n                });\r\n                // Unconditionally accept an update to this module, we'll check if it's\r\n                // still a Refresh Boundary later.\r\n                // @ts-ignore importMeta is replaced in the loader\r\n                module.hot.accept();\r\n                // This field is set when the previous version of this module was a\r\n                // Refresh Boundary, letting us know we need to check for invalidation or\r\n                // enqueue an update.\r\n                if (prevExports !== null) {\r\n                    // A boundary can become ineligible if its exports are incompatible\r\n                    // with the previous exports.\r\n                    //\r\n                    // For example, if you add/remove/change exports, we'll want to\r\n                    // re-execute the importing modules, and force those components to\r\n                    // re-render. Similarly, if you convert a class component to a\r\n                    // function, we want to invalidate the boundary.\r\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\r\n                        module.hot.invalidate();\r\n                    }\r\n                    else {\r\n                        self.$RefreshHelpers$.scheduleUpdate();\r\n                    }\r\n                }\r\n            }\r\n            else {\r\n                // Since we just executed the code for the module, it's possible that the\r\n                // new exports made it ineligible for being a boundary.\r\n                // We only care about the case when we were _previously_ a boundary,\r\n                // because we already accepted this update (accidental side effect).\r\n                var isNoLongerABoundary = prevExports !== null;\r\n                if (isNoLongerABoundary) {\r\n                    module.hot.invalidate();\r\n                }\r\n            }\r\n        }\r\n    })();\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2Nhcm91c2VsL0Nhcm91c2Vscy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUEyQztBQUNDO0FBRTdCLFNBQVNHLFVBQVVDLElBQUksRUFBQzs7SUFDbkMsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdKLCtDQUFRQSxDQUFDO0lBQ25DLE1BQU0sQ0FBQ0ssWUFBWUMsY0FBYyxHQUFHTiwrQ0FBUUEsQ0FBQyxJQUFJO0lBQ2pELE1BQU0sQ0FBQ08sV0FBV0MsYUFBYSxHQUFHUiwrQ0FBUUEsQ0FBQyxFQUFFO0lBRTdDLE1BQU1TLGVBQWUsQ0FBQ0MsZUFBZUMsSUFBTTtRQUN2Q1AsU0FBU007SUFDYjtJQUVBWCxnREFBU0EsQ0FBQyxJQUFNO1FBQ1osTUFBTWEsS0FBS0MsWUFBWSxJQUFNO1lBQzNCVCxTQUFTLENBQUNVLFlBQWVBLGNBQWNaLEtBQUthLE1BQU0sR0FBRyxJQUFJLElBQUlELFlBQVksQ0FBQztRQUM1RSxHQUFHO1FBQ0hSLGNBQWNNO1FBQ2QsT0FBTyxJQUFNSSxjQUFjWDtJQUMvQixHQUFHLEVBQUU7SUFFTE4sZ0RBQVNBLENBQUMsSUFBSTtRQUNaUyxhQUFhTixLQUFLQSxJQUFJO0lBQ3hCLEdBQUc7UUFBQ0E7S0FBSztJQUVULHFCQUNJLDhEQUFDSixxREFBUUE7UUFBQ21CLGFBQWFkO1FBQU9lLFVBQVVUO2tCQUNyQ0YsVUFBVVksR0FBRyxDQUFDLENBQUNDLHNCQUNkLDhEQUFDdEIsMERBQWE7O2tDQUNaLDhEQUFDd0I7d0JBQUlDLFdBQVU7d0JBQWdCQyxLQUFLSjt3QkFBT0ssS0FBS0w7Ozs7OztrQ0FDaEQsOERBQUN0Qiw2REFBZ0I7a0NBQ2YsNEVBQUM2QjtzQ0FBSVA7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNckIsQ0FBQztHQWpDdUJuQjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2Nhcm91c2VsL0Nhcm91c2Vscy5qcz82NWI0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENhcm91c2VsIH0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcFwiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDYXJvdXNlbHMoZGF0YSl7XHJcbiAgICBjb25zdCBbaW5kZXgsIHNldEluZGV4XSA9IHVzZVN0YXRlKDApO1xyXG4gICAgY29uc3QgW2ludGVydmFsSWQsIHNldEludGVydmFsSWRdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgICBjb25zdCBbaW1hZ2VEYXRhLCBzZXRJbWFnZURhdGFdID0gdXNlU3RhdGUoW10pXHJcblxyXG4gICAgY29uc3QgaGFuZGxlU2VsZWN0ID0gKHNlbGVjdGVkSW5kZXgsIGUpID0+IHtcclxuICAgICAgICBzZXRJbmRleChzZWxlY3RlZEluZGV4KTtcclxuICAgIH07XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zdCBpZCA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgICAgIHNldEluZGV4KChwcmV2SW5kZXgpID0+IChwcmV2SW5kZXggPT09IGRhdGEubGVuZ3RoIC0gMSA/IDAgOiBwcmV2SW5kZXggKyAxKSk7XHJcbiAgICAgICAgfSwgMzAwMCk7XHJcbiAgICAgICAgc2V0SW50ZXJ2YWxJZChpZCk7XHJcbiAgICAgICAgcmV0dXJuICgpID0+IGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWxJZCk7XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICAgIHNldEltYWdlRGF0YShkYXRhLmRhdGEpXHJcbiAgICB9LCBbZGF0YV0pXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Q2Fyb3VzZWwgYWN0aXZlSW5kZXg9e2luZGV4fSBvblNlbGVjdD17aGFuZGxlU2VsZWN0fT5cclxuICAgICAgICAgIHtpbWFnZURhdGEubWFwKChzbGlkZSkgPT4gKFxyXG4gICAgICAgICAgICA8Q2Fyb3VzZWwuSXRlbT5cclxuICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImQtYmxvY2sgdy0xMDBcIiBzcmM9e3NsaWRlfSBhbHQ9e3NsaWRlfSAvPlxyXG4gICAgICAgICAgICAgIDxDYXJvdXNlbC5DYXB0aW9uPlxyXG4gICAgICAgICAgICAgICAgPGgzPntzbGlkZX08L2gzPlxyXG4gICAgICAgICAgICAgIDwvQ2Fyb3VzZWwuQ2FwdGlvbj5cclxuICAgICAgICAgICAgPC9DYXJvdXNlbC5JdGVtPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9DYXJvdXNlbD5cclxuICAgICAgKTtcclxufSJdLCJuYW1lcyI6WyJDYXJvdXNlbCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQ2Fyb3VzZWxzIiwiZGF0YSIsImluZGV4Iiwic2V0SW5kZXgiLCJpbnRlcnZhbElkIiwic2V0SW50ZXJ2YWxJZCIsImltYWdlRGF0YSIsInNldEltYWdlRGF0YSIsImhhbmRsZVNlbGVjdCIsInNlbGVjdGVkSW5kZXgiLCJlIiwiaWQiLCJzZXRJbnRlcnZhbCIsInByZXZJbmRleCIsImxlbmd0aCIsImNsZWFySW50ZXJ2YWwiLCJhY3RpdmVJbmRleCIsIm9uU2VsZWN0IiwibWFwIiwic2xpZGUiLCJJdGVtIiwiaW1nIiwiY2xhc3NOYW1lIiwic3JjIiwiYWx0IiwiQ2FwdGlvbiIsImgzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/carousel/Carousels.js\n"));

/***/ })

});