webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/myWork/myWork.jsx":
/*!******************************************!*\
  !*** ./src/components/myWork/myWork.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper */ \"./node_modules/swiper/swiper.esm.js\");\n/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swiper/react */ \"./node_modules/swiper/swiper-react.esm.js\");\n/* harmony import */ var _projectData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./projectData */ \"./src/components/myWork/projectData.jsx\");\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./project */ \"./src/components/myWork/project.jsx\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/bencooper/personal-website-v4/src/components/myWork/myWork.jsx\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nswiper__WEBPACK_IMPORTED_MODULE_1__[\"default\"].use([swiper__WEBPACK_IMPORTED_MODULE_1__[\"Navigation\"], swiper__WEBPACK_IMPORTED_MODULE_1__[\"Pagination\"], swiper__WEBPACK_IMPORTED_MODULE_1__[\"Scrollbar\"], swiper__WEBPACK_IMPORTED_MODULE_1__[\"A11y\"]]);\n\n\n\nvar MyWork = function MyWork() {\n  return __jsx(\"div\", {\n    className: \"bg-gray-700 py-10 md:px-4 \",\n    id: \"my-work\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    className: \"text-5xl md:text-6xl\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 7\n    }\n  }, __jsx(\"p\", {\n    className: \"mb-5 text-center\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 9\n    }\n  }, \"My Work\")), __jsx(\"span\", {\n    className: \"hidden md:block\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 7\n    }\n  }, __jsx(swiper_react__WEBPACK_IMPORTED_MODULE_2__[\"Swiper\"], {\n    spaceBetween: 0.5,\n    slidesPerView: 1,\n    navigation: true,\n    pagination: {\n      clickable: true\n    } // scrollbar={{ draggable: true }}\n    ,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 9\n    }\n  }, _projectData__WEBPACK_IMPORTED_MODULE_3__[\"ProjectsData\"].map(function (project) {\n    return __jsx(swiper_react__WEBPACK_IMPORTED_MODULE_2__[\"SwiperSlide\"], {\n      key: project.name,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 27,\n        columnNumber: 15\n      }\n    }, __jsx(\"div\", {\n      className: \"mx-auto w-5/6\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 17\n      }\n    }, __jsx(_project__WEBPACK_IMPORTED_MODULE_4__[\"Project\"], {\n      projectData: project,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 19\n      }\n    })));\n  }))), __jsx(\"span\", {\n    className: \"block md:hidden \",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 7\n    }\n  }, _projectData__WEBPACK_IMPORTED_MODULE_3__[\"ProjectsData\"].map(function (project) {\n    return __jsx(\"div\", {\n      className: \"my-2\",\n      key: project.name,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 39,\n        columnNumber: 13\n      }\n    }, __jsx(_project__WEBPACK_IMPORTED_MODULE_4__[\"Project\"], {\n      projectData: project,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 40,\n        columnNumber: 15\n      }\n    }));\n  })));\n};\n\n_c = MyWork;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyWork);\n\nvar _c;\n\n$RefreshReg$(_c, \"MyWork\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvbXlXb3JrL215V29yay5qc3g/NzBmMiJdLCJuYW1lcyI6WyJTd2lwZXJDb3JlIiwidXNlIiwiTmF2aWdhdGlvbiIsIlBhZ2luYXRpb24iLCJTY3JvbGxiYXIiLCJBMTF5IiwiTXlXb3JrIiwiY2xpY2thYmxlIiwiUHJvamVjdHNEYXRhIiwibWFwIiwicHJvamVjdCIsIm5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBRUFBLDhDQUFVLENBQUNDLEdBQVgsQ0FBZSxDQUFDQyxpREFBRCxFQUFhQyxpREFBYixFQUF5QkMsZ0RBQXpCLEVBQW9DQywyQ0FBcEMsQ0FBZjtBQUVBO0FBQ0E7O0FBRUEsSUFBTUMsTUFBTSxHQUFHLFNBQVRBLE1BQVMsR0FBTTtBQUNuQixTQUNFO0FBQUssYUFBUyxFQUFDLDRCQUFmO0FBQTRDLE1BQUUsRUFBQyxTQUEvQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsc0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUcsYUFBUyxFQUFDLGtCQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixDQURGLEVBSUU7QUFBTSxhQUFTLEVBQUMsaUJBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLG1EQUFEO0FBQ0UsZ0JBQVksRUFBRSxHQURoQjtBQUVFLGlCQUFhLEVBQUUsQ0FGakI7QUFHRSxjQUFVLE1BSFo7QUFJRSxjQUFVLEVBQUU7QUFBRUMsZUFBUyxFQUFFO0FBQWIsS0FKZCxDQUtFO0FBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQU9HQyx5REFBWSxDQUFDQyxHQUFiLENBQWlCLFVBQVVDLE9BQVYsRUFBbUI7QUFDbkMsV0FDRSxNQUFDLHdEQUFEO0FBQWEsU0FBRyxFQUFFQSxPQUFPLENBQUNDLElBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFLLGVBQVMsRUFBQyxlQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRSxNQUFDLGdEQUFEO0FBQVMsaUJBQVcsRUFBRUQsT0FBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURGLENBREYsQ0FERjtBQU9ELEdBUkEsQ0FQSCxDQURGLENBSkYsRUF1QkU7QUFBTSxhQUFTLEVBQUMsa0JBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR0YseURBQVksQ0FBQ0MsR0FBYixDQUFpQixVQUFVQyxPQUFWLEVBQW1CO0FBQ25DLFdBQ0U7QUFBSyxlQUFTLEVBQUMsTUFBZjtBQUFzQixTQUFHLEVBQUVBLE9BQU8sQ0FBQ0MsSUFBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFLE1BQUMsZ0RBQUQ7QUFBUyxpQkFBVyxFQUFFRCxPQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREYsQ0FERjtBQUtELEdBTkEsQ0FESCxDQXZCRixDQURGO0FBbUNELENBcENEOztLQUFNSixNO0FBc0NTQSxxRUFBZiIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL215V29yay9teVdvcmsuanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgU3dpcGVyQ29yZSwgeyBOYXZpZ2F0aW9uLCBQYWdpbmF0aW9uLCBTY3JvbGxiYXIsIEExMXkgfSBmcm9tIFwic3dpcGVyXCI7XG5pbXBvcnQgeyBTd2lwZXIsIFN3aXBlclNsaWRlIH0gZnJvbSBcInN3aXBlci9yZWFjdFwiO1xuXG5Td2lwZXJDb3JlLnVzZShbTmF2aWdhdGlvbiwgUGFnaW5hdGlvbiwgU2Nyb2xsYmFyLCBBMTF5XSk7XG5cbmltcG9ydCB7IFByb2plY3RzRGF0YSB9IGZyb20gXCIuL3Byb2plY3REYXRhXCI7XG5pbXBvcnQgeyBQcm9qZWN0IH0gZnJvbSBcIi4vcHJvamVjdFwiO1xuXG5jb25zdCBNeVdvcmsgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJiZy1ncmF5LTcwMCBweS0xMCBtZDpweC00IFwiIGlkPVwibXktd29ya1wiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LTV4bCBtZDp0ZXh0LTZ4bFwiPlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJtYi01IHRleHQtY2VudGVyXCI+TXkgV29yazwvcD5cbiAgICAgIDwvZGl2PlxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaGlkZGVuIG1kOmJsb2NrXCI+XG4gICAgICAgIDxTd2lwZXJcbiAgICAgICAgICBzcGFjZUJldHdlZW49ezAuNX1cbiAgICAgICAgICBzbGlkZXNQZXJWaWV3PXsxfVxuICAgICAgICAgIG5hdmlnYXRpb25cbiAgICAgICAgICBwYWdpbmF0aW9uPXt7IGNsaWNrYWJsZTogdHJ1ZSB9fVxuICAgICAgICAgIC8vIHNjcm9sbGJhcj17eyBkcmFnZ2FibGU6IHRydWUgfX1cbiAgICAgICAgPlxuICAgICAgICAgIHtQcm9qZWN0c0RhdGEubWFwKGZ1bmN0aW9uIChwcm9qZWN0KSB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8U3dpcGVyU2xpZGUga2V5PXtwcm9qZWN0Lm5hbWV9PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXgtYXV0byB3LTUvNlwiPlxuICAgICAgICAgICAgICAgICAgPFByb2plY3QgcHJvamVjdERhdGE9e3Byb2plY3R9IC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvU3dpcGVyU2xpZGU+XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0pfVxuICAgICAgICA8L1N3aXBlcj5cbiAgICAgIDwvc3Bhbj5cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJsb2NrIG1kOmhpZGRlbiBcIj5cbiAgICAgICAge1Byb2plY3RzRGF0YS5tYXAoZnVuY3Rpb24gKHByb2plY3QpIHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteS0yXCIga2V5PXtwcm9qZWN0Lm5hbWV9PlxuICAgICAgICAgICAgICA8UHJvamVjdCBwcm9qZWN0RGF0YT17cHJvamVjdH0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICk7XG4gICAgICAgIH0pfVxuICAgICAgPC9zcGFuPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTXlXb3JrO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/myWork/myWork.jsx\n");

/***/ })

})