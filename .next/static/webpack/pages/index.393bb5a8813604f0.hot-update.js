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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Carousels; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\n\nfunction Carousels(data) {\n    _s();\n    const [index, setIndex] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [intervalId, setIntervalId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const handleSelect = (selectedIndex, e)=>{\n        setIndex(selectedIndex);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const id = setInterval(()=>{\n            setIndex((prevIndex)=>prevIndex === data.length - 1 ? 0 : prevIndex + 1);\n        }, 3000);\n        setIntervalId(id);\n        return ()=>clearInterval(intervalId);\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        console.log(data);\n    }, [\n        data\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Carousel, {\n        activeIndex: index,\n        onSelect: handleSelect,\n        children: data.map((slide)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Carousel.Item, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        className: \"d-block w-100\",\n                        src: slide.imageUrl,\n                        alt: slide.caption\n                    }, void 0, false, {\n                        fileName: \"E:\\\\IMDB\\\\IMDB\\\\components\\\\carousel\\\\Carousels.js\",\n                        lineNumber: 28,\n                        columnNumber: 15\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Carousel.Caption, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                            children: slide.caption\n                        }, void 0, false, {\n                            fileName: \"E:\\\\IMDB\\\\IMDB\\\\components\\\\carousel\\\\Carousels.js\",\n                            lineNumber: 30,\n                            columnNumber: 17\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"E:\\\\IMDB\\\\IMDB\\\\components\\\\carousel\\\\Carousels.js\",\n                        lineNumber: 29,\n                        columnNumber: 15\n                    }, this)\n                ]\n            }, slide.id, true, {\n                fileName: \"E:\\\\IMDB\\\\IMDB\\\\components\\\\carousel\\\\Carousels.js\",\n                lineNumber: 27,\n                columnNumber: 13\n            }, this))\n    }, void 0, false, {\n        fileName: \"E:\\\\IMDB\\\\IMDB\\\\components\\\\carousel\\\\Carousels.js\",\n        lineNumber: 25,\n        columnNumber: 9\n    }, this);\n}\n_s(Carousels, \"QyBLPN0EbgJ9qEAFwszzCckG9lA=\");\n_c = Carousels;\nvar _c;\n$RefreshReg$(_c, \"Carousels\");\n\n\n;\r\n    // Wrapped in an IIFE to avoid polluting the global scope\r\n    ;\r\n    (function () {\r\n        var _a, _b;\r\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\r\n        // to extract CSS. For backwards compatibility, we need to check we're in a\r\n        // browser context before continuing.\r\n        if (typeof self !== 'undefined' &&\r\n            // AMP / No-JS mode does not inject these helpers:\r\n            '$RefreshHelpers$' in self) {\r\n            // @ts-ignore __webpack_module__ is global\r\n            var currentExports = module.exports;\r\n            // @ts-ignore __webpack_module__ is global\r\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\r\n            // This cannot happen in MainTemplate because the exports mismatch between\r\n            // templating and execution.\r\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\r\n            // A module can be accepted automatically based on its exports, e.g. when\r\n            // it is a Refresh Boundary.\r\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\r\n                // Save the previous exports on update so we can compare the boundary\r\n                // signatures.\r\n                module.hot.dispose(function (data) {\r\n                    data.prevExports = currentExports;\r\n                });\r\n                // Unconditionally accept an update to this module, we'll check if it's\r\n                // still a Refresh Boundary later.\r\n                // @ts-ignore importMeta is replaced in the loader\r\n                module.hot.accept();\r\n                // This field is set when the previous version of this module was a\r\n                // Refresh Boundary, letting us know we need to check for invalidation or\r\n                // enqueue an update.\r\n                if (prevExports !== null) {\r\n                    // A boundary can become ineligible if its exports are incompatible\r\n                    // with the previous exports.\r\n                    //\r\n                    // For example, if you add/remove/change exports, we'll want to\r\n                    // re-execute the importing modules, and force those components to\r\n                    // re-render. Similarly, if you convert a class component to a\r\n                    // function, we want to invalidate the boundary.\r\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\r\n                        module.hot.invalidate();\r\n                    }\r\n                    else {\r\n                        self.$RefreshHelpers$.scheduleUpdate();\r\n                    }\r\n                }\r\n            }\r\n            else {\r\n                // Since we just executed the code for the module, it's possible that the\r\n                // new exports made it ineligible for being a boundary.\r\n                // We only care about the case when we were _previously_ a boundary,\r\n                // because we already accepted this update (accidental side effect).\r\n                var isNoLongerABoundary = prevExports !== null;\r\n                if (isNoLongerABoundary) {\r\n                    module.hot.invalidate();\r\n                }\r\n            }\r\n        }\r\n    })();\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2Nhcm91c2VsL0Nhcm91c2Vscy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUEyQztBQUNDO0FBRTdCLFNBQVNHLFVBQVVDLElBQUksRUFBQzs7SUFDbkMsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdKLCtDQUFRQSxDQUFDO0lBQ25DLE1BQU0sQ0FBQ0ssWUFBWUMsY0FBYyxHQUFHTiwrQ0FBUUEsQ0FBQyxJQUFJO0lBRWpELE1BQU1PLGVBQWUsQ0FBQ0MsZUFBZUMsSUFBTTtRQUN2Q0wsU0FBU0k7SUFDYjtJQUVBVCxnREFBU0EsQ0FBQyxJQUFNO1FBQ1osTUFBTVcsS0FBS0MsWUFBWSxJQUFNO1lBQzNCUCxTQUFTLENBQUNRLFlBQWVBLGNBQWNWLEtBQUtXLE1BQU0sR0FBRyxJQUFJLElBQUlELFlBQVksQ0FBQztRQUM1RSxHQUFHO1FBQ0hOLGNBQWNJO1FBQ2QsT0FBTyxJQUFNSSxjQUFjVDtJQUMvQixHQUFHLEVBQUU7SUFFTE4sZ0RBQVNBLENBQUMsSUFBSTtRQUNaZ0IsUUFBUUMsR0FBRyxDQUFDZDtJQUNkLEdBQUc7UUFBQ0E7S0FBSztJQUVULHFCQUNJLDhEQUFDSixxREFBUUE7UUFBQ21CLGFBQWFkO1FBQU9lLFVBQVVYO2tCQUNyQ0wsS0FBS2lCLEdBQUcsQ0FBQyxDQUFDQyxzQkFDVCw4REFBQ3RCLDBEQUFhOztrQ0FDWiw4REFBQ3dCO3dCQUFJQyxXQUFVO3dCQUFnQkMsS0FBS0osTUFBTUssUUFBUTt3QkFBRUMsS0FBS04sTUFBTU8sT0FBTzs7Ozs7O2tDQUN0RSw4REFBQzdCLDZEQUFnQjtrQ0FDZiw0RUFBQytCO3NDQUFJVCxNQUFNTyxPQUFPOzs7Ozs7Ozs7Ozs7ZUFIRlAsTUFBTVYsRUFBRTs7Ozs7Ozs7OztBQVN4QyxDQUFDO0dBaEN1QlQ7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jYXJvdXNlbC9DYXJvdXNlbHMuanM/NjViNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDYXJvdXNlbCB9IGZyb20gXCJyZWFjdC1ib290c3RyYXBcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2Fyb3VzZWxzKGRhdGEpe1xyXG4gICAgY29uc3QgW2luZGV4LCBzZXRJbmRleF0gPSB1c2VTdGF0ZSgwKTtcclxuICAgIGNvbnN0IFtpbnRlcnZhbElkLCBzZXRJbnRlcnZhbElkXSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZVNlbGVjdCA9IChzZWxlY3RlZEluZGV4LCBlKSA9PiB7XHJcbiAgICAgICAgc2V0SW5kZXgoc2VsZWN0ZWRJbmRleCk7XHJcbiAgICB9O1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgaWQgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgICAgICBzZXRJbmRleCgocHJldkluZGV4KSA9PiAocHJldkluZGV4ID09PSBkYXRhLmxlbmd0aCAtIDEgPyAwIDogcHJldkluZGV4ICsgMSkpO1xyXG4gICAgICAgIH0sIDMwMDApO1xyXG4gICAgICAgIHNldEludGVydmFsSWQoaWQpO1xyXG4gICAgICAgIHJldHVybiAoKSA9PiBjbGVhckludGVydmFsKGludGVydmFsSWQpO1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICBjb25zb2xlLmxvZyhkYXRhKVxyXG4gICAgfSwgW2RhdGFdKVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPENhcm91c2VsIGFjdGl2ZUluZGV4PXtpbmRleH0gb25TZWxlY3Q9e2hhbmRsZVNlbGVjdH0+XHJcbiAgICAgICAgICB7ZGF0YS5tYXAoKHNsaWRlKSA9PiAoXHJcbiAgICAgICAgICAgIDxDYXJvdXNlbC5JdGVtIGtleT17c2xpZGUuaWR9PlxyXG4gICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiZC1ibG9jayB3LTEwMFwiIHNyYz17c2xpZGUuaW1hZ2VVcmx9IGFsdD17c2xpZGUuY2FwdGlvbn0gLz5cclxuICAgICAgICAgICAgICA8Q2Fyb3VzZWwuQ2FwdGlvbj5cclxuICAgICAgICAgICAgICAgIDxoMz57c2xpZGUuY2FwdGlvbn08L2gzPlxyXG4gICAgICAgICAgICAgIDwvQ2Fyb3VzZWwuQ2FwdGlvbj5cclxuICAgICAgICAgICAgPC9DYXJvdXNlbC5JdGVtPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9DYXJvdXNlbD5cclxuICAgICAgKTtcclxufSJdLCJuYW1lcyI6WyJDYXJvdXNlbCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQ2Fyb3VzZWxzIiwiZGF0YSIsImluZGV4Iiwic2V0SW5kZXgiLCJpbnRlcnZhbElkIiwic2V0SW50ZXJ2YWxJZCIsImhhbmRsZVNlbGVjdCIsInNlbGVjdGVkSW5kZXgiLCJlIiwiaWQiLCJzZXRJbnRlcnZhbCIsInByZXZJbmRleCIsImxlbmd0aCIsImNsZWFySW50ZXJ2YWwiLCJjb25zb2xlIiwibG9nIiwiYWN0aXZlSW5kZXgiLCJvblNlbGVjdCIsIm1hcCIsInNsaWRlIiwiSXRlbSIsImltZyIsImNsYXNzTmFtZSIsInNyYyIsImltYWdlVXJsIiwiYWx0IiwiY2FwdGlvbiIsIkNhcHRpb24iLCJoMyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/carousel/Carousels.js\n"));

/***/ })

});