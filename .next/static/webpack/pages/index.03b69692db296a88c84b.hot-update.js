webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/myWork/myWork.jsx":
/*!******************************************!*\
  !*** ./src/components/myWork/myWork.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper */ \"./node_modules/swiper/swiper.esm.js\");\n/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swiper/react */ \"./node_modules/swiper/swiper-react.esm.js\");\n/* harmony import */ var _projectData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./projectData */ \"./src/components/myWork/projectData.jsx\");\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./project */ \"./src/components/myWork/project.jsx\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/bencooper/personal-website-v4/src/components/myWork/myWork.jsx\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nswiper__WEBPACK_IMPORTED_MODULE_1__[\"default\"].use([swiper__WEBPACK_IMPORTED_MODULE_1__[\"Navigation\"], swiper__WEBPACK_IMPORTED_MODULE_1__[\"Pagination\"], swiper__WEBPACK_IMPORTED_MODULE_1__[\"Scrollbar\"], swiper__WEBPACK_IMPORTED_MODULE_1__[\"A11y\"]]);\n\n\n\nvar MyWork = function MyWork() {\n  return __jsx(\"div\", {\n    className: \"bg-gray-500 px-4 py-10 md:py-40 w-full\",\n    id: \"my-work\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 5\n    }\n  }, __jsx(\"span\", {\n    className: \"hidden md:block bg-gray-300\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 7\n    }\n  }, __jsx(swiper_react__WEBPACK_IMPORTED_MODULE_2__[\"Swiper\"], {\n    spaceBetween: 0.5,\n    slidesPerView: 1.2,\n    navigation: true // pagination={{ clickable: true }}\n    ,\n    scrollbar: {\n      draggable: true\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 9\n    }\n  }, _projectData__WEBPACK_IMPORTED_MODULE_3__[\"ProjectsData\"].map(function (project) {\n    return __jsx(swiper_react__WEBPACK_IMPORTED_MODULE_2__[\"SwiperSlide\"], {\n      key: project.name,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 24,\n        columnNumber: 15\n      }\n    }, __jsx(_project__WEBPACK_IMPORTED_MODULE_4__[\"Project\"], {\n      projectData: project,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 25,\n        columnNumber: 17\n      }\n    }));\n  }))), __jsx(\"span\", {\n    className: \"block md:hidden bg-gray-300\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 7\n    }\n  }, _projectData__WEBPACK_IMPORTED_MODULE_3__[\"ProjectsData\"].map(function (project) {\n    return __jsx(\"div\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 34,\n        columnNumber: 13\n      }\n    }, __jsx(_project__WEBPACK_IMPORTED_MODULE_4__[\"Project\"], {\n      key: project.name,\n      projectData: project,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 15\n      }\n    }), \" \");\n  })));\n};\n\n_c = MyWork;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyWork);\n\nvar _c;\n\n$RefreshReg$(_c, \"MyWork\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvbXlXb3JrL215V29yay5qc3g/NzBmMiJdLCJuYW1lcyI6WyJTd2lwZXJDb3JlIiwidXNlIiwiTmF2aWdhdGlvbiIsIlBhZ2luYXRpb24iLCJTY3JvbGxiYXIiLCJBMTF5IiwiTXlXb3JrIiwiZHJhZ2dhYmxlIiwiUHJvamVjdHNEYXRhIiwibWFwIiwicHJvamVjdCIsIm5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBRUFBLDhDQUFVLENBQUNDLEdBQVgsQ0FBZSxDQUFDQyxpREFBRCxFQUFhQyxpREFBYixFQUF5QkMsZ0RBQXpCLEVBQW9DQywyQ0FBcEMsQ0FBZjtBQUVBO0FBQ0E7O0FBRUEsSUFBTUMsTUFBTSxHQUFHLFNBQVRBLE1BQVMsR0FBTTtBQUNuQixTQUNFO0FBQUssYUFBUyxFQUFDLHdDQUFmO0FBQXdELE1BQUUsRUFBQyxTQUEzRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBTSxhQUFTLEVBQUMsNkJBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLG1EQUFEO0FBQ0UsZ0JBQVksRUFBRSxHQURoQjtBQUVFLGlCQUFhLEVBQUUsR0FGakI7QUFHRSxjQUFVLE1BSFosQ0FJRTtBQUpGO0FBS0UsYUFBUyxFQUFFO0FBQUVDLGVBQVMsRUFBRTtBQUFiLEtBTGI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQU9HQyx5REFBWSxDQUFDQyxHQUFiLENBQWlCLFVBQVVDLE9BQVYsRUFBbUI7QUFDbkMsV0FDRSxNQUFDLHdEQUFEO0FBQWEsU0FBRyxFQUFFQSxPQUFPLENBQUNDLElBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRSxNQUFDLGdEQUFEO0FBQVMsaUJBQVcsRUFBRUQsT0FBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURGLENBREY7QUFLRCxHQU5BLENBUEgsQ0FERixDQURGLEVBa0JFO0FBQU0sYUFBUyxFQUFDLDZCQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dGLHlEQUFZLENBQUNDLEdBQWIsQ0FBaUIsVUFBVUMsT0FBVixFQUFtQjtBQUNuQyxXQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRSxNQUFDLGdEQUFEO0FBQVMsU0FBRyxFQUFFQSxPQUFPLENBQUNDLElBQXRCO0FBQTRCLGlCQUFXLEVBQUVELE9BQXpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERixFQUN1RCxHQUR2RCxDQURGO0FBS0QsR0FOQSxDQURILENBbEJGLENBREY7QUE4QkQsQ0EvQkQ7O0tBQU1KLE07QUFpQ1NBLHFFQUFmIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvbXlXb3JrL215V29yay5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCBTd2lwZXJDb3JlLCB7IE5hdmlnYXRpb24sIFBhZ2luYXRpb24sIFNjcm9sbGJhciwgQTExeSB9IGZyb20gXCJzd2lwZXJcIjtcbmltcG9ydCB7IFN3aXBlciwgU3dpcGVyU2xpZGUgfSBmcm9tIFwic3dpcGVyL3JlYWN0XCI7XG5cblN3aXBlckNvcmUudXNlKFtOYXZpZ2F0aW9uLCBQYWdpbmF0aW9uLCBTY3JvbGxiYXIsIEExMXldKTtcblxuaW1wb3J0IHsgUHJvamVjdHNEYXRhIH0gZnJvbSBcIi4vcHJvamVjdERhdGFcIjtcbmltcG9ydCB7IFByb2plY3QgfSBmcm9tIFwiLi9wcm9qZWN0XCI7XG5cbmNvbnN0IE15V29yayA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLWdyYXktNTAwIHB4LTQgcHktMTAgbWQ6cHktNDAgdy1mdWxsXCIgaWQ9XCJteS13b3JrXCI+XG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCJoaWRkZW4gbWQ6YmxvY2sgYmctZ3JheS0zMDBcIj5cbiAgICAgICAgPFN3aXBlclxuICAgICAgICAgIHNwYWNlQmV0d2Vlbj17MC41fVxuICAgICAgICAgIHNsaWRlc1BlclZpZXc9ezEuMn1cbiAgICAgICAgICBuYXZpZ2F0aW9uXG4gICAgICAgICAgLy8gcGFnaW5hdGlvbj17eyBjbGlja2FibGU6IHRydWUgfX1cbiAgICAgICAgICBzY3JvbGxiYXI9e3sgZHJhZ2dhYmxlOiB0cnVlIH19XG4gICAgICAgID5cbiAgICAgICAgICB7UHJvamVjdHNEYXRhLm1hcChmdW5jdGlvbiAocHJvamVjdCkge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPFN3aXBlclNsaWRlIGtleT17cHJvamVjdC5uYW1lfT5cbiAgICAgICAgICAgICAgICA8UHJvamVjdCBwcm9qZWN0RGF0YT17cHJvamVjdH0gLz5cbiAgICAgICAgICAgICAgPC9Td2lwZXJTbGlkZT5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvU3dpcGVyPlxuICAgICAgPC9zcGFuPlxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYmxvY2sgbWQ6aGlkZGVuIGJnLWdyYXktMzAwXCI+XG4gICAgICAgIHtQcm9qZWN0c0RhdGEubWFwKGZ1bmN0aW9uIChwcm9qZWN0KSB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxQcm9qZWN0IGtleT17cHJvamVjdC5uYW1lfSBwcm9qZWN0RGF0YT17cHJvamVjdH0gLz57XCIgXCJ9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApO1xuICAgICAgICB9KX1cbiAgICAgIDwvc3Bhbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE15V29yaztcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/myWork/myWork.jsx\n");

/***/ })

})