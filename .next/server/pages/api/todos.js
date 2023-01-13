"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/todos";
exports.ids = ["pages/api/todos"];
exports.modules = {

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "(api)/./pages/api/todos.ts":
/*!****************************!*\
  !*** ./pages/api/todos.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res) => {\n  const fs = __webpack_require__(/*! fs */ \"fs\");\n\n  if (req.method === \"GET\") {\n    try {\n      const todosBuffer = fs.readFileSync(\"data/todos.json\");\n      const todosString = todosBuffer.toString();\n\n      if (!todosString) {\n        res.statusCode = 200;\n        res.send([]);\n      }\n\n      const todos = JSON.parse(todosString);\n      res.statusCode = 200;\n      return res.send(todos);\n    } catch (e) {\n      console.log(e);\n      res.statusCode = 500;\n      res.send(e);\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdG9kb3MudHMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUdBLGlFQUFlLE9BQU9BLEdBQVAsRUFBMEJDLEdBQTFCLEtBQWdEO0VBQzNELE1BQU1DLEVBQUUsR0FBR0MsbUJBQU8sQ0FBQyxjQUFELENBQWxCOztFQUNBLElBQUdILEdBQUcsQ0FBQ0ksTUFBSixLQUFhLEtBQWhCLEVBQXNCO0lBQ2xCLElBQUc7TUFDQyxNQUFNQyxXQUFXLEdBQUdILEVBQUUsQ0FBQ0ksWUFBSCxDQUFnQixpQkFBaEIsQ0FBcEI7TUFDQSxNQUFNQyxXQUFXLEdBQUdGLFdBQVcsQ0FBQ0csUUFBWixFQUFwQjs7TUFDQSxJQUFHLENBQUNELFdBQUosRUFBZ0I7UUFDWk4sR0FBRyxDQUFDUSxVQUFKLEdBQWUsR0FBZjtRQUNBUixHQUFHLENBQUNTLElBQUosQ0FBUyxFQUFUO01BQ0g7O01BQ0QsTUFBTUMsS0FBZ0IsR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVdOLFdBQVgsQ0FBekI7TUFDQU4sR0FBRyxDQUFDUSxVQUFKLEdBQWlCLEdBQWpCO01BQ0EsT0FBT1IsR0FBRyxDQUFDUyxJQUFKLENBQVNDLEtBQVQsQ0FBUDtJQUNILENBVkQsQ0FVQyxPQUFNRyxDQUFOLEVBQVE7TUFDTEMsT0FBTyxDQUFDQyxHQUFSLENBQVlGLENBQVo7TUFDQWIsR0FBRyxDQUFDUSxVQUFKLEdBQWlCLEdBQWpCO01BQ0FSLEdBQUcsQ0FBQ1MsSUFBSixDQUFTSSxDQUFUO0lBQ0g7RUFFSjtBQUNKLENBcEJEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dC10b2RvLy4vcGFnZXMvYXBpL3RvZG9zLnRzP2RiODUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dEFwaVJlcXVlc3QsTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSBcIm5leHRcIjtcclxuaW1wb3J0IHsgVG9kb1R5cGUgfSBmcm9tIFwiLi4vLi4vdHlwZXMvdG9kb1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgKHJlcTpOZXh0QXBpUmVxdWVzdCxyZXM6TmV4dEFwaVJlc3BvbnNlKT0+e1xyXG4gICAgY29uc3QgZnMgPSByZXF1aXJlKFwiZnNcIilcclxuICAgIGlmKHJlcS5tZXRob2Q9PT1cIkdFVFwiKXtcclxuICAgICAgICB0cnl7XHJcbiAgICAgICAgICAgIGNvbnN0IHRvZG9zQnVmZmVyID0gZnMucmVhZEZpbGVTeW5jKFwiZGF0YS90b2Rvcy5qc29uXCIpO1xyXG4gICAgICAgICAgICBjb25zdCB0b2Rvc1N0cmluZyA9IHRvZG9zQnVmZmVyLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgIGlmKCF0b2Rvc1N0cmluZyl7XHJcbiAgICAgICAgICAgICAgICByZXMuc3RhdHVzQ29kZT0yMDA7XHJcbiAgICAgICAgICAgICAgICByZXMuc2VuZChbXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3QgdG9kb3M6VG9kb1R5cGVbXSA9IEpTT04ucGFyc2UodG9kb3NTdHJpbmcpO1xyXG4gICAgICAgICAgICByZXMuc3RhdHVzQ29kZSA9IDIwMDtcclxuICAgICAgICAgICAgcmV0dXJuIHJlcy5zZW5kKHRvZG9zKTtcclxuICAgICAgICB9Y2F0Y2goZSl7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpXHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXNDb2RlID0gNTAwO1xyXG4gICAgICAgICAgICByZXMuc2VuZChlKVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgIH1cclxufSJdLCJuYW1lcyI6WyJyZXEiLCJyZXMiLCJmcyIsInJlcXVpcmUiLCJtZXRob2QiLCJ0b2Rvc0J1ZmZlciIsInJlYWRGaWxlU3luYyIsInRvZG9zU3RyaW5nIiwidG9TdHJpbmciLCJzdGF0dXNDb2RlIiwic2VuZCIsInRvZG9zIiwiSlNPTiIsInBhcnNlIiwiZSIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/todos.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/todos.ts"));
module.exports = __webpack_exports__;

})();