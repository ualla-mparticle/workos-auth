exports.id = 661;
exports.ids = [661];
exports.modules = {

/***/ 7987:
/***/ ((module) => {

// Exports
module.exports = {
	"footer": "footer_footer__OT4Wn",
	"navItems": "footer_navItems__ee7Ef",
	"navItem": "footer_navItem__r0rF1"
};


/***/ }),

/***/ 9231:
/***/ ((module) => {

// Exports
module.exports = {
	"signedInStatus": "header_signedInStatus__kgmdh",
	"loading": "header_loading__QIGro",
	"loaded": "header_loaded__rgjU1",
	"signedInText": "header_signedInText__s_n47",
	"notSignedInText": "header_notSignedInText__hsbdL",
	"avatar": "header_avatar__PA0cg",
	"button": "header_button__HZ1sf",
	"buttonPrimary": "header_buttonPrimary___aGwP",
	"navItems": "header_navItems__BZo0w",
	"navItem": "header_navItem__R6_7D"
};


/***/ }),

/***/ 6661:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Layout)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "next-auth/react"
var react_ = __webpack_require__(1649);
// EXTERNAL MODULE: ./components/header.module.css
var header_module = __webpack_require__(9231);
var header_module_default = /*#__PURE__*/__webpack_require__.n(header_module);
;// CONCATENATED MODULE: ./components/header.js




// The approach used in this component shows how to build a sign in and sign out
// component that works on pages which support both client and server side
// rendering, and avoids any flash incorrect content on initial page load.
function Header() {
    const { data: session , status  } = (0,react_.useSession)();
    const loading = status === "loading";
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("header", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("noscript", {
                children: /*#__PURE__*/ jsx_runtime_.jsx("style", {
                    children: `.nojs-show { opacity: 1; top: 0; }`
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (header_module_default()).signedInStatus,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                    className: `nojs-show ${!session && loading ? (header_module_default()).loading : (header_module_default()).loaded}`,
                    children: [
                        !session && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: (header_module_default()).notSignedInText,
                                    children: "You are not signed in"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    href: `/workos-auth/login`,
                                    className: (header_module_default()).buttonPrimary,
                                    children: "Sign in with WORKOS"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    href: `/api/auth/signin`,
                                    className: (header_module_default()).buttonPrimary,
                                    onClick: (e)=>{
                                        e.preventDefault();
                                        (0,react_.signIn)();
                                    },
                                    children: "Sign in"
                                })
                            ]
                        }),
                        session && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                            children: [
                                session.user.image && /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    style: {
                                        backgroundImage: `url('${session.user.image}')`
                                    },
                                    className: (header_module_default()).avatar
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                    className: (header_module_default()).signedInText,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("small", {
                                            children: "Signed in as"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                        /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                            children: session.user.email || session.user.name
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    href: `/api/auth/signout`,
                                    className: (header_module_default()).button,
                                    onClick: (e)=>{
                                        e.preventDefault();
                                        (0,react_.signOut)();
                                    },
                                    children: "Sign out"
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("nav", {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                    className: (header_module_default()).navItems,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            className: (header_module_default()).navItem,
                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                href: "/",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    children: "Home"
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            className: (header_module_default()).navItem,
                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                href: "/client",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    children: "Client"
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            className: (header_module_default()).navItem,
                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                href: "/server",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    children: "Server"
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            className: (header_module_default()).navItem,
                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                href: "/protected",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    children: "Protected"
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            className: (header_module_default()).navItem,
                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                href: "/api-example",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    children: "API"
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            className: (header_module_default()).navItem,
                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                href: "/middleware-protected",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    children: "Middleware protected"
                                })
                            })
                        })
                    ]
                })
            })
        ]
    }));
};

// EXTERNAL MODULE: ./components/footer.module.css
var footer_module = __webpack_require__(7987);
var footer_module_default = /*#__PURE__*/__webpack_require__.n(footer_module);
;// CONCATENATED MODULE: ./package.json
const package_namespaceObject = JSON.parse('{"HO":{"MO":"latest"}}');
;// CONCATENATED MODULE: ./components/footer.js




function Footer() {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("footer", {
        className: (footer_module_default()).footer,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("hr", {}),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                className: (footer_module_default()).navItems,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        className: (footer_module_default()).navItem,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            href: "https://next-auth.js.org",
                            children: "Documentation"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        className: (footer_module_default()).navItem,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            href: "https://www.npmjs.com/package/next-auth",
                            children: "NPM"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        className: (footer_module_default()).navItem,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            href: "https://github.com/nextauthjs/next-auth-example",
                            children: "GitHub"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        className: (footer_module_default()).navItem,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                            href: "/policy",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                children: "Policy"
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        className: (footer_module_default()).navItem,
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("em", {
                            children: [
                                "next-auth@",
                                package_namespaceObject.HO.MO
                            ]
                        })
                    })
                ]
            })
        ]
    }));
};

;// CONCATENATED MODULE: ./components/layout.js



function Layout({ children  }) {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Header, {}),
            /*#__PURE__*/ jsx_runtime_.jsx("main", {
                children: children
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Footer, {})
        ]
    }));
};


/***/ })

};
;