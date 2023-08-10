(() => {
  "use strict";
  var t = {
      426: (t, e, n) => {
        n.d(e, { Z: () => d });
        var r = n(537),
          a = n.n(r),
          o = n(645),
          i = n.n(o)()(a());
        i.push([
          t.id,
          "@import url(https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@300;400&family=REM:wght@200;300;400;500&display=swap);",
        ]),
          i.push([
            t.id,
            ":root {\n  --basic-layout-border: 1px solid black;\n  --basic-box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);\n  --light-box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);\n}\n\n\n* {\n  margin: 0;\n  padding: 0;\n  outline: 0;\n  font-family: 'REM', sans-serif;\n  color: black;\n  box-sizing: border-box;\n}\n\nbody {\n  background-color: rgb(248, 250, 251);\n  height: 100vh;\n}\n\n/* main grid */\n\n#main-grid {\n  display: grid;\n  grid-template-columns: max(15vw, 280px) 1fr;\n  padding: 20px;\n  height: 100%;\n  gap: 20px;\n}\n\n/* header */\n\n/* project overview */\n\n#overview {\n  grid-column: 1 / 2;\n  height: 100%;\n  overflow-y: auto;\n  box-shadow: var(--basic-box-shadow);\n  border-radius: 4px;\n  background-color: white;\n  /* background-image: linear-gradient(0deg, #F8FFE5, 10%, white); */\n  border: 1px solid transparent;\n  transition: 0.5s ease-in-out;\n}\n\n#overview:hover {\n  border: 1px dashed #569c95;\n  /* background-image: linear-gradient(0deg, white, 95%, #F8FFE5); */\n}\n\n#project-display {\n  display: flex;\n  flex-direction: column;\n  padding: 20px;\n}\n\n#project-display > p {\n  font-size: 1.5rem;\n  font-weight: 500;\n}\n\n#project-items {\n  margin-top: 10px;\n  padding: 10px 0;\n  gap: 10px;\n  display: flex;\n  flex-direction: column;\n  font-weight: 300;\n}\n\n.project-item {\n  padding: 10px;\n  border-radius: 4px;\n  border-left: 5px solid #25444141;\n  /* border-bottom: 1px solid #25444141; */\n  transition: 0.2s ease-in-out;\n}\n\n.project-item:hover {\n  cursor: pointer;\n  border-color: #254441;\n}\n\n#add-project {\n  display: flex;\n  justify-content: start;\n  align-items: center;\n  gap: 10px;\n  width: 100%;\n  padding: 10px;\n  border: none;\n  border-radius: 4px;\n  font-size: 1rem;\n  font-weight: 300;\n  background-color: transparent;\n  transition: 0.3s ease-in-out;\n}\n\n#add-project:hover {\n  cursor: pointer;\n  color: #569c95;\n}\n\n#add-project-form {\n  flex-direction: column;\n  gap: 10px;\n}\n\n#add-project-form > * {\n  font-weight: 300;\n}\n\n#add-project-input {\n  padding: 10px;\n  font-size: 1rem;\n  border: 1px solid black;\n  border-radius: 4px;\n}\n\n#project-add-buttons {\n  display: flex;\n  gap: 5px;\n}\n\n#project-add-buttons > button {\n  width: 100%;\n  padding: 10px 0;\n  border-radius: 4px;\n  border: none;\n  cursor: pointer;\n}\n\n#add-project-button {\n  background-color: #99e1d9;\n}\n\n#add-project-button:hover {\n  background-color: #b2ddd8;\n}\n\n#cancel-add-project-button {\n  background-color: #e893a2;\n}\n\n#cancel-add-project-button:hover {\n  background-color: #e8a7b3;\n}\n\n/* project bench */\n\n#project-bench {\n  display: flex;\n  /* padding: 20px; */\n  flex-direction: column;\n  align-items: center;\n  grid-column: 2 / 3;\n  /* box-shadow: var(--basic-box-shadow); */\n  border-radius: 4px;\n}\n\n#project-bench > p {\n  font-size: 1.7rem;\n  font-weight: 500;\n  align-self: start;\n  padding: 10px 20px;\n  width: 100%;\n  border-top-right-radius: 4px;\n  border-top-left-radius: 4px;\n  border: 1px dashed gray;\n  background-image: linear-gradient(90deg, #F8FFE5, 50%, #7DDE92, #2EBFA5 );\n  box-shadow: var(--basic-box-shadow);\n}\n\n#task-display-container {\n  width: 100%;\n  height: 100%;\n  display: grid;\n  grid-template-columns: 70% 30%;\n  background-color: white;\n  box-shadow: var(--basic-box-shadow);\n}\n\n#task-display-container > * {\n  flex-direction: column;\n  padding: 10px;\n}\n\n#task-display {\n  border-right: 1px dashed black;\n}\n\n#task-display > p {\n  text-align: center;\n  font-size: 1.5rem;\n  font-weight: 500;\n}\n\n#prio-tag {\n  display: flex;\n  justify-content: center;\n  gap: 10px;\n  font-size: 1rem;\n  margin-top: 10px;\n}\n\n#task-items {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  padding: 20px;\n}\n\n.task-item {\n  display: flex;\n  justify-content: space-between;\n  border-radius: 4px;\n  border: 1px solid transparent;\n  background-color: rgb(251, 251, 251);\n  /* border-left: 3px solid transparent; */\n  box-shadow: var(--light-box-shadow);\n  transition: 0.2s ease-in-out;\n}\n\n\n#task-action-buttons {\n  display: flex;\n  align-items: center;\n  padding-right: 10px;\n  gap: 10px;\n}\n\n.task-info {\n  padding: 15px 10px;\n  display: flex;\n  gap: 5px;\n}\n\n.task-action {\n  border: none;\n  transition: 0.2s ease-in-out;\n  border-radius: 1rem;\n  padding: 5px 10px;\n}\n\n.edit-task {\n  background-color: #bec6ff;\n}\n\n.check-task {\n  background-color: #99e1d9;\n}\n\n.task-action:hover {\n  cursor: pointer;\n  color: #569c95; \n}\n\n.low-prio {\n  border-left-color: #5E9E29;\n}\n.mid-prio {\n  border-left-color: #2B3D9E;\n}\n.high-prio {\n  border-left-color: #EA4E19;\n}\n\n#low-prio-tag {\n  color: #5E9E29;\n}\n#mid-prio-tag {\n  color: #2B3D9E;\n}\n#high-prio-tag {\n  color: #EA4E19;\n}\n\n#task-details {\n  display: none; \n  background-color: blanchedalmond;\n  position: relative;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n/* task form */\n\n#add-task-form {\n  padding: 20px;\n  gap: 10px; \n}\n\n.input-label {\n  font-weight: 200;\n  /* text-align: center; */\n  font-size: 0.9rem;\n}\n\n#add-task-form > input, select {\n  padding: 15px 10px;\n}\n\n#add-task-actions {\n  display: flex;\n  gap: 5px;\n}\n\n#add-task-actions > button {\n  width: 100%;\n  padding: 10px 0;\n  border: none;\n  cursor: pointer;\n  border-radius: 4px;\n}\n\n#add-task-add {\n  background-color: #99e1d9;\n}\n\n#add-task-add:hover {\n  background-color: #b2ddd8;\n}\n\n#delete-task-button {\n  background-color: #e893a2;\n}\n\n#delete-task-button:hover {\n  background-color: #e8a7b3;\n}\n\n#input-warning {\n  color: #e893a2;\n  text-align: center;\n}",
            "",
            {
              version: 3,
              sources: ["webpack://./src/style.css"],
              names: [],
              mappings:
                "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",
              sourcesContent: [
                ":root {\n  --basic-layout-border: 1px solid black;\n  --basic-box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);\n  --light-box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);\n}\n\n\n@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@300;400&family=REM:wght@200;300;400;500&display=swap');\n\n\n* {\n  margin: 0;\n  padding: 0;\n  outline: 0;\n  font-family: 'REM', sans-serif;\n  color: black;\n  box-sizing: border-box;\n}\n\nbody {\n  background-color: rgb(248, 250, 251);\n  height: 100vh;\n}\n\n/* main grid */\n\n#main-grid {\n  display: grid;\n  grid-template-columns: max(15vw, 280px) 1fr;\n  padding: 20px;\n  height: 100%;\n  gap: 20px;\n}\n\n/* header */\n\n/* project overview */\n\n#overview {\n  grid-column: 1 / 2;\n  height: 100%;\n  overflow-y: auto;\n  box-shadow: var(--basic-box-shadow);\n  border-radius: 4px;\n  background-color: white;\n  /* background-image: linear-gradient(0deg, #F8FFE5, 10%, white); */\n  border: 1px solid transparent;\n  transition: 0.5s ease-in-out;\n}\n\n#overview:hover {\n  border: 1px dashed #569c95;\n  /* background-image: linear-gradient(0deg, white, 95%, #F8FFE5); */\n}\n\n#project-display {\n  display: flex;\n  flex-direction: column;\n  padding: 20px;\n}\n\n#project-display > p {\n  font-size: 1.5rem;\n  font-weight: 500;\n}\n\n#project-items {\n  margin-top: 10px;\n  padding: 10px 0;\n  gap: 10px;\n  display: flex;\n  flex-direction: column;\n  font-weight: 300;\n}\n\n.project-item {\n  padding: 10px;\n  border-radius: 4px;\n  border-left: 5px solid #25444141;\n  /* border-bottom: 1px solid #25444141; */\n  transition: 0.2s ease-in-out;\n}\n\n.project-item:hover {\n  cursor: pointer;\n  border-color: #254441;\n}\n\n#add-project {\n  display: flex;\n  justify-content: start;\n  align-items: center;\n  gap: 10px;\n  width: 100%;\n  padding: 10px;\n  border: none;\n  border-radius: 4px;\n  font-size: 1rem;\n  font-weight: 300;\n  background-color: transparent;\n  transition: 0.3s ease-in-out;\n}\n\n#add-project:hover {\n  cursor: pointer;\n  color: #569c95;\n}\n\n#add-project-form {\n  flex-direction: column;\n  gap: 10px;\n}\n\n#add-project-form > * {\n  font-weight: 300;\n}\n\n#add-project-input {\n  padding: 10px;\n  font-size: 1rem;\n  border: 1px solid black;\n  border-radius: 4px;\n}\n\n#project-add-buttons {\n  display: flex;\n  gap: 5px;\n}\n\n#project-add-buttons > button {\n  width: 100%;\n  padding: 10px 0;\n  border-radius: 4px;\n  border: none;\n  cursor: pointer;\n}\n\n#add-project-button {\n  background-color: #99e1d9;\n}\n\n#add-project-button:hover {\n  background-color: #b2ddd8;\n}\n\n#cancel-add-project-button {\n  background-color: #e893a2;\n}\n\n#cancel-add-project-button:hover {\n  background-color: #e8a7b3;\n}\n\n/* project bench */\n\n#project-bench {\n  display: flex;\n  /* padding: 20px; */\n  flex-direction: column;\n  align-items: center;\n  grid-column: 2 / 3;\n  /* box-shadow: var(--basic-box-shadow); */\n  border-radius: 4px;\n}\n\n#project-bench > p {\n  font-size: 1.7rem;\n  font-weight: 500;\n  align-self: start;\n  padding: 10px 20px;\n  width: 100%;\n  border-top-right-radius: 4px;\n  border-top-left-radius: 4px;\n  border: 1px dashed gray;\n  background-image: linear-gradient(90deg, #F8FFE5, 50%, #7DDE92, #2EBFA5 );\n  box-shadow: var(--basic-box-shadow);\n}\n\n#task-display-container {\n  width: 100%;\n  height: 100%;\n  display: grid;\n  grid-template-columns: 70% 30%;\n  background-color: white;\n  box-shadow: var(--basic-box-shadow);\n}\n\n#task-display-container > * {\n  flex-direction: column;\n  padding: 10px;\n}\n\n#task-display {\n  border-right: 1px dashed black;\n}\n\n#task-display > p {\n  text-align: center;\n  font-size: 1.5rem;\n  font-weight: 500;\n}\n\n#prio-tag {\n  display: flex;\n  justify-content: center;\n  gap: 10px;\n  font-size: 1rem;\n  margin-top: 10px;\n}\n\n#task-items {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  padding: 20px;\n}\n\n.task-item {\n  display: flex;\n  justify-content: space-between;\n  border-radius: 4px;\n  border: 1px solid transparent;\n  background-color: rgb(251, 251, 251);\n  /* border-left: 3px solid transparent; */\n  box-shadow: var(--light-box-shadow);\n  transition: 0.2s ease-in-out;\n}\n\n\n#task-action-buttons {\n  display: flex;\n  align-items: center;\n  padding-right: 10px;\n  gap: 10px;\n}\n\n.task-info {\n  padding: 15px 10px;\n  display: flex;\n  gap: 5px;\n}\n\n.task-action {\n  border: none;\n  transition: 0.2s ease-in-out;\n  border-radius: 1rem;\n  padding: 5px 10px;\n}\n\n.edit-task {\n  background-color: #bec6ff;\n}\n\n.check-task {\n  background-color: #99e1d9;\n}\n\n.task-action:hover {\n  cursor: pointer;\n  color: #569c95; \n}\n\n.low-prio {\n  border-left-color: #5E9E29;\n}\n.mid-prio {\n  border-left-color: #2B3D9E;\n}\n.high-prio {\n  border-left-color: #EA4E19;\n}\n\n#low-prio-tag {\n  color: #5E9E29;\n}\n#mid-prio-tag {\n  color: #2B3D9E;\n}\n#high-prio-tag {\n  color: #EA4E19;\n}\n\n#task-details {\n  display: none; \n  background-color: blanchedalmond;\n  position: relative;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n/* task form */\n\n#add-task-form {\n  padding: 20px;\n  gap: 10px; \n}\n\n.input-label {\n  font-weight: 200;\n  /* text-align: center; */\n  font-size: 0.9rem;\n}\n\n#add-task-form > input, select {\n  padding: 15px 10px;\n}\n\n#add-task-actions {\n  display: flex;\n  gap: 5px;\n}\n\n#add-task-actions > button {\n  width: 100%;\n  padding: 10px 0;\n  border: none;\n  cursor: pointer;\n  border-radius: 4px;\n}\n\n#add-task-add {\n  background-color: #99e1d9;\n}\n\n#add-task-add:hover {\n  background-color: #b2ddd8;\n}\n\n#delete-task-button {\n  background-color: #e893a2;\n}\n\n#delete-task-button:hover {\n  background-color: #e8a7b3;\n}\n\n#input-warning {\n  color: #e893a2;\n  text-align: center;\n}",
              ],
              sourceRoot: "",
            },
          ]);
        const d = i;
      },
      645: (t) => {
        t.exports = function (t) {
          var e = [];
          return (
            (e.toString = function () {
              return this.map(function (e) {
                var n = "",
                  r = void 0 !== e[5];
                return (
                  e[4] && (n += "@supports (".concat(e[4], ") {")),
                  e[2] && (n += "@media ".concat(e[2], " {")),
                  r &&
                    (n += "@layer".concat(
                      e[5].length > 0 ? " ".concat(e[5]) : "",
                      " {",
                    )),
                  (n += t(e)),
                  r && (n += "}"),
                  e[2] && (n += "}"),
                  e[4] && (n += "}"),
                  n
                );
              }).join("");
            }),
            (e.i = function (t, n, r, a, o) {
              "string" == typeof t && (t = [[null, t, void 0]]);
              var i = {};
              if (r)
                for (var d = 0; d < this.length; d++) {
                  var s = this[d][0];
                  null != s && (i[s] = !0);
                }
              for (var c = 0; c < t.length; c++) {
                var l = [].concat(t[c]);
                (r && i[l[0]]) ||
                  (void 0 !== o &&
                    (void 0 === l[5] ||
                      (l[1] = "@layer"
                        .concat(l[5].length > 0 ? " ".concat(l[5]) : "", " {")
                        .concat(l[1], "}")),
                    (l[5] = o)),
                  n &&
                    (l[2]
                      ? ((l[1] = "@media "
                          .concat(l[2], " {")
                          .concat(l[1], "}")),
                        (l[2] = n))
                      : (l[2] = n)),
                  a &&
                    (l[4]
                      ? ((l[1] = "@supports ("
                          .concat(l[4], ") {")
                          .concat(l[1], "}")),
                        (l[4] = a))
                      : (l[4] = "".concat(a))),
                  e.push(l));
              }
            }),
            e
          );
        };
      },
      537: (t) => {
        t.exports = function (t) {
          var e = t[1],
            n = t[3];
          if (!n) return e;
          if ("function" == typeof btoa) {
            var r = btoa(unescape(encodeURIComponent(JSON.stringify(n)))),
              a =
                "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(
                  r,
                ),
              o = "/*# ".concat(a, " */");
            return [e].concat([o]).join("\n");
          }
          return [e].join("\n");
        };
      },
      379: (t) => {
        var e = [];
        function n(t) {
          for (var n = -1, r = 0; r < e.length; r++)
            if (e[r].identifier === t) {
              n = r;
              break;
            }
          return n;
        }
        function r(t, r) {
          for (var o = {}, i = [], d = 0; d < t.length; d++) {
            var s = t[d],
              c = r.base ? s[0] + r.base : s[0],
              l = o[c] || 0,
              u = "".concat(c, " ").concat(l);
            o[c] = l + 1;
            var A = n(u),
              p = {
                css: s[1],
                media: s[2],
                sourceMap: s[3],
                supports: s[4],
                layer: s[5],
              };
            if (-1 !== A) e[A].references++, e[A].updater(p);
            else {
              var h = a(p, r);
              (r.byIndex = d),
                e.splice(d, 0, { identifier: u, updater: h, references: 1 });
            }
            i.push(u);
          }
          return i;
        }
        function a(t, e) {
          var n = e.domAPI(e);
          return (
            n.update(t),
            function (e) {
              if (e) {
                if (
                  e.css === t.css &&
                  e.media === t.media &&
                  e.sourceMap === t.sourceMap &&
                  e.supports === t.supports &&
                  e.layer === t.layer
                )
                  return;
                n.update((t = e));
              } else n.remove();
            }
          );
        }
        t.exports = function (t, a) {
          var o = r((t = t || []), (a = a || {}));
          return function (t) {
            t = t || [];
            for (var i = 0; i < o.length; i++) {
              var d = n(o[i]);
              e[d].references--;
            }
            for (var s = r(t, a), c = 0; c < o.length; c++) {
              var l = n(o[c]);
              0 === e[l].references && (e[l].updater(), e.splice(l, 1));
            }
            o = s;
          };
        };
      },
      569: (t) => {
        var e = {};
        t.exports = function (t, n) {
          var r = (function (t) {
            if (void 0 === e[t]) {
              var n = document.querySelector(t);
              if (
                window.HTMLIFrameElement &&
                n instanceof window.HTMLIFrameElement
              )
                try {
                  n = n.contentDocument.head;
                } catch (t) {
                  n = null;
                }
              e[t] = n;
            }
            return e[t];
          })(t);
          if (!r)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.",
            );
          r.appendChild(n);
        };
      },
      216: (t) => {
        t.exports = function (t) {
          var e = document.createElement("style");
          return t.setAttributes(e, t.attributes), t.insert(e, t.options), e;
        };
      },
      565: (t, e, n) => {
        t.exports = function (t) {
          var e = n.nc;
          e && t.setAttribute("nonce", e);
        };
      },
      795: (t) => {
        t.exports = function (t) {
          if ("undefined" == typeof document)
            return { update: function () {}, remove: function () {} };
          var e = t.insertStyleElement(t);
          return {
            update: function (n) {
              !(function (t, e, n) {
                var r = "";
                n.supports && (r += "@supports (".concat(n.supports, ") {")),
                  n.media && (r += "@media ".concat(n.media, " {"));
                var a = void 0 !== n.layer;
                a &&
                  (r += "@layer".concat(
                    n.layer.length > 0 ? " ".concat(n.layer) : "",
                    " {",
                  )),
                  (r += n.css),
                  a && (r += "}"),
                  n.media && (r += "}"),
                  n.supports && (r += "}");
                var o = n.sourceMap;
                o &&
                  "undefined" != typeof btoa &&
                  (r +=
                    "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                      btoa(unescape(encodeURIComponent(JSON.stringify(o)))),
                      " */",
                    )),
                  e.styleTagTransform(r, t, e.options);
              })(e, t, n);
            },
            remove: function () {
              !(function (t) {
                if (null === t.parentNode) return !1;
                t.parentNode.removeChild(t);
              })(e);
            },
          };
        };
      },
      589: (t) => {
        t.exports = function (t, e) {
          if (e.styleSheet) e.styleSheet.cssText = t;
          else {
            for (; e.firstChild; ) e.removeChild(e.firstChild);
            e.appendChild(document.createTextNode(t));
          }
        };
      },
    },
    e = {};
  function n(r) {
    var a = e[r];
    if (void 0 !== a) return a.exports;
    var o = (e[r] = { id: r, exports: {} });
    return t[r](o, o.exports, n), o.exports;
  }
  (n.n = (t) => {
    var e = t && t.__esModule ? () => t.default : () => t;
    return n.d(e, { a: e }), e;
  }),
    (n.d = (t, e) => {
      for (var r in e)
        n.o(e, r) &&
          !n.o(t, r) &&
          Object.defineProperty(t, r, { enumerable: !0, get: e[r] });
    }),
    (n.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (t) {
        if ("object" == typeof window) return window;
      }
    })()),
    (n.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e)),
    (() => {
      var t;
      n.g.importScripts && (t = n.g.location + "");
      var e = n.g.document;
      if (!t && e && (e.currentScript && (t = e.currentScript.src), !t)) {
        var r = e.getElementsByTagName("script");
        if (r.length) for (var a = r.length - 1; a > -1 && !t; ) t = r[a--].src;
      }
      if (!t)
        throw new Error(
          "Automatic publicPath is not supported in this browser",
        );
      (t = t
        .replace(/#.*$/, "")
        .replace(/\?.*$/, "")
        .replace(/\/[^\/]+$/, "/")),
        (n.p = t);
    })(),
    (n.nc = void 0),
    (() => {
      var t = n(379),
        e = n.n(t),
        r = n(795),
        a = n.n(r),
        o = n(569),
        i = n.n(o),
        d = n(565),
        s = n.n(d),
        c = n(216),
        l = n.n(c),
        u = n(589),
        A = n.n(u),
        p = n(426),
        h = {};
      (h.styleTagTransform = A()),
        (h.setAttributes = s()),
        (h.insert = i().bind(null, "head")),
        (h.domAPI = a()),
        (h.insertStyleElement = l()),
        e()(p.Z, h),
        p.Z && p.Z.locals && p.Z.locals;
      class m {
        static appendChildren = (t, e = []) => {
          e.forEach((e) => {
            t.appendChild(e);
          });
        };
        static addId = (t, e) => {
          t.id = e;
        };
        static addClass = (t, e = []) => {
          e.forEach((e) => {
            t.classList.add(e);
          });
        };
        static addText = (t, e) => {
          t.textContent = e;
        };
        static toggleToFlex(t) {
          t.style.display = "none" === t.style.display ? "flex" : "none";
        }
        static toggleToBlock(t) {
          t.style.display = "none" === t.style.display ? "block" : "none";
        }
        static colorAccdgToPrio(t, e) {
          1 === t
            ? e.classList.add("low-prio")
            : 2 === t
            ? e.classList.add("mid-prio")
            : e.classList.add("high-prio");
        }
      }
      const g = n.p + "d265cb79f434ff980613.png";
      (() => {
        const t = document.createElement("div");
        m.appendChildren(document.body, [t]), m.addId(t, "main-grid");
        const e = document.createElement("div");
        m.addId(e, "overview");
        const n = document.createElement("div");
        m.addId(n, "project-display");
        const r = document.createElement("p");
        m.addText(r, "Your Projects");
        const a = document.createElement("div");
        m.addId(a, "project-items");
        const o = document.createElement("button");
        m.addId(o, "add-project");
        const i = new Image();
        (i.src = g),
          (i.style.width = "10px"),
          o.appendChild(i),
          (o.innerHTML += "Add project");
        const d = document.createElement("div");
        (d.id = "add-project-form"), (d.style.display = "none");
        const s = document.createElement("input");
        (s.name = "add-project-input"),
          (s.type = "text"),
          (s.id = "add-project-input"),
          (s.placeholder = "Input a valid project name"),
          (s.pattern = "[A-Za-z]+");
        const c = document.createElement("div");
        c.id = "project-add-buttons";
        const l = document.createElement("button");
        (l.textContent = "Add"),
          (l.type = "button"),
          (l.id = "add-project-button");
        const u = document.createElement("button");
        (u.textContent = "Cancel"),
          (l.type = "button"),
          (u.id = "cancel-add-project-button"),
          m.appendChildren(c, [l, u]),
          m.appendChildren(d, [s, c]),
          m.appendChildren(n, [r, a, o, d]),
          m.appendChildren(e, [n]);
        const A = document.createElement("div");
        A.id = "project-bench";
        const p = document.createElement("p");
        m.addText(p, "Create a project and start adding tasks!"),
          m.addId(p, "project-name");
        const h = document.createElement("div");
        h.id = "task-display-container";
        const f = document.createElement("div");
        m.addId(f, "task-display"), (f.style.display = "none");
        const b = document.createElement("p");
        b.textContent = "Your Tasks";
        const E = document.createElement("div");
        E.id = "prio-tag";
        const C = document.createElement("p");
        C.textContent = "Priority: ";
        const v = document.createElement("p");
        (v.textContent = "Low"), (v.id = "low-prio-tag");
        const y = document.createElement("p");
        (y.textContent = "Mid"), (y.id = "mid-prio-tag");
        const w = document.createElement("p");
        (w.textContent = "High"),
          (w.id = "high-prio-tag"),
          m.appendChildren(E, [C, v, y, w]);
        const k = document.createElement("div");
        m.addId(k, "task-items"), m.appendChildren(f, [b, E, k]);
        const x = document.createElement("div");
        (x.id = "add-task-form"), (x.style.display = "none");
        const B = document.createElement("p");
        (B.textContent = "Add a task"), (B.id = "add-task-tag");
        const T = document.createElement("p");
        (T.textContent = "Title"), T.classList.add("input-label");
        const j = document.createElement("input");
        (j.id = "task-title-input"),
          (j.type = "text"),
          (j.placeholder = "Title*");
        const D = document.createElement("p");
        (D.textContent = "Description"), D.classList.add("input-label");
        const M = document.createElement("input");
        (M.id = "task-desc-input"),
          (M.type = "text"),
          (M.placeholder = "Description");
        const S = document.createElement("p");
        (S.textContent = "Due On"), S.classList.add("input-label");
        const P = document.createElement("input");
        (P.id = "task-date-input"),
          (P.type = "text"),
          (P.placeholder = "Due Date*"),
          (P.onfocus = () => {
            P.type = "date";
          });
        const R = document.createElement("p");
        (R.textContent = "Due At"), R.classList.add("input-label");
        const U = document.createElement("input");
        (U.id = "task-time-input"),
          (U.type = "text"),
          (U.placeholder = "Due Time"),
          (U.onfocus = () => {
            U.type = "time";
          });
        const W = document.createElement("p");
        (W.textContent = "Task Priority"), W.classList.add("input-label");
        const F = document.createElement("select");
        F.id = "task-prio-input";
        const Y = document.createElement("option");
        (Y.textContent = "High"), (Y.value = 3);
        const L = document.createElement("option");
        (L.textContent = "Mid"), (L.value = 2);
        const I = document.createElement("option");
        (I.textContent = "Low"),
          (I.value = 1),
          I.setAttribute("selected", ""),
          m.appendChildren(F, [Y, L, I]);
        const _ = document.createElement("div");
        _.id = "add-task-actions";
        const N = document.createElement("button");
        (N.id = "add-task-add"), (N.textContent = "Add");
        const O = document.createElement("button");
        (O.id = "delete-task-button"),
          (O.textContent = "Delete"),
          (O.style.display = "none"),
          m.appendChildren(_, [N, O]);
        const q = document.createElement("p");
        (q.id = "input-warning"),
          m.appendChildren(x, [B, T, j, D, M, S, P, R, U, W, F, _, q]),
          m.appendChildren(h, [f, x]),
          m.appendChildren(A, [p, h]),
          m.appendChildren(t, [e, A]),
          document.querySelectorAll("input").forEach((t) => {
            t.setAttribute("required", "");
          });
      })();
      const f = document.getElementById("add-project-form"),
        b = document.getElementById("add-project"),
        E = document.getElementById("add-project-input"),
        C = document.getElementById("add-project-button"),
        v = document.getElementById("cancel-add-project-button");
      function y() {
        return document.querySelectorAll(".project-item");
      }
      function w() {
        return document.querySelectorAll(".edit-task");
      }
      function k() {
        return document.querySelectorAll(".check-task");
      }
      const x = document.getElementById("task-display"),
        B = document.getElementById("add-task-form"),
        T = document.getElementById("add-task-add"),
        j = document.getElementById("add-task-tag"),
        D = document.getElementById("task-title-input"),
        M = document.getElementById("task-desc-input"),
        S = document.getElementById("task-date-input"),
        P = document.getElementById("task-prio-input"),
        R = document.getElementById("task-time-input"),
        U = document.getElementById("input-warning"),
        W = document.getElementById("delete-task-button");
      document.getElementById("task-details");
      class F {
        constructor(t) {
          (this.list = t),
            (this.pdItems = document.getElementById("project-items")),
            (this.addProjField = E),
            (this.addProjectForm = f),
            (this.addProjectBtn = b),
            (this.addProjectCancel = v),
            (this.addProjectAdd = C),
            (this.projectItems = y());
        }
        renderProjects() {
          this.pdItems.innerHTML = "";
          let t = 0;
          this.list.projects.forEach((e) => {
            const n = document.createElement("div");
            n.classList.add("project-item"),
              (n.textContent = `${e.name}`),
              m.appendChildren(this.pdItems, [n]),
              (n.id = `${t}`),
              (t += 1);
          }),
            (this.projectItems = y());
        }
      }
      const Y = new (class {
          constructor() {
            (this.tdItems = document.getElementById("task-items")),
              (this.name = document.getElementById("project-name")),
              (this.project = null),
              (this.taskDisplay = x),
              (this.completeBtns = k()),
              (this.editBtns = w());
          }
          renderTasks(t) {
            (this.project = t),
              (this.tdItems.innerHTML = ""),
              m.addText(this.name, t.name);
            let e = 0;
            t.tasks.forEach((t) => {
              const n = document.createElement("div");
              n.classList.add("task-item"),
                (n.innerHTML = `\n        <div class='task-info'> \n          <p>${
                  t.title
                } - </p>\n          <p>${t.formattedDueDate()}</p>\n        </div>\n      `);
              const r = document.createElement("div");
              r.id = "task-action-buttons";
              const a = document.createElement("button");
              (a.textContent = "Edit"),
                (a.id = `${e}`),
                m.addClass(a, ["task-action", "edit-task"]);
              const o = document.createElement("button");
              (o.textContent = "Complete"),
                (o.id = `${e}`),
                m.addClass(o, ["task-action", "check-task"]),
                m.appendChildren(r, [a, o]),
                n.appendChild(r),
                this.tdItems.appendChild(n),
                m.colorAccdgToPrio(t.priority, n),
                (e += 1);
            }),
              (this.completeBtns = k()),
              (this.editBtns = w());
          }
        })(),
        L = new (class {
          constructor() {
            (this.task = null),
              (this.project = null),
              (this.details = B),
              (this.title = D),
              (this.dueDate = S),
              (this.dueTime = R),
              (this.desc = M),
              (this.prio = P),
              (this.edit = T),
              (this.tag = j),
              (this.delete = W),
              (this.warning = U);
          }
          renderDetails(t, e) {
            (this.task = t),
              (this.project = e),
              (this.warning.textContent = ""),
              (this.details.style.display = "flex"),
              (this.title.value = `${this.task.title}`),
              (this.dueTime.value = `${this.task.dueTime}`),
              (this.desc.value = `${this.task.description}`),
              (this.dueDate.value = `${this.task.dueDate}`),
              (this.prio.value = `${this.task.priority}`);
          }
          showWarning() {
            this.warning.textContent = "Please input task title and due date";
          }
          hideWarning() {
            this.warning.textContent = "";
          }
        })();
      function I(t) {
        return (
          (I =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                }),
          I(t)
        );
      }
      function _(t, e) {
        if (e.length < t)
          throw new TypeError(
            t +
              " argument" +
              (t > 1 ? "s" : "") +
              " required, but only " +
              e.length +
              " present",
          );
      }
      function N(t) {
        _(1, arguments);
        var e = Object.prototype.toString.call(t);
        return t instanceof Date || ("object" === I(t) && "[object Date]" === e)
          ? new Date(t.getTime())
          : "number" == typeof t || "[object Number]" === e
          ? new Date(t)
          : (("string" != typeof t && "[object String]" !== e) ||
              "undefined" == typeof console ||
              (console.warn(
                "Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments",
              ),
              console.warn(new Error().stack)),
            new Date(NaN));
      }
      function O(t) {
        if (null === t || !0 === t || !1 === t) return NaN;
        var e = Number(t);
        return isNaN(e) ? e : e < 0 ? Math.ceil(e) : Math.floor(e);
      }
      function q(t) {
        _(1, arguments);
        var e = N(t),
          n = e.getUTCDay(),
          r = (n < 1 ? 7 : 0) + n - 1;
        return e.setUTCDate(e.getUTCDate() - r), e.setUTCHours(0, 0, 0, 0), e;
      }
      function z(t) {
        _(1, arguments);
        var e = N(t),
          n = e.getUTCFullYear(),
          r = new Date(0);
        r.setUTCFullYear(n + 1, 0, 4), r.setUTCHours(0, 0, 0, 0);
        var a = q(r),
          o = new Date(0);
        o.setUTCFullYear(n, 0, 4), o.setUTCHours(0, 0, 0, 0);
        var i = q(o);
        return e.getTime() >= a.getTime()
          ? n + 1
          : e.getTime() >= i.getTime()
          ? n
          : n - 1;
      }
      var H = {};
      function Q() {
        return H;
      }
      function X(t, e) {
        var n, r, a, o, i, d, s, c;
        _(1, arguments);
        var l = Q(),
          u = O(
            null !==
              (n =
                null !==
                  (r =
                    null !==
                      (a =
                        null !== (o = null == e ? void 0 : e.weekStartsOn) &&
                        void 0 !== o
                          ? o
                          : null == e ||
                            null === (i = e.locale) ||
                            void 0 === i ||
                            null === (d = i.options) ||
                            void 0 === d
                          ? void 0
                          : d.weekStartsOn) && void 0 !== a
                      ? a
                      : l.weekStartsOn) && void 0 !== r
                  ? r
                  : null === (s = l.locale) ||
                    void 0 === s ||
                    null === (c = s.options) ||
                    void 0 === c
                  ? void 0
                  : c.weekStartsOn) && void 0 !== n
              ? n
              : 0,
          );
        if (!(u >= 0 && u <= 6))
          throw new RangeError(
            "weekStartsOn must be between 0 and 6 inclusively",
          );
        var A = N(t),
          p = A.getUTCDay(),
          h = (p < u ? 7 : 0) + p - u;
        return A.setUTCDate(A.getUTCDate() - h), A.setUTCHours(0, 0, 0, 0), A;
      }
      function G(t, e) {
        var n, r, a, o, i, d, s, c;
        _(1, arguments);
        var l = N(t),
          u = l.getUTCFullYear(),
          A = Q(),
          p = O(
            null !==
              (n =
                null !==
                  (r =
                    null !==
                      (a =
                        null !==
                          (o = null == e ? void 0 : e.firstWeekContainsDate) &&
                        void 0 !== o
                          ? o
                          : null == e ||
                            null === (i = e.locale) ||
                            void 0 === i ||
                            null === (d = i.options) ||
                            void 0 === d
                          ? void 0
                          : d.firstWeekContainsDate) && void 0 !== a
                      ? a
                      : A.firstWeekContainsDate) && void 0 !== r
                  ? r
                  : null === (s = A.locale) ||
                    void 0 === s ||
                    null === (c = s.options) ||
                    void 0 === c
                  ? void 0
                  : c.firstWeekContainsDate) && void 0 !== n
              ? n
              : 1,
          );
        if (!(p >= 1 && p <= 7))
          throw new RangeError(
            "firstWeekContainsDate must be between 1 and 7 inclusively",
          );
        var h = new Date(0);
        h.setUTCFullYear(u + 1, 0, p), h.setUTCHours(0, 0, 0, 0);
        var m = X(h, e),
          g = new Date(0);
        g.setUTCFullYear(u, 0, p), g.setUTCHours(0, 0, 0, 0);
        var f = X(g, e);
        return l.getTime() >= m.getTime()
          ? u + 1
          : l.getTime() >= f.getTime()
          ? u
          : u - 1;
      }
      function $(t, e) {
        for (
          var n = t < 0 ? "-" : "", r = Math.abs(t).toString();
          r.length < e;

        )
          r = "0" + r;
        return n + r;
      }
      const Z = function (t, e) {
          var n = t.getUTCFullYear(),
            r = n > 0 ? n : 1 - n;
          return $("yy" === e ? r % 100 : r, e.length);
        },
        J = function (t, e) {
          var n = t.getUTCMonth();
          return "M" === e ? String(n + 1) : $(n + 1, 2);
        },
        V = function (t, e) {
          return $(t.getUTCDate(), e.length);
        },
        K = function (t, e) {
          return $(t.getUTCHours() % 12 || 12, e.length);
        },
        tt = function (t, e) {
          return $(t.getUTCHours(), e.length);
        },
        et = function (t, e) {
          return $(t.getUTCMinutes(), e.length);
        },
        nt = function (t, e) {
          return $(t.getUTCSeconds(), e.length);
        },
        rt = function (t, e) {
          var n = e.length,
            r = t.getUTCMilliseconds();
          return $(Math.floor(r * Math.pow(10, n - 3)), e.length);
        };
      var at = {
        G: function (t, e, n) {
          var r = t.getUTCFullYear() > 0 ? 1 : 0;
          switch (e) {
            case "G":
            case "GG":
            case "GGG":
              return n.era(r, { width: "abbreviated" });
            case "GGGGG":
              return n.era(r, { width: "narrow" });
            default:
              return n.era(r, { width: "wide" });
          }
        },
        y: function (t, e, n) {
          if ("yo" === e) {
            var r = t.getUTCFullYear(),
              a = r > 0 ? r : 1 - r;
            return n.ordinalNumber(a, { unit: "year" });
          }
          return Z(t, e);
        },
        Y: function (t, e, n, r) {
          var a = G(t, r),
            o = a > 0 ? a : 1 - a;
          return "YY" === e
            ? $(o % 100, 2)
            : "Yo" === e
            ? n.ordinalNumber(o, { unit: "year" })
            : $(o, e.length);
        },
        R: function (t, e) {
          return $(z(t), e.length);
        },
        u: function (t, e) {
          return $(t.getUTCFullYear(), e.length);
        },
        Q: function (t, e, n) {
          var r = Math.ceil((t.getUTCMonth() + 1) / 3);
          switch (e) {
            case "Q":
              return String(r);
            case "QQ":
              return $(r, 2);
            case "Qo":
              return n.ordinalNumber(r, { unit: "quarter" });
            case "QQQ":
              return n.quarter(r, {
                width: "abbreviated",
                context: "formatting",
              });
            case "QQQQQ":
              return n.quarter(r, { width: "narrow", context: "formatting" });
            default:
              return n.quarter(r, { width: "wide", context: "formatting" });
          }
        },
        q: function (t, e, n) {
          var r = Math.ceil((t.getUTCMonth() + 1) / 3);
          switch (e) {
            case "q":
              return String(r);
            case "qq":
              return $(r, 2);
            case "qo":
              return n.ordinalNumber(r, { unit: "quarter" });
            case "qqq":
              return n.quarter(r, {
                width: "abbreviated",
                context: "standalone",
              });
            case "qqqqq":
              return n.quarter(r, { width: "narrow", context: "standalone" });
            default:
              return n.quarter(r, { width: "wide", context: "standalone" });
          }
        },
        M: function (t, e, n) {
          var r = t.getUTCMonth();
          switch (e) {
            case "M":
            case "MM":
              return J(t, e);
            case "Mo":
              return n.ordinalNumber(r + 1, { unit: "month" });
            case "MMM":
              return n.month(r, {
                width: "abbreviated",
                context: "formatting",
              });
            case "MMMMM":
              return n.month(r, { width: "narrow", context: "formatting" });
            default:
              return n.month(r, { width: "wide", context: "formatting" });
          }
        },
        L: function (t, e, n) {
          var r = t.getUTCMonth();
          switch (e) {
            case "L":
              return String(r + 1);
            case "LL":
              return $(r + 1, 2);
            case "Lo":
              return n.ordinalNumber(r + 1, { unit: "month" });
            case "LLL":
              return n.month(r, {
                width: "abbreviated",
                context: "standalone",
              });
            case "LLLLL":
              return n.month(r, { width: "narrow", context: "standalone" });
            default:
              return n.month(r, { width: "wide", context: "standalone" });
          }
        },
        w: function (t, e, n, r) {
          var a = (function (t, e) {
            _(1, arguments);
            var n = N(t),
              r =
                X(n, e).getTime() -
                (function (t, e) {
                  var n, r, a, o, i, d, s, c;
                  _(1, arguments);
                  var l = Q(),
                    u = O(
                      null !==
                        (n =
                          null !==
                            (r =
                              null !==
                                (a =
                                  null !==
                                    (o =
                                      null == e
                                        ? void 0
                                        : e.firstWeekContainsDate) &&
                                  void 0 !== o
                                    ? o
                                    : null == e ||
                                      null === (i = e.locale) ||
                                      void 0 === i ||
                                      null === (d = i.options) ||
                                      void 0 === d
                                    ? void 0
                                    : d.firstWeekContainsDate) && void 0 !== a
                                ? a
                                : l.firstWeekContainsDate) && void 0 !== r
                            ? r
                            : null === (s = l.locale) ||
                              void 0 === s ||
                              null === (c = s.options) ||
                              void 0 === c
                            ? void 0
                            : c.firstWeekContainsDate) && void 0 !== n
                        ? n
                        : 1,
                    ),
                    A = G(t, e),
                    p = new Date(0);
                  return (
                    p.setUTCFullYear(A, 0, u),
                    p.setUTCHours(0, 0, 0, 0),
                    X(p, e)
                  );
                })(n, e).getTime();
            return Math.round(r / 6048e5) + 1;
          })(t, r);
          return "wo" === e
            ? n.ordinalNumber(a, { unit: "week" })
            : $(a, e.length);
        },
        I: function (t, e, n) {
          var r = (function (t) {
            _(1, arguments);
            var e = N(t),
              n =
                q(e).getTime() -
                (function (t) {
                  _(1, arguments);
                  var e = z(t),
                    n = new Date(0);
                  return (
                    n.setUTCFullYear(e, 0, 4), n.setUTCHours(0, 0, 0, 0), q(n)
                  );
                })(e).getTime();
            return Math.round(n / 6048e5) + 1;
          })(t);
          return "Io" === e
            ? n.ordinalNumber(r, { unit: "week" })
            : $(r, e.length);
        },
        d: function (t, e, n) {
          return "do" === e
            ? n.ordinalNumber(t.getUTCDate(), { unit: "date" })
            : V(t, e);
        },
        D: function (t, e, n) {
          var r = (function (t) {
            _(1, arguments);
            var e = N(t),
              n = e.getTime();
            e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0);
            var r = n - e.getTime();
            return Math.floor(r / 864e5) + 1;
          })(t);
          return "Do" === e
            ? n.ordinalNumber(r, { unit: "dayOfYear" })
            : $(r, e.length);
        },
        E: function (t, e, n) {
          var r = t.getUTCDay();
          switch (e) {
            case "E":
            case "EE":
            case "EEE":
              return n.day(r, { width: "abbreviated", context: "formatting" });
            case "EEEEE":
              return n.day(r, { width: "narrow", context: "formatting" });
            case "EEEEEE":
              return n.day(r, { width: "short", context: "formatting" });
            default:
              return n.day(r, { width: "wide", context: "formatting" });
          }
        },
        e: function (t, e, n, r) {
          var a = t.getUTCDay(),
            o = (a - r.weekStartsOn + 8) % 7 || 7;
          switch (e) {
            case "e":
              return String(o);
            case "ee":
              return $(o, 2);
            case "eo":
              return n.ordinalNumber(o, { unit: "day" });
            case "eee":
              return n.day(a, { width: "abbreviated", context: "formatting" });
            case "eeeee":
              return n.day(a, { width: "narrow", context: "formatting" });
            case "eeeeee":
              return n.day(a, { width: "short", context: "formatting" });
            default:
              return n.day(a, { width: "wide", context: "formatting" });
          }
        },
        c: function (t, e, n, r) {
          var a = t.getUTCDay(),
            o = (a - r.weekStartsOn + 8) % 7 || 7;
          switch (e) {
            case "c":
              return String(o);
            case "cc":
              return $(o, e.length);
            case "co":
              return n.ordinalNumber(o, { unit: "day" });
            case "ccc":
              return n.day(a, { width: "abbreviated", context: "standalone" });
            case "ccccc":
              return n.day(a, { width: "narrow", context: "standalone" });
            case "cccccc":
              return n.day(a, { width: "short", context: "standalone" });
            default:
              return n.day(a, { width: "wide", context: "standalone" });
          }
        },
        i: function (t, e, n) {
          var r = t.getUTCDay(),
            a = 0 === r ? 7 : r;
          switch (e) {
            case "i":
              return String(a);
            case "ii":
              return $(a, e.length);
            case "io":
              return n.ordinalNumber(a, { unit: "day" });
            case "iii":
              return n.day(r, { width: "abbreviated", context: "formatting" });
            case "iiiii":
              return n.day(r, { width: "narrow", context: "formatting" });
            case "iiiiii":
              return n.day(r, { width: "short", context: "formatting" });
            default:
              return n.day(r, { width: "wide", context: "formatting" });
          }
        },
        a: function (t, e, n) {
          var r = t.getUTCHours() / 12 >= 1 ? "pm" : "am";
          switch (e) {
            case "a":
            case "aa":
              return n.dayPeriod(r, {
                width: "abbreviated",
                context: "formatting",
              });
            case "aaa":
              return n
                .dayPeriod(r, { width: "abbreviated", context: "formatting" })
                .toLowerCase();
            case "aaaaa":
              return n.dayPeriod(r, { width: "narrow", context: "formatting" });
            default:
              return n.dayPeriod(r, { width: "wide", context: "formatting" });
          }
        },
        b: function (t, e, n) {
          var r,
            a = t.getUTCHours();
          switch (
            ((r =
              12 === a
                ? "noon"
                : 0 === a
                ? "midnight"
                : a / 12 >= 1
                ? "pm"
                : "am"),
            e)
          ) {
            case "b":
            case "bb":
              return n.dayPeriod(r, {
                width: "abbreviated",
                context: "formatting",
              });
            case "bbb":
              return n
                .dayPeriod(r, { width: "abbreviated", context: "formatting" })
                .toLowerCase();
            case "bbbbb":
              return n.dayPeriod(r, { width: "narrow", context: "formatting" });
            default:
              return n.dayPeriod(r, { width: "wide", context: "formatting" });
          }
        },
        B: function (t, e, n) {
          var r,
            a = t.getUTCHours();
          switch (
            ((r =
              a >= 17
                ? "evening"
                : a >= 12
                ? "afternoon"
                : a >= 4
                ? "morning"
                : "night"),
            e)
          ) {
            case "B":
            case "BB":
            case "BBB":
              return n.dayPeriod(r, {
                width: "abbreviated",
                context: "formatting",
              });
            case "BBBBB":
              return n.dayPeriod(r, { width: "narrow", context: "formatting" });
            default:
              return n.dayPeriod(r, { width: "wide", context: "formatting" });
          }
        },
        h: function (t, e, n) {
          if ("ho" === e) {
            var r = t.getUTCHours() % 12;
            return 0 === r && (r = 12), n.ordinalNumber(r, { unit: "hour" });
          }
          return K(t, e);
        },
        H: function (t, e, n) {
          return "Ho" === e
            ? n.ordinalNumber(t.getUTCHours(), { unit: "hour" })
            : tt(t, e);
        },
        K: function (t, e, n) {
          var r = t.getUTCHours() % 12;
          return "Ko" === e
            ? n.ordinalNumber(r, { unit: "hour" })
            : $(r, e.length);
        },
        k: function (t, e, n) {
          var r = t.getUTCHours();
          return (
            0 === r && (r = 24),
            "ko" === e ? n.ordinalNumber(r, { unit: "hour" }) : $(r, e.length)
          );
        },
        m: function (t, e, n) {
          return "mo" === e
            ? n.ordinalNumber(t.getUTCMinutes(), { unit: "minute" })
            : et(t, e);
        },
        s: function (t, e, n) {
          return "so" === e
            ? n.ordinalNumber(t.getUTCSeconds(), { unit: "second" })
            : nt(t, e);
        },
        S: function (t, e) {
          return rt(t, e);
        },
        X: function (t, e, n, r) {
          var a = (r._originalDate || t).getTimezoneOffset();
          if (0 === a) return "Z";
          switch (e) {
            case "X":
              return it(a);
            case "XXXX":
            case "XX":
              return dt(a);
            default:
              return dt(a, ":");
          }
        },
        x: function (t, e, n, r) {
          var a = (r._originalDate || t).getTimezoneOffset();
          switch (e) {
            case "x":
              return it(a);
            case "xxxx":
            case "xx":
              return dt(a);
            default:
              return dt(a, ":");
          }
        },
        O: function (t, e, n, r) {
          var a = (r._originalDate || t).getTimezoneOffset();
          switch (e) {
            case "O":
            case "OO":
            case "OOO":
              return "GMT" + ot(a, ":");
            default:
              return "GMT" + dt(a, ":");
          }
        },
        z: function (t, e, n, r) {
          var a = (r._originalDate || t).getTimezoneOffset();
          switch (e) {
            case "z":
            case "zz":
            case "zzz":
              return "GMT" + ot(a, ":");
            default:
              return "GMT" + dt(a, ":");
          }
        },
        t: function (t, e, n, r) {
          var a = r._originalDate || t;
          return $(Math.floor(a.getTime() / 1e3), e.length);
        },
        T: function (t, e, n, r) {
          return $((r._originalDate || t).getTime(), e.length);
        },
      };
      function ot(t, e) {
        var n = t > 0 ? "-" : "+",
          r = Math.abs(t),
          a = Math.floor(r / 60),
          o = r % 60;
        if (0 === o) return n + String(a);
        var i = e || "";
        return n + String(a) + i + $(o, 2);
      }
      function it(t, e) {
        return t % 60 == 0
          ? (t > 0 ? "-" : "+") + $(Math.abs(t) / 60, 2)
          : dt(t, e);
      }
      function dt(t, e) {
        var n = e || "",
          r = t > 0 ? "-" : "+",
          a = Math.abs(t);
        return r + $(Math.floor(a / 60), 2) + n + $(a % 60, 2);
      }
      const st = at;
      var ct = function (t, e) {
          switch (t) {
            case "P":
              return e.date({ width: "short" });
            case "PP":
              return e.date({ width: "medium" });
            case "PPP":
              return e.date({ width: "long" });
            default:
              return e.date({ width: "full" });
          }
        },
        lt = function (t, e) {
          switch (t) {
            case "p":
              return e.time({ width: "short" });
            case "pp":
              return e.time({ width: "medium" });
            case "ppp":
              return e.time({ width: "long" });
            default:
              return e.time({ width: "full" });
          }
        };
      const ut = {
        p: lt,
        P: function (t, e) {
          var n,
            r = t.match(/(P+)(p+)?/) || [],
            a = r[1],
            o = r[2];
          if (!o) return ct(t, e);
          switch (a) {
            case "P":
              n = e.dateTime({ width: "short" });
              break;
            case "PP":
              n = e.dateTime({ width: "medium" });
              break;
            case "PPP":
              n = e.dateTime({ width: "long" });
              break;
            default:
              n = e.dateTime({ width: "full" });
          }
          return n.replace("{{date}}", ct(a, e)).replace("{{time}}", lt(o, e));
        },
      };
      var At = ["D", "DD"],
        pt = ["YY", "YYYY"];
      function ht(t, e, n) {
        if ("YYYY" === t)
          throw new RangeError(
            "Use `yyyy` instead of `YYYY` (in `"
              .concat(e, "`) for formatting years to the input `")
              .concat(
                n,
                "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md",
              ),
          );
        if ("YY" === t)
          throw new RangeError(
            "Use `yy` instead of `YY` (in `"
              .concat(e, "`) for formatting years to the input `")
              .concat(
                n,
                "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md",
              ),
          );
        if ("D" === t)
          throw new RangeError(
            "Use `d` instead of `D` (in `"
              .concat(e, "`) for formatting days of the month to the input `")
              .concat(
                n,
                "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md",
              ),
          );
        if ("DD" === t)
          throw new RangeError(
            "Use `dd` instead of `DD` (in `"
              .concat(e, "`) for formatting days of the month to the input `")
              .concat(
                n,
                "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md",
              ),
          );
      }
      var mt = {
        lessThanXSeconds: {
          one: "less than a second",
          other: "less than {{count}} seconds",
        },
        xSeconds: { one: "1 second", other: "{{count}} seconds" },
        halfAMinute: "half a minute",
        lessThanXMinutes: {
          one: "less than a minute",
          other: "less than {{count}} minutes",
        },
        xMinutes: { one: "1 minute", other: "{{count}} minutes" },
        aboutXHours: { one: "about 1 hour", other: "about {{count}} hours" },
        xHours: { one: "1 hour", other: "{{count}} hours" },
        xDays: { one: "1 day", other: "{{count}} days" },
        aboutXWeeks: { one: "about 1 week", other: "about {{count}} weeks" },
        xWeeks: { one: "1 week", other: "{{count}} weeks" },
        aboutXMonths: { one: "about 1 month", other: "about {{count}} months" },
        xMonths: { one: "1 month", other: "{{count}} months" },
        aboutXYears: { one: "about 1 year", other: "about {{count}} years" },
        xYears: { one: "1 year", other: "{{count}} years" },
        overXYears: { one: "over 1 year", other: "over {{count}} years" },
        almostXYears: { one: "almost 1 year", other: "almost {{count}} years" },
      };
      function gt(t) {
        return function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            n = e.width ? String(e.width) : t.defaultWidth;
          return t.formats[n] || t.formats[t.defaultWidth];
        };
      }
      const ft = {
        date: gt({
          formats: {
            full: "EEEE, MMMM do, y",
            long: "MMMM do, y",
            medium: "MMM d, y",
            short: "MM/dd/yyyy",
          },
          defaultWidth: "full",
        }),
        time: gt({
          formats: {
            full: "h:mm:ss a zzzz",
            long: "h:mm:ss a z",
            medium: "h:mm:ss a",
            short: "h:mm a",
          },
          defaultWidth: "full",
        }),
        dateTime: gt({
          formats: {
            full: "{{date}} 'at' {{time}}",
            long: "{{date}} 'at' {{time}}",
            medium: "{{date}}, {{time}}",
            short: "{{date}}, {{time}}",
          },
          defaultWidth: "full",
        }),
      };
      var bt = {
        lastWeek: "'last' eeee 'at' p",
        yesterday: "'yesterday at' p",
        today: "'today at' p",
        tomorrow: "'tomorrow at' p",
        nextWeek: "eeee 'at' p",
        other: "P",
      };
      function Et(t) {
        return function (e, n) {
          var r;
          if (
            "formatting" ===
              (null != n && n.context ? String(n.context) : "standalone") &&
            t.formattingValues
          ) {
            var a = t.defaultFormattingWidth || t.defaultWidth,
              o = null != n && n.width ? String(n.width) : a;
            r = t.formattingValues[o] || t.formattingValues[a];
          } else {
            var i = t.defaultWidth,
              d = null != n && n.width ? String(n.width) : t.defaultWidth;
            r = t.values[d] || t.values[i];
          }
          return r[t.argumentCallback ? t.argumentCallback(e) : e];
        };
      }
      const Ct = {
        ordinalNumber: function (t, e) {
          var n = Number(t),
            r = n % 100;
          if (r > 20 || r < 10)
            switch (r % 10) {
              case 1:
                return n + "st";
              case 2:
                return n + "nd";
              case 3:
                return n + "rd";
            }
          return n + "th";
        },
        era: Et({
          values: {
            narrow: ["B", "A"],
            abbreviated: ["BC", "AD"],
            wide: ["Before Christ", "Anno Domini"],
          },
          defaultWidth: "wide",
        }),
        quarter: Et({
          values: {
            narrow: ["1", "2", "3", "4"],
            abbreviated: ["Q1", "Q2", "Q3", "Q4"],
            wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"],
          },
          defaultWidth: "wide",
          argumentCallback: function (t) {
            return t - 1;
          },
        }),
        month: Et({
          values: {
            narrow: [
              "J",
              "F",
              "M",
              "A",
              "M",
              "J",
              "J",
              "A",
              "S",
              "O",
              "N",
              "D",
            ],
            abbreviated: [
              "Jan",
              "Feb",
              "Mar",
              "Apr",
              "May",
              "Jun",
              "Jul",
              "Aug",
              "Sep",
              "Oct",
              "Nov",
              "Dec",
            ],
            wide: [
              "January",
              "February",
              "March",
              "April",
              "May",
              "June",
              "July",
              "August",
              "September",
              "October",
              "November",
              "December",
            ],
          },
          defaultWidth: "wide",
        }),
        day: Et({
          values: {
            narrow: ["S", "M", "T", "W", "T", "F", "S"],
            short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
            abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            wide: [
              "Sunday",
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
            ],
          },
          defaultWidth: "wide",
        }),
        dayPeriod: Et({
          values: {
            narrow: {
              am: "a",
              pm: "p",
              midnight: "mi",
              noon: "n",
              morning: "morning",
              afternoon: "afternoon",
              evening: "evening",
              night: "night",
            },
            abbreviated: {
              am: "AM",
              pm: "PM",
              midnight: "midnight",
              noon: "noon",
              morning: "morning",
              afternoon: "afternoon",
              evening: "evening",
              night: "night",
            },
            wide: {
              am: "a.m.",
              pm: "p.m.",
              midnight: "midnight",
              noon: "noon",
              morning: "morning",
              afternoon: "afternoon",
              evening: "evening",
              night: "night",
            },
          },
          defaultWidth: "wide",
          formattingValues: {
            narrow: {
              am: "a",
              pm: "p",
              midnight: "mi",
              noon: "n",
              morning: "in the morning",
              afternoon: "in the afternoon",
              evening: "in the evening",
              night: "at night",
            },
            abbreviated: {
              am: "AM",
              pm: "PM",
              midnight: "midnight",
              noon: "noon",
              morning: "in the morning",
              afternoon: "in the afternoon",
              evening: "in the evening",
              night: "at night",
            },
            wide: {
              am: "a.m.",
              pm: "p.m.",
              midnight: "midnight",
              noon: "noon",
              morning: "in the morning",
              afternoon: "in the afternoon",
              evening: "in the evening",
              night: "at night",
            },
          },
          defaultFormattingWidth: "wide",
        }),
      };
      function vt(t) {
        return function (e) {
          var n =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            r = n.width,
            a =
              (r && t.matchPatterns[r]) || t.matchPatterns[t.defaultMatchWidth],
            o = e.match(a);
          if (!o) return null;
          var i,
            d = o[0],
            s =
              (r && t.parsePatterns[r]) || t.parsePatterns[t.defaultParseWidth],
            c = Array.isArray(s)
              ? (function (t, e) {
                  for (var n = 0; n < t.length; n++) if (t[n].test(d)) return n;
                })(s)
              : (function (t, e) {
                  for (var n in t)
                    if (t.hasOwnProperty(n) && t[n].test(d)) return n;
                })(s);
          return (
            (i = t.valueCallback ? t.valueCallback(c) : c),
            {
              value: (i = n.valueCallback ? n.valueCallback(i) : i),
              rest: e.slice(d.length),
            }
          );
        };
      }
      var yt,
        wt = {
          ordinalNumber:
            ((yt = {
              matchPattern: /^(\d+)(th|st|nd|rd)?/i,
              parsePattern: /\d+/i,
              valueCallback: function (t) {
                return parseInt(t, 10);
              },
            }),
            function (t) {
              var e =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {},
                n = t.match(yt.matchPattern);
              if (!n) return null;
              var r = n[0],
                a = t.match(yt.parsePattern);
              if (!a) return null;
              var o = yt.valueCallback ? yt.valueCallback(a[0]) : a[0];
              return {
                value: (o = e.valueCallback ? e.valueCallback(o) : o),
                rest: t.slice(r.length),
              };
            }),
          era: vt({
            matchPatterns: {
              narrow: /^(b|a)/i,
              abbreviated:
                /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
              wide: /^(before christ|before common era|anno domini|common era)/i,
            },
            defaultMatchWidth: "wide",
            parsePatterns: { any: [/^b/i, /^(a|c)/i] },
            defaultParseWidth: "any",
          }),
          quarter: vt({
            matchPatterns: {
              narrow: /^[1234]/i,
              abbreviated: /^q[1234]/i,
              wide: /^[1234](th|st|nd|rd)? quarter/i,
            },
            defaultMatchWidth: "wide",
            parsePatterns: { any: [/1/i, /2/i, /3/i, /4/i] },
            defaultParseWidth: "any",
            valueCallback: function (t) {
              return t + 1;
            },
          }),
          month: vt({
            matchPatterns: {
              narrow: /^[jfmasond]/i,
              abbreviated:
                /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
              wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i,
            },
            defaultMatchWidth: "wide",
            parsePatterns: {
              narrow: [
                /^j/i,
                /^f/i,
                /^m/i,
                /^a/i,
                /^m/i,
                /^j/i,
                /^j/i,
                /^a/i,
                /^s/i,
                /^o/i,
                /^n/i,
                /^d/i,
              ],
              any: [
                /^ja/i,
                /^f/i,
                /^mar/i,
                /^ap/i,
                /^may/i,
                /^jun/i,
                /^jul/i,
                /^au/i,
                /^s/i,
                /^o/i,
                /^n/i,
                /^d/i,
              ],
            },
            defaultParseWidth: "any",
          }),
          day: vt({
            matchPatterns: {
              narrow: /^[smtwf]/i,
              short: /^(su|mo|tu|we|th|fr|sa)/i,
              abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
              wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i,
            },
            defaultMatchWidth: "wide",
            parsePatterns: {
              narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
              any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i],
            },
            defaultParseWidth: "any",
          }),
          dayPeriod: vt({
            matchPatterns: {
              narrow:
                /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
              any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i,
            },
            defaultMatchWidth: "any",
            parsePatterns: {
              any: {
                am: /^a/i,
                pm: /^p/i,
                midnight: /^mi/i,
                noon: /^no/i,
                morning: /morning/i,
                afternoon: /afternoon/i,
                evening: /evening/i,
                night: /night/i,
              },
            },
            defaultParseWidth: "any",
          }),
        };
      const kt = {
        code: "en-US",
        formatDistance: function (t, e, n) {
          var r,
            a = mt[t];
          return (
            (r =
              "string" == typeof a
                ? a
                : 1 === e
                ? a.one
                : a.other.replace("{{count}}", e.toString())),
            null != n && n.addSuffix
              ? n.comparison && n.comparison > 0
                ? "in " + r
                : r + " ago"
              : r
          );
        },
        formatLong: ft,
        formatRelative: function (t, e, n, r) {
          return bt[t];
        },
        localize: Ct,
        match: wt,
        options: { weekStartsOn: 0, firstWeekContainsDate: 1 },
      };
      var xt = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,
        Bt = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,
        Tt = /^'([^]*?)'?$/,
        jt = /''/g,
        Dt = /[a-zA-Z]/;
      function Mt(t, e, n) {
        var r, a, o, i, d, s, c, l, u, A, p, h, m, g, f, b, E, C;
        _(2, arguments);
        var v = String(e),
          y = Q(),
          w =
            null !==
              (r =
                null !== (a = null == n ? void 0 : n.locale) && void 0 !== a
                  ? a
                  : y.locale) && void 0 !== r
              ? r
              : kt,
          k = O(
            null !==
              (o =
                null !==
                  (i =
                    null !==
                      (d =
                        null !==
                          (s = null == n ? void 0 : n.firstWeekContainsDate) &&
                        void 0 !== s
                          ? s
                          : null == n ||
                            null === (c = n.locale) ||
                            void 0 === c ||
                            null === (l = c.options) ||
                            void 0 === l
                          ? void 0
                          : l.firstWeekContainsDate) && void 0 !== d
                      ? d
                      : y.firstWeekContainsDate) && void 0 !== i
                  ? i
                  : null === (u = y.locale) ||
                    void 0 === u ||
                    null === (A = u.options) ||
                    void 0 === A
                  ? void 0
                  : A.firstWeekContainsDate) && void 0 !== o
              ? o
              : 1,
          );
        if (!(k >= 1 && k <= 7))
          throw new RangeError(
            "firstWeekContainsDate must be between 1 and 7 inclusively",
          );
        var x = O(
          null !==
            (p =
              null !==
                (h =
                  null !==
                    (m =
                      null !== (g = null == n ? void 0 : n.weekStartsOn) &&
                      void 0 !== g
                        ? g
                        : null == n ||
                          null === (f = n.locale) ||
                          void 0 === f ||
                          null === (b = f.options) ||
                          void 0 === b
                        ? void 0
                        : b.weekStartsOn) && void 0 !== m
                    ? m
                    : y.weekStartsOn) && void 0 !== h
                ? h
                : null === (E = y.locale) ||
                  void 0 === E ||
                  null === (C = E.options) ||
                  void 0 === C
                ? void 0
                : C.weekStartsOn) && void 0 !== p
            ? p
            : 0,
        );
        if (!(x >= 0 && x <= 6))
          throw new RangeError(
            "weekStartsOn must be between 0 and 6 inclusively",
          );
        if (!w.localize)
          throw new RangeError("locale must contain localize property");
        if (!w.formatLong)
          throw new RangeError("locale must contain formatLong property");
        var B = N(t);
        if (
          !(function (t) {
            if (
              (_(1, arguments),
              !(function (t) {
                return (
                  _(1, arguments),
                  t instanceof Date ||
                    ("object" === I(t) &&
                      "[object Date]" === Object.prototype.toString.call(t))
                );
              })(t) && "number" != typeof t)
            )
              return !1;
            var e = N(t);
            return !isNaN(Number(e));
          })(B)
        )
          throw new RangeError("Invalid time value");
        var T = (function (t) {
            var e = new Date(
              Date.UTC(
                t.getFullYear(),
                t.getMonth(),
                t.getDate(),
                t.getHours(),
                t.getMinutes(),
                t.getSeconds(),
                t.getMilliseconds(),
              ),
            );
            return e.setUTCFullYear(t.getFullYear()), t.getTime() - e.getTime();
          })(B),
          j = (function (t, e) {
            return (
              _(2, arguments),
              (function (t, e) {
                _(2, arguments);
                var n = N(t).getTime(),
                  r = O(e);
                return new Date(n + r);
              })(t, -O(e))
            );
          })(B, T),
          D = {
            firstWeekContainsDate: k,
            weekStartsOn: x,
            locale: w,
            _originalDate: B,
          };
        return v
          .match(Bt)
          .map(function (t) {
            var e = t[0];
            return "p" === e || "P" === e ? (0, ut[e])(t, w.formatLong) : t;
          })
          .join("")
          .match(xt)
          .map(function (r) {
            if ("''" === r) return "'";
            var a,
              o,
              i = r[0];
            if ("'" === i)
              return (o = (a = r).match(Tt)) ? o[1].replace(jt, "'") : a;
            var d,
              s = st[i];
            if (s)
              return (
                (null != n && n.useAdditionalWeekYearTokens) ||
                  ((d = r), -1 === pt.indexOf(d)) ||
                  ht(r, e, String(t)),
                (null != n && n.useAdditionalDayOfYearTokens) ||
                  !(function (t) {
                    return -1 !== At.indexOf(t);
                  })(r) ||
                  ht(r, e, String(t)),
                s(j, r, w.localize, D)
              );
            if (i.match(Dt))
              throw new RangeError(
                "Format string contains an unescaped latin alphabet character `" +
                  i +
                  "`",
              );
            return r;
          })
          .join("");
      }
      class St {
        constructor(t, e, n, r, a) {
          (this._title = t),
            (this._description = e),
            (this._dueDate = n),
            (this._dueTime = r),
            (this._priority = a);
        }
        get title() {
          return this._title;
        }
        set title(t) {
          this._title = t;
        }
        get description() {
          return this._description;
        }
        set description(t) {
          this._description = t;
        }
        get dueDate() {
          return this._dueDate;
        }
        set dueDate(t) {
          this._dueDate = t;
        }
        formattedDueDate() {
          return Mt(new Date(this._dueDate), "MMM dd");
        }
        get dueTime() {
          return this._dueTime;
        }
        set dueTime(t) {
          this._dueTime = t;
        }
        get priority() {
          return this._priority;
        }
        set priority(t) {
          this._priority = t;
        }
        static fromStorage(t) {
          return new St(
            t._title,
            t._description,
            t._dueDate,
            t._dueTime,
            t._priority,
          );
        }
      }
      class Pt {
        constructor(t) {
          (this._name = t), (this._tasks = []);
        }
        get name() {
          return this._name;
        }
        set name(t) {
          this._name = t;
        }
        get tasks() {
          return this._tasks.sort((t, e) => (t.priority > e.priority ? -1 : 1));
        }
        set tasks(t) {
          this._tasks = t;
        }
        getTask(t) {
          return this._tasks[t];
        }
        addTask(t) {
          this._tasks.push(t);
        }
        removeTask(t) {
          this._tasks = this._tasks.filter((e) => e !== t);
        }
        static fromStorage(t) {
          const e = new Pt();
          return (
            (e.name = t._name),
            (e.tasks = t._tasks.map((t) => St.fromStorage(t))),
            e
          );
        }
      }
      class Rt {
        constructor() {
          this._projects = [];
        }
        get projects() {
          return this._projects;
        }
        set projects(t) {
          this._projects = t;
        }
        getProject(t) {
          return this._projects[t];
        }
        addProject(t) {
          this._projects.push(t);
        }
        removeProject(t) {
          this._projects = this._projects.filter((e) => e !== t);
        }
        static fromStorage(t) {
          const e = new Rt();
          return (e.projects = t._projects.map((t) => Pt.fromStorage(t))), e;
        }
      }
      new (class {
        constructor() {
          (this.list = null),
            (this.listRenderer = null),
            (this.projectRenderer = Y),
            (this.taskRenderer = L),
            this.loadFromLocalStorage(),
            this.renderList(),
            this.addEventsStatic();
        }
        saveToLocalStorage() {
          localStorage.setItem("todolist", JSON.stringify(this.list));
        }
        loadFromLocalStorage() {
          const t = localStorage.getItem("todolist");
          t
            ? (this.list = Rt.fromStorage(JSON.parse(t)))
            : ((this.list = new Rt()),
              this.list.addProject(new Pt("Home")),
              this.list.addProject(new Pt("School"))),
            (this.listRenderer = new F(this.list));
        }
        addEventsStatic() {
          this.listRenderer.addProjectBtn.addEventListener("click", () => {
            this.refreshList(), this.refreshProjectForm();
          }),
            this.listRenderer.addProjectCancel.addEventListener("click", () => {
              this.refreshList();
            }),
            this.listRenderer.addProjectAdd.addEventListener("click", () => {
              const t = this.listRenderer.addProjField.value;
              t &&
                (this.list.addProject(new Pt(`${t}`)),
                this.refreshList(),
                this.saveToLocalStorage());
            }),
            this.taskRenderer.edit.addEventListener("click", () => {
              const t = this.projectRenderer.project,
                e = this.taskRenderer.task;
              this.taskRenderer.hideWarning();
              const n = this.taskRenderer.title.value,
                r = this.taskRenderer.desc.value,
                a = this.taskRenderer.dueDate.value,
                o = parseInt(this.taskRenderer.prio.value, 10),
                i = this.taskRenderer.dueTime.value;
              a && n
                ? (e
                    ? ((e.title = n),
                      (e.description = r),
                      (e.dueDate = a),
                      (e.dueTime = i),
                      (e.priority = o))
                    : t.addTask(new St(n, r, a, i, o)),
                  this.refreshProject(t),
                  this.taskAddMode(),
                  (this.taskRenderer.task = null))
                : this.taskRenderer.showWarning();
            }),
            this.taskRenderer.delete.addEventListener("click", () => {
              const t = this.taskRenderer.project,
                e = this.taskRenderer.task;
              t.removeTask(e),
                this.refreshProject(t),
                (this.taskRenderer.task = null),
                this.taskAddMode();
            });
        }
        updateProjects() {
          this.listRenderer.projectItems.forEach((t) => {
            t.addEventListener("click", () => {
              this.refreshProject(this.list.getProject(t.id)),
                this.loadProjectDisplay();
            });
          });
        }
        updateTasks() {
          this.projectRenderer.completeBtns.forEach((t) => {
            t.addEventListener("click", () => {
              const e = this.projectRenderer.project;
              e.removeTask(e.getTask(t.id)),
                this.refreshProject(e),
                this.taskAddMode();
            });
          }),
            this.projectRenderer.editBtns.forEach((t) => {
              t.addEventListener("click", () => {
                const e = this.projectRenderer.project,
                  n = e.getTask(t.id);
                this.taskRenderer.renderDetails(n, e), this.taskEditMode();
              });
            });
        }
        renderList() {
          this.listRenderer.renderProjects(), this.updateProjects();
        }
        refreshList() {
          this.renderList(),
            this.refreshProjectForm(),
            m.toggleToFlex(this.listRenderer.addProjectForm),
            m.toggleToFlex(this.listRenderer.addProjectBtn);
        }
        refreshProject(t) {
          this.projectRenderer.renderTasks(t),
            this.updateTasks(),
            this.refreshTaskForm(),
            this.saveToLocalStorage();
        }
        hideDetails() {
          this.taskRenderer.details.style.display = "none";
        }
        toggleTaskForm() {
          m.toggleToFlex(this.taskRenderer.details);
        }
        refreshTaskForm() {
          (this.taskRenderer.title.value = ""),
            (this.taskRenderer.desc.value = ""),
            (this.taskRenderer.dueDate.value = ""),
            (this.taskRenderer.prio.value = 1),
            (this.taskRenderer.dueTime.value = ""),
            (this.taskRenderer.tag.textContent = "Add a task");
        }
        refreshProjectForm() {
          this.listRenderer.addProjField.value = "";
        }
        loadProjectDisplay() {
          (this.projectRenderer.taskDisplay.style.display = "flex"),
            (this.taskRenderer.details.style.display = "flex");
        }
        taskEditMode() {
          (this.taskRenderer.edit.textContent = "Done"),
            (this.taskRenderer.tag.textContent = "Edit task"),
            (this.taskRenderer.delete.style.display = "block");
        }
        taskAddMode() {
          (this.taskRenderer.edit.textContent = "Add"),
            (this.taskRenderer.delete.style.display = "none"),
            this.refreshTaskForm();
        }
      })();
    })();
})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUszRyxZQUFjLE9BQ3JDdkksS0FBS3dqQixhQUFhelksSUFBSXhDLFlBQWMsWUFDcEN2SSxLQUFLd2pCLGFBQWFyVSxPQUFPeEwsTUFBTThFLFFBQVUsT0FDM0MsQ0FFQSxXQUFBOGIsR0FDRXZrQixLQUFLd2pCLGFBQWF0VSxLQUFLM0csWUFBYyxNQUNyQ3ZJLEtBQUt3akIsYUFBYXJVLE9BQU94TCxNQUFNOEUsUUFBVSxPQUN6Q3pJLEtBQUs2a0IsaUJBQ1AsRSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2pzL2VkaXRFbG1udC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2pzL2RvbUNuc3RyLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvanMvZG9tRWxtbnQuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9qcy9saXN0UmVuZGVyZXIuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9qcy9wcm9qZWN0UmVuZGVyZXIuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9qcy90YXNrUmVuZGVyZXIuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vdG9EYXRlL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvc3RhcnRPZlVUQ0lTT1dlZWsvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9nZXRVVENJU09XZWVrWWVhci9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2RlZmF1bHRPcHRpb25zL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvc3RhcnRPZlVUQ1dlZWsvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9nZXRVVENXZWVrWWVhci9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2FkZExlYWRpbmdaZXJvcy9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2Zvcm1hdC9saWdodEZvcm1hdHRlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9mb3JtYXQvZm9ybWF0dGVycy9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2dldFVUQ1dlZWsvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9zdGFydE9mVVRDV2Vla1llYXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9nZXRVVENJU09XZWVrL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvc3RhcnRPZlVUQ0lTT1dlZWtZZWFyL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZ2V0VVRDRGF5T2ZZZWFyL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZm9ybWF0L2xvbmdGb3JtYXR0ZXJzL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvcHJvdGVjdGVkVG9rZW5zL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9lbi1VUy9fbGliL2Zvcm1hdERpc3RhbmNlL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9fbGliL2J1aWxkRm9ybWF0TG9uZ0ZuL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9lbi1VUy9fbGliL2Zvcm1hdExvbmcvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL2VuLVVTL19saWIvZm9ybWF0UmVsYXRpdmUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL19saWIvYnVpbGRMb2NhbGl6ZUZuL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9lbi1VUy9fbGliL2xvY2FsaXplL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9fbGliL2J1aWxkTWF0Y2hGbi9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvZW4tVVMvX2xpYi9tYXRjaC9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvX2xpYi9idWlsZE1hdGNoUGF0dGVybkZuL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9lbi1VUy9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2RlZmF1bHRMb2NhbGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vZm9ybWF0L2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2lzVmFsaWQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vaXNEYXRlL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcy9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9zdWJNaWxsaXNlY29uZHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vYWRkTWlsbGlzZWNvbmRzL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvanMvdGFza3MuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9qcy9wcm9qZWN0cy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2pzL2xpc3QuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9qcy9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2pzL2FwcC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUlCTStQbGV4K01vbm86d2dodEAzMDA7NDAwJmZhbWlseT1SRU06d2dodEAyMDA7MzAwOzQwMDs1MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGA6cm9vdCB7XG4gIC0tYmFzaWMtbGF5b3V0LWJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICAtLWJhc2ljLWJveC1zaGFkb3c6IDAgMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIC0tbGlnaHQtYm94LXNoYWRvdzogMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbn1cblxuXG4qIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBvdXRsaW5lOiAwO1xuICBmb250LWZhbWlseTogJ1JFTScsIHNhbnMtc2VyaWY7XG4gIGNvbG9yOiBibGFjaztcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuYm9keSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDgsIDI1MCwgMjUxKTtcbiAgaGVpZ2h0OiAxMDB2aDtcbn1cblxuLyogbWFpbiBncmlkICovXG5cbiNtYWluLWdyaWQge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1heCgxNXZ3LCAyODBweCkgMWZyO1xuICBwYWRkaW5nOiAyMHB4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIGdhcDogMjBweDtcbn1cblxuLyogaGVhZGVyICovXG5cbi8qIHByb2plY3Qgb3ZlcnZpZXcgKi9cblxuI292ZXJ2aWV3IHtcbiAgZ3JpZC1jb2x1bW46IDEgLyAyO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIGJveC1zaGFkb3c6IHZhcigtLWJhc2ljLWJveC1zaGFkb3cpO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAvKiBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgI0Y4RkZFNSwgMTAlLCB3aGl0ZSk7ICovXG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICB0cmFuc2l0aW9uOiAwLjVzIGVhc2UtaW4tb3V0O1xufVxuXG4jb3ZlcnZpZXc6aG92ZXIge1xuICBib3JkZXI6IDFweCBkYXNoZWQgIzU2OWM5NTtcbiAgLyogYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDBkZWcsIHdoaXRlLCA5NSUsICNGOEZGRTUpOyAqL1xufVxuXG4jcHJvamVjdC1kaXNwbGF5IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcGFkZGluZzogMjBweDtcbn1cblxuI3Byb2plY3QtZGlzcGxheSA+IHAge1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuI3Byb2plY3QtaXRlbXMge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBwYWRkaW5nOiAxMHB4IDA7XG4gIGdhcDogMTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbn1cblxuLnByb2plY3QtaXRlbSB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjMjU0NDQxNDE7XG4gIC8qIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMjU0NDQxNDE7ICovXG4gIHRyYW5zaXRpb246IDAuMnMgZWFzZS1pbi1vdXQ7XG59XG5cbi5wcm9qZWN0LWl0ZW06aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlci1jb2xvcjogIzI1NDQ0MTtcbn1cblxuI2FkZC1wcm9qZWN0IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzdGFydDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIHRyYW5zaXRpb246IDAuM3MgZWFzZS1pbi1vdXQ7XG59XG5cbiNhZGQtcHJvamVjdDpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgY29sb3I6ICM1NjljOTU7XG59XG5cbiNhZGQtcHJvamVjdC1mb3JtIHtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAxMHB4O1xufVxuXG4jYWRkLXByb2plY3QtZm9ybSA+ICoge1xuICBmb250LXdlaWdodDogMzAwO1xufVxuXG4jYWRkLXByb2plY3QtaW5wdXQge1xuICBwYWRkaW5nOiAxMHB4O1xuICBmb250LXNpemU6IDFyZW07XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG5cbiNwcm9qZWN0LWFkZC1idXR0b25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiA1cHg7XG59XG5cbiNwcm9qZWN0LWFkZC1idXR0b25zID4gYnV0dG9uIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDEwcHggMDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuI2FkZC1wcm9qZWN0LWJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM5OWUxZDk7XG59XG5cbiNhZGQtcHJvamVjdC1idXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjJkZGQ4O1xufVxuXG4jY2FuY2VsLWFkZC1wcm9qZWN0LWJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlODkzYTI7XG59XG5cbiNjYW5jZWwtYWRkLXByb2plY3QtYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U4YTdiMztcbn1cblxuLyogcHJvamVjdCBiZW5jaCAqL1xuXG4jcHJvamVjdC1iZW5jaCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIC8qIHBhZGRpbmc6IDIwcHg7ICovXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdyaWQtY29sdW1uOiAyIC8gMztcbiAgLyogYm94LXNoYWRvdzogdmFyKC0tYmFzaWMtYm94LXNoYWRvdyk7ICovXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cblxuI3Byb2plY3QtYmVuY2ggPiBwIHtcbiAgZm9udC1zaXplOiAxLjdyZW07XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGFsaWduLXNlbGY6IHN0YXJ0O1xuICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNHB4O1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA0cHg7XG4gIGJvcmRlcjogMXB4IGRhc2hlZCBncmF5O1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICNGOEZGRTUsIDUwJSwgIzdEREU5MiwgIzJFQkZBNSApO1xuICBib3gtc2hhZG93OiB2YXIoLS1iYXNpYy1ib3gtc2hhZG93KTtcbn1cblxuI3Rhc2stZGlzcGxheS1jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDcwJSAzMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3gtc2hhZG93OiB2YXIoLS1iYXNpYy1ib3gtc2hhZG93KTtcbn1cblxuI3Rhc2stZGlzcGxheS1jb250YWluZXIgPiAqIHtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuI3Rhc2stZGlzcGxheSB7XG4gIGJvcmRlci1yaWdodDogMXB4IGRhc2hlZCBibGFjaztcbn1cblxuI3Rhc2stZGlzcGxheSA+IHAge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4jcHJpby10YWcge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZ2FwOiAxMHB4O1xuICBmb250LXNpemU6IDFyZW07XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbiN0YXNrLWl0ZW1zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiA4cHg7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG5cbi50YXNrLWl0ZW0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTEsIDI1MSwgMjUxKTtcbiAgLyogYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCB0cmFuc3BhcmVudDsgKi9cbiAgYm94LXNoYWRvdzogdmFyKC0tbGlnaHQtYm94LXNoYWRvdyk7XG4gIHRyYW5zaXRpb246IDAuMnMgZWFzZS1pbi1vdXQ7XG59XG5cblxuI3Rhc2stYWN0aW9uLWJ1dHRvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICBnYXA6IDEwcHg7XG59XG5cbi50YXNrLWluZm8ge1xuICBwYWRkaW5nOiAxNXB4IDEwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogNXB4O1xufVxuXG4udGFzay1hY3Rpb24ge1xuICBib3JkZXI6IG5vbmU7XG4gIHRyYW5zaXRpb246IDAuMnMgZWFzZS1pbi1vdXQ7XG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xufVxuXG4uZWRpdC10YXNrIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2JlYzZmZjtcbn1cblxuLmNoZWNrLXRhc2sge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTllMWQ5O1xufVxuXG4udGFzay1hY3Rpb246aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGNvbG9yOiAjNTY5Yzk1OyBcbn1cblxuLmxvdy1wcmlvIHtcbiAgYm9yZGVyLWxlZnQtY29sb3I6ICM1RTlFMjk7XG59XG4ubWlkLXByaW8ge1xuICBib3JkZXItbGVmdC1jb2xvcjogIzJCM0Q5RTtcbn1cbi5oaWdoLXByaW8ge1xuICBib3JkZXItbGVmdC1jb2xvcjogI0VBNEUxOTtcbn1cblxuI2xvdy1wcmlvLXRhZyB7XG4gIGNvbG9yOiAjNUU5RTI5O1xufVxuI21pZC1wcmlvLXRhZyB7XG4gIGNvbG9yOiAjMkIzRDlFO1xufVxuI2hpZ2gtcHJpby10YWcge1xuICBjb2xvcjogI0VBNEUxOTtcbn1cblxuI3Rhc2stZGV0YWlscyB7XG4gIGRpc3BsYXk6IG5vbmU7IFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFuY2hlZGFsbW9uZDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufVxuXG4vKiB0YXNrIGZvcm0gKi9cblxuI2FkZC10YXNrLWZvcm0ge1xuICBwYWRkaW5nOiAyMHB4O1xuICBnYXA6IDEwcHg7IFxufVxuXG4uaW5wdXQtbGFiZWwge1xuICBmb250LXdlaWdodDogMjAwO1xuICAvKiB0ZXh0LWFsaWduOiBjZW50ZXI7ICovXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xufVxuXG4jYWRkLXRhc2stZm9ybSA+IGlucHV0LCBzZWxlY3Qge1xuICBwYWRkaW5nOiAxNXB4IDEwcHg7XG59XG5cbiNhZGQtdGFzay1hY3Rpb25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiA1cHg7XG59XG5cbiNhZGQtdGFzay1hY3Rpb25zID4gYnV0dG9uIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDEwcHggMDtcbiAgYm9yZGVyOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cblxuI2FkZC10YXNrLWFkZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM5OWUxZDk7XG59XG5cbiNhZGQtdGFzay1hZGQ6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjJkZGQ4O1xufVxuXG4jZGVsZXRlLXRhc2stYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U4OTNhMjtcbn1cblxuI2RlbGV0ZS10YXNrLWJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlOGE3YjM7XG59XG5cbiNpbnB1dC13YXJuaW5nIHtcbiAgY29sb3I6ICNlODkzYTI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxzQ0FBc0M7RUFDdEMsZ0RBQWdEO0VBQ2hELGdEQUFnRDtBQUNsRDs7O0FBTUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLFVBQVU7RUFDViw4QkFBOEI7RUFDOUIsWUFBWTtFQUNaLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLG9DQUFvQztFQUNwQyxhQUFhO0FBQ2Y7O0FBRUEsY0FBYzs7QUFFZDtFQUNFLGFBQWE7RUFDYiwyQ0FBMkM7RUFDM0MsYUFBYTtFQUNiLFlBQVk7RUFDWixTQUFTO0FBQ1g7O0FBRUEsV0FBVzs7QUFFWCxxQkFBcUI7O0FBRXJCO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsbUNBQW1DO0VBQ25DLGtCQUFrQjtFQUNsQix1QkFBdUI7RUFDdkIsa0VBQWtFO0VBQ2xFLDZCQUE2QjtFQUM3Qiw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSwwQkFBMEI7RUFDMUIsa0VBQWtFO0FBQ3BFOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixTQUFTO0VBQ1QsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VB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QUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsZUFBZTtFQUNmLFlBQVk7RUFDWixlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGtCQUFrQjtBQUNwQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxuICAtLWJhc2ljLWxheW91dC1ib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIC0tYmFzaWMtYm94LXNoYWRvdzogMCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcXG4gIC0tbGlnaHQtYm94LXNoYWRvdzogMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcXG59XFxuXFxuXFxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9SUJNK1BsZXgrTW9ubzp3Z2h0QDMwMDs0MDAmZmFtaWx5PVJFTTp3Z2h0QDIwMDszMDA7NDAwOzUwMCZkaXNwbGF5PXN3YXAnKTtcXG5cXG5cXG4qIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBvdXRsaW5lOiAwO1xcbiAgZm9udC1mYW1pbHk6ICdSRU0nLCBzYW5zLXNlcmlmO1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ4LCAyNTAsIDI1MSk7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG4vKiBtYWluIGdyaWQgKi9cXG5cXG4jbWFpbi1ncmlkIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1heCgxNXZ3LCAyODBweCkgMWZyO1xcbiAgcGFkZGluZzogMjBweDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGdhcDogMjBweDtcXG59XFxuXFxuLyogaGVhZGVyICovXFxuXFxuLyogcHJvamVjdCBvdmVydmlldyAqL1xcblxcbiNvdmVydmlldyB7XFxuICBncmlkLWNvbHVtbjogMSAvIDI7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBvdmVyZmxvdy15OiBhdXRvO1xcbiAgYm94LXNoYWRvdzogdmFyKC0tYmFzaWMtYm94LXNoYWRvdyk7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIC8qIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgwZGVnLCAjRjhGRkU1LCAxMCUsIHdoaXRlKTsgKi9cXG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgdHJhbnNpdGlvbjogMC41cyBlYXNlLWluLW91dDtcXG59XFxuXFxuI292ZXJ2aWV3OmhvdmVyIHtcXG4gIGJvcmRlcjogMXB4IGRhc2hlZCAjNTY5Yzk1O1xcbiAgLyogYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDBkZWcsIHdoaXRlLCA5NSUsICNGOEZGRTUpOyAqL1xcbn1cXG5cXG4jcHJvamVjdC1kaXNwbGF5IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgcGFkZGluZzogMjBweDtcXG59XFxuXFxuI3Byb2plY3QtZGlzcGxheSA+IHAge1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBmb250LXdlaWdodDogNTAwO1xcbn1cXG5cXG4jcHJvamVjdC1pdGVtcyB7XFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgcGFkZGluZzogMTBweCAwO1xcbiAgZ2FwOiAxMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBmb250LXdlaWdodDogMzAwO1xcbn1cXG5cXG4ucHJvamVjdC1pdGVtIHtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBib3JkZXItbGVmdDogNXB4IHNvbGlkICMyNTQ0NDE0MTtcXG4gIC8qIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMjU0NDQxNDE7ICovXFxuICB0cmFuc2l0aW9uOiAwLjJzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4ucHJvamVjdC1pdGVtOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJvcmRlci1jb2xvcjogIzI1NDQ0MTtcXG59XFxuXFxuI2FkZC1wcm9qZWN0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMTBweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIHRyYW5zaXRpb246IDAuM3MgZWFzZS1pbi1vdXQ7XFxufVxcblxcbiNhZGQtcHJvamVjdDpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBjb2xvcjogIzU2OWM5NTtcXG59XFxuXFxuI2FkZC1wcm9qZWN0LWZvcm0ge1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMTBweDtcXG59XFxuXFxuI2FkZC1wcm9qZWN0LWZvcm0gPiAqIHtcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxufVxcblxcbiNhZGQtcHJvamVjdC1pbnB1dCB7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxufVxcblxcbiNwcm9qZWN0LWFkZC1idXR0b25zIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDVweDtcXG59XFxuXFxuI3Byb2plY3QtYWRkLWJ1dHRvbnMgPiBidXR0b24ge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiAxMHB4IDA7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiNhZGQtcHJvamVjdC1idXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzk5ZTFkOTtcXG59XFxuXFxuI2FkZC1wcm9qZWN0LWJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjJkZGQ4O1xcbn1cXG5cXG4jY2FuY2VsLWFkZC1wcm9qZWN0LWJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTg5M2EyO1xcbn1cXG5cXG4jY2FuY2VsLWFkZC1wcm9qZWN0LWJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZThhN2IzO1xcbn1cXG5cXG4vKiBwcm9qZWN0IGJlbmNoICovXFxuXFxuI3Byb2plY3QtYmVuY2gge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC8qIHBhZGRpbmc6IDIwcHg7ICovXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gIC8qIGJveC1zaGFkb3c6IHZhcigtLWJhc2ljLWJveC1zaGFkb3cpOyAqL1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbn1cXG5cXG4jcHJvamVjdC1iZW5jaCA+IHAge1xcbiAgZm9udC1zaXplOiAxLjdyZW07XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgYWxpZ24tc2VsZjogc3RhcnQ7XFxuICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA0cHg7XFxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA0cHg7XFxuICBib3JkZXI6IDFweCBkYXNoZWQgZ3JheTtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgI0Y4RkZFNSwgNTAlLCAjN0RERTkyLCAjMkVCRkE1ICk7XFxuICBib3gtc2hhZG93OiB2YXIoLS1iYXNpYy1ib3gtc2hhZG93KTtcXG59XFxuXFxuI3Rhc2stZGlzcGxheS1jb250YWluZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA3MCUgMzAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBib3gtc2hhZG93OiB2YXIoLS1iYXNpYy1ib3gtc2hhZG93KTtcXG59XFxuXFxuI3Rhc2stZGlzcGxheS1jb250YWluZXIgPiAqIHtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG4jdGFzay1kaXNwbGF5IHtcXG4gIGJvcmRlci1yaWdodDogMXB4IGRhc2hlZCBibGFjaztcXG59XFxuXFxuI3Rhc2stZGlzcGxheSA+IHAge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBmb250LXdlaWdodDogNTAwO1xcbn1cXG5cXG4jcHJpby10YWcge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAxMHB4O1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgbWFyZ2luLXRvcDogMTBweDtcXG59XFxuXFxuI3Rhc2staXRlbXMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDhweDtcXG4gIHBhZGRpbmc6IDIwcHg7XFxufVxcblxcbi50YXNrLWl0ZW0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1MSwgMjUxLCAyNTEpO1xcbiAgLyogYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCB0cmFuc3BhcmVudDsgKi9cXG4gIGJveC1zaGFkb3c6IHZhcigtLWxpZ2h0LWJveC1zaGFkb3cpO1xcbiAgdHJhbnNpdGlvbjogMC4ycyBlYXNlLWluLW91dDtcXG59XFxuXFxuXFxuI3Rhc2stYWN0aW9uLWJ1dHRvbnMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4udGFzay1pbmZvIHtcXG4gIHBhZGRpbmc6IDE1cHggMTBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDVweDtcXG59XFxuXFxuLnRhc2stYWN0aW9uIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIHRyYW5zaXRpb246IDAuMnMgZWFzZS1pbi1vdXQ7XFxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbiAgcGFkZGluZzogNXB4IDEwcHg7XFxufVxcblxcbi5lZGl0LXRhc2sge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2JlYzZmZjtcXG59XFxuXFxuLmNoZWNrLXRhc2sge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzk5ZTFkOTtcXG59XFxuXFxuLnRhc2stYWN0aW9uOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGNvbG9yOiAjNTY5Yzk1OyBcXG59XFxuXFxuLmxvdy1wcmlvIHtcXG4gIGJvcmRlci1sZWZ0LWNvbG9yOiAjNUU5RTI5O1xcbn1cXG4ubWlkLXByaW8ge1xcbiAgYm9yZGVyLWxlZnQtY29sb3I6ICMyQjNEOUU7XFxufVxcbi5oaWdoLXByaW8ge1xcbiAgYm9yZGVyLWxlZnQtY29sb3I6ICNFQTRFMTk7XFxufVxcblxcbiNsb3ctcHJpby10YWcge1xcbiAgY29sb3I6ICM1RTlFMjk7XFxufVxcbiNtaWQtcHJpby10YWcge1xcbiAgY29sb3I6ICMyQjNEOUU7XFxufVxcbiNoaWdoLXByaW8tdGFnIHtcXG4gIGNvbG9yOiAjRUE0RTE5O1xcbn1cXG5cXG4jdGFzay1kZXRhaWxzIHtcXG4gIGRpc3BsYXk6IG5vbmU7IFxcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhbmNoZWRhbG1vbmQ7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBsZWZ0OiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG59XFxuXFxuLyogdGFzayBmb3JtICovXFxuXFxuI2FkZC10YXNrLWZvcm0ge1xcbiAgcGFkZGluZzogMjBweDtcXG4gIGdhcDogMTBweDsgXFxufVxcblxcbi5pbnB1dC1sYWJlbCB7XFxuICBmb250LXdlaWdodDogMjAwO1xcbiAgLyogdGV4dC1hbGlnbjogY2VudGVyOyAqL1xcbiAgZm9udC1zaXplOiAwLjlyZW07XFxufVxcblxcbiNhZGQtdGFzay1mb3JtID4gaW5wdXQsIHNlbGVjdCB7XFxuICBwYWRkaW5nOiAxNXB4IDEwcHg7XFxufVxcblxcbiNhZGQtdGFzay1hY3Rpb25zIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDVweDtcXG59XFxuXFxuI2FkZC10YXNrLWFjdGlvbnMgPiBidXR0b24ge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiAxMHB4IDA7XFxuICBib3JkZXI6IG5vbmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxufVxcblxcbiNhZGQtdGFzay1hZGQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzk5ZTFkOTtcXG59XFxuXFxuI2FkZC10YXNrLWFkZDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjJkZGQ4O1xcbn1cXG5cXG4jZGVsZXRlLXRhc2stYnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlODkzYTI7XFxufVxcblxcbiNkZWxldGUtdGFzay1idXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U4YTdiMztcXG59XFxuXFxuI2lucHV0LXdhcm5pbmcge1xcbiAgY29sb3I6ICNlODkzYTI7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIGVkaXRFbG1udCB7XG4gIHN0YXRpYyBhcHBlbmRDaGlsZHJlbiA9IChwYXJlbnQsIGNoaWxkcmVuID0gW10pID0+IHtcbiAgICBjaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4ge1xuICAgICAgcGFyZW50LmFwcGVuZENoaWxkKGNoaWxkKTtcbiAgICB9KTtcbiAgfTtcblxuICBzdGF0aWMgYWRkSWQgPSAoZWxlbWVudCwgaWQpID0+IHtcbiAgICBlbGVtZW50LmlkID0gaWQ7XG4gIH07XG5cbiAgc3RhdGljIGFkZENsYXNzID0gKGVsZW1lbnQsIGNsYXNzZXMgPSBbXSkgPT4ge1xuICAgIGNsYXNzZXMuZm9yRWFjaCgoYykgPT4ge1xuICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGMpO1xuICAgIH0pO1xuICB9O1xuXG4gIHN0YXRpYyBhZGRUZXh0ID0gKGVsZW1lbnQsIHRleHQpID0+IHtcbiAgICBlbGVtZW50LnRleHRDb250ZW50ID0gdGV4dDtcbiAgfTtcblxuICBzdGF0aWMgdG9nZ2xlVG9GbGV4KGVsZW1lbnQpIHtcbiAgICBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAoZWxlbWVudC5zdHlsZS5kaXNwbGF5ID09PSAnbm9uZScpID8gJ2ZsZXgnIDogJ25vbmUnO1xuICB9XG5cbiAgc3RhdGljIHRvZ2dsZVRvQmxvY2soZWxlbWVudCkge1xuICAgIGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9IChlbGVtZW50LnN0eWxlLmRpc3BsYXkgPT09ICdub25lJykgPyAnYmxvY2snIDogJ25vbmUnO1xuICB9XG5cbiAgc3RhdGljIGNvbG9yQWNjZGdUb1ByaW8ocHJpbywgZWxlbWVudCkge1xuICAgIGlmIChwcmlvID09PSAxKSB7XG4gICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2xvdy1wcmlvJyk7XG4gICAgfSBlbHNlIGlmIChwcmlvID09PSAyKSB7XG4gICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ21pZC1wcmlvJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnaGlnaC1wcmlvJyk7XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgZWRpdEVsbW50IGZyb20gJy4vZWRpdEVsbW50JztcbmltcG9ydCBhZGRJY29uIGZyb20gJy4uL2Fzc2V0cy9hZGQucG5nJztcblxuLy8gRG9tIHN0dWZmXG5cbigoKSA9PiB7XG4gIC8vIG1haW4tZ3JpZFxuICBjb25zdCBhcHBHcmlkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGVkaXRFbG1udC5hcHBlbmRDaGlsZHJlbihkb2N1bWVudC5ib2R5LCBbYXBwR3JpZF0pO1xuICBlZGl0RWxtbnQuYWRkSWQoYXBwR3JpZCwgJ21haW4tZ3JpZCcpO1xuXG4gIC8vIHByb2plY3RzIHZpZXdcbiAgY29uc3Qgb3ZlcnZpZXcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZWRpdEVsbW50LmFkZElkKG92ZXJ2aWV3LCAnb3ZlcnZpZXcnKTtcblxuICBjb25zdCBwcm9qZWN0RGlzcGxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBlZGl0RWxtbnQuYWRkSWQocHJvamVjdERpc3BsYXksICdwcm9qZWN0LWRpc3BsYXknKTtcblxuICBjb25zdCBwZFRhZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgZWRpdEVsbW50LmFkZFRleHQocGRUYWcsICdZb3VyIFByb2plY3RzJyk7XG5cbiAgY29uc3QgcGRJdGVtcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBlZGl0RWxtbnQuYWRkSWQocGRJdGVtcywgJ3Byb2plY3QtaXRlbXMnKTtcblxuICBjb25zdCBhZGRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgZWRpdEVsbW50LmFkZElkKGFkZEJ0biwgJ2FkZC1wcm9qZWN0Jyk7XG4gIGNvbnN0IGltZyA9IG5ldyBJbWFnZSgpO1xuICBpbWcuc3JjID0gYWRkSWNvbjtcbiAgaW1nLnN0eWxlLndpZHRoID0gJzEwcHgnO1xuICBhZGRCdG4uYXBwZW5kQ2hpbGQoaW1nKTtcbiAgYWRkQnRuLmlubmVySFRNTCArPSAnQWRkIHByb2plY3QnO1xuXG4gIGNvbnN0IHByb2plY3RBZGRGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHByb2plY3RBZGRGb3JtLmlkID0gJ2FkZC1wcm9qZWN0LWZvcm0nO1xuICBwcm9qZWN0QWRkRm9ybS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXG4gIGNvbnN0IHR4dEZpZWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgdHh0RmllbGQubmFtZSA9ICdhZGQtcHJvamVjdC1pbnB1dCc7XG4gIHR4dEZpZWxkLnR5cGUgPSAndGV4dCc7XG4gIHR4dEZpZWxkLmlkID0gJ2FkZC1wcm9qZWN0LWlucHV0JztcbiAgdHh0RmllbGQucGxhY2Vob2xkZXIgPSAnSW5wdXQgYSB2YWxpZCBwcm9qZWN0IG5hbWUnO1xuICB0eHRGaWVsZC5wYXR0ZXJuID0gJ1tBLVphLXpdKyc7XG5cbiAgY29uc3QgYWN0aW9uQnRucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBhY3Rpb25CdG5zLmlkID0gJ3Byb2plY3QtYWRkLWJ1dHRvbnMnO1xuXG4gIGNvbnN0IGFkZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBhZGQudGV4dENvbnRlbnQgPSAnQWRkJztcbiAgYWRkLnR5cGUgPSAnYnV0dG9uJztcbiAgYWRkLmlkID0gJ2FkZC1wcm9qZWN0LWJ1dHRvbic7XG5cbiAgY29uc3QgY2FuY2VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGNhbmNlbC50ZXh0Q29udGVudCA9ICdDYW5jZWwnO1xuICBhZGQudHlwZSA9ICdidXR0b24nO1xuICBjYW5jZWwuaWQgPSAnY2FuY2VsLWFkZC1wcm9qZWN0LWJ1dHRvbic7XG5cbiAgZWRpdEVsbW50LmFwcGVuZENoaWxkcmVuKGFjdGlvbkJ0bnMsIFthZGQsIGNhbmNlbF0pO1xuICBlZGl0RWxtbnQuYXBwZW5kQ2hpbGRyZW4ocHJvamVjdEFkZEZvcm0sIFt0eHRGaWVsZCwgYWN0aW9uQnRuc10pO1xuXG4gIGVkaXRFbG1udC5hcHBlbmRDaGlsZHJlbihwcm9qZWN0RGlzcGxheSwgW3BkVGFnLCBwZEl0ZW1zLCBhZGRCdG4sIHByb2plY3RBZGRGb3JtXSk7XG5cbiAgZWRpdEVsbW50LmFwcGVuZENoaWxkcmVuKG92ZXJ2aWV3LCBbcHJvamVjdERpc3BsYXldKTtcblxuICAvLyBlZGl0aW5nIGJlbmNoLCBzaG93IHRhc2tzIG9uIGEgcGFydGljdWxhciBwcm9qZWN0XG4gIGNvbnN0IHByb2pCZW5jaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBwcm9qQmVuY2guaWQgPSAncHJvamVjdC1iZW5jaCc7XG5cbiAgY29uc3QgcHJvak5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGVkaXRFbG1udC5hZGRUZXh0KHByb2pOYW1lLCAnQ3JlYXRlIGEgcHJvamVjdCBhbmQgc3RhcnQgYWRkaW5nIHRhc2tzIScpO1xuICBlZGl0RWxtbnQuYWRkSWQocHJvak5hbWUsICdwcm9qZWN0LW5hbWUnKTtcblxuICBjb25zdCBwcm9qZWN0RGlzcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBwcm9qZWN0RGlzcC5pZCA9ICd0YXNrLWRpc3BsYXktY29udGFpbmVyJztcblxuICBjb25zdCB0YXNrRGlzcGxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBlZGl0RWxtbnQuYWRkSWQodGFza0Rpc3BsYXksICd0YXNrLWRpc3BsYXknKTtcbiAgdGFza0Rpc3BsYXkuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblxuICBjb25zdCB0ZFRhZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgdGRUYWcudGV4dENvbnRlbnQgPSAnWW91ciBUYXNrcyc7XG5cbiAgY29uc3QgcHJpb1RhZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBwcmlvVGFnLmlkID0gJ3ByaW8tdGFnJztcblxuICBjb25zdCBjbHVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBjbHVlLnRleHRDb250ZW50ID0gJ1ByaW9yaXR5OiAnO1xuXG4gIGNvbnN0IGxvd1AgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGxvd1AudGV4dENvbnRlbnQgPSAnTG93JztcbiAgbG93UC5pZCA9ICdsb3ctcHJpby10YWcnO1xuXG4gIGNvbnN0IG1pZFAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIG1pZFAudGV4dENvbnRlbnQgPSAnTWlkJztcbiAgbWlkUC5pZCA9ICdtaWQtcHJpby10YWcnO1xuXG4gIGNvbnN0IGhpZ2hQID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBoaWdoUC50ZXh0Q29udGVudCA9ICdIaWdoJztcbiAgaGlnaFAuaWQgPSAnaGlnaC1wcmlvLXRhZyc7XG5cbiAgZWRpdEVsbW50LmFwcGVuZENoaWxkcmVuKHByaW9UYWcsIFtjbHVlLCBsb3dQLCBtaWRQLCBoaWdoUF0pO1xuXG4gIGNvbnN0IHRkSXRlbXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZWRpdEVsbW50LmFkZElkKHRkSXRlbXMsICd0YXNrLWl0ZW1zJyk7XG5cbiAgZWRpdEVsbW50LmFwcGVuZENoaWxkcmVuKHRhc2tEaXNwbGF5LCBbdGRUYWcsIHByaW9UYWcsIHRkSXRlbXNdKTtcblxuICBjb25zdCBhZGRUYXNrRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBhZGRUYXNrRm9ybS5pZCA9ICdhZGQtdGFzay1mb3JtJztcbiAgYWRkVGFza0Zvcm0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcblxuICBjb25zdCB0YWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIHRhZy50ZXh0Q29udGVudCA9ICdBZGQgYSB0YXNrJztcbiAgdGFnLmlkID0gJ2FkZC10YXNrLXRhZyc7XG5cbiAgY29uc3QgbGFiZWxUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgbGFiZWxUaXRsZS50ZXh0Q29udGVudCA9ICdUaXRsZSc7XG4gIGxhYmVsVGl0bGUuY2xhc3NMaXN0LmFkZCgnaW5wdXQtbGFiZWwnKTtcblxuICBjb25zdCB0aXRsZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgdGl0bGVJbnB1dC5pZCA9ICd0YXNrLXRpdGxlLWlucHV0JztcbiAgdGl0bGVJbnB1dC50eXBlID0gJ3RleHQnO1xuICB0aXRsZUlucHV0LnBsYWNlaG9sZGVyID0gJ1RpdGxlKic7XG5cbiAgY29uc3QgbGFiZWxEZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBsYWJlbERlc2MudGV4dENvbnRlbnQgPSAnRGVzY3JpcHRpb24nO1xuICBsYWJlbERlc2MuY2xhc3NMaXN0LmFkZCgnaW5wdXQtbGFiZWwnKTtcblxuICBjb25zdCBkZXNjSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBkZXNjSW5wdXQuaWQgPSAndGFzay1kZXNjLWlucHV0JztcbiAgZGVzY0lucHV0LnR5cGUgPSAndGV4dCc7XG4gIGRlc2NJbnB1dC5wbGFjZWhvbGRlciA9ICdEZXNjcmlwdGlvbic7XG5cbiAgY29uc3QgbGFiZWxEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBsYWJlbERhdGUudGV4dENvbnRlbnQgPSAnRHVlIE9uJztcbiAgbGFiZWxEYXRlLmNsYXNzTGlzdC5hZGQoJ2lucHV0LWxhYmVsJyk7XG5cbiAgY29uc3QgZHVlRGF0ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgZHVlRGF0ZUlucHV0LmlkID0gJ3Rhc2stZGF0ZS1pbnB1dCc7XG4gIGR1ZURhdGVJbnB1dC50eXBlID0gJ3RleHQnO1xuICBkdWVEYXRlSW5wdXQucGxhY2Vob2xkZXIgPSAnRHVlIERhdGUqJztcbiAgZHVlRGF0ZUlucHV0Lm9uZm9jdXMgPSAoKSA9PiB7XG4gICAgZHVlRGF0ZUlucHV0LnR5cGUgPSAnZGF0ZSc7XG4gIH07XG5cbiAgY29uc3QgbGFiZWxUaW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBsYWJlbFRpbWUudGV4dENvbnRlbnQgPSAnRHVlIEF0JztcbiAgbGFiZWxUaW1lLmNsYXNzTGlzdC5hZGQoJ2lucHV0LWxhYmVsJyk7XG5cbiAgY29uc3QgZHVlVGltZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgZHVlVGltZUlucHV0LmlkID0gJ3Rhc2stdGltZS1pbnB1dCc7XG4gIGR1ZVRpbWVJbnB1dC50eXBlID0gJ3RleHQnO1xuICBkdWVUaW1lSW5wdXQucGxhY2Vob2xkZXIgPSAnRHVlIFRpbWUnO1xuICBkdWVUaW1lSW5wdXQub25mb2N1cyA9ICgpID0+IHtcbiAgICBkdWVUaW1lSW5wdXQudHlwZSA9ICd0aW1lJztcbiAgfTtcblxuICBjb25zdCBsYWJlbFByaW8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGxhYmVsUHJpby50ZXh0Q29udGVudCA9ICdUYXNrIFByaW9yaXR5JztcbiAgbGFiZWxQcmlvLmNsYXNzTGlzdC5hZGQoJ2lucHV0LWxhYmVsJyk7XG5cbiAgY29uc3QgcHJpb3JpdHlJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuICBwcmlvcml0eUlucHV0LmlkID0gJ3Rhc2stcHJpby1pbnB1dCc7XG5cbiAgY29uc3QgaGlnaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICBoaWdoLnRleHRDb250ZW50ID0gJ0hpZ2gnO1xuICBoaWdoLnZhbHVlID0gMztcblxuICBjb25zdCBtaWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgbWlkLnRleHRDb250ZW50ID0gJ01pZCc7XG4gIG1pZC52YWx1ZSA9IDI7XG5cbiAgY29uc3QgbG93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gIGxvdy50ZXh0Q29udGVudCA9ICdMb3cnO1xuICBsb3cudmFsdWUgPSAxO1xuICBsb3cuc2V0QXR0cmlidXRlKCdzZWxlY3RlZCcsICcnKTtcblxuICBlZGl0RWxtbnQuYXBwZW5kQ2hpbGRyZW4ocHJpb3JpdHlJbnB1dCwgW2hpZ2gsIG1pZCwgbG93XSk7XG5cbiAgY29uc3QgYWRkVGFza0FjdGlvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgYWRkVGFza0FjdGlvbnMuaWQgPSAnYWRkLXRhc2stYWN0aW9ucyc7XG5cbiAgY29uc3QgYWRkVGFza0FkZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBhZGRUYXNrQWRkLmlkID0gJ2FkZC10YXNrLWFkZCc7XG4gIGFkZFRhc2tBZGQudGV4dENvbnRlbnQgPSAnQWRkJztcblxuICBjb25zdCBkZXRlbGVUYXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGRldGVsZVRhc2suaWQgPSAnZGVsZXRlLXRhc2stYnV0dG9uJztcbiAgZGV0ZWxlVGFzay50ZXh0Q29udGVudCA9ICdEZWxldGUnO1xuICBkZXRlbGVUYXNrLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cbiAgZWRpdEVsbW50LmFwcGVuZENoaWxkcmVuKGFkZFRhc2tBY3Rpb25zLCBbYWRkVGFza0FkZCwgZGV0ZWxlVGFza10pO1xuXG4gIGNvbnN0IHdhcm5pbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIHdhcm5pbmcuaWQgPSAnaW5wdXQtd2FybmluZyc7XG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG1heC1sZW5cbiAgZWRpdEVsbW50LmFwcGVuZENoaWxkcmVuKGFkZFRhc2tGb3JtLCBbdGFnLCBsYWJlbFRpdGxlLCB0aXRsZUlucHV0LCBsYWJlbERlc2MsIGRlc2NJbnB1dCwgbGFiZWxEYXRlLCBkdWVEYXRlSW5wdXQsIGxhYmVsVGltZSwgZHVlVGltZUlucHV0LCBsYWJlbFByaW8sIHByaW9yaXR5SW5wdXQsIGFkZFRhc2tBY3Rpb25zLCB3YXJuaW5nXSk7XG5cbiAgZWRpdEVsbW50LmFwcGVuZENoaWxkcmVuKHByb2plY3REaXNwLCBbdGFza0Rpc3BsYXksIGFkZFRhc2tGb3JtXSk7XG4gIGVkaXRFbG1udC5hcHBlbmRDaGlsZHJlbihwcm9qQmVuY2gsIFtwcm9qTmFtZSwgcHJvamVjdERpc3BdKTtcblxuICAvLyBhZGQgdG8gRE9NXG4gIGVkaXRFbG1udC5hcHBlbmRDaGlsZHJlbihhcHBHcmlkLCBbb3ZlcnZpZXcsIHByb2pCZW5jaF0pO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dCcpLmZvckVhY2goKGVsbSkgPT4ge1xuICAgIGVsbS5zZXRBdHRyaWJ1dGUoJ3JlcXVpcmVkJywgJycpO1xuICB9KTtcbn0pKCk7XG4iLCJleHBvcnQgY29uc3QgYWRkUHJvamVjdEZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkLXByb2plY3QtZm9ybScpO1xuZXhwb3J0IGNvbnN0IGFkZFByb2plY3RCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkLXByb2plY3QnKTtcbmV4cG9ydCBjb25zdCBhZGRQcm9qZWN0RmllbGQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkLXByb2plY3QtaW5wdXQnKTtcbmV4cG9ydCBjb25zdCBhZGRQcm9qZWN0QWRkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZC1wcm9qZWN0LWJ1dHRvbicpO1xuZXhwb3J0IGNvbnN0IGFkZFByb2plY3RDYW5jZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FuY2VsLWFkZC1wcm9qZWN0LWJ1dHRvbicpO1xuXG5leHBvcnQgZnVuY3Rpb24gcHJvamVjdEl0ZW1zKCkge1xuICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2plY3QtaXRlbScpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZWRpdEJ1dHRvbnMoKSB7XG4gIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZWRpdC10YXNrJyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb21wbGV0ZUJ1dHRvbnMoKSB7XG4gIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2hlY2stdGFzaycpO1xufVxuXG5leHBvcnQgY29uc3QgdGFza0Rpc3BsYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFzay1kaXNwbGF5Jyk7XG5cbi8vIGV4cG9ydCBjb25zdCBhZGRUYXNrQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZC10YXNrJyk7XG5leHBvcnQgY29uc3QgYWRkVGFza0Zvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkLXRhc2stZm9ybScpO1xuZXhwb3J0IGNvbnN0IGFkZFRhc2tBZGQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkLXRhc2stYWRkJyk7XG4vLyBleHBvcnQgY29uc3QgYWRkVGFza0NhbmNlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGQtdGFzay1jYW5jZWwnKTtcbmV4cG9ydCBjb25zdCB0YXNrVGFnID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZC10YXNrLXRhZycpO1xuXG5leHBvcnQgY29uc3QgYWRkVGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFzay10aXRsZS1pbnB1dCcpO1xuZXhwb3J0IGNvbnN0IGFkZERlc2MgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFzay1kZXNjLWlucHV0Jyk7XG5leHBvcnQgY29uc3QgYWRkRGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrLWRhdGUtaW5wdXQnKTtcbmV4cG9ydCBjb25zdCBhZGRQcmlvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2stcHJpby1pbnB1dCcpO1xuZXhwb3J0IGNvbnN0IGFkZFRpbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFzay10aW1lLWlucHV0Jyk7XG5leHBvcnQgY29uc3QgaW5wdXRXYXJuaW5nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lucHV0LXdhcm5pbmcnKTtcblxuZXhwb3J0IGNvbnN0IGRlbGV0ZVRhc2tCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVsZXRlLXRhc2stYnV0dG9uJyk7XG5leHBvcnQgY29uc3QgdGFza01vcmVEZXRhaWxzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2stZGV0YWlscycpO1xuIiwiaW1wb3J0IGVkaXRFbG1udCBmcm9tICcuL2VkaXRFbG1udCc7XG5pbXBvcnQgKiBhcyBkb21FbG1udCBmcm9tICcuL2RvbUVsbW50JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGlzdFJlbmRlcmVyIHtcbiAgY29uc3RydWN0b3IobGlzdCkge1xuICAgIHRoaXMubGlzdCA9IGxpc3Q7XG4gICAgdGhpcy5wZEl0ZW1zID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3QtaXRlbXMnKTtcbiAgICB0aGlzLmFkZFByb2pGaWVsZCA9IGRvbUVsbW50LmFkZFByb2plY3RGaWVsZDtcbiAgICB0aGlzLmFkZFByb2plY3RGb3JtID0gZG9tRWxtbnQuYWRkUHJvamVjdEZvcm07XG4gICAgdGhpcy5hZGRQcm9qZWN0QnRuID0gZG9tRWxtbnQuYWRkUHJvamVjdEJ0bjtcbiAgICB0aGlzLmFkZFByb2plY3RDYW5jZWwgPSBkb21FbG1udC5hZGRQcm9qZWN0Q2FuY2VsO1xuICAgIHRoaXMuYWRkUHJvamVjdEFkZCA9IGRvbUVsbW50LmFkZFByb2plY3RBZGQ7XG4gICAgdGhpcy5wcm9qZWN0SXRlbXMgPSBkb21FbG1udC5wcm9qZWN0SXRlbXMoKTtcbiAgfVxuXG4gIHJlbmRlclByb2plY3RzKCkge1xuICAgIHRoaXMucGRJdGVtcy5pbm5lckhUTUwgPSAnJztcbiAgICBsZXQgcHJvamVjdElkID0gMDtcblxuICAgIHRoaXMubGlzdC5wcm9qZWN0cy5mb3JFYWNoKChwcm9qKSA9PiB7XG4gICAgICBjb25zdCBwcm9qSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgcHJvakl0ZW0uY2xhc3NMaXN0LmFkZCgncHJvamVjdC1pdGVtJyk7XG4gICAgICBwcm9qSXRlbS50ZXh0Q29udGVudCA9IGAke3Byb2oubmFtZX1gO1xuICAgICAgZWRpdEVsbW50LmFwcGVuZENoaWxkcmVuKHRoaXMucGRJdGVtcywgW3Byb2pJdGVtXSk7XG4gICAgICBwcm9qSXRlbS5pZCA9IGAke3Byb2plY3RJZH1gO1xuICAgICAgcHJvamVjdElkICs9IDE7XG4gICAgfSk7XG5cbiAgICAvLyBSZWNvbGxlY3QgcHJvamVjdCBpdGVtcyBmb3IgcmVuZGVyXG4gICAgdGhpcy5wcm9qZWN0SXRlbXMgPSBkb21FbG1udC5wcm9qZWN0SXRlbXMoKTtcbiAgfVxufVxuIiwiaW1wb3J0IGVkaXRFbG1udCBmcm9tICcuL2VkaXRFbG1udCc7XG5pbXBvcnQgKiBhcyBkb21FbG1udCBmcm9tICcuL2RvbUVsbW50JztcblxuY2xhc3MgUHJvamVjdFJlbmRlcmVyIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy50ZEl0ZW1zID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2staXRlbXMnKTtcbiAgICB0aGlzLm5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdC1uYW1lJyk7XG4gICAgdGhpcy5wcm9qZWN0ID0gbnVsbDtcbiAgICB0aGlzLnRhc2tEaXNwbGF5ID0gZG9tRWxtbnQudGFza0Rpc3BsYXk7XG4gICAgdGhpcy5jb21wbGV0ZUJ0bnMgPSBkb21FbG1udC5jb21wbGV0ZUJ1dHRvbnMoKTtcbiAgICB0aGlzLmVkaXRCdG5zID0gZG9tRWxtbnQuZWRpdEJ1dHRvbnMoKTtcbiAgfVxuXG4gIHJlbmRlclRhc2tzKGN1cnJlbnRQcm9qZWN0KSB7XG4gICAgLy8gVXBkYXRlIHJlbmRlcmVkIHByb2plY3RcbiAgICB0aGlzLnByb2plY3QgPSBjdXJyZW50UHJvamVjdDtcbiAgICB0aGlzLnRkSXRlbXMuaW5uZXJIVE1MID0gJyc7XG4gICAgZWRpdEVsbW50LmFkZFRleHQodGhpcy5uYW1lLCBjdXJyZW50UHJvamVjdC5uYW1lKTtcblxuICAgIGxldCB0YXNrSWQgPSAwO1xuXG4gICAgY3VycmVudFByb2plY3QudGFza3MuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgICAgY29uc3QgdGFza0l0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIHRhc2tJdGVtLmNsYXNzTGlzdC5hZGQoJ3Rhc2staXRlbScpO1xuICAgICAgdGFza0l0ZW0uaW5uZXJIVE1MID0gYFxuICAgICAgICA8ZGl2IGNsYXNzPSd0YXNrLWluZm8nPiBcbiAgICAgICAgICA8cD4ke3Rhc2sudGl0bGV9IC0gPC9wPlxuICAgICAgICAgIDxwPiR7dGFzay5mb3JtYXR0ZWREdWVEYXRlKCl9PC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIGA7XG5cbiAgICAgIC8vIEFwcGVuZCBhbiBlZGl0IGJ1dHRvblxuICAgICAgY29uc3QgdGFza0J0bnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIHRhc2tCdG5zLmlkID0gJ3Rhc2stYWN0aW9uLWJ1dHRvbnMnO1xuXG4gICAgICBjb25zdCBlZGl0VGFza0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgZWRpdFRhc2tCdG4udGV4dENvbnRlbnQgPSAnRWRpdCc7XG4gICAgICBlZGl0VGFza0J0bi5pZCA9IGAke3Rhc2tJZH1gO1xuICAgICAgZWRpdEVsbW50LmFkZENsYXNzKGVkaXRUYXNrQnRuLCBbJ3Rhc2stYWN0aW9uJywgJ2VkaXQtdGFzayddKTtcbiAgICAgIC8vIEFwcGVuZCBhIGNvbXBsZXRlIGJ1dHRvblxuICAgICAgY29uc3QgY2hlY2tUYXNrQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICBjaGVja1Rhc2tCdG4udGV4dENvbnRlbnQgPSAnQ29tcGxldGUnO1xuICAgICAgY2hlY2tUYXNrQnRuLmlkID0gYCR7dGFza0lkfWA7XG4gICAgICBlZGl0RWxtbnQuYWRkQ2xhc3MoY2hlY2tUYXNrQnRuLCBbJ3Rhc2stYWN0aW9uJywgJ2NoZWNrLXRhc2snXSk7XG5cbiAgICAgIGVkaXRFbG1udC5hcHBlbmRDaGlsZHJlbih0YXNrQnRucywgW2VkaXRUYXNrQnRuLCBjaGVja1Rhc2tCdG5dKTtcbiAgICAgIHRhc2tJdGVtLmFwcGVuZENoaWxkKHRhc2tCdG5zKTtcbiAgICAgIHRoaXMudGRJdGVtcy5hcHBlbmRDaGlsZCh0YXNrSXRlbSk7XG4gICAgICBlZGl0RWxtbnQuY29sb3JBY2NkZ1RvUHJpbyh0YXNrLnByaW9yaXR5LCB0YXNrSXRlbSk7XG4gICAgICB0YXNrSWQgKz0gMTtcbiAgICB9KTtcbiAgICAvLyBSZWNvbGxlY3QgY29tcGxldGUgYW5kIGVkaXQgYnV0dG9uc1xuICAgIHRoaXMuY29tcGxldGVCdG5zID0gZG9tRWxtbnQuY29tcGxldGVCdXR0b25zKCk7XG4gICAgdGhpcy5lZGl0QnRucyA9IGRvbUVsbW50LmVkaXRCdXR0b25zKCk7XG4gIH1cbn1cblxuY29uc3QgcHJvamVjdFJlbmRlcmVySW5zdGFuY2UgPSBuZXcgUHJvamVjdFJlbmRlcmVyKCk7XG5leHBvcnQgZGVmYXVsdCBwcm9qZWN0UmVuZGVyZXJJbnN0YW5jZTtcbiIsImltcG9ydCAqIGFzIGRvbUVsbW50IGZyb20gJy4vZG9tRWxtbnQnO1xuXG5jbGFzcyBUYXNrUmVuZGVyZXIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnRhc2sgPSBudWxsO1xuICAgIHRoaXMucHJvamVjdCA9IG51bGw7XG4gICAgdGhpcy5kZXRhaWxzID0gZG9tRWxtbnQuYWRkVGFza0Zvcm07XG4gICAgdGhpcy50aXRsZSA9IGRvbUVsbW50LmFkZFRpdGxlO1xuICAgIHRoaXMuZHVlRGF0ZSA9IGRvbUVsbW50LmFkZERhdGU7XG4gICAgdGhpcy5kdWVUaW1lID0gZG9tRWxtbnQuYWRkVGltZTtcbiAgICB0aGlzLmRlc2MgPSBkb21FbG1udC5hZGREZXNjO1xuICAgIHRoaXMucHJpbyA9IGRvbUVsbW50LmFkZFByaW87XG4gICAgdGhpcy5lZGl0ID0gZG9tRWxtbnQuYWRkVGFza0FkZDtcbiAgICB0aGlzLnRhZyA9IGRvbUVsbW50LnRhc2tUYWc7XG4gICAgdGhpcy5kZWxldGUgPSBkb21FbG1udC5kZWxldGVUYXNrQnRuO1xuICAgIHRoaXMud2FybmluZyA9IGRvbUVsbW50LmlucHV0V2FybmluZztcbiAgfVxuXG4gIHJlbmRlckRldGFpbHMoY3VycmVudFRhc2ssIGN1cnJlbnRQcm9qZWN0KSB7XG4gICAgdGhpcy50YXNrID0gY3VycmVudFRhc2s7XG4gICAgdGhpcy5wcm9qZWN0ID0gY3VycmVudFByb2plY3Q7XG4gICAgdGhpcy53YXJuaW5nLnRleHRDb250ZW50ID0gJyc7XG4gICAgdGhpcy5kZXRhaWxzLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgdGhpcy50aXRsZS52YWx1ZSA9IGAke3RoaXMudGFzay50aXRsZX1gO1xuICAgIHRoaXMuZHVlVGltZS52YWx1ZSA9IGAke3RoaXMudGFzay5kdWVUaW1lfWA7XG4gICAgdGhpcy5kZXNjLnZhbHVlID0gYCR7dGhpcy50YXNrLmRlc2NyaXB0aW9ufWA7XG4gICAgdGhpcy5kdWVEYXRlLnZhbHVlID0gYCR7dGhpcy50YXNrLmR1ZURhdGV9YDtcbiAgICB0aGlzLnByaW8udmFsdWUgPSBgJHt0aGlzLnRhc2sucHJpb3JpdHl9YDtcbiAgfVxuXG4gIHNob3dXYXJuaW5nKCkge1xuICAgIHRoaXMud2FybmluZy50ZXh0Q29udGVudCA9ICdQbGVhc2UgaW5wdXQgdGFzayB0aXRsZSBhbmQgZHVlIGRhdGUnO1xuICB9XG5cbiAgaGlkZVdhcm5pbmcoKSB7XG4gICAgdGhpcy53YXJuaW5nLnRleHRDb250ZW50ID0gJyc7XG4gIH1cbn1cblxuY29uc3QgdGFza1JlbmRlcmVySW5zdGFuY2UgPSBuZXcgVGFza1JlbmRlcmVyKCk7XG5leHBvcnQgZGVmYXVsdCB0YXNrUmVuZGVyZXJJbnN0YW5jZTtcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICByZXR1cm4gX3R5cGVvZiA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIFwic3ltYm9sXCIgPT0gdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA/IGZ1bmN0aW9uIChvYmopIHtcbiAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgfSA6IGZ1bmN0aW9uIChvYmopIHtcbiAgICByZXR1cm4gb2JqICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICB9LCBfdHlwZW9mKG9iaik7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVxdWlyZWRBcmdzKHJlcXVpcmVkLCBhcmdzKSB7XG4gIGlmIChhcmdzLmxlbmd0aCA8IHJlcXVpcmVkKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihyZXF1aXJlZCArICcgYXJndW1lbnQnICsgKHJlcXVpcmVkID4gMSA/ICdzJyA6ICcnKSArICcgcmVxdWlyZWQsIGJ1dCBvbmx5ICcgKyBhcmdzLmxlbmd0aCArICcgcHJlc2VudCcpO1xuICB9XG59IiwiaW1wb3J0IF90eXBlb2YgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3R5cGVvZlwiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgdG9EYXRlXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhbiBpbnN0YW5jZSBvZiBEYXRlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBpdHMgY2xvbmUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGEgbnVtYmVyLCBpdCBpcyB0cmVhdGVkIGFzIGEgdGltZXN0YW1wLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBub25lIG9mIHRoZSBhYm92ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgSW52YWxpZCBEYXRlLlxuICpcbiAqICoqTm90ZSoqOiAqYWxsKiBEYXRlIGFyZ3VtZW50cyBwYXNzZWQgdG8gYW55ICpkYXRlLWZucyogZnVuY3Rpb24gaXMgcHJvY2Vzc2VkIGJ5IGB0b0RhdGVgLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGFyZ3VtZW50IC0gdGhlIHZhbHVlIHRvIGNvbnZlcnRcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgcGFyc2VkIGRhdGUgaW4gdGhlIGxvY2FsIHRpbWUgem9uZVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENsb25lIHRoZSBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKG5ldyBEYXRlKDIwMTQsIDEsIDExLCAxMSwgMzAsIDMwKSlcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENvbnZlcnQgdGhlIHRpbWVzdGFtcCB0byBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKDEzOTIwOTg0MzAwMDApXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b0RhdGUoYXJndW1lbnQpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBhcmdTdHIgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYXJndW1lbnQpO1xuXG4gIC8vIENsb25lIHRoZSBkYXRlXG4gIGlmIChhcmd1bWVudCBpbnN0YW5jZW9mIERhdGUgfHwgX3R5cGVvZihhcmd1bWVudCkgPT09ICdvYmplY3QnICYmIGFyZ1N0ciA9PT0gJ1tvYmplY3QgRGF0ZV0nKSB7XG4gICAgLy8gUHJldmVudCB0aGUgZGF0ZSB0byBsb3NlIHRoZSBtaWxsaXNlY29uZHMgd2hlbiBwYXNzZWQgdG8gbmV3IERhdGUoKSBpbiBJRTEwXG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50LmdldFRpbWUoKSk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIGFyZ3VtZW50ID09PSAnbnVtYmVyJyB8fCBhcmdTdHIgPT09ICdbb2JqZWN0IE51bWJlcl0nKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50KTtcbiAgfSBlbHNlIHtcbiAgICBpZiAoKHR5cGVvZiBhcmd1bWVudCA9PT0gJ3N0cmluZycgfHwgYXJnU3RyID09PSAnW29iamVjdCBTdHJpbmddJykgJiYgdHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgY29uc29sZS53YXJuKFwiU3RhcnRpbmcgd2l0aCB2Mi4wLjAtYmV0YS4xIGRhdGUtZm5zIGRvZXNuJ3QgYWNjZXB0IHN0cmluZ3MgYXMgZGF0ZSBhcmd1bWVudHMuIFBsZWFzZSB1c2UgYHBhcnNlSVNPYCB0byBwYXJzZSBzdHJpbmdzLiBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNzdHJpbmctYXJndW1lbnRzXCIpO1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgIGNvbnNvbGUud2FybihuZXcgRXJyb3IoKS5zdGFjayk7XG4gICAgfVxuICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9JbnRlZ2VyKGRpcnR5TnVtYmVyKSB7XG4gIGlmIChkaXJ0eU51bWJlciA9PT0gbnVsbCB8fCBkaXJ0eU51bWJlciA9PT0gdHJ1ZSB8fCBkaXJ0eU51bWJlciA9PT0gZmFsc2UpIHtcbiAgICByZXR1cm4gTmFOO1xuICB9XG4gIHZhciBudW1iZXIgPSBOdW1iZXIoZGlydHlOdW1iZXIpO1xuICBpZiAoaXNOYU4obnVtYmVyKSkge1xuICAgIHJldHVybiBudW1iZXI7XG4gIH1cbiAgcmV0dXJuIG51bWJlciA8IDAgPyBNYXRoLmNlaWwobnVtYmVyKSA6IE1hdGguZmxvb3IobnVtYmVyKTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi8uLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhcnRPZlVUQ0lTT1dlZWsoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgd2Vla1N0YXJ0c09uID0gMTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIGRheSA9IGRhdGUuZ2V0VVRDRGF5KCk7XG4gIHZhciBkaWZmID0gKGRheSA8IHdlZWtTdGFydHNPbiA/IDcgOiAwKSArIGRheSAtIHdlZWtTdGFydHNPbjtcbiAgZGF0ZS5zZXRVVENEYXRlKGRhdGUuZ2V0VVRDRGF0ZSgpIC0gZGlmZik7XG4gIGRhdGUuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gIHJldHVybiBkYXRlO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uLy4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5pbXBvcnQgc3RhcnRPZlVUQ0lTT1dlZWsgZnJvbSBcIi4uL3N0YXJ0T2ZVVENJU09XZWVrL2luZGV4LmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRVVENJU09XZWVrWWVhcihkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciB5ZWFyID0gZGF0ZS5nZXRVVENGdWxsWWVhcigpO1xuICB2YXIgZm91cnRoT2ZKYW51YXJ5T2ZOZXh0WWVhciA9IG5ldyBEYXRlKDApO1xuICBmb3VydGhPZkphbnVhcnlPZk5leHRZZWFyLnNldFVUQ0Z1bGxZZWFyKHllYXIgKyAxLCAwLCA0KTtcbiAgZm91cnRoT2ZKYW51YXJ5T2ZOZXh0WWVhci5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgdmFyIHN0YXJ0T2ZOZXh0WWVhciA9IHN0YXJ0T2ZVVENJU09XZWVrKGZvdXJ0aE9mSmFudWFyeU9mTmV4dFllYXIpO1xuICB2YXIgZm91cnRoT2ZKYW51YXJ5T2ZUaGlzWWVhciA9IG5ldyBEYXRlKDApO1xuICBmb3VydGhPZkphbnVhcnlPZlRoaXNZZWFyLnNldFVUQ0Z1bGxZZWFyKHllYXIsIDAsIDQpO1xuICBmb3VydGhPZkphbnVhcnlPZlRoaXNZZWFyLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICB2YXIgc3RhcnRPZlRoaXNZZWFyID0gc3RhcnRPZlVUQ0lTT1dlZWsoZm91cnRoT2ZKYW51YXJ5T2ZUaGlzWWVhcik7XG4gIGlmIChkYXRlLmdldFRpbWUoKSA+PSBzdGFydE9mTmV4dFllYXIuZ2V0VGltZSgpKSB7XG4gICAgcmV0dXJuIHllYXIgKyAxO1xuICB9IGVsc2UgaWYgKGRhdGUuZ2V0VGltZSgpID49IHN0YXJ0T2ZUaGlzWWVhci5nZXRUaW1lKCkpIHtcbiAgICByZXR1cm4geWVhcjtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4geWVhciAtIDE7XG4gIH1cbn0iLCJ2YXIgZGVmYXVsdE9wdGlvbnMgPSB7fTtcbmV4cG9ydCBmdW5jdGlvbiBnZXREZWZhdWx0T3B0aW9ucygpIHtcbiAgcmV0dXJuIGRlZmF1bHRPcHRpb25zO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHNldERlZmF1bHRPcHRpb25zKG5ld09wdGlvbnMpIHtcbiAgZGVmYXVsdE9wdGlvbnMgPSBuZXdPcHRpb25zO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uLy4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi90b0ludGVnZXIvaW5kZXguanNcIjtcbmltcG9ydCB7IGdldERlZmF1bHRPcHRpb25zIH0gZnJvbSBcIi4uL2RlZmF1bHRPcHRpb25zL2luZGV4LmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdGFydE9mVVRDV2VlayhkaXJ0eURhdGUsIG9wdGlvbnMpIHtcbiAgdmFyIF9yZWYsIF9yZWYyLCBfcmVmMywgX29wdGlvbnMkd2Vla1N0YXJ0c09uLCBfb3B0aW9ucyRsb2NhbGUsIF9vcHRpb25zJGxvY2FsZSRvcHRpbywgX2RlZmF1bHRPcHRpb25zJGxvY2FsLCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyO1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRlZmF1bHRPcHRpb25zID0gZ2V0RGVmYXVsdE9wdGlvbnMoKTtcbiAgdmFyIHdlZWtTdGFydHNPbiA9IHRvSW50ZWdlcigoX3JlZiA9IChfcmVmMiA9IChfcmVmMyA9IChfb3B0aW9ucyR3ZWVrU3RhcnRzT24gPSBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfb3B0aW9ucyR3ZWVrU3RhcnRzT24gIT09IHZvaWQgMCA/IF9vcHRpb25zJHdlZWtTdGFydHNPbiA6IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9vcHRpb25zJGxvY2FsZSA9IG9wdGlvbnMubG9jYWxlKSA9PT0gbnVsbCB8fCBfb3B0aW9ucyRsb2NhbGUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfb3B0aW9ucyRsb2NhbGUkb3B0aW8gPSBfb3B0aW9ucyRsb2NhbGUub3B0aW9ucykgPT09IG51bGwgfHwgX29wdGlvbnMkbG9jYWxlJG9wdGlvID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfb3B0aW9ucyRsb2NhbGUkb3B0aW8ud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfcmVmMyAhPT0gdm9pZCAwID8gX3JlZjMgOiBkZWZhdWx0T3B0aW9ucy53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9yZWYyICE9PSB2b2lkIDAgPyBfcmVmMiA6IChfZGVmYXVsdE9wdGlvbnMkbG9jYWwgPSBkZWZhdWx0T3B0aW9ucy5sb2NhbGUpID09PSBudWxsIHx8IF9kZWZhdWx0T3B0aW9ucyRsb2NhbCA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIgPSBfZGVmYXVsdE9wdGlvbnMkbG9jYWwub3B0aW9ucykgPT09IG51bGwgfHwgX2RlZmF1bHRPcHRpb25zJGxvY2FsMiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2RlZmF1bHRPcHRpb25zJGxvY2FsMi53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9yZWYgIT09IHZvaWQgMCA/IF9yZWYgOiAwKTtcblxuICAvLyBUZXN0IGlmIHdlZWtTdGFydHNPbiBpcyBiZXR3ZWVuIDAgYW5kIDYgX2FuZF8gaXMgbm90IE5hTlxuICBpZiAoISh3ZWVrU3RhcnRzT24gPj0gMCAmJiB3ZWVrU3RhcnRzT24gPD0gNikpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignd2Vla1N0YXJ0c09uIG11c3QgYmUgYmV0d2VlbiAwIGFuZCA2IGluY2x1c2l2ZWx5Jyk7XG4gIH1cbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIGRheSA9IGRhdGUuZ2V0VVRDRGF5KCk7XG4gIHZhciBkaWZmID0gKGRheSA8IHdlZWtTdGFydHNPbiA/IDcgOiAwKSArIGRheSAtIHdlZWtTdGFydHNPbjtcbiAgZGF0ZS5zZXRVVENEYXRlKGRhdGUuZ2V0VVRDRGF0ZSgpIC0gZGlmZik7XG4gIGRhdGUuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gIHJldHVybiBkYXRlO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uLy4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5pbXBvcnQgc3RhcnRPZlVUQ1dlZWsgZnJvbSBcIi4uL3N0YXJ0T2ZVVENXZWVrL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi90b0ludGVnZXIvaW5kZXguanNcIjtcbmltcG9ydCB7IGdldERlZmF1bHRPcHRpb25zIH0gZnJvbSBcIi4uL2RlZmF1bHRPcHRpb25zL2luZGV4LmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRVVENXZWVrWWVhcihkaXJ0eURhdGUsIG9wdGlvbnMpIHtcbiAgdmFyIF9yZWYsIF9yZWYyLCBfcmVmMywgX29wdGlvbnMkZmlyc3RXZWVrQ29uLCBfb3B0aW9ucyRsb2NhbGUsIF9vcHRpb25zJGxvY2FsZSRvcHRpbywgX2RlZmF1bHRPcHRpb25zJGxvY2FsLCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyO1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIHllYXIgPSBkYXRlLmdldFVUQ0Z1bGxZZWFyKCk7XG4gIHZhciBkZWZhdWx0T3B0aW9ucyA9IGdldERlZmF1bHRPcHRpb25zKCk7XG4gIHZhciBmaXJzdFdlZWtDb250YWluc0RhdGUgPSB0b0ludGVnZXIoKF9yZWYgPSAoX3JlZjIgPSAoX3JlZjMgPSAoX29wdGlvbnMkZmlyc3RXZWVrQ29uID0gb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSkgIT09IG51bGwgJiYgX29wdGlvbnMkZmlyc3RXZWVrQ29uICE9PSB2b2lkIDAgPyBfb3B0aW9ucyRmaXJzdFdlZWtDb24gOiBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfb3B0aW9ucyRsb2NhbGUgPSBvcHRpb25zLmxvY2FsZSkgPT09IG51bGwgfHwgX29wdGlvbnMkbG9jYWxlID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX29wdGlvbnMkbG9jYWxlJG9wdGlvID0gX29wdGlvbnMkbG9jYWxlLm9wdGlvbnMpID09PSBudWxsIHx8IF9vcHRpb25zJGxvY2FsZSRvcHRpbyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX29wdGlvbnMkbG9jYWxlJG9wdGlvLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSkgIT09IG51bGwgJiYgX3JlZjMgIT09IHZvaWQgMCA/IF9yZWYzIDogZGVmYXVsdE9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlKSAhPT0gbnVsbCAmJiBfcmVmMiAhPT0gdm9pZCAwID8gX3JlZjIgOiAoX2RlZmF1bHRPcHRpb25zJGxvY2FsID0gZGVmYXVsdE9wdGlvbnMubG9jYWxlKSA9PT0gbnVsbCB8fCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfZGVmYXVsdE9wdGlvbnMkbG9jYWwyID0gX2RlZmF1bHRPcHRpb25zJGxvY2FsLm9wdGlvbnMpID09PSBudWxsIHx8IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIuZmlyc3RXZWVrQ29udGFpbnNEYXRlKSAhPT0gbnVsbCAmJiBfcmVmICE9PSB2b2lkIDAgPyBfcmVmIDogMSk7XG5cbiAgLy8gVGVzdCBpZiB3ZWVrU3RhcnRzT24gaXMgYmV0d2VlbiAxIGFuZCA3IF9hbmRfIGlzIG5vdCBOYU5cbiAgaWYgKCEoZmlyc3RXZWVrQ29udGFpbnNEYXRlID49IDEgJiYgZmlyc3RXZWVrQ29udGFpbnNEYXRlIDw9IDcpKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ2ZpcnN0V2Vla0NvbnRhaW5zRGF0ZSBtdXN0IGJlIGJldHdlZW4gMSBhbmQgNyBpbmNsdXNpdmVseScpO1xuICB9XG4gIHZhciBmaXJzdFdlZWtPZk5leHRZZWFyID0gbmV3IERhdGUoMCk7XG4gIGZpcnN0V2Vla09mTmV4dFllYXIuc2V0VVRDRnVsbFllYXIoeWVhciArIDEsIDAsIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSk7XG4gIGZpcnN0V2Vla09mTmV4dFllYXIuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gIHZhciBzdGFydE9mTmV4dFllYXIgPSBzdGFydE9mVVRDV2VlayhmaXJzdFdlZWtPZk5leHRZZWFyLCBvcHRpb25zKTtcbiAgdmFyIGZpcnN0V2Vla09mVGhpc1llYXIgPSBuZXcgRGF0ZSgwKTtcbiAgZmlyc3RXZWVrT2ZUaGlzWWVhci5zZXRVVENGdWxsWWVhcih5ZWFyLCAwLCBmaXJzdFdlZWtDb250YWluc0RhdGUpO1xuICBmaXJzdFdlZWtPZlRoaXNZZWFyLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICB2YXIgc3RhcnRPZlRoaXNZZWFyID0gc3RhcnRPZlVUQ1dlZWsoZmlyc3RXZWVrT2ZUaGlzWWVhciwgb3B0aW9ucyk7XG4gIGlmIChkYXRlLmdldFRpbWUoKSA+PSBzdGFydE9mTmV4dFllYXIuZ2V0VGltZSgpKSB7XG4gICAgcmV0dXJuIHllYXIgKyAxO1xuICB9IGVsc2UgaWYgKGRhdGUuZ2V0VGltZSgpID49IHN0YXJ0T2ZUaGlzWWVhci5nZXRUaW1lKCkpIHtcbiAgICByZXR1cm4geWVhcjtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4geWVhciAtIDE7XG4gIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhZGRMZWFkaW5nWmVyb3MobnVtYmVyLCB0YXJnZXRMZW5ndGgpIHtcbiAgdmFyIHNpZ24gPSBudW1iZXIgPCAwID8gJy0nIDogJyc7XG4gIHZhciBvdXRwdXQgPSBNYXRoLmFicyhudW1iZXIpLnRvU3RyaW5nKCk7XG4gIHdoaWxlIChvdXRwdXQubGVuZ3RoIDwgdGFyZ2V0TGVuZ3RoKSB7XG4gICAgb3V0cHV0ID0gJzAnICsgb3V0cHV0O1xuICB9XG4gIHJldHVybiBzaWduICsgb3V0cHV0O1xufSIsImltcG9ydCBhZGRMZWFkaW5nWmVyb3MgZnJvbSBcIi4uLy4uL2FkZExlYWRpbmdaZXJvcy9pbmRleC5qc1wiO1xuLypcbiAqIHwgICAgIHwgVW5pdCAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgVW5pdCAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwtLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXwtLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXxcbiAqIHwgIGEgIHwgQU0sIFBNICAgICAgICAgICAgICAgICAgICAgICAgIHwgIEEqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGQgIHwgRGF5IG9mIG1vbnRoICAgICAgICAgICAgICAgICAgIHwgIEQgIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGggIHwgSG91ciBbMS0xMl0gICAgICAgICAgICAgICAgICAgIHwgIEggIHwgSG91ciBbMC0yM10gICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIG0gIHwgTWludXRlICAgICAgICAgICAgICAgICAgICAgICAgIHwgIE0gIHwgTW9udGggICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIHMgIHwgU2Vjb25kICAgICAgICAgICAgICAgICAgICAgICAgIHwgIFMgIHwgRnJhY3Rpb24gb2Ygc2Vjb25kICAgICAgICAgICAgIHxcbiAqIHwgIHkgIHwgWWVhciAoYWJzKSAgICAgICAgICAgICAgICAgICAgIHwgIFkgIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqXG4gKiBMZXR0ZXJzIG1hcmtlZCBieSAqIGFyZSBub3QgaW1wbGVtZW50ZWQgYnV0IHJlc2VydmVkIGJ5IFVuaWNvZGUgc3RhbmRhcmQuXG4gKi9cbnZhciBmb3JtYXR0ZXJzID0ge1xuICAvLyBZZWFyXG4gIHk6IGZ1bmN0aW9uIHkoZGF0ZSwgdG9rZW4pIHtcbiAgICAvLyBGcm9tIGh0dHA6Ly93d3cudW5pY29kZS5vcmcvcmVwb3J0cy90cjM1L3RyMzUtMzEvdHIzNS1kYXRlcy5odG1sI0RhdGVfRm9ybWF0X3Rva2Vuc1xuICAgIC8vIHwgWWVhciAgICAgfCAgICAgeSB8IHl5IHwgICB5eXkgfCAgeXl5eSB8IHl5eXl5IHxcbiAgICAvLyB8LS0tLS0tLS0tLXwtLS0tLS0tfC0tLS18LS0tLS0tLXwtLS0tLS0tfC0tLS0tLS18XG4gICAgLy8gfCBBRCAxICAgICB8ICAgICAxIHwgMDEgfCAgIDAwMSB8ICAwMDAxIHwgMDAwMDEgfFxuICAgIC8vIHwgQUQgMTIgICAgfCAgICAxMiB8IDEyIHwgICAwMTIgfCAgMDAxMiB8IDAwMDEyIHxcbiAgICAvLyB8IEFEIDEyMyAgIHwgICAxMjMgfCAyMyB8ICAgMTIzIHwgIDAxMjMgfCAwMDEyMyB8XG4gICAgLy8gfCBBRCAxMjM0ICB8ICAxMjM0IHwgMzQgfCAgMTIzNCB8ICAxMjM0IHwgMDEyMzQgfFxuICAgIC8vIHwgQUQgMTIzNDUgfCAxMjM0NSB8IDQ1IHwgMTIzNDUgfCAxMjM0NSB8IDEyMzQ1IHxcblxuICAgIHZhciBzaWduZWRZZWFyID0gZGF0ZS5nZXRVVENGdWxsWWVhcigpO1xuICAgIC8vIFJldHVybnMgMSBmb3IgMSBCQyAod2hpY2ggaXMgeWVhciAwIGluIEphdmFTY3JpcHQpXG4gICAgdmFyIHllYXIgPSBzaWduZWRZZWFyID4gMCA/IHNpZ25lZFllYXIgOiAxIC0gc2lnbmVkWWVhcjtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHRva2VuID09PSAneXknID8geWVhciAlIDEwMCA6IHllYXIsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIE1vbnRoXG4gIE06IGZ1bmN0aW9uIE0oZGF0ZSwgdG9rZW4pIHtcbiAgICB2YXIgbW9udGggPSBkYXRlLmdldFVUQ01vbnRoKCk7XG4gICAgcmV0dXJuIHRva2VuID09PSAnTScgPyBTdHJpbmcobW9udGggKyAxKSA6IGFkZExlYWRpbmdaZXJvcyhtb250aCArIDEsIDIpO1xuICB9LFxuICAvLyBEYXkgb2YgdGhlIG1vbnRoXG4gIGQ6IGZ1bmN0aW9uIGQoZGF0ZSwgdG9rZW4pIHtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGRhdGUuZ2V0VVRDRGF0ZSgpLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBBTSBvciBQTVxuICBhOiBmdW5jdGlvbiBhKGRhdGUsIHRva2VuKSB7XG4gICAgdmFyIGRheVBlcmlvZEVudW1WYWx1ZSA9IGRhdGUuZ2V0VVRDSG91cnMoKSAvIDEyID49IDEgPyAncG0nIDogJ2FtJztcbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICBjYXNlICdhJzpcbiAgICAgIGNhc2UgJ2FhJzpcbiAgICAgICAgcmV0dXJuIGRheVBlcmlvZEVudW1WYWx1ZS50b1VwcGVyQ2FzZSgpO1xuICAgICAgY2FzZSAnYWFhJzpcbiAgICAgICAgcmV0dXJuIGRheVBlcmlvZEVudW1WYWx1ZTtcbiAgICAgIGNhc2UgJ2FhYWFhJzpcbiAgICAgICAgcmV0dXJuIGRheVBlcmlvZEVudW1WYWx1ZVswXTtcbiAgICAgIGNhc2UgJ2FhYWEnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGRheVBlcmlvZEVudW1WYWx1ZSA9PT0gJ2FtJyA/ICdhLm0uJyA6ICdwLm0uJztcbiAgICB9XG4gIH0sXG4gIC8vIEhvdXIgWzEtMTJdXG4gIGg6IGZ1bmN0aW9uIGgoZGF0ZSwgdG9rZW4pIHtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGRhdGUuZ2V0VVRDSG91cnMoKSAlIDEyIHx8IDEyLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBIb3VyIFswLTIzXVxuICBIOiBmdW5jdGlvbiBIKGRhdGUsIHRva2VuKSB7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhkYXRlLmdldFVUQ0hvdXJzKCksIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIE1pbnV0ZVxuICBtOiBmdW5jdGlvbiBtKGRhdGUsIHRva2VuKSB7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhkYXRlLmdldFVUQ01pbnV0ZXMoKSwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gU2Vjb25kXG4gIHM6IGZ1bmN0aW9uIHMoZGF0ZSwgdG9rZW4pIHtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGRhdGUuZ2V0VVRDU2Vjb25kcygpLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBGcmFjdGlvbiBvZiBzZWNvbmRcbiAgUzogZnVuY3Rpb24gUyhkYXRlLCB0b2tlbikge1xuICAgIHZhciBudW1iZXJPZkRpZ2l0cyA9IHRva2VuLmxlbmd0aDtcbiAgICB2YXIgbWlsbGlzZWNvbmRzID0gZGF0ZS5nZXRVVENNaWxsaXNlY29uZHMoKTtcbiAgICB2YXIgZnJhY3Rpb25hbFNlY29uZHMgPSBNYXRoLmZsb29yKG1pbGxpc2Vjb25kcyAqIE1hdGgucG93KDEwLCBudW1iZXJPZkRpZ2l0cyAtIDMpKTtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGZyYWN0aW9uYWxTZWNvbmRzLCB0b2tlbi5sZW5ndGgpO1xuICB9XG59O1xuZXhwb3J0IGRlZmF1bHQgZm9ybWF0dGVyczsiLCJpbXBvcnQgZ2V0VVRDRGF5T2ZZZWFyIGZyb20gXCIuLi8uLi8uLi9fbGliL2dldFVUQ0RheU9mWWVhci9pbmRleC5qc1wiO1xuaW1wb3J0IGdldFVUQ0lTT1dlZWsgZnJvbSBcIi4uLy4uLy4uL19saWIvZ2V0VVRDSVNPV2Vlay9pbmRleC5qc1wiO1xuaW1wb3J0IGdldFVUQ0lTT1dlZWtZZWFyIGZyb20gXCIuLi8uLi8uLi9fbGliL2dldFVUQ0lTT1dlZWtZZWFyL2luZGV4LmpzXCI7XG5pbXBvcnQgZ2V0VVRDV2VlayBmcm9tIFwiLi4vLi4vLi4vX2xpYi9nZXRVVENXZWVrL2luZGV4LmpzXCI7XG5pbXBvcnQgZ2V0VVRDV2Vla1llYXIgZnJvbSBcIi4uLy4uLy4uL19saWIvZ2V0VVRDV2Vla1llYXIvaW5kZXguanNcIjtcbmltcG9ydCBhZGRMZWFkaW5nWmVyb3MgZnJvbSBcIi4uLy4uL2FkZExlYWRpbmdaZXJvcy9pbmRleC5qc1wiO1xuaW1wb3J0IGxpZ2h0Rm9ybWF0dGVycyBmcm9tIFwiLi4vbGlnaHRGb3JtYXR0ZXJzL2luZGV4LmpzXCI7XG52YXIgZGF5UGVyaW9kRW51bSA9IHtcbiAgYW06ICdhbScsXG4gIHBtOiAncG0nLFxuICBtaWRuaWdodDogJ21pZG5pZ2h0JyxcbiAgbm9vbjogJ25vb24nLFxuICBtb3JuaW5nOiAnbW9ybmluZycsXG4gIGFmdGVybm9vbjogJ2FmdGVybm9vbicsXG4gIGV2ZW5pbmc6ICdldmVuaW5nJyxcbiAgbmlnaHQ6ICduaWdodCdcbn07XG4vKlxuICogfCAgICAgfCBVbml0ICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBVbml0ICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfC0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfC0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfFxuICogfCAgYSAgfCBBTSwgUE0gICAgICAgICAgICAgICAgICAgICAgICAgfCAgQSogfCBNaWxsaXNlY29uZHMgaW4gZGF5ICAgICAgICAgICAgfFxuICogfCAgYiAgfCBBTSwgUE0sIG5vb24sIG1pZG5pZ2h0ICAgICAgICAgfCAgQiAgfCBGbGV4aWJsZSBkYXkgcGVyaW9kICAgICAgICAgICAgfFxuICogfCAgYyAgfCBTdGFuZC1hbG9uZSBsb2NhbCBkYXkgb2Ygd2VlayAgfCAgQyogfCBMb2NhbGl6ZWQgaG91ciB3LyBkYXkgcGVyaW9kICAgfFxuICogfCAgZCAgfCBEYXkgb2YgbW9udGggICAgICAgICAgICAgICAgICAgfCAgRCAgfCBEYXkgb2YgeWVhciAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgZSAgfCBMb2NhbCBkYXkgb2Ygd2VlayAgICAgICAgICAgICAgfCAgRSAgfCBEYXkgb2Ygd2VlayAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgZiAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgRiogfCBEYXkgb2Ygd2VlayBpbiBtb250aCAgICAgICAgICAgfFxuICogfCAgZyogfCBNb2RpZmllZCBKdWxpYW4gZGF5ICAgICAgICAgICAgfCAgRyAgfCBFcmEgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgaCAgfCBIb3VyIFsxLTEyXSAgICAgICAgICAgICAgICAgICAgfCAgSCAgfCBIb3VyIFswLTIzXSAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgaSEgfCBJU08gZGF5IG9mIHdlZWsgICAgICAgICAgICAgICAgfCAgSSEgfCBJU08gd2VlayBvZiB5ZWFyICAgICAgICAgICAgICAgfFxuICogfCAgaiogfCBMb2NhbGl6ZWQgaG91ciB3LyBkYXkgcGVyaW9kICAgfCAgSiogfCBMb2NhbGl6ZWQgaG91ciB3L28gZGF5IHBlcmlvZCAgfFxuICogfCAgayAgfCBIb3VyIFsxLTI0XSAgICAgICAgICAgICAgICAgICAgfCAgSyAgfCBIb3VyIFswLTExXSAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgbCogfCAoZGVwcmVjYXRlZCkgICAgICAgICAgICAgICAgICAgfCAgTCAgfCBTdGFuZC1hbG9uZSBtb250aCAgICAgICAgICAgICAgfFxuICogfCAgbSAgfCBNaW51dGUgICAgICAgICAgICAgICAgICAgICAgICAgfCAgTSAgfCBNb250aCAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgbiAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgTiAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgbyEgfCBPcmRpbmFsIG51bWJlciBtb2RpZmllciAgICAgICAgfCAgTyAgfCBUaW1lem9uZSAoR01UKSAgICAgICAgICAgICAgICAgfFxuICogfCAgcCEgfCBMb25nIGxvY2FsaXplZCB0aW1lICAgICAgICAgICAgfCAgUCEgfCBMb25nIGxvY2FsaXplZCBkYXRlICAgICAgICAgICAgfFxuICogfCAgcSAgfCBTdGFuZC1hbG9uZSBxdWFydGVyICAgICAgICAgICAgfCAgUSAgfCBRdWFydGVyICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgciogfCBSZWxhdGVkIEdyZWdvcmlhbiB5ZWFyICAgICAgICAgfCAgUiEgfCBJU08gd2Vlay1udW1iZXJpbmcgeWVhciAgICAgICAgfFxuICogfCAgcyAgfCBTZWNvbmQgICAgICAgICAgICAgICAgICAgICAgICAgfCAgUyAgfCBGcmFjdGlvbiBvZiBzZWNvbmQgICAgICAgICAgICAgfFxuICogfCAgdCEgfCBTZWNvbmRzIHRpbWVzdGFtcCAgICAgICAgICAgICAgfCAgVCEgfCBNaWxsaXNlY29uZHMgdGltZXN0YW1wICAgICAgICAgfFxuICogfCAgdSAgfCBFeHRlbmRlZCB5ZWFyICAgICAgICAgICAgICAgICAgfCAgVSogfCBDeWNsaWMgeWVhciAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgdiogfCBUaW1lem9uZSAoZ2VuZXJpYyBub24tbG9jYXQuKSAgfCAgViogfCBUaW1lem9uZSAobG9jYXRpb24pICAgICAgICAgICAgfFxuICogfCAgdyAgfCBMb2NhbCB3ZWVrIG9mIHllYXIgICAgICAgICAgICAgfCAgVyogfCBXZWVrIG9mIG1vbnRoICAgICAgICAgICAgICAgICAgfFxuICogfCAgeCAgfCBUaW1lem9uZSAoSVNPLTg2MDEgdy9vIFopICAgICAgfCAgWCAgfCBUaW1lem9uZSAoSVNPLTg2MDEpICAgICAgICAgICAgfFxuICogfCAgeSAgfCBZZWFyIChhYnMpICAgICAgICAgICAgICAgICAgICAgfCAgWSAgfCBMb2NhbCB3ZWVrLW51bWJlcmluZyB5ZWFyICAgICAgfFxuICogfCAgeiAgfCBUaW1lem9uZSAoc3BlY2lmaWMgbm9uLWxvY2F0LikgfCAgWiogfCBUaW1lem9uZSAoYWxpYXNlcykgICAgICAgICAgICAgfFxuICpcbiAqIExldHRlcnMgbWFya2VkIGJ5ICogYXJlIG5vdCBpbXBsZW1lbnRlZCBidXQgcmVzZXJ2ZWQgYnkgVW5pY29kZSBzdGFuZGFyZC5cbiAqXG4gKiBMZXR0ZXJzIG1hcmtlZCBieSAhIGFyZSBub24tc3RhbmRhcmQsIGJ1dCBpbXBsZW1lbnRlZCBieSBkYXRlLWZuczpcbiAqIC0gYG9gIG1vZGlmaWVzIHRoZSBwcmV2aW91cyB0b2tlbiB0byB0dXJuIGl0IGludG8gYW4gb3JkaW5hbCAoc2VlIGBmb3JtYXRgIGRvY3MpXG4gKiAtIGBpYCBpcyBJU08gZGF5IG9mIHdlZWsuIEZvciBgaWAgYW5kIGBpaWAgaXMgcmV0dXJucyBudW1lcmljIElTTyB3ZWVrIGRheXMsXG4gKiAgIGkuZS4gNyBmb3IgU3VuZGF5LCAxIGZvciBNb25kYXksIGV0Yy5cbiAqIC0gYElgIGlzIElTTyB3ZWVrIG9mIHllYXIsIGFzIG9wcG9zZWQgdG8gYHdgIHdoaWNoIGlzIGxvY2FsIHdlZWsgb2YgeWVhci5cbiAqIC0gYFJgIGlzIElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyLCBhcyBvcHBvc2VkIHRvIGBZYCB3aGljaCBpcyBsb2NhbCB3ZWVrLW51bWJlcmluZyB5ZWFyLlxuICogICBgUmAgaXMgc3VwcG9zZWQgdG8gYmUgdXNlZCBpbiBjb25qdW5jdGlvbiB3aXRoIGBJYCBhbmQgYGlgXG4gKiAgIGZvciB1bml2ZXJzYWwgSVNPIHdlZWstbnVtYmVyaW5nIGRhdGUsIHdoZXJlYXNcbiAqICAgYFlgIGlzIHN1cHBvc2VkIHRvIGJlIHVzZWQgaW4gY29uanVuY3Rpb24gd2l0aCBgd2AgYW5kIGBlYFxuICogICBmb3Igd2Vlay1udW1iZXJpbmcgZGF0ZSBzcGVjaWZpYyB0byB0aGUgbG9jYWxlLlxuICogLSBgUGAgaXMgbG9uZyBsb2NhbGl6ZWQgZGF0ZSBmb3JtYXRcbiAqIC0gYHBgIGlzIGxvbmcgbG9jYWxpemVkIHRpbWUgZm9ybWF0XG4gKi9cblxudmFyIGZvcm1hdHRlcnMgPSB7XG4gIC8vIEVyYVxuICBHOiBmdW5jdGlvbiBHKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBlcmEgPSBkYXRlLmdldFVUQ0Z1bGxZZWFyKCkgPiAwID8gMSA6IDA7XG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gQUQsIEJDXG4gICAgICBjYXNlICdHJzpcbiAgICAgIGNhc2UgJ0dHJzpcbiAgICAgIGNhc2UgJ0dHRyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5lcmEoZXJhLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCdcbiAgICAgICAgfSk7XG4gICAgICAvLyBBLCBCXG4gICAgICBjYXNlICdHR0dHRyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5lcmEoZXJhLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnXG4gICAgICAgIH0pO1xuICAgICAgLy8gQW5ubyBEb21pbmksIEJlZm9yZSBDaHJpc3RcbiAgICAgIGNhc2UgJ0dHR0cnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmVyYShlcmEsIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gWWVhclxuICB5OiBmdW5jdGlvbiB5KGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIC8vIE9yZGluYWwgbnVtYmVyXG4gICAgaWYgKHRva2VuID09PSAneW8nKSB7XG4gICAgICB2YXIgc2lnbmVkWWVhciA9IGRhdGUuZ2V0VVRDRnVsbFllYXIoKTtcbiAgICAgIC8vIFJldHVybnMgMSBmb3IgMSBCQyAod2hpY2ggaXMgeWVhciAwIGluIEphdmFTY3JpcHQpXG4gICAgICB2YXIgeWVhciA9IHNpZ25lZFllYXIgPiAwID8gc2lnbmVkWWVhciA6IDEgLSBzaWduZWRZZWFyO1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoeWVhciwge1xuICAgICAgICB1bml0OiAneWVhcidcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLnkoZGF0ZSwgdG9rZW4pO1xuICB9LFxuICAvLyBMb2NhbCB3ZWVrLW51bWJlcmluZyB5ZWFyXG4gIFk6IGZ1bmN0aW9uIFkoZGF0ZSwgdG9rZW4sIGxvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIHNpZ25lZFdlZWtZZWFyID0gZ2V0VVRDV2Vla1llYXIoZGF0ZSwgb3B0aW9ucyk7XG4gICAgLy8gUmV0dXJucyAxIGZvciAxIEJDICh3aGljaCBpcyB5ZWFyIDAgaW4gSmF2YVNjcmlwdClcbiAgICB2YXIgd2Vla1llYXIgPSBzaWduZWRXZWVrWWVhciA+IDAgPyBzaWduZWRXZWVrWWVhciA6IDEgLSBzaWduZWRXZWVrWWVhcjtcblxuICAgIC8vIFR3byBkaWdpdCB5ZWFyXG4gICAgaWYgKHRva2VuID09PSAnWVknKSB7XG4gICAgICB2YXIgdHdvRGlnaXRZZWFyID0gd2Vla1llYXIgJSAxMDA7XG4gICAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHR3b0RpZ2l0WWVhciwgMik7XG4gICAgfVxuXG4gICAgLy8gT3JkaW5hbCBudW1iZXJcbiAgICBpZiAodG9rZW4gPT09ICdZbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKHdlZWtZZWFyLCB7XG4gICAgICAgIHVuaXQ6ICd5ZWFyJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gUGFkZGluZ1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3Mod2Vla1llYXIsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyXG4gIFI6IGZ1bmN0aW9uIFIoZGF0ZSwgdG9rZW4pIHtcbiAgICB2YXIgaXNvV2Vla1llYXIgPSBnZXRVVENJU09XZWVrWWVhcihkYXRlKTtcblxuICAgIC8vIFBhZGRpbmdcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGlzb1dlZWtZZWFyLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBFeHRlbmRlZCB5ZWFyLiBUaGlzIGlzIGEgc2luZ2xlIG51bWJlciBkZXNpZ25hdGluZyB0aGUgeWVhciBvZiB0aGlzIGNhbGVuZGFyIHN5c3RlbS5cbiAgLy8gVGhlIG1haW4gZGlmZmVyZW5jZSBiZXR3ZWVuIGB5YCBhbmQgYHVgIGxvY2FsaXplcnMgYXJlIEIuQy4geWVhcnM6XG4gIC8vIHwgWWVhciB8IGB5YCB8IGB1YCB8XG4gIC8vIHwtLS0tLS18LS0tLS18LS0tLS18XG4gIC8vIHwgQUMgMSB8ICAgMSB8ICAgMSB8XG4gIC8vIHwgQkMgMSB8ICAgMSB8ICAgMCB8XG4gIC8vIHwgQkMgMiB8ICAgMiB8ICAtMSB8XG4gIC8vIEFsc28gYHl5YCBhbHdheXMgcmV0dXJucyB0aGUgbGFzdCB0d28gZGlnaXRzIG9mIGEgeWVhcixcbiAgLy8gd2hpbGUgYHV1YCBwYWRzIHNpbmdsZSBkaWdpdCB5ZWFycyB0byAyIGNoYXJhY3RlcnMgYW5kIHJldHVybnMgb3RoZXIgeWVhcnMgdW5jaGFuZ2VkLlxuICB1OiBmdW5jdGlvbiB1KGRhdGUsIHRva2VuKSB7XG4gICAgdmFyIHllYXIgPSBkYXRlLmdldFVUQ0Z1bGxZZWFyKCk7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh5ZWFyLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBRdWFydGVyXG4gIFE6IGZ1bmN0aW9uIFEoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIHF1YXJ0ZXIgPSBNYXRoLmNlaWwoKGRhdGUuZ2V0VVRDTW9udGgoKSArIDEpIC8gMyk7XG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gMSwgMiwgMywgNFxuICAgICAgY2FzZSAnUSc6XG4gICAgICAgIHJldHVybiBTdHJpbmcocXVhcnRlcik7XG4gICAgICAvLyAwMSwgMDIsIDAzLCAwNFxuICAgICAgY2FzZSAnUVEnOlxuICAgICAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHF1YXJ0ZXIsIDIpO1xuICAgICAgLy8gMXN0LCAybmQsIDNyZCwgNHRoXG4gICAgICBjYXNlICdRbyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB1bml0OiAncXVhcnRlcidcbiAgICAgICAgfSk7XG4gICAgICAvLyBRMSwgUTIsIFEzLCBRNFxuICAgICAgY2FzZSAnUVFRJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLnF1YXJ0ZXIocXVhcnRlciwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIDEsIDIsIDMsIDQgKG5hcnJvdyBxdWFydGVyOyBjb3VsZCBiZSBub3QgbnVtZXJpY2FsKVxuICAgICAgY2FzZSAnUVFRUVEnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUucXVhcnRlcihxdWFydGVyLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIDFzdCBxdWFydGVyLCAybmQgcXVhcnRlciwgLi4uXG4gICAgICBjYXNlICdRUVFRJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5xdWFydGVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIFN0YW5kLWFsb25lIHF1YXJ0ZXJcbiAgcTogZnVuY3Rpb24gcShkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgcXVhcnRlciA9IE1hdGguY2VpbCgoZGF0ZS5nZXRVVENNb250aCgpICsgMSkgLyAzKTtcbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyAxLCAyLCAzLCA0XG4gICAgICBjYXNlICdxJzpcbiAgICAgICAgcmV0dXJuIFN0cmluZyhxdWFydGVyKTtcbiAgICAgIC8vIDAxLCAwMiwgMDMsIDA0XG4gICAgICBjYXNlICdxcSc6XG4gICAgICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MocXVhcnRlciwgMik7XG4gICAgICAvLyAxc3QsIDJuZCwgM3JkLCA0dGhcbiAgICAgIGNhc2UgJ3FvJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIocXVhcnRlciwge1xuICAgICAgICAgIHVuaXQ6ICdxdWFydGVyJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFExLCBRMiwgUTMsIFE0XG4gICAgICBjYXNlICdxcXEnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUucXVhcnRlcihxdWFydGVyLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgICAgLy8gMSwgMiwgMywgNCAobmFycm93IHF1YXJ0ZXI7IGNvdWxkIGJlIG5vdCBudW1lcmljYWwpXG4gICAgICBjYXNlICdxcXFxcSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5xdWFydGVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgICAgLy8gMXN0IHF1YXJ0ZXIsIDJuZCBxdWFydGVyLCAuLi5cbiAgICAgIGNhc2UgJ3FxcXEnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLnF1YXJ0ZXIocXVhcnRlciwge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gTW9udGhcbiAgTTogZnVuY3Rpb24gTShkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgbW9udGggPSBkYXRlLmdldFVUQ01vbnRoKCk7XG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgY2FzZSAnTSc6XG4gICAgICBjYXNlICdNTSc6XG4gICAgICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMuTShkYXRlLCB0b2tlbik7XG4gICAgICAvLyAxc3QsIDJuZCwgLi4uLCAxMnRoXG4gICAgICBjYXNlICdNbyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKG1vbnRoICsgMSwge1xuICAgICAgICAgIHVuaXQ6ICdtb250aCdcbiAgICAgICAgfSk7XG4gICAgICAvLyBKYW4sIEZlYiwgLi4uLCBEZWNcbiAgICAgIGNhc2UgJ01NTSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5tb250aChtb250aCwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIEosIEYsIC4uLiwgRFxuICAgICAgY2FzZSAnTU1NTU0nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUubW9udGgobW9udGgsIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gSmFudWFyeSwgRmVicnVhcnksIC4uLiwgRGVjZW1iZXJcbiAgICAgIGNhc2UgJ01NTU0nOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm1vbnRoKG1vbnRoLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBTdGFuZC1hbG9uZSBtb250aFxuICBMOiBmdW5jdGlvbiBMKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBtb250aCA9IGRhdGUuZ2V0VVRDTW9udGgoKTtcbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyAxLCAyLCAuLi4sIDEyXG4gICAgICBjYXNlICdMJzpcbiAgICAgICAgcmV0dXJuIFN0cmluZyhtb250aCArIDEpO1xuICAgICAgLy8gMDEsIDAyLCAuLi4sIDEyXG4gICAgICBjYXNlICdMTCc6XG4gICAgICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MobW9udGggKyAxLCAyKTtcbiAgICAgIC8vIDFzdCwgMm5kLCAuLi4sIDEydGhcbiAgICAgIGNhc2UgJ0xvJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIobW9udGggKyAxLCB7XG4gICAgICAgICAgdW5pdDogJ21vbnRoJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIEphbiwgRmViLCAuLi4sIERlY1xuICAgICAgY2FzZSAnTExMJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm1vbnRoKG1vbnRoLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgICAgLy8gSiwgRiwgLi4uLCBEXG4gICAgICBjYXNlICdMTExMTCc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5tb250aChtb250aCwge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgICAvLyBKYW51YXJ5LCBGZWJydWFyeSwgLi4uLCBEZWNlbWJlclxuICAgICAgY2FzZSAnTExMTCc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUubW9udGgobW9udGgsIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIExvY2FsIHdlZWsgb2YgeWVhclxuICB3OiBmdW5jdGlvbiB3KGRhdGUsIHRva2VuLCBsb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciB3ZWVrID0gZ2V0VVRDV2VlayhkYXRlLCBvcHRpb25zKTtcbiAgICBpZiAodG9rZW4gPT09ICd3bycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKHdlZWssIHtcbiAgICAgICAgdW5pdDogJ3dlZWsnXG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh3ZWVrLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBJU08gd2VlayBvZiB5ZWFyXG4gIEk6IGZ1bmN0aW9uIEkoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGlzb1dlZWsgPSBnZXRVVENJU09XZWVrKGRhdGUpO1xuICAgIGlmICh0b2tlbiA9PT0gJ0lvJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoaXNvV2Vlaywge1xuICAgICAgICB1bml0OiAnd2VlaydcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGlzb1dlZWssIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIERheSBvZiB0aGUgbW9udGhcbiAgZDogZnVuY3Rpb24gZChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBpZiAodG9rZW4gPT09ICdkbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGRhdGUuZ2V0VVRDRGF0ZSgpLCB7XG4gICAgICAgIHVuaXQ6ICdkYXRlJ1xuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMuZChkYXRlLCB0b2tlbik7XG4gIH0sXG4gIC8vIERheSBvZiB5ZWFyXG4gIEQ6IGZ1bmN0aW9uIEQoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGRheU9mWWVhciA9IGdldFVUQ0RheU9mWWVhcihkYXRlKTtcbiAgICBpZiAodG9rZW4gPT09ICdEbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGRheU9mWWVhciwge1xuICAgICAgICB1bml0OiAnZGF5T2ZZZWFyJ1xuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZGF5T2ZZZWFyLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBEYXkgb2Ygd2Vla1xuICBFOiBmdW5jdGlvbiBFKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBkYXlPZldlZWsgPSBkYXRlLmdldFVUQ0RheSgpO1xuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIFR1ZVxuICAgICAgY2FzZSAnRSc6XG4gICAgICBjYXNlICdFRSc6XG4gICAgICBjYXNlICdFRUUnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFRcbiAgICAgIGNhc2UgJ0VFRUVFJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVcbiAgICAgIGNhc2UgJ0VFRUVFRSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICdzaG9ydCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVlc2RheVxuICAgICAgY2FzZSAnRUVFRSc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gTG9jYWwgZGF5IG9mIHdlZWtcbiAgZTogZnVuY3Rpb24gZShkYXRlLCB0b2tlbiwgbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgZGF5T2ZXZWVrID0gZGF0ZS5nZXRVVENEYXkoKTtcbiAgICB2YXIgbG9jYWxEYXlPZldlZWsgPSAoZGF5T2ZXZWVrIC0gb3B0aW9ucy53ZWVrU3RhcnRzT24gKyA4KSAlIDcgfHwgNztcbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBOdW1lcmljYWwgdmFsdWUgKE50aCBkYXkgb2Ygd2VlayB3aXRoIGN1cnJlbnQgbG9jYWxlIG9yIHdlZWtTdGFydHNPbilcbiAgICAgIGNhc2UgJ2UnOlxuICAgICAgICByZXR1cm4gU3RyaW5nKGxvY2FsRGF5T2ZXZWVrKTtcbiAgICAgIC8vIFBhZGRlZCBudW1lcmljYWwgdmFsdWVcbiAgICAgIGNhc2UgJ2VlJzpcbiAgICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhsb2NhbERheU9mV2VlaywgMik7XG4gICAgICAvLyAxc3QsIDJuZCwgLi4uLCA3dGhcbiAgICAgIGNhc2UgJ2VvJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIobG9jYWxEYXlPZldlZWssIHtcbiAgICAgICAgICB1bml0OiAnZGF5J1xuICAgICAgICB9KTtcbiAgICAgIGNhc2UgJ2VlZSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVFxuICAgICAgY2FzZSAnZWVlZWUnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdVxuICAgICAgY2FzZSAnZWVlZWVlJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ3Nob3J0JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdWVzZGF5XG4gICAgICBjYXNlICdlZWVlJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBTdGFuZC1hbG9uZSBsb2NhbCBkYXkgb2Ygd2Vla1xuICBjOiBmdW5jdGlvbiBjKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBkYXlPZldlZWsgPSBkYXRlLmdldFVUQ0RheSgpO1xuICAgIHZhciBsb2NhbERheU9mV2VlayA9IChkYXlPZldlZWsgLSBvcHRpb25zLndlZWtTdGFydHNPbiArIDgpICUgNyB8fCA3O1xuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIE51bWVyaWNhbCB2YWx1ZSAoc2FtZSBhcyBpbiBgZWApXG4gICAgICBjYXNlICdjJzpcbiAgICAgICAgcmV0dXJuIFN0cmluZyhsb2NhbERheU9mV2Vlayk7XG4gICAgICAvLyBQYWRkZWQgbnVtZXJpY2FsIHZhbHVlXG4gICAgICBjYXNlICdjYyc6XG4gICAgICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MobG9jYWxEYXlPZldlZWssIHRva2VuLmxlbmd0aCk7XG4gICAgICAvLyAxc3QsIDJuZCwgLi4uLCA3dGhcbiAgICAgIGNhc2UgJ2NvJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIobG9jYWxEYXlPZldlZWssIHtcbiAgICAgICAgICB1bml0OiAnZGF5J1xuICAgICAgICB9KTtcbiAgICAgIGNhc2UgJ2NjYyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVFxuICAgICAgY2FzZSAnY2NjY2MnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdVxuICAgICAgY2FzZSAnY2NjY2NjJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ3Nob3J0JyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdWVzZGF5XG4gICAgICBjYXNlICdjY2NjJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBJU08gZGF5IG9mIHdlZWtcbiAgaTogZnVuY3Rpb24gaShkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgZGF5T2ZXZWVrID0gZGF0ZS5nZXRVVENEYXkoKTtcbiAgICB2YXIgaXNvRGF5T2ZXZWVrID0gZGF5T2ZXZWVrID09PSAwID8gNyA6IGRheU9mV2VlaztcbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyAyXG4gICAgICBjYXNlICdpJzpcbiAgICAgICAgcmV0dXJuIFN0cmluZyhpc29EYXlPZldlZWspO1xuICAgICAgLy8gMDJcbiAgICAgIGNhc2UgJ2lpJzpcbiAgICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhpc29EYXlPZldlZWssIHRva2VuLmxlbmd0aCk7XG4gICAgICAvLyAybmRcbiAgICAgIGNhc2UgJ2lvJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoaXNvRGF5T2ZXZWVrLCB7XG4gICAgICAgICAgdW5pdDogJ2RheSdcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdWVcbiAgICAgIGNhc2UgJ2lpaSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVFxuICAgICAgY2FzZSAnaWlpaWknOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdVxuICAgICAgY2FzZSAnaWlpaWlpJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ3Nob3J0JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdWVzZGF5XG4gICAgICBjYXNlICdpaWlpJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBBTSBvciBQTVxuICBhOiBmdW5jdGlvbiBhKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBob3VycyA9IGRhdGUuZ2V0VVRDSG91cnMoKTtcbiAgICB2YXIgZGF5UGVyaW9kRW51bVZhbHVlID0gaG91cnMgLyAxMiA+PSAxID8gJ3BtJyA6ICdhbSc7XG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgY2FzZSAnYSc6XG4gICAgICBjYXNlICdhYSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgY2FzZSAnYWFhJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSkudG9Mb3dlckNhc2UoKTtcbiAgICAgIGNhc2UgJ2FhYWFhJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgY2FzZSAnYWFhYSc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gQU0sIFBNLCBtaWRuaWdodCwgbm9vblxuICBiOiBmdW5jdGlvbiBiKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBob3VycyA9IGRhdGUuZ2V0VVRDSG91cnMoKTtcbiAgICB2YXIgZGF5UGVyaW9kRW51bVZhbHVlO1xuICAgIGlmIChob3VycyA9PT0gMTIpIHtcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGRheVBlcmlvZEVudW0ubm9vbjtcbiAgICB9IGVsc2UgaWYgKGhvdXJzID09PSAwKSB7XG4gICAgICBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXlQZXJpb2RFbnVtLm1pZG5pZ2h0O1xuICAgIH0gZWxzZSB7XG4gICAgICBkYXlQZXJpb2RFbnVtVmFsdWUgPSBob3VycyAvIDEyID49IDEgPyAncG0nIDogJ2FtJztcbiAgICB9XG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgY2FzZSAnYic6XG4gICAgICBjYXNlICdiYic6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgY2FzZSAnYmJiJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSkudG9Mb3dlckNhc2UoKTtcbiAgICAgIGNhc2UgJ2JiYmJiJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgY2FzZSAnYmJiYic6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gaW4gdGhlIG1vcm5pbmcsIGluIHRoZSBhZnRlcm5vb24sIGluIHRoZSBldmVuaW5nLCBhdCBuaWdodFxuICBCOiBmdW5jdGlvbiBCKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBob3VycyA9IGRhdGUuZ2V0VVRDSG91cnMoKTtcbiAgICB2YXIgZGF5UGVyaW9kRW51bVZhbHVlO1xuICAgIGlmIChob3VycyA+PSAxNykge1xuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF5UGVyaW9kRW51bS5ldmVuaW5nO1xuICAgIH0gZWxzZSBpZiAoaG91cnMgPj0gMTIpIHtcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGRheVBlcmlvZEVudW0uYWZ0ZXJub29uO1xuICAgIH0gZWxzZSBpZiAoaG91cnMgPj0gNCkge1xuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF5UGVyaW9kRW51bS5tb3JuaW5nO1xuICAgIH0gZWxzZSB7XG4gICAgICBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXlQZXJpb2RFbnVtLm5pZ2h0O1xuICAgIH1cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICBjYXNlICdCJzpcbiAgICAgIGNhc2UgJ0JCJzpcbiAgICAgIGNhc2UgJ0JCQic6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgY2FzZSAnQkJCQkInOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICBjYXNlICdCQkJCJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBIb3VyIFsxLTEyXVxuICBoOiBmdW5jdGlvbiBoKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGlmICh0b2tlbiA9PT0gJ2hvJykge1xuICAgICAgdmFyIGhvdXJzID0gZGF0ZS5nZXRVVENIb3VycygpICUgMTI7XG4gICAgICBpZiAoaG91cnMgPT09IDApIGhvdXJzID0gMTI7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihob3Vycywge1xuICAgICAgICB1bml0OiAnaG91cidcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLmgoZGF0ZSwgdG9rZW4pO1xuICB9LFxuICAvLyBIb3VyIFswLTIzXVxuICBIOiBmdW5jdGlvbiBIKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGlmICh0b2tlbiA9PT0gJ0hvJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoZGF0ZS5nZXRVVENIb3VycygpLCB7XG4gICAgICAgIHVuaXQ6ICdob3VyJ1xuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMuSChkYXRlLCB0b2tlbik7XG4gIH0sXG4gIC8vIEhvdXIgWzAtMTFdXG4gIEs6IGZ1bmN0aW9uIEsoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGhvdXJzID0gZGF0ZS5nZXRVVENIb3VycygpICUgMTI7XG4gICAgaWYgKHRva2VuID09PSAnS28nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihob3Vycywge1xuICAgICAgICB1bml0OiAnaG91cidcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGhvdXJzLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBIb3VyIFsxLTI0XVxuICBrOiBmdW5jdGlvbiBrKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBob3VycyA9IGRhdGUuZ2V0VVRDSG91cnMoKTtcbiAgICBpZiAoaG91cnMgPT09IDApIGhvdXJzID0gMjQ7XG4gICAgaWYgKHRva2VuID09PSAna28nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihob3Vycywge1xuICAgICAgICB1bml0OiAnaG91cidcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGhvdXJzLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBNaW51dGVcbiAgbTogZnVuY3Rpb24gbShkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBpZiAodG9rZW4gPT09ICdtbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGRhdGUuZ2V0VVRDTWludXRlcygpLCB7XG4gICAgICAgIHVuaXQ6ICdtaW51dGUnXG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy5tKGRhdGUsIHRva2VuKTtcbiAgfSxcbiAgLy8gU2Vjb25kXG4gIHM6IGZ1bmN0aW9uIHMoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgaWYgKHRva2VuID09PSAnc28nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihkYXRlLmdldFVUQ1NlY29uZHMoKSwge1xuICAgICAgICB1bml0OiAnc2Vjb25kJ1xuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMucyhkYXRlLCB0b2tlbik7XG4gIH0sXG4gIC8vIEZyYWN0aW9uIG9mIHNlY29uZFxuICBTOiBmdW5jdGlvbiBTKGRhdGUsIHRva2VuKSB7XG4gICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy5TKGRhdGUsIHRva2VuKTtcbiAgfSxcbiAgLy8gVGltZXpvbmUgKElTTy04NjAxLiBJZiBvZmZzZXQgaXMgMCwgb3V0cHV0IGlzIGFsd2F5cyBgJ1onYClcbiAgWDogZnVuY3Rpb24gWChkYXRlLCB0b2tlbiwgX2xvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIG9yaWdpbmFsRGF0ZSA9IG9wdGlvbnMuX29yaWdpbmFsRGF0ZSB8fCBkYXRlO1xuICAgIHZhciB0aW1lem9uZU9mZnNldCA9IG9yaWdpbmFsRGF0ZS5nZXRUaW1lem9uZU9mZnNldCgpO1xuICAgIGlmICh0aW1lem9uZU9mZnNldCA9PT0gMCkge1xuICAgICAgcmV0dXJuICdaJztcbiAgICB9XG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gSG91cnMgYW5kIG9wdGlvbmFsIG1pbnV0ZXNcbiAgICAgIGNhc2UgJ1gnOlxuICAgICAgICByZXR1cm4gZm9ybWF0VGltZXpvbmVXaXRoT3B0aW9uYWxNaW51dGVzKHRpbWV6b25lT2Zmc2V0KTtcblxuICAgICAgLy8gSG91cnMsIG1pbnV0ZXMgYW5kIG9wdGlvbmFsIHNlY29uZHMgd2l0aG91dCBgOmAgZGVsaW1pdGVyXG4gICAgICAvLyBOb3RlOiBuZWl0aGVyIElTTy04NjAxIG5vciBKYXZhU2NyaXB0IHN1cHBvcnRzIHNlY29uZHMgaW4gdGltZXpvbmUgb2Zmc2V0c1xuICAgICAgLy8gc28gdGhpcyB0b2tlbiBhbHdheXMgaGFzIHRoZSBzYW1lIG91dHB1dCBhcyBgWFhgXG4gICAgICBjYXNlICdYWFhYJzpcbiAgICAgIGNhc2UgJ1hYJzpcbiAgICAgICAgLy8gSG91cnMgYW5kIG1pbnV0ZXMgd2l0aG91dCBgOmAgZGVsaW1pdGVyXG4gICAgICAgIHJldHVybiBmb3JtYXRUaW1lem9uZSh0aW1lem9uZU9mZnNldCk7XG5cbiAgICAgIC8vIEhvdXJzLCBtaW51dGVzIGFuZCBvcHRpb25hbCBzZWNvbmRzIHdpdGggYDpgIGRlbGltaXRlclxuICAgICAgLy8gTm90ZTogbmVpdGhlciBJU08tODYwMSBub3IgSmF2YVNjcmlwdCBzdXBwb3J0cyBzZWNvbmRzIGluIHRpbWV6b25lIG9mZnNldHNcbiAgICAgIC8vIHNvIHRoaXMgdG9rZW4gYWx3YXlzIGhhcyB0aGUgc2FtZSBvdXRwdXQgYXMgYFhYWGBcbiAgICAgIGNhc2UgJ1hYWFhYJzpcbiAgICAgIGNhc2UgJ1hYWCc6IC8vIEhvdXJzIGFuZCBtaW51dGVzIHdpdGggYDpgIGRlbGltaXRlclxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGZvcm1hdFRpbWV6b25lKHRpbWV6b25lT2Zmc2V0LCAnOicpO1xuICAgIH1cbiAgfSxcbiAgLy8gVGltZXpvbmUgKElTTy04NjAxLiBJZiBvZmZzZXQgaXMgMCwgb3V0cHV0IGlzIGAnKzAwOjAwJ2Agb3IgZXF1aXZhbGVudClcbiAgeDogZnVuY3Rpb24geChkYXRlLCB0b2tlbiwgX2xvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIG9yaWdpbmFsRGF0ZSA9IG9wdGlvbnMuX29yaWdpbmFsRGF0ZSB8fCBkYXRlO1xuICAgIHZhciB0aW1lem9uZU9mZnNldCA9IG9yaWdpbmFsRGF0ZS5nZXRUaW1lem9uZU9mZnNldCgpO1xuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIEhvdXJzIGFuZCBvcHRpb25hbCBtaW51dGVzXG4gICAgICBjYXNlICd4JzpcbiAgICAgICAgcmV0dXJuIGZvcm1hdFRpbWV6b25lV2l0aE9wdGlvbmFsTWludXRlcyh0aW1lem9uZU9mZnNldCk7XG5cbiAgICAgIC8vIEhvdXJzLCBtaW51dGVzIGFuZCBvcHRpb25hbCBzZWNvbmRzIHdpdGhvdXQgYDpgIGRlbGltaXRlclxuICAgICAgLy8gTm90ZTogbmVpdGhlciBJU08tODYwMSBub3IgSmF2YVNjcmlwdCBzdXBwb3J0cyBzZWNvbmRzIGluIHRpbWV6b25lIG9mZnNldHNcbiAgICAgIC8vIHNvIHRoaXMgdG9rZW4gYWx3YXlzIGhhcyB0aGUgc2FtZSBvdXRwdXQgYXMgYHh4YFxuICAgICAgY2FzZSAneHh4eCc6XG4gICAgICBjYXNlICd4eCc6XG4gICAgICAgIC8vIEhvdXJzIGFuZCBtaW51dGVzIHdpdGhvdXQgYDpgIGRlbGltaXRlclxuICAgICAgICByZXR1cm4gZm9ybWF0VGltZXpvbmUodGltZXpvbmVPZmZzZXQpO1xuXG4gICAgICAvLyBIb3VycywgbWludXRlcyBhbmQgb3B0aW9uYWwgc2Vjb25kcyB3aXRoIGA6YCBkZWxpbWl0ZXJcbiAgICAgIC8vIE5vdGU6IG5laXRoZXIgSVNPLTg2MDEgbm9yIEphdmFTY3JpcHQgc3VwcG9ydHMgc2Vjb25kcyBpbiB0aW1lem9uZSBvZmZzZXRzXG4gICAgICAvLyBzbyB0aGlzIHRva2VuIGFsd2F5cyBoYXMgdGhlIHNhbWUgb3V0cHV0IGFzIGB4eHhgXG4gICAgICBjYXNlICd4eHh4eCc6XG4gICAgICBjYXNlICd4eHgnOiAvLyBIb3VycyBhbmQgbWludXRlcyB3aXRoIGA6YCBkZWxpbWl0ZXJcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBmb3JtYXRUaW1lem9uZSh0aW1lem9uZU9mZnNldCwgJzonKTtcbiAgICB9XG4gIH0sXG4gIC8vIFRpbWV6b25lIChHTVQpXG4gIE86IGZ1bmN0aW9uIE8oZGF0ZSwgdG9rZW4sIF9sb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBvcmlnaW5hbERhdGUgPSBvcHRpb25zLl9vcmlnaW5hbERhdGUgfHwgZGF0ZTtcbiAgICB2YXIgdGltZXpvbmVPZmZzZXQgPSBvcmlnaW5hbERhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKTtcbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBTaG9ydFxuICAgICAgY2FzZSAnTyc6XG4gICAgICBjYXNlICdPTyc6XG4gICAgICBjYXNlICdPT08nOlxuICAgICAgICByZXR1cm4gJ0dNVCcgKyBmb3JtYXRUaW1lem9uZVNob3J0KHRpbWV6b25lT2Zmc2V0LCAnOicpO1xuICAgICAgLy8gTG9uZ1xuICAgICAgY2FzZSAnT09PTyc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gJ0dNVCcgKyBmb3JtYXRUaW1lem9uZSh0aW1lem9uZU9mZnNldCwgJzonKTtcbiAgICB9XG4gIH0sXG4gIC8vIFRpbWV6b25lIChzcGVjaWZpYyBub24tbG9jYXRpb24pXG4gIHo6IGZ1bmN0aW9uIHooZGF0ZSwgdG9rZW4sIF9sb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBvcmlnaW5hbERhdGUgPSBvcHRpb25zLl9vcmlnaW5hbERhdGUgfHwgZGF0ZTtcbiAgICB2YXIgdGltZXpvbmVPZmZzZXQgPSBvcmlnaW5hbERhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKTtcbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBTaG9ydFxuICAgICAgY2FzZSAneic6XG4gICAgICBjYXNlICd6eic6XG4gICAgICBjYXNlICd6enonOlxuICAgICAgICByZXR1cm4gJ0dNVCcgKyBmb3JtYXRUaW1lem9uZVNob3J0KHRpbWV6b25lT2Zmc2V0LCAnOicpO1xuICAgICAgLy8gTG9uZ1xuICAgICAgY2FzZSAnenp6eic6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gJ0dNVCcgKyBmb3JtYXRUaW1lem9uZSh0aW1lem9uZU9mZnNldCwgJzonKTtcbiAgICB9XG4gIH0sXG4gIC8vIFNlY29uZHMgdGltZXN0YW1wXG4gIHQ6IGZ1bmN0aW9uIHQoZGF0ZSwgdG9rZW4sIF9sb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBvcmlnaW5hbERhdGUgPSBvcHRpb25zLl9vcmlnaW5hbERhdGUgfHwgZGF0ZTtcbiAgICB2YXIgdGltZXN0YW1wID0gTWF0aC5mbG9vcihvcmlnaW5hbERhdGUuZ2V0VGltZSgpIC8gMTAwMCk7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh0aW1lc3RhbXAsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIE1pbGxpc2Vjb25kcyB0aW1lc3RhbXBcbiAgVDogZnVuY3Rpb24gVChkYXRlLCB0b2tlbiwgX2xvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIG9yaWdpbmFsRGF0ZSA9IG9wdGlvbnMuX29yaWdpbmFsRGF0ZSB8fCBkYXRlO1xuICAgIHZhciB0aW1lc3RhbXAgPSBvcmlnaW5hbERhdGUuZ2V0VGltZSgpO1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3ModGltZXN0YW1wLCB0b2tlbi5sZW5ndGgpO1xuICB9XG59O1xuZnVuY3Rpb24gZm9ybWF0VGltZXpvbmVTaG9ydChvZmZzZXQsIGRpcnR5RGVsaW1pdGVyKSB7XG4gIHZhciBzaWduID0gb2Zmc2V0ID4gMCA/ICctJyA6ICcrJztcbiAgdmFyIGFic09mZnNldCA9IE1hdGguYWJzKG9mZnNldCk7XG4gIHZhciBob3VycyA9IE1hdGguZmxvb3IoYWJzT2Zmc2V0IC8gNjApO1xuICB2YXIgbWludXRlcyA9IGFic09mZnNldCAlIDYwO1xuICBpZiAobWludXRlcyA9PT0gMCkge1xuICAgIHJldHVybiBzaWduICsgU3RyaW5nKGhvdXJzKTtcbiAgfVxuICB2YXIgZGVsaW1pdGVyID0gZGlydHlEZWxpbWl0ZXIgfHwgJyc7XG4gIHJldHVybiBzaWduICsgU3RyaW5nKGhvdXJzKSArIGRlbGltaXRlciArIGFkZExlYWRpbmdaZXJvcyhtaW51dGVzLCAyKTtcbn1cbmZ1bmN0aW9uIGZvcm1hdFRpbWV6b25lV2l0aE9wdGlvbmFsTWludXRlcyhvZmZzZXQsIGRpcnR5RGVsaW1pdGVyKSB7XG4gIGlmIChvZmZzZXQgJSA2MCA9PT0gMCkge1xuICAgIHZhciBzaWduID0gb2Zmc2V0ID4gMCA/ICctJyA6ICcrJztcbiAgICByZXR1cm4gc2lnbiArIGFkZExlYWRpbmdaZXJvcyhNYXRoLmFicyhvZmZzZXQpIC8gNjAsIDIpO1xuICB9XG4gIHJldHVybiBmb3JtYXRUaW1lem9uZShvZmZzZXQsIGRpcnR5RGVsaW1pdGVyKTtcbn1cbmZ1bmN0aW9uIGZvcm1hdFRpbWV6b25lKG9mZnNldCwgZGlydHlEZWxpbWl0ZXIpIHtcbiAgdmFyIGRlbGltaXRlciA9IGRpcnR5RGVsaW1pdGVyIHx8ICcnO1xuICB2YXIgc2lnbiA9IG9mZnNldCA+IDAgPyAnLScgOiAnKyc7XG4gIHZhciBhYnNPZmZzZXQgPSBNYXRoLmFicyhvZmZzZXQpO1xuICB2YXIgaG91cnMgPSBhZGRMZWFkaW5nWmVyb3MoTWF0aC5mbG9vcihhYnNPZmZzZXQgLyA2MCksIDIpO1xuICB2YXIgbWludXRlcyA9IGFkZExlYWRpbmdaZXJvcyhhYnNPZmZzZXQgJSA2MCwgMik7XG4gIHJldHVybiBzaWduICsgaG91cnMgKyBkZWxpbWl0ZXIgKyBtaW51dGVzO1xufVxuZXhwb3J0IGRlZmF1bHQgZm9ybWF0dGVyczsiLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi8uLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCBzdGFydE9mVVRDV2VlayBmcm9tIFwiLi4vc3RhcnRPZlVUQ1dlZWsvaW5kZXguanNcIjtcbmltcG9ydCBzdGFydE9mVVRDV2Vla1llYXIgZnJvbSBcIi4uL3N0YXJ0T2ZVVENXZWVrWWVhci9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG52YXIgTUlMTElTRUNPTkRTX0lOX1dFRUsgPSA2MDQ4MDAwMDA7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRVVENXZWVrKGRpcnR5RGF0ZSwgb3B0aW9ucykge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIGRpZmYgPSBzdGFydE9mVVRDV2VlayhkYXRlLCBvcHRpb25zKS5nZXRUaW1lKCkgLSBzdGFydE9mVVRDV2Vla1llYXIoZGF0ZSwgb3B0aW9ucykuZ2V0VGltZSgpO1xuXG4gIC8vIFJvdW5kIHRoZSBudW1iZXIgb2YgZGF5cyB0byB0aGUgbmVhcmVzdCBpbnRlZ2VyXG4gIC8vIGJlY2F1c2UgdGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgaW4gYSB3ZWVrIGlzIG5vdCBjb25zdGFudFxuICAvLyAoZS5nLiBpdCdzIGRpZmZlcmVudCBpbiB0aGUgd2VlayBvZiB0aGUgZGF5bGlnaHQgc2F2aW5nIHRpbWUgY2xvY2sgc2hpZnQpXG4gIHJldHVybiBNYXRoLnJvdW5kKGRpZmYgLyBNSUxMSVNFQ09ORFNfSU5fV0VFSykgKyAxO1xufSIsImltcG9ydCBnZXRVVENXZWVrWWVhciBmcm9tIFwiLi4vZ2V0VVRDV2Vla1llYXIvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuaW1wb3J0IHN0YXJ0T2ZVVENXZWVrIGZyb20gXCIuLi9zdGFydE9mVVRDV2Vlay9pbmRleC5qc1wiO1xuaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG5pbXBvcnQgeyBnZXREZWZhdWx0T3B0aW9ucyB9IGZyb20gXCIuLi9kZWZhdWx0T3B0aW9ucy9pbmRleC5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhcnRPZlVUQ1dlZWtZZWFyKGRpcnR5RGF0ZSwgb3B0aW9ucykge1xuICB2YXIgX3JlZiwgX3JlZjIsIF9yZWYzLCBfb3B0aW9ucyRmaXJzdFdlZWtDb24sIF9vcHRpb25zJGxvY2FsZSwgX29wdGlvbnMkbG9jYWxlJG9wdGlvLCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwsIF9kZWZhdWx0T3B0aW9ucyRsb2NhbDI7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGVmYXVsdE9wdGlvbnMgPSBnZXREZWZhdWx0T3B0aW9ucygpO1xuICB2YXIgZmlyc3RXZWVrQ29udGFpbnNEYXRlID0gdG9JbnRlZ2VyKChfcmVmID0gKF9yZWYyID0gKF9yZWYzID0gKF9vcHRpb25zJGZpcnN0V2Vla0NvbiA9IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGUpICE9PSBudWxsICYmIF9vcHRpb25zJGZpcnN0V2Vla0NvbiAhPT0gdm9pZCAwID8gX29wdGlvbnMkZmlyc3RXZWVrQ29uIDogb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX29wdGlvbnMkbG9jYWxlID0gb3B0aW9ucy5sb2NhbGUpID09PSBudWxsIHx8IF9vcHRpb25zJGxvY2FsZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9vcHRpb25zJGxvY2FsZSRvcHRpbyA9IF9vcHRpb25zJGxvY2FsZS5vcHRpb25zKSA9PT0gbnVsbCB8fCBfb3B0aW9ucyRsb2NhbGUkb3B0aW8gPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9vcHRpb25zJGxvY2FsZSRvcHRpby5maXJzdFdlZWtDb250YWluc0RhdGUpICE9PSBudWxsICYmIF9yZWYzICE9PSB2b2lkIDAgPyBfcmVmMyA6IGRlZmF1bHRPcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSkgIT09IG51bGwgJiYgX3JlZjIgIT09IHZvaWQgMCA/IF9yZWYyIDogKF9kZWZhdWx0T3B0aW9ucyRsb2NhbCA9IGRlZmF1bHRPcHRpb25zLmxvY2FsZSkgPT09IG51bGwgfHwgX2RlZmF1bHRPcHRpb25zJGxvY2FsID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX2RlZmF1bHRPcHRpb25zJGxvY2FsMiA9IF9kZWZhdWx0T3B0aW9ucyRsb2NhbC5vcHRpb25zKSA9PT0gbnVsbCB8fCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSkgIT09IG51bGwgJiYgX3JlZiAhPT0gdm9pZCAwID8gX3JlZiA6IDEpO1xuICB2YXIgeWVhciA9IGdldFVUQ1dlZWtZZWFyKGRpcnR5RGF0ZSwgb3B0aW9ucyk7XG4gIHZhciBmaXJzdFdlZWsgPSBuZXcgRGF0ZSgwKTtcbiAgZmlyc3RXZWVrLnNldFVUQ0Z1bGxZZWFyKHllYXIsIDAsIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSk7XG4gIGZpcnN0V2Vlay5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgdmFyIGRhdGUgPSBzdGFydE9mVVRDV2VlayhmaXJzdFdlZWssIG9wdGlvbnMpO1xuICByZXR1cm4gZGF0ZTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi8uLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCBzdGFydE9mVVRDSVNPV2VlayBmcm9tIFwiLi4vc3RhcnRPZlVUQ0lTT1dlZWsvaW5kZXguanNcIjtcbmltcG9ydCBzdGFydE9mVVRDSVNPV2Vla1llYXIgZnJvbSBcIi4uL3N0YXJ0T2ZVVENJU09XZWVrWWVhci9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG52YXIgTUlMTElTRUNPTkRTX0lOX1dFRUsgPSA2MDQ4MDAwMDA7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRVVENJU09XZWVrKGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIGRpZmYgPSBzdGFydE9mVVRDSVNPV2VlayhkYXRlKS5nZXRUaW1lKCkgLSBzdGFydE9mVVRDSVNPV2Vla1llYXIoZGF0ZSkuZ2V0VGltZSgpO1xuXG4gIC8vIFJvdW5kIHRoZSBudW1iZXIgb2YgZGF5cyB0byB0aGUgbmVhcmVzdCBpbnRlZ2VyXG4gIC8vIGJlY2F1c2UgdGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgaW4gYSB3ZWVrIGlzIG5vdCBjb25zdGFudFxuICAvLyAoZS5nLiBpdCdzIGRpZmZlcmVudCBpbiB0aGUgd2VlayBvZiB0aGUgZGF5bGlnaHQgc2F2aW5nIHRpbWUgY2xvY2sgc2hpZnQpXG4gIHJldHVybiBNYXRoLnJvdW5kKGRpZmYgLyBNSUxMSVNFQ09ORFNfSU5fV0VFSykgKyAxO1xufSIsImltcG9ydCBnZXRVVENJU09XZWVrWWVhciBmcm9tIFwiLi4vZ2V0VVRDSVNPV2Vla1llYXIvaW5kZXguanNcIjtcbmltcG9ydCBzdGFydE9mVVRDSVNPV2VlayBmcm9tIFwiLi4vc3RhcnRPZlVUQ0lTT1dlZWsvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhcnRPZlVUQ0lTT1dlZWtZZWFyKGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIHllYXIgPSBnZXRVVENJU09XZWVrWWVhcihkaXJ0eURhdGUpO1xuICB2YXIgZm91cnRoT2ZKYW51YXJ5ID0gbmV3IERhdGUoMCk7XG4gIGZvdXJ0aE9mSmFudWFyeS5zZXRVVENGdWxsWWVhcih5ZWFyLCAwLCA0KTtcbiAgZm91cnRoT2ZKYW51YXJ5LnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICB2YXIgZGF0ZSA9IHN0YXJ0T2ZVVENJU09XZWVrKGZvdXJ0aE9mSmFudWFyeSk7XG4gIHJldHVybiBkYXRlO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uLy4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG52YXIgTUlMTElTRUNPTkRTX0lOX0RBWSA9IDg2NDAwMDAwO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0VVRDRGF5T2ZZZWFyKGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIHRpbWVzdGFtcCA9IGRhdGUuZ2V0VGltZSgpO1xuICBkYXRlLnNldFVUQ01vbnRoKDAsIDEpO1xuICBkYXRlLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICB2YXIgc3RhcnRPZlllYXJUaW1lc3RhbXAgPSBkYXRlLmdldFRpbWUoKTtcbiAgdmFyIGRpZmZlcmVuY2UgPSB0aW1lc3RhbXAgLSBzdGFydE9mWWVhclRpbWVzdGFtcDtcbiAgcmV0dXJuIE1hdGguZmxvb3IoZGlmZmVyZW5jZSAvIE1JTExJU0VDT05EU19JTl9EQVkpICsgMTtcbn0iLCJ2YXIgZGF0ZUxvbmdGb3JtYXR0ZXIgPSBmdW5jdGlvbiBkYXRlTG9uZ0Zvcm1hdHRlcihwYXR0ZXJuLCBmb3JtYXRMb25nKSB7XG4gIHN3aXRjaCAocGF0dGVybikge1xuICAgIGNhc2UgJ1AnOlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcuZGF0ZSh7XG4gICAgICAgIHdpZHRoOiAnc2hvcnQnXG4gICAgICB9KTtcbiAgICBjYXNlICdQUCc6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy5kYXRlKHtcbiAgICAgICAgd2lkdGg6ICdtZWRpdW0nXG4gICAgICB9KTtcbiAgICBjYXNlICdQUFAnOlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcuZGF0ZSh7XG4gICAgICAgIHdpZHRoOiAnbG9uZydcbiAgICAgIH0pO1xuICAgIGNhc2UgJ1BQUFAnOlxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy5kYXRlKHtcbiAgICAgICAgd2lkdGg6ICdmdWxsJ1xuICAgICAgfSk7XG4gIH1cbn07XG52YXIgdGltZUxvbmdGb3JtYXR0ZXIgPSBmdW5jdGlvbiB0aW1lTG9uZ0Zvcm1hdHRlcihwYXR0ZXJuLCBmb3JtYXRMb25nKSB7XG4gIHN3aXRjaCAocGF0dGVybikge1xuICAgIGNhc2UgJ3AnOlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcudGltZSh7XG4gICAgICAgIHdpZHRoOiAnc2hvcnQnXG4gICAgICB9KTtcbiAgICBjYXNlICdwcCc6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy50aW1lKHtcbiAgICAgICAgd2lkdGg6ICdtZWRpdW0nXG4gICAgICB9KTtcbiAgICBjYXNlICdwcHAnOlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcudGltZSh7XG4gICAgICAgIHdpZHRoOiAnbG9uZydcbiAgICAgIH0pO1xuICAgIGNhc2UgJ3BwcHAnOlxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy50aW1lKHtcbiAgICAgICAgd2lkdGg6ICdmdWxsJ1xuICAgICAgfSk7XG4gIH1cbn07XG52YXIgZGF0ZVRpbWVMb25nRm9ybWF0dGVyID0gZnVuY3Rpb24gZGF0ZVRpbWVMb25nRm9ybWF0dGVyKHBhdHRlcm4sIGZvcm1hdExvbmcpIHtcbiAgdmFyIG1hdGNoUmVzdWx0ID0gcGF0dGVybi5tYXRjaCgvKFArKShwKyk/LykgfHwgW107XG4gIHZhciBkYXRlUGF0dGVybiA9IG1hdGNoUmVzdWx0WzFdO1xuICB2YXIgdGltZVBhdHRlcm4gPSBtYXRjaFJlc3VsdFsyXTtcbiAgaWYgKCF0aW1lUGF0dGVybikge1xuICAgIHJldHVybiBkYXRlTG9uZ0Zvcm1hdHRlcihwYXR0ZXJuLCBmb3JtYXRMb25nKTtcbiAgfVxuICB2YXIgZGF0ZVRpbWVGb3JtYXQ7XG4gIHN3aXRjaCAoZGF0ZVBhdHRlcm4pIHtcbiAgICBjYXNlICdQJzpcbiAgICAgIGRhdGVUaW1lRm9ybWF0ID0gZm9ybWF0TG9uZy5kYXRlVGltZSh7XG4gICAgICAgIHdpZHRoOiAnc2hvcnQnXG4gICAgICB9KTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ1BQJzpcbiAgICAgIGRhdGVUaW1lRm9ybWF0ID0gZm9ybWF0TG9uZy5kYXRlVGltZSh7XG4gICAgICAgIHdpZHRoOiAnbWVkaXVtJ1xuICAgICAgfSk7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdQUFAnOlxuICAgICAgZGF0ZVRpbWVGb3JtYXQgPSBmb3JtYXRMb25nLmRhdGVUaW1lKHtcbiAgICAgICAgd2lkdGg6ICdsb25nJ1xuICAgICAgfSk7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdQUFBQJzpcbiAgICBkZWZhdWx0OlxuICAgICAgZGF0ZVRpbWVGb3JtYXQgPSBmb3JtYXRMb25nLmRhdGVUaW1lKHtcbiAgICAgICAgd2lkdGg6ICdmdWxsJ1xuICAgICAgfSk7XG4gICAgICBicmVhaztcbiAgfVxuICByZXR1cm4gZGF0ZVRpbWVGb3JtYXQucmVwbGFjZSgne3tkYXRlfX0nLCBkYXRlTG9uZ0Zvcm1hdHRlcihkYXRlUGF0dGVybiwgZm9ybWF0TG9uZykpLnJlcGxhY2UoJ3t7dGltZX19JywgdGltZUxvbmdGb3JtYXR0ZXIodGltZVBhdHRlcm4sIGZvcm1hdExvbmcpKTtcbn07XG52YXIgbG9uZ0Zvcm1hdHRlcnMgPSB7XG4gIHA6IHRpbWVMb25nRm9ybWF0dGVyLFxuICBQOiBkYXRlVGltZUxvbmdGb3JtYXR0ZXJcbn07XG5leHBvcnQgZGVmYXVsdCBsb25nRm9ybWF0dGVyczsiLCJ2YXIgcHJvdGVjdGVkRGF5T2ZZZWFyVG9rZW5zID0gWydEJywgJ0REJ107XG52YXIgcHJvdGVjdGVkV2Vla1llYXJUb2tlbnMgPSBbJ1lZJywgJ1lZWVknXTtcbmV4cG9ydCBmdW5jdGlvbiBpc1Byb3RlY3RlZERheU9mWWVhclRva2VuKHRva2VuKSB7XG4gIHJldHVybiBwcm90ZWN0ZWREYXlPZlllYXJUb2tlbnMuaW5kZXhPZih0b2tlbikgIT09IC0xO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGlzUHJvdGVjdGVkV2Vla1llYXJUb2tlbih0b2tlbikge1xuICByZXR1cm4gcHJvdGVjdGVkV2Vla1llYXJUb2tlbnMuaW5kZXhPZih0b2tlbikgIT09IC0xO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHRocm93UHJvdGVjdGVkRXJyb3IodG9rZW4sIGZvcm1hdCwgaW5wdXQpIHtcbiAgaWYgKHRva2VuID09PSAnWVlZWScpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcihcIlVzZSBgeXl5eWAgaW5zdGVhZCBvZiBgWVlZWWAgKGluIGBcIi5jb25jYXQoZm9ybWF0LCBcImApIGZvciBmb3JtYXR0aW5nIHllYXJzIHRvIHRoZSBpbnB1dCBgXCIpLmNvbmNhdChpbnB1dCwgXCJgOyBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcIikpO1xuICB9IGVsc2UgaWYgKHRva2VuID09PSAnWVknKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJVc2UgYHl5YCBpbnN0ZWFkIG9mIGBZWWAgKGluIGBcIi5jb25jYXQoZm9ybWF0LCBcImApIGZvciBmb3JtYXR0aW5nIHllYXJzIHRvIHRoZSBpbnB1dCBgXCIpLmNvbmNhdChpbnB1dCwgXCJgOyBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcIikpO1xuICB9IGVsc2UgaWYgKHRva2VuID09PSAnRCcpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcihcIlVzZSBgZGAgaW5zdGVhZCBvZiBgRGAgKGluIGBcIi5jb25jYXQoZm9ybWF0LCBcImApIGZvciBmb3JtYXR0aW5nIGRheXMgb2YgdGhlIG1vbnRoIHRvIHRoZSBpbnB1dCBgXCIpLmNvbmNhdChpbnB1dCwgXCJgOyBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcIikpO1xuICB9IGVsc2UgaWYgKHRva2VuID09PSAnREQnKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJVc2UgYGRkYCBpbnN0ZWFkIG9mIGBERGAgKGluIGBcIi5jb25jYXQoZm9ybWF0LCBcImApIGZvciBmb3JtYXR0aW5nIGRheXMgb2YgdGhlIG1vbnRoIHRvIHRoZSBpbnB1dCBgXCIpLmNvbmNhdChpbnB1dCwgXCJgOyBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcIikpO1xuICB9XG59IiwidmFyIGZvcm1hdERpc3RhbmNlTG9jYWxlID0ge1xuICBsZXNzVGhhblhTZWNvbmRzOiB7XG4gICAgb25lOiAnbGVzcyB0aGFuIGEgc2Vjb25kJyxcbiAgICBvdGhlcjogJ2xlc3MgdGhhbiB7e2NvdW50fX0gc2Vjb25kcydcbiAgfSxcbiAgeFNlY29uZHM6IHtcbiAgICBvbmU6ICcxIHNlY29uZCcsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gc2Vjb25kcydcbiAgfSxcbiAgaGFsZkFNaW51dGU6ICdoYWxmIGEgbWludXRlJyxcbiAgbGVzc1RoYW5YTWludXRlczoge1xuICAgIG9uZTogJ2xlc3MgdGhhbiBhIG1pbnV0ZScsXG4gICAgb3RoZXI6ICdsZXNzIHRoYW4ge3tjb3VudH19IG1pbnV0ZXMnXG4gIH0sXG4gIHhNaW51dGVzOiB7XG4gICAgb25lOiAnMSBtaW51dGUnLFxuICAgIG90aGVyOiAne3tjb3VudH19IG1pbnV0ZXMnXG4gIH0sXG4gIGFib3V0WEhvdXJzOiB7XG4gICAgb25lOiAnYWJvdXQgMSBob3VyJyxcbiAgICBvdGhlcjogJ2Fib3V0IHt7Y291bnR9fSBob3VycydcbiAgfSxcbiAgeEhvdXJzOiB7XG4gICAgb25lOiAnMSBob3VyJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBob3VycydcbiAgfSxcbiAgeERheXM6IHtcbiAgICBvbmU6ICcxIGRheScsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gZGF5cydcbiAgfSxcbiAgYWJvdXRYV2Vla3M6IHtcbiAgICBvbmU6ICdhYm91dCAxIHdlZWsnLFxuICAgIG90aGVyOiAnYWJvdXQge3tjb3VudH19IHdlZWtzJ1xuICB9LFxuICB4V2Vla3M6IHtcbiAgICBvbmU6ICcxIHdlZWsnLFxuICAgIG90aGVyOiAne3tjb3VudH19IHdlZWtzJ1xuICB9LFxuICBhYm91dFhNb250aHM6IHtcbiAgICBvbmU6ICdhYm91dCAxIG1vbnRoJyxcbiAgICBvdGhlcjogJ2Fib3V0IHt7Y291bnR9fSBtb250aHMnXG4gIH0sXG4gIHhNb250aHM6IHtcbiAgICBvbmU6ICcxIG1vbnRoJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBtb250aHMnXG4gIH0sXG4gIGFib3V0WFllYXJzOiB7XG4gICAgb25lOiAnYWJvdXQgMSB5ZWFyJyxcbiAgICBvdGhlcjogJ2Fib3V0IHt7Y291bnR9fSB5ZWFycydcbiAgfSxcbiAgeFllYXJzOiB7XG4gICAgb25lOiAnMSB5ZWFyJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSB5ZWFycydcbiAgfSxcbiAgb3ZlclhZZWFyczoge1xuICAgIG9uZTogJ292ZXIgMSB5ZWFyJyxcbiAgICBvdGhlcjogJ292ZXIge3tjb3VudH19IHllYXJzJ1xuICB9LFxuICBhbG1vc3RYWWVhcnM6IHtcbiAgICBvbmU6ICdhbG1vc3QgMSB5ZWFyJyxcbiAgICBvdGhlcjogJ2FsbW9zdCB7e2NvdW50fX0geWVhcnMnXG4gIH1cbn07XG52YXIgZm9ybWF0RGlzdGFuY2UgPSBmdW5jdGlvbiBmb3JtYXREaXN0YW5jZSh0b2tlbiwgY291bnQsIG9wdGlvbnMpIHtcbiAgdmFyIHJlc3VsdDtcbiAgdmFyIHRva2VuVmFsdWUgPSBmb3JtYXREaXN0YW5jZUxvY2FsZVt0b2tlbl07XG4gIGlmICh0eXBlb2YgdG9rZW5WYWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICByZXN1bHQgPSB0b2tlblZhbHVlO1xuICB9IGVsc2UgaWYgKGNvdW50ID09PSAxKSB7XG4gICAgcmVzdWx0ID0gdG9rZW5WYWx1ZS5vbmU7XG4gIH0gZWxzZSB7XG4gICAgcmVzdWx0ID0gdG9rZW5WYWx1ZS5vdGhlci5yZXBsYWNlKCd7e2NvdW50fX0nLCBjb3VudC50b1N0cmluZygpKTtcbiAgfVxuICBpZiAob3B0aW9ucyAhPT0gbnVsbCAmJiBvcHRpb25zICE9PSB2b2lkIDAgJiYgb3B0aW9ucy5hZGRTdWZmaXgpIHtcbiAgICBpZiAob3B0aW9ucy5jb21wYXJpc29uICYmIG9wdGlvbnMuY29tcGFyaXNvbiA+IDApIHtcbiAgICAgIHJldHVybiAnaW4gJyArIHJlc3VsdDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHJlc3VsdCArICcgYWdvJztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5leHBvcnQgZGVmYXVsdCBmb3JtYXREaXN0YW5jZTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBidWlsZEZvcm1hdExvbmdGbihhcmdzKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xuICAgIC8vIFRPRE86IFJlbW92ZSBTdHJpbmcoKVxuICAgIHZhciB3aWR0aCA9IG9wdGlvbnMud2lkdGggPyBTdHJpbmcob3B0aW9ucy53aWR0aCkgOiBhcmdzLmRlZmF1bHRXaWR0aDtcbiAgICB2YXIgZm9ybWF0ID0gYXJncy5mb3JtYXRzW3dpZHRoXSB8fCBhcmdzLmZvcm1hdHNbYXJncy5kZWZhdWx0V2lkdGhdO1xuICAgIHJldHVybiBmb3JtYXQ7XG4gIH07XG59IiwiaW1wb3J0IGJ1aWxkRm9ybWF0TG9uZ0ZuIGZyb20gXCIuLi8uLi8uLi9fbGliL2J1aWxkRm9ybWF0TG9uZ0ZuL2luZGV4LmpzXCI7XG52YXIgZGF0ZUZvcm1hdHMgPSB7XG4gIGZ1bGw6ICdFRUVFLCBNTU1NIGRvLCB5JyxcbiAgbG9uZzogJ01NTU0gZG8sIHknLFxuICBtZWRpdW06ICdNTU0gZCwgeScsXG4gIHNob3J0OiAnTU0vZGQveXl5eSdcbn07XG52YXIgdGltZUZvcm1hdHMgPSB7XG4gIGZ1bGw6ICdoOm1tOnNzIGEgenp6eicsXG4gIGxvbmc6ICdoOm1tOnNzIGEgeicsXG4gIG1lZGl1bTogJ2g6bW06c3MgYScsXG4gIHNob3J0OiAnaDptbSBhJ1xufTtcbnZhciBkYXRlVGltZUZvcm1hdHMgPSB7XG4gIGZ1bGw6IFwie3tkYXRlfX0gJ2F0JyB7e3RpbWV9fVwiLFxuICBsb25nOiBcInt7ZGF0ZX19ICdhdCcge3t0aW1lfX1cIixcbiAgbWVkaXVtOiAne3tkYXRlfX0sIHt7dGltZX19JyxcbiAgc2hvcnQ6ICd7e2RhdGV9fSwge3t0aW1lfX0nXG59O1xudmFyIGZvcm1hdExvbmcgPSB7XG4gIGRhdGU6IGJ1aWxkRm9ybWF0TG9uZ0ZuKHtcbiAgICBmb3JtYXRzOiBkYXRlRm9ybWF0cyxcbiAgICBkZWZhdWx0V2lkdGg6ICdmdWxsJ1xuICB9KSxcbiAgdGltZTogYnVpbGRGb3JtYXRMb25nRm4oe1xuICAgIGZvcm1hdHM6IHRpbWVGb3JtYXRzLFxuICAgIGRlZmF1bHRXaWR0aDogJ2Z1bGwnXG4gIH0pLFxuICBkYXRlVGltZTogYnVpbGRGb3JtYXRMb25nRm4oe1xuICAgIGZvcm1hdHM6IGRhdGVUaW1lRm9ybWF0cyxcbiAgICBkZWZhdWx0V2lkdGg6ICdmdWxsJ1xuICB9KVxufTtcbmV4cG9ydCBkZWZhdWx0IGZvcm1hdExvbmc7IiwidmFyIGZvcm1hdFJlbGF0aXZlTG9jYWxlID0ge1xuICBsYXN0V2VlazogXCInbGFzdCcgZWVlZSAnYXQnIHBcIixcbiAgeWVzdGVyZGF5OiBcIid5ZXN0ZXJkYXkgYXQnIHBcIixcbiAgdG9kYXk6IFwiJ3RvZGF5IGF0JyBwXCIsXG4gIHRvbW9ycm93OiBcIid0b21vcnJvdyBhdCcgcFwiLFxuICBuZXh0V2VlazogXCJlZWVlICdhdCcgcFwiLFxuICBvdGhlcjogJ1AnXG59O1xudmFyIGZvcm1hdFJlbGF0aXZlID0gZnVuY3Rpb24gZm9ybWF0UmVsYXRpdmUodG9rZW4sIF9kYXRlLCBfYmFzZURhdGUsIF9vcHRpb25zKSB7XG4gIHJldHVybiBmb3JtYXRSZWxhdGl2ZUxvY2FsZVt0b2tlbl07XG59O1xuZXhwb3J0IGRlZmF1bHQgZm9ybWF0UmVsYXRpdmU7IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYnVpbGRMb2NhbGl6ZUZuKGFyZ3MpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChkaXJ0eUluZGV4LCBvcHRpb25zKSB7XG4gICAgdmFyIGNvbnRleHQgPSBvcHRpb25zICE9PSBudWxsICYmIG9wdGlvbnMgIT09IHZvaWQgMCAmJiBvcHRpb25zLmNvbnRleHQgPyBTdHJpbmcob3B0aW9ucy5jb250ZXh0KSA6ICdzdGFuZGFsb25lJztcbiAgICB2YXIgdmFsdWVzQXJyYXk7XG4gICAgaWYgKGNvbnRleHQgPT09ICdmb3JtYXR0aW5nJyAmJiBhcmdzLmZvcm1hdHRpbmdWYWx1ZXMpIHtcbiAgICAgIHZhciBkZWZhdWx0V2lkdGggPSBhcmdzLmRlZmF1bHRGb3JtYXR0aW5nV2lkdGggfHwgYXJncy5kZWZhdWx0V2lkdGg7XG4gICAgICB2YXIgd2lkdGggPSBvcHRpb25zICE9PSBudWxsICYmIG9wdGlvbnMgIT09IHZvaWQgMCAmJiBvcHRpb25zLndpZHRoID8gU3RyaW5nKG9wdGlvbnMud2lkdGgpIDogZGVmYXVsdFdpZHRoO1xuICAgICAgdmFsdWVzQXJyYXkgPSBhcmdzLmZvcm1hdHRpbmdWYWx1ZXNbd2lkdGhdIHx8IGFyZ3MuZm9ybWF0dGluZ1ZhbHVlc1tkZWZhdWx0V2lkdGhdO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgX2RlZmF1bHRXaWR0aCA9IGFyZ3MuZGVmYXVsdFdpZHRoO1xuICAgICAgdmFyIF93aWR0aCA9IG9wdGlvbnMgIT09IG51bGwgJiYgb3B0aW9ucyAhPT0gdm9pZCAwICYmIG9wdGlvbnMud2lkdGggPyBTdHJpbmcob3B0aW9ucy53aWR0aCkgOiBhcmdzLmRlZmF1bHRXaWR0aDtcbiAgICAgIHZhbHVlc0FycmF5ID0gYXJncy52YWx1ZXNbX3dpZHRoXSB8fCBhcmdzLnZhbHVlc1tfZGVmYXVsdFdpZHRoXTtcbiAgICB9XG4gICAgdmFyIGluZGV4ID0gYXJncy5hcmd1bWVudENhbGxiYWNrID8gYXJncy5hcmd1bWVudENhbGxiYWNrKGRpcnR5SW5kZXgpIDogZGlydHlJbmRleDtcbiAgICAvLyBAdHMtaWdub3JlOiBGb3Igc29tZSByZWFzb24gVHlwZVNjcmlwdCBqdXN0IGRvbid0IHdhbnQgdG8gbWF0Y2ggaXQsIG5vIG1hdHRlciBob3cgaGFyZCB3ZSB0cnkuIEkgY2hhbGxlbmdlIHlvdSB0byB0cnkgdG8gcmVtb3ZlIGl0IVxuICAgIHJldHVybiB2YWx1ZXNBcnJheVtpbmRleF07XG4gIH07XG59IiwiaW1wb3J0IGJ1aWxkTG9jYWxpemVGbiBmcm9tIFwiLi4vLi4vLi4vX2xpYi9idWlsZExvY2FsaXplRm4vaW5kZXguanNcIjtcbnZhciBlcmFWYWx1ZXMgPSB7XG4gIG5hcnJvdzogWydCJywgJ0EnXSxcbiAgYWJicmV2aWF0ZWQ6IFsnQkMnLCAnQUQnXSxcbiAgd2lkZTogWydCZWZvcmUgQ2hyaXN0JywgJ0Fubm8gRG9taW5pJ11cbn07XG52YXIgcXVhcnRlclZhbHVlcyA9IHtcbiAgbmFycm93OiBbJzEnLCAnMicsICczJywgJzQnXSxcbiAgYWJicmV2aWF0ZWQ6IFsnUTEnLCAnUTInLCAnUTMnLCAnUTQnXSxcbiAgd2lkZTogWycxc3QgcXVhcnRlcicsICcybmQgcXVhcnRlcicsICczcmQgcXVhcnRlcicsICc0dGggcXVhcnRlciddXG59O1xuXG4vLyBOb3RlOiBpbiBFbmdsaXNoLCB0aGUgbmFtZXMgb2YgZGF5cyBvZiB0aGUgd2VlayBhbmQgbW9udGhzIGFyZSBjYXBpdGFsaXplZC5cbi8vIElmIHlvdSBhcmUgbWFraW5nIGEgbmV3IGxvY2FsZSBiYXNlZCBvbiB0aGlzIG9uZSwgY2hlY2sgaWYgdGhlIHNhbWUgaXMgdHJ1ZSBmb3IgdGhlIGxhbmd1YWdlIHlvdSdyZSB3b3JraW5nIG9uLlxuLy8gR2VuZXJhbGx5LCBmb3JtYXR0ZWQgZGF0ZXMgc2hvdWxkIGxvb2sgbGlrZSB0aGV5IGFyZSBpbiB0aGUgbWlkZGxlIG9mIGEgc2VudGVuY2UsXG4vLyBlLmcuIGluIFNwYW5pc2ggbGFuZ3VhZ2UgdGhlIHdlZWtkYXlzIGFuZCBtb250aHMgc2hvdWxkIGJlIGluIHRoZSBsb3dlcmNhc2UuXG52YXIgbW9udGhWYWx1ZXMgPSB7XG4gIG5hcnJvdzogWydKJywgJ0YnLCAnTScsICdBJywgJ00nLCAnSicsICdKJywgJ0EnLCAnUycsICdPJywgJ04nLCAnRCddLFxuICBhYmJyZXZpYXRlZDogWydKYW4nLCAnRmViJywgJ01hcicsICdBcHInLCAnTWF5JywgJ0p1bicsICdKdWwnLCAnQXVnJywgJ1NlcCcsICdPY3QnLCAnTm92JywgJ0RlYyddLFxuICB3aWRlOiBbJ0phbnVhcnknLCAnRmVicnVhcnknLCAnTWFyY2gnLCAnQXByaWwnLCAnTWF5JywgJ0p1bmUnLCAnSnVseScsICdBdWd1c3QnLCAnU2VwdGVtYmVyJywgJ09jdG9iZXInLCAnTm92ZW1iZXInLCAnRGVjZW1iZXInXVxufTtcbnZhciBkYXlWYWx1ZXMgPSB7XG4gIG5hcnJvdzogWydTJywgJ00nLCAnVCcsICdXJywgJ1QnLCAnRicsICdTJ10sXG4gIHNob3J0OiBbJ1N1JywgJ01vJywgJ1R1JywgJ1dlJywgJ1RoJywgJ0ZyJywgJ1NhJ10sXG4gIGFiYnJldmlhdGVkOiBbJ1N1bicsICdNb24nLCAnVHVlJywgJ1dlZCcsICdUaHUnLCAnRnJpJywgJ1NhdCddLFxuICB3aWRlOiBbJ1N1bmRheScsICdNb25kYXknLCAnVHVlc2RheScsICdXZWRuZXNkYXknLCAnVGh1cnNkYXknLCAnRnJpZGF5JywgJ1NhdHVyZGF5J11cbn07XG52YXIgZGF5UGVyaW9kVmFsdWVzID0ge1xuICBuYXJyb3c6IHtcbiAgICBhbTogJ2EnLFxuICAgIHBtOiAncCcsXG4gICAgbWlkbmlnaHQ6ICdtaScsXG4gICAgbm9vbjogJ24nLFxuICAgIG1vcm5pbmc6ICdtb3JuaW5nJyxcbiAgICBhZnRlcm5vb246ICdhZnRlcm5vb24nLFxuICAgIGV2ZW5pbmc6ICdldmVuaW5nJyxcbiAgICBuaWdodDogJ25pZ2h0J1xuICB9LFxuICBhYmJyZXZpYXRlZDoge1xuICAgIGFtOiAnQU0nLFxuICAgIHBtOiAnUE0nLFxuICAgIG1pZG5pZ2h0OiAnbWlkbmlnaHQnLFxuICAgIG5vb246ICdub29uJyxcbiAgICBtb3JuaW5nOiAnbW9ybmluZycsXG4gICAgYWZ0ZXJub29uOiAnYWZ0ZXJub29uJyxcbiAgICBldmVuaW5nOiAnZXZlbmluZycsXG4gICAgbmlnaHQ6ICduaWdodCdcbiAgfSxcbiAgd2lkZToge1xuICAgIGFtOiAnYS5tLicsXG4gICAgcG06ICdwLm0uJyxcbiAgICBtaWRuaWdodDogJ21pZG5pZ2h0JyxcbiAgICBub29uOiAnbm9vbicsXG4gICAgbW9ybmluZzogJ21vcm5pbmcnLFxuICAgIGFmdGVybm9vbjogJ2FmdGVybm9vbicsXG4gICAgZXZlbmluZzogJ2V2ZW5pbmcnLFxuICAgIG5pZ2h0OiAnbmlnaHQnXG4gIH1cbn07XG52YXIgZm9ybWF0dGluZ0RheVBlcmlvZFZhbHVlcyA9IHtcbiAgbmFycm93OiB7XG4gICAgYW06ICdhJyxcbiAgICBwbTogJ3AnLFxuICAgIG1pZG5pZ2h0OiAnbWknLFxuICAgIG5vb246ICduJyxcbiAgICBtb3JuaW5nOiAnaW4gdGhlIG1vcm5pbmcnLFxuICAgIGFmdGVybm9vbjogJ2luIHRoZSBhZnRlcm5vb24nLFxuICAgIGV2ZW5pbmc6ICdpbiB0aGUgZXZlbmluZycsXG4gICAgbmlnaHQ6ICdhdCBuaWdodCdcbiAgfSxcbiAgYWJicmV2aWF0ZWQ6IHtcbiAgICBhbTogJ0FNJyxcbiAgICBwbTogJ1BNJyxcbiAgICBtaWRuaWdodDogJ21pZG5pZ2h0JyxcbiAgICBub29uOiAnbm9vbicsXG4gICAgbW9ybmluZzogJ2luIHRoZSBtb3JuaW5nJyxcbiAgICBhZnRlcm5vb246ICdpbiB0aGUgYWZ0ZXJub29uJyxcbiAgICBldmVuaW5nOiAnaW4gdGhlIGV2ZW5pbmcnLFxuICAgIG5pZ2h0OiAnYXQgbmlnaHQnXG4gIH0sXG4gIHdpZGU6IHtcbiAgICBhbTogJ2EubS4nLFxuICAgIHBtOiAncC5tLicsXG4gICAgbWlkbmlnaHQ6ICdtaWRuaWdodCcsXG4gICAgbm9vbjogJ25vb24nLFxuICAgIG1vcm5pbmc6ICdpbiB0aGUgbW9ybmluZycsXG4gICAgYWZ0ZXJub29uOiAnaW4gdGhlIGFmdGVybm9vbicsXG4gICAgZXZlbmluZzogJ2luIHRoZSBldmVuaW5nJyxcbiAgICBuaWdodDogJ2F0IG5pZ2h0J1xuICB9XG59O1xudmFyIG9yZGluYWxOdW1iZXIgPSBmdW5jdGlvbiBvcmRpbmFsTnVtYmVyKGRpcnR5TnVtYmVyLCBfb3B0aW9ucykge1xuICB2YXIgbnVtYmVyID0gTnVtYmVyKGRpcnR5TnVtYmVyKTtcblxuICAvLyBJZiBvcmRpbmFsIG51bWJlcnMgZGVwZW5kIG9uIGNvbnRleHQsIGZvciBleGFtcGxlLFxuICAvLyBpZiB0aGV5IGFyZSBkaWZmZXJlbnQgZm9yIGRpZmZlcmVudCBncmFtbWF0aWNhbCBnZW5kZXJzLFxuICAvLyB1c2UgYG9wdGlvbnMudW5pdGAuXG4gIC8vXG4gIC8vIGB1bml0YCBjYW4gYmUgJ3llYXInLCAncXVhcnRlcicsICdtb250aCcsICd3ZWVrJywgJ2RhdGUnLCAnZGF5T2ZZZWFyJyxcbiAgLy8gJ2RheScsICdob3VyJywgJ21pbnV0ZScsICdzZWNvbmQnLlxuXG4gIHZhciByZW0xMDAgPSBudW1iZXIgJSAxMDA7XG4gIGlmIChyZW0xMDAgPiAyMCB8fCByZW0xMDAgPCAxMCkge1xuICAgIHN3aXRjaCAocmVtMTAwICUgMTApIHtcbiAgICAgIGNhc2UgMTpcbiAgICAgICAgcmV0dXJuIG51bWJlciArICdzdCc7XG4gICAgICBjYXNlIDI6XG4gICAgICAgIHJldHVybiBudW1iZXIgKyAnbmQnO1xuICAgICAgY2FzZSAzOlxuICAgICAgICByZXR1cm4gbnVtYmVyICsgJ3JkJztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG51bWJlciArICd0aCc7XG59O1xudmFyIGxvY2FsaXplID0ge1xuICBvcmRpbmFsTnVtYmVyOiBvcmRpbmFsTnVtYmVyLFxuICBlcmE6IGJ1aWxkTG9jYWxpemVGbih7XG4gICAgdmFsdWVzOiBlcmFWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZSdcbiAgfSksXG4gIHF1YXJ0ZXI6IGJ1aWxkTG9jYWxpemVGbih7XG4gICAgdmFsdWVzOiBxdWFydGVyVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnLFxuICAgIGFyZ3VtZW50Q2FsbGJhY2s6IGZ1bmN0aW9uIGFyZ3VtZW50Q2FsbGJhY2socXVhcnRlcikge1xuICAgICAgcmV0dXJuIHF1YXJ0ZXIgLSAxO1xuICAgIH1cbiAgfSksXG4gIG1vbnRoOiBidWlsZExvY2FsaXplRm4oe1xuICAgIHZhbHVlczogbW9udGhWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZSdcbiAgfSksXG4gIGRheTogYnVpbGRMb2NhbGl6ZUZuKHtcbiAgICB2YWx1ZXM6IGRheVZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJ1xuICB9KSxcbiAgZGF5UGVyaW9kOiBidWlsZExvY2FsaXplRm4oe1xuICAgIHZhbHVlczogZGF5UGVyaW9kVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnLFxuICAgIGZvcm1hdHRpbmdWYWx1ZXM6IGZvcm1hdHRpbmdEYXlQZXJpb2RWYWx1ZXMsXG4gICAgZGVmYXVsdEZvcm1hdHRpbmdXaWR0aDogJ3dpZGUnXG4gIH0pXG59O1xuZXhwb3J0IGRlZmF1bHQgbG9jYWxpemU7IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYnVpbGRNYXRjaEZuKGFyZ3MpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChzdHJpbmcpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gICAgdmFyIHdpZHRoID0gb3B0aW9ucy53aWR0aDtcbiAgICB2YXIgbWF0Y2hQYXR0ZXJuID0gd2lkdGggJiYgYXJncy5tYXRjaFBhdHRlcm5zW3dpZHRoXSB8fCBhcmdzLm1hdGNoUGF0dGVybnNbYXJncy5kZWZhdWx0TWF0Y2hXaWR0aF07XG4gICAgdmFyIG1hdGNoUmVzdWx0ID0gc3RyaW5nLm1hdGNoKG1hdGNoUGF0dGVybik7XG4gICAgaWYgKCFtYXRjaFJlc3VsdCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHZhciBtYXRjaGVkU3RyaW5nID0gbWF0Y2hSZXN1bHRbMF07XG4gICAgdmFyIHBhcnNlUGF0dGVybnMgPSB3aWR0aCAmJiBhcmdzLnBhcnNlUGF0dGVybnNbd2lkdGhdIHx8IGFyZ3MucGFyc2VQYXR0ZXJuc1thcmdzLmRlZmF1bHRQYXJzZVdpZHRoXTtcbiAgICB2YXIga2V5ID0gQXJyYXkuaXNBcnJheShwYXJzZVBhdHRlcm5zKSA/IGZpbmRJbmRleChwYXJzZVBhdHRlcm5zLCBmdW5jdGlvbiAocGF0dGVybikge1xuICAgICAgcmV0dXJuIHBhdHRlcm4udGVzdChtYXRjaGVkU3RyaW5nKTtcbiAgICB9KSA6IGZpbmRLZXkocGFyc2VQYXR0ZXJucywgZnVuY3Rpb24gKHBhdHRlcm4pIHtcbiAgICAgIHJldHVybiBwYXR0ZXJuLnRlc3QobWF0Y2hlZFN0cmluZyk7XG4gICAgfSk7XG4gICAgdmFyIHZhbHVlO1xuICAgIHZhbHVlID0gYXJncy52YWx1ZUNhbGxiYWNrID8gYXJncy52YWx1ZUNhbGxiYWNrKGtleSkgOiBrZXk7XG4gICAgdmFsdWUgPSBvcHRpb25zLnZhbHVlQ2FsbGJhY2sgPyBvcHRpb25zLnZhbHVlQ2FsbGJhY2sodmFsdWUpIDogdmFsdWU7XG4gICAgdmFyIHJlc3QgPSBzdHJpbmcuc2xpY2UobWF0Y2hlZFN0cmluZy5sZW5ndGgpO1xuICAgIHJldHVybiB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICByZXN0OiByZXN0XG4gICAgfTtcbiAgfTtcbn1cbmZ1bmN0aW9uIGZpbmRLZXkob2JqZWN0LCBwcmVkaWNhdGUpIHtcbiAgZm9yICh2YXIga2V5IGluIG9iamVjdCkge1xuICAgIGlmIChvYmplY3QuaGFzT3duUHJvcGVydHkoa2V5KSAmJiBwcmVkaWNhdGUob2JqZWN0W2tleV0pKSB7XG4gICAgICByZXR1cm4ga2V5O1xuICAgIH1cbiAgfVxuICByZXR1cm4gdW5kZWZpbmVkO1xufVxuZnVuY3Rpb24gZmluZEluZGV4KGFycmF5LCBwcmVkaWNhdGUpIHtcbiAgZm9yICh2YXIga2V5ID0gMDsga2V5IDwgYXJyYXkubGVuZ3RoOyBrZXkrKykge1xuICAgIGlmIChwcmVkaWNhdGUoYXJyYXlba2V5XSkpIHtcbiAgICAgIHJldHVybiBrZXk7XG4gICAgfVxuICB9XG4gIHJldHVybiB1bmRlZmluZWQ7XG59IiwiaW1wb3J0IGJ1aWxkTWF0Y2hGbiBmcm9tIFwiLi4vLi4vLi4vX2xpYi9idWlsZE1hdGNoRm4vaW5kZXguanNcIjtcbmltcG9ydCBidWlsZE1hdGNoUGF0dGVybkZuIGZyb20gXCIuLi8uLi8uLi9fbGliL2J1aWxkTWF0Y2hQYXR0ZXJuRm4vaW5kZXguanNcIjtcbnZhciBtYXRjaE9yZGluYWxOdW1iZXJQYXR0ZXJuID0gL14oXFxkKykodGh8c3R8bmR8cmQpPy9pO1xudmFyIHBhcnNlT3JkaW5hbE51bWJlclBhdHRlcm4gPSAvXFxkKy9pO1xudmFyIG1hdGNoRXJhUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL14oYnxhKS9pLFxuICBhYmJyZXZpYXRlZDogL14oYlxcLj9cXHM/Y1xcLj98YlxcLj9cXHM/Y1xcLj9cXHM/ZVxcLj98YVxcLj9cXHM/ZFxcLj98Y1xcLj9cXHM/ZVxcLj8pL2ksXG4gIHdpZGU6IC9eKGJlZm9yZSBjaHJpc3R8YmVmb3JlIGNvbW1vbiBlcmF8YW5ubyBkb21pbml8Y29tbW9uIGVyYSkvaVxufTtcbnZhciBwYXJzZUVyYVBhdHRlcm5zID0ge1xuICBhbnk6IFsvXmIvaSwgL14oYXxjKS9pXVxufTtcbnZhciBtYXRjaFF1YXJ0ZXJQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXlsxMjM0XS9pLFxuICBhYmJyZXZpYXRlZDogL15xWzEyMzRdL2ksXG4gIHdpZGU6IC9eWzEyMzRdKHRofHN0fG5kfHJkKT8gcXVhcnRlci9pXG59O1xudmFyIHBhcnNlUXVhcnRlclBhdHRlcm5zID0ge1xuICBhbnk6IFsvMS9pLCAvMi9pLCAvMy9pLCAvNC9pXVxufTtcbnZhciBtYXRjaE1vbnRoUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL15bamZtYXNvbmRdL2ksXG4gIGFiYnJldmlhdGVkOiAvXihqYW58ZmVifG1hcnxhcHJ8bWF5fGp1bnxqdWx8YXVnfHNlcHxvY3R8bm92fGRlYykvaSxcbiAgd2lkZTogL14oamFudWFyeXxmZWJydWFyeXxtYXJjaHxhcHJpbHxtYXl8anVuZXxqdWx5fGF1Z3VzdHxzZXB0ZW1iZXJ8b2N0b2Jlcnxub3ZlbWJlcnxkZWNlbWJlcikvaVxufTtcbnZhciBwYXJzZU1vbnRoUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogWy9eai9pLCAvXmYvaSwgL15tL2ksIC9eYS9pLCAvXm0vaSwgL15qL2ksIC9eai9pLCAvXmEvaSwgL15zL2ksIC9eby9pLCAvXm4vaSwgL15kL2ldLFxuICBhbnk6IFsvXmphL2ksIC9eZi9pLCAvXm1hci9pLCAvXmFwL2ksIC9ebWF5L2ksIC9eanVuL2ksIC9eanVsL2ksIC9eYXUvaSwgL15zL2ksIC9eby9pLCAvXm4vaSwgL15kL2ldXG59O1xudmFyIG1hdGNoRGF5UGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL15bc210d2ZdL2ksXG4gIHNob3J0OiAvXihzdXxtb3x0dXx3ZXx0aHxmcnxzYSkvaSxcbiAgYWJicmV2aWF0ZWQ6IC9eKHN1bnxtb258dHVlfHdlZHx0aHV8ZnJpfHNhdCkvaSxcbiAgd2lkZTogL14oc3VuZGF5fG1vbmRheXx0dWVzZGF5fHdlZG5lc2RheXx0aHVyc2RheXxmcmlkYXl8c2F0dXJkYXkpL2lcbn07XG52YXIgcGFyc2VEYXlQYXR0ZXJucyA9IHtcbiAgbmFycm93OiBbL15zL2ksIC9ebS9pLCAvXnQvaSwgL153L2ksIC9edC9pLCAvXmYvaSwgL15zL2ldLFxuICBhbnk6IFsvXnN1L2ksIC9ebS9pLCAvXnR1L2ksIC9edy9pLCAvXnRoL2ksIC9eZi9pLCAvXnNhL2ldXG59O1xudmFyIG1hdGNoRGF5UGVyaW9kUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL14oYXxwfG1pfG58KGluIHRoZXxhdCkgKG1vcm5pbmd8YWZ0ZXJub29ufGV2ZW5pbmd8bmlnaHQpKS9pLFxuICBhbnk6IC9eKFthcF1cXC4/XFxzP21cXC4/fG1pZG5pZ2h0fG5vb258KGluIHRoZXxhdCkgKG1vcm5pbmd8YWZ0ZXJub29ufGV2ZW5pbmd8bmlnaHQpKS9pXG59O1xudmFyIHBhcnNlRGF5UGVyaW9kUGF0dGVybnMgPSB7XG4gIGFueToge1xuICAgIGFtOiAvXmEvaSxcbiAgICBwbTogL15wL2ksXG4gICAgbWlkbmlnaHQ6IC9ebWkvaSxcbiAgICBub29uOiAvXm5vL2ksXG4gICAgbW9ybmluZzogL21vcm5pbmcvaSxcbiAgICBhZnRlcm5vb246IC9hZnRlcm5vb24vaSxcbiAgICBldmVuaW5nOiAvZXZlbmluZy9pLFxuICAgIG5pZ2h0OiAvbmlnaHQvaVxuICB9XG59O1xudmFyIG1hdGNoID0ge1xuICBvcmRpbmFsTnVtYmVyOiBidWlsZE1hdGNoUGF0dGVybkZuKHtcbiAgICBtYXRjaFBhdHRlcm46IG1hdGNoT3JkaW5hbE51bWJlclBhdHRlcm4sXG4gICAgcGFyc2VQYXR0ZXJuOiBwYXJzZU9yZGluYWxOdW1iZXJQYXR0ZXJuLFxuICAgIHZhbHVlQ2FsbGJhY2s6IGZ1bmN0aW9uIHZhbHVlQ2FsbGJhY2sodmFsdWUpIHtcbiAgICAgIHJldHVybiBwYXJzZUludCh2YWx1ZSwgMTApO1xuICAgIH1cbiAgfSksXG4gIGVyYTogYnVpbGRNYXRjaEZuKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaEVyYVBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiAnd2lkZScsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VFcmFQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogJ2FueSdcbiAgfSksXG4gIHF1YXJ0ZXI6IGJ1aWxkTWF0Y2hGbih7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hRdWFydGVyUGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6ICd3aWRlJyxcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZVF1YXJ0ZXJQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogJ2FueScsXG4gICAgdmFsdWVDYWxsYmFjazogZnVuY3Rpb24gdmFsdWVDYWxsYmFjayhpbmRleCkge1xuICAgICAgcmV0dXJuIGluZGV4ICsgMTtcbiAgICB9XG4gIH0pLFxuICBtb250aDogYnVpbGRNYXRjaEZuKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaE1vbnRoUGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6ICd3aWRlJyxcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZU1vbnRoUGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6ICdhbnknXG4gIH0pLFxuICBkYXk6IGJ1aWxkTWF0Y2hGbih7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hEYXlQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogJ3dpZGUnLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlRGF5UGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6ICdhbnknXG4gIH0pLFxuICBkYXlQZXJpb2Q6IGJ1aWxkTWF0Y2hGbih7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hEYXlQZXJpb2RQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogJ2FueScsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VEYXlQZXJpb2RQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogJ2FueSdcbiAgfSlcbn07XG5leHBvcnQgZGVmYXVsdCBtYXRjaDsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBidWlsZE1hdGNoUGF0dGVybkZuKGFyZ3MpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChzdHJpbmcpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gICAgdmFyIG1hdGNoUmVzdWx0ID0gc3RyaW5nLm1hdGNoKGFyZ3MubWF0Y2hQYXR0ZXJuKTtcbiAgICBpZiAoIW1hdGNoUmVzdWx0KSByZXR1cm4gbnVsbDtcbiAgICB2YXIgbWF0Y2hlZFN0cmluZyA9IG1hdGNoUmVzdWx0WzBdO1xuICAgIHZhciBwYXJzZVJlc3VsdCA9IHN0cmluZy5tYXRjaChhcmdzLnBhcnNlUGF0dGVybik7XG4gICAgaWYgKCFwYXJzZVJlc3VsdCkgcmV0dXJuIG51bGw7XG4gICAgdmFyIHZhbHVlID0gYXJncy52YWx1ZUNhbGxiYWNrID8gYXJncy52YWx1ZUNhbGxiYWNrKHBhcnNlUmVzdWx0WzBdKSA6IHBhcnNlUmVzdWx0WzBdO1xuICAgIHZhbHVlID0gb3B0aW9ucy52YWx1ZUNhbGxiYWNrID8gb3B0aW9ucy52YWx1ZUNhbGxiYWNrKHZhbHVlKSA6IHZhbHVlO1xuICAgIHZhciByZXN0ID0gc3RyaW5nLnNsaWNlKG1hdGNoZWRTdHJpbmcubGVuZ3RoKTtcbiAgICByZXR1cm4ge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgcmVzdDogcmVzdFxuICAgIH07XG4gIH07XG59IiwiaW1wb3J0IGZvcm1hdERpc3RhbmNlIGZyb20gXCIuL19saWIvZm9ybWF0RGlzdGFuY2UvaW5kZXguanNcIjtcbmltcG9ydCBmb3JtYXRMb25nIGZyb20gXCIuL19saWIvZm9ybWF0TG9uZy9pbmRleC5qc1wiO1xuaW1wb3J0IGZvcm1hdFJlbGF0aXZlIGZyb20gXCIuL19saWIvZm9ybWF0UmVsYXRpdmUvaW5kZXguanNcIjtcbmltcG9ydCBsb2NhbGl6ZSBmcm9tIFwiLi9fbGliL2xvY2FsaXplL2luZGV4LmpzXCI7XG5pbXBvcnQgbWF0Y2ggZnJvbSBcIi4vX2xpYi9tYXRjaC9pbmRleC5qc1wiO1xuLyoqXG4gKiBAdHlwZSB7TG9jYWxlfVxuICogQGNhdGVnb3J5IExvY2FsZXNcbiAqIEBzdW1tYXJ5IEVuZ2xpc2ggbG9jYWxlIChVbml0ZWQgU3RhdGVzKS5cbiAqIEBsYW5ndWFnZSBFbmdsaXNoXG4gKiBAaXNvLTYzOS0yIGVuZ1xuICogQGF1dGhvciBTYXNoYSBLb3NzIFtAa29zc25vY29ycF17QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL2tvc3Nub2NvcnB9XG4gKiBAYXV0aG9yIExlc2hhIEtvc3MgW0BsZXNoYWtvc3Nde0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9sZXNoYWtvc3N9XG4gKi9cbnZhciBsb2NhbGUgPSB7XG4gIGNvZGU6ICdlbi1VUycsXG4gIGZvcm1hdERpc3RhbmNlOiBmb3JtYXREaXN0YW5jZSxcbiAgZm9ybWF0TG9uZzogZm9ybWF0TG9uZyxcbiAgZm9ybWF0UmVsYXRpdmU6IGZvcm1hdFJlbGF0aXZlLFxuICBsb2NhbGl6ZTogbG9jYWxpemUsXG4gIG1hdGNoOiBtYXRjaCxcbiAgb3B0aW9uczoge1xuICAgIHdlZWtTdGFydHNPbjogMCAvKiBTdW5kYXkgKi8sXG4gICAgZmlyc3RXZWVrQ29udGFpbnNEYXRlOiAxXG4gIH1cbn07XG5leHBvcnQgZGVmYXVsdCBsb2NhbGU7IiwiaW1wb3J0IGRlZmF1bHRMb2NhbGUgZnJvbSBcIi4uLy4uL2xvY2FsZS9lbi1VUy9pbmRleC5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZGVmYXVsdExvY2FsZTsiLCJpbXBvcnQgaXNWYWxpZCBmcm9tIFwiLi4vaXNWYWxpZC9pbmRleC5qc1wiO1xuaW1wb3J0IHN1Yk1pbGxpc2Vjb25kcyBmcm9tIFwiLi4vc3ViTWlsbGlzZWNvbmRzL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCBmb3JtYXR0ZXJzIGZyb20gXCIuLi9fbGliL2Zvcm1hdC9mb3JtYXR0ZXJzL2luZGV4LmpzXCI7XG5pbXBvcnQgbG9uZ0Zvcm1hdHRlcnMgZnJvbSBcIi4uL19saWIvZm9ybWF0L2xvbmdGb3JtYXR0ZXJzL2luZGV4LmpzXCI7XG5pbXBvcnQgZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcyBmcm9tIFwiLi4vX2xpYi9nZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzL2luZGV4LmpzXCI7XG5pbXBvcnQgeyBpc1Byb3RlY3RlZERheU9mWWVhclRva2VuLCBpc1Byb3RlY3RlZFdlZWtZZWFyVG9rZW4sIHRocm93UHJvdGVjdGVkRXJyb3IgfSBmcm9tIFwiLi4vX2xpYi9wcm90ZWN0ZWRUb2tlbnMvaW5kZXguanNcIjtcbmltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuaW1wb3J0IHsgZ2V0RGVmYXVsdE9wdGlvbnMgfSBmcm9tIFwiLi4vX2xpYi9kZWZhdWx0T3B0aW9ucy9pbmRleC5qc1wiO1xuaW1wb3J0IGRlZmF1bHRMb2NhbGUgZnJvbSBcIi4uL19saWIvZGVmYXVsdExvY2FsZS9pbmRleC5qc1wiOyAvLyBUaGlzIFJlZ0V4cCBjb25zaXN0cyBvZiB0aHJlZSBwYXJ0cyBzZXBhcmF0ZWQgYnkgYHxgOlxuLy8gLSBbeVlRcU1Md0lkRGVjaWhIS2ttc11vIG1hdGNoZXMgYW55IGF2YWlsYWJsZSBvcmRpbmFsIG51bWJlciB0b2tlblxuLy8gICAob25lIG9mIHRoZSBjZXJ0YWluIGxldHRlcnMgZm9sbG93ZWQgYnkgYG9gKVxuLy8gLSAoXFx3KVxcMSogbWF0Y2hlcyBhbnkgc2VxdWVuY2VzIG9mIHRoZSBzYW1lIGxldHRlclxuLy8gLSAnJyBtYXRjaGVzIHR3byBxdW90ZSBjaGFyYWN0ZXJzIGluIGEgcm93XG4vLyAtICcoJyd8W14nXSkrKCd8JCkgbWF0Y2hlcyBhbnl0aGluZyBzdXJyb3VuZGVkIGJ5IHR3byBxdW90ZSBjaGFyYWN0ZXJzICgnKSxcbi8vICAgZXhjZXB0IGEgc2luZ2xlIHF1b3RlIHN5bWJvbCwgd2hpY2ggZW5kcyB0aGUgc2VxdWVuY2UuXG4vLyAgIFR3byBxdW90ZSBjaGFyYWN0ZXJzIGRvIG5vdCBlbmQgdGhlIHNlcXVlbmNlLlxuLy8gICBJZiB0aGVyZSBpcyBubyBtYXRjaGluZyBzaW5nbGUgcXVvdGVcbi8vICAgdGhlbiB0aGUgc2VxdWVuY2Ugd2lsbCBjb250aW51ZSB1bnRpbCB0aGUgZW5kIG9mIHRoZSBzdHJpbmcuXG4vLyAtIC4gbWF0Y2hlcyBhbnkgc2luZ2xlIGNoYXJhY3RlciB1bm1hdGNoZWQgYnkgcHJldmlvdXMgcGFydHMgb2YgdGhlIFJlZ0V4cHNcbnZhciBmb3JtYXR0aW5nVG9rZW5zUmVnRXhwID0gL1t5WVFxTUx3SWREZWNpaEhLa21zXW98KFxcdylcXDEqfCcnfCcoJyd8W14nXSkrKCd8JCl8Li9nO1xuXG4vLyBUaGlzIFJlZ0V4cCBjYXRjaGVzIHN5bWJvbHMgZXNjYXBlZCBieSBxdW90ZXMsIGFuZCBhbHNvXG4vLyBzZXF1ZW5jZXMgb2Ygc3ltYm9scyBQLCBwLCBhbmQgdGhlIGNvbWJpbmF0aW9ucyBsaWtlIGBQUFBQUFBQcHBwcHBgXG52YXIgbG9uZ0Zvcm1hdHRpbmdUb2tlbnNSZWdFeHAgPSAvUCtwK3xQK3xwK3wnJ3wnKCcnfFteJ10pKygnfCQpfC4vZztcbnZhciBlc2NhcGVkU3RyaW5nUmVnRXhwID0gL14nKFteXSo/KSc/JC87XG52YXIgZG91YmxlUXVvdGVSZWdFeHAgPSAvJycvZztcbnZhciB1bmVzY2FwZWRMYXRpbkNoYXJhY3RlclJlZ0V4cCA9IC9bYS16QS1aXS87XG5cbi8qKlxuICogQG5hbWUgZm9ybWF0XG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEZvcm1hdCB0aGUgZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgZm9ybWF0dGVkIGRhdGUgc3RyaW5nIGluIHRoZSBnaXZlbiBmb3JtYXQuIFRoZSByZXN1bHQgbWF5IHZhcnkgYnkgbG9jYWxlLlxuICpcbiAqID4g4pqg77iPIFBsZWFzZSBub3RlIHRoYXQgdGhlIGBmb3JtYXRgIHRva2VucyBkaWZmZXIgZnJvbSBNb21lbnQuanMgYW5kIG90aGVyIGxpYnJhcmllcy5cbiAqID4gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXG4gKlxuICogVGhlIGNoYXJhY3RlcnMgd3JhcHBlZCBiZXR3ZWVuIHR3byBzaW5nbGUgcXVvdGVzIGNoYXJhY3RlcnMgKCcpIGFyZSBlc2NhcGVkLlxuICogVHdvIHNpbmdsZSBxdW90ZXMgaW4gYSByb3csIHdoZXRoZXIgaW5zaWRlIG9yIG91dHNpZGUgYSBxdW90ZWQgc2VxdWVuY2UsIHJlcHJlc2VudCBhICdyZWFsJyBzaW5nbGUgcXVvdGUuXG4gKiAoc2VlIHRoZSBsYXN0IGV4YW1wbGUpXG4gKlxuICogRm9ybWF0IG9mIHRoZSBzdHJpbmcgaXMgYmFzZWQgb24gVW5pY29kZSBUZWNobmljYWwgU3RhbmRhcmQgIzM1OlxuICogaHR0cHM6Ly93d3cudW5pY29kZS5vcmcvcmVwb3J0cy90cjM1L3RyMzUtZGF0ZXMuaHRtbCNEYXRlX0ZpZWxkX1N5bWJvbF9UYWJsZVxuICogd2l0aCBhIGZldyBhZGRpdGlvbnMgKHNlZSBub3RlIDcgYmVsb3cgdGhlIHRhYmxlKS5cbiAqXG4gKiBBY2NlcHRlZCBwYXR0ZXJuczpcbiAqIHwgVW5pdCAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBhdHRlcm4gfCBSZXN1bHQgZXhhbXBsZXMgICAgICAgICAgICAgICAgICAgfCBOb3RlcyB8XG4gKiB8LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfC0tLS0tLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXwtLS0tLS0tfFxuICogfCBFcmEgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgRy4uR0dHICB8IEFELCBCQyAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEdHR0cgICAgfCBBbm5vIERvbWluaSwgQmVmb3JlIENocmlzdCAgICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBHR0dHRyAgIHwgQSwgQiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBDYWxlbmRhciB5ZWFyICAgICAgICAgICAgICAgICAgIHwgeSAgICAgICB8IDQ0LCAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHlvICAgICAgfCA0NHRoLCAxc3QsIDB0aCwgMTd0aCAgICAgICAgICAgICAgfCA1LDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB5eSAgICAgIHwgNDQsIDAxLCAwMCwgMTcgICAgICAgICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeXl5ICAgICB8IDA0NCwgMDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHl5eXkgICAgfCAwMDQ0LCAwMDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB5eXl5eSAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyw1ICAgfFxuICogfCBMb2NhbCB3ZWVrLW51bWJlcmluZyB5ZWFyICAgICAgIHwgWSAgICAgICB8IDQ0LCAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFlvICAgICAgfCA0NHRoLCAxc3QsIDE5MDB0aCwgMjAxN3RoICAgICAgICAgfCA1LDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBZWSAgICAgIHwgNDQsIDAxLCAwMCwgMTcgICAgICAgICAgICAgICAgICAgIHwgNSw4ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWVlZICAgICB8IDA0NCwgMDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFlZWVkgICAgfCAwMDQ0LCAwMDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgfCA1LDggICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBZWVlZWSAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyw1ICAgfFxuICogfCBJU08gd2Vlay1udW1iZXJpbmcgeWVhciAgICAgICAgIHwgUiAgICAgICB8IC00MywgMCwgMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICB8IDUsNyAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFJSICAgICAgfCAtNDMsIDAwLCAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgfCA1LDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBSUlIgICAgIHwgLTA0MywgMDAwLCAwMDEsIDE5MDAsIDIwMTcgICAgICAgIHwgNSw3ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUlJSUiAgICB8IC0wMDQzLCAwMDAwLCAwMDAxLCAxOTAwLCAyMDE3ICAgICB8IDUsNyAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFJSUlJSICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzLDUsNyB8XG4gKiB8IEV4dGVuZGVkIHllYXIgICAgICAgICAgICAgICAgICAgfCB1ICAgICAgIHwgLTQzLCAwLCAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgdXUgICAgICB8IC00MywgMDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHV1dSAgICAgfCAtMDQzLCAwMDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB1dXV1ICAgIHwgLTAwNDMsIDAwMDEsIDE5MDAsIDIwMTcgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgdXV1dXUgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMsNSAgIHxcbiAqIHwgUXVhcnRlciAoZm9ybWF0dGluZykgICAgICAgICAgICB8IFEgICAgICAgfCAxLCAyLCAzLCA0ICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBRbyAgICAgIHwgMXN0LCAybmQsIDNyZCwgNHRoICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUVEgICAgICB8IDAxLCAwMiwgMDMsIDA0ICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFFRUSAgICAgfCBRMSwgUTIsIFEzLCBRNCAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBRUVFRICAgIHwgMXN0IHF1YXJ0ZXIsIDJuZCBxdWFydGVyLCAuLi4gICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUVFRUVEgICB8IDEsIDIsIDMsIDQgICAgICAgICAgICAgICAgICAgICAgICB8IDQgICAgIHxcbiAqIHwgUXVhcnRlciAoc3RhbmQtYWxvbmUpICAgICAgICAgICB8IHEgICAgICAgfCAxLCAyLCAzLCA0ICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBxbyAgICAgIHwgMXN0LCAybmQsIDNyZCwgNHRoICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcXEgICAgICB8IDAxLCAwMiwgMDMsIDA0ICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHFxcSAgICAgfCBRMSwgUTIsIFEzLCBRNCAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBxcXFxICAgIHwgMXN0IHF1YXJ0ZXIsIDJuZCBxdWFydGVyLCAuLi4gICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcXFxcXEgICB8IDEsIDIsIDMsIDQgICAgICAgICAgICAgICAgICAgICAgICB8IDQgICAgIHxcbiAqIHwgTW9udGggKGZvcm1hdHRpbmcpICAgICAgICAgICAgICB8IE0gICAgICAgfCAxLCAyLCAuLi4sIDEyICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBNbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgMTJ0aCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTU0gICAgICB8IDAxLCAwMiwgLi4uLCAxMiAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IE1NTSAgICAgfCBKYW4sIEZlYiwgLi4uLCBEZWMgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBNTU1NICAgIHwgSmFudWFyeSwgRmVicnVhcnksIC4uLiwgRGVjZW1iZXIgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTU1NTU0gICB8IEosIEYsIC4uLiwgRCAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgTW9udGggKHN0YW5kLWFsb25lKSAgICAgICAgICAgICB8IEwgICAgICAgfCAxLCAyLCAuLi4sIDEyICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBMbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgMTJ0aCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTEwgICAgICB8IDAxLCAwMiwgLi4uLCAxMiAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IExMTCAgICAgfCBKYW4sIEZlYiwgLi4uLCBEZWMgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBMTExMICAgIHwgSmFudWFyeSwgRmVicnVhcnksIC4uLiwgRGVjZW1iZXIgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTExMTEwgICB8IEosIEYsIC4uLiwgRCAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgTG9jYWwgd2VlayBvZiB5ZWFyICAgICAgICAgICAgICB8IHcgICAgICAgfCAxLCAyLCAuLi4sIDUzICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB3byAgICAgIHwgMXN0LCAybmQsIC4uLiwgNTN0aCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgd3cgICAgICB8IDAxLCAwMiwgLi4uLCA1MyAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgSVNPIHdlZWsgb2YgeWVhciAgICAgICAgICAgICAgICB8IEkgICAgICAgfCAxLCAyLCAuLi4sIDUzICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBJbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgNTN0aCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgSUkgICAgICB8IDAxLCAwMiwgLi4uLCA1MyAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgRGF5IG9mIG1vbnRoICAgICAgICAgICAgICAgICAgICB8IGQgICAgICAgfCAxLCAyLCAuLi4sIDMxICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBkbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgMzFzdCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZGQgICAgICB8IDAxLCAwMiwgLi4uLCAzMSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgRGF5IG9mIHllYXIgICAgICAgICAgICAgICAgICAgICB8IEQgICAgICAgfCAxLCAyLCAuLi4sIDM2NSwgMzY2ICAgICAgICAgICAgICAgfCA5ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBEbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgMzY1dGgsIDM2NnRoICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgREQgICAgICB8IDAxLCAwMiwgLi4uLCAzNjUsIDM2NiAgICAgICAgICAgICB8IDkgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IERERCAgICAgfCAwMDEsIDAwMiwgLi4uLCAzNjUsIDM2NiAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBEREREICAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyAgICAgfFxuICogfCBEYXkgb2Ygd2VlayAoZm9ybWF0dGluZykgICAgICAgIHwgRS4uRUVFICB8IE1vbiwgVHVlLCBXZWQsIC4uLiwgU3VuICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEVFRUUgICAgfCBNb25kYXksIFR1ZXNkYXksIC4uLiwgU3VuZGF5ICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBFRUVFRSAgIHwgTSwgVCwgVywgVCwgRiwgUywgUyAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgRUVFRUVFICB8IE1vLCBUdSwgV2UsIFRoLCBGciwgU2EsIFN1ICAgICAgICB8ICAgICAgIHxcbiAqIHwgSVNPIGRheSBvZiB3ZWVrIChmb3JtYXR0aW5nKSAgICB8IGkgICAgICAgfCAxLCAyLCAzLCAuLi4sIDcgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBpbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgN3RoICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaWkgICAgICB8IDAxLCAwMiwgLi4uLCAwNyAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGlpaSAgICAgfCBNb24sIFR1ZSwgV2VkLCAuLi4sIFN1biAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBpaWlpICAgIHwgTW9uZGF5LCBUdWVzZGF5LCAuLi4sIFN1bmRheSAgICAgIHwgMiw3ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaWlpaWkgICB8IE0sIFQsIFcsIFQsIEYsIFMsIFMgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGlpaWlpaSAgfCBNbywgVHUsIFdlLCBUaCwgRnIsIFNhLCBTdSAgICAgICAgfCA3ICAgICB8XG4gKiB8IExvY2FsIGRheSBvZiB3ZWVrIChmb3JtYXR0aW5nKSAgfCBlICAgICAgIHwgMiwgMywgNCwgLi4uLCAxICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZW8gICAgICB8IDJuZCwgM3JkLCAuLi4sIDFzdCAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGVlICAgICAgfCAwMiwgMDMsIC4uLiwgMDEgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBlZWUgICAgIHwgTW9uLCBUdWUsIFdlZCwgLi4uLCBTdW4gICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZWVlZSAgICB8IE1vbmRheSwgVHVlc2RheSwgLi4uLCBTdW5kYXkgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGVlZWVlICAgfCBNLCBULCBXLCBULCBGLCBTLCBTICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBlZWVlZWUgIHwgTW8sIFR1LCBXZSwgVGgsIEZyLCBTYSwgU3UgICAgICAgIHwgICAgICAgfFxuICogfCBMb2NhbCBkYXkgb2Ygd2VlayAoc3RhbmQtYWxvbmUpIHwgYyAgICAgICB8IDIsIDMsIDQsIC4uLiwgMSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGNvICAgICAgfCAybmQsIDNyZCwgLi4uLCAxc3QgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBjYyAgICAgIHwgMDIsIDAzLCAuLi4sIDAxICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgY2NjICAgICB8IE1vbiwgVHVlLCBXZWQsIC4uLiwgU3VuICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGNjY2MgICAgfCBNb25kYXksIFR1ZXNkYXksIC4uLiwgU3VuZGF5ICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBjY2NjYyAgIHwgTSwgVCwgVywgVCwgRiwgUywgUyAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgY2NjY2NjICB8IE1vLCBUdSwgV2UsIFRoLCBGciwgU2EsIFN1ICAgICAgICB8ICAgICAgIHxcbiAqIHwgQU0sIFBNICAgICAgICAgICAgICAgICAgICAgICAgICB8IGEuLmFhICAgfCBBTSwgUE0gICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBhYWEgICAgIHwgYW0sIHBtICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYWFhYSAgICB8IGEubS4sIHAubS4gICAgICAgICAgICAgICAgICAgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGFhYWFhICAgfCBhLCBwICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IEFNLCBQTSwgbm9vbiwgbWlkbmlnaHQgICAgICAgICAgfCBiLi5iYiAgIHwgQU0sIFBNLCBub29uLCBtaWRuaWdodCAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYmJiICAgICB8IGFtLCBwbSwgbm9vbiwgbWlkbmlnaHQgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGJiYmIgICAgfCBhLm0uLCBwLm0uLCBub29uLCBtaWRuaWdodCAgICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBiYmJiYiAgIHwgYSwgcCwgbiwgbWkgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBGbGV4aWJsZSBkYXkgcGVyaW9kICAgICAgICAgICAgIHwgQi4uQkJCICB8IGF0IG5pZ2h0LCBpbiB0aGUgbW9ybmluZywgLi4uICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEJCQkIgICAgfCBhdCBuaWdodCwgaW4gdGhlIG1vcm5pbmcsIC4uLiAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBCQkJCQiAgIHwgYXQgbmlnaHQsIGluIHRoZSBtb3JuaW5nLCAuLi4gICAgIHwgICAgICAgfFxuICogfCBIb3VyIFsxLTEyXSAgICAgICAgICAgICAgICAgICAgIHwgaCAgICAgICB8IDEsIDIsIC4uLiwgMTEsIDEyICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGhvICAgICAgfCAxc3QsIDJuZCwgLi4uLCAxMXRoLCAxMnRoICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBoaCAgICAgIHwgMDEsIDAyLCAuLi4sIDExLCAxMiAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBIb3VyIFswLTIzXSAgICAgICAgICAgICAgICAgICAgIHwgSCAgICAgICB8IDAsIDEsIDIsIC4uLiwgMjMgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEhvICAgICAgfCAwdGgsIDFzdCwgMm5kLCAuLi4sIDIzcmQgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBISCAgICAgIHwgMDAsIDAxLCAwMiwgLi4uLCAyMyAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBIb3VyIFswLTExXSAgICAgICAgICAgICAgICAgICAgIHwgSyAgICAgICB8IDEsIDIsIC4uLiwgMTEsIDAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEtvICAgICAgfCAxc3QsIDJuZCwgLi4uLCAxMXRoLCAwdGggICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBLSyAgICAgIHwgMDEsIDAyLCAuLi4sIDExLCAwMCAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBIb3VyIFsxLTI0XSAgICAgICAgICAgICAgICAgICAgIHwgayAgICAgICB8IDI0LCAxLCAyLCAuLi4sIDIzICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGtvICAgICAgfCAyNHRoLCAxc3QsIDJuZCwgLi4uLCAyM3JkICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBrayAgICAgIHwgMjQsIDAxLCAwMiwgLi4uLCAyMyAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBNaW51dGUgICAgICAgICAgICAgICAgICAgICAgICAgIHwgbSAgICAgICB8IDAsIDEsIC4uLiwgNTkgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IG1vICAgICAgfCAwdGgsIDFzdCwgLi4uLCA1OXRoICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBtbSAgICAgIHwgMDAsIDAxLCAuLi4sIDU5ICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBTZWNvbmQgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcyAgICAgICB8IDAsIDEsIC4uLiwgNTkgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHNvICAgICAgfCAwdGgsIDFzdCwgLi4uLCA1OXRoICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBzcyAgICAgIHwgMDAsIDAxLCAuLi4sIDU5ICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBGcmFjdGlvbiBvZiBzZWNvbmQgICAgICAgICAgICAgIHwgUyAgICAgICB8IDAsIDEsIC4uLiwgOSAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFNTICAgICAgfCAwMCwgMDEsIC4uLiwgOTkgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBTU1MgICAgIHwgMDAwLCAwMDEsIC4uLiwgOTk5ICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgU1NTUyAgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMgICAgIHxcbiAqIHwgVGltZXpvbmUgKElTTy04NjAxIHcvIFopICAgICAgICB8IFggICAgICAgfCAtMDgsICswNTMwLCBaICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBYWCAgICAgIHwgLTA4MDAsICswNTMwLCBaICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWFhYICAgICB8IC0wODowMCwgKzA1OjMwLCBaICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFhYWFggICAgfCAtMDgwMCwgKzA1MzAsIFosICsxMjM0NTYgICAgICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBYWFhYWCAgIHwgLTA4OjAwLCArMDU6MzAsIFosICsxMjozNDo1NiAgICAgIHwgICAgICAgfFxuICogfCBUaW1lem9uZSAoSVNPLTg2MDEgdy9vIFopICAgICAgIHwgeCAgICAgICB8IC0wOCwgKzA1MzAsICswMCAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHh4ICAgICAgfCAtMDgwMCwgKzA1MzAsICswMDAwICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB4eHggICAgIHwgLTA4OjAwLCArMDU6MzAsICswMDowMCAgICAgICAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeHh4eCAgICB8IC0wODAwLCArMDUzMCwgKzAwMDAsICsxMjM0NTYgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHh4eHh4ICAgfCAtMDg6MDAsICswNTozMCwgKzAwOjAwLCArMTI6MzQ6NTYgfCAgICAgICB8XG4gKiB8IFRpbWV6b25lIChHTVQpICAgICAgICAgICAgICAgICAgfCBPLi4uT09PIHwgR01ULTgsIEdNVCs1OjMwLCBHTVQrMCAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgT09PTyAgICB8IEdNVC0wODowMCwgR01UKzA1OjMwLCBHTVQrMDA6MDAgICB8IDIgICAgIHxcbiAqIHwgVGltZXpvbmUgKHNwZWNpZmljIG5vbi1sb2NhdC4pICB8IHouLi56enogfCBHTVQtOCwgR01UKzU6MzAsIEdNVCswICAgICAgICAgICAgfCA2ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB6enp6ICAgIHwgR01ULTA4OjAwLCBHTVQrMDU6MzAsIEdNVCswMDowMCAgIHwgMiw2ICAgfFxuICogfCBTZWNvbmRzIHRpbWVzdGFtcCAgICAgICAgICAgICAgIHwgdCAgICAgICB8IDUxMjk2OTUyMCAgICAgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHR0ICAgICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzLDcgICB8XG4gKiB8IE1pbGxpc2Vjb25kcyB0aW1lc3RhbXAgICAgICAgICAgfCBUICAgICAgIHwgNTEyOTY5NTIwOTAwICAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgVFQgICAgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMsNyAgIHxcbiAqIHwgTG9uZyBsb2NhbGl6ZWQgZGF0ZSAgICAgICAgICAgICB8IFAgICAgICAgfCAwNC8yOS8xNDUzICAgICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQUCAgICAgIHwgQXByIDI5LCAxNDUzICAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUFBQICAgICB8IEFwcmlsIDI5dGgsIDE0NTMgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBQUFAgICAgfCBGcmlkYXksIEFwcmlsIDI5dGgsIDE0NTMgICAgICAgICAgfCAyLDcgICB8XG4gKiB8IExvbmcgbG9jYWxpemVkIHRpbWUgICAgICAgICAgICAgfCBwICAgICAgIHwgMTI6MDAgQU0gICAgICAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcHAgICAgICB8IDEyOjAwOjAwIEFNICAgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHBwcCAgICAgfCAxMjowMDowMCBBTSBHTVQrMiAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBwcHBwICAgIHwgMTI6MDA6MDAgQU0gR01UKzAyOjAwICAgICAgICAgICAgIHwgMiw3ICAgfFxuICogfCBDb21iaW5hdGlvbiBvZiBkYXRlIGFuZCB0aW1lICAgIHwgUHAgICAgICB8IDA0LzI5LzE0NTMsIDEyOjAwIEFNICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBQcHAgICAgfCBBcHIgMjksIDE0NTMsIDEyOjAwOjAwIEFNICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQUFBwcHAgIHwgQXByaWwgMjl0aCwgMTQ1MyBhdCAuLi4gICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUFBQUHBwcHB8IEZyaWRheSwgQXByaWwgMjl0aCwgMTQ1MyBhdCAuLi4gICB8IDIsNyAgIHxcbiAqIE5vdGVzOlxuICogMS4gXCJGb3JtYXR0aW5nXCIgdW5pdHMgKGUuZy4gZm9ybWF0dGluZyBxdWFydGVyKSBpbiB0aGUgZGVmYXVsdCBlbi1VUyBsb2NhbGVcbiAqICAgIGFyZSB0aGUgc2FtZSBhcyBcInN0YW5kLWFsb25lXCIgdW5pdHMsIGJ1dCBhcmUgZGlmZmVyZW50IGluIHNvbWUgbGFuZ3VhZ2VzLlxuICogICAgXCJGb3JtYXR0aW5nXCIgdW5pdHMgYXJlIGRlY2xpbmVkIGFjY29yZGluZyB0byB0aGUgcnVsZXMgb2YgdGhlIGxhbmd1YWdlXG4gKiAgICBpbiB0aGUgY29udGV4dCBvZiBhIGRhdGUuIFwiU3RhbmQtYWxvbmVcIiB1bml0cyBhcmUgYWx3YXlzIG5vbWluYXRpdmUgc2luZ3VsYXI6XG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdkbyBMTExMJywge2xvY2FsZTogY3N9KSAvLz0+ICc2LiBsaXN0b3BhZCdgXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdkbyBNTU1NJywge2xvY2FsZTogY3N9KSAvLz0+ICc2LiBsaXN0b3BhZHUnYFxuICpcbiAqIDIuIEFueSBzZXF1ZW5jZSBvZiB0aGUgaWRlbnRpY2FsIGxldHRlcnMgaXMgYSBwYXR0ZXJuLCB1bmxlc3MgaXQgaXMgZXNjYXBlZCBieVxuICogICAgdGhlIHNpbmdsZSBxdW90ZSBjaGFyYWN0ZXJzIChzZWUgYmVsb3cpLlxuICogICAgSWYgdGhlIHNlcXVlbmNlIGlzIGxvbmdlciB0aGFuIGxpc3RlZCBpbiB0YWJsZSAoZS5nLiBgRUVFRUVFRUVFRUVgKVxuICogICAgdGhlIG91dHB1dCB3aWxsIGJlIHRoZSBzYW1lIGFzIGRlZmF1bHQgcGF0dGVybiBmb3IgdGhpcyB1bml0LCB1c3VhbGx5XG4gKiAgICB0aGUgbG9uZ2VzdCBvbmUgKGluIGNhc2Ugb2YgSVNPIHdlZWtkYXlzLCBgRUVFRWApLiBEZWZhdWx0IHBhdHRlcm5zIGZvciB1bml0c1xuICogICAgYXJlIG1hcmtlZCB3aXRoIFwiMlwiIGluIHRoZSBsYXN0IGNvbHVtbiBvZiB0aGUgdGFibGUuXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdNTU0nKSAvLz0+ICdOb3YnYFxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnTU1NTScpIC8vPT4gJ05vdmVtYmVyJ2BcbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ01NTU1NJykgLy89PiAnTidgXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdNTU1NTU0nKSAvLz0+ICdOb3ZlbWJlcidgXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdNTU1NTU1NJykgLy89PiAnTm92ZW1iZXInYFxuICpcbiAqIDMuIFNvbWUgcGF0dGVybnMgY291bGQgYmUgdW5saW1pdGVkIGxlbmd0aCAoc3VjaCBhcyBgeXl5eXl5eXlgKS5cbiAqICAgIFRoZSBvdXRwdXQgd2lsbCBiZSBwYWRkZWQgd2l0aCB6ZXJvcyB0byBtYXRjaCB0aGUgbGVuZ3RoIG9mIHRoZSBwYXR0ZXJuLlxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAneXl5eXl5eXknKSAvLz0+ICcwMDAwMjAxNydgXG4gKlxuICogNC4gYFFRUVFRYCBhbmQgYHFxcXFxYCBjb3VsZCBiZSBub3Qgc3RyaWN0bHkgbnVtZXJpY2FsIGluIHNvbWUgbG9jYWxlcy5cbiAqICAgIFRoZXNlIHRva2VucyByZXByZXNlbnQgdGhlIHNob3J0ZXN0IGZvcm0gb2YgdGhlIHF1YXJ0ZXIuXG4gKlxuICogNS4gVGhlIG1haW4gZGlmZmVyZW5jZSBiZXR3ZWVuIGB5YCBhbmQgYHVgIHBhdHRlcm5zIGFyZSBCLkMuIHllYXJzOlxuICpcbiAqICAgIHwgWWVhciB8IGB5YCB8IGB1YCB8XG4gKiAgICB8LS0tLS0tfC0tLS0tfC0tLS0tfFxuICogICAgfCBBQyAxIHwgICAxIHwgICAxIHxcbiAqICAgIHwgQkMgMSB8ICAgMSB8ICAgMCB8XG4gKiAgICB8IEJDIDIgfCAgIDIgfCAgLTEgfFxuICpcbiAqICAgIEFsc28gYHl5YCBhbHdheXMgcmV0dXJucyB0aGUgbGFzdCB0d28gZGlnaXRzIG9mIGEgeWVhcixcbiAqICAgIHdoaWxlIGB1dWAgcGFkcyBzaW5nbGUgZGlnaXQgeWVhcnMgdG8gMiBjaGFyYWN0ZXJzIGFuZCByZXR1cm5zIG90aGVyIHllYXJzIHVuY2hhbmdlZDpcbiAqXG4gKiAgICB8IFllYXIgfCBgeXlgIHwgYHV1YCB8XG4gKiAgICB8LS0tLS0tfC0tLS0tLXwtLS0tLS18XG4gKiAgICB8IDEgICAgfCAgIDAxIHwgICAwMSB8XG4gKiAgICB8IDE0ICAgfCAgIDE0IHwgICAxNCB8XG4gKiAgICB8IDM3NiAgfCAgIDc2IHwgIDM3NiB8XG4gKiAgICB8IDE0NTMgfCAgIDUzIHwgMTQ1MyB8XG4gKlxuICogICAgVGhlIHNhbWUgZGlmZmVyZW5jZSBpcyB0cnVlIGZvciBsb2NhbCBhbmQgSVNPIHdlZWstbnVtYmVyaW5nIHllYXJzIChgWWAgYW5kIGBSYCksXG4gKiAgICBleGNlcHQgbG9jYWwgd2Vlay1udW1iZXJpbmcgeWVhcnMgYXJlIGRlcGVuZGVudCBvbiBgb3B0aW9ucy53ZWVrU3RhcnRzT25gXG4gKiAgICBhbmQgYG9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlYCAoY29tcGFyZSBbZ2V0SVNPV2Vla1llYXJde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvZ2V0SVNPV2Vla1llYXJ9XG4gKiAgICBhbmQgW2dldFdlZWtZZWFyXXtAbGluayBodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL2dldFdlZWtZZWFyfSkuXG4gKlxuICogNi4gU3BlY2lmaWMgbm9uLWxvY2F0aW9uIHRpbWV6b25lcyBhcmUgY3VycmVudGx5IHVuYXZhaWxhYmxlIGluIGBkYXRlLWZuc2AsXG4gKiAgICBzbyByaWdodCBub3cgdGhlc2UgdG9rZW5zIGZhbGwgYmFjayB0byBHTVQgdGltZXpvbmVzLlxuICpcbiAqIDcuIFRoZXNlIHBhdHRlcm5zIGFyZSBub3QgaW4gdGhlIFVuaWNvZGUgVGVjaG5pY2FsIFN0YW5kYXJkICMzNTpcbiAqICAgIC0gYGlgOiBJU08gZGF5IG9mIHdlZWtcbiAqICAgIC0gYElgOiBJU08gd2VlayBvZiB5ZWFyXG4gKiAgICAtIGBSYDogSVNPIHdlZWstbnVtYmVyaW5nIHllYXJcbiAqICAgIC0gYHRgOiBzZWNvbmRzIHRpbWVzdGFtcFxuICogICAgLSBgVGA6IG1pbGxpc2Vjb25kcyB0aW1lc3RhbXBcbiAqICAgIC0gYG9gOiBvcmRpbmFsIG51bWJlciBtb2RpZmllclxuICogICAgLSBgUGA6IGxvbmcgbG9jYWxpemVkIGRhdGVcbiAqICAgIC0gYHBgOiBsb25nIGxvY2FsaXplZCB0aW1lXG4gKlxuICogOC4gYFlZYCBhbmQgYFlZWVlgIHRva2VucyByZXByZXNlbnQgd2Vlay1udW1iZXJpbmcgeWVhcnMgYnV0IHRoZXkgYXJlIG9mdGVuIGNvbmZ1c2VkIHdpdGggeWVhcnMuXG4gKiAgICBZb3Ugc2hvdWxkIGVuYWJsZSBgb3B0aW9ucy51c2VBZGRpdGlvbmFsV2Vla1llYXJUb2tlbnNgIHRvIHVzZSB0aGVtLiBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcbiAqXG4gKiA5LiBgRGAgYW5kIGBERGAgdG9rZW5zIHJlcHJlc2VudCBkYXlzIG9mIHRoZSB5ZWFyIGJ1dCB0aGV5IGFyZSBvZnRlbiBjb25mdXNlZCB3aXRoIGRheXMgb2YgdGhlIG1vbnRoLlxuICogICAgWW91IHNob3VsZCBlbmFibGUgYG9wdGlvbnMudXNlQWRkaXRpb25hbERheU9mWWVhclRva2Vuc2AgdG8gdXNlIHRoZW0uIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgb3JpZ2luYWwgZGF0ZVxuICogQHBhcmFtIHtTdHJpbmd9IGZvcm1hdCAtIHRoZSBzdHJpbmcgb2YgdG9rZW5zXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIC0gYW4gb2JqZWN0IHdpdGggb3B0aW9ucy5cbiAqIEBwYXJhbSB7TG9jYWxlfSBbb3B0aW9ucy5sb2NhbGU9ZGVmYXVsdExvY2FsZV0gLSB0aGUgbG9jYWxlIG9iamVjdC4gU2VlIFtMb2NhbGVde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvTG9jYWxlfVxuICogQHBhcmFtIHswfDF8MnwzfDR8NXw2fSBbb3B0aW9ucy53ZWVrU3RhcnRzT249MF0gLSB0aGUgaW5kZXggb2YgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2VlayAoMCAtIFN1bmRheSlcbiAqIEBwYXJhbSB7TnVtYmVyfSBbb3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGU9MV0gLSB0aGUgZGF5IG9mIEphbnVhcnksIHdoaWNoIGlzXG4gKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLnVzZUFkZGl0aW9uYWxXZWVrWWVhclRva2Vucz1mYWxzZV0gLSBpZiB0cnVlLCBhbGxvd3MgdXNhZ2Ugb2YgdGhlIHdlZWstbnVtYmVyaW5nIHllYXIgdG9rZW5zIGBZWWAgYW5kIGBZWVlZYDtcbiAqICAgc2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXG4gKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLnVzZUFkZGl0aW9uYWxEYXlPZlllYXJUb2tlbnM9ZmFsc2VdIC0gaWYgdHJ1ZSwgYWxsb3dzIHVzYWdlIG9mIHRoZSBkYXkgb2YgeWVhciB0b2tlbnMgYERgIGFuZCBgRERgO1xuICogICBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcbiAqIEByZXR1cm5zIHtTdHJpbmd9IHRoZSBmb3JtYXR0ZWQgZGF0ZSBzdHJpbmdcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBkYXRlYCBtdXN0IG5vdCBiZSBJbnZhbGlkIERhdGVcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLmxvY2FsZWAgbXVzdCBjb250YWluIGBsb2NhbGl6ZWAgcHJvcGVydHlcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLmxvY2FsZWAgbXVzdCBjb250YWluIGBmb3JtYXRMb25nYCBwcm9wZXJ0eVxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMud2Vla1N0YXJ0c09uYCBtdXN0IGJlIGJldHdlZW4gMCBhbmQgNlxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlYCBtdXN0IGJlIGJldHdlZW4gMSBhbmQgN1xuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gdXNlIGB5eXl5YCBpbnN0ZWFkIG9mIGBZWVlZYCBmb3IgZm9ybWF0dGluZyB5ZWFycyB1c2luZyBbZm9ybWF0IHByb3ZpZGVkXSB0byB0aGUgaW5wdXQgW2lucHV0IHByb3ZpZGVkXTsgc2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSB1c2UgYHl5YCBpbnN0ZWFkIG9mIGBZWWAgZm9yIGZvcm1hdHRpbmcgeWVhcnMgdXNpbmcgW2Zvcm1hdCBwcm92aWRlZF0gdG8gdGhlIGlucHV0IFtpbnB1dCBwcm92aWRlZF07IHNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gdXNlIGBkYCBpbnN0ZWFkIG9mIGBEYCBmb3IgZm9ybWF0dGluZyBkYXlzIG9mIHRoZSBtb250aCB1c2luZyBbZm9ybWF0IHByb3ZpZGVkXSB0byB0aGUgaW5wdXQgW2lucHV0IHByb3ZpZGVkXTsgc2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSB1c2UgYGRkYCBpbnN0ZWFkIG9mIGBERGAgZm9yIGZvcm1hdHRpbmcgZGF5cyBvZiB0aGUgbW9udGggdXNpbmcgW2Zvcm1hdCBwcm92aWRlZF0gdG8gdGhlIGlucHV0IFtpbnB1dCBwcm92aWRlZF07IHNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gZm9ybWF0IHN0cmluZyBjb250YWlucyBhbiB1bmVzY2FwZWQgbGF0aW4gYWxwaGFiZXQgY2hhcmFjdGVyXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFJlcHJlc2VudCAxMSBGZWJydWFyeSAyMDE0IGluIG1pZGRsZS1lbmRpYW4gZm9ybWF0OlxuICogY29uc3QgcmVzdWx0ID0gZm9ybWF0KG5ldyBEYXRlKDIwMTQsIDEsIDExKSwgJ01NL2RkL3l5eXknKVxuICogLy89PiAnMDIvMTEvMjAxNCdcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gUmVwcmVzZW50IDIgSnVseSAyMDE0IGluIEVzcGVyYW50bzpcbiAqIGltcG9ydCB7IGVvTG9jYWxlIH0gZnJvbSAnZGF0ZS1mbnMvbG9jYWxlL2VvJ1xuICogY29uc3QgcmVzdWx0ID0gZm9ybWF0KG5ldyBEYXRlKDIwMTQsIDYsIDIpLCBcImRvICdkZScgTU1NTSB5eXl5XCIsIHtcbiAqICAgbG9jYWxlOiBlb0xvY2FsZVxuICogfSlcbiAqIC8vPT4gJzItYSBkZSBqdWxpbyAyMDE0J1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBFc2NhcGUgc3RyaW5nIGJ5IHNpbmdsZSBxdW90ZSBjaGFyYWN0ZXJzOlxuICogY29uc3QgcmVzdWx0ID0gZm9ybWF0KG5ldyBEYXRlKDIwMTQsIDYsIDIsIDE1KSwgXCJoICdvJydjbG9jaydcIilcbiAqIC8vPT4gXCIzIG8nY2xvY2tcIlxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGZvcm1hdChkaXJ0eURhdGUsIGRpcnR5Rm9ybWF0U3RyLCBvcHRpb25zKSB7XG4gIHZhciBfcmVmLCBfb3B0aW9ucyRsb2NhbGUsIF9yZWYyLCBfcmVmMywgX3JlZjQsIF9vcHRpb25zJGZpcnN0V2Vla0NvbiwgX29wdGlvbnMkbG9jYWxlMiwgX29wdGlvbnMkbG9jYWxlMiRvcHRpLCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwsIF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIsIF9yZWY1LCBfcmVmNiwgX3JlZjcsIF9vcHRpb25zJHdlZWtTdGFydHNPbiwgX29wdGlvbnMkbG9jYWxlMywgX29wdGlvbnMkbG9jYWxlMyRvcHRpLCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwzLCBfZGVmYXVsdE9wdGlvbnMkbG9jYWw0O1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGZvcm1hdFN0ciA9IFN0cmluZyhkaXJ0eUZvcm1hdFN0cik7XG4gIHZhciBkZWZhdWx0T3B0aW9ucyA9IGdldERlZmF1bHRPcHRpb25zKCk7XG4gIHZhciBsb2NhbGUgPSAoX3JlZiA9IChfb3B0aW9ucyRsb2NhbGUgPSBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMubG9jYWxlKSAhPT0gbnVsbCAmJiBfb3B0aW9ucyRsb2NhbGUgIT09IHZvaWQgMCA/IF9vcHRpb25zJGxvY2FsZSA6IGRlZmF1bHRPcHRpb25zLmxvY2FsZSkgIT09IG51bGwgJiYgX3JlZiAhPT0gdm9pZCAwID8gX3JlZiA6IGRlZmF1bHRMb2NhbGU7XG4gIHZhciBmaXJzdFdlZWtDb250YWluc0RhdGUgPSB0b0ludGVnZXIoKF9yZWYyID0gKF9yZWYzID0gKF9yZWY0ID0gKF9vcHRpb25zJGZpcnN0V2Vla0NvbiA9IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGUpICE9PSBudWxsICYmIF9vcHRpb25zJGZpcnN0V2Vla0NvbiAhPT0gdm9pZCAwID8gX29wdGlvbnMkZmlyc3RXZWVrQ29uIDogb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX29wdGlvbnMkbG9jYWxlMiA9IG9wdGlvbnMubG9jYWxlKSA9PT0gbnVsbCB8fCBfb3B0aW9ucyRsb2NhbGUyID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX29wdGlvbnMkbG9jYWxlMiRvcHRpID0gX29wdGlvbnMkbG9jYWxlMi5vcHRpb25zKSA9PT0gbnVsbCB8fCBfb3B0aW9ucyRsb2NhbGUyJG9wdGkgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9vcHRpb25zJGxvY2FsZTIkb3B0aS5maXJzdFdlZWtDb250YWluc0RhdGUpICE9PSBudWxsICYmIF9yZWY0ICE9PSB2b2lkIDAgPyBfcmVmNCA6IGRlZmF1bHRPcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSkgIT09IG51bGwgJiYgX3JlZjMgIT09IHZvaWQgMCA/IF9yZWYzIDogKF9kZWZhdWx0T3B0aW9ucyRsb2NhbCA9IGRlZmF1bHRPcHRpb25zLmxvY2FsZSkgPT09IG51bGwgfHwgX2RlZmF1bHRPcHRpb25zJGxvY2FsID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX2RlZmF1bHRPcHRpb25zJGxvY2FsMiA9IF9kZWZhdWx0T3B0aW9ucyRsb2NhbC5vcHRpb25zKSA9PT0gbnVsbCB8fCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSkgIT09IG51bGwgJiYgX3JlZjIgIT09IHZvaWQgMCA/IF9yZWYyIDogMSk7XG5cbiAgLy8gVGVzdCBpZiB3ZWVrU3RhcnRzT24gaXMgYmV0d2VlbiAxIGFuZCA3IF9hbmRfIGlzIG5vdCBOYU5cbiAgaWYgKCEoZmlyc3RXZWVrQ29udGFpbnNEYXRlID49IDEgJiYgZmlyc3RXZWVrQ29udGFpbnNEYXRlIDw9IDcpKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ2ZpcnN0V2Vla0NvbnRhaW5zRGF0ZSBtdXN0IGJlIGJldHdlZW4gMSBhbmQgNyBpbmNsdXNpdmVseScpO1xuICB9XG4gIHZhciB3ZWVrU3RhcnRzT24gPSB0b0ludGVnZXIoKF9yZWY1ID0gKF9yZWY2ID0gKF9yZWY3ID0gKF9vcHRpb25zJHdlZWtTdGFydHNPbiA9IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9vcHRpb25zJHdlZWtTdGFydHNPbiAhPT0gdm9pZCAwID8gX29wdGlvbnMkd2Vla1N0YXJ0c09uIDogb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX29wdGlvbnMkbG9jYWxlMyA9IG9wdGlvbnMubG9jYWxlKSA9PT0gbnVsbCB8fCBfb3B0aW9ucyRsb2NhbGUzID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX29wdGlvbnMkbG9jYWxlMyRvcHRpID0gX29wdGlvbnMkbG9jYWxlMy5vcHRpb25zKSA9PT0gbnVsbCB8fCBfb3B0aW9ucyRsb2NhbGUzJG9wdGkgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9vcHRpb25zJGxvY2FsZTMkb3B0aS53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9yZWY3ICE9PSB2b2lkIDAgPyBfcmVmNyA6IGRlZmF1bHRPcHRpb25zLndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX3JlZjYgIT09IHZvaWQgMCA/IF9yZWY2IDogKF9kZWZhdWx0T3B0aW9ucyRsb2NhbDMgPSBkZWZhdWx0T3B0aW9ucy5sb2NhbGUpID09PSBudWxsIHx8IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfZGVmYXVsdE9wdGlvbnMkbG9jYWw0ID0gX2RlZmF1bHRPcHRpb25zJGxvY2FsMy5vcHRpb25zKSA9PT0gbnVsbCB8fCBfZGVmYXVsdE9wdGlvbnMkbG9jYWw0ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZGVmYXVsdE9wdGlvbnMkbG9jYWw0LndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX3JlZjUgIT09IHZvaWQgMCA/IF9yZWY1IDogMCk7XG5cbiAgLy8gVGVzdCBpZiB3ZWVrU3RhcnRzT24gaXMgYmV0d2VlbiAwIGFuZCA2IF9hbmRfIGlzIG5vdCBOYU5cbiAgaWYgKCEod2Vla1N0YXJ0c09uID49IDAgJiYgd2Vla1N0YXJ0c09uIDw9IDYpKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ3dlZWtTdGFydHNPbiBtdXN0IGJlIGJldHdlZW4gMCBhbmQgNiBpbmNsdXNpdmVseScpO1xuICB9XG4gIGlmICghbG9jYWxlLmxvY2FsaXplKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ2xvY2FsZSBtdXN0IGNvbnRhaW4gbG9jYWxpemUgcHJvcGVydHknKTtcbiAgfVxuICBpZiAoIWxvY2FsZS5mb3JtYXRMb25nKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ2xvY2FsZSBtdXN0IGNvbnRhaW4gZm9ybWF0TG9uZyBwcm9wZXJ0eScpO1xuICB9XG4gIHZhciBvcmlnaW5hbERhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgaWYgKCFpc1ZhbGlkKG9yaWdpbmFsRGF0ZSkpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignSW52YWxpZCB0aW1lIHZhbHVlJyk7XG4gIH1cblxuICAvLyBDb252ZXJ0IHRoZSBkYXRlIGluIHN5c3RlbSB0aW1lem9uZSB0byB0aGUgc2FtZSBkYXRlIGluIFVUQyswMDowMCB0aW1lem9uZS5cbiAgLy8gVGhpcyBlbnN1cmVzIHRoYXQgd2hlbiBVVEMgZnVuY3Rpb25zIHdpbGwgYmUgaW1wbGVtZW50ZWQsIGxvY2FsZXMgd2lsbCBiZSBjb21wYXRpYmxlIHdpdGggdGhlbS5cbiAgLy8gU2VlIGFuIGlzc3VlIGFib3V0IFVUQyBmdW5jdGlvbnM6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9pc3N1ZXMvMzc2XG4gIHZhciB0aW1lem9uZU9mZnNldCA9IGdldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMob3JpZ2luYWxEYXRlKTtcbiAgdmFyIHV0Y0RhdGUgPSBzdWJNaWxsaXNlY29uZHMob3JpZ2luYWxEYXRlLCB0aW1lem9uZU9mZnNldCk7XG4gIHZhciBmb3JtYXR0ZXJPcHRpb25zID0ge1xuICAgIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZTogZmlyc3RXZWVrQ29udGFpbnNEYXRlLFxuICAgIHdlZWtTdGFydHNPbjogd2Vla1N0YXJ0c09uLFxuICAgIGxvY2FsZTogbG9jYWxlLFxuICAgIF9vcmlnaW5hbERhdGU6IG9yaWdpbmFsRGF0ZVxuICB9O1xuICB2YXIgcmVzdWx0ID0gZm9ybWF0U3RyLm1hdGNoKGxvbmdGb3JtYXR0aW5nVG9rZW5zUmVnRXhwKS5tYXAoZnVuY3Rpb24gKHN1YnN0cmluZykge1xuICAgIHZhciBmaXJzdENoYXJhY3RlciA9IHN1YnN0cmluZ1swXTtcbiAgICBpZiAoZmlyc3RDaGFyYWN0ZXIgPT09ICdwJyB8fCBmaXJzdENoYXJhY3RlciA9PT0gJ1AnKSB7XG4gICAgICB2YXIgbG9uZ0Zvcm1hdHRlciA9IGxvbmdGb3JtYXR0ZXJzW2ZpcnN0Q2hhcmFjdGVyXTtcbiAgICAgIHJldHVybiBsb25nRm9ybWF0dGVyKHN1YnN0cmluZywgbG9jYWxlLmZvcm1hdExvbmcpO1xuICAgIH1cbiAgICByZXR1cm4gc3Vic3RyaW5nO1xuICB9KS5qb2luKCcnKS5tYXRjaChmb3JtYXR0aW5nVG9rZW5zUmVnRXhwKS5tYXAoZnVuY3Rpb24gKHN1YnN0cmluZykge1xuICAgIC8vIFJlcGxhY2UgdHdvIHNpbmdsZSBxdW90ZSBjaGFyYWN0ZXJzIHdpdGggb25lIHNpbmdsZSBxdW90ZSBjaGFyYWN0ZXJcbiAgICBpZiAoc3Vic3RyaW5nID09PSBcIicnXCIpIHtcbiAgICAgIHJldHVybiBcIidcIjtcbiAgICB9XG4gICAgdmFyIGZpcnN0Q2hhcmFjdGVyID0gc3Vic3RyaW5nWzBdO1xuICAgIGlmIChmaXJzdENoYXJhY3RlciA9PT0gXCInXCIpIHtcbiAgICAgIHJldHVybiBjbGVhbkVzY2FwZWRTdHJpbmcoc3Vic3RyaW5nKTtcbiAgICB9XG4gICAgdmFyIGZvcm1hdHRlciA9IGZvcm1hdHRlcnNbZmlyc3RDaGFyYWN0ZXJdO1xuICAgIGlmIChmb3JtYXR0ZXIpIHtcbiAgICAgIGlmICghKG9wdGlvbnMgIT09IG51bGwgJiYgb3B0aW9ucyAhPT0gdm9pZCAwICYmIG9wdGlvbnMudXNlQWRkaXRpb25hbFdlZWtZZWFyVG9rZW5zKSAmJiBpc1Byb3RlY3RlZFdlZWtZZWFyVG9rZW4oc3Vic3RyaW5nKSkge1xuICAgICAgICB0aHJvd1Byb3RlY3RlZEVycm9yKHN1YnN0cmluZywgZGlydHlGb3JtYXRTdHIsIFN0cmluZyhkaXJ0eURhdGUpKTtcbiAgICAgIH1cbiAgICAgIGlmICghKG9wdGlvbnMgIT09IG51bGwgJiYgb3B0aW9ucyAhPT0gdm9pZCAwICYmIG9wdGlvbnMudXNlQWRkaXRpb25hbERheU9mWWVhclRva2VucykgJiYgaXNQcm90ZWN0ZWREYXlPZlllYXJUb2tlbihzdWJzdHJpbmcpKSB7XG4gICAgICAgIHRocm93UHJvdGVjdGVkRXJyb3Ioc3Vic3RyaW5nLCBkaXJ0eUZvcm1hdFN0ciwgU3RyaW5nKGRpcnR5RGF0ZSkpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGZvcm1hdHRlcih1dGNEYXRlLCBzdWJzdHJpbmcsIGxvY2FsZS5sb2NhbGl6ZSwgZm9ybWF0dGVyT3B0aW9ucyk7XG4gICAgfVxuICAgIGlmIChmaXJzdENoYXJhY3Rlci5tYXRjaCh1bmVzY2FwZWRMYXRpbkNoYXJhY3RlclJlZ0V4cCkpIHtcbiAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdGb3JtYXQgc3RyaW5nIGNvbnRhaW5zIGFuIHVuZXNjYXBlZCBsYXRpbiBhbHBoYWJldCBjaGFyYWN0ZXIgYCcgKyBmaXJzdENoYXJhY3RlciArICdgJyk7XG4gICAgfVxuICAgIHJldHVybiBzdWJzdHJpbmc7XG4gIH0pLmpvaW4oJycpO1xuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gY2xlYW5Fc2NhcGVkU3RyaW5nKGlucHV0KSB7XG4gIHZhciBtYXRjaGVkID0gaW5wdXQubWF0Y2goZXNjYXBlZFN0cmluZ1JlZ0V4cCk7XG4gIGlmICghbWF0Y2hlZCkge1xuICAgIHJldHVybiBpbnB1dDtcbiAgfVxuICByZXR1cm4gbWF0Y2hlZFsxXS5yZXBsYWNlKGRvdWJsZVF1b3RlUmVnRXhwLCBcIidcIik7XG59IiwiaW1wb3J0IGlzRGF0ZSBmcm9tIFwiLi4vaXNEYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGlzVmFsaWRcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgSXMgdGhlIGdpdmVuIGRhdGUgdmFsaWQ/XG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm5zIGZhbHNlIGlmIGFyZ3VtZW50IGlzIEludmFsaWQgRGF0ZSBhbmQgdHJ1ZSBvdGhlcndpc2UuXG4gKiBBcmd1bWVudCBpcyBjb252ZXJ0ZWQgdG8gRGF0ZSB1c2luZyBgdG9EYXRlYC4gU2VlIFt0b0RhdGVde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvdG9EYXRlfVxuICogSW52YWxpZCBEYXRlIGlzIGEgRGF0ZSwgd2hvc2UgdGltZSB2YWx1ZSBpcyBOYU4uXG4gKlxuICogVGltZSB2YWx1ZSBvZiBEYXRlOiBodHRwOi8vZXM1LmdpdGh1Yi5pby8jeDE1LjkuMS4xXG4gKlxuICogQHBhcmFtIHsqfSBkYXRlIC0gdGhlIGRhdGUgdG8gY2hlY2tcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZGF0ZSBpcyB2YWxpZFxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciB0aGUgdmFsaWQgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IGlzVmFsaWQobmV3IERhdGUoMjAxNCwgMSwgMzEpKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciB0aGUgdmFsdWUsIGNvbnZlcnRhYmxlIGludG8gYSBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gaXNWYWxpZCgxMzkzODA0ODAwMDAwKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciB0aGUgaW52YWxpZCBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gaXNWYWxpZChuZXcgRGF0ZSgnJykpXG4gKiAvLz0+IGZhbHNlXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzVmFsaWQoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICBpZiAoIWlzRGF0ZShkaXJ0eURhdGUpICYmIHR5cGVvZiBkaXJ0eURhdGUgIT09ICdudW1iZXInKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHJldHVybiAhaXNOYU4oTnVtYmVyKGRhdGUpKTtcbn0iLCJpbXBvcnQgX3R5cGVvZiBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdHlwZW9mXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBpc0RhdGVcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgSXMgdGhlIGdpdmVuIHZhbHVlIGEgZGF0ZT9cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgZ2l2ZW4gdmFsdWUgaXMgYW4gaW5zdGFuY2Ugb2YgRGF0ZS4gVGhlIGZ1bmN0aW9uIHdvcmtzIGZvciBkYXRlcyB0cmFuc2ZlcnJlZCBhY3Jvc3MgaWZyYW1lcy5cbiAqXG4gKiBAcGFyYW0geyp9IHZhbHVlIC0gdGhlIHZhbHVlIHRvIGNoZWNrXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gdHJ1ZSBpZiB0aGUgZ2l2ZW4gdmFsdWUgaXMgYSBkYXRlXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciBhIHZhbGlkIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSBpc0RhdGUobmV3IERhdGUoKSlcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgYW4gaW52YWxpZCBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gaXNEYXRlKG5ldyBEYXRlKE5hTikpXG4gKiAvLz0+IHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIHNvbWUgdmFsdWU6XG4gKiBjb25zdCByZXN1bHQgPSBpc0RhdGUoJzIwMTQtMDItMzEnKVxuICogLy89PiBmYWxzZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgYW4gb2JqZWN0OlxuICogY29uc3QgcmVzdWx0ID0gaXNEYXRlKHt9KVxuICogLy89PiBmYWxzZVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc0RhdGUodmFsdWUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIERhdGUgfHwgX3R5cGVvZih2YWx1ZSkgPT09ICdvYmplY3QnICYmIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT09ICdbb2JqZWN0IERhdGVdJztcbn0iLCIvKipcbiAqIEdvb2dsZSBDaHJvbWUgYXMgb2YgNjcuMC4zMzk2Ljg3IGludHJvZHVjZWQgdGltZXpvbmVzIHdpdGggb2Zmc2V0IHRoYXQgaW5jbHVkZXMgc2Vjb25kcy5cbiAqIFRoZXkgdXN1YWxseSBhcHBlYXIgZm9yIGRhdGVzIHRoYXQgZGVub3RlIHRpbWUgYmVmb3JlIHRoZSB0aW1lem9uZXMgd2VyZSBpbnRyb2R1Y2VkXG4gKiAoZS5nLiBmb3IgJ0V1cm9wZS9QcmFndWUnIHRpbWV6b25lIHRoZSBvZmZzZXQgaXMgR01UKzAwOjU3OjQ0IGJlZm9yZSAxIE9jdG9iZXIgMTg5MVxuICogYW5kIEdNVCswMTowMDowMCBhZnRlciB0aGF0IGRhdGUpXG4gKlxuICogRGF0ZSNnZXRUaW1lem9uZU9mZnNldCByZXR1cm5zIHRoZSBvZmZzZXQgaW4gbWludXRlcyBhbmQgd291bGQgcmV0dXJuIDU3IGZvciB0aGUgZXhhbXBsZSBhYm92ZSxcbiAqIHdoaWNoIHdvdWxkIGxlYWQgdG8gaW5jb3JyZWN0IGNhbGN1bGF0aW9ucy5cbiAqXG4gKiBUaGlzIGZ1bmN0aW9uIHJldHVybnMgdGhlIHRpbWV6b25lIG9mZnNldCBpbiBtaWxsaXNlY29uZHMgdGhhdCB0YWtlcyBzZWNvbmRzIGluIGFjY291bnQuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMoZGF0ZSkge1xuICB2YXIgdXRjRGF0ZSA9IG5ldyBEYXRlKERhdGUuVVRDKGRhdGUuZ2V0RnVsbFllYXIoKSwgZGF0ZS5nZXRNb250aCgpLCBkYXRlLmdldERhdGUoKSwgZGF0ZS5nZXRIb3VycygpLCBkYXRlLmdldE1pbnV0ZXMoKSwgZGF0ZS5nZXRTZWNvbmRzKCksIGRhdGUuZ2V0TWlsbGlzZWNvbmRzKCkpKTtcbiAgdXRjRGF0ZS5zZXRVVENGdWxsWWVhcihkYXRlLmdldEZ1bGxZZWFyKCkpO1xuICByZXR1cm4gZGF0ZS5nZXRUaW1lKCkgLSB1dGNEYXRlLmdldFRpbWUoKTtcbn0iLCJpbXBvcnQgYWRkTWlsbGlzZWNvbmRzIGZyb20gXCIuLi9hZGRNaWxsaXNlY29uZHMvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi9fbGliL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBzdWJNaWxsaXNlY29uZHNcbiAqIEBjYXRlZ29yeSBNaWxsaXNlY29uZCBIZWxwZXJzXG4gKiBAc3VtbWFyeSBTdWJ0cmFjdCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiBtaWxsaXNlY29uZHMgZnJvbSB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFN1YnRyYWN0IHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBmcm9tIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZSB0byBiZSBjaGFuZ2VkXG4gKiBAcGFyYW0ge051bWJlcn0gYW1vdW50IC0gdGhlIGFtb3VudCBvZiBtaWxsaXNlY29uZHMgdG8gYmUgc3VidHJhY3RlZC4gUG9zaXRpdmUgZGVjaW1hbHMgd2lsbCBiZSByb3VuZGVkIHVzaW5nIGBNYXRoLmZsb29yYCwgZGVjaW1hbHMgbGVzcyB0aGFuIHplcm8gd2lsbCBiZSByb3VuZGVkIHVzaW5nIGBNYXRoLmNlaWxgLlxuICogQHJldHVybnMge0RhdGV9IHRoZSBuZXcgZGF0ZSB3aXRoIHRoZSBtaWxsaXNlY29uZHMgc3VidHJhY3RlZFxuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBTdWJ0cmFjdCA3NTAgbWlsbGlzZWNvbmRzIGZyb20gMTAgSnVseSAyMDE0IDEyOjQ1OjMwLjAwMDpcbiAqIGNvbnN0IHJlc3VsdCA9IHN1Yk1pbGxpc2Vjb25kcyhuZXcgRGF0ZSgyMDE0LCA2LCAxMCwgMTIsIDQ1LCAzMCwgMCksIDc1MClcbiAqIC8vPT4gVGh1IEp1bCAxMCAyMDE0IDEyOjQ1OjI5LjI1MFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdWJNaWxsaXNlY29uZHMoZGlydHlEYXRlLCBkaXJ0eUFtb3VudCkge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGFtb3VudCA9IHRvSW50ZWdlcihkaXJ0eUFtb3VudCk7XG4gIHJldHVybiBhZGRNaWxsaXNlY29uZHMoZGlydHlEYXRlLCAtYW1vdW50KTtcbn0iLCJpbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi9fbGliL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBhZGRNaWxsaXNlY29uZHNcbiAqIEBjYXRlZ29yeSBNaWxsaXNlY29uZCBIZWxwZXJzXG4gKiBAc3VtbWFyeSBBZGQgdGhlIHNwZWNpZmllZCBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIHRvIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQWRkIHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyB0byB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGUgdG8gYmUgY2hhbmdlZFxuICogQHBhcmFtIHtOdW1iZXJ9IGFtb3VudCAtIHRoZSBhbW91bnQgb2YgbWlsbGlzZWNvbmRzIHRvIGJlIGFkZGVkLiBQb3NpdGl2ZSBkZWNpbWFscyB3aWxsIGJlIHJvdW5kZWQgdXNpbmcgYE1hdGguZmxvb3JgLCBkZWNpbWFscyBsZXNzIHRoYW4gemVybyB3aWxsIGJlIHJvdW5kZWQgdXNpbmcgYE1hdGguY2VpbGAuXG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIG5ldyBkYXRlIHdpdGggdGhlIG1pbGxpc2Vjb25kcyBhZGRlZFxuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBZGQgNzUwIG1pbGxpc2Vjb25kcyB0byAxMCBKdWx5IDIwMTQgMTI6NDU6MzAuMDAwOlxuICogY29uc3QgcmVzdWx0ID0gYWRkTWlsbGlzZWNvbmRzKG5ldyBEYXRlKDIwMTQsIDYsIDEwLCAxMiwgNDUsIDMwLCAwKSwgNzUwKVxuICogLy89PiBUaHUgSnVsIDEwIDIwMTQgMTI6NDU6MzAuNzUwXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFkZE1pbGxpc2Vjb25kcyhkaXJ0eURhdGUsIGRpcnR5QW1vdW50KSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgdGltZXN0YW1wID0gdG9EYXRlKGRpcnR5RGF0ZSkuZ2V0VGltZSgpO1xuICB2YXIgYW1vdW50ID0gdG9JbnRlZ2VyKGRpcnR5QW1vdW50KTtcbiAgcmV0dXJuIG5ldyBEYXRlKHRpbWVzdGFtcCArIGFtb3VudCk7XG59IiwiLy8gdG9kby1pdGVtc1xuaW1wb3J0IHsgZm9ybWF0IH0gZnJvbSAnZGF0ZS1mbnMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUYXNrIHtcbiAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBkdWVUaW1lLCBwcmlvcml0eSkge1xuICAgIHRoaXMuX3RpdGxlID0gdGl0bGU7XG4gICAgdGhpcy5fZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICB0aGlzLl9kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICB0aGlzLl9kdWVUaW1lID0gZHVlVGltZTtcbiAgICB0aGlzLl9wcmlvcml0eSA9IHByaW9yaXR5O1xuICB9XG5cbiAgZ2V0IHRpdGxlKCkge1xuICAgIHJldHVybiB0aGlzLl90aXRsZTtcbiAgfVxuXG4gIHNldCB0aXRsZSh0aXRsZSkge1xuICAgIHRoaXMuX3RpdGxlID0gdGl0bGU7XG4gIH1cblxuICBnZXQgZGVzY3JpcHRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Rlc2NyaXB0aW9uO1xuICB9XG5cbiAgc2V0IGRlc2NyaXB0aW9uKGRlc2NyaXB0aW9uKSB7XG4gICAgdGhpcy5fZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgfVxuXG4gIGdldCBkdWVEYXRlKCkge1xuICAgIHJldHVybiB0aGlzLl9kdWVEYXRlO1xuICB9XG5cbiAgc2V0IGR1ZURhdGUoZGF0ZSkge1xuICAgIHRoaXMuX2R1ZURhdGUgPSBkYXRlO1xuICB9XG5cbiAgZm9ybWF0dGVkRHVlRGF0ZSgpIHtcbiAgICByZXR1cm4gZm9ybWF0KG5ldyBEYXRlKHRoaXMuX2R1ZURhdGUpLCAnTU1NIGRkJyk7XG4gIH1cblxuICBnZXQgZHVlVGltZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fZHVlVGltZTtcbiAgfVxuXG4gIHNldCBkdWVUaW1lKHRpbWUpIHtcbiAgICB0aGlzLl9kdWVUaW1lID0gdGltZTtcbiAgfVxuXG4gIGdldCBwcmlvcml0eSgpIHtcbiAgICByZXR1cm4gdGhpcy5fcHJpb3JpdHk7XG4gIH1cblxuICBzZXQgcHJpb3JpdHkocHJpb3JpdHkpIHtcbiAgICB0aGlzLl9wcmlvcml0eSA9IHByaW9yaXR5O1xuICB9XG5cbiAgc3RhdGljIGZyb21TdG9yYWdlKHRhc2tEYXRhKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG1heC1sZW5cbiAgICBjb25zdCB0YXNrID0gbmV3IFRhc2sodGFza0RhdGEuX3RpdGxlLCB0YXNrRGF0YS5fZGVzY3JpcHRpb24sIHRhc2tEYXRhLl9kdWVEYXRlLCB0YXNrRGF0YS5fZHVlVGltZSwgdGFza0RhdGEuX3ByaW9yaXR5KTtcbiAgICByZXR1cm4gdGFzaztcbiAgfVxufVxuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tdW5kZXJzY29yZS1kYW5nbGUgKi9cbi8vIFByb2plY3RzIChncm91cCBvZiB0YXNrcylcblxuaW1wb3J0IFRhc2sgZnJvbSAnLi90YXNrcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2plY3Qge1xuICBjb25zdHJ1Y3RvcihuYW1lKSB7XG4gICAgdGhpcy5fbmFtZSA9IG5hbWU7XG4gICAgdGhpcy5fdGFza3MgPSBbXTtcbiAgfVxuXG4gIGdldCBuYW1lKCkge1xuICAgIHJldHVybiB0aGlzLl9uYW1lO1xuICB9XG5cbiAgc2V0IG5hbWUobmFtZSkge1xuICAgIHRoaXMuX25hbWUgPSBuYW1lO1xuICB9XG5cbiAgZ2V0IHRhc2tzKCkge1xuICAgIHJldHVybiB0aGlzLl90YXNrcy5zb3J0KChhLCBiKSA9PiAoYS5wcmlvcml0eSA+IGIucHJpb3JpdHkgPyAtMSA6IDEpKTtcbiAgfVxuXG4gIHNldCB0YXNrcyh0YXNrcykge1xuICAgIHRoaXMuX3Rhc2tzID0gdGFza3M7XG4gIH1cblxuICBnZXRUYXNrKGlkKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Rhc2tzW2lkXTtcbiAgfVxuXG4gIGFkZFRhc2sodGFzaykge1xuICAgIHRoaXMuX3Rhc2tzLnB1c2godGFzayk7XG4gIH1cblxuICByZW1vdmVUYXNrKHJtKSB7XG4gICAgdGhpcy5fdGFza3MgPSB0aGlzLl90YXNrcy5maWx0ZXIoKHRhc2spID0+IHRhc2sgIT09IHJtKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU3RvcmFnZShwcm9qZWN0RGF0YSkge1xuICAgIGNvbnN0IHByb2ogPSBuZXcgUHJvamVjdCgpO1xuICAgIHByb2oubmFtZSA9IHByb2plY3REYXRhLl9uYW1lO1xuICAgIHByb2oudGFza3MgPSBwcm9qZWN0RGF0YS5fdGFza3MubWFwKCh0YXNrRGF0YSkgPT4gVGFzay5mcm9tU3RvcmFnZSh0YXNrRGF0YSkpO1xuICAgIHJldHVybiBwcm9qO1xuICB9XG59XG4iLCIvLyBMaXN0IG9mIHByb2plY3RzXG5pbXBvcnQgUHJvamVjdCBmcm9tICcuL3Byb2plY3RzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9kb0xpc3Qge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLl9wcm9qZWN0cyA9IFtdO1xuICB9XG5cbiAgZ2V0IHByb2plY3RzKCkge1xuICAgIHJldHVybiB0aGlzLl9wcm9qZWN0cztcbiAgfVxuXG4gIHNldCBwcm9qZWN0cyhwcm9qZWN0cykge1xuICAgIHRoaXMuX3Byb2plY3RzID0gcHJvamVjdHM7XG4gIH1cblxuICBnZXRQcm9qZWN0KGlkKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Byb2plY3RzW2lkXTtcbiAgfVxuXG4gIGFkZFByb2plY3QocHJvamVjdCkge1xuICAgIHRoaXMuX3Byb2plY3RzLnB1c2gocHJvamVjdCk7XG4gIH1cblxuICByZW1vdmVQcm9qZWN0KHJtKSB7XG4gICAgdGhpcy5fcHJvamVjdHMgPSB0aGlzLl9wcm9qZWN0cy5maWx0ZXIoKHByb2plY3QpID0+IHByb2plY3QgIT09IHJtKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU3RvcmFnZShsaXN0RGF0YSkge1xuICAgIGNvbnN0IGxpc3QgPSBuZXcgVG9kb0xpc3QoKTtcbiAgICBsaXN0LnByb2plY3RzID0gbGlzdERhdGEuX3Byb2plY3RzLm1hcCgocHJvamVjdERhdGEpID0+IFByb2plY3QuZnJvbVN0b3JhZ2UocHJvamVjdERhdGEpKTtcbiAgICByZXR1cm4gbGlzdDtcbiAgfVxufVxuIiwiLy8gYWdncmVnYXRlIGFsbCBtb2R1bGVzIGhlcmVcbmltcG9ydCAnLi4vc3R5bGUuY3NzJztcbmltcG9ydCAnLi9kb21DbnN0cic7XG5pbXBvcnQgQXBwIGZyb20gJy4vYXBwJztcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG5jb25zdCB0b2RvbGlzdCA9IG5ldyBBcHAoKTtcbiIsIi8vIGNvbnRyb2wgYXBwIGZsb3cgYW5kIGV2ZW50c1xuaW1wb3J0IExpc3RSZW5kZXJlciBmcm9tICcuL2xpc3RSZW5kZXJlcic7XG5pbXBvcnQgcHJvamVjdFJlbmRlcmVySW5zdGFuY2UgZnJvbSAnLi9wcm9qZWN0UmVuZGVyZXInO1xuaW1wb3J0IHRhc2tSZW5kZXJlckluc3RhbmNlIGZyb20gJy4vdGFza1JlbmRlcmVyJztcbmltcG9ydCBQcm9qZWN0IGZyb20gJy4vcHJvamVjdHMnO1xuaW1wb3J0IFRhc2sgZnJvbSAnLi90YXNrcyc7XG5pbXBvcnQgVG9kb0xpc3QgZnJvbSAnLi9saXN0JztcbmltcG9ydCBlZGl0RWxtbnQgZnJvbSAnLi9lZGl0RWxtbnQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcHAge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmxpc3QgPSBudWxsO1xuICAgIHRoaXMubGlzdFJlbmRlcmVyID0gbnVsbDtcbiAgICB0aGlzLnByb2plY3RSZW5kZXJlciA9IHByb2plY3RSZW5kZXJlckluc3RhbmNlO1xuICAgIHRoaXMudGFza1JlbmRlcmVyID0gdGFza1JlbmRlcmVySW5zdGFuY2U7XG4gICAgdGhpcy5sb2FkRnJvbUxvY2FsU3RvcmFnZSgpO1xuICAgIHRoaXMucmVuZGVyTGlzdCgpO1xuICAgIHRoaXMuYWRkRXZlbnRzU3RhdGljKCk7XG4gIH1cblxuICAvLyBsb2FkIHN0b3JhZ2VcblxuICBzYXZlVG9Mb2NhbFN0b3JhZ2UoKSB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RvZG9saXN0JywgSlNPTi5zdHJpbmdpZnkodGhpcy5saXN0KSk7XG4gIH1cblxuICBsb2FkRnJvbUxvY2FsU3RvcmFnZSgpIHtcbiAgICBjb25zdCBzdG9yZWREYXRhID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RvZG9saXN0Jyk7XG4gICAgaWYgKHN0b3JlZERhdGEpIHtcbiAgICAgIHRoaXMubGlzdCA9IFRvZG9MaXN0LmZyb21TdG9yYWdlKEpTT04ucGFyc2Uoc3RvcmVkRGF0YSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmxpc3QgPSBuZXcgVG9kb0xpc3QoKTtcbiAgICAgIHRoaXMubGlzdC5hZGRQcm9qZWN0KG5ldyBQcm9qZWN0KCdIb21lJykpO1xuICAgICAgdGhpcy5saXN0LmFkZFByb2plY3QobmV3IFByb2plY3QoJ1NjaG9vbCcpKTtcbiAgICB9XG4gICAgdGhpcy5saXN0UmVuZGVyZXIgPSBuZXcgTGlzdFJlbmRlcmVyKHRoaXMubGlzdCk7XG4gIH1cblxuICAvLyBhZGQgZXZlbnQgbGlzdGVuZXJzIHRvIHN0YXRpYyBidXR0b25zXG4gIGFkZEV2ZW50c1N0YXRpYygpIHtcbiAgICAvLyB1c2VyIHdhbnRzIHRvIGFkZCBhIHByb2plY3RcbiAgICB0aGlzLmxpc3RSZW5kZXJlci5hZGRQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgdGhpcy5yZWZyZXNoTGlzdCgpO1xuICAgICAgdGhpcy5yZWZyZXNoUHJvamVjdEZvcm0oKTtcbiAgICB9KTtcblxuICAgIC8vIHVzZXIgZG9lcyBub3Qgd2FudCB0byBhZGQgYSBwcm9qZWN0XG4gICAgdGhpcy5saXN0UmVuZGVyZXIuYWRkUHJvamVjdENhbmNlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIHRoaXMucmVmcmVzaExpc3QoKTtcbiAgICB9KTtcblxuICAgIC8vIHVzZXIgYWRkcyBhIHByb2plY3RcbiAgICB0aGlzLmxpc3RSZW5kZXJlci5hZGRQcm9qZWN0QWRkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgY29uc3QgcHJvamVjdE5hbWUgPSB0aGlzLmxpc3RSZW5kZXJlci5hZGRQcm9qRmllbGQudmFsdWU7XG4gICAgICBpZiAocHJvamVjdE5hbWUpIHtcbiAgICAgICAgdGhpcy5saXN0LmFkZFByb2plY3QobmV3IFByb2plY3QoYCR7cHJvamVjdE5hbWV9YCkpO1xuICAgICAgICB0aGlzLnJlZnJlc2hMaXN0KCk7XG4gICAgICAgIHRoaXMuc2F2ZVRvTG9jYWxTdG9yYWdlKCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyB1c2VyIGFkZHMgb3IgZWRpdHMgYSB0YXNrXG4gICAgdGhpcy50YXNrUmVuZGVyZXIuZWRpdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGNvbnN0IGN1cnJlbnRQcm9qZWN0ID0gdGhpcy5wcm9qZWN0UmVuZGVyZXIucHJvamVjdDtcbiAgICAgIGNvbnN0IGN1cnJlbnRUYXNrID0gdGhpcy50YXNrUmVuZGVyZXIudGFzaztcbiAgICAgIHRoaXMudGFza1JlbmRlcmVyLmhpZGVXYXJuaW5nKCk7XG5cbiAgICAgIC8vIENvbGxlY3QgZm9ybSB2YWx1ZXNcbiAgICAgIGNvbnN0IHRpdGxlID0gdGhpcy50YXNrUmVuZGVyZXIudGl0bGUudmFsdWU7XG4gICAgICBjb25zdCBkZXNjID0gdGhpcy50YXNrUmVuZGVyZXIuZGVzYy52YWx1ZTtcbiAgICAgIGNvbnN0IGRhdGUgPSB0aGlzLnRhc2tSZW5kZXJlci5kdWVEYXRlLnZhbHVlO1xuICAgICAgY29uc3QgcHJpbyA9IHBhcnNlSW50KHRoaXMudGFza1JlbmRlcmVyLnByaW8udmFsdWUsIDEwKTtcbiAgICAgIGNvbnN0IHRpbWUgPSB0aGlzLnRhc2tSZW5kZXJlci5kdWVUaW1lLnZhbHVlO1xuXG4gICAgICBpZiAoZGF0ZSAmJiB0aXRsZSkge1xuICAgICAgICAvLyBmb3JtIHdhcyByZWFjaGVkIHRocm91Z2ggJ0FkZCBuZXcgVGFzaydcbiAgICAgICAgaWYgKCFjdXJyZW50VGFzaykge1xuICAgICAgICAgIGN1cnJlbnRQcm9qZWN0LmFkZFRhc2sobmV3IFRhc2sodGl0bGUsIGRlc2MsIGRhdGUsIHRpbWUsIHByaW8pKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjdXJyZW50VGFzay50aXRsZSA9IHRpdGxlO1xuICAgICAgICAgIGN1cnJlbnRUYXNrLmRlc2NyaXB0aW9uID0gZGVzYztcbiAgICAgICAgICBjdXJyZW50VGFzay5kdWVEYXRlID0gZGF0ZTtcbiAgICAgICAgICBjdXJyZW50VGFzay5kdWVUaW1lID0gdGltZTtcbiAgICAgICAgICBjdXJyZW50VGFzay5wcmlvcml0eSA9IHByaW87XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yZWZyZXNoUHJvamVjdChjdXJyZW50UHJvamVjdCk7XG4gICAgICAgIHRoaXMudGFza0FkZE1vZGUoKTtcbiAgICAgICAgdGhpcy50YXNrUmVuZGVyZXIudGFzayA9IG51bGw7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnRhc2tSZW5kZXJlci5zaG93V2FybmluZygpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gdXNlciBkZWxldGVzIGEgdGFza1xuICAgIHRoaXMudGFza1JlbmRlcmVyLmRlbGV0ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGNvbnN0IGN1cnJlbnRQcm9qZWN0ID0gdGhpcy50YXNrUmVuZGVyZXIucHJvamVjdDtcbiAgICAgIGNvbnN0IGN1cnJlbnRUYXNrID0gdGhpcy50YXNrUmVuZGVyZXIudGFzaztcbiAgICAgIGN1cnJlbnRQcm9qZWN0LnJlbW92ZVRhc2soY3VycmVudFRhc2spO1xuICAgICAgLy8gdGhpcy5oaWRlRGV0YWlscygpO1xuICAgICAgdGhpcy5yZWZyZXNoUHJvamVjdChjdXJyZW50UHJvamVjdCk7XG4gICAgICB0aGlzLnRhc2tSZW5kZXJlci50YXNrID0gbnVsbDtcbiAgICAgIHRoaXMudGFza0FkZE1vZGUoKTtcbiAgICB9KTtcbiAgfVxuXG4gIHVwZGF0ZVByb2plY3RzKCkge1xuICAgIC8vIHNob3cgdGFza3Mgb2YgdGhlIHByb2plY3Qgd2hlbiBjbGlja2VkXG4gICAgdGhpcy5saXN0UmVuZGVyZXIucHJvamVjdEl0ZW1zLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHRoaXMucmVmcmVzaFByb2plY3QodGhpcy5saXN0LmdldFByb2plY3QoaXRlbS5pZCkpO1xuICAgICAgICB0aGlzLmxvYWRQcm9qZWN0RGlzcGxheSgpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICB1cGRhdGVUYXNrcygpIHtcbiAgICAvLyB1c2VyIGNvbXBsZXRlcyBhIHRhc2tcbiAgICB0aGlzLnByb2plY3RSZW5kZXJlci5jb21wbGV0ZUJ0bnMuZm9yRWFjaCgoYnRuKSA9PiB7XG4gICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRQcm9qZWN0ID0gdGhpcy5wcm9qZWN0UmVuZGVyZXIucHJvamVjdDtcbiAgICAgICAgY3VycmVudFByb2plY3QucmVtb3ZlVGFzayhjdXJyZW50UHJvamVjdC5nZXRUYXNrKGJ0bi5pZCkpO1xuICAgICAgICB0aGlzLnJlZnJlc2hQcm9qZWN0KGN1cnJlbnRQcm9qZWN0KTtcbiAgICAgICAgdGhpcy50YXNrQWRkTW9kZSgpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgLy8gdXNlciB3YW10cyB0byBlZGl0IGEgdGFza1xuXG4gICAgdGhpcy5wcm9qZWN0UmVuZGVyZXIuZWRpdEJ0bnMuZm9yRWFjaCgoYnRuKSA9PiB7XG4gICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRQcm9qZWN0ID0gdGhpcy5wcm9qZWN0UmVuZGVyZXIucHJvamVjdDtcbiAgICAgICAgY29uc3QgY3VycmVudFRhc2sgPSBjdXJyZW50UHJvamVjdC5nZXRUYXNrKGJ0bi5pZCk7XG4gICAgICAgIHRoaXMudGFza1JlbmRlcmVyLnJlbmRlckRldGFpbHMoY3VycmVudFRhc2ssIGN1cnJlbnRQcm9qZWN0KTtcbiAgICAgICAgdGhpcy50YXNrRWRpdE1vZGUoKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyTGlzdCgpIHtcbiAgICB0aGlzLmxpc3RSZW5kZXJlci5yZW5kZXJQcm9qZWN0cygpO1xuICAgIHRoaXMudXBkYXRlUHJvamVjdHMoKTtcbiAgfVxuXG4gIC8vIFJlZnJlc2ggbGlzdCBvZiBwcm9qZWN0c1xuICByZWZyZXNoTGlzdCgpIHtcbiAgICB0aGlzLnJlbmRlckxpc3QoKTtcbiAgICB0aGlzLnJlZnJlc2hQcm9qZWN0Rm9ybSgpO1xuICAgIGVkaXRFbG1udC50b2dnbGVUb0ZsZXgodGhpcy5saXN0UmVuZGVyZXIuYWRkUHJvamVjdEZvcm0pO1xuICAgIGVkaXRFbG1udC50b2dnbGVUb0ZsZXgodGhpcy5saXN0UmVuZGVyZXIuYWRkUHJvamVjdEJ0bik7XG4gIH1cblxuICAvLyBSZWZyZXNoIHByb2plY3Qgdmlld1xuICByZWZyZXNoUHJvamVjdChwcm9qZWN0KSB7XG4gICAgdGhpcy5wcm9qZWN0UmVuZGVyZXIucmVuZGVyVGFza3MocHJvamVjdCk7XG4gICAgdGhpcy51cGRhdGVUYXNrcygpO1xuICAgIHRoaXMucmVmcmVzaFRhc2tGb3JtKCk7XG4gICAgdGhpcy5zYXZlVG9Mb2NhbFN0b3JhZ2UoKTtcbiAgfVxuXG4gIC8vIEhpZGUgdGFzayBkZWF0YWlsc1xuICBoaWRlRGV0YWlscygpIHtcbiAgICB0aGlzLnRhc2tSZW5kZXJlci5kZXRhaWxzLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIH1cblxuICB0b2dnbGVUYXNrRm9ybSgpIHtcbiAgICBlZGl0RWxtbnQudG9nZ2xlVG9GbGV4KHRoaXMudGFza1JlbmRlcmVyLmRldGFpbHMpO1xuICB9XG5cbiAgcmVmcmVzaFRhc2tGb3JtKCkge1xuICAgIHRoaXMudGFza1JlbmRlcmVyLnRpdGxlLnZhbHVlID0gJyc7XG4gICAgdGhpcy50YXNrUmVuZGVyZXIuZGVzYy52YWx1ZSA9ICcnO1xuICAgIHRoaXMudGFza1JlbmRlcmVyLmR1ZURhdGUudmFsdWUgPSAnJztcbiAgICB0aGlzLnRhc2tSZW5kZXJlci5wcmlvLnZhbHVlID0gMTtcbiAgICB0aGlzLnRhc2tSZW5kZXJlci5kdWVUaW1lLnZhbHVlID0gJyc7XG4gICAgdGhpcy50YXNrUmVuZGVyZXIudGFnLnRleHRDb250ZW50ID0gJ0FkZCBhIHRhc2snO1xuICB9XG5cbiAgcmVmcmVzaFByb2plY3RGb3JtKCkge1xuICAgIHRoaXMubGlzdFJlbmRlcmVyLmFkZFByb2pGaWVsZC52YWx1ZSA9ICcnO1xuICB9XG5cbiAgbG9hZFByb2plY3REaXNwbGF5KCkge1xuICAgIHRoaXMucHJvamVjdFJlbmRlcmVyLnRhc2tEaXNwbGF5LnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgdGhpcy50YXNrUmVuZGVyZXIuZGV0YWlscy5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICB9XG5cbiAgdGFza0VkaXRNb2RlKCkge1xuICAgIHRoaXMudGFza1JlbmRlcmVyLmVkaXQudGV4dENvbnRlbnQgPSAnRG9uZSc7XG4gICAgdGhpcy50YXNrUmVuZGVyZXIudGFnLnRleHRDb250ZW50ID0gJ0VkaXQgdGFzayc7XG4gICAgdGhpcy50YXNrUmVuZGVyZXIuZGVsZXRlLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICB9XG5cbiAgdGFza0FkZE1vZGUoKSB7XG4gICAgdGhpcy50YXNrUmVuZGVyZXIuZWRpdC50ZXh0Q29udGVudCA9ICdBZGQnO1xuICAgIHRoaXMudGFza1JlbmRlcmVyLmRlbGV0ZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIHRoaXMucmVmcmVzaFRhc2tGb3JtKCk7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJfX19DU1NfTE9BREVSX0VYUE9SVF9fXyIsInB1c2giLCJtb2R1bGUiLCJpZCIsImV4cG9ydHMiLCJjc3NXaXRoTWFwcGluZ1RvU3RyaW5nIiwibGlzdCIsInRvU3RyaW5nIiwidGhpcyIsIm1hcCIsIml0ZW0iLCJjb250ZW50IiwibmVlZExheWVyIiwiY29uY2F0IiwibGVuZ3RoIiwiam9pbiIsImkiLCJtb2R1bGVzIiwibWVkaWEiLCJkZWR1cGUiLCJzdXBwb3J0cyIsImxheWVyIiwidW5kZWZpbmVkIiwiYWxyZWFkeUltcG9ydGVkTW9kdWxlcyIsImsiLCJfayIsImNzc01hcHBpbmciLCJidG9hIiwiYmFzZTY0IiwidW5lc2NhcGUiLCJlbmNvZGVVUklDb21wb25lbnQiLCJKU09OIiwic3RyaW5naWZ5IiwiZGF0YSIsInNvdXJjZU1hcHBpbmciLCJzdHlsZXNJbkRPTSIsImdldEluZGV4QnlJZGVudGlmaWVyIiwiaWRlbnRpZmllciIsInJlc3VsdCIsIm1vZHVsZXNUb0RvbSIsIm9wdGlvbnMiLCJpZENvdW50TWFwIiwiaWRlbnRpZmllcnMiLCJiYXNlIiwiY291bnQiLCJpbmRleEJ5SWRlbnRpZmllciIsIm9iaiIsImNzcyIsInNvdXJjZU1hcCIsInJlZmVyZW5jZXMiLCJ1cGRhdGVyIiwiYWRkRWxlbWVudFN0eWxlIiwiYnlJbmRleCIsInNwbGljZSIsImFwaSIsImRvbUFQSSIsInVwZGF0ZSIsIm5ld09iaiIsInJlbW92ZSIsImxhc3RJZGVudGlmaWVycyIsIm5ld0xpc3QiLCJpbmRleCIsIm5ld0xhc3RJZGVudGlmaWVycyIsIl9pIiwiX2luZGV4IiwibWVtbyIsImluc2VydCIsInN0eWxlIiwidGFyZ2V0Iiwic3R5bGVUYXJnZXQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJ3aW5kb3ciLCJIVE1MSUZyYW1lRWxlbWVudCIsImNvbnRlbnREb2N1bWVudCIsImhlYWQiLCJlIiwiZ2V0VGFyZ2V0IiwiRXJyb3IiLCJhcHBlbmRDaGlsZCIsImVsZW1lbnQiLCJjcmVhdGVFbGVtZW50Iiwic2V0QXR0cmlidXRlcyIsImF0dHJpYnV0ZXMiLCJzdHlsZUVsZW1lbnQiLCJub25jZSIsInNldEF0dHJpYnV0ZSIsImluc2VydFN0eWxlRWxlbWVudCIsInN0eWxlVGFnVHJhbnNmb3JtIiwiYXBwbHkiLCJwYXJlbnROb2RlIiwicmVtb3ZlQ2hpbGQiLCJyZW1vdmVTdHlsZUVsZW1lbnQiLCJzdHlsZVNoZWV0IiwiY3NzVGV4dCIsImZpcnN0Q2hpbGQiLCJjcmVhdGVUZXh0Tm9kZSIsIl9fd2VicGFja19tb2R1bGVfY2FjaGVfXyIsIl9fd2VicGFja19yZXF1aXJlX18iLCJtb2R1bGVJZCIsImNhY2hlZE1vZHVsZSIsIl9fd2VicGFja19tb2R1bGVzX18iLCJuIiwiZ2V0dGVyIiwiX19lc01vZHVsZSIsImQiLCJhIiwiZGVmaW5pdGlvbiIsImtleSIsIm8iLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImVudW1lcmFibGUiLCJnZXQiLCJnIiwiZ2xvYmFsVGhpcyIsIkZ1bmN0aW9uIiwicHJvcCIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsInNjcmlwdFVybCIsImltcG9ydFNjcmlwdHMiLCJsb2NhdGlvbiIsImN1cnJlbnRTY3JpcHQiLCJzcmMiLCJzY3JpcHRzIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJyZXBsYWNlIiwicCIsIm5jIiwibG9jYWxzIiwiZWRpdEVsbW50Iiwic3RhdGljIiwicGFyZW50IiwiY2hpbGRyZW4iLCJmb3JFYWNoIiwiY2hpbGQiLCJjbGFzc2VzIiwiYyIsImNsYXNzTGlzdCIsImFkZCIsInRleHQiLCJ0ZXh0Q29udGVudCIsInRvZ2dsZVRvRmxleCIsImRpc3BsYXkiLCJ0b2dnbGVUb0Jsb2NrIiwiY29sb3JBY2NkZ1RvUHJpbyIsInByaW8iLCJhcHBHcmlkIiwiYXBwZW5kQ2hpbGRyZW4iLCJib2R5IiwiYWRkSWQiLCJvdmVydmlldyIsInByb2plY3REaXNwbGF5IiwicGRUYWciLCJhZGRUZXh0IiwicGRJdGVtcyIsImFkZEJ0biIsImltZyIsIkltYWdlIiwid2lkdGgiLCJpbm5lckhUTUwiLCJwcm9qZWN0QWRkRm9ybSIsInR4dEZpZWxkIiwibmFtZSIsInR5cGUiLCJwbGFjZWhvbGRlciIsInBhdHRlcm4iLCJhY3Rpb25CdG5zIiwiY2FuY2VsIiwicHJvakJlbmNoIiwicHJvak5hbWUiLCJwcm9qZWN0RGlzcCIsInRhc2tEaXNwbGF5IiwidGRUYWciLCJwcmlvVGFnIiwiY2x1ZSIsImxvd1AiLCJtaWRQIiwiaGlnaFAiLCJ0ZEl0ZW1zIiwiYWRkVGFza0Zvcm0iLCJ0YWciLCJsYWJlbFRpdGxlIiwidGl0bGVJbnB1dCIsImxhYmVsRGVzYyIsImRlc2NJbnB1dCIsImxhYmVsRGF0ZSIsImR1ZURhdGVJbnB1dCIsIm9uZm9jdXMiLCJsYWJlbFRpbWUiLCJkdWVUaW1lSW5wdXQiLCJsYWJlbFByaW8iLCJwcmlvcml0eUlucHV0IiwiaGlnaCIsInZhbHVlIiwibWlkIiwibG93IiwiYWRkVGFza0FjdGlvbnMiLCJhZGRUYXNrQWRkIiwiZGV0ZWxlVGFzayIsIndhcm5pbmciLCJxdWVyeVNlbGVjdG9yQWxsIiwiZWxtIiwiYWRkUHJvamVjdEZvcm0iLCJnZXRFbGVtZW50QnlJZCIsImFkZFByb2plY3RCdG4iLCJhZGRQcm9qZWN0RmllbGQiLCJhZGRQcm9qZWN0QWRkIiwiYWRkUHJvamVjdENhbmNlbCIsInByb2plY3RJdGVtcyIsImVkaXRCdXR0b25zIiwiY29tcGxldGVCdXR0b25zIiwidGFza1RhZyIsImFkZFRpdGxlIiwiYWRkRGVzYyIsImFkZERhdGUiLCJhZGRQcmlvIiwiYWRkVGltZSIsImlucHV0V2FybmluZyIsImRlbGV0ZVRhc2tCdG4iLCJMaXN0UmVuZGVyZXIiLCJjb25zdHJ1Y3RvciIsImFkZFByb2pGaWVsZCIsInJlbmRlclByb2plY3RzIiwicHJvamVjdElkIiwicHJvamVjdHMiLCJwcm9qIiwicHJvakl0ZW0iLCJwcm9qZWN0IiwiY29tcGxldGVCdG5zIiwiZWRpdEJ0bnMiLCJyZW5kZXJUYXNrcyIsImN1cnJlbnRQcm9qZWN0IiwidGFza0lkIiwidGFza3MiLCJ0YXNrIiwidGFza0l0ZW0iLCJ0aXRsZSIsImZvcm1hdHRlZER1ZURhdGUiLCJ0YXNrQnRucyIsImVkaXRUYXNrQnRuIiwiYWRkQ2xhc3MiLCJjaGVja1Rhc2tCdG4iLCJwcmlvcml0eSIsImRldGFpbHMiLCJkdWVEYXRlIiwiZHVlVGltZSIsImRlc2MiLCJlZGl0IiwiZGVsZXRlIiwicmVuZGVyRGV0YWlscyIsImN1cnJlbnRUYXNrIiwiZGVzY3JpcHRpb24iLCJzaG93V2FybmluZyIsImhpZGVXYXJuaW5nIiwiX3R5cGVvZiIsIlN5bWJvbCIsIml0ZXJhdG9yIiwicmVxdWlyZWRBcmdzIiwicmVxdWlyZWQiLCJhcmdzIiwiVHlwZUVycm9yIiwidG9EYXRlIiwiYXJndW1lbnQiLCJhcmd1bWVudHMiLCJhcmdTdHIiLCJEYXRlIiwiZ2V0VGltZSIsImNvbnNvbGUiLCJ3YXJuIiwic3RhY2siLCJOYU4iLCJ0b0ludGVnZXIiLCJkaXJ0eU51bWJlciIsIm51bWJlciIsIk51bWJlciIsImlzTmFOIiwiTWF0aCIsImNlaWwiLCJmbG9vciIsInN0YXJ0T2ZVVENJU09XZWVrIiwiZGlydHlEYXRlIiwiZGF0ZSIsImRheSIsImdldFVUQ0RheSIsImRpZmYiLCJzZXRVVENEYXRlIiwiZ2V0VVRDRGF0ZSIsInNldFVUQ0hvdXJzIiwiZ2V0VVRDSVNPV2Vla1llYXIiLCJ5ZWFyIiwiZ2V0VVRDRnVsbFllYXIiLCJmb3VydGhPZkphbnVhcnlPZk5leHRZZWFyIiwic2V0VVRDRnVsbFllYXIiLCJzdGFydE9mTmV4dFllYXIiLCJmb3VydGhPZkphbnVhcnlPZlRoaXNZZWFyIiwic3RhcnRPZlRoaXNZZWFyIiwiZGVmYXVsdE9wdGlvbnMiLCJnZXREZWZhdWx0T3B0aW9ucyIsInN0YXJ0T2ZVVENXZWVrIiwiX3JlZiIsIl9yZWYyIiwiX3JlZjMiLCJfb3B0aW9ucyR3ZWVrU3RhcnRzT24iLCJfb3B0aW9ucyRsb2NhbGUiLCJfb3B0aW9ucyRsb2NhbGUkb3B0aW8iLCJfZGVmYXVsdE9wdGlvbnMkbG9jYWwiLCJfZGVmYXVsdE9wdGlvbnMkbG9jYWwyIiwid2Vla1N0YXJ0c09uIiwibG9jYWxlIiwiUmFuZ2VFcnJvciIsImdldFVUQ1dlZWtZZWFyIiwiX29wdGlvbnMkZmlyc3RXZWVrQ29uIiwiZmlyc3RXZWVrQ29udGFpbnNEYXRlIiwiZmlyc3RXZWVrT2ZOZXh0WWVhciIsImZpcnN0V2Vla09mVGhpc1llYXIiLCJhZGRMZWFkaW5nWmVyb3MiLCJ0YXJnZXRMZW5ndGgiLCJzaWduIiwib3V0cHV0IiwiYWJzIiwidG9rZW4iLCJzaWduZWRZZWFyIiwibW9udGgiLCJnZXRVVENNb250aCIsIlN0cmluZyIsImdldFVUQ0hvdXJzIiwiZ2V0VVRDTWludXRlcyIsImdldFVUQ1NlY29uZHMiLCJudW1iZXJPZkRpZ2l0cyIsIm1pbGxpc2Vjb25kcyIsImdldFVUQ01pbGxpc2Vjb25kcyIsInBvdyIsIkciLCJsb2NhbGl6ZSIsImVyYSIsInkiLCJvcmRpbmFsTnVtYmVyIiwidW5pdCIsImxpZ2h0Rm9ybWF0dGVycyIsIlkiLCJzaWduZWRXZWVrWWVhciIsIndlZWtZZWFyIiwiUiIsInUiLCJRIiwicXVhcnRlciIsImNvbnRleHQiLCJxIiwiTSIsIkwiLCJ3Iiwid2VlayIsImZpcnN0V2VlayIsInN0YXJ0T2ZVVENXZWVrWWVhciIsInJvdW5kIiwiZ2V0VVRDV2VlayIsIkkiLCJpc29XZWVrIiwiZm91cnRoT2ZKYW51YXJ5Iiwic3RhcnRPZlVUQ0lTT1dlZWtZZWFyIiwiZ2V0VVRDSVNPV2VlayIsIkQiLCJkYXlPZlllYXIiLCJ0aW1lc3RhbXAiLCJzZXRVVENNb250aCIsImRpZmZlcmVuY2UiLCJnZXRVVENEYXlPZlllYXIiLCJFIiwiZGF5T2ZXZWVrIiwibG9jYWxEYXlPZldlZWsiLCJpc29EYXlPZldlZWsiLCJkYXlQZXJpb2RFbnVtVmFsdWUiLCJkYXlQZXJpb2QiLCJ0b0xvd2VyQ2FzZSIsImIiLCJob3VycyIsIkIiLCJoIiwiSCIsIksiLCJtIiwicyIsIlMiLCJYIiwiX2xvY2FsaXplIiwidGltZXpvbmVPZmZzZXQiLCJfb3JpZ2luYWxEYXRlIiwiZ2V0VGltZXpvbmVPZmZzZXQiLCJmb3JtYXRUaW1lem9uZVdpdGhPcHRpb25hbE1pbnV0ZXMiLCJmb3JtYXRUaW1lem9uZSIsIngiLCJPIiwiZm9ybWF0VGltZXpvbmVTaG9ydCIsInoiLCJ0Iiwib3JpZ2luYWxEYXRlIiwiVCIsIm9mZnNldCIsImRpcnR5RGVsaW1pdGVyIiwiYWJzT2Zmc2V0IiwibWludXRlcyIsImRlbGltaXRlciIsImRhdGVMb25nRm9ybWF0dGVyIiwiZm9ybWF0TG9uZyIsInRpbWVMb25nRm9ybWF0dGVyIiwidGltZSIsIlAiLCJkYXRlVGltZUZvcm1hdCIsIm1hdGNoUmVzdWx0IiwibWF0Y2giLCJkYXRlUGF0dGVybiIsInRpbWVQYXR0ZXJuIiwiZGF0ZVRpbWUiLCJwcm90ZWN0ZWREYXlPZlllYXJUb2tlbnMiLCJwcm90ZWN0ZWRXZWVrWWVhclRva2VucyIsInRocm93UHJvdGVjdGVkRXJyb3IiLCJmb3JtYXQiLCJpbnB1dCIsImZvcm1hdERpc3RhbmNlTG9jYWxlIiwibGVzc1RoYW5YU2Vjb25kcyIsIm9uZSIsIm90aGVyIiwieFNlY29uZHMiLCJoYWxmQU1pbnV0ZSIsImxlc3NUaGFuWE1pbnV0ZXMiLCJ4TWludXRlcyIsImFib3V0WEhvdXJzIiwieEhvdXJzIiwieERheXMiLCJhYm91dFhXZWVrcyIsInhXZWVrcyIsImFib3V0WE1vbnRocyIsInhNb250aHMiLCJhYm91dFhZZWFycyIsInhZZWFycyIsIm92ZXJYWWVhcnMiLCJhbG1vc3RYWWVhcnMiLCJidWlsZEZvcm1hdExvbmdGbiIsImRlZmF1bHRXaWR0aCIsImZvcm1hdHMiLCJmdWxsIiwibG9uZyIsIm1lZGl1bSIsInNob3J0IiwiZm9ybWF0UmVsYXRpdmVMb2NhbGUiLCJsYXN0V2VlayIsInllc3RlcmRheSIsInRvZGF5IiwidG9tb3Jyb3ciLCJuZXh0V2VlayIsImJ1aWxkTG9jYWxpemVGbiIsImRpcnR5SW5kZXgiLCJ2YWx1ZXNBcnJheSIsImZvcm1hdHRpbmdWYWx1ZXMiLCJkZWZhdWx0Rm9ybWF0dGluZ1dpZHRoIiwiX2RlZmF1bHRXaWR0aCIsIl93aWR0aCIsInZhbHVlcyIsImFyZ3VtZW50Q2FsbGJhY2siLCJfb3B0aW9ucyIsInJlbTEwMCIsIm5hcnJvdyIsImFiYnJldmlhdGVkIiwid2lkZSIsImFtIiwicG0iLCJtaWRuaWdodCIsIm5vb24iLCJtb3JuaW5nIiwiYWZ0ZXJub29uIiwiZXZlbmluZyIsIm5pZ2h0IiwiYnVpbGRNYXRjaEZuIiwic3RyaW5nIiwibWF0Y2hQYXR0ZXJuIiwibWF0Y2hQYXR0ZXJucyIsImRlZmF1bHRNYXRjaFdpZHRoIiwibWF0Y2hlZFN0cmluZyIsInBhcnNlUGF0dGVybnMiLCJkZWZhdWx0UGFyc2VXaWR0aCIsIkFycmF5IiwiaXNBcnJheSIsImFycmF5IiwicHJlZGljYXRlIiwidGVzdCIsImZpbmRJbmRleCIsIm9iamVjdCIsImZpbmRLZXkiLCJ2YWx1ZUNhbGxiYWNrIiwicmVzdCIsInNsaWNlIiwicGFyc2VQYXR0ZXJuIiwicGFyc2VJbnQiLCJwYXJzZVJlc3VsdCIsImFueSIsImNvZGUiLCJmb3JtYXREaXN0YW5jZSIsInRva2VuVmFsdWUiLCJhZGRTdWZmaXgiLCJjb21wYXJpc29uIiwiZm9ybWF0UmVsYXRpdmUiLCJfZGF0ZSIsIl9iYXNlRGF0ZSIsImZvcm1hdHRpbmdUb2tlbnNSZWdFeHAiLCJsb25nRm9ybWF0dGluZ1Rva2Vuc1JlZ0V4cCIsImVzY2FwZWRTdHJpbmdSZWdFeHAiLCJkb3VibGVRdW90ZVJlZ0V4cCIsInVuZXNjYXBlZExhdGluQ2hhcmFjdGVyUmVnRXhwIiwiZGlydHlGb3JtYXRTdHIiLCJfcmVmNCIsIl9vcHRpb25zJGxvY2FsZTIiLCJfb3B0aW9ucyRsb2NhbGUyJG9wdGkiLCJfcmVmNSIsIl9yZWY2IiwiX3JlZjciLCJfb3B0aW9ucyRsb2NhbGUzIiwiX29wdGlvbnMkbG9jYWxlMyRvcHRpIiwiX2RlZmF1bHRPcHRpb25zJGxvY2FsMyIsIl9kZWZhdWx0T3B0aW9ucyRsb2NhbDQiLCJmb3JtYXRTdHIiLCJkZWZhdWx0TG9jYWxlIiwiaXNEYXRlIiwiaXNWYWxpZCIsInV0Y0RhdGUiLCJVVEMiLCJnZXRGdWxsWWVhciIsImdldE1vbnRoIiwiZ2V0RGF0ZSIsImdldEhvdXJzIiwiZ2V0TWludXRlcyIsImdldFNlY29uZHMiLCJnZXRNaWxsaXNlY29uZHMiLCJnZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzIiwiZGlydHlBbW91bnQiLCJhbW91bnQiLCJhZGRNaWxsaXNlY29uZHMiLCJzdWJNaWxsaXNlY29uZHMiLCJmb3JtYXR0ZXJPcHRpb25zIiwic3Vic3RyaW5nIiwiZmlyc3RDaGFyYWN0ZXIiLCJsb25nRm9ybWF0dGVyIiwibWF0Y2hlZCIsImZvcm1hdHRlciIsInVzZUFkZGl0aW9uYWxXZWVrWWVhclRva2VucyIsImluZGV4T2YiLCJ1c2VBZGRpdGlvbmFsRGF5T2ZZZWFyVG9rZW5zIiwiaXNQcm90ZWN0ZWREYXlPZlllYXJUb2tlbiIsIlRhc2siLCJfdGl0bGUiLCJfZGVzY3JpcHRpb24iLCJfZHVlRGF0ZSIsIl9kdWVUaW1lIiwiX3ByaW9yaXR5IiwiZnJvbVN0b3JhZ2UiLCJ0YXNrRGF0YSIsIlByb2plY3QiLCJfbmFtZSIsIl90YXNrcyIsInNvcnQiLCJnZXRUYXNrIiwiYWRkVGFzayIsInJlbW92ZVRhc2siLCJybSIsImZpbHRlciIsInByb2plY3REYXRhIiwiVG9kb0xpc3QiLCJfcHJvamVjdHMiLCJnZXRQcm9qZWN0IiwiYWRkUHJvamVjdCIsInJlbW92ZVByb2plY3QiLCJsaXN0RGF0YSIsImxpc3RSZW5kZXJlciIsInByb2plY3RSZW5kZXJlciIsInRhc2tSZW5kZXJlciIsImxvYWRGcm9tTG9jYWxTdG9yYWdlIiwicmVuZGVyTGlzdCIsImFkZEV2ZW50c1N0YXRpYyIsInNhdmVUb0xvY2FsU3RvcmFnZSIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJzdG9yZWREYXRhIiwiZ2V0SXRlbSIsInBhcnNlIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlZnJlc2hMaXN0IiwicmVmcmVzaFByb2plY3RGb3JtIiwicHJvamVjdE5hbWUiLCJyZWZyZXNoUHJvamVjdCIsInRhc2tBZGRNb2RlIiwidXBkYXRlUHJvamVjdHMiLCJsb2FkUHJvamVjdERpc3BsYXkiLCJ1cGRhdGVUYXNrcyIsImJ0biIsInRhc2tFZGl0TW9kZSIsInJlZnJlc2hUYXNrRm9ybSIsImhpZGVEZXRhaWxzIiwidG9nZ2xlVGFza0Zvcm0iXSwic291cmNlUm9vdCI6IiJ9
