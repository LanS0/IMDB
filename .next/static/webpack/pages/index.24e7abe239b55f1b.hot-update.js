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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Carousels; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\n\nfunction Carousels(data) {\n    _s();\n    const [index, setIndex] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [intervalId, setIntervalId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [imageData, setImageData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const handleSelect = (selectedIndex, e)=>{\n        setIndex(selectedIndex);\n    };\n    const nextSlide = ()=>{\n        const nextIndex = currentIndex === slides.length - 1 ? 0 : currentIndex + 1;\n        setIndex(nextIndex);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const id = setInterval(()=>{\n            nextSlide();\n        }, 3000);\n        setIntervalId(id);\n        return ()=>clearInterval(intervalId);\n    }, [\n        index\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setImageData(data.data);\n    }, [\n        data\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Carousel, {\n        activeIndex: index,\n        onSelect: handleSelect,\n        children: imageData.map((slide)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Carousel.Item, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    className: \"d-block img-responsive\",\n                    loading: \"lazy\",\n                    width: 150,\n                    height: 200,\n                    alt: \"images_\".concat(slide),\n                    src: slide\n                }, void 0, false, {\n                    fileName: \"E:\\\\IMDB\\\\IMDB\\\\components\\\\carousel\\\\Carousels.js\",\n                    lineNumber: 37,\n                    columnNumber: 15\n                }, this)\n            }, void 0, false, {\n                fileName: \"E:\\\\IMDB\\\\IMDB\\\\components\\\\carousel\\\\Carousels.js\",\n                lineNumber: 36,\n                columnNumber: 13\n            }, this))\n    }, void 0, false, {\n        fileName: \"E:\\\\IMDB\\\\IMDB\\\\components\\\\carousel\\\\Carousels.js\",\n        lineNumber: 34,\n        columnNumber: 9\n    }, this);\n}\n_s(Carousels, \"uM7nWtPqyGTLEHQ9x0fzLzBsFcM=\");\n_c = Carousels;\nvar _c;\n$RefreshReg$(_c, \"Carousels\");\n\n\n;\r\n    // Wrapped in an IIFE to avoid polluting the global scope\r\n    ;\r\n    (function () {\r\n        var _a, _b;\r\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\r\n        // to extract CSS. For backwards compatibility, we need to check we're in a\r\n        // browser context before continuing.\r\n        if (typeof self !== 'undefined' &&\r\n            // AMP / No-JS mode does not inject these helpers:\r\n            '$RefreshHelpers$' in self) {\r\n            // @ts-ignore __webpack_module__ is global\r\n            var currentExports = module.exports;\r\n            // @ts-ignore __webpack_module__ is global\r\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\r\n            // This cannot happen in MainTemplate because the exports mismatch between\r\n            // templating and execution.\r\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\r\n            // A module can be accepted automatically based on its exports, e.g. when\r\n            // it is a Refresh Boundary.\r\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\r\n                // Save the previous exports on update so we can compare the boundary\r\n                // signatures.\r\n                module.hot.dispose(function (data) {\r\n                    data.prevExports = currentExports;\r\n                });\r\n                // Unconditionally accept an update to this module, we'll check if it's\r\n                // still a Refresh Boundary later.\r\n                // @ts-ignore importMeta is replaced in the loader\r\n                module.hot.accept();\r\n                // This field is set when the previous version of this module was a\r\n                // Refresh Boundary, letting us know we need to check for invalidation or\r\n                // enqueue an update.\r\n                if (prevExports !== null) {\r\n                    // A boundary can become ineligible if its exports are incompatible\r\n                    // with the previous exports.\r\n                    //\r\n                    // For example, if you add/remove/change exports, we'll want to\r\n                    // re-execute the importing modules, and force those components to\r\n                    // re-render. Similarly, if you convert a class component to a\r\n                    // function, we want to invalidate the boundary.\r\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\r\n                        module.hot.invalidate();\r\n                    }\r\n                    else {\r\n                        self.$RefreshHelpers$.scheduleUpdate();\r\n                    }\r\n                }\r\n            }\r\n            else {\r\n                // Since we just executed the code for the module, it's possible that the\r\n                // new exports made it ineligible for being a boundary.\r\n                // We only care about the case when we were _previously_ a boundary,\r\n                // because we already accepted this update (accidental side effect).\r\n                var isNoLongerABoundary = prevExports !== null;\r\n                if (isNoLongerABoundary) {\r\n                    module.hot.invalidate();\r\n                }\r\n            }\r\n        }\r\n    })();\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2Nhcm91c2VsL0Nhcm91c2Vscy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQTJDO0FBQ0M7QUFDYjtBQUVoQixTQUFTSSxVQUFVQyxJQUFJLEVBQUM7O0lBQ25DLE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHTCwrQ0FBUUEsQ0FBQztJQUNuQyxNQUFNLENBQUNNLFlBQVlDLGNBQWMsR0FBR1AsK0NBQVFBLENBQUMsSUFBSTtJQUNqRCxNQUFNLENBQUNRLFdBQVdDLGFBQWEsR0FBR1QsK0NBQVFBLENBQUMsRUFBRTtJQUU3QyxNQUFNVSxlQUFlLENBQUNDLGVBQWVDLElBQU07UUFDdkNQLFNBQVNNO0lBQ2I7SUFFQSxNQUFNRSxZQUFZLElBQU07UUFDdEIsTUFBTUMsWUFBWUMsaUJBQWlCQyxPQUFPQyxNQUFNLEdBQUcsSUFBSSxJQUFJRixlQUFlLENBQUM7UUFDM0VWLFNBQVNTO0lBQ1g7SUFFQWYsZ0RBQVNBLENBQUMsSUFBTTtRQUNkLE1BQU1tQixLQUFLQyxZQUFZLElBQU07WUFDM0JOO1FBQ0YsR0FBRztRQUVITixjQUFjVztRQUVkLE9BQU8sSUFBTUUsY0FBY2Q7SUFDN0IsR0FBRztRQUFDRjtLQUFNO0lBRVZMLGdEQUFTQSxDQUFDLElBQUk7UUFDWlUsYUFBYU4sS0FBS0EsSUFBSTtJQUN4QixHQUFHO1FBQUNBO0tBQUs7SUFFVCxxQkFDSSw4REFBQ0wscURBQVFBO1FBQUN1QixhQUFhakI7UUFBT2tCLFVBQVVaO2tCQUNyQ0YsVUFBVWUsR0FBRyxDQUFDLENBQUNDLHNCQUNkLDhEQUFDMUIsMERBQWE7MEJBQ1osNEVBQUNHLG1EQUFLQTtvQkFBQ3lCLFdBQVU7b0JBQXlCQyxTQUFRO29CQUFPQyxPQUFPO29CQUFLQyxRQUFRO29CQUFLQyxLQUFLLFVBQWdCLE9BQU5OO29CQUFTTyxLQUFLUDs7Ozs7Ozs7Ozs7Ozs7OztBQUs3SCxDQUFDO0dBckN1QnRCO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvY2Fyb3VzZWwvQ2Fyb3VzZWxzLmpzPzY1YjQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2Fyb3VzZWwgfSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwXCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDYXJvdXNlbHMoZGF0YSl7XHJcbiAgICBjb25zdCBbaW5kZXgsIHNldEluZGV4XSA9IHVzZVN0YXRlKDApO1xyXG4gICAgY29uc3QgW2ludGVydmFsSWQsIHNldEludGVydmFsSWRdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgICBjb25zdCBbaW1hZ2VEYXRhLCBzZXRJbWFnZURhdGFdID0gdXNlU3RhdGUoW10pXHJcblxyXG4gICAgY29uc3QgaGFuZGxlU2VsZWN0ID0gKHNlbGVjdGVkSW5kZXgsIGUpID0+IHtcclxuICAgICAgICBzZXRJbmRleChzZWxlY3RlZEluZGV4KTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgbmV4dFNsaWRlID0gKCkgPT4ge1xyXG4gICAgICBjb25zdCBuZXh0SW5kZXggPSBjdXJyZW50SW5kZXggPT09IHNsaWRlcy5sZW5ndGggLSAxID8gMCA6IGN1cnJlbnRJbmRleCArIDE7XHJcbiAgICAgIHNldEluZGV4KG5leHRJbmRleCk7XHJcbiAgICB9O1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgIGNvbnN0IGlkID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICAgIG5leHRTbGlkZSgpO1xyXG4gICAgICB9LCAzMDAwKTtcclxuXHJcbiAgICAgIHNldEludGVydmFsSWQoaWQpO1xyXG5cclxuICAgICAgcmV0dXJuICgpID0+IGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWxJZCk7XHJcbiAgICB9LCBbaW5kZXhdKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgc2V0SW1hZ2VEYXRhKGRhdGEuZGF0YSlcclxuICAgIH0sIFtkYXRhXSlcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxDYXJvdXNlbCBhY3RpdmVJbmRleD17aW5kZXh9IG9uU2VsZWN0PXtoYW5kbGVTZWxlY3R9PlxyXG4gICAgICAgICAge2ltYWdlRGF0YS5tYXAoKHNsaWRlKSA9PiAoXHJcbiAgICAgICAgICAgIDxDYXJvdXNlbC5JdGVtPlxyXG4gICAgICAgICAgICAgIDxJbWFnZSBjbGFzc05hbWU9J2QtYmxvY2sgaW1nLXJlc3BvbnNpdmUnIGxvYWRpbmc9J2xhenknIHdpZHRoPXsxNTB9IGhlaWdodD17MjAwfSBhbHQ9e2BpbWFnZXNfJHtzbGlkZX1gfSBzcmM9e3NsaWRlfS8+XHJcbiAgICAgICAgICAgIDwvQ2Fyb3VzZWwuSXRlbT5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvQ2Fyb3VzZWw+XHJcbiAgICAgICk7XHJcbn0iXSwibmFtZXMiOlsiQ2Fyb3VzZWwiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkltYWdlIiwiQ2Fyb3VzZWxzIiwiZGF0YSIsImluZGV4Iiwic2V0SW5kZXgiLCJpbnRlcnZhbElkIiwic2V0SW50ZXJ2YWxJZCIsImltYWdlRGF0YSIsInNldEltYWdlRGF0YSIsImhhbmRsZVNlbGVjdCIsInNlbGVjdGVkSW5kZXgiLCJlIiwibmV4dFNsaWRlIiwibmV4dEluZGV4IiwiY3VycmVudEluZGV4Iiwic2xpZGVzIiwibGVuZ3RoIiwiaWQiLCJzZXRJbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiLCJhY3RpdmVJbmRleCIsIm9uU2VsZWN0IiwibWFwIiwic2xpZGUiLCJJdGVtIiwiY2xhc3NOYW1lIiwibG9hZGluZyIsIndpZHRoIiwiaGVpZ2h0IiwiYWx0Iiwic3JjIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/carousel/Carousels.js\n"));

/***/ })

});