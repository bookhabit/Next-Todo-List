"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./store/todo.ts":
/*!***********************!*\
  !*** ./store/todo.ts ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"todoActions\": function() { return /* binding */ todoActions; }\n/* harmony export */ });\n/* harmony import */ var C_Users_lgh12_Desktop_Next_next_todo_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty.js */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reduxjs/toolkit */ \"./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js\");\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0,C_Users_lgh12_Desktop_Next_next_todo_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\n\n\n//* 초기 상태\nvar initialState = {\n  todos: []\n};\nvar todo = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createSlice)({\n  name: \"todo\",\n  initialState: initialState,\n  reducers: {\n    //* 투두 변경하기\n    setTodo: function setTodo(state, action) {\n      state.todo = action.payload;\n    }\n  }\n});\nvar todoActions = _objectSpread({}, todo.actions);\n/* harmony default export */ __webpack_exports__[\"default\"] = (todo);\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdG9yZS90b2RvLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBT0E7QUFDQSxJQUFNQyxZQUE0QixHQUFHO0VBQ25DQyxLQUFLLEVBQUU7QUFENEIsQ0FBckM7QUFJQSxJQUFNQyxJQUFJLEdBQUdILDZEQUFXLENBQUM7RUFDdkJJLElBQUksRUFBRSxNQURpQjtFQUV2QkgsWUFBWSxFQUFaQSxZQUZ1QjtFQUd2QkksUUFBUSxFQUFFO0lBQ1I7SUFDQUMsT0FGUSxtQkFFQUMsS0FGQSxFQUVPQyxNQUZQLEVBRTBDO01BQ2hERCxLQUFLLENBQUNKLElBQU4sR0FBYUssTUFBTSxDQUFDQyxPQUFwQjtJQUNEO0VBSk87QUFIYSxDQUFELENBQXhCO0FBV08sSUFBTUMsV0FBVyxxQkFBUVAsSUFBSSxDQUFDUSxPQUFiLENBQWpCO0FBRVAsK0RBQWVSLElBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUvdG9kby50cz8xOWQ5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVNsaWNlLCBQYXlsb2FkQWN0aW9uIH0gZnJvbSBcIkByZWR1eGpzL3Rvb2xraXRcIjtcclxuaW1wb3J0IHsgVG9kb1R5cGUgfSBmcm9tIFwiLi4vdHlwZXMvdG9kb1wiO1xyXG5cclxuaW50ZXJmYWNlIFRvZG9SZWR1eFN0YXRlIHtcclxuICB0b2RvczogVG9kb1R5cGVbXTtcclxufVxyXG5cclxuLy8qIOy0iOq4sCDsg4Htg5xcclxuY29uc3QgaW5pdGlhbFN0YXRlOiBUb2RvUmVkdXhTdGF0ZSA9IHtcclxuICB0b2RvczogW10sXHJcbn07XHJcblxyXG5jb25zdCB0b2RvID0gY3JlYXRlU2xpY2Uoe1xyXG4gIG5hbWU6IFwidG9kb1wiLFxyXG4gIGluaXRpYWxTdGF0ZSxcclxuICByZWR1Y2Vyczoge1xyXG4gICAgLy8qIO2IrOuRkCDrs4Dqsr3tlZjquLBcclxuICAgIHNldFRvZG8oc3RhdGUsIGFjdGlvbjogUGF5bG9hZEFjdGlvbjxUb2RvVHlwZVtdPikge1xyXG4gICAgICBzdGF0ZS50b2RvID0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICB9LFxyXG4gIH0sXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHRvZG9BY3Rpb25zID0geyAuLi50b2RvLmFjdGlvbnMgfTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHRvZG87Il0sIm5hbWVzIjpbImNyZWF0ZVNsaWNlIiwiaW5pdGlhbFN0YXRlIiwidG9kb3MiLCJ0b2RvIiwibmFtZSIsInJlZHVjZXJzIiwic2V0VG9kbyIsInN0YXRlIiwiYWN0aW9uIiwicGF5bG9hZCIsInRvZG9BY3Rpb25zIiwiYWN0aW9ucyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./store/todo.ts\n"));

/***/ })

});