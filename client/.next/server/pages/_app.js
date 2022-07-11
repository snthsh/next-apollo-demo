"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 971:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@apollo/client"
var client_ = __webpack_require__(114);
// EXTERNAL MODULE: ./src/components/index.tsx + 3 modules
var components = __webpack_require__(882);
;// CONCATENATED MODULE: ./src/cache.ts

const cache = new client_.InMemoryCache({
    typePolicies: {
        Query: {
            fields: {
                persons: {
                    keyArgs: false,
                    merge (existing, incoming) {
                        let persons = [];
                        if (existing && existing.persons) {
                            persons = persons.concat(existing.persons);
                        }
                        if (incoming && incoming.persons) {
                            persons = persons.concat(incoming.persons);
                        }
                        return {
                            ...incoming,
                            persons
                        };
                    }
                }
            }
        }
    }
});

// EXTERNAL MODULE: ./src/styles.js
var styles = __webpack_require__(534);
;// CONCATENATED MODULE: ./src/pages/_app.tsx





//Initialize ApolloClient
const client = new client_.ApolloClient({
    uri: "http://localhost:4000/graphql",
    cache: cache
});
(0,styles/* default */.ZP)();
function MyApp({ Component , pageProps  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(client_.ApolloProvider, {
        client: client,
        children: /*#__PURE__*/ jsx_runtime_.jsx(components/* PageContainer */._z, {
            children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                ...pageProps
            })
        })
    });
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 114:
/***/ ((module) => {

module.exports = require("@apollo/client");

/***/ }),

/***/ 842:
/***/ ((module) => {

module.exports = require("@emotion/css");

/***/ }),

/***/ 480:
/***/ ((module) => {

module.exports = require("@emotion/styled");

/***/ }),

/***/ 145:
/***/ ((module) => {

module.exports = require("@mverissimoo/emotion-grid");

/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 12:
/***/ ((module) => {

module.exports = require("react-loading-skeleton");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [882], () => (__webpack_exec__(971)));
module.exports = __webpack_exports__;

})();