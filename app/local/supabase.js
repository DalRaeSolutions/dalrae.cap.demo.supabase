/* eslint-disable */
!function (e, t) {
  "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.supabase = t() : e.supabase = t()
}(self, (() => (() => {
  var e = {
    248: (e, t, r) => {
      "use strict";
      r.r(t),
        r.d(t, {
          FunctionsClient: () => i
        });
      var s = r(98)
        , n = r.n(s);
      class i {
        constructor(e, { headers: t = {}, customFetch: r } = {}) {
          this.url = e,
            this.headers = t,
            this.fetch = (e => {
              let t;
              return t = e || ("undefined" == typeof fetch ? n() : fetch),
                (...e) => t(...e)
            }
            )(r)
        }
        setAuth(e) {
          this.headers.Authorization = `Bearer ${e}`
        }
        invoke(e, t) {
          return r = this,
            s = void 0,
            i = function* () {
              try {
                const { headers: r, body: s } = null != t ? t : {}
                  , n = yield this.fetch(`${this.url}/${e}`, {
                    method: "POST",
                    headers: Object.assign({}, this.headers, r),
                    body: s
                  })
                  , i = n.headers.get("x-relay-error");
                if (i && "true" === i)
                  return {
                    data: null,
                    error: new Error(yield n.text())
                  };
                let o;
                const { responseType: a } = null != t ? t : {};
                return o = a && "json" !== a ? "arrayBuffer" === a ? yield n.arrayBuffer() : "blob" === a ? yield n.blob() : yield n.text() : yield n.json(),
                {
                  data: o,
                  error: null
                }
              } catch (e) {
                return {
                  data: null,
                  error: e
                }
              }
            }
            ,
            new ((n = void 0) || (n = Promise))((function (e, t) {
              function o(e) {
                try {
                  h(i.next(e))
                } catch (e) {
                  t(e)
                }
              }
              function a(e) {
                try {
                  h(i.throw(e))
                } catch (e) {
                  t(e)
                }
              }
              function h(t) {
                var r;
                t.done ? e(t.value) : (r = t.value,
                  r instanceof n ? r : new n((function (e) {
                    e(r)
                  }
                  ))).then(o, a)
              }
              h((i = i.apply(r, s || [])).next())
            }
            ));
          var r, s, n, i
        }
      }
    }
    ,
    271: (e, t, r) => {
      "use strict";
      r.r(t),
        r.d(t, {
          GoTrueApi: () => T,
          GoTrueClient: () => O
        });
      const s = "Request Failed"
        , n = "supabase.auth.token"
        , i = {
          name: "sb",
          lifetime: 28800,
          domain: "",
          path: "/",
          sameSite: "lax"
        };
      var o = function (e, t, r, s) {
        return new (r || (r = Promise))((function (n, i) {
          function o(e) {
            try {
              h(s.next(e))
            } catch (e) {
              i(e)
            }
          }
          function a(e) {
            try {
              h(s.throw(e))
            } catch (e) {
              i(e)
            }
          }
          function h(e) {
            var t;
            e.done ? n(e.value) : (t = e.value,
              t instanceof r ? t : new r((function (e) {
                e(t)
              }
              ))).then(o, a)
          }
          h((s = s.apply(e, t || [])).next())
        }
        ))
      };
      const a = e => e.msg || e.message || e.error_description || e.error || JSON.stringify(e);
      function h(e, t, r, n, i) {
        return o(this, void 0, void 0, (function* () {
          return new Promise(((o, h) => {
            e(r, ((e, t, r) => {
              const s = {
                method: e,
                headers: (null == t ? void 0 : t.headers) || {}
              };
              return "GET" === e || (s.headers = Object.assign({
                "Content-Type": "text/plain;charset=UTF-8"
              }, null == t ? void 0 : t.headers),
                s.body = JSON.stringify(r)),
                s
            }
            )(t, n, i)).then((e => {
              if (!e.ok)
                throw e;
              return (null == n ? void 0 : n.noResolveJson) ? o : e.json()
            }
            )).then((e => o(e))).catch((e => ((e, t) => (null == e ? void 0 : e.status) ? "function" != typeof e.json ? t(e) : void e.json().then((r => t({
              message: a(r),
              status: (null == e ? void 0 : e.status) || 500
            }))) : t({
              message: s
            }))(e, h)))
          }
          ))
        }
        ))
      }
      function c(e, t, r) {
        return o(this, void 0, void 0, (function* () {
          return h(e, "GET", t, r)
        }
        ))
      }
      function u(e, t, r, s) {
        return o(this, void 0, void 0, (function* () {
          return h(e, "POST", t, s, r)
        }
        ))
      }
      function l(e, t, r, s) {
        return o(this, void 0, void 0, (function* () {
          return h(e, "PUT", t, s, r)
        }
        ))
      }
      function d(e, t, r) {
        const s = r.map((t => {
          return r = t,
            s = function (e) {
              if (!e || !e.headers || !e.headers.host)
                throw new Error('The "host" request header is not available');
              const t = e.headers.host.indexOf(":") > -1 && e.headers.host.split(":")[0] || e.headers.host;
              return !(["localhost", "127.0.0.1"].indexOf(t) > -1 || t.endsWith(".local"))
            }(e),
            function (e, t, r) {
              const s = r || {}
                , n = encodeURIComponent
                , i = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
              if ("function" != typeof n)
                throw new TypeError("option encode is invalid");
              if (!i.test(e))
                throw new TypeError("argument name is invalid");
              const o = n(t);
              if (o && !i.test(o))
                throw new TypeError("argument val is invalid");
              let a = e + "=" + o;
              if (null != s.maxAge) {
                const e = s.maxAge - 0;
                if (isNaN(e) || !isFinite(e))
                  throw new TypeError("option maxAge is invalid");
                a += "; Max-Age=" + Math.floor(e)
              }
              if (s.domain) {
                if (!i.test(s.domain))
                  throw new TypeError("option domain is invalid");
                a += "; Domain=" + s.domain
              }
              if (s.path) {
                if (!i.test(s.path))
                  throw new TypeError("option path is invalid");
                a += "; Path=" + s.path
              }
              if (s.expires) {
                if ("function" != typeof s.expires.toUTCString)
                  throw new TypeError("option expires is invalid");
                a += "; Expires=" + s.expires.toUTCString()
              }
              if (s.httpOnly && (a += "; HttpOnly"),
                s.secure && (a += "; Secure"),
                s.sameSite)
                switch ("string" == typeof s.sameSite ? s.sameSite.toLowerCase() : s.sameSite) {
                  case "lax":
                    a += "; SameSite=Lax";
                    break;
                  case "strict":
                    a += "; SameSite=Strict";
                    break;
                  case "none":
                    a += "; SameSite=None";
                    break;
                  default:
                    throw new TypeError("option sameSite is invalid")
                }
              return a
            }(r.name, r.value, {
              maxAge: r.maxAge,
              expires: new Date(Date.now() + 1e3 * r.maxAge),
              httpOnly: !0,
              secure: s,
              path: null !== (n = r.path) && void 0 !== n ? n : "/",
              domain: null !== (i = r.domain) && void 0 !== i ? i : "",
              sameSite: null !== (o = r.sameSite) && void 0 !== o ? o : "lax"
            });
          var r, s, n, i, o
        }
        ))
          , n = t.getHeader("Set-Cookie");
        return n && (n instanceof Array ? Array.prototype.push.apply(s, n) : "string" == typeof n && s.push(n)),
          s
      }
      function f(e, t, r) {
        t.setHeader("Set-Cookie", d(e, t, r))
      }
      var p = r(98)
        , v = r.n(p)
        , m = function (e, t, r, s) {
          return new (r || (r = Promise))((function (n, i) {
            function o(e) {
              try {
                h(s.next(e))
              } catch (e) {
                i(e)
              }
            }
            function a(e) {
              try {
                h(s.throw(e))
              } catch (e) {
                i(e)
              }
            }
            function h(e) {
              var t;
              e.done ? n(e.value) : (t = e.value,
                t instanceof r ? t : new r((function (e) {
                  e(t)
                }
                ))).then(o, a)
            }
            h((s = s.apply(e, t || [])).next())
          }
          ))
        };
      function y(e) {
        return Math.round(Date.now() / 1e3) + e
      }
      const g = () => "undefined" != typeof window;
      function b(e, t) {
        var r;
        t || (t = (null === (r = null === window || void 0 === window ? void 0 : window.location) || void 0 === r ? void 0 : r.href) || ""),
          e = e.replace(/[\[\]]/g, "\\$&");
        const s = new RegExp("[?&#]" + e + "(=([^&#]*)|&|#|$)").exec(t);
        return s ? s[2] ? decodeURIComponent(s[2].replace(/\+/g, " ")) : "" : null
      }
      const _ = e => {
        let t;
        return t = e || ("undefined" == typeof fetch ? v() : fetch),
          (...e) => t(...e)
      }
        ;
      var w = function (e, t, r, s) {
        return new (r || (r = Promise))((function (n, i) {
          function o(e) {
            try {
              h(s.next(e))
            } catch (e) {
              i(e)
            }
          }
          function a(e) {
            try {
              h(s.throw(e))
            } catch (e) {
              i(e)
            }
          }
          function h(e) {
            var t;
            e.done ? n(e.value) : (t = e.value,
              t instanceof r ? t : new r((function (e) {
                e(t)
              }
              ))).then(o, a)
          }
          h((s = s.apply(e, t || [])).next())
        }
        ))
      };
      class T {
        constructor({ url: e = "", headers: t = {}, cookieOptions: r, fetch: s }) {
          this.url = e,
            this.headers = t,
            this.cookieOptions = Object.assign(Object.assign({}, i), r),
            this.fetch = _(s)
        }
        _createRequestHeaders(e) {
          const t = Object.assign({}, this.headers);
          return t.Authorization = `Bearer ${e}`,
            t
        }
        cookieName() {
          var e;
          return null !== (e = this.cookieOptions.name) && void 0 !== e ? e : ""
        }
        getUrlForProvider(e, t) {
          const r = [`provider=${encodeURIComponent(e)}`];
          return (null == t ? void 0 : t.redirectTo) && r.push(`redirect_to=${encodeURIComponent(t.redirectTo)}`),
            (null == t ? void 0 : t.scopes) && r.push(`scopes=${encodeURIComponent(t.scopes)}`),
            `${this.url}/authorize?${r.join("&")}`
        }
        signUpWithEmail(e, t, r = {}) {
          return w(this, void 0, void 0, (function* () {
            try {
              const s = Object.assign({}, this.headers);
              let n = "";
              r.redirectTo && (n = "?redirect_to=" + encodeURIComponent(r.redirectTo));
              const i = yield u(this.fetch, `${this.url}/signup${n}`, {
                email: e,
                password: t,
                data: r.data,
                gotrue_meta_security: {
                  hcaptcha_token: r.captchaToken
                }
              }, {
                headers: s
              })
                , o = Object.assign({}, i);
              return o.expires_in && (o.expires_at = y(i.expires_in)),
              {
                data: o,
                error: null
              }
            } catch (e) {
              return {
                data: null,
                error: e
              }
            }
          }
          ))
        }
        signInWithEmail(e, t, r = {}) {
          return w(this, void 0, void 0, (function* () {
            try {
              const s = Object.assign({}, this.headers);
              let n = "?grant_type=password";
              r.redirectTo && (n += "&redirect_to=" + encodeURIComponent(r.redirectTo));
              const i = yield u(this.fetch, `${this.url}/token${n}`, {
                email: e,
                password: t
              }, {
                headers: s
              })
                , o = Object.assign({}, i);
              return o.expires_in && (o.expires_at = y(i.expires_in)),
              {
                data: o,
                error: null
              }
            } catch (e) {
              return {
                data: null,
                error: e
              }
            }
          }
          ))
        }
        signUpWithPhone(e, t, r = {}) {
          return w(this, void 0, void 0, (function* () {
            try {
              const s = Object.assign({}, this.headers)
                , n = yield u(this.fetch, `${this.url}/signup`, {
                  phone: e,
                  password: t,
                  data: r.data,
                  gotrue_meta_security: {
                    hcaptcha_token: r.captchaToken
                  }
                }, {
                  headers: s
                })
                , i = Object.assign({}, n);
              return i.expires_in && (i.expires_at = y(n.expires_in)),
              {
                data: i,
                error: null
              }
            } catch (e) {
              return {
                data: null,
                error: e
              }
            }
          }
          ))
        }
        signInWithPhone(e, t) {
          return w(this, void 0, void 0, (function* () {
            try {
              const r = Object.assign({}, this.headers)
                , s = "?grant_type=password"
                , n = yield u(this.fetch, `${this.url}/token${s}`, {
                  phone: e,
                  password: t
                }, {
                  headers: r
                })
                , i = Object.assign({}, n);
              return i.expires_in && (i.expires_at = y(n.expires_in)),
              {
                data: i,
                error: null
              }
            } catch (e) {
              return {
                data: null,
                error: e
              }
            }
          }
          ))
        }
        signInWithOpenIDConnect({ id_token: e, nonce: t, client_id: r, issuer: s, provider: n }) {
          return w(this, void 0, void 0, (function* () {
            try {
              const i = Object.assign({}, this.headers)
                , o = "?grant_type=id_token"
                , a = yield u(this.fetch, `${this.url}/token${o}`, {
                  id_token: e,
                  nonce: t,
                  client_id: r,
                  issuer: s,
                  provider: n
                }, {
                  headers: i
                })
                , h = Object.assign({}, a);
              return h.expires_in && (h.expires_at = y(a.expires_in)),
              {
                data: h,
                error: null
              }
            } catch (e) {
              return {
                data: null,
                error: e
              }
            }
          }
          ))
        }
        sendMagicLinkEmail(e, t = {}) {
          var r;
          return w(this, void 0, void 0, (function* () {
            try {
              const s = Object.assign({}, this.headers);
              let n = "";
              t.redirectTo && (n += "?redirect_to=" + encodeURIComponent(t.redirectTo));
              const i = null === (r = t.shouldCreateUser) || void 0 === r || r;
              return {
                data: yield u(this.fetch, `${this.url}/otp${n}`, {
                  email: e,
                  create_user: i,
                  gotrue_meta_security: {
                    hcaptcha_token: t.captchaToken
                  }
                }, {
                  headers: s
                }),
                error: null
              }
            } catch (e) {
              return {
                data: null,
                error: e
              }
            }
          }
          ))
        }
        sendMobileOTP(e, t = {}) {
          var r;
          return w(this, void 0, void 0, (function* () {
            try {
              const s = null === (r = t.shouldCreateUser) || void 0 === r || r
                , n = Object.assign({}, this.headers);
              return {
                data: yield u(this.fetch, `${this.url}/otp`, {
                  phone: e,
                  create_user: s,
                  gotrue_meta_security: {
                    hcaptcha_token: t.captchaToken
                  }
                }, {
                  headers: n
                }),
                error: null
              }
            } catch (e) {
              return {
                data: null,
                error: e
              }
            }
          }
          ))
        }
        signOut(e) {
          return w(this, void 0, void 0, (function* () {
            try {
              return yield u(this.fetch, `${this.url}/logout`, {}, {
                headers: this._createRequestHeaders(e),
                noResolveJson: !0
              }),
              {
                error: null
              }
            } catch (e) {
              return {
                error: e
              }
            }
          }
          ))
        }
        verifyMobileOTP(e, t, r = {}) {
          return w(this, void 0, void 0, (function* () {
            try {
              const s = Object.assign({}, this.headers)
                , n = yield u(this.fetch, `${this.url}/verify`, {
                  phone: e,
                  token: t,
                  type: "sms",
                  redirect_to: r.redirectTo
                }, {
                  headers: s
                })
                , i = Object.assign({}, n);
              return i.expires_in && (i.expires_at = y(n.expires_in)),
              {
                data: i,
                error: null
              }
            } catch (e) {
              return {
                data: null,
                error: e
              }
            }
          }
          ))
        }
        verifyOTP({ email: e, phone: t, token: r, type: s = "sms" }, n = {}) {
          return w(this, void 0, void 0, (function* () {
            try {
              const i = Object.assign({}, this.headers)
                , o = yield u(this.fetch, `${this.url}/verify`, {
                  email: e,
                  phone: t,
                  token: r,
                  type: s,
                  redirect_to: n.redirectTo
                }, {
                  headers: i
                })
                , a = Object.assign({}, o);
              return a.expires_in && (a.expires_at = y(o.expires_in)),
              {
                data: a,
                error: null
              }
            } catch (e) {
              return {
                data: null,
                error: e
              }
            }
          }
          ))
        }
        inviteUserByEmail(e, t = {}) {
          return w(this, void 0, void 0, (function* () {
            try {
              const r = Object.assign({}, this.headers);
              let s = "";
              return t.redirectTo && (s += "?redirect_to=" + encodeURIComponent(t.redirectTo)),
              {
                data: yield u(this.fetch, `${this.url}/invite${s}`, {
                  email: e,
                  data: t.data
                }, {
                  headers: r
                }),
                error: null
              }
            } catch (e) {
              return {
                data: null,
                error: e
              }
            }
          }
          ))
        }
        resetPasswordForEmail(e, t = {}) {
          return w(this, void 0, void 0, (function* () {
            try {
              const r = Object.assign({}, this.headers);
              let s = "";
              return t.redirectTo && (s += "?redirect_to=" + encodeURIComponent(t.redirectTo)),
              {
                data: yield u(this.fetch, `${this.url}/recover${s}`, {
                  email: e,
                  gotrue_meta_security: {
                    hcaptcha_token: t.captchaToken
                  }
                }, {
                  headers: r
                }),
                error: null
              }
            } catch (e) {
              return {
                data: null,
                error: e
              }
            }
          }
          ))
        }
        refreshAccessToken(e) {
          return w(this, void 0, void 0, (function* () {
            try {
              const t = yield u(this.fetch, `${this.url}/token?grant_type=refresh_token`, {
                refresh_token: e
              }, {
                headers: this.headers
              })
                , r = Object.assign({}, t);
              return r.expires_in && (r.expires_at = y(t.expires_in)),
              {
                data: r,
                error: null
              }
            } catch (e) {
              return {
                data: null,
                error: e
              }
            }
          }
          ))
        }
        setAuthCookie(e, t) {
          "POST" !== e.method && (t.setHeader("Allow", "POST"),
            t.status(405).end("Method Not Allowed"));
          const { event: r, session: s } = e.body;
          if (!r)
            throw new Error("Auth event missing!");
          if ("SIGNED_IN" === r) {
            if (!s)
              throw new Error("Auth session missing!");
            f(e, t, [{
              key: "access-token",
              value: s.access_token
            }, {
              key: "refresh-token",
              value: s.refresh_token
            }].map((e => {
              var t;
              return {
                name: `${this.cookieName()}-${e.key}`,
                value: e.value,
                domain: this.cookieOptions.domain,
                maxAge: null !== (t = this.cookieOptions.lifetime) && void 0 !== t ? t : 0,
                path: this.cookieOptions.path,
                sameSite: this.cookieOptions.sameSite
              }
            }
            )))
          }
          "SIGNED_OUT" === r && f(e, t, ["access-token", "refresh-token"].map((e => ({
            name: `${this.cookieName()}-${e}`,
            value: "",
            maxAge: -1
          })))),
            t.status(200).json({})
        }
        deleteAuthCookie(e, t, { redirectTo: r = "/" }) {
          return f(e, t, ["access-token", "refresh-token"].map((e => ({
            name: `${this.cookieName()}-${e}`,
            value: "",
            maxAge: -1
          })))),
            t.redirect(307, r)
        }
        getAuthCookieString(e, t) {
          "POST" !== e.method && (t.setHeader("Allow", "POST"),
            t.status(405).end("Method Not Allowed"));
          const { event: r, session: s } = e.body;
          if (!r)
            throw new Error("Auth event missing!");
          if ("SIGNED_IN" === r) {
            if (!s)
              throw new Error("Auth session missing!");
            return d(e, t, [{
              key: "access-token",
              value: s.access_token
            }, {
              key: "refresh-token",
              value: s.refresh_token
            }].map((e => {
              var t;
              return {
                name: `${this.cookieName()}-${e.key}`,
                value: e.value,
                domain: this.cookieOptions.domain,
                maxAge: null !== (t = this.cookieOptions.lifetime) && void 0 !== t ? t : 0,
                path: this.cookieOptions.path,
                sameSite: this.cookieOptions.sameSite
              }
            }
            )))
          }
          return "SIGNED_OUT" === r ? d(e, t, ["access-token", "refresh-token"].map((e => ({
            name: `${this.cookieName()}-${e}`,
            value: "",
            maxAge: -1
          })))) : t.getHeader("Set-Cookie")
        }
        generateLink(e, t, r = {}) {
          return w(this, void 0, void 0, (function* () {
            try {
              return {
                data: yield u(this.fetch, `${this.url}/admin/generate_link`, {
                  type: e,
                  email: t,
                  password: r.password,
                  data: r.data,
                  redirect_to: r.redirectTo
                }, {
                  headers: this.headers
                }),
                error: null
              }
            } catch (e) {
              return {
                data: null,
                error: e
              }
            }
          }
          ))
        }
        createUser(e) {
          return w(this, void 0, void 0, (function* () {
            try {
              const t = yield u(this.fetch, `${this.url}/admin/users`, e, {
                headers: this.headers
              });
              return {
                user: t,
                data: t,
                error: null
              }
            } catch (e) {
              return {
                user: null,
                data: null,
                error: e
              }
            }
          }
          ))
        }
        listUsers() {
          return w(this, void 0, void 0, (function* () {
            try {
              return {
                data: (yield c(this.fetch, `${this.url}/admin/users`, {
                  headers: this.headers
                })).users,
                error: null
              }
            } catch (e) {
              return {
                data: null,
                error: e
              }
            }
          }
          ))
        }
        getUserById(e) {
          return w(this, void 0, void 0, (function* () {
            try {
              return {
                data: yield c(this.fetch, `${this.url}/admin/users/${e}`, {
                  headers: this.headers
                }),
                error: null
              }
            } catch (e) {
              return {
                data: null,
                error: e
              }
            }
          }
          ))
        }
        getUserByCookie(e, t) {
          return w(this, void 0, void 0, (function* () {
            try {
              if (!e.cookies)
                throw new Error("Not able to parse cookies! When using Express make sure the cookie-parser middleware is in use!");
              const r = e.cookies[`${this.cookieName()}-access-token`]
                , s = e.cookies[`${this.cookieName()}-refresh-token`];
              if (!r)
                throw new Error("No cookie found!");
              const { user: n, error: i } = yield this.getUser(r);
              if (i) {
                if (!s)
                  throw new Error("No refresh_token cookie found!");
                if (!t)
                  throw new Error("You need to pass the res object to automatically refresh the session!");
                const { data: r, error: n } = yield this.refreshAccessToken(s);
                if (n)
                  throw n;
                if (r)
                  return f(e, t, [{
                    key: "access-token",
                    value: r.access_token
                  }, {
                    key: "refresh-token",
                    value: r.refresh_token
                  }].map((e => {
                    var t;
                    return {
                      name: `${this.cookieName()}-${e.key}`,
                      value: e.value,
                      domain: this.cookieOptions.domain,
                      maxAge: null !== (t = this.cookieOptions.lifetime) && void 0 !== t ? t : 0,
                      path: this.cookieOptions.path,
                      sameSite: this.cookieOptions.sameSite
                    }
                  }
                  ))),
                  {
                    token: r.access_token,
                    user: r.user,
                    data: r.user,
                    error: null
                  }
              }
              return {
                token: r,
                user: n,
                data: n,
                error: null
              }
            } catch (e) {
              return {
                token: null,
                user: null,
                data: null,
                error: e
              }
            }
          }
          ))
        }
        updateUserById(e, t) {
          return w(this, void 0, void 0, (function* () {
            try {
              const r = yield l(this.fetch, `${this.url}/admin/users/${e}`, t, {
                headers: this.headers
              });
              return {
                user: r,
                data: r,
                error: null
              }
            } catch (e) {
              return {
                user: null,
                data: null,
                error: e
              }
            }
          }
          ))
        }
        deleteUser(e) {
          return w(this, void 0, void 0, (function* () {
            try {
              const t = yield function (e, t, r, s) {
                return o(this, void 0, void 0, (function* () {
                  return h(e, "DELETE", t, s, r)
                }
                ))
              }(this.fetch, `${this.url}/admin/users/${e}`, {}, {
                headers: this.headers
              });
              return {
                user: t,
                data: t,
                error: null
              }
            } catch (e) {
              return {
                user: null,
                data: null,
                error: e
              }
            }
          }
          ))
        }
        getUser(e) {
          return w(this, void 0, void 0, (function* () {
            try {
              const t = yield c(this.fetch, `${this.url}/user`, {
                headers: this._createRequestHeaders(e)
              });
              return {
                user: t,
                data: t,
                error: null
              }
            } catch (e) {
              return {
                user: null,
                data: null,
                error: e
              }
            }
          }
          ))
        }
        updateUser(e, t) {
          return w(this, void 0, void 0, (function* () {
            try {
              const r = yield l(this.fetch, `${this.url}/user`, t, {
                headers: this._createRequestHeaders(e)
              });
              return {
                user: r,
                data: r,
                error: null
              }
            } catch (e) {
              return {
                user: null,
                data: null,
                error: e
              }
            }
          }
          ))
        }
      }
      var S = function (e, t, r, s) {
        return new (r || (r = Promise))((function (n, i) {
          function o(e) {
            try {
              h(s.next(e))
            } catch (e) {
              i(e)
            }
          }
          function a(e) {
            try {
              h(s.throw(e))
            } catch (e) {
              i(e)
            }
          }
          function h(e) {
            var t;
            e.done ? n(e.value) : (t = e.value,
              t instanceof r ? t : new r((function (e) {
                e(t)
              }
              ))).then(o, a)
          }
          h((s = s.apply(e, t || [])).next())
        }
        ))
      };
      !function () {
        if ("object" != typeof globalThis)
          try {
            Object.defineProperty(Object.prototype, "__magic__", {
              get: function () {
                return this
              },
              configurable: !0
            }),
              __magic__.globalThis = __magic__,
              delete Object.prototype.__magic__
          } catch (e) {
            "undefined" != typeof self && (self.globalThis = self)
          }
      }();
      const k = {
        url: "http://localhost:9999",
        autoRefreshToken: !0,
        persistSession: !0,
        detectSessionInUrl: !0,
        multiTab: !0,
        headers: {
          "X-Client-Info": "gotrue-js/1.22.14"
        }
      };
      class O {
        constructor(e) {
          this.stateChangeEmitters = new Map,
            this.networkRetries = 0;
          const t = Object.assign(Object.assign({}, k), e);
          this.currentUser = null,
            this.currentSession = null,
            this.autoRefreshToken = t.autoRefreshToken,
            this.persistSession = t.persistSession,
            this.multiTab = t.multiTab,
            this.localStorage = t.localStorage || globalThis.localStorage,
            this.api = new T({
              url: t.url,
              headers: t.headers,
              cookieOptions: t.cookieOptions,
              fetch: t.fetch
            }),
            this._recoverSession(),
            this._recoverAndRefresh(),
            this._listenForMultiTabEvents(),
            this._handleVisibilityChange(),
            t.detectSessionInUrl && g() && b("access_token") && this.getSessionFromUrl({
              storeSession: !0
            }).then((({ error: e }) => {
              e && console.error("Error getting session from URL.", e)
            }
            ))
        }
        signUp({ email: e, password: t, phone: r }, s = {}) {
          return S(this, void 0, void 0, (function* () {
            try {
              this._removeSession();
              const { data: n, error: i } = r && t ? yield this.api.signUpWithPhone(r, t, {
                data: s.data,
                captchaToken: s.captchaToken
              }) : yield this.api.signUpWithEmail(e, t, {
                redirectTo: s.redirectTo,
                data: s.data,
                captchaToken: s.captchaToken
              });
              if (i)
                throw i;
              if (!n)
                throw "An error occurred on sign up.";
              let o = null
                , a = null;
              return n.access_token && (o = n,
                a = o.user,
                this._saveSession(o),
                this._notifyAllSubscribers("SIGNED_IN")),
                n.id && (a = n),
              {
                user: a,
                session: o,
                error: null
              }
            } catch (e) {
              return {
                user: null,
                session: null,
                error: e
              }
            }
          }
          ))
        }
        signIn({ email: e, phone: t, password: r, refreshToken: s, provider: n, oidc: i }, o = {}) {
          return S(this, void 0, void 0, (function* () {
            try {
              if (this._removeSession(),
                e && !r) {
                const { error: t } = yield this.api.sendMagicLinkEmail(e, {
                  redirectTo: o.redirectTo,
                  shouldCreateUser: o.shouldCreateUser,
                  captchaToken: o.captchaToken
                });
                return {
                  user: null,
                  session: null,
                  error: t
                }
              }
              if (e && r)
                return this._handleEmailSignIn(e, r, {
                  redirectTo: o.redirectTo
                });
              if (t && !r) {
                const { error: e } = yield this.api.sendMobileOTP(t, {
                  shouldCreateUser: o.shouldCreateUser,
                  captchaToken: o.captchaToken
                });
                return {
                  user: null,
                  session: null,
                  error: e
                }
              }
              if (t && r)
                return this._handlePhoneSignIn(t, r);
              if (s) {
                const { error: e } = yield this._callRefreshToken(s);
                if (e)
                  throw e;
                return {
                  user: this.currentUser,
                  session: this.currentSession,
                  error: null
                }
              }
              if (n)
                return this._handleProviderSignIn(n, {
                  redirectTo: o.redirectTo,
                  scopes: o.scopes
                });
              if (i)
                return this._handleOpenIDConnectSignIn(i);
              throw new Error("You must provide either an email, phone number, a third-party provider or OpenID Connect.")
            } catch (e) {
              return {
                user: null,
                session: null,
                error: e
              }
            }
          }
          ))
        }
        verifyOTP(e, t = {}) {
          return S(this, void 0, void 0, (function* () {
            try {
              this._removeSession();
              const { data: r, error: s } = yield this.api.verifyOTP(e, t);
              if (s)
                throw s;
              if (!r)
                throw "An error occurred on token verification.";
              let n = null
                , i = null;
              return r.access_token && (n = r,
                i = n.user,
                this._saveSession(n),
                this._notifyAllSubscribers("SIGNED_IN")),
                r.id && (i = r),
              {
                user: i,
                session: n,
                error: null
              }
            } catch (e) {
              return {
                user: null,
                session: null,
                error: e
              }
            }
          }
          ))
        }
        user() {
          return this.currentUser
        }
        session() {
          return this.currentSession
        }
        refreshSession() {
          var e;
          return S(this, void 0, void 0, (function* () {
            try {
              if (!(null === (e = this.currentSession) || void 0 === e ? void 0 : e.access_token))
                throw new Error("Not logged in.");
              const { error: t } = yield this._callRefreshToken();
              if (t)
                throw t;
              return {
                data: this.currentSession,
                user: this.currentUser,
                error: null
              }
            } catch (e) {
              return {
                data: null,
                user: null,
                error: e
              }
            }
          }
          ))
        }
        update(e) {
          var t;
          return S(this, void 0, void 0, (function* () {
            try {
              if (!(null === (t = this.currentSession) || void 0 === t ? void 0 : t.access_token))
                throw new Error("Not logged in.");
              const { user: r, error: s } = yield this.api.updateUser(this.currentSession.access_token, e);
              if (s)
                throw s;
              if (!r)
                throw Error("Invalid user data.");
              const n = Object.assign(Object.assign({}, this.currentSession), {
                user: r
              });
              return this._saveSession(n),
                this._notifyAllSubscribers("USER_UPDATED"),
              {
                data: r,
                user: r,
                error: null
              }
            } catch (e) {
              return {
                data: null,
                user: null,
                error: e
              }
            }
          }
          ))
        }
        setSession(e) {
          return S(this, void 0, void 0, (function* () {
            try {
              if (!e)
                throw new Error("No current session.");
              const { data: t, error: r } = yield this.api.refreshAccessToken(e);
              return r ? {
                session: null,
                error: r
              } : (this._saveSession(t),
                this._notifyAllSubscribers("SIGNED_IN"),
              {
                session: t,
                error: null
              })
            } catch (e) {
              return {
                error: e,
                session: null
              }
            }
          }
          ))
        }
        setAuth(e) {
          return this.currentSession = Object.assign(Object.assign({}, this.currentSession), {
            access_token: e,
            token_type: "bearer",
            user: this.user()
          }),
            this._notifyAllSubscribers("TOKEN_REFRESHED"),
            this.currentSession
        }
        getSessionFromUrl(e) {
          return S(this, void 0, void 0, (function* () {
            try {
              if (!g())
                throw new Error("No browser detected.");
              const t = b("error_description");
              if (t)
                throw new Error(t);
              const r = b("provider_token")
                , s = b("access_token");
              if (!s)
                throw new Error("No access_token detected.");
              const n = b("expires_in");
              if (!n)
                throw new Error("No expires_in detected.");
              const i = b("refresh_token");
              if (!i)
                throw new Error("No refresh_token detected.");
              const o = b("token_type");
              if (!o)
                throw new Error("No token_type detected.");
              const a = Math.round(Date.now() / 1e3) + parseInt(n)
                , { user: h, error: c } = yield this.api.getUser(s);
              if (c)
                throw c;
              const u = {
                provider_token: r,
                access_token: s,
                expires_in: parseInt(n),
                expires_at: a,
                refresh_token: i,
                token_type: o,
                user: h
              };
              if (null == e ? void 0 : e.storeSession) {
                this._saveSession(u);
                const e = b("type");
                this._notifyAllSubscribers("SIGNED_IN"),
                  "recovery" === e && this._notifyAllSubscribers("PASSWORD_RECOVERY")
              }
              return window.location.hash = "",
              {
                data: u,
                error: null
              }
            } catch (e) {
              return {
                data: null,
                error: e
              }
            }
          }
          ))
        }
        signOut() {
          var e;
          return S(this, void 0, void 0, (function* () {
            const t = null === (e = this.currentSession) || void 0 === e ? void 0 : e.access_token;
            if (this._removeSession(),
              this._notifyAllSubscribers("SIGNED_OUT"),
              t) {
              const { error: e } = yield this.api.signOut(t);
              if (e)
                return {
                  error: e
                }
            }
            return {
              error: null
            }
          }
          ))
        }
        onAuthStateChange(e) {
          try {
            const t = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (function (e) {
              const t = 16 * Math.random() | 0;
              return ("x" == e ? t : 3 & t | 8).toString(16)
            }
            ))
              , r = {
                id: t,
                callback: e,
                unsubscribe: () => {
                  this.stateChangeEmitters.delete(t)
                }
              };
            return this.stateChangeEmitters.set(t, r),
            {
              data: r,
              error: null
            }
          } catch (e) {
            return {
              data: null,
              error: e
            }
          }
        }
        _handleEmailSignIn(e, t, r = {}) {
          var s, n;
          return S(this, void 0, void 0, (function* () {
            try {
              const { data: i, error: o } = yield this.api.signInWithEmail(e, t, {
                redirectTo: r.redirectTo
              });
              return o || !i ? {
                data: null,
                user: null,
                session: null,
                error: o
              } : (((null === (s = null == i ? void 0 : i.user) || void 0 === s ? void 0 : s.confirmed_at) || (null === (n = null == i ? void 0 : i.user) || void 0 === n ? void 0 : n.email_confirmed_at)) && (this._saveSession(i),
                this._notifyAllSubscribers("SIGNED_IN")),
              {
                data: i,
                user: i.user,
                session: i,
                error: null
              })
            } catch (e) {
              return {
                data: null,
                user: null,
                session: null,
                error: e
              }
            }
          }
          ))
        }
        _handlePhoneSignIn(e, t) {
          var r;
          return S(this, void 0, void 0, (function* () {
            try {
              const { data: s, error: n } = yield this.api.signInWithPhone(e, t);
              return n || !s ? {
                data: null,
                user: null,
                session: null,
                error: n
              } : ((null === (r = null == s ? void 0 : s.user) || void 0 === r ? void 0 : r.phone_confirmed_at) && (this._saveSession(s),
                this._notifyAllSubscribers("SIGNED_IN")),
              {
                data: s,
                user: s.user,
                session: s,
                error: null
              })
            } catch (e) {
              return {
                data: null,
                user: null,
                session: null,
                error: e
              }
            }
          }
          ))
        }
        _handleProviderSignIn(e, t = {}) {
          const r = this.api.getUrlForProvider(e, {
            redirectTo: t.redirectTo,
            scopes: t.scopes
          });
          try {
            return g() && (window.location.href = r),
            {
              provider: e,
              url: r,
              data: null,
              session: null,
              user: null,
              error: null
            }
          } catch (t) {
            return r ? {
              provider: e,
              url: r,
              data: null,
              session: null,
              user: null,
              error: null
            } : {
              data: null,
              user: null,
              session: null,
              error: t
            }
          }
        }
        _handleOpenIDConnectSignIn({ id_token: e, nonce: t, client_id: r, issuer: s, provider: n }) {
          return S(this, void 0, void 0, (function* () {
            if (e && t && (r && s || n))
              try {
                const { data: i, error: o } = yield this.api.signInWithOpenIDConnect({
                  id_token: e,
                  nonce: t,
                  client_id: r,
                  issuer: s,
                  provider: n
                });
                return o || !i ? {
                  user: null,
                  session: null,
                  error: o
                } : (this._saveSession(i),
                  this._notifyAllSubscribers("SIGNED_IN"),
                {
                  user: i.user,
                  session: i,
                  error: null
                })
              } catch (e) {
                return {
                  user: null,
                  session: null,
                  error: e
                }
              }
            throw new Error("You must provide a OpenID Connect provider with your id token and nonce.")
          }
          ))
        }
        _recoverSession() {
          try {
            const e = ((e, t) => {
              const r = g() && (null == e ? void 0 : e.getItem("supabase.auth.token"));
              if (!r || "string" != typeof r)
                return null;
              try {
                return JSON.parse(r)
              } catch (e) {
                return r
              }
            }
            )(this.localStorage);
            if (!e)
              return null;
            const { currentSession: t, expiresAt: r } = e;
            r >= Math.round(Date.now() / 1e3) + 10 && (null == t ? void 0 : t.user) && (this._saveSession(t),
              this._notifyAllSubscribers("SIGNED_IN"))
          } catch (e) {
            console.log("error", e)
          }
        }
        _recoverAndRefresh() {
          return S(this, void 0, void 0, (function* () {
            try {
              const t = yield (e = this.localStorage,
                n,
                m(void 0, void 0, void 0, (function* () {
                  const t = g() && (yield null == e ? void 0 : e.getItem("supabase.auth.token"));
                  if (!t)
                    return null;
                  try {
                    return JSON.parse(t)
                  } catch (e) {
                    return t
                  }
                }
                )));
              if (!t)
                return null;
              const { currentSession: r, expiresAt: i } = t;
              if (i < Math.round(Date.now() / 1e3) + 10)
                if (this.autoRefreshToken && r.refresh_token) {
                  this.networkRetries++;
                  const { error: e } = yield this._callRefreshToken(r.refresh_token);
                  if (e) {
                    if (console.log(e.message),
                      e.message === s && this.networkRetries < 10)
                      return this.refreshTokenTimer && clearTimeout(this.refreshTokenTimer),
                        void (this.refreshTokenTimer = setTimeout((() => this._recoverAndRefresh()), 100 * Math.pow(2, this.networkRetries)));
                    yield this._removeSession()
                  }
                  this.networkRetries = 0
                } else
                  this._removeSession();
              else
                r ? (this._saveSession(r),
                  this._notifyAllSubscribers("SIGNED_IN")) : (console.log("Current session is missing data."),
                    this._removeSession())
            } catch (e) {
              return console.error(e),
                null
            }
            var e
          }
          ))
        }
        _callRefreshToken(e) {
          var t;
          return void 0 === e && (e = null === (t = this.currentSession) || void 0 === t ? void 0 : t.refresh_token),
            S(this, void 0, void 0, (function* () {
              try {
                if (!e)
                  throw new Error("No current session.");
                const { data: t, error: r } = yield this.api.refreshAccessToken(e);
                if (r)
                  throw r;
                if (!t)
                  throw Error("Invalid session data.");
                return this._saveSession(t),
                  this._notifyAllSubscribers("TOKEN_REFRESHED"),
                  this._notifyAllSubscribers("SIGNED_IN"),
                {
                  data: t,
                  error: null
                }
              } catch (e) {
                return {
                  data: null,
                  error: e
                }
              }
            }
            ))
        }
        _notifyAllSubscribers(e) {
          this.stateChangeEmitters.forEach((t => t.callback(e, this.currentSession)))
        }
        _saveSession(e) {
          this.currentSession = e,
            this.currentUser = e.user;
          const t = e.expires_at;
          if (t) {
            const e = t - Math.round(Date.now() / 1e3)
              , r = e > 10 ? 10 : .5;
            this._startAutoRefreshToken(1e3 * (e - r))
          }
          this.persistSession && e.expires_at && this._persistSession(this.currentSession)
        }
        _persistSession(e) {
          const t = {
            currentSession: e,
            expiresAt: e.expires_at
          };
          ((e, t, r) => {
            m(void 0, void 0, void 0, (function* () {
              g() && (yield null == e ? void 0 : e.setItem("supabase.auth.token", JSON.stringify(r)))
            }
            ))
          }
          )(this.localStorage, 0, t)
        }
        _removeSession() {
          return S(this, void 0, void 0, (function* () {
            var e;
            this.currentSession = null,
              this.currentUser = null,
              this.refreshTokenTimer && clearTimeout(this.refreshTokenTimer),
              e = this.localStorage,
              m(void 0, void 0, void 0, (function* () {
                g() && (yield null == e ? void 0 : e.removeItem("supabase.auth.token"))
              }
              ))
          }
          ))
        }
        _startAutoRefreshToken(e) {
          this.refreshTokenTimer && clearTimeout(this.refreshTokenTimer),
            e <= 0 || !this.autoRefreshToken || (this.refreshTokenTimer = setTimeout((() => S(this, void 0, void 0, (function* () {
              this.networkRetries++;
              const { error: e } = yield this._callRefreshToken();
              e || (this.networkRetries = 0),
                (null == e ? void 0 : e.message) === s && this.networkRetries < 10 && this._startAutoRefreshToken(100 * Math.pow(2, this.networkRetries))
            }
            ))), e),
              "function" == typeof this.refreshTokenTimer.unref && this.refreshTokenTimer.unref())
        }
        _listenForMultiTabEvents() {
          if (!this.multiTab || !g() || !(null === window || void 0 === window ? void 0 : window.addEventListener))
            return !1;
          try {
            null === window || void 0 === window || window.addEventListener("storage", (e => {
              var t;
              if (e.key === n) {
                const r = JSON.parse(String(e.newValue));
                (null === (t = null == r ? void 0 : r.currentSession) || void 0 === t ? void 0 : t.access_token) ? (this._saveSession(r.currentSession),
                  this._notifyAllSubscribers("SIGNED_IN")) : (this._removeSession(),
                    this._notifyAllSubscribers("SIGNED_OUT"))
              }
            }
            ))
          } catch (e) {
            console.error("_listenForMultiTabEvents", e)
          }
        }
        _handleVisibilityChange() {
          if (!this.multiTab || !g() || !(null === window || void 0 === window ? void 0 : window.addEventListener))
            return !1;
          try {
            null === window || void 0 === window || window.addEventListener("visibilitychange", (() => {
              "visible" === document.visibilityState && this._recoverAndRefresh()
            }
            ))
          } catch (e) {
            console.error("_handleVisibilityChange", e)
          }
        }
      }
    }
    ,
    501: (e, t, r) => {
      "use strict";
      r.r(t),
        r.d(t, {
          PostgrestBuilder: () => i,
          PostgrestClient: () => l,
          PostgrestFilterBuilder: () => a,
          PostgrestQueryBuilder: () => h
        });
      var s = r(98)
        , n = r.n(s);
      class i {
        constructor(e) {
          let t;
          Object.assign(this, e),
            t = e.fetch ? e.fetch : "undefined" == typeof fetch ? n() : fetch,
            this.fetch = (...e) => t(...e),
            this.shouldThrowOnError = e.shouldThrowOnError || !1
        }
        throwOnError(e) {
          return null == e && (e = !0),
            this.shouldThrowOnError = e,
            this
        }
        then(e, t) {
          void 0 === this.schema || (["GET", "HEAD"].includes(this.method) ? this.headers["Accept-Profile"] = this.schema : this.headers["Content-Profile"] = this.schema),
            "GET" !== this.method && "HEAD" !== this.method && (this.headers["Content-Type"] = "application/json");
          let r = this.fetch(this.url.toString(), {
            method: this.method,
            headers: this.headers,
            body: JSON.stringify(this.body),
            signal: this.signal
          }).then((e => {
            return t = this,
              r = void 0,
              n = function* () {
                var t, r, s;
                let n = null
                  , i = null
                  , o = null;
                if (e.ok) {
                  const n = null === (t = this.headers.Prefer) || void 0 === t ? void 0 : t.split(",").includes("return=minimal");
                  if ("HEAD" !== this.method && !n) {
                    const t = yield e.text();
                    t && (i = "text/csv" === this.headers.Accept ? t : JSON.parse(t))
                  }
                  const a = null === (r = this.headers.Prefer) || void 0 === r ? void 0 : r.match(/count=(exact|planned|estimated)/)
                    , h = null === (s = e.headers.get("content-range")) || void 0 === s ? void 0 : s.split("/");
                  a && h && h.length > 1 && (o = parseInt(h[1]))
                } else {
                  const t = yield e.text();
                  try {
                    n = JSON.parse(t)
                  } catch (e) {
                    n = {
                      message: t
                    }
                  }
                  if (n && this.shouldThrowOnError)
                    throw n
                }
                return {
                  error: n,
                  data: i,
                  count: o,
                  status: e.status,
                  statusText: e.statusText,
                  body: i
                }
              }
              ,
              new ((s = void 0) || (s = Promise))((function (e, i) {
                function o(e) {
                  try {
                    h(n.next(e))
                  } catch (e) {
                    i(e)
                  }
                }
                function a(e) {
                  try {
                    h(n.throw(e))
                  } catch (e) {
                    i(e)
                  }
                }
                function h(t) {
                  var r;
                  t.done ? e(t.value) : (r = t.value,
                    r instanceof s ? r : new s((function (e) {
                      e(r)
                    }
                    ))).then(o, a)
                }
                h((n = n.apply(t, r || [])).next())
              }
              ));
            var t, r, s, n
          }
          ));
          return this.shouldThrowOnError || (r = r.catch((e => ({
            error: {
              message: `FetchError: ${e.message}`,
              details: "",
              hint: "",
              code: e.code || ""
            },
            data: null,
            body: null,
            count: null,
            status: 400,
            statusText: "Bad Request"
          })))),
            r.then(e, t)
        }
      }
      class o extends i {
        select(e = "*") {
          let t = !1;
          const r = e.split("").map((e => /\s/.test(e) && !t ? "" : ('"' === e && (t = !t),
            e))).join("");
          return this.url.searchParams.set("select", r),
            this
        }
        order(e, { ascending: t = !0, nullsFirst: r = !1, foreignTable: s } = {}) {
          const n = void 0 === s ? "order" : `${s}.order`
            , i = this.url.searchParams.get(n);
          return this.url.searchParams.set(n, `${i ? `${i},` : ""}${e}.${t ? "asc" : "desc"}.${r ? "nullsfirst" : "nullslast"}`),
            this
        }
        limit(e, { foreignTable: t } = {}) {
          const r = void 0 === t ? "limit" : `${t}.limit`;
          return this.url.searchParams.set(r, `${e}`),
            this
        }
        range(e, t, { foreignTable: r } = {}) {
          const s = void 0 === r ? "offset" : `${r}.offset`
            , n = void 0 === r ? "limit" : `${r}.limit`;
          return this.url.searchParams.set(s, `${e}`),
            this.url.searchParams.set(n, "" + (t - e + 1)),
            this
        }
        abortSignal(e) {
          return this.signal = e,
            this
        }
        single() {
          return this.headers.Accept = "application/vnd.pgrst.object+json",
            this
        }
        maybeSingle() {
          this.headers.Accept = "application/vnd.pgrst.object+json";
          const e = new o(this);
          return e.then = (e, t) => this.then((t => {
            var r, s;
            return (null === (s = null === (r = t.error) || void 0 === r ? void 0 : r.details) || void 0 === s ? void 0 : s.includes("Results contain 0 rows")) ? e({
              error: null,
              data: null,
              count: t.count,
              status: 200,
              statusText: "OK",
              body: null
            }) : e(t)
          }
          ), t),
            e
        }
        csv() {
          return this.headers.Accept = "text/csv",
            this
        }
      }
      class a extends o {
        constructor() {
          super(...arguments),
            this.cs = this.contains,
            this.cd = this.containedBy,
            this.sl = this.rangeLt,
            this.sr = this.rangeGt,
            this.nxl = this.rangeGte,
            this.nxr = this.rangeLte,
            this.adj = this.rangeAdjacent,
            this.ov = this.overlaps
        }
        not(e, t, r) {
          return this.url.searchParams.append(`${e}`, `not.${t}.${r}`),
            this
        }
        or(e, { foreignTable: t } = {}) {
          const r = void 0 === t ? "or" : `${t}.or`;
          return this.url.searchParams.append(r, `(${e})`),
            this
        }
        eq(e, t) {
          return this.url.searchParams.append(`${e}`, `eq.${t}`),
            this
        }
        neq(e, t) {
          return this.url.searchParams.append(`${e}`, `neq.${t}`),
            this
        }
        gt(e, t) {
          return this.url.searchParams.append(`${e}`, `gt.${t}`),
            this
        }
        gte(e, t) {
          return this.url.searchParams.append(`${e}`, `gte.${t}`),
            this
        }
        lt(e, t) {
          return this.url.searchParams.append(`${e}`, `lt.${t}`),
            this
        }
        lte(e, t) {
          return this.url.searchParams.append(`${e}`, `lte.${t}`),
            this
        }
        like(e, t) {
          return this.url.searchParams.append(`${e}`, `like.${t}`),
            this
        }
        ilike(e, t) {
          return this.url.searchParams.append(`${e}`, `ilike.${t}`),
            this
        }
        is(e, t) {
          return this.url.searchParams.append(`${e}`, `is.${t}`),
            this
        }
        in(e, t) {
          const r = t.map((e => "string" == typeof e && new RegExp("[,()]").test(e) ? `"${e}"` : `${e}`)).join(",");
          return this.url.searchParams.append(`${e}`, `in.(${r})`),
            this
        }
        contains(e, t) {
          return "string" == typeof t ? this.url.searchParams.append(`${e}`, `cs.${t}`) : Array.isArray(t) ? this.url.searchParams.append(`${e}`, `cs.{${t.join(",")}}`) : this.url.searchParams.append(`${e}`, `cs.${JSON.stringify(t)}`),
            this
        }
        containedBy(e, t) {
          return "string" == typeof t ? this.url.searchParams.append(`${e}`, `cd.${t}`) : Array.isArray(t) ? this.url.searchParams.append(`${e}`, `cd.{${t.join(",")}}`) : this.url.searchParams.append(`${e}`, `cd.${JSON.stringify(t)}`),
            this
        }
        rangeLt(e, t) {
          return this.url.searchParams.append(`${e}`, `sl.${t}`),
            this
        }
        rangeGt(e, t) {
          return this.url.searchParams.append(`${e}`, `sr.${t}`),
            this
        }
        rangeGte(e, t) {
          return this.url.searchParams.append(`${e}`, `nxl.${t}`),
            this
        }
        rangeLte(e, t) {
          return this.url.searchParams.append(`${e}`, `nxr.${t}`),
            this
        }
        rangeAdjacent(e, t) {
          return this.url.searchParams.append(`${e}`, `adj.${t}`),
            this
        }
        overlaps(e, t) {
          return "string" == typeof t ? this.url.searchParams.append(`${e}`, `ov.${t}`) : this.url.searchParams.append(`${e}`, `ov.{${t.join(",")}}`),
            this
        }
        textSearch(e, t, { config: r, type: s = null } = {}) {
          let n = "";
          "plain" === s ? n = "pl" : "phrase" === s ? n = "ph" : "websearch" === s && (n = "w");
          const i = void 0 === r ? "" : `(${r})`;
          return this.url.searchParams.append(`${e}`, `${n}fts${i}.${t}`),
            this
        }
        fts(e, t, { config: r } = {}) {
          const s = void 0 === r ? "" : `(${r})`;
          return this.url.searchParams.append(`${e}`, `fts${s}.${t}`),
            this
        }
        plfts(e, t, { config: r } = {}) {
          const s = void 0 === r ? "" : `(${r})`;
          return this.url.searchParams.append(`${e}`, `plfts${s}.${t}`),
            this
        }
        phfts(e, t, { config: r } = {}) {
          const s = void 0 === r ? "" : `(${r})`;
          return this.url.searchParams.append(`${e}`, `phfts${s}.${t}`),
            this
        }
        wfts(e, t, { config: r } = {}) {
          const s = void 0 === r ? "" : `(${r})`;
          return this.url.searchParams.append(`${e}`, `wfts${s}.${t}`),
            this
        }
        filter(e, t, r) {
          return this.url.searchParams.append(`${e}`, `${t}.${r}`),
            this
        }
        match(e) {
          return Object.keys(e).forEach((t => {
            this.url.searchParams.append(`${t}`, `eq.${e[t]}`)
          }
          )),
            this
        }
      }
      class h extends i {
        constructor(e, { headers: t = {}, schema: r, fetch: s, shouldThrowOnError: n } = {}) {
          super({
            fetch: s,
            shouldThrowOnError: n
          }),
            this.url = new URL(e),
            this.headers = Object.assign({}, t),
            this.schema = r
        }
        select(e = "*", { head: t = !1, count: r = null } = {}) {
          this.method = "GET";
          let s = !1;
          const n = e.split("").map((e => /\s/.test(e) && !s ? "" : ('"' === e && (s = !s),
            e))).join("");
          return this.url.searchParams.set("select", n),
            r && (this.headers.Prefer = `count=${r}`),
            t && (this.method = "HEAD"),
            new a(this)
        }
        insert(e, { upsert: t = !1, onConflict: r, returning: s = "representation", count: n = null } = {}) {
          this.method = "POST";
          const i = [`return=${s}`];
          if (t && i.push("resolution=merge-duplicates"),
            t && void 0 !== r && this.url.searchParams.set("on_conflict", r),
            this.body = e,
            n && i.push(`count=${n}`),
            this.headers.Prefer && i.unshift(this.headers.Prefer),
            this.headers.Prefer = i.join(","),
            Array.isArray(e)) {
            const t = e.reduce(((e, t) => e.concat(Object.keys(t))), []);
            if (t.length > 0) {
              const e = [...new Set(t)].map((e => `"${e}"`));
              this.url.searchParams.set("columns", e.join(","))
            }
          }
          return new a(this)
        }
        upsert(e, { onConflict: t, returning: r = "representation", count: s = null, ignoreDuplicates: n = !1 } = {}) {
          this.method = "POST";
          const i = [`resolution=${n ? "ignore" : "merge"}-duplicates`, `return=${r}`];
          return void 0 !== t && this.url.searchParams.set("on_conflict", t),
            this.body = e,
            s && i.push(`count=${s}`),
            this.headers.Prefer && i.unshift(this.headers.Prefer),
            this.headers.Prefer = i.join(","),
            new a(this)
        }
        update(e, { returning: t = "representation", count: r = null } = {}) {
          this.method = "PATCH";
          const s = [`return=${t}`];
          return this.body = e,
            r && s.push(`count=${r}`),
            this.headers.Prefer && s.unshift(this.headers.Prefer),
            this.headers.Prefer = s.join(","),
            new a(this)
        }
        delete({ returning: e = "representation", count: t = null } = {}) {
          this.method = "DELETE";
          const r = [`return=${e}`];
          return t && r.push(`count=${t}`),
            this.headers.Prefer && r.unshift(this.headers.Prefer),
            this.headers.Prefer = r.join(","),
            new a(this)
        }
      }
      class c extends i {
        constructor(e, { headers: t = {}, schema: r, fetch: s, shouldThrowOnError: n } = {}) {
          super({
            fetch: s,
            shouldThrowOnError: n
          }),
            this.url = new URL(e),
            this.headers = Object.assign({}, t),
            this.schema = r
        }
        rpc(e, { head: t = !1, count: r = null } = {}) {
          return t ? (this.method = "HEAD",
            e && Object.entries(e).forEach((([e, t]) => {
              this.url.searchParams.append(e, t)
            }
            ))) : (this.method = "POST",
              this.body = e),
            r && (void 0 !== this.headers.Prefer ? this.headers.Prefer += `,count=${r}` : this.headers.Prefer = `count=${r}`),
            new a(this)
        }
      }
      const u = {
        "X-Client-Info": "postgrest-js/0.37.2"
      };
      class l {
        constructor(e, { headers: t = {}, schema: r, fetch: s, throwOnError: n } = {}) {
          this.url = e,
            this.headers = Object.assign(Object.assign({}, u), t),
            this.schema = r,
            this.fetch = s,
            this.shouldThrowOnError = n
        }
        auth(e) {
          return this.headers.Authorization = `Bearer ${e}`,
            this
        }
        from(e) {
          const t = `${this.url}/${e}`;
          return new h(t, {
            headers: this.headers,
            schema: this.schema,
            fetch: this.fetch,
            shouldThrowOnError: this.shouldThrowOnError
          })
        }
        rpc(e, t, { head: r = !1, count: s = null } = {}) {
          const n = `${this.url}/rpc/${e}`;
          return new c(n, {
            headers: this.headers,
            schema: this.schema,
            fetch: this.fetch,
            shouldThrowOnError: this.shouldThrowOnError
          }).rpc(t, {
            head: r,
            count: s
          })
        }
      }
    }
    ,
    389: (e, t, r) => {
      "use strict";
      r.r(t),
        r.d(t, {
          RealtimeChannel: () => E,
          RealtimeClient: () => x,
          RealtimePresence: () => O,
          RealtimeSubscription: () => k,
          Transformers: () => n
        });
      var s, n = {};
      r.r(n),
        r.d(n, {
          PostgresTypes: () => s,
          convertCell: () => a,
          convertChangeData: () => i,
          convertColumn: () => o,
          toArray: () => d,
          toBoolean: () => c,
          toJson: () => l,
          toNumber: () => u,
          toTimestampString: () => f
        }),
        function (e) {
          e.abstime = "abstime",
            e.bool = "bool",
            e.date = "date",
            e.daterange = "daterange",
            e.float4 = "float4",
            e.float8 = "float8",
            e.int2 = "int2",
            e.int4 = "int4",
            e.int4range = "int4range",
            e.int8 = "int8",
            e.int8range = "int8range",
            e.json = "json",
            e.jsonb = "jsonb",
            e.money = "money",
            e.numeric = "numeric",
            e.oid = "oid",
            e.reltime = "reltime",
            e.text = "text",
            e.time = "time",
            e.timestamp = "timestamp",
            e.timestamptz = "timestamptz",
            e.timetz = "timetz",
            e.tsrange = "tsrange",
            e.tstzrange = "tstzrange"
        }(s || (s = {}));
      const i = (e, t, r = {}) => {
        var s;
        const n = null !== (s = r.skipTypes) && void 0 !== s ? s : [];
        return Object.keys(t).reduce(((r, s) => (r[s] = o(s, e, t, n),
          r)), {})
      }
        , o = (e, t, r, s) => {
          const n = t.find((t => t.name === e))
            , i = null == n ? void 0 : n.type
            , o = r[e];
          return i && !s.includes(i) ? a(i, o) : h(o)
        }
        , a = (e, t) => {
          if ("_" === e.charAt(0)) {
            const r = e.slice(1, e.length);
            return d(t, r)
          }
          switch (e) {
            case s.bool:
              return c(t);
            case s.float4:
            case s.float8:
            case s.int2:
            case s.int4:
            case s.int8:
            case s.numeric:
            case s.oid:
              return u(t);
            case s.json:
            case s.jsonb:
              return l(t);
            case s.timestamp:
              return f(t);
            case s.abstime:
            case s.date:
            case s.daterange:
            case s.int4range:
            case s.int8range:
            case s.money:
            case s.reltime:
            case s.text:
            case s.time:
            case s.timestamptz:
            case s.timetz:
            case s.tsrange:
            case s.tstzrange:
            default:
              return h(t)
          }
        }
        , h = e => e
        , c = e => {
          switch (e) {
            case "t":
              return !0;
            case "f":
              return !1;
            default:
              return e
          }
        }
        , u = e => {
          if ("string" == typeof e) {
            const t = parseFloat(e);
            if (!Number.isNaN(t))
              return t
          }
          return e
        }
        , l = e => {
          if ("string" == typeof e)
            try {
              return JSON.parse(e)
            } catch (t) {
              return console.log(`JSON parse error: ${t}`),
                e
            }
          return e
        }
        , d = (e, t) => {
          if ("string" != typeof e)
            return e;
          const r = e.length - 1
            , s = e[r];
          if ("{" === e[0] && "}" === s) {
            let s;
            const n = e.slice(1, r);
            try {
              s = JSON.parse("[" + n + "]")
            } catch (e) {
              s = n ? n.split(",") : []
            }
            return s.map((e => a(t, e)))
          }
          return e
        }
        , f = e => "string" == typeof e ? e.replace(" ", "T") : e;
      var p = r(840);
      const v = {
        "X-Client-Info": "realtime-js/1.7.2"
      };
      var m, y, g, b, _;
      !function (e) {
        e[e.connecting = 0] = "connecting",
          e[e.open = 1] = "open",
          e[e.closing = 2] = "closing",
          e[e.closed = 3] = "closed"
      }(m || (m = {})),
        function (e) {
          e.closed = "closed",
            e.errored = "errored",
            e.joined = "joined",
            e.joining = "joining",
            e.leaving = "leaving"
        }(y || (y = {})),
        function (e) {
          e.close = "phx_close",
            e.error = "phx_error",
            e.join = "phx_join",
            e.reply = "phx_reply",
            e.leave = "phx_leave",
            e.access_token = "access_token"
        }(g || (g = {})),
        function (e) {
          e.websocket = "websocket"
        }(b || (b = {})),
        function (e) {
          e.Connecting = "connecting",
            e.Open = "open",
            e.Closing = "closing",
            e.Closed = "closed"
        }(_ || (_ = {}));
      class w {
        constructor(e, t) {
          this.callback = e,
            this.timerCalc = t,
            this.timer = void 0,
            this.tries = 0,
            this.callback = e,
            this.timerCalc = t
        }
        reset() {
          this.tries = 0,
            clearTimeout(this.timer)
        }
        scheduleTimeout() {
          clearTimeout(this.timer),
            this.timer = setTimeout((() => {
              this.tries = this.tries + 1,
                this.callback()
            }
            ), this.timerCalc(this.tries + 1))
        }
      }
      class T {
        constructor() {
          this.HEADER_LENGTH = 1
        }
        decode(e, t) {
          return e.constructor === ArrayBuffer ? t(this._binaryDecode(e)) : t("string" == typeof e ? JSON.parse(e) : {})
        }
        _binaryDecode(e) {
          const t = new DataView(e)
            , r = new TextDecoder;
          return this._decodeBroadcast(e, t, r)
        }
        _decodeBroadcast(e, t, r) {
          const s = t.getUint8(1)
            , n = t.getUint8(2);
          let i = this.HEADER_LENGTH + 2;
          const o = r.decode(e.slice(i, i + s));
          i += s;
          const a = r.decode(e.slice(i, i + n));
          return i += n,
          {
            ref: null,
            topic: o,
            event: a,
            payload: JSON.parse(r.decode(e.slice(i, e.byteLength)))
          }
        }
      }
      class S {
        constructor(e, t, r = {}, s = 1e4) {
          this.channel = e,
            this.event = t,
            this.payload = r,
            this.timeout = s,
            this.sent = !1,
            this.timeoutTimer = void 0,
            this.ref = "",
            this.receivedResp = null,
            this.recHooks = [],
            this.refEvent = null
        }
        resend(e) {
          this.timeout = e,
            this._cancelRefEvent(),
            this.ref = "",
            this.refEvent = null,
            this.receivedResp = null,
            this.sent = !1,
            this.send()
        }
        send() {
          this._hasReceived("timeout") || (this.startTimeout(),
            this.sent = !0,
            this.channel.socket.push({
              topic: this.channel.topic,
              event: this.event,
              payload: this.payload,
              ref: this.ref
            }))
        }
        updatePayload(e) {
          this.payload = Object.assign(Object.assign({}, this.payload), e)
        }
        receive(e, t) {
          var r;
          return this._hasReceived(e) && t(null === (r = this.receivedResp) || void 0 === r ? void 0 : r.response),
            this.recHooks.push({
              status: e,
              callback: t
            }),
            this
        }
        startTimeout() {
          if (this.timeoutTimer)
            return;
          this.ref = this.channel.socket.makeRef(),
            this.refEvent = this.channel.replyEventName(this.ref);
          const e = e => {
            this._cancelRefEvent(),
              this._cancelTimeout(),
              this.receivedResp = e,
              this._matchReceive(e)
          }
            ;
          this.channel instanceof k ? this.channel.on(this.refEvent, e) : this.channel.on(this.refEvent, {}, e),
            this.timeoutTimer = setTimeout((() => {
              this.trigger("timeout", {})
            }
            ), this.timeout)
        }
        trigger(e, t) {
          this.refEvent && this.channel.trigger(this.refEvent, {
            status: e,
            response: t
          })
        }
        destroy() {
          this._cancelRefEvent(),
            this._cancelTimeout()
        }
        _cancelRefEvent() {
          this.refEvent && (this.channel instanceof k ? this.channel.off(this.refEvent) : this.channel.off(this.refEvent, {}))
        }
        _cancelTimeout() {
          clearTimeout(this.timeoutTimer),
            this.timeoutTimer = void 0
        }
        _matchReceive({ status: e, response: t }) {
          this.recHooks.filter((t => t.status === e)).forEach((e => e.callback(t)))
        }
        _hasReceived(e) {
          return this.receivedResp && this.receivedResp.status === e
        }
      }
      class k {
        constructor(e, t = {}, r) {
          this.topic = e,
            this.params = t,
            this.socket = r,
            this.bindings = [],
            this.state = y.closed,
            this.joinedOnce = !1,
            this.pushBuffer = [],
            this.timeout = this.socket.timeout,
            this.joinPush = new S(this, g.join, this.params, this.timeout),
            this.rejoinTimer = new w((() => this.rejoinUntilConnected()), this.socket.reconnectAfterMs),
            this.joinPush.receive("ok", (() => {
              this.state = y.joined,
                this.rejoinTimer.reset(),
                this.pushBuffer.forEach((e => e.send())),
                this.pushBuffer = []
            }
            )),
            this.onClose((() => {
              this.rejoinTimer.reset(),
                this.socket.log("channel", `close ${this.topic} ${this.joinRef()}`),
                this.state = y.closed,
                this.socket.remove(this)
            }
            )),
            this.onError((e => {
              this.isLeaving() || this.isClosed() || (this.socket.log("channel", `error ${this.topic}`, e),
                this.state = y.errored,
                this.rejoinTimer.scheduleTimeout())
            }
            )),
            this.joinPush.receive("timeout", (() => {
              this.isJoining() && (this.socket.log("channel", `timeout ${this.topic}`, this.joinPush.timeout),
                this.state = y.errored,
                this.rejoinTimer.scheduleTimeout())
            }
            )),
            this.on(g.reply, ((e, t) => {
              this.trigger(this.replyEventName(t), e)
            }
            ))
        }
        rejoinUntilConnected() {
          this.rejoinTimer.scheduleTimeout(),
            this.socket.isConnected() && this.rejoin()
        }
        subscribe(e = this.timeout) {
          if (this.joinedOnce)
            throw "tried to subscribe multiple times. 'subscribe' can only be called a single time per channel instance";
          return this.joinedOnce = !0,
            this.rejoin(e),
            this.joinPush
        }
        onClose(e) {
          this.on(g.close, e)
        }
        onError(e) {
          this.on(g.error, (t => e(t)))
        }
        on(e, t) {
          this.bindings.push({
            event: e,
            callback: t
          })
        }
        off(e) {
          this.bindings = this.bindings.filter((t => t.event !== e))
        }
        canPush() {
          return this.socket.isConnected() && this.isJoined()
        }
        push(e, t, r = this.timeout) {
          if (!this.joinedOnce)
            throw `tried to push '${e}' to '${this.topic}' before joining. Use channel.subscribe() before pushing events`;
          let s = new S(this, e, t, r);
          return this.canPush() ? s.send() : (s.startTimeout(),
            this.pushBuffer.push(s)),
            s
        }
        updateJoinPayload(e) {
          this.joinPush.updatePayload(e)
        }
        unsubscribe(e = this.timeout) {
          this.state = y.leaving;
          let t = () => {
            this.socket.log("channel", `leave ${this.topic}`),
              this.trigger(g.close, "leave", this.joinRef())
          }
            ;
          this.joinPush.destroy();
          let r = new S(this, g.leave, {}, e);
          return r.receive("ok", (() => t())).receive("timeout", (() => t())),
            r.send(),
            this.canPush() || r.trigger("ok", {}),
            r
        }
        onMessage(e, t, r) {
          return t
        }
        isMember(e) {
          return this.topic === e
        }
        joinRef() {
          return this.joinPush.ref
        }
        rejoin(e = this.timeout) {
          this.isLeaving() || (this.socket.leaveOpenTopic(this.topic),
            this.state = y.joining,
            this.joinPush.resend(e))
        }
        trigger(e, t, r) {
          let { close: s, error: n, leave: i, join: o } = g;
          if (r && [s, n, i, o].indexOf(e) >= 0 && r !== this.joinRef())
            return;
          let a = this.onMessage(e, t, r);
          if (t && !a)
            throw "channel onMessage callbacks must return the payload, modified or unmodified";
          this.bindings.filter((r => "*" === r.event ? e === (null == t ? void 0 : t.type) : r.event === e)).map((e => e.callback(a, r)))
        }
        replyEventName(e) {
          return `chan_reply_${e}`
        }
        isClosed() {
          return this.state === y.closed
        }
        isErrored() {
          return this.state === y.errored
        }
        isJoined() {
          return this.state === y.joined
        }
        isJoining() {
          return this.state === y.joining
        }
        isLeaving() {
          return this.state === y.leaving
        }
      }
      class O {
        constructor(e, t) {
          this.channel = e,
            this.state = {},
            this.pendingDiffs = [],
            this.joinRef = null,
            this.caller = {
              onJoin: () => { }
              ,
              onLeave: () => { }
              ,
              onSync: () => { }
            };
          const r = (null == t ? void 0 : t.events) || {
            state: "presence_state",
            diff: "presence_diff"
          };
          this.channel.on(r.state, {}, (e => {
            const { onJoin: t, onLeave: r, onSync: s } = this.caller;
            this.joinRef = this.channel.joinRef(),
              this.state = O.syncState(this.state, e, t, r),
              this.pendingDiffs.forEach((e => {
                this.state = O.syncDiff(this.state, e, t, r)
              }
              )),
              this.pendingDiffs = [],
              s()
          }
          )),
            this.channel.on(r.diff, {}, (e => {
              const { onJoin: t, onLeave: r, onSync: s } = this.caller;
              this.inPendingSyncState() ? this.pendingDiffs.push(e) : (this.state = O.syncDiff(this.state, e, t, r),
                s())
            }
            ))
        }
        static syncState(e, t, r, s) {
          const n = this.cloneDeep(e)
            , i = this.transformState(t)
            , o = {}
            , a = {};
          return this.map(n, ((e, t) => {
            i[e] || (a[e] = t)
          }
          )),
            this.map(i, ((e, t) => {
              const r = n[e];
              if (r) {
                const s = t.map((e => e.presence_id))
                  , n = r.map((e => e.presence_id))
                  , i = t.filter((e => n.indexOf(e.presence_id) < 0))
                  , h = r.filter((e => s.indexOf(e.presence_id) < 0));
                i.length > 0 && (o[e] = i),
                  h.length > 0 && (a[e] = h)
              } else
                o[e] = t
            }
            )),
            this.syncDiff(n, {
              joins: o,
              leaves: a
            }, r, s)
        }
        static syncDiff(e, t, r, s) {
          const { joins: n, leaves: i } = {
            joins: this.transformState(t.joins),
            leaves: this.transformState(t.leaves)
          };
          return r || (r = () => { }
          ),
            s || (s = () => { }
            ),
            this.map(n, ((t, s) => {
              const n = e[t];
              if (e[t] = this.cloneDeep(s),
                n) {
                const r = e[t].map((e => e.presence_id))
                  , s = n.filter((e => r.indexOf(e.presence_id) < 0));
                e[t].unshift(...s)
              }
              r(t, n, s)
            }
            )),
            this.map(i, ((t, r) => {
              let n = e[t];
              if (!n)
                return;
              const i = r.map((e => e.presence_id));
              n = n.filter((e => i.indexOf(e.presence_id) < 0)),
                e[t] = n,
                s(t, n, r),
                0 === n.length && delete e[t]
            }
            )),
            e
        }
        static list(e, t) {
          return t || (t = (e, t) => t),
            this.map(e, ((e, r) => t(e, r)))
        }
        static map(e, t) {
          return Object.getOwnPropertyNames(e).map((r => t(r, e[r])))
        }
        static transformState(e) {
          return e = this.cloneDeep(e),
            Object.getOwnPropertyNames(e).reduce(((t, r) => {
              const s = e[r];
              return t[r] = "metas" in s ? s.metas.map((e => (e.presence_id = e.phx_ref,
                delete e.phx_ref,
                delete e.phx_ref_prev,
                e))) : s,
                t
            }
            ), {})
        }
        static cloneDeep(e) {
          return JSON.parse(JSON.stringify(e))
        }
        onJoin(e) {
          this.caller.onJoin = e
        }
        onLeave(e) {
          this.caller.onLeave = e
        }
        onSync(e) {
          this.caller.onSync = e
        }
        list(e) {
          return O.list(this.state, e)
        }
        inPendingSyncState() {
          return !this.joinRef || this.joinRef !== this.channel.joinRef()
        }
      }
      class E {
        constructor(e, t = {}, r) {
          this.topic = e,
            this.params = t,
            this.socket = r,
            this.bindings = [],
            this.state = y.closed,
            this.joinedOnce = !1,
            this.pushBuffer = [],
            this.timeout = this.socket.timeout,
            this.joinPush = new S(this, g.join, this.params, this.timeout),
            this.rejoinTimer = new w((() => this.rejoinUntilConnected()), this.socket.reconnectAfterMs),
            this.joinPush.receive("ok", (() => {
              this.state = y.joined,
                this.rejoinTimer.reset(),
                this.pushBuffer.forEach((e => e.send())),
                this.pushBuffer = []
            }
            )),
            this.onClose((() => {
              this.rejoinTimer.reset(),
                this.socket.log("channel", `close ${this.topic} ${this.joinRef()}`),
                this.state = y.closed,
                this.socket.remove(this)
            }
            )),
            this.onError((e => {
              this.isLeaving() || this.isClosed() || (this.socket.log("channel", `error ${this.topic}`, e),
                this.state = y.errored,
                this.rejoinTimer.scheduleTimeout())
            }
            )),
            this.joinPush.receive("timeout", (() => {
              this.isJoining() && (this.socket.log("channel", `timeout ${this.topic}`, this.joinPush.timeout),
                this.state = y.errored,
                this.rejoinTimer.scheduleTimeout())
            }
            )),
            this.on(g.reply, {}, ((e, t) => {
              this.trigger(this.replyEventName(t), e)
            }
            )),
            this.presence = new O(this)
        }
        list() {
          return this.presence.list()
        }
        rejoinUntilConnected() {
          this.rejoinTimer.scheduleTimeout(),
            this.socket.isConnected() && this.rejoin()
        }
        subscribe(e = this.timeout) {
          if (this.joinedOnce)
            throw "tried to subscribe multiple times. 'subscribe' can only be called a single time per channel instance";
          {
            const t = this.bindings.reduce(((e, t) => {
              const { type: r } = t;
              return ["phx_close", "phx_error", "phx_reply", "presence_diff", "presence_state"].includes(r) || (e[r] = t),
                e
            }
            ), {});
            return Object.keys(t).length && this.updateJoinPayload({
              configs: t
            }),
              this.joinedOnce = !0,
              this.rejoin(e),
              this.joinPush
          }
        }
        onClose(e) {
          this.on(g.close, {}, e)
        }
        onError(e) {
          this.on(g.error, {}, (t => e(t)))
        }
        on(e, t, r) {
          this.bindings.push({
            type: e,
            filter: null != t ? t : {},
            callback: null != r ? r : () => { }
          })
        }
        off(e, t) {
          this.bindings = this.bindings.filter((r => !(r.type === e && E.isEqual(r.filter, t))))
        }
        canPush() {
          return this.socket.isConnected() && this.isJoined()
        }
        push(e, t, r = this.timeout) {
          if (!this.joinedOnce)
            throw `tried to push '${e}' to '${this.topic}' before joining. Use channel.subscribe() before pushing events`;
          let s = new S(this, e, t, r);
          return this.canPush() ? s.send() : (s.startTimeout(),
            this.pushBuffer.push(s)),
            s
        }
        updateJoinPayload(e) {
          this.joinPush.updatePayload(e)
        }
        unsubscribe(e = this.timeout) {
          this.state = y.leaving;
          const t = () => {
            this.socket.log("channel", `leave ${this.topic}`),
              this.trigger(g.close, "leave", this.joinRef())
          }
            ;
          this.joinPush.destroy();
          const r = new S(this, g.leave, {}, e);
          return r.receive("ok", (() => t())).receive("timeout", (() => t())),
            r.send(),
            this.canPush() || r.trigger("ok", {}),
            r
        }
        onMessage(e, t, r) {
          return t
        }
        isMember(e) {
          return this.topic === e
        }
        joinRef() {
          return this.joinPush.ref
        }
        rejoin(e = this.timeout) {
          this.isLeaving() || (this.socket.leaveOpenTopic(this.topic),
            this.state = y.joining,
            this.joinPush.resend(e))
        }
        trigger(e, t, r) {
          const { close: s, error: n, leave: i, join: o } = g;
          if (r && [s, n, i, o].indexOf(e) >= 0 && r !== this.joinRef())
            return;
          const a = this.onMessage(e, t, r);
          if (t && !a)
            throw "channel onMessage callbacks must return the payload, modified or unmodified";
          this.bindings.filter((r => {
            var s, n;
            return (null == r ? void 0 : r.type) === e && ("*" === (null === (s = null == r ? void 0 : r.filter) || void 0 === s ? void 0 : s.event) || (null === (n = null == r ? void 0 : r.filter) || void 0 === n ? void 0 : n.event) === (null == t ? void 0 : t.event))
          }
          )).map((e => e.callback(a, r)))
        }
        send(e) {
          const t = this.push(e.type, e);
          return new Promise(((e, r) => {
            t.receive("ok", (() => e("ok"))),
              t.receive("timeout", (() => r("timeout")))
          }
          ))
        }
        replyEventName(e) {
          return `chan_reply_${e}`
        }
        isClosed() {
          return this.state === y.closed
        }
        isErrored() {
          return this.state === y.errored
        }
        isJoined() {
          return this.state === y.joined
        }
        isJoining() {
          return this.state === y.joining
        }
        isLeaving() {
          return this.state === y.leaving
        }
        static isEqual(e, t) {
          if (Object.keys(e).length !== Object.keys(t).length)
            return !1;
          for (const r in e)
            if (e[r] !== t[r])
              return !1;
          return !0
        }
      }
      const j = () => { }
        ;
      class x {
        constructor(e, t) {
          this.accessToken = null,
            this.channels = [],
            this.endPoint = "",
            this.headers = v,
            this.params = {},
            this.timeout = 1e4,
            this.transport = p.w3cwebsocket,
            this.heartbeatIntervalMs = 3e4,
            this.longpollerTimeout = 2e4,
            this.heartbeatTimer = void 0,
            this.pendingHeartbeatRef = null,
            this.ref = 0,
            this.logger = j,
            this.conn = null,
            this.sendBuffer = [],
            this.serializer = new T,
            this.stateChangeCallbacks = {
              open: [],
              close: [],
              error: [],
              message: []
            },
            this.endPoint = `${e}/${b.websocket}`,
            (null == t ? void 0 : t.params) && (this.params = t.params),
            (null == t ? void 0 : t.headers) && (this.headers = Object.assign(Object.assign({}, this.headers), t.headers)),
            (null == t ? void 0 : t.timeout) && (this.timeout = t.timeout),
            (null == t ? void 0 : t.logger) && (this.logger = t.logger),
            (null == t ? void 0 : t.transport) && (this.transport = t.transport),
            (null == t ? void 0 : t.heartbeatIntervalMs) && (this.heartbeatIntervalMs = t.heartbeatIntervalMs),
            (null == t ? void 0 : t.longpollerTimeout) && (this.longpollerTimeout = t.longpollerTimeout),
            this.reconnectAfterMs = (null == t ? void 0 : t.reconnectAfterMs) ? t.reconnectAfterMs : e => [1e3, 2e3, 5e3, 1e4][e - 1] || 1e4,
            this.encode = (null == t ? void 0 : t.encode) ? t.encode : (e, t) => t(JSON.stringify(e)),
            this.decode = (null == t ? void 0 : t.decode) ? t.decode : this.serializer.decode.bind(this.serializer),
            this.reconnectTimer = new w((() => {
              return e = this,
                t = void 0,
                s = function* () {
                  yield this.disconnect(),
                    this.connect()
                }
                ,
                new ((r = void 0) || (r = Promise))((function (n, i) {
                  function o(e) {
                    try {
                      h(s.next(e))
                    } catch (e) {
                      i(e)
                    }
                  }
                  function a(e) {
                    try {
                      h(s.throw(e))
                    } catch (e) {
                      i(e)
                    }
                  }
                  function h(e) {
                    var t;
                    e.done ? n(e.value) : (t = e.value,
                      t instanceof r ? t : new r((function (e) {
                        e(t)
                      }
                      ))).then(o, a)
                  }
                  h((s = s.apply(e, t || [])).next())
                }
                ));
              var e, t, r, s
            }
            ), this.reconnectAfterMs)
        }
        connect() {
          this.conn || (this.conn = new this.transport(this.endPointURL(), [], null, this.headers),
            this.conn && (this.conn.binaryType = "arraybuffer",
              this.conn.onopen = () => this._onConnOpen(),
              this.conn.onerror = e => this._onConnError(e),
              this.conn.onmessage = e => this.onConnMessage(e),
              this.conn.onclose = e => this._onConnClose(e)))
        }
        disconnect(e, t) {
          return new Promise(((r, s) => {
            try {
              this.conn && (this.conn.onclose = function () { }
                ,
                e ? this.conn.close(e, t || "") : this.conn.close(),
                this.conn = null,
                this.heartbeatTimer && clearInterval(this.heartbeatTimer),
                this.reconnectTimer.reset()),
                r({
                  error: null,
                  data: !0
                })
            } catch (e) {
              r({
                error: e,
                data: !1
              })
            }
          }
          ))
        }
        log(e, t, r) {
          this.logger(e, t, r)
        }
        onOpen(e) {
          this.stateChangeCallbacks.open.push(e)
        }
        onClose(e) {
          this.stateChangeCallbacks.close.push(e)
        }
        onError(e) {
          this.stateChangeCallbacks.error.push(e)
        }
        onMessage(e) {
          this.stateChangeCallbacks.message.push(e)
        }
        connectionState() {
          switch (this.conn && this.conn.readyState) {
            case m.connecting:
              return _.Connecting;
            case m.open:
              return _.Open;
            case m.closing:
              return _.Closing;
            default:
              return _.Closed
          }
        }
        isConnected() {
          return this.connectionState() === _.Open
        }
        remove(e) {
          this.channels = this.channels.filter((t => t.joinRef() !== e.joinRef()))
        }
        channel(e, t = {}) {
          var r;
          const { selfBroadcast: s } = t
            , n = function (e, t) {
              var r = {};
              for (var s in e)
                Object.prototype.hasOwnProperty.call(e, s) && t.indexOf(s) < 0 && (r[s] = e[s]);
              if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                var n = 0;
                for (s = Object.getOwnPropertySymbols(e); n < s.length; n++)
                  t.indexOf(s[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, s[n]) && (r[s[n]] = e[s[n]])
              }
              return r
            }(t, ["selfBroadcast"]);
          s && (n.self_broadcast = s);
          const i = (null === (r = this.params) || void 0 === r ? void 0 : r.vsndate) ? new E(e, n, this) : new k(e, n, this);
          return i instanceof E && (i.presence.onJoin(((e, t, r) => {
            i.trigger("presence", {
              event: "JOIN",
              key: e,
              currentPresences: t,
              newPresences: r
            })
          }
          )),
            i.presence.onLeave(((e, t, r) => {
              i.trigger("presence", {
                event: "LEAVE",
                key: e,
                currentPresences: t,
                leftPresences: r
              })
            }
            )),
            i.presence.onSync((() => {
              i.trigger("presence", {
                event: "SYNC"
              })
            }
            ))),
            this.channels.push(i),
            i
        }
        push(e) {
          const { topic: t, event: r, payload: s, ref: n } = e;
          let i = () => {
            this.encode(e, (e => {
              var t;
              null === (t = this.conn) || void 0 === t || t.send(e)
            }
            ))
          }
            ;
          this.log("push", `${t} ${r} (${n})`, s),
            this.isConnected() ? i() : this.sendBuffer.push(i)
        }
        onConnMessage(e) {
          this.decode(e.data, (e => {
            let { topic: t, event: r, payload: s, ref: n } = e;
            (n && n === this.pendingHeartbeatRef || r === (null == s ? void 0 : s.type)) && (this.pendingHeartbeatRef = null),
              this.log("receive", `${s.status || ""} ${t} ${r} ${n && "(" + n + ")" || ""}`, s),
              this.channels.filter((e => e.isMember(t))).forEach((e => e.trigger(r, s, n))),
              this.stateChangeCallbacks.message.forEach((t => t(e)))
          }
          ))
        }
        endPointURL() {
          return this._appendParams(this.endPoint, Object.assign({}, this.params, {
            vsn: "1.0.0"
          }))
        }
        makeRef() {
          let e = this.ref + 1;
          return e === this.ref ? this.ref = 0 : this.ref = e,
            this.ref.toString()
        }
        setAuth(e) {
          this.accessToken = e,
            this.channels.forEach((t => {
              e && t.updateJoinPayload({
                user_token: e
              }),
                t.joinedOnce && t.isJoined() && t.push(g.access_token, {
                  access_token: e
                })
            }
            ))
        }
        leaveOpenTopic(e) {
          let t = this.channels.find((t => t.topic === e && (t.isJoined() || t.isJoining())));
          t && (this.log("transport", `leaving duplicate topic "${e}"`),
            t.unsubscribe())
        }
        _onConnOpen() {
          this.log("transport", `connected to ${this.endPointURL()}`),
            this._flushSendBuffer(),
            this.reconnectTimer.reset(),
            this.heartbeatTimer && clearInterval(this.heartbeatTimer),
            this.heartbeatTimer = setInterval((() => this._sendHeartbeat()), this.heartbeatIntervalMs),
            this.stateChangeCallbacks.open.forEach((e => e()))
        }
        _onConnClose(e) {
          this.log("transport", "close", e),
            this._triggerChanError(),
            this.heartbeatTimer && clearInterval(this.heartbeatTimer),
            this.reconnectTimer.scheduleTimeout(),
            this.stateChangeCallbacks.close.forEach((t => t(e)))
        }
        _onConnError(e) {
          this.log("transport", e.message),
            this._triggerChanError(),
            this.stateChangeCallbacks.error.forEach((t => t(e)))
        }
        _triggerChanError() {
          this.channels.forEach((e => e.trigger(g.error)))
        }
        _appendParams(e, t) {
          if (0 === Object.keys(t).length)
            return e;
          const r = e.match(/\?/) ? "&" : "?";
          return `${e}${r}${new URLSearchParams(t)}`
        }
        _flushSendBuffer() {
          this.isConnected() && this.sendBuffer.length > 0 && (this.sendBuffer.forEach((e => e())),
            this.sendBuffer = [])
        }
        _sendHeartbeat() {
          var e;
          if (this.isConnected()) {
            if (this.pendingHeartbeatRef)
              return this.pendingHeartbeatRef = null,
                this.log("transport", "heartbeat timeout. Attempting to re-establish connection"),
                void (null === (e = this.conn) || void 0 === e || e.close(1e3, "hearbeat timeout"));
            this.pendingHeartbeatRef = this.makeRef(),
              this.push({
                topic: "phoenix",
                event: "heartbeat",
                payload: {},
                ref: this.pendingHeartbeatRef
              }),
              this.setAuth(this.accessToken)
          }
        }
      }
    }
    ,
    552: (e, t, r) => {
      "use strict";
      r.r(t),
        r.d(t, {
          StorageClient: () => g,
          SupabaseStorageClient: () => g
        });
      const s = {
        "X-Client-Info": "storage-js/0.0.0"
      };
      var n = function (e, t, r, s) {
        return new (r || (r = Promise))((function (n, i) {
          function o(e) {
            try {
              h(s.next(e))
            } catch (e) {
              i(e)
            }
          }
          function a(e) {
            try {
              h(s.throw(e))
            } catch (e) {
              i(e)
            }
          }
          function h(e) {
            var t;
            e.done ? n(e.value) : (t = e.value,
              t instanceof r ? t : new r((function (e) {
                e(t)
              }
              ))).then(o, a)
          }
          h((s = s.apply(e, t || [])).next())
        }
        ))
      };
      const i = e => e.msg || e.message || e.error_description || e.error || JSON.stringify(e);
      function o(e, t, r, s, o, a) {
        return n(this, void 0, void 0, (function* () {
          return new Promise(((n, h) => {
            e(r, ((e, t, r, s) => {
              const n = {
                method: e,
                headers: (null == t ? void 0 : t.headers) || {}
              };
              return "GET" === e ? n : (n.headers = Object.assign({
                "Content-Type": "application/json"
              }, null == t ? void 0 : t.headers),
                n.body = JSON.stringify(s),
                Object.assign(Object.assign({}, n), r))
            }
            )(t, s, o, a)).then((e => {
              if (!e.ok)
                throw e;
              return (null == s ? void 0 : s.noResolveJson) ? n(e) : e.json()
            }
            )).then((e => n(e))).catch((e => ((e, t) => {
              if ("function" != typeof e.json)
                return t(e);
              e.json().then((r => t({
                message: i(r),
                status: (null == e ? void 0 : e.status) || 500
              })))
            }
            )(e, h)))
          }
          ))
        }
        ))
      }
      function a(e, t, r, s) {
        return n(this, void 0, void 0, (function* () {
          return o(e, "GET", t, r, s)
        }
        ))
      }
      function h(e, t, r, s, i) {
        return n(this, void 0, void 0, (function* () {
          return o(e, "POST", t, s, i, r)
        }
        ))
      }
      function c(e, t, r, s, i) {
        return n(this, void 0, void 0, (function* () {
          return o(e, "DELETE", t, s, i, r)
        }
        ))
      }
      var u = r(98)
        , l = r.n(u);
      const d = e => {
        let t;
        return t = e || ("undefined" == typeof fetch ? l() : fetch),
          (...e) => t(...e)
      }
        ;
      var f = function (e, t, r, s) {
        return new (r || (r = Promise))((function (n, i) {
          function o(e) {
            try {
              h(s.next(e))
            } catch (e) {
              i(e)
            }
          }
          function a(e) {
            try {
              h(s.throw(e))
            } catch (e) {
              i(e)
            }
          }
          function h(e) {
            var t;
            e.done ? n(e.value) : (t = e.value,
              t instanceof r ? t : new r((function (e) {
                e(t)
              }
              ))).then(o, a)
          }
          h((s = s.apply(e, t || [])).next())
        }
        ))
      }
        , p = function (e, t, r, s) {
          return new (r || (r = Promise))((function (n, i) {
            function o(e) {
              try {
                h(s.next(e))
              } catch (e) {
                i(e)
              }
            }
            function a(e) {
              try {
                h(s.throw(e))
              } catch (e) {
                i(e)
              }
            }
            function h(e) {
              var t;
              e.done ? n(e.value) : (t = e.value,
                t instanceof r ? t : new r((function (e) {
                  e(t)
                }
                ))).then(o, a)
            }
            h((s = s.apply(e, t || [])).next())
          }
          ))
        };
      const v = {
        limit: 100,
        offset: 0,
        sortBy: {
          column: "name",
          order: "asc"
        }
      }
        , m = {
          cacheControl: "3600",
          contentType: "text/plain;charset=UTF-8",
          upsert: !1
        };
      class y {
        constructor(e, t = {}, r, s) {
          this.url = e,
            this.headers = t,
            this.bucketId = r,
            this.fetch = d(s)
        }
        uploadOrUpdate(e, t, r, s) {
          return p(this, void 0, void 0, (function* () {
            try {
              let n;
              const i = Object.assign(Object.assign({}, m), s)
                , o = Object.assign(Object.assign({}, this.headers), "POST" === e && {
                  "x-upsert": String(i.upsert)
                });
              "undefined" != typeof Blob && r instanceof Blob ? (n = new FormData,
                n.append("cacheControl", i.cacheControl),
                n.append("", r)) : "undefined" != typeof FormData && r instanceof FormData ? (n = r,
                  n.append("cacheControl", i.cacheControl)) : (n = r,
                    o["cache-control"] = `max-age=${i.cacheControl}`,
                    o["content-type"] = i.contentType);
              const a = this._removeEmptyFolders(t)
                , h = this._getFinalPath(a)
                , c = yield this.fetch(`${this.url}/object/${h}`, {
                  method: e,
                  body: n,
                  headers: o
                });
              return c.ok ? {
                data: {
                  Key: h
                },
                error: null
              } : {
                data: null,
                error: yield c.json()
              }
            } catch (e) {
              return {
                data: null,
                error: e
              }
            }
          }
          ))
        }
        upload(e, t, r) {
          return p(this, void 0, void 0, (function* () {
            return this.uploadOrUpdate("POST", e, t, r)
          }
          ))
        }
        update(e, t, r) {
          return p(this, void 0, void 0, (function* () {
            return this.uploadOrUpdate("PUT", e, t, r)
          }
          ))
        }
        move(e, t) {
          return p(this, void 0, void 0, (function* () {
            try {
              return {
                data: yield h(this.fetch, `${this.url}/object/move`, {
                  bucketId: this.bucketId,
                  sourceKey: e,
                  destinationKey: t
                }, {
                  headers: this.headers
                }),
                error: null
              }
            } catch (e) {
              return {
                data: null,
                error: e
              }
            }
          }
          ))
        }
        copy(e, t) {
          return p(this, void 0, void 0, (function* () {
            try {
              return {
                data: yield h(this.fetch, `${this.url}/object/copy`, {
                  bucketId: this.bucketId,
                  sourceKey: e,
                  destinationKey: t
                }, {
                  headers: this.headers
                }),
                error: null
              }
            } catch (e) {
              return {
                data: null,
                error: e
              }
            }
          }
          ))
        }
        createSignedUrl(e, t) {
          return p(this, void 0, void 0, (function* () {
            try {
              const r = this._getFinalPath(e);
              let s = yield h(this.fetch, `${this.url}/object/sign/${r}`, {
                expiresIn: t
              }, {
                headers: this.headers
              });
              const n = `${this.url}${s.signedURL}`;
              return s = {
                signedURL: n
              },
              {
                data: s,
                error: null,
                signedURL: n
              }
            } catch (e) {
              return {
                data: null,
                error: e,
                signedURL: null
              }
            }
          }
          ))
        }
        createSignedUrls(e, t) {
          return p(this, void 0, void 0, (function* () {
            try {
              return {
                data: (yield h(this.fetch, `${this.url}/object/sign/${this.bucketId}`, {
                  expiresIn: t,
                  paths: e
                }, {
                  headers: this.headers
                })).map((e => Object.assign(Object.assign({}, e), {
                  signedURL: e.signedURL ? `${this.url}${e.signedURL}` : null
                }))),
                error: null
              }
            } catch (e) {
              return {
                data: null,
                error: e
              }
            }
          }
          ))
        }
        download(e) {
          return p(this, void 0, void 0, (function* () {
            try {
              const t = this._getFinalPath(e)
                , r = yield a(this.fetch, `${this.url}/object/${t}`, {
                  headers: this.headers,
                  noResolveJson: !0
                });
              return {
                data: yield r.blob(),
                error: null
              }
            } catch (e) {
              return {
                data: null,
                error: e
              }
            }
          }
          ))
        }
        getPublicUrl(e) {
          try {
            const t = this._getFinalPath(e)
              , r = `${this.url}/object/public/${t}`;
            return {
              data: {
                publicURL: r
              },
              error: null,
              publicURL: r
            }
          } catch (e) {
            return {
              data: null,
              error: e,
              publicURL: null
            }
          }
        }
        remove(e) {
          return p(this, void 0, void 0, (function* () {
            try {
              return {
                data: yield c(this.fetch, `${this.url}/object/${this.bucketId}`, {
                  prefixes: e
                }, {
                  headers: this.headers
                }),
                error: null
              }
            } catch (e) {
              return {
                data: null,
                error: e
              }
            }
          }
          ))
        }
        list(e, t, r) {
          return p(this, void 0, void 0, (function* () {
            try {
              const s = Object.assign(Object.assign(Object.assign({}, v), t), {
                prefix: e || ""
              });
              return {
                data: yield h(this.fetch, `${this.url}/object/list/${this.bucketId}`, s, {
                  headers: this.headers
                }, r),
                error: null
              }
            } catch (e) {
              return {
                data: null,
                error: e
              }
            }
          }
          ))
        }
        _getFinalPath(e) {
          return `${this.bucketId}/${e}`
        }
        _removeEmptyFolders(e) {
          return e.replace(/^\/|\/$/g, "").replace(/\/+/g, "/")
        }
      }
      class g extends class {
        constructor(e, t = {}, r) {
          this.url = e,
            this.headers = Object.assign(Object.assign({}, s), t),
            this.fetch = d(r)
        }
        listBuckets() {
          return f(this, void 0, void 0, (function* () {
            try {
              return {
                data: yield a(this.fetch, `${this.url}/bucket`, {
                  headers: this.headers
                }),
                error: null
              }
            } catch (e) {
              return {
                data: null,
                error: e
              }
            }
          }
          ))
        }
        getBucket(e) {
          return f(this, void 0, void 0, (function* () {
            try {
              return {
                data: yield a(this.fetch, `${this.url}/bucket/${e}`, {
                  headers: this.headers
                }),
                error: null
              }
            } catch (e) {
              return {
                data: null,
                error: e
              }
            }
          }
          ))
        }
        createBucket(e, t = {
          public: !1
        }) {
          return f(this, void 0, void 0, (function* () {
            try {
              return {
                data: (yield h(this.fetch, `${this.url}/bucket`, {
                  id: e,
                  name: e,
                  public: t.public
                }, {
                  headers: this.headers
                })).name,
                error: null
              }
            } catch (e) {
              return {
                data: null,
                error: e
              }
            }
          }
          ))
        }
        updateBucket(e, t) {
          return f(this, void 0, void 0, (function* () {
            try {
              const r = yield function (e, t, r, s, i) {
                return n(this, void 0, void 0, (function* () {
                  return o(e, "PUT", t, s, undefined, r)
                }
                ))
              }(this.fetch, `${this.url}/bucket/${e}`, {
                id: e,
                name: e,
                public: t.public
              }, {
                headers: this.headers
              });
              return {
                data: r,
                error: null
              }
            } catch (e) {
              return {
                data: null,
                error: e
              }
            }
          }
          ))
        }
        emptyBucket(e) {
          return f(this, void 0, void 0, (function* () {
            try {
              return {
                data: yield h(this.fetch, `${this.url}/bucket/${e}/empty`, {}, {
                  headers: this.headers
                }),
                error: null
              }
            } catch (e) {
              return {
                data: null,
                error: e
              }
            }
          }
          ))
        }
        deleteBucket(e) {
          return f(this, void 0, void 0, (function* () {
            try {
              return {
                data: yield c(this.fetch, `${this.url}/bucket/${e}`, {}, {
                  headers: this.headers
                }),
                error: null
              }
            } catch (e) {
              return {
                data: null,
                error: e
              }
            }
          }
          ))
        }
      }
      {
        constructor(e, t = {}, r) {
          super(e, t, r)
        }
        from(e) {
          return new y(this.url, this.headers, e, this.fetch)
        }
      }
    }
    ,
    98: function (e, t) {
      var r = "undefined" != typeof self ? self : this
        , s = function () {
          function e() {
            this.fetch = !1,
              this.DOMException = r.DOMException
          }
          return e.prototype = r,
            new e
        }();
      !function (e) {
        !function (t) {
          var r = "URLSearchParams" in e
            , s = "Symbol" in e && "iterator" in Symbol
            , n = "FileReader" in e && "Blob" in e && function () {
              try {
                return new Blob,
                  !0
              } catch (e) {
                return !1
              }
            }()
            , i = "FormData" in e
            , o = "ArrayBuffer" in e;
          if (o)
            var a = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"]
              , h = ArrayBuffer.isView || function (e) {
                return e && a.indexOf(Object.prototype.toString.call(e)) > -1
              }
              ;
          function c(e) {
            if ("string" != typeof e && (e = String(e)),
              /[^a-z0-9\-#$%&'*+.^_`|~]/i.test(e))
              throw new TypeError("Invalid character in header field name");
            return e.toLowerCase()
          }
          function u(e) {
            return "string" != typeof e && (e = String(e)),
              e
          }
          function l(e) {
            var t = {
              next: function () {
                var t = e.shift();
                return {
                  done: void 0 === t,
                  value: t
                }
              }
            };
            return s && (t[Symbol.iterator] = function () {
              return t
            }
            ),
              t
          }
          function d(e) {
            this.map = {},
              e instanceof d ? e.forEach((function (e, t) {
                this.append(t, e)
              }
              ), this) : Array.isArray(e) ? e.forEach((function (e) {
                this.append(e[0], e[1])
              }
              ), this) : e && Object.getOwnPropertyNames(e).forEach((function (t) {
                this.append(t, e[t])
              }
              ), this)
          }
          function f(e) {
            if (e.bodyUsed)
              return Promise.reject(new TypeError("Already read"));
            e.bodyUsed = !0
          }
          function p(e) {
            return new Promise((function (t, r) {
              e.onload = function () {
                t(e.result)
              }
                ,
                e.onerror = function () {
                  r(e.error)
                }
            }
            ))
          }
          function v(e) {
            var t = new FileReader
              , r = p(t);
            return t.readAsArrayBuffer(e),
              r
          }
          function m(e) {
            if (e.slice)
              return e.slice(0);
            var t = new Uint8Array(e.byteLength);
            return t.set(new Uint8Array(e)),
              t.buffer
          }
          function y() {
            return this.bodyUsed = !1,
              this._initBody = function (e) {
                var t;
                this._bodyInit = e,
                  e ? "string" == typeof e ? this._bodyText = e : n && Blob.prototype.isPrototypeOf(e) ? this._bodyBlob = e : i && FormData.prototype.isPrototypeOf(e) ? this._bodyFormData = e : r && URLSearchParams.prototype.isPrototypeOf(e) ? this._bodyText = e.toString() : o && n && (t = e) && DataView.prototype.isPrototypeOf(t) ? (this._bodyArrayBuffer = m(e.buffer),
                    this._bodyInit = new Blob([this._bodyArrayBuffer])) : o && (ArrayBuffer.prototype.isPrototypeOf(e) || h(e)) ? this._bodyArrayBuffer = m(e) : this._bodyText = e = Object.prototype.toString.call(e) : this._bodyText = "",
                  this.headers.get("content-type") || ("string" == typeof e ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : r && URLSearchParams.prototype.isPrototypeOf(e) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"))
              }
              ,
              n && (this.blob = function () {
                var e = f(this);
                if (e)
                  return e;
                if (this._bodyBlob)
                  return Promise.resolve(this._bodyBlob);
                if (this._bodyArrayBuffer)
                  return Promise.resolve(new Blob([this._bodyArrayBuffer]));
                if (this._bodyFormData)
                  throw new Error("could not read FormData body as blob");
                return Promise.resolve(new Blob([this._bodyText]))
              }
                ,
                this.arrayBuffer = function () {
                  return this._bodyArrayBuffer ? f(this) || Promise.resolve(this._bodyArrayBuffer) : this.blob().then(v)
                }
              ),
              this.text = function () {
                var e, t, r, s = f(this);
                if (s)
                  return s;
                if (this._bodyBlob)
                  return e = this._bodyBlob,
                    r = p(t = new FileReader),
                    t.readAsText(e),
                    r;
                if (this._bodyArrayBuffer)
                  return Promise.resolve(function (e) {
                    for (var t = new Uint8Array(e), r = new Array(t.length), s = 0; s < t.length; s++)
                      r[s] = String.fromCharCode(t[s]);
                    return r.join("")
                  }(this._bodyArrayBuffer));
                if (this._bodyFormData)
                  throw new Error("could not read FormData body as text");
                return Promise.resolve(this._bodyText)
              }
              ,
              i && (this.formData = function () {
                return this.text().then(_)
              }
              ),
              this.json = function () {
                return this.text().then(JSON.parse)
              }
              ,
              this
          }
          d.prototype.append = function (e, t) {
            e = c(e),
              t = u(t);
            var r = this.map[e];
            this.map[e] = r ? r + ", " + t : t
          }
            ,
            d.prototype.delete = function (e) {
              delete this.map[c(e)]
            }
            ,
            d.prototype.get = function (e) {
              return e = c(e),
                this.has(e) ? this.map[e] : null
            }
            ,
            d.prototype.has = function (e) {
              return this.map.hasOwnProperty(c(e))
            }
            ,
            d.prototype.set = function (e, t) {
              this.map[c(e)] = u(t)
            }
            ,
            d.prototype.forEach = function (e, t) {
              for (var r in this.map)
                this.map.hasOwnProperty(r) && e.call(t, this.map[r], r, this)
            }
            ,
            d.prototype.keys = function () {
              var e = [];
              return this.forEach((function (t, r) {
                e.push(r)
              }
              )),
                l(e)
            }
            ,
            d.prototype.values = function () {
              var e = [];
              return this.forEach((function (t) {
                e.push(t)
              }
              )),
                l(e)
            }
            ,
            d.prototype.entries = function () {
              var e = [];
              return this.forEach((function (t, r) {
                e.push([r, t])
              }
              )),
                l(e)
            }
            ,
            s && (d.prototype[Symbol.iterator] = d.prototype.entries);
          var g = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
          function b(e, t) {
            var r, s, n = (t = t || {}).body;
            if (e instanceof b) {
              if (e.bodyUsed)
                throw new TypeError("Already read");
              this.url = e.url,
                this.credentials = e.credentials,
                t.headers || (this.headers = new d(e.headers)),
                this.method = e.method,
                this.mode = e.mode,
                this.signal = e.signal,
                n || null == e._bodyInit || (n = e._bodyInit,
                  e.bodyUsed = !0)
            } else
              this.url = String(e);
            if (this.credentials = t.credentials || this.credentials || "same-origin",
              !t.headers && this.headers || (this.headers = new d(t.headers)),
              this.method = (s = (r = t.method || this.method || "GET").toUpperCase(),
                g.indexOf(s) > -1 ? s : r),
              this.mode = t.mode || this.mode || null,
              this.signal = t.signal || this.signal,
              this.referrer = null,
              ("GET" === this.method || "HEAD" === this.method) && n)
              throw new TypeError("Body not allowed for GET or HEAD requests");
            this._initBody(n)
          }
          function _(e) {
            var t = new FormData;
            return e.trim().split("&").forEach((function (e) {
              if (e) {
                var r = e.split("=")
                  , s = r.shift().replace(/\+/g, " ")
                  , n = r.join("=").replace(/\+/g, " ");
                t.append(decodeURIComponent(s), decodeURIComponent(n))
              }
            }
            )),
              t
          }
          function w(e, t) {
            t || (t = {}),
              this.type = "default",
              this.status = void 0 === t.status ? 200 : t.status,
              this.ok = this.status >= 200 && this.status < 300,
              this.statusText = "statusText" in t ? t.statusText : "OK",
              this.headers = new d(t.headers),
              this.url = t.url || "",
              this._initBody(e)
          }
          b.prototype.clone = function () {
            return new b(this, {
              body: this._bodyInit
            })
          }
            ,
            y.call(b.prototype),
            y.call(w.prototype),
            w.prototype.clone = function () {
              return new w(this._bodyInit, {
                status: this.status,
                statusText: this.statusText,
                headers: new d(this.headers),
                url: this.url
              })
            }
            ,
            w.error = function () {
              var e = new w(null, {
                status: 0,
                statusText: ""
              });
              return e.type = "error",
                e
            }
            ;
          var T = [301, 302, 303, 307, 308];
          w.redirect = function (e, t) {
            if (-1 === T.indexOf(t))
              throw new RangeError("Invalid status code");
            return new w(null, {
              status: t,
              headers: {
                location: e
              }
            })
          }
            ,
            t.DOMException = e.DOMException;
          try {
            new t.DOMException
          } catch (e) {
            t.DOMException = function (e, t) {
              this.message = e,
                this.name = t;
              var r = Error(e);
              this.stack = r.stack
            }
              ,
              t.DOMException.prototype = Object.create(Error.prototype),
              t.DOMException.prototype.constructor = t.DOMException
          }
          function S(e, r) {
            return new Promise((function (s, i) {
              var o = new b(e, r);
              if (o.signal && o.signal.aborted)
                return i(new t.DOMException("Aborted", "AbortError"));
              var a = new XMLHttpRequest;
              function h() {
                a.abort()
              }
              a.onload = function () {
                var e, t, r = {
                  status: a.status,
                  statusText: a.statusText,
                  headers: (e = a.getAllResponseHeaders() || "",
                    t = new d,
                    e.replace(/\r?\n[\t ]+/g, " ").split(/\r?\n/).forEach((function (e) {
                      var r = e.split(":")
                        , s = r.shift().trim();
                      if (s) {
                        var n = r.join(":").trim();
                        t.append(s, n)
                      }
                    }
                    )),
                    t)
                };
                r.url = "responseURL" in a ? a.responseURL : r.headers.get("X-Request-URL");
                var n = "response" in a ? a.response : a.responseText;
                s(new w(n, r))
              }
                ,
                a.onerror = function () {
                  i(new TypeError("Network request failed"))
                }
                ,
                a.ontimeout = function () {
                  i(new TypeError("Network request failed"))
                }
                ,
                a.onabort = function () {
                  i(new t.DOMException("Aborted", "AbortError"))
                }
                ,
                a.open(o.method, o.url, !0),
                "include" === o.credentials ? a.withCredentials = !0 : "omit" === o.credentials && (a.withCredentials = !1),
                "responseType" in a && n && (a.responseType = "blob"),
                o.headers.forEach((function (e, t) {
                  a.setRequestHeader(t, e)
                }
                )),
                o.signal && (o.signal.addEventListener("abort", h),
                  a.onreadystatechange = function () {
                    4 === a.readyState && o.signal.removeEventListener("abort", h)
                  }
                ),
                a.send(void 0 === o._bodyInit ? null : o._bodyInit)
            }
            ))
          }
          S.polyfill = !0,
            e.fetch || (e.fetch = S,
              e.Headers = d,
              e.Request = b,
              e.Response = w),
            t.Headers = d,
            t.Request = b,
            t.Response = w,
            t.fetch = S,
            Object.defineProperty(t, "__esModule", {
              value: !0
            })
        }({})
      }(s),
        s.fetch.ponyfill = !0,
        delete s.fetch.polyfill;
      var n = s;
      (t = n.fetch).default = n.fetch,
        t.fetch = n.fetch,
        t.Headers = n.Headers,
        t.Request = n.Request,
        t.Response = n.Response,
        e.exports = t
    },
    284: e => {
      var t = function () {
        if ("object" == typeof self && self)
          return self;
        if ("object" == typeof window && window)
          return window;
        throw new Error("Unable to resolve global `this`")
      };
      e.exports = function () {
        if (this)
          return this;
        if ("object" == typeof globalThis && globalThis)
          return globalThis;
        try {
          Object.defineProperty(Object.prototype, "__global__", {
            get: function () {
              return this
            },
            configurable: !0
          })
        } catch (e) {
          return t()
        }
        try {
          return __global__ || t()
        } finally {
          delete Object.prototype.__global__
        }
      }()
    }
    ,
    296: function (e, t, r) {
      "use strict";
      var s = this && this.__awaiter || function (e, t, r, s) {
        return new (r || (r = Promise))((function (n, i) {
          function o(e) {
            try {
              h(s.next(e))
            } catch (e) {
              i(e)
            }
          }
          function a(e) {
            try {
              h(s.throw(e))
            } catch (e) {
              i(e)
            }
          }
          function h(e) {
            var t;
            e.done ? n(e.value) : (t = e.value,
              t instanceof r ? t : new r((function (e) {
                e(t)
              }
              ))).then(o, a)
          }
          h((s = s.apply(e, t || [])).next())
        }
        ))
      }
        ;
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      const n = r(678)
        , i = r(610)
        , o = r(283)
        , a = r(528)
        , h = r(552)
        , c = r(248)
        , u = r(501)
        , l = r(389)
        , d = {
          schema: "public",
          autoRefreshToken: !0,
          persistSession: !0,
          detectSessionInUrl: !0,
          multiTab: !0,
          headers: n.DEFAULT_HEADERS
        };
      t.default = class {
        constructor(e, t, r) {
          if (this.supabaseUrl = e,
            this.supabaseKey = t,
            !e)
            throw new Error("supabaseUrl is required.");
          if (!t)
            throw new Error("supabaseKey is required.");
          const s = (0,
            i.stripTrailingSlash)(e)
            , o = Object.assign(Object.assign({}, d), r);
          if (this.restUrl = `${s}/rest/v1`,
            this.realtimeUrl = `${s}/realtime/v1`.replace("http", "ws"),
            this.authUrl = `${s}/auth/v1`,
            this.storageUrl = `${s}/storage/v1`,
            s.match(/(supabase\.co)|(supabase\.in)/)) {
            const e = s.split(".");
            this.functionsUrl = `${e[0]}.functions.${e[1]}.${e[2]}`
          } else
            this.functionsUrl = `${s}/functions/v1`;
          this.schema = o.schema,
            this.multiTab = o.multiTab,
            this.fetch = o.fetch,
            this.headers = Object.assign(Object.assign({}, n.DEFAULT_HEADERS), null == r ? void 0 : r.headers),
            this.shouldThrowOnError = o.shouldThrowOnError || !1,
            this.auth = this._initSupabaseAuthClient(o),
            this.realtime = this._initRealtimeClient(Object.assign({
              headers: this.headers
            }, o.realtime)),
            this._listenForAuthEvents(),
            this._listenForMultiTabEvents()
        }
        get functions() {
          return new c.FunctionsClient(this.functionsUrl, {
            headers: this._getAuthHeaders(),
            customFetch: this.fetch
          })
        }
        get storage() {
          return new h.SupabaseStorageClient(this.storageUrl, this._getAuthHeaders(), this.fetch)
        }
        from(e) {
          const t = `${this.restUrl}/${e}`;
          return new a.SupabaseQueryBuilder(t, {
            headers: this._getAuthHeaders(),
            schema: this.schema,
            realtime: this.realtime,
            table: e,
            fetch: this.fetch,
            shouldThrowOnError: this.shouldThrowOnError
          })
        }
        rpc(e, t, { head: r = !1, count: s = null } = {}) {
          return this._initPostgRESTClient().rpc(e, t, {
            head: r,
            count: s
          })
        }
        channel(e, t) {
          var r, s;
          const n = null !== (s = null === (r = this.auth.session()) || void 0 === r ? void 0 : r.access_token) && void 0 !== s ? s : this.supabaseKey;
          return this.realtime.isConnected() || this.realtime.connect(),
            this.realtime.channel(e, Object.assign(Object.assign({}, t), {
              user_token: n
            }))
        }
        removeAllSubscriptions() {
          return s(this, void 0, void 0, (function* () {
            const e = this.getSubscriptions().slice()
              , t = e.map((e => this.removeSubscription(e)));
            return (yield Promise.all(t)).map((({ error: t }, r) => ({
              data: {
                subscription: e[r]
              },
              error: t
            })))
          }
          ))
        }
        removeChannel(e) {
          return s(this, void 0, void 0, (function* () {
            const { error: t } = yield this._closeSubscription(e)
              , r = this.getSubscriptions()
              , s = r.filter((e => e.isJoined())).length;
            return 0 === r.length && (yield this.realtime.disconnect()),
            {
              data: {
                openChannels: s
              },
              error: t
            }
          }
          ))
        }
        removeSubscription(e) {
          return s(this, void 0, void 0, (function* () {
            const { error: t } = yield this._closeSubscription(e)
              , r = this.getSubscriptions()
              , s = r.filter((e => e.isJoined())).length;
            return 0 === r.length && (yield this.realtime.disconnect()),
            {
              data: {
                openSubscriptions: s
              },
              error: t
            }
          }
          ))
        }
        _closeSubscription(e) {
          return s(this, void 0, void 0, (function* () {
            let t = null;
            if (!e.isClosed()) {
              const { error: r } = yield this._unsubscribeSubscription(e);
              t = r
            }
            return this.realtime.remove(e),
            {
              error: t
            }
          }
          ))
        }
        _unsubscribeSubscription(e) {
          return new Promise((t => {
            e.unsubscribe().receive("ok", (() => t({
              error: null
            }))).receive("error", (e => t({
              error: e
            }))).receive("timeout", (() => t({
              error: new Error("timed out")
            })))
          }
          ))
        }
        getSubscriptions() {
          return this.realtime.channels
        }
        _initSupabaseAuthClient({ autoRefreshToken: e, persistSession: t, detectSessionInUrl: r, localStorage: s, headers: n, fetch: i, cookieOptions: a, multiTab: h }) {
          const c = {
            Authorization: `Bearer ${this.supabaseKey}`,
            apikey: `${this.supabaseKey}`
          };
          return new o.SupabaseAuthClient({
            url: this.authUrl,
            headers: Object.assign(Object.assign({}, n), c),
            autoRefreshToken: e,
            persistSession: t,
            detectSessionInUrl: r,
            localStorage: s,
            fetch: i,
            cookieOptions: a,
            multiTab: h
          })
        }
        _initRealtimeClient(e) {
          return new l.RealtimeClient(this.realtimeUrl, Object.assign(Object.assign({}, e), {
            params: Object.assign(Object.assign({}, null == e ? void 0 : e.params), {
              apikey: this.supabaseKey
            })
          }))
        }
        _initPostgRESTClient() {
          return new u.PostgrestClient(this.restUrl, {
            headers: this._getAuthHeaders(),
            schema: this.schema,
            fetch: this.fetch,
            throwOnError: this.shouldThrowOnError
          })
        }
        _getAuthHeaders() {
          var e, t;
          const r = Object.assign({}, this.headers)
            , s = null !== (t = null === (e = this.auth.session()) || void 0 === e ? void 0 : e.access_token) && void 0 !== t ? t : this.supabaseKey;
          return r.apikey = this.supabaseKey,
            r.Authorization = r.Authorization || `Bearer ${s}`,
            r
        }
        _listenForMultiTabEvents() {
          if (!this.multiTab || !(0,
            i.isBrowser)() || !(null === window || void 0 === window ? void 0 : window.addEventListener))
            return null;
          try {
            return null === window || void 0 === window ? void 0 : window.addEventListener("storage", (e => {
              var t, r, s;
              if (e.key === n.STORAGE_KEY) {
                const n = JSON.parse(String(e.newValue))
                  , i = null !== (r = null === (t = null == n ? void 0 : n.currentSession) || void 0 === t ? void 0 : t.access_token) && void 0 !== r ? r : void 0
                  , o = null === (s = this.auth.session()) || void 0 === s ? void 0 : s.access_token;
                i ? !o && i ? this._handleTokenChanged("SIGNED_IN", i, "STORAGE") : o !== i && this._handleTokenChanged("TOKEN_REFRESHED", i, "STORAGE") : this._handleTokenChanged("SIGNED_OUT", i, "STORAGE")
              }
            }
            ))
          } catch (e) {
            return console.error("_listenForMultiTabEvents", e),
              null
          }
        }
        _listenForAuthEvents() {
          let { data: e } = this.auth.onAuthStateChange(((e, t) => {
            this._handleTokenChanged(e, null == t ? void 0 : t.access_token, "CLIENT")
          }
          ));
          return e
        }
        _handleTokenChanged(e, t, r) {
          "TOKEN_REFRESHED" !== e && "SIGNED_IN" !== e || this.changedAccessToken === t ? "SIGNED_OUT" !== e && "USER_DELETED" !== e || (this.realtime.setAuth(this.supabaseKey),
            "STORAGE" == r && this.auth.signOut()) : (this.realtime.setAuth(t),
              "STORAGE" == r && this.auth.setAuth(t),
              this.changedAccessToken = t)
        }
      }
    },
    341: function (e, t, r) {
      "use strict";
      var s = this && this.__createBinding || (Object.create ? function (e, t, r, s) {
        void 0 === s && (s = r);
        var n = Object.getOwnPropertyDescriptor(t, r);
        n && !("get" in n ? !t.__esModule : n.writable || n.configurable) || (n = {
          enumerable: !0,
          get: function () {
            return t[r]
          }
        }),
          Object.defineProperty(e, s, n)
      }
        : function (e, t, r, s) {
          void 0 === s && (s = r),
            e[s] = t[r]
        }
      )
        , n = this && this.__exportStar || function (e, t) {
          for (var r in e)
            "default" === r || Object.prototype.hasOwnProperty.call(t, r) || s(t, e, r)
        }
        , i = this && this.__importDefault || function (e) {
          return e && e.__esModule ? e : {
            default: e
          }
        }
        ;
      Object.defineProperty(t, "__esModule", {
        value: !0
      }),
        t.AuthSession = t.AuthUser = t.SupabaseRealtimePayload = t.SupabaseClientOptions = t.SupabaseClient = t.createClient = t.PostgrestError = t.PostgrestMaybeSingleResponse = t.PostgrestSingleResponse = t.PostgrestResponse = void 0;
      const o = i(r(296));
      t.SupabaseClient = o.default;
      const a = r(717);
      Object.defineProperty(t, "SupabaseClientOptions", {
        enumerable: !0,
        get: function () {
          return a.SupabaseClientOptions
        }
      }),
        Object.defineProperty(t, "SupabaseRealtimePayload", {
          enumerable: !0,
          get: function () {
            return a.SupabaseRealtimePayload
          }
        });
      const h = r(271);
      Object.defineProperty(t, "AuthUser", {
        enumerable: !0,
        get: function () {
          return h.User
        }
      }),
        Object.defineProperty(t, "AuthSession", {
          enumerable: !0,
          get: function () {
            return h.Session
          }
        }),
        n(r(271), t);
      var c = r(501);
      Object.defineProperty(t, "PostgrestResponse", {
        enumerable: !0,
        get: function () {
          return c.PostgrestResponse
        }
      }),
        Object.defineProperty(t, "PostgrestSingleResponse", {
          enumerable: !0,
          get: function () {
            return c.PostgrestSingleResponse
          }
        }),
        Object.defineProperty(t, "PostgrestMaybeSingleResponse", {
          enumerable: !0,
          get: function () {
            return c.PostgrestMaybeSingleResponse
          }
        }),
        Object.defineProperty(t, "PostgrestError", {
          enumerable: !0,
          get: function () {
            return c.PostgrestError
          }
        }),
        n(r(389), t),
        t.createClient = (e, t, r) => new o.default(e, t, r)
    },
    283: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }),
        t.SupabaseAuthClient = void 0;
      const s = r(271);
      class n extends s.GoTrueClient {
        constructor(e) {
          super(e)
        }
      }
      t.SupabaseAuthClient = n
    }
    ,
    528: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }),
        t.SupabaseQueryBuilder = void 0;
      const s = r(501)
        , n = r(308);
      class i extends s.PostgrestQueryBuilder {
        constructor(e, { headers: t = {}, schema: r, realtime: s, table: n, fetch: i, shouldThrowOnError: o }) {
          super(e, {
            headers: t,
            schema: r,
            fetch: i,
            shouldThrowOnError: o
          }),
            this._subscription = null,
            this._realtime = s,
            this._headers = t,
            this._schema = r,
            this._table = n
        }
        on(e, t) {
          return this._realtime.isConnected() || this._realtime.connect(),
            this._subscription || (this._subscription = new n.SupabaseRealtimeClient(this._realtime, this._headers, this._schema, this._table)),
            this._subscription.on(e, t)
        }
      }
      t.SupabaseQueryBuilder = i
    }
    ,
    308: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }),
        t.SupabaseRealtimeClient = void 0;
      const s = r(389);
      t.SupabaseRealtimeClient = class {
        constructor(e, t, r, s) {
          const n = {}
            , i = "*" === s ? `realtime:${r}` : `realtime:${r}:${s}`
            , o = t.Authorization.split(" ")[1];
          o && (n.user_token = o),
            this.subscription = e.channel(i, n)
        }
        getPayloadRecords(e) {
          const t = {
            new: {},
            old: {}
          };
          return "INSERT" !== e.type && "UPDATE" !== e.type || (t.new = s.Transformers.convertChangeData(e.columns, e.record)),
            "UPDATE" !== e.type && "DELETE" !== e.type || (t.old = s.Transformers.convertChangeData(e.columns, e.old_record)),
            t
        }
        on(e, t) {
          return this.subscription.on(e, (e => {
            let r = {
              schema: e.schema,
              table: e.table,
              commit_timestamp: e.commit_timestamp,
              eventType: e.type,
              new: {},
              old: {},
              errors: e.errors
            };
            r = Object.assign(Object.assign({}, r), this.getPayloadRecords(e)),
              t(r)
          }
          )),
            this
        }
        subscribe(e = (() => { }
        )) {
          return this.subscription.onError((t => e("SUBSCRIPTION_ERROR", t))),
            this.subscription.onClose((() => e("CLOSED"))),
            this.subscription.subscribe().receive("ok", (() => e("SUBSCRIBED"))).receive("error", (t => e("SUBSCRIPTION_ERROR", t))).receive("timeout", (() => e("RETRYING_AFTER_TIMEOUT"))),
            this.subscription
        }
      }
    }
    ,
    678: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }),
        t.STORAGE_KEY = t.DEFAULT_HEADERS = void 0;
      const s = r(506);
      t.DEFAULT_HEADERS = {
        "X-Client-Info": `supabase-js/${s.version}`
      },
        t.STORAGE_KEY = "supabase.auth.token"
    }
    ,
    610: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }),
        t.isBrowser = t.stripTrailingSlash = t.uuid = void 0,
        t.uuid = function () {
          return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (function (e) {
            var t = 16 * Math.random() | 0;
            return ("x" == e ? t : 3 & t | 8).toString(16)
          }
          ))
        }
        ,
        t.stripTrailingSlash = function (e) {
          return e.replace(/\/$/, "")
        }
        ,
        t.isBrowser = () => "undefined" != typeof window
    }
    ,
    717: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      })
    }
    ,
    506: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }),
        t.version = void 0,
        t.version = "1.35.3"
    }
    ,
    840: (e, t, r) => {
      var s;
      if ("object" == typeof globalThis)
        s = globalThis;
      else
        try {
          s = r(284)
        } catch (e) { } finally {
          if (s || "undefined" == typeof window || (s = window),
            !s)
            throw new Error("Could not determine global this")
        }
      var n = s.WebSocket || s.MozWebSocket
        , i = r(387);
      function o(e, t) {
        return t ? new n(e, t) : new n(e)
      }
      n && ["CONNECTING", "OPEN", "CLOSING", "CLOSED"].forEach((function (e) {
        Object.defineProperty(o, e, {
          get: function () {
            return n[e]
          }
        })
      }
      )),
        e.exports = {
          w3cwebsocket: n ? o : null,
          version: i
        }
    }
    ,
    387: (e, t, r) => {
      e.exports = r(794).version
    }
    ,
    794: e => {
      "use strict";
      e.exports = {
        version: "1.0.34"
      }
    }
  }
    , t = {};
  function r(s) {
    var n = t[s];
    if (void 0 !== n)
      return n.exports;
    var i = t[s] = {
      exports: {}
    };
    return e[s].call(i.exports, i, i.exports, r),
      i.exports
  }
  return r.n = e => {
    var t = e && e.__esModule ? () => e.default : () => e;
    return r.d(t, {
      a: t
    }),
      t
  }
    ,
    r.d = (e, t) => {
      for (var s in t)
        r.o(t, s) && !r.o(e, s) && Object.defineProperty(e, s, {
          enumerable: !0,
          get: t[s]
        })
    }
    ,
    r.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t),
    r.r = e => {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
        value: "Module"
      }),
        Object.defineProperty(e, "__esModule", {
          value: !0
        })
    }
    ,
    r(341)
}
)()));
