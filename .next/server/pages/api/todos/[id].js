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
exports.id = "pages/api/todos/[id]";
exports.ids = ["pages/api/todos/[id]"];
exports.modules = {

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "(api)/./lib/data/index.ts":
/*!***************************!*\
  !*** ./lib/data/index.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo */ \"(api)/./lib/data/todo.ts\");\n\nconst Data = {\n  todo: _todo__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Data);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvZGF0YS9pbmRleC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBRUEsTUFBTUMsSUFBSSxHQUFHO0VBQUNELElBQUlBLCtDQUFBQTtBQUFMLENBQWI7QUFFQSxpRUFBZUMsSUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL25leHQtdG9kby8uL2xpYi9kYXRhL2luZGV4LnRzP2EyNTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHRvZG8gZnJvbSBcIi4vdG9kb1wiO1xyXG5cclxuY29uc3QgRGF0YSA9IHt0b2RvfTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IERhdGE7Il0sIm5hbWVzIjpbInRvZG8iLCJEYXRhIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./lib/data/index.ts\n");

/***/ }),

/***/ "(api)/./lib/data/todo.ts":
/*!**************************!*\
  !*** ./lib/data/todo.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);\n // 투두리스트 데이터 불러오기\n\nconst getList = () => {\n  const todosBuffer = (0,fs__WEBPACK_IMPORTED_MODULE_0__.readFileSync)(\"data/todos.json\");\n  const todosString = todosBuffer.toString();\n\n  if (!todosString) {\n    return [];\n  }\n\n  const todos = JSON.parse(todosString);\n  return todos;\n}; // id의 투두가 있는지 확인하기\n\n\nconst exist = ({\n  id\n}) => {\n  const todos = getList();\n  const todo = todos.some(todo => todo.id === id);\n  return todo;\n}; // 투두리스트 저장하기\n\n\nconst write = async todos => {\n  (0,fs__WEBPACK_IMPORTED_MODULE_0__.writeFileSync)(\"data/todos.json\", JSON.stringify(todos));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  getList,\n  exist,\n  write\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvZGF0YS90b2RvLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztDQUlBOztBQUNBLE1BQU1FLE9BQU8sR0FBRyxNQUFJO0VBQ1osTUFBTUMsV0FBVyxHQUFHSCxnREFBWSxDQUFDLGlCQUFELENBQWhDO0VBQ0EsTUFBTUksV0FBVyxHQUFHRCxXQUFXLENBQUNFLFFBQVosRUFBcEI7O0VBQ0EsSUFBRyxDQUFDRCxXQUFKLEVBQWdCO0lBQ1osT0FBTyxFQUFQO0VBQ0g7O0VBQ0QsTUFBTUUsS0FBZ0IsR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVdKLFdBQVgsQ0FBekI7RUFDQSxPQUFPRSxLQUFQO0FBQ1AsQ0FSRCxFQVlBOzs7QUFDQSxNQUFNRyxLQUFLLEdBQUcsQ0FBQztFQUFDQztBQUFELENBQUQsS0FBb0I7RUFDOUIsTUFBTUosS0FBSyxHQUFHSixPQUFPLEVBQXJCO0VBQ0EsTUFBTVMsSUFBSSxHQUFHTCxLQUFLLENBQUNNLElBQU4sQ0FBWUQsSUFBRCxJQUFRQSxJQUFJLENBQUNELEVBQUwsS0FBVUEsRUFBN0IsQ0FBYjtFQUNBLE9BQU9DLElBQVA7QUFDSCxDQUpELEVBTUE7OztBQUNBLE1BQU1FLEtBQUssR0FBRyxNQUFPUCxLQUFQLElBQTBCO0VBQ3BDTCxpREFBYSxDQUFDLGlCQUFELEVBQW1CTSxJQUFJLENBQUNPLFNBQUwsQ0FBZVIsS0FBZixDQUFuQixDQUFiO0FBQ0gsQ0FGRDs7QUFLQSxpRUFBZTtFQUFDSixPQUFEO0VBQVNPLEtBQVQ7RUFBZUk7QUFBZixDQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dC10b2RvLy4vbGliL2RhdGEvdG9kby50cz9jZDcxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRBcGlSZXF1ZXN0LE5leHRBcGlSZXNwb25zZSB9IGZyb20gXCJuZXh0XCI7XHJcbmltcG9ydCB7IFRvZG9UeXBlIH0gZnJvbSBcIi4uLy4uL3R5cGVzL3RvZG9cIjtcclxuaW1wb3J0IHsgcmVhZEZpbGVTeW5jLHdyaXRlRmlsZVN5bmMgfSBmcm9tIFwiZnNcIjtcclxuXHJcbi8vIO2IrOuRkOumrOyKpO2KuCDrjbDsnbTthLAg67aI65+s7Jik6riwXHJcbmNvbnN0IGdldExpc3QgPSAoKT0+e1xyXG4gICAgICAgIGNvbnN0IHRvZG9zQnVmZmVyID0gcmVhZEZpbGVTeW5jKFwiZGF0YS90b2Rvcy5qc29uXCIpO1xyXG4gICAgICAgIGNvbnN0IHRvZG9zU3RyaW5nID0gdG9kb3NCdWZmZXIudG9TdHJpbmcoKTtcclxuICAgICAgICBpZighdG9kb3NTdHJpbmcpe1xyXG4gICAgICAgICAgICByZXR1cm4gW107XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHRvZG9zOlRvZG9UeXBlW10gPSBKU09OLnBhcnNlKHRvZG9zU3RyaW5nKTtcclxuICAgICAgICByZXR1cm4gdG9kb3M7XHJcbn1cclxuXHJcblxyXG5cclxuLy8gaWTsnZgg7Yis65GQ6rCAIOyeiOuKlOyngCDtmZXsnbjtlZjquLBcclxuY29uc3QgZXhpc3QgPSAoe2lkfTp7aWQ6bnVtYmVyfSk9PntcclxuICAgIGNvbnN0IHRvZG9zID0gZ2V0TGlzdCgpO1xyXG4gICAgY29uc3QgdG9kbyA9IHRvZG9zLnNvbWUoKHRvZG8pPT50b2RvLmlkPT09aWQpO1xyXG4gICAgcmV0dXJuIHRvZG87XHJcbn1cclxuXHJcbi8vIO2IrOuRkOumrOyKpO2KuCDsoIDsnqXtlZjquLBcclxuY29uc3Qgd3JpdGUgPSBhc3luYyAodG9kb3M6VG9kb1R5cGVbXSk9PntcclxuICAgIHdyaXRlRmlsZVN5bmMoXCJkYXRhL3RvZG9zLmpzb25cIixKU09OLnN0cmluZ2lmeSh0b2RvcykpXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCB7Z2V0TGlzdCxleGlzdCx3cml0ZX07Il0sIm5hbWVzIjpbInJlYWRGaWxlU3luYyIsIndyaXRlRmlsZVN5bmMiLCJnZXRMaXN0IiwidG9kb3NCdWZmZXIiLCJ0b2Rvc1N0cmluZyIsInRvU3RyaW5nIiwidG9kb3MiLCJKU09OIiwicGFyc2UiLCJleGlzdCIsImlkIiwidG9kbyIsInNvbWUiLCJ3cml0ZSIsInN0cmluZ2lmeSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./lib/data/todo.ts\n");

/***/ }),

/***/ "(api)/./pages/api/todos/[id].ts":
/*!*********************************!*\
  !*** ./pages/api/todos/[id].ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _lib_data_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../lib/data/index */ \"(api)/./lib/data/index.ts\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res) => {\n  if (req.method === \"PATCH\") {\n    try {\n      const todoId = Number(req.query.id);\n      const todo = _lib_data_index__WEBPACK_IMPORTED_MODULE_0__[\"default\"].todo.exist({\n        id: todoId\n      });\n\n      if (!todo) {\n        // 일치하는 투두 아이템이 없다면\n        res.statusCode = 404;\n        res.end();\n      }\n\n      const todos = await _lib_data_index__WEBPACK_IMPORTED_MODULE_0__[\"default\"].todo.getList();\n      const changedTodos = todos.map(todo => {\n        if (todo.id === todoId) {\n          return _objectSpread(_objectSpread({}, todo), {}, {\n            checked: !todo.checked\n          });\n        }\n\n        return todo;\n      });\n      _lib_data_index__WEBPACK_IMPORTED_MODULE_0__[\"default\"].todo.write(changedTodos);\n      res.statusCode = 200;\n      return res.end();\n    } catch (e) {\n      console.log(e);\n      res.statusCode = 500;\n      res.send(e);\n    }\n  }\n\n  res.statusCode = 405;\n  return res.end();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdG9kb3MvW2lkXS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUVBO0FBRUEsaUVBQWUsT0FBT0MsR0FBUCxFQUEwQkMsR0FBMUIsS0FBZ0Q7RUFDM0QsSUFBR0QsR0FBRyxDQUFDRSxNQUFKLEtBQWEsT0FBaEIsRUFBd0I7SUFDcEIsSUFBRztNQUNDLE1BQU1DLE1BQU0sR0FBR0MsTUFBTSxDQUFDSixHQUFHLENBQUNLLEtBQUosQ0FBVUMsRUFBWCxDQUFyQjtNQUNBLE1BQU1DLElBQUksR0FBR1Isa0VBQUEsQ0FBZ0I7UUFBQ08sRUFBRSxFQUFDSDtNQUFKLENBQWhCLENBQWI7O01BQ0EsSUFBRyxDQUFDSSxJQUFKLEVBQVM7UUFBRTtRQUNQTixHQUFHLENBQUNRLFVBQUosR0FBaUIsR0FBakI7UUFDQVIsR0FBRyxDQUFDUyxHQUFKO01BQ0g7O01BQ0QsTUFBTUMsS0FBSyxHQUFHLE1BQU1aLG9FQUFBLEVBQXBCO01BQ0EsTUFBTWMsWUFBWSxHQUFHRixLQUFLLENBQUNHLEdBQU4sQ0FBV1AsSUFBRCxJQUFRO1FBQ25DLElBQUdBLElBQUksQ0FBQ0QsRUFBTCxLQUFVSCxNQUFiLEVBQW9CO1VBQ2hCLHVDQUFXSSxJQUFYO1lBQWdCUSxPQUFPLEVBQUcsQ0FBQ1IsSUFBSSxDQUFDUTtVQUFoQztRQUNIOztRQUNELE9BQU9SLElBQVA7TUFDSCxDQUxvQixDQUFyQjtNQU1BUixrRUFBQSxDQUFnQmMsWUFBaEI7TUFDQVosR0FBRyxDQUFDUSxVQUFKLEdBQWlCLEdBQWpCO01BQ0EsT0FBT1IsR0FBRyxDQUFDUyxHQUFKLEVBQVA7SUFDSCxDQWpCRCxDQWlCQyxPQUFNTyxDQUFOLEVBQVE7TUFDTEMsT0FBTyxDQUFDQyxHQUFSLENBQVlGLENBQVo7TUFDQWhCLEdBQUcsQ0FBQ1EsVUFBSixHQUFpQixHQUFqQjtNQUNBUixHQUFHLENBQUNtQixJQUFKLENBQVNILENBQVQ7SUFDSDtFQUNKOztFQUNEaEIsR0FBRyxDQUFDUSxVQUFKLEdBQWlCLEdBQWpCO0VBQ0EsT0FBT1IsR0FBRyxDQUFDUyxHQUFKLEVBQVA7QUFDSCxDQTNCRCIsInNvdXJjZXMiOlsid2VicGFjazovL25leHQtdG9kby8uL3BhZ2VzL2FwaS90b2Rvcy9baWRdLnRzPzdiOTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dEFwaVJlcXVlc3QsTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSBcIm5leHRcIjtcclxuaW1wb3J0IHsgVG9kb1R5cGUgfSBmcm9tIFwiLi4vLi4vLi4vdHlwZXMvdG9kb1wiO1xyXG5pbXBvcnQgRGF0YSBmcm9tICcuLy4uLy4uLy4uL2xpYi9kYXRhL2luZGV4JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChyZXE6TmV4dEFwaVJlcXVlc3QscmVzOk5leHRBcGlSZXNwb25zZSk9PntcclxuICAgIGlmKHJlcS5tZXRob2Q9PT1cIlBBVENIXCIpe1xyXG4gICAgICAgIHRyeXtcclxuICAgICAgICAgICAgY29uc3QgdG9kb0lkID0gTnVtYmVyKHJlcS5xdWVyeS5pZCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHRvZG8gPSBEYXRhLnRvZG8uZXhpc3Qoe2lkOnRvZG9JZH0pO1xyXG4gICAgICAgICAgICBpZighdG9kbyl7IC8vIOydvOy5mO2VmOuKlCDtiKzrkZAg7JWE7J207YWc7J20IOyXhuuLpOuptFxyXG4gICAgICAgICAgICAgICAgcmVzLnN0YXR1c0NvZGUgPSA0MDQ7XHJcbiAgICAgICAgICAgICAgICByZXMuZW5kKCk7XHJcbiAgICAgICAgICAgIH0gXHJcbiAgICAgICAgICAgIGNvbnN0IHRvZG9zID0gYXdhaXQgRGF0YS50b2RvLmdldExpc3QoKTtcclxuICAgICAgICAgICAgY29uc3QgY2hhbmdlZFRvZG9zID0gdG9kb3MubWFwKCh0b2RvKT0+e1xyXG4gICAgICAgICAgICAgICAgaWYodG9kby5pZD09PXRvZG9JZCl7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHsuLi50b2RvLGNoZWNrZWQgOiAhdG9kby5jaGVja2VkfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRvZG87XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIERhdGEudG9kby53cml0ZShjaGFuZ2VkVG9kb3MpO1xyXG4gICAgICAgICAgICByZXMuc3RhdHVzQ29kZSA9IDIwMDtcclxuICAgICAgICAgICAgcmV0dXJuIHJlcy5lbmQoKVxyXG4gICAgICAgIH1jYXRjaChlKXtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZSlcclxuICAgICAgICAgICAgcmVzLnN0YXR1c0NvZGUgPSA1MDA7XHJcbiAgICAgICAgICAgIHJlcy5zZW5kKGUpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmVzLnN0YXR1c0NvZGUgPSA0MDU7XHJcbiAgICByZXR1cm4gcmVzLmVuZCgpO1xyXG59Il0sIm5hbWVzIjpbIkRhdGEiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJ0b2RvSWQiLCJOdW1iZXIiLCJxdWVyeSIsImlkIiwidG9kbyIsImV4aXN0Iiwic3RhdHVzQ29kZSIsImVuZCIsInRvZG9zIiwiZ2V0TGlzdCIsImNoYW5nZWRUb2RvcyIsIm1hcCIsImNoZWNrZWQiLCJ3cml0ZSIsImUiLCJjb25zb2xlIiwibG9nIiwic2VuZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/todos/[id].ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/todos/[id].ts"));
module.exports = __webpack_exports__;

})();