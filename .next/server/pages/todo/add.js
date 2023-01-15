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
exports.id = "pages/todo/add";
exports.ids = ["pages/todo/add"];
exports.modules = {

/***/ "./components/AddTodo.tsx":
/*!********************************!*\
  !*** ./components/AddTodo.tsx ***!
  \********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_palette__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/palette */ \"./styles/palette.ts\");\n/* harmony import */ var _lib_api_todo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/api/todo */ \"./lib/api/todo.ts\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_api_todo__WEBPACK_IMPORTED_MODULE_4__]);\n_lib_api_todo__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\nvar _jsxFileName = \"C:\\\\Users\\\\lgh12\\\\Desktop\\\\Next\\\\next-todo\\\\components\\\\AddTodo.tsx\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\nvar BrushIcon = function BrushIcon(props) {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"svg\", _objectSpread(_objectSpread({}, props), {}, {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"path\", {\n      d: \"M18.58 0a3.648 3.648 0 0 0-3.056 1.649c-.897 1.37-.854 3.261-1.368 4.444-.741 1.708-3.873.343-5.532-.524-2.909 5.647-5.025 8.211-6.845 10.448C8.358 20.335 3.602 17.21 13.969 24a62.064 62.064 0 0 1 6.825-10.46c-1.539-1.241-4.019-3.546-2.614-4.945 1-1 2.545-1.578 3.442-2.95C23.211 3.219 21.448 0 18.58 0zm-5.348 21.138-1.201-.763c0-.656.157-1.298.422-1.874-.609.202-1.074.482-1.618 1.043L7.48 17.313c.531-.703.934-1.55.859-2.688-.482.824-1.521 1.621-2.331 1.745l-1.302-.815a55.496 55.496 0 0 0 3.257-4.728l8.299 5.462c-1.099 1.614-2.197 3.363-3.03 4.849zm6.724-16.584c-.457.7-2.445 1.894-3.184 2.632-.681.68-1.014 1.561-.961 2.548.071 1.354.852 2.781 2.218 4.085-.201.265-.408.543-.618.833L8.983 9.104l.504-.883c1.065.445 2.1.678 3.032.678 1.646 0 2.908-.733 3.464-2.012.459-1.058.751-3.448 1.206-4.145 1.206-1.833 3.964-.017 2.767 1.812zm-.644-.424a.883.883 0 1 1-1.475-.966.882.882 0 1 1 1.475.966z\"\n    }, void 0, false, void 0, this)\n  }), void 0, false, void 0, this);\n};\n\nBrushIcon.defaultProps = {\n  xmlns: \"http://www.w3.org/2000/svg\",\n  width: \"24\",\n  height: \"24\"\n};\n\n\n\n\n\nconst Container = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({\n  displayName: \"AddTodo__Container\",\n  componentId: \"sc-12negqq-0\"\n})([\"padding:16px;.add-todo-header-title{font-size:21px;}.add-todo-header{display:flex;justify-content:space-between;align-items:center;.add-todo-submit-button{padding:4px 8px;border:1px solid black;border-radius:5px;background-color:white;outline:none;font-size:14px;}}.add-todo-colors-wrapper{width:100%;margin-top:16px;display:flex;justify-content:space-between;.add-todo-color-list{display:flex;.add-todo-color-button{width:24px;height:24px;margin-right:16px;border:0;outline:0;border-radius:50%;&:last-child{margin:0;}}.add-todo-selected-color{border:2px solid black !important;}}}textarea{width:100%;border-radius:5px;height:300px;border-color:\", \";margin-top:12px;resize:none;outline:none;padding:12px;font-size:16px;}.bg-blue{background-color:\", \";}.bg-green{background-color:\", \";}.bg-navy{background-color:\", \";}.bg-orange{background-color:\", \";}.bg-red{background-color:\", \";}.bg-yellow{background-color:\", \";}\"], _styles_palette__WEBPACK_IMPORTED_MODULE_3__[\"default\"].gray, _styles_palette__WEBPACK_IMPORTED_MODULE_3__[\"default\"].blue, _styles_palette__WEBPACK_IMPORTED_MODULE_3__[\"default\"].green, _styles_palette__WEBPACK_IMPORTED_MODULE_3__[\"default\"].navy, _styles_palette__WEBPACK_IMPORTED_MODULE_3__[\"default\"].orange, _styles_palette__WEBPACK_IMPORTED_MODULE_3__[\"default\"].red, _styles_palette__WEBPACK_IMPORTED_MODULE_3__[\"default\"].yellow);\n\nconst AddTodo = () => {\n  const {\n    0: text,\n    1: setText\n  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(\"\");\n  const {\n    0: selectedColor,\n    1: setSelectedColor\n  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();\n  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)(); // 투두추가하기\n\n  const addTodo = async () => {\n    try {\n      if (!text || !selectedColor) {\n        alert(\"색상과 할 일을 입력해주세요\");\n        return;\n      }\n\n      await (0,_lib_api_todo__WEBPACK_IMPORTED_MODULE_4__.addTodoAPI)({\n        text,\n        color: selectedColor\n      });\n      console.log(\"추가했습니다\");\n      router.push(\"/\");\n    } catch (e) {\n      console.log(e);\n    }\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(Container, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n      className: \"add-todo-header\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"h1\", {\n        className: \"add-todo-header-title\",\n        children: \"Add Todo\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 111,\n        columnNumber: 17\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"button\", {\n        type: \"button\",\n        className: \"add-todo-submit-button\",\n        onClick: addTodo,\n        children: \"\\uCD94\\uAC00\\uD558\\uAE30\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 112,\n        columnNumber: 17\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 110,\n      columnNumber: 13\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n      className: \"add-todo-colors-wrapper\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n        className: \"add-todo-color-list\",\n        children: [\"red\", \"orange\", \"yellow\", \"green\", \"blue\", \"navy\"].map((color, index) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"button\", {\n          type: \"button\",\n          className: `bg-${color} add-todo-color-button ${color === selectedColor ? \"add-todo-selected-color\" : \"\"}`,\n          onClick: () => {\n            setSelectedColor(color);\n          }\n        }, index, false, {\n          fileName: _jsxFileName,\n          lineNumber: 120,\n          columnNumber: 25\n        }, undefined))\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 118,\n        columnNumber: 17\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(BrushIcon, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 130,\n        columnNumber: 17\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 117,\n      columnNumber: 13\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"textarea\", {\n      value: text,\n      onChange: e => setText(e.currentTarget.value),\n      placeholder: \"\\uD560 \\uC77C\\uC744 \\uC785\\uB825\\uD574\\uC8FC\\uC138\\uC694\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 132,\n      columnNumber: 13\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 109,\n    columnNumber: 9\n  }, undefined);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AddTodo);\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ZWJwYWNrOi8vbmV4dC10b2RvLy4vY29tcG9uZW50cy9BZGRUb2RvLnRzeD80MmZmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IEJydXNoSWNvbiBmcm9tIFwiLi4vcHVibGljL3N0YXRpY3Mvc3ZnL2JydXNoLnN2Z1wiXHJcbmltcG9ydCBwYWxldHRlIGZyb20gXCIuLi9zdHlsZXMvcGFsZXR0ZVwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBUb2RvVHlwZSB9IGZyb20gXCIuLi90eXBlcy90b2RvXCI7XHJcbmltcG9ydCB7YWRkVG9kb0FQSX0gZnJvbSBcIi4uL2xpYi9hcGkvdG9kb1wiXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5cclxuY29uc3QgQ29udGFpbmVyICA9IHN0eWxlZC5kaXZgXHJcbiAgICBwYWRkaW5nOjE2cHg7XHJcblxyXG4gICAgLmFkZC10b2RvLWhlYWRlci10aXRsZXtcclxuICAgICAgICBmb250LXNpemU6MjFweDtcclxuICAgIH1cclxuXHJcbiAgICAuYWRkLXRvZG8taGVhZGVye1xyXG4gICAgICAgIGRpc3BsYXk6ZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2VlbjtcclxuICAgICAgICBhbGlnbi1pdGVtczpjZW50ZXI7XHJcblxyXG4gICAgICAgIC5hZGQtdG9kby1zdWJtaXQtYnV0dG9ue1xyXG4gICAgICAgICAgICBwYWRkaW5nOjRweCA4cHg7XHJcbiAgICAgICAgICAgIGJvcmRlcjoxcHggc29saWQgYmxhY2s7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6NXB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xyXG4gICAgICAgICAgICBvdXRsaW5lOm5vbmU7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZToxNHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5hZGQtdG9kby1jb2xvcnMtd3JhcHBlciB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTZweDtcclxuICAgICAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgIC5hZGQtdG9kby1jb2xvci1saXN0IHtcclxuICAgICAgICAgICBkaXNwbGF5OmZsZXg7IFxyXG4gICAgICAgIC5hZGQtdG9kby1jb2xvci1idXR0b24ge1xyXG4gICAgICAgICAgICB3aWR0aDogMjRweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAyNHB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDE2cHg7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMDtcclxuICAgICAgICAgICAgb3V0bGluZTogMDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICAmOmxhc3QtY2hpbGQge1xyXG4gICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLmFkZC10b2RvLXNlbGVjdGVkLWNvbG9ye1xyXG4gICAgICAgICAgICBib3JkZXI6MnB4IHNvbGlkIGJsYWNrICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuICB9XHJcbiAgdGV4dGFyZWF7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgYm9yZGVyLXJhZGl1czo1cHg7XHJcbiAgICBoZWlnaHQ6MzAwcHg7XHJcbiAgICBib3JkZXItY29sb3I6JHtwYWxldHRlLmdyYXl9O1xyXG4gICAgbWFyZ2luLXRvcDoxMnB4O1xyXG4gICAgcmVzaXplOm5vbmU7XHJcbiAgICBvdXRsaW5lOm5vbmU7XHJcbiAgICBwYWRkaW5nOjEycHg7XHJcbiAgICBmb250LXNpemU6MTZweDtcclxuICB9XHJcblxyXG4gICAgLmJnLWJsdWUge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7cGFsZXR0ZS5ibHVlfTtcclxuICAgIH1cclxuICAgIC5iZy1ncmVlbiB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHtwYWxldHRlLmdyZWVufTtcclxuICAgIH1cclxuICAgIC5iZy1uYXZ5IHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3BhbGV0dGUubmF2eX07XHJcbiAgICB9XHJcbiAgICAuYmctb3JhbmdlIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3BhbGV0dGUub3JhbmdlfTtcclxuICAgIH1cclxuICAgIC5iZy1yZWQge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7cGFsZXR0ZS5yZWR9O1xyXG4gICAgfVxyXG4gICAgLmJnLXllbGxvdyB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHtwYWxldHRlLnllbGxvd307XHJcbiAgICB9XHJcbmBcclxuXHJcbmNvbnN0IEFkZFRvZG86UmVhY3QuRkMgPSAoKT0+e1xyXG4gICAgY29uc3QgW3RleHQsc2V0VGV4dF0gPSB1c2VTdGF0ZShcIlwiKVxyXG4gICAgY29uc3QgW3NlbGVjdGVkQ29sb3Isc2V0U2VsZWN0ZWRDb2xvcl0gPSB1c2VTdGF0ZTxUb2RvVHlwZVtcImNvbG9yXCJdPigpO1xyXG5cclxuICAgIGNvbnN0IHJvdXRlcj0gdXNlUm91dGVyKCk7XHJcblxyXG4gICAgLy8g7Yis65GQ7LaU6rCA7ZWY6riwXHJcbiAgICBjb25zdCBhZGRUb2RvID0gYXN5bmMgKCk9PntcclxuICAgICAgICB0cnl7XHJcbiAgICAgICAgICAgIGlmKCF0ZXh0fHwhc2VsZWN0ZWRDb2xvcil7XHJcbiAgICAgICAgICAgICAgICBhbGVydChcIuyDieyDgeqzvCDtlaAg7J287J2EIOyeheugpe2VtOyjvOyEuOyalFwiKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGF3YWl0IGFkZFRvZG9BUEkoe3RleHQsY29sb3I6c2VsZWN0ZWRDb2xvcn0pXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi7LaU6rCA7ZaI7Iq164uI64ukXCIpXHJcbiAgICAgICAgICAgIHJvdXRlci5wdXNoKFwiL1wiKVxyXG4gICAgICAgIH1jYXRjaChlKXtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWRkLXRvZG8taGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiYWRkLXRvZG8taGVhZGVyLXRpdGxlXCI+QWRkIFRvZG88L2gxPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYWRkLXRvZG8tc3VibWl0LWJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXthZGRUb2RvfT5cclxuICAgICAgICAgICAgICAgICAgICDstpTqsIDtlZjquLBcclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhZGQtdG9kby1jb2xvcnMtd3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhZGQtdG9kby1jb2xvci1saXN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAge1tcInJlZFwiLFwib3JhbmdlXCIsXCJ5ZWxsb3dcIixcImdyZWVuXCIsXCJibHVlXCIsXCJuYXZ5XCJdLm1hcCgoY29sb3IsaW5kZXgpPT4oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGJnLSR7Y29sb3J9IGFkZC10b2RvLWNvbG9yLWJ1dHRvbiAke2NvbG9yID09PSBzZWxlY3RlZENvbG9yID8gXCJhZGQtdG9kby1zZWxlY3RlZC1jb2xvclwiOlwiXCJ9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0U2VsZWN0ZWRDb2xvcihjb2xvciBhcyBUb2RvVHlwZVtcImNvbG9yXCJdKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPEJydXNoSWNvbi8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8dGV4dGFyZWFcclxuICAgICAgICAgICAgICAgIHZhbHVlPXt0ZXh0fVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKT0+c2V0VGV4dChlLmN1cnJlbnRUYXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLtlaAg7J287J2EIOyeheugpe2VtOyjvOyEuOyalFwiLz5cclxuICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWRkVG9kbzsiXSwibmFtZXMiOlsiUmVhY3QiLCJzdHlsZWQiLCJCcnVzaEljb24iLCJwYWxldHRlIiwidXNlU3RhdGUiLCJhZGRUb2RvQVBJIiwidXNlUm91dGVyIiwiQ29udGFpbmVyIiwiZGl2IiwiZ3JheSIsImJsdWUiLCJncmVlbiIsIm5hdnkiLCJvcmFuZ2UiLCJyZWQiLCJ5ZWxsb3ciLCJBZGRUb2RvIiwidGV4dCIsInNldFRleHQiLCJzZWxlY3RlZENvbG9yIiwic2V0U2VsZWN0ZWRDb2xvciIsInJvdXRlciIsImFkZFRvZG8iLCJhbGVydCIsImNvbG9yIiwiY29uc29sZSIsImxvZyIsInB1c2giLCJlIiwibWFwIiwiaW5kZXgiLCJjdXJyZW50VGFyZ2V0IiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/AddTodo.tsx\n");

/***/ }),

/***/ "./lib/api/index.ts":
/*!**************************!*\
  !*** ./lib/api/index.ts ***!
  \**************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);\naxios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nconst axios = axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].create({\n  baseURL: \"http://localhost:3000\"\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (axios);\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvYXBpL2luZGV4LnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFFQSxNQUFNQyxLQUFLLEdBQUdELG9EQUFBLENBQWE7RUFDdkJHLE9BQU8sRUFBQ0MsdUJBQStCRTtBQURoQixDQUFiLENBQWQ7QUFJQSxpRUFBZUwsS0FBZixFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dC10b2RvLy4vbGliL2FwaS9pbmRleC50cz8wYjNhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAgQXhpb3MgIGZyb20gJ2F4aW9zJztcclxuXHJcbmNvbnN0IGF4aW9zID0gQXhpb3MuY3JlYXRlKHtcclxuICAgIGJhc2VVUkw6cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBJX1VSTCxcclxufSlcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGF4aW9zOyJdLCJuYW1lcyI6WyJBeGlvcyIsImF4aW9zIiwiY3JlYXRlIiwiYmFzZVVSTCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19BUElfVVJMIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/api/index.ts\n");

/***/ }),

/***/ "./lib/api/todo.ts":
/*!*************************!*\
  !*** ./lib/api/todo.ts ***!
  \*************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addTodoAPI\": () => (/* binding */ addTodoAPI),\n/* harmony export */   \"checkTodoAPI\": () => (/* binding */ checkTodoAPI),\n/* harmony export */   \"deleteTodoAPI\": () => (/* binding */ deleteTodoAPI),\n/* harmony export */   \"getTodosAPI\": () => (/* binding */ getTodosAPI)\n/* harmony export */ });\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ \"./lib/api/index.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([___WEBPACK_IMPORTED_MODULE_0__]);\n___WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n// 투두리스트 불러오기 API\nconst getTodosAPI = () => ___WEBPACK_IMPORTED_MODULE_0__[\"default\"].get(\"api/todos\"); // 투두체크하기\n\nconst checkTodoAPI = id => ___WEBPACK_IMPORTED_MODULE_0__[\"default\"].patch(`api/todos/${id}`); // 투두 추가하기 API Body\n\n// 투두 추가하기 API\nconst addTodoAPI = body => ___WEBPACK_IMPORTED_MODULE_0__[\"default\"].post(\"/api/todos\", body); // 투두 삭제하기 API\n\nconst deleteTodoAPI = id => ___WEBPACK_IMPORTED_MODULE_0__[\"default\"][\"delete\"](`/api/todos/${id}`);\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvYXBpL3RvZG8udHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUdBO0FBQ08sTUFBTUMsV0FBVyxHQUFHLE1BQUtELDZDQUFBLENBQXNCLFdBQXRCLENBQXpCLEVBRVA7O0FBQ08sTUFBTUcsWUFBWSxHQUFJQyxFQUFELElBQWFKLCtDQUFBLENBQWEsYUFBWUksRUFBRyxFQUE1QixDQUFsQyxFQUVQOztBQU1BO0FBQ08sTUFBTUUsVUFBVSxHQUFJQyxJQUFELElBQ3RCUCw4Q0FBQSxDQUFXLFlBQVgsRUFBd0JPLElBQXhCLENBREcsRUFHUDs7QUFDTyxNQUFNRSxhQUFhLEdBQUlMLEVBQUQsSUFBYUosbURBQUEsQ0FBYyxjQUFhSSxFQUFHLEVBQTlCLENBQW5DLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LXRvZG8vLi9saWIvYXBpL3RvZG8udHM/MjkzZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSBcIi5cIjtcclxuaW1wb3J0IHsgVG9kb1R5cGUgfSBmcm9tIFwiLi4vLi4vdHlwZXMvdG9kb1wiO1xyXG5cclxuLy8g7Yis65GQ66as7Iqk7Yq4IOu2iOufrOyYpOq4sCBBUElcclxuZXhwb3J0IGNvbnN0IGdldFRvZG9zQVBJID0gKCk9PiBheGlvcy5nZXQ8VG9kb1R5cGVbXT4oXCJhcGkvdG9kb3NcIilcclxuXHJcbi8vIO2IrOuRkOyytO2BrO2VmOq4sFxyXG5leHBvcnQgY29uc3QgY2hlY2tUb2RvQVBJID0gKGlkOm51bWJlcik9PmF4aW9zLnBhdGNoKGBhcGkvdG9kb3MvJHtpZH1gKVxyXG5cclxuLy8g7Yis65GQIOy2lOqwgO2VmOq4sCBBUEkgQm9keVxyXG5pbnRlcmZhY2UgQWRkVG9kb0FQSUJvZHl7XHJcbiAgICB0ZXh0OnN0cmluZztcclxuICAgIGNvbG9yOlRvZG9UeXBlW1wiY29sb3JcIl1cclxufVxyXG5cclxuLy8g7Yis65GQIOy2lOqwgO2VmOq4sCBBUElcclxuZXhwb3J0IGNvbnN0IGFkZFRvZG9BUEkgPSAoYm9keTpBZGRUb2RvQVBJQm9keSk9PlxyXG4gICAgYXhpb3MucG9zdChcIi9hcGkvdG9kb3NcIixib2R5KTtcclxuXHJcbi8vIO2IrOuRkCDsgq3soJztlZjquLAgQVBJXHJcbmV4cG9ydCBjb25zdCBkZWxldGVUb2RvQVBJID0gKGlkOm51bWJlcik9PmF4aW9zLmRlbGV0ZShgL2FwaS90b2Rvcy8ke2lkfWApIl0sIm5hbWVzIjpbImF4aW9zIiwiZ2V0VG9kb3NBUEkiLCJnZXQiLCJjaGVja1RvZG9BUEkiLCJpZCIsInBhdGNoIiwiYWRkVG9kb0FQSSIsImJvZHkiLCJwb3N0IiwiZGVsZXRlVG9kb0FQSSIsImRlbGV0ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/api/todo.ts\n");

/***/ }),

/***/ "./pages/todo/add.tsx":
/*!****************************!*\
  !*** ./pages/todo/add.tsx ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_AddTodo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/AddTodo */ \"./components/AddTodo.tsx\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_AddTodo__WEBPACK_IMPORTED_MODULE_1__]);\n_components_AddTodo__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\nvar _jsxFileName = \"C:\\\\Users\\\\lgh12\\\\Desktop\\\\Next\\\\next-todo\\\\pages\\\\todo\\\\add.tsx\";\n\n\n\n\nconst todo = () => {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_components_AddTodo__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 6,\n    columnNumber: 12\n  }, undefined);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (todo);\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy90b2RvL2FkZC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7OztBQUVBLE1BQU1FLElBQWEsR0FBRyxNQUFJO0VBQ3RCLG9CQUFPLDhEQUFDLDJEQUFEO0lBQUE7SUFBQTtJQUFBO0VBQUEsYUFBUDtBQUNILENBRkQ7O0FBSUEsaUVBQWVBLElBQWYsRSIsInNvdXJjZXMiOlsid2VicGFjazovL25leHQtdG9kby8uL3BhZ2VzL3RvZG8vYWRkLnRzeD9iMjBkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgTmV4dFBhZ2UgfSBmcm9tIFwibmV4dFwiO1xyXG5pbXBvcnQgQWRkVG9kbyBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9BZGRUb2RvXCI7XHJcblxyXG5jb25zdCB0b2RvOk5leHRQYWdlID0gKCk9PntcclxuICAgIHJldHVybiA8QWRkVG9kby8+XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHRvZG87Il0sIm5hbWVzIjpbIlJlYWN0IiwiQWRkVG9kbyIsInRvZG8iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/todo/add.tsx\n");

/***/ }),

/***/ "./styles/palette.ts":
/*!***************************!*\
  !*** ./styles/palette.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  red: \"#FFAFB0\",\n  orange: \"#FFC282\",\n  yellow: \"#FCFFB0\",\n  green: \"#E2FFAF\",\n  blue: \"#AEE4FF\",\n  navy: \"#B5C7ED\",\n  gray: \"#E5E5E5\",\n  deep_red: \"#F35456\",\n  deep_green: \"#47E774\"\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdHlsZXMvcGFsZXR0ZS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsaUVBQWM7RUFDVkEsR0FBRyxFQUFDLFNBRE07RUFFVkMsTUFBTSxFQUFFLFNBRkU7RUFHVkMsTUFBTSxFQUFFLFNBSEU7RUFJVkMsS0FBSyxFQUFDLFNBSkk7RUFLVkMsSUFBSSxFQUFDLFNBTEs7RUFNVkMsSUFBSSxFQUFDLFNBTks7RUFPVkMsSUFBSSxFQUFDLFNBUEs7RUFRVkMsUUFBUSxFQUFDLFNBUkM7RUFTVkMsVUFBVSxFQUFDO0FBVEQsQ0FBZCIsInNvdXJjZXMiOlsid2VicGFjazovL25leHQtdG9kby8uL3N0eWxlcy9wYWxldHRlLnRzP2Q4ZjgiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHR7XHJcbiAgICByZWQ6XCIjRkZBRkIwXCIsXHJcbiAgICBvcmFuZ2U6IFwiI0ZGQzI4MlwiLFxyXG4gICAgeWVsbG93OiBcIiNGQ0ZGQjBcIixcclxuICAgIGdyZWVuOlwiI0UyRkZBRlwiLFxyXG4gICAgYmx1ZTpcIiNBRUU0RkZcIixcclxuICAgIG5hdnk6XCIjQjVDN0VEXCIsXHJcbiAgICBncmF5OlwiI0U1RTVFNVwiLFxyXG4gICAgZGVlcF9yZWQ6XCIjRjM1NDU2XCIsXHJcbiAgICBkZWVwX2dyZWVuOlwiIzQ3RTc3NFwiXHJcbn0iXSwibmFtZXMiOlsicmVkIiwib3JhbmdlIiwieWVsbG93IiwiZ3JlZW4iLCJibHVlIiwibmF2eSIsImdyYXkiLCJkZWVwX3JlZCIsImRlZXBfZ3JlZW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./styles/palette.ts\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("styled-components");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = import("axios");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/todo/add.tsx"));
module.exports = __webpack_exports__;

})();