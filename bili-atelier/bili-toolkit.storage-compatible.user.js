// ==UserScript==
// @name         Bili Atelier Storage Bridge
// @name:zh-CN   Bili Atelier - 旧存储桥接版
// @namespace    https://github.com/dukeNashor/bili-atelier/storage-bridge
// @version      0.1.0-storage-bridge
// @description  Bili Atelier 旧存储桥接版：继续使用 BiliViewed_* 数据，整合已看标记、屏蔽增强、评论区 IP 属地显示。
// @author       dukeNashor
// @match        https://www.bilibili.com/*
// @match        https://search.bilibili.com/*
// @match        https://space.bilibili.com/*
// @match        https://t.bilibili.com/*
// @exclude      https://member.bilibili.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=bilibili.com
// @homepageURL  https://github.com/dukeNashor/bili-atelier
// @supportURL   https://github.com/dukeNashor/bili-atelier/issues
// @downloadURL  https://dukenashor.github.io/bili-atelier/bili-toolkit.storage-compatible.user.js
// @updateURL    https://dukenashor.github.io/bili-atelier/bili-toolkit.storage-compatible.user.js
// @run-at       document-start
// @grant        unsafeWindow
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_deleteValue
// @grant        GM_listValues
// @grant        GM_registerMenuCommand
// @license      MIT
// ==/UserScript==

(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    try {
      return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
    } catch (e) {
      throw mod = 0, e;
    }
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // node_modules/jquery/dist/jquery.js
  var require_jquery = __commonJS({
    "node_modules/jquery/dist/jquery.js"(exports, module) {
      (function(global, factory) {
        "use strict";
        if (typeof module === "object" && typeof module.exports === "object") {
          module.exports = global.document ? factory(global, true) : function(w) {
            if (!w.document) {
              throw new Error("jQuery requires a window with a document");
            }
            return factory(w);
          };
        } else {
          factory(global);
        }
      })(typeof window !== "undefined" ? window : exports, function(window2, noGlobal) {
        "use strict";
        var arr = [];
        var getProto = Object.getPrototypeOf;
        var slice = arr.slice;
        var flat = arr.flat ? function(array) {
          return arr.flat.call(array);
        } : function(array) {
          return arr.concat.apply([], array);
        };
        var push = arr.push;
        var indexOf = arr.indexOf;
        var class2type = {};
        var toString = class2type.toString;
        var hasOwn = class2type.hasOwnProperty;
        var fnToString = hasOwn.toString;
        var ObjectFunctionString = fnToString.call(Object);
        var support = {};
        var isFunction = function isFunction2(obj) {
          return typeof obj === "function" && typeof obj.nodeType !== "number" && typeof obj.item !== "function";
        };
        var isWindow = function isWindow2(obj) {
          return obj != null && obj === obj.window;
        };
        var document2 = window2.document;
        var preservedScriptAttributes = {
          type: true,
          src: true,
          nonce: true,
          noModule: true
        };
        function DOMEval(code, node, doc) {
          doc = doc || document2;
          var i, val, script = doc.createElement("script");
          script.text = code;
          if (node) {
            for (i in preservedScriptAttributes) {
              val = node[i] || node.getAttribute && node.getAttribute(i);
              if (val) {
                script.setAttribute(i, val);
              }
            }
          }
          doc.head.appendChild(script).parentNode.removeChild(script);
        }
        function toType(obj) {
          if (obj == null) {
            return obj + "";
          }
          return typeof obj === "object" || typeof obj === "function" ? class2type[toString.call(obj)] || "object" : typeof obj;
        }
        var version = "3.7.1", rhtmlSuffix = /HTML$/i, jQuery = function(selector, context) {
          return new jQuery.fn.init(selector, context);
        };
        jQuery.fn = jQuery.prototype = {
          // The current version of jQuery being used
          jquery: version,
          constructor: jQuery,
          // The default length of a jQuery object is 0
          length: 0,
          toArray: function() {
            return slice.call(this);
          },
          // Get the Nth element in the matched element set OR
          // Get the whole matched element set as a clean array
          get: function(num) {
            if (num == null) {
              return slice.call(this);
            }
            return num < 0 ? this[num + this.length] : this[num];
          },
          // Take an array of elements and push it onto the stack
          // (returning the new matched element set)
          pushStack: function(elems) {
            var ret = jQuery.merge(this.constructor(), elems);
            ret.prevObject = this;
            return ret;
          },
          // Execute a callback for every element in the matched set.
          each: function(callback) {
            return jQuery.each(this, callback);
          },
          map: function(callback) {
            return this.pushStack(jQuery.map(this, function(elem, i) {
              return callback.call(elem, i, elem);
            }));
          },
          slice: function() {
            return this.pushStack(slice.apply(this, arguments));
          },
          first: function() {
            return this.eq(0);
          },
          last: function() {
            return this.eq(-1);
          },
          even: function() {
            return this.pushStack(jQuery.grep(this, function(_elem, i) {
              return (i + 1) % 2;
            }));
          },
          odd: function() {
            return this.pushStack(jQuery.grep(this, function(_elem, i) {
              return i % 2;
            }));
          },
          eq: function(i) {
            var len = this.length, j = +i + (i < 0 ? len : 0);
            return this.pushStack(j >= 0 && j < len ? [this[j]] : []);
          },
          end: function() {
            return this.prevObject || this.constructor();
          },
          // For internal use only.
          // Behaves like an Array's method, not like a jQuery method.
          push,
          sort: arr.sort,
          splice: arr.splice
        };
        jQuery.extend = jQuery.fn.extend = function() {
          var options, name, src, copy, copyIsArray, clone, target = arguments[0] || {}, i = 1, length = arguments.length, deep = false;
          if (typeof target === "boolean") {
            deep = target;
            target = arguments[i] || {};
            i++;
          }
          if (typeof target !== "object" && !isFunction(target)) {
            target = {};
          }
          if (i === length) {
            target = this;
            i--;
          }
          for (; i < length; i++) {
            if ((options = arguments[i]) != null) {
              for (name in options) {
                copy = options[name];
                if (name === "__proto__" || target === copy) {
                  continue;
                }
                if (deep && copy && (jQuery.isPlainObject(copy) || (copyIsArray = Array.isArray(copy)))) {
                  src = target[name];
                  if (copyIsArray && !Array.isArray(src)) {
                    clone = [];
                  } else if (!copyIsArray && !jQuery.isPlainObject(src)) {
                    clone = {};
                  } else {
                    clone = src;
                  }
                  copyIsArray = false;
                  target[name] = jQuery.extend(deep, clone, copy);
                } else if (copy !== void 0) {
                  target[name] = copy;
                }
              }
            }
          }
          return target;
        };
        jQuery.extend({
          // Unique for each copy of jQuery on the page
          expando: "jQuery" + (version + Math.random()).replace(/\D/g, ""),
          // Assume jQuery is ready without the ready module
          isReady: true,
          error: function(msg) {
            throw new Error(msg);
          },
          noop: function() {
          },
          isPlainObject: function(obj) {
            var proto, Ctor;
            if (!obj || toString.call(obj) !== "[object Object]") {
              return false;
            }
            proto = getProto(obj);
            if (!proto) {
              return true;
            }
            Ctor = hasOwn.call(proto, "constructor") && proto.constructor;
            return typeof Ctor === "function" && fnToString.call(Ctor) === ObjectFunctionString;
          },
          isEmptyObject: function(obj) {
            var name;
            for (name in obj) {
              return false;
            }
            return true;
          },
          // Evaluates a script in a provided context; falls back to the global one
          // if not specified.
          globalEval: function(code, options, doc) {
            DOMEval(code, { nonce: options && options.nonce }, doc);
          },
          each: function(obj, callback) {
            var length, i = 0;
            if (isArrayLike(obj)) {
              length = obj.length;
              for (; i < length; i++) {
                if (callback.call(obj[i], i, obj[i]) === false) {
                  break;
                }
              }
            } else {
              for (i in obj) {
                if (callback.call(obj[i], i, obj[i]) === false) {
                  break;
                }
              }
            }
            return obj;
          },
          // Retrieve the text value of an array of DOM nodes
          text: function(elem) {
            var node, ret = "", i = 0, nodeType = elem.nodeType;
            if (!nodeType) {
              while (node = elem[i++]) {
                ret += jQuery.text(node);
              }
            }
            if (nodeType === 1 || nodeType === 11) {
              return elem.textContent;
            }
            if (nodeType === 9) {
              return elem.documentElement.textContent;
            }
            if (nodeType === 3 || nodeType === 4) {
              return elem.nodeValue;
            }
            return ret;
          },
          // results is for internal usage only
          makeArray: function(arr2, results) {
            var ret = results || [];
            if (arr2 != null) {
              if (isArrayLike(Object(arr2))) {
                jQuery.merge(
                  ret,
                  typeof arr2 === "string" ? [arr2] : arr2
                );
              } else {
                push.call(ret, arr2);
              }
            }
            return ret;
          },
          inArray: function(elem, arr2, i) {
            return arr2 == null ? -1 : indexOf.call(arr2, elem, i);
          },
          isXMLDoc: function(elem) {
            var namespace = elem && elem.namespaceURI, docElem = elem && (elem.ownerDocument || elem).documentElement;
            return !rhtmlSuffix.test(namespace || docElem && docElem.nodeName || "HTML");
          },
          // Support: Android <=4.0 only, PhantomJS 1 only
          // push.apply(_, arraylike) throws on ancient WebKit
          merge: function(first2, second) {
            var len = +second.length, j = 0, i = first2.length;
            for (; j < len; j++) {
              first2[i++] = second[j];
            }
            first2.length = i;
            return first2;
          },
          grep: function(elems, callback, invert) {
            var callbackInverse, matches = [], i = 0, length = elems.length, callbackExpect = !invert;
            for (; i < length; i++) {
              callbackInverse = !callback(elems[i], i);
              if (callbackInverse !== callbackExpect) {
                matches.push(elems[i]);
              }
            }
            return matches;
          },
          // arg is for internal usage only
          map: function(elems, callback, arg) {
            var length, value, i = 0, ret = [];
            if (isArrayLike(elems)) {
              length = elems.length;
              for (; i < length; i++) {
                value = callback(elems[i], i, arg);
                if (value != null) {
                  ret.push(value);
                }
              }
            } else {
              for (i in elems) {
                value = callback(elems[i], i, arg);
                if (value != null) {
                  ret.push(value);
                }
              }
            }
            return flat(ret);
          },
          // A global GUID counter for objects
          guid: 1,
          // jQuery.support is not used in Core but other projects attach their
          // properties to it so it needs to exist.
          support
        });
        if (typeof Symbol === "function") {
          jQuery.fn[Symbol.iterator] = arr[Symbol.iterator];
        }
        jQuery.each(
          "Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),
          function(_i, name) {
            class2type["[object " + name + "]"] = name.toLowerCase();
          }
        );
        function isArrayLike(obj) {
          var length = !!obj && "length" in obj && obj.length, type = toType(obj);
          if (isFunction(obj) || isWindow(obj)) {
            return false;
          }
          return type === "array" || length === 0 || typeof length === "number" && length > 0 && length - 1 in obj;
        }
        function nodeName(elem, name) {
          return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
        }
        var pop = arr.pop;
        var sort = arr.sort;
        var splice = arr.splice;
        var whitespace = "[\\x20\\t\\r\\n\\f]";
        var rtrimCSS = new RegExp(
          "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$",
          "g"
        );
        jQuery.contains = function(a, b) {
          var bup = b && b.parentNode;
          return a === bup || !!(bup && bup.nodeType === 1 && // Support: IE 9 - 11+
          // IE doesn't have `contains` on SVG.
          (a.contains ? a.contains(bup) : a.compareDocumentPosition && a.compareDocumentPosition(bup) & 16));
        };
        var rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;
        function fcssescape(ch, asCodePoint) {
          if (asCodePoint) {
            if (ch === "\0") {
              return "\uFFFD";
            }
            return ch.slice(0, -1) + "\\" + ch.charCodeAt(ch.length - 1).toString(16) + " ";
          }
          return "\\" + ch;
        }
        jQuery.escapeSelector = function(sel) {
          return (sel + "").replace(rcssescape, fcssescape);
        };
        var preferredDoc = document2, pushNative = push;
        (function() {
          var i, Expr, outermostContext, sortInput, hasDuplicate, push2 = pushNative, document3, documentElement2, documentIsHTML, rbuggyQSA, matches, expando = jQuery.expando, dirruns = 0, done = 0, classCache = createCache(), tokenCache = createCache(), compilerCache = createCache(), nonnativeSelectorCache = createCache(), sortOrder = function(a, b) {
            if (a === b) {
              hasDuplicate = true;
            }
            return 0;
          }, booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", identifier = "(?:\\\\[\\da-fA-F]{1,6}" + whitespace + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+", attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace + // Operator (capture 2)
          "*([*^$|!~]?=)" + whitespace + // "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
          `*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(` + identifier + "))|)" + whitespace + "*\\]", pseudos = ":(" + identifier + `)(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|` + attributes + ")*)|.*)\\)|)", rwhitespace = new RegExp(whitespace + "+", "g"), rcomma = new RegExp("^" + whitespace + "*," + whitespace + "*"), rleadingCombinator = new RegExp("^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*"), rdescend = new RegExp(whitespace + "|>"), rpseudo = new RegExp(pseudos), ridentifier = new RegExp("^" + identifier + "$"), matchExpr = {
            ID: new RegExp("^#(" + identifier + ")"),
            CLASS: new RegExp("^\\.(" + identifier + ")"),
            TAG: new RegExp("^(" + identifier + "|[*])"),
            ATTR: new RegExp("^" + attributes),
            PSEUDO: new RegExp("^" + pseudos),
            CHILD: new RegExp(
              "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace + "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace + "*(\\d+)|))" + whitespace + "*\\)|)",
              "i"
            ),
            bool: new RegExp("^(?:" + booleans + ")$", "i"),
            // For use in libraries implementing .is()
            // We use this for POS matching in `select`
            needsContext: new RegExp("^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i")
          }, rinputs = /^(?:input|select|textarea|button)$/i, rheader = /^h\d$/i, rquickExpr2 = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, rsibling = /[+~]/, runescape = new RegExp("\\\\[\\da-fA-F]{1,6}" + whitespace + "?|\\\\([^\\r\\n\\f])", "g"), funescape = function(escape, nonHex) {
            var high = "0x" + escape.slice(1) - 65536;
            if (nonHex) {
              return nonHex;
            }
            return high < 0 ? String.fromCharCode(high + 65536) : String.fromCharCode(high >> 10 | 55296, high & 1023 | 56320);
          }, unloadHandler = function() {
            setDocument();
          }, inDisabledFieldset = addCombinator(
            function(elem) {
              return elem.disabled === true && nodeName(elem, "fieldset");
            },
            { dir: "parentNode", next: "legend" }
          );
          function safeActiveElement() {
            try {
              return document3.activeElement;
            } catch (err) {
            }
          }
          try {
            push2.apply(
              arr = slice.call(preferredDoc.childNodes),
              preferredDoc.childNodes
            );
            arr[preferredDoc.childNodes.length].nodeType;
          } catch (e) {
            push2 = {
              apply: function(target, els) {
                pushNative.apply(target, slice.call(els));
              },
              call: function(target) {
                pushNative.apply(target, slice.call(arguments, 1));
              }
            };
          }
          function find(selector, context, results, seed) {
            var m, i2, elem, nid, match, groups, newSelector, newContext = context && context.ownerDocument, nodeType = context ? context.nodeType : 9;
            results = results || [];
            if (typeof selector !== "string" || !selector || nodeType !== 1 && nodeType !== 9 && nodeType !== 11) {
              return results;
            }
            if (!seed) {
              setDocument(context);
              context = context || document3;
              if (documentIsHTML) {
                if (nodeType !== 11 && (match = rquickExpr2.exec(selector))) {
                  if (m = match[1]) {
                    if (nodeType === 9) {
                      if (elem = context.getElementById(m)) {
                        if (elem.id === m) {
                          push2.call(results, elem);
                          return results;
                        }
                      } else {
                        return results;
                      }
                    } else {
                      if (newContext && (elem = newContext.getElementById(m)) && find.contains(context, elem) && elem.id === m) {
                        push2.call(results, elem);
                        return results;
                      }
                    }
                  } else if (match[2]) {
                    push2.apply(results, context.getElementsByTagName(selector));
                    return results;
                  } else if ((m = match[3]) && context.getElementsByClassName) {
                    push2.apply(results, context.getElementsByClassName(m));
                    return results;
                  }
                }
                if (!nonnativeSelectorCache[selector + " "] && (!rbuggyQSA || !rbuggyQSA.test(selector))) {
                  newSelector = selector;
                  newContext = context;
                  if (nodeType === 1 && (rdescend.test(selector) || rleadingCombinator.test(selector))) {
                    newContext = rsibling.test(selector) && testContext(context.parentNode) || context;
                    if (newContext != context || !support.scope) {
                      if (nid = context.getAttribute("id")) {
                        nid = jQuery.escapeSelector(nid);
                      } else {
                        context.setAttribute("id", nid = expando);
                      }
                    }
                    groups = tokenize(selector);
                    i2 = groups.length;
                    while (i2--) {
                      groups[i2] = (nid ? "#" + nid : ":scope") + " " + toSelector(groups[i2]);
                    }
                    newSelector = groups.join(",");
                  }
                  try {
                    push2.apply(
                      results,
                      newContext.querySelectorAll(newSelector)
                    );
                    return results;
                  } catch (qsaError) {
                    nonnativeSelectorCache(selector, true);
                  } finally {
                    if (nid === expando) {
                      context.removeAttribute("id");
                    }
                  }
                }
              }
            }
            return select(selector.replace(rtrimCSS, "$1"), context, results, seed);
          }
          function createCache() {
            var keys = [];
            function cache(key, value) {
              if (keys.push(key + " ") > Expr.cacheLength) {
                delete cache[keys.shift()];
              }
              return cache[key + " "] = value;
            }
            return cache;
          }
          function markFunction(fn) {
            fn[expando] = true;
            return fn;
          }
          function assert(fn) {
            var el = document3.createElement("fieldset");
            try {
              return !!fn(el);
            } catch (e) {
              return false;
            } finally {
              if (el.parentNode) {
                el.parentNode.removeChild(el);
              }
              el = null;
            }
          }
          function createInputPseudo(type) {
            return function(elem) {
              return nodeName(elem, "input") && elem.type === type;
            };
          }
          function createButtonPseudo(type) {
            return function(elem) {
              return (nodeName(elem, "input") || nodeName(elem, "button")) && elem.type === type;
            };
          }
          function createDisabledPseudo(disabled) {
            return function(elem) {
              if ("form" in elem) {
                if (elem.parentNode && elem.disabled === false) {
                  if ("label" in elem) {
                    if ("label" in elem.parentNode) {
                      return elem.parentNode.disabled === disabled;
                    } else {
                      return elem.disabled === disabled;
                    }
                  }
                  return elem.isDisabled === disabled || // Where there is no isDisabled, check manually
                  elem.isDisabled !== !disabled && inDisabledFieldset(elem) === disabled;
                }
                return elem.disabled === disabled;
              } else if ("label" in elem) {
                return elem.disabled === disabled;
              }
              return false;
            };
          }
          function createPositionalPseudo(fn) {
            return markFunction(function(argument) {
              argument = +argument;
              return markFunction(function(seed, matches2) {
                var j, matchIndexes = fn([], seed.length, argument), i2 = matchIndexes.length;
                while (i2--) {
                  if (seed[j = matchIndexes[i2]]) {
                    seed[j] = !(matches2[j] = seed[j]);
                  }
                }
              });
            });
          }
          function testContext(context) {
            return context && typeof context.getElementsByTagName !== "undefined" && context;
          }
          function setDocument(node) {
            var subWindow, doc = node ? node.ownerDocument || node : preferredDoc;
            if (doc == document3 || doc.nodeType !== 9 || !doc.documentElement) {
              return document3;
            }
            document3 = doc;
            documentElement2 = document3.documentElement;
            documentIsHTML = !jQuery.isXMLDoc(document3);
            matches = documentElement2.matches || documentElement2.webkitMatchesSelector || documentElement2.msMatchesSelector;
            if (documentElement2.msMatchesSelector && // Support: IE 11+, Edge 17 - 18+
            // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
            // two documents; shallow comparisons work.
            // eslint-disable-next-line eqeqeq
            preferredDoc != document3 && (subWindow = document3.defaultView) && subWindow.top !== subWindow) {
              subWindow.addEventListener("unload", unloadHandler);
            }
            support.getById = assert(function(el) {
              documentElement2.appendChild(el).id = jQuery.expando;
              return !document3.getElementsByName || !document3.getElementsByName(jQuery.expando).length;
            });
            support.disconnectedMatch = assert(function(el) {
              return matches.call(el, "*");
            });
            support.scope = assert(function() {
              return document3.querySelectorAll(":scope");
            });
            support.cssHas = assert(function() {
              try {
                document3.querySelector(":has(*,:jqfake)");
                return false;
              } catch (e) {
                return true;
              }
            });
            if (support.getById) {
              Expr.filter.ID = function(id) {
                var attrId = id.replace(runescape, funescape);
                return function(elem) {
                  return elem.getAttribute("id") === attrId;
                };
              };
              Expr.find.ID = function(id, context) {
                if (typeof context.getElementById !== "undefined" && documentIsHTML) {
                  var elem = context.getElementById(id);
                  return elem ? [elem] : [];
                }
              };
            } else {
              Expr.filter.ID = function(id) {
                var attrId = id.replace(runescape, funescape);
                return function(elem) {
                  var node2 = typeof elem.getAttributeNode !== "undefined" && elem.getAttributeNode("id");
                  return node2 && node2.value === attrId;
                };
              };
              Expr.find.ID = function(id, context) {
                if (typeof context.getElementById !== "undefined" && documentIsHTML) {
                  var node2, i2, elems, elem = context.getElementById(id);
                  if (elem) {
                    node2 = elem.getAttributeNode("id");
                    if (node2 && node2.value === id) {
                      return [elem];
                    }
                    elems = context.getElementsByName(id);
                    i2 = 0;
                    while (elem = elems[i2++]) {
                      node2 = elem.getAttributeNode("id");
                      if (node2 && node2.value === id) {
                        return [elem];
                      }
                    }
                  }
                  return [];
                }
              };
            }
            Expr.find.TAG = function(tag, context) {
              if (typeof context.getElementsByTagName !== "undefined") {
                return context.getElementsByTagName(tag);
              } else {
                return context.querySelectorAll(tag);
              }
            };
            Expr.find.CLASS = function(className, context) {
              if (typeof context.getElementsByClassName !== "undefined" && documentIsHTML) {
                return context.getElementsByClassName(className);
              }
            };
            rbuggyQSA = [];
            assert(function(el) {
              var input;
              documentElement2.appendChild(el).innerHTML = "<a id='" + expando + "' href='' disabled='disabled'></a><select id='" + expando + "-\r\\' disabled='disabled'><option selected=''></option></select>";
              if (!el.querySelectorAll("[selected]").length) {
                rbuggyQSA.push("\\[" + whitespace + "*(?:value|" + booleans + ")");
              }
              if (!el.querySelectorAll("[id~=" + expando + "-]").length) {
                rbuggyQSA.push("~=");
              }
              if (!el.querySelectorAll("a#" + expando + "+*").length) {
                rbuggyQSA.push(".#.+[+~]");
              }
              if (!el.querySelectorAll(":checked").length) {
                rbuggyQSA.push(":checked");
              }
              input = document3.createElement("input");
              input.setAttribute("type", "hidden");
              el.appendChild(input).setAttribute("name", "D");
              documentElement2.appendChild(el).disabled = true;
              if (el.querySelectorAll(":disabled").length !== 2) {
                rbuggyQSA.push(":enabled", ":disabled");
              }
              input = document3.createElement("input");
              input.setAttribute("name", "");
              el.appendChild(input);
              if (!el.querySelectorAll("[name='']").length) {
                rbuggyQSA.push("\\[" + whitespace + "*name" + whitespace + "*=" + whitespace + `*(?:''|"")`);
              }
            });
            if (!support.cssHas) {
              rbuggyQSA.push(":has");
            }
            rbuggyQSA = rbuggyQSA.length && new RegExp(rbuggyQSA.join("|"));
            sortOrder = function(a, b) {
              if (a === b) {
                hasDuplicate = true;
                return 0;
              }
              var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
              if (compare) {
                return compare;
              }
              compare = (a.ownerDocument || a) == (b.ownerDocument || b) ? a.compareDocumentPosition(b) : (
                // Otherwise we know they are disconnected
                1
              );
              if (compare & 1 || !support.sortDetached && b.compareDocumentPosition(a) === compare) {
                if (a === document3 || a.ownerDocument == preferredDoc && find.contains(preferredDoc, a)) {
                  return -1;
                }
                if (b === document3 || b.ownerDocument == preferredDoc && find.contains(preferredDoc, b)) {
                  return 1;
                }
                return sortInput ? indexOf.call(sortInput, a) - indexOf.call(sortInput, b) : 0;
              }
              return compare & 4 ? -1 : 1;
            };
            return document3;
          }
          find.matches = function(expr, elements) {
            return find(expr, null, null, elements);
          };
          find.matchesSelector = function(elem, expr) {
            setDocument(elem);
            if (documentIsHTML && !nonnativeSelectorCache[expr + " "] && (!rbuggyQSA || !rbuggyQSA.test(expr))) {
              try {
                var ret = matches.call(elem, expr);
                if (ret || support.disconnectedMatch || // As well, disconnected nodes are said to be in a document
                // fragment in IE 9
                elem.document && elem.document.nodeType !== 11) {
                  return ret;
                }
              } catch (e) {
                nonnativeSelectorCache(expr, true);
              }
            }
            return find(expr, document3, null, [elem]).length > 0;
          };
          find.contains = function(context, elem) {
            if ((context.ownerDocument || context) != document3) {
              setDocument(context);
            }
            return jQuery.contains(context, elem);
          };
          find.attr = function(elem, name) {
            if ((elem.ownerDocument || elem) != document3) {
              setDocument(elem);
            }
            var fn = Expr.attrHandle[name.toLowerCase()], val = fn && hasOwn.call(Expr.attrHandle, name.toLowerCase()) ? fn(elem, name, !documentIsHTML) : void 0;
            if (val !== void 0) {
              return val;
            }
            return elem.getAttribute(name);
          };
          find.error = function(msg) {
            throw new Error("Syntax error, unrecognized expression: " + msg);
          };
          jQuery.uniqueSort = function(results) {
            var elem, duplicates = [], j = 0, i2 = 0;
            hasDuplicate = !support.sortStable;
            sortInput = !support.sortStable && slice.call(results, 0);
            sort.call(results, sortOrder);
            if (hasDuplicate) {
              while (elem = results[i2++]) {
                if (elem === results[i2]) {
                  j = duplicates.push(i2);
                }
              }
              while (j--) {
                splice.call(results, duplicates[j], 1);
              }
            }
            sortInput = null;
            return results;
          };
          jQuery.fn.uniqueSort = function() {
            return this.pushStack(jQuery.uniqueSort(slice.apply(this)));
          };
          Expr = jQuery.expr = {
            // Can be adjusted by the user
            cacheLength: 50,
            createPseudo: markFunction,
            match: matchExpr,
            attrHandle: {},
            find: {},
            relative: {
              ">": { dir: "parentNode", first: true },
              " ": { dir: "parentNode" },
              "+": { dir: "previousSibling", first: true },
              "~": { dir: "previousSibling" }
            },
            preFilter: {
              ATTR: function(match) {
                match[1] = match[1].replace(runescape, funescape);
                match[3] = (match[3] || match[4] || match[5] || "").replace(runescape, funescape);
                if (match[2] === "~=") {
                  match[3] = " " + match[3] + " ";
                }
                return match.slice(0, 4);
              },
              CHILD: function(match) {
                match[1] = match[1].toLowerCase();
                if (match[1].slice(0, 3) === "nth") {
                  if (!match[3]) {
                    find.error(match[0]);
                  }
                  match[4] = +(match[4] ? match[5] + (match[6] || 1) : 2 * (match[3] === "even" || match[3] === "odd"));
                  match[5] = +(match[7] + match[8] || match[3] === "odd");
                } else if (match[3]) {
                  find.error(match[0]);
                }
                return match;
              },
              PSEUDO: function(match) {
                var excess, unquoted = !match[6] && match[2];
                if (matchExpr.CHILD.test(match[0])) {
                  return null;
                }
                if (match[3]) {
                  match[2] = match[4] || match[5] || "";
                } else if (unquoted && rpseudo.test(unquoted) && // Get excess from tokenize (recursively)
                (excess = tokenize(unquoted, true)) && // advance to the next closing parenthesis
                (excess = unquoted.indexOf(")", unquoted.length - excess) - unquoted.length)) {
                  match[0] = match[0].slice(0, excess);
                  match[2] = unquoted.slice(0, excess);
                }
                return match.slice(0, 3);
              }
            },
            filter: {
              TAG: function(nodeNameSelector) {
                var expectedNodeName = nodeNameSelector.replace(runescape, funescape).toLowerCase();
                return nodeNameSelector === "*" ? function() {
                  return true;
                } : function(elem) {
                  return nodeName(elem, expectedNodeName);
                };
              },
              CLASS: function(className) {
                var pattern = classCache[className + " "];
                return pattern || (pattern = new RegExp("(^|" + whitespace + ")" + className + "(" + whitespace + "|$)")) && classCache(className, function(elem) {
                  return pattern.test(
                    typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || ""
                  );
                });
              },
              ATTR: function(name, operator, check) {
                return function(elem) {
                  var result = find.attr(elem, name);
                  if (result == null) {
                    return operator === "!=";
                  }
                  if (!operator) {
                    return true;
                  }
                  result += "";
                  if (operator === "=") {
                    return result === check;
                  }
                  if (operator === "!=") {
                    return result !== check;
                  }
                  if (operator === "^=") {
                    return check && result.indexOf(check) === 0;
                  }
                  if (operator === "*=") {
                    return check && result.indexOf(check) > -1;
                  }
                  if (operator === "$=") {
                    return check && result.slice(-check.length) === check;
                  }
                  if (operator === "~=") {
                    return (" " + result.replace(rwhitespace, " ") + " ").indexOf(check) > -1;
                  }
                  if (operator === "|=") {
                    return result === check || result.slice(0, check.length + 1) === check + "-";
                  }
                  return false;
                };
              },
              CHILD: function(type, what, _argument, first2, last) {
                var simple = type.slice(0, 3) !== "nth", forward = type.slice(-4) !== "last", ofType = what === "of-type";
                return first2 === 1 && last === 0 ? (
                  // Shortcut for :nth-*(n)
                  function(elem) {
                    return !!elem.parentNode;
                  }
                ) : function(elem, _context, xml) {
                  var cache, outerCache, node, nodeIndex, start, dir2 = simple !== forward ? "nextSibling" : "previousSibling", parent = elem.parentNode, name = ofType && elem.nodeName.toLowerCase(), useCache = !xml && !ofType, diff = false;
                  if (parent) {
                    if (simple) {
                      while (dir2) {
                        node = elem;
                        while (node = node[dir2]) {
                          if (ofType ? nodeName(node, name) : node.nodeType === 1) {
                            return false;
                          }
                        }
                        start = dir2 = type === "only" && !start && "nextSibling";
                      }
                      return true;
                    }
                    start = [forward ? parent.firstChild : parent.lastChild];
                    if (forward && useCache) {
                      outerCache = parent[expando] || (parent[expando] = {});
                      cache = outerCache[type] || [];
                      nodeIndex = cache[0] === dirruns && cache[1];
                      diff = nodeIndex && cache[2];
                      node = nodeIndex && parent.childNodes[nodeIndex];
                      while (node = ++nodeIndex && node && node[dir2] || // Fallback to seeking `elem` from the start
                      (diff = nodeIndex = 0) || start.pop()) {
                        if (node.nodeType === 1 && ++diff && node === elem) {
                          outerCache[type] = [dirruns, nodeIndex, diff];
                          break;
                        }
                      }
                    } else {
                      if (useCache) {
                        outerCache = elem[expando] || (elem[expando] = {});
                        cache = outerCache[type] || [];
                        nodeIndex = cache[0] === dirruns && cache[1];
                        diff = nodeIndex;
                      }
                      if (diff === false) {
                        while (node = ++nodeIndex && node && node[dir2] || (diff = nodeIndex = 0) || start.pop()) {
                          if ((ofType ? nodeName(node, name) : node.nodeType === 1) && ++diff) {
                            if (useCache) {
                              outerCache = node[expando] || (node[expando] = {});
                              outerCache[type] = [dirruns, diff];
                            }
                            if (node === elem) {
                              break;
                            }
                          }
                        }
                      }
                    }
                    diff -= last;
                    return diff === first2 || diff % first2 === 0 && diff / first2 >= 0;
                  }
                };
              },
              PSEUDO: function(pseudo, argument) {
                var args, fn = Expr.pseudos[pseudo] || Expr.setFilters[pseudo.toLowerCase()] || find.error("unsupported pseudo: " + pseudo);
                if (fn[expando]) {
                  return fn(argument);
                }
                if (fn.length > 1) {
                  args = [pseudo, pseudo, "", argument];
                  return Expr.setFilters.hasOwnProperty(pseudo.toLowerCase()) ? markFunction(function(seed, matches2) {
                    var idx, matched = fn(seed, argument), i2 = matched.length;
                    while (i2--) {
                      idx = indexOf.call(seed, matched[i2]);
                      seed[idx] = !(matches2[idx] = matched[i2]);
                    }
                  }) : function(elem) {
                    return fn(elem, 0, args);
                  };
                }
                return fn;
              }
            },
            pseudos: {
              // Potentially complex pseudos
              not: markFunction(function(selector) {
                var input = [], results = [], matcher = compile(selector.replace(rtrimCSS, "$1"));
                return matcher[expando] ? markFunction(function(seed, matches2, _context, xml) {
                  var elem, unmatched = matcher(seed, null, xml, []), i2 = seed.length;
                  while (i2--) {
                    if (elem = unmatched[i2]) {
                      seed[i2] = !(matches2[i2] = elem);
                    }
                  }
                }) : function(elem, _context, xml) {
                  input[0] = elem;
                  matcher(input, null, xml, results);
                  input[0] = null;
                  return !results.pop();
                };
              }),
              has: markFunction(function(selector) {
                return function(elem) {
                  return find(selector, elem).length > 0;
                };
              }),
              contains: markFunction(function(text2) {
                text2 = text2.replace(runescape, funescape);
                return function(elem) {
                  return (elem.textContent || jQuery.text(elem)).indexOf(text2) > -1;
                };
              }),
              // "Whether an element is represented by a :lang() selector
              // is based solely on the element's language value
              // being equal to the identifier C,
              // or beginning with the identifier C immediately followed by "-".
              // The matching of C against the element's language value is performed case-insensitively.
              // The identifier C does not have to be a valid language name."
              // https://www.w3.org/TR/selectors/#lang-pseudo
              lang: markFunction(function(lang) {
                if (!ridentifier.test(lang || "")) {
                  find.error("unsupported lang: " + lang);
                }
                lang = lang.replace(runescape, funescape).toLowerCase();
                return function(elem) {
                  var elemLang;
                  do {
                    if (elemLang = documentIsHTML ? elem.lang : elem.getAttribute("xml:lang") || elem.getAttribute("lang")) {
                      elemLang = elemLang.toLowerCase();
                      return elemLang === lang || elemLang.indexOf(lang + "-") === 0;
                    }
                  } while ((elem = elem.parentNode) && elem.nodeType === 1);
                  return false;
                };
              }),
              // Miscellaneous
              target: function(elem) {
                var hash = window2.location && window2.location.hash;
                return hash && hash.slice(1) === elem.id;
              },
              root: function(elem) {
                return elem === documentElement2;
              },
              focus: function(elem) {
                return elem === safeActiveElement() && document3.hasFocus() && !!(elem.type || elem.href || ~elem.tabIndex);
              },
              // Boolean properties
              enabled: createDisabledPseudo(false),
              disabled: createDisabledPseudo(true),
              checked: function(elem) {
                return nodeName(elem, "input") && !!elem.checked || nodeName(elem, "option") && !!elem.selected;
              },
              selected: function(elem) {
                if (elem.parentNode) {
                  elem.parentNode.selectedIndex;
                }
                return elem.selected === true;
              },
              // Contents
              empty: function(elem) {
                for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
                  if (elem.nodeType < 6) {
                    return false;
                  }
                }
                return true;
              },
              parent: function(elem) {
                return !Expr.pseudos.empty(elem);
              },
              // Element/input types
              header: function(elem) {
                return rheader.test(elem.nodeName);
              },
              input: function(elem) {
                return rinputs.test(elem.nodeName);
              },
              button: function(elem) {
                return nodeName(elem, "input") && elem.type === "button" || nodeName(elem, "button");
              },
              text: function(elem) {
                var attr2;
                return nodeName(elem, "input") && elem.type === "text" && // Support: IE <10 only
                // New HTML5 attribute values (e.g., "search") appear
                // with elem.type === "text"
                ((attr2 = elem.getAttribute("type")) == null || attr2.toLowerCase() === "text");
              },
              // Position-in-collection
              first: createPositionalPseudo(function() {
                return [0];
              }),
              last: createPositionalPseudo(function(_matchIndexes, length) {
                return [length - 1];
              }),
              eq: createPositionalPseudo(function(_matchIndexes, length, argument) {
                return [argument < 0 ? argument + length : argument];
              }),
              even: createPositionalPseudo(function(matchIndexes, length) {
                var i2 = 0;
                for (; i2 < length; i2 += 2) {
                  matchIndexes.push(i2);
                }
                return matchIndexes;
              }),
              odd: createPositionalPseudo(function(matchIndexes, length) {
                var i2 = 1;
                for (; i2 < length; i2 += 2) {
                  matchIndexes.push(i2);
                }
                return matchIndexes;
              }),
              lt: createPositionalPseudo(function(matchIndexes, length, argument) {
                var i2;
                if (argument < 0) {
                  i2 = argument + length;
                } else if (argument > length) {
                  i2 = length;
                } else {
                  i2 = argument;
                }
                for (; --i2 >= 0; ) {
                  matchIndexes.push(i2);
                }
                return matchIndexes;
              }),
              gt: createPositionalPseudo(function(matchIndexes, length, argument) {
                var i2 = argument < 0 ? argument + length : argument;
                for (; ++i2 < length; ) {
                  matchIndexes.push(i2);
                }
                return matchIndexes;
              })
            }
          };
          Expr.pseudos.nth = Expr.pseudos.eq;
          for (i in { radio: true, checkbox: true, file: true, password: true, image: true }) {
            Expr.pseudos[i] = createInputPseudo(i);
          }
          for (i in { submit: true, reset: true }) {
            Expr.pseudos[i] = createButtonPseudo(i);
          }
          function setFilters() {
          }
          setFilters.prototype = Expr.filters = Expr.pseudos;
          Expr.setFilters = new setFilters();
          function tokenize(selector, parseOnly) {
            var matched, match, tokens, type, soFar, groups, preFilters, cached = tokenCache[selector + " "];
            if (cached) {
              return parseOnly ? 0 : cached.slice(0);
            }
            soFar = selector;
            groups = [];
            preFilters = Expr.preFilter;
            while (soFar) {
              if (!matched || (match = rcomma.exec(soFar))) {
                if (match) {
                  soFar = soFar.slice(match[0].length) || soFar;
                }
                groups.push(tokens = []);
              }
              matched = false;
              if (match = rleadingCombinator.exec(soFar)) {
                matched = match.shift();
                tokens.push({
                  value: matched,
                  // Cast descendant combinators to space
                  type: match[0].replace(rtrimCSS, " ")
                });
                soFar = soFar.slice(matched.length);
              }
              for (type in Expr.filter) {
                if ((match = matchExpr[type].exec(soFar)) && (!preFilters[type] || (match = preFilters[type](match)))) {
                  matched = match.shift();
                  tokens.push({
                    value: matched,
                    type,
                    matches: match
                  });
                  soFar = soFar.slice(matched.length);
                }
              }
              if (!matched) {
                break;
              }
            }
            if (parseOnly) {
              return soFar.length;
            }
            return soFar ? find.error(selector) : (
              // Cache the tokens
              tokenCache(selector, groups).slice(0)
            );
          }
          function toSelector(tokens) {
            var i2 = 0, len = tokens.length, selector = "";
            for (; i2 < len; i2++) {
              selector += tokens[i2].value;
            }
            return selector;
          }
          function addCombinator(matcher, combinator, base) {
            var dir2 = combinator.dir, skip = combinator.next, key = skip || dir2, checkNonElements = base && key === "parentNode", doneName = done++;
            return combinator.first ? (
              // Check against closest ancestor/preceding element
              function(elem, context, xml) {
                while (elem = elem[dir2]) {
                  if (elem.nodeType === 1 || checkNonElements) {
                    return matcher(elem, context, xml);
                  }
                }
                return false;
              }
            ) : (
              // Check against all ancestor/preceding elements
              function(elem, context, xml) {
                var oldCache, outerCache, newCache = [dirruns, doneName];
                if (xml) {
                  while (elem = elem[dir2]) {
                    if (elem.nodeType === 1 || checkNonElements) {
                      if (matcher(elem, context, xml)) {
                        return true;
                      }
                    }
                  }
                } else {
                  while (elem = elem[dir2]) {
                    if (elem.nodeType === 1 || checkNonElements) {
                      outerCache = elem[expando] || (elem[expando] = {});
                      if (skip && nodeName(elem, skip)) {
                        elem = elem[dir2] || elem;
                      } else if ((oldCache = outerCache[key]) && oldCache[0] === dirruns && oldCache[1] === doneName) {
                        return newCache[2] = oldCache[2];
                      } else {
                        outerCache[key] = newCache;
                        if (newCache[2] = matcher(elem, context, xml)) {
                          return true;
                        }
                      }
                    }
                  }
                }
                return false;
              }
            );
          }
          function elementMatcher(matchers) {
            return matchers.length > 1 ? function(elem, context, xml) {
              var i2 = matchers.length;
              while (i2--) {
                if (!matchers[i2](elem, context, xml)) {
                  return false;
                }
              }
              return true;
            } : matchers[0];
          }
          function multipleContexts(selector, contexts, results) {
            var i2 = 0, len = contexts.length;
            for (; i2 < len; i2++) {
              find(selector, contexts[i2], results);
            }
            return results;
          }
          function condense(unmatched, map, filter, context, xml) {
            var elem, newUnmatched = [], i2 = 0, len = unmatched.length, mapped = map != null;
            for (; i2 < len; i2++) {
              if (elem = unmatched[i2]) {
                if (!filter || filter(elem, context, xml)) {
                  newUnmatched.push(elem);
                  if (mapped) {
                    map.push(i2);
                  }
                }
              }
            }
            return newUnmatched;
          }
          function setMatcher(preFilter, selector, matcher, postFilter, postFinder, postSelector) {
            if (postFilter && !postFilter[expando]) {
              postFilter = setMatcher(postFilter);
            }
            if (postFinder && !postFinder[expando]) {
              postFinder = setMatcher(postFinder, postSelector);
            }
            return markFunction(function(seed, results, context, xml) {
              var temp, i2, elem, matcherOut, preMap = [], postMap = [], preexisting = results.length, elems = seed || multipleContexts(
                selector || "*",
                context.nodeType ? [context] : context,
                []
              ), matcherIn = preFilter && (seed || !selector) ? condense(elems, preMap, preFilter, context, xml) : elems;
              if (matcher) {
                matcherOut = postFinder || (seed ? preFilter : preexisting || postFilter) ? (
                  // ...intermediate processing is necessary
                  []
                ) : (
                  // ...otherwise use results directly
                  results
                );
                matcher(matcherIn, matcherOut, context, xml);
              } else {
                matcherOut = matcherIn;
              }
              if (postFilter) {
                temp = condense(matcherOut, postMap);
                postFilter(temp, [], context, xml);
                i2 = temp.length;
                while (i2--) {
                  if (elem = temp[i2]) {
                    matcherOut[postMap[i2]] = !(matcherIn[postMap[i2]] = elem);
                  }
                }
              }
              if (seed) {
                if (postFinder || preFilter) {
                  if (postFinder) {
                    temp = [];
                    i2 = matcherOut.length;
                    while (i2--) {
                      if (elem = matcherOut[i2]) {
                        temp.push(matcherIn[i2] = elem);
                      }
                    }
                    postFinder(null, matcherOut = [], temp, xml);
                  }
                  i2 = matcherOut.length;
                  while (i2--) {
                    if ((elem = matcherOut[i2]) && (temp = postFinder ? indexOf.call(seed, elem) : preMap[i2]) > -1) {
                      seed[temp] = !(results[temp] = elem);
                    }
                  }
                }
              } else {
                matcherOut = condense(
                  matcherOut === results ? matcherOut.splice(preexisting, matcherOut.length) : matcherOut
                );
                if (postFinder) {
                  postFinder(null, results, matcherOut, xml);
                } else {
                  push2.apply(results, matcherOut);
                }
              }
            });
          }
          function matcherFromTokens(tokens) {
            var checkContext, matcher, j, len = tokens.length, leadingRelative = Expr.relative[tokens[0].type], implicitRelative = leadingRelative || Expr.relative[" "], i2 = leadingRelative ? 1 : 0, matchContext = addCombinator(function(elem) {
              return elem === checkContext;
            }, implicitRelative, true), matchAnyContext = addCombinator(function(elem) {
              return indexOf.call(checkContext, elem) > -1;
            }, implicitRelative, true), matchers = [function(elem, context, xml) {
              var ret = !leadingRelative && (xml || context != outermostContext) || ((checkContext = context).nodeType ? matchContext(elem, context, xml) : matchAnyContext(elem, context, xml));
              checkContext = null;
              return ret;
            }];
            for (; i2 < len; i2++) {
              if (matcher = Expr.relative[tokens[i2].type]) {
                matchers = [addCombinator(elementMatcher(matchers), matcher)];
              } else {
                matcher = Expr.filter[tokens[i2].type].apply(null, tokens[i2].matches);
                if (matcher[expando]) {
                  j = ++i2;
                  for (; j < len; j++) {
                    if (Expr.relative[tokens[j].type]) {
                      break;
                    }
                  }
                  return setMatcher(
                    i2 > 1 && elementMatcher(matchers),
                    i2 > 1 && toSelector(
                      // If the preceding token was a descendant combinator, insert an implicit any-element `*`
                      tokens.slice(0, i2 - 1).concat({ value: tokens[i2 - 2].type === " " ? "*" : "" })
                    ).replace(rtrimCSS, "$1"),
                    matcher,
                    i2 < j && matcherFromTokens(tokens.slice(i2, j)),
                    j < len && matcherFromTokens(tokens = tokens.slice(j)),
                    j < len && toSelector(tokens)
                  );
                }
                matchers.push(matcher);
              }
            }
            return elementMatcher(matchers);
          }
          function matcherFromGroupMatchers(elementMatchers, setMatchers) {
            var bySet = setMatchers.length > 0, byElement = elementMatchers.length > 0, superMatcher = function(seed, context, xml, results, outermost) {
              var elem, j, matcher, matchedCount = 0, i2 = "0", unmatched = seed && [], setMatched = [], contextBackup = outermostContext, elems = seed || byElement && Expr.find.TAG("*", outermost), dirrunsUnique = dirruns += contextBackup == null ? 1 : Math.random() || 0.1, len = elems.length;
              if (outermost) {
                outermostContext = context == document3 || context || outermost;
              }
              for (; i2 !== len && (elem = elems[i2]) != null; i2++) {
                if (byElement && elem) {
                  j = 0;
                  if (!context && elem.ownerDocument != document3) {
                    setDocument(elem);
                    xml = !documentIsHTML;
                  }
                  while (matcher = elementMatchers[j++]) {
                    if (matcher(elem, context || document3, xml)) {
                      push2.call(results, elem);
                      break;
                    }
                  }
                  if (outermost) {
                    dirruns = dirrunsUnique;
                  }
                }
                if (bySet) {
                  if (elem = !matcher && elem) {
                    matchedCount--;
                  }
                  if (seed) {
                    unmatched.push(elem);
                  }
                }
              }
              matchedCount += i2;
              if (bySet && i2 !== matchedCount) {
                j = 0;
                while (matcher = setMatchers[j++]) {
                  matcher(unmatched, setMatched, context, xml);
                }
                if (seed) {
                  if (matchedCount > 0) {
                    while (i2--) {
                      if (!(unmatched[i2] || setMatched[i2])) {
                        setMatched[i2] = pop.call(results);
                      }
                    }
                  }
                  setMatched = condense(setMatched);
                }
                push2.apply(results, setMatched);
                if (outermost && !seed && setMatched.length > 0 && matchedCount + setMatchers.length > 1) {
                  jQuery.uniqueSort(results);
                }
              }
              if (outermost) {
                dirruns = dirrunsUnique;
                outermostContext = contextBackup;
              }
              return unmatched;
            };
            return bySet ? markFunction(superMatcher) : superMatcher;
          }
          function compile(selector, match) {
            var i2, setMatchers = [], elementMatchers = [], cached = compilerCache[selector + " "];
            if (!cached) {
              if (!match) {
                match = tokenize(selector);
              }
              i2 = match.length;
              while (i2--) {
                cached = matcherFromTokens(match[i2]);
                if (cached[expando]) {
                  setMatchers.push(cached);
                } else {
                  elementMatchers.push(cached);
                }
              }
              cached = compilerCache(
                selector,
                matcherFromGroupMatchers(elementMatchers, setMatchers)
              );
              cached.selector = selector;
            }
            return cached;
          }
          function select(selector, context, results, seed) {
            var i2, tokens, token, type, find2, compiled = typeof selector === "function" && selector, match = !seed && tokenize(selector = compiled.selector || selector);
            results = results || [];
            if (match.length === 1) {
              tokens = match[0] = match[0].slice(0);
              if (tokens.length > 2 && (token = tokens[0]).type === "ID" && context.nodeType === 9 && documentIsHTML && Expr.relative[tokens[1].type]) {
                context = (Expr.find.ID(
                  token.matches[0].replace(runescape, funescape),
                  context
                ) || [])[0];
                if (!context) {
                  return results;
                } else if (compiled) {
                  context = context.parentNode;
                }
                selector = selector.slice(tokens.shift().value.length);
              }
              i2 = matchExpr.needsContext.test(selector) ? 0 : tokens.length;
              while (i2--) {
                token = tokens[i2];
                if (Expr.relative[type = token.type]) {
                  break;
                }
                if (find2 = Expr.find[type]) {
                  if (seed = find2(
                    token.matches[0].replace(runescape, funescape),
                    rsibling.test(tokens[0].type) && testContext(context.parentNode) || context
                  )) {
                    tokens.splice(i2, 1);
                    selector = seed.length && toSelector(tokens);
                    if (!selector) {
                      push2.apply(results, seed);
                      return results;
                    }
                    break;
                  }
                }
              }
            }
            (compiled || compile(selector, match))(
              seed,
              context,
              !documentIsHTML,
              results,
              !context || rsibling.test(selector) && testContext(context.parentNode) || context
            );
            return results;
          }
          support.sortStable = expando.split("").sort(sortOrder).join("") === expando;
          setDocument();
          support.sortDetached = assert(function(el) {
            return el.compareDocumentPosition(document3.createElement("fieldset")) & 1;
          });
          jQuery.find = find;
          jQuery.expr[":"] = jQuery.expr.pseudos;
          jQuery.unique = jQuery.uniqueSort;
          find.compile = compile;
          find.select = select;
          find.setDocument = setDocument;
          find.tokenize = tokenize;
          find.escape = jQuery.escapeSelector;
          find.getText = jQuery.text;
          find.isXML = jQuery.isXMLDoc;
          find.selectors = jQuery.expr;
          find.support = jQuery.support;
          find.uniqueSort = jQuery.uniqueSort;
        })();
        var dir = function(elem, dir2, until) {
          var matched = [], truncate = until !== void 0;
          while ((elem = elem[dir2]) && elem.nodeType !== 9) {
            if (elem.nodeType === 1) {
              if (truncate && jQuery(elem).is(until)) {
                break;
              }
              matched.push(elem);
            }
          }
          return matched;
        };
        var siblings = function(n, elem) {
          var matched = [];
          for (; n; n = n.nextSibling) {
            if (n.nodeType === 1 && n !== elem) {
              matched.push(n);
            }
          }
          return matched;
        };
        var rneedsContext = jQuery.expr.match.needsContext;
        var rsingleTag = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
        function winnow(elements, qualifier, not) {
          if (isFunction(qualifier)) {
            return jQuery.grep(elements, function(elem, i) {
              return !!qualifier.call(elem, i, elem) !== not;
            });
          }
          if (qualifier.nodeType) {
            return jQuery.grep(elements, function(elem) {
              return elem === qualifier !== not;
            });
          }
          if (typeof qualifier !== "string") {
            return jQuery.grep(elements, function(elem) {
              return indexOf.call(qualifier, elem) > -1 !== not;
            });
          }
          return jQuery.filter(qualifier, elements, not);
        }
        jQuery.filter = function(expr, elems, not) {
          var elem = elems[0];
          if (not) {
            expr = ":not(" + expr + ")";
          }
          if (elems.length === 1 && elem.nodeType === 1) {
            return jQuery.find.matchesSelector(elem, expr) ? [elem] : [];
          }
          return jQuery.find.matches(expr, jQuery.grep(elems, function(elem2) {
            return elem2.nodeType === 1;
          }));
        };
        jQuery.fn.extend({
          find: function(selector) {
            var i, ret, len = this.length, self = this;
            if (typeof selector !== "string") {
              return this.pushStack(jQuery(selector).filter(function() {
                for (i = 0; i < len; i++) {
                  if (jQuery.contains(self[i], this)) {
                    return true;
                  }
                }
              }));
            }
            ret = this.pushStack([]);
            for (i = 0; i < len; i++) {
              jQuery.find(selector, self[i], ret);
            }
            return len > 1 ? jQuery.uniqueSort(ret) : ret;
          },
          filter: function(selector) {
            return this.pushStack(winnow(this, selector || [], false));
          },
          not: function(selector) {
            return this.pushStack(winnow(this, selector || [], true));
          },
          is: function(selector) {
            return !!winnow(
              this,
              // If this is a positional/relative selector, check membership in the returned set
              // so $("p:first").is("p:last") won't return true for a doc with two "p".
              typeof selector === "string" && rneedsContext.test(selector) ? jQuery(selector) : selector || [],
              false
            ).length;
          }
        });
        var rootjQuery, rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/, init = jQuery.fn.init = function(selector, context, root) {
          var match, elem;
          if (!selector) {
            return this;
          }
          root = root || rootjQuery;
          if (typeof selector === "string") {
            if (selector[0] === "<" && selector[selector.length - 1] === ">" && selector.length >= 3) {
              match = [null, selector, null];
            } else {
              match = rquickExpr.exec(selector);
            }
            if (match && (match[1] || !context)) {
              if (match[1]) {
                context = context instanceof jQuery ? context[0] : context;
                jQuery.merge(this, jQuery.parseHTML(
                  match[1],
                  context && context.nodeType ? context.ownerDocument || context : document2,
                  true
                ));
                if (rsingleTag.test(match[1]) && jQuery.isPlainObject(context)) {
                  for (match in context) {
                    if (isFunction(this[match])) {
                      this[match](context[match]);
                    } else {
                      this.attr(match, context[match]);
                    }
                  }
                }
                return this;
              } else {
                elem = document2.getElementById(match[2]);
                if (elem) {
                  this[0] = elem;
                  this.length = 1;
                }
                return this;
              }
            } else if (!context || context.jquery) {
              return (context || root).find(selector);
            } else {
              return this.constructor(context).find(selector);
            }
          } else if (selector.nodeType) {
            this[0] = selector;
            this.length = 1;
            return this;
          } else if (isFunction(selector)) {
            return root.ready !== void 0 ? root.ready(selector) : (
              // Execute immediately if ready is not present
              selector(jQuery)
            );
          }
          return jQuery.makeArray(selector, this);
        };
        init.prototype = jQuery.fn;
        rootjQuery = jQuery(document2);
        var rparentsprev = /^(?:parents|prev(?:Until|All))/, guaranteedUnique = {
          children: true,
          contents: true,
          next: true,
          prev: true
        };
        jQuery.fn.extend({
          has: function(target) {
            var targets = jQuery(target, this), l = targets.length;
            return this.filter(function() {
              var i = 0;
              for (; i < l; i++) {
                if (jQuery.contains(this, targets[i])) {
                  return true;
                }
              }
            });
          },
          closest: function(selectors, context) {
            var cur, i = 0, l = this.length, matched = [], targets = typeof selectors !== "string" && jQuery(selectors);
            if (!rneedsContext.test(selectors)) {
              for (; i < l; i++) {
                for (cur = this[i]; cur && cur !== context; cur = cur.parentNode) {
                  if (cur.nodeType < 11 && (targets ? targets.index(cur) > -1 : (
                    // Don't pass non-elements to jQuery#find
                    cur.nodeType === 1 && jQuery.find.matchesSelector(cur, selectors)
                  ))) {
                    matched.push(cur);
                    break;
                  }
                }
              }
            }
            return this.pushStack(matched.length > 1 ? jQuery.uniqueSort(matched) : matched);
          },
          // Determine the position of an element within the set
          index: function(elem) {
            if (!elem) {
              return this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
            }
            if (typeof elem === "string") {
              return indexOf.call(jQuery(elem), this[0]);
            }
            return indexOf.call(
              this,
              // If it receives a jQuery object, the first element is used
              elem.jquery ? elem[0] : elem
            );
          },
          add: function(selector, context) {
            return this.pushStack(
              jQuery.uniqueSort(
                jQuery.merge(this.get(), jQuery(selector, context))
              )
            );
          },
          addBack: function(selector) {
            return this.add(
              selector == null ? this.prevObject : this.prevObject.filter(selector)
            );
          }
        });
        function sibling(cur, dir2) {
          while ((cur = cur[dir2]) && cur.nodeType !== 1) {
          }
          return cur;
        }
        jQuery.each({
          parent: function(elem) {
            var parent = elem.parentNode;
            return parent && parent.nodeType !== 11 ? parent : null;
          },
          parents: function(elem) {
            return dir(elem, "parentNode");
          },
          parentsUntil: function(elem, _i, until) {
            return dir(elem, "parentNode", until);
          },
          next: function(elem) {
            return sibling(elem, "nextSibling");
          },
          prev: function(elem) {
            return sibling(elem, "previousSibling");
          },
          nextAll: function(elem) {
            return dir(elem, "nextSibling");
          },
          prevAll: function(elem) {
            return dir(elem, "previousSibling");
          },
          nextUntil: function(elem, _i, until) {
            return dir(elem, "nextSibling", until);
          },
          prevUntil: function(elem, _i, until) {
            return dir(elem, "previousSibling", until);
          },
          siblings: function(elem) {
            return siblings((elem.parentNode || {}).firstChild, elem);
          },
          children: function(elem) {
            return siblings(elem.firstChild);
          },
          contents: function(elem) {
            if (elem.contentDocument != null && // Support: IE 11+
            // <object> elements with no `data` attribute has an object
            // `contentDocument` with a `null` prototype.
            getProto(elem.contentDocument)) {
              return elem.contentDocument;
            }
            if (nodeName(elem, "template")) {
              elem = elem.content || elem;
            }
            return jQuery.merge([], elem.childNodes);
          }
        }, function(name, fn) {
          jQuery.fn[name] = function(until, selector) {
            var matched = jQuery.map(this, fn, until);
            if (name.slice(-5) !== "Until") {
              selector = until;
            }
            if (selector && typeof selector === "string") {
              matched = jQuery.filter(selector, matched);
            }
            if (this.length > 1) {
              if (!guaranteedUnique[name]) {
                jQuery.uniqueSort(matched);
              }
              if (rparentsprev.test(name)) {
                matched.reverse();
              }
            }
            return this.pushStack(matched);
          };
        });
        var rnothtmlwhite = /[^\x20\t\r\n\f]+/g;
        function createOptions(options) {
          var object = {};
          jQuery.each(options.match(rnothtmlwhite) || [], function(_, flag) {
            object[flag] = true;
          });
          return object;
        }
        jQuery.Callbacks = function(options) {
          options = typeof options === "string" ? createOptions(options) : jQuery.extend({}, options);
          var firing, memory, fired, locked, list = [], queue = [], firingIndex = -1, fire = function() {
            locked = locked || options.once;
            fired = firing = true;
            for (; queue.length; firingIndex = -1) {
              memory = queue.shift();
              while (++firingIndex < list.length) {
                if (list[firingIndex].apply(memory[0], memory[1]) === false && options.stopOnFalse) {
                  firingIndex = list.length;
                  memory = false;
                }
              }
            }
            if (!options.memory) {
              memory = false;
            }
            firing = false;
            if (locked) {
              if (memory) {
                list = [];
              } else {
                list = "";
              }
            }
          }, self = {
            // Add a callback or a collection of callbacks to the list
            add: function() {
              if (list) {
                if (memory && !firing) {
                  firingIndex = list.length - 1;
                  queue.push(memory);
                }
                (function add(args) {
                  jQuery.each(args, function(_, arg) {
                    if (isFunction(arg)) {
                      if (!options.unique || !self.has(arg)) {
                        list.push(arg);
                      }
                    } else if (arg && arg.length && toType(arg) !== "string") {
                      add(arg);
                    }
                  });
                })(arguments);
                if (memory && !firing) {
                  fire();
                }
              }
              return this;
            },
            // Remove a callback from the list
            remove: function() {
              jQuery.each(arguments, function(_, arg) {
                var index;
                while ((index = jQuery.inArray(arg, list, index)) > -1) {
                  list.splice(index, 1);
                  if (index <= firingIndex) {
                    firingIndex--;
                  }
                }
              });
              return this;
            },
            // Check if a given callback is in the list.
            // If no argument is given, return whether or not list has callbacks attached.
            has: function(fn) {
              return fn ? jQuery.inArray(fn, list) > -1 : list.length > 0;
            },
            // Remove all callbacks from the list
            empty: function() {
              if (list) {
                list = [];
              }
              return this;
            },
            // Disable .fire and .add
            // Abort any current/pending executions
            // Clear all callbacks and values
            disable: function() {
              locked = queue = [];
              list = memory = "";
              return this;
            },
            disabled: function() {
              return !list;
            },
            // Disable .fire
            // Also disable .add unless we have memory (since it would have no effect)
            // Abort any pending executions
            lock: function() {
              locked = queue = [];
              if (!memory && !firing) {
                list = memory = "";
              }
              return this;
            },
            locked: function() {
              return !!locked;
            },
            // Call all callbacks with the given context and arguments
            fireWith: function(context, args) {
              if (!locked) {
                args = args || [];
                args = [context, args.slice ? args.slice() : args];
                queue.push(args);
                if (!firing) {
                  fire();
                }
              }
              return this;
            },
            // Call all the callbacks with the given arguments
            fire: function() {
              self.fireWith(this, arguments);
              return this;
            },
            // To know if the callbacks have already been called at least once
            fired: function() {
              return !!fired;
            }
          };
          return self;
        };
        function Identity(v) {
          return v;
        }
        function Thrower(ex) {
          throw ex;
        }
        function adoptValue(value, resolve, reject, noValue) {
          var method;
          try {
            if (value && isFunction(method = value.promise)) {
              method.call(value).done(resolve).fail(reject);
            } else if (value && isFunction(method = value.then)) {
              method.call(value, resolve, reject);
            } else {
              resolve.apply(void 0, [value].slice(noValue));
            }
          } catch (value2) {
            reject.apply(void 0, [value2]);
          }
        }
        jQuery.extend({
          Deferred: function(func) {
            var tuples = [
              // action, add listener, callbacks,
              // ... .then handlers, argument index, [final state]
              [
                "notify",
                "progress",
                jQuery.Callbacks("memory"),
                jQuery.Callbacks("memory"),
                2
              ],
              [
                "resolve",
                "done",
                jQuery.Callbacks("once memory"),
                jQuery.Callbacks("once memory"),
                0,
                "resolved"
              ],
              [
                "reject",
                "fail",
                jQuery.Callbacks("once memory"),
                jQuery.Callbacks("once memory"),
                1,
                "rejected"
              ]
            ], state = "pending", promise = {
              state: function() {
                return state;
              },
              always: function() {
                deferred.done(arguments).fail(arguments);
                return this;
              },
              "catch": function(fn) {
                return promise.then(null, fn);
              },
              // Keep pipe for back-compat
              pipe: function() {
                var fns = arguments;
                return jQuery.Deferred(function(newDefer) {
                  jQuery.each(tuples, function(_i, tuple) {
                    var fn = isFunction(fns[tuple[4]]) && fns[tuple[4]];
                    deferred[tuple[1]](function() {
                      var returned = fn && fn.apply(this, arguments);
                      if (returned && isFunction(returned.promise)) {
                        returned.promise().progress(newDefer.notify).done(newDefer.resolve).fail(newDefer.reject);
                      } else {
                        newDefer[tuple[0] + "With"](
                          this,
                          fn ? [returned] : arguments
                        );
                      }
                    });
                  });
                  fns = null;
                }).promise();
              },
              then: function(onFulfilled, onRejected, onProgress) {
                var maxDepth = 0;
                function resolve(depth, deferred2, handler, special) {
                  return function() {
                    var that = this, args = arguments, mightThrow = function() {
                      var returned, then;
                      if (depth < maxDepth) {
                        return;
                      }
                      returned = handler.apply(that, args);
                      if (returned === deferred2.promise()) {
                        throw new TypeError("Thenable self-resolution");
                      }
                      then = returned && // Support: Promises/A+ section 2.3.4
                      // https://promisesaplus.com/#point-64
                      // Only check objects and functions for thenability
                      (typeof returned === "object" || typeof returned === "function") && returned.then;
                      if (isFunction(then)) {
                        if (special) {
                          then.call(
                            returned,
                            resolve(maxDepth, deferred2, Identity, special),
                            resolve(maxDepth, deferred2, Thrower, special)
                          );
                        } else {
                          maxDepth++;
                          then.call(
                            returned,
                            resolve(maxDepth, deferred2, Identity, special),
                            resolve(maxDepth, deferred2, Thrower, special),
                            resolve(
                              maxDepth,
                              deferred2,
                              Identity,
                              deferred2.notifyWith
                            )
                          );
                        }
                      } else {
                        if (handler !== Identity) {
                          that = void 0;
                          args = [returned];
                        }
                        (special || deferred2.resolveWith)(that, args);
                      }
                    }, process = special ? mightThrow : function() {
                      try {
                        mightThrow();
                      } catch (e) {
                        if (jQuery.Deferred.exceptionHook) {
                          jQuery.Deferred.exceptionHook(
                            e,
                            process.error
                          );
                        }
                        if (depth + 1 >= maxDepth) {
                          if (handler !== Thrower) {
                            that = void 0;
                            args = [e];
                          }
                          deferred2.rejectWith(that, args);
                        }
                      }
                    };
                    if (depth) {
                      process();
                    } else {
                      if (jQuery.Deferred.getErrorHook) {
                        process.error = jQuery.Deferred.getErrorHook();
                      } else if (jQuery.Deferred.getStackHook) {
                        process.error = jQuery.Deferred.getStackHook();
                      }
                      window2.setTimeout(process);
                    }
                  };
                }
                return jQuery.Deferred(function(newDefer) {
                  tuples[0][3].add(
                    resolve(
                      0,
                      newDefer,
                      isFunction(onProgress) ? onProgress : Identity,
                      newDefer.notifyWith
                    )
                  );
                  tuples[1][3].add(
                    resolve(
                      0,
                      newDefer,
                      isFunction(onFulfilled) ? onFulfilled : Identity
                    )
                  );
                  tuples[2][3].add(
                    resolve(
                      0,
                      newDefer,
                      isFunction(onRejected) ? onRejected : Thrower
                    )
                  );
                }).promise();
              },
              // Get a promise for this deferred
              // If obj is provided, the promise aspect is added to the object
              promise: function(obj) {
                return obj != null ? jQuery.extend(obj, promise) : promise;
              }
            }, deferred = {};
            jQuery.each(tuples, function(i, tuple) {
              var list = tuple[2], stateString = tuple[5];
              promise[tuple[1]] = list.add;
              if (stateString) {
                list.add(
                  function() {
                    state = stateString;
                  },
                  // rejected_callbacks.disable
                  // fulfilled_callbacks.disable
                  tuples[3 - i][2].disable,
                  // rejected_handlers.disable
                  // fulfilled_handlers.disable
                  tuples[3 - i][3].disable,
                  // progress_callbacks.lock
                  tuples[0][2].lock,
                  // progress_handlers.lock
                  tuples[0][3].lock
                );
              }
              list.add(tuple[3].fire);
              deferred[tuple[0]] = function() {
                deferred[tuple[0] + "With"](this === deferred ? void 0 : this, arguments);
                return this;
              };
              deferred[tuple[0] + "With"] = list.fireWith;
            });
            promise.promise(deferred);
            if (func) {
              func.call(deferred, deferred);
            }
            return deferred;
          },
          // Deferred helper
          when: function(singleValue) {
            var remaining = arguments.length, i = remaining, resolveContexts = Array(i), resolveValues = slice.call(arguments), primary = jQuery.Deferred(), updateFunc = function(i2) {
              return function(value) {
                resolveContexts[i2] = this;
                resolveValues[i2] = arguments.length > 1 ? slice.call(arguments) : value;
                if (!--remaining) {
                  primary.resolveWith(resolveContexts, resolveValues);
                }
              };
            };
            if (remaining <= 1) {
              adoptValue(
                singleValue,
                primary.done(updateFunc(i)).resolve,
                primary.reject,
                !remaining
              );
              if (primary.state() === "pending" || isFunction(resolveValues[i] && resolveValues[i].then)) {
                return primary.then();
              }
            }
            while (i--) {
              adoptValue(resolveValues[i], updateFunc(i), primary.reject);
            }
            return primary.promise();
          }
        });
        var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
        jQuery.Deferred.exceptionHook = function(error, asyncError) {
          if (window2.console && window2.console.warn && error && rerrorNames.test(error.name)) {
            window2.console.warn(
              "jQuery.Deferred exception: " + error.message,
              error.stack,
              asyncError
            );
          }
        };
        jQuery.readyException = function(error) {
          window2.setTimeout(function() {
            throw error;
          });
        };
        var readyList = jQuery.Deferred();
        jQuery.fn.ready = function(fn) {
          readyList.then(fn).catch(function(error) {
            jQuery.readyException(error);
          });
          return this;
        };
        jQuery.extend({
          // Is the DOM ready to be used? Set to true once it occurs.
          isReady: false,
          // A counter to track how many items to wait for before
          // the ready event fires. See trac-6781
          readyWait: 1,
          // Handle when the DOM is ready
          ready: function(wait) {
            if (wait === true ? --jQuery.readyWait : jQuery.isReady) {
              return;
            }
            jQuery.isReady = true;
            if (wait !== true && --jQuery.readyWait > 0) {
              return;
            }
            readyList.resolveWith(document2, [jQuery]);
          }
        });
        jQuery.ready.then = readyList.then;
        function completed() {
          document2.removeEventListener("DOMContentLoaded", completed);
          window2.removeEventListener("load", completed);
          jQuery.ready();
        }
        if (document2.readyState === "complete" || document2.readyState !== "loading" && !document2.documentElement.doScroll) {
          window2.setTimeout(jQuery.ready);
        } else {
          document2.addEventListener("DOMContentLoaded", completed);
          window2.addEventListener("load", completed);
        }
        var access = function(elems, fn, key, value, chainable, emptyGet, raw) {
          var i = 0, len = elems.length, bulk = key == null;
          if (toType(key) === "object") {
            chainable = true;
            for (i in key) {
              access(elems, fn, i, key[i], true, emptyGet, raw);
            }
          } else if (value !== void 0) {
            chainable = true;
            if (!isFunction(value)) {
              raw = true;
            }
            if (bulk) {
              if (raw) {
                fn.call(elems, value);
                fn = null;
              } else {
                bulk = fn;
                fn = function(elem, _key, value2) {
                  return bulk.call(jQuery(elem), value2);
                };
              }
            }
            if (fn) {
              for (; i < len; i++) {
                fn(
                  elems[i],
                  key,
                  raw ? value : value.call(elems[i], i, fn(elems[i], key))
                );
              }
            }
          }
          if (chainable) {
            return elems;
          }
          if (bulk) {
            return fn.call(elems);
          }
          return len ? fn(elems[0], key) : emptyGet;
        };
        var rmsPrefix = /^-ms-/, rdashAlpha = /-([a-z])/g;
        function fcamelCase(_all, letter) {
          return letter.toUpperCase();
        }
        function camelCase(string) {
          return string.replace(rmsPrefix, "ms-").replace(rdashAlpha, fcamelCase);
        }
        var acceptData = function(owner) {
          return owner.nodeType === 1 || owner.nodeType === 9 || !+owner.nodeType;
        };
        function Data() {
          this.expando = jQuery.expando + Data.uid++;
        }
        Data.uid = 1;
        Data.prototype = {
          cache: function(owner) {
            var value = owner[this.expando];
            if (!value) {
              value = {};
              if (acceptData(owner)) {
                if (owner.nodeType) {
                  owner[this.expando] = value;
                } else {
                  Object.defineProperty(owner, this.expando, {
                    value,
                    configurable: true
                  });
                }
              }
            }
            return value;
          },
          set: function(owner, data, value) {
            var prop, cache = this.cache(owner);
            if (typeof data === "string") {
              cache[camelCase(data)] = value;
            } else {
              for (prop in data) {
                cache[camelCase(prop)] = data[prop];
              }
            }
            return cache;
          },
          get: function(owner, key) {
            return key === void 0 ? this.cache(owner) : (
              // Always use camelCase key (gh-2257)
              owner[this.expando] && owner[this.expando][camelCase(key)]
            );
          },
          access: function(owner, key, value) {
            if (key === void 0 || key && typeof key === "string" && value === void 0) {
              return this.get(owner, key);
            }
            this.set(owner, key, value);
            return value !== void 0 ? value : key;
          },
          remove: function(owner, key) {
            var i, cache = owner[this.expando];
            if (cache === void 0) {
              return;
            }
            if (key !== void 0) {
              if (Array.isArray(key)) {
                key = key.map(camelCase);
              } else {
                key = camelCase(key);
                key = key in cache ? [key] : key.match(rnothtmlwhite) || [];
              }
              i = key.length;
              while (i--) {
                delete cache[key[i]];
              }
            }
            if (key === void 0 || jQuery.isEmptyObject(cache)) {
              if (owner.nodeType) {
                owner[this.expando] = void 0;
              } else {
                delete owner[this.expando];
              }
            }
          },
          hasData: function(owner) {
            var cache = owner[this.expando];
            return cache !== void 0 && !jQuery.isEmptyObject(cache);
          }
        };
        var dataPriv = new Data();
        var dataUser = new Data();
        var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, rmultiDash = /[A-Z]/g;
        function getData(data) {
          if (data === "true") {
            return true;
          }
          if (data === "false") {
            return false;
          }
          if (data === "null") {
            return null;
          }
          if (data === +data + "") {
            return +data;
          }
          if (rbrace.test(data)) {
            return JSON.parse(data);
          }
          return data;
        }
        function dataAttr(elem, key, data) {
          var name;
          if (data === void 0 && elem.nodeType === 1) {
            name = "data-" + key.replace(rmultiDash, "-$&").toLowerCase();
            data = elem.getAttribute(name);
            if (typeof data === "string") {
              try {
                data = getData(data);
              } catch (e) {
              }
              dataUser.set(elem, key, data);
            } else {
              data = void 0;
            }
          }
          return data;
        }
        jQuery.extend({
          hasData: function(elem) {
            return dataUser.hasData(elem) || dataPriv.hasData(elem);
          },
          data: function(elem, name, data) {
            return dataUser.access(elem, name, data);
          },
          removeData: function(elem, name) {
            dataUser.remove(elem, name);
          },
          // TODO: Now that all calls to _data and _removeData have been replaced
          // with direct calls to dataPriv methods, these can be deprecated.
          _data: function(elem, name, data) {
            return dataPriv.access(elem, name, data);
          },
          _removeData: function(elem, name) {
            dataPriv.remove(elem, name);
          }
        });
        jQuery.fn.extend({
          data: function(key, value) {
            var i, name, data, elem = this[0], attrs = elem && elem.attributes;
            if (key === void 0) {
              if (this.length) {
                data = dataUser.get(elem);
                if (elem.nodeType === 1 && !dataPriv.get(elem, "hasDataAttrs")) {
                  i = attrs.length;
                  while (i--) {
                    if (attrs[i]) {
                      name = attrs[i].name;
                      if (name.indexOf("data-") === 0) {
                        name = camelCase(name.slice(5));
                        dataAttr(elem, name, data[name]);
                      }
                    }
                  }
                  dataPriv.set(elem, "hasDataAttrs", true);
                }
              }
              return data;
            }
            if (typeof key === "object") {
              return this.each(function() {
                dataUser.set(this, key);
              });
            }
            return access(this, function(value2) {
              var data2;
              if (elem && value2 === void 0) {
                data2 = dataUser.get(elem, key);
                if (data2 !== void 0) {
                  return data2;
                }
                data2 = dataAttr(elem, key);
                if (data2 !== void 0) {
                  return data2;
                }
                return;
              }
              this.each(function() {
                dataUser.set(this, key, value2);
              });
            }, null, value, arguments.length > 1, null, true);
          },
          removeData: function(key) {
            return this.each(function() {
              dataUser.remove(this, key);
            });
          }
        });
        jQuery.extend({
          queue: function(elem, type, data) {
            var queue;
            if (elem) {
              type = (type || "fx") + "queue";
              queue = dataPriv.get(elem, type);
              if (data) {
                if (!queue || Array.isArray(data)) {
                  queue = dataPriv.access(elem, type, jQuery.makeArray(data));
                } else {
                  queue.push(data);
                }
              }
              return queue || [];
            }
          },
          dequeue: function(elem, type) {
            type = type || "fx";
            var queue = jQuery.queue(elem, type), startLength = queue.length, fn = queue.shift(), hooks = jQuery._queueHooks(elem, type), next = function() {
              jQuery.dequeue(elem, type);
            };
            if (fn === "inprogress") {
              fn = queue.shift();
              startLength--;
            }
            if (fn) {
              if (type === "fx") {
                queue.unshift("inprogress");
              }
              delete hooks.stop;
              fn.call(elem, next, hooks);
            }
            if (!startLength && hooks) {
              hooks.empty.fire();
            }
          },
          // Not public - generate a queueHooks object, or return the current one
          _queueHooks: function(elem, type) {
            var key = type + "queueHooks";
            return dataPriv.get(elem, key) || dataPriv.access(elem, key, {
              empty: jQuery.Callbacks("once memory").add(function() {
                dataPriv.remove(elem, [type + "queue", key]);
              })
            });
          }
        });
        jQuery.fn.extend({
          queue: function(type, data) {
            var setter = 2;
            if (typeof type !== "string") {
              data = type;
              type = "fx";
              setter--;
            }
            if (arguments.length < setter) {
              return jQuery.queue(this[0], type);
            }
            return data === void 0 ? this : this.each(function() {
              var queue = jQuery.queue(this, type, data);
              jQuery._queueHooks(this, type);
              if (type === "fx" && queue[0] !== "inprogress") {
                jQuery.dequeue(this, type);
              }
            });
          },
          dequeue: function(type) {
            return this.each(function() {
              jQuery.dequeue(this, type);
            });
          },
          clearQueue: function(type) {
            return this.queue(type || "fx", []);
          },
          // Get a promise resolved when queues of a certain type
          // are emptied (fx is the type by default)
          promise: function(type, obj) {
            var tmp, count = 1, defer = jQuery.Deferred(), elements = this, i = this.length, resolve = function() {
              if (!--count) {
                defer.resolveWith(elements, [elements]);
              }
            };
            if (typeof type !== "string") {
              obj = type;
              type = void 0;
            }
            type = type || "fx";
            while (i--) {
              tmp = dataPriv.get(elements[i], type + "queueHooks");
              if (tmp && tmp.empty) {
                count++;
                tmp.empty.add(resolve);
              }
            }
            resolve();
            return defer.promise(obj);
          }
        });
        var pnum = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source;
        var rcssNum = new RegExp("^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i");
        var cssExpand = ["Top", "Right", "Bottom", "Left"];
        var documentElement = document2.documentElement;
        var isAttached = function(elem) {
          return jQuery.contains(elem.ownerDocument, elem);
        }, composed = { composed: true };
        if (documentElement.getRootNode) {
          isAttached = function(elem) {
            return jQuery.contains(elem.ownerDocument, elem) || elem.getRootNode(composed) === elem.ownerDocument;
          };
        }
        var isHiddenWithinTree = function(elem, el) {
          elem = el || elem;
          return elem.style.display === "none" || elem.style.display === "" && // Otherwise, check computed style
          // Support: Firefox <=43 - 45
          // Disconnected elements can have computed display: none, so first confirm that elem is
          // in the document.
          isAttached(elem) && jQuery.css(elem, "display") === "none";
        };
        function adjustCSS(elem, prop, valueParts, tween) {
          var adjusted, scale, maxIterations = 20, currentValue = tween ? function() {
            return tween.cur();
          } : function() {
            return jQuery.css(elem, prop, "");
          }, initial = currentValue(), unit = valueParts && valueParts[3] || (jQuery.cssNumber[prop] ? "" : "px"), initialInUnit = elem.nodeType && (jQuery.cssNumber[prop] || unit !== "px" && +initial) && rcssNum.exec(jQuery.css(elem, prop));
          if (initialInUnit && initialInUnit[3] !== unit) {
            initial = initial / 2;
            unit = unit || initialInUnit[3];
            initialInUnit = +initial || 1;
            while (maxIterations--) {
              jQuery.style(elem, prop, initialInUnit + unit);
              if ((1 - scale) * (1 - (scale = currentValue() / initial || 0.5)) <= 0) {
                maxIterations = 0;
              }
              initialInUnit = initialInUnit / scale;
            }
            initialInUnit = initialInUnit * 2;
            jQuery.style(elem, prop, initialInUnit + unit);
            valueParts = valueParts || [];
          }
          if (valueParts) {
            initialInUnit = +initialInUnit || +initial || 0;
            adjusted = valueParts[1] ? initialInUnit + (valueParts[1] + 1) * valueParts[2] : +valueParts[2];
            if (tween) {
              tween.unit = unit;
              tween.start = initialInUnit;
              tween.end = adjusted;
            }
          }
          return adjusted;
        }
        var defaultDisplayMap = {};
        function getDefaultDisplay(elem) {
          var temp, doc = elem.ownerDocument, nodeName2 = elem.nodeName, display = defaultDisplayMap[nodeName2];
          if (display) {
            return display;
          }
          temp = doc.body.appendChild(doc.createElement(nodeName2));
          display = jQuery.css(temp, "display");
          temp.parentNode.removeChild(temp);
          if (display === "none") {
            display = "block";
          }
          defaultDisplayMap[nodeName2] = display;
          return display;
        }
        function showHide(elements, show) {
          var display, elem, values = [], index = 0, length = elements.length;
          for (; index < length; index++) {
            elem = elements[index];
            if (!elem.style) {
              continue;
            }
            display = elem.style.display;
            if (show) {
              if (display === "none") {
                values[index] = dataPriv.get(elem, "display") || null;
                if (!values[index]) {
                  elem.style.display = "";
                }
              }
              if (elem.style.display === "" && isHiddenWithinTree(elem)) {
                values[index] = getDefaultDisplay(elem);
              }
            } else {
              if (display !== "none") {
                values[index] = "none";
                dataPriv.set(elem, "display", display);
              }
            }
          }
          for (index = 0; index < length; index++) {
            if (values[index] != null) {
              elements[index].style.display = values[index];
            }
          }
          return elements;
        }
        jQuery.fn.extend({
          show: function() {
            return showHide(this, true);
          },
          hide: function() {
            return showHide(this);
          },
          toggle: function(state) {
            if (typeof state === "boolean") {
              return state ? this.show() : this.hide();
            }
            return this.each(function() {
              if (isHiddenWithinTree(this)) {
                jQuery(this).show();
              } else {
                jQuery(this).hide();
              }
            });
          }
        });
        var rcheckableType = /^(?:checkbox|radio)$/i;
        var rtagName = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i;
        var rscriptType = /^$|^module$|\/(?:java|ecma)script/i;
        (function() {
          var fragment = document2.createDocumentFragment(), div = fragment.appendChild(document2.createElement("div")), input = document2.createElement("input");
          input.setAttribute("type", "radio");
          input.setAttribute("checked", "checked");
          input.setAttribute("name", "t");
          div.appendChild(input);
          support.checkClone = div.cloneNode(true).cloneNode(true).lastChild.checked;
          div.innerHTML = "<textarea>x</textarea>";
          support.noCloneChecked = !!div.cloneNode(true).lastChild.defaultValue;
          div.innerHTML = "<option></option>";
          support.option = !!div.lastChild;
        })();
        var wrapMap = {
          // XHTML parsers do not magically insert elements in the
          // same way that tag soup parsers do. So we cannot shorten
          // this by omitting <tbody> or other required elements.
          thead: [1, "<table>", "</table>"],
          col: [2, "<table><colgroup>", "</colgroup></table>"],
          tr: [2, "<table><tbody>", "</tbody></table>"],
          td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
          _default: [0, "", ""]
        };
        wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
        wrapMap.th = wrapMap.td;
        if (!support.option) {
          wrapMap.optgroup = wrapMap.option = [1, "<select multiple='multiple'>", "</select>"];
        }
        function getAll(context, tag) {
          var ret;
          if (typeof context.getElementsByTagName !== "undefined") {
            ret = context.getElementsByTagName(tag || "*");
          } else if (typeof context.querySelectorAll !== "undefined") {
            ret = context.querySelectorAll(tag || "*");
          } else {
            ret = [];
          }
          if (tag === void 0 || tag && nodeName(context, tag)) {
            return jQuery.merge([context], ret);
          }
          return ret;
        }
        function setGlobalEval(elems, refElements) {
          var i = 0, l = elems.length;
          for (; i < l; i++) {
            dataPriv.set(
              elems[i],
              "globalEval",
              !refElements || dataPriv.get(refElements[i], "globalEval")
            );
          }
        }
        var rhtml = /<|&#?\w+;/;
        function buildFragment(elems, context, scripts, selection, ignored) {
          var elem, tmp, tag, wrap, attached, j, fragment = context.createDocumentFragment(), nodes = [], i = 0, l = elems.length;
          for (; i < l; i++) {
            elem = elems[i];
            if (elem || elem === 0) {
              if (toType(elem) === "object") {
                jQuery.merge(nodes, elem.nodeType ? [elem] : elem);
              } else if (!rhtml.test(elem)) {
                nodes.push(context.createTextNode(elem));
              } else {
                tmp = tmp || fragment.appendChild(context.createElement("div"));
                tag = (rtagName.exec(elem) || ["", ""])[1].toLowerCase();
                wrap = wrapMap[tag] || wrapMap._default;
                tmp.innerHTML = wrap[1] + jQuery.htmlPrefilter(elem) + wrap[2];
                j = wrap[0];
                while (j--) {
                  tmp = tmp.lastChild;
                }
                jQuery.merge(nodes, tmp.childNodes);
                tmp = fragment.firstChild;
                tmp.textContent = "";
              }
            }
          }
          fragment.textContent = "";
          i = 0;
          while (elem = nodes[i++]) {
            if (selection && jQuery.inArray(elem, selection) > -1) {
              if (ignored) {
                ignored.push(elem);
              }
              continue;
            }
            attached = isAttached(elem);
            tmp = getAll(fragment.appendChild(elem), "script");
            if (attached) {
              setGlobalEval(tmp);
            }
            if (scripts) {
              j = 0;
              while (elem = tmp[j++]) {
                if (rscriptType.test(elem.type || "")) {
                  scripts.push(elem);
                }
              }
            }
          }
          return fragment;
        }
        var rtypenamespace = /^([^.]*)(?:\.(.+)|)/;
        function returnTrue() {
          return true;
        }
        function returnFalse() {
          return false;
        }
        function on(elem, types, selector, data, fn, one) {
          var origFn, type;
          if (typeof types === "object") {
            if (typeof selector !== "string") {
              data = data || selector;
              selector = void 0;
            }
            for (type in types) {
              on(elem, type, selector, data, types[type], one);
            }
            return elem;
          }
          if (data == null && fn == null) {
            fn = selector;
            data = selector = void 0;
          } else if (fn == null) {
            if (typeof selector === "string") {
              fn = data;
              data = void 0;
            } else {
              fn = data;
              data = selector;
              selector = void 0;
            }
          }
          if (fn === false) {
            fn = returnFalse;
          } else if (!fn) {
            return elem;
          }
          if (one === 1) {
            origFn = fn;
            fn = function(event) {
              jQuery().off(event);
              return origFn.apply(this, arguments);
            };
            fn.guid = origFn.guid || (origFn.guid = jQuery.guid++);
          }
          return elem.each(function() {
            jQuery.event.add(this, types, fn, data, selector);
          });
        }
        jQuery.event = {
          global: {},
          add: function(elem, types, handler, data, selector) {
            var handleObjIn, eventHandle, tmp, events, t, handleObj, special, handlers, type, namespaces, origType, elemData = dataPriv.get(elem);
            if (!acceptData(elem)) {
              return;
            }
            if (handler.handler) {
              handleObjIn = handler;
              handler = handleObjIn.handler;
              selector = handleObjIn.selector;
            }
            if (selector) {
              jQuery.find.matchesSelector(documentElement, selector);
            }
            if (!handler.guid) {
              handler.guid = jQuery.guid++;
            }
            if (!(events = elemData.events)) {
              events = elemData.events = /* @__PURE__ */ Object.create(null);
            }
            if (!(eventHandle = elemData.handle)) {
              eventHandle = elemData.handle = function(e) {
                return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ? jQuery.event.dispatch.apply(elem, arguments) : void 0;
              };
            }
            types = (types || "").match(rnothtmlwhite) || [""];
            t = types.length;
            while (t--) {
              tmp = rtypenamespace.exec(types[t]) || [];
              type = origType = tmp[1];
              namespaces = (tmp[2] || "").split(".").sort();
              if (!type) {
                continue;
              }
              special = jQuery.event.special[type] || {};
              type = (selector ? special.delegateType : special.bindType) || type;
              special = jQuery.event.special[type] || {};
              handleObj = jQuery.extend({
                type,
                origType,
                data,
                handler,
                guid: handler.guid,
                selector,
                needsContext: selector && jQuery.expr.match.needsContext.test(selector),
                namespace: namespaces.join(".")
              }, handleObjIn);
              if (!(handlers = events[type])) {
                handlers = events[type] = [];
                handlers.delegateCount = 0;
                if (!special.setup || special.setup.call(elem, data, namespaces, eventHandle) === false) {
                  if (elem.addEventListener) {
                    elem.addEventListener(type, eventHandle);
                  }
                }
              }
              if (special.add) {
                special.add.call(elem, handleObj);
                if (!handleObj.handler.guid) {
                  handleObj.handler.guid = handler.guid;
                }
              }
              if (selector) {
                handlers.splice(handlers.delegateCount++, 0, handleObj);
              } else {
                handlers.push(handleObj);
              }
              jQuery.event.global[type] = true;
            }
          },
          // Detach an event or set of events from an element
          remove: function(elem, types, handler, selector, mappedTypes) {
            var j, origCount, tmp, events, t, handleObj, special, handlers, type, namespaces, origType, elemData = dataPriv.hasData(elem) && dataPriv.get(elem);
            if (!elemData || !(events = elemData.events)) {
              return;
            }
            types = (types || "").match(rnothtmlwhite) || [""];
            t = types.length;
            while (t--) {
              tmp = rtypenamespace.exec(types[t]) || [];
              type = origType = tmp[1];
              namespaces = (tmp[2] || "").split(".").sort();
              if (!type) {
                for (type in events) {
                  jQuery.event.remove(elem, type + types[t], handler, selector, true);
                }
                continue;
              }
              special = jQuery.event.special[type] || {};
              type = (selector ? special.delegateType : special.bindType) || type;
              handlers = events[type] || [];
              tmp = tmp[2] && new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)");
              origCount = j = handlers.length;
              while (j--) {
                handleObj = handlers[j];
                if ((mappedTypes || origType === handleObj.origType) && (!handler || handler.guid === handleObj.guid) && (!tmp || tmp.test(handleObj.namespace)) && (!selector || selector === handleObj.selector || selector === "**" && handleObj.selector)) {
                  handlers.splice(j, 1);
                  if (handleObj.selector) {
                    handlers.delegateCount--;
                  }
                  if (special.remove) {
                    special.remove.call(elem, handleObj);
                  }
                }
              }
              if (origCount && !handlers.length) {
                if (!special.teardown || special.teardown.call(elem, namespaces, elemData.handle) === false) {
                  jQuery.removeEvent(elem, type, elemData.handle);
                }
                delete events[type];
              }
            }
            if (jQuery.isEmptyObject(events)) {
              dataPriv.remove(elem, "handle events");
            }
          },
          dispatch: function(nativeEvent) {
            var i, j, ret, matched, handleObj, handlerQueue, args = new Array(arguments.length), event = jQuery.event.fix(nativeEvent), handlers = (dataPriv.get(this, "events") || /* @__PURE__ */ Object.create(null))[event.type] || [], special = jQuery.event.special[event.type] || {};
            args[0] = event;
            for (i = 1; i < arguments.length; i++) {
              args[i] = arguments[i];
            }
            event.delegateTarget = this;
            if (special.preDispatch && special.preDispatch.call(this, event) === false) {
              return;
            }
            handlerQueue = jQuery.event.handlers.call(this, event, handlers);
            i = 0;
            while ((matched = handlerQueue[i++]) && !event.isPropagationStopped()) {
              event.currentTarget = matched.elem;
              j = 0;
              while ((handleObj = matched.handlers[j++]) && !event.isImmediatePropagationStopped()) {
                if (!event.rnamespace || handleObj.namespace === false || event.rnamespace.test(handleObj.namespace)) {
                  event.handleObj = handleObj;
                  event.data = handleObj.data;
                  ret = ((jQuery.event.special[handleObj.origType] || {}).handle || handleObj.handler).apply(matched.elem, args);
                  if (ret !== void 0) {
                    if ((event.result = ret) === false) {
                      event.preventDefault();
                      event.stopPropagation();
                    }
                  }
                }
              }
            }
            if (special.postDispatch) {
              special.postDispatch.call(this, event);
            }
            return event.result;
          },
          handlers: function(event, handlers) {
            var i, handleObj, sel, matchedHandlers, matchedSelectors, handlerQueue = [], delegateCount = handlers.delegateCount, cur = event.target;
            if (delegateCount && // Support: IE <=9
            // Black-hole SVG <use> instance trees (trac-13180)
            cur.nodeType && // Support: Firefox <=42
            // Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
            // https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
            // Support: IE 11 only
            // ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
            !(event.type === "click" && event.button >= 1)) {
              for (; cur !== this; cur = cur.parentNode || this) {
                if (cur.nodeType === 1 && !(event.type === "click" && cur.disabled === true)) {
                  matchedHandlers = [];
                  matchedSelectors = {};
                  for (i = 0; i < delegateCount; i++) {
                    handleObj = handlers[i];
                    sel = handleObj.selector + " ";
                    if (matchedSelectors[sel] === void 0) {
                      matchedSelectors[sel] = handleObj.needsContext ? jQuery(sel, this).index(cur) > -1 : jQuery.find(sel, this, null, [cur]).length;
                    }
                    if (matchedSelectors[sel]) {
                      matchedHandlers.push(handleObj);
                    }
                  }
                  if (matchedHandlers.length) {
                    handlerQueue.push({ elem: cur, handlers: matchedHandlers });
                  }
                }
              }
            }
            cur = this;
            if (delegateCount < handlers.length) {
              handlerQueue.push({ elem: cur, handlers: handlers.slice(delegateCount) });
            }
            return handlerQueue;
          },
          addProp: function(name, hook) {
            Object.defineProperty(jQuery.Event.prototype, name, {
              enumerable: true,
              configurable: true,
              get: isFunction(hook) ? function() {
                if (this.originalEvent) {
                  return hook(this.originalEvent);
                }
              } : function() {
                if (this.originalEvent) {
                  return this.originalEvent[name];
                }
              },
              set: function(value) {
                Object.defineProperty(this, name, {
                  enumerable: true,
                  configurable: true,
                  writable: true,
                  value
                });
              }
            });
          },
          fix: function(originalEvent) {
            return originalEvent[jQuery.expando] ? originalEvent : new jQuery.Event(originalEvent);
          },
          special: {
            load: {
              // Prevent triggered image.load events from bubbling to window.load
              noBubble: true
            },
            click: {
              // Utilize native event to ensure correct state for checkable inputs
              setup: function(data) {
                var el = this || data;
                if (rcheckableType.test(el.type) && el.click && nodeName(el, "input")) {
                  leverageNative(el, "click", true);
                }
                return false;
              },
              trigger: function(data) {
                var el = this || data;
                if (rcheckableType.test(el.type) && el.click && nodeName(el, "input")) {
                  leverageNative(el, "click");
                }
                return true;
              },
              // For cross-browser consistency, suppress native .click() on links
              // Also prevent it if we're currently inside a leveraged native-event stack
              _default: function(event) {
                var target = event.target;
                return rcheckableType.test(target.type) && target.click && nodeName(target, "input") && dataPriv.get(target, "click") || nodeName(target, "a");
              }
            },
            beforeunload: {
              postDispatch: function(event) {
                if (event.result !== void 0 && event.originalEvent) {
                  event.originalEvent.returnValue = event.result;
                }
              }
            }
          }
        };
        function leverageNative(el, type, isSetup) {
          if (!isSetup) {
            if (dataPriv.get(el, type) === void 0) {
              jQuery.event.add(el, type, returnTrue);
            }
            return;
          }
          dataPriv.set(el, type, false);
          jQuery.event.add(el, type, {
            namespace: false,
            handler: function(event) {
              var result, saved = dataPriv.get(this, type);
              if (event.isTrigger & 1 && this[type]) {
                if (!saved) {
                  saved = slice.call(arguments);
                  dataPriv.set(this, type, saved);
                  this[type]();
                  result = dataPriv.get(this, type);
                  dataPriv.set(this, type, false);
                  if (saved !== result) {
                    event.stopImmediatePropagation();
                    event.preventDefault();
                    return result;
                  }
                } else if ((jQuery.event.special[type] || {}).delegateType) {
                  event.stopPropagation();
                }
              } else if (saved) {
                dataPriv.set(this, type, jQuery.event.trigger(
                  saved[0],
                  saved.slice(1),
                  this
                ));
                event.stopPropagation();
                event.isImmediatePropagationStopped = returnTrue;
              }
            }
          });
        }
        jQuery.removeEvent = function(elem, type, handle) {
          if (elem.removeEventListener) {
            elem.removeEventListener(type, handle);
          }
        };
        jQuery.Event = function(src, props) {
          if (!(this instanceof jQuery.Event)) {
            return new jQuery.Event(src, props);
          }
          if (src && src.type) {
            this.originalEvent = src;
            this.type = src.type;
            this.isDefaultPrevented = src.defaultPrevented || src.defaultPrevented === void 0 && // Support: Android <=2.3 only
            src.returnValue === false ? returnTrue : returnFalse;
            this.target = src.target && src.target.nodeType === 3 ? src.target.parentNode : src.target;
            this.currentTarget = src.currentTarget;
            this.relatedTarget = src.relatedTarget;
          } else {
            this.type = src;
          }
          if (props) {
            jQuery.extend(this, props);
          }
          this.timeStamp = src && src.timeStamp || Date.now();
          this[jQuery.expando] = true;
        };
        jQuery.Event.prototype = {
          constructor: jQuery.Event,
          isDefaultPrevented: returnFalse,
          isPropagationStopped: returnFalse,
          isImmediatePropagationStopped: returnFalse,
          isSimulated: false,
          preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = returnTrue;
            if (e && !this.isSimulated) {
              e.preventDefault();
            }
          },
          stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = returnTrue;
            if (e && !this.isSimulated) {
              e.stopPropagation();
            }
          },
          stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = returnTrue;
            if (e && !this.isSimulated) {
              e.stopImmediatePropagation();
            }
            this.stopPropagation();
          }
        };
        jQuery.each({
          altKey: true,
          bubbles: true,
          cancelable: true,
          changedTouches: true,
          ctrlKey: true,
          detail: true,
          eventPhase: true,
          metaKey: true,
          pageX: true,
          pageY: true,
          shiftKey: true,
          view: true,
          "char": true,
          code: true,
          charCode: true,
          key: true,
          keyCode: true,
          button: true,
          buttons: true,
          clientX: true,
          clientY: true,
          offsetX: true,
          offsetY: true,
          pointerId: true,
          pointerType: true,
          screenX: true,
          screenY: true,
          targetTouches: true,
          toElement: true,
          touches: true,
          which: true
        }, jQuery.event.addProp);
        jQuery.each({ focus: "focusin", blur: "focusout" }, function(type, delegateType) {
          function focusMappedHandler(nativeEvent) {
            if (document2.documentMode) {
              var handle = dataPriv.get(this, "handle"), event = jQuery.event.fix(nativeEvent);
              event.type = nativeEvent.type === "focusin" ? "focus" : "blur";
              event.isSimulated = true;
              handle(nativeEvent);
              if (event.target === event.currentTarget) {
                handle(event);
              }
            } else {
              jQuery.event.simulate(
                delegateType,
                nativeEvent.target,
                jQuery.event.fix(nativeEvent)
              );
            }
          }
          jQuery.event.special[type] = {
            // Utilize native event if possible so blur/focus sequence is correct
            setup: function() {
              var attaches;
              leverageNative(this, type, true);
              if (document2.documentMode) {
                attaches = dataPriv.get(this, delegateType);
                if (!attaches) {
                  this.addEventListener(delegateType, focusMappedHandler);
                }
                dataPriv.set(this, delegateType, (attaches || 0) + 1);
              } else {
                return false;
              }
            },
            trigger: function() {
              leverageNative(this, type);
              return true;
            },
            teardown: function() {
              var attaches;
              if (document2.documentMode) {
                attaches = dataPriv.get(this, delegateType) - 1;
                if (!attaches) {
                  this.removeEventListener(delegateType, focusMappedHandler);
                  dataPriv.remove(this, delegateType);
                } else {
                  dataPriv.set(this, delegateType, attaches);
                }
              } else {
                return false;
              }
            },
            // Suppress native focus or blur if we're currently inside
            // a leveraged native-event stack
            _default: function(event) {
              return dataPriv.get(event.target, type);
            },
            delegateType
          };
          jQuery.event.special[delegateType] = {
            setup: function() {
              var doc = this.ownerDocument || this.document || this, dataHolder = document2.documentMode ? this : doc, attaches = dataPriv.get(dataHolder, delegateType);
              if (!attaches) {
                if (document2.documentMode) {
                  this.addEventListener(delegateType, focusMappedHandler);
                } else {
                  doc.addEventListener(type, focusMappedHandler, true);
                }
              }
              dataPriv.set(dataHolder, delegateType, (attaches || 0) + 1);
            },
            teardown: function() {
              var doc = this.ownerDocument || this.document || this, dataHolder = document2.documentMode ? this : doc, attaches = dataPriv.get(dataHolder, delegateType) - 1;
              if (!attaches) {
                if (document2.documentMode) {
                  this.removeEventListener(delegateType, focusMappedHandler);
                } else {
                  doc.removeEventListener(type, focusMappedHandler, true);
                }
                dataPriv.remove(dataHolder, delegateType);
              } else {
                dataPriv.set(dataHolder, delegateType, attaches);
              }
            }
          };
        });
        jQuery.each({
          mouseenter: "mouseover",
          mouseleave: "mouseout",
          pointerenter: "pointerover",
          pointerleave: "pointerout"
        }, function(orig, fix) {
          jQuery.event.special[orig] = {
            delegateType: fix,
            bindType: fix,
            handle: function(event) {
              var ret, target = this, related = event.relatedTarget, handleObj = event.handleObj;
              if (!related || related !== target && !jQuery.contains(target, related)) {
                event.type = handleObj.origType;
                ret = handleObj.handler.apply(this, arguments);
                event.type = fix;
              }
              return ret;
            }
          };
        });
        jQuery.fn.extend({
          on: function(types, selector, data, fn) {
            return on(this, types, selector, data, fn);
          },
          one: function(types, selector, data, fn) {
            return on(this, types, selector, data, fn, 1);
          },
          off: function(types, selector, fn) {
            var handleObj, type;
            if (types && types.preventDefault && types.handleObj) {
              handleObj = types.handleObj;
              jQuery(types.delegateTarget).off(
                handleObj.namespace ? handleObj.origType + "." + handleObj.namespace : handleObj.origType,
                handleObj.selector,
                handleObj.handler
              );
              return this;
            }
            if (typeof types === "object") {
              for (type in types) {
                this.off(type, selector, types[type]);
              }
              return this;
            }
            if (selector === false || typeof selector === "function") {
              fn = selector;
              selector = void 0;
            }
            if (fn === false) {
              fn = returnFalse;
            }
            return this.each(function() {
              jQuery.event.remove(this, types, fn, selector);
            });
          }
        });
        var rnoInnerhtml = /<script|<style|<link/i, rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i, rcleanScript = /^\s*<!\[CDATA\[|\]\]>\s*$/g;
        function manipulationTarget(elem, content) {
          if (nodeName(elem, "table") && nodeName(content.nodeType !== 11 ? content : content.firstChild, "tr")) {
            return jQuery(elem).children("tbody")[0] || elem;
          }
          return elem;
        }
        function disableScript(elem) {
          elem.type = (elem.getAttribute("type") !== null) + "/" + elem.type;
          return elem;
        }
        function restoreScript(elem) {
          if ((elem.type || "").slice(0, 5) === "true/") {
            elem.type = elem.type.slice(5);
          } else {
            elem.removeAttribute("type");
          }
          return elem;
        }
        function cloneCopyEvent(src, dest) {
          var i, l, type, pdataOld, udataOld, udataCur, events;
          if (dest.nodeType !== 1) {
            return;
          }
          if (dataPriv.hasData(src)) {
            pdataOld = dataPriv.get(src);
            events = pdataOld.events;
            if (events) {
              dataPriv.remove(dest, "handle events");
              for (type in events) {
                for (i = 0, l = events[type].length; i < l; i++) {
                  jQuery.event.add(dest, type, events[type][i]);
                }
              }
            }
          }
          if (dataUser.hasData(src)) {
            udataOld = dataUser.access(src);
            udataCur = jQuery.extend({}, udataOld);
            dataUser.set(dest, udataCur);
          }
        }
        function fixInput(src, dest) {
          var nodeName2 = dest.nodeName.toLowerCase();
          if (nodeName2 === "input" && rcheckableType.test(src.type)) {
            dest.checked = src.checked;
          } else if (nodeName2 === "input" || nodeName2 === "textarea") {
            dest.defaultValue = src.defaultValue;
          }
        }
        function domManip(collection, args, callback, ignored) {
          args = flat(args);
          var fragment, first2, scripts, hasScripts, node, doc, i = 0, l = collection.length, iNoClone = l - 1, value = args[0], valueIsFunction = isFunction(value);
          if (valueIsFunction || l > 1 && typeof value === "string" && !support.checkClone && rchecked.test(value)) {
            return collection.each(function(index) {
              var self = collection.eq(index);
              if (valueIsFunction) {
                args[0] = value.call(this, index, self.html());
              }
              domManip(self, args, callback, ignored);
            });
          }
          if (l) {
            fragment = buildFragment(args, collection[0].ownerDocument, false, collection, ignored);
            first2 = fragment.firstChild;
            if (fragment.childNodes.length === 1) {
              fragment = first2;
            }
            if (first2 || ignored) {
              scripts = jQuery.map(getAll(fragment, "script"), disableScript);
              hasScripts = scripts.length;
              for (; i < l; i++) {
                node = fragment;
                if (i !== iNoClone) {
                  node = jQuery.clone(node, true, true);
                  if (hasScripts) {
                    jQuery.merge(scripts, getAll(node, "script"));
                  }
                }
                callback.call(collection[i], node, i);
              }
              if (hasScripts) {
                doc = scripts[scripts.length - 1].ownerDocument;
                jQuery.map(scripts, restoreScript);
                for (i = 0; i < hasScripts; i++) {
                  node = scripts[i];
                  if (rscriptType.test(node.type || "") && !dataPriv.access(node, "globalEval") && jQuery.contains(doc, node)) {
                    if (node.src && (node.type || "").toLowerCase() !== "module") {
                      if (jQuery._evalUrl && !node.noModule) {
                        jQuery._evalUrl(node.src, {
                          nonce: node.nonce || node.getAttribute("nonce")
                        }, doc);
                      }
                    } else {
                      DOMEval(node.textContent.replace(rcleanScript, ""), node, doc);
                    }
                  }
                }
              }
            }
          }
          return collection;
        }
        function remove(elem, selector, keepData) {
          var node, nodes = selector ? jQuery.filter(selector, elem) : elem, i = 0;
          for (; (node = nodes[i]) != null; i++) {
            if (!keepData && node.nodeType === 1) {
              jQuery.cleanData(getAll(node));
            }
            if (node.parentNode) {
              if (keepData && isAttached(node)) {
                setGlobalEval(getAll(node, "script"));
              }
              node.parentNode.removeChild(node);
            }
          }
          return elem;
        }
        jQuery.extend({
          htmlPrefilter: function(html) {
            return html;
          },
          clone: function(elem, dataAndEvents, deepDataAndEvents) {
            var i, l, srcElements, destElements, clone = elem.cloneNode(true), inPage = isAttached(elem);
            if (!support.noCloneChecked && (elem.nodeType === 1 || elem.nodeType === 11) && !jQuery.isXMLDoc(elem)) {
              destElements = getAll(clone);
              srcElements = getAll(elem);
              for (i = 0, l = srcElements.length; i < l; i++) {
                fixInput(srcElements[i], destElements[i]);
              }
            }
            if (dataAndEvents) {
              if (deepDataAndEvents) {
                srcElements = srcElements || getAll(elem);
                destElements = destElements || getAll(clone);
                for (i = 0, l = srcElements.length; i < l; i++) {
                  cloneCopyEvent(srcElements[i], destElements[i]);
                }
              } else {
                cloneCopyEvent(elem, clone);
              }
            }
            destElements = getAll(clone, "script");
            if (destElements.length > 0) {
              setGlobalEval(destElements, !inPage && getAll(elem, "script"));
            }
            return clone;
          },
          cleanData: function(elems) {
            var data, elem, type, special = jQuery.event.special, i = 0;
            for (; (elem = elems[i]) !== void 0; i++) {
              if (acceptData(elem)) {
                if (data = elem[dataPriv.expando]) {
                  if (data.events) {
                    for (type in data.events) {
                      if (special[type]) {
                        jQuery.event.remove(elem, type);
                      } else {
                        jQuery.removeEvent(elem, type, data.handle);
                      }
                    }
                  }
                  elem[dataPriv.expando] = void 0;
                }
                if (elem[dataUser.expando]) {
                  elem[dataUser.expando] = void 0;
                }
              }
            }
          }
        });
        jQuery.fn.extend({
          detach: function(selector) {
            return remove(this, selector, true);
          },
          remove: function(selector) {
            return remove(this, selector);
          },
          text: function(value) {
            return access(this, function(value2) {
              return value2 === void 0 ? jQuery.text(this) : this.empty().each(function() {
                if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                  this.textContent = value2;
                }
              });
            }, null, value, arguments.length);
          },
          append: function() {
            return domManip(this, arguments, function(elem) {
              if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                var target = manipulationTarget(this, elem);
                target.appendChild(elem);
              }
            });
          },
          prepend: function() {
            return domManip(this, arguments, function(elem) {
              if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                var target = manipulationTarget(this, elem);
                target.insertBefore(elem, target.firstChild);
              }
            });
          },
          before: function() {
            return domManip(this, arguments, function(elem) {
              if (this.parentNode) {
                this.parentNode.insertBefore(elem, this);
              }
            });
          },
          after: function() {
            return domManip(this, arguments, function(elem) {
              if (this.parentNode) {
                this.parentNode.insertBefore(elem, this.nextSibling);
              }
            });
          },
          empty: function() {
            var elem, i = 0;
            for (; (elem = this[i]) != null; i++) {
              if (elem.nodeType === 1) {
                jQuery.cleanData(getAll(elem, false));
                elem.textContent = "";
              }
            }
            return this;
          },
          clone: function(dataAndEvents, deepDataAndEvents) {
            dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
            deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;
            return this.map(function() {
              return jQuery.clone(this, dataAndEvents, deepDataAndEvents);
            });
          },
          html: function(value) {
            return access(this, function(value2) {
              var elem = this[0] || {}, i = 0, l = this.length;
              if (value2 === void 0 && elem.nodeType === 1) {
                return elem.innerHTML;
              }
              if (typeof value2 === "string" && !rnoInnerhtml.test(value2) && !wrapMap[(rtagName.exec(value2) || ["", ""])[1].toLowerCase()]) {
                value2 = jQuery.htmlPrefilter(value2);
                try {
                  for (; i < l; i++) {
                    elem = this[i] || {};
                    if (elem.nodeType === 1) {
                      jQuery.cleanData(getAll(elem, false));
                      elem.innerHTML = value2;
                    }
                  }
                  elem = 0;
                } catch (e) {
                }
              }
              if (elem) {
                this.empty().append(value2);
              }
            }, null, value, arguments.length);
          },
          replaceWith: function() {
            var ignored = [];
            return domManip(this, arguments, function(elem) {
              var parent = this.parentNode;
              if (jQuery.inArray(this, ignored) < 0) {
                jQuery.cleanData(getAll(this));
                if (parent) {
                  parent.replaceChild(elem, this);
                }
              }
            }, ignored);
          }
        });
        jQuery.each({
          appendTo: "append",
          prependTo: "prepend",
          insertBefore: "before",
          insertAfter: "after",
          replaceAll: "replaceWith"
        }, function(name, original) {
          jQuery.fn[name] = function(selector) {
            var elems, ret = [], insert = jQuery(selector), last = insert.length - 1, i = 0;
            for (; i <= last; i++) {
              elems = i === last ? this : this.clone(true);
              jQuery(insert[i])[original](elems);
              push.apply(ret, elems.get());
            }
            return this.pushStack(ret);
          };
        });
        var rnumnonpx = new RegExp("^(" + pnum + ")(?!px)[a-z%]+$", "i");
        var rcustomProp = /^--/;
        var getStyles = function(elem) {
          var view = elem.ownerDocument.defaultView;
          if (!view || !view.opener) {
            view = window2;
          }
          return view.getComputedStyle(elem);
        };
        var swap = function(elem, options, callback) {
          var ret, name, old = {};
          for (name in options) {
            old[name] = elem.style[name];
            elem.style[name] = options[name];
          }
          ret = callback.call(elem);
          for (name in options) {
            elem.style[name] = old[name];
          }
          return ret;
        };
        var rboxStyle = new RegExp(cssExpand.join("|"), "i");
        (function() {
          function computeStyleTests() {
            if (!div) {
              return;
            }
            container.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0";
            div.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%";
            documentElement.appendChild(container).appendChild(div);
            var divStyle = window2.getComputedStyle(div);
            pixelPositionVal = divStyle.top !== "1%";
            reliableMarginLeftVal = roundPixelMeasures(divStyle.marginLeft) === 12;
            div.style.right = "60%";
            pixelBoxStylesVal = roundPixelMeasures(divStyle.right) === 36;
            boxSizingReliableVal = roundPixelMeasures(divStyle.width) === 36;
            div.style.position = "absolute";
            scrollboxSizeVal = roundPixelMeasures(div.offsetWidth / 3) === 12;
            documentElement.removeChild(container);
            div = null;
          }
          function roundPixelMeasures(measure) {
            return Math.round(parseFloat(measure));
          }
          var pixelPositionVal, boxSizingReliableVal, scrollboxSizeVal, pixelBoxStylesVal, reliableTrDimensionsVal, reliableMarginLeftVal, container = document2.createElement("div"), div = document2.createElement("div");
          if (!div.style) {
            return;
          }
          div.style.backgroundClip = "content-box";
          div.cloneNode(true).style.backgroundClip = "";
          support.clearCloneStyle = div.style.backgroundClip === "content-box";
          jQuery.extend(support, {
            boxSizingReliable: function() {
              computeStyleTests();
              return boxSizingReliableVal;
            },
            pixelBoxStyles: function() {
              computeStyleTests();
              return pixelBoxStylesVal;
            },
            pixelPosition: function() {
              computeStyleTests();
              return pixelPositionVal;
            },
            reliableMarginLeft: function() {
              computeStyleTests();
              return reliableMarginLeftVal;
            },
            scrollboxSize: function() {
              computeStyleTests();
              return scrollboxSizeVal;
            },
            // Support: IE 9 - 11+, Edge 15 - 18+
            // IE/Edge misreport `getComputedStyle` of table rows with width/height
            // set in CSS while `offset*` properties report correct values.
            // Behavior in IE 9 is more subtle than in newer versions & it passes
            // some versions of this test; make sure not to make it pass there!
            //
            // Support: Firefox 70+
            // Only Firefox includes border widths
            // in computed dimensions. (gh-4529)
            reliableTrDimensions: function() {
              var table, tr, trChild, trStyle;
              if (reliableTrDimensionsVal == null) {
                table = document2.createElement("table");
                tr = document2.createElement("tr");
                trChild = document2.createElement("div");
                table.style.cssText = "position:absolute;left:-11111px;border-collapse:separate";
                tr.style.cssText = "box-sizing:content-box;border:1px solid";
                tr.style.height = "1px";
                trChild.style.height = "9px";
                trChild.style.display = "block";
                documentElement.appendChild(table).appendChild(tr).appendChild(trChild);
                trStyle = window2.getComputedStyle(tr);
                reliableTrDimensionsVal = parseInt(trStyle.height, 10) + parseInt(trStyle.borderTopWidth, 10) + parseInt(trStyle.borderBottomWidth, 10) === tr.offsetHeight;
                documentElement.removeChild(table);
              }
              return reliableTrDimensionsVal;
            }
          });
        })();
        function curCSS(elem, name, computed) {
          var width, minWidth, maxWidth, ret, isCustomProp = rcustomProp.test(name), style = elem.style;
          computed = computed || getStyles(elem);
          if (computed) {
            ret = computed.getPropertyValue(name) || computed[name];
            if (isCustomProp && ret) {
              ret = ret.replace(rtrimCSS, "$1") || void 0;
            }
            if (ret === "" && !isAttached(elem)) {
              ret = jQuery.style(elem, name);
            }
            if (!support.pixelBoxStyles() && rnumnonpx.test(ret) && rboxStyle.test(name)) {
              width = style.width;
              minWidth = style.minWidth;
              maxWidth = style.maxWidth;
              style.minWidth = style.maxWidth = style.width = ret;
              ret = computed.width;
              style.width = width;
              style.minWidth = minWidth;
              style.maxWidth = maxWidth;
            }
          }
          return ret !== void 0 ? (
            // Support: IE <=9 - 11 only
            // IE returns zIndex value as an integer.
            ret + ""
          ) : ret;
        }
        function addGetHookIf(conditionFn, hookFn) {
          return {
            get: function() {
              if (conditionFn()) {
                delete this.get;
                return;
              }
              return (this.get = hookFn).apply(this, arguments);
            }
          };
        }
        var cssPrefixes = ["Webkit", "Moz", "ms"], emptyStyle = document2.createElement("div").style, vendorProps = {};
        function vendorPropName(name) {
          var capName = name[0].toUpperCase() + name.slice(1), i = cssPrefixes.length;
          while (i--) {
            name = cssPrefixes[i] + capName;
            if (name in emptyStyle) {
              return name;
            }
          }
        }
        function finalPropName(name) {
          var final = jQuery.cssProps[name] || vendorProps[name];
          if (final) {
            return final;
          }
          if (name in emptyStyle) {
            return name;
          }
          return vendorProps[name] = vendorPropName(name) || name;
        }
        var rdisplayswap = /^(none|table(?!-c[ea]).+)/, cssShow = { position: "absolute", visibility: "hidden", display: "block" }, cssNormalTransform = {
          letterSpacing: "0",
          fontWeight: "400"
        };
        function setPositiveNumber(_elem, value, subtract) {
          var matches = rcssNum.exec(value);
          return matches ? (
            // Guard against undefined "subtract", e.g., when used as in cssHooks
            Math.max(0, matches[2] - (subtract || 0)) + (matches[3] || "px")
          ) : value;
        }
        function boxModelAdjustment(elem, dimension, box, isBorderBox, styles, computedVal) {
          var i = dimension === "width" ? 1 : 0, extra = 0, delta = 0, marginDelta = 0;
          if (box === (isBorderBox ? "border" : "content")) {
            return 0;
          }
          for (; i < 4; i += 2) {
            if (box === "margin") {
              marginDelta += jQuery.css(elem, box + cssExpand[i], true, styles);
            }
            if (!isBorderBox) {
              delta += jQuery.css(elem, "padding" + cssExpand[i], true, styles);
              if (box !== "padding") {
                delta += jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
              } else {
                extra += jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
              }
            } else {
              if (box === "content") {
                delta -= jQuery.css(elem, "padding" + cssExpand[i], true, styles);
              }
              if (box !== "margin") {
                delta -= jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
              }
            }
          }
          if (!isBorderBox && computedVal >= 0) {
            delta += Math.max(0, Math.ceil(
              elem["offset" + dimension[0].toUpperCase() + dimension.slice(1)] - computedVal - delta - extra - 0.5
              // If offsetWidth/offsetHeight is unknown, then we can't determine content-box scroll gutter
              // Use an explicit zero to avoid NaN (gh-3964)
            )) || 0;
          }
          return delta + marginDelta;
        }
        function getWidthOrHeight(elem, dimension, extra) {
          var styles = getStyles(elem), boxSizingNeeded = !support.boxSizingReliable() || extra, isBorderBox = boxSizingNeeded && jQuery.css(elem, "boxSizing", false, styles) === "border-box", valueIsBorderBox = isBorderBox, val = curCSS(elem, dimension, styles), offsetProp = "offset" + dimension[0].toUpperCase() + dimension.slice(1);
          if (rnumnonpx.test(val)) {
            if (!extra) {
              return val;
            }
            val = "auto";
          }
          if ((!support.boxSizingReliable() && isBorderBox || // Support: IE 10 - 11+, Edge 15 - 18+
          // IE/Edge misreport `getComputedStyle` of table rows with width/height
          // set in CSS while `offset*` properties report correct values.
          // Interestingly, in some cases IE 9 doesn't suffer from this issue.
          !support.reliableTrDimensions() && nodeName(elem, "tr") || // Fall back to offsetWidth/offsetHeight when value is "auto"
          // This happens for inline elements with no explicit setting (gh-3571)
          val === "auto" || // Support: Android <=4.1 - 4.3 only
          // Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
          !parseFloat(val) && jQuery.css(elem, "display", false, styles) === "inline") && // Make sure the element is visible & connected
          elem.getClientRects().length) {
            isBorderBox = jQuery.css(elem, "boxSizing", false, styles) === "border-box";
            valueIsBorderBox = offsetProp in elem;
            if (valueIsBorderBox) {
              val = elem[offsetProp];
            }
          }
          val = parseFloat(val) || 0;
          return val + boxModelAdjustment(
            elem,
            dimension,
            extra || (isBorderBox ? "border" : "content"),
            valueIsBorderBox,
            styles,
            // Provide the current computed size to request scroll gutter calculation (gh-3589)
            val
          ) + "px";
        }
        jQuery.extend({
          // Add in style property hooks for overriding the default
          // behavior of getting and setting a style property
          cssHooks: {
            opacity: {
              get: function(elem, computed) {
                if (computed) {
                  var ret = curCSS(elem, "opacity");
                  return ret === "" ? "1" : ret;
                }
              }
            }
          },
          // Don't automatically add "px" to these possibly-unitless properties
          cssNumber: {
            animationIterationCount: true,
            aspectRatio: true,
            borderImageSlice: true,
            columnCount: true,
            flexGrow: true,
            flexShrink: true,
            fontWeight: true,
            gridArea: true,
            gridColumn: true,
            gridColumnEnd: true,
            gridColumnStart: true,
            gridRow: true,
            gridRowEnd: true,
            gridRowStart: true,
            lineHeight: true,
            opacity: true,
            order: true,
            orphans: true,
            scale: true,
            widows: true,
            zIndex: true,
            zoom: true,
            // SVG-related
            fillOpacity: true,
            floodOpacity: true,
            stopOpacity: true,
            strokeMiterlimit: true,
            strokeOpacity: true
          },
          // Add in properties whose names you wish to fix before
          // setting or getting the value
          cssProps: {},
          // Get and set the style property on a DOM Node
          style: function(elem, name, value, extra) {
            if (!elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style) {
              return;
            }
            var ret, type, hooks, origName = camelCase(name), isCustomProp = rcustomProp.test(name), style = elem.style;
            if (!isCustomProp) {
              name = finalPropName(origName);
            }
            hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName];
            if (value !== void 0) {
              type = typeof value;
              if (type === "string" && (ret = rcssNum.exec(value)) && ret[1]) {
                value = adjustCSS(elem, name, ret);
                type = "number";
              }
              if (value == null || value !== value) {
                return;
              }
              if (type === "number" && !isCustomProp) {
                value += ret && ret[3] || (jQuery.cssNumber[origName] ? "" : "px");
              }
              if (!support.clearCloneStyle && value === "" && name.indexOf("background") === 0) {
                style[name] = "inherit";
              }
              if (!hooks || !("set" in hooks) || (value = hooks.set(elem, value, extra)) !== void 0) {
                if (isCustomProp) {
                  style.setProperty(name, value);
                } else {
                  style[name] = value;
                }
              }
            } else {
              if (hooks && "get" in hooks && (ret = hooks.get(elem, false, extra)) !== void 0) {
                return ret;
              }
              return style[name];
            }
          },
          css: function(elem, name, extra, styles) {
            var val, num, hooks, origName = camelCase(name), isCustomProp = rcustomProp.test(name);
            if (!isCustomProp) {
              name = finalPropName(origName);
            }
            hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName];
            if (hooks && "get" in hooks) {
              val = hooks.get(elem, true, extra);
            }
            if (val === void 0) {
              val = curCSS(elem, name, styles);
            }
            if (val === "normal" && name in cssNormalTransform) {
              val = cssNormalTransform[name];
            }
            if (extra === "" || extra) {
              num = parseFloat(val);
              return extra === true || isFinite(num) ? num || 0 : val;
            }
            return val;
          }
        });
        jQuery.each(["height", "width"], function(_i, dimension) {
          jQuery.cssHooks[dimension] = {
            get: function(elem, computed, extra) {
              if (computed) {
                return rdisplayswap.test(jQuery.css(elem, "display")) && // Support: Safari 8+
                // Table columns in Safari have non-zero offsetWidth & zero
                // getBoundingClientRect().width unless display is changed.
                // Support: IE <=11 only
                // Running getBoundingClientRect on a disconnected node
                // in IE throws an error.
                (!elem.getClientRects().length || !elem.getBoundingClientRect().width) ? swap(elem, cssShow, function() {
                  return getWidthOrHeight(elem, dimension, extra);
                }) : getWidthOrHeight(elem, dimension, extra);
              }
            },
            set: function(elem, value, extra) {
              var matches, styles = getStyles(elem), scrollboxSizeBuggy = !support.scrollboxSize() && styles.position === "absolute", boxSizingNeeded = scrollboxSizeBuggy || extra, isBorderBox = boxSizingNeeded && jQuery.css(elem, "boxSizing", false, styles) === "border-box", subtract = extra ? boxModelAdjustment(
                elem,
                dimension,
                extra,
                isBorderBox,
                styles
              ) : 0;
              if (isBorderBox && scrollboxSizeBuggy) {
                subtract -= Math.ceil(
                  elem["offset" + dimension[0].toUpperCase() + dimension.slice(1)] - parseFloat(styles[dimension]) - boxModelAdjustment(elem, dimension, "border", false, styles) - 0.5
                );
              }
              if (subtract && (matches = rcssNum.exec(value)) && (matches[3] || "px") !== "px") {
                elem.style[dimension] = value;
                value = jQuery.css(elem, dimension);
              }
              return setPositiveNumber(elem, value, subtract);
            }
          };
        });
        jQuery.cssHooks.marginLeft = addGetHookIf(
          support.reliableMarginLeft,
          function(elem, computed) {
            if (computed) {
              return (parseFloat(curCSS(elem, "marginLeft")) || elem.getBoundingClientRect().left - swap(elem, { marginLeft: 0 }, function() {
                return elem.getBoundingClientRect().left;
              })) + "px";
            }
          }
        );
        jQuery.each({
          margin: "",
          padding: "",
          border: "Width"
        }, function(prefix, suffix) {
          jQuery.cssHooks[prefix + suffix] = {
            expand: function(value) {
              var i = 0, expanded = {}, parts = typeof value === "string" ? value.split(" ") : [value];
              for (; i < 4; i++) {
                expanded[prefix + cssExpand[i] + suffix] = parts[i] || parts[i - 2] || parts[0];
              }
              return expanded;
            }
          };
          if (prefix !== "margin") {
            jQuery.cssHooks[prefix + suffix].set = setPositiveNumber;
          }
        });
        jQuery.fn.extend({
          css: function(name, value) {
            return access(this, function(elem, name2, value2) {
              var styles, len, map = {}, i = 0;
              if (Array.isArray(name2)) {
                styles = getStyles(elem);
                len = name2.length;
                for (; i < len; i++) {
                  map[name2[i]] = jQuery.css(elem, name2[i], false, styles);
                }
                return map;
              }
              return value2 !== void 0 ? jQuery.style(elem, name2, value2) : jQuery.css(elem, name2);
            }, name, value, arguments.length > 1);
          }
        });
        function Tween(elem, options, prop, end, easing) {
          return new Tween.prototype.init(elem, options, prop, end, easing);
        }
        jQuery.Tween = Tween;
        Tween.prototype = {
          constructor: Tween,
          init: function(elem, options, prop, end, easing, unit) {
            this.elem = elem;
            this.prop = prop;
            this.easing = easing || jQuery.easing._default;
            this.options = options;
            this.start = this.now = this.cur();
            this.end = end;
            this.unit = unit || (jQuery.cssNumber[prop] ? "" : "px");
          },
          cur: function() {
            var hooks = Tween.propHooks[this.prop];
            return hooks && hooks.get ? hooks.get(this) : Tween.propHooks._default.get(this);
          },
          run: function(percent) {
            var eased, hooks = Tween.propHooks[this.prop];
            if (this.options.duration) {
              this.pos = eased = jQuery.easing[this.easing](
                percent,
                this.options.duration * percent,
                0,
                1,
                this.options.duration
              );
            } else {
              this.pos = eased = percent;
            }
            this.now = (this.end - this.start) * eased + this.start;
            if (this.options.step) {
              this.options.step.call(this.elem, this.now, this);
            }
            if (hooks && hooks.set) {
              hooks.set(this);
            } else {
              Tween.propHooks._default.set(this);
            }
            return this;
          }
        };
        Tween.prototype.init.prototype = Tween.prototype;
        Tween.propHooks = {
          _default: {
            get: function(tween) {
              var result;
              if (tween.elem.nodeType !== 1 || tween.elem[tween.prop] != null && tween.elem.style[tween.prop] == null) {
                return tween.elem[tween.prop];
              }
              result = jQuery.css(tween.elem, tween.prop, "");
              return !result || result === "auto" ? 0 : result;
            },
            set: function(tween) {
              if (jQuery.fx.step[tween.prop]) {
                jQuery.fx.step[tween.prop](tween);
              } else if (tween.elem.nodeType === 1 && (jQuery.cssHooks[tween.prop] || tween.elem.style[finalPropName(tween.prop)] != null)) {
                jQuery.style(tween.elem, tween.prop, tween.now + tween.unit);
              } else {
                tween.elem[tween.prop] = tween.now;
              }
            }
          }
        };
        Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
          set: function(tween) {
            if (tween.elem.nodeType && tween.elem.parentNode) {
              tween.elem[tween.prop] = tween.now;
            }
          }
        };
        jQuery.easing = {
          linear: function(p) {
            return p;
          },
          swing: function(p) {
            return 0.5 - Math.cos(p * Math.PI) / 2;
          },
          _default: "swing"
        };
        jQuery.fx = Tween.prototype.init;
        jQuery.fx.step = {};
        var fxNow, inProgress, rfxtypes = /^(?:toggle|show|hide)$/, rrun = /queueHooks$/;
        function schedule() {
          if (inProgress) {
            if (document2.hidden === false && window2.requestAnimationFrame) {
              window2.requestAnimationFrame(schedule);
            } else {
              window2.setTimeout(schedule, jQuery.fx.interval);
            }
            jQuery.fx.tick();
          }
        }
        function createFxNow() {
          window2.setTimeout(function() {
            fxNow = void 0;
          });
          return fxNow = Date.now();
        }
        function genFx(type, includeWidth) {
          var which, i = 0, attrs = { height: type };
          includeWidth = includeWidth ? 1 : 0;
          for (; i < 4; i += 2 - includeWidth) {
            which = cssExpand[i];
            attrs["margin" + which] = attrs["padding" + which] = type;
          }
          if (includeWidth) {
            attrs.opacity = attrs.width = type;
          }
          return attrs;
        }
        function createTween(value, prop, animation) {
          var tween, collection = (Animation.tweeners[prop] || []).concat(Animation.tweeners["*"]), index = 0, length = collection.length;
          for (; index < length; index++) {
            if (tween = collection[index].call(animation, prop, value)) {
              return tween;
            }
          }
        }
        function defaultPrefilter(elem, props, opts) {
          var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display, isBox = "width" in props || "height" in props, anim = this, orig = {}, style = elem.style, hidden = elem.nodeType && isHiddenWithinTree(elem), dataShow = dataPriv.get(elem, "fxshow");
          if (!opts.queue) {
            hooks = jQuery._queueHooks(elem, "fx");
            if (hooks.unqueued == null) {
              hooks.unqueued = 0;
              oldfire = hooks.empty.fire;
              hooks.empty.fire = function() {
                if (!hooks.unqueued) {
                  oldfire();
                }
              };
            }
            hooks.unqueued++;
            anim.always(function() {
              anim.always(function() {
                hooks.unqueued--;
                if (!jQuery.queue(elem, "fx").length) {
                  hooks.empty.fire();
                }
              });
            });
          }
          for (prop in props) {
            value = props[prop];
            if (rfxtypes.test(value)) {
              delete props[prop];
              toggle = toggle || value === "toggle";
              if (value === (hidden ? "hide" : "show")) {
                if (value === "show" && dataShow && dataShow[prop] !== void 0) {
                  hidden = true;
                } else {
                  continue;
                }
              }
              orig[prop] = dataShow && dataShow[prop] || jQuery.style(elem, prop);
            }
          }
          propTween = !jQuery.isEmptyObject(props);
          if (!propTween && jQuery.isEmptyObject(orig)) {
            return;
          }
          if (isBox && elem.nodeType === 1) {
            opts.overflow = [style.overflow, style.overflowX, style.overflowY];
            restoreDisplay = dataShow && dataShow.display;
            if (restoreDisplay == null) {
              restoreDisplay = dataPriv.get(elem, "display");
            }
            display = jQuery.css(elem, "display");
            if (display === "none") {
              if (restoreDisplay) {
                display = restoreDisplay;
              } else {
                showHide([elem], true);
                restoreDisplay = elem.style.display || restoreDisplay;
                display = jQuery.css(elem, "display");
                showHide([elem]);
              }
            }
            if (display === "inline" || display === "inline-block" && restoreDisplay != null) {
              if (jQuery.css(elem, "float") === "none") {
                if (!propTween) {
                  anim.done(function() {
                    style.display = restoreDisplay;
                  });
                  if (restoreDisplay == null) {
                    display = style.display;
                    restoreDisplay = display === "none" ? "" : display;
                  }
                }
                style.display = "inline-block";
              }
            }
          }
          if (opts.overflow) {
            style.overflow = "hidden";
            anim.always(function() {
              style.overflow = opts.overflow[0];
              style.overflowX = opts.overflow[1];
              style.overflowY = opts.overflow[2];
            });
          }
          propTween = false;
          for (prop in orig) {
            if (!propTween) {
              if (dataShow) {
                if ("hidden" in dataShow) {
                  hidden = dataShow.hidden;
                }
              } else {
                dataShow = dataPriv.access(elem, "fxshow", { display: restoreDisplay });
              }
              if (toggle) {
                dataShow.hidden = !hidden;
              }
              if (hidden) {
                showHide([elem], true);
              }
              anim.done(function() {
                if (!hidden) {
                  showHide([elem]);
                }
                dataPriv.remove(elem, "fxshow");
                for (prop in orig) {
                  jQuery.style(elem, prop, orig[prop]);
                }
              });
            }
            propTween = createTween(hidden ? dataShow[prop] : 0, prop, anim);
            if (!(prop in dataShow)) {
              dataShow[prop] = propTween.start;
              if (hidden) {
                propTween.end = propTween.start;
                propTween.start = 0;
              }
            }
          }
        }
        function propFilter(props, specialEasing) {
          var index, name, easing, value, hooks;
          for (index in props) {
            name = camelCase(index);
            easing = specialEasing[name];
            value = props[index];
            if (Array.isArray(value)) {
              easing = value[1];
              value = props[index] = value[0];
            }
            if (index !== name) {
              props[name] = value;
              delete props[index];
            }
            hooks = jQuery.cssHooks[name];
            if (hooks && "expand" in hooks) {
              value = hooks.expand(value);
              delete props[name];
              for (index in value) {
                if (!(index in props)) {
                  props[index] = value[index];
                  specialEasing[index] = easing;
                }
              }
            } else {
              specialEasing[name] = easing;
            }
          }
        }
        function Animation(elem, properties, options) {
          var result, stopped, index = 0, length = Animation.prefilters.length, deferred = jQuery.Deferred().always(function() {
            delete tick.elem;
          }), tick = function() {
            if (stopped) {
              return false;
            }
            var currentTime = fxNow || createFxNow(), remaining = Math.max(0, animation.startTime + animation.duration - currentTime), temp = remaining / animation.duration || 0, percent = 1 - temp, index2 = 0, length2 = animation.tweens.length;
            for (; index2 < length2; index2++) {
              animation.tweens[index2].run(percent);
            }
            deferred.notifyWith(elem, [animation, percent, remaining]);
            if (percent < 1 && length2) {
              return remaining;
            }
            if (!length2) {
              deferred.notifyWith(elem, [animation, 1, 0]);
            }
            deferred.resolveWith(elem, [animation]);
            return false;
          }, animation = deferred.promise({
            elem,
            props: jQuery.extend({}, properties),
            opts: jQuery.extend(true, {
              specialEasing: {},
              easing: jQuery.easing._default
            }, options),
            originalProperties: properties,
            originalOptions: options,
            startTime: fxNow || createFxNow(),
            duration: options.duration,
            tweens: [],
            createTween: function(prop, end) {
              var tween = jQuery.Tween(
                elem,
                animation.opts,
                prop,
                end,
                animation.opts.specialEasing[prop] || animation.opts.easing
              );
              animation.tweens.push(tween);
              return tween;
            },
            stop: function(gotoEnd) {
              var index2 = 0, length2 = gotoEnd ? animation.tweens.length : 0;
              if (stopped) {
                return this;
              }
              stopped = true;
              for (; index2 < length2; index2++) {
                animation.tweens[index2].run(1);
              }
              if (gotoEnd) {
                deferred.notifyWith(elem, [animation, 1, 0]);
                deferred.resolveWith(elem, [animation, gotoEnd]);
              } else {
                deferred.rejectWith(elem, [animation, gotoEnd]);
              }
              return this;
            }
          }), props = animation.props;
          propFilter(props, animation.opts.specialEasing);
          for (; index < length; index++) {
            result = Animation.prefilters[index].call(animation, elem, props, animation.opts);
            if (result) {
              if (isFunction(result.stop)) {
                jQuery._queueHooks(animation.elem, animation.opts.queue).stop = result.stop.bind(result);
              }
              return result;
            }
          }
          jQuery.map(props, createTween, animation);
          if (isFunction(animation.opts.start)) {
            animation.opts.start.call(elem, animation);
          }
          animation.progress(animation.opts.progress).done(animation.opts.done, animation.opts.complete).fail(animation.opts.fail).always(animation.opts.always);
          jQuery.fx.timer(
            jQuery.extend(tick, {
              elem,
              anim: animation,
              queue: animation.opts.queue
            })
          );
          return animation;
        }
        jQuery.Animation = jQuery.extend(Animation, {
          tweeners: {
            "*": [function(prop, value) {
              var tween = this.createTween(prop, value);
              adjustCSS(tween.elem, prop, rcssNum.exec(value), tween);
              return tween;
            }]
          },
          tweener: function(props, callback) {
            if (isFunction(props)) {
              callback = props;
              props = ["*"];
            } else {
              props = props.match(rnothtmlwhite);
            }
            var prop, index = 0, length = props.length;
            for (; index < length; index++) {
              prop = props[index];
              Animation.tweeners[prop] = Animation.tweeners[prop] || [];
              Animation.tweeners[prop].unshift(callback);
            }
          },
          prefilters: [defaultPrefilter],
          prefilter: function(callback, prepend) {
            if (prepend) {
              Animation.prefilters.unshift(callback);
            } else {
              Animation.prefilters.push(callback);
            }
          }
        });
        jQuery.speed = function(speed, easing, fn) {
          var opt = speed && typeof speed === "object" ? jQuery.extend({}, speed) : {
            complete: fn || !fn && easing || isFunction(speed) && speed,
            duration: speed,
            easing: fn && easing || easing && !isFunction(easing) && easing
          };
          if (jQuery.fx.off) {
            opt.duration = 0;
          } else {
            if (typeof opt.duration !== "number") {
              if (opt.duration in jQuery.fx.speeds) {
                opt.duration = jQuery.fx.speeds[opt.duration];
              } else {
                opt.duration = jQuery.fx.speeds._default;
              }
            }
          }
          if (opt.queue == null || opt.queue === true) {
            opt.queue = "fx";
          }
          opt.old = opt.complete;
          opt.complete = function() {
            if (isFunction(opt.old)) {
              opt.old.call(this);
            }
            if (opt.queue) {
              jQuery.dequeue(this, opt.queue);
            }
          };
          return opt;
        };
        jQuery.fn.extend({
          fadeTo: function(speed, to, easing, callback) {
            return this.filter(isHiddenWithinTree).css("opacity", 0).show().end().animate({ opacity: to }, speed, easing, callback);
          },
          animate: function(prop, speed, easing, callback) {
            var empty = jQuery.isEmptyObject(prop), optall = jQuery.speed(speed, easing, callback), doAnimation = function() {
              var anim = Animation(this, jQuery.extend({}, prop), optall);
              if (empty || dataPriv.get(this, "finish")) {
                anim.stop(true);
              }
            };
            doAnimation.finish = doAnimation;
            return empty || optall.queue === false ? this.each(doAnimation) : this.queue(optall.queue, doAnimation);
          },
          stop: function(type, clearQueue, gotoEnd) {
            var stopQueue = function(hooks) {
              var stop = hooks.stop;
              delete hooks.stop;
              stop(gotoEnd);
            };
            if (typeof type !== "string") {
              gotoEnd = clearQueue;
              clearQueue = type;
              type = void 0;
            }
            if (clearQueue) {
              this.queue(type || "fx", []);
            }
            return this.each(function() {
              var dequeue = true, index = type != null && type + "queueHooks", timers = jQuery.timers, data = dataPriv.get(this);
              if (index) {
                if (data[index] && data[index].stop) {
                  stopQueue(data[index]);
                }
              } else {
                for (index in data) {
                  if (data[index] && data[index].stop && rrun.test(index)) {
                    stopQueue(data[index]);
                  }
                }
              }
              for (index = timers.length; index--; ) {
                if (timers[index].elem === this && (type == null || timers[index].queue === type)) {
                  timers[index].anim.stop(gotoEnd);
                  dequeue = false;
                  timers.splice(index, 1);
                }
              }
              if (dequeue || !gotoEnd) {
                jQuery.dequeue(this, type);
              }
            });
          },
          finish: function(type) {
            if (type !== false) {
              type = type || "fx";
            }
            return this.each(function() {
              var index, data = dataPriv.get(this), queue = data[type + "queue"], hooks = data[type + "queueHooks"], timers = jQuery.timers, length = queue ? queue.length : 0;
              data.finish = true;
              jQuery.queue(this, type, []);
              if (hooks && hooks.stop) {
                hooks.stop.call(this, true);
              }
              for (index = timers.length; index--; ) {
                if (timers[index].elem === this && timers[index].queue === type) {
                  timers[index].anim.stop(true);
                  timers.splice(index, 1);
                }
              }
              for (index = 0; index < length; index++) {
                if (queue[index] && queue[index].finish) {
                  queue[index].finish.call(this);
                }
              }
              delete data.finish;
            });
          }
        });
        jQuery.each(["toggle", "show", "hide"], function(_i, name) {
          var cssFn = jQuery.fn[name];
          jQuery.fn[name] = function(speed, easing, callback) {
            return speed == null || typeof speed === "boolean" ? cssFn.apply(this, arguments) : this.animate(genFx(name, true), speed, easing, callback);
          };
        });
        jQuery.each({
          slideDown: genFx("show"),
          slideUp: genFx("hide"),
          slideToggle: genFx("toggle"),
          fadeIn: { opacity: "show" },
          fadeOut: { opacity: "hide" },
          fadeToggle: { opacity: "toggle" }
        }, function(name, props) {
          jQuery.fn[name] = function(speed, easing, callback) {
            return this.animate(props, speed, easing, callback);
          };
        });
        jQuery.timers = [];
        jQuery.fx.tick = function() {
          var timer, i = 0, timers = jQuery.timers;
          fxNow = Date.now();
          for (; i < timers.length; i++) {
            timer = timers[i];
            if (!timer() && timers[i] === timer) {
              timers.splice(i--, 1);
            }
          }
          if (!timers.length) {
            jQuery.fx.stop();
          }
          fxNow = void 0;
        };
        jQuery.fx.timer = function(timer) {
          jQuery.timers.push(timer);
          jQuery.fx.start();
        };
        jQuery.fx.interval = 13;
        jQuery.fx.start = function() {
          if (inProgress) {
            return;
          }
          inProgress = true;
          schedule();
        };
        jQuery.fx.stop = function() {
          inProgress = null;
        };
        jQuery.fx.speeds = {
          slow: 600,
          fast: 200,
          // Default speed
          _default: 400
        };
        jQuery.fn.delay = function(time, type) {
          time = jQuery.fx ? jQuery.fx.speeds[time] || time : time;
          type = type || "fx";
          return this.queue(type, function(next, hooks) {
            var timeout = window2.setTimeout(next, time);
            hooks.stop = function() {
              window2.clearTimeout(timeout);
            };
          });
        };
        (function() {
          var input = document2.createElement("input"), select = document2.createElement("select"), opt = select.appendChild(document2.createElement("option"));
          input.type = "checkbox";
          support.checkOn = input.value !== "";
          support.optSelected = opt.selected;
          input = document2.createElement("input");
          input.value = "t";
          input.type = "radio";
          support.radioValue = input.value === "t";
        })();
        var boolHook, attrHandle = jQuery.expr.attrHandle;
        jQuery.fn.extend({
          attr: function(name, value) {
            return access(this, jQuery.attr, name, value, arguments.length > 1);
          },
          removeAttr: function(name) {
            return this.each(function() {
              jQuery.removeAttr(this, name);
            });
          }
        });
        jQuery.extend({
          attr: function(elem, name, value) {
            var ret, hooks, nType = elem.nodeType;
            if (nType === 3 || nType === 8 || nType === 2) {
              return;
            }
            if (typeof elem.getAttribute === "undefined") {
              return jQuery.prop(elem, name, value);
            }
            if (nType !== 1 || !jQuery.isXMLDoc(elem)) {
              hooks = jQuery.attrHooks[name.toLowerCase()] || (jQuery.expr.match.bool.test(name) ? boolHook : void 0);
            }
            if (value !== void 0) {
              if (value === null) {
                jQuery.removeAttr(elem, name);
                return;
              }
              if (hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== void 0) {
                return ret;
              }
              elem.setAttribute(name, value + "");
              return value;
            }
            if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) {
              return ret;
            }
            ret = jQuery.find.attr(elem, name);
            return ret == null ? void 0 : ret;
          },
          attrHooks: {
            type: {
              set: function(elem, value) {
                if (!support.radioValue && value === "radio" && nodeName(elem, "input")) {
                  var val = elem.value;
                  elem.setAttribute("type", value);
                  if (val) {
                    elem.value = val;
                  }
                  return value;
                }
              }
            }
          },
          removeAttr: function(elem, value) {
            var name, i = 0, attrNames = value && value.match(rnothtmlwhite);
            if (attrNames && elem.nodeType === 1) {
              while (name = attrNames[i++]) {
                elem.removeAttribute(name);
              }
            }
          }
        });
        boolHook = {
          set: function(elem, value, name) {
            if (value === false) {
              jQuery.removeAttr(elem, name);
            } else {
              elem.setAttribute(name, name);
            }
            return name;
          }
        };
        jQuery.each(jQuery.expr.match.bool.source.match(/\w+/g), function(_i, name) {
          var getter = attrHandle[name] || jQuery.find.attr;
          attrHandle[name] = function(elem, name2, isXML) {
            var ret, handle, lowercaseName = name2.toLowerCase();
            if (!isXML) {
              handle = attrHandle[lowercaseName];
              attrHandle[lowercaseName] = ret;
              ret = getter(elem, name2, isXML) != null ? lowercaseName : null;
              attrHandle[lowercaseName] = handle;
            }
            return ret;
          };
        });
        var rfocusable = /^(?:input|select|textarea|button)$/i, rclickable = /^(?:a|area)$/i;
        jQuery.fn.extend({
          prop: function(name, value) {
            return access(this, jQuery.prop, name, value, arguments.length > 1);
          },
          removeProp: function(name) {
            return this.each(function() {
              delete this[jQuery.propFix[name] || name];
            });
          }
        });
        jQuery.extend({
          prop: function(elem, name, value) {
            var ret, hooks, nType = elem.nodeType;
            if (nType === 3 || nType === 8 || nType === 2) {
              return;
            }
            if (nType !== 1 || !jQuery.isXMLDoc(elem)) {
              name = jQuery.propFix[name] || name;
              hooks = jQuery.propHooks[name];
            }
            if (value !== void 0) {
              if (hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== void 0) {
                return ret;
              }
              return elem[name] = value;
            }
            if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) {
              return ret;
            }
            return elem[name];
          },
          propHooks: {
            tabIndex: {
              get: function(elem) {
                var tabindex = jQuery.find.attr(elem, "tabindex");
                if (tabindex) {
                  return parseInt(tabindex, 10);
                }
                if (rfocusable.test(elem.nodeName) || rclickable.test(elem.nodeName) && elem.href) {
                  return 0;
                }
                return -1;
              }
            }
          },
          propFix: {
            "for": "htmlFor",
            "class": "className"
          }
        });
        if (!support.optSelected) {
          jQuery.propHooks.selected = {
            get: function(elem) {
              var parent = elem.parentNode;
              if (parent && parent.parentNode) {
                parent.parentNode.selectedIndex;
              }
              return null;
            },
            set: function(elem) {
              var parent = elem.parentNode;
              if (parent) {
                parent.selectedIndex;
                if (parent.parentNode) {
                  parent.parentNode.selectedIndex;
                }
              }
            }
          };
        }
        jQuery.each([
          "tabIndex",
          "readOnly",
          "maxLength",
          "cellSpacing",
          "cellPadding",
          "rowSpan",
          "colSpan",
          "useMap",
          "frameBorder",
          "contentEditable"
        ], function() {
          jQuery.propFix[this.toLowerCase()] = this;
        });
        function stripAndCollapse(value) {
          var tokens = value.match(rnothtmlwhite) || [];
          return tokens.join(" ");
        }
        function getClass(elem) {
          return elem.getAttribute && elem.getAttribute("class") || "";
        }
        function classesToArray(value) {
          if (Array.isArray(value)) {
            return value;
          }
          if (typeof value === "string") {
            return value.match(rnothtmlwhite) || [];
          }
          return [];
        }
        jQuery.fn.extend({
          addClass: function(value) {
            var classNames, cur, curValue, className, i, finalValue;
            if (isFunction(value)) {
              return this.each(function(j) {
                jQuery(this).addClass(value.call(this, j, getClass(this)));
              });
            }
            classNames = classesToArray(value);
            if (classNames.length) {
              return this.each(function() {
                curValue = getClass(this);
                cur = this.nodeType === 1 && " " + stripAndCollapse(curValue) + " ";
                if (cur) {
                  for (i = 0; i < classNames.length; i++) {
                    className = classNames[i];
                    if (cur.indexOf(" " + className + " ") < 0) {
                      cur += className + " ";
                    }
                  }
                  finalValue = stripAndCollapse(cur);
                  if (curValue !== finalValue) {
                    this.setAttribute("class", finalValue);
                  }
                }
              });
            }
            return this;
          },
          removeClass: function(value) {
            var classNames, cur, curValue, className, i, finalValue;
            if (isFunction(value)) {
              return this.each(function(j) {
                jQuery(this).removeClass(value.call(this, j, getClass(this)));
              });
            }
            if (!arguments.length) {
              return this.attr("class", "");
            }
            classNames = classesToArray(value);
            if (classNames.length) {
              return this.each(function() {
                curValue = getClass(this);
                cur = this.nodeType === 1 && " " + stripAndCollapse(curValue) + " ";
                if (cur) {
                  for (i = 0; i < classNames.length; i++) {
                    className = classNames[i];
                    while (cur.indexOf(" " + className + " ") > -1) {
                      cur = cur.replace(" " + className + " ", " ");
                    }
                  }
                  finalValue = stripAndCollapse(cur);
                  if (curValue !== finalValue) {
                    this.setAttribute("class", finalValue);
                  }
                }
              });
            }
            return this;
          },
          toggleClass: function(value, stateVal) {
            var classNames, className, i, self, type = typeof value, isValidValue = type === "string" || Array.isArray(value);
            if (isFunction(value)) {
              return this.each(function(i2) {
                jQuery(this).toggleClass(
                  value.call(this, i2, getClass(this), stateVal),
                  stateVal
                );
              });
            }
            if (typeof stateVal === "boolean" && isValidValue) {
              return stateVal ? this.addClass(value) : this.removeClass(value);
            }
            classNames = classesToArray(value);
            return this.each(function() {
              if (isValidValue) {
                self = jQuery(this);
                for (i = 0; i < classNames.length; i++) {
                  className = classNames[i];
                  if (self.hasClass(className)) {
                    self.removeClass(className);
                  } else {
                    self.addClass(className);
                  }
                }
              } else if (value === void 0 || type === "boolean") {
                className = getClass(this);
                if (className) {
                  dataPriv.set(this, "__className__", className);
                }
                if (this.setAttribute) {
                  this.setAttribute(
                    "class",
                    className || value === false ? "" : dataPriv.get(this, "__className__") || ""
                  );
                }
              }
            });
          },
          hasClass: function(selector) {
            var className, elem, i = 0;
            className = " " + selector + " ";
            while (elem = this[i++]) {
              if (elem.nodeType === 1 && (" " + stripAndCollapse(getClass(elem)) + " ").indexOf(className) > -1) {
                return true;
              }
            }
            return false;
          }
        });
        var rreturn = /\r/g;
        jQuery.fn.extend({
          val: function(value) {
            var hooks, ret, valueIsFunction, elem = this[0];
            if (!arguments.length) {
              if (elem) {
                hooks = jQuery.valHooks[elem.type] || jQuery.valHooks[elem.nodeName.toLowerCase()];
                if (hooks && "get" in hooks && (ret = hooks.get(elem, "value")) !== void 0) {
                  return ret;
                }
                ret = elem.value;
                if (typeof ret === "string") {
                  return ret.replace(rreturn, "");
                }
                return ret == null ? "" : ret;
              }
              return;
            }
            valueIsFunction = isFunction(value);
            return this.each(function(i) {
              var val;
              if (this.nodeType !== 1) {
                return;
              }
              if (valueIsFunction) {
                val = value.call(this, i, jQuery(this).val());
              } else {
                val = value;
              }
              if (val == null) {
                val = "";
              } else if (typeof val === "number") {
                val += "";
              } else if (Array.isArray(val)) {
                val = jQuery.map(val, function(value2) {
                  return value2 == null ? "" : value2 + "";
                });
              }
              hooks = jQuery.valHooks[this.type] || jQuery.valHooks[this.nodeName.toLowerCase()];
              if (!hooks || !("set" in hooks) || hooks.set(this, val, "value") === void 0) {
                this.value = val;
              }
            });
          }
        });
        jQuery.extend({
          valHooks: {
            option: {
              get: function(elem) {
                var val = jQuery.find.attr(elem, "value");
                return val != null ? val : (
                  // Support: IE <=10 - 11 only
                  // option.text throws exceptions (trac-14686, trac-14858)
                  // Strip and collapse whitespace
                  // https://html.spec.whatwg.org/#strip-and-collapse-whitespace
                  stripAndCollapse(jQuery.text(elem))
                );
              }
            },
            select: {
              get: function(elem) {
                var value, option, i, options = elem.options, index = elem.selectedIndex, one = elem.type === "select-one", values = one ? null : [], max = one ? index + 1 : options.length;
                if (index < 0) {
                  i = max;
                } else {
                  i = one ? index : 0;
                }
                for (; i < max; i++) {
                  option = options[i];
                  if ((option.selected || i === index) && // Don't return options that are disabled or in a disabled optgroup
                  !option.disabled && (!option.parentNode.disabled || !nodeName(option.parentNode, "optgroup"))) {
                    value = jQuery(option).val();
                    if (one) {
                      return value;
                    }
                    values.push(value);
                  }
                }
                return values;
              },
              set: function(elem, value) {
                var optionSet, option, options = elem.options, values = jQuery.makeArray(value), i = options.length;
                while (i--) {
                  option = options[i];
                  if (option.selected = jQuery.inArray(jQuery.valHooks.option.get(option), values) > -1) {
                    optionSet = true;
                  }
                }
                if (!optionSet) {
                  elem.selectedIndex = -1;
                }
                return values;
              }
            }
          }
        });
        jQuery.each(["radio", "checkbox"], function() {
          jQuery.valHooks[this] = {
            set: function(elem, value) {
              if (Array.isArray(value)) {
                return elem.checked = jQuery.inArray(jQuery(elem).val(), value) > -1;
              }
            }
          };
          if (!support.checkOn) {
            jQuery.valHooks[this].get = function(elem) {
              return elem.getAttribute("value") === null ? "on" : elem.value;
            };
          }
        });
        var location2 = window2.location;
        var nonce = { guid: Date.now() };
        var rquery = /\?/;
        jQuery.parseXML = function(data) {
          var xml, parserErrorElem;
          if (!data || typeof data !== "string") {
            return null;
          }
          try {
            xml = new window2.DOMParser().parseFromString(data, "text/xml");
          } catch (e) {
          }
          parserErrorElem = xml && xml.getElementsByTagName("parsererror")[0];
          if (!xml || parserErrorElem) {
            jQuery.error("Invalid XML: " + (parserErrorElem ? jQuery.map(parserErrorElem.childNodes, function(el) {
              return el.textContent;
            }).join("\n") : data));
          }
          return xml;
        };
        var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/, stopPropagationCallback = function(e) {
          e.stopPropagation();
        };
        jQuery.extend(jQuery.event, {
          trigger: function(event, data, elem, onlyHandlers) {
            var i, cur, tmp, bubbleType, ontype, handle, special, lastElement, eventPath = [elem || document2], type = hasOwn.call(event, "type") ? event.type : event, namespaces = hasOwn.call(event, "namespace") ? event.namespace.split(".") : [];
            cur = lastElement = tmp = elem = elem || document2;
            if (elem.nodeType === 3 || elem.nodeType === 8) {
              return;
            }
            if (rfocusMorph.test(type + jQuery.event.triggered)) {
              return;
            }
            if (type.indexOf(".") > -1) {
              namespaces = type.split(".");
              type = namespaces.shift();
              namespaces.sort();
            }
            ontype = type.indexOf(":") < 0 && "on" + type;
            event = event[jQuery.expando] ? event : new jQuery.Event(type, typeof event === "object" && event);
            event.isTrigger = onlyHandlers ? 2 : 3;
            event.namespace = namespaces.join(".");
            event.rnamespace = event.namespace ? new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)") : null;
            event.result = void 0;
            if (!event.target) {
              event.target = elem;
            }
            data = data == null ? [event] : jQuery.makeArray(data, [event]);
            special = jQuery.event.special[type] || {};
            if (!onlyHandlers && special.trigger && special.trigger.apply(elem, data) === false) {
              return;
            }
            if (!onlyHandlers && !special.noBubble && !isWindow(elem)) {
              bubbleType = special.delegateType || type;
              if (!rfocusMorph.test(bubbleType + type)) {
                cur = cur.parentNode;
              }
              for (; cur; cur = cur.parentNode) {
                eventPath.push(cur);
                tmp = cur;
              }
              if (tmp === (elem.ownerDocument || document2)) {
                eventPath.push(tmp.defaultView || tmp.parentWindow || window2);
              }
            }
            i = 0;
            while ((cur = eventPath[i++]) && !event.isPropagationStopped()) {
              lastElement = cur;
              event.type = i > 1 ? bubbleType : special.bindType || type;
              handle = (dataPriv.get(cur, "events") || /* @__PURE__ */ Object.create(null))[event.type] && dataPriv.get(cur, "handle");
              if (handle) {
                handle.apply(cur, data);
              }
              handle = ontype && cur[ontype];
              if (handle && handle.apply && acceptData(cur)) {
                event.result = handle.apply(cur, data);
                if (event.result === false) {
                  event.preventDefault();
                }
              }
            }
            event.type = type;
            if (!onlyHandlers && !event.isDefaultPrevented()) {
              if ((!special._default || special._default.apply(eventPath.pop(), data) === false) && acceptData(elem)) {
                if (ontype && isFunction(elem[type]) && !isWindow(elem)) {
                  tmp = elem[ontype];
                  if (tmp) {
                    elem[ontype] = null;
                  }
                  jQuery.event.triggered = type;
                  if (event.isPropagationStopped()) {
                    lastElement.addEventListener(type, stopPropagationCallback);
                  }
                  elem[type]();
                  if (event.isPropagationStopped()) {
                    lastElement.removeEventListener(type, stopPropagationCallback);
                  }
                  jQuery.event.triggered = void 0;
                  if (tmp) {
                    elem[ontype] = tmp;
                  }
                }
              }
            }
            return event.result;
          },
          // Piggyback on a donor event to simulate a different one
          // Used only for `focus(in | out)` events
          simulate: function(type, elem, event) {
            var e = jQuery.extend(
              new jQuery.Event(),
              event,
              {
                type,
                isSimulated: true
              }
            );
            jQuery.event.trigger(e, null, elem);
          }
        });
        jQuery.fn.extend({
          trigger: function(type, data) {
            return this.each(function() {
              jQuery.event.trigger(type, data, this);
            });
          },
          triggerHandler: function(type, data) {
            var elem = this[0];
            if (elem) {
              return jQuery.event.trigger(type, data, elem, true);
            }
          }
        });
        var rbracket = /\[\]$/, rCRLF = /\r?\n/g, rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i, rsubmittable = /^(?:input|select|textarea|keygen)/i;
        function buildParams(prefix, obj, traditional, add) {
          var name;
          if (Array.isArray(obj)) {
            jQuery.each(obj, function(i, v) {
              if (traditional || rbracket.test(prefix)) {
                add(prefix, v);
              } else {
                buildParams(
                  prefix + "[" + (typeof v === "object" && v != null ? i : "") + "]",
                  v,
                  traditional,
                  add
                );
              }
            });
          } else if (!traditional && toType(obj) === "object") {
            for (name in obj) {
              buildParams(prefix + "[" + name + "]", obj[name], traditional, add);
            }
          } else {
            add(prefix, obj);
          }
        }
        jQuery.param = function(a, traditional) {
          var prefix, s = [], add = function(key, valueOrFunction) {
            var value = isFunction(valueOrFunction) ? valueOrFunction() : valueOrFunction;
            s[s.length] = encodeURIComponent(key) + "=" + encodeURIComponent(value == null ? "" : value);
          };
          if (a == null) {
            return "";
          }
          if (Array.isArray(a) || a.jquery && !jQuery.isPlainObject(a)) {
            jQuery.each(a, function() {
              add(this.name, this.value);
            });
          } else {
            for (prefix in a) {
              buildParams(prefix, a[prefix], traditional, add);
            }
          }
          return s.join("&");
        };
        jQuery.fn.extend({
          serialize: function() {
            return jQuery.param(this.serializeArray());
          },
          serializeArray: function() {
            return this.map(function() {
              var elements = jQuery.prop(this, "elements");
              return elements ? jQuery.makeArray(elements) : this;
            }).filter(function() {
              var type = this.type;
              return this.name && !jQuery(this).is(":disabled") && rsubmittable.test(this.nodeName) && !rsubmitterTypes.test(type) && (this.checked || !rcheckableType.test(type));
            }).map(function(_i, elem) {
              var val = jQuery(this).val();
              if (val == null) {
                return null;
              }
              if (Array.isArray(val)) {
                return jQuery.map(val, function(val2) {
                  return { name: elem.name, value: val2.replace(rCRLF, "\r\n") };
                });
              }
              return { name: elem.name, value: val.replace(rCRLF, "\r\n") };
            }).get();
          }
        });
        var r20 = /%20/g, rhash = /#.*$/, rantiCache = /([?&])_=[^&]*/, rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg, rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, rnoContent = /^(?:GET|HEAD)$/, rprotocol = /^\/\//, prefilters = {}, transports = {}, allTypes = "*/".concat("*"), originAnchor = document2.createElement("a");
        originAnchor.href = location2.href;
        function addToPrefiltersOrTransports(structure) {
          return function(dataTypeExpression, func) {
            if (typeof dataTypeExpression !== "string") {
              func = dataTypeExpression;
              dataTypeExpression = "*";
            }
            var dataType, i = 0, dataTypes = dataTypeExpression.toLowerCase().match(rnothtmlwhite) || [];
            if (isFunction(func)) {
              while (dataType = dataTypes[i++]) {
                if (dataType[0] === "+") {
                  dataType = dataType.slice(1) || "*";
                  (structure[dataType] = structure[dataType] || []).unshift(func);
                } else {
                  (structure[dataType] = structure[dataType] || []).push(func);
                }
              }
            }
          };
        }
        function inspectPrefiltersOrTransports(structure, options, originalOptions, jqXHR) {
          var inspected = {}, seekingTransport = structure === transports;
          function inspect(dataType) {
            var selected;
            inspected[dataType] = true;
            jQuery.each(structure[dataType] || [], function(_, prefilterOrFactory) {
              var dataTypeOrTransport = prefilterOrFactory(options, originalOptions, jqXHR);
              if (typeof dataTypeOrTransport === "string" && !seekingTransport && !inspected[dataTypeOrTransport]) {
                options.dataTypes.unshift(dataTypeOrTransport);
                inspect(dataTypeOrTransport);
                return false;
              } else if (seekingTransport) {
                return !(selected = dataTypeOrTransport);
              }
            });
            return selected;
          }
          return inspect(options.dataTypes[0]) || !inspected["*"] && inspect("*");
        }
        function ajaxExtend(target, src) {
          var key, deep, flatOptions = jQuery.ajaxSettings.flatOptions || {};
          for (key in src) {
            if (src[key] !== void 0) {
              (flatOptions[key] ? target : deep || (deep = {}))[key] = src[key];
            }
          }
          if (deep) {
            jQuery.extend(true, target, deep);
          }
          return target;
        }
        function ajaxHandleResponses(s, jqXHR, responses) {
          var ct, type, finalDataType, firstDataType, contents = s.contents, dataTypes = s.dataTypes;
          while (dataTypes[0] === "*") {
            dataTypes.shift();
            if (ct === void 0) {
              ct = s.mimeType || jqXHR.getResponseHeader("Content-Type");
            }
          }
          if (ct) {
            for (type in contents) {
              if (contents[type] && contents[type].test(ct)) {
                dataTypes.unshift(type);
                break;
              }
            }
          }
          if (dataTypes[0] in responses) {
            finalDataType = dataTypes[0];
          } else {
            for (type in responses) {
              if (!dataTypes[0] || s.converters[type + " " + dataTypes[0]]) {
                finalDataType = type;
                break;
              }
              if (!firstDataType) {
                firstDataType = type;
              }
            }
            finalDataType = finalDataType || firstDataType;
          }
          if (finalDataType) {
            if (finalDataType !== dataTypes[0]) {
              dataTypes.unshift(finalDataType);
            }
            return responses[finalDataType];
          }
        }
        function ajaxConvert(s, response, jqXHR, isSuccess) {
          var conv2, current, conv, tmp, prev, converters = {}, dataTypes = s.dataTypes.slice();
          if (dataTypes[1]) {
            for (conv in s.converters) {
              converters[conv.toLowerCase()] = s.converters[conv];
            }
          }
          current = dataTypes.shift();
          while (current) {
            if (s.responseFields[current]) {
              jqXHR[s.responseFields[current]] = response;
            }
            if (!prev && isSuccess && s.dataFilter) {
              response = s.dataFilter(response, s.dataType);
            }
            prev = current;
            current = dataTypes.shift();
            if (current) {
              if (current === "*") {
                current = prev;
              } else if (prev !== "*" && prev !== current) {
                conv = converters[prev + " " + current] || converters["* " + current];
                if (!conv) {
                  for (conv2 in converters) {
                    tmp = conv2.split(" ");
                    if (tmp[1] === current) {
                      conv = converters[prev + " " + tmp[0]] || converters["* " + tmp[0]];
                      if (conv) {
                        if (conv === true) {
                          conv = converters[conv2];
                        } else if (converters[conv2] !== true) {
                          current = tmp[0];
                          dataTypes.unshift(tmp[1]);
                        }
                        break;
                      }
                    }
                  }
                }
                if (conv !== true) {
                  if (conv && s.throws) {
                    response = conv(response);
                  } else {
                    try {
                      response = conv(response);
                    } catch (e) {
                      return {
                        state: "parsererror",
                        error: conv ? e : "No conversion from " + prev + " to " + current
                      };
                    }
                  }
                }
              }
            }
          }
          return { state: "success", data: response };
        }
        jQuery.extend({
          // Counter for holding the number of active queries
          active: 0,
          // Last-Modified header cache for next request
          lastModified: {},
          etag: {},
          ajaxSettings: {
            url: location2.href,
            type: "GET",
            isLocal: rlocalProtocol.test(location2.protocol),
            global: true,
            processData: true,
            async: true,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            /*
            timeout: 0,
            data: null,
            dataType: null,
            username: null,
            password: null,
            cache: null,
            throws: false,
            traditional: false,
            headers: {},
            */
            accepts: {
              "*": allTypes,
              text: "text/plain",
              html: "text/html",
              xml: "application/xml, text/xml",
              json: "application/json, text/javascript"
            },
            contents: {
              xml: /\bxml\b/,
              html: /\bhtml/,
              json: /\bjson\b/
            },
            responseFields: {
              xml: "responseXML",
              text: "responseText",
              json: "responseJSON"
            },
            // Data converters
            // Keys separate source (or catchall "*") and destination types with a single space
            converters: {
              // Convert anything to text
              "* text": String,
              // Text to html (true = no transformation)
              "text html": true,
              // Evaluate text as a json expression
              "text json": JSON.parse,
              // Parse text as xml
              "text xml": jQuery.parseXML
            },
            // For options that shouldn't be deep extended:
            // you can add your own custom options here if
            // and when you create one that shouldn't be
            // deep extended (see ajaxExtend)
            flatOptions: {
              url: true,
              context: true
            }
          },
          // Creates a full fledged settings object into target
          // with both ajaxSettings and settings fields.
          // If target is omitted, writes into ajaxSettings.
          ajaxSetup: function(target, settings) {
            return settings ? (
              // Building a settings object
              ajaxExtend(ajaxExtend(target, jQuery.ajaxSettings), settings)
            ) : (
              // Extending ajaxSettings
              ajaxExtend(jQuery.ajaxSettings, target)
            );
          },
          ajaxPrefilter: addToPrefiltersOrTransports(prefilters),
          ajaxTransport: addToPrefiltersOrTransports(transports),
          // Main method
          ajax: function(url, options) {
            if (typeof url === "object") {
              options = url;
              url = void 0;
            }
            options = options || {};
            var transport, cacheURL, responseHeadersString, responseHeaders, timeoutTimer, urlAnchor, completed2, fireGlobals, i, uncached, s = jQuery.ajaxSetup({}, options), callbackContext = s.context || s, globalEventContext = s.context && (callbackContext.nodeType || callbackContext.jquery) ? jQuery(callbackContext) : jQuery.event, deferred = jQuery.Deferred(), completeDeferred = jQuery.Callbacks("once memory"), statusCode = s.statusCode || {}, requestHeaders = {}, requestHeadersNames = {}, strAbort = "canceled", jqXHR = {
              readyState: 0,
              // Builds headers hashtable if needed
              getResponseHeader: function(key) {
                var match;
                if (completed2) {
                  if (!responseHeaders) {
                    responseHeaders = {};
                    while (match = rheaders.exec(responseHeadersString)) {
                      responseHeaders[match[1].toLowerCase() + " "] = (responseHeaders[match[1].toLowerCase() + " "] || []).concat(match[2]);
                    }
                  }
                  match = responseHeaders[key.toLowerCase() + " "];
                }
                return match == null ? null : match.join(", ");
              },
              // Raw string
              getAllResponseHeaders: function() {
                return completed2 ? responseHeadersString : null;
              },
              // Caches the header
              setRequestHeader: function(name, value) {
                if (completed2 == null) {
                  name = requestHeadersNames[name.toLowerCase()] = requestHeadersNames[name.toLowerCase()] || name;
                  requestHeaders[name] = value;
                }
                return this;
              },
              // Overrides response content-type header
              overrideMimeType: function(type) {
                if (completed2 == null) {
                  s.mimeType = type;
                }
                return this;
              },
              // Status-dependent callbacks
              statusCode: function(map) {
                var code;
                if (map) {
                  if (completed2) {
                    jqXHR.always(map[jqXHR.status]);
                  } else {
                    for (code in map) {
                      statusCode[code] = [statusCode[code], map[code]];
                    }
                  }
                }
                return this;
              },
              // Cancel the request
              abort: function(statusText) {
                var finalText = statusText || strAbort;
                if (transport) {
                  transport.abort(finalText);
                }
                done(0, finalText);
                return this;
              }
            };
            deferred.promise(jqXHR);
            s.url = ((url || s.url || location2.href) + "").replace(rprotocol, location2.protocol + "//");
            s.type = options.method || options.type || s.method || s.type;
            s.dataTypes = (s.dataType || "*").toLowerCase().match(rnothtmlwhite) || [""];
            if (s.crossDomain == null) {
              urlAnchor = document2.createElement("a");
              try {
                urlAnchor.href = s.url;
                urlAnchor.href = urlAnchor.href;
                s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !== urlAnchor.protocol + "//" + urlAnchor.host;
              } catch (e) {
                s.crossDomain = true;
              }
            }
            if (s.data && s.processData && typeof s.data !== "string") {
              s.data = jQuery.param(s.data, s.traditional);
            }
            inspectPrefiltersOrTransports(prefilters, s, options, jqXHR);
            if (completed2) {
              return jqXHR;
            }
            fireGlobals = jQuery.event && s.global;
            if (fireGlobals && jQuery.active++ === 0) {
              jQuery.event.trigger("ajaxStart");
            }
            s.type = s.type.toUpperCase();
            s.hasContent = !rnoContent.test(s.type);
            cacheURL = s.url.replace(rhash, "");
            if (!s.hasContent) {
              uncached = s.url.slice(cacheURL.length);
              if (s.data && (s.processData || typeof s.data === "string")) {
                cacheURL += (rquery.test(cacheURL) ? "&" : "?") + s.data;
                delete s.data;
              }
              if (s.cache === false) {
                cacheURL = cacheURL.replace(rantiCache, "$1");
                uncached = (rquery.test(cacheURL) ? "&" : "?") + "_=" + nonce.guid++ + uncached;
              }
              s.url = cacheURL + uncached;
            } else if (s.data && s.processData && (s.contentType || "").indexOf("application/x-www-form-urlencoded") === 0) {
              s.data = s.data.replace(r20, "+");
            }
            if (s.ifModified) {
              if (jQuery.lastModified[cacheURL]) {
                jqXHR.setRequestHeader("If-Modified-Since", jQuery.lastModified[cacheURL]);
              }
              if (jQuery.etag[cacheURL]) {
                jqXHR.setRequestHeader("If-None-Match", jQuery.etag[cacheURL]);
              }
            }
            if (s.data && s.hasContent && s.contentType !== false || options.contentType) {
              jqXHR.setRequestHeader("Content-Type", s.contentType);
            }
            jqXHR.setRequestHeader(
              "Accept",
              s.dataTypes[0] && s.accepts[s.dataTypes[0]] ? s.accepts[s.dataTypes[0]] + (s.dataTypes[0] !== "*" ? ", " + allTypes + "; q=0.01" : "") : s.accepts["*"]
            );
            for (i in s.headers) {
              jqXHR.setRequestHeader(i, s.headers[i]);
            }
            if (s.beforeSend && (s.beforeSend.call(callbackContext, jqXHR, s) === false || completed2)) {
              return jqXHR.abort();
            }
            strAbort = "abort";
            completeDeferred.add(s.complete);
            jqXHR.done(s.success);
            jqXHR.fail(s.error);
            transport = inspectPrefiltersOrTransports(transports, s, options, jqXHR);
            if (!transport) {
              done(-1, "No Transport");
            } else {
              jqXHR.readyState = 1;
              if (fireGlobals) {
                globalEventContext.trigger("ajaxSend", [jqXHR, s]);
              }
              if (completed2) {
                return jqXHR;
              }
              if (s.async && s.timeout > 0) {
                timeoutTimer = window2.setTimeout(function() {
                  jqXHR.abort("timeout");
                }, s.timeout);
              }
              try {
                completed2 = false;
                transport.send(requestHeaders, done);
              } catch (e) {
                if (completed2) {
                  throw e;
                }
                done(-1, e);
              }
            }
            function done(status, nativeStatusText, responses, headers) {
              var isSuccess, success, error, response, modified, statusText = nativeStatusText;
              if (completed2) {
                return;
              }
              completed2 = true;
              if (timeoutTimer) {
                window2.clearTimeout(timeoutTimer);
              }
              transport = void 0;
              responseHeadersString = headers || "";
              jqXHR.readyState = status > 0 ? 4 : 0;
              isSuccess = status >= 200 && status < 300 || status === 304;
              if (responses) {
                response = ajaxHandleResponses(s, jqXHR, responses);
              }
              if (!isSuccess && jQuery.inArray("script", s.dataTypes) > -1 && jQuery.inArray("json", s.dataTypes) < 0) {
                s.converters["text script"] = function() {
                };
              }
              response = ajaxConvert(s, response, jqXHR, isSuccess);
              if (isSuccess) {
                if (s.ifModified) {
                  modified = jqXHR.getResponseHeader("Last-Modified");
                  if (modified) {
                    jQuery.lastModified[cacheURL] = modified;
                  }
                  modified = jqXHR.getResponseHeader("etag");
                  if (modified) {
                    jQuery.etag[cacheURL] = modified;
                  }
                }
                if (status === 204 || s.type === "HEAD") {
                  statusText = "nocontent";
                } else if (status === 304) {
                  statusText = "notmodified";
                } else {
                  statusText = response.state;
                  success = response.data;
                  error = response.error;
                  isSuccess = !error;
                }
              } else {
                error = statusText;
                if (status || !statusText) {
                  statusText = "error";
                  if (status < 0) {
                    status = 0;
                  }
                }
              }
              jqXHR.status = status;
              jqXHR.statusText = (nativeStatusText || statusText) + "";
              if (isSuccess) {
                deferred.resolveWith(callbackContext, [success, statusText, jqXHR]);
              } else {
                deferred.rejectWith(callbackContext, [jqXHR, statusText, error]);
              }
              jqXHR.statusCode(statusCode);
              statusCode = void 0;
              if (fireGlobals) {
                globalEventContext.trigger(
                  isSuccess ? "ajaxSuccess" : "ajaxError",
                  [jqXHR, s, isSuccess ? success : error]
                );
              }
              completeDeferred.fireWith(callbackContext, [jqXHR, statusText]);
              if (fireGlobals) {
                globalEventContext.trigger("ajaxComplete", [jqXHR, s]);
                if (!--jQuery.active) {
                  jQuery.event.trigger("ajaxStop");
                }
              }
            }
            return jqXHR;
          },
          getJSON: function(url, data, callback) {
            return jQuery.get(url, data, callback, "json");
          },
          getScript: function(url, callback) {
            return jQuery.get(url, void 0, callback, "script");
          }
        });
        jQuery.each(["get", "post"], function(_i, method) {
          jQuery[method] = function(url, data, callback, type) {
            if (isFunction(data)) {
              type = type || callback;
              callback = data;
              data = void 0;
            }
            return jQuery.ajax(jQuery.extend({
              url,
              type: method,
              dataType: type,
              data,
              success: callback
            }, jQuery.isPlainObject(url) && url));
          };
        });
        jQuery.ajaxPrefilter(function(s) {
          var i;
          for (i in s.headers) {
            if (i.toLowerCase() === "content-type") {
              s.contentType = s.headers[i] || "";
            }
          }
        });
        jQuery._evalUrl = function(url, options, doc) {
          return jQuery.ajax({
            url,
            // Make this explicit, since user can override this through ajaxSetup (trac-11264)
            type: "GET",
            dataType: "script",
            cache: true,
            async: false,
            global: false,
            // Only evaluate the response if it is successful (gh-4126)
            // dataFilter is not invoked for failure responses, so using it instead
            // of the default converter is kludgy but it works.
            converters: {
              "text script": function() {
              }
            },
            dataFilter: function(response) {
              jQuery.globalEval(response, options, doc);
            }
          });
        };
        jQuery.fn.extend({
          wrapAll: function(html) {
            var wrap;
            if (this[0]) {
              if (isFunction(html)) {
                html = html.call(this[0]);
              }
              wrap = jQuery(html, this[0].ownerDocument).eq(0).clone(true);
              if (this[0].parentNode) {
                wrap.insertBefore(this[0]);
              }
              wrap.map(function() {
                var elem = this;
                while (elem.firstElementChild) {
                  elem = elem.firstElementChild;
                }
                return elem;
              }).append(this);
            }
            return this;
          },
          wrapInner: function(html) {
            if (isFunction(html)) {
              return this.each(function(i) {
                jQuery(this).wrapInner(html.call(this, i));
              });
            }
            return this.each(function() {
              var self = jQuery(this), contents = self.contents();
              if (contents.length) {
                contents.wrapAll(html);
              } else {
                self.append(html);
              }
            });
          },
          wrap: function(html) {
            var htmlIsFunction = isFunction(html);
            return this.each(function(i) {
              jQuery(this).wrapAll(htmlIsFunction ? html.call(this, i) : html);
            });
          },
          unwrap: function(selector) {
            this.parent(selector).not("body").each(function() {
              jQuery(this).replaceWith(this.childNodes);
            });
            return this;
          }
        });
        jQuery.expr.pseudos.hidden = function(elem) {
          return !jQuery.expr.pseudos.visible(elem);
        };
        jQuery.expr.pseudos.visible = function(elem) {
          return !!(elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length);
        };
        jQuery.ajaxSettings.xhr = function() {
          try {
            return new window2.XMLHttpRequest();
          } catch (e) {
          }
        };
        var xhrSuccessStatus = {
          // File protocol always yields status code 0, assume 200
          0: 200,
          // Support: IE <=9 only
          // trac-1450: sometimes IE returns 1223 when it should be 204
          1223: 204
        }, xhrSupported = jQuery.ajaxSettings.xhr();
        support.cors = !!xhrSupported && "withCredentials" in xhrSupported;
        support.ajax = xhrSupported = !!xhrSupported;
        jQuery.ajaxTransport(function(options) {
          var callback, errorCallback;
          if (support.cors || xhrSupported && !options.crossDomain) {
            return {
              send: function(headers, complete) {
                var i, xhr = options.xhr();
                xhr.open(
                  options.type,
                  options.url,
                  options.async,
                  options.username,
                  options.password
                );
                if (options.xhrFields) {
                  for (i in options.xhrFields) {
                    xhr[i] = options.xhrFields[i];
                  }
                }
                if (options.mimeType && xhr.overrideMimeType) {
                  xhr.overrideMimeType(options.mimeType);
                }
                if (!options.crossDomain && !headers["X-Requested-With"]) {
                  headers["X-Requested-With"] = "XMLHttpRequest";
                }
                for (i in headers) {
                  xhr.setRequestHeader(i, headers[i]);
                }
                callback = function(type) {
                  return function() {
                    if (callback) {
                      callback = errorCallback = xhr.onload = xhr.onerror = xhr.onabort = xhr.ontimeout = xhr.onreadystatechange = null;
                      if (type === "abort") {
                        xhr.abort();
                      } else if (type === "error") {
                        if (typeof xhr.status !== "number") {
                          complete(0, "error");
                        } else {
                          complete(
                            // File: protocol always yields status 0; see trac-8605, trac-14207
                            xhr.status,
                            xhr.statusText
                          );
                        }
                      } else {
                        complete(
                          xhrSuccessStatus[xhr.status] || xhr.status,
                          xhr.statusText,
                          // Support: IE <=9 only
                          // IE9 has no XHR2 but throws on binary (trac-11426)
                          // For XHR2 non-text, let the caller handle it (gh-2498)
                          (xhr.responseType || "text") !== "text" || typeof xhr.responseText !== "string" ? { binary: xhr.response } : { text: xhr.responseText },
                          xhr.getAllResponseHeaders()
                        );
                      }
                    }
                  };
                };
                xhr.onload = callback();
                errorCallback = xhr.onerror = xhr.ontimeout = callback("error");
                if (xhr.onabort !== void 0) {
                  xhr.onabort = errorCallback;
                } else {
                  xhr.onreadystatechange = function() {
                    if (xhr.readyState === 4) {
                      window2.setTimeout(function() {
                        if (callback) {
                          errorCallback();
                        }
                      });
                    }
                  };
                }
                callback = callback("abort");
                try {
                  xhr.send(options.hasContent && options.data || null);
                } catch (e) {
                  if (callback) {
                    throw e;
                  }
                }
              },
              abort: function() {
                if (callback) {
                  callback();
                }
              }
            };
          }
        });
        jQuery.ajaxPrefilter(function(s) {
          if (s.crossDomain) {
            s.contents.script = false;
          }
        });
        jQuery.ajaxSetup({
          accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
          },
          contents: {
            script: /\b(?:java|ecma)script\b/
          },
          converters: {
            "text script": function(text2) {
              jQuery.globalEval(text2);
              return text2;
            }
          }
        });
        jQuery.ajaxPrefilter("script", function(s) {
          if (s.cache === void 0) {
            s.cache = false;
          }
          if (s.crossDomain) {
            s.type = "GET";
          }
        });
        jQuery.ajaxTransport("script", function(s) {
          if (s.crossDomain || s.scriptAttrs) {
            var script, callback;
            return {
              send: function(_, complete) {
                script = jQuery("<script>").attr(s.scriptAttrs || {}).prop({ charset: s.scriptCharset, src: s.url }).on("load error", callback = function(evt) {
                  script.remove();
                  callback = null;
                  if (evt) {
                    complete(evt.type === "error" ? 404 : 200, evt.type);
                  }
                });
                document2.head.appendChild(script[0]);
              },
              abort: function() {
                if (callback) {
                  callback();
                }
              }
            };
          }
        });
        var oldCallbacks = [], rjsonp = /(=)\?(?=&|$)|\?\?/;
        jQuery.ajaxSetup({
          jsonp: "callback",
          jsonpCallback: function() {
            var callback = oldCallbacks.pop() || jQuery.expando + "_" + nonce.guid++;
            this[callback] = true;
            return callback;
          }
        });
        jQuery.ajaxPrefilter("json jsonp", function(s, originalSettings, jqXHR) {
          var callbackName, overwritten, responseContainer, jsonProp = s.jsonp !== false && (rjsonp.test(s.url) ? "url" : typeof s.data === "string" && (s.contentType || "").indexOf("application/x-www-form-urlencoded") === 0 && rjsonp.test(s.data) && "data");
          if (jsonProp || s.dataTypes[0] === "jsonp") {
            callbackName = s.jsonpCallback = isFunction(s.jsonpCallback) ? s.jsonpCallback() : s.jsonpCallback;
            if (jsonProp) {
              s[jsonProp] = s[jsonProp].replace(rjsonp, "$1" + callbackName);
            } else if (s.jsonp !== false) {
              s.url += (rquery.test(s.url) ? "&" : "?") + s.jsonp + "=" + callbackName;
            }
            s.converters["script json"] = function() {
              if (!responseContainer) {
                jQuery.error(callbackName + " was not called");
              }
              return responseContainer[0];
            };
            s.dataTypes[0] = "json";
            overwritten = window2[callbackName];
            window2[callbackName] = function() {
              responseContainer = arguments;
            };
            jqXHR.always(function() {
              if (overwritten === void 0) {
                jQuery(window2).removeProp(callbackName);
              } else {
                window2[callbackName] = overwritten;
              }
              if (s[callbackName]) {
                s.jsonpCallback = originalSettings.jsonpCallback;
                oldCallbacks.push(callbackName);
              }
              if (responseContainer && isFunction(overwritten)) {
                overwritten(responseContainer[0]);
              }
              responseContainer = overwritten = void 0;
            });
            return "script";
          }
        });
        support.createHTMLDocument = (function() {
          var body = document2.implementation.createHTMLDocument("").body;
          body.innerHTML = "<form></form><form></form>";
          return body.childNodes.length === 2;
        })();
        jQuery.parseHTML = function(data, context, keepScripts) {
          if (typeof data !== "string") {
            return [];
          }
          if (typeof context === "boolean") {
            keepScripts = context;
            context = false;
          }
          var base, parsed, scripts;
          if (!context) {
            if (support.createHTMLDocument) {
              context = document2.implementation.createHTMLDocument("");
              base = context.createElement("base");
              base.href = document2.location.href;
              context.head.appendChild(base);
            } else {
              context = document2;
            }
          }
          parsed = rsingleTag.exec(data);
          scripts = !keepScripts && [];
          if (parsed) {
            return [context.createElement(parsed[1])];
          }
          parsed = buildFragment([data], context, scripts);
          if (scripts && scripts.length) {
            jQuery(scripts).remove();
          }
          return jQuery.merge([], parsed.childNodes);
        };
        jQuery.fn.load = function(url, params, callback) {
          var selector, type, response, self = this, off = url.indexOf(" ");
          if (off > -1) {
            selector = stripAndCollapse(url.slice(off));
            url = url.slice(0, off);
          }
          if (isFunction(params)) {
            callback = params;
            params = void 0;
          } else if (params && typeof params === "object") {
            type = "POST";
          }
          if (self.length > 0) {
            jQuery.ajax({
              url,
              // If "type" variable is undefined, then "GET" method will be used.
              // Make value of this field explicit since
              // user can override it through ajaxSetup method
              type: type || "GET",
              dataType: "html",
              data: params
            }).done(function(responseText) {
              response = arguments;
              self.html(selector ? (
                // If a selector was specified, locate the right elements in a dummy div
                // Exclude scripts to avoid IE 'Permission Denied' errors
                jQuery("<div>").append(jQuery.parseHTML(responseText)).find(selector)
              ) : (
                // Otherwise use the full result
                responseText
              ));
            }).always(callback && function(jqXHR, status) {
              self.each(function() {
                callback.apply(this, response || [jqXHR.responseText, status, jqXHR]);
              });
            });
          }
          return this;
        };
        jQuery.expr.pseudos.animated = function(elem) {
          return jQuery.grep(jQuery.timers, function(fn) {
            return elem === fn.elem;
          }).length;
        };
        jQuery.offset = {
          setOffset: function(elem, options, i) {
            var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition, position = jQuery.css(elem, "position"), curElem = jQuery(elem), props = {};
            if (position === "static") {
              elem.style.position = "relative";
            }
            curOffset = curElem.offset();
            curCSSTop = jQuery.css(elem, "top");
            curCSSLeft = jQuery.css(elem, "left");
            calculatePosition = (position === "absolute" || position === "fixed") && (curCSSTop + curCSSLeft).indexOf("auto") > -1;
            if (calculatePosition) {
              curPosition = curElem.position();
              curTop = curPosition.top;
              curLeft = curPosition.left;
            } else {
              curTop = parseFloat(curCSSTop) || 0;
              curLeft = parseFloat(curCSSLeft) || 0;
            }
            if (isFunction(options)) {
              options = options.call(elem, i, jQuery.extend({}, curOffset));
            }
            if (options.top != null) {
              props.top = options.top - curOffset.top + curTop;
            }
            if (options.left != null) {
              props.left = options.left - curOffset.left + curLeft;
            }
            if ("using" in options) {
              options.using.call(elem, props);
            } else {
              curElem.css(props);
            }
          }
        };
        jQuery.fn.extend({
          // offset() relates an element's border box to the document origin
          offset: function(options) {
            if (arguments.length) {
              return options === void 0 ? this : this.each(function(i) {
                jQuery.offset.setOffset(this, options, i);
              });
            }
            var rect, win, elem = this[0];
            if (!elem) {
              return;
            }
            if (!elem.getClientRects().length) {
              return { top: 0, left: 0 };
            }
            rect = elem.getBoundingClientRect();
            win = elem.ownerDocument.defaultView;
            return {
              top: rect.top + win.pageYOffset,
              left: rect.left + win.pageXOffset
            };
          },
          // position() relates an element's margin box to its offset parent's padding box
          // This corresponds to the behavior of CSS absolute positioning
          position: function() {
            if (!this[0]) {
              return;
            }
            var offsetParent, offset, doc, elem = this[0], parentOffset = { top: 0, left: 0 };
            if (jQuery.css(elem, "position") === "fixed") {
              offset = elem.getBoundingClientRect();
            } else {
              offset = this.offset();
              doc = elem.ownerDocument;
              offsetParent = elem.offsetParent || doc.documentElement;
              while (offsetParent && (offsetParent === doc.body || offsetParent === doc.documentElement) && jQuery.css(offsetParent, "position") === "static") {
                offsetParent = offsetParent.parentNode;
              }
              if (offsetParent && offsetParent !== elem && offsetParent.nodeType === 1) {
                parentOffset = jQuery(offsetParent).offset();
                parentOffset.top += jQuery.css(offsetParent, "borderTopWidth", true);
                parentOffset.left += jQuery.css(offsetParent, "borderLeftWidth", true);
              }
            }
            return {
              top: offset.top - parentOffset.top - jQuery.css(elem, "marginTop", true),
              left: offset.left - parentOffset.left - jQuery.css(elem, "marginLeft", true)
            };
          },
          // This method will return documentElement in the following cases:
          // 1) For the element inside the iframe without offsetParent, this method will return
          //    documentElement of the parent window
          // 2) For the hidden or detached element
          // 3) For body or html element, i.e. in case of the html node - it will return itself
          //
          // but those exceptions were never presented as a real life use-cases
          // and might be considered as more preferable results.
          //
          // This logic, however, is not guaranteed and can change at any point in the future
          offsetParent: function() {
            return this.map(function() {
              var offsetParent = this.offsetParent;
              while (offsetParent && jQuery.css(offsetParent, "position") === "static") {
                offsetParent = offsetParent.offsetParent;
              }
              return offsetParent || documentElement;
            });
          }
        });
        jQuery.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function(method, prop) {
          var top = "pageYOffset" === prop;
          jQuery.fn[method] = function(val) {
            return access(this, function(elem, method2, val2) {
              var win;
              if (isWindow(elem)) {
                win = elem;
              } else if (elem.nodeType === 9) {
                win = elem.defaultView;
              }
              if (val2 === void 0) {
                return win ? win[prop] : elem[method2];
              }
              if (win) {
                win.scrollTo(
                  !top ? val2 : win.pageXOffset,
                  top ? val2 : win.pageYOffset
                );
              } else {
                elem[method2] = val2;
              }
            }, method, val, arguments.length);
          };
        });
        jQuery.each(["top", "left"], function(_i, prop) {
          jQuery.cssHooks[prop] = addGetHookIf(
            support.pixelPosition,
            function(elem, computed) {
              if (computed) {
                computed = curCSS(elem, prop);
                return rnumnonpx.test(computed) ? jQuery(elem).position()[prop] + "px" : computed;
              }
            }
          );
        });
        jQuery.each({ Height: "height", Width: "width" }, function(name, type) {
          jQuery.each({
            padding: "inner" + name,
            content: type,
            "": "outer" + name
          }, function(defaultExtra, funcName) {
            jQuery.fn[funcName] = function(margin, value) {
              var chainable = arguments.length && (defaultExtra || typeof margin !== "boolean"), extra = defaultExtra || (margin === true || value === true ? "margin" : "border");
              return access(this, function(elem, type2, value2) {
                var doc;
                if (isWindow(elem)) {
                  return funcName.indexOf("outer") === 0 ? elem["inner" + name] : elem.document.documentElement["client" + name];
                }
                if (elem.nodeType === 9) {
                  doc = elem.documentElement;
                  return Math.max(
                    elem.body["scroll" + name],
                    doc["scroll" + name],
                    elem.body["offset" + name],
                    doc["offset" + name],
                    doc["client" + name]
                  );
                }
                return value2 === void 0 ? (
                  // Get width or height on the element, requesting but not forcing parseFloat
                  jQuery.css(elem, type2, extra)
                ) : (
                  // Set width or height on the element
                  jQuery.style(elem, type2, value2, extra)
                );
              }, type, chainable ? margin : void 0, chainable);
            };
          });
        });
        jQuery.each([
          "ajaxStart",
          "ajaxStop",
          "ajaxComplete",
          "ajaxError",
          "ajaxSuccess",
          "ajaxSend"
        ], function(_i, type) {
          jQuery.fn[type] = function(fn) {
            return this.on(type, fn);
          };
        });
        jQuery.fn.extend({
          bind: function(types, data, fn) {
            return this.on(types, null, data, fn);
          },
          unbind: function(types, fn) {
            return this.off(types, null, fn);
          },
          delegate: function(selector, types, data, fn) {
            return this.on(types, selector, data, fn);
          },
          undelegate: function(selector, types, fn) {
            return arguments.length === 1 ? this.off(selector, "**") : this.off(types, selector || "**", fn);
          },
          hover: function(fnOver, fnOut) {
            return this.on("mouseenter", fnOver).on("mouseleave", fnOut || fnOver);
          }
        });
        jQuery.each(
          "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),
          function(_i, name) {
            jQuery.fn[name] = function(data, fn) {
              return arguments.length > 0 ? this.on(name, null, data, fn) : this.trigger(name);
            };
          }
        );
        var rtrim = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;
        jQuery.proxy = function(fn, context) {
          var tmp, args, proxy;
          if (typeof context === "string") {
            tmp = fn[context];
            context = fn;
            fn = tmp;
          }
          if (!isFunction(fn)) {
            return void 0;
          }
          args = slice.call(arguments, 2);
          proxy = function() {
            return fn.apply(context || this, args.concat(slice.call(arguments)));
          };
          proxy.guid = fn.guid = fn.guid || jQuery.guid++;
          return proxy;
        };
        jQuery.holdReady = function(hold) {
          if (hold) {
            jQuery.readyWait++;
          } else {
            jQuery.ready(true);
          }
        };
        jQuery.isArray = Array.isArray;
        jQuery.parseJSON = JSON.parse;
        jQuery.nodeName = nodeName;
        jQuery.isFunction = isFunction;
        jQuery.isWindow = isWindow;
        jQuery.camelCase = camelCase;
        jQuery.type = toType;
        jQuery.now = Date.now;
        jQuery.isNumeric = function(obj) {
          var type = jQuery.type(obj);
          return (type === "number" || type === "string") && // parseFloat NaNs numeric-cast false positives ("")
          // ...but misinterprets leading-number strings, particularly hex literals ("0x...")
          // subtraction forces infinities to NaN
          !isNaN(obj - parseFloat(obj));
        };
        jQuery.trim = function(text2) {
          return text2 == null ? "" : (text2 + "").replace(rtrim, "$1");
        };
        if (typeof define === "function" && define.amd) {
          define("jquery", [], function() {
            return jQuery;
          });
        }
        var _jQuery = window2.jQuery, _$ = window2.$;
        jQuery.noConflict = function(deep) {
          if (window2.$ === jQuery) {
            window2.$ = _$;
          }
          if (deep && window2.jQuery === jQuery) {
            window2.jQuery = _jQuery;
          }
          return jQuery;
        };
        if (typeof noGlobal === "undefined") {
          window2.jQuery = window2.$ = jQuery;
        }
        return jQuery;
      });
    }
  });

  // src/core/config.ts
  var config = {
    viewedMarker: {
      enabled: true,
      fastVideoMainMark: true,
      fullVideoPageScan: false
    },
    commentLocation: {
      enabled: true,
      patchSourceScripts: true,
      domFallback: true,
      videoPageHeaderGate: true,
      videoPageHeaderGateTimeoutMs: 3e3
    },
    blocker: {
      enabled: true
    },
    debug: false
  };

  // src/core/logger.ts
  function debugLog(...args) {
    if (config.debug) {
      console.debug("[BiliToolkit]", ...args);
    }
  }
  function warnLog(...args) {
    console.warn("[BiliToolkit]", ...args);
  }

  // src/core/inject-page-script.ts
  function injectPageScript(source) {
    const script = document.createElement("script");
    script.textContent = source;
    script.setAttribute("data-bili-toolkit", "comment-location");
    (document.documentElement || document.head || document.body).appendChild(script);
    script.remove();
  }

  // src/modules/comment-location/page-world-source.generated.ts
  var commentLocationPageWorldSource = `(() => {
  if (window.__BILI_TOOLKIT_COMMENT_LOCATION__) {
    return;
  }
  window.__BILI_TOOLKIT_COMMENT_LOCATION__ = true;

  function _typeof(value) {
    return typeof value;
  }

  function waitForElement(selector, timeoutMs = 15000) {
    const existing = document.querySelector(selector);
    if (existing) {
      return Promise.resolve(existing);
    }
    return new Promise((resolve) => {
      const startedAt = Date.now();
      const observer = new MutationObserver(() => {
        const node = document.querySelector(selector);
        if (node) {
          observer.disconnect();
          resolve(node);
          return;
        }
        if (Date.now() - startedAt > timeoutMs) {
          observer.disconnect();
          resolve(null);
        }
      });
      observer.observe(document.documentElement || document, { childList: true, subtree: true });
    });
  }

var utils = {
  uncurryThis: function uncurryThis(f) {
    return function () {
      return f.call.apply(f, arguments);
    };
  },
  curryThis: function curryThis(f) {
    return function () {
      var a = Array.prototype.slice.call(arguments);
      a.unshift(this);
      return f.apply(null, a);
    };
  },
  bindFn: function bindFn(fn, context) {
    var _args = Array.prototype.slice.call(arguments, 2);

    return function () {
      return fn.apply(context, _args.concat(Array.prototype.slice.call(arguments)));
    };
  },
  extend: function extend(child, parent) {
    for (var key in parent) {
      if (parent.hasOwnProperty(key)) child[key] = parent[key];
    }

    function ctor() {}

    ctor.prototype = parent.prototype;
    child.prototype = new ctor();
    child.prototype.constructor = child;
    child.__super__ = parent.prototype;
    return child;
  },
  mixin: function mixin(dest) {
    var sources = Array.prototype.slice.call(arguments, 1);

    for (var i = 0; i < sources.length; i++) {
      var src = sources[i];

      for (var key in src) {
        if (!dest[key]) {
          dest[key] = src[key];
        }
      }
    }
  },
  distinctArray: function distinctArray(arr) {
    var newArray = [],
        dict = {},
        i = 0,
        item;

    for (; i < arr.length; i++) {
      item = arr[i];

      var key = item + ':' + _typeof(item);

      if (!dict[key]) {
        newArray.push(item);
        dict[key] = true;
      }
    }

    return newArray;
  },

  /*
   * \u8BBF\u95EE\u7EC8\u7AEF\u4FE1\u606F\u5224\u65AD
   */
  browser: {
    version: function () {
      var u = navigator.userAgent,
          app = navigator.appVersion;
      return {
        //\u79FB\u52A8\u7EC8\u7AEF\u6D4F\u89C8\u5668\u7248\u672C\u4FE1\u606F
        trident: /Trident/i.test(u),
        //IE\u5185\u6838
        presto: /Presto/i.test(u),
        //opera\u5185\u6838
        webKit: /AppleWebKit/i.test(u),
        //\u82F9\u679C\u3001\u8C37\u6B4C\u5185\u6838
        gecko: /Gecko/i.test(u) && !/KHTML/i.test(u),
        //\u706B\u72D0\u5185\u6838
        mobile: /AppleWebKit.*Mobile.*/i.test(u),
        //\u662F\u5426\u4E3A\u79FB\u52A8\u7EC8\u7AEF
        ios: /\\(i[^;]+;( U;)? CPU.+Mac OS X/i.test(u),
        //ios\u7EC8\u7AEF
        android: /Android/i.test(u) || /Linux/i.test(u),
        //android\u7EC8\u7AEF\u6216\u8005uc\u6D4F\u89C8\u5668
        windowsphone: /Windows Phone/i.test(u),
        //Windows Phone
        iPhone: /iPhone/i.test(u),
        //\u662F\u5426\u4E3AiPhone\u6216\u8005QQHD\u6D4F\u89C8\u5668
        iPad: /iPad/i.test(u),
        //\u662F\u5426iPad
        MicroMessenger: /MicroMessenger/i.test(u),
        //\u662F\u5426\u4E3A\u5FAE\u4FE1
        webApp: !/Safari/i.test(u),
        //\u662F\u5426web\u5E94\u8BE5\u7A0B\u5E8F\uFF0C\u6CA1\u6709\u5934\u90E8\u4E0E\u5E95\u90E8
        edge: /edge/i.test(u),
        weibo: /Weibo/i.test(u),
        uc: /UCBrowser/i.test(u),
        qq: /MQQBrowser/i.test(u),
        baidu: /Baidu/i.test(u),
        comicApp: /BiliComic|ComicWebView/i.test(u) //\u662F\u5426\u5728\u6F2B\u753B\u7684app\uFF0C\u6216\u8005\u6F2B\u753B\u81EA\u5DF1\u5C01\u88C5\u7684webview

      };
    }(),
    language: (navigator.browserLanguage || navigator.language).toLowerCase(),
    lteIE: function lteIE(ver) {
      return $.browser.msie && parseInt($.browser.version) <= ver;
    }
  },
  cookie: {
    get: function get(cookieName) {
      var theCookie = "" + document.cookie;
      var ind = theCookie.indexOf(cookieName + "=");
      if (ind == -1 || cookieName == "") return "";
      var ind1 = theCookie.indexOf(';', ind);
      if (ind1 == -1) ind1 = theCookie.length;
      return unescape(theCookie.substring(ind + cookieName.length + 1, ind1));
    },
    set: function set(name, value, days) {
      days = days !== undefined ? days : 365;
      var exp = new Date();
      exp.setTime(exp.getTime() + days * 24 * 60 * 60 * 1000);
      document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString() + "; path=/; domain=.bilibili.com";
    },
    'delete': function _delete(name) {
      this.set(name, '', -1);
    }
  },
  readFromLocal: function readFromLocal(key) {
    if (this.localStorage._support) {
      return localStorage.getItem(key);
    } else {
      return this.cookie.get(key);
    }
  },
  saveToLocal: function saveToLocal(key, val, days) {
    if (this.localStorage._support) {
      return localStorage.setItem(key, val);
    } else {
      return this.cookie.set(key, val, days);
    }
  },
  localStorage: {
    _support: window.localStorage && typeof (window.localStorage) == 'object' ? true : false,
    getItem: function getItem(key) {
      if (this._support) {
        return window.localStorage.getItem(key);
      } else {
        return null;
      }
    },
    setItem: function setItem(key, value) {
      if (this._support) {
        window.localStorage.setItem(key, value);
      }
    },
    removeItem: function removeItem(key) {
      if (this.getItem(key)) {
        window.localStorage.removeItem(key);
      }
    }
  },
  unhtml: function unhtml(str, reg) {
    return str ? str.replace(reg || /[&<">'](?:(amp|lt|quot|gt|#39|nbsp|#\\d+);)?/g, function (a, b) {
      if (b) {
        return a;
      } else {
        return {
          '<': '&lt;',
          '&': '&amp;',
          '"': '&quot;',
          '>': '&gt;',
          "'": '&apos;'
        }[a];
      }
    }) : '';
  },
  html: function html(str) {
    return str ? str.replace(/&((g|l|quo)t|amp|#39|nbsp);/g, function (m) {
      return {
        '&lt;': '<',
        '&amp;': '&',
        '&quot;': '"',
        '&gt;': '>',
        '&#39;': "'",
        '&nbsp;': ' '
      }[m];
    }) : '';
  },
  hashManage: {
    prependHash: '!',
    _change: function _change(key, value) {
      var hash = location.hash,
          hashArray,
          hashMap = {},
          hashString = '',
          index = 0;

      if (hash) {
        hash = hash.substring(1);

        if (this.prependHash) {
          hash = hash.replace(new RegExp('^' + this.prependHash.replace(/[\\-\\[\\]{}()*+?.,\\\\\\^$|#\\s]/g, "\\\\$&")), '');
        }
      }

      hashArray = hash.split('&');

      for (var i = 0; i < hashArray.length; i++) {
        var _k = hashArray[i].split('=')[0],
            _v = hashArray[i].split('=')[1];

        if (_k) {
          hashMap[_k] = decodeURIComponent(_v);
        }
      }

      if (_typeof(key) == 'object') {
        for (var j in key) {
          var _val = key[j];

          if (_val) {
            hashMap[j] = encodeURIComponent(_val);
          } else if (_val === false) {
            delete hashMap[j];
          }
        }
      } else {
        if (value) {
          hashMap[key] = encodeURIComponent(value);
        } else if (value === false) {
          delete hashMap[key];
        } else if (typeof key == 'undefined') {
          return hashMap;
        } else {
          return hashMap[key] || null;
        }
      }

      for (var k in hashMap) {
        if (index != 0) {
          hashString += '&';
        } else {
          hashString += this.prependHash;
        }

        hashString += k + '=' + hashMap[k];
        index++;
      }

      location.hash = hashString;
      return hashMap;
    },
    get: function get(key) {
      return this._change(key, null);
    },
    set: function set(key, value) {
      return this._change(key, value);
    },
    clear: function clear() {
      location.hash = '';
    }
  },
  getColor16: function getColor16(rgb) {
    function _to16(d) {
      var color = parseInt(d).toString(16);
      return color.length == 1 ? "0" + color : color;
    }

    function _parse(array) {
      var value = "#";

      for (var i = 0; i < 3; i++) {
        value += _to16(array[i]);
      }

      return value;
    }

    var result = "";
    var rgbArray = [];

    if (rgb.match(/\\((.*)\\)/) != null) {
      rgbArray = rgb.match(/\\((.*)\\)/)[1].split(",");
      result = _parse(rgbArray);
    } else if (rgb.match(/,+/g) != null) {
      rgbArray = rgb.split(",");
      result = _parse(rgbArray);
    } else {
      result = _to16(rgb);
    }

    return result;
  },
  serializeParam: function serializeParam(json) {
    var strArr = [];

    for (var i in json) {
      if (!(_typeof(json[i]).toLowerCase() == "function" || _typeof(json[i]).toLowerCase() == "object")) {
        strArr.push(encodeURIComponent(i) + "=" + encodeURIComponent(json[i]));
      } else if ($.isArray(json[i])) {
        //\u652F\u6301\u4F20\u6570\u7EC4\u5185\u5BB9
        for (var j = 0; j < json[i].length; j++) {
          strArr.push(encodeURIComponent(i) + "[]=" + encodeURIComponent(json[i][j]));
        }
      }
    }

    return strArr.join("&");
  },
  query2json: function query2json(query) {
    if ($.isPlainObject(query)) {
      return query;
    }

    if (query === undefined) {
      return {};
    }

    var q = query.split("&"),
        j = {};

    for (var i = 0; i < q.length; i++) {
      var arr = q[i].split('=');
      j[arr[0]] = arr[1];
    }

    return j;
  },
  hash2json: function hash2json() {
    if (window.location.href.split('#').length > 1) {
      return this.query2json(window.location.href.split('#')[1].split('?')[0].replace(/#/, ""));
    } else {
      return {};
    }
  },
  query: {
    get: function get(key) {
      var queryJson = utils.query2json(this._getQuery());

      if (key) {
        return queryJson[key];
      } else {
        return queryJson;
      }
    },
    set: function set(key, value) {
      var queryJson = utils.query2json(this._getQuery());
      var hashJson = utils.hash2json();

      if (_typeof(key) == 'object') {
        for (var k in key) {
          this._set(queryJson, k, key[k]);
        }
      } else {
        this._set(queryJson, key, value);
      }

      return utils.makeUrl('', queryJson, hashJson);
    },
    _set: function _set(json, key, value) {
      if (value === null) {
        delete json[key];
      } else {
        json[key] = value;
      }

      return json;
    },
    _getQuery: function _getQuery() {
      if (window.location.search !== undefined) {
        return window.location.search.substring(1);
      } else {
        return window.location.href.split('?')[1] ? window.location.href.split('?')[1].split('#')[0] : '';
      }
    }
  },
  makeUrl: function makeUrl(url, queryJson, hashJson) {
    var query = this.serializeParam(queryJson),
        hash = this.serializeParam(hashJson),
        _url;

    if (query) {
      _url = (url || location.pathname) + '?' + query;
    } else {
      _url = url || location.pathname;
    }

    if (hash) {
      _url = _url + '#' + hash;
    }

    return _url;
  },
  formatNum: function formatNum(num, unit) {
    if (num === undefined || typeof num == 'string' && isNaN(parseInt(num))) return '--';
    var unitMap = {
      '\u4E07': 10000
    },
        defaultUnit = '\u4E07';
    unit = typeof unit == 'string' ? unit : defaultUnit;
    var factor = unitMap[unit] || unitMap[defaultUnit];
    if (typeof num == 'string' && num.indexOf(unit) >= 0) return;

    if (typeof num == 'string' && num.indexOf(",") >= 0) {
      var nums = num.split(",");
      var total = "";

      for (var i = 0; i < nums.length; i++) {
        total += nums[i];
      }

      num = total;
    }

    num = parseInt(num);

    if (num >= factor) {
      num = (num / factor).toFixed(1) + unit;
    }

    return num;
  },
  parseCardProps: function parseCardProps(dataItem, type) {
    var props = {
      'data-gk': dataItem.play,
      'data-sc': dataItem.favorites,
      'data-pl': dataItem.review,
      'data-dm': dataItem.video_review,
      'data-up': dataItem.author,
      'data-subtitle': dataItem.subtitle,
      'data-lm': dataItem.typename || '',
      'data-tg': dataItem.created ? new Date(dataItem.created * 1000).format('yyyy-MM-dd hh:mm') : dataItem.create || dataItem.created_at,
      'data-txt': dataItem.description,
      'data-yb': dataItem.coins
    },
        str = "";

    if (type == 'string') {
      for (var k in props) {
        if (str != "") {
          str += " ";
        }

        str += k + '="' + props[k] + '"';
      }

      return str;
    } else {
      return props;
    }
  },
  newParseCardProps: function newParseCardProps(dataItem, type) {
    var props = {
      'data-gk': dataItem.stat.view,
      'data-sc': dataItem.stat.favorite,
      'data-pl': dataItem.stat.reply,
      'data-dm': dataItem.stat.danmaku,
      'data-up': dataItem.owner.name,
      'data-lm': dataItem.tname || '',
      'data-tg': new Date(dataItem.pubdate * 1000).format('yyyy-MM-dd hh:mm'),
      'data-txt': dataItem.desc,
      'data-yb': dataItem.stat.coin
    };
    return props;
  },
  // protocol-relative \u4E3A\u4E86\u517C\u5BB9ie8\u4EE5\u4E0B
  protocolRelative: function protocolRelative(url) {
    if (/http:|https:/.test(url)) {
      return url.replace(/http:|https:/, window.location.protocol);
    } else if ($.browser.msie && parseInt($.browser.version) <= 8) {
      return window.location.protocol + url;
    } else {
      return url;
    }
  },
  formatDuration: function formatDuration(duration, isToHour, minHeadBits) {
    if (typeof duration !== 'number') {
      return duration;
    }

    minHeadBits = minHeadBits || -1;
    var second = this.toFixed(duration % 60, 2);
    var minute = isToHour ? this.toFixed(Math.floor(duration % 3600 / 60), 2) : this.toFixed(Math.floor(duration / 60), minHeadBits);
    var hour = isToHour ? this.toFixed(Math.floor(duration / 3600), minHeadBits) : null;
    return hour === null ? [minute, second].join(':') : [hour, minute, second].join(':');
  },
  isObject: function isObject(obj) {
    return _typeof(obj) === 'object' && obj !== null;
  },
  isNothing: function isNothing(obj) {
    return obj == null; // Only deal with null/undefined values
  },
  isUndefined: function isUndefined(obj) {
    return typeof obj === 'undefined';
  },
  join: function join() {
    return Array.prototype.join.call(arguments, '');
  },
  random: function random(start, end) {
    if (this.isNothing(end)) {
      end = start;
      start = 0;
    }

    return Math.floor(Math.random() * (end - start + 1)) + start;
  },
  debounce: function debounce(func, delay, isImmediate) {
    var timeout;

    function debounced() {
      clearTimeout(timeout);

      if (isImmediate && utils.isNothing(timeout)) {
        func();
      }

      timeout = setTimeout(func, delay || 100);
    }

    debounced.clearNext = function () {
      clearTimeout(timeout);
    };

    return debounced;
  },
  throttle: function throttle(func, delay, options) {
    var timeout,
        prev = 0;
    delay = delay || 200;
    options = options || {};

    function later() {
      prev = options.head ? 0 : new Date().getTime();
      timeout = null;
      func();
    }

    function throttled() {
      var remain,
          now = new Date().getTime();

      if (!prev && options.head) {
        prev = now;
      }

      remain = delay - (now - prev);

      if (remain <= 0 || remain > delay) {
        clearTimeout(timeout);
        timeout = null;
        prev = now;
        func();
      } else if (!timeout && !options.tail) {
        timeout = setTimeout(later, remain);
      }
    }

    throttled.clearNext = function () {
      clearTimeout(timeout);
      timeout = null;
      prev = 0;
    };

    return throttled;
  },
  toFixed: function toFixed(data, bits) {
    if (typeof data !== 'number' && typeof data !== 'string') {
      return data;
    }

    data = String(data);
    bits = Number(bits) || 2;

    while (data.length < bits) {
      data = '0' + data;
    }

    return data.length > bits ? data : data.slice(-bits);
  },
  thumbnail: function thumbnail(src, width, height) {
    if (typeof src !== 'string') {
      return src;
    }

    if (typeof width === 'undefined') {
      return src;
    }

    var urls = src.split('?');
    var sizes, rules, feature, matches;
    height = height || width;
    sizes = {
      midfix: '/' + width + '_' + height,
      suffix: '_' + width + 'x' + height
    };
    rules = {
      cdn: /^http.+i[0-2]\\.hdslb\\.com\\//,
      bfs: /^http.+i\\d\\.hdslb\\.com\\/bfs\\//,
      group1: /^http.+i\\d\\.hdslb\\.com\\/group1\\//,
      other: /(^http.+i\\d\\.hdslb\\.com)(\\/.+)/
    };
    feature = {
      bfs: /_\\d+x\\d+\\./,
      other: /\\/\\d+_\\d+\\//
    };

    if (!rules.cdn.test(urls[0])) {
      return src;
    }

    if (feature.bfs.test(urls[0]) || feature.other.test(urls[0])) {
      return src;
    }

    if (rules.bfs.test(urls[0]) || rules.group1.test(urls[0])) {
      urls[0] += sizes.suffix + urls[0].slice(urls[0].lastIndexOf('.'));
      src = urls.join('?');
    } else {
      matches = rules.other.exec(urls[0]);

      if (matches) {
        urls[0] = matches[1] + sizes.midfix + matches[2];
        src = urls.join('?');
      }
    }

    return src;
  },
  //\u68C0\u67E5\u662F\u5426\u652F\u6301webp
  isWebp: function () {
    try {
      return document.createElement('canvas').toDataURL('image/webp').indexOf('data:image/webp') == 0;
    } catch (err) {
      return false;
    }
  }(),
  webp: function webp(url, args) {
    if (!url) {
      return url;
    }

    var suffix = url.match(/(.*\\.(jpg|jpeg|gif|png|bmp))(\\?.*)?/); //\u8DEF\u5F84\u662F\u5426\u5305\u542B/bfs/

    var isBfs = url.indexOf('/bfs/') != -1 ? true : false; //\u662F\u5426\u662FGIF\u56FE\u7247

    if (!suffix || suffix[2] === 'bmp' || !isBfs) {
      return url;
    }

    var w = args.w,
        h = args.h; //\u88C1\u526A\u89C4\u5219

    var filter = [];

    if (w && h) {
      filter.push(w + 'w');
      filter.push(h + 'h');
    }

    if (args.freeze) {
      filter.push('1s');
    } // var cut = (w && h) ? '@' + w + 'w_' + h + 'h' : '@'
    //\u56FE\u7247\u540E\u53C2\u6570 \u6BD4\u5982\u89C6\u9891\u52A8\u6001\u56FE


    var args = suffix[3] ? suffix[3] : '';

    if (this.isWebp) {
      return suffix[1] + '@' + filter.join('_') + '.webp' + args;
    } else {
      return suffix[1] + '@' + filter.join('_') + '.' + suffix[2] + args;
    }
  },
  isAlpha: function isAlpha(items, rate) {
    var machineDna;

    if (localStorage.getItem('machineDna')) {
      machineDna = localStorage.getItem('machineDna');
    } else {
      machineDna = parseInt(Math.random() * 10 + 1);
      localStorage.setItem('machineDna', machineDna);
    }

    if (this.isBeta(items) || rate < machineDna) {
      return true;
    } else {
      return false;
    }
  },
  isBeta: function isBeta(items) {
    var isOpen = false;
    var mantissa = utils.cookie.get('DedeUserID').slice(-1);

    if (mantissa && $.isArray(items)) {
      isOpen = $.inArray(+mantissa, items) > -1;
    }

    return isOpen;
  },
  trimHttp: function trimHttp(url) {
    return url ? url.replace(/^http:/, '') : '';
  },
  getByteLen: function getByteLen(val) {
    var len = 0;

    for (var i = 0; i < val.length; i++) {
      var a = val.charAt(i);

      if (a.match(/[^\\x00-\\xff]/ig) != null) {
        len += 1;
      } else {
        len += .5;
      }
    }

    return len;
  },
  // to do mreporter
  //\u8BC4\u8BBA\u5728\u64AD\u653E\u9875\u65E5\u5FD7\u4E0A\u62A5
  videoReport: function videoReport(name) {
    // MReporter logic
    if (window.MReporter) {
      window.MReporter.click && window.MReporter.click({
        evt: "selfDef.".concat(name),
        msg: {
          event: name,
          value: name
        }
      });
      return;
    } // log-reporter logic


    if (window.spmReportData) {
      window.spmReportData[name] = name;
    }
  },
  //\u57CB\u70B9\u4E0A\u62A5
  customReport: function customReport(name, ops) {
    if (window.MReporter) {
      window.MReporter.click && window.MReporter.click({
        evt: "selfDef.".concat(name),
        msg: {
          event: name,
          value: ops || name
        }
      });
    }

    if (window.reportConfig && window[reportConfig['msgObjects']]) {
      var reportObj = window[reportConfig['msgObjects']];
      var obj = ops ? ops : name;
      reportObj[name] = obj;
    }
  },
  formatLotteryTime: function formatLotteryTime(time) {
    time = time * 1000;
    var date = new Date(time);
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    var hour = date.getHours();
    var minute = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
    return year + '\u5E74' + month + '\u6708' + day + '\u65E5 ' + hour + ':' + minute;
  },
  hexToRgbA: function hexToRgbA(hex) {
    var localHex = hex.toString();

    if (hex.length === 6) {
      localHex = 'ff' + localHex;
    }

    var r = parseInt(localHex.slice(2, 4), 16),
        g = parseInt(localHex.slice(4, 6), 16),
        b = parseInt(localHex.slice(6, 8), 16),
        alpha = parseInt(localHex.slice(0, 2), 16);
    return "rgba(" + r + ", " + g + ", " + b + ", " + alpha / 255 + ")";
  },
  asyncScript: function asyncScript(url) {
    return new Promise(function (resolve) {
      var script = document.createElement('script');
      script.setAttribute('src', url);
      document.body.appendChild(script);
      script.onload = resolve;
    });
  },
  cmGetUrl: function cmGetUrl(cmData, id) {
    if (!window.BiliCm) return '';
    return window.BiliCm.Base.getSyncUrl(cmData, Number(id));
  },
  cmSendData: function cmSendData(cmData, id) {
    if (!window.BiliCm) return;
    window.BiliCm.Base.sendShowData(cmData, Number(id));
  },
  cmSendStrictData: function cmSendStrictData(cmData, id) {
    if (!window.BiliCm) return;
    window.BiliCm.Base.sendStrictShowData(cmData, Number(id));
  },
  cmSendCloseData: function cmSendCloseData(cmData, id) {
    if (!window.BiliCm) return;
    window.BiliCm.Base.sendCloseData(cmData, Number(id));
  },
  checkInView: function checkInView(el, padding) {
    if (!el) return;
    var rect = el.getBoundingClientRect();
    var p = padding || 0; // \u53EA\u5224\u65AD\u4E86\u7EB5\u5411

    return rect.top < window.innerHeight + p && rect.bottom >= 0;
  },
  // to do mreporter

  /**
   * \u5B8C\u5168\u81EA\u5B9A\u4E49\u4E0A\u62A5 \u53EF\u81EA\u5B9A\u4E49\u4E0A\u62A5\u901A\u9053\u548C\u516C\u5171\u53C2\u6570
   * @param {*} options
   *  spm_id : spmid \u975E\u5FC5\u4F20 \u53D6meta\u4E2Dspmid
   *  c : C\u6BB5  \u975E\u5FC5\u4F20 \u9ED8\u8BA4 0
   *  d : D\u6BB5 \u975E\u5FC5\u4F20  \u9ED8\u8BA4 0
   *  e : E\u6BB5 \u975E\u5FC5\u4F20  \u9ED8\u8BA4 0
   *  type : pv, click, appear \u4E0A\u62A5\u7C7B\u578B\u901A\u9053
   * @param {*} info
   */
  allCustomReport: function allCustomReport() {
    var _document$getElements;

    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var info = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var spm_idAB = options.spm_id || ((_document$getElements = document.getElementsByTagName('meta').spm_prefix) === null || _document$getElements === void 0 ? void 0 : _document$getElements.content) || '0.0';
    var spmidC = options.c || '0';
    var spmidD = options.d || '0';
    var spmidE = options.e || '0';
    var spm_id = spmidE ? "".concat(spm_idAB, ".").concat(spmidC, ".").concat(spmidD, ".").concat(spmidE) : "".concat(spm_idAB, ".").concat(spmidC, ".").concat(spmidD);

    if (!options.type) {
      throw new Error('report need type');
    }

    info.spm_id = spm_id; // MReporter logic

    if (window.MReporter) {
      var input = {
        msg: info,
        spm: {
          id: options.spm_id,
          mol: spmidC,
          pos: spmidD,
          ext: spmidE
        }
      };
      window.MReporter[options.type] && window.MReporter[options.type](input);
      return;
    } // log-reporter logic


    if (window.reportObserver && window.reportObserver.reportCustomData) {
      window.reportObserver.reportCustomData(options.type, info);
    }
  },
  getImgSrc: function getImgSrc(file) {
    var option = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return utils.trimHttp(utils.webp(file, option));
  },
  // MReporter mr-show attribute \u7EC4\u88C5
  mrShowAttr: function mrShowAttr(msg, evtName, index) {
    var payload = {
      msg: msg,
      evt: "".concat(evtName, ".show.").concat(index)
    };
    return JSON.stringify(payload);
  }
};



(function() {
    'use strict';

    function getLocationSpanByReply(reply, attrs=""){
        if(reply && reply.reply_control && reply.reply_control.location){
            return \`<span class="btk-comment-location reply-location" \${attrs}>\${reply.reply_control.location || ''}</span>\`;
        }else{
            return "";
        }

    }

    hackEle(HTMLBodyElement.prototype, "insertBefore", hack);
    hackEle(HTMLHeadElement.prototype, "insertBefore", hack);

    hackEle(HTMLBodyElement.prototype, "appendChild", hack);
    hackEle(HTMLHeadElement.prototype, "appendChild", hack);

    StartObserveNewPage(); // \u5BF9\u65B0\u7248\u89C6\u9891\u9875\u7684\u8FDB\u884Cinject \uFF0Cjust Test

    async function StartObserveNewPage(){
        await waitForElement(".browser-pc")
        // \u672C\u6765\u76F8\u5BF9 Vue-next \u7684 render \u505A\u6CE8\u5165\u7684\uFF0C\u60F3\u4E86\u60F3\u611F\u89C9\u592A\u9EBB\u70E6\u4E86\uFF0C\u8FD8\u662F\u7B80\u5355\u70B9\uFF0C\u505A\u6210 MutationObserver \u7B97\u4E86
        const targetNode = document.querySelector("body");
        function setCode(){
            const nodes = [
                ...document.querySelectorAll(".browser-pc .reply-item .reply-time"),
                ...document.querySelectorAll(".browser-pc .sub-reply-item .sub-reply-time")
                          ];
            nodes.forEach(node=>{
                if(!node.__vueParentComponent){
                    return;
                }
                if(node.settled){
                    return;
                }
                node.settled = true;
                const item = node.__vueParentComponent.props.reply || node.__vueParentComponent.props.subReply
                let locationSpan = getLocationSpanByReply(item,\`style="margin-right:20px;"\`);

                node.outerHTML = node.outerHTML + locationSpan ;
                //console.log(node)
            })
        }
        const config = { childList: true, subtree: true };
        const callback = function(mutationsList, observer) {
            setCode()
        };
        const observer = new MutationObserver(callback);
        observer.observe(targetNode, config);
        setCode()
    }


    function hackEle(ele, func, callback){
        const ori = ele[func];
        ele[func] = function(...args){
            // console.log(this, ...args)
            return callback(ori.bind(this), ...args)
        }
    };


    function injectbbComment(){
        const bbComment = window.bbComment;
        if( !bbComment.prototype._createSubReplyUserFace ){
            //console.log("inject Old ")
            injectOldbbComment();
        }else{
            //console.log("inject New ")
            injectNewbbComment();
        }
    };

    // \u65E7\u7248\u8BC4\u8BBA\uFF0C\u4E3A\u5565\u4F1A\u6709\u65E7\u7248\u8BC4\u8BBA\u5462\uFF0C\u56E0\u4E3A\u6709\u4EBA\u5728\u7528 403348 \uFF5E
    function injectOldbbComment(){
        const g = window.bbComment;
        const f = utils;
        g.prototype._createListCon = function(e, n, t) {
            var locationSpan = getLocationSpanByReply(e);
            var r = this._parentBlacklistDom(e, n, t)
            , i = ['<div class="con ' + (t == n ? "no-border" : "") + '">', '<div class="user">' + this._identity(e.mid, e.assist, e.member.fans_detail), '<a data-usercard-mid="' + e.mid + '" href="//space.bilibili.com/' + e.mid + '" target="_blank" class="name ' + this._createVipClass(e.member.vip.vipType, e.member.vip.vipStatus, e.member.vip.themeType) + '">' + f.unhtml(e.member.uname) + '</a><a class="level-link" href="//www.bilibili.com/blackboard/help.html#%E4%BC%9A%E5%91%98%E7%AD%89%E7%BA%A7%E7%9B%B8%E5%85%B3" target="_blank"><i class="level l' + e.member.level_info.current_level + '"></i></a>' + this._createNameplate(e.member.nameplate) + this._createUserSailing(e.member && e.member.user_sailing || {}) + "</div>", this._createMsgContent(e), '<div class="info">', e.floor ? '<span class="floor">#' + e.floor + "</span>" : "", this._createPlatformDom(e.content.plat), '<span class="time">' + this._formateTime(e.ctime) + "</span>",locationSpan, e.lottery_id ? "" : '<span class="like ' + (1 == e.action ? "liked" : "") + '"><i></i><span>' + (e.like || "") + "</span></span>", e.lottery_id ? "" : '<span class="hate ' + (2 == e.action ? "hated" : "") + '"><i></i></span>', e.lottery_id ? "" : this._createReplyBtn(e.rcount), e.lottery_id && e.mid !== this.userStatus.mid ? "" : '<div class="operation more-operation"><div class="spot"></div><div class="opera-list"><ul>' + (this._canSetTop(e) ? '<li class="set-top">' + (e.isUpTop ? "\u53D6\u6D88\u7F6E\u9876" : "\u8BBE\u4E3A\u7F6E\u9876") + "</li>" : "") + (this._canBlackList(e.mid) ? '<li class="blacklist">\u52A0\u5165\u9ED1\u540D\u5355</li>' : "") + (this._canReport(e.mid) ? '<li class="report">\u4E3E\u62A5</li>' : "") + (this._canDel(e.mid) && !e.isTop ? '<li class="del" data-mid="' + e.mid + '">\u5220\u9664</li>' : "") + "</ul></div></div>", this._createLotteryContent(e.content), this._createVoteContent(e.content), this._createTags(e), "</div>", '<div class="reply-box">', this._createSubReplyList(e.replies, e.rcount, !1, e.rpid, e.folder && e.folder.has_folded), "</div>", '<div class="paging-box">', "</div>", "</div>"].join("");
            return f.browser.version.mobile && (i = ['<div class="con ' + (t == n ? "no-border" : "") + '">', '<div class="user">' + this._identity(e.mid, e.assist, e.member.fans_detail), '<a data-usercard-mid="' + e.mid + '" href="//space.bilibili.com/' + e.mid + '" target="_blank" class="name ' + this._createVipClass(e.member.vip.vipType, e.member.vip.vipStatus, e.member.vip.themeType) + '">' + f.unhtml(e.member.uname) + '</a><a class="level-link" href="//www.bilibili.com/blackboard/help.html#%E4%BC%9A%E5%91%98%E7%AD%89%E7%BA%A7%E7%9B%B8%E5%85%B3" target="_blank"><i class="level l' + e.member.level_info.current_level + '"></i></a>' + this._createNameplate(e.member.nameplate) + '<div class="right">', e.floor ? '<span class="floor">#' + e.floor + "</span>" : "", '<span class="time">' + this._formateMobileTime(e.ctime) + "</span></div>", "</div>", this._createMsgContent(e), this._createVoteContent(e.content), '<div class="info">', this._createPlatformDom(e.content.plat), '<span class="like ' + (1 == e.action ? "liked" : "") + '"><i></i><span>' + (e.like || "") + "</span></span>", '<span class="hate ' + (2 == e.action ? "hated" : "") + '"><i></i></span>', this._createReplyBtn(e.rcount), '<div class="operation more-operation"><div class="spot"></div><div class="opera-list"><ul>' + (this._canSetTop(e) ? '<li class="set-top">' + (e.isUpTop ? "\u53D6\u6D88\u7F6E\u9876" : "\u8BBE\u4E3A\u7F6E\u9876") + "</li>" : "") + (this._canBlackList(e.mid) ? '<li class="blacklist">\u52A0\u5165\u9ED1\u540D\u5355</li>' : "") + (this._canReport(e.mid) ? '<li class="report">\u4E3E\u62A5</li>' : "") + (this._canDel(e.mid) && !e.isTop ? '<li class="del" data-mid="' + e.mid + '">\u5220\u9664</li>' : "") + "</ul></div></div>", "</div>", this._createTags(e), '<div class="reply-box">', this._createSubReplyList(e.replies, e.rcount, !1, e.rpid, e.folder && e.folder.has_folded), "</div>", '<div class="paging-box">', "</div>", "</div>"].join("")),
                e.state === this.blacklistCode ? r : i
        }
        g.prototype._createSubFoldedListCon = function(e) {
            var locationSpan = getLocationSpanByReply(e);
            var n = this._parentBlacklistDom(e, 0)
            , t = ['<div class="con">', '<div class="user">' + this._identity(e.mid, e.assist, e.member.fans_detail), '<a data-usercard-mid="' + e.mid + '" href="//space.bilibili.com/' + e.mid + '" target="_blank" class="name ' + this._createVipClass(e.member.vip.vipType, e.member.vip.vipStatus, e.member.vip.themeType) + '">' + f.unhtml(e.member.uname) + '</a><a class="level-link" href="//www.bilibili.com/blackboard/help.html#%E4%BC%9A%E5%91%98%E7%AD%89%E7%BA%A7%E7%9B%B8%E5%85%B3" target="_blank"><i class="level l' + e.member.level_info.current_level + '"></i></a>' + this._createNameplate(e.member.nameplate), "</div>", this._createMsgContent(e), '<div class="info">', '<span class="time">' + this._formateTime(e.ctime) + "</span>",locationSpan, '<span class="like ' + (1 == e.action ? "liked" : "") + '"><i></i><span>' + (e.like || "") + "</span></span>", this._createReplyBtn(e.rcount), '<div class="operation more-operation"><div class="spot"></div><div class="opera-list"><ul>' + (this._canSetTop(e) ? '<li class="set-top">' + (e.isUpTop ? "\u53D6\u6D88\u7F6E\u9876" : "\u8BBE\u4E3A\u7F6E\u9876") + "</li>" : "") + (this._canBlackList(e.mid) ? '<li class="blacklist">\u52A0\u5165\u9ED1\u540D\u5355</li>' : "") + (this._canReport(e.mid) ? '<li class="report">\u4E3E\u62A5</li>' : "") + (this._canDel(e.mid) && !e.isTop ? '<li class="del" data-mid="' + e.mid + '">\u5220\u9664</li>' : "") + "</ul></div></div>", "</div>", "</div>"].join("");
            return f.browser.version.mobile && (t = ['<div class="con">', '<div class="user">' + this._identity(e.mid, e.assist, e.member.fans_detail), '<a data-usercard-mid="' + e.mid + '" href="//space.bilibili.com/' + e.mid + '" target="_blank" class="name ' + this._createVipClass(e.member.vip.vipType, e.member.vip.vipStatus, e.member.vip.themeType) + '">' + f.unhtml(e.member.uname) + '</a><a class="level-link" href="//www.bilibili.com/blackboard/help.html#%E4%BC%9A%E5%91%98%E7%AD%89%E7%BA%A7%E7%9B%B8%E5%85%B3" target="_blank"><i class="level l' + e.member.level_info.current_level + '"></i></a>' + this._createNameplate(e.member.nameplate), '<div class="right">', '<span class="time">' + this._formateMobileTime(e.ctime) + "</span></div>", "</div>", this._createMsgContent(e), '<div class="info">', this._createPlatformDom(e.content.plat), '<span class="like ' + (1 == e.action ? "liked" : "") + '"><i></i><span>' + (e.like || "") + "</span></span>", this._createReplyBtn(e.rcount), '<div class="operation more-operation"><div class="spot"></div><div class="opera-list"><ul>' + (this._canSetTop(e) ? '<li class="set-top">' + (e.isUpTop ? "\u53D6\u6D88\u7F6E\u9876" : "\u8BBE\u4E3A\u7F6E\u9876") + "</li>" : "") + (this._canBlackList(e.mid) ? '<li class="blacklist">\u52A0\u5165\u9ED1\u540D\u5355</li>' : "") + (this._canReport(e.mid) ? '<li class="report">\u4E3E\u62A5</li>' : "") + (this._canDel(e.mid) && !e.isTop ? '<li class="del" data-mid="' + e.mid + '">\u5220\u9664</li>' : "") + "</ul></div></div>", "</div>", "</div>"].join("")),
                e.state === this.blacklistCode ? n : t
        }
        g.prototype._createTopFoldedListCon = function(e) {
            var locationSpan = getLocationSpanByReply(e);
            var n = this._parentBlacklistDom(e, 0)
            , t = ['<div class="con">', '<div class="user">' + this._identity(e.mid, e.assist, e.member.fans_detail), '<a data-usercard-mid="' + e.mid + '" href="//space.bilibili.com/' + e.mid + '" target="_blank" class="name ' + this._createVipClass(e.member.vip.vipType, e.member.vip.vipStatus, e.member.vip.themeType) + '">' + f.unhtml(e.member.uname) + '</a><a class="level-link" href="//www.bilibili.com/blackboard/help.html#%E4%BC%9A%E5%91%98%E7%AD%89%E7%BA%A7%E7%9B%B8%E5%85%B3" target="_blank"><i class="level l' + e.member.level_info.current_level + '"></i></a>' + this._createNameplate(e.member.nameplate), "</div>", this._createMsgContent(e), '<div class="info">', e.floor ? '<span class="floor">#' + e.floor + "</span>" : "", this._createPlatformDom(e.content.plat), '<span class="time">' + this._formateTime(e.ctime) + "</span>",locationSpan, '<span class="like ' + (1 == e.action ? "liked" : "") + '"><i></i><span>' + (e.like || "") + "</span></span>", '<span class="hate ' + (2 == e.action ? "hated" : "") + '"><i></i></span>', this._createReplyBtn(e.rcount), '<div class="operation more-operation"><div class="spot"></div><div class="opera-list"><ul>' + (this._canSetTop(e) ? '<li class="set-top">' + (e.isUpTop ? "\u53D6\u6D88\u7F6E\u9876" : "\u8BBE\u4E3A\u7F6E\u9876") + "</li>" : "") + (this._canBlackList(e.mid) ? '<li class="blacklist">\u52A0\u5165\u9ED1\u540D\u5355</li>' : "") + (this._canReport(e.mid) ? '<li class="report">\u4E3E\u62A5</li>' : "") + (this._canDel(e.mid) && !e.isTop ? '<li class="del" data-mid="' + e.mid + '">\u5220\u9664</li>' : "") + "</ul></div></div>", "</div>", "</div>"].join("");
            return f.browser.version.mobile && (t = ['<div class="con">', '<div class="user">' + this._identity(e.mid, e.assist, e.member.fans_detail), '<a data-usercard-mid="' + e.mid + '" href="//space.bilibili.com/' + e.mid + '" target="_blank" class="name ' + this._createVipClass(e.member.vip.vipType, e.member.vip.vipStatus, e.member.vip.themeType) + '">' + f.unhtml(e.member.uname) + '</a><a class="level-link" href="//www.bilibili.com/blackboard/help.html#%E4%BC%9A%E5%91%98%E7%AD%89%E7%BA%A7%E7%9B%B8%E5%85%B3" target="_blank"><i class="level l' + e.member.level_info.current_level + '"></i></a>' + this._createNameplate(e.member.nameplate), '<div class="right">', e.floor ? '<span class="floor">#' + e.floor + "</span>" : "", '<span class="time">' + this._formateMobileTime(e.ctime) + "</span></div>", "</div>", this._createMsgContent(e), '<div class="info">', this._createPlatformDom(e.content.plat), '<span class="like ' + (1 == e.action ? "liked" : "") + '"><i></i><span>' + (e.like || "") + "</span></span>", '<span class="hate ' + (2 == e.action ? "hated" : "") + '"><i></i></span>', this._createReplyBtn(e.rcount), '<div class="operation more-operation"><div class="spot"></div><div class="opera-list"><ul>' + (this._canSetTop(e) ? '<li class="set-top">' + (e.isUpTop ? "\u53D6\u6D88\u7F6E\u9876" : "\u8BBE\u4E3A\u7F6E\u9876") + "</li>" : "") + (this._canBlackList(e.mid) ? '<li class="blacklist">\u52A0\u5165\u9ED1\u540D\u5355</li>' : "") + (this._canReport(e.mid) ? '<li class="report">\u4E3E\u62A5</li>' : "") + (this._canDel(e.mid) && !e.isTop ? '<li class="del" data-mid="' + e.mid + '">\u5220\u9664</li>' : "") + "</ul></div></div>", "</div>", "</div>"].join("")),
                e.state === this.blacklistCode ? n : t
        }

        g.prototype._parentBlacklistDom = function(e, n, t) {
            var locationSpan = getLocationSpanByReply(e);
            return ['<div class="con ' + (t == n ? "no-border" : "") + '">', '<div class="user blacklist-font-color">\u9ED1\u540D\u5355\u7528\u6237</div>', '<p class="text">\u7531\u4E8E\u9ED1\u540D\u5355\u8BBE\u7F6E\uFF0C\u8BE5\u8BC4\u8BBA\u5DF2\u88AB\u9690\u85CF\u3002</p>', '<div class="info">', e.floor ? '<span class="floor">#' + e.floor + "</span>" : "", this._createPlatformDom(e.content.plat), '<span class="time">' + this._formateTime(e.ctime) + "</span>", locationSpan, this._canDel(e.mid) ? '<div class="operation btn-hover"><div class="spot"></div><div class="opera-list"><ul><li class="del" data-mid="' + e.mid + '">\u5220\u9664</li></ul></div></div>' : "", "</div>", "</div>"].join("")
        }
        g.prototype._subBlacklistDom = function(e) {
            var locationSpan = getLocationSpanByReply(e);
            return ['<div class="reply-item reply-wrap" data-id="' + e.rpid + '">', '<a class="reply-face"><img src="' + this.noface + '"></a>', '<div class="reply-con">', '<div class="user">', '<span class="blacklist-font-color name">\u9ED1\u540D\u5355\u7528\u6237 </span> <span class="text-con">\u7531\u4E8E\u9ED1\u540D\u5355\u8BBE\u7F6E\uFF0C\u8BE5\u56DE\u590D\u5DF2\u88AB\u9690\u85CF\u3002</span>', "</div>", "</div>", '<div class="info">', '<span class="time">' + this._formateTime(e.ctime) + "</span>", locationSpan, this._canDel(e.mid) ? '<div class="operation btn-hover btn-hide-re"><div class="spot"></div><div class="opera-list"><ul><li class="del" data-mid="' + e.mid + '">\u5220\u9664</li></ul></div></div>' : "", "</div>", "</div>"].join("")
        }
        g.prototype._createSubReplyItem = function(e, n) {
            var locationSpan = getLocationSpanByReply(e);
            var t = ['<div class="reply-item reply-wrap" data-id="' + e.rpid + '" data-index="' + n + '">', '<a href="//space.bilibili.com/' + e.mid + '" data-usercard-mid="' + e.mid + '" target="_blank" class="reply-face">', '<img src="' + f.trimHttp(f.webp(e.member.avatar, {
                w: 52,
                h: 52
            })) + '" alt="">', "</a>", '<div class="reply-con">', '<div class="user">', '<a href="//space.bilibili.com/' + e.mid + '" target="_blank" data-usercard-mid="' + e.mid + '" class="name ' + this._createVipClass(e.member.vip.vipType, e.member.vip.vipStatus, e.member.vip.themeType) + '">' + f.unhtml(e.member.uname) + "</a>", '<a class="level-link" href="//www.bilibili.com/blackboard/help.html#%E4%BC%9A%E5%91%98%E7%AD%89%E7%BA%A7%E7%9B%B8%E5%85%B3" target="_blank"><i class="level l' + e.member.level_info.current_level + '"></i></a>', this._createSubMsgContent(e), "</div>", "</div>", '<div class="info">', '<span class="time">' + this._formateTime(e.ctime) + "</span>", locationSpan, '<span class="like ' + (1 == e.action ? "liked" : "") + '"><i></i><span>' + (e.like || "") + "</span></span>", '<span class="hate ' + (2 == e.action ? "hated" : "") + '"><i></i></span>', '<span class="reply btn-hover">\u56DE\u590D</span>', '<div class="operation btn-hover btn-hide-re"><div class="spot"></div><div class="opera-list"><ul>' + (this._canBlackList(e.mid) ? '<li class="blacklist">\u52A0\u5165\u9ED1\u540D\u5355</li>' : "") + (this._canReport(e.mid) ? '<li class="report">\u4E3E\u62A5</li>' : "") + (this._canDel(e.mid) ? '<li class="del" data-mid="' + e.mid + '">\u5220\u9664</li>' : "") + "</ul></div></div>", "</div>", "</div>"].join("");
            return f.browser.version.mobile && (t = ['<div class="reply-item reply-wrap" data-id="' + e.rpid + '" data-index="' + n + '">', '<div class="reply-con">', '<div class="user">', '<a href="//space.bilibili.com/' + e.mid + '" target="_blank" data-usercard-mid="' + e.mid + '" class="name ' + this._createVipClass(e.member.vip.vipType, e.member.vip.vipStatus, e.member.vip.themeType) + '">' + f.unhtml(e.member.uname) + "</a>", '<a class="level-link" href="//www.bilibili.com/blackboard/help.html#%E4%BC%9A%E5%91%98%E7%AD%89%E7%BA%A7%E7%9B%B8%E5%85%B3" target="_blank"><i class="level l' + e.member.level_info.current_level + '"></i>', '<div class="right"><span class="time">' + this._formateMobileTime(e.ctime) + "</span></div>", "</a>", this._createSubMsgContent(e), "</div>", '<div class="info">', '<span class="like ' + (1 == e.action ? "liked" : "") + '"><i></i><span>' + (e.like || "") + "</span></span>", '<span class="reply btn-hover">\u56DE\u590D</span>', '<div class="operation btn-hover btn-hide-re"><div class="spot"></div><div class="opera-list"><ul>' + (this._canBlackList(e.mid) ? '<li class="blacklist">\u52A0\u5165\u9ED1\u540D\u5355</li>' : "") + (this._canReport(e.mid) ? '<li class="report">\u4E3E\u62A5</li>' : "") + (this._canDel(e.mid) ? '<li class="del" data-mid="' + e.mid + '">\u5220\u9664</li>' : "") + "</ul></div></div>", "</div>", "</div>", "</div>"].join("")),
                t
        }
    }

    function injectNewbbComment(){
        const bbComment = window.bbComment;
        // console.log("inject New ")
        bbComment.prototype._createListCon = function (item, i, pos) {
            //\u9ED1\u540D\u5355\u7ED3\u6784
            var blCon = this._parentBlacklistDom(item, i, pos); //\u6B63\u5E38\u7ED3\u6784


            var con = ['<div class="con ' + (pos == i ? 'no-border' : '') + '">', '<div class="user">' + this._createNickNameDom(item), this._createLevelLink(item), this._identity(item.mid, item.assist, item.member.fans_detail), this._createNameplate(item.member.nameplate) + this._createUserSailing(item) + '</div>', this._createMsgContent(item), this._createPerfectReply(item), '<div class="info">', this._createPlatformDom(item.content.plat), "<span class=\\"time-location\\">", "<span class=\\"reply-time\\">".concat(this._formateTime(item.ctime), "</span>"), getLocationSpanByReply(item),
                       "</span>", item.lottery_id ? '' : '<span class="like ' + (item.action == 1 ? 'liked' : '') + '"><i></i><span>' + (item.like ? item.like : '') + '</span></span>', item.lottery_id ? '' : '<span class="hate ' + (item.action == 2 ? 'hated' : '') + '"><i></i></span>', item.lottery_id ? '' : this._createReplyBtn(item.rcount), item.lottery_id && item.mid !== this.userStatus.mid ? '' : '<div class="operation more-operation"><div class="spot"></div><div class="opera-list"><ul>' + (this._canSetTop(item) ? '<li class="set-top">' + (item.isUpTop ? '\u53D6\u6D88\u7F6E\u9876' : '\u8BBE\u4E3A\u7F6E\u9876') + '</li>' : '') + (this._canBlackList(item.mid) ? '<li class="blacklist">\u52A0\u5165\u9ED1\u540D\u5355</li>' : '') + (this._canReport(item.mid) ? '<li class="report">\u4E3E\u62A5</li>' : '') + (this._canDel(item.mid) && !item.isTop ? '<li class="del" data-mid="' + item.mid + '">\u5220\u9664</li>' : '') + '</ul></div></div>', this._createLotteryContent(item.content), this._createVoteContent(item.content), this._createTags(item), '</div>', '<div class="reply-box">', this._createSubReplyList(item.replies, item.rcount, false, item.rpid, item.folder && item.folder.has_folded, item.reply_control), '</div>', '<div class="paging-box">', '</div>', '</div>'].join('');

            if (utils.browser.version.mobile) {
                con = ['<div class="con ' + (pos == i ? 'no-border' : '') + '">', '<div class="user">' + this._identity(item.mid, item.assist, item.member.fans_detail), this._createNickNameDom(item), this._createLevelLink(item), this._createNameplate(item.member.nameplate) + '<div class="right">', '<span class="time">' + this._formateMobileTime(item.ctime) + '</span></div>', '</div>', this._createMsgContent(item), this._createVoteContent(item.content), '<div class="info">', this._createPlatformDom(item.content.plat), '<span class="like ' + (item.action == 1 ? 'liked' : '') + '"><i></i><span>' + (item.like ? item.like : '') + '</span></span>', '<span class="hate ' + (item.action == 2 ? 'hated' : '') + '"><i></i></span>', this._createReplyBtn(item.rcount), '<div class="operation more-operation"><div class="spot"></div><div class="opera-list"><ul>' + (this._canSetTop(item) ? '<li class="set-top">' + (item.isUpTop ? '\u53D6\u6D88\u7F6E\u9876' : '\u8BBE\u4E3A\u7F6E\u9876') + '</li>' : '') + (this._canBlackList(item.mid) ? '<li class="blacklist">\u52A0\u5165\u9ED1\u540D\u5355</li>' : '') + (this._canReport(item.mid) ? '<li class="report">\u4E3E\u62A5</li>' : '') + (this._canDel(item.mid) && !item.isTop ? '<li class="del" data-mid="' + item.mid + '">\u5220\u9664</li>' : '') + '</ul></div></div>', '</div>', this._createTags(item), '<div class="reply-box">', this._createSubReplyList(item.replies, item.rcount, false, item.rpid, item.folder && item.folder.has_folded, item.reply_control), '</div>', '<div class="paging-box">', '</div>', '</div>'].join('');
            }

            return item.state === this.blacklistCode ? blCon : con;
        };
        bbComment.prototype._createSubReplyItem = function (item, i) {
            if (item.invisible) {
                return '';
            }

            var dom = ['<div class="reply-item reply-wrap" data-id="' + item.rpid + '" data-index="' + i + '">', this._createSubReplyUserFace(item), // '<a href="//space.bilibili.com/' + item.mid + '" data-usercard-mid="' + item.mid + '" target="_blank" class="reply-face">',
                       // '<img src="' + utils.trimHttp(utils.webp(item.member.avatar, { w: 52, h: 52, freeze: true })) + '" alt="">',
                       // '</a>',
                       '<div class="reply-con">', '<div class="user">', this._createNickNameDom(item), this._createLevelLink(item), this._identity(item.mid), this._createSubMsgContent(item), '</div>', '</div>', '<div class="info">', "<span class=\\"time-location\\">", "<span class=\\"reply-time\\">".concat(this._formateTime(item.ctime), "</span>"), getLocationSpanByReply(item),
                       "</span>", '<span class="like ' + (item.action == 1 ? 'liked' : '') + '"><i></i><span>' + (item.like ? item.like : '') + '</span></span>', '<span class="hate ' + (item.action == 2 ? 'hated' : '') + '"><i></i></span>', '<span class="reply btn-hover">\u56DE\u590D</span>', '<div class="operation btn-hover btn-hide-re"><div class="spot"></div><div class="opera-list"><ul>' + (this._canBlackList(item.mid) ? '<li class="blacklist">\u52A0\u5165\u9ED1\u540D\u5355</li>' : '') + (this._canReport(item.mid) ? '<li class="report">\u4E3E\u62A5</li>' : '') + (this._canDel(item.mid) ? '<li class="del" data-mid="' + item.mid + '">\u5220\u9664</li>' : '') + '</ul></div></div>', '</div>', '</div>'].join('');

            if (utils.browser.version.mobile) {
                dom = ['<div class="reply-item reply-wrap" data-id="' + item.rpid + '" data-index="' + i + '">', // '<a href="//space.bilibili.com/' + item.mid + '" data-usercard-mid="' + item.mid + '" target="_blank" class="reply-face">',
                           // '<img src="' + utils.trimHttp(utils.webp(item.member.avatar, {w: 52, h: 52})) +'" alt="">',
                           // '</a>',
                           '<div class="reply-con">', '<div class="user">', this._createNickNameDom(item), this._createLevelLink(item), this._identity(item.mid), '<div class="right"><span class="time">' + this._formateMobileTime(item.ctime) + '</span></div>', '</a>', this._createSubMsgContent(item), '</div>', '<div class="info">', '<span class="like ' + (item.action == 1 ? 'liked' : '') + '"><i></i><span>' + (item.like ? item.like : '') + '</span></span>', '<span class="reply btn-hover">\u56DE\u590D</span>', '<div class="operation btn-hover btn-hide-re"><div class="spot"></div><div class="opera-list"><ul>' + (this._canBlackList(item.mid) ? '<li class="blacklist">\u52A0\u5165\u9ED1\u540D\u5355</li>' : '') + (this._canReport(item.mid) ? '<li class="report">\u4E3E\u62A5</li>' : '') + (this._canDel(item.mid) ? '<li class="del" data-mid="' + item.mid + '">\u5220\u9664</li>' : '') + '</ul></div></div>', '</div>', '</div>', '</div>'].join('');
            }

            return dom;
    }




    }




    // \u4F7F\u7528 setter \u76D1\u542C comment \u811A\u672C\u7684\u6CE8\u518C
    let f = undefined;
    Object.defineProperty(window,'bbComment',{
        get: function(){
            return f;
        },

        set: function(val){
            f = val;
            injectbbComment();
        },
        configurable: true,
    });



    function hack(origin, ...args){
        const [ele, target] = [...args];
        if( ele.src && ~ele.src.indexOf("/x/v2/reply")){
            // \u786E\u5B9A\u662F\u8BC4\u8BBA\u7C7B\u578B\uFF0C\u6267\u884C\u989D\u5916\u6D41\u7A0B
            injectbbComment()
        }

        // \u76D1\u542C comment \u7EC4\u4EF6\u7684\u6CE8\u5165
        if(ele.src && ele.src.endsWith("comment.min.js")){
            const ori = ele.onload;
            ele.onload = function(...args){
                injectbbComment();
                ori && ori(...args);
            }
        };


        // \u76D1\u542C comment_vue_next \u7EC4\u4EF6\u7684\u6CE8\u5165\uFF0C\u76F4\u63A5\u5728dynamic import \u65F6\u4FEE\u6539\u6E90\u7801\uFF0C\u4E5F\u662F\u4E00\u79CD\u6743\u5B9C\u4E4B\u8BA1\uFF0C\u8BE5\u7248\u672C\u9488\u5BF9Vue3\u67B6\u6784
        if(ele.src && ele.src.endsWith("comment-pc-vue.next.js")){

            // console.log("\u65B0\u7248\u8BC4\u8BBA\uFF0C\u542F\u7528\u6E90\u7801\u6CE8\u5165");
            !(async function(){
                let code = await (await fetch(ele.src)).text();

                const Ref1Index = code.indexOf("getReplyFloorInfo=");
                const Ref2Index = code.indexOf("getReplyBoxStatus=");
                if( Ref2Index > Ref1Index && Ref1Index > -1){

                    code = code.replace(\`getReplyFloorInfo=\`,\`_RAWgetReplyFloorInfo=\`);
                    code = code.replace(\`getReplyBoxStatus=\`,\`getReplyFloorInfo=Q=>{return {
                        ..._RAWgetReplyFloorInfo(Q),
                        replyLocation: computed(()=>{ return Q.value.reply_control.location || ""})
                      }
                    },getReplyBoxStatus=\`);
                }else{
                    console.error("\u3010BiliToolkit \u8BC4\u8BBA\u533A\u5C5E\u5730\u3011Patch \u5931\u8D25\u3010Vue3 \u7248\u672C\u3011\uFF0C\u65E0\u6CD5\u627E\u5230\u6B63\u786E\u7684 Patch \u4F4D\u7F6E\uFF0C\u8BF7\u53CD\u9988\u540E\u7B49\u5F85\u5F00\u53D1\u8005\u4FEE\u590D");
                }

                eval(code);

                ele.dispatchEvent(new Event("load",{
                    bubbles:true,
                }));
                ele.onload && ele.onload();

            })();

            return;
        };
        // \u9488\u5BF9 lit \u67B6\u6784\u7684
        if(ele.src && (ele.src.endsWith("comment-pc-elements.next.js") || (ele.src.indexOf("commentpc/bili-comments.") > -1))){

            //console.log("\u65B0\u7248\u8BC4\u8BBA\uFF0C\u542F\u7528\u6E90\u7801\u6CE8\u5165");
            !(async function(){
                let code = await (await fetch(ele.src)).text();

                const Ref1Index = code.indexOf(\`<div id="pubdate">','</div>\`);

                const Ref2Index = code.indexOf("this.pubDate,this.handleLike,");
                if( Ref2Index > Ref1Index  && Ref1Index >-1){

                    //ref 1
                    code = code.replace(\`<div id="pubdate">','</div>\`, \`<div id="pubdate">','</div><div id="location" class="btk-comment-location" style="margin-left:var(--kaihe-ml, 20px)">','</div>\`);

                    //ref 2
                    code = code.replace(\`this.pubDate,this.handleLike,\`,\`this.pubDate,(this.data && this.data.reply_control)? this.data.reply_control.location : null,this.handleLike,\`);
                }else{
                    console.error("\u3010BiliToolkit \u8BC4\u8BBA\u533A\u5C5E\u5730\u3011Patch \u5931\u8D25\u3010Elements-lit\u7248\u672C\u3011\uFF0C\u65E0\u6CD5\u627E\u5230\u6B63\u786E\u7684 Patch \u4F4D\u7F6E\uFF0C\u8BF7\u53CD\u9988\u540E\u7B49\u5F85\u5F00\u53D1\u8005\u4FEE\u590D");
                }

                eval(code);

                ele.dispatchEvent(new Event("load",{
                    bubbles:true,
                }));
                ele.onload && ele.onload();

            })();

            return;
        };


        //console.log(ele,ele.src,origin)
        let res = origin(...args);
        //console.log(res)
        return res;
        //return ele;
    }


})();
})();
`;

  // src/modules/viewed/legacy-viewed.ts
  var import_jquery = __toESM(require_jquery(), 1);

  // src/core/info-log.ts
  var rootId = "bili-atelier-info-log";
  var styleId = "bili-atelier-info-log-style";
  var maxItems = 6;
  function ensureInfoLogStyle() {
    if (document.getElementById(styleId)) {
      return;
    }
    const style = document.createElement("style");
    style.id = styleId;
    style.textContent = `
#${rootId} {
  position: fixed;
  top: 84px;
  right: 24px;
  z-index: 2147483640;
  width: min(360px, calc(100vw - 32px));
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 8px;
  pointer-events: none;
  font: 13px/1.45 -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}
#${rootId} .bili-atelier-info-log-item {
  box-sizing: border-box;
  max-width: 100%;
  min-width: 180px;
  padding: 9px 12px;
  border: 1px solid rgba(255,255,255,.18);
  border-left: 4px solid #00aeec;
  border-radius: 8px;
  background: rgba(24,25,28,.88);
  color: #fff;
  box-shadow: 0 8px 24px rgba(0,0,0,.18);
  opacity: 0;
  transform: translateY(-6px);
  transition: opacity .24s ease, transform .24s ease, max-height .28s ease, padding .28s ease, margin .28s ease;
  overflow: hidden;
  overflow-wrap: anywhere;
  backdrop-filter: blur(8px);
}
#${rootId} .bili-atelier-info-log-item.is-visible {
  opacity: .96;
  transform: translateY(0);
}
#${rootId} .bili-atelier-info-log-item.is-leaving {
  max-height: 0 !important;
  margin: 0;
  padding-top: 0;
  padding-bottom: 0;
  opacity: 0;
  transform: translateY(-6px);
}
#${rootId} .bili-atelier-info-log-success { border-left-color: #2ac864; }
#${rootId} .bili-atelier-info-log-warning { border-left-color: #f7b500; }
#${rootId} .bili-atelier-info-log-error { border-left-color: #ff4d4f; }
`;
    (document.head || document.documentElement).appendChild(style);
  }
  function ensureInfoLogRoot() {
    if (!document.body) {
      return null;
    }
    ensureInfoLogStyle();
    let root = document.getElementById(rootId);
    if (!root) {
      root = document.createElement("div");
      root.id = rootId;
      root.setAttribute("data-bili-blocker-ui", "true");
      root.setAttribute("data-bili-atelier-ui", "info-log");
      document.body.appendChild(root);
    }
    return root;
  }
  function showInfoLog(message, tone = "info", durationMs = 3600) {
    const text2 = String(message || "").replace(/\s+/g, " ").trim();
    if (!text2) {
      return;
    }
    const root = ensureInfoLogRoot();
    if (!root) {
      document.addEventListener("DOMContentLoaded", () => showInfoLog(text2, tone, durationMs), { once: true });
      return;
    }
    const item = document.createElement("div");
    item.className = `bili-atelier-info-log-item bili-atelier-info-log-${tone}`;
    item.textContent = text2;
    root.prepend(item);
    item.style.maxHeight = `${Math.max(48, item.scrollHeight + 20)}px`;
    window.requestAnimationFrame(() => item.classList.add("is-visible"));
    while (root.children.length > maxItems) {
      root.lastElementChild?.remove();
    }
    window.setTimeout(() => {
      item.classList.add("is-leaving");
      window.setTimeout(() => item.remove(), 320);
    }, durationMs);
  }

  // src/modules/viewed/storage.ts
  function getViewedGroupId(value) {
    const id = String(value || "").trim();
    if (id.length < 5) {
      return "";
    }
    if (id.startsWith("ep")) {
      return `ep${id.slice(-1)}`;
    }
    if (id.startsWith("ss")) {
      return `ss${id.slice(-1)}`;
    }
    if (id.length === 10) {
      return id.charAt(1);
    }
    if (id.length > 10 && id.indexOf("-") === 10) {
      return id.charAt(1);
    }
    return "";
  }
  function getLegacyViewedGroupId(value) {
    const id = String(value);
    if (id.length < 5) {
      return "";
    }
    if (id.startsWith("ep")) {
      return `ep${id.slice(-1)}`;
    }
    if (id.startsWith("ss")) {
      return `ss${id.slice(-1)}`;
    }
    if (id.length === 10) {
      return id.charAt(1);
    }
    if (id.length > 10 && id.indexOf("-") === 10) {
      return id.charAt(1);
    }
    return "";
  }
  function normalizeViewedId(value) {
    let id = String(value || "").trim();
    if (!id) {
      return null;
    }
    id = id.replace(/^BV/i, "");
    return getViewedGroupId(id) ? id : null;
  }
  function groupViewedItems(values) {
    const groups = {};
    const seen = /* @__PURE__ */ new Set();
    for (const value of values) {
      const id = normalizeViewedId(value);
      if (!id || seen.has(id)) {
        continue;
      }
      seen.add(id);
      const groupId = getViewedGroupId(id);
      if (!groups[groupId]) {
        groups[groupId] = [];
      }
      groups[groupId].push(id);
    }
    return groups;
  }
  function groupLegacyViewedItems(values) {
    const groups = {};
    for (const value of values) {
      const id = String(value);
      if (id.length < 6) {
        continue;
      }
      const groupId = getLegacyViewedGroupId(id);
      if (!groupId) {
        continue;
      }
      if (!groups[groupId]) {
        groups[groupId] = [];
      }
      groups[groupId].unshift(id);
    }
    return groups;
  }
  function flattenViewedGroups(groups) {
    const items = [];
    const seen = /* @__PURE__ */ new Set();
    for (const value of Object.values(groups)) {
      if (!Array.isArray(value)) {
        continue;
      }
      for (const item of value) {
        const id = normalizeViewedId(item);
        if (!id || seen.has(id)) {
          continue;
        }
        seen.add(id);
        items.push(id);
      }
    }
    return items;
  }
  function viewedGroupStorageKey(groupId) {
    return `BiliViewed_${groupId}`;
  }
  function listViewedGroupKeys() {
    if (typeof GM_listValues !== "function") {
      return [];
    }
    return GM_listValues().filter((key) => String(key).startsWith("BiliViewed_"));
  }
  function readViewedGroup(groupId, fallback = null) {
    return GM_getValue(viewedGroupStorageKey(groupId), fallback);
  }
  function writeViewedGroup(groupId, values) {
    GM_setValue(viewedGroupStorageKey(groupId), values);
  }
  function readViewedStorage() {
    const groups = {};
    for (const key of listViewedGroupKeys()) {
      const groupId = String(key).slice("BiliViewed_".length);
      groups[groupId] = flattenViewedGroups({ [groupId]: readViewedGroup(groupId, []) });
    }
    return { items: flattenViewedGroups(groups), groups };
  }
  function clearViewedStorage() {
    for (const key of listViewedGroupKeys()) {
      GM_deleteValue(key);
    }
  }
  function writeViewedStorage(snapshot, mode) {
    const incomingItems = snapshot.items?.length ? snapshot.items : snapshot.groups ? flattenViewedGroups(snapshot.groups) : [];
    const currentItems = mode === "append" ? readViewedStorage().items : [];
    const groups = groupViewedItems(currentItems.concat(incomingItems));
    if (mode === "overwrite") {
      clearViewedStorage();
    }
    for (const [groupId, values] of Object.entries(groups)) {
      writeViewedGroup(groupId, values);
    }
    return { items: flattenViewedGroups(groups), groups };
  }
  function isLegacyViewedExport(value) {
    return !!value && typeof value === "object" && Object.keys(value).some((key) => key.startsWith("BiliViewed_"));
  }
  function normalizeLegacyViewedExport(value) {
    const groups = {};
    for (const [key, items] of Object.entries(value)) {
      if (!key.startsWith("BiliViewed_") || !Array.isArray(items)) {
        continue;
      }
      const groupId = key.slice("BiliViewed_".length);
      groups[groupId] = flattenViewedGroups({ [groupId]: items });
    }
    return { items: flattenViewedGroups(groups), groups };
  }

  // src/modules/viewed/legacy-viewed.ts
  function startViewedMarker() {
    const jq = import_jquery.default;
    if (jq.fn && !jq.fn.size) {
      jq.fn.size = function() {
        return this.length;
      };
    }
    var opacityIsViewCover = 0.45;
    var opacitybtnView = 0.8;
    var opacitybtnIsView = 0.8;
    var GM_addStyle = function(css) {
      var style = document.createElement("style");
      style.type = "text/css";
      style.appendChild(document.createTextNode(css));
      document.getElementsByTagName("head")[0].appendChild(style);
    };
    let staticStyle = `
.btnView{opacity:` + opacitybtnView + `;background:#fff;color:#999!important;width:fit-content;line-height:16px;font-size:12px;text-align:center;cursor:pointer;display:inline-block;position:absolute;left:0;top:0;z-index:2;border:1px solid #999;border-radius:3px;padding:3px 5px;}
.btnIsView{opacity:` + opacitybtnIsView + `;background:#fff8;}/*\u3010idue\u3011background:#FF9EB5;color:#aaa;*/
.btnView:hover{opacity:1;background:#aaa;color:#fff!important;}
.btnIsView:hover{background:#fff;opacity:1;color:#999!important;}/*\u3010idue\u3011background:#FF7BA9;*/
.btnSetAllViewed,.btnRefresh{display:inline-block;background:#fff;font-size:14px;border:1px solid #999;border-radius:5px;color:#999;padding:3px 5px;cursor:pointer;word-break:keep-all;}
.btnSetAllViewed:hover,.btnRefresh:hover{background:#aaa;color:#fff;}`;
    var searchStyle = `
/*\u641C\u7D22\u7ED3\u679C\u9875*/
/*\u81EA\u5B9A\u4E49\u7684\u6570\u636E\u64CD\u4F5C\u6309\u94AE\uFF1A\u9ED8\u8BA4\u6837\u5F0F*/
.btnList{display:inline-block;background:#fff;border:1px solid #999;border-radius:5px;color:#999;padding:3px 5px;cursor:pointer;}
.btnList:hover{background:#aaa;color:#fff;}
.btnListSave{display:inline-block;display:none;background:#fff;border:1px solid #999;border-radius:5px;color:#999;padding:3px 5px;cursor:pointer;}
.btnListSave:hover{background:#aaa;color:#fff;}
.viewList{width:100%;height:120px;margin:10px 0;display:none;color:#999;padding:3px 5px;}
/*202501\u7248\u672C\uFF1A\u6309\u94AE\u4F4D\u7F6E\u5FAE\u8C03*/
.btnList{position:absolute;top:11px;right:0;}
.btnListSave{position:absolute;top:11px;right:83px;}
/*202504\u7248\u672C\uFF1A\u6309\u94AE\u4F4D\u7F6E\u5FAE\u8C03*/
.search-input .search-input-container .search-input-wrap{margin:0 10px 0 0;}
/*202501\u7248\u672C\uFF1A\u756A\u5267\u641C\u7D22\u7ED3\u679C*/
.media-card-content-footer-btns{height:45px!important;}
.p_relativeSpan{position:relative;padding:0 0 22px;display:inline-block;}
.p_relativeSpan .btnView{left:-1px;top:unset;bottom:0;position:absolute;border:none;}
.media-footerClone{position:absolute;}
.media-footerClone a{margin-right:8px;}
.media-footerClone .media-footer-badge{top:-14px;}
.bangumi-pgc-list .media-item{overflow-y:auto;}
.media-card>.btnView{left:8px;}
.media-card-image-follow[data-v-402c7b9e]{top:22px;}
/*202501\u7248\u672C\uFF1A\u7EFC\u827A\u641C\u7D22\u7ED3\u679C*/
.selConSpan{position:relative;}
.selConSpan .btnView{top:8px;left:4px;}
.media-footer-select-content-item{padding:0 6px 0 48px!important;}
`;
    const spaceStyle = `
/*\u522B\u4EBA\u7684\u7A7A\u95F4\u9875\uFF1Aspace.bili*/
.btnRefresh{margin:0 0 0 16px;line-height:20px;}
.n-inner .btnRefresh{top:5px;position:relative;}
/*202503\u9009\u65E7\u7248\uFF1A\u3010\u4E3B\u9875\u3011TA\u7684\u89C6\u9891\u3001\u5408\u96C6\xB7XXXX*/
.small-item .cover{background:none!important;}
.small-item .btnView{top:10px;left:10px;}
/*202503\u9009\u65E7\u7248\uFF1A\u3010\u4E3B\u9875\u3011TA\u7684\u89C6\u9891*/
#page-index .video .small-item:nth-child(4n+1) .btnView{left:0;}
/*202503\u9009\u65E7\u7248\uFF1A\u3010\u4E3B\u9875\u3011\u5408\u96C6\xB7XXXX*/
.channel-video .small-item:nth-child(4n+1) .btnView{left:0;}
/*202503\u9009\u65B0\u7248or\u9009\u65E7\u7248\uFF1A\u3010\u52A8\u6001\u3011*/
.bili-dyn-content__orig__major{position:relative;}
/*202503\u9009\u65E7\u7248\uFF1A\u3010\u6295\u7A3F\u3011list\u6A21\u5F0F*/
#submit-video-list .list-list .btnView{top:20px;left:0;}
/*202503\u9009\u65E7\u7248\uFF1A\u3010\u5408\u96C6\u548C\u5217\u8868\u3011list\u6A21\u5F0F*/
.series-item .btnView{top:10px;left:10px;}
/*202503\u9009\u65E7\u7248\uFF1A\u3010\u5408\u96C6\u548C\u5217\u8868\u3011\u67D0\u4E2A\u5408\u96C6\u70B9\u201C\u66F4\u591A\u201D*/
.channel-detail .btnView{top:20px;}
  /*202503\u9009\u65E7\u7248\uFF1A\u3010\u6536\u85CF\u3011*/
  .fav-video-list .btnView{top:0;left:0;z-index:9;}
  /*202606\u65B0\u7248\u4E2A\u4EBA\u9875\u89C6\u9891\u5361\u7247*/
  .bili-video-card,.bili-video-card__wrap,.upload-video-card,.space-video-card,.video-card{position:relative;}
  `;
    const historyStyle = `
/*\u5386\u53F2\u9875*/
/*202501\u7248\u672C*/
.btnView{left:unset;right:0;}
.btnSetAllViewed,.btnRefresh{line-height:22px;margin-right:16px;}
`;
    var videoStyle = `
/*\u89C6\u9891\u89C2\u770B\u9875*/
/*202501\u7248\u672C\uFF1A\u4E3B\u89C6\u9891-\u4FE1\u606F\u680F*/
.video-info-detail-list .pubdate-ip .btnView{position:unset;margin:0 0 0 10px;border:none;width:35px;}
/*202501\u7248\u672C\uFF1A\u64AD\u653E\u7ED3\u675F\u540E\u51FA\u73B0\u7684\u63A8\u8350\u89C6\u9891*/
.bpx-player-ending-related-itemDiv{position:relative;float:left}
.bpx-player-ending-related-itemDiv .btnView{opacity:0.9;}
.bpx-player-ending-related-itemDiv .btnIsView{opacity:0.7;}
/*202501\u7248\u672C\uFF1A\u4E3B\u89C6\u9891\u4E0B\u65B9\u5DE5\u5177\u680F\uFF08\u201C\u5237\u65B0\u201D\u6309\u94AE\u8BBE\u7F6E\uFF09*/
.video-toolbar-right .btnRefresh{line-height:22px;}
/*202501\u7248\u672C\uFF1A\u8BA2\u9605\u5408\u96C6or\u89C6\u9891\u9009\u96C6\uFF08\u5206P\u89C6\u9891\u5217\u8868\uFF09\uFF1B\u5E26\u5C01\u9762or\u7EAF\u6807\u9898*/
.normal-base-item .cover,.simple-base-item{position:relative;}
.simple-base-item .btnView{top:4px;left:4px;}
.simple-base-item.normal,.simple-base-item.head{padding:0 10px 0 48px;}
.page-list .page-item{padding:0 10px 0 65px;}
.page-list .page-item .btnView{left:20px;}
/*202501\u7248\u672C\uFF1A\u89C6\u9891\u9009\u96C6\uFF08\u5206P\u89C6\u9891\u5217\u8868\uFF09grid\u6A21\u5F0F\uFF1A\u6570\u5B57\u6807\u9898*/
.rcmd-tab .video-pod .video-pod__body .video-pod__list.multip.grid>.page{padding-bottom:25px;height:50px;position:relative;}
.rcmd-tab .video-pod .video-pod__body .video-pod__list.multip.grid>.page .btnView{position:absolute;bottom:0;top:unset;left:6px;width:32px;}
`;
    var videoMainOnlyStyle = `
/*\u89C6\u9891\u89C2\u770B\u9875\uFF1A\u9996\u5237\u53EA\u6807\u8BB0\u4E3B\u89C6\u9891\uFF0C\u907F\u514D\u5B8C\u6574\u89C6\u9891\u9875\u6837\u5F0F\u5F71\u54CDB\u7AD9header\u6C34\u5408*/
.video-info-detail-list .pubdate-ip .btnView,.video-info-meta .pubdate-ip .btnView{position:unset;margin:0 0 0 10px;border:none;width:35px;}
`;
    var festivalVideoStyle = `
/*202303\u6D3B\u52A8\u89C6\u9891\u64AD\u653E\u9875*/
.video-section-title{z-index:3!important;}
.video-episode-card__cover .btnView{line-height:12px;width:25px;} /*\u8DDF\u89C6\u9891\u9875\u91CD\u590D\u7684*/
.recommend-video-card{position:relative;}
.recommend-video-card .btnView{right:unset;top:6px;line-height:12px;width:25px;}
.video-toolbar-content_right .btnRefresh{position:relative;top:0;right:15px;line-height:21px;border-radius:2px;}
.video-toolbar-content_left .btnView{position:relative;line-height:16px;height:16px;top:9px;}`;
    var watchlaterStyle = `
/*\u7A0D\u540E\u518D\u770B-\u5217\u8868\u9875*/
/*202501\u7248\u672C*/
.btnView{left:unset;right:0;z-index:201;}
.btnSetAllViewed,.btnRefresh{font-size:14px;line-height:22px;}
`;
    var listPlayStyle = `
/*\u7A0D\u540E\u518D\u770B-\u89C6\u9891\u89C2\u770B\u9875*/
.tip-info .btnRefresh{font-size:12px;position:absolute;right:0;}
.player-auxiliary-playlist-item{position:relative;}
.player-auxiliary-playlist-item .btnView{position:absolute;top:6px;left:65px;}
.player-auxiliary-playlist-item:first-child .btnView{top:0;}
/*\u7A0D\u540E\u518D\u770B-\u89C6\u9891\u89C2\u770B\u9875at202303*/
.main .btnView{left:0;width:25px;line-height:12px;}
.multip-list-item .left-part{position:relative;padding:0 0 0 40px;}
.multip-list .multip-list-item-active[data-v-079b367a]{padding:0 10px;}
.multip-list-item .btnView{left:0;width:25px;line-height:12px;}
.video-info-detail-list .btnView{position:unset;margin:0;border:none;width:35px;}
.video-toolbar-right .btnRefresh{right:0;top:0;position:relative;}
/*202501\u7248\u672C*/
.video-info-detail-list .pubdate-ip .btnView{position:unset;margin:0 0 0 10px;border:none;width:35px;}
`;
    var popularStyle = `
/*\u7EFC\u5408\u70ED\u95E8\u3001\u6BCF\u5468\u5FC5\u770B\u3001\u5165\u7AD9\u5FC5\u5237*/
.popular-video-container .btnView{width:40px}
.weekly-list .weekly-header .panel{z-index:2;}
/*\u6392\u884C\u699C*/
.popular-container .rank-container .rank-list .rank-item .btnView{font-size:14px;width:45px;height:24px;}
/*\u5168\u7AD9\u97F3\u4E50\u699C*/
._card_1kuml_6 .btnView{top:unset;left:12px;bottom:72px;border:1px solid #999;font-size:12px;}
/*\u77ED\u5267\u699C*/
.drama-board-listClone{justify-content:space-between;flex-wrap:wrap;display:flex;height:0;}
.board-item-wrapDiv{margin-bottom:30px;position:relative;float:left;}
.board-item-wrapDiv .btnView{right:unset;top:16px;left:182px;}`;
    var indexStyle = `
/*\u4E3B\u7AD9\u9996\u9875*/
/*202501\u7248\u672C*/
`;
    var channelStyle = `
/*\u9891\u9053*/
.card-list .btnView{left:unset;top:0;right:0;width:40px;}`;
    var bangumiStyle = `
/*bangumi\u89C6\u9891\u89C2\u770B\u9875*/
.toolbar_toolbar__NJCNy .btnRefresh{right:0;cursor:pointer;}
/*202403\u7248\u672C*/
.toolbar .btnRefresh{right:0;top:14px;cursor:pointer;}

/*\u4E3B\u89C6\u9891*/
.toolbar_toolbar__NJCNy .btnView{right:unset;width:36px;top:20px;border:none;}
/*202403\u7248\u672C*/
.toolbar .btnView{right:60px;width:36px;top:19px;border:none;}

/*\u53F3\u4FA7\u4E0A \u6B63\u7247\u5217\u8868 list\u6A21\u5F0F*/
.longListItem_wrap__9OsZi .btnView{right:unset;position:relative;width:36px;margin:0 7px 0 0;}
/*\u53F3\u4FA7\u4E0A \u6B63\u7247\u5217\u8868 cube\u6A21\u5F0F*/
.numberListItem_number_list_item__wszA4 a{height:18px;}
.numberListItem_number_list_item__wszA4 .btnView{width:32px;padding:0;border-radius:1px;right:unset;left:0;border:none;}
/*\u53F3\u4FA7\u4E2D PV&\u5176\u4ED6*/
.epitem_ep_item__CPdZy .btnView{width:36px;height:24px;position:relative;float:left;margin:3px 5px 0 0;text-align:center;color:#aaa;}
.epitem_ep_item__CPdZy .btnView:hover{color:#fff;background:#aaa;}
/*\u53F3\u4FA7\u4E0B \u7CFB\u5217*/
.seasonlist_ss_info__Yc7YV{width:130px;}
.seasonlist_ss_item__czhHy .btnView{height:24px;width:40px;position:relative;right:280px;}
/*\u53F3\u4FA7\u4E0B \u76F8\u5173\u63A8\u8350*/
.RecommendItem_wrap__pJmXL{position:relative;}
.RecommendItem_wrap__pJmXL .btnView{height:22px;width:40px;position:absolute;right:unset;}
.RecommendItem_wrap__pJmXL .RecommendItem_cover__Rc3y2{background:none;}`;
    var cheeseStyle = `
/*\u8BFE\u5802\u5206\u533A\u9996\u9875*/
.block-list-item{position:relative;}
.rank dd{position:relative;}
.rank dd .btnView{right:unset;left:28px;line-height:12px;width:25px;}
.common-lazy-img{background:none;}
/*\u8BFE\u7A0B\u5206\u7C7B\u67E5\u627E\u9875*/
.big-card .btnView{right:unset;left:0;}`;
    var cheesePlayStyle = `
/*\u8BFE\u7A0B\u89C6\u9891\u89C2\u770B\u9875*/
.section-item .btnView{line-height:12px;width:25px;left:2px;bottom:7px;top:unset;border:none;}
.layout-r .btnRefresh{position:relative;top:0;right:0;cursor:pointer;line-height:24px;margin:0 0 0 10px;}
.layout-l .btnView{position:relative;border:none;}
/*\u53F3\u4FA7\u4E0B \u76F8\u5173\u63A8\u8350*/
.season-recommend-card{position:relative;}
.season-recommend-card .btnView{right:unset;line-height:12px;width:25px;}`;
    var areaStyle = `
/*\u5404\u5206\u533A\u9996\u9875or\u9996\u9875\u53F3\u4FA7\u7684\u6392\u884C\u699C*/
.bili-rank-list-video__item--wrap{position:relative;}
.bili-rank-list-video__item--wrap .btnView{right:-8px;color:#aaa;border:1px solid #aaa;}
.bili-rank-list-cheese__item--wrap .btnView{color:#aaa;border:1px solid #aaa;}
.bili-rank-list-ogv__item--wrap .btnView{color:#aaa;border:1px solid #aaa;}`;
    var varietyStyle = `
/*\u7EFC\u827A\u5206\u533A\u9996\u9875*/
.side-item{position:relative;}
.side-item .btnView{width:25px;line-height:12px;}
.hot-item{position:relative;}
.column-itemDiv{-webkit-box-flex:1;flex:1;margin:0 16px 0 0;border-radius:8px;overflow:hidden;position:relative;}
.column-itemDiv .btnView{right:unset;left:0;}
.hover-item .btnView{right:unset;z-index:3;}
.web_rank_v2 .hover-item .btnView{right:0;}
/*\u7EFC\u827A\u7D22\u5F15*/
.bangumi-item{position:relative;}
.bangumi-item .btnView{right:unset;left:0;}`;
    var guochangStyle = `
/*\u56FD\u521B*/
.progress-bar-content .btnView{top:4px;right:4px;border-radius:7px;}
.timeline-weekday-hover-item .btnView{z-index:10;right:unset;}
.ranking-ratio-item-container .btnView{z-index:10;right:unset;}
/*\u56FD\u521B\uFF1A\u4E8C\u7EA7\u5206\u533A*/
.spread-module .lazy-img{background:none;}
.spread-module .btnView{width:25px;line-height:12px;}
.sec-rank .rank-item .btnView{width:25px;line-height:12px;right:unset;}
.rank-list .rank-item.show-detail .ri-detail{padding:0 0 0 40px;}
.rank-list .rank-item.show-detail.highlight .ri-detail{padding:0;}
.rank-list .rank-item.show-detail a:hover .ri-detail{padding:0;}
/*\u56FD\u521B\uFF1A\u7D22\u5F15*/
.bangumi-item{position:relative;}
.bangumi-item .btnView{right:unset;}
.bangumi-item .common-lazy-img{background:none;}
.rank-item .lazy-img{background:none;}`;
    let setMethod = null;
    let currentPageKind = "";
    let mainVideoEarlyTimers = [];
    let viewVideoList = null;
    const btnRefresh = (0, import_jquery.default)("<a class='btnRefresh' title='\u5982\u679C\u5217\u8868\u6CA1\u51FA\u73B0\u5DF2\u770B/\u672A\u770B\u6807\u8BC6\uFF0C\u8BF7\u624B\u52A8\u70B9\u51FB\u8FD9\u4E2A\u6309\u94AE\u8FDB\u884C\u5237\u65B0'>\u5237\u65B0</a>");
    let btnSetAllViewed = null;
    var clearMainVideoEarlyTimers = function() {
      for (var i = 0; i < mainVideoEarlyTimers.length; i++) {
        clearTimeout(mainVideoEarlyTimers[i]);
      }
      mainVideoEarlyTimers = [];
    };
    var setMainVideoViewedEarly = function() {
      if (currentPageKind != "video" && currentPageKind != "listPlay") {
        return false;
      }
      if ((0, import_jquery.default)(".video-info-meta .btnView,.video-info-detail-list .pubdate-ip .btnView").length > 0) {
        clearMainVideoEarlyTimers();
        return true;
      }
      var infoObj = (0, import_jquery.default)(".video-info-meta");
      var pubdateObj = infoObj.find(".pubdate-ip:first");
      if (infoObj.length == 0 || pubdateObj.length == 0 || !infoObj.is(":visible") || !pubdateObj.is(":visible")) {
        return false;
      }
      var bvid2 = getCurrentPageBvid();
      if (!bvid2) {
        return false;
      }
      setVideoIsViewed(infoObj, ".pubdate-ip", 0, bvid2, true);
      setBtnView();
      clearMainVideoEarlyTimers();
      return (0, import_jquery.default)(".video-info-meta .btnView,.video-info-detail-list .pubdate-ip .btnView").length > 0;
    };
    var scheduleMainVideoEarlyViewed = function() {
      clearMainVideoEarlyTimers();
      var delays = [300, 600, 900, 1200, 1800, 2400];
      for (var i = 0; i < delays.length; i++) {
        mainVideoEarlyTimers.push(setTimeout(function() {
          setMainVideoViewedEarly();
        }, delays[i]));
      }
    };
    function scheduleHistoryPageScans() {
      var delays = [250, 750, 1500, 3e3];
      for (var i = 0; i < delays.length; i++) {
        (function(delayMs) {
          setTimeout(function() {
            if (setMethod == setHistoryPage) {
              setMethod();
            }
          }, delayMs);
        })(delays[i]);
      }
    }
    let spaceStartupObserver = null;
    let spaceObservedRefreshTimer = null;
    function scheduleSpacePageScans() {
      var delays = [80, 180, 350, 700, 1200, 2e3];
      for (var i = 0; i < delays.length; i++) {
        (function(delayMs) {
          setTimeout(function() {
            if (setMethod == setSpacePage) {
              setMethod();
            }
          }, delayMs);
        })(delays[i]);
      }
    }
    function scheduleSpaceObservedRefresh() {
      if (setMethod != setSpacePage || spaceObservedRefreshTimer != null) {
        return;
      }
      spaceObservedRefreshTimer = setTimeout(function() {
        spaceObservedRefreshTimer = null;
        if (setMethod == setSpacePage) {
          setMethod();
        }
      }, 80);
    }
    function isSpaceRenderNode(node) {
      if (!node || node.nodeType != 1) {
        return false;
      }
      var el = node;
      var lateSelectors = ".nav-bar__main-left,.n-inner,.upload-video-card,.bili-video-card,.bili-video-card__wrap,.small-item,.space-video-card,.video-card";
      if (el.matches && el.matches(lateSelectors)) {
        return true;
      }
      return !!(el.querySelector && el.querySelector(lateSelectors));
    }
    function observeSpacePageRender() {
      if (spaceStartupObserver != null || typeof MutationObserver == "undefined") {
        return;
      }
      var root = document.documentElement || document.body;
      if (!root) {
        return;
      }
      spaceStartupObserver = new MutationObserver(function(mutations) {
        if (setMethod != setSpacePage) {
          return;
        }
        for (var i = 0; i < mutations.length; i++) {
          var nodes = mutations[i].addedNodes;
          for (var j = 0; j < nodes.length; j++) {
            if (isSpaceRenderNode(nodes[j])) {
              scheduleSpaceObservedRefresh();
              return;
            }
          }
        }
      });
      spaceStartupObserver.observe(root, { childList: true, subtree: true });
      setTimeout(function() {
        if (spaceStartupObserver != null) {
          spaceStartupObserver.disconnect();
          spaceStartupObserver = null;
        }
      }, 6e3);
    }
    var getCurrentPageBvid = function() {
      var initState = unsafeWindow.__INITIAL_STATE__;
      if (initState && initState.bvid) {
        var bvid2 = initState.bvid;
        if (initState.videoData && initState.videoData.videos > 1) {
          bvid2 = bvid2 + "-" + initState.p;
        }
        return bvid2;
      }
      var match = location.pathname.match(/\/video\/(BV[^\/?#]+)/i);
      if (match && match[1]) {
        return match[1];
      }
      return null;
    };
    GM_addStyle(staticStyle);
    (0, import_jquery.default)(document).ready(function() {
      var oldList = GM_getValue("BiliViewed", null);
      if (oldList != null) {
        groupGMVideoList(oldList);
      }
      pageHeight = (0, import_jquery.default)(window).height() * 0.66;
      var domain = location.href;
      var askIndex = domain.indexOf("?");
      if (askIndex > -1) {
        domain = domain.substring(0, askIndex);
      }
      domain = domain.toLowerCase();
      if (domain.indexOf("search.") > -1) {
        GM_addStyle(searchStyle);
        setMethod = setSearchPage;
      } else if (domain.indexOf("space.") > -1) {
        GM_addStyle(spaceStyle);
        setMethod = setSpacePage;
        scheduleSpacePageScans();
        observeSpacePageRender();
      } else if (domain.indexOf("t.") > -1) {
        GM_addStyle(spaceStyle);
        setMethod = setSpacePage;
        setPageScrollMethod();
        if ((0, import_jquery.default)(".bili-dyn-up-list__item").length == 0) {
          setTimeout(function() {
            (0, import_jquery.default)(".bili-dyn-up-list__item").unbind("click").click(function() {
              prePageScrollTop = 0;
              setTimeout(setPageRefreshMethod, 2e3);
            });
          }, 2e3);
        }
      } else if (domain.indexOf("www.") > -1) {
        var href = location.href;
        href = href.toLowerCase();
        if (href.indexOf("/bangumi/play/") > -1) {
          GM_addStyle(bangumiStyle);
          setMethod = setBangumiPage;
        } else if (href.indexOf("/cheese/play/") > -1) {
          GM_addStyle(cheesePlayStyle);
          setMethod = setCheesePlayPage;
        } else if (href.indexOf("/cheese/") > -1) {
          GM_addStyle(cheeseStyle);
          setMethod = setCheesePage;
        } else if (href.indexOf("/guochuang") > -1 || href.indexOf("/anime") > -1) {
          GM_addStyle(guochangStyle);
          setMethod = setGuochuangPage;
          setPageScrollMethod();
        } else if (href.indexOf("/v/musicplus") > -1) {
          GM_addStyle(indexStyle);
          setMethod = setMusicplusPage;
        } else if (href.indexOf("/play/watchlater") > -1) {
          return;
        } else if (href.indexOf("/list/") > -1) {
          GM_addStyle(videoMainOnlyStyle);
          setMethod = setListPlayPage;
          currentPageKind = "listPlay";
          scheduleMainVideoEarlyViewed();
          (0, import_jquery.default)("#playlist-video-action-list").scroll(function() {
            var curScrollTop = (0, import_jquery.default)("#playlist-video-action-list").scrollTop();
            if (Math.abs(curScrollTop - preScrollTop) > 300) {
              preScrollTop = curScrollTop;
              setTimeout(function() {
                setMethod();
              }, 1e3);
            }
          });
          setPageScrollMethod();
          (0, import_jquery.default)(".rec-footer").click(function() {
            setTimeout(function() {
              setMethod();
            }, 1e3);
          });
        } else if (href.indexOf("/watchlater") > -1) {
          GM_addStyle(watchlaterStyle);
          setAllViewedMethod();
          setMethod = setWatchlaterPage;
          setPageScrollMethod();
        } else if (href.indexOf("/video/") > -1) {
          GM_addStyle(videoMainOnlyStyle);
          setMethod = setVideoPage;
          currentPageKind = "video";
          scheduleMainVideoEarlyViewed();
          setPageScrollMethod();
        } else if (href.indexOf("/festival/") > -1) {
          GM_addStyle(festivalVideoStyle);
          setMethod = setFestivalVideoPage;
          setPageScrollMethod();
        } else if (href.indexOf("/popular/") > -1) {
          GM_addStyle(popularStyle);
          setMethod = setPopularPage;
          (0, import_jquery.default)(".nav-tabs__item").click(function(e) {
            setTimeout(function() {
              setMethod();
            }, 3e3);
          });
          setPageScrollMethod();
        } else if (href.indexOf("/history") > -1) {
          GM_addStyle(historyStyle);
          setAllViewedMethod();
          setMethod = setHistoryPage;
          setPageScrollMethod();
          scheduleHistoryPageScans();
        } else if (href.indexOf("/v/channel/") > -1) {
          GM_addStyle(channelStyle);
          setMethod = setChannelPage;
          setTimeout(function(e) {
            (0, import_jquery.default)(".discovery-panel__title").click(function(e2) {
              setTimeout(setMethod, 2e3);
            });
            (0, import_jquery.default)(".content-item").click(function(e2) {
              setTimeout(setMethod, 4e3);
            });
            (0, import_jquery.default)(".subscribe-item").click(function(e2) {
              setTimeout(setMethod, 4e3);
            });
          }, 2e3);
        } else if (href.indexOf("/variety/") > -1 || href.indexOf("/movie/") > -1 || href.indexOf("/tv/") > -1 || href.indexOf("/documentary/") > -1) {
          GM_addStyle(varietyStyle);
          setMethod = setVarietyPage;
          setPageScrollMethod();
        } else if (href.endsWith(".com/") || href.indexOf(".com/?") > -1 || href.indexOf(".com/index.html") > -1) {
          GM_addStyle(indexStyle);
          setMethod = setIndexPage;
          setPageScrollMethod();
          setTimeout(function() {
            (0, import_jquery.default)(".feed-roll-btn").click(function(e) {
              setTimeout(setMethod, 2e3);
            });
            (0, import_jquery.default)(".flexible-roll-btn").unbind("click").click(function() {
              setTimeout(setMethod, 2e3);
            });
          }, 2e3);
        } else {
          GM_addStyle(areaStyle);
          setMethod = setAreaPage;
          setPageScrollMethod();
          (0, import_jquery.default)(".channel-nav-sub-item").click(function(e) {
            setTimeout(function() {
              setMethod();
            }, 1e3);
          });
        }
      }
      btnRefresh.click(function() {
        setPageRefreshMethod();
      });
      if (setMethod != null) {
        if (setMethod != setVideoPage && setMethod != setListPlayPage) {
          setMethod();
        }
      }
    });
    var preScrollTop = 0;
    var pageHeight = 600;
    var curPageScrollTop = 0;
    var prePageScrollTop = 0;
    var setPageScrollMethod = function() {
      (0, import_jquery.default)(window).scroll(function() {
        var curPageScrollTop2 = (0, import_jquery.default)(document).scrollTop();
        if (Math.abs(curPageScrollTop2 - prePageScrollTop) > pageHeight) {
          prePageScrollTop = curPageScrollTop2;
          setTimeout(setMethod, 1e3);
        }
      });
    };
    var setPageRefreshMethod = function() {
      (0, import_jquery.default)(".btnView").remove();
      viewVideoJson = {};
      viewVideoSetJson = {};
      setMethod();
      setTimeout(function(e) {
        setMethod();
      }, 3e3);
    };
    const setAllViewedMethod = function() {
      btnSetAllViewed = (0, import_jquery.default)("<a class='btnSetAllViewed' title='\u4E00\u952E\u8BBE\u7F6E\u672A\u770B\u89C6\u9891\u4E3A\u5DF2\u770B\u3002\u53EA\u9488\u5BF9\u5F53\u524D\u9875\u9762\u5DF2\u52A0\u8F7D\u51FA\u6765\u7684\u89C6\u9891\uFF08\u5E26\u672A\u770B\u6309\u94AE\u7684\uFF09\u3002\u53EF\u4EE5\u62C9\u5230\u9875\u9762\u5E95\u90E8\u52A0\u8F7D\u51FA\u66F4\u591A\u7684\u89C6\u9891\u518D\u70B9\u8FD9\u4E2A\u3002\u6267\u884C\u8BE5\u64CD\u4F5C\u540E\u4E0D\u53EF\u8FDB\u884C\u64A4\u9500\uFF0C\u53EF\u6839\u636E\u4E2A\u4EBA\u60C5\u51B5\u8FDB\u884C\u4F7F\u7528\u3002'>\u4E00\u952E\u5DF2\u770B</a>");
      btnSetAllViewed.click(function() {
        if (!confirm((0, import_jquery.default)(this).attr("title"))) {
          return;
        }
        var changedCount = 0;
        (0, import_jquery.default)(".btnNotView").each(function(idx) {
          saveGMVideoList((0, import_jquery.default)(this).data("av"), true);
          changedCount++;
        });
        showInfoLog("\u4E00\u952E\u5DF2\u770B\uFF1A" + changedCount + " \u4E2A\u89C6\u9891", "success");
        setPageRefreshMethod();
      });
    };
    var setCheesePlayPage = function() {
      var refreshObj = (0, import_jquery.default)(".btnRefresh");
      if (refreshObj.size() == 0) {
        (0, import_jquery.default)(".layout-r").append("<a class='btnRefresh' title='\u5982\u679C\u5217\u8868\u6CA1\u51FA\u73B0\u5DF2\u770B/\u672A\u770B\u6807\u8BC6\uFF0C\u8BF7\u624B\u52A8\u70B9\u51FB\u8FD9\u4E2A\u6309\u94AE\u8FDB\u884C\u5237\u65B0'>\u5237\u65B0\u2197</a>");
        (0, import_jquery.default)(".btnRefresh").click(function() {
          setPageRefreshMethod();
        });
      }
      var indexJson = document.getElementById("app")._vnode.appContext.config.globalProperties.$pinia.state._rawValue.index;
      if (indexJson == null) {
        return;
      }
      setVideoIsViewed((0, import_jquery.default)(".archive-tool-box"), ".layout-l", 0, "ep" + indexJson.currentEp.id, true);
      var epoArr = indexJson.epList;
      (0, import_jquery.default)(".section-item").each(function(idx) {
        setVideoIsViewed((0, import_jquery.default)(this), ".season-info", 0, "ep" + epoArr[idx].id, true, true);
      });
      var rEpoArr = indexJson.viewInfo.recommend_seasons;
      (0, import_jquery.default)(".season-recommend-card").each(function(idx) {
        setVideoIsViewed((0, import_jquery.default)(this), coverItemClass, 0, "ss" + rEpoArr[idx].id);
      });
      (0, import_jquery.default)(".section-item").unbind("click").click(function(e) {
        setTimeout(setPageRefreshMethod, 5e3);
      });
      setBtnView();
    };
    var setCheesePage = function() {
      (0, import_jquery.default)(".block-list-item").each(function() {
        setVideoIsViewed((0, import_jquery.default)(this), coverItemClass);
      });
      (0, import_jquery.default)(".rank dd").each(function() {
        setVideoIsViewed((0, import_jquery.default)(this), coverItemClass);
      });
      (0, import_jquery.default)(".big-card").each(function() {
        setVideoIsViewed((0, import_jquery.default)(this), coverItemClass);
      });
      (0, import_jquery.default)(".small-card").each(function() {
        setVideoIsViewed((0, import_jquery.default)(this), coverItemClass);
      });
      (0, import_jquery.default)(".radio-button-box .item").unbind("click").click(function(e) {
        setTimeout(setPageRefreshMethod, 2e3);
      });
      (0, import_jquery.default)(".mode-trigger span").unbind("click").click(function(e) {
        setTimeout(setPageRefreshMethod, 2e3);
      });
      (0, import_jquery.default)(".page-item").unbind("click").click(function(e) {
        setTimeout(setPageRefreshMethod, 2e3);
      });
      (0, import_jquery.default)(document).unbind("keyup").keyup(function(event) {
        if (event.keyCode == 13) {
          setTimeout(setPageRefreshMethod, 2e3);
        }
      });
      setBtnView();
    };
    var setGuochuangPage = function() {
      (0, import_jquery.default)(".progress-bar-content").each(function() {
        setVideoIsViewed((0, import_jquery.default)(this), coverItemClass);
      });
      (0, import_jquery.default)(".horizontal-ratio-item-inner").each(function() {
        setVideoIsViewed((0, import_jquery.default)(this), coverItemClass);
      });
      (0, import_jquery.default)(".timeline-weekday-hover-item").each(function() {
        setVideoIsViewed((0, import_jquery.default)(this), coverItemClass);
      });
      (0, import_jquery.default)(".ranking-ratio-item-container").each(function() {
        setVideoIsViewed((0, import_jquery.default)(this), coverItemClass);
      });
      (0, import_jquery.default)(".item-wrap").each(function(idx) {
        var epid = (0, import_jquery.default)(this).children("a")[0].__vue__.$parent.item.episode_id;
        setVideoIsViewed((0, import_jquery.default)(this), coverItemClass, 0, "ep" + epid, false, false);
      });
      (0, import_jquery.default)(".spread-module").each(function() {
        setVideoIsViewed((0, import_jquery.default)(this), coverItemClass);
      });
      (0, import_jquery.default)(".rank-item").each(function() {
        setVideoIsViewed((0, import_jquery.default)(this), coverItemClass);
      });
      (0, import_jquery.default)(".tabs-item").unbind("click").click(function(e) {
        setTimeout(setPageRefreshMethod, 3e3);
      });
      (0, import_jquery.default)(".week-day-item").unbind("click").click(function(e) {
        setTimeout(setPageRefreshMethod, 1e3);
      });
      (0, import_jquery.default)(".next-page").unbind("click").click(function(e) {
        setTimeout(setPageRefreshMethod, 1e3);
      });
      (0, import_jquery.default)(".prev-page").unbind("click").click(function(e) {
        setTimeout(setPageRefreshMethod, 1e3);
      });
      (0, import_jquery.default)(".bangumi-item").each(function() {
        setVideoIsViewed((0, import_jquery.default)(this), coverItemClass);
      });
      (0, import_jquery.default)(".sort-item").unbind("click").click(function(e) {
        setTimeout(setPageRefreshMethod, 2e3);
      });
      (0, import_jquery.default)(".filter-item").unbind("click").click(function(e) {
        setTimeout(setPageRefreshMethod, 2e3);
      });
      (0, import_jquery.default)(".tag-item").unbind("click").click(function(e) {
        setTimeout(setMethod, 1e3);
      });
      (0, import_jquery.default)(".read-push").unbind("click").click(function(e) {
        setTimeout(setMethod, 1e3);
      });
      (0, import_jquery.default)(".tab-list li").unbind("click").click(function(e) {
        setTimeout(setPageRefreshMethod, 2e3);
      });
      (0, import_jquery.default)(".dropdown-item").unbind("click").click(function(e) {
        setTimeout(setPageRefreshMethod, 2e3);
      });
      (0, import_jquery.default)(".page-item").unbind("click").click(function(e) {
        setTimeout(setPageRefreshMethod, 2e3);
      });
      (0, import_jquery.default)(document).unbind("keyup").keyup(function(event) {
        if (event.keyCode == 13) {
          setTimeout(setPageRefreshMethod, 1e3);
        }
      });
      setBtnView();
    };
    var setMusicplusPage = function() {
      (0, import_jquery.default)(".video-card-reco").each(function() {
        setVideoIsViewed((0, import_jquery.default)(this), coverItemClass);
      });
      (0, import_jquery.default)(".card-pic").each(function() {
        setVideoIsViewed((0, import_jquery.default)(this), coverItemClass);
      });
      (0, import_jquery.default)(".tabs a").unbind("click").click(function(e) {
        setTimeout(setPageRefreshMethod, 1e3);
      });
      (0, import_jquery.default)(".more").unbind("click").click(function(e) {
        setTimeout(setPageRefreshMethod, 1e3);
      });
      (0, import_jquery.default)(".type-group li").unbind("click").click(function(e) {
        setTimeout(setPageRefreshMethod, 1e3);
      });
      (0, import_jquery.default)(".main-menu a").unbind("click").click(function(e) {
        setTimeout(setPageRefreshMethod, 1e3);
      });
      (0, import_jquery.default)(".pager a").unbind("click").click(function(e) {
        setTimeout(setPageRefreshMethod, 1e3);
      });
      (0, import_jquery.default)(document).unbind("keyup").keyup(function(event) {
        if (event.keyCode == 13) {
          setTimeout(setPageRefreshMethod, 1e3);
        }
      });
      setBtnView();
    };
    var setBangumiPage = function() {
      var linkArr = (0, import_jquery.default)("link");
      var linkRel = "";
      var linkHref = "";
      for (var i = 0; i < linkArr.length; i++) {
        linkRel = (0, import_jquery.default)(linkArr[i]).attr("rel");
        if (linkRel != "canonical") {
          continue;
        }
        linkHref = (0, import_jquery.default)(linkArr[i]).attr("href");
        if ((0, import_jquery.default)(".toolbar").length > 0) {
          setVideoIsViewed((0, import_jquery.default)(".player-left-components"), ".toolbar", 2, linkHref, true);
        } else {
          setVideoIsViewed((0, import_jquery.default)(".player-left-components"), ".toolbar_toolbar__NJCNy", 2, linkHref, true);
        }
        break;
      }
      var refreshObj = (0, import_jquery.default)(".btnRefresh");
      if (refreshObj.size() == 0) {
        if ((0, import_jquery.default)(".toolbar").length > 0) {
          (0, import_jquery.default)(".toolbar").append("<a class='btnRefresh' title='\u5982\u679C\u5217\u8868\u6CA1\u51FA\u73B0\u5DF2\u770B/\u672A\u770B\u6807\u8BC6\uFF0C\u8BF7\u624B\u52A8\u70B9\u51FB\u8FD9\u4E2A\u6309\u94AE\u8FDB\u884C\u5237\u65B0'>\u5237\u65B0\u2192</a>");
        } else {
          (0, import_jquery.default)(".toolbar_toolbar__NJCNy").append("<a class='btnRefresh' title='\u5982\u679C\u5217\u8868\u6CA1\u51FA\u73B0\u5DF2\u770B/\u672A\u770B\u6807\u8BC6\uFF0C\u8BF7\u624B\u52A8\u70B9\u51FB\u8FD9\u4E2A\u6309\u94AE\u8FDB\u884C\u5237\u65B0'>\u5237\u65B0\u2192</a>");
        }
        (0, import_jquery.default)(".btnRefresh").click(function() {
          setPageRefreshMethod();
        });
      }
      if ((0, import_jquery.default)(".toolbar").length > 0) {
      } else {
        (0, import_jquery.default)(".longListItem_wrap__9OsZi").each(function() {
          var pArr = Object.getOwnPropertyNames(this);
          if (pArr.length == 0) {
            return;
          }
          var internalNode = this[pArr[0]];
          var epId = internalNode && internalNode["return"] && internalNode["return"].key;
          if (!epId) {
            return;
          }
          setVideoIsViewed((0, import_jquery.default)(this), ".longListItem_title__Xziqq", 0, "ep" + epId, true, true);
          (0, import_jquery.default)(this).children("a:eq(1)").unbind("click").click(function(e) {
            setTimeout(setPageRefreshMethod, 2e3);
          });
        });
        (0, import_jquery.default)(".numberListItem_number_list_item__wszA4").each(function() {
          setVideoIsViewed((0, import_jquery.default)(this), "a", 0, null, true, true);
          (0, import_jquery.default)(this).children("a:eq(1)").unbind("click").click(function(e) {
            setTimeout(setPageRefreshMethod, 2e3);
          });
        });
        (0, import_jquery.default)(".modeChangeBtn_wrap__NOGS3").unbind("click").click(function(e) {
          setTimeout(setPageRefreshMethod, 1e3);
        });
        (0, import_jquery.default)(".seasonlist_ss_item__czhHy").each(function() {
          setVideoIsViewed((0, import_jquery.default)(this), coverItemClass);
        });
        (0, import_jquery.default)(".seasonlist_expand_more__VcTha").unbind("click").click(function(e) {
          setTimeout(setPageRefreshMethod, 2e3);
        });
        (0, import_jquery.default)(".epitem_ep_item__CPdZy").each(function() {
          setVideoIsViewed((0, import_jquery.default)(this), "a", 0, null, true, true);
          (0, import_jquery.default)(this).children("a:eq(1)").unbind("click").click(function(e) {
            setTimeout(setPageRefreshMethod, 2e3);
          });
        });
        (0, import_jquery.default)(".RecommendItem_wrap__pJmXL").each(function() {
          setVideoIsViewed((0, import_jquery.default)(this), coverItemClass);
          (0, import_jquery.default)(this).children("a:first").unbind("click").click(function(e) {
            setTimeout(setPageRefreshMethod, 3e3);
          });
        });
      }
      setBtnView();
    };
    var setChannelPage = function() {
      (0, import_jquery.default)(".video-card__content").each(function() {
        setVideoIsViewed((0, import_jquery.default)(this), coverItemClass, 0, null, false, false, false, true);
      });
      (0, import_jquery.default)(".go-channel-btn").unbind("click").click(function(e) {
        setTimeout(setMethod, 2e3);
      });
      (0, import_jquery.default)("#container").unbind("scroll").scroll(function() {
        var curScrollTop = (0, import_jquery.default)("#container").scrollTop();
        if (Math.abs(curScrollTop - preScrollTop) > pageHeight) {
          preScrollTop = curScrollTop;
          setTimeout(setMethod, 2e3);
        }
      });
      (0, import_jquery.default)(".van-tabs-tab").unbind("click").click(function(e) {
        setTimeout(setMethod, 2e3);
      });
      (0, import_jquery.default)(".year-selector__item").unbind("click").click(function(e) {
        setTimeout(setMethod, 2e3);
      });
      (0, import_jquery.default)(".play-selector__item").unbind("click").click(function(e) {
        setTimeout(setMethod, 2e3);
      });
      (0, import_jquery.default)(".relative-tags div a").unbind("click").click(function(e) {
        setTimeout(setMethod, 2e3);
      });
      setBtnView();
    };
    var setVarietyPage = function() {
      (0, import_jquery.default)(".side-item").each(function() {
        setVideoIsViewed((0, import_jquery.default)(this), ".title", 0, null, false, false);
      });
      (0, import_jquery.default)(".hot-item").each(function() {
        setVideoIsViewed((0, import_jquery.default)(this), coverItemClass);
      });
      (0, import_jquery.default)(".hover-item").each(function() {
        setVideoIsViewed((0, import_jquery.default)(this), coverItemClass);
      });
      var itemDivArr = (0, import_jquery.default)(".column-itemDiv");
      if (itemDivArr.length == 0) {
        var itemArr = (0, import_jquery.default)(".column-item");
        for (var i = 0; i < itemArr.length; i++) {
          var divObj = (0, import_jquery.default)("<div class='column-itemDiv'></div>");
          divObj.append(itemArr[i]);
          (0, import_jquery.default)(".module-column").append(divObj);
        }
      }
      (0, import_jquery.default)(".column-itemDiv").each(function() {
        setVideoIsViewed((0, import_jquery.default)(this), coverItemClass);
      });
      (0, import_jquery.default)(".bangumi-item").each(function() {
        setVideoIsViewed((0, import_jquery.default)(this), coverItemClass);
      });
      (0, import_jquery.default)(".sort-item").unbind("click").click(function(e) {
        setTimeout(setPageRefreshMethod, 2e3);
      });
      (0, import_jquery.default)(".filter-item").unbind("click").click(function(e) {
        setTimeout(setPageRefreshMethod, 2e3);
      });
      setBtnView();
    };
    var setAreaPage = function() {
      (0, import_jquery.default)(".bili-video-card__wrap").each(function() {
        setVideoIsViewed((0, import_jquery.default)(this), coverItemClass);
      });
      (0, import_jquery.default)(".bili-rank-list-video__item--wrap").each(function() {
        setVideoIsViewed((0, import_jquery.default)(this), ".rank-video-card");
      });
      (0, import_jquery.default)(".roll-btn").unbind("click").click(function(e) {
        setTimeout(setPageRefreshMethod, 3e3);
      });
      (0, import_jquery.default)(".tags-item").unbind("click").click(function(e) {
        setTimeout(setPageRefreshMethod, 3e3);
      });
      (0, import_jquery.default)(".channel-select-content-item").unbind("click").click(function(e) {
        setTimeout(setPageRefreshMethod, 3e3);
      });
      setBtnView();
    };
    var setPopularPage = function() {
      (0, import_jquery.default)(".video-card__content").each(function() {
        setVideoIsViewed((0, import_jquery.default)(this), coverItemClass);
      });
      (0, import_jquery.default)(".img").each(function() {
        setVideoIsViewed((0, import_jquery.default)(this), coverItemClass);
      });
      (0, import_jquery.default)("._card_1kuml_6").each(function() {
        setVideoIsViewed((0, import_jquery.default)(this), coverItemClass, 0, null, false, false, true, true);
      });
      var itemListArr = (0, import_jquery.default)(".drama-board-listClone");
      if (itemListArr.length == 0) {
        (0, import_jquery.default)(".drama-board-list").each(function(idx) {
          var objOffset = (0, import_jquery.default)(this).offset();
          var cloneObj = (0, import_jquery.default)(this).clone();
          (0, import_jquery.default)(cloneObj).addClass("drama-board-listClone");
          (0, import_jquery.default)(cloneObj).addClass("drama-board-listClone_" + idx);
          (0, import_jquery.default)(cloneObj).removeClass("drama-board-list");
          (0, import_jquery.default)(this).parent().append(cloneObj);
          var itemArr = (0, import_jquery.default)(".drama-board-listClone_" + idx + " .board-item-wrap");
          for (var i = 0; i < itemArr.length; i++) {
            var divObj = (0, import_jquery.default)("<div class='board-item-wrapDiv'></div>");
            divObj.append(itemArr[i]);
            (0, import_jquery.default)(".drama-board-listClone_" + idx).append(divObj);
          }
          (0, import_jquery.default)(cloneObj).offset(objOffset);
          (0, import_jquery.default)(this).attr("style", "opacity:0;");
        });
      }
      (0, import_jquery.default)(".board-item-wrapDiv").each(function() {
        setVideoIsViewed((0, import_jquery.default)(this), coverItemClass);
      });
      (0, import_jquery.default)(".panel .select-item").click(function(e) {
        setTimeout(setPageRefreshMethod, 5e3);
      });
      (0, import_jquery.default)(".rank-tab li").click(function(e) {
        (0, import_jquery.default)(".btnView").remove();
        setTimeout(setMethod, 3e3);
      });
      (0, import_jquery.default)(".periodShow").unbind("click").click(function(e) {
        setTimeout(function() {
          (0, import_jquery.default)(".periodList .periodItem").unbind("click").click(function(e2) {
            (0, import_jquery.default)(".btnView").remove();
            setTimeout(setMethod, 3e3);
          });
        }, 500);
      });
      (0, import_jquery.default)(".dropdown-item").unbind("click").click(function(e) {
        (0, import_jquery.default)(".drama-board-listClone").remove();
        (0, import_jquery.default)(".drama-board-list").removeAttr("style");
        setTimeout(setMethod, 2e3);
      });
      (0, import_jquery.default)(".switch-tabs .tab").unbind("click").click(function(e) {
        var tabIndex = (0, import_jquery.default)(this).index();
        var objOffset = (0, import_jquery.default)(".drama-board-list:eq(" + tabIndex + ")").offset();
        (0, import_jquery.default)(".drama-board-listClone_" + tabIndex).offset(objOffset);
      });
      setBtnView();
    };
    var setIndexPage = function() {
      (0, import_jquery.default)(".bili-video-card").each(function() {
        setVideoIsViewed((0, import_jquery.default)(this), coverItemClass);
      });
      setBtnView();
    };
    var setVideoPage = function() {
      var refreshObj = (0, import_jquery.default)(".btnRefresh");
      if (refreshObj.size() == 0) {
        (0, import_jquery.default)(".video-toolbar-right").append(btnRefresh);
        btnRefresh.text("\u5237\u65B0\u2197");
      }
      var initState = unsafeWindow.__INITIAL_STATE__;
      if (!initState) {
        var fallbackBvid = getCurrentPageBvid();
        if (fallbackBvid) {
          setVideoIsViewed((0, import_jquery.default)(".video-info-meta"), ".pubdate-ip", 0, fallbackBvid, true);
          setVideoIsViewed((0, import_jquery.default)(".overflow-panel"), ".pubdate-ip", 0, fallbackBvid, true);
        }
        setBtnView();
        return;
      }
      var bvid2 = initState.bvid;
      var videos = initState.videoData.videos;
      if (videos > 1) {
        bvid2 = bvid2 + "-" + initState.p;
      }
      setVideoIsViewed((0, import_jquery.default)(".video-info-meta"), ".pubdate-ip", 0, bvid2, true);
      setVideoIsViewed((0, import_jquery.default)(".overflow-panel"), ".pubdate-ip", 0, bvid2, true);
      (0, import_jquery.default)(".pod-item").each(function() {
        var targetObj = (0, import_jquery.default)(this).find(".cover:first");
        var bvNum = (0, import_jquery.default)(this).data("key");
        if (targetObj.length > 0) {
          setVideoIsViewed(targetObj, coverItemClass, 0, bvNum);
        } else {
          setVideoIsViewed((0, import_jquery.default)(this), ".title", 0, bvNum, true, true);
        }
        var multiPObj = (0, import_jquery.default)(this).children(".multi-p");
        if (multiPObj.length > 0) {
          multiPObj.children(".page-list").children(".page-item").each(function(idx) {
            setVideoIsViewed((0, import_jquery.default)(this), ".title", 0, bvNum + "-" + (idx + 1), true, true);
          });
        }
      });
      (0, import_jquery.default)(".multip .video-pod__item").each(function(idx) {
        setVideoIsViewed((0, import_jquery.default)(this), ".title", 0, initState.bvid + "-" + (idx + 1), true, true);
      });
      (0, import_jquery.default)(".multip.grid .page").each(function(idx) {
        if ((0, import_jquery.default)(this).children("span").length == 0) {
          (0, import_jquery.default)(this).append("<span></span>");
        }
        setVideoIsViewed((0, import_jquery.default)(this), "span", 0, initState.bvid + "-" + (idx + 1), true, true);
      });
      (0, import_jquery.default)(".card-box .pic").each(function() {
        setVideoIsViewed((0, import_jquery.default)(this), coverItemClass);
      });
      var relatedArr = initState.related;
      if (relatedArr && relatedArr.length > 0) {
        (0, import_jquery.default)(".bpx-player-ending-related-itemDiv").each(function(idx) {
          setVideoIsViewed((0, import_jquery.default)(this), ".bpx-player-ending-related-item", 0, relatedArr[idx].bvid, true, true);
          (0, import_jquery.default)(".bpx-player-ending-related-item").unbind("click").click(function(e) {
            setTimeout(setPageRefreshMethod, 3e3);
          });
        });
        (0, import_jquery.default)(".bpx-player-video-wrap video").unbind("ended").bind("ended", function(e) {
          setTimeout(function() {
            var itemDivArr = (0, import_jquery.default)(".bpx-player-ending-related-itemDiv");
            if (itemDivArr.length == 0) {
              var itemArr = (0, import_jquery.default)(".bpx-player-ending-related-item");
              for (var i = 0; i < itemArr.length; i++) {
                var divObj = (0, import_jquery.default)("<div class='bpx-player-ending-related-itemDiv'></div>");
                divObj.append(itemArr[i]);
                (0, import_jquery.default)(".bpx-player-ending-related").append(divObj);
              }
            }
            (0, import_jquery.default)(".bpx-player-ending-related-itemDiv").each(function(idx) {
              setVideoIsViewed((0, import_jquery.default)(this), ".bpx-player-ending-related-item", 0, relatedArr[idx].bvid, true, true);
              (0, import_jquery.default)(".bpx-player-ending-related-item").unbind("click").click(function(e2) {
                setTimeout(setPageRefreshMethod, 3e3);
              });
            });
          }, 2e3);
        });
      }
      setBtnView();
      (0, import_jquery.default)(".video-pod__item").unbind("click").click(function(e) {
        setTimeout(setPageRefreshMethod, 3e3);
      });
      (0, import_jquery.default)(".slide-item").unbind("click").click(function(e) {
        setTimeout(setPageRefreshMethod, 3e3);
      });
      (0, import_jquery.default)(".view-mode").unbind("click").click(function() {
        setTimeout(setPageRefreshMethod, 2e3);
      });
      (0, import_jquery.default)(".card-box").unbind("click").click(function() {
        setTimeout(setPageRefreshMethod, 2e3);
      });
      (0, import_jquery.default)(".rec-footer").unbind("click").click(function() {
        setTimeout(setMethod, 2e3);
      });
    };
    var setFestivalVideoPage = function() {
      var refreshObj = (0, import_jquery.default)(".btnRefresh");
      if (refreshObj.size() == 0) {
        (0, import_jquery.default)(".video-toolbar-content_right").append("<a class='btnRefresh' title='\u5982\u679C\u5217\u8868\u6CA1\u51FA\u73B0\u5DF2\u770B/\u672A\u770B\u6807\u8BC6\uFF0C\u8BF7\u624B\u52A8\u70B9\u51FB\u8FD9\u4E2A\u6309\u94AE\u8FDB\u884C\u5237\u65B0'>\u5237\u65B0\u2197</a>");
        (0, import_jquery.default)(".btnRefresh").click(function() {
          setPageRefreshMethod();
        });
      }
      var initState = unsafeWindow.__INITIAL_STATE__;
      if (!initState) {
        return;
      }
      var videoInfo = initState.videoInfo;
      if (videoInfo) {
        var bvid2 = initState.videoInfo.bvid;
        setVideoIsViewed((0, import_jquery.default)(".video-toolbar-content"), ".video-toolbar-content_left", 0, bvid2, true);
      }
      var sectionArr = initState.videoSections;
      if (sectionArr && sectionArr.length > 0) {
        var epoArr = sectionArr[0].episodes;
        for (var i = 1; i < sectionArr.length; i++) {
          epoArr = epoArr.concat(sectionArr[i].episodes);
        }
        (0, import_jquery.default)(".video-episode-card").each(function(idx) {
          var targetObj = (0, import_jquery.default)(this).find(".video-episode-card__cover:first");
          if (targetObj.length > 0) {
            setVideoIsViewed(targetObj, ".activity-image-card__image", 0, epoArr[idx].bvid);
          } else {
            setVideoIsViewed((0, import_jquery.default)(this), ".video-episode-card__info-title", 0, epoArr[idx].bvid, true, true);
          }
        });
        (0, import_jquery.default)(".video-episode-card").unbind("click").click(function(e) {
          setTimeout(setPageRefreshMethod, 3e3);
        });
      }
      var recommendArr = initState.recommendList.relate_video;
      if (recommendArr) {
        (0, import_jquery.default)(".recommend-video-card").each(function(idx) {
          setVideoIsViewed((0, import_jquery.default)(this), ".activity-image-card__image", 0, recommendArr[idx].bvid);
        });
      }
      setBtnView();
    };
    var setHistoryPage = function() {
      var refreshObj = (0, import_jquery.default)(".btnRefresh");
      if (refreshObj.size() == 0) {
        (0, import_jquery.default)(".breadcrumbs__top .right").prepend(btnRefresh);
        (0, import_jquery.default)(".breadcrumbs__top .right").prepend(btnSetAllViewed);
      }
      (0, import_jquery.default)(".bili-video-card__cover").each(function() {
        setVideoIsViewed((0, import_jquery.default)(this), coverItemClass);
      });
      setBtnView();
      (0, import_jquery.default)(document).unbind("keyup").keyup(function(event) {
        if (event.keyCode == 13) {
          setTimeout(setPageRefreshMethod, 2e3);
        }
      });
      (0, import_jquery.default)(".radio-filter__item").unbind("click").click(function() {
        setTimeout(setPageRefreshMethod, 2e3);
      });
      (0, import_jquery.default)(".lists-view-mode").unbind("click").click(function() {
        setTimeout(setPageRefreshMethod, 2e3);
      });
      (0, import_jquery.default)(".search-btn").unbind("click").click(function() {
        setTimeout(setPageRefreshMethod, 2e3);
      });
      (0, import_jquery.default)(".batch-manage-btn").unbind("click").click(function() {
        setTimeout(setPageRefreshMethod, 2e3);
      });
    };
    var setListPlayPage = function() {
      var refreshObj = (0, import_jquery.default)(".btnRefresh");
      if (refreshObj.size() == 0) {
        (0, import_jquery.default)(".video-toolbar-right").append(btnRefresh);
        btnRefresh.text("\u5237\u65B0\u2197");
      }
      var initState = unsafeWindow.__INITIAL_STATE__;
      if (!initState) {
        return;
      }
      var bvid2 = initState.bvid;
      var videos = initState.videoData.videos;
      if (videos > 1) {
        bvid2 = bvid2 + "-" + initState.p;
      }
      setVideoIsViewed((0, import_jquery.default)(".video-info-meta"), ".pubdate-ip", 0, bvid2, true);
      setVideoIsViewed((0, import_jquery.default)(".overflow-panel"), ".pubdate-ip", 0, bvid2, true);
      var epoArr = initState.resourceList;
      let eachBvid = null;
      (0, import_jquery.default)(".actionlist-item-inner .main").each(function(idx) {
        if (typeof epoArr[idx].bv_id == "undefined") {
          eachBvid = epoArr[idx].bvid;
        } else {
          eachBvid = epoArr[idx].bv_id;
        }
        setVideoIsViewed((0, import_jquery.default)(this), coverItemClass, 0, eachBvid);
        var multipObj = (0, import_jquery.default)(this).parent().children(".multip-list:first");
        if (multipObj.length > 0) {
          (0, import_jquery.default)(multipObj[0]).children(".multip-list-item").each(function(idx2) {
            if (epoArr[idx].pages[idx2].p) {
              setVideoIsViewed((0, import_jquery.default)(this), ".left-part", 0, eachBvid + "-" + epoArr[idx].pages[idx2].p, true);
            } else {
              setVideoIsViewed((0, import_jquery.default)(this), ".left-part", 0, eachBvid + "-" + epoArr[idx].pages[idx2].page, true);
            }
            (0, import_jquery.default)(this).unbind("click").click(function() {
              setTimeout(setPageRefreshMethod, 2e3);
            });
          });
        }
        (0, import_jquery.default)(this).unbind("click").click(function() {
          setTimeout(setPageRefreshMethod, 2e3);
        });
      });
      (0, import_jquery.default)(".pic-box").each(function() {
        setVideoIsViewed((0, import_jquery.default)(this), coverItemClass);
      });
      (0, import_jquery.default)(".del-btn").unbind("click").click(function() {
        setTimeout(setPageRefreshMethod, 2e3);
      });
      setBtnView();
    };
    const setWatchlaterPage = function() {
      let refreshObj = (0, import_jquery.default)(".btnRefresh");
      if (refreshObj.size() == 0) {
        (0, import_jquery.default)(".list-header-options").prepend(btnRefresh);
        (0, import_jquery.default)(".list-header-options").prepend(btnSetAllViewed);
      }
      (0, import_jquery.default)(".bili-video-card__cover").each(function() {
        setVideoIsViewed((0, import_jquery.default)(this), coverItemClass, 3);
      });
      setBtnView();
      (0, import_jquery.default)(document).unbind("keyup").keyup(function(event) {
        if (event.keyCode == 13) {
          setTimeout(setPageRefreshMethod, 2e3);
        }
      });
      (0, import_jquery.default)(".list-header-filter__btn").unbind("click").click(function() {
        setTimeout(setPageRefreshMethod, 2e3);
      });
      (0, import_jquery.default)(".watchlater-list-title-sort").unbind("click").click(function() {
        setTimeout(setPageRefreshMethod, 2e3);
      });
      (0, import_jquery.default)(".search-btn").unbind("click").click(function() {
        setTimeout(setPageRefreshMethod, 2e3);
      });
      (0, import_jquery.default)(".menu-popover__panel-item").unbind("click").click(function() {
        setTimeout(setPageRefreshMethod, 2e3);
      });
      (0, import_jquery.default)(".action-btn").unbind("click").click(function() {
        setTimeout(setPageRefreshMethod, 2e3);
      });
    };
    const spaceVideoCardSelectors = ".small-item,.bili-video-card,.bili-video-card__wrap,.upload-video-card,.space-video-card,.video-card";
    const spaceVideoCardRootSelectors = ".upload-video-card,.small-item,.space-video-card,.video-card,.bili-video-card";
    function getSpaceVideoCardRoot(el) {
      var root = (0, import_jquery.default)(el).closest(spaceVideoCardRootSelectors)[0];
      return root || el;
    }
    const setSpaceVideoCardsViewed = function() {
      const handledCards = [];
      (0, import_jquery.default)(spaceVideoCardSelectors).each(function() {
        var cardRoot = getSpaceVideoCardRoot(this);
        if (handledCards.indexOf(cardRoot) > -1) {
          return;
        }
        handledCards.push(cardRoot);
        setVideoIsViewed((0, import_jquery.default)(cardRoot), coverItemClass);
      });
      (0, import_jquery.default)(".bili-video-card__cover").each(function() {
        if ((0, import_jquery.default)(this).closest(spaceVideoCardRootSelectors).length > 0) {
          return;
        }
        const href = (0, import_jquery.default)(this).attr("href") || (0, import_jquery.default)(this).find("a:first").attr("href");
        const match = href && href.match(/(?:\/video\/|[?&]bvid=)(BV[^/?&#]+)/i);
        if (match && match[1]) {
          setVideoIsViewed((0, import_jquery.default)(this), coverItemClass, 0, match[1]);
        }
      });
    };
    const setSpacePage = function() {
      let refreshObj = (0, import_jquery.default)(".btnRefresh");
      if (refreshObj.size() == 0) {
        (0, import_jquery.default)(".nav-bar__main-left").append(btnRefresh);
        (0, import_jquery.default)(".n-inner").append(btnRefresh);
      }
      (0, import_jquery.default)(".i-pin-part .i-pin-has-content").each(function() {
        setVideoIsViewed((0, import_jquery.default)(this), coverItemClass);
      });
      setSpaceVideoCardsViewed();
      (0, import_jquery.default)(".bili-dyn-content__orig__major").each(function() {
        var coverObj = (0, import_jquery.default)(this).find(".bili-awesome-img:first");
        if (coverObj.length > 0) {
          setVideoIsViewed((0, import_jquery.default)(this), ".bili-awesome-img");
        } else {
          setVideoIsViewed((0, import_jquery.default)(this), coverItemClass);
        }
      });
      (0, import_jquery.default)(".list-item").each(function() {
        setVideoIsViewed((0, import_jquery.default)(this), coverItemClass);
      });
      (0, import_jquery.default)(".video-card").each(function() {
        setVideoIsViewed((0, import_jquery.default)(this), coverItemClass);
      });
      setBtnView();
      (0, import_jquery.default)(".bili-dyn-up-list__item").unbind("click").click(function() {
        prePageScrollTop = 0;
        setTimeout(setPageRefreshMethod, 2e3);
      });
      (0, import_jquery.default)(".be-pager li").unbind("click").click(function() {
        setTimeout(setPageRefreshMethod, 2e3);
      });
      (0, import_jquery.default)(".search-btn").unbind("click").click(function() {
        setTimeout(setPageRefreshMethod, 2e3);
      });
      (0, import_jquery.default)(document).unbind("keyup").keyup(function(event) {
        if (event.keyCode == 13) {
          setTimeout(setPageRefreshMethod, 2e3);
        }
      });
      (0, import_jquery.default)(".n-tab-links a").unbind("click").click(function() {
        setTimeout(setPageRefreshMethod, 2e3);
      });
      (0, import_jquery.default)(".contribution-item").unbind("click").click(function() {
        setTimeout(setPageRefreshMethod, 2e3);
      });
      (0, import_jquery.default)(".be-tab-item").unbind("click").click(function() {
        setTimeout(setPageRefreshMethod, 2e3);
      });
      (0, import_jquery.default)("#submit-video-type-filter a").unbind("click").click(function() {
        setTimeout(setPageRefreshMethod, 2e3);
      });
      (0, import_jquery.default)(".fav-item a").unbind("click").click(function() {
        setTimeout(setPageRefreshMethod, 2e3);
      });
      (0, import_jquery.default)(".more").unbind("click").click(function() {
        setTimeout(setPageRefreshMethod, 2e3);
      });
      (0, import_jquery.default)(".more-btn").unbind("click").click(function() {
        setTimeout(setPageRefreshMethod, 2e3);
      });
      (0, import_jquery.default)(".list-style span").unbind("click").click(function() {
        setTimeout(setPageRefreshMethod, 2e3);
      });
      (0, import_jquery.default)(".nav-tab__item").unbind("click").click(function() {
        setTimeout(setPageRefreshMethod, 2e3);
      });
      (0, import_jquery.default)(".radio-filter__item").unbind("click").click(function() {
        setTimeout(setPageRefreshMethod, 2e3);
      });
      (0, import_jquery.default)(".vui_button").unbind("click").click(function() {
        setTimeout(setPageRefreshMethod, 2e3);
      });
      (0, import_jquery.default)(".side-nav__item").unbind("click").click(function() {
        setTimeout(setPageRefreshMethod, 2e3);
      });
      (0, import_jquery.default)(".lists-view-mode").unbind("click").click(function() {
        setTimeout(setPageRefreshMethod, 2e3);
      });
      (0, import_jquery.default)(".back").unbind("click").click(function() {
        setTimeout(setPageRefreshMethod, 2e3);
      });
      (0, import_jquery.default)(".menu-popover__panel-item").unbind("click").click(function() {
        setTimeout(setPageRefreshMethod, 2e3);
      });
      (0, import_jquery.default)(".fav-sidebar-item").unbind("click").click(function() {
        setTimeout(setPageRefreshMethod, 2e3);
      });
    };
    var coverItemClass = "img";
    var btnViewDelegateBound = false;
    var updateBtnViewVisual = function(btnObj, setIsViewed) {
      var coverObjs = btnObj.parent().find(coverItemClass + ":not(.block-list-item-info-player--img):not(.cover):first");
      if (setIsViewed) {
        btnObj.text("\u5DF2\u770B");
        btnObj.removeClass("btnNotView");
        btnObj.addClass("btnIsView");
        btnObj.data("view", "1");
        coverObjs.css("opacity", opacityIsViewCover);
      } else {
        btnObj.text("\u672A\u770B");
        btnObj.removeClass("btnIsView");
        btnObj.addClass("btnNotView");
        btnObj.data("view", "0");
        coverObjs.css("opacity", "1");
      }
    };
    var setBtnView = function() {
      if (btnViewDelegateBound) {
        return;
      }
      btnViewDelegateBound = true;
      (0, import_jquery.default)(document).off("click.BiliViewedBtnView", ".btnView").on("click.BiliViewedBtnView", ".btnView", function(e) {
        var avId = (0, import_jquery.default)(this).data("av");
        var view = (0, import_jquery.default)(this).data("view");
        var setIsViewed = false;
        if (view == 0) {
          setIsViewed = true;
        }
        saveGMVideoList(avId, setIsViewed);
        showInfoLog((setIsViewed ? "\u5DF2\u6807\u8BB0\u5DF2\u770B\uFF1A" : "\u5DF2\u6807\u8BB0\u672A\u770B\uFF1A") + avId, "success");
        (0, import_jquery.default)(".btnView").filter(function() {
          return (0, import_jquery.default)(this).data("av") == avId;
        }).each(function() {
          updateBtnViewVisual((0, import_jquery.default)(this), setIsViewed);
        });
        return false;
      });
    };
    var isView = 0;
    var videoArr = null;
    var isTextAreaHidden = true;
    var setSearchPage = function() {
      var refreshObj = (0, import_jquery.default)(".btnRefresh");
      if (refreshObj.size() == 0) {
        (0, import_jquery.default)(".vui_tabs--navbar").append("<a class='btnList' title='\u663E\u793A/\u9690\u85CF\u5DF2\u770BID\u7684\u6570\u636E\u5217\u8868\uFF0C\u5EFA\u8BAE\u5B9A\u671F\u590D\u5236\u5230\u5176\u4ED6\u5730\u65B9\u8FDB\u884C\u4FDD\u5B58\uFF0C\u907F\u514D\u56E0\u4E8B\u6545\u9020\u6210\u4E22\u5931'>\u663E\u793A/\u9690\u85CF</a>");
        (0, import_jquery.default)(".vui_tabs--navbar").append("<a class='btnListSave' title='\u5982\u679C\u6587\u672C\u6846\u5185\u5BB9\u6709\u4FEE\u6539\uFF0C\u8BF7\u70B9\u51FB\u8FD9\u4E2A\u6309\u94AE\u8FDB\u884C\u4FDD\u5B58\u3002'>\u4FDD\u5B58\u5217\u8868</a>");
        (0, import_jquery.default)(".vui_tabs--navbar").append("<textarea class='viewList'></textarea>");
        (0, import_jquery.default)(".search-input-container .flex_center").append(btnRefresh);
        (0, import_jquery.default)(".btnList").click(function() {
          if (isTextAreaHidden) {
            var keyList = GM_listValues();
            var key = "";
            var str = "";
            for (var i2 = 0; i2 < keyList.length; i2++) {
              key = keyList[i2];
              if (key.indexOf("BiliViewed_") == 0) {
                str += GM_getValue(key, "") + ",";
              }
            }
            (0, import_jquery.default)(".viewList").val(str);
          }
          isTextAreaHidden = !isTextAreaHidden;
          (0, import_jquery.default)(".viewList").toggle();
          (0, import_jquery.default)(".btnListSave").toggle();
        });
        (0, import_jquery.default)(".btnRefresh").click(function() {
          setPageRefreshMethod();
        });
        (0, import_jquery.default)(".btnListSave").click(function() {
          viewVideoList = (0, import_jquery.default)(".viewList").val();
          saveTextAreaVideoList(viewVideoList);
          isTextAreaHidden = !isTextAreaHidden;
          (0, import_jquery.default)(".viewList").toggle();
          (0, import_jquery.default)(".btnListSave").toggle();
        });
      }
      (0, import_jquery.default)(".media-card").each(function() {
        setVideoIsViewed((0, import_jquery.default)(this), coverItemClass);
      });
      var itemSpanArr = (0, import_jquery.default)(".media-footerClone .p_relativeSpan");
      if (itemSpanArr.length == 0) {
        (0, import_jquery.default)(".media-card-content-footer").each(function(idx) {
          var mFooter = (0, import_jquery.default)(this).find(".media-footer:first");
          if (mFooter.length == 0) {
            return;
          }
          var objOffset = mFooter.offset();
          var cloneObj = (0, import_jquery.default)(mFooter).clone();
          (0, import_jquery.default)(cloneObj).addClass("media-footerClone");
          (0, import_jquery.default)(cloneObj).addClass("media-footerClone_" + idx);
          (0, import_jquery.default)(cloneObj).removeClass("media-footer");
          (0, import_jquery.default)(this).append(cloneObj);
          var itemArr2 = (0, import_jquery.default)(".media-footerClone_" + idx + " .p_relative");
          for (var i2 = 0; i2 < itemArr2.length; i2++) {
            var spanObj2 = (0, import_jquery.default)("<span class='p_relativeSpan'></span>");
            spanObj2.append(itemArr2[i2]);
            (0, import_jquery.default)(".media-footerClone_" + idx).append(spanObj2);
          }
          (0, import_jquery.default)(".media-footerClone_" + idx).offset(objOffset);
        });
        (0, import_jquery.default)(".media-footer").attr("style", "opacity:0");
        (0, import_jquery.default)(window).unbind("resize").resize(function() {
          (0, import_jquery.default)(".media-footer").removeAttr("style");
          (0, import_jquery.default)(".media-footerClone").remove();
          setTimeout(setMethod, 2e3);
        });
      }
      (0, import_jquery.default)(".p_relativeSpan").each(function() {
        setVideoIsViewed((0, import_jquery.default)(this), ".vui_button");
      });
      (0, import_jquery.default)(".seleced-ep").unbind("mouseenter").bind("mouseenter", function() {
        setTimeout(setMethod, 500);
      });
      var itemArr = (0, import_jquery.default)(".media-footer-select-content-item");
      itemSpanArr = (0, import_jquery.default)(".selConSpan");
      var newLength = itemArr.length - itemSpanArr.length;
      if (itemSpanArr.length == 0 || newLength > 0) {
        for (var i = itemSpanArr.length; i < itemArr.length; i++) {
          var spanObj = (0, import_jquery.default)("<div class='selConSpan'></div>");
          spanObj.append(itemArr[i]);
          (0, import_jquery.default)(".media-footer-select-content").append(spanObj);
        }
      }
      (0, import_jquery.default)(".selConSpan").each(function() {
        setVideoIsViewed((0, import_jquery.default)(this), ".media-footer-select-content-item", 0, null, true, true);
      });
      (0, import_jquery.default)(".media-footer-select-content-more").each(function() {
        (0, import_jquery.default)(this).appendTo((0, import_jquery.default)(this).parent());
      });
      (0, import_jquery.default)(".bili-video-card__wrap").each(function() {
        setVideoIsViewed((0, import_jquery.default)(this), coverItemClass);
      });
      setBtnView();
      (0, import_jquery.default)(document).unbind("keyup").keyup(function(event) {
        if (event.keyCode == 13) {
          setTimeout(setPageRefreshMethod, 2e3);
        }
      });
      (0, import_jquery.default)(".vui_tabs--nav-item").unbind("click").click(function() {
        setTimeout(setPageRefreshMethod, 2e3);
      });
      (0, import_jquery.default)(".vui_button").unbind("click").click(function() {
        setTimeout(setPageRefreshMethod, 2e3);
      });
    };
    var bvid = null;
    var setVideoIsViewed = function(targetAppend, coverClass, playType, videoid, noAppendTarget, isBefore, findALast, findCoverClassLast) {
      var coverObj = null;
      if (findCoverClassLast) {
        coverObj = targetAppend.find(coverClass + ":last");
      } else {
        coverObj = targetAppend.find(coverClass + ":first");
      }
      if (coverObj.length == 0) {
        return null;
      }
      var btnView = null;
      if (noAppendTarget) {
        if (isBefore) {
          btnView = coverObj.parent().children(".btnView:first");
        } else {
          btnView = coverObj.children(".btnView:first");
        }
      } else {
        btnView = targetAppend.children(".btnView:first");
      }
      if (btnView.length > 0) {
        return null;
      }
      if (videoid != null && playType != 2) {
        bvid = videoid;
      } else {
        if (playType == 2) {
          bvid = videoid;
          playType = 0;
        } else {
          var aObj = null;
          if (findALast) {
            aObj = targetAppend.find("a:last");
          } else {
            aObj = targetAppend.find("a:first");
          }
          if (aObj.length == 0) {
            return null;
          }
          bvid = aObj.attr("href");
        }
        if (bvid == null) {
          return null;
        }
        if (playType == 1) {
          bvid = bvid.replace("//www.bilibili.com/medialist/play/watchlater/", "");
        } else if (playType == 3) {
          bvid = getBvidFromUrl(bvid);
          if (!bvid) {
            return;
          }
        } else {
          bvid = bvid.replace("//b23.tv/", "");
          bvid = bvid.replace("//m.bilibili.com/cheese/play/", "");
          bvid = bvid.replace("//www.bilibili.com/video/", "").replace("/video/", "");
          bvid = bvid.replace("//www.bilibili.com/bangumi/play/", "").replace("/bangumi/play/", "");
          bvid = bvid.replace("//www.bilibili.com/cheese/play/", "").replace("/cheese/play/", "");
        }
        bvid = bvid.replace("https:", "");
        var slashIndex = bvid.indexOf("/");
        if (slashIndex > -1) {
          bvid = bvid.substring(0, slashIndex);
        }
        if (bvid.length == 0) {
          return null;
        }
        slashIndex = bvid.indexOf("?");
        if (slashIndex > -1) {
          bvid = bvid.substring(0, slashIndex);
        }
        bvid = bvid.replace("/", "");
      }
      if (bvid.startsWith("av")) {
        bvid = bvid.substr(2);
        bvid = avToBv.encode(bvid);
        bvid = bvid.substr(2);
      } else if (bvid.startsWith("BV") || bvid.startsWith("bv")) {
        bvid = bvid.substr(2);
      } else if (bvid.startsWith("ep") || bvid.startsWith("ss")) {
      } else {
        return null;
      }
      if (noAppendTarget) {
        targetAppend = coverObj;
      }
      if (getBvIsViewed(bvid)) {
        if (isBefore) {
          targetAppend.before("<a class='btnView btnIsView' data-view='1' data-av='" + bvid + "'>\u5DF2\u770B</a>");
        } else {
          targetAppend.append("<a class='btnView btnIsView' data-view='1' data-av='" + bvid + "'>\u5DF2\u770B</a>");
        }
        if (!noAppendTarget) {
          coverObj.css("opacity", opacityIsViewCover);
        }
      } else {
        if (isBefore) {
          targetAppend.before("<a class='btnView btnNotView' data-view='0' data-av='" + bvid + "'>\u672A\u770B</a>");
        } else {
          targetAppend.append("<a class='btnView btnNotView' data-view='0' data-av='" + bvid + "'>\u672A\u770B</a>");
        }
        if (!noAppendTarget) {
          coverObj.css("opacity", "1");
        }
      }
      return bvid;
    };
    var getBvidFromUrl = function(url) {
      const regex = /bvid=([^&]+)/;
      const match = url.match(regex);
      return match ? match[1] : null;
    };
    var viewVideoJson = {};
    var viewVideoSetJson = {};
    var viewGroupArr = null;
    var getBvGroupId = getLegacyViewedGroupId;
    var setViewGroupCache = function(groupId, viewGroupArr2) {
      viewVideoJson[groupId] = viewGroupArr2;
      viewVideoSetJson[groupId] = new Set(viewGroupArr2);
    };
    var getBvIsViewed = function(bvid2) {
      bvid2 = bvid2 + "";
      var groupId = getBvGroupId(bvid2);
      if (groupId.length == 0) {
        return false;
      }
      viewGroupArr = viewVideoJson[groupId];
      if (!viewGroupArr) {
        viewGroupArr = readViewedGroup(groupId, null);
        if (viewGroupArr == null) {
          setViewGroupCache(groupId, []);
          return false;
        }
        setViewGroupCache(groupId, viewGroupArr);
      }
      if (viewVideoSetJson[groupId]) {
        return viewVideoSetJson[groupId].has(bvid2);
      }
      return false;
    };
    var saveGMVideoList = function(bvid2, isViewed) {
      bvid2 = bvid2 + "";
      var groupId = getBvGroupId(bvid2);
      if (groupId.length == 0) {
        return false;
      }
      viewGroupArr = viewVideoJson[groupId];
      if (!viewGroupArr) {
        viewGroupArr = readViewedGroup(groupId, null);
        if (viewGroupArr == null) {
          if (!isViewed) {
            return;
          }
          viewGroupArr = [];
        }
        setViewGroupCache(groupId, viewGroupArr);
      }
      var viewGroupSet = viewVideoSetJson[groupId];
      if (isViewed) {
        if (viewGroupSet.has(bvid2)) {
          return;
        }
        viewVideoJson[groupId].unshift(bvid2);
        viewGroupSet.add(bvid2);
      } else {
        if (!viewGroupSet.has(bvid2)) {
          return;
        }
        viewGroupSet.delete(bvid2);
        for (var i = 0; i < viewVideoJson[groupId].length; i++) {
          if (viewVideoJson[groupId][i] == bvid2) {
            viewVideoJson[groupId].splice(i, 1);
          }
        }
      }
      writeViewedGroup(groupId, viewVideoJson[groupId]);
    };
    var groupGMVideoList = function(viewVideoList2) {
      if (viewVideoList2.length == 0) {
        GM_deleteValue("BiliViewed");
        viewVideoJson = {};
        viewVideoSetJson = {};
        return;
      }
      var videoArr2 = viewVideoList2.split("\n");
      var groupJson = groupLegacyViewedItems(videoArr2);
      for (var key in groupJson) {
        writeViewedGroup(key, groupJson[key]);
      }
      GM_deleteValue("BiliViewed");
      viewVideoJson = {};
      viewVideoSetJson = {};
    };
    var saveTextAreaVideoList = function(viewVideoList2) {
      viewVideoList2 = viewVideoList2.replaceAll("\n", ",");
      var videoArr2 = viewVideoList2.split(",");
      var groupJson = groupLegacyViewedItems(videoArr2);
      clearViewedStorage();
      for (var key in groupJson) {
        writeViewedGroup(key, groupJson[key]);
      }
      viewVideoJson = {};
      viewVideoSetJson = {};
    };
    var avToBv = (function() {
      var table = "fZodR9XQDSUm21yCkr6zBqiveYah8bt4xsWpHnJE7jL5VG3guMTKNPAwcF";
      var tr = {};
      for (var i = 0; i < 58; i++) {
        tr[table[i]] = i;
      }
      var s = [11, 10, 3, 8, 4, 6];
      var r = ["B", "V", "1", "", "", "4", "", "1", "", "7", "", ""];
      var xor = 177451812;
      var add = 8728348608;
      function encode(x) {
        if (x <= 0 || x >= 1e9) {
          return null;
        }
        x = (x ^ xor) + add;
        var result = r.slice();
        for (var i2 = 0; i2 < 6; i2++) {
          result[s[i2]] = table[Math.floor(x / 58 ** i2) % 58];
        }
        return result.join("");
      }
      return { encode };
    })();
  }

  // src/modules/blocker/history.ts
  var historyPanelId = "bili-blocker-history-panel";
  var historyChangedEvent = "bili-atelier-block-history-changed";
  var historyStorageKey = "BiliAtelier_BlockHistory";
  var historyLimit = 200;
  function summarizeBlockedItem(item) {
    return item.title || item.content || item.liveTitle || item.name || item.bv || item.roomId || item.partition || "\u672A\u77E5\u5185\u5BB9";
  }
  function detailBlockedItem(item) {
    const parts = [];
    if (item.name) {
      parts.push(`\u7528\u6237\uFF1A${item.name}`);
    }
    if (item.uid !== void 0) {
      parts.push(`UID\uFF1A${item.uid}`);
    }
    if (item.bv) {
      parts.push(`BV\uFF1A${item.bv}`);
    }
    if (item.roomId) {
      parts.push(`\u76F4\u64AD\u95F4\uFF1A${item.roomId}`);
    }
    return parts.join(" / ");
  }
  function readBlockHistory() {
    const value = GM_getValue(historyStorageKey, []);
    if (!Array.isArray(value)) {
      return [];
    }
    return value.filter((entry) => entry && typeof entry === "object" && typeof entry.id === "string").slice(0, historyLimit);
  }
  function writeBlockHistory(history) {
    GM_setValue(historyStorageKey, history.slice(0, historyLimit));
  }
  function notifyBlockHistoryChanged() {
    document.dispatchEvent(new CustomEvent(historyChangedEvent));
  }
  function decisionRuleReferences(decision) {
    if (decision.linkedRules?.length) {
      return decision.linkedRules;
    }
    if (decision.ruleKey && decision.ruleValue !== void 0) {
      return [{ key: decision.ruleKey, value: decision.ruleValue }];
    }
    return [];
  }
  function ruleIdentity(rules) {
    return rules.map((rule) => `${rule.key}=${String(rule.value)}`).sort().join("&");
  }
  function createHistoryId(item, decision) {
    const identity = ruleIdentity(decisionRuleReferences(decision));
    if (identity) {
      return [item.kind, identity].join("|");
    }
    return [
      item.kind,
      decision.ruleKey || decision.type,
      String(decision.ruleValue ?? decision.matching)
    ].join("|");
  }
  function entryRuleReferences(entry) {
    if (entry.linkedRules?.length) {
      return entry.linkedRules;
    }
    if (entry.ruleKey && entry.ruleValue !== void 0) {
      return [{ key: entry.ruleKey, value: entry.ruleValue }];
    }
    return [];
  }
  function entryMatchesRule(entry, ruleKey, normalizedValue) {
    return entryRuleReferences(entry).some((rule) => {
      return rule.key === ruleKey && String(rule.value) === normalizedValue;
    });
  }
  function isDuplicateHistoryEntry(entry, kind, id, rules) {
    if (entry.id === id) {
      return true;
    }
    if (entry.kind !== kind || rules.length === 0) {
      return false;
    }
    const existingRules = entryRuleReferences(entry);
    return existingRules.some((existingRule) => {
      return rules.some((rule) => existingRule.key === rule.key && String(existingRule.value) === String(rule.value));
    });
  }
  function recordBlockHistory(item, decision) {
    const id = createHistoryId(item, decision);
    const history = readBlockHistory();
    const rules = decisionRuleReferences(decision);
    if (history.some((entry2) => isDuplicateHistoryEntry(entry2, item.kind, id, rules))) {
      return;
    }
    const entry = {
      id,
      timestamp: Date.now(),
      kind: item.kind,
      type: decision.type,
      matching: decision.matching,
      ruleKey: decision.ruleKey,
      ruleValue: decision.ruleValue,
      linkedRules: decision.linkedRules,
      uid: item.uid,
      name: item.name,
      title: item.title?.slice(0, 160),
      content: item.content?.slice(0, 220),
      bv: item.bv,
      liveTitle: item.liveTitle?.slice(0, 160),
      roomId: item.roomId,
      partition: item.partition,
      summary: summarizeBlockedItem(item).slice(0, 140),
      detail: detailBlockedItem(item),
      url: location.href
    };
    writeBlockHistory([entry, ...history]);
    notifyBlockHistoryChanged();
  }
  function removeHistoryByRules(rules) {
    writeBlockHistory(readBlockHistory().filter((entry) => {
      return !rules.some((rule) => entryMatchesRule(entry, rule.key, String(rule.value)));
    }));
  }

  // src/modules/blocker/matching.ts
  var defaultMatchOptions = {
    caseInsensitive: false,
    collapseWhitespace: true
  };
  function resolveOptions(options = {}) {
    return { ...defaultMatchOptions, ...options };
  }
  function normalizeText(value, options = {}) {
    if (value === null || value === void 0) {
      return null;
    }
    const resolvedOptions = resolveOptions(options);
    let text2 = String(value).trim();
    if (text2.length === 0) {
      return null;
    }
    if (resolvedOptions.collapseWhitespace) {
      text2 = text2.replace(/[\t\r\f\n\s]+/g, "");
    }
    if (resolvedOptions.caseInsensitive) {
      text2 = text2.toLowerCase();
    }
    return text2.length > 0 ? text2 : null;
  }
  function normalizeRuleValue(value, options = {}) {
    if (typeof value === "number") {
      return Number.isFinite(value) ? value : null;
    }
    return normalizeText(value, options);
  }
  function validateRuleInput(value, integerRule = false) {
    if (value === null || value === void 0) {
      return { status: false, res: "\u5185\u5BB9\u4E0D\u80FD\u4E3A\u7A7A" };
    }
    const trimmed = String(value).trim();
    if (trimmed.length === 0) {
      return { status: false, res: "\u5185\u5BB9\u4E0D\u80FD\u4E3A\u7A7A" };
    }
    if (!integerRule) {
      return { status: true, res: trimmed };
    }
    const parsed = Number.parseInt(trimmed, 10);
    if (!Number.isFinite(parsed)) {
      return { status: false, res: "\u8BF7\u8F93\u5165\u6570\u5B57\uFF01" };
    }
    return { status: true, res: parsed };
  }
  function exactMatch(ruleList, value, options = {}) {
    if (!Array.isArray(ruleList)) {
      return null;
    }
    const normalizedValue = normalizeRuleValue(value, options);
    if (normalizedValue === null) {
      return null;
    }
    for (const rule of ruleList) {
      const normalizedRule = normalizeRuleValue(rule, options);
      if (normalizedRule === null) {
        continue;
      }
      if (normalizedRule === normalizedValue) {
        return { kind: "exact", matching: rule };
      }
    }
    return null;
  }
  function fuzzyMatch(ruleList, value, options = {}) {
    if (!Array.isArray(ruleList)) {
      return null;
    }
    const normalizedValue = normalizeText(value, options);
    if (normalizedValue === null) {
      return null;
    }
    for (const rule of ruleList) {
      const normalizedRule = normalizeText(rule, options);
      if (normalizedRule === null) {
        continue;
      }
      if (normalizedValue.includes(normalizedRule)) {
        return { kind: "fuzzy", matching: rule };
      }
    }
    return null;
  }
  function regexMatch(ruleList, value, options = {}) {
    if (!Array.isArray(ruleList)) {
      return null;
    }
    const normalizedValue = normalizeText(value, options);
    if (normalizedValue === null) {
      return null;
    }
    for (const rule of ruleList) {
      const normalizedRule = normalizeText(rule, { ...options, collapseWhitespace: false });
      if (normalizedRule === null) {
        continue;
      }
      try {
        const regexp = new RegExp(normalizedRule, options.caseInsensitive ? "i" : "");
        if (regexp.test(normalizedValue)) {
          return { kind: "regex", matching: rule };
        }
      } catch (error) {
        options.onInvalidRule?.({ rule: String(rule), error });
      }
    }
    return null;
  }
  function blockExactFuzzyRegex(value, config2) {
    const exact = exactMatch(config2.exactRules, value, config2.options);
    if (exact) {
      return exact;
    }
    const fuzzy = fuzzyMatch(config2.fuzzyRules, value, config2.options);
    if (fuzzy) {
      return fuzzy;
    }
    return regexMatch(config2.regexRules, value, {
      ...config2.options,
      onInvalidRule: config2.onInvalidRegexRule
    });
  }

  // src/modules/blocker/rules.ts
  var ruleDefinitions = [
    { key: "precise_uid", label: "\u7528\u6237 UID\uFF08\u7CBE\u786E\uFF09", integer: true },
    { key: "precise_uid_white", label: "\u7528\u6237 UID \u767D\u540D\u5355\uFF08\u7CBE\u786E\uFF09", integer: true },
    { key: "name", label: "\u7528\u6237\u540D\uFF08\u6A21\u7CCA\uFF09" },
    { key: "precise_name", label: "\u7528\u6237\u540D\uFF08\u7CBE\u786E\uFF09" },
    { key: "nameCanonical", label: "\u7528\u6237\u540D\uFF08\u6B63\u5219\uFF09" },
    { key: "title", label: "\u89C6\u9891\u6807\u9898\uFF08\u6A21\u7CCA\uFF09" },
    { key: "titleCanonical", label: "\u89C6\u9891\u6807\u9898\uFF08\u6B63\u5219\uFF09" },
    { key: "commentOn", label: "\u8BC4\u8BBA\u5173\u952E\u8BCD\uFF08\u6A21\u7CCA\uFF09", textarea: true },
    { key: "commentOnCanonical", label: "\u8BC4\u8BBA\u5173\u952E\u8BCD\uFF08\u6B63\u5219\uFF09", textarea: true },
    { key: "dynamic", label: "\u52A8\u6001\u5173\u952E\u8BCD\uFF08\u6A21\u7CCA\uFF09", textarea: true },
    { key: "dynamicCanonical", label: "\u52A8\u6001\u5173\u952E\u8BCD\uFF08\u6B63\u5219\uFF09", textarea: true },
    { key: "liveTitle", label: "\u76F4\u64AD\u6807\u9898\uFF08\u6A21\u7CCA\uFF09" },
    { key: "liveTitleCanonical", label: "\u76F4\u64AD\u6807\u9898\uFF08\u6B63\u5219\uFF09" },
    { key: "precise_liveRoomId", label: "\u76F4\u64AD\u95F4 ID\uFF08\u7CBE\u786E\uFF09" },
    { key: "precise_partition", label: "\u76F4\u64AD\u5206\u533A\uFF08\u7CBE\u786E\uFF09" }
  ];
  var integerRuleKeys = new Set(ruleDefinitions.filter((rule) => rule.integer).map((rule) => rule.key));
  function emptySnapshot() {
    return Object.fromEntries(ruleDefinitions.map((rule) => [rule.key, []]));
  }
  function normalizeStoredRules(value, integer = false) {
    if (!Array.isArray(value)) {
      return [];
    }
    const normalized = [];
    for (const item of value) {
      const validation = validateRuleInput(item, integer);
      if (!validation.status || normalized.includes(validation.res)) {
        continue;
      }
      normalized.push(validation.res);
    }
    return normalized;
  }
  function readRuleList(key) {
    const integer = integerRuleKeys.has(key);
    return normalizeStoredRules(GM_getValue(key, []), integer);
  }
  function writeRuleList(key, values) {
    const integer = integerRuleKeys.has(key);
    const normalized = normalizeStoredRules(values, integer);
    GM_setValue(key, normalized);
    return normalized;
  }
  function readRuleSnapshot() {
    const snapshot = emptySnapshot();
    for (const rule of ruleDefinitions) {
      snapshot[rule.key] = readRuleList(rule.key);
    }
    return snapshot;
  }
  function addRuleItem(key, value) {
    const validation = validateRuleInput(value, integerRuleKeys.has(key));
    if (!validation.status) {
      return validation;
    }
    const current = readRuleList(key);
    if (current.includes(validation.res)) {
      return { status: false, res: "\u5DF2\u5B58\u5728\u6B64\u5185\u5BB9" };
    }
    current.push(validation.res);
    GM_setValue(key, current);
    return { status: true, res: "\u6DFB\u52A0\u6210\u529F", value: validation.res };
  }
  function removeRuleItem(key, value) {
    const validation = validateRuleInput(value, integerRuleKeys.has(key));
    if (!validation.status) {
      return validation;
    }
    const current = readRuleList(key);
    const index = current.findIndex((item) => item === validation.res);
    if (index < 0) {
      return { status: false, res: "\u89C4\u5219\u4E0D\u5B58\u5728" };
    }
    current.splice(index, 1);
    GM_setValue(key, current);
    return { status: true, res: "\u5DF2\u89E3\u9664\u5C4F\u853D", value: validation.res };
  }
  function importRuleSnapshot(data, mode) {
    if (!data || typeof data !== "object") {
      return { status: false, res: "\u89C4\u5219\u5185\u5BB9\u5FC5\u987B\u662F\u5BF9\u8C61" };
    }
    let changed = 0;
    for (const rule of ruleDefinitions) {
      const incoming = data[rule.key];
      if (!Array.isArray(incoming)) {
        continue;
      }
      if (mode === "overwrite") {
        const written = writeRuleList(rule.key, incoming);
        changed += written.length;
        continue;
      }
      const current = readRuleList(rule.key);
      const merged = writeRuleList(rule.key, current.concat(incoming));
      changed += Math.max(0, merged.length - current.length);
    }
    return { status: true, res: `\u5BFC\u5165\u5B8C\u6210\uFF0C\u53D8\u66F4 ${changed} \u6761` };
  }
  function exportNonEmptyRuleSnapshot() {
    const snapshot = readRuleSnapshot();
    const result = {};
    for (const rule of ruleDefinitions) {
      if (snapshot[rule.key].length > 0) {
        result[rule.key] = snapshot[rule.key];
      }
    }
    return result;
  }
  function parseRuleText(value, integer = false) {
    const lines = value.split(/\r?\n/g);
    return normalizeStoredRules(lines, integer);
  }
  function formatRuleText(values) {
    return values.join("\n");
  }

  // src/modules/blocker/decision.ts
  function isWhiteUid(uid, rules) {
    return uid !== void 0 && exactMatch(rules.precise_uid_white, uid) !== null;
  }
  function readRuleSnapshotWithHistoryAliases() {
    const rules = readRuleSnapshot();
    const preciseNameAliases = new Set(rules.precise_name.map((item) => String(item)));
    for (const entry of readBlockHistory()) {
      if (entry.kind !== "comment" || entry.uid === void 0 || !entry.name || exactMatch(rules.precise_uid, entry.uid) === null) {
        continue;
      }
      preciseNameAliases.add(entry.name);
    }
    return {
      ...rules,
      precise_name: Array.from(preciseNameAliases)
    };
  }
  function blockUser(uid, name, rules) {
    if (uid !== void 0) {
      const uidMatch = exactMatch(rules.precise_uid, uid);
      if (uidMatch) {
        return { type: "\u7CBE\u786E UID", matching: uidMatch.matching, ruleKey: "precise_uid", ruleValue: uidMatch.matching };
      }
    }
    const nameMatch = blockExactFuzzyRegex(name, {
      exactRules: rules.precise_name,
      fuzzyRules: rules.name,
      regexRules: rules.nameCanonical,
      options: { caseInsensitive: true },
      onInvalidRegexRule: ({ rule, error }) => warnLog(`\u7528\u6237\u540D\u6B63\u5219\u65E0\u6548\uFF1A${rule}`, error)
    });
    if (nameMatch) {
      const ruleKey = nameMatch.kind === "exact" ? "precise_name" : nameMatch.kind === "regex" ? "nameCanonical" : "name";
      return { type: `\u7528\u6237\u540D${nameMatch.kind}`, matching: nameMatch.matching, ruleKey, ruleValue: nameMatch.matching };
    }
    return null;
  }
  function decideVideo(item, rules) {
    if (isWhiteUid(item.uid, rules)) {
      return null;
    }
    const userDecision = blockUser(item.uid, item.name, rules);
    if (userDecision) {
      return userDecision;
    }
    const titleMatch = blockExactFuzzyRegex(item.title, {
      fuzzyRules: rules.title,
      regexRules: rules.titleCanonical,
      options: { caseInsensitive: true },
      onInvalidRegexRule: ({ rule, error }) => warnLog(`\u6807\u9898\u6B63\u5219\u65E0\u6548\uFF1A${rule}`, error)
    });
    if (titleMatch) {
      const ruleKey = titleMatch.kind === "regex" ? "titleCanonical" : "title";
      return { type: `\u6807\u9898${titleMatch.kind}`, matching: titleMatch.matching, ruleKey, ruleValue: titleMatch.matching };
    }
    return null;
  }
  function decideComment(item, rules) {
    if (isWhiteUid(item.uid, rules)) {
      return null;
    }
    const userDecision = blockUser(item.uid, item.name, rules);
    if (userDecision) {
      return userDecision;
    }
    const commentMatch = blockExactFuzzyRegex(item.content, {
      fuzzyRules: rules.commentOn,
      regexRules: rules.commentOnCanonical,
      options: { caseInsensitive: true },
      onInvalidRegexRule: ({ rule, error }) => warnLog(`\u8BC4\u8BBA\u6B63\u5219\u65E0\u6548\uFF1A${rule}`, error)
    });
    if (commentMatch) {
      const ruleKey = commentMatch.kind === "regex" ? "commentOnCanonical" : "commentOn";
      return { type: `\u8BC4\u8BBA${commentMatch.kind}`, matching: commentMatch.matching, ruleKey, ruleValue: commentMatch.matching };
    }
    return null;
  }
  function decideLive(item, rules) {
    if (isWhiteUid(item.uid, rules)) {
      return null;
    }
    const userDecision = blockUser(item.uid, item.name, rules);
    if (userDecision) {
      return userDecision;
    }
    if (item.roomId) {
      const roomMatch = exactMatch(rules.precise_liveRoomId, item.roomId);
      if (roomMatch) {
        return {
          type: "\u7CBE\u786E\u76F4\u64AD\u95F4 ID",
          matching: roomMatch.matching,
          ruleKey: "precise_liveRoomId",
          ruleValue: roomMatch.matching
        };
      }
    }
    if (item.partition) {
      const partitionMatch = exactMatch(rules.precise_partition, item.partition);
      if (partitionMatch) {
        return {
          type: "\u7CBE\u786E\u76F4\u64AD\u5206\u533A",
          matching: partitionMatch.matching,
          ruleKey: "precise_partition",
          ruleValue: partitionMatch.matching
        };
      }
    }
    const titleMatch = blockExactFuzzyRegex(item.liveTitle, {
      fuzzyRules: rules.liveTitle,
      regexRules: rules.liveTitleCanonical,
      options: { caseInsensitive: true },
      onInvalidRegexRule: ({ rule, error }) => warnLog(`\u76F4\u64AD\u6807\u9898\u6B63\u5219\u65E0\u6548\uFF1A${rule}`, error)
    });
    if (titleMatch) {
      const ruleKey = titleMatch.kind === "regex" ? "liveTitleCanonical" : "liveTitle";
      return { type: `\u76F4\u64AD\u6807\u9898${titleMatch.kind}`, matching: titleMatch.matching, ruleKey, ruleValue: titleMatch.matching };
    }
    return null;
  }
  function decideBlockableItem(item, rules) {
    if (item.kind === "video") {
      return decideVideo(item, rules);
    }
    if (item.kind === "comment") {
      return decideComment(item, rules);
    }
    return decideLive(item, rules);
  }
  function getManualChoices(item) {
    const choices = [];
    if (item.uid !== void 0) {
      choices.push({ label: `\u5C4F\u853D UID ${item.uid}`, key: "precise_uid", value: item.uid });
    }
    if (item.name) {
      choices.push({ label: `\u5C4F\u853D\u7528\u6237\u540D ${item.name}`, key: "precise_name", value: item.name });
    }
    if (item.title) {
      choices.push({ label: `\u5C4F\u853D\u6807\u9898\u5173\u952E\u8BCD ${item.title.slice(0, 30)}`, key: "title", value: item.title });
    }
    if (item.content) {
      choices.push({ label: `\u5C4F\u853D\u8BC4\u8BBA\u5173\u952E\u8BCD ${item.content.slice(0, 30)}`, key: "commentOn", value: item.content });
    }
    if (item.liveTitle) {
      choices.push({ label: `\u5C4F\u853D\u76F4\u64AD\u6807\u9898 ${item.liveTitle.slice(0, 30)}`, key: "liveTitle", value: item.liveTitle });
    }
    if (item.roomId) {
      choices.push({ label: `\u5C4F\u853D\u76F4\u64AD\u95F4 ${item.roomId}`, key: "precise_liveRoomId", value: item.roomId });
    }
    if (item.partition) {
      choices.push({ label: `\u5C4F\u853D\u76F4\u64AD\u5206\u533A ${item.partition}`, key: "precise_partition", value: item.partition });
    }
    return choices;
  }
  function getCommentUserBlockChoices(item) {
    const choices = [];
    if (item.uid !== void 0) {
      choices.push({ key: "precise_uid", value: item.uid });
    }
    if (item.name) {
      choices.push({ key: "precise_name", value: item.name });
    }
    return choices;
  }
  function getVideoOwnerBlockChoices(item) {
    const choices = [];
    if (item.uid !== void 0) {
      choices.push({ key: "precise_uid", value: item.uid });
    }
    if (item.name) {
      choices.push({ key: "precise_name", value: item.name });
    }
    return choices;
  }
  function getLiveOwnerBlockChoices(item) {
    const choices = [];
    if (item.uid !== void 0) {
      choices.push({ key: "precise_uid", value: item.uid });
    }
    if (item.name) {
      choices.push({ key: "precise_name", value: item.name });
    }
    if (choices.length === 0 && item.roomId) {
      choices.push({ key: "precise_liveRoomId", value: item.roomId });
    }
    return choices;
  }

  // src/modules/blocker/page-context.ts
  function currentLocation() {
    return typeof location !== "undefined" ? location : null;
  }
  function isHomePageLocation(value = currentLocation()) {
    return value?.hostname === "www.bilibili.com" && /^\/?$/.test(value.pathname || "");
  }
  function isSpacePageLocation(value = currentLocation()) {
    return value?.hostname === "space.bilibili.com" && /^\/\d+/.test(value.pathname || "");
  }
  function parseUid(value) {
    const match = value?.match(/space\.bilibili\.com\/(\d+)|data-user-id=["']?(\d+)|data-usercard-mid=["']?(\d+)|^(\d+)$/i);
    const raw = match?.[1] || match?.[2] || match?.[3] || match?.[4];
    if (!raw) {
      return void 0;
    }
    const uid = Number.parseInt(raw, 10);
    return Number.isFinite(uid) ? uid : void 0;
  }
  function parseSpaceProfileUid(pathname = currentLocation()?.pathname) {
    return parseUid(pathname?.match(/^\/(\d+)/)?.[1]);
  }

  // src/modules/blocker/extract.ts
  var videoCardSelectors = [
    ".bili-video-card",
    ".bili-feed-card",
    ".feed-card",
    ".video-card",
    ".video-page-card-small",
    ".video-page-operator-card-small",
    ".small-item",
    ".history-record",
    ".rank-item",
    ".rank-list>li",
    ".video-list-item",
    ".card-box",
    "li",
    "div"
  ];
  var commentSelectors = [
    "bili-comment-thread-renderer",
    "bili-comment-reply-renderer",
    ".reply-item",
    ".sub-reply-item",
    ".list-item",
    ".comment-item"
  ];
  var liveCardSelectors = [
    ".bili-live-card",
    ".live-card",
    ".room-card",
    ".bili-feed-card",
    ".feed-card",
    ".bili-video-card",
    ".recommend-card",
    ".floor-single-card",
    ".video-list-item",
    ".index_item_JSGkw",
    "li",
    "div"
  ];
  var ignoredTextTags = /* @__PURE__ */ new Set(["STYLE", "SCRIPT", "TEMPLATE", "NOSCRIPT"]);
  function normalizeVisibleText(value) {
    return value.replace(/\s+/g, " ").trim();
  }
  function readVisibleText(node) {
    if (!node) {
      return "";
    }
    if (node.nodeType === 3) {
      return node.textContent || "";
    }
    const tagName = String(node.tagName || node.localName || "").toUpperCase();
    if (ignoredTextTags.has(tagName) || node.getAttribute?.("data-bili-blocker-ui") === "true") {
      return "";
    }
    if (tagName === "BR") {
      return "\n";
    }
    if (tagName === "IMG") {
      return node.getAttribute?.("alt") || node.getAttribute?.("title") || "";
    }
    const childNodes = node.childNodes && node.childNodes.length > 0 ? node.childNodes : node.children;
    const parts = Array.from(childNodes || []).map(readVisibleText);
    if (parts.length === 0 && typeof node.localText === "string") {
      parts.push(node.localText);
    }
    if (node.shadowRoot) {
      parts.push(readVisibleText(node.shadowRoot));
    }
    return parts.filter(Boolean).join(" ");
  }
  function text(el) {
    return normalizeVisibleText(readVisibleText(el));
  }
  function attr(el, name) {
    return el?.getAttribute(name)?.trim() || "";
  }
  function first(root, selectors) {
    for (const selector of selectors) {
      const found = root.querySelector(selector);
      if (found) {
        return found;
      }
    }
    return null;
  }
  function queryAllDeep(root, selector) {
    const results = [];
    const visit = (node) => {
      if (typeof Element !== "undefined" && node instanceof Element && node.matches(selector)) {
        results.push(node);
      }
      results.push(...Array.from(node.querySelectorAll(selector)));
      for (const el of Array.from(node.querySelectorAll("*"))) {
        if (el.shadowRoot) {
          visit(el.shadowRoot);
        }
      }
    };
    visit(root);
    return results;
  }
  function queryOneDeep(root, selectors) {
    for (const selector of selectors) {
      const local = root.querySelector(selector);
      if (local) {
        return local;
      }
    }
    for (const el of Array.from(root.querySelectorAll("*"))) {
      const shadowRoot = el.shadowRoot;
      if (!shadowRoot) {
        continue;
      }
      const nested = queryOneDeep(shadowRoot, selectors);
      if (nested) {
        return nested;
      }
    }
    return null;
  }
  function parseBv(url) {
    return url?.match(/\/video\/(BV[^/?#]+)/i)?.[1] || null;
  }
  function parseRoomId(url) {
    return url?.match(/live\.bilibili\.com\/(?:blanc\/)?(\d+)/i)?.[1] || void 0;
  }
  function getSpaceOwner(root) {
    if (!isSpacePageLocation()) {
      return { uid: void 0, name: void 0 };
    }
    const uid = parseSpaceProfileUid();
    const name = text(first(root, [
      "#h-name",
      ".h-name",
      ".n-name",
      ".space-header .name",
      ".user-info .name",
      ".user-name",
      ".nickname"
    ])) || void 0;
    return { uid, name };
  }
  function fillOwnerFromSpacePage(owner, root) {
    if (owner.uid !== void 0 || owner.name) {
      return owner;
    }
    return getSpaceOwner(root);
  }
  function closestAny(el, selectors) {
    for (const selector of selectors) {
      const found = el.closest(selector);
      if (found instanceof HTMLElement) {
        return found;
      }
    }
    return el instanceof HTMLElement ? el : null;
  }
  function getOwner(root) {
    const ownerLink = first(root, [
      'a[href*="//space.bilibili.com/"]',
      'a[href*="space.bilibili.com/"]',
      ".bili-video-card__info--owner",
      ".bili-live-card__info--uname",
      ".bili-live-card__info--owner",
      ".live-card__info--uname",
      ".upname a",
      ".channel-name",
      ".anchor-name",
      ".room-anchor",
      ".up-name"
    ]);
    const href = attr(ownerLink, "href");
    const name = text(ownerLink?.querySelector?.(".bili-video-card__info--author")) || text(ownerLink?.querySelector?.(".bili-live-card__info--uname")) || text(ownerLink?.querySelector?.(".name")) || text(ownerLink);
    const uid = parseUid(href) ?? parseUid(attr(ownerLink, "data-usercard-mid")) ?? parseUid(attr(ownerLink, "data-user-id"));
    return { uid, name: name || void 0 };
  }
  function collectVideoItems(root = document) {
    const anchors = Array.from(root.querySelectorAll('a[href*="/video/BV"]'));
    const seen = /* @__PURE__ */ new Set();
    const items = [];
    for (const anchor of anchors) {
      const card = closestAny(anchor, videoCardSelectors);
      if (!card || seen.has(card)) {
        continue;
      }
      seen.add(card);
      const owner = fillOwnerFromSpacePage(getOwner(card), root);
      const title = attr(anchor, "title") || text(first(card, [".bili-video-card__info--tit", ".title", "h3", ".video-name"])) || text(anchor);
      const bv = parseBv(anchor.href);
      const insertionEl = first(card, [
        ".bili-video-card__info--bottom",
        ".bili-video-card__info--owner",
        ".bili-video-card__info",
        ".video-card-info",
        ".info",
        ".meta",
        ".playinfo"
      ]) || card;
      items.push({
        kind: "video",
        el: card,
        insertionEl,
        title: title || void 0,
        bv: bv || void 0,
        uid: owner.uid,
        name: owner.name
      });
    }
    return items;
  }
  function collectCommentItems(root = document) {
    const selector = commentSelectors.join(",");
    const candidates = queryAllDeep(root, selector);
    const seen = /* @__PURE__ */ new Set();
    const items = [];
    for (const candidate of candidates) {
      if (!(candidate instanceof HTMLElement) || seen.has(candidate)) {
        continue;
      }
      seen.add(candidate);
      const searchRoot = candidate.shadowRoot || candidate;
      const userLink = queryOneDeep(searchRoot, [
        '#user-name a[href*="space.bilibili.com/"]',
        'a[href*="space.bilibili.com/"]',
        ".user-name",
        ".sub-user-name",
        ".name"
      ]);
      const contentEl = queryOneDeep(searchRoot, [
        "#contents",
        ".reply-content",
        ".text-con",
        ".text",
        "bili-rich-text"
      ]);
      const content = text(contentEl);
      const href = attr(userLink, "href") || attr(userLink, "data-usercard-mid") || attr(userLink, "data-user-id") || candidate.outerHTML.slice(0, 500);
      const uid = parseUid(href);
      const name = text(userLink) || void 0;
      if (!content && uid === void 0 && !name) {
        continue;
      }
      items.push({
        kind: "comment",
        el: candidate,
        insertionEl: userLink || candidate,
        name,
        uid,
        content: content || void 0
      });
    }
    return items;
  }
  function collectLiveItems(root = document) {
    const anchors = Array.from(root.querySelectorAll('a[href*="live.bilibili.com/"]'));
    const seen = /* @__PURE__ */ new Set();
    const items = [];
    for (const anchor of anchors) {
      const roomId = parseRoomId(anchor.href);
      if (!roomId) {
        continue;
      }
      const card = closestAny(anchor, liveCardSelectors);
      if (!card || seen.has(card)) {
        continue;
      }
      seen.add(card);
      const owner = fillOwnerFromSpacePage(getOwner(card), root);
      const liveTitle = attr(anchor, "title") || text(first(card, [".room-title", ".bili-live-card__info--tit", "h3", ".title"])) || text(anchor);
      const partition = text(first(card, [".area-name", ".video-card-meta__chip", ".partition"]));
      items.push({
        kind: "live",
        el: card,
        insertionEl: first(card, [
          ".bili-live-card__info--bottom",
          ".bili-live-card__info",
          ".bili-video-card__info--bottom",
          ".bili-video-card__info--owner",
          ".live-card__info",
          ".room-card-info",
          ".video-card-info",
          ".info",
          ".meta"
        ]) || card,
        name: owner.name,
        uid: owner.uid,
        liveTitle: liveTitle || void 0,
        roomId,
        partition: partition || void 0
      });
    }
    return items;
  }

  // src/core/data-package.ts
  var atelierDataSchema = "bili-atelier-data";
  var atelierDataVersion = 1;
  var ruleKeySet = new Set(ruleDefinitions.map((rule) => rule.key));
  function splitLegacyBlockerExport(value) {
    const rules = {};
    const legacySettings = {};
    for (const [key, data] of Object.entries(value)) {
      if (ruleKeySet.has(key) && Array.isArray(data)) {
        rules[key] = data;
      } else if (!key.startsWith("BiliViewed_")) {
        legacySettings[key] = data;
      }
    }
    return { rules, legacySettings };
  }
  function createAtelierDataPackage(input = {}) {
    return {
      schema: atelierDataSchema,
      version: atelierDataVersion,
      exportedAt: (/* @__PURE__ */ new Date()).toISOString(),
      viewed: input.viewed || readViewedStorage(),
      blocker: {
        rules: input.blockerRules || exportNonEmptyRuleSnapshot(),
        legacySettings: input.legacySettings
      }
    };
  }
  function exportAtelierDataPackage() {
    return createAtelierDataPackage({
      viewed: readViewedStorage(),
      blockerRules: exportNonEmptyRuleSnapshot()
    });
  }
  function normalizeAtelierDataInput(value) {
    if (!value || typeof value !== "object") {
      throw new Error("\u5BFC\u5165\u5185\u5BB9\u5FC5\u987B\u662F JSON \u5BF9\u8C61");
    }
    const data = value;
    if (data.schema === atelierDataSchema) {
      return createAtelierDataPackage({
        viewed: data.viewed || { items: [], groups: {} },
        blockerRules: data.blocker?.rules || {},
        legacySettings: data.blocker?.legacySettings
      });
    }
    if (isLegacyViewedExport(data)) {
      return createAtelierDataPackage({
        viewed: normalizeLegacyViewedExport(data),
        blockerRules: {},
        legacySettings: {}
      });
    }
    const blocker = splitLegacyBlockerExport(data);
    return createAtelierDataPackage({
      viewed: { items: [], groups: {} },
      blockerRules: blocker.rules,
      legacySettings: blocker.legacySettings
    });
  }
  function importAtelierDataInput(value, mode) {
    const normalized = normalizeAtelierDataInput(value);
    const viewed = writeViewedStorage(normalized.viewed, mode);
    const rulesResult = importRuleSnapshot(normalized.blocker.rules, mode);
    return {
      status: true,
      res: `\u5BFC\u5165\u5B8C\u6210\uFF1A\u5DF2\u770B ${viewed.items.length} \u6761\uFF1B${rulesResult.res}`,
      viewed,
      rules: readRuleSnapshot()
    };
  }

  // src/modules/blocker/panel.ts
  var panelId = "bili-atelier-blocker-panel";
  function ensurePanelStyle() {
    if (document.getElementById("bili-atelier-blocker-panel-style")) {
      return;
    }
    const style = document.createElement("style");
    style.id = "bili-atelier-blocker-panel-style";
    style.textContent = `
#${panelId} {
  position: fixed;
  inset: 0 0 0 auto;
  width: min(560px, 100vw);
  z-index: 2147483600;
  background: #fff;
  color: #18191c;
  box-shadow: -12px 0 30px rgba(0,0,0,.18);
  font: 14px/1.4 -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  overflow: auto;
}
#${panelId} * { box-sizing: border-box; }
#${panelId} header {
  position: sticky;
  top: 0;
  background: #fff;
  border-bottom: 1px solid #e3e5e7;
  padding: 14px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
#${panelId} h2 { margin: 0; font-size: 18px; }
#${panelId} main { padding: 12px 16px 20px; }
#${panelId} label { display: block; margin: 12px 0 6px; font-weight: 600; }
#${panelId} textarea {
  width: 100%;
  min-height: 68px;
  resize: vertical;
  border: 1px solid #c9ccd0;
  border-radius: 6px;
  padding: 8px;
  font: 13px/1.45 ui-monospace, SFMono-Regular, Consolas, monospace;
}
#${panelId} button {
  border: 1px solid #c9ccd0;
  background: #fff;
  color: #18191c;
  border-radius: 6px;
  padding: 6px 10px;
  cursor: pointer;
}
#${panelId} button:hover { background: #f1f2f3; }
#${panelId} .bar {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  margin: 12px 0;
}
#${panelId} .hint { color: #6d757a; font-size: 12px; }
`;
    document.head.appendChild(style);
  }
  function createButton(text2, onClick) {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = text2;
    button.addEventListener("click", onClick);
    return button;
  }
  function importDataText(text2, mode, onRulesChanged) {
    const result = importAtelierDataInput(JSON.parse(text2), mode);
    onRulesChanged();
    showInfoLog(`${result.res}\uFF1B\u5DF2\u770B\u72B6\u6001\u53EF\u80FD\u9700\u8981\u5237\u65B0\u9875\u9762\u540E\u5B8C\u5168\u751F\u6548\u3002`, "success", 5200);
  }
  function createFileImportButton(text2, mode, onRulesChanged) {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = ".txt,.json,application/json,text/plain";
    input.style.display = "none";
    input.addEventListener("change", async () => {
      const file = input.files?.[0];
      input.value = "";
      if (!file) {
        return;
      }
      try {
        importDataText(await file.text(), mode, onRulesChanged);
      } catch (error) {
        window.alert(`\u5BFC\u5165\u5931\u8D25\uFF1A${String(error)}`);
      }
    });
    const button = createButton(text2, () => input.click());
    const wrapper = document.createElement("span");
    wrapper.append(button, input);
    return wrapper;
  }
  function openBlockerPanel(onRulesChanged) {
    ensurePanelStyle();
    document.getElementById(panelId)?.remove();
    const snapshot = readRuleSnapshot();
    const panel = document.createElement("section");
    panel.id = panelId;
    panel.setAttribute("data-bili-blocker-ui", "");
    const header = document.createElement("header");
    const title = document.createElement("h2");
    title.textContent = "Bili Atelier \u5C4F\u853D\u89C4\u5219";
    header.appendChild(title);
    header.appendChild(createButton("\u5173\u95ED", () => panel.remove()));
    const main = document.createElement("main");
    const hint = document.createElement("p");
    hint.className = "hint";
    hint.textContent = "\u6BCF\u884C\u4E00\u6761\u89C4\u5219\u3002\u5BFC\u5165\u683C\u5F0F\u517C\u5BB9\u539F\u5C4F\u853D\u589E\u5F3A\u5668\u7684 JSON \u89C4\u5219\u5BFC\u51FA\u3002";
    main.appendChild(hint);
    const fields = /* @__PURE__ */ new Map();
    for (const rule of ruleDefinitions) {
      const label = document.createElement("label");
      label.textContent = rule.label;
      label.htmlFor = `bili-rule-${rule.key}`;
      const textarea = document.createElement("textarea");
      textarea.id = `bili-rule-${rule.key}`;
      textarea.value = formatRuleText(snapshot[rule.key]);
      fields.set(rule.key, textarea);
      main.append(label, textarea);
    }
    const bar = document.createElement("div");
    bar.className = "bar";
    bar.append(
      createButton("\u4FDD\u5B58\u89C4\u5219", () => {
        for (const rule of ruleDefinitions) {
          const value = fields.get(rule.key)?.value || "";
          writeRuleList(rule.key, parseRuleText(value, rule.integer));
        }
        onRulesChanged();
        showInfoLog("\u5DF2\u4FDD\u5B58\u5C4F\u853D\u89C4\u5219", "success");
      }),
      createButton("\u5BFC\u51FA\u7EDF\u4E00 JSON", async () => {
        const json = JSON.stringify(exportAtelierDataPackage(), null, 2);
        await navigator.clipboard?.writeText(json).catch(() => void 0);
        window.prompt("\u7EDF\u4E00\u6570\u636E JSON\uFF08\u5DF2\u5C1D\u8BD5\u590D\u5236\u5230\u526A\u8D34\u677F\uFF09", json);
        showInfoLog("\u5DF2\u5BFC\u51FA\u7EDF\u4E00 JSON", "success");
      }),
      createButton("\u8986\u76D6\u5BFC\u5165\u7EDF\u4E00 JSON", () => {
        const input = window.prompt("\u7C98\u8D34\u7EDF\u4E00\u6570\u636E JSON\uFF0C\u4E5F\u517C\u5BB9\u65E7\u5C4F\u853D/\u5DF2\u770B JSON");
        if (!input) {
          return;
        }
        try {
          importDataText(input, "overwrite", onRulesChanged);
        } catch (error) {
          window.alert(`\u5BFC\u5165\u5931\u8D25\uFF1A${String(error)}`);
        }
      }),
      createButton("\u8FFD\u52A0\u5BFC\u5165\u7EDF\u4E00 JSON", () => {
        const input = window.prompt("\u7C98\u8D34\u7EDF\u4E00\u6570\u636E JSON\uFF0C\u4E5F\u517C\u5BB9\u65E7\u5C4F\u853D/\u5DF2\u770B JSON");
        if (!input) {
          return;
        }
        try {
          importDataText(input, "append", onRulesChanged);
        } catch (error) {
          window.alert(`\u5BFC\u5165\u5931\u8D25\uFF1A${String(error)}`);
        }
      }),
      createFileImportButton("\u4ECE\u6587\u4EF6\u8986\u76D6\u5BFC\u5165", "overwrite", onRulesChanged),
      createFileImportButton("\u4ECE\u6587\u4EF6\u8FFD\u52A0\u5BFC\u5165", "append", onRulesChanged)
    );
    main.appendChild(bar);
    panel.append(header, main);
    document.body.appendChild(panel);
  }

  // src/modules/blocker/runtime.ts
  var actionClass = "bili-blocker-action";
  var inlineActionClass = "bili-blocker-inline-action";
  var homeVideoActionClass = "bili-blocker-home-video-action";
  var homeLiveActionClass = "bili-blocker-home-live-action";
  var profileActionClass = "bili-blocker-profile-action";
  var spaceProfileActionClass = "bili-blocker-space-profile-action";
  var hiddenAttribute = "data-bili-blocker-hidden";
  var previousDisplayAttribute = "data-bili-blocker-previous-display";
  var previousDisplayPriorityAttribute = "data-bili-blocker-previous-display-priority";
  var historyShortcutInstalled = false;
  var historyAutoRefreshInstalled = false;
  var commentExpandFastScanInstalled = false;
  var userRuleKeys = /* @__PURE__ */ new Set(["precise_uid", "precise_name", "name", "nameCanonical"]);
  var homeFeedCardSelectors = [
    ".bili-feed-card",
    ".feed-card",
    ".bili-video-card",
    ".bili-video-card__wrap",
    ".floor-single-card",
    ".recommend-card",
    '[class*="feed-card"]',
    '[class*="bili-video-card"]'
  ];
  var commentFastScanContainerSelectors = [
    "bili-comments",
    "#commentapp",
    ".comment-container",
    ".comment-list",
    ".reply-list"
  ];
  var commentFastScanItemSelectors = [
    "bili-comment-thread-renderer",
    "bili-comment-reply-renderer",
    ".reply-item",
    ".sub-reply-item",
    ".comment-item",
    ".list-item"
  ];
  var commentFastScanRootSelectors = [...commentFastScanContainerSelectors, ...commentFastScanItemSelectors];
  var commentExpandTextPattern = /展开|更多回复|查看(?:全部)?回复|加载更多|共\s*\d+\s*条?回复|还有\s*\d+/;
  function ensureRuntimeStyle() {
    if (document.getElementById("bili-atelier-blocker-style")) {
      return;
    }
    const style = document.createElement("style");
    style.id = "bili-atelier-blocker-style";
    style.textContent = `
.${actionClass} {
  position: absolute;
  top: 4px;
  right: 4px;
  z-index: 20;
  border: 1px solid rgba(0,0,0,.2);
  border-radius: 4px;
  background: rgba(255,255,255,.92);
  color: #18191c;
  font-size: 12px;
  line-height: 18px;
  padding: 1px 6px;
  cursor: pointer;
}
.${actionClass}:hover { background: #ff6b6b; color: #fff; }
.${inlineActionClass},
.${homeVideoActionClass},
.${homeLiveActionClass},
.${profileActionClass},
.${spaceProfileActionClass} {
  margin-left: 8px;
  border: 1px solid rgba(0,0,0,.16);
  border-radius: 4px;
  background: rgba(255,255,255,.92);
  color: #18191c;
  font-size: 12px;
  line-height: 18px;
  padding: 1px 6px;
  cursor: pointer;
  vertical-align: middle;
}
.${inlineActionClass}:hover,
.${homeVideoActionClass}:hover,
.${homeLiveActionClass}:hover,
.${profileActionClass}:hover,
.${spaceProfileActionClass}:hover { background: #ff6b6b; color: #fff; }
.${homeVideoActionClass},
.${homeLiveActionClass} {
  float: right;
  flex: 0 0 auto;
  margin-left: auto;
}
[${hiddenAttribute}="true"] { display: none !important; }
#${historyPanelId} {
  position: fixed;
  top: 76px;
  right: 20px;
  z-index: 2147483647;
  width: min(440px, calc(100vw - 40px));
  max-height: min(680px, calc(100vh - 110px));
  overflow: hidden;
  border: 1px solid rgba(0,0,0,.12);
  border-radius: 8px;
  background: #fff;
  color: #18191c;
  box-shadow: 0 12px 36px rgba(0,0,0,.18);
  font-size: 13px;
}
#${historyPanelId}[hidden] { display: none !important; }
#${historyPanelId} .bili-blocker-history-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  padding: 12px 14px;
  border-bottom: 1px solid rgba(0,0,0,.08);
  font-weight: 700;
}
#${historyPanelId} .bili-blocker-history-actions {
  display: flex;
  gap: 8px;
  align-items: center;
}
#${historyPanelId} button {
  border: 1px solid rgba(0,0,0,.14);
  border-radius: 5px;
  background: #fff;
  color: #18191c;
  line-height: 22px;
  padding: 0 8px;
  cursor: pointer;
}
#${historyPanelId} button:hover { background: #f1f2f3; }
#${historyPanelId} .bili-blocker-history-body {
  max-height: calc(min(680px, calc(100vh - 110px)) - 48px);
  overflow: auto;
  padding: 10px 0;
}
#${historyPanelId} .bili-blocker-history-empty {
  padding: 22px 14px;
  color: #9499a0;
  text-align: center;
}
#${historyPanelId} .bili-blocker-history-item {
  position: relative;
  margin: 0 12px 10px;
  padding: 14px;
  border: 1px solid rgba(0,0,0,.08);
  border-radius: 7px;
  background: #fff;
  box-shadow: 0 2px 8px rgba(0,0,0,.04);
}
#${historyPanelId} .bili-blocker-history-type-badge {
  position: absolute;
  top: 10px;
  right: 10px;
  max-width: 108px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  border: 1px solid rgba(251,114,153,.28);
  border-radius: 999px;
  background: #fff1f5;
  color: #d44b73;
  font-size: 12px;
  line-height: 20px;
  padding: 0 8px;
}
#${historyPanelId} .bili-blocker-history-meta {
  display: flex;
  justify-content: space-between;
  gap: 10px;
  padding-right: 118px;
  color: #9499a0;
  font-size: 12px;
}
#${historyPanelId} .bili-blocker-history-summary {
  margin-top: 6px;
  font-weight: 600;
  line-height: 1.45;
}
#${historyPanelId} .bili-blocker-history-detail {
  margin-top: 4px;
  color: #61666d;
  line-height: 1.45;
  word-break: break-word;
}
#${historyPanelId} .bili-blocker-history-footer {
  display: flex;
  justify-content: flex-end;
  margin-top: 8px;
}
`;
    document.head.appendChild(style);
  }
  function styleCompactButton(button) {
    Object.assign(button.style, {
      marginLeft: "8px",
      border: "1px solid rgba(0,0,0,.16)",
      borderRadius: "4px",
      background: "rgba(255,255,255,.92)",
      color: "#18191c",
      fontSize: "12px",
      lineHeight: "18px",
      padding: "1px 6px",
      cursor: "pointer",
      verticalAlign: "middle"
    });
  }
  function decide(item, rules) {
    if (item.el.closest("[data-bili-blocker-ui]")) {
      return null;
    }
    return decideBlockableItem(item, rules);
  }
  function hideRawElement(el, decision) {
    const newlyHidden = el.getAttribute(hiddenAttribute) !== "true";
    if (newlyHidden) {
      el.setAttribute(previousDisplayAttribute, el.style.getPropertyValue("display") || "");
      el.setAttribute(previousDisplayPriorityAttribute, el.style.getPropertyPriority("display") || "");
    }
    el.setAttribute(hiddenAttribute, "true");
    el.style.setProperty("display", "none", "important");
    el.title = `Bili Atelier \u5DF2\u5C4F\u853D\uFF1A${decision.type} ${decision.matching}`;
    return newlyHidden;
  }
  function hideElement(item, decision) {
    const newlyHidden = hideRawElement(item.el, decision);
    if (newlyHidden && decision.ruleKey) {
      recordBlockHistory(item, decision);
    }
    debugLog("blocked", item.kind, decision, item);
  }
  function restoreElement(item) {
    const el = item.el;
    if (el.getAttribute(hiddenAttribute) !== "true") {
      return;
    }
    const previousDisplay = el.getAttribute(previousDisplayAttribute) || "";
    const previousDisplayPriority = el.getAttribute(previousDisplayPriorityAttribute) || "";
    el.removeAttribute(hiddenAttribute);
    el.removeAttribute(previousDisplayAttribute);
    el.removeAttribute(previousDisplayPriorityAttribute);
    el.style.removeProperty("display");
    if (previousDisplay) {
      el.style.setProperty("display", previousDisplay, previousDisplayPriority);
    }
  }
  function isAdBlockPlaceholderText(value) {
    const compactText2 = String(value || "").replace(/\s+/g, "");
    return /该内容被.*(?:AdGuard|AdBlock).*插件屏蔽/i.test(compactText2) || /插件屏蔽.*恢复正常内容展示/.test(compactText2);
  }
  function removeHomeAdBlockPlaceholders() {
    if (!isHomePageLocation()) {
      return;
    }
    const candidates = Array.from(document.querySelectorAll(homeFeedCardSelectors.join(",")));
    const cards = /* @__PURE__ */ new Set();
    for (const candidate of candidates) {
      const card = candidate.closest(
        ".bili-feed-card,.feed-card,.bili-video-card,.floor-single-card,.recommend-card"
      ) || candidate;
      if (!isAdBlockPlaceholderText(card.textContent)) {
        continue;
      }
      cards.add(card);
    }
    for (const card of cards) {
      hideRawElement(card, { type: "\u9996\u9875\u5E7F\u544A\u5C4F\u853D\u5360\u4F4D", matching: "AdGuard/AdBlock" });
    }
  }
  function formatHistoryTime(timestamp) {
    return new Date(timestamp).toLocaleString();
  }
  function kindLabel(kind) {
    if (kind === "comment") {
      return "\u8BC4\u8BBA";
    }
    if (kind === "live") {
      return "\u76F4\u64AD";
    }
    return "\u89C6\u9891";
  }
  function isUserRuleKey(ruleKey) {
    return Boolean(ruleKey && userRuleKeys.has(ruleKey));
  }
  function compactText(value) {
    return String(value ?? "").replace(/\s+/g, " ").trim();
  }
  function shortText(value, maxLength) {
    const textValue = compactText(value);
    if (!textValue) {
      return "\u672A\u77E5\u5185\u5BB9";
    }
    return textValue.length > maxLength ? `${textValue.slice(0, maxLength)}...` : textValue;
  }
  function isLeakedStyleText(value) {
    return /:host\s*\{|--bili-rich-text-|^\s*\.[\w-]+\s*\{/.test(value);
  }
  function shortReadableText(value, maxLength, fallback = "\u672A\u77E5\u5185\u5BB9") {
    const textValue = compactText(value);
    const readable = !textValue || isLeakedStyleText(textValue) ? fallback : textValue;
    return readable.length > maxLength ? `${readable.slice(0, maxLength)}...` : readable;
  }
  function historyUserId(entry) {
    if (entry.uid !== void 0) {
      return String(entry.uid);
    }
    if (entry.ruleKey === "precise_uid" && entry.ruleValue !== void 0) {
      return String(entry.ruleValue);
    }
    if (entry.ruleKey === "precise_uid" && entry.matching !== void 0) {
      return String(entry.matching);
    }
    return "\u672A\u77E5";
  }
  function historyTypeLabel(entry) {
    if (entry.kind === "comment" && isUserRuleKey(entry.ruleKey)) {
      return "\u8BC4\u8BBA\u533A\u7528\u6237";
    }
    if (entry.kind === "video" && isUserRuleKey(entry.ruleKey)) {
      return "UP";
    }
    if (entry.kind === "live" && isUserRuleKey(entry.ruleKey)) {
      return "\u76F4\u64ADUP";
    }
    if (entry.ruleKey === "commentOn" || entry.ruleKey === "commentOnCanonical") {
      return "\u8BC4\u8BBA\u5173\u952E\u8BCD";
    }
    if (entry.ruleKey === "title" || entry.ruleKey === "titleCanonical") {
      return "\u89C6\u9891\u6807\u9898";
    }
    if (entry.ruleKey === "liveTitle" || entry.ruleKey === "liveTitleCanonical") {
      return "\u76F4\u64AD\u6807\u9898";
    }
    if (entry.ruleKey === "precise_liveRoomId") {
      return "\u76F4\u64AD\u95F4";
    }
    if (entry.ruleKey === "precise_partition") {
      return "\u76F4\u64AD\u5206\u533A";
    }
    return kindLabel(entry.kind);
  }
  function historyEntrySummary(entry) {
    const typeLabel = historyTypeLabel(entry);
    if (typeLabel === "UP") {
      const name = entry.name ? ` / ${entry.name}` : "";
      return `UP ID\uFF1A${historyUserId(entry)}${name}`;
    }
    if (typeLabel === "\u8BC4\u8BBA\u533A\u7528\u6237") {
      return `\u7528\u6237 ID\uFF1A${historyUserId(entry)} / \u8BC4\u8BBA\uFF1A${shortReadableText(entry.content || entry.summary, 28, "\u65E7\u8BB0\u5F55\u672A\u4FDD\u5B58\u8BC4\u8BBA\u6B63\u6587")}`;
    }
    if (typeLabel === "\u76F4\u64ADUP") {
      const name = entry.name ? ` / ${entry.name}` : "";
      return `\u76F4\u64AD UP ID\uFF1A${historyUserId(entry)}${name}`;
    }
    if (typeLabel === "\u8BC4\u8BBA\u5173\u952E\u8BCD") {
      return shortReadableText(entry.content || entry.summary, 52, "\u65E7\u8BB0\u5F55\u672A\u4FDD\u5B58\u8BC4\u8BBA\u6B63\u6587");
    }
    if (typeLabel === "\u89C6\u9891\u6807\u9898") {
      return shortText(entry.title || entry.summary, 52);
    }
    if (typeLabel === "\u76F4\u64AD\u6807\u9898") {
      return shortText(entry.liveTitle || entry.summary, 52);
    }
    return shortText(entry.summary, 52);
  }
  function historyEntryDetail(entry) {
    const typeLabel = historyTypeLabel(entry);
    const parts = [];
    if (typeLabel === "UP" || typeLabel === "\u8BC4\u8BBA\u533A\u7528\u6237" || typeLabel === "\u76F4\u64ADUP") {
      if (entry.name) {
        parts.push(`\u7528\u6237\u540D\uFF1A${entry.name}`);
      }
    } else if (entry.detail) {
      parts.push(entry.detail);
    }
    if (entry.bv) {
      parts.push(`BV\uFF1A${entry.bv}`);
    }
    if (entry.roomId) {
      parts.push(`\u76F4\u64AD\u95F4\uFF1A${entry.roomId}`);
    }
    parts.push(`\u547D\u4E2D\uFF1A${entry.matching}`);
    return parts.join(" / ");
  }
  function isEditableTarget(target) {
    if (!(target instanceof HTMLElement)) {
      return false;
    }
    const tagName = target.tagName;
    return tagName === "INPUT" || tagName === "TEXTAREA" || tagName === "SELECT" || target.isContentEditable || target.closest("[contenteditable=true]") !== null;
  }
  function appendText(parent, tagName, className, text2) {
    const el = document.createElement(tagName);
    el.className = className;
    el.textContent = text2;
    parent.appendChild(el);
    return el;
  }
  function renderHistoryPanel(panel, rescan) {
    panel.textContent = "";
    panel.setAttribute("data-bili-blocker-ui", "true");
    const header = document.createElement("div");
    header.className = "bili-blocker-history-header";
    appendText(header, "div", "", "\u5C4F\u853D\u5386\u53F2");
    const headerActions = document.createElement("div");
    headerActions.className = "bili-blocker-history-actions";
    const refreshButton = document.createElement("button");
    refreshButton.type = "button";
    refreshButton.textContent = "\u5237\u65B0";
    refreshButton.addEventListener("click", () => renderHistoryPanel(panel, rescan));
    headerActions.appendChild(refreshButton);
    const clearButton = document.createElement("button");
    clearButton.type = "button";
    clearButton.textContent = "\u6E05\u7A7A";
    clearButton.addEventListener("click", () => {
      writeBlockHistory([]);
      renderHistoryPanel(panel, rescan);
    });
    headerActions.appendChild(clearButton);
    const closeButton = document.createElement("button");
    closeButton.type = "button";
    closeButton.textContent = "\u5173\u95ED";
    closeButton.addEventListener("click", () => {
      panel.hidden = true;
    });
    headerActions.appendChild(closeButton);
    header.appendChild(headerActions);
    panel.appendChild(header);
    const body = document.createElement("div");
    body.className = "bili-blocker-history-body";
    const history = readBlockHistory();
    if (history.length === 0) {
      appendText(body, "div", "bili-blocker-history-empty", "\u8FD8\u6CA1\u6709\u5C4F\u853D\u8BB0\u5F55");
      panel.appendChild(body);
      return;
    }
    for (const entry of history) {
      const item = document.createElement("div");
      item.className = "bili-blocker-history-item";
      appendText(item, "div", "bili-blocker-history-type-badge", historyTypeLabel(entry));
      const meta = document.createElement("div");
      meta.className = "bili-blocker-history-meta";
      appendText(meta, "span", "", `${kindLabel(entry.kind)} \xB7 ${entry.type}`);
      appendText(meta, "span", "", formatHistoryTime(entry.timestamp));
      item.appendChild(meta);
      appendText(item, "div", "bili-blocker-history-summary", historyEntrySummary(entry));
      appendText(item, "div", "bili-blocker-history-detail", historyEntryDetail(entry));
      const footer = document.createElement("div");
      footer.className = "bili-blocker-history-footer";
      const unblockButton = document.createElement("button");
      unblockButton.type = "button";
      const removableRules = entryRuleReferences(entry);
      if (removableRules.length > 0) {
        unblockButton.textContent = "\u89E3\u9664";
        unblockButton.addEventListener("click", () => {
          const failures = removableRules.map((rule) => removeRuleItem(rule.key, rule.value)).filter((result) => !result.status && result.res !== "\u89C4\u5219\u4E0D\u5B58\u5728");
          if (failures.length === 0) {
            removeHistoryByRules(removableRules);
            showInfoLog(`\u5DF2\u89E3\u9664\u5C4F\u853D\uFF1A${historyEntrySummary(entry)}`, "success");
            rescan();
            renderHistoryPanel(panel, rescan);
            return;
          }
          window.alert(failures[0].res);
        });
      } else {
        unblockButton.textContent = "\u4E0D\u53EF\u89E3\u9664";
        unblockButton.disabled = true;
      }
      footer.appendChild(unblockButton);
      item.appendChild(footer);
      body.appendChild(item);
    }
    panel.appendChild(body);
  }
  function ensureHistoryPanel(rescan) {
    let panel = document.getElementById(historyPanelId);
    if (!panel) {
      panel = document.createElement("section");
      panel.id = historyPanelId;
      panel.hidden = true;
      document.body.appendChild(panel);
    }
    renderHistoryPanel(panel, rescan);
    return panel;
  }
  function toggleHistoryPanel(rescan) {
    const panel = ensureHistoryPanel(rescan);
    panel.hidden = !panel.hidden;
  }
  function installHistoryShortcut(rescan) {
    if (historyShortcutInstalled) {
      return;
    }
    historyShortcutInstalled = true;
    document.addEventListener("keydown", (event) => {
      if (event.key !== "`" && event.code !== "Backquote" || event.ctrlKey || event.altKey || event.metaKey) {
        return;
      }
      if (isEditableTarget(event.target)) {
        return;
      }
      event.preventDefault();
      event.stopPropagation();
      toggleHistoryPanel(rescan);
    }, true);
  }
  function installHistoryAutoRefresh(rescan) {
    if (historyAutoRefreshInstalled) {
      return;
    }
    historyAutoRefreshInstalled = true;
    document.addEventListener(historyChangedEvent, () => {
      const panel = document.getElementById(historyPanelId);
      if (!panel || panel.hidden) {
        return;
      }
      renderHistoryPanel(panel, rescan);
    });
  }
  function eventPathElements(event) {
    const path = typeof event.composedPath === "function" ? event.composedPath() : [];
    const fallback = event.target ? [event.target] : [];
    return (path.length > 0 ? path : fallback).filter((node) => node instanceof Element);
  }
  function hasCommentContext(elements) {
    const selector = commentFastScanRootSelectors.join(",");
    return elements.some((element) => Boolean(element.closest(selector)));
  }
  function isCommentExpandClick(event) {
    if (isEditableTarget(event.target)) {
      return false;
    }
    const elements = eventPathElements(event);
    if (elements.some((element) => Boolean(element.closest("[data-bili-blocker-ui]")))) {
      return false;
    }
    if (!hasCommentContext(elements)) {
      return false;
    }
    return elements.some((element) => {
      const textValue = compactText([
        element.textContent,
        element.getAttribute("aria-label"),
        element.getAttribute("title")
      ].filter(Boolean).join(" "));
      return commentExpandTextPattern.test(textValue);
    });
  }
  function findCommentFastScanRoot(event) {
    const elements = eventPathElements(event);
    const containerSelector = commentFastScanContainerSelectors.join(",");
    for (const element of elements) {
      const root = element.closest(containerSelector);
      if (root) {
        return root;
      }
    }
    const itemSelector = commentFastScanItemSelectors.join(",");
    for (const element of elements) {
      const root = element.closest(itemSelector);
      if (root) {
        return root;
      }
    }
    return document;
  }
  function scheduleCommentFastScans(scanComments, root) {
    const run = () => scanComments(root);
    if (typeof window.requestAnimationFrame === "function") {
      window.requestAnimationFrame(run);
    } else {
      window.setTimeout(run, 0);
    }
    for (const delayMs of [80, 180, 420, 900, 1600]) {
      window.setTimeout(run, delayMs);
    }
  }
  function installCommentExpandFastScan(scanComments) {
    if (commentExpandFastScanInstalled) {
      return;
    }
    commentExpandFastScanInstalled = true;
    document.addEventListener("click", (event) => {
      if (!(event instanceof MouseEvent) || !isCommentExpandClick(event)) {
        return;
      }
      scheduleCommentFastScans(scanComments, findCommentFastScanRoot(event));
    }, true);
  }
  function applyManualBlockChoice(item, rescan, choice, type = "\u624B\u52A8\u5C4F\u853D") {
    applyManualBlockChoices(item, rescan, [choice], type);
  }
  function applyManualBlockChoices(item, rescan, choices, type = "\u624B\u52A8\u5C4F\u853D", options = {}) {
    const hideCurrent = options.hideCurrent !== false;
    const linkedRules = [];
    let firstError = "";
    let primaryChoice;
    for (const choice of choices) {
      const result = addRuleItem(choice.key, choice.value);
      if (result.status || result.res === "\u5DF2\u5B58\u5728\u6B64\u5185\u5BB9") {
        const value = result.status && "value" in result ? result.value : choice.value;
        const rule = { key: choice.key, value };
        linkedRules.push(rule);
        primaryChoice ||= rule;
        continue;
      }
      firstError ||= String(result.res);
    }
    if (linkedRules.length > 0 && primaryChoice) {
      const manualDecision = {
        type,
        matching: primaryChoice.value,
        ruleKey: primaryChoice.key,
        ruleValue: primaryChoice.value,
        linkedRules
      };
      if (hideCurrent) {
        hideElement(item, manualDecision);
      } else {
        recordBlockHistory(item, manualDecision);
      }
      showInfoLog(`${type}\uFF1A${shortReadableText(summarizeBlockedItem(item), 36)}`, "success");
      rescan();
      if (hideCurrent) {
        hideElement(item, manualDecision);
      }
      return true;
    }
    window.alert(firstError || "\u5F53\u524D\u5143\u7D20\u6CA1\u6709\u53EF\u63D0\u53D6\u7684\u5C4F\u853D\u5B57\u6BB5");
    return false;
  }
  function handleManualBlock(item, rescan) {
    const choices = getManualChoices(item);
    if (choices.length === 0) {
      window.alert("\u5F53\u524D\u5143\u7D20\u6CA1\u6709\u53EF\u63D0\u53D6\u7684\u5C4F\u853D\u5B57\u6BB5");
      return;
    }
    const promptText = choices.map((choice2, index) => `${index + 1}. ${choice2.label}`).join("\n");
    const selected = Number.parseInt(window.prompt(`\u9009\u62E9\u5C4F\u853D\u65B9\u5F0F\uFF1A
${promptText}`, "1") || "", 10);
    const choice = choices[selected - 1];
    if (!choice) {
      return;
    }
    applyManualBlockChoice(item, rescan, choice);
  }
  function handleCommentUserBlock(item, rescan) {
    const choices = getCommentUserBlockChoices(item);
    if (choices.length === 0) {
      window.alert("\u5F53\u524D\u8BC4\u8BBA\u6CA1\u6709\u53EF\u63D0\u53D6\u7684\u7528\u6237\u5B57\u6BB5");
      return;
    }
    applyManualBlockChoices(item, rescan, choices, "\u624B\u52A8\u5C4F\u853D\u8BC4\u8BBA\u533A\u7528\u6237");
  }
  function handleHomeVideoOwnerBlock(item, rescan) {
    const choices = getVideoOwnerBlockChoices(item);
    if (choices.length === 0) {
      window.alert("\u5F53\u524D\u89C6\u9891\u5361\u7247\u6CA1\u6709\u53EF\u63D0\u53D6\u7684 UP \u5B57\u6BB5");
      return;
    }
    applyManualBlockChoices(item, rescan, choices, "\u624B\u52A8\u5C4F\u853DUP");
  }
  function handleHomeLiveOwnerBlock(item, rescan) {
    const choices = getLiveOwnerBlockChoices(item);
    if (choices.length === 0) {
      window.alert("\u5F53\u524D\u76F4\u64AD\u5361\u7247\u6CA1\u6709\u53EF\u63D0\u53D6\u7684\u4E3B\u64AD\u6216\u76F4\u64AD\u95F4\u5B57\u6BB5");
      return;
    }
    applyManualBlockChoices(item, rescan, choices, "\u624B\u52A8\u5C4F\u853D\u76F4\u64ADUP");
  }
  function hasManualActionButton(item) {
    const selector = `.${actionClass},.${inlineActionClass},.${homeVideoActionClass},.${homeLiveActionClass}`;
    const insertionParent = item.insertionEl !== item.el ? item.insertionEl.parentElement : null;
    return Boolean(
      item.el.querySelector(selector) || item.el.shadowRoot?.querySelector(selector) || insertionParent?.querySelector(selector)
    );
  }
  function createManualActionButton(item, rescan, className = actionClass) {
    const button = document.createElement("button");
    button.type = "button";
    button.className = className;
    button.textContent = "\u5C4F\u853D";
    let confirmTimer;
    button.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      if (item.kind === "comment") {
        if (button.dataset.confirmBlock !== "true") {
          button.dataset.confirmBlock = "true";
          button.textContent = "\u786E\u8BA4\uFF1F";
          if (confirmTimer !== void 0) {
            window.clearTimeout(confirmTimer);
          }
          confirmTimer = window.setTimeout(() => {
            if (button.dataset.confirmBlock === "true") {
              button.dataset.confirmBlock = "";
              button.textContent = "\u5C4F\u853D";
            }
          }, 2500);
          return;
        }
        if (confirmTimer !== void 0) {
          window.clearTimeout(confirmTimer);
        }
        handleCommentUserBlock(item, rescan);
        return;
      }
      handleManualBlock(item, rescan);
    });
    return button;
  }
  function createHomeVideoActionButton(item, rescan) {
    const button = document.createElement("button");
    button.type = "button";
    button.className = homeVideoActionClass;
    button.textContent = "\u5C4F\u853D";
    button.title = item.uid !== void 0 ? `\u5C4F\u853D UP ${item.uid}` : `\u5C4F\u853D UP ${item.name || ""}`;
    let confirmTimer;
    button.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      if (button.dataset.confirmBlock !== "true") {
        button.dataset.confirmBlock = "true";
        button.textContent = "\u786E\u8BA4\uFF1F";
        if (confirmTimer !== void 0) {
          window.clearTimeout(confirmTimer);
        }
        confirmTimer = window.setTimeout(() => {
          if (button.dataset.confirmBlock === "true") {
            button.dataset.confirmBlock = "";
            button.textContent = "\u5C4F\u853D";
          }
        }, 2500);
        return;
      }
      if (confirmTimer !== void 0) {
        window.clearTimeout(confirmTimer);
      }
      handleHomeVideoOwnerBlock(item, rescan);
    });
    return button;
  }
  function createHomeLiveActionButton(item, rescan) {
    const button = document.createElement("button");
    button.type = "button";
    button.className = homeLiveActionClass;
    button.textContent = "\u5C4F\u853D";
    button.title = item.uid !== void 0 ? `\u5C4F\u853D\u76F4\u64AD\u4E3B\u64AD ${item.uid}` : item.name ? `\u5C4F\u853D\u76F4\u64AD\u4E3B\u64AD ${item.name}` : `\u5C4F\u853D\u76F4\u64AD\u95F4 ${item.roomId || ""}`;
    let confirmTimer;
    button.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      if (button.dataset.confirmBlock !== "true") {
        button.dataset.confirmBlock = "true";
        button.textContent = "\u786E\u8BA4\uFF1F";
        if (confirmTimer !== void 0) {
          window.clearTimeout(confirmTimer);
        }
        confirmTimer = window.setTimeout(() => {
          if (button.dataset.confirmBlock === "true") {
            button.dataset.confirmBlock = "";
            button.textContent = "\u5C4F\u853D";
          }
        }, 2500);
        return;
      }
      if (confirmTimer !== void 0) {
        window.clearTimeout(confirmTimer);
      }
      handleHomeLiveOwnerBlock(item, rescan);
    });
    return button;
  }
  function findCommentActionTarget(item) {
    const root = item.el.shadowRoot || item.el;
    return (item.insertionEl !== item.el ? item.insertionEl : null) || root.querySelector("#user-name,.user-name,.sub-user-name,.name,.user,.reply-info,.info") || item.el;
  }
  function insertInlineActionButton(target, button) {
    styleCompactButton(button);
    if (target.tagName === "A" || target.matches("#user-name,.user-name,.sub-user-name,.name")) {
      target.insertAdjacentElement("afterend", button);
      return;
    }
    target.appendChild(button);
  }
  function isHomeVideoItem(item) {
    return item.kind === "video" && isHomePageLocation() && Boolean(item.el.closest(
      ".bili-feed-card,.feed-card,.bili-video-card,.recommend-card,.floor-single-card,.video-card,.video-list-item"
    ));
  }
  function isHomeLiveItem(item) {
    return item.kind === "live" && (isHomePageLocation() || isSpacePageLocation()) && Boolean(item.el.closest(
      ".bili-live-card,.live-card,.room-card,.bili-feed-card,.feed-card,.bili-video-card,.recommend-card,.floor-single-card,.video-list-item,.index_item_JSGkw"
    ));
  }
  function findHomeVideoActionTarget(item) {
    const root = item.el.shadowRoot || item.el;
    return root.querySelector(
      ".bili-video-card__info--bottom,.bili-video-card__info--owner,.video-card-info,.info,.meta"
    ) || item.insertionEl || item.el;
  }
  function findHomeLiveActionTarget(item) {
    const root = item.el.shadowRoot || item.el;
    return root.querySelector(
      ".bili-live-card__info--bottom,.bili-live-card__info,.bili-video-card__info--bottom,.bili-video-card__info--owner,.live-card__info,.room-card-info,.video-card-info,.info,.meta"
    ) || item.insertionEl || item.el;
  }
  function insertHomeVideoActionButton(target, button) {
    if (target.tagName === "A") {
      target.insertAdjacentElement("afterend", button);
      return;
    }
    target.appendChild(button);
  }
  function insertHomeLiveActionButton(target, button) {
    if (target.tagName === "A") {
      target.insertAdjacentElement("afterend", button);
      return;
    }
    target.appendChild(button);
  }
  function ensureHomeVideoActionButton(item, rescan) {
    if (!isHomeVideoItem(item) || item.uid === void 0 && !item.name) {
      return;
    }
    const button = createHomeVideoActionButton(item, rescan);
    insertHomeVideoActionButton(findHomeVideoActionTarget(item), button);
  }
  function ensureHomeLiveActionButton(item, rescan) {
    if (!isHomeLiveItem(item) || item.uid === void 0 && !item.name && !item.roomId) {
      return;
    }
    const button = createHomeLiveActionButton(item, rescan);
    insertHomeLiveActionButton(findHomeLiveActionTarget(item), button);
  }
  function ensureActionButton(item, rescan) {
    if (item.el.getAttribute(hiddenAttribute) === "true" || hasManualActionButton(item)) {
      return;
    }
    if (item.kind === "video") {
      ensureHomeVideoActionButton(item, rescan);
      return;
    }
    if (item.kind === "live") {
      ensureHomeLiveActionButton(item, rescan);
      return;
    }
    if (item.kind === "comment") {
      const button2 = createManualActionButton(item, rescan, inlineActionClass);
      insertInlineActionButton(findCommentActionTarget(item), button2);
      return;
    }
    const computedPosition = window.getComputedStyle(item.el).position;
    if (computedPosition === "static") {
      item.el.style.position = "relative";
    }
    const button = createManualActionButton(item, rescan);
    item.el.appendChild(button);
  }
  function findSpaceProfileNameTarget() {
    for (const selector of [
      "#h-name",
      ".h-name",
      ".n-name",
      ".space-header .name",
      ".h-basic .name",
      ".user-info .name",
      ".username",
      ".nickname"
    ]) {
      const target = document.querySelector(selector);
      if (target && !target.closest("[data-bili-blocker-ui]") && target.textContent?.trim()) {
        return target;
      }
    }
    return null;
  }
  function readSpaceProfileUser() {
    if (!isSpacePageLocation()) {
      return null;
    }
    const target = findSpaceProfileNameTarget();
    if (!target) {
      return null;
    }
    const uid = parseSpaceProfileUid();
    const name = target.textContent?.replace(/\s+/g, " ").trim() || void 0;
    if (uid === void 0 && !name) {
      return null;
    }
    return { uid, name, target };
  }
  function handleSpaceProfileOwnerBlock(user, target, rescan) {
    const choices = getVideoOwnerBlockChoices(user);
    if (choices.length === 0) {
      window.alert("\u5F53\u524D\u4E2A\u4EBA\u4E3B\u9875\u6CA1\u6709\u53EF\u63D0\u53D6\u7684 UP \u5B57\u6BB5");
      return false;
    }
    const item = {
      kind: "video",
      el: target,
      insertionEl: target,
      uid: user.uid,
      name: user.name,
      title: "UP \u4E2A\u4EBA\u4E3B\u9875"
    };
    return applyManualBlockChoices(item, rescan, choices, "\u624B\u52A8\u5C4F\u853DUP", { hideCurrent: false });
  }
  function spaceProfileUserKey(user) {
    return `${user.uid ?? ""}|${user.name ?? ""}`;
  }
  function getSpaceProfileBlockedRules(user) {
    const rules = readRuleSnapshot();
    const blockedRules = [];
    if (user.uid !== void 0) {
      const uidMatch = exactMatch(rules.precise_uid, user.uid);
      if (uidMatch) {
        blockedRules.push({ key: "precise_uid", value: uidMatch.matching });
      }
    }
    if (user.name) {
      const nameMatch = exactMatch(rules.precise_name, user.name);
      if (nameMatch) {
        blockedRules.push({ key: "precise_name", value: nameMatch.matching });
      }
    }
    return blockedRules;
  }
  function setSpaceProfileActionButtonState(button, user) {
    const blocked = getSpaceProfileBlockedRules(user).length > 0;
    const label = user.uid !== void 0 ? `UP ${user.uid}` : `UP ${user.name || ""}`;
    button.dataset.userKey = spaceProfileUserKey(user);
    button.dataset.blocked = blocked ? "true" : "";
    button.textContent = blocked ? "\u5DF2\u5C4F\u853D" : "\u5C4F\u853D";
    button.title = blocked ? `\u89E3\u9664\u5C4F\u853D ${label}` : `\u5C4F\u853D ${label}`;
    button.disabled = false;
  }
  function handleSpaceProfileOwnerUnblock(user, rescan) {
    const blockedRules = getSpaceProfileBlockedRules(user);
    if (blockedRules.length === 0) {
      return false;
    }
    const failures = blockedRules.map((rule) => removeRuleItem(rule.key, rule.value)).filter((result) => !result.status);
    if (failures.length > 0) {
      window.alert(String(failures[0].res));
      return false;
    }
    removeHistoryByRules(blockedRules);
    notifyBlockHistoryChanged();
    showInfoLog(`\u5DF2\u89E3\u9664\u5C4F\u853D\uFF1A${user.name || user.uid || "\u5F53\u524DUP"}`, "success");
    rescan();
    return true;
  }
  function createSpaceProfileActionButton(user, target, rescan) {
    const button = document.createElement("button");
    button.type = "button";
    button.className = spaceProfileActionClass;
    let confirmTimer;
    setSpaceProfileActionButtonState(button, user);
    button.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      if (button.dataset.blocked === "true") {
        if (confirmTimer !== void 0) {
          window.clearTimeout(confirmTimer);
        }
        button.dataset.confirmBlock = "";
        handleSpaceProfileOwnerUnblock(user, rescan);
        setSpaceProfileActionButtonState(button, user);
        return;
      }
      if (button.dataset.confirmBlock !== "true") {
        button.dataset.confirmBlock = "true";
        button.textContent = "\u786E\u8BA4\uFF1F";
        if (confirmTimer !== void 0) {
          window.clearTimeout(confirmTimer);
        }
        confirmTimer = window.setTimeout(() => {
          if (button.dataset.confirmBlock === "true") {
            button.dataset.confirmBlock = "";
            setSpaceProfileActionButtonState(button, user);
          }
        }, 2500);
        return;
      }
      if (confirmTimer !== void 0) {
        window.clearTimeout(confirmTimer);
      }
      if (handleSpaceProfileOwnerBlock(user, target, rescan)) {
        button.dataset.confirmBlock = "";
        setSpaceProfileActionButtonState(button, user);
      }
    });
    return button;
  }
  function ensureSpaceProfileBlockButton(rescan) {
    const profileUser = readSpaceProfileUser();
    if (!profileUser) {
      return;
    }
    const { target } = profileUser;
    const existingButton = target.parentElement?.querySelector(`.${spaceProfileActionClass}`) || target.querySelector(`.${spaceProfileActionClass}`);
    if (existingButton?.dataset.userKey === spaceProfileUserKey(profileUser)) {
      setSpaceProfileActionButtonState(existingButton, profileUser);
      return;
    }
    existingButton?.remove();
    const button = createSpaceProfileActionButton(profileUser, target, rescan);
    styleCompactButton(button);
    target.insertAdjacentElement("afterend", button);
  }
  function extractProfileUser(container) {
    const profileData = container.__data?.card;
    const profileUid = Number.parseInt(String(profileData?.mid ?? ""), 10);
    const profileName = String(profileData?.name ?? "").trim();
    if (Number.isFinite(profileUid) || profileName) {
      return { uid: Number.isFinite(profileUid) ? profileUid : void 0, name: profileName || void 0 };
    }
    const vueUserData = container.querySelector(".user-card-m-exp.card-loaded")?.__vue__?.userData;
    const vueUid = Number.parseInt(String(vueUserData?.mid ?? ""), 10);
    const vueName = String(vueUserData?.name ?? "").trim();
    if (Number.isFinite(vueUid) || vueName) {
      return { uid: Number.isFinite(vueUid) ? vueUid : void 0, name: vueName || void 0 };
    }
    const searchRoot = container.shadowRoot || container;
    const link = searchRoot.querySelector('a[href*="space.bilibili.com/"]');
    const uid = parseUid(link?.href) ?? parseUid(container.outerHTML.slice(0, 700));
    const name = link?.textContent?.trim() || searchRoot.querySelector(".name,.nickname,.username,.user-name")?.textContent?.trim();
    return { uid, name: name || void 0 };
  }
  function ensureProfileBlockButtons(rescan) {
    const containers = Array.from(
      document.querySelectorAll(".usercard-wrap,.up-panel-container,bili-user-profile,.bili-user-profile")
    );
    for (const container of containers) {
      const searchRoot = container.shadowRoot || container;
      if (container.closest("[data-bili-blocker-ui]") || searchRoot.querySelector(`.${profileActionClass}`)) {
        continue;
      }
      const user = extractProfileUser(container);
      if (user.uid === void 0 && !user.name) {
        continue;
      }
      const target = searchRoot.querySelector("#action") || searchRoot.querySelector(".user,.name,.nickname,.username,.user-name") || searchRoot.querySelector('a[href*="space.bilibili.com/"]') || container;
      const button = document.createElement("button");
      button.type = "button";
      button.className = profileActionClass;
      button.textContent = "\u5C4F\u853D";
      button.title = user.uid !== void 0 ? `\u5C4F\u853D UID ${user.uid}` : `\u5C4F\u853D\u7528\u6237 ${user.name}`;
      styleCompactButton(button);
      button.addEventListener("click", (event) => {
        event.preventDefault();
        event.stopPropagation();
        const result = user.uid !== void 0 ? addRuleItem("precise_uid", user.uid) : addRuleItem("precise_name", user.name);
        window.alert(result.res);
        if (result.status) {
          rescan();
        }
      });
      if (target.tagName === "A") {
        target.insertAdjacentElement("afterend", button);
      } else {
        target.appendChild(button);
      }
    }
  }
  function debounce(callback, waitMs) {
    let timer;
    return () => {
      if (timer !== void 0) {
        window.clearTimeout(timer);
      }
      timer = window.setTimeout(callback, waitMs);
    };
  }
  function observeElementShadowRoot(el, observer, observed) {
    const shadowRoot = el.shadowRoot;
    if (!shadowRoot || observed.has(shadowRoot)) {
      return;
    }
    observed.add(shadowRoot);
    observer.observe(shadowRoot, { childList: true, subtree: true });
    observeOpenShadowRoots(shadowRoot, observer, observed);
  }
  function observeOpenShadowRoots(root, observer, observed) {
    if (root instanceof HTMLElement) {
      observeElementShadowRoot(root, observer, observed);
    }
    for (const el of Array.from(root.querySelectorAll("*"))) {
      observeElementShadowRoot(el, observer, observed);
    }
  }
  function scheduleStartupScans(scan) {
    for (const delayMs of [250, 750, 1500, 3e3]) {
      window.setTimeout(scan, delayMs);
    }
  }
  function startBlocker() {
    let observer = null;
    const observedShadowRoots = /* @__PURE__ */ new WeakSet();
    const scanComments = (root = document, rules = readRuleSnapshotWithHistoryAliases()) => {
      if (observer) {
        observeOpenShadowRoots(root, observer, observedShadowRoots);
      }
      for (const item of collectCommentItems(root)) {
        const decision = decideComment(item, rules);
        if (decision) {
          hideElement(item, decision);
        } else {
          restoreElement(item);
          ensureActionButton(item, scan);
        }
      }
    };
    const scan = () => {
      if (observer) {
        observeOpenShadowRoots(document, observer, observedShadowRoots);
      }
      const rules = readRuleSnapshotWithHistoryAliases();
      removeHomeAdBlockPlaceholders();
      const items = [
        ...collectVideoItems(document),
        ...collectLiveItems(document)
      ];
      for (const item of items) {
        const decision = decide(item, rules);
        if (decision) {
          hideElement(item, decision);
        } else {
          restoreElement(item);
          ensureActionButton(item, scan);
        }
      }
      scanComments(document, rules);
      ensureProfileBlockButtons(scan);
      ensureSpaceProfileBlockButton(scan);
    };
    const scheduleScan = debounce(scan, 300);
    const start = () => {
      ensureRuntimeStyle();
      if (typeof GM_registerMenuCommand === "function") {
        GM_registerMenuCommand("Bili Atelier \u5C4F\u853D\u89C4\u5219", () => openBlockerPanel(scan));
      }
      installHistoryShortcut(scan);
      installHistoryAutoRefresh(scan);
      installCommentExpandFastScan(scanComments);
      observer = new MutationObserver(scheduleScan);
      observer.observe(document.body, { childList: true, subtree: true });
      scan();
      scheduleStartupScans(scan);
      debugLog("blocker started");
    };
    if (document.body) {
      start();
      return;
    }
    const bodyObserver = new MutationObserver(() => {
      if (!document.body) {
        return;
      }
      bodyObserver.disconnect();
      start();
    });
    bodyObserver.observe(document.documentElement, { childList: true });
    window.addEventListener("pagehide", () => observer?.disconnect(), { once: true });
  }

  // src/main.ts
  var videoHeaderReadySelector = "#biliMainHeader .bili-header, #biliMainHeader .mini-header, .bili-header";
  function hasGmStorage() {
    return typeof GM_getValue === "function" && typeof GM_setValue === "function" && typeof GM_deleteValue === "function" && typeof GM_listValues === "function";
  }
  function isBilibiliVideoPage() {
    return location.hostname === "www.bilibili.com" && /^\/video\//i.test(location.pathname);
  }
  function isVideoHeaderReady() {
    return Boolean(document.querySelector(videoHeaderReadySelector));
  }
  function waitForVideoHeaderBeforeCommentLocation(callback) {
    if (!config.commentLocation.videoPageHeaderGate || !isBilibiliVideoPage() || isVideoHeaderReady()) {
      callback();
      return;
    }
    let done = false;
    let timeoutId = 0;
    let observer = null;
    const finish = (reason) => {
      if (done) {
        return;
      }
      done = true;
      observer?.disconnect();
      if (timeoutId) {
        window.clearTimeout(timeoutId);
      }
      debugLog(`comment-location video header gate released: ${reason}`);
      callback();
    };
    const check = () => {
      if (isVideoHeaderReady()) {
        finish("header-ready");
      }
    };
    observer = new MutationObserver(check);
    observer.observe(document.documentElement || document, { childList: true, subtree: true });
    document.addEventListener("DOMContentLoaded", check, { once: true });
    timeoutId = window.setTimeout(() => finish("timeout"), config.commentLocation.videoPageHeaderGateTimeoutMs);
  }
  var commentLocationInjected = false;
  function injectCommentLocation() {
    if (commentLocationInjected) {
      return;
    }
    commentLocationInjected = true;
    try {
      injectPageScript(commentLocationPageWorldSource);
      debugLog("comment-location injected");
    } catch (error) {
      warnLog("\u8BC4\u8BBA\u533A\u5C5E\u5730\u6A21\u5757\u6CE8\u5165\u5931\u8D25", error);
    }
  }
  function startCommentLocation() {
    if (!config.commentLocation.enabled) {
      return;
    }
    waitForVideoHeaderBeforeCommentLocation(injectCommentLocation);
  }
  function startViewedMarkerModule() {
    if (!config.viewedMarker.enabled) {
      return;
    }
    if (!hasGmStorage()) {
      warnLog("\u5DF2\u770B\u6A21\u5757\u9700\u8981 GM_* \u5B58\u50A8\u6743\u9650\uFF0C\u5F53\u524D\u73AF\u5883\u4E0D\u53EF\u7528\u3002");
      return;
    }
    let started = false;
    const start = () => {
      if (started) {
        return;
      }
      started = true;
      try {
        startViewedMarker();
        debugLog("viewed-marker started");
      } catch (error) {
        warnLog("\u5DF2\u770B\u6A21\u5757\u542F\u52A8\u5931\u8D25", error);
      }
    };
    if (document.head) {
      start();
      return;
    }
    const observer = new MutationObserver(() => {
      if (!document.head) {
        return;
      }
      observer.disconnect();
      start();
    });
    observer.observe(document.documentElement, { childList: true });
    document.addEventListener("DOMContentLoaded", () => {
      observer.disconnect();
      start();
    }, { once: true });
  }
  function startBlockerModule() {
    if (!config.blocker.enabled) {
      return;
    }
    if (!hasGmStorage()) {
      warnLog("\u5C4F\u853D\u6A21\u5757\u9700\u8981 GM_* \u5B58\u50A8\u6743\u9650\uFF0C\u5F53\u524D\u73AF\u5883\u4E0D\u53EF\u7528\u3002");
      return;
    }
    try {
      startBlocker();
      debugLog("blocker scheduled");
    } catch (error) {
      warnLog("\u5C4F\u853D\u6A21\u5757\u542F\u52A8\u5931\u8D25", error);
    }
  }
  startCommentLocation();
  startViewedMarkerModule();
  startBlockerModule();
})();
