webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/myWork/myWork.jsx":
/*!******************************************!*\
  !*** ./src/components/myWork/myWork.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper */ \"./node_modules/swiper/swiper.esm.js\");\n/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swiper/react */ \"./node_modules/swiper/swiper-react.esm.js\");\n/* harmony import */ var _projectData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./projectData */ \"./src/components/myWork/projectData.jsx\");\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./project */ \"./src/components/myWork/project.jsx\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/bencooper/personal-website-v4/src/components/myWork/myWork.jsx\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nswiper__WEBPACK_IMPORTED_MODULE_1__[\"default\"].use([swiper__WEBPACK_IMPORTED_MODULE_1__[\"Navigation\"], swiper__WEBPACK_IMPORTED_MODULE_1__[\"Pagination\"], swiper__WEBPACK_IMPORTED_MODULE_1__[\"Scrollbar\"], swiper__WEBPACK_IMPORTED_MODULE_1__[\"A11y\"]]);\n\n\n\nvar MyWork = function MyWork() {\n  return __jsx(\"div\", {\n    className: \"bg-gray-500 py-10 md:px-4 \",\n    id: \"my-work\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    className: \"text-5xl md:text-6xl\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 7\n    }\n  }, __jsx(\"p\", {\n    className: \"mb-5 text-center\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 9\n    }\n  }, \"My Work\")), __jsx(\"span\", {\n    className: \"hidden md:block \",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 7\n    }\n  }, __jsx(swiper_react__WEBPACK_IMPORTED_MODULE_2__[\"Swiper\"], {\n    spaceBetween: 1,\n    slidesPerView: 1,\n    navigation: true // pagination={{ clickable: true }}\n    ,\n    scrollbar: {\n      draggable: true\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 9\n    }\n  }, _projectData__WEBPACK_IMPORTED_MODULE_3__[\"ProjectsData\"].map(function (project) {\n    return __jsx(swiper_react__WEBPACK_IMPORTED_MODULE_2__[\"SwiperSlide\"], {\n      key: project.name,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 27,\n        columnNumber: 15\n      }\n    }, __jsx(_project__WEBPACK_IMPORTED_MODULE_4__[\"Project\"], {\n      projectData: project,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 17\n      }\n    }));\n  }))), __jsx(\"span\", {\n    className: \"block md:hidden \",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 7\n    }\n  }, _projectData__WEBPACK_IMPORTED_MODULE_3__[\"ProjectsData\"].map(function (project) {\n    return __jsx(\"div\", {\n      className: \"my-2\",\n      key: project.name,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 37,\n        columnNumber: 13\n      }\n    }, __jsx(_project__WEBPACK_IMPORTED_MODULE_4__[\"Project\"], {\n      projectData: project,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 38,\n        columnNumber: 15\n      }\n    }));\n  })));\n};\n\n_c = MyWork;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyWork);\n\nvar _c;\n\n$RefreshReg$(_c, \"MyWork\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvbXlXb3JrL215V29yay5qc3g/NzBmMiJdLCJuYW1lcyI6WyJTd2lwZXJDb3JlIiwidXNlIiwiTmF2aWdhdGlvbiIsIlBhZ2luYXRpb24iLCJTY3JvbGxiYXIiLCJBMTF5IiwiTXlXb3JrIiwiZHJhZ2dhYmxlIiwiUHJvamVjdHNEYXRhIiwibWFwIiwicHJvamVjdCIsIm5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBRUFBLDhDQUFVLENBQUNDLEdBQVgsQ0FBZSxDQUFDQyxpREFBRCxFQUFhQyxpREFBYixFQUF5QkMsZ0RBQXpCLEVBQW9DQywyQ0FBcEMsQ0FBZjtBQUVBO0FBQ0E7O0FBRUEsSUFBTUMsTUFBTSxHQUFHLFNBQVRBLE1BQVMsR0FBTTtBQUNuQixTQUNFO0FBQUssYUFBUyxFQUFDLDRCQUFmO0FBQTRDLE1BQUUsRUFBQyxTQUEvQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsc0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUcsYUFBUyxFQUFDLGtCQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixDQURGLEVBSUU7QUFBTSxhQUFTLEVBQUMsa0JBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLG1EQUFEO0FBQ0UsZ0JBQVksRUFBRSxDQURoQjtBQUVFLGlCQUFhLEVBQUUsQ0FGakI7QUFHRSxjQUFVLE1BSFosQ0FJRTtBQUpGO0FBS0UsYUFBUyxFQUFFO0FBQUVDLGVBQVMsRUFBRTtBQUFiLEtBTGI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQU9HQyx5REFBWSxDQUFDQyxHQUFiLENBQWlCLFVBQVVDLE9BQVYsRUFBbUI7QUFDbkMsV0FDRSxNQUFDLHdEQUFEO0FBQWEsU0FBRyxFQUFFQSxPQUFPLENBQUNDLElBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRSxNQUFDLGdEQUFEO0FBQVMsaUJBQVcsRUFBRUQsT0FBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURGLENBREY7QUFLRCxHQU5BLENBUEgsQ0FERixDQUpGLEVBcUJFO0FBQU0sYUFBUyxFQUFDLGtCQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dGLHlEQUFZLENBQUNDLEdBQWIsQ0FBaUIsVUFBVUMsT0FBVixFQUFtQjtBQUNuQyxXQUNFO0FBQUssZUFBUyxFQUFDLE1BQWY7QUFBc0IsU0FBRyxFQUFFQSxPQUFPLENBQUNDLElBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRSxNQUFDLGdEQUFEO0FBQVMsaUJBQVcsRUFBRUQsT0FBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURGLENBREY7QUFLRCxHQU5BLENBREgsQ0FyQkYsQ0FERjtBQWlDRCxDQWxDRDs7S0FBTUosTTtBQW9DU0EscUVBQWYiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9teVdvcmsvbXlXb3JrLmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IFN3aXBlckNvcmUsIHsgTmF2aWdhdGlvbiwgUGFnaW5hdGlvbiwgU2Nyb2xsYmFyLCBBMTF5IH0gZnJvbSBcInN3aXBlclwiO1xuaW1wb3J0IHsgU3dpcGVyLCBTd2lwZXJTbGlkZSB9IGZyb20gXCJzd2lwZXIvcmVhY3RcIjtcblxuU3dpcGVyQ29yZS51c2UoW05hdmlnYXRpb24sIFBhZ2luYXRpb24sIFNjcm9sbGJhciwgQTExeV0pO1xuXG5pbXBvcnQgeyBQcm9qZWN0c0RhdGEgfSBmcm9tIFwiLi9wcm9qZWN0RGF0YVwiO1xuaW1wb3J0IHsgUHJvamVjdCB9IGZyb20gXCIuL3Byb2plY3RcIjtcblxuY29uc3QgTXlXb3JrID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctZ3JheS01MDAgcHktMTAgbWQ6cHgtNCBcIiBpZD1cIm15LXdvcmtcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC01eGwgbWQ6dGV4dC02eGxcIj5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwibWItNSB0ZXh0LWNlbnRlclwiPk15IFdvcms8L3A+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImhpZGRlbiBtZDpibG9jayBcIj5cbiAgICAgICAgPFN3aXBlclxuICAgICAgICAgIHNwYWNlQmV0d2Vlbj17MX1cbiAgICAgICAgICBzbGlkZXNQZXJWaWV3PXsxfVxuICAgICAgICAgIG5hdmlnYXRpb25cbiAgICAgICAgICAvLyBwYWdpbmF0aW9uPXt7IGNsaWNrYWJsZTogdHJ1ZSB9fVxuICAgICAgICAgIHNjcm9sbGJhcj17eyBkcmFnZ2FibGU6IHRydWUgfX1cbiAgICAgICAgPlxuICAgICAgICAgIHtQcm9qZWN0c0RhdGEubWFwKGZ1bmN0aW9uIChwcm9qZWN0KSB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8U3dpcGVyU2xpZGUga2V5PXtwcm9qZWN0Lm5hbWV9PlxuICAgICAgICAgICAgICAgIDxQcm9qZWN0IHByb2plY3REYXRhPXtwcm9qZWN0fSAvPlxuICAgICAgICAgICAgICA8L1N3aXBlclNsaWRlPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC9Td2lwZXI+XG4gICAgICA8L3NwYW4+XG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCJibG9jayBtZDpoaWRkZW4gXCI+XG4gICAgICAgIHtQcm9qZWN0c0RhdGEubWFwKGZ1bmN0aW9uIChwcm9qZWN0KSB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXktMlwiIGtleT17cHJvamVjdC5uYW1lfT5cbiAgICAgICAgICAgICAgPFByb2plY3QgcHJvamVjdERhdGE9e3Byb2plY3R9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApO1xuICAgICAgICB9KX1cbiAgICAgIDwvc3Bhbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE15V29yaztcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/myWork/myWork.jsx\n");

/***/ })

})