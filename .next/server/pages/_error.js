(() => {
var exports = {};
exports.id = 820;
exports.ids = [820];
exports.modules = {

/***/ 613:
/***/ ((module) => {

// Exports
module.exports = {
	"ErrorPage": "_error_ErrorPage__pPTkg"
};


/***/ }),

/***/ 301:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Styles_error_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(613);
/* harmony import */ var _Styles_error_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Styles_error_module_scss__WEBPACK_IMPORTED_MODULE_1__);
/*
   Dynamic Error Trapping Page
   When a URL error is encountered, NEXT will automatically
   route to the _error.js page and dynamically displays
   the error and corresponding message that is encountered.

   IMPORTANT: Due to the frequency at which the 404 page may
   be encountered, a 404.js page should be created to beneDragn' Drop
   from having it statically generated as opposed to this method. 
*/ 

function Error({ statusCode  }) {
    // This is not an exhaustive list of statusCodes
    // a complete list of standard codes can be
    // found here: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
    const errors = {
        0: "Error",
        400: "Bad Request",
        401: "Unauthorized Request",
        402: "Payment Required",
        403: "Forbidden",
        404: "Not Found",
        405: "Method Not Allowed",
        406: "Not Acceptable",
        407: "Proxy Authentication Required",
        408: "Request Timeout",
        409: "Conflict",
        410: "Gone",
        411: "Length Required",
        412: "Precondition Failed",
        413: "Payload Too Large",
        414: "URI Too Long",
        415: "Unsupported Media Type",
        416: "Range Not Satisfiable",
        417: "Expectation Failed",
        418: "I am a teapot",
        421: "Misdirect Request",
        422: "Unprocessable Entity (WebDAV)",
        423: "Locked (WebDAV)",
        424: "Failed Dependency (WebDAV)",
        425: "Too Early",
        426: "Upgrade Required",
        428: "Precondition Required",
        429: "Too Many Requests",
        431: "Request Header Fields Too Large",
        451: "Unavailable For Legal Reasons",
        500: "Internal Server Error",
        501: "Not Implemented",
        502: "Bad Gateway",
        503: "Service Unavailable",
        504: "Gateway Timeout",
        505: "HTTP Version Not Supported",
        506: "Variant Also Negotiates",
        507: "Insufficient Storage (WebDAV)",
        508: "Loop Detected (WebDAV)",
        510: "Not Extended",
        511: "Network Auth Required",
        null: "Error With Return"
    };
    let errMsg = "Error not specified in _error.tsx";
    const errMap = new Map(Object.entries(errors)); //Turn object into a map for O(1) lookups
    if (statusCode == null) errMsg = "Error With Return";
    else if (errMap.has(statusCode.toString())) errMsg = errMap.get(statusCode.toString());
    else errMsg = "Error not specified in _error.tsx";
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: (_Styles_error_module_scss__WEBPACK_IMPORTED_MODULE_1___default().ErrorPage),
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                    children: `Oh no, ${statusCode} Error`
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h3", {
                    children: [
                        "(",
                        errMsg,
                        ")"
                    ]
                })
            ]
        })
    });
}
// Getting Error Status Code
Error.getInitialProps = ({ res , err  })=>{
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
    return {
        statusCode
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Error);


/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(301));
module.exports = __webpack_exports__;

})();