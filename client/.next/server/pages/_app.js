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
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/cache.ts":
/*!**********************!*\
  !*** ./src/cache.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"cache\": () => (/* binding */ cache)\n/* harmony export */ });\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst cache = new _apollo_client__WEBPACK_IMPORTED_MODULE_0__.InMemoryCache({\n    typePolicies: {\n        Query: {\n            fields: {\n                persons: {\n                    keyArgs: false,\n                    merge (existing, incoming) {\n                        let persons = [];\n                        if (existing && existing.persons) {\n                            persons = persons.concat(existing.persons);\n                        }\n                        if (incoming && incoming.persons) {\n                            persons = persons.concat(incoming.persons);\n                        }\n                        return {\n                            ...incoming,\n                            persons\n                        };\n                    }\n                }\n            }\n        }\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY2FjaGUudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQTBEO0FBRW5ELE1BQU1DLEtBQUssR0FBa0IsSUFBSUQseURBQWEsQ0FBQztJQUNwREUsWUFBWSxFQUFFO1FBQ1pDLEtBQUssRUFBRTtZQUNMQyxNQUFNLEVBQUU7Z0JBQ05DLE9BQU8sRUFBRTtvQkFDUEMsT0FBTyxFQUFFLEtBQUs7b0JBQ2RDLEtBQUssRUFBQ0MsUUFBUSxFQUFFQyxRQUFRLEVBQUU7d0JBQ3hCLElBQUlKLE9BQU8sR0FBZ0IsRUFBRTt3QkFDN0IsSUFBSUcsUUFBUSxJQUFJQSxRQUFRLENBQUNILE9BQU8sRUFBRTs0QkFDaENBLE9BQU8sR0FBR0EsT0FBTyxDQUFDSyxNQUFNLENBQUNGLFFBQVEsQ0FBQ0gsT0FBTyxDQUFDLENBQUM7eUJBQzVDO3dCQUNELElBQUlJLFFBQVEsSUFBSUEsUUFBUSxDQUFDSixPQUFPLEVBQUU7NEJBQ2hDQSxPQUFPLEdBQUdBLE9BQU8sQ0FBQ0ssTUFBTSxDQUFDRCxRQUFRLENBQUNKLE9BQU8sQ0FBQyxDQUFDO3lCQUM1Qzt3QkFDRCxPQUFPOzRCQUNMLEdBQUdJLFFBQVE7NEJBQ1hKLE9BQU87eUJBQ1IsQ0FBQztxQkFDSDtpQkFDRjthQUNGO1NBQ0Y7S0FDRjtDQUNGLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHQtYXBvbGxvLWRlbW8tY2xpZW50Ly4vc3JjL2NhY2hlLnRzP2Q2M2QiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5NZW1vcnlDYWNoZSwgUmVmZXJlbmNlIH0gZnJvbSAnQGFwb2xsby9jbGllbnQnO1xuXG5leHBvcnQgY29uc3QgY2FjaGU6IEluTWVtb3J5Q2FjaGUgPSBuZXcgSW5NZW1vcnlDYWNoZSh7XG4gIHR5cGVQb2xpY2llczoge1xuICAgIFF1ZXJ5OiB7XG4gICAgICBmaWVsZHM6IHtcbiAgICAgICAgcGVyc29uczoge1xuICAgICAgICAgIGtleUFyZ3M6IGZhbHNlLFxuICAgICAgICAgIG1lcmdlKGV4aXN0aW5nLCBpbmNvbWluZykge1xuICAgICAgICAgICAgbGV0IHBlcnNvbnM6IFJlZmVyZW5jZVtdID0gW107XG4gICAgICAgICAgICBpZiAoZXhpc3RpbmcgJiYgZXhpc3RpbmcucGVyc29ucykge1xuICAgICAgICAgICAgICBwZXJzb25zID0gcGVyc29ucy5jb25jYXQoZXhpc3RpbmcucGVyc29ucyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoaW5jb21pbmcgJiYgaW5jb21pbmcucGVyc29ucykge1xuICAgICAgICAgICAgICBwZXJzb25zID0gcGVyc29ucy5jb25jYXQoaW5jb21pbmcucGVyc29ucyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAuLi5pbmNvbWluZyxcbiAgICAgICAgICAgICAgcGVyc29ucyxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbn0pO1xuIl0sIm5hbWVzIjpbIkluTWVtb3J5Q2FjaGUiLCJjYWNoZSIsInR5cGVQb2xpY2llcyIsIlF1ZXJ5IiwiZmllbGRzIiwicGVyc29ucyIsImtleUFyZ3MiLCJtZXJnZSIsImV4aXN0aW5nIiwiaW5jb21pbmciLCJjb25jYXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/cache.ts\n");

/***/ }),

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _cache__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../cache */ \"./src/cache.ts\");\n\n\n\n//Initialize ApolloClient\nconst client = new _apollo_client__WEBPACK_IMPORTED_MODULE_1__.ApolloClient({\n    uri: \"http://localhost:4000/graphql\",\n    cache: _cache__WEBPACK_IMPORTED_MODULE_2__.cache\n});\nfunction MyApp({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_apollo_client__WEBPACK_IMPORTED_MODULE_1__.ApolloProvider, {\n        client: client,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"/Users/santhoshss/Projects/next-apollo-demo/client/src/pages/_app.tsx\",\n            lineNumber: 15,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/santhoshss/Projects/next-apollo-demo/client/src/pages/_app.tsx\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7QUFDcUY7QUFDeEQ7QUFFN0IseUJBQXlCO0FBQ3pCLE1BQU1HLE1BQU0sR0FBdUMsSUFBSUgsd0RBQVksQ0FBQztJQUNsRUksR0FBRyxFQUFFLCtCQUErQjtJQUNwQ0YsS0FBSztDQUNOLENBQUM7QUFFRixTQUFTRyxLQUFLLENBQUMsRUFBRUMsU0FBUyxHQUFFQyxTQUFTLEdBQVksRUFBRTtJQUNqRCxxQkFDRSw4REFBQ04sMERBQWM7UUFBQ0UsTUFBTSxFQUFFQSxNQUFNO2tCQUM1Qiw0RUFBQ0csU0FBUztZQUFFLEdBQUdDLFNBQVM7Ozs7O2dCQUFJOzs7OztZQUNiLENBQ2pCO0NBQ0g7QUFFRCxpRUFBZUYsS0FBSyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dC1hcG9sbG8tZGVtby1jbGllbnQvLi9zcmMvcGFnZXMvX2FwcC50c3g/ZjlkNiJdLCJzb3VyY2VzQ29udGVudCI6WyIvL2ltcG9ydCAnLi4vc3R5bGVzL2dsb2JhbHMuY3NzJztcbmltcG9ydCB0eXBlIHsgQXBwUHJvcHMgfSBmcm9tICduZXh0L2FwcCc7XG5pbXBvcnQgeyBBcG9sbG9DbGllbnQsIEFwb2xsb1Byb3ZpZGVyLCBOb3JtYWxpemVkQ2FjaGVPYmplY3QgfSBmcm9tICdAYXBvbGxvL2NsaWVudCc7XG5pbXBvcnQge2NhY2hlfWZyb20gJy4uL2NhY2hlJ1xuXG4vL0luaXRpYWxpemUgQXBvbGxvQ2xpZW50XG5jb25zdCBjbGllbnQ6QXBvbGxvQ2xpZW50PE5vcm1hbGl6ZWRDYWNoZU9iamVjdD4gPSBuZXcgQXBvbGxvQ2xpZW50KHtcbiAgdXJpOiAnaHR0cDovL2xvY2FsaG9zdDo0MDAwL2dyYXBocWwnLFxuICBjYWNoZVxufSk7XG5cbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfTogQXBwUHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8QXBvbGxvUHJvdmlkZXIgY2xpZW50PXtjbGllbnR9PlxuICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgIDwvQXBvbGxvUHJvdmlkZXI+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwO1xuIl0sIm5hbWVzIjpbIkFwb2xsb0NsaWVudCIsIkFwb2xsb1Byb3ZpZGVyIiwiY2FjaGUiLCJjbGllbnQiLCJ1cmkiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n");

/***/ }),

/***/ "@apollo/client":
/*!*********************************!*\
  !*** external "@apollo/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@apollo/client");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/_app.tsx"));
module.exports = __webpack_exports__;

})();