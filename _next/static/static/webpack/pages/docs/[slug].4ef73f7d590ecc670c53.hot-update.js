webpackHotUpdate_N_E("pages/docs/[slug]",{

/***/ "./layout/Sidebar.js":
/*!***************************!*\
  !*** ./layout/Sidebar.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Sidebar; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"/Users/nithinkashyap/code/docs/upi-deep-links/layout/Sidebar.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nfunction Sidebar(_ref) {\n  var hidden = _ref.hidden,\n      onClick = _ref.onClick;\n  return __jsx(\"aside\", {\n    className: \"h-full bg-white flex-shrink-0 w-full md:w-64 md:border-r md:block fixed md:sticky z-10 \".concat(hidden ? 'hidden' : ''),\n    style: {\n      top: '4rem',\n      height: 'calc(100vh - 4rem)'\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    className: \"w-full h-full p-4 pb-40 md:mb-16 overflow-y-auto\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 13\n    }\n  }, __jsx(\"ul\", {\n    onClick: onClick,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 17\n    }\n  }, __jsx(NavLink, {\n    href: \"/docs/getting-started\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 21\n    }\n  }, \"Getting Started\"), __jsx(NavLink, {\n    href: \"/docs/usage\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 21\n    }\n  }, \"About\"))));\n}\n_c = Sidebar;\n\nfunction NavLink(_ref2) {\n  _s();\n\n  var href = _ref2.href,\n      children = _ref2.children;\n\n  var _useRouter = Object(next_router__WEBPACK_IMPORTED_MODULE_2__[\"useRouter\"])(),\n      asPath = _useRouter.asPath;\n\n  var active = asPath == href;\n  return __jsx(\"li\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 9\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    href: \"/docs/[slug]\",\n    as: href,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 13\n    }\n  }, __jsx(\"a\", {\n    className: \"p-2 hover:bg-blue-100 block \".concat(active ? 'font-bold text-gray-800' : 'text-gray-600'),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 17\n    }\n  }, children)));\n}\n\n_s(NavLink, \"9pMG9Ra3x5O/yaZiUz6XxVJ+Rds=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_2__[\"useRouter\"]];\n});\n\n_c2 = NavLink;\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Sidebar\");\n$RefreshReg$(_c2, \"NavLink\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGF5b3V0L1NpZGViYXIuanM/ZGE3NyJdLCJuYW1lcyI6WyJTaWRlYmFyIiwiaGlkZGVuIiwib25DbGljayIsInRvcCIsImhlaWdodCIsIk5hdkxpbmsiLCJocmVmIiwiY2hpbGRyZW4iLCJ1c2VSb3V0ZXIiLCJhc1BhdGgiLCJhY3RpdmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRWUsU0FBU0EsT0FBVCxPQUFzQztBQUFBLE1BQW5CQyxNQUFtQixRQUFuQkEsTUFBbUI7QUFBQSxNQUFYQyxPQUFXLFFBQVhBLE9BQVc7QUFDakQsU0FDSTtBQUNJLGFBQVMsbUdBQ0xELE1BQU0sR0FBRyxRQUFILEdBQWMsRUFEZixDQURiO0FBSUksU0FBSyxFQUFFO0FBQUVFLFNBQUcsRUFBRSxNQUFQO0FBQWVDLFlBQU0sRUFBRTtBQUF2QixLQUpYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FNSTtBQUFLLGFBQVMsRUFBQyxrREFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSSxXQUFPLEVBQUVGLE9BQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsT0FBRDtBQUFTLFFBQUksRUFBQyx1QkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURKLEVBSUksTUFBQyxPQUFEO0FBQVMsUUFBSSxFQUFDLGFBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUpKLENBREosQ0FOSixDQURKO0FBaUJIO0tBbEJ1QkYsTzs7QUFvQnhCLFNBQVNLLE9BQVQsUUFBcUM7QUFBQTs7QUFBQSxNQUFsQkMsSUFBa0IsU0FBbEJBLElBQWtCO0FBQUEsTUFBWkMsUUFBWSxTQUFaQSxRQUFZOztBQUFBLG1CQUNkQyw2REFBUyxFQURLO0FBQUEsTUFDekJDLE1BRHlCLGNBQ3pCQSxNQUR5Qjs7QUFHakMsTUFBTUMsTUFBTSxHQUFHRCxNQUFNLElBQUlILElBQXpCO0FBRUEsU0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBQyxjQUFYO0FBQTBCLE1BQUUsRUFBRUEsSUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQ0ksYUFBUyx3Q0FDTEksTUFBTSxHQUFHLHlCQUFILEdBQStCLGVBRGhDLENBRGI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUtLSCxRQUxMLENBREosQ0FESixDQURKO0FBYUg7O0dBbEJRRixPO1VBQ2NHLHFEOzs7TUFEZEgsTyIsImZpbGUiOiIuL2xheW91dC9TaWRlYmFyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2lkZWJhcih7IGhpZGRlbiwgb25DbGljayB9KSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGFzaWRlXG4gICAgICAgICAgICBjbGFzc05hbWU9e2BoLWZ1bGwgYmctd2hpdGUgZmxleC1zaHJpbmstMCB3LWZ1bGwgbWQ6dy02NCBtZDpib3JkZXItciBtZDpibG9jayBmaXhlZCBtZDpzdGlja3kgei0xMCAke1xuICAgICAgICAgICAgICAgIGhpZGRlbiA/ICdoaWRkZW4nIDogJydcbiAgICAgICAgICAgIH1gfVxuICAgICAgICAgICAgc3R5bGU9e3sgdG9wOiAnNHJlbScsIGhlaWdodDogJ2NhbGMoMTAwdmggLSA0cmVtKScgfX1cbiAgICAgICAgPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgaC1mdWxsIHAtNCBwYi00MCBtZDptYi0xNiBvdmVyZmxvdy15LWF1dG9cIj5cbiAgICAgICAgICAgICAgICA8dWwgb25DbGljaz17b25DbGlja30+XG4gICAgICAgICAgICAgICAgICAgIDxOYXZMaW5rIGhyZWY9XCIvZG9jcy9nZXR0aW5nLXN0YXJ0ZWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIEdldHRpbmcgU3RhcnRlZFxuICAgICAgICAgICAgICAgICAgICA8L05hdkxpbms+XG4gICAgICAgICAgICAgICAgICAgIDxOYXZMaW5rIGhyZWY9XCIvZG9jcy91c2FnZVwiPkFib3V0PC9OYXZMaW5rPlxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9hc2lkZT5cbiAgICApO1xufVxuXG5mdW5jdGlvbiBOYXZMaW5rKHsgaHJlZiwgY2hpbGRyZW4gfSkge1xuICAgIGNvbnN0IHsgYXNQYXRoIH0gPSB1c2VSb3V0ZXIoKTtcblxuICAgIGNvbnN0IGFjdGl2ZSA9IGFzUGF0aCA9PSBocmVmO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGxpPlxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9kb2NzL1tzbHVnXVwiIGFzPXtocmVmfT5cbiAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BwLTIgaG92ZXI6YmctYmx1ZS0xMDAgYmxvY2sgJHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZSA/ICdmb250LWJvbGQgdGV4dC1ncmF5LTgwMCcgOiAndGV4dC1ncmF5LTYwMCdcbiAgICAgICAgICAgICAgICAgICAgfWB9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L2xpPlxuICAgICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./layout/Sidebar.js\n");

/***/ })

})