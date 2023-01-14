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

/***/ "(api)/./pages/api/todos/index.ts":
/*!**********************************!*\
  !*** ./pages/api/todos/index.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _lib_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/data */ \"(api)/./lib/data/index.ts\");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res) => {\n  if (req.method === \"GET\") {\n    try {\n      const todos = _lib_data__WEBPACK_IMPORTED_MODULE_0__[\"default\"].todo.getList();\n      res.statusCode = 200;\n      return res.send(todos);\n    } catch (e) {\n      console.log(e);\n      res.statusCode = 500;\n      res.send(e);\n    }\n  } // 투두추가하기\n\n\n  if (req.method === \"POST\") {\n    //* 값을 받았는지 확인\n    const {\n      text,\n      color\n    } = req.body;\n\n    if (!text || !color) {\n      res.statusCode = 400;\n      return res.send(\"text 혹은 color 가 없습니다.\");\n    }\n\n    const todos = _lib_data__WEBPACK_IMPORTED_MODULE_0__[\"default\"].todo.getList();\n    let todoId;\n\n    if (todos.length > 0) {\n      //* 마지막 투두 id + 1\n      todoId = todos[todos.length - 1].id + 1;\n    } else {\n      todoId = 1;\n    }\n\n    const newTodo = {\n      id: todoId,\n      text,\n      color,\n      checked: false\n    };\n    _lib_data__WEBPACK_IMPORTED_MODULE_0__[\"default\"].todo.write([...todos, newTodo]);\n    res.statusCode = 200;\n    res.end();\n  }\n\n  res.statusCode = 405;\n  return res.end();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdG9kb3MvaW5kZXgudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQTtBQUVBLGlFQUFlLE9BQU9DLEdBQVAsRUFBMEJDLEdBQTFCLEtBQWdEO0VBQzNELElBQUdELEdBQUcsQ0FBQ0UsTUFBSixLQUFhLEtBQWhCLEVBQXNCO0lBQ2xCLElBQUc7TUFDQyxNQUFNQyxLQUFLLEdBQUdKLDhEQUFBLEVBQWQ7TUFDQUUsR0FBRyxDQUFDSyxVQUFKLEdBQWlCLEdBQWpCO01BQ0EsT0FBT0wsR0FBRyxDQUFDTSxJQUFKLENBQVNKLEtBQVQsQ0FBUDtJQUNILENBSkQsQ0FJQyxPQUFNSyxDQUFOLEVBQVE7TUFDTEMsT0FBTyxDQUFDQyxHQUFSLENBQVlGLENBQVo7TUFDQVAsR0FBRyxDQUFDSyxVQUFKLEdBQWlCLEdBQWpCO01BQ0FMLEdBQUcsQ0FBQ00sSUFBSixDQUFTQyxDQUFUO0lBQ0g7RUFDSixDQVgwRCxDQVkzRDs7O0VBQ0EsSUFBSVIsR0FBRyxDQUFDRSxNQUFKLEtBQWUsTUFBbkIsRUFBMkI7SUFDdkI7SUFDQSxNQUFNO01BQUVTLElBQUY7TUFBUUM7SUFBUixJQUFrQlosR0FBRyxDQUFDYSxJQUE1Qjs7SUFDQSxJQUFJLENBQUNGLElBQUQsSUFBUyxDQUFDQyxLQUFkLEVBQXFCO01BQ25CWCxHQUFHLENBQUNLLFVBQUosR0FBaUIsR0FBakI7TUFDQSxPQUFPTCxHQUFHLENBQUNNLElBQUosQ0FBUyx1QkFBVCxDQUFQO0lBQ0Q7O0lBRUQsTUFBTUosS0FBSyxHQUFHSiw4REFBQSxFQUFkO0lBQ0EsSUFBSWUsTUFBSjs7SUFDQSxJQUFJWCxLQUFLLENBQUNZLE1BQU4sR0FBZSxDQUFuQixFQUFzQjtNQUNwQjtNQUNBRCxNQUFNLEdBQUdYLEtBQUssQ0FBQ0EsS0FBSyxDQUFDWSxNQUFOLEdBQWUsQ0FBaEIsQ0FBTCxDQUF3QkMsRUFBeEIsR0FBNkIsQ0FBdEM7SUFDRCxDQUhELE1BR087TUFDTEYsTUFBTSxHQUFHLENBQVQ7SUFDRDs7SUFDRCxNQUFNRyxPQUFPLEdBQUc7TUFDZEQsRUFBRSxFQUFFRixNQURVO01BRWRILElBRmM7TUFHZEMsS0FIYztNQUlkTSxPQUFPLEVBQUU7SUFKSyxDQUFoQjtJQU9BbkIsNERBQUEsQ0FBZ0IsQ0FBQyxHQUFHSSxLQUFKLEVBQVdjLE9BQVgsQ0FBaEI7SUFDQWhCLEdBQUcsQ0FBQ0ssVUFBSixHQUFpQixHQUFqQjtJQUNBTCxHQUFHLENBQUNtQixHQUFKO0VBQ0Q7O0VBQ0huQixHQUFHLENBQUNLLFVBQUosR0FBaUIsR0FBakI7RUFDQSxPQUFPTCxHQUFHLENBQUNtQixHQUFKLEVBQVA7QUFDSCxDQTFDRCIsInNvdXJjZXMiOlsid2VicGFjazovL25leHQtdG9kby8uL3BhZ2VzL2FwaS90b2Rvcy9pbmRleC50cz8wMmQ3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRBcGlSZXF1ZXN0LE5leHRBcGlSZXNwb25zZSB9IGZyb20gXCJuZXh0XCI7XHJcbmltcG9ydCB7IFRvZG9UeXBlIH0gZnJvbSBcIi4uLy4uLy4uL3R5cGVzL3RvZG9cIjtcclxuaW1wb3J0IERhdGEgZnJvbSBcIi4uLy4uLy4uL2xpYi9kYXRhXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyAocmVxOk5leHRBcGlSZXF1ZXN0LHJlczpOZXh0QXBpUmVzcG9uc2UpPT57XHJcbiAgICBpZihyZXEubWV0aG9kPT09XCJHRVRcIil7XHJcbiAgICAgICAgdHJ5e1xyXG4gICAgICAgICAgICBjb25zdCB0b2RvcyA9IERhdGEudG9kby5nZXRMaXN0KCk7XHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXNDb2RlID0gMjAwO1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzLnNlbmQodG9kb3MpXHJcbiAgICAgICAgfWNhdGNoKGUpe1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlKVxyXG4gICAgICAgICAgICByZXMuc3RhdHVzQ29kZSA9IDUwMDtcclxuICAgICAgICAgICAgcmVzLnNlbmQoZSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyDtiKzrkZDstpTqsIDtlZjquLBcclxuICAgIGlmIChyZXEubWV0aG9kID09PSBcIlBPU1RcIikge1xyXG4gICAgICAgIC8vKiDqsJLsnYQg67Cb7JWY64qU7KeAIO2ZleyduFxyXG4gICAgICAgIGNvbnN0IHsgdGV4dCwgY29sb3IgfSA9IHJlcS5ib2R5O1xyXG4gICAgICAgIGlmICghdGV4dCB8fCAhY29sb3IpIHtcclxuICAgICAgICAgIHJlcy5zdGF0dXNDb2RlID0gNDAwO1xyXG4gICAgICAgICAgcmV0dXJuIHJlcy5zZW5kKFwidGV4dCDtmLnsnYAgY29sb3Ig6rCAIOyXhuyKteuLiOuLpC5cIik7XHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgY29uc3QgdG9kb3MgPSBEYXRhLnRvZG8uZ2V0TGlzdCgpO1xyXG4gICAgICAgIGxldCB0b2RvSWQ6IG51bWJlcjtcclxuICAgICAgICBpZiAodG9kb3MubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgLy8qIOuniOyngOuniSDtiKzrkZAgaWQgKyAxXHJcbiAgICAgICAgICB0b2RvSWQgPSB0b2Rvc1t0b2Rvcy5sZW5ndGggLSAxXS5pZCArIDE7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRvZG9JZCA9IDE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IG5ld1RvZG8gPSB7XHJcbiAgICAgICAgICBpZDogdG9kb0lkLFxyXG4gICAgICAgICAgdGV4dCxcclxuICAgICAgICAgIGNvbG9yLFxyXG4gICAgICAgICAgY2hlY2tlZDogZmFsc2UsXHJcbiAgICAgICAgfTtcclxuICAgIFxyXG4gICAgICAgIERhdGEudG9kby53cml0ZShbLi4udG9kb3MsIG5ld1RvZG9dKTtcclxuICAgICAgICByZXMuc3RhdHVzQ29kZSA9IDIwMDtcclxuICAgICAgICByZXMuZW5kKCk7XHJcbiAgICAgIH1cclxuICAgIHJlcy5zdGF0dXNDb2RlID0gNDA1O1xyXG4gICAgcmV0dXJuIHJlcy5lbmQoKTtcclxufSJdLCJuYW1lcyI6WyJEYXRhIiwicmVxIiwicmVzIiwibWV0aG9kIiwidG9kb3MiLCJ0b2RvIiwiZ2V0TGlzdCIsInN0YXR1c0NvZGUiLCJzZW5kIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJ0ZXh0IiwiY29sb3IiLCJib2R5IiwidG9kb0lkIiwibGVuZ3RoIiwiaWQiLCJuZXdUb2RvIiwiY2hlY2tlZCIsIndyaXRlIiwiZW5kIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/todos/index.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/todos/index.ts"));
module.exports = __webpack_exports__;

})();