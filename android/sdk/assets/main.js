(function () {

  var hasOwnProperty = Object.prototype.hasOwnProperty;
  var propIsEnumerable = Object.prototype.propertyIsEnumerable;

  function toObject(val) {
    if (val === null || val === undefined) {
      throw new TypeError('Object.assign cannot be called with null or undefined');
    }

    return Object(val);
  }

  Object.assign = function (target, source) {
    var from;
    var to = toObject(target);
    var symbols;

    for (var s = 1; s < arguments.length; s++) {
      from = Object(arguments[s]);

      for (var key in from) {
        if (hasOwnProperty.call(from, key)) {
          to[key] = from[key];
        }
      }

      if (Object.getOwnPropertySymbols) {
        symbols = Object.getOwnPropertySymbols(from);
        for (var i = 0; i < symbols.length; i++) {
          if (propIsEnumerable.call(from, symbols[i])) {
            to[symbols[i]] = from[symbols[i]];
          }
        }
      }
    }

    return to;
  };
})();

(this.nativeLog || function(s) {console.log(s)})('START JS FRAMEWORK: 0.15.1 Build 20160725');
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';

	__webpack_require__(1);

	var _runtime = __webpack_require__(71);

	var _runtime2 = _interopRequireDefault(_runtime);

	var _package = __webpack_require__(96);

	var _methods = __webpack_require__(97);

	var methods = _interopRequireWildcard(_methods);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var native = _package.subversion.native;
	var transformer = _package.subversion.transformer;

	// register instance management APIs

	var _loop = function _loop(methodName) {
	  global[methodName] = function () {
	    var ret = _runtime2.default[methodName].apply(_runtime2.default, arguments);
	    if (ret instanceof Error) {
	      console.error(ret.toString());
	    }
	    return ret;
	  };
	};

	for (var methodName in _runtime2.default) {
	  _loop(methodName);
	}

	// register framework meta info
	global.frameworkVersion = native;
	global.transformerVersion = transformer;

	// register special methods for Weex framework
	global.registerMethods(methods);
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	exports.extend = extend;
	exports.def = def;
	exports.remove = remove;
	exports.hasOwn = hasOwn;
	exports.bind = bind;
	exports.toArray = toArray;
	exports.isObject = isObject;
	exports.isPlainObject = isPlainObject;

	__webpack_require__(2);

	__webpack_require__(3);

	__webpack_require__(70);

	/**
	 * Mix properties into target object.
	 *
	 * @param {Object} to
	 * @param {Object} from
	 */

	function extend(target) {
	  for (var _len = arguments.length, src = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	    src[_key - 1] = arguments[_key];
	  }

	  if (typeof Object.assign === 'function') {
	    Object.assign.apply(Object, [target].concat(src));
	  } else {
	    var first = src.shift();
	    for (var key in first) {
	      target[key] = first[key];
	    }
	    if (src.length) {
	      extend.apply(undefined, [target].concat(src));
	    }
	  }
	  return target;
	}

	/**
	 * Define a property.
	 *
	 * @param {Object} obj
	 * @param {String} key
	 * @param {*} val
	 * @param {Boolean} [enumerable]
	 */

	function def(obj, key, val, enumerable) {
	  Object.defineProperty(obj, key, {
	    value: val,
	    enumerable: !!enumerable,
	    writable: true,
	    configurable: true
	  });
	}

	/**
	 * Remove an item from an array
	 *
	 * @param {Array} arr
	 * @param {*} item
	 */

	function remove(arr, item) {
	  if (arr.length) {
	    var index = arr.indexOf(item);
	    if (index > -1) {
	      return arr.splice(index, 1);
	    }
	  }
	}

	/**
	 * Check whether the object has the property.
	 *
	 * @param {Object} obj
	 * @param {String} key
	 * @return {Boolean}
	 */
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	function hasOwn(obj, key) {
	  return hasOwnProperty.call(obj, key);
	}

	/**
	 * Simple bind, faster than native
	 *
	 * @param {Function} fn
	 * @param {Object} ctx
	 * @return {Function}
	 */

	function bind(fn, ctx) {
	  return function (a) {
	    var l = arguments.length;
	    return l ? l > 1 ? fn.apply(ctx, arguments) : fn.call(ctx, a) : fn.call(ctx);
	  };
	}

	/**
	 * Convert an Array-like object to a real Array.
	 *
	 * @param {Array-like} list
	 * @param {Number} [start] - start index
	 * @return {Array}
	 */

	function toArray(list, start) {
	  start = start || 0;
	  var i = list.length - start;
	  var ret = new Array(i);
	  while (i--) {
	    ret[i] = list[i + start];
	  }
	  return ret;
	}

	/**
	 * Quick object check - this is primarily used to tell
	 * Objects from primitive values when we know the value
	 * is a JSON-compliant type.
	 *
	 * @param {*} obj
	 * @return {Boolean}
	 */

	function isObject(obj) {
	  return obj !== null && (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object';
	}

	/**
	 * Strict object type check. Only returns true
	 * for plain JavaScript objects.
	 *
	 * @param {*} obj
	 * @return {Boolean}
	 */

	var toString = Object.prototype.toString;
	var OBJECT_STRING = '[object Object]';
	function isPlainObject(obj) {
	  return toString.call(obj) === OBJECT_STRING;
	}

/***/ },
/* 2 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';

	var _global = global;
	var setTimeout = _global.setTimeout;
	var setTimeoutNative = _global.setTimeoutNative;

	// fix no setTimeout on Android V8
	/* istanbul ignore if */

	if (typeof setTimeout === 'undefined' && typeof setTimeoutNative === 'function') {
	  (function () {
	    var timeoutMap = {};
	    var timeoutId = 0;

	    global.setTimeout = function (cb, time) {
	      timeoutMap[++timeoutId] = cb;
	      setTimeoutNative(timeoutId.toString(), time);
	    };

	    global.setTimeoutCallback = function (id) {
	      if (typeof timeoutMap[id] === 'function') {
	        timeoutMap[id]();
	        delete timeoutMap[id];
	      }
	    };
	  })();
	}
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// fix Promise Problem on JSContext of iOS7~8
	// @see https://bugs.webkit.org/show_bug.cgi?id=135866
	// global.Promise = null
	__webpack_require__(4);
	__webpack_require__(24);
	__webpack_require__(50);
	__webpack_require__(54);

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 19.1.3.6 Object.prototype.toString()

	var classof = __webpack_require__(5),
	    test = {};
	test[__webpack_require__(7)('toStringTag')] = 'z';
	if (test + '' != '[object z]') {
	  __webpack_require__(11)(Object.prototype, 'toString', function toString() {
	    return '[object ' + classof(this) + ']';
	  }, true);
	}

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// getting tag from 19.1.3.6 Object.prototype.toString()
	var cof = __webpack_require__(6),
	    TAG = __webpack_require__(7)('toStringTag')
	// ES3 wrong here
	,
	    ARG = cof(function () {
	  return arguments;
	}()) == 'Arguments';

	// fallback for IE11 Script Access Denied error
	var tryGet = function tryGet(it, key) {
	  try {
	    return it[key];
	  } catch (e) {/* empty */}
	};

	module.exports = function (it) {
	  var O, T, B;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	  // @@toStringTag case
	  : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
	  // builtinTag case
	  : ARG ? cof(O)
	  // ES3 arguments fallback
	  : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
	};

/***/ },
/* 6 */
/***/ function(module, exports) {

	"use strict";

	var toString = {}.toString;

	module.exports = function (it) {
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var store = __webpack_require__(8)('wks'),
	    uid = __webpack_require__(10),
	    _Symbol = __webpack_require__(9).Symbol,
	    USE_SYMBOL = typeof _Symbol == 'function';

	var $exports = module.exports = function (name) {
	  return store[name] || (store[name] = USE_SYMBOL && _Symbol[name] || (USE_SYMBOL ? _Symbol : uid)('Symbol.' + name));
	};

	$exports.store = store;

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var global = __webpack_require__(9),
	    SHARED = '__core-js_shared__',
	    store = global[SHARED] || (global[SHARED] = {});
	module.exports = function (key) {
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 9 */
/***/ function(module, exports) {

	'use strict';

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef

/***/ },
/* 10 */
/***/ function(module, exports) {

	'use strict';

	var id = 0,
	    px = Math.random();
	module.exports = function (key) {
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var global = __webpack_require__(9),
	    hide = __webpack_require__(12),
	    has = __webpack_require__(22),
	    SRC = __webpack_require__(10)('src'),
	    TO_STRING = 'toString',
	    $toString = Function[TO_STRING],
	    TPL = ('' + $toString).split(TO_STRING);

	__webpack_require__(23).inspectSource = function (it) {
	  return $toString.call(it);
	};

	(module.exports = function (O, key, val, safe) {
	  var isFunction = typeof val == 'function';
	  if (isFunction) has(val, 'name') || hide(val, 'name', key);
	  if (O[key] === val) return;
	  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
	  if (O === global) {
	    O[key] = val;
	  } else {
	    if (!safe) {
	      delete O[key];
	      hide(O, key, val);
	    } else {
	      if (O[key]) O[key] = val;else hide(O, key, val);
	    }
	  }
	  // add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
	})(Function.prototype, TO_STRING, function toString() {
	  return typeof this == 'function' && this[SRC] || $toString.call(this);
	});

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var dP = __webpack_require__(13),
	    createDesc = __webpack_require__(21);
	module.exports = __webpack_require__(17) ? function (object, key, value) {
	  return dP.f(object, key, createDesc(1, value));
	} : function (object, key, value) {
	  object[key] = value;
	  return object;
	};

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var anObject = __webpack_require__(14),
	    IE8_DOM_DEFINE = __webpack_require__(16),
	    toPrimitive = __webpack_require__(20),
	    dP = Object.defineProperty;

	exports.f = __webpack_require__(17) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
	  anObject(O);
	  P = toPrimitive(P, true);
	  anObject(Attributes);
	  if (IE8_DOM_DEFINE) try {
	    return dP(O, P, Attributes);
	  } catch (e) {/* empty */}
	  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
	  if ('value' in Attributes) O[P] = Attributes.value;
	  return O;
	};

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var isObject = __webpack_require__(15);
	module.exports = function (it) {
	  if (!isObject(it)) throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 15 */
/***/ function(module, exports) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	module.exports = function (it) {
	  return (typeof it === 'undefined' ? 'undefined' : _typeof(it)) === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = !__webpack_require__(17) && !__webpack_require__(18)(function () {
	  return Object.defineProperty(__webpack_require__(19)('div'), 'a', { get: function get() {
	      return 7;
	    } }).a != 7;
	});

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(18)(function () {
	  return Object.defineProperty({}, 'a', { get: function get() {
	      return 7;
	    } }).a != 7;
	});

/***/ },
/* 18 */
/***/ function(module, exports) {

	"use strict";

	module.exports = function (exec) {
	  try {
	    return !!exec();
	  } catch (e) {
	    return true;
	  }
	};

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var isObject = __webpack_require__(15),
	    document = __webpack_require__(9).document
	// in old IE typeof document.createElement is 'object'
	,
	    is = isObject(document) && isObject(document.createElement);
	module.exports = function (it) {
	  return is ? document.createElement(it) : {};
	};

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(15);
	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	module.exports = function (it, S) {
	  if (!isObject(it)) return it;
	  var fn, val;
	  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
	  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
	  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
	  throw TypeError("Can't convert object to primitive value");
	};

/***/ },
/* 21 */
/***/ function(module, exports) {

	"use strict";

	module.exports = function (bitmap, value) {
	  return {
	    enumerable: !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable: !(bitmap & 4),
	    value: value
	  };
	};

/***/ },
/* 22 */
/***/ function(module, exports) {

	"use strict";

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function (it, key) {
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 23 */
/***/ function(module, exports) {

	'use strict';

	var core = module.exports = { version: '2.4.0' };
	if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var $at = __webpack_require__(25)(true);

	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(28)(String, 'String', function (iterated) {
	  this._t = String(iterated); // target
	  this._i = 0; // next index
	  // 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function () {
	  var O = this._t,
	      index = this._i,
	      point;
	  if (index >= O.length) return { value: undefined, done: true };
	  point = $at(O, index);
	  this._i += point.length;
	  return { value: point, done: false };
	});

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var toInteger = __webpack_require__(26),
	    defined = __webpack_require__(27);
	// true  -> String#at
	// false -> String#codePointAt
	module.exports = function (TO_STRING) {
	  return function (that, pos) {
	    var s = String(defined(that)),
	        i = toInteger(pos),
	        l = s.length,
	        a,
	        b;
	    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff ? TO_STRING ? s.charAt(i) : a : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};

/***/ },
/* 26 */
/***/ function(module, exports) {

	"use strict";

	// 7.1.4 ToInteger
	var ceil = Math.ceil,
	    floor = Math.floor;
	module.exports = function (it) {
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
/* 27 */
/***/ function(module, exports) {

	"use strict";

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function (it) {
	  if (it == undefined) throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var LIBRARY = __webpack_require__(29),
	    $export = __webpack_require__(30),
	    redefine = __webpack_require__(11),
	    hide = __webpack_require__(12),
	    has = __webpack_require__(22),
	    Iterators = __webpack_require__(33),
	    $iterCreate = __webpack_require__(34),
	    setToStringTag = __webpack_require__(47),
	    getPrototypeOf = __webpack_require__(48),
	    ITERATOR = __webpack_require__(7)('iterator'),
	    BUGGY = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
	,
	    FF_ITERATOR = '@@iterator',
	    KEYS = 'keys',
	    VALUES = 'values';

	var returnThis = function returnThis() {
	  return this;
	};

	module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
	  $iterCreate(Constructor, NAME, next);
	  var getMethod = function getMethod(kind) {
	    if (!BUGGY && kind in proto) return proto[kind];
	    switch (kind) {
	      case KEYS:
	        return function keys() {
	          return new Constructor(this, kind);
	        };
	      case VALUES:
	        return function values() {
	          return new Constructor(this, kind);
	        };
	    }return function entries() {
	      return new Constructor(this, kind);
	    };
	  };
	  var TAG = NAME + ' Iterator',
	      DEF_VALUES = DEFAULT == VALUES,
	      VALUES_BUG = false,
	      proto = Base.prototype,
	      $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT],
	      $default = $native || getMethod(DEFAULT),
	      $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined,
	      $anyNative = NAME == 'Array' ? proto.entries || $native : $native,
	      methods,
	      key,
	      IteratorPrototype;
	  // Fix native
	  if ($anyNative) {
	    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
	    if (IteratorPrototype !== Object.prototype) {
	      // Set @@toStringTag to native iterators
	      setToStringTag(IteratorPrototype, TAG, true);
	      // fix for some old engines
	      if (!LIBRARY && !has(IteratorPrototype, ITERATOR)) hide(IteratorPrototype, ITERATOR, returnThis);
	    }
	  }
	  // fix Array#{values, @@iterator}.name in V8 / FF
	  if (DEF_VALUES && $native && $native.name !== VALUES) {
	    VALUES_BUG = true;
	    $default = function values() {
	      return $native.call(this);
	    };
	  }
	  // Define iterator
	  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
	    hide(proto, ITERATOR, $default);
	  }
	  // Plug for library
	  Iterators[NAME] = $default;
	  Iterators[TAG] = returnThis;
	  if (DEFAULT) {
	    methods = {
	      values: DEF_VALUES ? $default : getMethod(VALUES),
	      keys: IS_SET ? $default : getMethod(KEYS),
	      entries: $entries
	    };
	    if (FORCED) for (key in methods) {
	      if (!(key in proto)) redefine(proto, key, methods[key]);
	    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
	  }
	  return methods;
	};

/***/ },
/* 29 */
/***/ function(module, exports) {

	"use strict";

	module.exports = false;

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var global = __webpack_require__(9),
	    core = __webpack_require__(23),
	    hide = __webpack_require__(12),
	    redefine = __webpack_require__(11),
	    ctx = __webpack_require__(31),
	    PROTOTYPE = 'prototype';

	var $export = function $export(type, name, source) {
	  var IS_FORCED = type & $export.F,
	      IS_GLOBAL = type & $export.G,
	      IS_STATIC = type & $export.S,
	      IS_PROTO = type & $export.P,
	      IS_BIND = type & $export.B,
	      target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE],
	      exports = IS_GLOBAL ? core : core[name] || (core[name] = {}),
	      expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {}),
	      key,
	      own,
	      out,
	      exp;
	  if (IS_GLOBAL) source = name;
	  for (key in source) {
	    // contains in native
	    own = !IS_FORCED && target && target[key] !== undefined;
	    // export native or passed
	    out = (own ? target : source)[key];
	    // bind timers to global for call from export context
	    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // extend global
	    if (target) redefine(target, key, out, type & $export.U);
	    // export
	    if (exports[key] != out) hide(exports, key, exp);
	    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
	  }
	};
	global.core = core;
	// type bitmap
	$export.F = 1; // forced
	$export.G = 2; // global
	$export.S = 4; // static
	$export.P = 8; // proto
	$export.B = 16; // bind
	$export.W = 32; // wrap
	$export.U = 64; // safe
	$export.R = 128; // real proto method for `library`
	module.exports = $export;

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// optional / simple context binding
	var aFunction = __webpack_require__(32);
	module.exports = function (fn, that, length) {
	  aFunction(fn);
	  if (that === undefined) return fn;
	  switch (length) {
	    case 1:
	      return function (a) {
	        return fn.call(that, a);
	      };
	    case 2:
	      return function (a, b) {
	        return fn.call(that, a, b);
	      };
	    case 3:
	      return function (a, b, c) {
	        return fn.call(that, a, b, c);
	      };
	  }
	  return function () /* ...args */{
	    return fn.apply(that, arguments);
	  };
	};

/***/ },
/* 32 */
/***/ function(module, exports) {

	'use strict';

	module.exports = function (it) {
	  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 33 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {};

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var create = __webpack_require__(35),
	    descriptor = __webpack_require__(21),
	    setToStringTag = __webpack_require__(47),
	    IteratorPrototype = {};

	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(12)(IteratorPrototype, __webpack_require__(7)('iterator'), function () {
	  return this;
	});

	module.exports = function (Constructor, NAME, next) {
	  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
	  setToStringTag(Constructor, NAME + ' Iterator');
	};

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	var anObject = __webpack_require__(14),
	    dPs = __webpack_require__(36),
	    enumBugKeys = __webpack_require__(45),
	    IE_PROTO = __webpack_require__(44)('IE_PROTO'),
	    Empty = function Empty() {/* empty */},
	    PROTOTYPE = 'prototype';

	// Create object with fake `null` prototype: use iframe Object with cleared prototype
	var _createDict = function createDict() {
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = __webpack_require__(19)('iframe'),
	      i = enumBugKeys.length,
	      gt = '>',
	      iframeDocument;
	  iframe.style.display = 'none';
	  __webpack_require__(46).appendChild(iframe);
	  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
	  // createDict = iframe.contentWindow.Object;
	  // html.removeChild(iframe);
	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write('<script>document.F=Object</script' + gt);
	  iframeDocument.close();
	  _createDict = iframeDocument.F;
	  while (i--) {
	    delete _createDict[PROTOTYPE][enumBugKeys[i]];
	  }return _createDict();
	};

	module.exports = Object.create || function create(O, Properties) {
	  var result;
	  if (O !== null) {
	    Empty[PROTOTYPE] = anObject(O);
	    result = new Empty();
	    Empty[PROTOTYPE] = null;
	    // add "__proto__" for Object.getPrototypeOf polyfill
	    result[IE_PROTO] = O;
	  } else result = _createDict();
	  return Properties === undefined ? result : dPs(result, Properties);
	};

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var dP = __webpack_require__(13),
	    anObject = __webpack_require__(14),
	    getKeys = __webpack_require__(37);

	module.exports = __webpack_require__(17) ? Object.defineProperties : function defineProperties(O, Properties) {
	  anObject(O);
	  var keys = getKeys(Properties),
	      length = keys.length,
	      i = 0,
	      P;
	  while (length > i) {
	    dP.f(O, P = keys[i++], Properties[P]);
	  }return O;
	};

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// 19.1.2.14 / 15.2.3.14 Object.keys(O)
	var $keys = __webpack_require__(38),
	    enumBugKeys = __webpack_require__(45);

	module.exports = Object.keys || function keys(O) {
	  return $keys(O, enumBugKeys);
	};

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var has = __webpack_require__(22),
	    toIObject = __webpack_require__(39),
	    arrayIndexOf = __webpack_require__(41)(false),
	    IE_PROTO = __webpack_require__(44)('IE_PROTO');

	module.exports = function (object, names) {
	  var O = toIObject(object),
	      i = 0,
	      result = [],
	      key;
	  for (key in O) {
	    if (key != IE_PROTO) has(O, key) && result.push(key);
	  } // Don't enum bug & hidden keys
	  while (names.length > i) {
	    if (has(O, key = names[i++])) {
	      ~arrayIndexOf(result, key) || result.push(key);
	    }
	  }return result;
	};

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(40),
	    defined = __webpack_require__(27);
	module.exports = function (it) {
	  return IObject(defined(it));
	};

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(6);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// false -> Array#indexOf
	// true  -> Array#includes
	var toIObject = __webpack_require__(39),
	    toLength = __webpack_require__(42),
	    toIndex = __webpack_require__(43);
	module.exports = function (IS_INCLUDES) {
	  return function ($this, el, fromIndex) {
	    var O = toIObject($this),
	        length = toLength(O.length),
	        index = toIndex(fromIndex, length),
	        value;
	    // Array#includes uses SameValueZero equality algorithm
	    if (IS_INCLUDES && el != el) while (length > index) {
	      value = O[index++];
	      if (value != value) return true;
	      // Array#toIndex ignores holes, Array#includes - not
	    } else for (; length > index; index++) {
	      if (IS_INCLUDES || index in O) {
	        if (O[index] === el) return IS_INCLUDES || index || 0;
	      }
	    }return !IS_INCLUDES && -1;
	  };
	};

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(26),
	    min = Math.min;
	module.exports = function (it) {
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var toInteger = __webpack_require__(26),
	    max = Math.max,
	    min = Math.min;
	module.exports = function (index, length) {
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var shared = __webpack_require__(8)('keys'),
	    uid = __webpack_require__(10);
	module.exports = function (key) {
	  return shared[key] || (shared[key] = uid(key));
	};

/***/ },
/* 45 */
/***/ function(module, exports) {

	'use strict';

	// IE 8- don't enum bug keys
	module.exports = 'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'.split(',');

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(9).document && document.documentElement;

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var def = __webpack_require__(13).f,
	    has = __webpack_require__(22),
	    TAG = __webpack_require__(7)('toStringTag');

	module.exports = function (it, tag, stat) {
	  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
	};

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
	var has = __webpack_require__(22),
	    toObject = __webpack_require__(49),
	    IE_PROTO = __webpack_require__(44)('IE_PROTO'),
	    ObjectProto = Object.prototype;

	module.exports = Object.getPrototypeOf || function (O) {
	  O = toObject(O);
	  if (has(O, IE_PROTO)) return O[IE_PROTO];
	  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
	    return O.constructor.prototype;
	  }return O instanceof Object ? ObjectProto : null;
	};

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(27);
	module.exports = function (it) {
	  return Object(defined(it));
	};

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var $iterators = __webpack_require__(51),
	    redefine = __webpack_require__(11),
	    global = __webpack_require__(9),
	    hide = __webpack_require__(12),
	    Iterators = __webpack_require__(33),
	    wks = __webpack_require__(7),
	    ITERATOR = wks('iterator'),
	    TO_STRING_TAG = wks('toStringTag'),
	    ArrayValues = Iterators.Array;

	for (var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++) {
	  var NAME = collections[i],
	      Collection = global[NAME],
	      proto = Collection && Collection.prototype,
	      key;
	  if (proto) {
	    if (!proto[ITERATOR]) hide(proto, ITERATOR, ArrayValues);
	    if (!proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
	    Iterators[NAME] = ArrayValues;
	    for (key in $iterators) {
	      if (!proto[key]) redefine(proto, key, $iterators[key], true);
	    }
	  }
	}

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var addToUnscopables = __webpack_require__(52),
	    step = __webpack_require__(53),
	    Iterators = __webpack_require__(33),
	    toIObject = __webpack_require__(39);

	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	module.exports = __webpack_require__(28)(Array, 'Array', function (iterated, kind) {
	  this._t = toIObject(iterated); // target
	  this._i = 0; // next index
	  this._k = kind; // kind
	  // 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	}, function () {
	  var O = this._t,
	      kind = this._k,
	      index = this._i++;
	  if (!O || index >= O.length) {
	    this._t = undefined;
	    return step(1);
	  }
	  if (kind == 'keys') return step(0, index);
	  if (kind == 'values') return step(0, O[index]);
	  return step(0, [index, O[index]]);
	}, 'values');

	// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
	Iterators.Arguments = Iterators.Array;

	addToUnscopables('keys');
	addToUnscopables('values');
	addToUnscopables('entries');

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// 22.1.3.31 Array.prototype[@@unscopables]
	var UNSCOPABLES = __webpack_require__(7)('unscopables'),
	    ArrayProto = Array.prototype;
	if (ArrayProto[UNSCOPABLES] == undefined) __webpack_require__(12)(ArrayProto, UNSCOPABLES, {});
	module.exports = function (key) {
	  ArrayProto[UNSCOPABLES][key] = true;
	};

/***/ },
/* 53 */
/***/ function(module, exports) {

	"use strict";

	module.exports = function (done, value) {
	  return { value: value, done: !!done };
	};

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var LIBRARY = __webpack_require__(29),
	    global = __webpack_require__(9),
	    ctx = __webpack_require__(31),
	    classof = __webpack_require__(5),
	    $export = __webpack_require__(30),
	    isObject = __webpack_require__(15),
	    anObject = __webpack_require__(14),
	    aFunction = __webpack_require__(32),
	    anInstance = __webpack_require__(55),
	    forOf = __webpack_require__(56),
	    setProto = __webpack_require__(60).set,
	    speciesConstructor = __webpack_require__(63),
	    task = __webpack_require__(64).set,
	    microtask = __webpack_require__(66)(),
	    PROMISE = 'Promise',
	    TypeError = global.TypeError,
	    process = global.process,
	    $Promise = global[PROMISE],
	    process = global.process,
	    isNode = classof(process) == 'process',
	    empty = function empty() {/* empty */},
	    Internal,
	    GenericPromiseCapability,
	    Wrapper;

	var USE_NATIVE = !!function () {
	  try {
	    // correct subclassing with @@species support
	    var promise = $Promise.resolve(1),
	        FakePromise = (promise.constructor = {})[__webpack_require__(7)('species')] = function (exec) {
	      exec(empty, empty);
	    };
	    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
	    return (isNode || typeof PromiseRejectionEvent == 'function') && promise.then(empty) instanceof FakePromise;
	  } catch (e) {/* empty */}
	}();

	// helpers
	var sameConstructor = function sameConstructor(a, b) {
	  // with library wrapper special case
	  return a === b || a === $Promise && b === Wrapper;
	};
	var isThenable = function isThenable(it) {
	  var then;
	  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
	};
	var newPromiseCapability = function newPromiseCapability(C) {
	  return sameConstructor($Promise, C) ? new PromiseCapability(C) : new GenericPromiseCapability(C);
	};
	var PromiseCapability = GenericPromiseCapability = function GenericPromiseCapability(C) {
	  var resolve, reject;
	  this.promise = new C(function ($$resolve, $$reject) {
	    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
	    resolve = $$resolve;
	    reject = $$reject;
	  });
	  this.resolve = aFunction(resolve);
	  this.reject = aFunction(reject);
	};
	var perform = function perform(exec) {
	  try {
	    exec();
	  } catch (e) {
	    return { error: e };
	  }
	};
	var notify = function notify(promise, isReject) {
	  if (promise._n) return;
	  promise._n = true;
	  var chain = promise._c;
	  microtask(function () {
	    var value = promise._v,
	        ok = promise._s == 1,
	        i = 0;
	    var run = function run(reaction) {
	      var handler = ok ? reaction.ok : reaction.fail,
	          resolve = reaction.resolve,
	          reject = reaction.reject,
	          domain = reaction.domain,
	          result,
	          then;
	      try {
	        if (handler) {
	          if (!ok) {
	            if (promise._h == 2) onHandleUnhandled(promise);
	            promise._h = 1;
	          }
	          if (handler === true) result = value;else {
	            if (domain) domain.enter();
	            result = handler(value);
	            if (domain) domain.exit();
	          }
	          if (result === reaction.promise) {
	            reject(TypeError('Promise-chain cycle'));
	          } else if (then = isThenable(result)) {
	            then.call(result, resolve, reject);
	          } else resolve(result);
	        } else reject(value);
	      } catch (e) {
	        reject(e);
	      }
	    };
	    while (chain.length > i) {
	      run(chain[i++]);
	    } // variable length - can't use forEach
	    promise._c = [];
	    promise._n = false;
	    if (isReject && !promise._h) onUnhandled(promise);
	  });
	};
	var onUnhandled = function onUnhandled(promise) {
	  task.call(global, function () {
	    var value = promise._v,
	        abrupt,
	        handler,
	        console;
	    if (isUnhandled(promise)) {
	      abrupt = perform(function () {
	        if (isNode) {
	          process.emit('unhandledRejection', value, promise);
	        } else if (handler = global.onunhandledrejection) {
	          handler({ promise: promise, reason: value });
	        } else if ((console = global.console) && console.error) {
	          console.error('Unhandled promise rejection', value);
	        }
	      });
	      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
	      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
	    }promise._a = undefined;
	    if (abrupt) throw abrupt.error;
	  });
	};
	var isUnhandled = function isUnhandled(promise) {
	  if (promise._h == 1) return false;
	  var chain = promise._a || promise._c,
	      i = 0,
	      reaction;
	  while (chain.length > i) {
	    reaction = chain[i++];
	    if (reaction.fail || !isUnhandled(reaction.promise)) return false;
	  }return true;
	};
	var onHandleUnhandled = function onHandleUnhandled(promise) {
	  task.call(global, function () {
	    var handler;
	    if (isNode) {
	      process.emit('rejectionHandled', promise);
	    } else if (handler = global.onrejectionhandled) {
	      handler({ promise: promise, reason: promise._v });
	    }
	  });
	};
	var $reject = function $reject(value) {
	  var promise = this;
	  if (promise._d) return;
	  promise._d = true;
	  promise = promise._w || promise; // unwrap
	  promise._v = value;
	  promise._s = 2;
	  if (!promise._a) promise._a = promise._c.slice();
	  notify(promise, true);
	};
	var $resolve = function $resolve(value) {
	  var promise = this,
	      then;
	  if (promise._d) return;
	  promise._d = true;
	  promise = promise._w || promise; // unwrap
	  try {
	    if (promise === value) throw TypeError("Promise can't be resolved itself");
	    if (then = isThenable(value)) {
	      microtask(function () {
	        var wrapper = { _w: promise, _d: false }; // wrap
	        try {
	          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
	        } catch (e) {
	          $reject.call(wrapper, e);
	        }
	      });
	    } else {
	      promise._v = value;
	      promise._s = 1;
	      notify(promise, false);
	    }
	  } catch (e) {
	    $reject.call({ _w: promise, _d: false }, e); // wrap
	  }
	};

	// constructor polyfill
	if (!USE_NATIVE) {
	  // 25.4.3.1 Promise(executor)
	  $Promise = function Promise(executor) {
	    anInstance(this, $Promise, PROMISE, '_h');
	    aFunction(executor);
	    Internal.call(this);
	    try {
	      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
	    } catch (err) {
	      $reject.call(this, err);
	    }
	  };
	  Internal = function Promise(executor) {
	    this._c = []; // <- awaiting reactions
	    this._a = undefined; // <- checked in isUnhandled reactions
	    this._s = 0; // <- state
	    this._d = false; // <- done
	    this._v = undefined; // <- value
	    this._h = 0; // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
	    this._n = false; // <- notify
	  };
	  Internal.prototype = __webpack_require__(67)($Promise.prototype, {
	    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
	    then: function then(onFulfilled, onRejected) {
	      var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
	      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
	      reaction.fail = typeof onRejected == 'function' && onRejected;
	      reaction.domain = isNode ? process.domain : undefined;
	      this._c.push(reaction);
	      if (this._a) this._a.push(reaction);
	      if (this._s) notify(this, false);
	      return reaction.promise;
	    },
	    // 25.4.5.1 Promise.prototype.catch(onRejected)
	    'catch': function _catch(onRejected) {
	      return this.then(undefined, onRejected);
	    }
	  });
	  PromiseCapability = function PromiseCapability() {
	    var promise = new Internal();
	    this.promise = promise;
	    this.resolve = ctx($resolve, promise, 1);
	    this.reject = ctx($reject, promise, 1);
	  };
	}

	$export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });
	__webpack_require__(47)($Promise, PROMISE);
	__webpack_require__(68)(PROMISE);
	Wrapper = __webpack_require__(23)[PROMISE];

	// statics
	$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
	  // 25.4.4.5 Promise.reject(r)
	  reject: function reject(r) {
	    var capability = newPromiseCapability(this),
	        $$reject = capability.reject;
	    $$reject(r);
	    return capability.promise;
	  }
	});
	$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
	  // 25.4.4.6 Promise.resolve(x)
	  resolve: function resolve(x) {
	    // instanceof instead of internal slot check because we should fix it without replacement native Promise core
	    if (x instanceof $Promise && sameConstructor(x.constructor, this)) return x;
	    var capability = newPromiseCapability(this),
	        $$resolve = capability.resolve;
	    $$resolve(x);
	    return capability.promise;
	  }
	});
	$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(69)(function (iter) {
	  $Promise.all(iter)['catch'](empty);
	})), PROMISE, {
	  // 25.4.4.1 Promise.all(iterable)
	  all: function all(iterable) {
	    var C = this,
	        capability = newPromiseCapability(C),
	        resolve = capability.resolve,
	        reject = capability.reject;
	    var abrupt = perform(function () {
	      var values = [],
	          index = 0,
	          remaining = 1;
	      forOf(iterable, false, function (promise) {
	        var $index = index++,
	            alreadyCalled = false;
	        values.push(undefined);
	        remaining++;
	        C.resolve(promise).then(function (value) {
	          if (alreadyCalled) return;
	          alreadyCalled = true;
	          values[$index] = value;
	          --remaining || resolve(values);
	        }, reject);
	      });
	      --remaining || resolve(values);
	    });
	    if (abrupt) reject(abrupt.error);
	    return capability.promise;
	  },
	  // 25.4.4.4 Promise.race(iterable)
	  race: function race(iterable) {
	    var C = this,
	        capability = newPromiseCapability(C),
	        reject = capability.reject;
	    var abrupt = perform(function () {
	      forOf(iterable, false, function (promise) {
	        C.resolve(promise).then(capability.resolve, reject);
	      });
	    });
	    if (abrupt) reject(abrupt.error);
	    return capability.promise;
	  }
	});

/***/ },
/* 55 */
/***/ function(module, exports) {

	'use strict';

	module.exports = function (it, Constructor, name, forbiddenField) {
	  if (!(it instanceof Constructor) || forbiddenField !== undefined && forbiddenField in it) {
	    throw TypeError(name + ': incorrect invocation!');
	  }return it;
	};

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var ctx = __webpack_require__(31),
	    call = __webpack_require__(57),
	    isArrayIter = __webpack_require__(58),
	    anObject = __webpack_require__(14),
	    toLength = __webpack_require__(42),
	    getIterFn = __webpack_require__(59),
	    BREAK = {},
	    RETURN = {};
	var _exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
	  var iterFn = ITERATOR ? function () {
	    return iterable;
	  } : getIterFn(iterable),
	      f = ctx(fn, that, entries ? 2 : 1),
	      index = 0,
	      length,
	      step,
	      iterator,
	      result;
	  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
	  // fast case for arrays with default iterator
	  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
	    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
	    if (result === BREAK || result === RETURN) return result;
	  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
	    result = call(iterator, f, step.value, entries);
	    if (result === BREAK || result === RETURN) return result;
	  }
	};
	_exports.BREAK = BREAK;
	_exports.RETURN = RETURN;

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// call something on iterator step with safe closing on error
	var anObject = __webpack_require__(14);
	module.exports = function (iterator, fn, value, entries) {
	  try {
	    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
	    // 7.4.6 IteratorClose(iterator, completion)
	  } catch (e) {
	    var ret = iterator['return'];
	    if (ret !== undefined) anObject(ret.call(iterator));
	    throw e;
	  }
	};

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// check on default Array iterator
	var Iterators = __webpack_require__(33),
	    ITERATOR = __webpack_require__(7)('iterator'),
	    ArrayProto = Array.prototype;

	module.exports = function (it) {
	  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
	};

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var classof = __webpack_require__(5),
	    ITERATOR = __webpack_require__(7)('iterator'),
	    Iterators = __webpack_require__(33);
	module.exports = __webpack_require__(23).getIteratorMethod = function (it) {
	  if (it != undefined) return it[ITERATOR] || it['@@iterator'] || Iterators[classof(it)];
	};

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// Works with __proto__ only. Old v8 can't work with null proto objects.
	/* eslint-disable no-proto */
	var isObject = __webpack_require__(15),
	    anObject = __webpack_require__(14);
	var check = function check(O, proto) {
	  anObject(O);
	  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
	};
	module.exports = {
	  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
	  function (test, buggy, set) {
	    try {
	      set = __webpack_require__(31)(Function.call, __webpack_require__(61).f(Object.prototype, '__proto__').set, 2);
	      set(test, []);
	      buggy = !(test instanceof Array);
	    } catch (e) {
	      buggy = true;
	    }
	    return function setPrototypeOf(O, proto) {
	      check(O, proto);
	      if (buggy) O.__proto__ = proto;else set(O, proto);
	      return O;
	    };
	  }({}, false) : undefined),
	  check: check
	};

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var pIE = __webpack_require__(62),
	    createDesc = __webpack_require__(21),
	    toIObject = __webpack_require__(39),
	    toPrimitive = __webpack_require__(20),
	    has = __webpack_require__(22),
	    IE8_DOM_DEFINE = __webpack_require__(16),
	    gOPD = Object.getOwnPropertyDescriptor;

	exports.f = __webpack_require__(17) ? gOPD : function getOwnPropertyDescriptor(O, P) {
	  O = toIObject(O);
	  P = toPrimitive(P, true);
	  if (IE8_DOM_DEFINE) try {
	    return gOPD(O, P);
	  } catch (e) {/* empty */}
	  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
	};

/***/ },
/* 62 */
/***/ function(module, exports) {

	"use strict";

	exports.f = {}.propertyIsEnumerable;

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// 7.3.20 SpeciesConstructor(O, defaultConstructor)
	var anObject = __webpack_require__(14),
	    aFunction = __webpack_require__(32),
	    SPECIES = __webpack_require__(7)('species');
	module.exports = function (O, D) {
	  var C = anObject(O).constructor,
	      S;
	  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
	};

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var ctx = __webpack_require__(31),
	    invoke = __webpack_require__(65),
	    html = __webpack_require__(46),
	    cel = __webpack_require__(19),
	    global = __webpack_require__(9),
	    process = global.process,
	    setTask = global.setImmediate,
	    clearTask = global.clearImmediate,
	    MessageChannel = global.MessageChannel,
	    counter = 0,
	    queue = {},
	    ONREADYSTATECHANGE = 'onreadystatechange',
	    defer,
	    channel,
	    port;
	var run = function run() {
	  var id = +this;
	  if (queue.hasOwnProperty(id)) {
	    var fn = queue[id];
	    delete queue[id];
	    fn();
	  }
	};
	var listener = function listener(event) {
	  run.call(event.data);
	};
	// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
	if (!setTask || !clearTask) {
	  setTask = function setImmediate(fn) {
	    var args = [],
	        i = 1;
	    while (arguments.length > i) {
	      args.push(arguments[i++]);
	    }queue[++counter] = function () {
	      invoke(typeof fn == 'function' ? fn : Function(fn), args);
	    };
	    defer(counter);
	    return counter;
	  };
	  clearTask = function clearImmediate(id) {
	    delete queue[id];
	  };
	  // Node.js 0.8-
	  if (__webpack_require__(6)(process) == 'process') {
	    defer = function defer(id) {
	      process.nextTick(ctx(run, id, 1));
	    };
	    // Browsers with MessageChannel, includes WebWorkers
	  } else if (MessageChannel) {
	    channel = new MessageChannel();
	    port = channel.port2;
	    channel.port1.onmessage = listener;
	    defer = ctx(port.postMessage, port, 1);
	    // Browsers with postMessage, skip WebWorkers
	    // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
	  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
	    defer = function defer(id) {
	      global.postMessage(id + '', '*');
	    };
	    global.addEventListener('message', listener, false);
	    // IE8-
	  } else if (ONREADYSTATECHANGE in cel('script')) {
	    defer = function defer(id) {
	      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
	        html.removeChild(this);
	        run.call(id);
	      };
	    };
	    // Rest old browsers
	  } else {
	    defer = function defer(id) {
	      setTimeout(ctx(run, id, 1), 0);
	    };
	  }
	}
	module.exports = {
	  set: setTask,
	  clear: clearTask
	};

/***/ },
/* 65 */
/***/ function(module, exports) {

	"use strict";

	// fast apply, http://jsperf.lnkit.com/fast-apply/5
	module.exports = function (fn, args, that) {
	                  var un = that === undefined;
	                  switch (args.length) {
	                                    case 0:
	                                                      return un ? fn() : fn.call(that);
	                                    case 1:
	                                                      return un ? fn(args[0]) : fn.call(that, args[0]);
	                                    case 2:
	                                                      return un ? fn(args[0], args[1]) : fn.call(that, args[0], args[1]);
	                                    case 3:
	                                                      return un ? fn(args[0], args[1], args[2]) : fn.call(that, args[0], args[1], args[2]);
	                                    case 4:
	                                                      return un ? fn(args[0], args[1], args[2], args[3]) : fn.call(that, args[0], args[1], args[2], args[3]);
	                  }return fn.apply(that, args);
	};

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var global = __webpack_require__(9),
	    macrotask = __webpack_require__(64).set,
	    Observer = global.MutationObserver || global.WebKitMutationObserver,
	    process = global.process,
	    Promise = global.Promise,
	    isNode = __webpack_require__(6)(process) == 'process';

	module.exports = function () {
	  var head, last, notify;

	  var flush = function flush() {
	    var parent, fn;
	    if (isNode && (parent = process.domain)) parent.exit();
	    while (head) {
	      fn = head.fn;
	      head = head.next;
	      try {
	        fn();
	      } catch (e) {
	        if (head) notify();else last = undefined;
	        throw e;
	      }
	    }last = undefined;
	    if (parent) parent.enter();
	  };

	  // Node.js
	  if (isNode) {
	    notify = function notify() {
	      process.nextTick(flush);
	    };
	    // browsers with MutationObserver
	  } else if (Observer) {
	    var toggle = true,
	        node = document.createTextNode('');
	    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
	    notify = function notify() {
	      node.data = toggle = !toggle;
	    };
	    // environments with maybe non-completely correct, but existent Promise
	  } else if (Promise && Promise.resolve) {
	    var promise = Promise.resolve();
	    notify = function notify() {
	      promise.then(flush);
	    };
	    // for other environments - macrotask based on:
	    // - setImmediate
	    // - MessageChannel
	    // - window.postMessag
	    // - onreadystatechange
	    // - setTimeout
	  } else {
	    notify = function notify() {
	      // strange IE + webpack dev server bug - use .call(global)
	      macrotask.call(global, flush);
	    };
	  }

	  return function (fn) {
	    var task = { fn: fn, next: undefined };
	    if (last) last.next = task;
	    if (!head) {
	      head = task;
	      notify();
	    }last = task;
	  };
	};

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var redefine = __webpack_require__(11);
	module.exports = function (target, src, safe) {
	  for (var key in src) {
	    redefine(target, key, src[key], safe);
	  }return target;
	};

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var global = __webpack_require__(9),
	    dP = __webpack_require__(13),
	    DESCRIPTORS = __webpack_require__(17),
	    SPECIES = __webpack_require__(7)('species');

	module.exports = function (KEY) {
	  var C = global[KEY];
	  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
	    configurable: true,
	    get: function get() {
	      return this;
	    }
	  });
	};

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var ITERATOR = __webpack_require__(7)('iterator'),
	    SAFE_CLOSING = false;

	try {
	  var riter = [7][ITERATOR]();
	  riter['return'] = function () {
	    SAFE_CLOSING = true;
	  };
	  Array.from(riter, function () {
	    throw 2;
	  });
	} catch (e) {/* empty */}

	module.exports = function (exec, skipClosing) {
	  if (!skipClosing && !SAFE_CLOSING) return false;
	  var safe = false;
	  try {
	    var arr = [7],
	        iter = arr[ITERATOR]();
	    iter.next = function () {
	      return { done: safe = true };
	    };
	    arr[ITERATOR] = function () {
	      return iter;
	    };
	    exec(arr);
	  } catch (e) {/* empty */}
	  return safe;
	};

/***/ },
/* 70 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	var _global = global;
	var console = _global.console;
	var nativeLog = _global.nativeLog;

	var LEVELS = ['error', 'warn', 'info', 'log', 'debug'];
	var levelMap = {};

	generateLevelMap();

	/* istanbul ignore if */
	if (typeof console === 'undefined' || // Android
	global.WXEnvironment && global.WXEnvironment.platform === 'iOS' // iOS
	) {
	    global.console = {
	      debug: function debug() {
	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	          args[_key] = arguments[_key];
	        }

	        if (checkLevel('debug')) {
	          nativeLog.apply(undefined, _toConsumableArray(format(args)).concat(['__DEBUG']));
	        }
	      },
	      log: function log() {
	        for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	          args[_key2] = arguments[_key2];
	        }

	        if (checkLevel('log')) {
	          nativeLog.apply(undefined, _toConsumableArray(format(args)).concat(['__LOG']));
	        }
	      },
	      info: function info() {
	        for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
	          args[_key3] = arguments[_key3];
	        }

	        if (checkLevel('info')) {
	          nativeLog.apply(undefined, _toConsumableArray(format(args)).concat(['__INFO']));
	        }
	      },
	      warn: function warn() {
	        for (var _len4 = arguments.length, args = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
	          args[_key4] = arguments[_key4];
	        }

	        if (checkLevel('warn')) {
	          nativeLog.apply(undefined, _toConsumableArray(format(args)).concat(['__WARN']));
	        }
	      },
	      error: function error() {
	        for (var _len5 = arguments.length, args = Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
	          args[_key5] = arguments[_key5];
	        }

	        if (checkLevel('error')) {
	          nativeLog.apply(undefined, _toConsumableArray(format(args)).concat(['__ERROR']));
	        }
	      }
	    };
	  } else {
	  // HTML5
	  var debug = console.debug;
	  var log = console.log;
	  var info = console.info;
	  var warn = console.warn;
	  var error = console.error;

	  console.__ori__ = { debug: debug, log: log, info: info, warn: warn, error: error };
	  console.debug = function () {
	    for (var _len6 = arguments.length, args = Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
	      args[_key6] = arguments[_key6];
	    }

	    if (checkLevel('debug')) {
	      console.__ori__.debug.apply(console, args);
	    }
	  };
	  console.log = function () {
	    for (var _len7 = arguments.length, args = Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
	      args[_key7] = arguments[_key7];
	    }

	    if (checkLevel('log')) {
	      console.__ori__.log.apply(console, args);
	    }
	  };
	  console.info = function () {
	    for (var _len8 = arguments.length, args = Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
	      args[_key8] = arguments[_key8];
	    }

	    if (checkLevel('info')) {
	      console.__ori__.info.apply(console, args);
	    }
	  };
	  console.warn = function () {
	    for (var _len9 = arguments.length, args = Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {
	      args[_key9] = arguments[_key9];
	    }

	    if (checkLevel('warn')) {
	      console.__ori__.warn.apply(console, args);
	    }
	  };
	  console.error = function () {
	    for (var _len10 = arguments.length, args = Array(_len10), _key10 = 0; _key10 < _len10; _key10++) {
	      args[_key10] = arguments[_key10];
	    }

	    if (checkLevel('error')) {
	      console.__ori__.error.apply(console, args);
	    }
	  };
	}

	function generateLevelMap() {
	  LEVELS.forEach(function (level) {
	    var levelIndex = LEVELS.indexOf(level);
	    levelMap[level] = {};
	    LEVELS.forEach(function (type) {
	      var typeIndex = LEVELS.indexOf(type);
	      if (typeIndex <= levelIndex) {
	        levelMap[level][type] = true;
	      }
	    });
	  });
	}

	function checkLevel(type) {
	  var logLevel = global.WXEnvironment && global.WXEnvironment.logLevel || 'log';
	  return levelMap[logLevel] && levelMap[logLevel][type];
	}

	function format(args) {
	  return args.map(function (v) {
	    var type = Object.prototype.toString.call(v);
	    if (type.toLowerCase() === '[object object]') {
	      v = JSON.stringify(v);
	    } else {
	      v = String(v);
	    }
	    return v;
	  });
	}
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.createInstance = createInstance;

	var _config = __webpack_require__(72);

	var _config2 = _interopRequireDefault(_config);

	var _vdom = __webpack_require__(94);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var config = {
	  Document: _vdom.Document, Element: _vdom.Element, Comment: _vdom.Comment,
	  sendTasks: function sendTasks() {
	    var _global;

	    return (_global = global).callNative.apply(_global, arguments);
	  }
	};

	for (var name in _config2.default) {
	  var framework = _config2.default[name];
	  framework.init(config);
	}

	var versionRegExp = /^\/\/ *(\{[^\}]*\}) *\r?\n/;

	function checkVersion(code) {
	  var info = void 0;
	  var result = versionRegExp.exec(code);
	  if (result) {
	    try {
	      info = JSON.parse(result[1]);
	    } catch (e) {}
	  }
	  return info;
	}

	var instanceMap = {};

	global.instanceMap = {};

	function createInstance(id, code, config, data) {
	  var info = instanceMap[id];
	  if (!info) {
	    info = checkVersion(code) || {};
	    if (!_config2.default[info.framework]) {
	      info.framework = 'Weex';
	    }
	    instanceMap[id] = info;
	    config = config || {};
	    config.bundleVersion = info.version;
	    console.debug('[JS Framework] create an ' + info.framework + '@' + config.bundleVersion + ' instance from ' + config.bundleVersion);
	    return _config2.default[info.framework].createInstance(id, code, config, data);
	  }
	  return new Error('invalid instance id "' + id + '"');
	}

	var methods = {
	  createInstance: createInstance
	};

	function genInit(methodName) {
	  methods[methodName] = function () {
	    for (var _name in _config2.default) {
	      var _framework = _config2.default[_name];
	      if (_framework && _framework[methodName]) {
	        _framework[methodName].apply(_framework, arguments);
	      }
	    }
	  };
	}

	['registerComponents', 'registerModules', 'registerMethods'].forEach(genInit);

	function genInstance(methodName) {
	  methods[methodName] = function () {
	    var id = arguments.length <= 0 ? undefined : arguments[0];
	    var info = instanceMap[id];
	    if (info && _config2.default[info.framework]) {
	      var _frameworks$info$fram;

	      return (_frameworks$info$fram = _config2.default[info.framework])[methodName].apply(_frameworks$info$fram, arguments);
	    }
	    return new Error('invalid instance id "' + id + '"');
	  };
	}

	['destroyInstance', 'refreshInstance', 'receiveTasks', 'getRoot'].forEach(genInstance);

	function adaptInstance(methodName, nativeMethodName) {
	  methods[nativeMethodName] = function () {
	    var id = arguments.length <= 0 ? undefined : arguments[0];
	    var info = instanceMap[id];
	    if (info && _config2.default[info.framework]) {
	      var _frameworks$info$fram2;

	      return (_frameworks$info$fram2 = _config2.default[info.framework])[methodName].apply(_frameworks$info$fram2, arguments);
	    }
	    return new Error('invalid instance id "' + id + '"');
	  };
	}

	adaptInstance('receiveTasks', 'callJS');

	exports.default = methods;
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _default = __webpack_require__(73);

	var Weex = _interopRequireWildcard(_default);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	exports.default = {
	  Weex: Weex
	}; // built by npm run build:config

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; }; /**
	                                                                                                                                                                                                                                                   * @fileOverview Main entry, instance manager
	                                                                                                                                                                                                                                                   *
	                                                                                                                                                                                                                                                   * - createInstance(instanceId, code, options, data)
	                                                                                                                                                                                                                                                   * - refreshInstance(instanceId, data)
	                                                                                                                                                                                                                                                   * - destroyInstance(instanceId)
	                                                                                                                                                                                                                                                   * - registerComponents(components)
	                                                                                                                                                                                                                                                   * - registerModules(modules)
	                                                                                                                                                                                                                                                   * - getRoot(instanceId)
	                                                                                                                                                                                                                                                   * - instanceMap
	                                                                                                                                                                                                                                                   * - callJS(instanceId, tasks)
	                                                                                                                                                                                                                                                   *   - fireEvent(ref, type, data)
	                                                                                                                                                                                                                                                   *   - callback(funcId, data)
	                                                                                                                                                                                                                                                   */

	/**

	  another way to createInstance(id, code, options, data)

	  ----

	  // first:
	  global.createInstance(id, '', options, data)

	  ----

	  // second:
	  var instance = global.instanceMap[id]
	  var env = instance.env

	  ;(function (
	    __weex_define__,
	    __weex_bootstrap__,
	    __weex_document__,
	    setTimeout,
	    clearTimeout,
	    setInterval,
	    clearInterval
	  ) {
	    // {{code}}
	  })(
	    env.bundleDefine,
	    env.bundleBootstrap,
	    env.bundleDocument,
	    env.setTimeout,
	    env.clearTimeout,
	    env.setInterval,
	    env.clearInterval
	  )

	 */

	exports.init = init;
	exports.createInstance = createInstance;
	exports.refreshInstance = refreshInstance;
	exports.destroyInstance = destroyInstance;
	exports.registerComponents = registerComponents;
	exports.registerModules = registerModules;
	exports.registerMethods = registerMethods;
	exports.getRoot = getRoot;
	exports.receiveTasks = receiveTasks;

	var _config = __webpack_require__(74);

	var _config2 = _interopRequireDefault(_config);

	var _app = __webpack_require__(75);

	var _app2 = _interopRequireDefault(_app);

	var _vm = __webpack_require__(81);

	var _vm2 = _interopRequireDefault(_vm);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	var nativeComponentMap = _config2.default.nativeComponentMap;

	var instanceMap = {};

	function init(cfg) {
	  _config2.default.Document = cfg.Document;
	  _config2.default.Element = cfg.Element;
	  _config2.default.Comment = cfg.Comment;
	  _config2.default.sendTasks = cfg.sendTasks;
	}

	/**
	 * create a Weex instance
	 *
	 * @param  {string} instanceId
	 * @param  {string} code
	 * @param  {object} [options] option `HAS_LOG` enable print log
	 * @param  {object} [data]
	 */
	function createInstance(instanceId, code, options, data) {
	  var instance = instanceMap[instanceId];
	  options = options || {};

	  var result = void 0;
	  if (!instance) {
	    instance = new _app2.default(instanceId, options);
	    instanceMap[instanceId] = instance;
	    result = instance.init(code, data);
	    global.instanceMap[instanceId] = instance;
	  } else {
	    result = new Error('invalid instance id "' + instanceId + '"');
	  }

	  return result;
	}

	/**
	 * refresh a Weex instance
	 *
	 * @param  {string} instanceId
	 * @param  {object} data
	 */
	function refreshInstance(instanceId, data) {
	  var instance = instanceMap[instanceId];
	  var result = void 0;
	  if (instance) {
	    result = instance.refreshData(data);
	  } else {
	    result = new Error('invalid instance id "' + instanceId + '"');
	  }
	  return result;
	}

	/**
	 * destroy a Weex instance
	 * @param  {string} instanceId
	 */
	function destroyInstance(instanceId) {
	  var instance = instanceMap[instanceId];
	  if (!instance) {
	    return new Error('invalid instance id "' + instanceId + '"');
	  }

	  instance.destroy();
	  delete instanceMap[instanceId];
	  return instanceMap;
	}

	/**
	 * register the name of each native component
	 * @param  {array} components array of name
	 */
	function registerComponents(components) {
	  if (Array.isArray(components)) {
	    components.forEach(function register(name) {
	      /* istanbul ignore if */
	      if (!name) {
	        return;
	      }
	      if (typeof name === 'string') {
	        nativeComponentMap[name] = true;
	      } else if ((typeof name === 'undefined' ? 'undefined' : _typeof(name)) === 'object' && typeof name.type === 'string') {
	        nativeComponentMap[name.type] = name;
	      }
	    });
	  }
	}

	/**
	 * register the name and methods of each module
	 * @param  {object} modules a object of modules
	 */
	function registerModules(modules) {
	  if ((typeof modules === 'undefined' ? 'undefined' : _typeof(modules)) === 'object') {
	    _vm2.default.registerModules(modules);
	  }
	}

	/**
	 * register the name and methods of each api
	 * @param  {object} apis a object of apis
	 */
	function registerMethods(apis) {
	  if ((typeof apis === 'undefined' ? 'undefined' : _typeof(apis)) === 'object') {
	    _vm2.default.registerMethods(apis);
	  }
	}
	global.registerMethods = registerMethods;

	/**
	 * get a whole element tree of an instance
	 * for debugging
	 * @param  {string} instanceId
	 * @return {object} a virtual dom tree
	 */
	function getRoot(instanceId) {
	  var instance = instanceMap[instanceId];
	  var result = void 0;
	  if (instance) {
	    result = instance.getRootElement();
	  } else {
	    result = new Error('invalid instance id "' + instanceId + '"');
	  }
	  return result;
	}

	var jsHandlers = {
	  fireEvent: function fireEvent(instanceId, ref, type, data, domChanges) {
	    var instance = instanceMap[instanceId];
	    return instance.fireEvent(ref, type, data, domChanges);
	  },

	  callback: function callback(instanceId, funcId, data, ifLast) {
	    var instance = instanceMap[instanceId];
	    return instance.callback(funcId, data, ifLast);
	  }
	};

	/**
	 * accept calls from native (event or callback)
	 *
	 * @param  {string} instanceId
	 * @param  {array} tasks list with `method` and `args`
	 */
	function receiveTasks(instanceId, tasks) {
	  var instance = instanceMap[instanceId];
	  if (instance && Array.isArray(tasks)) {
	    var _ret = function () {
	      var results = [];
	      tasks.forEach(function (task) {
	        var handler = jsHandlers[task.method];
	        var args = [].concat(_toConsumableArray(task.args));
	        if (typeof handler === 'function') {
	          args.unshift(instanceId);
	          results.push(handler.apply(undefined, _toConsumableArray(args)));
	        }
	      });
	      return {
	        v: results
	      };
	    }();

	    if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
	  }
	  return new Error('invalid instance id "' + instanceId + '" or tasks');
	}
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 74 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  nativeComponentMap: {
	    text: true,
	    image: true,
	    container: true,
	    slider: {
	      type: 'slider',
	      append: 'tree'
	    },
	    cell: {
	      type: 'cell',
	      append: 'tree'
	    }
	  }
	};

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = AppInstance;

	var _util = __webpack_require__(76);

	var _ctrl = __webpack_require__(77);

	var ctrl = _interopRequireWildcard(_ctrl);

	var _differ = __webpack_require__(93);

	var _differ2 = _interopRequireDefault(_differ);

	var _config = __webpack_require__(74);

	var _config2 = _interopRequireDefault(_config);

	var _register = __webpack_require__(91);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function AppInstance(instanceId, options) {
	  this.id = instanceId;
	  this.options = options || {};
	  this.vm = null;
	  this.customComponentMap = {};
	  this.callbacks = {};
	  this.doc = new _config2.default.Document(instanceId, this.options.bundleUrl);
	  this.differ = new _differ2.default(instanceId);
	  this.uid = 0;
	} /**
	   * @fileOverview
	   * Weex instance constructor & definition
	   */

	function normalize(app, v) {
	  var type = (0, _util.typof)(v);

	  switch (type) {
	    case 'undefined':
	    case 'null':
	      return '';
	    case 'regexp':
	      return v.toString();
	    case 'date':
	      return v.toISOString();
	    case 'number':
	    case 'string':
	    case 'boolean':
	    case 'array':
	    case 'object':
	      if (v instanceof _config2.default.Element) {
	        return v.ref;
	      }
	      return v;
	    case 'function':
	      app.callbacks[++app.uid] = v;
	      return app.uid.toString();
	    default:
	      return JSON.stringify(v);
	  }
	}

	AppInstance.prototype.callTasks = function (tasks) {
	  var _this = this;

	  if ((0, _util.typof)(tasks) !== 'array') {
	    tasks = [tasks];
	  }

	  tasks.forEach(function (task) {
	    task.args = task.args.map(function (arg) {
	      return normalize(_this, arg);
	    });
	  });

	  return _config2.default.sendTasks(this.id, tasks, '-1');
	};

	(0, _util.extend)(AppInstance.prototype, ctrl, {
	  registerComponent: _register.registerComponent,
	  requireComponent: _register.requireComponent,
	  requireModule: _register.requireModule
	});

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _shared = __webpack_require__(1);

	Object.defineProperty(exports, 'extend', {
	  enumerable: true,
	  get: function get() {
	    return _shared.extend;
	  }
	});
	Object.defineProperty(exports, 'def', {
	  enumerable: true,
	  get: function get() {
	    return _shared.def;
	  }
	});
	Object.defineProperty(exports, 'remove', {
	  enumerable: true,
	  get: function get() {
	    return _shared.remove;
	  }
	});
	Object.defineProperty(exports, 'hasOwn', {
	  enumerable: true,
	  get: function get() {
	    return _shared.hasOwn;
	  }
	});
	Object.defineProperty(exports, 'bind', {
	  enumerable: true,
	  get: function get() {
	    return _shared.bind;
	  }
	});
	Object.defineProperty(exports, 'toArray', {
	  enumerable: true,
	  get: function get() {
	    return _shared.toArray;
	  }
	});
	Object.defineProperty(exports, 'isObject', {
	  enumerable: true,
	  get: function get() {
	    return _shared.isObject;
	  }
	});
	Object.defineProperty(exports, 'isPlainObject', {
	  enumerable: true,
	  get: function get() {
	    return _shared.isPlainObject;
	  }
	});
	exports.isReserved = isReserved;
	exports.cached = cached;
	exports.typof = typof;


	/**
	 * Check if a string starts with $ or _
	 *
	 * @param {String} str
	 * @return {Boolean}
	 */

	function isReserved(str) {
	  var c = (str + '').charCodeAt(0);
	  return c === 0x24 || c === 0x5F;
	}

	// can we use __proto__?
	var hasProto = exports.hasProto = '__proto__' in {};

	var _Set = void 0;
	/* istanbul ignore if */
	if (typeof Set !== 'undefined' && Set.toString().match(/native code/)) {
	  // use native Set when available.
	  exports._Set = _Set = Set;
	} else {
	  // a non-standard Set polyfill that only works with primitive keys.
	  exports._Set = _Set = function _Set() {
	    this.set = Object.create(null);
	  };
	  _Set.prototype.has = function (key) {
	    return this.set[key] !== undefined;
	  };
	  _Set.prototype.add = function (key) {
	    this.set[key] = 1;
	  };
	  _Set.prototype.clear = function () {
	    this.set = Object.create(null);
	  };
	}

	exports._Set = _Set;

	/**
	 * Create a cached version of a pure function.
	 *
	 * @param {Function} fn
	 * @return {Function}
	 */

	function cached(fn) {
	  var cache = Object.create(null);
	  return function cachedFn(str) {
	    var hit = cache[str];
	    return hit || (cache[str] = fn(str));
	  };
	}

	/**
	 * Camelize a hyphen-delmited string.
	 *
	 * @param {String} str
	 * @return {String}
	 */

	var camelizeRE = /-(\w)/g;
	var camelize = exports.camelize = cached(function (str) {
	  return str.replace(camelizeRE, toUpper);
	});

	function toUpper(_, c) {
	  return c ? c.toUpperCase() : '';
	}

	/**
	 * Hyphenate a camelCase string.
	 *
	 * @param {String} str
	 * @return {String}
	 */

	var hyphenateRE = /([a-z\d])([A-Z])/g;
	var hyphenate = exports.hyphenate = cached(function (str) {
	  return str.replace(hyphenateRE, '$1-$2').toLowerCase();
	});

	function typof(v) {
	  var s = Object.prototype.toString.call(v);
	  return s.substring(8, s.length - 1).toLowerCase();
	}

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	exports.updateActions = updateActions;
	exports.init = init;
	exports.destroy = destroy;
	exports.getRootElement = getRootElement;
	exports.fireEvent = fireEvent;
	exports.callback = callback;
	exports.refreshData = refreshData;

	var _util = __webpack_require__(76);

	var _bundle = __webpack_require__(78);

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } } /**
	                                                                                                                                                                                                     * @fileOverview
	                                                                                                                                                                                                     * instance controls from native
	                                                                                                                                                                                                     *
	                                                                                                                                                                                                     * - init bundle
	                                                                                                                                                                                                     * - fire event
	                                                                                                                                                                                                     * - callback
	                                                                                                                                                                                                     * - destroy
	                                                                                                                                                                                                     *
	                                                                                                                                                                                                     * corresponded with the API of instance manager (framework.js)
	                                                                                                                                                                                                     */

	function updateActions() {
	  this.differ.flush();
	  var tasks = [];
	  if (this.doc && this.doc.listener && this.doc.listener.updates.length) {
	    tasks.push.apply(tasks, _toConsumableArray(this.doc.listener.updates));
	    this.doc.listener.updates = [];
	  }
	  if (tasks.length) {
	    return this.callTasks(tasks);
	  }
	}

	function init(code, data) {
	  var _this = this;

	  console.debug('[JS Framework] Intialize an instance with:\n', data);

	  var result = void 0;
	  // @see: lib/app/bundle.js
	  var bundleDefine = (0, _util.bind)(_bundle.define, this);
	  var bundleBootstrap = function bundleBootstrap(name, config, _data) {
	    result = (0, _bundle.bootstrap)(_this, name, config, _data || data);
	    _this.updateActions();
	    _this.doc.listener.createFinish();
	    console.debug('[JS Framework] After intialized an instance(' + _this.id + ')');
	  };

	  // backward(register/render)
	  var bundleRegister = (0, _util.bind)(_bundle.register, this);
	  var bundleRender = function bundleRender(name, _data) {
	    result = (0, _bundle.bootstrap)(_this, name, {}, _data);
	  };

	  var bundleRequire = function bundleRequire(name) {
	    return function (_data) {
	      result = (0, _bundle.bootstrap)(_this, name, {}, _data);
	    };
	  };

	  var bundleDocument = this.doc;

	  var functionBody = void 0;
	  /* istanbul ignore if */
	  if (typeof code === 'function') {
	    // `function () {...}` -> `{...}`
	    // not very strict
	    functionBody = code.toString().substr(12);
	  } else if (code) {
	    functionBody = code.toString();
	  }

	  var _global = global;
	  var WXEnvironment = _global.WXEnvironment;

	  if (WXEnvironment && WXEnvironment.platform !== 'Web') {
	    var _ret = function () {
	      var timer = _this.requireModule('timer');
	      var timerAPIs = {
	        setTimeout: function setTimeout() {
	          for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	            args[_key] = arguments[_key];
	          }

	          var handler = function handler() {
	            args[0].apply(args, _toConsumableArray(args.slice(2)));
	          };
	          timer.setTimeout(handler, args[1]);
	          return _this.uid.toString();
	        },
	        setInterval: function setInterval() {
	          for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	            args[_key2] = arguments[_key2];
	          }

	          var handler = function handler() {
	            args[0].apply(args, _toConsumableArray(args.slice(2)));
	          };
	          timer.setInterval(handler, args[1]);
	          return _this.uid.toString();
	        },
	        clearTimeout: function clearTimeout(n) {
	          timer.clearTimeout(n);
	        },
	        clearInterval: function clearInterval(n) {
	          timer.clearInterval(n);
	        }
	      };

	      if (!functionBody) {
	        _this.env = {
	          bundleDefine: bundleDefine,
	          bundleBootstrap: bundleBootstrap,
	          bundleDocument: bundleDocument,
	          setTimeout: timerAPIs.setTimeout,
	          setInterval: timerAPIs.setInterval,
	          clearTimeout: timerAPIs.clearTimeout,
	          clearInterval: timerAPIs.clearInterval
	        };
	        return {
	          v: void 0
	        };
	      }

	      var fn = new Function('define', 'require', 'document', 'bootstrap', 'register', 'render', '__weex_define__', // alias for define
	      '__weex_bootstrap__', // alias for bootstrap
	      'setTimeout', 'setInterval', 'clearTimeout', 'clearInterval', functionBody);

	      fn(bundleDefine, bundleRequire, bundleDocument, bundleBootstrap, bundleRegister, bundleRender, bundleDefine, bundleBootstrap, timerAPIs.setTimeout, timerAPIs.setInterval, timerAPIs.clearTimeout, timerAPIs.clearInterval);
	    }();

	    if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
	  } else {
	    if (!functionBody) {
	      this.env = {
	        bundleDefine: bundleDefine,
	        bundleBootstrap: bundleBootstrap,
	        bundleDocument: bundleDocument,
	        setTimeout: setTimeout,
	        setInterval: setInterval,
	        clearTimeout: clearTimeout,
	        clearInterval: clearInterval
	      };
	      return;
	    }

	    var _fn = new Function('define', 'require', 'document', 'bootstrap', 'register', 'render', '__weex_define__', // alias for define
	    '__weex_bootstrap__', // alias for bootstrap
	    functionBody);

	    _fn(bundleDefine, bundleRequire, bundleDocument, bundleBootstrap, bundleRegister, bundleRender, bundleDefine, bundleBootstrap);
	  }

	  return result;
	}

	function destroy() {
	  console.debug('[JS Framework] Destory an instance(' + this.id + ')');

	  this.id = '';
	  this.options = null;
	  this.blocks = null;
	  this.vm = null;
	  this.doc = null;
	  this.customComponentMap = null;
	  this.callbacks = null;
	}

	function getRootElement() {
	  var doc = this.doc || {};
	  var body = doc.body || {};
	  return body.toJSON ? body.toJSON() : {};
	}

	function fireEvent(ref, type, e, domChanges) {
	  var _this2 = this;

	  console.debug('[JS Framework] Fire a "' + type + '" event on an element(' + ref + ') in instance(' + this.id + ')');
	  if (Array.isArray(ref)) {
	    ref.some(function (ref) {
	      return _this2.fireEvent(ref, type, e) !== false;
	    });
	    return;
	  }

	  var el = this.doc.getRef(ref);

	  if (el) {
	    this.doc.close();
	    var result = this.doc.fireEvent(el, type, e, domChanges);
	    this.updateActions();
	    this.doc.listener.updateFinish();
	    this.doc.open();
	    return result;
	  }

	  return new Error('invalid element reference "' + ref + '"');
	}

	function callback(callbackId, data, ifKeepAlive) {
	  console.debug('[JS Framework] Invoke a callback(' + callbackId + ') with', data, 'in instance(' + this.id + ')');

	  var callback = this.callbacks[callbackId];

	  if (typeof callback === 'function') {
	    this.doc.close();
	    callback(data); // data is already a object, @see: lib/runtime/index.js

	    if (typeof ifKeepAlive === 'undefined' || ifKeepAlive === false) {
	      this.callbacks[callbackId] = undefined;
	    }

	    this.updateActions();
	    this.doc.listener.updateFinish();
	    this.doc.open();
	    return;
	  }

	  return new Error('invalid callback id "' + callbackId + '"');
	}

	function refreshData(data) {
	  console.debug('[JS Framework] Refresh with', data, 'in instance[' + this.id + ']');

	  var vm = this.vm;

	  if (vm && data) {
	    this.doc.close();
	    if (typeof vm.refreshData === 'function') {
	      vm.refreshData(data);
	    } else {
	      (0, _util.extend)(vm, data);
	    }
	    this.updateActions();
	    this.doc.listener.refreshFinish();
	    this.doc.open();
	    return;
	  }

	  return new Error('invalid data "' + data + '"');
	}
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.define = undefined;
	exports.clearCommonModules = clearCommonModules;
	exports.bootstrap = bootstrap;
	exports.register = register;

	var _semver = __webpack_require__(79);

	var _semver2 = _interopRequireDefault(_semver);

	var _util = __webpack_require__(76);

	var _vm = __webpack_require__(81);

	var _vm2 = _interopRequireDefault(_vm);

	var _downgrade = __webpack_require__(92);

	var downgrade = _interopRequireWildcard(_downgrade);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; } /**
	                                                                                                                                                                                                                   * @fileOverview
	                                                                                                                                                                                                                   * api that invoked by js bundle code
	                                                                                                                                                                                                                   *
	                                                                                                                                                                                                                   * - define(name, factory): define a new composed component type
	                                                                                                                                                                                                                   * - bootstrap(type, config, data): require a certain type &
	                                                                                                                                                                                                                   *         render with (optional) data
	                                                                                                                                                                                                                   *
	                                                                                                                                                                                                                   * deprecated:
	                                                                                                                                                                                                                   * - register(type, options): register a new composed component type
	                                                                                                                                                                                                                   * - render(type, data): render by a certain type with (optional) data
	                                                                                                                                                                                                                   * - require(type)(data): require a type then render with data
	                                                                                                                                                                                                                   */

	var WEEX_COMPONENT_REG = /^@weex-component\//;
	var WEEX_MODULE_REG = /^@weex-module\//;
	var NORMAL_MODULE_REG = /^\.{1,2}\//;
	var JS_SURFIX_REG = /\.js$/;

	var isWeexComponent = function isWeexComponent(name) {
	  return !!name.match(WEEX_COMPONENT_REG);
	};
	var isWeexModule = function isWeexModule(name) {
	  return !!name.match(WEEX_MODULE_REG);
	};
	var isNormalModule = function isNormalModule(name) {
	  return !!name.match(NORMAL_MODULE_REG);
	};
	var isNpmModule = function isNpmModule(name) {
	  return !isWeexComponent(name) && !isWeexModule(name) && !isNormalModule(name);
	};

	function removeWeexPrefix(str) {
	  return str.replace(WEEX_COMPONENT_REG, '').replace(WEEX_MODULE_REG, '');
	}

	function removeJSSurfix(str) {
	  return str.replace(JS_SURFIX_REG, '');
	}

	var commonModules = {};

	function clearCommonModules() {
	  commonModules = {};
	}

	// define(name, factory) for primary usage
	// or
	// define(name, deps, factory) for compatibility
	// Notice: DO NOT use function define() {},
	// it will cause error after builded by webpack
	var define = exports.define = function define(name, deps, factory) {
	  var _this = this;

	  console.debug('[JS Framework] define a component ' + name);

	  if ((0, _util.typof)(deps) === 'function') {
	    factory = deps;
	    deps = [];
	  }

	  var _require = function _require(name) {
	    var cleanName = void 0;

	    if (isWeexComponent(name)) {
	      cleanName = removeWeexPrefix(name);
	      return _this.requireComponent(cleanName);
	    }
	    if (isWeexModule(name)) {
	      cleanName = removeWeexPrefix(name);
	      return _this.requireModule(cleanName);
	    }
	    if (isNormalModule(name)) {
	      cleanName = removeJSSurfix(name);
	      return commonModules[name];
	    }
	    if (isNpmModule(name)) {
	      cleanName = removeJSSurfix(name);
	      return commonModules[name];
	    }
	  };
	  var _module = { exports: {} };

	  var cleanName = void 0;
	  if (isWeexComponent(name)) {
	    cleanName = removeWeexPrefix(name);

	    factory(_require, _module.exports, _module);

	    this.registerComponent(cleanName, _module.exports);
	  } else if (isWeexModule(name)) {
	    cleanName = removeWeexPrefix(name);

	    factory(_require, _module.exports, _module);

	    _vm2.default.registerModules(_defineProperty({}, cleanName, _module.exports));
	  } else if (isNormalModule(name)) {
	    cleanName = removeJSSurfix(name);

	    factory(_require, _module.exports, _module);

	    commonModules[cleanName] = _module.exports;
	  } else if (isNpmModule(name)) {
	    cleanName = removeJSSurfix(name);

	    factory(_require, _module.exports, _module);

	    var exports = _module.exports;
	    if (exports.template || exports.style || exports.methods) {
	      // downgrade to old define method (define('componentName', factory))
	      // the exports contain one key of template, style or methods
	      // but it has risk!!!
	      this.registerComponent(cleanName, exports);
	    } else {
	      commonModules[cleanName] = _module.exports;
	    }
	  }
	};

	function bootstrap(app, name, config, data) {
	  console.debug('[JS Framework] bootstrap for ' + name);

	  var cleanName = void 0;

	  if (isWeexComponent(name)) {
	    cleanName = removeWeexPrefix(name);
	  } else if (isNpmModule(name)) {
	    cleanName = removeJSSurfix(name);
	    // check if define by old 'define' method
	    /* istanbul ignore if */
	    if (!app.customComponentMap[cleanName]) {
	      return new Error('It\'s not a component: ' + name);
	    }
	  } else {
	    return new Error('Wrong component name: ' + name);
	  }

	  config = (0, _util.isPlainObject)(config) ? config : {};

	  if (typeof config.transformerVersion === 'string' && typeof global.transformerVersion === 'string' && !_semver2.default.satisfies(config.transformerVersion, global.transformerVersion)) {
	    return new Error('JS Bundle version: ' + config.transformerVersion + ' ' + ('not compatible with ' + global.transformerVersion));
	  }

	  var _checkDowngrade = downgrade.check(config.downgrade);
	  /* istanbul ignore if */
	  if (_checkDowngrade.isDowngrade) {
	    app.callTasks([{
	      module: 'instanceWrap',
	      method: 'error',
	      args: [_checkDowngrade.errorType, _checkDowngrade.code, _checkDowngrade.errorMessage]
	    }]);
	    return new Error('Downgrade[' + _checkDowngrade.code + ']: ' + _checkDowngrade.errorMessage);
	  }

	  app.vm = new _vm2.default(cleanName, null, { _app: app }, null, data);
	}

	/**
	 * @deprecated
	 */
	function register(type, options) {
	  console.warn('[JS Framework] Register is deprecated, please install lastest transformer.');
	  this.registerComponent(type, options);
	}
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	exports = module.exports = SemVer;

	// The debug function is excluded entirely from the minified version.
	/* nomin */var debug;
	/* nomin */if ((typeof process === 'undefined' ? 'undefined' : _typeof(process)) === 'object' &&
	/* nomin */process.env &&
	/* nomin */process.env.NODE_DEBUG &&
	/* nomin *//\bsemver\b/i.test(process.env.NODE_DEBUG))
	  /* nomin */debug = function debug() {
	    /* nomin */var args = Array.prototype.slice.call(arguments, 0);
	    /* nomin */args.unshift('SEMVER');
	    /* nomin */console.log.apply(console, args);
	    /* nomin */
	  };
	  /* nomin */else
	  /* nomin */debug = function debug() {};

	// Note: this is the semver.org version of the spec that it implements
	// Not necessarily the package version of this code.
	exports.SEMVER_SPEC_VERSION = '2.0.0';

	var MAX_LENGTH = 256;
	var MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER || 9007199254740991;

	// The actual regexps go on exports.re
	var re = exports.re = [];
	var src = exports.src = [];
	var R = 0;

	// The following Regular Expressions can be used for tokenizing,
	// validating, and parsing SemVer version strings.

	// ## Numeric Identifier
	// A single `0`, or a non-zero digit followed by zero or more digits.

	var NUMERICIDENTIFIER = R++;
	src[NUMERICIDENTIFIER] = '0|[1-9]\\d*';
	var NUMERICIDENTIFIERLOOSE = R++;
	src[NUMERICIDENTIFIERLOOSE] = '[0-9]+';

	// ## Non-numeric Identifier
	// Zero or more digits, followed by a letter or hyphen, and then zero or
	// more letters, digits, or hyphens.

	var NONNUMERICIDENTIFIER = R++;
	src[NONNUMERICIDENTIFIER] = '\\d*[a-zA-Z-][a-zA-Z0-9-]*';

	// ## Main Version
	// Three dot-separated numeric identifiers.

	var MAINVERSION = R++;
	src[MAINVERSION] = '(' + src[NUMERICIDENTIFIER] + ')\\.' + '(' + src[NUMERICIDENTIFIER] + ')\\.' + '(' + src[NUMERICIDENTIFIER] + ')';

	var MAINVERSIONLOOSE = R++;
	src[MAINVERSIONLOOSE] = '(' + src[NUMERICIDENTIFIERLOOSE] + ')\\.' + '(' + src[NUMERICIDENTIFIERLOOSE] + ')\\.' + '(' + src[NUMERICIDENTIFIERLOOSE] + ')';

	// ## Pre-release Version Identifier
	// A numeric identifier, or a non-numeric identifier.

	var PRERELEASEIDENTIFIER = R++;
	src[PRERELEASEIDENTIFIER] = '(?:' + src[NUMERICIDENTIFIER] + '|' + src[NONNUMERICIDENTIFIER] + ')';

	var PRERELEASEIDENTIFIERLOOSE = R++;
	src[PRERELEASEIDENTIFIERLOOSE] = '(?:' + src[NUMERICIDENTIFIERLOOSE] + '|' + src[NONNUMERICIDENTIFIER] + ')';

	// ## Pre-release Version
	// Hyphen, followed by one or more dot-separated pre-release version
	// identifiers.

	var PRERELEASE = R++;
	src[PRERELEASE] = '(?:-(' + src[PRERELEASEIDENTIFIER] + '(?:\\.' + src[PRERELEASEIDENTIFIER] + ')*))';

	var PRERELEASELOOSE = R++;
	src[PRERELEASELOOSE] = '(?:-?(' + src[PRERELEASEIDENTIFIERLOOSE] + '(?:\\.' + src[PRERELEASEIDENTIFIERLOOSE] + ')*))';

	// ## Build Metadata Identifier
	// Any combination of digits, letters, or hyphens.

	var BUILDIDENTIFIER = R++;
	src[BUILDIDENTIFIER] = '[0-9A-Za-z-]+';

	// ## Build Metadata
	// Plus sign, followed by one or more period-separated build metadata
	// identifiers.

	var BUILD = R++;
	src[BUILD] = '(?:\\+(' + src[BUILDIDENTIFIER] + '(?:\\.' + src[BUILDIDENTIFIER] + ')*))';

	// ## Full Version String
	// A main version, followed optionally by a pre-release version and
	// build metadata.

	// Note that the only major, minor, patch, and pre-release sections of
	// the version string are capturing groups.  The build metadata is not a
	// capturing group, because it should not ever be used in version
	// comparison.

	var FULL = R++;
	var FULLPLAIN = 'v?' + src[MAINVERSION] + src[PRERELEASE] + '?' + src[BUILD] + '?';

	src[FULL] = '^' + FULLPLAIN + '$';

	// like full, but allows v1.2.3 and =1.2.3, which people do sometimes.
	// also, 1.0.0alpha1 (prerelease without the hyphen) which is pretty
	// common in the npm registry.
	var LOOSEPLAIN = '[v=\\s]*' + src[MAINVERSIONLOOSE] + src[PRERELEASELOOSE] + '?' + src[BUILD] + '?';

	var LOOSE = R++;
	src[LOOSE] = '^' + LOOSEPLAIN + '$';

	var GTLT = R++;
	src[GTLT] = '((?:<|>)?=?)';

	// Something like "2.*" or "1.2.x".
	// Note that "x.x" is a valid xRange identifer, meaning "any version"
	// Only the first item is strictly required.
	var XRANGEIDENTIFIERLOOSE = R++;
	src[XRANGEIDENTIFIERLOOSE] = src[NUMERICIDENTIFIERLOOSE] + '|x|X|\\*';
	var XRANGEIDENTIFIER = R++;
	src[XRANGEIDENTIFIER] = src[NUMERICIDENTIFIER] + '|x|X|\\*';

	var XRANGEPLAIN = R++;
	src[XRANGEPLAIN] = '[v=\\s]*(' + src[XRANGEIDENTIFIER] + ')' + '(?:\\.(' + src[XRANGEIDENTIFIER] + ')' + '(?:\\.(' + src[XRANGEIDENTIFIER] + ')' + '(?:' + src[PRERELEASE] + ')?' + src[BUILD] + '?' + ')?)?';

	var XRANGEPLAINLOOSE = R++;
	src[XRANGEPLAINLOOSE] = '[v=\\s]*(' + src[XRANGEIDENTIFIERLOOSE] + ')' + '(?:\\.(' + src[XRANGEIDENTIFIERLOOSE] + ')' + '(?:\\.(' + src[XRANGEIDENTIFIERLOOSE] + ')' + '(?:' + src[PRERELEASELOOSE] + ')?' + src[BUILD] + '?' + ')?)?';

	var XRANGE = R++;
	src[XRANGE] = '^' + src[GTLT] + '\\s*' + src[XRANGEPLAIN] + '$';
	var XRANGELOOSE = R++;
	src[XRANGELOOSE] = '^' + src[GTLT] + '\\s*' + src[XRANGEPLAINLOOSE] + '$';

	// Tilde ranges.
	// Meaning is "reasonably at or greater than"
	var LONETILDE = R++;
	src[LONETILDE] = '(?:~>?)';

	var TILDETRIM = R++;
	src[TILDETRIM] = '(\\s*)' + src[LONETILDE] + '\\s+';
	re[TILDETRIM] = new RegExp(src[TILDETRIM], 'g');
	var tildeTrimReplace = '$1~';

	var TILDE = R++;
	src[TILDE] = '^' + src[LONETILDE] + src[XRANGEPLAIN] + '$';
	var TILDELOOSE = R++;
	src[TILDELOOSE] = '^' + src[LONETILDE] + src[XRANGEPLAINLOOSE] + '$';

	// Caret ranges.
	// Meaning is "at least and backwards compatible with"
	var LONECARET = R++;
	src[LONECARET] = '(?:\\^)';

	var CARETTRIM = R++;
	src[CARETTRIM] = '(\\s*)' + src[LONECARET] + '\\s+';
	re[CARETTRIM] = new RegExp(src[CARETTRIM], 'g');
	var caretTrimReplace = '$1^';

	var CARET = R++;
	src[CARET] = '^' + src[LONECARET] + src[XRANGEPLAIN] + '$';
	var CARETLOOSE = R++;
	src[CARETLOOSE] = '^' + src[LONECARET] + src[XRANGEPLAINLOOSE] + '$';

	// A simple gt/lt/eq thing, or just "" to indicate "any version"
	var COMPARATORLOOSE = R++;
	src[COMPARATORLOOSE] = '^' + src[GTLT] + '\\s*(' + LOOSEPLAIN + ')$|^$';
	var COMPARATOR = R++;
	src[COMPARATOR] = '^' + src[GTLT] + '\\s*(' + FULLPLAIN + ')$|^$';

	// An expression to strip any whitespace between the gtlt and the thing
	// it modifies, so that `> 1.2.3` ==> `>1.2.3`
	var COMPARATORTRIM = R++;
	src[COMPARATORTRIM] = '(\\s*)' + src[GTLT] + '\\s*(' + LOOSEPLAIN + '|' + src[XRANGEPLAIN] + ')';

	// this one has to use the /g flag
	re[COMPARATORTRIM] = new RegExp(src[COMPARATORTRIM], 'g');
	var comparatorTrimReplace = '$1$2$3';

	// Something like `1.2.3 - 1.2.4`
	// Note that these all use the loose form, because they'll be
	// checked against either the strict or loose comparator form
	// later.
	var HYPHENRANGE = R++;
	src[HYPHENRANGE] = '^\\s*(' + src[XRANGEPLAIN] + ')' + '\\s+-\\s+' + '(' + src[XRANGEPLAIN] + ')' + '\\s*$';

	var HYPHENRANGELOOSE = R++;
	src[HYPHENRANGELOOSE] = '^\\s*(' + src[XRANGEPLAINLOOSE] + ')' + '\\s+-\\s+' + '(' + src[XRANGEPLAINLOOSE] + ')' + '\\s*$';

	// Star ranges basically just allow anything at all.
	var STAR = R++;
	src[STAR] = '(<|>)?=?\\s*\\*';

	// Compile to actual regexp objects.
	// All are flag-free, unless they were created above with a flag.
	for (var i = 0; i < R; i++) {
	  debug(i, src[i]);
	  if (!re[i]) re[i] = new RegExp(src[i]);
	}

	exports.parse = parse;
	function parse(version, loose) {
	  if (version instanceof SemVer) return version;

	  if (typeof version !== 'string') return null;

	  if (version.length > MAX_LENGTH) return null;

	  var r = loose ? re[LOOSE] : re[FULL];
	  if (!r.test(version)) return null;

	  try {
	    return new SemVer(version, loose);
	  } catch (er) {
	    return null;
	  }
	}

	exports.valid = valid;
	function valid(version, loose) {
	  var v = parse(version, loose);
	  return v ? v.version : null;
	}

	exports.clean = clean;
	function clean(version, loose) {
	  var s = parse(version.trim().replace(/^[=v]+/, ''), loose);
	  return s ? s.version : null;
	}

	exports.SemVer = SemVer;

	function SemVer(version, loose) {
	  if (version instanceof SemVer) {
	    if (version.loose === loose) return version;else version = version.version;
	  } else if (typeof version !== 'string') {
	    throw new TypeError('Invalid Version: ' + version);
	  }

	  if (version.length > MAX_LENGTH) throw new TypeError('version is longer than ' + MAX_LENGTH + ' characters');

	  if (!(this instanceof SemVer)) return new SemVer(version, loose);

	  debug('SemVer', version, loose);
	  this.loose = loose;
	  var m = version.trim().match(loose ? re[LOOSE] : re[FULL]);

	  if (!m) throw new TypeError('Invalid Version: ' + version);

	  this.raw = version;

	  // these are actually numbers
	  this.major = +m[1];
	  this.minor = +m[2];
	  this.patch = +m[3];

	  if (this.major > MAX_SAFE_INTEGER || this.major < 0) throw new TypeError('Invalid major version');

	  if (this.minor > MAX_SAFE_INTEGER || this.minor < 0) throw new TypeError('Invalid minor version');

	  if (this.patch > MAX_SAFE_INTEGER || this.patch < 0) throw new TypeError('Invalid patch version');

	  // numberify any prerelease numeric ids
	  if (!m[4]) this.prerelease = [];else this.prerelease = m[4].split('.').map(function (id) {
	    if (/^[0-9]+$/.test(id)) {
	      var num = +id;
	      if (num >= 0 && num < MAX_SAFE_INTEGER) return num;
	    }
	    return id;
	  });

	  this.build = m[5] ? m[5].split('.') : [];
	  this.format();
	}

	SemVer.prototype.format = function () {
	  this.version = this.major + '.' + this.minor + '.' + this.patch;
	  if (this.prerelease.length) this.version += '-' + this.prerelease.join('.');
	  return this.version;
	};

	SemVer.prototype.toString = function () {
	  return this.version;
	};

	SemVer.prototype.compare = function (other) {
	  debug('SemVer.compare', this.version, this.loose, other);
	  if (!(other instanceof SemVer)) other = new SemVer(other, this.loose);

	  return this.compareMain(other) || this.comparePre(other);
	};

	SemVer.prototype.compareMain = function (other) {
	  if (!(other instanceof SemVer)) other = new SemVer(other, this.loose);

	  return compareIdentifiers(this.major, other.major) || compareIdentifiers(this.minor, other.minor) || compareIdentifiers(this.patch, other.patch);
	};

	SemVer.prototype.comparePre = function (other) {
	  if (!(other instanceof SemVer)) other = new SemVer(other, this.loose);

	  // NOT having a prerelease is > having one
	  if (this.prerelease.length && !other.prerelease.length) return -1;else if (!this.prerelease.length && other.prerelease.length) return 1;else if (!this.prerelease.length && !other.prerelease.length) return 0;

	  var i = 0;
	  do {
	    var a = this.prerelease[i];
	    var b = other.prerelease[i];
	    debug('prerelease compare', i, a, b);
	    if (a === undefined && b === undefined) return 0;else if (b === undefined) return 1;else if (a === undefined) return -1;else if (a === b) continue;else return compareIdentifiers(a, b);
	  } while (++i);
	};

	// preminor will bump the version up to the next minor release, and immediately
	// down to pre-release. premajor and prepatch work the same way.
	SemVer.prototype.inc = function (release, identifier) {
	  switch (release) {
	    case 'premajor':
	      this.prerelease.length = 0;
	      this.patch = 0;
	      this.minor = 0;
	      this.major++;
	      this.inc('pre', identifier);
	      break;
	    case 'preminor':
	      this.prerelease.length = 0;
	      this.patch = 0;
	      this.minor++;
	      this.inc('pre', identifier);
	      break;
	    case 'prepatch':
	      // If this is already a prerelease, it will bump to the next version
	      // drop any prereleases that might already exist, since they are not
	      // relevant at this point.
	      this.prerelease.length = 0;
	      this.inc('patch', identifier);
	      this.inc('pre', identifier);
	      break;
	    // If the input is a non-prerelease version, this acts the same as
	    // prepatch.
	    case 'prerelease':
	      if (this.prerelease.length === 0) this.inc('patch', identifier);
	      this.inc('pre', identifier);
	      break;

	    case 'major':
	      // If this is a pre-major version, bump up to the same major version.
	      // Otherwise increment major.
	      // 1.0.0-5 bumps to 1.0.0
	      // 1.1.0 bumps to 2.0.0
	      if (this.minor !== 0 || this.patch !== 0 || this.prerelease.length === 0) this.major++;
	      this.minor = 0;
	      this.patch = 0;
	      this.prerelease = [];
	      break;
	    case 'minor':
	      // If this is a pre-minor version, bump up to the same minor version.
	      // Otherwise increment minor.
	      // 1.2.0-5 bumps to 1.2.0
	      // 1.2.1 bumps to 1.3.0
	      if (this.patch !== 0 || this.prerelease.length === 0) this.minor++;
	      this.patch = 0;
	      this.prerelease = [];
	      break;
	    case 'patch':
	      // If this is not a pre-release version, it will increment the patch.
	      // If it is a pre-release it will bump up to the same patch version.
	      // 1.2.0-5 patches to 1.2.0
	      // 1.2.0 patches to 1.2.1
	      if (this.prerelease.length === 0) this.patch++;
	      this.prerelease = [];
	      break;
	    // This probably shouldn't be used publicly.
	    // 1.0.0 "pre" would become 1.0.0-0 which is the wrong direction.
	    case 'pre':
	      if (this.prerelease.length === 0) this.prerelease = [0];else {
	        var i = this.prerelease.length;
	        while (--i >= 0) {
	          if (typeof this.prerelease[i] === 'number') {
	            this.prerelease[i]++;
	            i = -2;
	          }
	        }
	        if (i === -1) // didn't increment anything
	          this.prerelease.push(0);
	      }
	      if (identifier) {
	        // 1.2.0-beta.1 bumps to 1.2.0-beta.2,
	        // 1.2.0-beta.fooblz or 1.2.0-beta bumps to 1.2.0-beta.0
	        if (this.prerelease[0] === identifier) {
	          if (isNaN(this.prerelease[1])) this.prerelease = [identifier, 0];
	        } else this.prerelease = [identifier, 0];
	      }
	      break;

	    default:
	      throw new Error('invalid increment argument: ' + release);
	  }
	  this.format();
	  this.raw = this.version;
	  return this;
	};

	exports.inc = inc;
	function inc(version, release, loose, identifier) {
	  if (typeof loose === 'string') {
	    identifier = loose;
	    loose = undefined;
	  }

	  try {
	    return new SemVer(version, loose).inc(release, identifier).version;
	  } catch (er) {
	    return null;
	  }
	}

	exports.diff = diff;
	function diff(version1, version2) {
	  if (eq(version1, version2)) {
	    return null;
	  } else {
	    var v1 = parse(version1);
	    var v2 = parse(version2);
	    if (v1.prerelease.length || v2.prerelease.length) {
	      for (var key in v1) {
	        if (key === 'major' || key === 'minor' || key === 'patch') {
	          if (v1[key] !== v2[key]) {
	            return 'pre' + key;
	          }
	        }
	      }
	      return 'prerelease';
	    }
	    for (var key in v1) {
	      if (key === 'major' || key === 'minor' || key === 'patch') {
	        if (v1[key] !== v2[key]) {
	          return key;
	        }
	      }
	    }
	  }
	}

	exports.compareIdentifiers = compareIdentifiers;

	var numeric = /^[0-9]+$/;
	function compareIdentifiers(a, b) {
	  var anum = numeric.test(a);
	  var bnum = numeric.test(b);

	  if (anum && bnum) {
	    a = +a;
	    b = +b;
	  }

	  return anum && !bnum ? -1 : bnum && !anum ? 1 : a < b ? -1 : a > b ? 1 : 0;
	}

	exports.rcompareIdentifiers = rcompareIdentifiers;
	function rcompareIdentifiers(a, b) {
	  return compareIdentifiers(b, a);
	}

	exports.major = major;
	function major(a, loose) {
	  return new SemVer(a, loose).major;
	}

	exports.minor = minor;
	function minor(a, loose) {
	  return new SemVer(a, loose).minor;
	}

	exports.patch = patch;
	function patch(a, loose) {
	  return new SemVer(a, loose).patch;
	}

	exports.compare = compare;
	function compare(a, b, loose) {
	  return new SemVer(a, loose).compare(b);
	}

	exports.compareLoose = compareLoose;
	function compareLoose(a, b) {
	  return compare(a, b, true);
	}

	exports.rcompare = rcompare;
	function rcompare(a, b, loose) {
	  return compare(b, a, loose);
	}

	exports.sort = sort;
	function sort(list, loose) {
	  return list.sort(function (a, b) {
	    return exports.compare(a, b, loose);
	  });
	}

	exports.rsort = rsort;
	function rsort(list, loose) {
	  return list.sort(function (a, b) {
	    return exports.rcompare(a, b, loose);
	  });
	}

	exports.gt = gt;
	function gt(a, b, loose) {
	  return compare(a, b, loose) > 0;
	}

	exports.lt = lt;
	function lt(a, b, loose) {
	  return compare(a, b, loose) < 0;
	}

	exports.eq = eq;
	function eq(a, b, loose) {
	  return compare(a, b, loose) === 0;
	}

	exports.neq = neq;
	function neq(a, b, loose) {
	  return compare(a, b, loose) !== 0;
	}

	exports.gte = gte;
	function gte(a, b, loose) {
	  return compare(a, b, loose) >= 0;
	}

	exports.lte = lte;
	function lte(a, b, loose) {
	  return compare(a, b, loose) <= 0;
	}

	exports.cmp = cmp;
	function cmp(a, op, b, loose) {
	  var ret;
	  switch (op) {
	    case '===':
	      if ((typeof a === 'undefined' ? 'undefined' : _typeof(a)) === 'object') a = a.version;
	      if ((typeof b === 'undefined' ? 'undefined' : _typeof(b)) === 'object') b = b.version;
	      ret = a === b;
	      break;
	    case '!==':
	      if ((typeof a === 'undefined' ? 'undefined' : _typeof(a)) === 'object') a = a.version;
	      if ((typeof b === 'undefined' ? 'undefined' : _typeof(b)) === 'object') b = b.version;
	      ret = a !== b;
	      break;
	    case '':case '=':case '==':
	      ret = eq(a, b, loose);break;
	    case '!=':
	      ret = neq(a, b, loose);break;
	    case '>':
	      ret = gt(a, b, loose);break;
	    case '>=':
	      ret = gte(a, b, loose);break;
	    case '<':
	      ret = lt(a, b, loose);break;
	    case '<=':
	      ret = lte(a, b, loose);break;
	    default:
	      throw new TypeError('Invalid operator: ' + op);
	  }
	  return ret;
	}

	exports.Comparator = Comparator;
	function Comparator(comp, loose) {
	  if (comp instanceof Comparator) {
	    if (comp.loose === loose) return comp;else comp = comp.value;
	  }

	  if (!(this instanceof Comparator)) return new Comparator(comp, loose);

	  debug('comparator', comp, loose);
	  this.loose = loose;
	  this.parse(comp);

	  if (this.semver === ANY) this.value = '';else this.value = this.operator + this.semver.version;

	  debug('comp', this);
	}

	var ANY = {};
	Comparator.prototype.parse = function (comp) {
	  var r = this.loose ? re[COMPARATORLOOSE] : re[COMPARATOR];
	  var m = comp.match(r);

	  if (!m) throw new TypeError('Invalid comparator: ' + comp);

	  this.operator = m[1];
	  if (this.operator === '=') this.operator = '';

	  // if it literally is just '>' or '' then allow anything.
	  if (!m[2]) this.semver = ANY;else this.semver = new SemVer(m[2], this.loose);
	};

	Comparator.prototype.toString = function () {
	  return this.value;
	};

	Comparator.prototype.test = function (version) {
	  debug('Comparator.test', version, this.loose);

	  if (this.semver === ANY) return true;

	  if (typeof version === 'string') version = new SemVer(version, this.loose);

	  return cmp(version, this.operator, this.semver, this.loose);
	};

	exports.Range = Range;
	function Range(range, loose) {
	  if (range instanceof Range && range.loose === loose) return range;

	  if (!(this instanceof Range)) return new Range(range, loose);

	  this.loose = loose;

	  // First, split based on boolean or ||
	  this.raw = range;
	  this.set = range.split(/\s*\|\|\s*/).map(function (range) {
	    return this.parseRange(range.trim());
	  }, this).filter(function (c) {
	    // throw out any that are not relevant for whatever reason
	    return c.length;
	  });

	  if (!this.set.length) {
	    throw new TypeError('Invalid SemVer Range: ' + range);
	  }

	  this.format();
	}

	Range.prototype.format = function () {
	  this.range = this.set.map(function (comps) {
	    return comps.join(' ').trim();
	  }).join('||').trim();
	  return this.range;
	};

	Range.prototype.toString = function () {
	  return this.range;
	};

	Range.prototype.parseRange = function (range) {
	  var loose = this.loose;
	  range = range.trim();
	  debug('range', range, loose);
	  // `1.2.3 - 1.2.4` => `>=1.2.3 <=1.2.4`
	  var hr = loose ? re[HYPHENRANGELOOSE] : re[HYPHENRANGE];
	  range = range.replace(hr, hyphenReplace);
	  debug('hyphen replace', range);
	  // `> 1.2.3 < 1.2.5` => `>1.2.3 <1.2.5`
	  range = range.replace(re[COMPARATORTRIM], comparatorTrimReplace);
	  debug('comparator trim', range, re[COMPARATORTRIM]);

	  // `~ 1.2.3` => `~1.2.3`
	  range = range.replace(re[TILDETRIM], tildeTrimReplace);

	  // `^ 1.2.3` => `^1.2.3`
	  range = range.replace(re[CARETTRIM], caretTrimReplace);

	  // normalize spaces
	  range = range.split(/\s+/).join(' ');

	  // At this point, the range is completely trimmed and
	  // ready to be split into comparators.

	  var compRe = loose ? re[COMPARATORLOOSE] : re[COMPARATOR];
	  var set = range.split(' ').map(function (comp) {
	    return parseComparator(comp, loose);
	  }).join(' ').split(/\s+/);
	  if (this.loose) {
	    // in loose mode, throw out any that are not valid comparators
	    set = set.filter(function (comp) {
	      return !!comp.match(compRe);
	    });
	  }
	  set = set.map(function (comp) {
	    return new Comparator(comp, loose);
	  });

	  return set;
	};

	// Mostly just for testing and legacy API reasons
	exports.toComparators = toComparators;
	function toComparators(range, loose) {
	  return new Range(range, loose).set.map(function (comp) {
	    return comp.map(function (c) {
	      return c.value;
	    }).join(' ').trim().split(' ');
	  });
	}

	// comprised of xranges, tildes, stars, and gtlt's at this point.
	// already replaced the hyphen ranges
	// turn into a set of JUST comparators.
	function parseComparator(comp, loose) {
	  debug('comp', comp);
	  comp = replaceCarets(comp, loose);
	  debug('caret', comp);
	  comp = replaceTildes(comp, loose);
	  debug('tildes', comp);
	  comp = replaceXRanges(comp, loose);
	  debug('xrange', comp);
	  comp = replaceStars(comp, loose);
	  debug('stars', comp);
	  return comp;
	}

	function isX(id) {
	  return !id || id.toLowerCase() === 'x' || id === '*';
	}

	// ~, ~> --> * (any, kinda silly)
	// ~2, ~2.x, ~2.x.x, ~>2, ~>2.x ~>2.x.x --> >=2.0.0 <3.0.0
	// ~2.0, ~2.0.x, ~>2.0, ~>2.0.x --> >=2.0.0 <2.1.0
	// ~1.2, ~1.2.x, ~>1.2, ~>1.2.x --> >=1.2.0 <1.3.0
	// ~1.2.3, ~>1.2.3 --> >=1.2.3 <1.3.0
	// ~1.2.0, ~>1.2.0 --> >=1.2.0 <1.3.0
	function replaceTildes(comp, loose) {
	  return comp.trim().split(/\s+/).map(function (comp) {
	    return replaceTilde(comp, loose);
	  }).join(' ');
	}

	function replaceTilde(comp, loose) {
	  var r = loose ? re[TILDELOOSE] : re[TILDE];
	  return comp.replace(r, function (_, M, m, p, pr) {
	    debug('tilde', comp, _, M, m, p, pr);
	    var ret;

	    if (isX(M)) ret = '';else if (isX(m)) ret = '>=' + M + '.0.0 <' + (+M + 1) + '.0.0';else if (isX(p))
	      // ~1.2 == >=1.2.0 <1.3.0
	      ret = '>=' + M + '.' + m + '.0 <' + M + '.' + (+m + 1) + '.0';else if (pr) {
	      debug('replaceTilde pr', pr);
	      if (pr.charAt(0) !== '-') pr = '-' + pr;
	      ret = '>=' + M + '.' + m + '.' + p + pr + ' <' + M + '.' + (+m + 1) + '.0';
	    } else
	      // ~1.2.3 == >=1.2.3 <1.3.0
	      ret = '>=' + M + '.' + m + '.' + p + ' <' + M + '.' + (+m + 1) + '.0';

	    debug('tilde return', ret);
	    return ret;
	  });
	}

	// ^ --> * (any, kinda silly)
	// ^2, ^2.x, ^2.x.x --> >=2.0.0 <3.0.0
	// ^2.0, ^2.0.x --> >=2.0.0 <3.0.0
	// ^1.2, ^1.2.x --> >=1.2.0 <2.0.0
	// ^1.2.3 --> >=1.2.3 <2.0.0
	// ^1.2.0 --> >=1.2.0 <2.0.0
	function replaceCarets(comp, loose) {
	  return comp.trim().split(/\s+/).map(function (comp) {
	    return replaceCaret(comp, loose);
	  }).join(' ');
	}

	function replaceCaret(comp, loose) {
	  debug('caret', comp, loose);
	  var r = loose ? re[CARETLOOSE] : re[CARET];
	  return comp.replace(r, function (_, M, m, p, pr) {
	    debug('caret', comp, _, M, m, p, pr);
	    var ret;

	    if (isX(M)) ret = '';else if (isX(m)) ret = '>=' + M + '.0.0 <' + (+M + 1) + '.0.0';else if (isX(p)) {
	      if (M === '0') ret = '>=' + M + '.' + m + '.0 <' + M + '.' + (+m + 1) + '.0';else ret = '>=' + M + '.' + m + '.0 <' + (+M + 1) + '.0.0';
	    } else if (pr) {
	      debug('replaceCaret pr', pr);
	      if (pr.charAt(0) !== '-') pr = '-' + pr;
	      if (M === '0') {
	        if (m === '0') ret = '>=' + M + '.' + m + '.' + p + pr + ' <' + M + '.' + m + '.' + (+p + 1);else ret = '>=' + M + '.' + m + '.' + p + pr + ' <' + M + '.' + (+m + 1) + '.0';
	      } else ret = '>=' + M + '.' + m + '.' + p + pr + ' <' + (+M + 1) + '.0.0';
	    } else {
	      debug('no pr');
	      if (M === '0') {
	        if (m === '0') ret = '>=' + M + '.' + m + '.' + p + ' <' + M + '.' + m + '.' + (+p + 1);else ret = '>=' + M + '.' + m + '.' + p + ' <' + M + '.' + (+m + 1) + '.0';
	      } else ret = '>=' + M + '.' + m + '.' + p + ' <' + (+M + 1) + '.0.0';
	    }

	    debug('caret return', ret);
	    return ret;
	  });
	}

	function replaceXRanges(comp, loose) {
	  debug('replaceXRanges', comp, loose);
	  return comp.split(/\s+/).map(function (comp) {
	    return replaceXRange(comp, loose);
	  }).join(' ');
	}

	function replaceXRange(comp, loose) {
	  comp = comp.trim();
	  var r = loose ? re[XRANGELOOSE] : re[XRANGE];
	  return comp.replace(r, function (ret, gtlt, M, m, p, pr) {
	    debug('xRange', comp, ret, gtlt, M, m, p, pr);
	    var xM = isX(M);
	    var xm = xM || isX(m);
	    var xp = xm || isX(p);
	    var anyX = xp;

	    if (gtlt === '=' && anyX) gtlt = '';

	    if (xM) {
	      if (gtlt === '>' || gtlt === '<') {
	        // nothing is allowed
	        ret = '<0.0.0';
	      } else {
	        // nothing is forbidden
	        ret = '*';
	      }
	    } else if (gtlt && anyX) {
	      // replace X with 0
	      if (xm) m = 0;
	      if (xp) p = 0;

	      if (gtlt === '>') {
	        // >1 => >=2.0.0
	        // >1.2 => >=1.3.0
	        // >1.2.3 => >= 1.2.4
	        gtlt = '>=';
	        if (xm) {
	          M = +M + 1;
	          m = 0;
	          p = 0;
	        } else if (xp) {
	          m = +m + 1;
	          p = 0;
	        }
	      } else if (gtlt === '<=') {
	        // <=0.7.x is actually <0.8.0, since any 0.7.x should
	        // pass.  Similarly, <=7.x is actually <8.0.0, etc.
	        gtlt = '<';
	        if (xm) M = +M + 1;else m = +m + 1;
	      }

	      ret = gtlt + M + '.' + m + '.' + p;
	    } else if (xm) {
	      ret = '>=' + M + '.0.0 <' + (+M + 1) + '.0.0';
	    } else if (xp) {
	      ret = '>=' + M + '.' + m + '.0 <' + M + '.' + (+m + 1) + '.0';
	    }

	    debug('xRange return', ret);

	    return ret;
	  });
	}

	// Because * is AND-ed with everything else in the comparator,
	// and '' means "any version", just remove the *s entirely.
	function replaceStars(comp, loose) {
	  debug('replaceStars', comp, loose);
	  // Looseness is ignored here.  star is always as loose as it gets!
	  return comp.trim().replace(re[STAR], '');
	}

	// This function is passed to string.replace(re[HYPHENRANGE])
	// M, m, patch, prerelease, build
	// 1.2 - 3.4.5 => >=1.2.0 <=3.4.5
	// 1.2.3 - 3.4 => >=1.2.0 <3.5.0 Any 3.4.x will do
	// 1.2 - 3.4 => >=1.2.0 <3.5.0
	function hyphenReplace($0, from, fM, fm, fp, fpr, fb, to, tM, tm, tp, tpr, tb) {

	  if (isX(fM)) from = '';else if (isX(fm)) from = '>=' + fM + '.0.0';else if (isX(fp)) from = '>=' + fM + '.' + fm + '.0';else from = '>=' + from;

	  if (isX(tM)) to = '';else if (isX(tm)) to = '<' + (+tM + 1) + '.0.0';else if (isX(tp)) to = '<' + tM + '.' + (+tm + 1) + '.0';else if (tpr) to = '<=' + tM + '.' + tm + '.' + tp + '-' + tpr;else to = '<=' + to;

	  return (from + ' ' + to).trim();
	}

	// if ANY of the sets match ALL of its comparators, then pass
	Range.prototype.test = function (version) {
	  if (!version) return false;

	  if (typeof version === 'string') version = new SemVer(version, this.loose);

	  for (var i = 0; i < this.set.length; i++) {
	    if (testSet(this.set[i], version)) return true;
	  }
	  return false;
	};

	function testSet(set, version) {
	  for (var i = 0; i < set.length; i++) {
	    if (!set[i].test(version)) return false;
	  }

	  if (version.prerelease.length) {
	    // Find the set of versions that are allowed to have prereleases
	    // For example, ^1.2.3-pr.1 desugars to >=1.2.3-pr.1 <2.0.0
	    // That should allow `1.2.3-pr.2` to pass.
	    // However, `1.2.4-alpha.notready` should NOT be allowed,
	    // even though it's within the range set by the comparators.
	    for (var i = 0; i < set.length; i++) {
	      debug(set[i].semver);
	      if (set[i].semver === ANY) continue;

	      if (set[i].semver.prerelease.length > 0) {
	        var allowed = set[i].semver;
	        if (allowed.major === version.major && allowed.minor === version.minor && allowed.patch === version.patch) return true;
	      }
	    }

	    // Version has a -pre, but it's not one of the ones we like.
	    return false;
	  }

	  return true;
	}

	exports.satisfies = satisfies;
	function satisfies(version, range, loose) {
	  try {
	    range = new Range(range, loose);
	  } catch (er) {
	    return false;
	  }
	  return range.test(version);
	}

	exports.maxSatisfying = maxSatisfying;
	function maxSatisfying(versions, range, loose) {
	  return versions.filter(function (version) {
	    return satisfies(version, range, loose);
	  }).sort(function (a, b) {
	    return rcompare(a, b, loose);
	  })[0] || null;
	}

	exports.validRange = validRange;
	function validRange(range, loose) {
	  try {
	    // Return '*' instead of '' so that truthiness works.
	    // This will throw if it's invalid anyway
	    return new Range(range, loose).range || '*';
	  } catch (er) {
	    return null;
	  }
	}

	// Determine if version is less than all the versions possible in the range
	exports.ltr = ltr;
	function ltr(version, range, loose) {
	  return outside(version, range, '<', loose);
	}

	// Determine if version is greater than all the versions possible in the range.
	exports.gtr = gtr;
	function gtr(version, range, loose) {
	  return outside(version, range, '>', loose);
	}

	exports.outside = outside;
	function outside(version, range, hilo, loose) {
	  version = new SemVer(version, loose);
	  range = new Range(range, loose);

	  var gtfn, ltefn, ltfn, comp, ecomp;
	  switch (hilo) {
	    case '>':
	      gtfn = gt;
	      ltefn = lte;
	      ltfn = lt;
	      comp = '>';
	      ecomp = '>=';
	      break;
	    case '<':
	      gtfn = lt;
	      ltefn = gte;
	      ltfn = gt;
	      comp = '<';
	      ecomp = '<=';
	      break;
	    default:
	      throw new TypeError('Must provide a hilo val of "<" or ">"');
	  }

	  // If it satisifes the range it is not outside
	  if (satisfies(version, range, loose)) {
	    return false;
	  }

	  // From now on, variable terms are as if we're in "gtr" mode.
	  // but note that everything is flipped for the "ltr" function.

	  for (var i = 0; i < range.set.length; ++i) {
	    var comparators = range.set[i];

	    var high = null;
	    var low = null;

	    comparators.forEach(function (comparator) {
	      if (comparator.semver === ANY) {
	        comparator = new Comparator('>=0.0.0');
	      }
	      high = high || comparator;
	      low = low || comparator;
	      if (gtfn(comparator.semver, high.semver, loose)) {
	        high = comparator;
	      } else if (ltfn(comparator.semver, low.semver, loose)) {
	        low = comparator;
	      }
	    });

	    // If the edge version comparator has a operator then our version
	    // isn't outside it
	    if (high.operator === comp || high.operator === ecomp) {
	      return false;
	    }

	    // If the lowest version comparator has an operator and our version
	    // is less than it then it isn't higher than the range
	    if ((!low.operator || low.operator === comp) && ltefn(version, low.semver)) {
	      return false;
	    } else if (low.operator === ecomp && ltfn(version, low.semver)) {
	      return false;
	    }
	  }
	  return true;
	}

	exports.prerelease = prerelease;
	function prerelease(version, loose) {
	  var parsed = parse(version, loose);
	  return parsed && parsed.prerelease.length ? parsed.prerelease : null;
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(80)))

/***/ },
/* 80 */
/***/ function(module, exports) {

	'use strict';

	// shim for using process in browser

	var process = module.exports = {};

	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.

	var cachedSetTimeout;
	var cachedClearTimeout;

	(function () {
	    try {
	        cachedSetTimeout = setTimeout;
	    } catch (e) {
	        cachedSetTimeout = function cachedSetTimeout() {
	            throw new Error('setTimeout is not defined');
	        };
	    }
	    try {
	        cachedClearTimeout = clearTimeout;
	    } catch (e) {
	        cachedClearTimeout = function cachedClearTimeout() {
	            throw new Error('clearTimeout is not defined');
	        };
	    }
	})();
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = cachedSetTimeout(cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while (len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    cachedClearTimeout(timeout);
	}

	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        cachedSetTimeout(drainQueue, 0);
	    }
	};

	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};

	function noop() {}

	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	process.cwd = function () {
	    return '/';
	};
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function () {
	    return 0;
	};

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = Vm;

	var _util = __webpack_require__(76);

	var _state = __webpack_require__(82);

	var _compiler = __webpack_require__(87);

	var _events = __webpack_require__(90);

	var _register = __webpack_require__(91);

	/**
	 * ViewModel constructor
	 *
	 * @param {string} type
	 * @param {object} options    component options
	 * @param {object} parentVm   which contains _app
	 * @param {object} parentEl   root element or frag block
	 * @param {object} mergedData external data
	 * @param {object} externalEvents external events
	 */
	function Vm(type, options, parentVm, parentEl, mergedData, externalEvents) {
	  this._parent = parentVm._realParent ? parentVm._realParent : parentVm;
	  this._app = parentVm._app;
	  parentVm._childrenVms && parentVm._childrenVms.push(this);

	  if (!options) {
	    options = this._app.customComponentMap[type] || {};
	  }
	  var data = options.data || {};

	  this._options = options;
	  this._methods = options.methods || {};
	  this._computed = options.computed || {};
	  this._css = options.style || {};
	  this._ids = {};
	  this._vmEvents = {};
	  this._childrenVms = [];
	  this._type = type;

	  // bind events and lifecycles
	  (0, _events.initEvents)(this, externalEvents);

	  console.debug('[JS Framework] "init" lifecycle in Vm(' + this._type + ')');
	  this.$emit('hook:init');
	  this._inited = true;

	  // proxy data and methods
	  // observe data and add this to vms
	  this._data = typeof data === 'function' ? data() : data;
	  if (mergedData) {
	    (0, _util.extend)(this._data, mergedData);
	  }
	  (0, _state.initState)(this);

	  console.debug('[JS Framework] "created" lifecycle in Vm(' + this._type + ')');
	  this.$emit('hook:created');
	  this._created = true;

	  // backward old ready entry
	  if (options.methods && options.methods.ready) {
	    console.warn('"exports.methods.ready" is deprecated, ' + 'please use "exports.created" instead');
	    options.methods.ready.call(this);
	  }

	  // if no parentElement then specify the documentElement
	  this._parentEl = parentEl || this._app.doc.documentElement;
	  (0, _compiler.build)(this);
	} /**
	   * @fileOverview
	   * ViewModel Constructor & definition
	   */

	(0, _events.mixinEvents)(Vm.prototype);

	(0, _util.extend)(Vm, {
	  registerModules: _register.registerModules,
	  registerMethods: _register.registerMethods
	});

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.initState = initState;
	exports.initData = initData;
	exports.initComputed = initComputed;
	exports.initMethods = initMethods;

	var _watcher = __webpack_require__(83);

	var _watcher2 = _interopRequireDefault(_watcher);

	var _dep = __webpack_require__(84);

	var _dep2 = _interopRequireDefault(_dep);

	var _observer = __webpack_require__(85);

	var _util = __webpack_require__(76);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/* eslint-disable */

	function initState(vm) {
	  vm._watchers = [];
	  initData(vm);
	  initComputed(vm);
	  initMethods(vm);
	}

	function initData(vm) {
	  var data = vm._data;

	  if (!(0, _util.isPlainObject)(data)) {
	    data = {};
	  }
	  // proxy data on instance
	  var keys = Object.keys(data);
	  var i = keys.length;
	  while (i--) {
	    (0, _observer.proxy)(vm, keys[i]);
	  }
	  // observe data
	  (0, _observer.observe)(data, vm);
	}

	function noop() {}

	function initComputed(vm) {
	  var computed = vm._computed;
	  if (computed) {
	    for (var key in computed) {
	      var userDef = computed[key];
	      var def = {
	        enumerable: true,
	        configurable: true
	      };
	      if (typeof userDef === 'function') {
	        def.get = makeComputedGetter(userDef, vm);
	        def.set = noop;
	      } else {
	        def.get = userDef.get ? userDef.cache !== false ? makeComputedGetter(userDef.get, vm) : (0, _util.bind)(userDef.get, vm) : noop;
	        def.set = userDef.set ? (0, _util.bind)(userDef.set, vm) : noop;
	      }
	      Object.defineProperty(vm, key, def);
	    }
	  }
	}

	function makeComputedGetter(getter, owner) {
	  var watcher = new _watcher2.default(owner, getter, null, {
	    lazy: true
	  });
	  return function computedGetter() {
	    if (watcher.dirty) {
	      watcher.evaluate();
	    }
	    if (_dep2.default.target) {
	      watcher.depend();
	    }
	    return watcher.value;
	  };
	}

	function initMethods(vm) {
	  var methods = vm._methods;
	  if (methods) {
	    for (var key in methods) {
	      vm[key] = (0, _util.bind)(methods[key], vm);
	    }
	  }
	}

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = Watcher;

	var _dep = __webpack_require__(84);

	var _dep2 = _interopRequireDefault(_dep);

	var _util = __webpack_require__(76);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/* eslint-disable */

	var uid = 0;
	// import { pushWatcher } from './batcher'

	var prevTarget = void 0;

	/**
	 * A watcher parses an expression, collects dependencies,
	 * and fires callback when the expression value changes.
	 * This is used for both the $watch() api and directives.
	 *
	 * @param {Vue} vm
	 * @param {String|Function} expOrFn
	 * @param {Function} cb
	 * @param {Object} options
	 *                 - {Array} filters
	 *                 - {Boolean} twoWay
	 *                 - {Boolean} deep
	 *                 - {Boolean} user
	 *                 - {Boolean} sync
	 *                 - {Boolean} lazy
	 *                 - {Function} [preProcess]
	 *                 - {Function} [postProcess]
	 * @constructor
	 */

	function Watcher(vm, expOrFn, cb, options) {
	  // mix in options
	  if (options) {
	    (0, _util.extend)(this, options);
	  }
	  var isFn = typeof expOrFn === 'function';
	  this.vm = vm;
	  vm._watchers.push(this);
	  this.expression = expOrFn;
	  this.cb = cb;
	  this.id = ++uid; // uid for batching
	  this.active = true;
	  this.dirty = this.lazy; // for lazy watchers
	  this.deps = [];
	  this.newDeps = [];
	  this.depIds = new _util._Set();
	  this.newDepIds = new _util._Set();
	  // parse expression for getter
	  if (isFn) {
	    this.getter = expOrFn;
	  } else {
	    this.getter = (0, _util.parsePath)(expOrFn);
	    if (!this.getter) {
	      this.getter = function () {};
	      process.env.NODE_ENV !== 'production' && (0, _util.warn)('Failed watching path: ' + expOrFn + 'Watcher only accepts simple dot-delimited paths. ' + 'For full control, use a function instead.', vm);
	    }
	  }
	  this.value = this.lazy ? undefined : this.get();
	  // state for avoiding false triggers for deep and Array
	  // watchers during vm._digest()
	  this.queued = this.shallow = false;
	}

	/**
	 * Evaluate the getter, and re-collect dependencies.
	 */

	Watcher.prototype.get = function () {
	  this.beforeGet();
	  var value = this.getter.call(this.vm, this.vm);
	  // "touch" every property so they are all tracked as
	  // dependencies for deep watching
	  if (this.deep) {
	    traverse(value);
	  }
	  this.afterGet();
	  return value;
	};

	/**
	 * Prepare for dependency collection.
	 */

	Watcher.prototype.beforeGet = function () {
	  prevTarget = _dep2.default.target;
	  _dep2.default.target = this;
	};

	/**
	 * Add a dependency to this directive.
	 *
	 * @param {Dep} dep
	 */

	Watcher.prototype.addDep = function (dep) {
	  var id = dep.id;
	  if (!this.newDepIds.has(id)) {
	    this.newDepIds.add(id);
	    this.newDeps.push(dep);
	    if (!this.depIds.has(id)) {
	      dep.addSub(this);
	    }
	  }
	};

	/**
	 * Clean up for dependency collection.
	 */

	Watcher.prototype.afterGet = function () {
	  _dep2.default.target = prevTarget;
	  var i = this.deps.length;
	  while (i--) {
	    var dep = this.deps[i];
	    if (!this.newDepIds.has(dep.id)) {
	      dep.removeSub(this);
	    }
	  }
	  var tmp = this.depIds;
	  this.depIds = this.newDepIds;
	  this.newDepIds = tmp;
	  this.newDepIds.clear();
	  tmp = this.deps;
	  this.deps = this.newDeps;
	  this.newDeps = tmp;
	  this.newDeps.length = 0;
	};

	/**
	 * Subscriber interface.
	 * Will be called when a dependency changes.
	 *
	 * @param {Boolean} shallow
	 */

	Watcher.prototype.update = function (shallow) {
	  if (this.lazy) {
	    this.dirty = true;
	  } else {
	    this.run();
	  }
	  // } else if (this.sync) {
	  //   this.run()
	  // } else {
	  //   // if queued, only overwrite shallow with non-shallow,
	  //   // but not the other way around.
	  //   this.shallow = this.queued
	  //     ? shallow
	  //       ? this.shallow
	  //       : false
	  //     : !!shallow
	  //   this.queued = true
	  //   pushWatcher(this)
	  // }
	};

	/**
	 * Batcher job interface.
	 * Will be called by the batcher.
	 */

	Watcher.prototype.run = function () {
	  if (this.active) {
	    var value = this.get();
	    if (value !== this.value ||
	    // Deep watchers and watchers on Object/Arrays should fire even
	    // when the value is the same, because the value may
	    // have mutated; but only do so if this is a
	    // non-shallow update (caused by a vm digest).
	    ((0, _util.isObject)(value) || this.deep) && !this.shallow) {
	      // set new value
	      var oldValue = this.value;
	      this.value = value;
	      this.cb.call(this.vm, value, oldValue);
	    }
	    this.queued = this.shallow = false;
	  }
	};

	/**
	 * Evaluate the value of the watcher.
	 * This only gets called for lazy watchers.
	 */

	Watcher.prototype.evaluate = function () {
	  // avoid overwriting another watcher that is being
	  // collected.
	  var current = _dep2.default.target;
	  this.value = this.get();
	  this.dirty = false;
	  _dep2.default.target = current;
	};

	/**
	 * Depend on all deps collected by this watcher.
	 */

	Watcher.prototype.depend = function () {
	  var i = this.deps.length;
	  while (i--) {
	    this.deps[i].depend();
	  }
	};

	/**
	 * Remove self from all dependencies' subcriber list.
	 */

	Watcher.prototype.teardown = function () {
	  if (this.active) {
	    // remove self from vm's watcher list
	    // this is a somewhat expensive operation so we skip it
	    // if the vm is being destroyed or is performing a v-for
	    // re-render (the watcher list is then filtered by v-for).
	    if (!this.vm._isBeingDestroyed && !this.vm._vForRemoving) {
	      (0, _util.remove)(this.vm._watchers, this);
	    }
	    var i = this.deps.length;
	    while (i--) {
	      this.deps[i].removeSub(this);
	    }
	    this.active = false;
	    this.vm = this.cb = this.value = null;
	  }
	};

	/**
	 * Recrusively traverse an object to evoke all converted
	 * getters, so that every nested property inside the object
	 * is collected as a "deep" dependency.
	 *
	 * @param {*} val
	 * @param {Set} seen
	 */

	var seenObjects = new _util._Set();
	function traverse(val, seen) {
	  var i = void 0,
	      keys = void 0,
	      isA = void 0,
	      isO = void 0;
	  if (!seen) {
	    seen = seenObjects;
	    seen.clear();
	  }
	  isA = Array.isArray(val);
	  isO = (0, _util.isObject)(val);
	  if (isA || isO) {
	    if (val.__ob__) {
	      var depId = val.__ob__.dep.id;
	      if (seen.has(depId)) {
	        return;
	      } else {
	        seen.add(depId);
	      }
	    }
	    if (isA) {
	      i = val.length;
	      while (i--) {
	        traverse(val[i], seen);
	      }
	    } else if (isO) {
	      keys = Object.keys(val);
	      i = keys.length;
	      while (i--) {
	        traverse(val[keys[i]], seen);
	      }
	    }
	  }
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(80)))

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = Dep;

	var _util = __webpack_require__(76);

	var uid = 0;

	/**
	 * A dep is an observable that can have multiple
	 * directives subscribing to it.
	 *
	 * @constructor
	 */

	/* eslint-disable */

	function Dep() {
	  this.id = uid++;
	  this.subs = [];
	}

	// the current target watcher being evaluated.
	// this is globally unique because there could be only one
	// watcher being evaluated at any time.
	Dep.target = null;

	/**
	 * Add a directive subscriber.
	 *
	 * @param {Directive} sub
	 */

	Dep.prototype.addSub = function (sub) {
	  this.subs.push(sub);
	};

	/**
	 * Remove a directive subscriber.
	 *
	 * @param {Directive} sub
	 */

	Dep.prototype.removeSub = function (sub) {
	  (0, _util.remove)(this.subs, sub);
	};

	/**
	 * Add self as a dependency to the target watcher.
	 */

	Dep.prototype.depend = function () {
	  Dep.target.addDep(this);
	};

	/**
	 * Notify all subscribers of a new value.
	 */

	Dep.prototype.notify = function () {
	  // stablize the subscriber list first
	  var subs = this.subs.slice();
	  for (var i = 0, l = subs.length; i < l; i++) {
	    subs[i].update();
	  }
	};

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Observer = Observer;
	exports.observe = observe;
	exports.defineReactive = defineReactive;
	exports.set = set;
	exports.del = del;
	exports.proxy = proxy;
	exports.unproxy = unproxy;

	var _dep = __webpack_require__(84);

	var _dep2 = _interopRequireDefault(_dep);

	var _array = __webpack_require__(86);

	var _util = __webpack_require__(76);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var arrayKeys = Object.getOwnPropertyNames(_array.arrayMethods);

	/**
	 * Observer class that are attached to each observed
	 * object. Once attached, the observer converts target
	 * object's property keys into getter/setters that
	 * collect dependencies and dispatches updates.
	 *
	 * @param {Array|Object} value
	 * @constructor
	 */

	/* eslint-disable */

	function Observer(value) {
	  this.value = value;
	  this.dep = new _dep2.default();
	  (0, _util.def)(value, '__ob__', this);
	  if (Array.isArray(value)) {
	    var augment = _util.hasProto ? protoAugment : copyAugment;
	    augment(value, _array.arrayMethods, arrayKeys);
	    this.observeArray(value);
	  } else {
	    this.walk(value);
	  }
	}

	// Instance methods

	/**
	 * Walk through each property and convert them into
	 * getter/setters. This method should only be called when
	 * value type is Object.
	 *
	 * @param {Object} obj
	 */

	Observer.prototype.walk = function (obj) {
	  for (var key in obj) {
	    this.convert(key, obj[key]);
	  }
	};

	/**
	 * Observe a list of Array items.
	 *
	 * @param {Array} items
	 */

	Observer.prototype.observeArray = function (items) {
	  for (var i = 0, l = items.length; i < l; i++) {
	    observe(items[i]);
	  }
	};

	/**
	 * Convert a property into getter/setter so we can emit
	 * the events when the property is accessed/changed.
	 *
	 * @param {String} key
	 * @param {*} val
	 */

	Observer.prototype.convert = function (key, val) {
	  defineReactive(this.value, key, val);
	};

	/**
	 * Add an owner vm, so that when $set/$delete mutations
	 * happen we can notify owner vms to proxy the keys and
	 * digest the watchers. This is only called when the object
	 * is observed as an instance's root $data.
	 *
	 * @param {Vue} vm
	 */

	Observer.prototype.addVm = function (vm) {
	  (this.vms || (this.vms = [])).push(vm);
	};

	/**
	 * Remove an owner vm. This is called when the object is
	 * swapped out as an instance's $data object.
	 *
	 * @param {Vue} vm
	 */

	Observer.prototype.removeVm = function (vm) {
	  (0, _util.remove)(this.vms, vm);
	};

	// helpers

	/**
	 * Augment an target Object or Array by intercepting
	 * the prototype chain using __proto__
	 *
	 * @param {Object|Array} target
	 * @param {Object} src
	 */

	function protoAugment(target, src) {
	  /* eslint-disable no-proto */
	  target.__proto__ = src;
	  /* eslint-enable no-proto */
	}

	/**
	 * Augment an target Object or Array by defining
	 * hidden properties.
	 *
	 * @param {Object|Array} target
	 * @param {Object} proto
	 */

	function copyAugment(target, src, keys) {
	  for (var i = 0, l = keys.length; i < l; i++) {
	    var key = keys[i];
	    (0, _util.def)(target, key, src[key]);
	  }
	}

	/**
	 * Attempt to create an observer instance for a value,
	 * returns the new observer if successfully observed,
	 * or the existing observer if the value already has one.
	 *
	 * @param {*} value
	 * @param {Vue} [vm]
	 * @return {Observer|undefined}
	 * @static
	 */

	function observe(value, vm) {
	  if (!(0, _util.isObject)(value)) {
	    return;
	  }
	  var ob = void 0;
	  if ((0, _util.hasOwn)(value, '__ob__') && value.__ob__ instanceof Observer) {
	    ob = value.__ob__;
	  } else if ((Array.isArray(value) || (0, _util.isPlainObject)(value)) && Object.isExtensible(value) && !value._isVue) {
	    ob = new Observer(value);
	  }
	  if (ob && vm) {
	    ob.addVm(vm);
	  }
	  return ob;
	}

	/**
	 * Define a reactive property on an Object.
	 *
	 * @param {Object} obj
	 * @param {String} key
	 * @param {*} val
	 */

	function defineReactive(obj, key, val) {
	  var dep = new _dep2.default();

	  var property = Object.getOwnPropertyDescriptor(obj, key);
	  if (property && property.configurable === false) {
	    return;
	  }

	  // cater for pre-defined getter/setters
	  var getter = property && property.get;
	  var setter = property && property.set;

	  var childOb = observe(val);
	  Object.defineProperty(obj, key, {
	    enumerable: true,
	    configurable: true,
	    get: function reactiveGetter() {
	      var value = getter ? getter.call(obj) : val;
	      if (_dep2.default.target) {
	        dep.depend();
	        if (childOb) {
	          childOb.dep.depend();
	        }
	        if (Array.isArray(value)) {
	          for (var e, i = 0, l = value.length; i < l; i++) {
	            e = value[i];
	            e && e.__ob__ && e.__ob__.dep.depend();
	          }
	        }
	      }
	      return value;
	    },
	    set: function reactiveSetter(newVal) {
	      var value = getter ? getter.call(obj) : val;
	      if (newVal === value) {
	        return;
	      }
	      if (setter) {
	        setter.call(obj, newVal);
	      } else {
	        val = newVal;
	      }
	      childOb = observe(newVal);
	      dep.notify();
	    }
	  });
	}

	/**
	 * Set a property on an object. Adds the new property and
	 * triggers change notification if the property doesn't
	 * already exist.
	 *
	 * @param {Object} obj
	 * @param {String} key
	 * @param {*} val
	 * @public
	 */

	function set(obj, key, val) {
	  if (Array.isArray(obj)) {
	    return obj.splice(key, 1, val);
	  }
	  if ((0, _util.hasOwn)(obj, key)) {
	    obj[key] = val;
	    return;
	  }
	  if (obj._isVue) {
	    set(obj._data, key, val);
	    return;
	  }
	  var ob = obj.__ob__;
	  if (!ob) {
	    obj[key] = val;
	    return;
	  }
	  ob.convert(key, val);
	  ob.dep.notify();
	  if (ob.vms) {
	    var i = ob.vms.length;
	    while (i--) {
	      var vm = ob.vms[i];
	      proxy(vm, key);
	      vm.$forceUpdate();
	    }
	  }
	  return val;
	}

	/**
	 * Delete a property and trigger change if necessary.
	 *
	 * @param {Object} obj
	 * @param {String} key
	 */

	function del(obj, key) {
	  if (!(0, _util.hasOwn)(obj, key)) {
	    return;
	  }
	  delete obj[key];
	  var ob = obj.__ob__;

	  if (!ob) {
	    if (obj._isVue) {
	      delete obj._data[key];
	      obj.$forceUpdate();
	    }
	    return;
	  }
	  ob.dep.notify();
	  if (ob.vms) {
	    var i = ob.vms.length;
	    while (i--) {
	      var vm = ob.vms[i];
	      unproxy(vm, key);
	      vm.$forceUpdate();
	    }
	  }
	}

	var KEY_WORDS = ['$index', '$value', '$event'];
	function proxy(vm, key) {
	  if (KEY_WORDS.indexOf(key) > -1 || !(0, _util.isReserved)(key)) {
	    Object.defineProperty(vm, key, {
	      configurable: true,
	      enumerable: true,
	      get: function proxyGetter() {
	        return vm._data[key];
	      },
	      set: function proxySetter(val) {
	        vm._data[key] = val;
	      }
	    });
	  }
	}

	function unproxy(vm, key) {
	  if (!(0, _util.isReserved)(key)) {
	    delete vm[key];
	  }
	}

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.arrayMethods = undefined;

	var _util = __webpack_require__(76);

	var arrayProto = Array.prototype; /* eslint-disable */

	var arrayMethods = exports.arrayMethods = Object.create(arrayProto)

	/**
	 * Intercept mutating methods and emit events
	 */

	;['push', 'pop', 'shift', 'unshift', 'splice', 'sort', 'reverse'].forEach(function (method) {
	  // cache original method
	  var original = arrayProto[method];
	  (0, _util.def)(arrayMethods, method, function mutator() {
	    // avoid leaking arguments:
	    // http://jsperf.com/closure-with-arguments
	    var i = arguments.length;
	    var args = new Array(i);
	    while (i--) {
	      args[i] = arguments[i];
	    }
	    var result = original.apply(this, args);
	    var ob = this.__ob__;
	    var inserted = void 0;
	    switch (method) {
	      case 'push':
	        inserted = args;
	        break;
	      case 'unshift':
	        inserted = args;
	        break;
	      case 'splice':
	        inserted = args.slice(2);
	        break;
	    }
	    if (inserted) ob.observeArray(inserted);
	    // notify change
	    ob.dep.notify();
	    return result;
	  });
	});

	/**
	 * Swap the element at the given index with a new value
	 * and emits corresponding event.
	 *
	 * @param {Number} index
	 * @param {*} val
	 * @return {*} - replaced element
	 */

	(0, _util.def)(arrayProto, '$set', function $set(index, val) {
	  if (index >= this.length) {
	    this.length = index + 1;
	  }
	  return this.splice(index, 1, val)[0];
	});

	/**
	 * Convenience method to remove the element at given index.
	 *
	 * @param {Number} index
	 * @param {*} val
	 */

	(0, _util.def)(arrayProto, '$remove', function $remove(index) {
	  /* istanbul ignore if */
	  if (!this.length) return;
	  if (typeof index !== 'number') {
	    index = this.indexOf(index);
	  }
	  if (index > -1) {
	    this.splice(index, 1);
	  }
	});

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; }; /**
	                                                                                                                                                                                                                                                   * @fileOverview
	                                                                                                                                                                                                                                                   * ViewModel template parser & data-binding process
	                                                                                                                                                                                                                                                   *
	                                                                                                                                                                                                                                                   * required:
	                                                                                                                                                                                                                                                   * index.js: Vm
	                                                                                                                                                                                                                                                   * dom-helper.js: createElement, createBlock
	                                                                                                                                                                                                                                                   * dom-helper.js: attachTarget, moveTarget, removeTarget
	                                                                                                                                                                                                                                                   * directive.js: bindElement, bindSubVm, setId, watch
	                                                                                                                                                                                                                                                   * events.js: $on
	                                                                                                                                                                                                                                                   */

	exports.build = build;

	var _util = __webpack_require__(76);

	var _state = __webpack_require__(82);

	var _directive = __webpack_require__(88);

	var _domHelper = __webpack_require__(89);

	/**
	 * build(externalDirs)
	 *   createVm()
	 *   merge(externalDirs, dirs)
	 *   compile(template, parentNode)
	 *     if (type is content) create contentNode
	 *     else if (dirs have v-for) foreach -> create context
	 *       -> compile(templateWithoutFor, parentNode): diff(list) onchange
	 *     else if (dirs have v-if) assert
	 *       -> compile(templateWithoutIf, parentNode): toggle(shown) onchange
	 *     else if (type is dynamic)
	 *       -> compile(templateWithoutDynamicType, parentNode): watch(type) onchange
	 *     else if (type is custom)
	 *       addChildVm(vm, parentVm)
	 *       build(externalDirs)
	 *       foreach childNodes -> compile(childNode, template)
	 *     else if (type is native)
	 *       set(dirs): update(id/attr/style/class) onchange
	 *       append(template, parentNode)
	 *       foreach childNodes -> compile(childNode, template)
	 */
	function build(vm) {
	  var opt = vm._options || {};
	  var template = opt.template || {};

	  if (opt.replace) {
	    if (template.children && template.children.length === 1) {
	      compile(vm, template.children[0], vm._parentEl);
	    } else {
	      compile(vm, template.children, vm._parentEl);
	    }
	  } else {
	    compile(vm, template, vm._parentEl);
	  }

	  console.debug('[JS Framework] "ready" lifecycle in Vm(' + vm._type + ')');
	  vm.$emit('hook:ready');
	  vm._ready = true;
	}

	/**
	 * Generate elements by child or children and append to parent elements.
	 * Root element info would be merged if has. The first argument may be an array
	 * if the root element with options.replace has not only one child.
	 *
	 * @param {object|array} target
	 * @param {object}       dest
	 * @param {object}       meta
	 */
	function compile(vm, target, dest, meta) {
	  var app = vm._app || {};

	  if (app.lastSignal === -1) {
	    return;
	  }

	  if (targetIsFragment(target)) {
	    compileFragment(vm, target, dest, meta);
	    return;
	  }
	  meta = meta || {};
	  if (targetIsContent(target)) {
	    console.debug('[JS Framework] compile "content" block by', target);
	    vm._content = (0, _domHelper.createBlock)(vm, dest);
	    return;
	  }

	  if (targetNeedCheckRepeat(target, meta)) {
	    console.debug('[JS Framework] compile "repeat" logic by', target);
	    compileRepeat(vm, target, dest);
	    return;
	  }
	  if (targetNeedCheckShown(target, meta)) {
	    console.debug('[JS Framework] compile "if" logic by', target);
	    compileShown(vm, target, dest, meta);
	    return;
	  }
	  var typeGetter = meta.type || target.type;
	  if (targetNeedCheckType(typeGetter, meta)) {
	    compileType(vm, target, dest, typeGetter, meta);
	    return;
	  }
	  var type = typeGetter;
	  var component = targetIsComposed(vm, target, type);
	  if (component) {
	    console.debug('[JS Framework] compile composed component by', target);
	    compileCustomComponent(vm, component, target, dest, type, meta);
	    return;
	  }
	  console.debug('[JS Framework] compile native component by', target);
	  compileNativeComponent(vm, target, dest, type);
	}

	/**
	 * Check if target is a fragment (an array).
	 *
	 * @param  {object}  target
	 * @return {boolean}
	 */
	function targetIsFragment(target) {
	  return Array.isArray(target);
	}

	/**
	 * Check if target type is content/slot.
	 *
	 * @param  {object}  target
	 * @return {boolean}
	 */
	function targetIsContent(target) {
	  return target.type === 'content' || target.type === 'slot';
	}

	/**
	 * Check if target need to compile by a list.
	 *
	 * @param  {object}  target
	 * @param  {object}  meta
	 * @return {boolean}
	 */
	function targetNeedCheckRepeat(target, meta) {
	  return !meta.hasOwnProperty('repeat') && target.repeat;
	}

	/**
	 * Check if target need to compile by a boolean value.
	 *
	 * @param  {object}  target
	 * @param  {object}  meta
	 * @return {boolean}
	 */
	function targetNeedCheckShown(target, meta) {
	  return !meta.hasOwnProperty('shown') && target.shown;
	}

	/**
	 * Check if target need to compile by a dynamic type.
	 *
	 * @param  {string|function} typeGetter
	 * @param  {object}          meta
	 * @return {boolean}
	 */
	function targetNeedCheckType(typeGetter, meta) {
	  return typeof typeGetter === 'function' && !meta.hasOwnProperty('type');
	}

	/**
	 * Check if this kind of component is composed.
	 *
	 * @param  {string}  type
	 * @return {boolean}
	 */
	function targetIsComposed(vm, target, type) {
	  var component = void 0;
	  if (vm._app && vm._app.customComponentMap) {
	    component = vm._app.customComponentMap[type];
	  }
	  if (vm._options && vm._options.components) {
	    component = vm._options.components[type];
	  }
	  if (target.component) {
	    component = component || {};
	  }
	  return component;
	}

	/**
	 * Compile a list of targets.
	 *
	 * @param {object} target
	 * @param {object} dest
	 * @param {object} meta
	 */
	function compileFragment(vm, target, dest, meta) {
	  var fragBlock = (0, _domHelper.createBlock)(vm, dest);
	  target.forEach(function (child) {
	    compile(vm, child, fragBlock, meta);
	  });
	}

	/**
	 * Compile a target with repeat directive.
	 *
	 * @param {object} target
	 * @param {object} dest
	 */
	function compileRepeat(vm, target, dest) {
	  var repeat = target.repeat;
	  var oldStyle = typeof repeat === 'function';
	  var getter = repeat.getter || repeat.expression || repeat;
	  if (typeof getter !== 'function') {
	    getter = function getter() {
	      return [];
	    };
	  }
	  var key = repeat.key || '$index';
	  var value = repeat.value || '$value';
	  var trackBy = repeat.trackBy || target.trackBy || target.attr && target.attr.trackBy;

	  var fragBlock = (0, _domHelper.createBlock)(vm, dest);
	  fragBlock.children = [];
	  fragBlock.data = [];
	  fragBlock.vms = [];

	  bindRepeat(vm, target, fragBlock, { getter: getter, key: key, value: value, trackBy: trackBy, oldStyle: oldStyle });
	}

	/**
	 * Compile a target with if directive.
	 *
	 * @param {object} target
	 * @param {object} dest
	 * @param {object} meta
	 */
	function compileShown(vm, target, dest, meta) {
	  var newMeta = { shown: true };
	  var fragBlock = (0, _domHelper.createBlock)(vm, dest);

	  if (dest.element && dest.children) {
	    dest.children.push(fragBlock);
	  }

	  if (meta.repeat) {
	    newMeta.repeat = meta.repeat;
	  }

	  bindShown(vm, target, fragBlock, newMeta);
	}

	/**
	 * Compile a target with dynamic component type.
	 *
	 * @param {object}   target
	 * @param {object}   dest
	 * @param {function} typeGetter
	 */
	function compileType(vm, target, dest, typeGetter, meta) {
	  var type = typeGetter.call(vm);
	  var newMeta = (0, _util.extend)({ type: type }, meta);
	  var fragBlock = (0, _domHelper.createBlock)(vm, dest);

	  if (dest.element && dest.children) {
	    dest.children.push(fragBlock);
	  }

	  (0, _directive.watch)(vm, typeGetter, function (value) {
	    var newMeta = (0, _util.extend)({ type: value }, meta);
	    (0, _domHelper.removeTarget)(vm, fragBlock, true);
	    compile(vm, target, fragBlock, newMeta);
	  });

	  compile(vm, target, fragBlock, newMeta);
	}

	/**
	 * Compile a composed component.
	 *
	 * @param {object} target
	 * @param {object} dest
	 * @param {string} type
	 */
	function compileCustomComponent(vm, component, target, dest, type, meta) {
	  var Ctor = vm.constructor;
	  var subVm = new Ctor(type, component, vm, dest, undefined, {
	    'hook:init': function hookInit() {
	      (0, _directive.setId)(vm, null, target.id, this);
	      // bind template earlier because of lifecycle issues
	      this._externalBinding = {
	        parent: vm,
	        template: target
	      };
	    },
	    'hook:created': function hookCreated() {
	      (0, _directive.bindSubVm)(vm, this, target, meta.repeat);
	    },
	    'hook:ready': function hookReady() {
	      if (this._content) {
	        compileChildren(vm, target, this._content);
	      }
	    }
	  });
	  (0, _directive.bindSubVmAfterInitialized)(vm, subVm, target);
	}

	/**
	 * Generate element from template and attach to the dest if needed.
	 * The time to attach depends on whether the mode status is node or tree.
	 *
	 * @param {object} template
	 * @param {object} dest
	 * @param {string} type
	 */
	function compileNativeComponent(vm, template, dest, type) {
	  (0, _directive.applyNaitveComponentOptions)(template);

	  var element = void 0;
	  if (dest.ref === '_documentElement') {
	    // if its parent is documentElement then it's a body
	    console.debug('[JS Framework] compile to create body for ' + type);
	    element = (0, _domHelper.createBody)(vm, type);
	  } else {
	    console.debug('[JS Framework] compile to create element for ' + type);
	    element = (0, _domHelper.createElement)(vm, type);
	  }

	  if (!vm._rootEl) {
	    vm._rootEl = element;
	    // bind event earlier because of lifecycle issues
	    var binding = vm._externalBinding || {};
	    var target = binding.template;
	    var parentVm = binding.parent;
	    if (target && target.events && parentVm && element) {
	      for (var _type in target.events) {
	        var handler = parentVm[target.events[_type]];
	        if (handler) {
	          element.addEvent(_type, (0, _util.bind)(handler, parentVm));
	        }
	      }
	    }
	  }

	  (0, _directive.bindElement)(vm, element, template);

	  if (template.attr && template.attr.append) {
	    // backward, append prop in attr
	    template.append = template.attr.append;
	  }

	  if (template.append) {
	    // give the append attribute for ios adaptation
	    element.attr = element.attr || {};
	    element.attr.append = template.append;
	  }

	  var treeMode = template.append === 'tree';
	  var app = vm._app || {};
	  if (app.lastSignal !== -1 && !treeMode) {
	    console.debug('[JS Framework] compile to append single node for', element);
	    app.lastSignal = (0, _domHelper.attachTarget)(vm, element, dest);
	  }
	  if (app.lastSignal !== -1) {
	    compileChildren(vm, template, element);
	  }
	  if (app.lastSignal !== -1 && treeMode) {
	    console.debug('[JS Framework] compile to append whole tree for', element);
	    app.lastSignal = (0, _domHelper.attachTarget)(vm, element, dest);
	  }
	}

	/**
	 * Set all children to a certain parent element.
	 *
	 * @param {object} template
	 * @param {object} dest
	 */
	function compileChildren(vm, template, dest) {
	  var app = vm._app || {};
	  var children = template.children;
	  if (children && children.length) {
	    children.every(function (child) {
	      compile(vm, child, dest);
	      return app.lastSignal !== -1;
	    });
	  }
	}

	/**
	 * Watch the list update and refresh the changes.
	 *
	 * @param {object} target
	 * @param {object} fragBlock {vms, data, children}
	 * @param {object} info      {getter, key, value, trackBy, oldStyle}
	 */
	function bindRepeat(vm, target, fragBlock, info) {
	  var vms = fragBlock.vms;
	  var children = fragBlock.children;
	  var getter = info.getter;
	  var trackBy = info.trackBy;
	  var oldStyle = info.oldStyle;

	  var keyName = info.key;
	  var valueName = info.value;

	  function compileItem(item, index, context) {
	    var mergedData = void 0;
	    if (oldStyle) {
	      mergedData = item;
	      if ((typeof item === 'undefined' ? 'undefined' : _typeof(item)) === 'object') {
	        mergedData[keyName] = index;
	        if (!mergedData.hasOwnProperty('INDEX')) {
	          Object.defineProperty(mergedData, 'INDEX', {
	            value: function value() {
	              console.warn('[JS Framework] "INDEX" in repeat is deprecated, ' + 'please use "$index" instead');
	            }
	          });
	        }
	      }
	    } else {
	      mergedData = {};
	      mergedData[keyName] = index;
	      mergedData[valueName] = item;
	    }
	    var newContext = mergeContext(context, mergedData);
	    vms.push(newContext);
	    compile(newContext, target, fragBlock, { repeat: item });
	  }

	  var list = watchBlock(vm, fragBlock, getter, 'repeat', function (data) {
	    console.debug('[JS Framework] the "repeat" item has changed', data);
	    if (!fragBlock) {
	      return;
	    }

	    var oldChildren = children.slice();
	    var oldVms = vms.slice();
	    var oldData = fragBlock.data.slice();
	    // 1. collect all new refs track by
	    var trackMap = {};
	    var reusedMap = {};
	    data.forEach(function (item, index) {
	      var key = trackBy ? item[trackBy] : oldStyle ? item[keyName] : index;
	      /* istanbul ignore if */
	      if (key == null || key === '') {
	        return;
	      }
	      trackMap[key] = item;
	    });

	    // 2. remove unused element foreach old item
	    var reusedList = [];
	    oldData.forEach(function (item, index) {
	      var key = trackBy ? item[trackBy] : oldStyle ? item[keyName] : index;
	      if (trackMap.hasOwnProperty(key)) {
	        reusedMap[key] = {
	          item: item, index: index, key: key,
	          target: oldChildren[index],
	          vm: oldVms[index]
	        };
	        reusedList.push(item);
	      } else {
	        (0, _domHelper.removeTarget)(vm, oldChildren[index]);
	      }
	    });

	    // 3. create new element foreach new item
	    children.length = 0;
	    vms.length = 0;
	    fragBlock.data = data.slice();
	    fragBlock.updateMark = fragBlock.start;

	    data.forEach(function (item, index) {
	      var key = trackBy ? item[trackBy] : oldStyle ? item[keyName] : index;
	      var reused = reusedMap[key];
	      if (reused) {
	        if (reused.item === reusedList[0]) {
	          reusedList.shift();
	        } else {
	          reusedList.$remove(reused.item);
	          (0, _domHelper.moveTarget)(vm, reused.target, fragBlock.updateMark, true);
	        }
	        children.push(reused.target);
	        vms.push(reused.vm);
	        if (oldStyle) {
	          reused.vm = item;
	        } else {
	          reused.vm[valueName] = item;
	        }
	        reused.vm[keyName] = index;
	        fragBlock.updateMark = reused.target;
	      } else {
	        compileItem(item, index, vm);
	      }
	    });

	    delete fragBlock.updateMark;
	  });

	  fragBlock.data = list.slice(0);
	  list.forEach(function (item, index) {
	    compileItem(item, index, vm);
	  });
	}

	/**
	 * Watch the display update and add/remove the element.
	 *
	 * @param  {object} target
	 * @param  {object} fragBlock
	 * @param  {object} context
	 */
	function bindShown(vm, target, fragBlock, meta) {
	  var display = watchBlock(vm, fragBlock, target.shown, 'shown', function (display) {
	    console.debug('[JS Framework] the "if" item was changed', display);

	    if (!fragBlock || !!fragBlock.display === !!display) {
	      return;
	    }
	    fragBlock.display = !!display;
	    if (display) {
	      compile(vm, target, fragBlock, meta);
	    } else {
	      (0, _domHelper.removeTarget)(vm, fragBlock, true);
	    }
	  });

	  fragBlock.display = !!display;
	  if (display) {
	    compile(vm, target, fragBlock, meta);
	  }
	}

	/**
	 * Watch calc value changes and append certain type action to differ.
	 * It is used for if or repeat data-binding generator.
	 *
	 * @param  {object}   fragBlock
	 * @param  {function} calc
	 * @param  {string}   type
	 * @param  {function} handler
	 * @return {any}      init value of calc
	 */
	function watchBlock(vm, fragBlock, calc, type, handler) {
	  var differ = vm && vm._app && vm._app.differ;
	  var config = {};
	  var depth = (fragBlock.element.depth || 0) + 1;

	  return (0, _directive.watch)(vm, calc, function (value) {
	    config.latestValue = value;
	    if (differ && !config.recorded) {
	      differ.append(type, depth, fragBlock.blockId, function () {
	        var latestValue = config.latestValue;
	        handler(latestValue);
	        config.recorded = false;
	        config.latestValue = undefined;
	      });
	    }
	    config.recorded = true;
	  });
	}

	/**
	 * Clone a context and merge certain data.
	 *
	 * @param  {object} mergedData
	 * @return {object}
	 */
	function mergeContext(context, mergedData) {
	  var newContext = Object.create(context);
	  newContext._data = mergedData;
	  (0, _state.initData)(newContext);
	  (0, _state.initComputed)(newContext);
	  newContext._realParent = context;
	  return newContext;
	}

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; }; /**
	                                                                                                                                                                                                                                                   * @fileOverview
	                                                                                                                                                                                                                                                   * Directive Parser
	                                                                                                                                                                                                                                                   */

	exports.applyNaitveComponentOptions = applyNaitveComponentOptions;
	exports.bindElement = bindElement;
	exports.bindSubVm = bindSubVm;
	exports.bindSubVmAfterInitialized = bindSubVmAfterInitialized;
	exports.setId = setId;
	exports.watch = watch;

	var _util = __webpack_require__(76);

	var _watcher = __webpack_require__(83);

	var _watcher2 = _interopRequireDefault(_watcher);

	var _config = __webpack_require__(74);

	var _config2 = _interopRequireDefault(_config);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var nativeComponentMap = _config2.default.nativeComponentMap;


	var SETTERS = {
	  attr: 'setAttr',
	  style: 'setStyle',
	  event: 'addEvent'
	};

	/**
	 * apply the native component's options(specified by template.type)
	 * to the template
	 */
	function applyNaitveComponentOptions(template) {
	  var type = template.type;

	  var options = nativeComponentMap[type];

	  if ((typeof options === 'undefined' ? 'undefined' : _typeof(options)) === 'object') {
	    for (var key in options) {
	      if (template[key] == null) {
	        template[key] = options[key];
	      } else if ((0, _util.typof)(template[key]) === 'object' && (0, _util.typof)(options[key]) === 'object') {
	        for (var subkey in options[key]) {
	          if (template[key][subkey] == null) {
	            template[key][subkey] = options[key][subkey];
	          }
	        }
	      }
	    }
	  }
	}

	/**
	 * bind all id, attr, classnames, style, events to an element
	 */
	function bindElement(vm, el, template) {
	  setId(vm, el, template.id, vm);
	  setAttr(vm, el, template.attr);
	  setClass(vm, el, template.classList);
	  setStyle(vm, el, template.style);
	  bindEvents(vm, el, template.events);
	}

	/**
	 * bind all props to sub vm and bind all style, events to the root element
	 * of the sub vm if it doesn't have a replaced multi-node fragment
	 */
	function bindSubVm(vm, subVm, template, repeatItem) {
	  subVm = subVm || {};
	  template = template || {};

	  var options = subVm._options || {};

	  // bind props
	  var props = options.props;

	  if (Array.isArray(props)) {
	    props = props.reduce(function (result, value) {
	      result[value] = true;
	      return result;
	    }, {});
	  }

	  mergeProps(repeatItem, props, vm, subVm);
	  mergeProps(template.attr, props, vm, subVm);
	}

	function bindSubVmAfterInitialized(vm, subVm, template) {
	  mergeClassStyle(template.classList, vm, subVm);
	  mergeStyle(template.style, vm, subVm);
	}

	function mergeProps(target, props, vm, subVm) {
	  if (!target) {
	    return;
	  }

	  var _loop = function _loop(key) {
	    if (!props || props[key]) {
	      var value = target[key];
	      if (typeof value === 'function') {
	        var returnValue = watch(vm, value, function (v) {
	          subVm[key] = v;
	        });
	        subVm[key] = returnValue;
	      } else {
	        subVm[key] = value;
	      }
	    }
	  };

	  for (var key in target) {
	    _loop(key);
	  }
	}

	function mergeStyle(target, vm, subVm) {
	  var _loop2 = function _loop2(key) {
	    var value = target[key];
	    if (typeof value === 'function') {
	      var returnValue = watch(vm, value, function (v) {
	        if (subVm._rootEl) {
	          subVm._rootEl.setStyle(key, v);
	        }
	      });
	      subVm._rootEl.setStyle(key, returnValue);
	    } else {
	      if (subVm._rootEl) {
	        subVm._rootEl.setStyle(key, value);
	      }
	    }
	  };

	  for (var key in target) {
	    _loop2(key);
	  }
	}

	function mergeClassStyle(target, vm, subVm) {
	  var css = vm._options && vm._options.style || {};

	  /* istanbul ignore if */
	  if (!subVm._rootEl) {
	    return;
	  }

	  if (typeof target === 'function') {
	    var _value = watch(vm, target, function (v) {
	      setClassStyle(subVm._rootEl, css, v);
	    });
	    setClassStyle(subVm._rootEl, css, _value);
	  } else if (target != null) {
	    setClassStyle(subVm._rootEl, css, target);
	  }
	}

	/**
	 * bind id to an element
	 * each id is unique in a whole vm
	 */
	function setId(vm, el, id, target) {
	  var map = Object.create(null);

	  Object.defineProperties(map, {
	    vm: {
	      value: target,
	      writable: false,
	      configurable: false
	    },
	    el: {
	      get: function get() {
	        return el || target._rootEl;
	      },
	      configurable: false
	    }
	  });

	  if (typeof id === 'function') {
	    var handler = id;
	    id = handler.call(vm);
	    if (id) {
	      vm._ids[id] = map;
	    }
	    watch(vm, handler, function (newId) {
	      if (newId) {
	        vm._ids[newId] = map;
	      }
	    });
	  } else if (id && typeof id === 'string') {
	    vm._ids[id] = map;
	  }
	}

	/**
	 * bind attr to an element
	 */
	function setAttr(vm, el, attr) {
	  bindDir(vm, el, 'attr', attr);
	}

	function setClassStyle(el, css, classList) {
	  var classStyle = {};
	  var length = classList.length;

	  for (var i = 0; i < length; i++) {
	    var style = css[classList[i]];
	    if (style) {
	      for (var key in style) {
	        classStyle[key] = style[key];
	      }
	    }
	  }
	  el.setClassStyle(classStyle);
	}

	/**
	 * bind classnames to an element
	 */
	function setClass(vm, el, classList) {
	  if (typeof classList !== 'function' && !Array.isArray(classList)) {
	    return;
	  }
	  if (Array.isArray(classList) && !classList.length) {
	    el.setClassStyle({});
	    return;
	  }

	  var style = vm._options && vm._options.style || {};
	  if (typeof classList === 'function') {
	    var _value2 = watch(vm, classList, function (v) {
	      setClassStyle(el, style, v);
	    });
	    setClassStyle(el, style, _value2);
	  } else {
	    setClassStyle(el, style, classList);
	  }
	}

	/**
	 * bind style to an element
	 */
	function setStyle(vm, el, style) {
	  bindDir(vm, el, 'style', style);
	}

	/**
	 * add an event type and handler to an element and generate a dom update
	 */
	function setEvent(vm, el, type, handler) {
	  el.addEvent(type, (0, _util.bind)(handler, vm));
	}

	/**
	 * add all events of an element
	 */
	function bindEvents(vm, el, events) {
	  if (!events) {
	    return;
	  }
	  var keys = Object.keys(events);
	  var i = keys.length;
	  while (i--) {
	    var key = keys[i];
	    var handler = events[key];
	    if (typeof handler === 'string') {
	      handler = vm[handler];
	      /* istanbul ignore if */
	      if (!handler) {
	        console.debug('[JS Framework] The method "' + handler + '" is not defined.');
	      }
	    }
	    setEvent(vm, el, key, handler);
	  }
	}

	/**
	 * set a series of members as a kind of an element
	 * for example: style, attr, ...
	 * if the value is a function then bind the data changes
	 */
	function bindDir(vm, el, name, data) {
	  if (!data) {
	    return;
	  }
	  var keys = Object.keys(data);
	  var i = keys.length;
	  while (i--) {
	    var key = keys[i];
	    var _value3 = data[key];
	    if (typeof _value3 === 'function') {
	      bindKey(vm, el, name, key, _value3);
	    } else {
	      el[SETTERS[name]](key, _value3);
	    }
	  }
	}

	/**
	 * bind data changes to a certain key to a name series in an element
	 */
	function bindKey(vm, el, name, key, calc) {
	  var methodName = SETTERS[name];
	  // watch the calc, and returns a value by calc.call()
	  var value = watch(vm, calc, function (value) {
	    function handler() {
	      el[methodName](key, value);
	    }
	    var differ = vm && vm._app && vm._app.differ;
	    if (differ) {
	      differ.append('element', el.depth, el.ref, handler);
	    } else {
	      handler();
	    }
	  });

	  el[methodName](key, value);
	}

	/**
	 * watch a calc function and callback if the calc value changes
	 */
	function watch(vm, calc, callback) {
	  var watcher = new _watcher2.default(vm, calc, function (value, oldValue) {
	    /* istanbul ignore if */
	    if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) !== 'object' && value === oldValue) {
	      return;
	    }
	    callback(value);
	  });

	  return watcher.value;
	}

/***/ },
/* 89 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	exports.createBody = createBody;
	exports.createElement = createElement;
	exports.createBlock = createBlock;
	exports.attachTarget = attachTarget;
	exports.moveTarget = moveTarget;
	exports.removeTarget = removeTarget;
	/**
	 * @fileOverview Document & Element Helpers.
	 *
	 * required:
	 * Document#: createElement, createComment, getRef
	 * Element#: appendChild, insertBefore, removeChild, nextSibling
	 */

	/**
	 * Create a body by type
	 * Using this._app.doc
	 *
	 * @param  {string} type
	 */
	function createBody(vm, type) {
	  var doc = vm._app.doc;
	  return doc.createBody(type);
	}

	/**
	 * Create an element by type
	 * Using this._app.doc
	 *
	 * @param  {string} type
	 */
	function createElement(vm, type) {
	  var doc = vm._app.doc;
	  return doc.createElement(type);
	}

	/**
	 * Create and return a frag block for an element.
	 * The frag block has a starter, ender and the element itself.
	 *
	 * @param  {object} element
	 */
	function createBlock(vm, element) {
	  var start = createBlockStart(vm);
	  var end = createBlockEnd(vm);
	  var blockId = lastestBlockId++;
	  if (element.element) {
	    var updateMark = element.updateMark;
	    if (updateMark) {
	      if (updateMark.element) {
	        updateMark = updateMark.end;
	      }
	      element.element.insertAfter(end, updateMark);
	      element.element.insertAfter(start, updateMark);
	      element.updateMark = end;
	    } else {
	      element.element.insertBefore(start, element.end);
	      element.element.insertBefore(end, element.end);
	    }
	    element = element.element;
	  } else {
	    element.appendChild(start);
	    element.appendChild(end);
	  }
	  return { start: start, end: end, element: element, blockId: blockId };
	}

	var lastestBlockId = 1;

	/**
	 * Create and return a block starter.
	 * Using this._app.doc
	 */
	function createBlockStart(vm) {
	  var doc = vm._app.doc;
	  var anchor = doc.createComment('start');
	  return anchor;
	}

	/**
	 * Create and return a block ender.
	 * Using this._app.doc
	 */
	function createBlockEnd(vm) {
	  var doc = vm._app.doc;
	  var anchor = doc.createComment('end');
	  return anchor;
	}

	/**
	 * Attach target to a certain dest using appendChild by default.
	 * If the dest is a frag block then insert before the ender.
	 * If the target is a frag block then attach the starter and ender in order.
	 *
	 * @param  {object} target
	 * @param  {object} dest
	 */
	function attachTarget(vm, target, dest) {
	  if (dest.element) {
	    var before = dest.end;
	    var after = dest.updateMark;
	    // push new target for watch list update later
	    if (dest.children) {
	      dest.children.push(target);
	    }
	    // for check repeat case
	    if (after) {
	      var signal = moveTarget(vm, target, after);
	      dest.updateMark = target.element ? target.end : target;
	      return signal;
	    } else if (target.element) {
	      dest.element.insertBefore(target.start, before);
	      dest.element.insertBefore(target.end, before);
	    } else {
	      return dest.element.insertBefore(target, before);
	    }
	  } else {
	    if (target.element) {
	      dest.appendChild(target.start);
	      dest.appendChild(target.end);
	    } else {
	      return dest.appendChild(target);
	    }
	  }
	}

	/**
	 * Move target before a certain element. The target maybe block or element.
	 *
	 * @param  {object} target
	 * @param  {object} before
	 */
	function moveTarget(vm, target, after) {
	  if (target.element) {
	    return moveBlock(target, after);
	  }
	  return moveElement(target, after);
	}

	/**
	 * Move element before a certain element.
	 *
	 * @param  {object} element
	 * @param  {object} before
	 */
	function moveElement(element, after) {
	  var parent = after.parentNode;
	  if (parent) {
	    return parent.insertAfter(element, after);
	  }
	}

	/**
	 * Move all elements of the block before a certain element.
	 *
	 * @param  {object} fragBlock
	 * @param  {object} before
	 */
	function moveBlock(fragBlock, after) {
	  var parent = after.parentNode;

	  if (parent) {
	    var _ret = function () {
	      var el = fragBlock.start;
	      var signal = void 0;
	      var group = [el];

	      while (el && el !== fragBlock.end) {
	        el = el.nextSibling;
	        group.push(el);
	      }

	      var temp = after;
	      group.every(function (el) {
	        signal = parent.insertAfter(el, temp);
	        temp = el;
	        return signal !== -1;
	      });

	      return {
	        v: signal
	      };
	    }();

	    if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
	  }
	}

	/**
	 * Remove target from DOM tree.
	 * If the target is a frag block then call _removeBlock
	 *
	 * @param  {object} target
	 */
	function removeTarget(vm, target) {
	  var preserveBlock = arguments.length <= 2 || arguments[2] === undefined ? false : arguments[2];

	  if (target.element) {
	    removeBlock(target, preserveBlock);
	  } else {
	    removeElement(target);
	  }
	}

	/**
	 * Remove a certain element.
	 * Using this._app.doc
	 *
	 * @param  {object} target
	 */
	function removeElement(target) {
	  var parent = target.parentNode;

	  if (parent) {
	    parent.removeChild(target);
	  }
	}

	/**
	 * Remove a frag block.
	 * The second param decides whether the block self should be removed too.
	 *
	 * @param  {object}  fragBlock
	 * @param  {Boolean} preserveBlock=false
	 */
	function removeBlock(fragBlock) {
	  var preserveBlock = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];

	  var result = [];
	  var el = fragBlock.start.nextSibling;

	  while (el && el !== fragBlock.end) {
	    result.push(el);
	    el = el.nextSibling;
	  }

	  if (!preserveBlock) {
	    removeElement(fragBlock.start);
	  }
	  result.forEach(function (el) {
	    removeElement(el);
	  });
	  if (!preserveBlock) {
	    removeElement(fragBlock.end);
	  }
	}

/***/ },
/* 90 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.$emit = $emit;
	exports.$dispatch = $dispatch;
	exports.$broadcast = $broadcast;
	exports.$on = $on;
	exports.$off = $off;
	exports.initEvents = initEvents;
	exports.mixinEvents = mixinEvents;
	function Evt(type, detail) {
	  if (detail instanceof Evt) {
	    return detail;
	  }

	  this.timestamp = Date.now();
	  this.detail = detail;
	  this.type = type;

	  var shouldStop = false;
	  this.stop = function () {
	    shouldStop = true;
	  };
	  this.hasStopped = function () {
	    return shouldStop;
	  };
	}

	function $emit(type, detail) {
	  var _this = this;

	  var events = this._vmEvents;
	  var handlerList = events[type];
	  if (handlerList) {
	    (function () {
	      var evt = new Evt(type, detail);
	      handlerList.forEach(function (handler) {
	        handler.call(_this, evt);
	      });
	    })();
	  }
	}

	function $dispatch(type, detail) {
	  var evt = new Evt(type, detail);
	  this.$emit(type, evt);

	  if (!evt.hasStopped() && this._parent && this._parent.$dispatch) {
	    this._parent.$dispatch(type, evt);
	  }
	}

	function $broadcast(type, detail) {
	  var evt = new Evt(type, detail);
	  this.$emit(type, evt);

	  if (!evt.hasStopped() && this._childrenVms) {
	    this._childrenVms.forEach(function (subVm) {
	      subVm.$broadcast(type, evt);
	    });
	  }
	}

	function $on(type, handler) {
	  if (!type || typeof handler !== 'function') {
	    return;
	  }
	  var events = this._vmEvents;
	  var handlerList = events[type] || [];
	  handlerList.push(handler);
	  events[type] = handlerList;

	  // fixed old version lifecycle design
	  if (type === 'hook:ready' && this._ready) {
	    this.$emit('hook:ready');
	  }
	}

	function $off(type, handler) {
	  if (!type) {
	    return;
	  }
	  var events = this._vmEvents;
	  if (!handler) {
	    delete events[type];
	    return;
	  }
	  var handlerList = events[type];
	  if (!handlerList) {
	    return;
	  }
	  handlerList.$remove(handler);
	}

	var LIFE_CYCLE_TYPES = ['init', 'created', 'ready'];

	function initEvents(vm, externalEvents) {
	  var options = vm._options || {};
	  var events = options.events || {};
	  for (var type1 in events) {
	    vm.$on(type1, events[type1]);
	  }
	  for (var type2 in externalEvents) {
	    vm.$on(type2, externalEvents[type2]);
	  }
	  LIFE_CYCLE_TYPES.forEach(function (type) {
	    vm.$on('hook:' + type, options[type]);
	  });
	}

	function mixinEvents(vm) {
	  vm.$emit = $emit;
	  vm.$dispatch = $dispatch;
	  vm.$broadcast = $broadcast;
	  vm.$on = $on;
	  vm.$off = $off;
	}

/***/ },
/* 91 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.clearModules = clearModules;
	exports.getModule = getModule;
	exports.requireModule = requireModule;
	exports.registerModules = registerModules;
	exports.registerMethods = registerMethods;
	exports.requireComponent = requireComponent;
	exports.registerComponent = registerComponent;
	var nativeModules = {};

	function assignModules(modules, ifReplace) {
	  var _loop = function _loop(moduleName) {
	    // init `modules[moduleName][]`
	    var methods = nativeModules[moduleName];
	    if (!methods) {
	      methods = {};
	      nativeModules[moduleName] = methods;
	    }

	    // push each non-existed new method
	    modules[moduleName].forEach(function (method) {
	      if (typeof method === 'string') {
	        method = {
	          name: method
	        };
	      }

	      if (!methods[method.name] || ifReplace) {
	        methods[method.name] = method;
	      }
	    });
	  };

	  for (var moduleName in modules) {
	    _loop(moduleName);
	  }
	}

	function assignApis(Ctor, apis) {
	  var p = Ctor.prototype;

	  for (var apiName in apis) {
	    if (!p.hasOwnProperty(apiName)) {
	      p[apiName] = apis[apiName];
	    }
	  }
	}

	function clearModules() {
	  nativeModules = {};
	}

	function getModule(moduleName) {
	  return nativeModules[moduleName];
	}

	/**
	 * @context a instance of AppInstance
	 */
	function requireModule(moduleName) {
	  var _this = this;

	  var methods = nativeModules[moduleName];
	  var target = {};

	  var _loop2 = function _loop2(methodName) {
	    target[methodName] = function () {
	      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	        args[_key] = arguments[_key];
	      }

	      return _this.callTasks({
	        module: moduleName,
	        method: methodName,
	        args: args
	      });
	    };
	  };

	  for (var methodName in methods) {
	    _loop2(methodName);
	  }

	  return target;
	}

	/**
	 * @context Vm
	 */
	function registerModules(modules, ifReplace) {
	  assignModules(modules, ifReplace);
	}

	/**
	 * @context Vm
	 */
	function registerMethods(apis) {
	  assignApis(this, apis);
	}

	/**
	 * @context a instance of AppInstance
	 */
	function requireComponent(name) {
	  var customComponentMap = this.customComponentMap;

	  return customComponentMap[name];
	}

	/**
	 * @context a instance of AppInstance
	 */
	function registerComponent(name, def) {
	  var customComponentMap = this.customComponentMap;


	  if (customComponentMap[name]) {
	    console.error('[JS Framework] define a component(' + name + ') that already exists');
	    return;
	  }

	  customComponentMap[name] = def;
	}

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.normalizeVersion = normalizeVersion;
	exports.getError = getError;
	exports.check = check;

	var _semver = __webpack_require__(79);

	var _semver2 = _interopRequireDefault(_semver);

	var _util = __webpack_require__(76);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * [normalizeVersion description]
	 * @param  {String} Version. ie: 1, 1.0, 1.0.0
	 * @return {String} Version
	 */
	function normalizeVersion(v) {
	  var isValid = _semver2.default.valid(v);
	  if (isValid) {
	    return v;
	  }

	  v = typeof v === 'string' ? v : '';
	  var split = v.split('.');
	  var i = 0;
	  var result = [];

	  while (i < 3) {
	    var s = typeof split[i] === 'string' && split[i] ? split[i] : '0';
	    result.push(s);
	    i++;
	  }

	  return result.join('.');
	}

	function getError(key, val, criteria) {
	  var result = {
	    isDowngrade: true,
	    errorType: 1,
	    code: 1000
	  };
	  var getMsg = function getMsg(key, val, criteria) {
	    return 'Downgrade[' + key + '] :: deviceInfo ' + val + ' matched criteria ' + criteria;
	  };
	  var _key = key.toLowerCase();

	  result.errorMessage = getMsg(key, val, criteria);

	  if (_key.indexOf('osversion') >= 0) {
	    result.code = 1001;
	  } else if (_key.indexOf('appversion') >= 0) {
	    result.code = 1002;
	  } else if (_key.indexOf('weexversion') >= 0) {
	    result.code = 1003;
	  } else if (_key.indexOf('devicemodel') >= 0) {
	    result.code = 1004;
	  }

	  return result;
	}

	/**
	 * WEEX framework input(deviceInfo)
	 * {
	 *   platform: 'iOS' or 'android'
	 *   osVersion: '1.0.0' or '1.0' or '1'
	 *   appVersion: '1.0.0' or '1.0' or '1'
	 *   weexVersion: '1.0.0' or '1.0' or '1'
	 *   dDeviceModel: 'MODEL_NAME'
	 * }
	 *
	 * downgrade config(config)
	 * {
	 *   ios: {
	 *     osVersion: '>1.0.0' or '>=1.0.0' or '<1.0.0' or '<=1.0.0' or '1.0.0'
	 *     appVersion: '>1.0.0' or '>=1.0.0' or '<1.0.0' or '<=1.0.0' or '1.0.0'
	 *     weexVersion: '>1.0.0' or '>=1.0.0' or '<1.0.0' or '<=1.0.0' or '1.0.0'
	 *     deviceModel: ['modelA', 'modelB', ...]
	 *   },
	 *   android: {
	 *     osVersion: '>1.0.0' or '>=1.0.0' or '<1.0.0' or '<=1.0.0' or '1.0.0'
	 *     appVersion: '>1.0.0' or '>=1.0.0' or '<1.0.0' or '<=1.0.0' or '1.0.0'
	 *     weexVersion: '>1.0.0' or '>=1.0.0' or '<1.0.0' or '<=1.0.0' or '1.0.0'
	 *     deviceModel: ['modelA', 'modelB', ...]
	 *   }
	 * }
	 *
	 *
	 * @param  {object} deviceInfo Weex SDK framework input
	 * @param  {object} config     user input
	 * @return {Object}            { isDowngrade: true/false, errorMessage... }
	 */
	function check(config, deviceInfo) {
	  deviceInfo = deviceInfo || global.WXEnvironment;
	  deviceInfo = (0, _util.isPlainObject)(deviceInfo) ? deviceInfo : {};

	  var result = {
	    isDowngrade: false // defautl is pass
	  };

	  if ((0, _util.typof)(config) === 'function') {
	    var customDowngrade = config.call(this, deviceInfo, {
	      semver: _semver2.default,
	      normalizeVersion: this.normalizeVersion
	    });

	    customDowngrade = !!customDowngrade;

	    result = customDowngrade ? this.getError('custom', '', 'custom params') : result;
	  } else {
	    config = (0, _util.isPlainObject)(config) ? config : {};

	    var platform = deviceInfo.platform || 'unknow';
	    var dPlatform = platform.toLowerCase();
	    var cObj = config[dPlatform] || {};

	    for (var i in deviceInfo) {
	      var key = i;
	      var keyLower = key.toLowerCase();
	      var val = deviceInfo[i];
	      var isVersion = keyLower.indexOf('version') >= 0;
	      var isDeviceModel = keyLower.indexOf('devicemodel') >= 0;
	      var criteria = cObj[i];

	      if (criteria && isVersion) {
	        var c = this.normalizeVersion(criteria);
	        var d = this.normalizeVersion(deviceInfo[i]);

	        if (_semver2.default.satisfies(d, c)) {
	          result = this.getError(key, val, criteria);
	          break;
	        }
	      } else if (isDeviceModel) {
	        var _criteria = (0, _util.typof)(criteria) === 'array' ? criteria : [criteria];
	        if (_criteria.indexOf(val) >= 0) {
	          result = this.getError(key, val, criteria);
	          break;
	        }
	      }
	    }
	  }

	  return result;
	}
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 93 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Differ = function () {
	  function Differ(id) {
	    _classCallCheck(this, Differ);

	    this.id = id;
	    this.map = [];
	    this.hooks = [];
	  }

	  _createClass(Differ, [{
	    key: 'isEmpty',
	    value: function isEmpty() {
	      return this.map.length === 0;
	    }
	  }, {
	    key: 'append',
	    value: function append(type, depth, ref, handler) {
	      var _this = this;

	      if (!this.hasTimer) {
	        this.hasTimer = true;
	        setTimeout(function () {
	          _this.hasTimer = false;
	          _this.flush(true);
	        }, 0);
	      }
	      var map = this.map;
	      if (!map[depth]) {
	        map[depth] = {};
	      }
	      var group = map[depth];
	      if (!group[type]) {
	        group[type] = {};
	      }
	      if (type === 'element') {
	        if (!group[type][ref]) {
	          group[type][ref] = [];
	        }
	        group[type][ref].push(handler);
	      } else {
	        group[type][ref] = handler;
	      }
	    }
	  }, {
	    key: 'flush',
	    value: function flush(isTimeout) {
	      var map = this.map.slice();
	      this.map.length = 0;
	      map.forEach(function (group) {
	        callTypeMap(group, 'repeat');
	        callTypeMap(group, 'shown');
	        callTypeList(group, 'element');
	      });

	      var hooks = this.hooks.slice();
	      this.hooks.length = 0;
	      hooks.forEach(function (fn) {
	        fn();
	      });

	      if (!this.isEmpty()) {
	        this.flush();
	      }
	    }
	  }, {
	    key: 'then',
	    value: function then(fn) {
	      this.hooks.push(fn);
	    }
	  }]);

	  return Differ;
	}();

	exports.default = Differ;


	function callTypeMap(group, type) {
	  var map = group[type];
	  for (var ref in map) {
	    map[ref]();
	  }
	}

	function callTypeList(group, type) {
	  var map = group[type];
	  for (var ref in map) {
	    var list = map[ref];
	    list.forEach(function (handler) {
	      handler();
	    });
	  }
	}

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.instanceMap = undefined;
	exports.Document = Document;
	exports.Node = Node;
	exports.Element = Element;
	exports.Comment = Comment;

	var _listener4 = __webpack_require__(95);

	var _listener5 = _interopRequireDefault(_listener4);

	var _shared = __webpack_require__(1);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * @fileOverview
	 * A simple virtual dom implementation
	 */

	var DEFAULT_TAG_NAME = 'div';

	var instanceMap = exports.instanceMap = {};
	var nextNodeRef = 1;

	function Document(id, url, handler) {
	  id = id ? id.toString() : '';
	  this.id = id;
	  this.URL = url;

	  instanceMap[id] = this;
	  this.nodeMap = {};
	  this.listener = new _listener5.default(id, handler || genCallTasks(id));
	  this.createDocumentElement();
	}

	function genCallTasks(id) {
	  return function (tasks) {
	    if (!Array.isArray(tasks)) {
	      tasks = [tasks];
	    }
	    return callNative(id, tasks, '-1');
	  };
	}

	Document.prototype.destroy = function () {
	  delete this.listener;
	  delete this.nodeMap;
	  delete instanceMap[this.id];
	};

	Document.prototype.open = function () {
	  this.listener.batched = false;
	};

	Document.prototype.close = function () {
	  this.listener.batched = true;
	};

	Document.prototype.createDocumentElement = function () {
	  var _this = this;

	  if (!this.documentElement) {
	    var el = new Element('document');
	    el.docId = this.id;
	    el.ownerDocument = this;
	    el.role = 'documentElement';
	    el.depth = 0;
	    el.ref = '_documentElement';
	    this.nodeMap._documentElement = el;
	    this.documentElement = el;
	    el.appendChild = function (node) {
	      appendBody(_this, node);
	    };
	    el.insertBefore = function (node, before) {
	      appendBody(_this, node, before);
	    };
	  }

	  return this.documentElement;
	};

	function appendBody(doc, node, before) {
	  var documentElement = doc.documentElement;


	  if (documentElement.pureChildren.length > 0 || node.parentNode) {
	    return;
	  }
	  var children = documentElement.children;
	  var beforeIndex = children.indexOf(before);
	  if (beforeIndex < 0) {
	    children.push(node);
	  } else {
	    children.splice(beforeIndex, 0, node);
	  }

	  if (node.nodeType === 1) {
	    if (node.role === 'body') {
	      node.docId = doc.id;
	      node.ownerDocument = doc;
	      node.parentNode = documentElement;
	    } else {
	      node.children.forEach(function (child) {
	        child.parentNode = node;
	      });
	      setBody(doc, node);
	      node.docId = doc.id;
	      node.ownerDocument = doc;
	      linkParent(node, documentElement);
	      delete doc.nodeMap[node.nodeId];
	    }
	    documentElement.pureChildren.push(node);
	    doc.listener.createBody(node);
	  } else {
	    node.parentNode = documentElement;
	    doc.nodeMap[node.ref] = node;
	  }
	}

	function setBody(doc, el) {
	  el.role = 'body';
	  el.depth = 1;
	  delete doc.nodeMap[el.nodeId];
	  el.ref = '_root';
	  doc.nodeMap._root = el;
	  doc.body = el;
	}

	Document.prototype.createBody = function (type, props) {
	  if (!this.body) {
	    var el = new Element(type, props);
	    setBody(this, el);
	  }

	  return this.body;
	};

	Document.prototype.createElement = function (tagName, props) {
	  return new Element(tagName, props);
	};

	Document.prototype.createComment = function (text) {
	  return new Comment(text);
	};

	Document.prototype.fireEvent = function (el, type, e, domChanges) {
	  if (!el) {
	    return;
	  }
	  e = e || {};
	  e.type = type;
	  e.target = el;
	  e.timestamp = Date.now();
	  if (domChanges) {
	    updateElement(el, domChanges);
	  }
	  return el.fireEvent(type, e);
	};

	Document.prototype.getRef = function (ref) {
	  return this.nodeMap[ref];
	};

	function updateElement(el, changes) {
	  var attrs = changes.attrs || {};
	  for (var name in attrs) {
	    el.setAttr(name, attrs[name], true);
	  }
	  var style = changes.style || {};
	  for (var _name in style) {
	    el.setStyle(_name, style[_name], true);
	  }
	}

	function Node() {
	  this.nodeId = (nextNodeRef++).toString();
	  this.ref = this.nodeId;
	  this.children = [];
	  this.pureChildren = [];
	  this.parentNode = null;
	  this.nextSibling = null;
	  this.previousSibling = null;
	}

	Node.prototype.destroy = function () {
	  var doc = instanceMap[this.docId];
	  if (doc) {
	    delete this.docId;
	    delete doc.nodeMap[this.nodeId];
	  }
	  this.children.forEach(function (child) {
	    child.destroy();
	  });
	};

	function Element() {
	  var type = arguments.length <= 0 || arguments[0] === undefined ? DEFAULT_TAG_NAME : arguments[0];
	  var props = arguments[1];

	  props = props || {};
	  this.nodeType = 1;
	  this.nodeId = (nextNodeRef++).toString();
	  this.ref = this.nodeId;
	  this.type = type;
	  this.attr = props.attr || {};
	  this.classStyle = props.classStyle || {};
	  this.style = props.style || {};
	  this.event = {};
	  this.children = [];
	  this.pureChildren = [];
	}

	Element.prototype = new Node();

	Element.prototype.appendChild = function (node) {
	  if (node.parentNode && node.parentNode !== this) {
	    return;
	  }
	  if (!node.parentNode) {
	    linkParent(node, this);
	    insertIndex(node, this.children, this.children.length, true);
	    if (this.docId) {
	      registerNode(this.docId, node);
	    }
	    if (node.nodeType === 1) {
	      insertIndex(node, this.pureChildren, this.pureChildren.length);
	      if (this.docId) {
	        var listener = instanceMap[this.docId].listener;
	        return listener.addElement(node, this.ref, -1);
	      }
	    }
	  } else {
	    moveIndex(node, this.children, this.children.length, true);
	    if (node.nodeType === 1) {
	      var index = moveIndex(node, this.pureChildren, this.pureChildren.length);
	      if (this.docId && index >= 0) {
	        var _listener = instanceMap[this.docId].listener;
	        return _listener.moveElement(node.ref, this.ref, index);
	      }
	    }
	  }
	};

	Element.prototype.insertBefore = function (node, before) {
	  if (node.parentNode && node.parentNode !== this) {
	    return;
	  }
	  if (node === before || node.nextSibling === before) {
	    return;
	  }
	  if (!node.parentNode) {
	    linkParent(node, this);
	    insertIndex(node, this.children, this.children.indexOf(before), true);
	    if (this.docId) {
	      registerNode(this.docId, node);
	    }
	    if (node.nodeType === 1) {
	      var pureBefore = nextElement(before);
	      var index = insertIndex(node, this.pureChildren, pureBefore ? this.pureChildren.indexOf(pureBefore) : this.pureChildren.length);
	      if (this.docId) {
	        var listener = instanceMap[this.docId].listener;
	        return listener.addElement(node, this.ref, index);
	      }
	    }
	  } else {
	    moveIndex(node, this.children, this.children.indexOf(before), true);
	    if (node.nodeType === 1) {
	      var _pureBefore = nextElement(before);
	      var _index = moveIndex(node, this.pureChildren, _pureBefore ? this.pureChildren.indexOf(_pureBefore) : this.pureChildren.length);
	      if (this.docId && _index >= 0) {
	        var _listener2 = instanceMap[this.docId].listener;
	        return _listener2.moveElement(node.ref, this.ref, _index);
	      }
	    }
	  }
	};

	Element.prototype.insertAfter = function (node, after) {
	  if (node.parentNode && node.parentNode !== this) {
	    return;
	  }
	  if (node === after || node.previousSibling === after) {
	    return;
	  }
	  if (!node.parentNode) {
	    linkParent(node, this);
	    insertIndex(node, this.children, this.children.indexOf(after) + 1, true);
	    if (this.docId) {
	      registerNode(this.docId, node);
	    }
	    if (node.nodeType === 1) {
	      var index = insertIndex(node, this.pureChildren, this.pureChildren.indexOf(previousElement(after)) + 1);
	      if (this.docId) {
	        var listener = instanceMap[this.docId].listener;
	        return listener.addElement(node, this.ref, index);
	      }
	    }
	  } else {
	    moveIndex(node, this.children, this.children.indexOf(after) + 1, true);
	    if (node.nodeType === 1) {
	      var _index2 = moveIndex(node, this.pureChildren, this.pureChildren.indexOf(previousElement(after)) + 1);
	      if (this.docId && _index2 >= 0) {
	        var _listener3 = instanceMap[this.docId].listener;
	        return _listener3.moveElement(node.ref, this.ref, _index2);
	      }
	    }
	  }
	};

	Element.prototype.removeChild = function (node, preserved) {
	  if (node.parentNode) {
	    removeIndex(node, this.children, true);
	    if (node.nodeType === 1) {
	      removeIndex(node, this.pureChildren);
	      if (this.docId) {
	        var listener = instanceMap[this.docId].listener;
	        listener.removeElement(node.ref);
	      }
	    }
	  }
	  if (!preserved) {
	    node.destroy();
	  }
	};

	Element.prototype.clear = function () {
	  var _this2 = this;

	  if (this.docId) {
	    (function () {
	      var listener = instanceMap[_this2.docId].listener;
	      _this2.pureChildren.forEach(function (node) {
	        listener.removeElement(node.ref);
	      });
	    })();
	  }
	  this.children.forEach(function (node) {
	    node.destroy();
	  });
	  this.children.length = 0;
	  this.pureChildren.length = 0;
	};

	function nextElement(node) {
	  while (node) {
	    if (node.nodeType === 1) {
	      return node;
	    }
	    node = node.nextSibling;
	  }
	}

	function previousElement(node) {
	  while (node) {
	    if (node.nodeType === 1) {
	      return node;
	    }
	    node = node.previousSibling;
	  }
	}

	function linkParent(node, parent) {
	  node.parentNode = parent;
	  if (parent.docId) {
	    node.docId = parent.docId;
	    node.ownerDocument = parent.ownerDocument;
	    node.ownerDocument.nodeMap[node.nodeId] = node;
	    node.depth = parent.depth + 1;
	  }
	  node.children.forEach(function (child) {
	    linkParent(child, node);
	  });
	}

	function registerNode(docId, node) {
	  var doc = instanceMap[docId];
	  doc.nodeMap[node.nodeId] = node;
	}

	function insertIndex(target, list, newIndex, changeSibling) {
	  if (newIndex < 0) {
	    newIndex = 0;
	  }
	  var before = list[newIndex - 1];
	  var after = list[newIndex];
	  list.splice(newIndex, 0, target);
	  if (changeSibling) {
	    before && (before.nextSibling = target);
	    target.previousSibling = before;
	    target.nextSibling = after;
	    after && (after.previousSibling = target);
	  }
	  return newIndex;
	}

	function moveIndex(target, list, newIndex, changeSibling) {
	  var index = list.indexOf(target);
	  if (index < 0) {
	    return -1;
	  }
	  if (changeSibling) {
	    var before = list[index - 1];
	    var after = list[index + 1];
	    before && (before.nextSibling = after);
	    after && (after.previousSibling = before);
	  }
	  list.splice(index, 1);
	  var newIndexAfter = newIndex;
	  if (index <= newIndex) {
	    newIndexAfter = newIndex - 1;
	  }
	  var beforeNew = list[newIndexAfter - 1];
	  var afterNew = list[newIndexAfter];
	  list.splice(newIndexAfter, 0, target);
	  if (changeSibling) {
	    beforeNew && (beforeNew.nextSibling = target);
	    target.previousSibling = beforeNew;
	    target.nextSibling = afterNew;
	    afterNew && (afterNew.previousSibling = target);
	  }
	  if (index === newIndexAfter) {
	    return -1;
	  }
	  return newIndex;
	}

	function removeIndex(target, list, changeSibling) {
	  var index = list.indexOf(target);
	  if (index < 0) {
	    return;
	  }
	  if (changeSibling) {
	    var before = list[index - 1];
	    var after = list[index + 1];
	    before && (before.nextSibling = after);
	    after && (after.previousSibling = before);
	  }
	  list.splice(index, 1);
	}

	Element.prototype.setAttr = function (key, value, silent) {
	  if (this.attr[key] === value) {
	    return;
	  }
	  this.attr[key] = value;
	  if (!silent && this.docId) {
	    var listener = instanceMap[this.docId].listener;
	    listener.setAttr(this.ref, key, value);
	  }
	};

	Element.prototype.setStyle = function (key, value, silent) {
	  if (this.style[key] === value) {
	    return;
	  }
	  this.style[key] = value;
	  if (!silent && this.docId) {
	    var listener = instanceMap[this.docId].listener;
	    listener.setStyle(this.ref, key, value);
	  }
	};

	Element.prototype.setClassStyle = function (classStyle) {
	  this.classStyle = classStyle;
	  if (this.docId) {
	    var listener = instanceMap[this.docId].listener;
	    listener.setStyles(this.ref, this.toStyle());
	  }
	};

	Element.prototype.addEvent = function (type, handler) {
	  if (!this.event[type]) {
	    this.event[type] = handler;
	    if (this.docId) {
	      var listener = instanceMap[this.docId].listener;
	      listener.addEvent(this.ref, type);
	    }
	  }
	};

	Element.prototype.removeEvent = function (type) {
	  if (this.event[type]) {
	    delete this.event[type];
	    if (this.docId) {
	      var listener = instanceMap[this.docId].listener;
	      listener.removeEvent(this.ref, type);
	    }
	  }
	};

	Element.prototype.fireEvent = function (type, e) {
	  var handler = this.event[type];
	  if (handler) {
	    return handler.call(this, e);
	  }
	};

	Element.prototype.toStyle = function () {
	  return (0, _shared.extend)({}, this.classStyle, this.style);
	};

	Element.prototype.toJSON = function () {
	  var result = {
	    ref: this.ref.toString(),
	    type: this.type,
	    attr: this.attr,
	    style: this.toStyle()
	  };
	  var event = Object.keys(this.event);
	  if (event.length) {
	    result.event = event;
	  }
	  if (this.pureChildren.length) {
	    result.children = this.pureChildren.map(function (child) {
	      return child.toJSON();
	    });
	  }
	  return result;
	};

	Element.prototype.toString = function () {
	  return '<' + this.type + ' attr=' + JSON.stringify(this.attr) + ' style=' + JSON.stringify(this.toStyle()) + '>' + this.pureChildren.map(function (child) {
	    return child.toString();
	  }).join('') + '</' + this.type + '>';
	};

	function Comment(value) {
	  this.nodeType = 8;
	  this.nodeId = (nextNodeRef++).toString();
	  this.ref = this.nodeId;
	  this.type = 'comment';
	  this.value = value;
	  this.children = [];
	  this.pureChildren = [];
	}

	Comment.prototype = new Node();

	Comment.prototype.toString = function () {
	  return '<!-- ' + this.value + ' -->';
	};

/***/ },
/* 95 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = Listener;
	exports.createAction = createAction;
	function Listener(id, handler) {
	  this.id = id;
	  this.batched = false;
	  this.updates = [];
	  if (typeof handler === 'function') {
	    this.handler = handler;
	  }
	}

	Listener.prototype.createFinish = function (callback) {
	  var handler = this.handler;
	  return handler([createAction('createFinish', [])], callback);
	};

	Listener.prototype.updateFinish = function (callback) {
	  var handler = this.handler;
	  return handler([createAction('updateFinish', [])], callback);
	};

	Listener.prototype.refreshFinish = function (callback) {
	  var handler = this.handler;
	  return handler([createAction('refreshFinish', [])], callback);
	};

	Listener.prototype.createBody = function (element) {
	  var body = element.toJSON();
	  var children = body.children;
	  delete body.children;
	  var actions = [createAction('createBody', [body])];
	  if (children) {
	    actions.push.apply(actions, children.map(function (child) {
	      return createAction('addElement', [body.ref, child, -1]);
	    }));
	  }
	  return this.addActions(actions);
	};

	Listener.prototype.addElement = function (element, ref, index) {
	  if (!(index >= 0)) {
	    index = -1;
	  }
	  return this.addActions(createAction('addElement', [ref, element.toJSON(), index]));
	};

	Listener.prototype.removeElement = function (ref) {
	  if (Array.isArray(ref)) {
	    var actions = ref.map(function (r) {
	      return createAction('removeElement', [r]);
	    });
	    return this.addActions(actions);
	  }
	  return this.addActions(createAction('removeElement', [ref]));
	};

	Listener.prototype.moveElement = function (targetRef, parentRef, index) {
	  return this.addActions(createAction('moveElement', [targetRef, parentRef, index]));
	};

	Listener.prototype.setAttr = function (ref, key, value) {
	  var result = {};
	  result[key] = value;
	  return this.addActions(createAction('updateAttrs', [ref, result]));
	};

	Listener.prototype.setStyle = function (ref, key, value) {
	  var result = {};
	  result[key] = value;
	  return this.addActions(createAction('updateStyle', [ref, result]));
	};

	Listener.prototype.setStyles = function (ref, style) {
	  return this.addActions(createAction('updateStyle', [ref, style]));
	};

	Listener.prototype.addEvent = function (ref, type) {
	  return this.addActions(createAction('addEvent', [ref, type]));
	};

	Listener.prototype.removeEvent = function (ref, type) {
	  return this.addActions(createAction('removeEvent', [ref, type]));
	};

	Listener.prototype.handler = function (actions, cb) {
	  return cb && cb();
	};

	Listener.prototype.addActions = function (actions) {
	  var updates = this.updates;
	  var handler = this.handler;

	  if (!Array.isArray(actions)) {
	    actions = [actions];
	  }

	  if (this.batched) {
	    updates.push.apply(updates, actions);
	  } else {
	    return handler(actions);
	  }
	};

	function createAction(name, args) {
	  return { module: 'dom', method: name, args: args };
	}

/***/ },
/* 96 */
/***/ function(module, exports) {

	module.exports = {
		"name": "weex",
		"version": "0.4.0",
		"description": "A framework for building Mobile cross-platform UI",
		"license": "Apache-2.0",
		"repository": {
			"type": "git",
			"url": "git@github.com:alibaba/weex.git"
		},
		"homepage": "http://alibaba.github.io/weex/",
		"bugs": {
			"url": "https://github.com/alibaba/weex/issues"
		},
		"private": "true",
		"keywords": [
			"weex",
			"hybrid",
			"webcomponent",
			"appframework",
			"mvvm",
			"javascript",
			"webkit",
			"v8",
			"jscore",
			"html5",
			"android",
			"ios",
			"yunos"
		],
		"engines": {
			"node": ">=4"
		},
		"scripts": {
			"postinstall": "bash ./bin/install-hooks.sh",
			"build:config": "node build/config.frameworks.js",
			"build:browser": "webpack --config build/webpack.browser.config.js",
			"build:native": "webpack --config build/webpack.native.config.js",
			"build:examples": "webpack --config build/webpack.examples.config.js",
			"build:test": "webpack --config build/webpack.test.config.js",
			"dist:browser": "npm run build:browser && bash ./bin/dist-browser.sh",
			"dist": "npm run dist:browser",
			"dev:browser": "webpack --watch --config build/webpack.browser.config.js",
			"dev:native": "webpack --watch --config build/webpack.native.config.js",
			"dev:examples": "webpack --watch --config build/webpack.examples.config.js",
			"dev:test": "webpack --watch --config build/webpack.test.config.js",
			"build": "npm run build:native && npm run build:browser && npm run build:examples && npm run build:test",
			"lint": "eslint html5",
			"test:unit": "mocha --compilers js:babel-core/register html5/test/unit/*/*.js html5/test/unit/*/*/*.js",
			"test:cover": "babel-node node_modules/isparta/bin/isparta cover --report text node_modules/mocha/bin/_mocha -- --reporter dot html5/test/unit/*/*.js html5/test/unit/*/*/*.js",
			"test:e2e": "npm run build:browser && node html5/test/e2e/runner.js",
			"test": "npm run build:config && npm run lint && npm run test:cover && npm run test:e2e",
			"serve": "serve ./ -p 12580",
			"clean:examples": "echo \"\\033[36;1m[Clean]\\033[0m \\033[33mexamples\\033[0m\" && rm -vrf examples/build/*",
			"clean:test": "echo \"\\033[36;1m[Clean]\\033[0m \\033[33mtest\\033[0m\" && rm -vrf test/build/*",
			"clean": "npm run clean:examples && npm run clean:test",
			"copy:js": "cp -vf ./dist/native.js ./android/sdk/assets/main.js",
			"copy:examples": "rm -rf ./android/playground/app/src/main/assets/* && cp -vrf ./examples/build/* ./android/playground/app/src/main/assets/",
			"copy": "npm run copy:js && npm run copy:examples"
		},
		"subversion": {
			"browser": "0.2.23",
			"framework": "0.15.1",
			"transformer": ">=0.1.5 <0.4"
		},
		"dependencies": {
			"animationjs": "^0.1.5",
			"carrousel": "^0.1.11",
			"core-js": "^2.4.0",
			"cubicbezier": "^0.1.1",
			"envd": "^0.1.1",
			"fixedsticky": "^0.1.0",
			"httpurl": "^0.1.1",
			"kountdown": "^0.1.2",
			"lazyimg": "^0.1.2",
			"lie": "^3.0.4",
			"modals": "^0.1.5",
			"scroll-to": "0.0.2",
			"semver": "^5.1.0",
			"transitionize": "0.0.3",
			"weex-components": "^0.1.3"
		},
		"devDependencies": {
			"babel-cli": "~6.4.5",
			"babel-loader": "^6.2.4",
			"babel-preset-es2015": "^6.9.0",
			"chai": "^3.5.0",
			"chromedriver": "^2.21.2",
			"cross-spawn": "^4.0.0",
			"css-loader": "^0.23.1",
			"eslint": "^2.11.1",
			"http-server": "^0.9.0",
			"isparta": "^4.0.0",
			"istanbul": "^0.4.3",
			"json-loader": "^0.5.4",
			"mocha": "^2.5.3",
			"nightwatch": "^0.9.4",
			"phantomjs-prebuilt": "^2.1.7",
			"selenium-server": "^2.53.0",
			"serve": "^1.4.0",
			"sinon": "^1.17.4",
			"sinon-chai": "^2.8.0",
			"style-loader": "^0.13.1",
			"uglify-js": "^2.6.4",
			"webpack": "^1.13.1",
			"weex-loader": "^0.2.0"
		}
	};

/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.$ = $;
	exports.$el = $el;
	exports.$vm = $vm;
	exports.$renderThen = $renderThen;
	exports.$scrollTo = $scrollTo;
	exports.$transition = $transition;
	exports.$getConfig = $getConfig;
	exports.$sendHttp = $sendHttp;
	exports.$openURL = $openURL;
	exports.$setTitle = $setTitle;
	exports.$call = $call;

	var _util = __webpack_require__(76);

	/**
	 * ==========================================================
	 * common
	 * ==========================================================
	 */

	/**
	 * @deprecated use $vm instead
	 * find the vm by id
	 * Note: there is only one id in whole component
	 * @param  {string} id
	 * @return {Vm}
	 */
	function $(id) {
	  console.warn('[JS Framework] Vm#$ is deprecated, please use Vm#$vm instead');
	  var info = this._ids[id];
	  if (info) {
	    return info.vm;
	  }
	}

	/**
	 * find the element by id
	 * Note: there is only one id in whole component
	 * @param  {string} id
	 * @return {Element}
	 */
	/**
	 * @fileOverview The api for invoking with "$" prefix
	 */
	function $el(id) {
	  var info = this._ids[id];
	  if (info) {
	    return info.el;
	  }
	}

	/**
	 * find the vm of the custom component by id
	 * Note: there is only one id in whole component
	 * @param  {string} id
	 * @return {Vm}
	 */
	function $vm(id) {
	  var info = this._ids[id];
	  if (info) {
	    return info.vm;
	  }
	}

	/**
	 * Fire when differ rendering finished
	 *
	 * @param  {Function} fn
	 */
	function $renderThen(fn) {
	  var app = this._app;
	  var differ = app.differ;
	  return differ.then(function () {
	    fn();
	  });
	}

	/**
	 * scroll an element specified by id into view,
	 * moreover specify a number of offset optionally
	 * @param  {string} id
	 * @param  {number} offset
	 */
	function $scrollTo(id, offset) {
	  console.warn('[JS Framework] Vm#$scrollTo is deprecated, ' + 'please use "require(\'@weex-module/dom\')' + '.scrollTo(el, options)" instead');
	  var el = this.$el(id);
	  if (el) {
	    var dom = this._app.requireModule('dom');
	    dom.scrollToElement(el.ref, { offset: offset });
	  }
	}

	/**
	 * perform transition animation on an element specified by id
	 * @param  {string}   id
	 * @param  {object}   options
	 * @param  {object}   options.styles
	 * @param  {object}   options.duration(ms)
	 * @param  {object}   [options.timingFunction]
	 * @param  {object}   [options.delay=0(ms)]
	 * @param  {Function} callback
	 */
	function $transition(id, options, callback) {
	  var _this = this;

	  var el = this.$el(id);
	  if (el && options && options.styles) {
	    var animation = this._app.requireModule('animation');
	    animation.transition(el.ref, options, function () {
	      _this._setStyle(el, options.styles);
	      callback && callback.apply(undefined, arguments);
	    });
	  }
	}

	/**
	 * get some config
	 * @return {object} some config for app instance
	 * @property {string} bundleUrl
	 * @property {boolean} debug
	 * @property {object} env
	 * @property {string} env.weexVersion(ex. 1.0.0)
	 * @property {string} env.appName(ex. TB/TM)
	 * @property {string} env.appVersion(ex. 5.0.0)
	 * @property {string} env.platform(ex. iOS/Android)
	 * @property {string} env.osVersion(ex. 7.0.0)
	 * @property {string} env.deviceModel **native only**
	 * @property {number} env.[deviceWidth=750]
	 * @property {number} env.deviceHeight
	 */
	function $getConfig(callback) {
	  var config = (0, _util.extend)({
	    env: global.WXEnvironment || {}
	  }, this._app.options);
	  if ((0, _util.typof)(callback) === 'function') {
	    console.warn('[JS Framework] the callback of Vm#$getConfig(callback) is deprecated, ' + 'this api now can directly RETURN config info.');
	    callback(config);
	  }
	  return config;
	}

	/**
	 * @deprecated
	 * request network via http protocol
	 * @param  {object}   params
	 * @param  {Function} callback
	 */
	function $sendHttp(params, callback) {
	  console.warn('[JS Framework] Vm#$sendHttp is deprecated, ' + 'please use "require(\'@weex-module/stream\')' + '.sendHttp(params, callback)" instead');
	  var stream = this._app.requireModule('stream');
	  stream.sendHttp(params, callback);
	}

	/**
	 * @deprecated
	 * open a url
	 * @param  {string} url
	 */
	function $openURL(url) {
	  console.warn('[JS Framework] Vm#$openURL is deprecated, ' + 'please use "require(\'@weex-module/event\')' + '.openURL(url)" instead');
	  var event = this._app.requireModule('event');
	  event.openURL(url);
	}

	/**
	 * @deprecated
	 * set a title for page
	 * @param  {string} title
	 */
	function $setTitle(title) {
	  console.warn('[JS Framework] Vm#$setTitle is deprecated, ' + 'please use "require(\'@weex-module/pageInfo\')' + '.setTitle(title)" instead');
	  var pageInfo = this._app.requireModule('pageInfo');
	  pageInfo.setTitle(title);
	}

	/**
	 * @deprecated use "require('@weex-module/moduleName') instead"
	 * invoke a native method by specifing the name of module and method
	 * @param  {string} moduleName
	 * @param  {string} methodName
	 * @param  {...*} the rest arguments
	 */
	function $call(moduleName, methodName) {
	  console.warn('[JS Framework] Vm#$call is deprecated, ' + 'please use "require(\'@weex-module/moduleName\')" instead');
	  var module = this._app.requireModule(moduleName);
	  if (module && module[methodName]) {
	    for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
	      args[_key - 2] = arguments[_key];
	    }

	    module[methodName].apply(module, args);
	  }
	}
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYTViZjdlNjNkMDFjMTRmMGZkNjAiLCJ3ZWJwYWNrOi8vLy4vaHRtbDUvbmF0aXZlL2luZGV4LmpzIiwid2VicGFjazovLy8uL2h0bWw1L3NoYXJlZC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9odG1sNS9zaGFyZWQvc2V0VGltZW91dC5qcyIsIndlYnBhY2s6Ly8vLi9odG1sNS9zaGFyZWQvcHJvbWlzZS5qcyIsIndlYnBhY2s6Ly8vLi9+Ly5ucG1pbnN0YWxsL2NvcmUtanMvMi40LjAvY29yZS1qcy9tb2R1bGVzL2VzNi5vYmplY3QudG8tc3RyaW5nLmpzIiwid2VicGFjazovLy8uL34vLm5wbWluc3RhbGwvY29yZS1qcy8yLjQuMC9jb3JlLWpzL21vZHVsZXMvX2NsYXNzb2YuanMiLCJ3ZWJwYWNrOi8vLy4vfi8ubnBtaW5zdGFsbC9jb3JlLWpzLzIuNC4wL2NvcmUtanMvbW9kdWxlcy9fY29mLmpzIiwid2VicGFjazovLy8uL34vLm5wbWluc3RhbGwvY29yZS1qcy8yLjQuMC9jb3JlLWpzL21vZHVsZXMvX3drcy5qcyIsIndlYnBhY2s6Ly8vLi9+Ly5ucG1pbnN0YWxsL2NvcmUtanMvMi40LjAvY29yZS1qcy9tb2R1bGVzL19zaGFyZWQuanMiLCJ3ZWJwYWNrOi8vLy4vfi8ubnBtaW5zdGFsbC9jb3JlLWpzLzIuNC4wL2NvcmUtanMvbW9kdWxlcy9fZ2xvYmFsLmpzIiwid2VicGFjazovLy8uL34vLm5wbWluc3RhbGwvY29yZS1qcy8yLjQuMC9jb3JlLWpzL21vZHVsZXMvX3VpZC5qcyIsIndlYnBhY2s6Ly8vLi9+Ly5ucG1pbnN0YWxsL2NvcmUtanMvMi40LjAvY29yZS1qcy9tb2R1bGVzL19yZWRlZmluZS5qcyIsIndlYnBhY2s6Ly8vLi9+Ly5ucG1pbnN0YWxsL2NvcmUtanMvMi40LjAvY29yZS1qcy9tb2R1bGVzL19oaWRlLmpzIiwid2VicGFjazovLy8uL34vLm5wbWluc3RhbGwvY29yZS1qcy8yLjQuMC9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1kcC5qcyIsIndlYnBhY2s6Ly8vLi9+Ly5ucG1pbnN0YWxsL2NvcmUtanMvMi40LjAvY29yZS1qcy9tb2R1bGVzL19hbi1vYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vfi8ubnBtaW5zdGFsbC9jb3JlLWpzLzIuNC4wL2NvcmUtanMvbW9kdWxlcy9faXMtb2JqZWN0LmpzIiwid2VicGFjazovLy8uL34vLm5wbWluc3RhbGwvY29yZS1qcy8yLjQuMC9jb3JlLWpzL21vZHVsZXMvX2llOC1kb20tZGVmaW5lLmpzIiwid2VicGFjazovLy8uL34vLm5wbWluc3RhbGwvY29yZS1qcy8yLjQuMC9jb3JlLWpzL21vZHVsZXMvX2Rlc2NyaXB0b3JzLmpzIiwid2VicGFjazovLy8uL34vLm5wbWluc3RhbGwvY29yZS1qcy8yLjQuMC9jb3JlLWpzL21vZHVsZXMvX2ZhaWxzLmpzIiwid2VicGFjazovLy8uL34vLm5wbWluc3RhbGwvY29yZS1qcy8yLjQuMC9jb3JlLWpzL21vZHVsZXMvX2RvbS1jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi8ubnBtaW5zdGFsbC9jb3JlLWpzLzIuNC4wL2NvcmUtanMvbW9kdWxlcy9fdG8tcHJpbWl0aXZlLmpzIiwid2VicGFjazovLy8uL34vLm5wbWluc3RhbGwvY29yZS1qcy8yLjQuMC9jb3JlLWpzL21vZHVsZXMvX3Byb3BlcnR5LWRlc2MuanMiLCJ3ZWJwYWNrOi8vLy4vfi8ubnBtaW5zdGFsbC9jb3JlLWpzLzIuNC4wL2NvcmUtanMvbW9kdWxlcy9faGFzLmpzIiwid2VicGFjazovLy8uL34vLm5wbWluc3RhbGwvY29yZS1qcy8yLjQuMC9jb3JlLWpzL21vZHVsZXMvX2NvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vfi8ubnBtaW5zdGFsbC9jb3JlLWpzLzIuNC4wL2NvcmUtanMvbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yLmpzIiwid2VicGFjazovLy8uL34vLm5wbWluc3RhbGwvY29yZS1qcy8yLjQuMC9jb3JlLWpzL21vZHVsZXMvX3N0cmluZy1hdC5qcyIsIndlYnBhY2s6Ly8vLi9+Ly5ucG1pbnN0YWxsL2NvcmUtanMvMi40LjAvY29yZS1qcy9tb2R1bGVzL190by1pbnRlZ2VyLmpzIiwid2VicGFjazovLy8uL34vLm5wbWluc3RhbGwvY29yZS1qcy8yLjQuMC9jb3JlLWpzL21vZHVsZXMvX2RlZmluZWQuanMiLCJ3ZWJwYWNrOi8vLy4vfi8ubnBtaW5zdGFsbC9jb3JlLWpzLzIuNC4wL2NvcmUtanMvbW9kdWxlcy9faXRlci1kZWZpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vfi8ubnBtaW5zdGFsbC9jb3JlLWpzLzIuNC4wL2NvcmUtanMvbW9kdWxlcy9fbGlicmFyeS5qcyIsIndlYnBhY2s6Ly8vLi9+Ly5ucG1pbnN0YWxsL2NvcmUtanMvMi40LjAvY29yZS1qcy9tb2R1bGVzL19leHBvcnQuanMiLCJ3ZWJwYWNrOi8vLy4vfi8ubnBtaW5zdGFsbC9jb3JlLWpzLzIuNC4wL2NvcmUtanMvbW9kdWxlcy9fY3R4LmpzIiwid2VicGFjazovLy8uL34vLm5wbWluc3RhbGwvY29yZS1qcy8yLjQuMC9jb3JlLWpzL21vZHVsZXMvX2EtZnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vfi8ubnBtaW5zdGFsbC9jb3JlLWpzLzIuNC4wL2NvcmUtanMvbW9kdWxlcy9faXRlcmF0b3JzLmpzIiwid2VicGFjazovLy8uL34vLm5wbWluc3RhbGwvY29yZS1qcy8yLjQuMC9jb3JlLWpzL21vZHVsZXMvX2l0ZXItY3JlYXRlLmpzIiwid2VicGFjazovLy8uL34vLm5wbWluc3RhbGwvY29yZS1qcy8yLjQuMC9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi8ubnBtaW5zdGFsbC9jb3JlLWpzLzIuNC4wL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWRwcy5qcyIsIndlYnBhY2s6Ly8vLi9+Ly5ucG1pbnN0YWxsL2NvcmUtanMvMi40LjAvY29yZS1qcy9tb2R1bGVzL19vYmplY3Qta2V5cy5qcyIsIndlYnBhY2s6Ly8vLi9+Ly5ucG1pbnN0YWxsL2NvcmUtanMvMi40LjAvY29yZS1qcy9tb2R1bGVzL19vYmplY3Qta2V5cy1pbnRlcm5hbC5qcyIsIndlYnBhY2s6Ly8vLi9+Ly5ucG1pbnN0YWxsL2NvcmUtanMvMi40LjAvY29yZS1qcy9tb2R1bGVzL190by1pb2JqZWN0LmpzIiwid2VicGFjazovLy8uL34vLm5wbWluc3RhbGwvY29yZS1qcy8yLjQuMC9jb3JlLWpzL21vZHVsZXMvX2lvYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vfi8ubnBtaW5zdGFsbC9jb3JlLWpzLzIuNC4wL2NvcmUtanMvbW9kdWxlcy9fYXJyYXktaW5jbHVkZXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi8ubnBtaW5zdGFsbC9jb3JlLWpzLzIuNC4wL2NvcmUtanMvbW9kdWxlcy9fdG8tbGVuZ3RoLmpzIiwid2VicGFjazovLy8uL34vLm5wbWluc3RhbGwvY29yZS1qcy8yLjQuMC9jb3JlLWpzL21vZHVsZXMvX3RvLWluZGV4LmpzIiwid2VicGFjazovLy8uL34vLm5wbWluc3RhbGwvY29yZS1qcy8yLjQuMC9jb3JlLWpzL21vZHVsZXMvX3NoYXJlZC1rZXkuanMiLCJ3ZWJwYWNrOi8vLy4vfi8ubnBtaW5zdGFsbC9jb3JlLWpzLzIuNC4wL2NvcmUtanMvbW9kdWxlcy9fZW51bS1idWcta2V5cy5qcyIsIndlYnBhY2s6Ly8vLi9+Ly5ucG1pbnN0YWxsL2NvcmUtanMvMi40LjAvY29yZS1qcy9tb2R1bGVzL19odG1sLmpzIiwid2VicGFjazovLy8uL34vLm5wbWluc3RhbGwvY29yZS1qcy8yLjQuMC9jb3JlLWpzL21vZHVsZXMvX3NldC10by1zdHJpbmctdGFnLmpzIiwid2VicGFjazovLy8uL34vLm5wbWluc3RhbGwvY29yZS1qcy8yLjQuMC9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1ncG8uanMiLCJ3ZWJwYWNrOi8vLy4vfi8ubnBtaW5zdGFsbC9jb3JlLWpzLzIuNC4wL2NvcmUtanMvbW9kdWxlcy9fdG8tb2JqZWN0LmpzIiwid2VicGFjazovLy8uL34vLm5wbWluc3RhbGwvY29yZS1qcy8yLjQuMC9jb3JlLWpzL21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9+Ly5ucG1pbnN0YWxsL2NvcmUtanMvMi40LjAvY29yZS1qcy9tb2R1bGVzL2VzNi5hcnJheS5pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9+Ly5ucG1pbnN0YWxsL2NvcmUtanMvMi40LjAvY29yZS1qcy9tb2R1bGVzL19hZGQtdG8tdW5zY29wYWJsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi8ubnBtaW5zdGFsbC9jb3JlLWpzLzIuNC4wL2NvcmUtanMvbW9kdWxlcy9faXRlci1zdGVwLmpzIiwid2VicGFjazovLy8uL34vLm5wbWluc3RhbGwvY29yZS1qcy8yLjQuMC9jb3JlLWpzL21vZHVsZXMvZXM2LnByb21pc2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi8ubnBtaW5zdGFsbC9jb3JlLWpzLzIuNC4wL2NvcmUtanMvbW9kdWxlcy9fYW4taW5zdGFuY2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi8ubnBtaW5zdGFsbC9jb3JlLWpzLzIuNC4wL2NvcmUtanMvbW9kdWxlcy9fZm9yLW9mLmpzIiwid2VicGFjazovLy8uL34vLm5wbWluc3RhbGwvY29yZS1qcy8yLjQuMC9jb3JlLWpzL21vZHVsZXMvX2l0ZXItY2FsbC5qcyIsIndlYnBhY2s6Ly8vLi9+Ly5ucG1pbnN0YWxsL2NvcmUtanMvMi40LjAvY29yZS1qcy9tb2R1bGVzL19pcy1hcnJheS1pdGVyLmpzIiwid2VicGFjazovLy8uL34vLm5wbWluc3RhbGwvY29yZS1qcy8yLjQuMC9jb3JlLWpzL21vZHVsZXMvY29yZS5nZXQtaXRlcmF0b3ItbWV0aG9kLmpzIiwid2VicGFjazovLy8uL34vLm5wbWluc3RhbGwvY29yZS1qcy8yLjQuMC9jb3JlLWpzL21vZHVsZXMvX3NldC1wcm90by5qcyIsIndlYnBhY2s6Ly8vLi9+Ly5ucG1pbnN0YWxsL2NvcmUtanMvMi40LjAvY29yZS1qcy9tb2R1bGVzL19vYmplY3QtZ29wZC5qcyIsIndlYnBhY2s6Ly8vLi9+Ly5ucG1pbnN0YWxsL2NvcmUtanMvMi40LjAvY29yZS1qcy9tb2R1bGVzL19vYmplY3QtcGllLmpzIiwid2VicGFjazovLy8uL34vLm5wbWluc3RhbGwvY29yZS1qcy8yLjQuMC9jb3JlLWpzL21vZHVsZXMvX3NwZWNpZXMtY29uc3RydWN0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vfi8ubnBtaW5zdGFsbC9jb3JlLWpzLzIuNC4wL2NvcmUtanMvbW9kdWxlcy9fdGFzay5qcyIsIndlYnBhY2s6Ly8vLi9+Ly5ucG1pbnN0YWxsL2NvcmUtanMvMi40LjAvY29yZS1qcy9tb2R1bGVzL19pbnZva2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi8ubnBtaW5zdGFsbC9jb3JlLWpzLzIuNC4wL2NvcmUtanMvbW9kdWxlcy9fbWljcm90YXNrLmpzIiwid2VicGFjazovLy8uL34vLm5wbWluc3RhbGwvY29yZS1qcy8yLjQuMC9jb3JlLWpzL21vZHVsZXMvX3JlZGVmaW5lLWFsbC5qcyIsIndlYnBhY2s6Ly8vLi9+Ly5ucG1pbnN0YWxsL2NvcmUtanMvMi40LjAvY29yZS1qcy9tb2R1bGVzL19zZXQtc3BlY2llcy5qcyIsIndlYnBhY2s6Ly8vLi9+Ly5ucG1pbnN0YWxsL2NvcmUtanMvMi40LjAvY29yZS1qcy9tb2R1bGVzL19pdGVyLWRldGVjdC5qcyIsIndlYnBhY2s6Ly8vLi9odG1sNS9zaGFyZWQvY29uc29sZS5qcyIsIndlYnBhY2s6Ly8vLi9odG1sNS9ydW50aW1lL2luZGV4LmpzIiwid2VicGFjazovLy8uL2h0bWw1L3J1bnRpbWUvY29uZmlnLmpzIiwid2VicGFjazovLy8uL2h0bWw1L2RlZmF1bHQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vaHRtbDUvZGVmYXVsdC9jb25maWcuanMiLCJ3ZWJwYWNrOi8vLy4vaHRtbDUvZGVmYXVsdC9hcHAvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vaHRtbDUvZGVmYXVsdC91dGlsL2luZGV4LmpzIiwid2VicGFjazovLy8uL2h0bWw1L2RlZmF1bHQvYXBwL2N0cmwuanMiLCJ3ZWJwYWNrOi8vLy4vaHRtbDUvZGVmYXVsdC9hcHAvYnVuZGxlLmpzIiwid2VicGFjazovLy8uL34vLm5wbWluc3RhbGwvc2VtdmVyLzUuMi4wL3NlbXZlci9zZW12ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi8ubnBtaW5zdGFsbC9wcm9jZXNzLzAuMTEuNS9wcm9jZXNzL2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vaHRtbDUvZGVmYXVsdC92bS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9odG1sNS9kZWZhdWx0L2NvcmUvc3RhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vaHRtbDUvZGVmYXVsdC9jb3JlL3dhdGNoZXIuanMiLCJ3ZWJwYWNrOi8vLy4vaHRtbDUvZGVmYXVsdC9jb3JlL2RlcC5qcyIsIndlYnBhY2s6Ly8vLi9odG1sNS9kZWZhdWx0L2NvcmUvb2JzZXJ2ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vaHRtbDUvZGVmYXVsdC9jb3JlL2FycmF5LmpzIiwid2VicGFjazovLy8uL2h0bWw1L2RlZmF1bHQvdm0vY29tcGlsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vaHRtbDUvZGVmYXVsdC92bS9kaXJlY3RpdmUuanMiLCJ3ZWJwYWNrOi8vLy4vaHRtbDUvZGVmYXVsdC92bS9kb20taGVscGVyLmpzIiwid2VicGFjazovLy8uL2h0bWw1L2RlZmF1bHQvdm0vZXZlbnRzLmpzIiwid2VicGFjazovLy8uL2h0bWw1L2RlZmF1bHQvYXBwL3JlZ2lzdGVyLmpzIiwid2VicGFjazovLy8uL2h0bWw1L2RlZmF1bHQvYXBwL2Rvd25ncmFkZS5qcyIsIndlYnBhY2s6Ly8vLi9odG1sNS9kZWZhdWx0L2FwcC9kaWZmZXIuanMiLCJ3ZWJwYWNrOi8vLy4vaHRtbDUvdmRvbS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9odG1sNS92ZG9tL2xpc3RlbmVyLmpzIiwid2VicGFjazovLy8uL3BhY2thZ2UuanNvbiIsIndlYnBhY2s6Ly8vLi9odG1sNS9kZWZhdWx0L2FwaS9t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QUNBLFNBQU0sT0FBTixDQUFjLEdBQWQ7QUFDRDs7Ozs7OztBQU9NLFVBQVMsU0FBVCxDQUFvQixLQUFwQixFQUEyQjtBQUNoQyxXQUFRLElBQVIsQ0FBYSxnREFDTCxnREFESyxHQUVMLDJCQUZSO0FBR0EsT0FBTSxXQUFXLEtBQUssSUFBTCxDQUFVLGFBQVYsQ0FBd0IsVUFBeEIsQ0FBakI7QUFDQSxZQUFTLFFBQVQsQ0FBa0IsS0FBbEI7QUFDRDs7Ozs7Ozs7O0FBU00sVUFBUyxLQUFULENBQWdCLFVBQWhCLEVBQTRCLFVBQTVCLEVBQWlEO0FBQ3RELFdBQVEsSUFBUixDQUFhLDRDQUNYLDJEQURGO0FBRUEsT0FBTSxTQUFTLEtBQUssSUFBTCxDQUFVLGFBQVYsQ0FBd0IsVUFBeEIsQ0FBZjtBQUNBLE9BQUksVUFBVSxPQUFPLFVBQVAsQ0FBZCxFQUFrQztBQUFBLHVDQUpjLElBSWQ7QUFKYyxXQUlkO0FBQUE7O0FBQ2hDLFlBQU8sVUFBUCxnQkFBc0IsSUFBdEI7QUFDRDtBQUNGLEUiLCJmaWxlIjoibmF0aXZlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL2Jvb3RzdHJhcCBhNWJmN2U2M2QwMWMxNGYwZmQ2MFxuICoqLyIsImltcG9ydCAnLi4vc2hhcmVkJ1xuaW1wb3J0IHJ1bnRpbWUgZnJvbSAnLi4vcnVudGltZSdcbmltcG9ydCB7IHN1YnZlcnNpb24gfSBmcm9tICcuLi8uLi9wYWNrYWdlLmpzb24nXG5pbXBvcnQgKiBhcyBtZXRob2RzIGZyb20gJy4uL2RlZmF1bHQvYXBpL21ldGhvZHMnXG5cbmNvbnN0IHsgbmF0aXZlLCB0cmFuc2Zvcm1lciB9ID0gc3VidmVyc2lvblxuXG4vLyByZWdpc3RlciBpbnN0YW5jZSBtYW5hZ2VtZW50IEFQSXNcbmZvciAoY29uc3QgbWV0aG9kTmFtZSBpbiBydW50aW1lKSB7XG4gIGdsb2JhbFttZXRob2ROYW1lXSA9ICguLi5hcmdzKSA9PiB7XG4gICAgY29uc3QgcmV0ID0gcnVudGltZVttZXRob2ROYW1lXSguLi5hcmdzKVxuICAgIGlmIChyZXQgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihyZXQudG9TdHJpbmcoKSlcbiAgICB9XG4gICAgcmV0dXJuIHJldFxuICB9XG59XG5cbi8vIHJlZ2lzdGVyIGZyYW1ld29yayBtZXRhIGluZm9cbmdsb2JhbC5mcmFtZXdvcmtWZXJzaW9uID0gbmF0aXZlXG5nbG9iYWwudHJhbnNmb3JtZXJWZXJzaW9uID0gdHJhbnNmb3JtZXJcblxuLy8gcmVnaXN0ZXIgc3BlY2lhbCBtZXRob2RzIGZvciBXZWV4IGZyYW1ld29ya1xuZ2xvYmFsLnJlZ2lzdGVyTWV0aG9kcyhtZXRob2RzKVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9odG1sNS9uYXRpdmUvaW5kZXguanNcbiAqKi8iLCJpbXBvcnQgJy4vc2V0VGltZW91dCdcbmltcG9ydCAnLi9wcm9taXNlJ1xuaW1wb3J0ICcuL2NvbnNvbGUnXG5cbi8qKlxuICogTWl4IHByb3BlcnRpZXMgaW50byB0YXJnZXQgb2JqZWN0LlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB0b1xuICogQHBhcmFtIHtPYmplY3R9IGZyb21cbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gZXh0ZW5kICh0YXJnZXQsIC4uLnNyYykge1xuICBpZiAodHlwZW9mIE9iamVjdC5hc3NpZ24gPT09ICdmdW5jdGlvbicpIHtcbiAgICBPYmplY3QuYXNzaWduKHRhcmdldCwgLi4uc3JjKVxuICB9XG4gIGVsc2Uge1xuICAgIGNvbnN0IGZpcnN0ID0gc3JjLnNoaWZ0KClcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBmaXJzdCkge1xuICAgICAgdGFyZ2V0W2tleV0gPSBmaXJzdFtrZXldXG4gICAgfVxuICAgIGlmIChzcmMubGVuZ3RoKSB7XG4gICAgICBleHRlbmQodGFyZ2V0LCAuLi5zcmMpXG4gICAgfVxuICB9XG4gIHJldHVybiB0YXJnZXRcbn1cblxuLyoqXG4gKiBEZWZpbmUgYSBwcm9wZXJ0eS5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqXG4gKiBAcGFyYW0ge1N0cmluZ30ga2V5XG4gKiBAcGFyYW0geyp9IHZhbFxuICogQHBhcmFtIHtCb29sZWFufSBbZW51bWVyYWJsZV1cbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gZGVmIChvYmosIGtleSwgdmFsLCBlbnVtZXJhYmxlKSB7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgIHZhbHVlOiB2YWwsXG4gICAgZW51bWVyYWJsZTogISFlbnVtZXJhYmxlLFxuICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICB9KVxufVxuXG4vKipcbiAqIFJlbW92ZSBhbiBpdGVtIGZyb20gYW4gYXJyYXlcbiAqXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJcbiAqIEBwYXJhbSB7Kn0gaXRlbVxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmUgKGFyciwgaXRlbSkge1xuICBpZiAoYXJyLmxlbmd0aCkge1xuICAgIGNvbnN0IGluZGV4ID0gYXJyLmluZGV4T2YoaXRlbSlcbiAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgcmV0dXJuIGFyci5zcGxpY2UoaW5kZXgsIDEpXG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogQ2hlY2sgd2hldGhlciB0aGUgb2JqZWN0IGhhcyB0aGUgcHJvcGVydHkuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9ialxuICogQHBhcmFtIHtTdHJpbmd9IGtleVxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqL1xuY29uc3QgaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5XG5leHBvcnQgZnVuY3Rpb24gaGFzT3duIChvYmosIGtleSkge1xuICByZXR1cm4gaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSlcbn1cblxuLyoqXG4gKiBTaW1wbGUgYmluZCwgZmFzdGVyIHRoYW4gbmF0aXZlXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm5cbiAqIEBwYXJhbSB7T2JqZWN0fSBjdHhcbiAqIEByZXR1cm4ge0Z1bmN0aW9ufVxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBiaW5kIChmbiwgY3R4KSB7XG4gIHJldHVybiBmdW5jdGlvbiAoYSkge1xuICAgIGNvbnN0IGwgPSBhcmd1bWVudHMubGVuZ3RoXG4gICAgcmV0dXJuIGxcbiAgICAgID8gbCA+IDFcbiAgICAgICAgPyBmbi5hcHBseShjdHgsIGFyZ3VtZW50cylcbiAgICAgICAgOiBmbi5jYWxsKGN0eCwgYSlcbiAgICAgIDogZm4uY2FsbChjdHgpXG4gIH1cbn1cblxuLyoqXG4gKiBDb252ZXJ0IGFuIEFycmF5LWxpa2Ugb2JqZWN0IHRvIGEgcmVhbCBBcnJheS5cbiAqXG4gKiBAcGFyYW0ge0FycmF5LWxpa2V9IGxpc3RcbiAqIEBwYXJhbSB7TnVtYmVyfSBbc3RhcnRdIC0gc3RhcnQgaW5kZXhcbiAqIEByZXR1cm4ge0FycmF5fVxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiB0b0FycmF5IChsaXN0LCBzdGFydCkge1xuICBzdGFydCA9IHN0YXJ0IHx8IDBcbiAgbGV0IGkgPSBsaXN0Lmxlbmd0aCAtIHN0YXJ0XG4gIGNvbnN0IHJldCA9IG5ldyBBcnJheShpKVxuICB3aGlsZSAoaS0tKSB7XG4gICAgcmV0W2ldID0gbGlzdFtpICsgc3RhcnRdXG4gIH1cbiAgcmV0dXJuIHJldFxufVxuXG4vKipcbiAqIFF1aWNrIG9iamVjdCBjaGVjayAtIHRoaXMgaXMgcHJpbWFyaWx5IHVzZWQgdG8gdGVsbFxuICogT2JqZWN0cyBmcm9tIHByaW1pdGl2ZSB2YWx1ZXMgd2hlbiB3ZSBrbm93IHRoZSB2YWx1ZVxuICogaXMgYSBKU09OLWNvbXBsaWFudCB0eXBlLlxuICpcbiAqIEBwYXJhbSB7Kn0gb2JqXG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBpc09iamVjdCAob2JqKSB7XG4gIHJldHVybiBvYmogIT09IG51bGwgJiYgdHlwZW9mIG9iaiA9PT0gJ29iamVjdCdcbn1cblxuLyoqXG4gKiBTdHJpY3Qgb2JqZWN0IHR5cGUgY2hlY2suIE9ubHkgcmV0dXJucyB0cnVlXG4gKiBmb3IgcGxhaW4gSmF2YVNjcmlwdCBvYmplY3RzLlxuICpcbiAqIEBwYXJhbSB7Kn0gb2JqXG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICovXG5cbmNvbnN0IHRvU3RyaW5nID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZ1xuY29uc3QgT0JKRUNUX1NUUklORyA9ICdbb2JqZWN0IE9iamVjdF0nXG5leHBvcnQgZnVuY3Rpb24gaXNQbGFpbk9iamVjdCAob2JqKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKG9iaikgPT09IE9CSkVDVF9TVFJJTkdcbn1cblxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9odG1sNS9zaGFyZWQvaW5kZXguanNcbiAqKi8iLCJjb25zdCB7XG4gIHNldFRpbWVvdXQsXG4gIHNldFRpbWVvdXROYXRpdmVcbn0gPSBnbG9iYWxcblxuLy8gZml4IG5vIHNldFRpbWVvdXQgb24gQW5kcm9pZCBWOFxuLyogaXN0YW5idWwgaWdub3JlIGlmICovXG5pZiAodHlwZW9mIHNldFRpbWVvdXQgPT09ICd1bmRlZmluZWQnICYmXG4gIHR5cGVvZiBzZXRUaW1lb3V0TmF0aXZlID09PSAnZnVuY3Rpb24nKSB7XG4gIGNvbnN0IHRpbWVvdXRNYXAgPSB7fVxuICBsZXQgdGltZW91dElkID0gMFxuXG4gIGdsb2JhbC5zZXRUaW1lb3V0ID0gKGNiLCB0aW1lKSA9PiB7XG4gICAgdGltZW91dE1hcFsrK3RpbWVvdXRJZF0gPSBjYlxuICAgIHNldFRpbWVvdXROYXRpdmUodGltZW91dElkLnRvU3RyaW5nKCksIHRpbWUpXG4gIH1cblxuICBnbG9iYWwuc2V0VGltZW91dENhbGxiYWNrID0gKGlkKSA9PiB7XG4gICAgaWYgKHR5cGVvZiB0aW1lb3V0TWFwW2lkXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGltZW91dE1hcFtpZF0oKVxuICAgICAgZGVsZXRlIHRpbWVvdXRNYXBbaWRdXG4gICAgfVxuICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2h0bWw1L3NoYXJlZC9zZXRUaW1lb3V0LmpzXG4gKiovIiwiLy8gZml4IFByb21pc2UgUHJvYmxlbSBvbiBKU0NvbnRleHQgb2YgaU9TN344XG4vLyBAc2VlIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0xMzU4NjZcbi8vIGdsb2JhbC5Qcm9taXNlID0gbnVsbFxucmVxdWlyZSgnY29yZS1qcy9tb2R1bGVzL2VzNi5vYmplY3QudG8tc3RyaW5nJylcbnJlcXVpcmUoJ2NvcmUtanMvbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yJylcbnJlcXVpcmUoJ2NvcmUtanMvbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlJylcbnJlcXVpcmUoJ2NvcmUtanMvbW9kdWxlcy9lczYucHJvbWlzZScpXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2h0bWw1L3NoYXJlZC9wcm9taXNlLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuLy8gMTkuMS4zLjYgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZygpXG52YXIgY2xhc3NvZiA9IHJlcXVpcmUoJy4vX2NsYXNzb2YnKVxuICAsIHRlc3QgICAgPSB7fTtcbnRlc3RbcmVxdWlyZSgnLi9fd2tzJykoJ3RvU3RyaW5nVGFnJyldID0gJ3onO1xuaWYodGVzdCArICcnICE9ICdbb2JqZWN0IHpdJyl7XG4gIHJlcXVpcmUoJy4vX3JlZGVmaW5lJykoT2JqZWN0LnByb3RvdHlwZSwgJ3RvU3RyaW5nJywgZnVuY3Rpb24gdG9TdHJpbmcoKXtcbiAgICByZXR1cm4gJ1tvYmplY3QgJyArIGNsYXNzb2YodGhpcykgKyAnXSc7XG4gIH0sIHRydWUpO1xufVxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi8ubnBtaW5zdGFsbC9jb3JlLWpzLzIuNC4wL2NvcmUtanMvbW9kdWxlcy9lczYub2JqZWN0LnRvLXN0cmluZy5qc1xuICoqLyIsIi8vIGdldHRpbmcgdGFnIGZyb20gMTkuMS4zLjYgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZygpXG52YXIgY29mID0gcmVxdWlyZSgnLi9fY29mJylcbiAgLCBUQUcgPSByZXF1aXJlKCcuL193a3MnKSgndG9TdHJpbmdUYWcnKVxuICAvLyBFUzMgd3JvbmcgaGVyZVxuICAsIEFSRyA9IGNvZihmdW5jdGlvbigpeyByZXR1cm4gYXJndW1lbnRzOyB9KCkpID09ICdBcmd1bWVudHMnO1xuXG4vLyBmYWxsYmFjayBmb3IgSUUxMSBTY3JpcHQgQWNjZXNzIERlbmllZCBlcnJvclxudmFyIHRyeUdldCA9IGZ1bmN0aW9uKGl0LCBrZXkpe1xuICB0cnkge1xuICAgIHJldHVybiBpdFtrZXldO1xuICB9IGNhdGNoKGUpeyAvKiBlbXB0eSAqLyB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgdmFyIE8sIFQsIEI7XG4gIHJldHVybiBpdCA9PT0gdW5kZWZpbmVkID8gJ1VuZGVmaW5lZCcgOiBpdCA9PT0gbnVsbCA/ICdOdWxsJ1xuICAgIC8vIEBAdG9TdHJpbmdUYWcgY2FzZVxuICAgIDogdHlwZW9mIChUID0gdHJ5R2V0KE8gPSBPYmplY3QoaXQpLCBUQUcpKSA9PSAnc3RyaW5nJyA/IFRcbiAgICAvLyBidWlsdGluVGFnIGNhc2VcbiAgICA6IEFSRyA/IGNvZihPKVxuICAgIC8vIEVTMyBhcmd1bWVudHMgZmFsbGJhY2tcbiAgICA6IChCID0gY29mKE8pKSA9PSAnT2JqZWN0JyAmJiB0eXBlb2YgTy5jYWxsZWUgPT0gJ2Z1bmN0aW9uJyA/ICdBcmd1bWVudHMnIDogQjtcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+Ly5ucG1pbnN0YWxsL2NvcmUtanMvMi40LjAvY29yZS1qcy9tb2R1bGVzL19jbGFzc29mLmpzXG4gKiovIiwidmFyIHRvU3RyaW5nID0ge30udG9TdHJpbmc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbChpdCkuc2xpY2UoOCwgLTEpO1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vLm5wbWluc3RhbGwvY29yZS1qcy8yLjQuMC9jb3JlLWpzL21vZHVsZXMvX2NvZi5qc1xuICoqLyIsInZhciBzdG9yZSAgICAgID0gcmVxdWlyZSgnLi9fc2hhcmVkJykoJ3drcycpXG4gICwgdWlkICAgICAgICA9IHJlcXVpcmUoJy4vX3VpZCcpXG4gICwgU3ltYm9sICAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLlN5bWJvbFxuICAsIFVTRV9TWU1CT0wgPSB0eXBlb2YgU3ltYm9sID09ICdmdW5jdGlvbic7XG5cbnZhciAkZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obmFtZSl7XG4gIHJldHVybiBzdG9yZVtuYW1lXSB8fCAoc3RvcmVbbmFtZV0gPVxuICAgIFVTRV9TWU1CT0wgJiYgU3ltYm9sW25hbWVdIHx8IChVU0VfU1lNQk9MID8gU3ltYm9sIDogdWlkKSgnU3ltYm9sLicgKyBuYW1lKSk7XG59O1xuXG4kZXhwb3J0cy5zdG9yZSA9IHN0b3JlO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi8ubnBtaW5zdGFsbC9jb3JlLWpzLzIuNC4wL2NvcmUtanMvbW9kdWxlcy9fd2tzLmpzXG4gKiovIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgU0hBUkVEID0gJ19fY29yZS1qc19zaGFyZWRfXydcbiAgLCBzdG9yZSAgPSBnbG9iYWxbU0hBUkVEXSB8fCAoZ2xvYmFsW1NIQVJFRF0gPSB7fSk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGtleSl7XG4gIHJldHVybiBzdG9yZVtrZXldIHx8IChzdG9yZVtrZXldID0ge30pO1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vLm5wbWluc3RhbGwvY29yZS1qcy8yLjQuMC9jb3JlLWpzL21vZHVsZXMvX3NoYXJlZC5qc1xuICoqLyIsIi8vIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy84NiNpc3N1ZWNvbW1lbnQtMTE1NzU5MDI4XG52YXIgZ2xvYmFsID0gbW9kdWxlLmV4cG9ydHMgPSB0eXBlb2Ygd2luZG93ICE9ICd1bmRlZmluZWQnICYmIHdpbmRvdy5NYXRoID09IE1hdGhcbiAgPyB3aW5kb3cgOiB0eXBlb2Ygc2VsZiAhPSAndW5kZWZpbmVkJyAmJiBzZWxmLk1hdGggPT0gTWF0aCA/IHNlbGYgOiBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuaWYodHlwZW9mIF9fZyA9PSAnbnVtYmVyJylfX2cgPSBnbG9iYWw7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vLm5wbWluc3RhbGwvY29yZS1qcy8yLjQuMC9jb3JlLWpzL21vZHVsZXMvX2dsb2JhbC5qc1xuICoqLyIsInZhciBpZCA9IDBcbiAgLCBweCA9IE1hdGgucmFuZG9tKCk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGtleSl7XG4gIHJldHVybiAnU3ltYm9sKCcuY29uY2F0KGtleSA9PT0gdW5kZWZpbmVkID8gJycgOiBrZXksICcpXycsICgrK2lkICsgcHgpLnRvU3RyaW5nKDM2KSk7XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi8ubnBtaW5zdGFsbC9jb3JlLWpzLzIuNC4wL2NvcmUtanMvbW9kdWxlcy9fdWlkLmpzXG4gKiovIiwidmFyIGdsb2JhbCAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgaGlkZSAgICAgID0gcmVxdWlyZSgnLi9faGlkZScpXG4gICwgaGFzICAgICAgID0gcmVxdWlyZSgnLi9faGFzJylcbiAgLCBTUkMgICAgICAgPSByZXF1aXJlKCcuL191aWQnKSgnc3JjJylcbiAgLCBUT19TVFJJTkcgPSAndG9TdHJpbmcnXG4gICwgJHRvU3RyaW5nID0gRnVuY3Rpb25bVE9fU1RSSU5HXVxuICAsIFRQTCAgICAgICA9ICgnJyArICR0b1N0cmluZykuc3BsaXQoVE9fU1RSSU5HKTtcblxucmVxdWlyZSgnLi9fY29yZScpLmluc3BlY3RTb3VyY2UgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiAkdG9TdHJpbmcuY2FsbChpdCk7XG59O1xuXG4obW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihPLCBrZXksIHZhbCwgc2FmZSl7XG4gIHZhciBpc0Z1bmN0aW9uID0gdHlwZW9mIHZhbCA9PSAnZnVuY3Rpb24nO1xuICBpZihpc0Z1bmN0aW9uKWhhcyh2YWwsICduYW1lJykgfHwgaGlkZSh2YWwsICduYW1lJywga2V5KTtcbiAgaWYoT1trZXldID09PSB2YWwpcmV0dXJuO1xuICBpZihpc0Z1bmN0aW9uKWhhcyh2YWwsIFNSQykgfHwgaGlkZSh2YWwsIFNSQywgT1trZXldID8gJycgKyBPW2tleV0gOiBUUEwuam9pbihTdHJpbmcoa2V5KSkpO1xuICBpZihPID09PSBnbG9iYWwpe1xuICAgIE9ba2V5XSA9IHZhbDtcbiAgfSBlbHNlIHtcbiAgICBpZighc2FmZSl7XG4gICAgICBkZWxldGUgT1trZXldO1xuICAgICAgaGlkZShPLCBrZXksIHZhbCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmKE9ba2V5XSlPW2tleV0gPSB2YWw7XG4gICAgICBlbHNlIGhpZGUoTywga2V5LCB2YWwpO1xuICAgIH1cbiAgfVxuLy8gYWRkIGZha2UgRnVuY3Rpb24jdG9TdHJpbmcgZm9yIGNvcnJlY3Qgd29yayB3cmFwcGVkIG1ldGhvZHMgLyBjb25zdHJ1Y3RvcnMgd2l0aCBtZXRob2RzIGxpa2UgTG9EYXNoIGlzTmF0aXZlXG59KShGdW5jdGlvbi5wcm90b3R5cGUsIFRPX1NUUklORywgZnVuY3Rpb24gdG9TdHJpbmcoKXtcbiAgcmV0dXJuIHR5cGVvZiB0aGlzID09ICdmdW5jdGlvbicgJiYgdGhpc1tTUkNdIHx8ICR0b1N0cmluZy5jYWxsKHRoaXMpO1xufSk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+Ly5ucG1pbnN0YWxsL2NvcmUtanMvMi40LjAvY29yZS1qcy9tb2R1bGVzL19yZWRlZmluZS5qc1xuICoqLyIsInZhciBkUCAgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJylcbiAgLCBjcmVhdGVEZXNjID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gZnVuY3Rpb24ob2JqZWN0LCBrZXksIHZhbHVlKXtcbiAgcmV0dXJuIGRQLmYob2JqZWN0LCBrZXksIGNyZWF0ZURlc2MoMSwgdmFsdWUpKTtcbn0gOiBmdW5jdGlvbihvYmplY3QsIGtleSwgdmFsdWUpe1xuICBvYmplY3Rba2V5XSA9IHZhbHVlO1xuICByZXR1cm4gb2JqZWN0O1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vLm5wbWluc3RhbGwvY29yZS1qcy8yLjQuMC9jb3JlLWpzL21vZHVsZXMvX2hpZGUuanNcbiAqKi8iLCJ2YXIgYW5PYmplY3QgICAgICAgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKVxuICAsIElFOF9ET01fREVGSU5FID0gcmVxdWlyZSgnLi9faWU4LWRvbS1kZWZpbmUnKVxuICAsIHRvUHJpbWl0aXZlICAgID0gcmVxdWlyZSgnLi9fdG8tcHJpbWl0aXZlJylcbiAgLCBkUCAgICAgICAgICAgICA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcblxuZXhwb3J0cy5mID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSA6IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpe1xuICBhbk9iamVjdChPKTtcbiAgUCA9IHRvUHJpbWl0aXZlKFAsIHRydWUpO1xuICBhbk9iamVjdChBdHRyaWJ1dGVzKTtcbiAgaWYoSUU4X0RPTV9ERUZJTkUpdHJ5IHtcbiAgICByZXR1cm4gZFAoTywgUCwgQXR0cmlidXRlcyk7XG4gIH0gY2F0Y2goZSl7IC8qIGVtcHR5ICovIH1cbiAgaWYoJ2dldCcgaW4gQXR0cmlidXRlcyB8fCAnc2V0JyBpbiBBdHRyaWJ1dGVzKXRocm93IFR5cGVFcnJvcignQWNjZXNzb3JzIG5vdCBzdXBwb3J0ZWQhJyk7XG4gIGlmKCd2YWx1ZScgaW4gQXR0cmlidXRlcylPW1BdID0gQXR0cmlidXRlcy52YWx1ZTtcbiAgcmV0dXJuIE87XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi8ubnBtaW5zdGFsbC9jb3JlLWpzLzIuNC4wL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWRwLmpzXG4gKiovIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgaWYoIWlzT2JqZWN0KGl0KSl0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBhbiBvYmplY3QhJyk7XG4gIHJldHVybiBpdDtcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+Ly5ucG1pbnN0YWxsL2NvcmUtanMvMi40LjAvY29yZS1qcy9tb2R1bGVzL19hbi1vYmplY3QuanNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIHR5cGVvZiBpdCA9PT0gJ29iamVjdCcgPyBpdCAhPT0gbnVsbCA6IHR5cGVvZiBpdCA9PT0gJ2Z1bmN0aW9uJztcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+Ly5ucG1pbnN0YWxsL2NvcmUtanMvMi40LjAvY29yZS1qcy9tb2R1bGVzL19pcy1vYmplY3QuanNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9ICFyZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpICYmICFyZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uKCl7XHJcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShyZXF1aXJlKCcuL19kb20tY3JlYXRlJykoJ2RpdicpLCAnYScsIHtnZXQ6IGZ1bmN0aW9uKCl7IHJldHVybiA3OyB9fSkuYSAhPSA3O1xyXG59KTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vLm5wbWluc3RhbGwvY29yZS1qcy8yLjQuMC9jb3JlLWpzL21vZHVsZXMvX2llOC1kb20tZGVmaW5lLmpzXG4gKiovIiwiLy8gVGhhbmsncyBJRTggZm9yIGhpcyBmdW5ueSBkZWZpbmVQcm9wZXJ0eVxubW9kdWxlLmV4cG9ydHMgPSAhcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbigpe1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LCAnYScsIHtnZXQ6IGZ1bmN0aW9uKCl7IHJldHVybiA3OyB9fSkuYSAhPSA3O1xufSk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+Ly5ucG1pbnN0YWxsL2NvcmUtanMvMi40LjAvY29yZS1qcy9tb2R1bGVzL19kZXNjcmlwdG9ycy5qc1xuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZXhlYyl7XG4gIHRyeSB7XG4gICAgcmV0dXJuICEhZXhlYygpO1xuICB9IGNhdGNoKGUpe1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi8ubnBtaW5zdGFsbC9jb3JlLWpzLzIuNC4wL2NvcmUtanMvbW9kdWxlcy9fZmFpbHMuanNcbiAqKi8iLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKVxuICAsIGRvY3VtZW50ID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykuZG9jdW1lbnRcbiAgLy8gaW4gb2xkIElFIHR5cGVvZiBkb2N1bWVudC5jcmVhdGVFbGVtZW50IGlzICdvYmplY3QnXG4gICwgaXMgPSBpc09iamVjdChkb2N1bWVudCkgJiYgaXNPYmplY3QoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGlzID8gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChpdCkgOiB7fTtcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+Ly5ucG1pbnN0YWxsL2NvcmUtanMvMi40LjAvY29yZS1qcy9tb2R1bGVzL19kb20tY3JlYXRlLmpzXG4gKiovIiwiLy8gNy4xLjEgVG9QcmltaXRpdmUoaW5wdXQgWywgUHJlZmVycmVkVHlwZV0pXG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbi8vIGluc3RlYWQgb2YgdGhlIEVTNiBzcGVjIHZlcnNpb24sIHdlIGRpZG4ndCBpbXBsZW1lbnQgQEB0b1ByaW1pdGl2ZSBjYXNlXG4vLyBhbmQgdGhlIHNlY29uZCBhcmd1bWVudCAtIGZsYWcgLSBwcmVmZXJyZWQgdHlwZSBpcyBhIHN0cmluZ1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCwgUyl7XG4gIGlmKCFpc09iamVjdChpdCkpcmV0dXJuIGl0O1xuICB2YXIgZm4sIHZhbDtcbiAgaWYoUyAmJiB0eXBlb2YgKGZuID0gaXQudG9TdHJpbmcpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSlyZXR1cm4gdmFsO1xuICBpZih0eXBlb2YgKGZuID0gaXQudmFsdWVPZikgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKXJldHVybiB2YWw7XG4gIGlmKCFTICYmIHR5cGVvZiAoZm4gPSBpdC50b1N0cmluZykgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKXJldHVybiB2YWw7XG4gIHRocm93IFR5cGVFcnJvcihcIkNhbid0IGNvbnZlcnQgb2JqZWN0IHRvIHByaW1pdGl2ZSB2YWx1ZVwiKTtcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+Ly5ucG1pbnN0YWxsL2NvcmUtanMvMi40LjAvY29yZS1qcy9tb2R1bGVzL190by1wcmltaXRpdmUuanNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGJpdG1hcCwgdmFsdWUpe1xuICByZXR1cm4ge1xuICAgIGVudW1lcmFibGUgIDogIShiaXRtYXAgJiAxKSxcbiAgICBjb25maWd1cmFibGU6ICEoYml0bWFwICYgMiksXG4gICAgd3JpdGFibGUgICAgOiAhKGJpdG1hcCAmIDQpLFxuICAgIHZhbHVlICAgICAgIDogdmFsdWVcbiAgfTtcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+Ly5ucG1pbnN0YWxsL2NvcmUtanMvMi40LjAvY29yZS1qcy9tb2R1bGVzL19wcm9wZXJ0eS1kZXNjLmpzXG4gKiovIiwidmFyIGhhc093blByb3BlcnR5ID0ge30uaGFzT3duUHJvcGVydHk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0LCBrZXkpe1xuICByZXR1cm4gaGFzT3duUHJvcGVydHkuY2FsbChpdCwga2V5KTtcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+Ly5ucG1pbnN0YWxsL2NvcmUtanMvMi40LjAvY29yZS1qcy9tb2R1bGVzL19oYXMuanNcbiAqKi8iLCJ2YXIgY29yZSA9IG1vZHVsZS5leHBvcnRzID0ge3ZlcnNpb246ICcyLjQuMCd9O1xuaWYodHlwZW9mIF9fZSA9PSAnbnVtYmVyJylfX2UgPSBjb3JlOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+Ly5ucG1pbnN0YWxsL2NvcmUtanMvMi40LjAvY29yZS1qcy9tb2R1bGVzL19jb3JlLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xudmFyICRhdCAgPSByZXF1aXJlKCcuL19zdHJpbmctYXQnKSh0cnVlKTtcblxuLy8gMjEuMS4zLjI3IFN0cmluZy5wcm90b3R5cGVbQEBpdGVyYXRvcl0oKVxucmVxdWlyZSgnLi9faXRlci1kZWZpbmUnKShTdHJpbmcsICdTdHJpbmcnLCBmdW5jdGlvbihpdGVyYXRlZCl7XG4gIHRoaXMuX3QgPSBTdHJpbmcoaXRlcmF0ZWQpOyAvLyB0YXJnZXRcbiAgdGhpcy5faSA9IDA7ICAgICAgICAgICAgICAgIC8vIG5leHQgaW5kZXhcbi8vIDIxLjEuNS4yLjEgJVN0cmluZ0l0ZXJhdG9yUHJvdG90eXBlJS5uZXh0KClcbn0sIGZ1bmN0aW9uKCl7XG4gIHZhciBPICAgICA9IHRoaXMuX3RcbiAgICAsIGluZGV4ID0gdGhpcy5faVxuICAgICwgcG9pbnQ7XG4gIGlmKGluZGV4ID49IE8ubGVuZ3RoKXJldHVybiB7dmFsdWU6IHVuZGVmaW5lZCwgZG9uZTogdHJ1ZX07XG4gIHBvaW50ID0gJGF0KE8sIGluZGV4KTtcbiAgdGhpcy5faSArPSBwb2ludC5sZW5ndGg7XG4gIHJldHVybiB7dmFsdWU6IHBvaW50LCBkb25lOiBmYWxzZX07XG59KTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vLm5wbWluc3RhbGwvY29yZS1qcy8yLjQuMC9jb3JlLWpzL21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvci5qc1xuICoqLyIsInZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJylcbiAgLCBkZWZpbmVkICAgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG4vLyB0cnVlICAtPiBTdHJpbmcjYXRcbi8vIGZhbHNlIC0+IFN0cmluZyNjb2RlUG9pbnRBdFxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihUT19TVFJJTkcpe1xuICByZXR1cm4gZnVuY3Rpb24odGhhdCwgcG9zKXtcbiAgICB2YXIgcyA9IFN0cmluZyhkZWZpbmVkKHRoYXQpKVxuICAgICAgLCBpID0gdG9JbnRlZ2VyKHBvcylcbiAgICAgICwgbCA9IHMubGVuZ3RoXG4gICAgICAsIGEsIGI7XG4gICAgaWYoaSA8IDAgfHwgaSA+PSBsKXJldHVybiBUT19TVFJJTkcgPyAnJyA6IHVuZGVmaW5lZDtcbiAgICBhID0gcy5jaGFyQ29kZUF0KGkpO1xuICAgIHJldHVybiBhIDwgMHhkODAwIHx8IGEgPiAweGRiZmYgfHwgaSArIDEgPT09IGwgfHwgKGIgPSBzLmNoYXJDb2RlQXQoaSArIDEpKSA8IDB4ZGMwMCB8fCBiID4gMHhkZmZmXG4gICAgICA/IFRPX1NUUklORyA/IHMuY2hhckF0KGkpIDogYVxuICAgICAgOiBUT19TVFJJTkcgPyBzLnNsaWNlKGksIGkgKyAyKSA6IChhIC0gMHhkODAwIDw8IDEwKSArIChiIC0gMHhkYzAwKSArIDB4MTAwMDA7XG4gIH07XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi8ubnBtaW5zdGFsbC9jb3JlLWpzLzIuNC4wL2NvcmUtanMvbW9kdWxlcy9fc3RyaW5nLWF0LmpzXG4gKiovIiwiLy8gNy4xLjQgVG9JbnRlZ2VyXG52YXIgY2VpbCAgPSBNYXRoLmNlaWxcbiAgLCBmbG9vciA9IE1hdGguZmxvb3I7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGlzTmFOKGl0ID0gK2l0KSA/IDAgOiAoaXQgPiAwID8gZmxvb3IgOiBjZWlsKShpdCk7XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi8ubnBtaW5zdGFsbC9jb3JlLWpzLzIuNC4wL2NvcmUtanMvbW9kdWxlcy9fdG8taW50ZWdlci5qc1xuICoqLyIsIi8vIDcuMi4xIFJlcXVpcmVPYmplY3RDb2VyY2libGUoYXJndW1lbnQpXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgaWYoaXQgPT0gdW5kZWZpbmVkKXRocm93IFR5cGVFcnJvcihcIkNhbid0IGNhbGwgbWV0aG9kIG9uICBcIiArIGl0KTtcbiAgcmV0dXJuIGl0O1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vLm5wbWluc3RhbGwvY29yZS1qcy8yLjQuMC9jb3JlLWpzL21vZHVsZXMvX2RlZmluZWQuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG52YXIgTElCUkFSWSAgICAgICAgPSByZXF1aXJlKCcuL19saWJyYXJ5JylcbiAgLCAkZXhwb3J0ICAgICAgICA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpXG4gICwgcmVkZWZpbmUgICAgICAgPSByZXF1aXJlKCcuL19yZWRlZmluZScpXG4gICwgaGlkZSAgICAgICAgICAgPSByZXF1aXJlKCcuL19oaWRlJylcbiAgLCBoYXMgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2hhcycpXG4gICwgSXRlcmF0b3JzICAgICAgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKVxuICAsICRpdGVyQ3JlYXRlICAgID0gcmVxdWlyZSgnLi9faXRlci1jcmVhdGUnKVxuICAsIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi9fc2V0LXRvLXN0cmluZy10YWcnKVxuICAsIGdldFByb3RvdHlwZU9mID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdwbycpXG4gICwgSVRFUkFUT1IgICAgICAgPSByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKVxuICAsIEJVR0dZICAgICAgICAgID0gIShbXS5rZXlzICYmICduZXh0JyBpbiBbXS5rZXlzKCkpIC8vIFNhZmFyaSBoYXMgYnVnZ3kgaXRlcmF0b3JzIHcvbyBgbmV4dGBcbiAgLCBGRl9JVEVSQVRPUiAgICA9ICdAQGl0ZXJhdG9yJ1xuICAsIEtFWVMgICAgICAgICAgID0gJ2tleXMnXG4gICwgVkFMVUVTICAgICAgICAgPSAndmFsdWVzJztcblxudmFyIHJldHVyblRoaXMgPSBmdW5jdGlvbigpeyByZXR1cm4gdGhpczsgfTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihCYXNlLCBOQU1FLCBDb25zdHJ1Y3RvciwgbmV4dCwgREVGQVVMVCwgSVNfU0VULCBGT1JDRUQpe1xuICAkaXRlckNyZWF0ZShDb25zdHJ1Y3RvciwgTkFNRSwgbmV4dCk7XG4gIHZhciBnZXRNZXRob2QgPSBmdW5jdGlvbihraW5kKXtcbiAgICBpZighQlVHR1kgJiYga2luZCBpbiBwcm90bylyZXR1cm4gcHJvdG9ba2luZF07XG4gICAgc3dpdGNoKGtpbmQpe1xuICAgICAgY2FzZSBLRVlTOiByZXR1cm4gZnVuY3Rpb24ga2V5cygpeyByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHRoaXMsIGtpbmQpOyB9O1xuICAgICAgY2FzZSBWQUxVRVM6IHJldHVybiBmdW5jdGlvbiB2YWx1ZXMoKXsgcmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih0aGlzLCBraW5kKTsgfTtcbiAgICB9IHJldHVybiBmdW5jdGlvbiBlbnRyaWVzKCl7IHJldHVybiBuZXcgQ29uc3RydWN0b3IodGhpcywga2luZCk7IH07XG4gIH07XG4gIHZhciBUQUcgICAgICAgID0gTkFNRSArICcgSXRlcmF0b3InXG4gICAgLCBERUZfVkFMVUVTID0gREVGQVVMVCA9PSBWQUxVRVNcbiAgICAsIFZBTFVFU19CVUcgPSBmYWxzZVxuICAgICwgcHJvdG8gICAgICA9IEJhc2UucHJvdG90eXBlXG4gICAgLCAkbmF0aXZlICAgID0gcHJvdG9bSVRFUkFUT1JdIHx8IHByb3RvW0ZGX0lURVJBVE9SXSB8fCBERUZBVUxUICYmIHByb3RvW0RFRkFVTFRdXG4gICAgLCAkZGVmYXVsdCAgID0gJG5hdGl2ZSB8fCBnZXRNZXRob2QoREVGQVVMVClcbiAgICAsICRlbnRyaWVzICAgPSBERUZBVUxUID8gIURFRl9WQUxVRVMgPyAkZGVmYXVsdCA6IGdldE1ldGhvZCgnZW50cmllcycpIDogdW5kZWZpbmVkXG4gICAgLCAkYW55TmF0aXZlID0gTkFNRSA9PSAnQXJyYXknID8gcHJvdG8uZW50cmllcyB8fCAkbmF0aXZlIDogJG5hdGl2ZVxuICAgICwgbWV0aG9kcywga2V5LCBJdGVyYXRvclByb3RvdHlwZTtcbiAgLy8gRml4IG5hdGl2ZVxuICBpZigkYW55TmF0aXZlKXtcbiAgICBJdGVyYXRvclByb3RvdHlwZSA9IGdldFByb3RvdHlwZU9mKCRhbnlOYXRpdmUuY2FsbChuZXcgQmFzZSkpO1xuICAgIGlmKEl0ZXJhdG9yUHJvdG90eXBlICE9PSBPYmplY3QucHJvdG90eXBlKXtcbiAgICAgIC8vIFNldCBAQHRvU3RyaW5nVGFnIHRvIG5hdGl2ZSBpdGVyYXRvcnNcbiAgICAgIHNldFRvU3RyaW5nVGFnKEl0ZXJhdG9yUHJvdG90eXBlLCBUQUcsIHRydWUpO1xuICAgICAgLy8gZml4IGZvciBzb21lIG9sZCBlbmdpbmVzXG4gICAgICBpZighTElCUkFSWSAmJiAhaGFzKEl0ZXJhdG9yUHJvdG90eXBlLCBJVEVSQVRPUikpaGlkZShJdGVyYXRvclByb3RvdHlwZSwgSVRFUkFUT1IsIHJldHVyblRoaXMpO1xuICAgIH1cbiAgfVxuICAvLyBmaXggQXJyYXkje3ZhbHVlcywgQEBpdGVyYXRvcn0ubmFtZSBpbiBWOCAvIEZGXG4gIGlmKERFRl9WQUxVRVMgJiYgJG5hdGl2ZSAmJiAkbmF0aXZlLm5hbWUgIT09IFZBTFVFUyl7XG4gICAgVkFMVUVTX0JVRyA9IHRydWU7XG4gICAgJGRlZmF1bHQgPSBmdW5jdGlvbiB2YWx1ZXMoKXsgcmV0dXJuICRuYXRpdmUuY2FsbCh0aGlzKTsgfTtcbiAgfVxuICAvLyBEZWZpbmUgaXRlcmF0b3JcbiAgaWYoKCFMSUJSQVJZIHx8IEZPUkNFRCkgJiYgKEJVR0dZIHx8IFZBTFVFU19CVUcgfHwgIXByb3RvW0lURVJBVE9SXSkpe1xuICAgIGhpZGUocHJvdG8sIElURVJBVE9SLCAkZGVmYXVsdCk7XG4gIH1cbiAgLy8gUGx1ZyBmb3IgbGlicmFyeVxuICBJdGVyYXRvcnNbTkFNRV0gPSAkZGVmYXVsdDtcbiAgSXRlcmF0b3JzW1RBR10gID0gcmV0dXJuVGhpcztcbiAgaWYoREVGQVVMVCl7XG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIHZhbHVlczogIERFRl9WQUxVRVMgPyAkZGVmYXVsdCA6IGdldE1ldGhvZChWQUxVRVMpLFxuICAgICAga2V5czogICAgSVNfU0VUICAgICA/ICRkZWZhdWx0IDogZ2V0TWV0aG9kKEtFWVMpLFxuICAgICAgZW50cmllczogJGVudHJpZXNcbiAgICB9O1xuICAgIGlmKEZPUkNFRClmb3Ioa2V5IGluIG1ldGhvZHMpe1xuICAgICAgaWYoIShrZXkgaW4gcHJvdG8pKXJlZGVmaW5lKHByb3RvLCBrZXksIG1ldGhvZHNba2V5XSk7XG4gICAgfSBlbHNlICRleHBvcnQoJGV4cG9ydC5QICsgJGV4cG9ydC5GICogKEJVR0dZIHx8IFZBTFVFU19CVUcpLCBOQU1FLCBtZXRob2RzKTtcbiAgfVxuICByZXR1cm4gbWV0aG9kcztcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+Ly5ucG1pbnN0YWxsL2NvcmUtanMvMi40LjAvY29yZS1qcy9tb2R1bGVzL19pdGVyLWRlZmluZS5qc1xuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gZmFsc2U7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+Ly5ucG1pbnN0YWxsL2NvcmUtanMvMi40LjAvY29yZS1qcy9tb2R1bGVzL19saWJyYXJ5LmpzXG4gKiovIiwidmFyIGdsb2JhbCAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgY29yZSAgICAgID0gcmVxdWlyZSgnLi9fY29yZScpXG4gICwgaGlkZSAgICAgID0gcmVxdWlyZSgnLi9faGlkZScpXG4gICwgcmVkZWZpbmUgID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUnKVxuICAsIGN0eCAgICAgICA9IHJlcXVpcmUoJy4vX2N0eCcpXG4gICwgUFJPVE9UWVBFID0gJ3Byb3RvdHlwZSc7XG5cbnZhciAkZXhwb3J0ID0gZnVuY3Rpb24odHlwZSwgbmFtZSwgc291cmNlKXtcbiAgdmFyIElTX0ZPUkNFRCA9IHR5cGUgJiAkZXhwb3J0LkZcbiAgICAsIElTX0dMT0JBTCA9IHR5cGUgJiAkZXhwb3J0LkdcbiAgICAsIElTX1NUQVRJQyA9IHR5cGUgJiAkZXhwb3J0LlNcbiAgICAsIElTX1BST1RPICA9IHR5cGUgJiAkZXhwb3J0LlBcbiAgICAsIElTX0JJTkQgICA9IHR5cGUgJiAkZXhwb3J0LkJcbiAgICAsIHRhcmdldCAgICA9IElTX0dMT0JBTCA/IGdsb2JhbCA6IElTX1NUQVRJQyA/IGdsb2JhbFtuYW1lXSB8fCAoZ2xvYmFsW25hbWVdID0ge30pIDogKGdsb2JhbFtuYW1lXSB8fCB7fSlbUFJPVE9UWVBFXVxuICAgICwgZXhwb3J0cyAgID0gSVNfR0xPQkFMID8gY29yZSA6IGNvcmVbbmFtZV0gfHwgKGNvcmVbbmFtZV0gPSB7fSlcbiAgICAsIGV4cFByb3RvICA9IGV4cG9ydHNbUFJPVE9UWVBFXSB8fCAoZXhwb3J0c1tQUk9UT1RZUEVdID0ge30pXG4gICAgLCBrZXksIG93biwgb3V0LCBleHA7XG4gIGlmKElTX0dMT0JBTClzb3VyY2UgPSBuYW1lO1xuICBmb3Ioa2V5IGluIHNvdXJjZSl7XG4gICAgLy8gY29udGFpbnMgaW4gbmF0aXZlXG4gICAgb3duID0gIUlTX0ZPUkNFRCAmJiB0YXJnZXQgJiYgdGFyZ2V0W2tleV0gIT09IHVuZGVmaW5lZDtcbiAgICAvLyBleHBvcnQgbmF0aXZlIG9yIHBhc3NlZFxuICAgIG91dCA9IChvd24gPyB0YXJnZXQgOiBzb3VyY2UpW2tleV07XG4gICAgLy8gYmluZCB0aW1lcnMgdG8gZ2xvYmFsIGZvciBjYWxsIGZyb20gZXhwb3J0IGNvbnRleHRcbiAgICBleHAgPSBJU19CSU5EICYmIG93biA/IGN0eChvdXQsIGdsb2JhbCkgOiBJU19QUk9UTyAmJiB0eXBlb2Ygb3V0ID09ICdmdW5jdGlvbicgPyBjdHgoRnVuY3Rpb24uY2FsbCwgb3V0KSA6IG91dDtcbiAgICAvLyBleHRlbmQgZ2xvYmFsXG4gICAgaWYodGFyZ2V0KXJlZGVmaW5lKHRhcmdldCwga2V5LCBvdXQsIHR5cGUgJiAkZXhwb3J0LlUpO1xuICAgIC8vIGV4cG9ydFxuICAgIGlmKGV4cG9ydHNba2V5XSAhPSBvdXQpaGlkZShleHBvcnRzLCBrZXksIGV4cCk7XG4gICAgaWYoSVNfUFJPVE8gJiYgZXhwUHJvdG9ba2V5XSAhPSBvdXQpZXhwUHJvdG9ba2V5XSA9IG91dDtcbiAgfVxufTtcbmdsb2JhbC5jb3JlID0gY29yZTtcbi8vIHR5cGUgYml0bWFwXG4kZXhwb3J0LkYgPSAxOyAgIC8vIGZvcmNlZFxuJGV4cG9ydC5HID0gMjsgICAvLyBnbG9iYWxcbiRleHBvcnQuUyA9IDQ7ICAgLy8gc3RhdGljXG4kZXhwb3J0LlAgPSA4OyAgIC8vIHByb3RvXG4kZXhwb3J0LkIgPSAxNjsgIC8vIGJpbmRcbiRleHBvcnQuVyA9IDMyOyAgLy8gd3JhcFxuJGV4cG9ydC5VID0gNjQ7ICAvLyBzYWZlXG4kZXhwb3J0LlIgPSAxMjg7IC8vIHJlYWwgcHJvdG8gbWV0aG9kIGZvciBgbGlicmFyeWAgXG5tb2R1bGUuZXhwb3J0cyA9ICRleHBvcnQ7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+Ly5ucG1pbnN0YWxsL2NvcmUtanMvMi40LjAvY29yZS1qcy9tb2R1bGVzL19leHBvcnQuanNcbiAqKi8iLCIvLyBvcHRpb25hbCAvIHNpbXBsZSBjb250ZXh0IGJpbmRpbmdcbnZhciBhRnVuY3Rpb24gPSByZXF1aXJlKCcuL19hLWZ1bmN0aW9uJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGZuLCB0aGF0LCBsZW5ndGgpe1xuICBhRnVuY3Rpb24oZm4pO1xuICBpZih0aGF0ID09PSB1bmRlZmluZWQpcmV0dXJuIGZuO1xuICBzd2l0Y2gobGVuZ3RoKXtcbiAgICBjYXNlIDE6IHJldHVybiBmdW5jdGlvbihhKXtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEpO1xuICAgIH07XG4gICAgY2FzZSAyOiByZXR1cm4gZnVuY3Rpb24oYSwgYil7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhLCBiKTtcbiAgICB9O1xuICAgIGNhc2UgMzogcmV0dXJuIGZ1bmN0aW9uKGEsIGIsIGMpe1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSwgYiwgYyk7XG4gICAgfTtcbiAgfVxuICByZXR1cm4gZnVuY3Rpb24oLyogLi4uYXJncyAqLyl7XG4gICAgcmV0dXJuIGZuLmFwcGx5KHRoYXQsIGFyZ3VtZW50cyk7XG4gIH07XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi8ubnBtaW5zdGFsbC9jb3JlLWpzLzIuNC4wL2NvcmUtanMvbW9kdWxlcy9fY3R4LmpzXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIGlmKHR5cGVvZiBpdCAhPSAnZnVuY3Rpb24nKXRocm93IFR5cGVFcnJvcihpdCArICcgaXMgbm90IGEgZnVuY3Rpb24hJyk7XG4gIHJldHVybiBpdDtcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+Ly5ucG1pbnN0YWxsL2NvcmUtanMvMi40LjAvY29yZS1qcy9tb2R1bGVzL19hLWZ1bmN0aW9uLmpzXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vLm5wbWluc3RhbGwvY29yZS1qcy8yLjQuMC9jb3JlLWpzL21vZHVsZXMvX2l0ZXJhdG9ycy5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcbnZhciBjcmVhdGUgICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1jcmVhdGUnKVxuICAsIGRlc2NyaXB0b3IgICAgID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpXG4gICwgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuL19zZXQtdG8tc3RyaW5nLXRhZycpXG4gICwgSXRlcmF0b3JQcm90b3R5cGUgPSB7fTtcblxuLy8gMjUuMS4yLjEuMSAlSXRlcmF0b3JQcm90b3R5cGUlW0BAaXRlcmF0b3JdKClcbnJlcXVpcmUoJy4vX2hpZGUnKShJdGVyYXRvclByb3RvdHlwZSwgcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJyksIGZ1bmN0aW9uKCl7IHJldHVybiB0aGlzOyB9KTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihDb25zdHJ1Y3RvciwgTkFNRSwgbmV4dCl7XG4gIENvbnN0cnVjdG9yLnByb3RvdHlwZSA9IGNyZWF0ZShJdGVyYXRvclByb3RvdHlwZSwge25leHQ6IGRlc2NyaXB0b3IoMSwgbmV4dCl9KTtcbiAgc2V0VG9TdHJpbmdUYWcoQ29uc3RydWN0b3IsIE5BTUUgKyAnIEl0ZXJhdG9yJyk7XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi8ubnBtaW5zdGFsbC9jb3JlLWpzLzIuNC4wL2NvcmUtanMvbW9kdWxlcy9faXRlci1jcmVhdGUuanNcbiAqKi8iLCIvLyAxOS4xLjIuMiAvIDE1LjIuMy41IE9iamVjdC5jcmVhdGUoTyBbLCBQcm9wZXJ0aWVzXSlcclxudmFyIGFuT2JqZWN0ICAgID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0JylcclxuICAsIGRQcyAgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwcycpXHJcbiAgLCBlbnVtQnVnS2V5cyA9IHJlcXVpcmUoJy4vX2VudW0tYnVnLWtleXMnKVxyXG4gICwgSUVfUFJPVE8gICAgPSByZXF1aXJlKCcuL19zaGFyZWQta2V5JykoJ0lFX1BST1RPJylcclxuICAsIEVtcHR5ICAgICAgID0gZnVuY3Rpb24oKXsgLyogZW1wdHkgKi8gfVxyXG4gICwgUFJPVE9UWVBFICAgPSAncHJvdG90eXBlJztcclxuXHJcbi8vIENyZWF0ZSBvYmplY3Qgd2l0aCBmYWtlIGBudWxsYCBwcm90b3R5cGU6IHVzZSBpZnJhbWUgT2JqZWN0IHdpdGggY2xlYXJlZCBwcm90b3R5cGVcclxudmFyIGNyZWF0ZURpY3QgPSBmdW5jdGlvbigpe1xyXG4gIC8vIFRocmFzaCwgd2FzdGUgYW5kIHNvZG9teTogSUUgR0MgYnVnXHJcbiAgdmFyIGlmcmFtZSA9IHJlcXVpcmUoJy4vX2RvbS1jcmVhdGUnKSgnaWZyYW1lJylcclxuICAgICwgaSAgICAgID0gZW51bUJ1Z0tleXMubGVuZ3RoXHJcbiAgICAsIGd0ICAgICA9ICc+J1xyXG4gICAgLCBpZnJhbWVEb2N1bWVudDtcclxuICBpZnJhbWUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICByZXF1aXJlKCcuL19odG1sJykuYXBwZW5kQ2hpbGQoaWZyYW1lKTtcclxuICBpZnJhbWUuc3JjID0gJ2phdmFzY3JpcHQ6JzsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1zY3JpcHQtdXJsXHJcbiAgLy8gY3JlYXRlRGljdCA9IGlmcmFtZS5jb250ZW50V2luZG93Lk9iamVjdDtcclxuICAvLyBodG1sLnJlbW92ZUNoaWxkKGlmcmFtZSk7XHJcbiAgaWZyYW1lRG9jdW1lbnQgPSBpZnJhbWUuY29udGVudFdpbmRvdy5kb2N1bWVudDtcclxuICBpZnJhbWVEb2N1bWVudC5vcGVuKCk7XHJcbiAgaWZyYW1lRG9jdW1lbnQud3JpdGUoJzxzY3JpcHQ+ZG9jdW1lbnQuRj1PYmplY3Q8L3NjcmlwdCcgKyBndCk7XHJcbiAgaWZyYW1lRG9jdW1lbnQuY2xvc2UoKTtcclxuICBjcmVhdGVEaWN0ID0gaWZyYW1lRG9jdW1lbnQuRjtcclxuICB3aGlsZShpLS0pZGVsZXRlIGNyZWF0ZURpY3RbUFJPVE9UWVBFXVtlbnVtQnVnS2V5c1tpXV07XHJcbiAgcmV0dXJuIGNyZWF0ZURpY3QoKTtcclxufTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmNyZWF0ZSB8fCBmdW5jdGlvbiBjcmVhdGUoTywgUHJvcGVydGllcyl7XHJcbiAgdmFyIHJlc3VsdDtcclxuICBpZihPICE9PSBudWxsKXtcclxuICAgIEVtcHR5W1BST1RPVFlQRV0gPSBhbk9iamVjdChPKTtcclxuICAgIHJlc3VsdCA9IG5ldyBFbXB0eTtcclxuICAgIEVtcHR5W1BST1RPVFlQRV0gPSBudWxsO1xyXG4gICAgLy8gYWRkIFwiX19wcm90b19fXCIgZm9yIE9iamVjdC5nZXRQcm90b3R5cGVPZiBwb2x5ZmlsbFxyXG4gICAgcmVzdWx0W0lFX1BST1RPXSA9IE87XHJcbiAgfSBlbHNlIHJlc3VsdCA9IGNyZWF0ZURpY3QoKTtcclxuICByZXR1cm4gUHJvcGVydGllcyA9PT0gdW5kZWZpbmVkID8gcmVzdWx0IDogZFBzKHJlc3VsdCwgUHJvcGVydGllcyk7XHJcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+Ly5ucG1pbnN0YWxsL2NvcmUtanMvMi40LjAvY29yZS1qcy9tb2R1bGVzL19vYmplY3QtY3JlYXRlLmpzXG4gKiovIiwidmFyIGRQICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJylcclxuICAsIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0JylcclxuICAsIGdldEtleXMgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzIDogZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyhPLCBQcm9wZXJ0aWVzKXtcclxuICBhbk9iamVjdChPKTtcclxuICB2YXIga2V5cyAgID0gZ2V0S2V5cyhQcm9wZXJ0aWVzKVxyXG4gICAgLCBsZW5ndGggPSBrZXlzLmxlbmd0aFxyXG4gICAgLCBpID0gMFxyXG4gICAgLCBQO1xyXG4gIHdoaWxlKGxlbmd0aCA+IGkpZFAuZihPLCBQID0ga2V5c1tpKytdLCBQcm9wZXJ0aWVzW1BdKTtcclxuICByZXR1cm4gTztcclxufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vLm5wbWluc3RhbGwvY29yZS1qcy8yLjQuMC9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1kcHMuanNcbiAqKi8iLCIvLyAxOS4xLjIuMTQgLyAxNS4yLjMuMTQgT2JqZWN0LmtleXMoTylcclxudmFyICRrZXlzICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMtaW50ZXJuYWwnKVxyXG4gICwgZW51bUJ1Z0tleXMgPSByZXF1aXJlKCcuL19lbnVtLWJ1Zy1rZXlzJyk7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5rZXlzIHx8IGZ1bmN0aW9uIGtleXMoTyl7XHJcbiAgcmV0dXJuICRrZXlzKE8sIGVudW1CdWdLZXlzKTtcclxufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vLm5wbWluc3RhbGwvY29yZS1qcy8yLjQuMC9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1rZXlzLmpzXG4gKiovIiwidmFyIGhhcyAgICAgICAgICA9IHJlcXVpcmUoJy4vX2hhcycpXHJcbiAgLCB0b0lPYmplY3QgICAgPSByZXF1aXJlKCcuL190by1pb2JqZWN0JylcclxuICAsIGFycmF5SW5kZXhPZiA9IHJlcXVpcmUoJy4vX2FycmF5LWluY2x1ZGVzJykoZmFsc2UpXHJcbiAgLCBJRV9QUk9UTyAgICAgPSByZXF1aXJlKCcuL19zaGFyZWQta2V5JykoJ0lFX1BST1RPJyk7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG9iamVjdCwgbmFtZXMpe1xyXG4gIHZhciBPICAgICAgPSB0b0lPYmplY3Qob2JqZWN0KVxyXG4gICAgLCBpICAgICAgPSAwXHJcbiAgICAsIHJlc3VsdCA9IFtdXHJcbiAgICAsIGtleTtcclxuICBmb3Ioa2V5IGluIE8paWYoa2V5ICE9IElFX1BST1RPKWhhcyhPLCBrZXkpICYmIHJlc3VsdC5wdXNoKGtleSk7XHJcbiAgLy8gRG9uJ3QgZW51bSBidWcgJiBoaWRkZW4ga2V5c1xyXG4gIHdoaWxlKG5hbWVzLmxlbmd0aCA+IGkpaWYoaGFzKE8sIGtleSA9IG5hbWVzW2krK10pKXtcclxuICAgIH5hcnJheUluZGV4T2YocmVzdWx0LCBrZXkpIHx8IHJlc3VsdC5wdXNoKGtleSk7XHJcbiAgfVxyXG4gIHJldHVybiByZXN1bHQ7XHJcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+Ly5ucG1pbnN0YWxsL2NvcmUtanMvMi40LjAvY29yZS1qcy9tb2R1bGVzL19vYmplY3Qta2V5cy1pbnRlcm5hbC5qc1xuICoqLyIsIi8vIHRvIGluZGV4ZWQgb2JqZWN0LCB0b09iamVjdCB3aXRoIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgc3RyaW5nc1xudmFyIElPYmplY3QgPSByZXF1aXJlKCcuL19pb2JqZWN0JylcbiAgLCBkZWZpbmVkID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBJT2JqZWN0KGRlZmluZWQoaXQpKTtcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+Ly5ucG1pbnN0YWxsL2NvcmUtanMvMi40LjAvY29yZS1qcy9tb2R1bGVzL190by1pb2JqZWN0LmpzXG4gKiovIiwiLy8gZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBhbmQgbm9uLWVudW1lcmFibGUgb2xkIFY4IHN0cmluZ3NcbnZhciBjb2YgPSByZXF1aXJlKCcuL19jb2YnKTtcbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0KCd6JykucHJvcGVydHlJc0VudW1lcmFibGUoMCkgPyBPYmplY3QgOiBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBjb2YoaXQpID09ICdTdHJpbmcnID8gaXQuc3BsaXQoJycpIDogT2JqZWN0KGl0KTtcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+Ly5ucG1pbnN0YWxsL2NvcmUtanMvMi40LjAvY29yZS1qcy9tb2R1bGVzL19pb2JqZWN0LmpzXG4gKiovIiwiLy8gZmFsc2UgLT4gQXJyYXkjaW5kZXhPZlxuLy8gdHJ1ZSAgLT4gQXJyYXkjaW5jbHVkZXNcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0JylcbiAgLCB0b0xlbmd0aCAgPSByZXF1aXJlKCcuL190by1sZW5ndGgnKVxuICAsIHRvSW5kZXggICA9IHJlcXVpcmUoJy4vX3RvLWluZGV4Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKElTX0lOQ0xVREVTKXtcbiAgcmV0dXJuIGZ1bmN0aW9uKCR0aGlzLCBlbCwgZnJvbUluZGV4KXtcbiAgICB2YXIgTyAgICAgID0gdG9JT2JqZWN0KCR0aGlzKVxuICAgICAgLCBsZW5ndGggPSB0b0xlbmd0aChPLmxlbmd0aClcbiAgICAgICwgaW5kZXggID0gdG9JbmRleChmcm9tSW5kZXgsIGxlbmd0aClcbiAgICAgICwgdmFsdWU7XG4gICAgLy8gQXJyYXkjaW5jbHVkZXMgdXNlcyBTYW1lVmFsdWVaZXJvIGVxdWFsaXR5IGFsZ29yaXRobVxuICAgIGlmKElTX0lOQ0xVREVTICYmIGVsICE9IGVsKXdoaWxlKGxlbmd0aCA+IGluZGV4KXtcbiAgICAgIHZhbHVlID0gT1tpbmRleCsrXTtcbiAgICAgIGlmKHZhbHVlICE9IHZhbHVlKXJldHVybiB0cnVlO1xuICAgIC8vIEFycmF5I3RvSW5kZXggaWdub3JlcyBob2xlcywgQXJyYXkjaW5jbHVkZXMgLSBub3RcbiAgICB9IGVsc2UgZm9yKDtsZW5ndGggPiBpbmRleDsgaW5kZXgrKylpZihJU19JTkNMVURFUyB8fCBpbmRleCBpbiBPKXtcbiAgICAgIGlmKE9baW5kZXhdID09PSBlbClyZXR1cm4gSVNfSU5DTFVERVMgfHwgaW5kZXggfHwgMDtcbiAgICB9IHJldHVybiAhSVNfSU5DTFVERVMgJiYgLTE7XG4gIH07XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi8ubnBtaW5zdGFsbC9jb3JlLWpzLzIuNC4wL2NvcmUtanMvbW9kdWxlcy9fYXJyYXktaW5jbHVkZXMuanNcbiAqKi8iLCIvLyA3LjEuMTUgVG9MZW5ndGhcbnZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJylcbiAgLCBtaW4gICAgICAgPSBNYXRoLm1pbjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gaXQgPiAwID8gbWluKHRvSW50ZWdlcihpdCksIDB4MWZmZmZmZmZmZmZmZmYpIDogMDsgLy8gcG93KDIsIDUzKSAtIDEgPT0gOTAwNzE5OTI1NDc0MDk5MVxufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vLm5wbWluc3RhbGwvY29yZS1qcy8yLjQuMC9jb3JlLWpzL21vZHVsZXMvX3RvLWxlbmd0aC5qc1xuICoqLyIsInZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJylcbiAgLCBtYXggICAgICAgPSBNYXRoLm1heFxuICAsIG1pbiAgICAgICA9IE1hdGgubWluO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpbmRleCwgbGVuZ3RoKXtcbiAgaW5kZXggPSB0b0ludGVnZXIoaW5kZXgpO1xuICByZXR1cm4gaW5kZXggPCAwID8gbWF4KGluZGV4ICsgbGVuZ3RoLCAwKSA6IG1pbihpbmRleCwgbGVuZ3RoKTtcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+Ly5ucG1pbnN0YWxsL2NvcmUtanMvMi40LjAvY29yZS1qcy9tb2R1bGVzL190by1pbmRleC5qc1xuICoqLyIsInZhciBzaGFyZWQgPSByZXF1aXJlKCcuL19zaGFyZWQnKSgna2V5cycpXHJcbiAgLCB1aWQgICAgPSByZXF1aXJlKCcuL191aWQnKTtcclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihrZXkpe1xyXG4gIHJldHVybiBzaGFyZWRba2V5XSB8fCAoc2hhcmVkW2tleV0gPSB1aWQoa2V5KSk7XHJcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+Ly5ucG1pbnN0YWxsL2NvcmUtanMvMi40LjAvY29yZS1qcy9tb2R1bGVzL19zaGFyZWQta2V5LmpzXG4gKiovIiwiLy8gSUUgOC0gZG9uJ3QgZW51bSBidWcga2V5c1xyXG5tb2R1bGUuZXhwb3J0cyA9IChcclxuICAnY29uc3RydWN0b3IsaGFzT3duUHJvcGVydHksaXNQcm90b3R5cGVPZixwcm9wZXJ0eUlzRW51bWVyYWJsZSx0b0xvY2FsZVN0cmluZyx0b1N0cmluZyx2YWx1ZU9mJ1xyXG4pLnNwbGl0KCcsJyk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+Ly5ucG1pbnN0YWxsL2NvcmUtanMvMi40LjAvY29yZS1qcy9tb2R1bGVzL19lbnVtLWJ1Zy1rZXlzLmpzXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19nbG9iYWwnKS5kb2N1bWVudCAmJiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+Ly5ucG1pbnN0YWxsL2NvcmUtanMvMi40LjAvY29yZS1qcy9tb2R1bGVzL19odG1sLmpzXG4gKiovIiwidmFyIGRlZiA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmZcbiAgLCBoYXMgPSByZXF1aXJlKCcuL19oYXMnKVxuICAsIFRBRyA9IHJlcXVpcmUoJy4vX3drcycpKCd0b1N0cmluZ1RhZycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0LCB0YWcsIHN0YXQpe1xuICBpZihpdCAmJiAhaGFzKGl0ID0gc3RhdCA/IGl0IDogaXQucHJvdG90eXBlLCBUQUcpKWRlZihpdCwgVEFHLCB7Y29uZmlndXJhYmxlOiB0cnVlLCB2YWx1ZTogdGFnfSk7XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi8ubnBtaW5zdGFsbC9jb3JlLWpzLzIuNC4wL2NvcmUtanMvbW9kdWxlcy9fc2V0LXRvLXN0cmluZy10YWcuanNcbiAqKi8iLCIvLyAxOS4xLjIuOSAvIDE1LjIuMy4yIE9iamVjdC5nZXRQcm90b3R5cGVPZihPKVxyXG52YXIgaGFzICAgICAgICAgPSByZXF1aXJlKCcuL19oYXMnKVxyXG4gICwgdG9PYmplY3QgICAgPSByZXF1aXJlKCcuL190by1vYmplY3QnKVxyXG4gICwgSUVfUFJPVE8gICAgPSByZXF1aXJlKCcuL19zaGFyZWQta2V5JykoJ0lFX1BST1RPJylcclxuICAsIE9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmdldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uKE8pe1xyXG4gIE8gPSB0b09iamVjdChPKTtcclxuICBpZihoYXMoTywgSUVfUFJPVE8pKXJldHVybiBPW0lFX1BST1RPXTtcclxuICBpZih0eXBlb2YgTy5jb25zdHJ1Y3RvciA9PSAnZnVuY3Rpb24nICYmIE8gaW5zdGFuY2VvZiBPLmNvbnN0cnVjdG9yKXtcclxuICAgIHJldHVybiBPLmNvbnN0cnVjdG9yLnByb3RvdHlwZTtcclxuICB9IHJldHVybiBPIGluc3RhbmNlb2YgT2JqZWN0ID8gT2JqZWN0UHJvdG8gOiBudWxsO1xyXG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi8ubnBtaW5zdGFsbC9jb3JlLWpzLzIuNC4wL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWdwby5qc1xuICoqLyIsIi8vIDcuMS4xMyBUb09iamVjdChhcmd1bWVudClcbnZhciBkZWZpbmVkID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBPYmplY3QoZGVmaW5lZChpdCkpO1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vLm5wbWluc3RhbGwvY29yZS1qcy8yLjQuMC9jb3JlLWpzL21vZHVsZXMvX3RvLW9iamVjdC5qc1xuICoqLyIsInZhciAkaXRlcmF0b3JzICAgID0gcmVxdWlyZSgnLi9lczYuYXJyYXkuaXRlcmF0b3InKVxuICAsIHJlZGVmaW5lICAgICAgPSByZXF1aXJlKCcuL19yZWRlZmluZScpXG4gICwgZ2xvYmFsICAgICAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgaGlkZSAgICAgICAgICA9IHJlcXVpcmUoJy4vX2hpZGUnKVxuICAsIEl0ZXJhdG9ycyAgICAgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKVxuICAsIHdrcyAgICAgICAgICAgPSByZXF1aXJlKCcuL193a3MnKVxuICAsIElURVJBVE9SICAgICAgPSB3a3MoJ2l0ZXJhdG9yJylcbiAgLCBUT19TVFJJTkdfVEFHID0gd2tzKCd0b1N0cmluZ1RhZycpXG4gICwgQXJyYXlWYWx1ZXMgICA9IEl0ZXJhdG9ycy5BcnJheTtcblxuZm9yKHZhciBjb2xsZWN0aW9ucyA9IFsnTm9kZUxpc3QnLCAnRE9NVG9rZW5MaXN0JywgJ01lZGlhTGlzdCcsICdTdHlsZVNoZWV0TGlzdCcsICdDU1NSdWxlTGlzdCddLCBpID0gMDsgaSA8IDU7IGkrKyl7XG4gIHZhciBOQU1FICAgICAgID0gY29sbGVjdGlvbnNbaV1cbiAgICAsIENvbGxlY3Rpb24gPSBnbG9iYWxbTkFNRV1cbiAgICAsIHByb3RvICAgICAgPSBDb2xsZWN0aW9uICYmIENvbGxlY3Rpb24ucHJvdG90eXBlXG4gICAgLCBrZXk7XG4gIGlmKHByb3RvKXtcbiAgICBpZighcHJvdG9bSVRFUkFUT1JdKWhpZGUocHJvdG8sIElURVJBVE9SLCBBcnJheVZhbHVlcyk7XG4gICAgaWYoIXByb3RvW1RPX1NUUklOR19UQUddKWhpZGUocHJvdG8sIFRPX1NUUklOR19UQUcsIE5BTUUpO1xuICAgIEl0ZXJhdG9yc1tOQU1FXSA9IEFycmF5VmFsdWVzO1xuICAgIGZvcihrZXkgaW4gJGl0ZXJhdG9ycylpZighcHJvdG9ba2V5XSlyZWRlZmluZShwcm90bywga2V5LCAkaXRlcmF0b3JzW2tleV0sIHRydWUpO1xuICB9XG59XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+Ly5ucG1pbnN0YWxsL2NvcmUtanMvMi40LjAvY29yZS1qcy9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGUuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG52YXIgYWRkVG9VbnNjb3BhYmxlcyA9IHJlcXVpcmUoJy4vX2FkZC10by11bnNjb3BhYmxlcycpXG4gICwgc3RlcCAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2l0ZXItc3RlcCcpXG4gICwgSXRlcmF0b3JzICAgICAgICA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpXG4gICwgdG9JT2JqZWN0ICAgICAgICA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcblxuLy8gMjIuMS4zLjQgQXJyYXkucHJvdG90eXBlLmVudHJpZXMoKVxuLy8gMjIuMS4zLjEzIEFycmF5LnByb3RvdHlwZS5rZXlzKClcbi8vIDIyLjEuMy4yOSBBcnJheS5wcm90b3R5cGUudmFsdWVzKClcbi8vIDIyLjEuMy4zMCBBcnJheS5wcm90b3R5cGVbQEBpdGVyYXRvcl0oKVxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19pdGVyLWRlZmluZScpKEFycmF5LCAnQXJyYXknLCBmdW5jdGlvbihpdGVyYXRlZCwga2luZCl7XG4gIHRoaXMuX3QgPSB0b0lPYmplY3QoaXRlcmF0ZWQpOyAvLyB0YXJnZXRcbiAgdGhpcy5faSA9IDA7ICAgICAgICAgICAgICAgICAgIC8vIG5leHQgaW5kZXhcbiAgdGhpcy5fayA9IGtpbmQ7ICAgICAgICAgICAgICAgIC8vIGtpbmRcbi8vIDIyLjEuNS4yLjEgJUFycmF5SXRlcmF0b3JQcm90b3R5cGUlLm5leHQoKVxufSwgZnVuY3Rpb24oKXtcbiAgdmFyIE8gICAgID0gdGhpcy5fdFxuICAgICwga2luZCAgPSB0aGlzLl9rXG4gICAgLCBpbmRleCA9IHRoaXMuX2krKztcbiAgaWYoIU8gfHwgaW5kZXggPj0gTy5sZW5ndGgpe1xuICAgIHRoaXMuX3QgPSB1bmRlZmluZWQ7XG4gICAgcmV0dXJuIHN0ZXAoMSk7XG4gIH1cbiAgaWYoa2luZCA9PSAna2V5cycgIClyZXR1cm4gc3RlcCgwLCBpbmRleCk7XG4gIGlmKGtpbmQgPT0gJ3ZhbHVlcycpcmV0dXJuIHN0ZXAoMCwgT1tpbmRleF0pO1xuICByZXR1cm4gc3RlcCgwLCBbaW5kZXgsIE9baW5kZXhdXSk7XG59LCAndmFsdWVzJyk7XG5cbi8vIGFyZ3VtZW50c0xpc3RbQEBpdGVyYXRvcl0gaXMgJUFycmF5UHJvdG9fdmFsdWVzJSAoOS40LjQuNiwgOS40LjQuNylcbkl0ZXJhdG9ycy5Bcmd1bWVudHMgPSBJdGVyYXRvcnMuQXJyYXk7XG5cbmFkZFRvVW5zY29wYWJsZXMoJ2tleXMnKTtcbmFkZFRvVW5zY29wYWJsZXMoJ3ZhbHVlcycpO1xuYWRkVG9VbnNjb3BhYmxlcygnZW50cmllcycpO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi8ubnBtaW5zdGFsbC9jb3JlLWpzLzIuNC4wL2NvcmUtanMvbW9kdWxlcy9lczYuYXJyYXkuaXRlcmF0b3IuanNcbiAqKi8iLCIvLyAyMi4xLjMuMzEgQXJyYXkucHJvdG90eXBlW0BAdW5zY29wYWJsZXNdXG52YXIgVU5TQ09QQUJMRVMgPSByZXF1aXJlKCcuL193a3MnKSgndW5zY29wYWJsZXMnKVxuICAsIEFycmF5UHJvdG8gID0gQXJyYXkucHJvdG90eXBlO1xuaWYoQXJyYXlQcm90b1tVTlNDT1BBQkxFU10gPT0gdW5kZWZpbmVkKXJlcXVpcmUoJy4vX2hpZGUnKShBcnJheVByb3RvLCBVTlNDT1BBQkxFUywge30pO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihrZXkpe1xuICBBcnJheVByb3RvW1VOU0NPUEFCTEVTXVtrZXldID0gdHJ1ZTtcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+Ly5ucG1pbnN0YWxsL2NvcmUtanMvMi40LjAvY29yZS1qcy9tb2R1bGVzL19hZGQtdG8tdW5zY29wYWJsZXMuanNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGRvbmUsIHZhbHVlKXtcbiAgcmV0dXJuIHt2YWx1ZTogdmFsdWUsIGRvbmU6ICEhZG9uZX07XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi8ubnBtaW5zdGFsbC9jb3JlLWpzLzIuNC4wL2NvcmUtanMvbW9kdWxlcy9faXRlci1zdGVwLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xudmFyIExJQlJBUlkgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2xpYnJhcnknKVxuICAsIGdsb2JhbCAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgY3R4ICAgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fY3R4JylcbiAgLCBjbGFzc29mICAgICAgICAgICAgPSByZXF1aXJlKCcuL19jbGFzc29mJylcbiAgLCAkZXhwb3J0ICAgICAgICAgICAgPSByZXF1aXJlKCcuL19leHBvcnQnKVxuICAsIGlzT2JqZWN0ICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpXG4gICwgYW5PYmplY3QgICAgICAgICAgID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0JylcbiAgLCBhRnVuY3Rpb24gICAgICAgICAgPSByZXF1aXJlKCcuL19hLWZ1bmN0aW9uJylcbiAgLCBhbkluc3RhbmNlICAgICAgICAgPSByZXF1aXJlKCcuL19hbi1pbnN0YW5jZScpXG4gICwgZm9yT2YgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fZm9yLW9mJylcbiAgLCBzZXRQcm90byAgICAgICAgICAgPSByZXF1aXJlKCcuL19zZXQtcHJvdG8nKS5zZXRcbiAgLCBzcGVjaWVzQ29uc3RydWN0b3IgPSByZXF1aXJlKCcuL19zcGVjaWVzLWNvbnN0cnVjdG9yJylcbiAgLCB0YXNrICAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL190YXNrJykuc2V0XG4gICwgbWljcm90YXNrICAgICAgICAgID0gcmVxdWlyZSgnLi9fbWljcm90YXNrJykoKVxuICAsIFBST01JU0UgICAgICAgICAgICA9ICdQcm9taXNlJ1xuICAsIFR5cGVFcnJvciAgICAgICAgICA9IGdsb2JhbC5UeXBlRXJyb3JcbiAgLCBwcm9jZXNzICAgICAgICAgICAgPSBnbG9iYWwucHJvY2Vzc1xuICAsICRQcm9taXNlICAgICAgICAgICA9IGdsb2JhbFtQUk9NSVNFXVxuICAsIHByb2Nlc3MgICAgICAgICAgICA9IGdsb2JhbC5wcm9jZXNzXG4gICwgaXNOb2RlICAgICAgICAgICAgID0gY2xhc3NvZihwcm9jZXNzKSA9PSAncHJvY2VzcydcbiAgLCBlbXB0eSAgICAgICAgICAgICAgPSBmdW5jdGlvbigpeyAvKiBlbXB0eSAqLyB9XG4gICwgSW50ZXJuYWwsIEdlbmVyaWNQcm9taXNlQ2FwYWJpbGl0eSwgV3JhcHBlcjtcblxudmFyIFVTRV9OQVRJVkUgPSAhIWZ1bmN0aW9uKCl7XG4gIHRyeSB7XG4gICAgLy8gY29ycmVjdCBzdWJjbGFzc2luZyB3aXRoIEBAc3BlY2llcyBzdXBwb3J0XG4gICAgdmFyIHByb21pc2UgICAgID0gJFByb21pc2UucmVzb2x2ZSgxKVxuICAgICAgLCBGYWtlUHJvbWlzZSA9IChwcm9taXNlLmNvbnN0cnVjdG9yID0ge30pW3JlcXVpcmUoJy4vX3drcycpKCdzcGVjaWVzJyldID0gZnVuY3Rpb24oZXhlYyl7IGV4ZWMoZW1wdHksIGVtcHR5KTsgfTtcbiAgICAvLyB1bmhhbmRsZWQgcmVqZWN0aW9ucyB0cmFja2luZyBzdXBwb3J0LCBOb2RlSlMgUHJvbWlzZSB3aXRob3V0IGl0IGZhaWxzIEBAc3BlY2llcyB0ZXN0XG4gICAgcmV0dXJuIChpc05vZGUgfHwgdHlwZW9mIFByb21pc2VSZWplY3Rpb25FdmVudCA9PSAnZnVuY3Rpb24nKSAmJiBwcm9taXNlLnRoZW4oZW1wdHkpIGluc3RhbmNlb2YgRmFrZVByb21pc2U7XG4gIH0gY2F0Y2goZSl7IC8qIGVtcHR5ICovIH1cbn0oKTtcblxuLy8gaGVscGVyc1xudmFyIHNhbWVDb25zdHJ1Y3RvciA9IGZ1bmN0aW9uKGEsIGIpe1xuICAvLyB3aXRoIGxpYnJhcnkgd3JhcHBlciBzcGVjaWFsIGNhc2VcbiAgcmV0dXJuIGEgPT09IGIgfHwgYSA9PT0gJFByb21pc2UgJiYgYiA9PT0gV3JhcHBlcjtcbn07XG52YXIgaXNUaGVuYWJsZSA9IGZ1bmN0aW9uKGl0KXtcbiAgdmFyIHRoZW47XG4gIHJldHVybiBpc09iamVjdChpdCkgJiYgdHlwZW9mICh0aGVuID0gaXQudGhlbikgPT0gJ2Z1bmN0aW9uJyA/IHRoZW4gOiBmYWxzZTtcbn07XG52YXIgbmV3UHJvbWlzZUNhcGFiaWxpdHkgPSBmdW5jdGlvbihDKXtcbiAgcmV0dXJuIHNhbWVDb25zdHJ1Y3RvcigkUHJvbWlzZSwgQylcbiAgICA/IG5ldyBQcm9taXNlQ2FwYWJpbGl0eShDKVxuICAgIDogbmV3IEdlbmVyaWNQcm9taXNlQ2FwYWJpbGl0eShDKTtcbn07XG52YXIgUHJvbWlzZUNhcGFiaWxpdHkgPSBHZW5lcmljUHJvbWlzZUNhcGFiaWxpdHkgPSBmdW5jdGlvbihDKXtcbiAgdmFyIHJlc29sdmUsIHJlamVjdDtcbiAgdGhpcy5wcm9taXNlID0gbmV3IEMoZnVuY3Rpb24oJCRyZXNvbHZlLCAkJHJlamVjdCl7XG4gICAgaWYocmVzb2x2ZSAhPT0gdW5kZWZpbmVkIHx8IHJlamVjdCAhPT0gdW5kZWZpbmVkKXRocm93IFR5cGVFcnJvcignQmFkIFByb21pc2UgY29uc3RydWN0b3InKTtcbiAgICByZXNvbHZlID0gJCRyZXNvbHZlO1xuICAgIHJlamVjdCAgPSAkJHJlamVjdDtcbiAgfSk7XG4gIHRoaXMucmVzb2x2ZSA9IGFGdW5jdGlvbihyZXNvbHZlKTtcbiAgdGhpcy5yZWplY3QgID0gYUZ1bmN0aW9uKHJlamVjdCk7XG59O1xudmFyIHBlcmZvcm0gPSBmdW5jdGlvbihleGVjKXtcbiAgdHJ5IHtcbiAgICBleGVjKCk7XG4gIH0gY2F0Y2goZSl7XG4gICAgcmV0dXJuIHtlcnJvcjogZX07XG4gIH1cbn07XG52YXIgbm90aWZ5ID0gZnVuY3Rpb24ocHJvbWlzZSwgaXNSZWplY3Qpe1xuICBpZihwcm9taXNlLl9uKXJldHVybjtcbiAgcHJvbWlzZS5fbiA9IHRydWU7XG4gIHZhciBjaGFpbiA9IHByb21pc2UuX2M7XG4gIG1pY3JvdGFzayhmdW5jdGlvbigpe1xuICAgIHZhciB2YWx1ZSA9IHByb21pc2UuX3ZcbiAgICAgICwgb2sgICAgPSBwcm9taXNlLl9zID09IDFcbiAgICAgICwgaSAgICAgPSAwO1xuICAgIHZhciBydW4gPSBmdW5jdGlvbihyZWFjdGlvbil7XG4gICAgICB2YXIgaGFuZGxlciA9IG9rID8gcmVhY3Rpb24ub2sgOiByZWFjdGlvbi5mYWlsXG4gICAgICAgICwgcmVzb2x2ZSA9IHJlYWN0aW9uLnJlc29sdmVcbiAgICAgICAgLCByZWplY3QgID0gcmVhY3Rpb24ucmVqZWN0XG4gICAgICAgICwgZG9tYWluICA9IHJlYWN0aW9uLmRvbWFpblxuICAgICAgICAsIHJlc3VsdCwgdGhlbjtcbiAgICAgIHRyeSB7XG4gICAgICAgIGlmKGhhbmRsZXIpe1xuICAgICAgICAgIGlmKCFvayl7XG4gICAgICAgICAgICBpZihwcm9taXNlLl9oID09IDIpb25IYW5kbGVVbmhhbmRsZWQocHJvbWlzZSk7XG4gICAgICAgICAgICBwcm9taXNlLl9oID0gMTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYoaGFuZGxlciA9PT0gdHJ1ZSlyZXN1bHQgPSB2YWx1ZTtcbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmKGRvbWFpbilkb21haW4uZW50ZXIoKTtcbiAgICAgICAgICAgIHJlc3VsdCA9IGhhbmRsZXIodmFsdWUpO1xuICAgICAgICAgICAgaWYoZG9tYWluKWRvbWFpbi5leGl0KCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmKHJlc3VsdCA9PT0gcmVhY3Rpb24ucHJvbWlzZSl7XG4gICAgICAgICAgICByZWplY3QoVHlwZUVycm9yKCdQcm9taXNlLWNoYWluIGN5Y2xlJykpO1xuICAgICAgICAgIH0gZWxzZSBpZih0aGVuID0gaXNUaGVuYWJsZShyZXN1bHQpKXtcbiAgICAgICAgICAgIHRoZW4uY2FsbChyZXN1bHQsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSBlbHNlIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgfSBlbHNlIHJlamVjdCh2YWx1ZSk7XG4gICAgICB9IGNhdGNoKGUpe1xuICAgICAgICByZWplY3QoZSk7XG4gICAgICB9XG4gICAgfTtcbiAgICB3aGlsZShjaGFpbi5sZW5ndGggPiBpKXJ1bihjaGFpbltpKytdKTsgLy8gdmFyaWFibGUgbGVuZ3RoIC0gY2FuJ3QgdXNlIGZvckVhY2hcbiAgICBwcm9taXNlLl9jID0gW107XG4gICAgcHJvbWlzZS5fbiA9IGZhbHNlO1xuICAgIGlmKGlzUmVqZWN0ICYmICFwcm9taXNlLl9oKW9uVW5oYW5kbGVkKHByb21pc2UpO1xuICB9KTtcbn07XG52YXIgb25VbmhhbmRsZWQgPSBmdW5jdGlvbihwcm9taXNlKXtcbiAgdGFzay5jYWxsKGdsb2JhbCwgZnVuY3Rpb24oKXtcbiAgICB2YXIgdmFsdWUgPSBwcm9taXNlLl92XG4gICAgICAsIGFicnVwdCwgaGFuZGxlciwgY29uc29sZTtcbiAgICBpZihpc1VuaGFuZGxlZChwcm9taXNlKSl7XG4gICAgICBhYnJ1cHQgPSBwZXJmb3JtKGZ1bmN0aW9uKCl7XG4gICAgICAgIGlmKGlzTm9kZSl7XG4gICAgICAgICAgcHJvY2Vzcy5lbWl0KCd1bmhhbmRsZWRSZWplY3Rpb24nLCB2YWx1ZSwgcHJvbWlzZSk7XG4gICAgICAgIH0gZWxzZSBpZihoYW5kbGVyID0gZ2xvYmFsLm9udW5oYW5kbGVkcmVqZWN0aW9uKXtcbiAgICAgICAgICBoYW5kbGVyKHtwcm9taXNlOiBwcm9taXNlLCByZWFzb246IHZhbHVlfSk7XG4gICAgICAgIH0gZWxzZSBpZigoY29uc29sZSA9IGdsb2JhbC5jb25zb2xlKSAmJiBjb25zb2xlLmVycm9yKXtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdVbmhhbmRsZWQgcHJvbWlzZSByZWplY3Rpb24nLCB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgLy8gQnJvd3NlcnMgc2hvdWxkIG5vdCB0cmlnZ2VyIGByZWplY3Rpb25IYW5kbGVkYCBldmVudCBpZiBpdCB3YXMgaGFuZGxlZCBoZXJlLCBOb2RlSlMgLSBzaG91bGRcbiAgICAgIHByb21pc2UuX2ggPSBpc05vZGUgfHwgaXNVbmhhbmRsZWQocHJvbWlzZSkgPyAyIDogMTtcbiAgICB9IHByb21pc2UuX2EgPSB1bmRlZmluZWQ7XG4gICAgaWYoYWJydXB0KXRocm93IGFicnVwdC5lcnJvcjtcbiAgfSk7XG59O1xudmFyIGlzVW5oYW5kbGVkID0gZnVuY3Rpb24ocHJvbWlzZSl7XG4gIGlmKHByb21pc2UuX2ggPT0gMSlyZXR1cm4gZmFsc2U7XG4gIHZhciBjaGFpbiA9IHByb21pc2UuX2EgfHwgcHJvbWlzZS5fY1xuICAgICwgaSAgICAgPSAwXG4gICAgLCByZWFjdGlvbjtcbiAgd2hpbGUoY2hhaW4ubGVuZ3RoID4gaSl7XG4gICAgcmVhY3Rpb24gPSBjaGFpbltpKytdO1xuICAgIGlmKHJlYWN0aW9uLmZhaWwgfHwgIWlzVW5oYW5kbGVkKHJlYWN0aW9uLnByb21pc2UpKXJldHVybiBmYWxzZTtcbiAgfSByZXR1cm4gdHJ1ZTtcbn07XG52YXIgb25IYW5kbGVVbmhhbmRsZWQgPSBmdW5jdGlvbihwcm9taXNlKXtcbiAgdGFzay5jYWxsKGdsb2JhbCwgZnVuY3Rpb24oKXtcbiAgICB2YXIgaGFuZGxlcjtcbiAgICBpZihpc05vZGUpe1xuICAgICAgcHJvY2Vzcy5lbWl0KCdyZWplY3Rpb25IYW5kbGVkJywgcHJvbWlzZSk7XG4gICAgfSBlbHNlIGlmKGhhbmRsZXIgPSBnbG9iYWwub25yZWplY3Rpb25oYW5kbGVkKXtcbiAgICAgIGhhbmRsZXIoe3Byb21pc2U6IHByb21pc2UsIHJlYXNvbjogcHJvbWlzZS5fdn0pO1xuICAgIH1cbiAgfSk7XG59O1xudmFyICRyZWplY3QgPSBmdW5jdGlvbih2YWx1ZSl7XG4gIHZhciBwcm9taXNlID0gdGhpcztcbiAgaWYocHJvbWlzZS5fZClyZXR1cm47XG4gIHByb21pc2UuX2QgPSB0cnVlO1xuICBwcm9taXNlID0gcHJvbWlzZS5fdyB8fCBwcm9taXNlOyAvLyB1bndyYXBcbiAgcHJvbWlzZS5fdiA9IHZhbHVlO1xuICBwcm9taXNlLl9zID0gMjtcbiAgaWYoIXByb21pc2UuX2EpcHJvbWlzZS5fYSA9IHByb21pc2UuX2Muc2xpY2UoKTtcbiAgbm90aWZ5KHByb21pc2UsIHRydWUpO1xufTtcbnZhciAkcmVzb2x2ZSA9IGZ1bmN0aW9uKHZhbHVlKXtcbiAgdmFyIHByb21pc2UgPSB0aGlzXG4gICAgLCB0aGVuO1xuICBpZihwcm9taXNlLl9kKXJldHVybjtcbiAgcHJvbWlzZS5fZCA9IHRydWU7XG4gIHByb21pc2UgPSBwcm9taXNlLl93IHx8IHByb21pc2U7IC8vIHVud3JhcFxuICB0cnkge1xuICAgIGlmKHByb21pc2UgPT09IHZhbHVlKXRocm93IFR5cGVFcnJvcihcIlByb21pc2UgY2FuJ3QgYmUgcmVzb2x2ZWQgaXRzZWxmXCIpO1xuICAgIGlmKHRoZW4gPSBpc1RoZW5hYmxlKHZhbHVlKSl7XG4gICAgICBtaWNyb3Rhc2soZnVuY3Rpb24oKXtcbiAgICAgICAgdmFyIHdyYXBwZXIgPSB7X3c6IHByb21pc2UsIF9kOiBmYWxzZX07IC8vIHdyYXBcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICB0aGVuLmNhbGwodmFsdWUsIGN0eCgkcmVzb2x2ZSwgd3JhcHBlciwgMSksIGN0eCgkcmVqZWN0LCB3cmFwcGVyLCAxKSk7XG4gICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgJHJlamVjdC5jYWxsKHdyYXBwZXIsIGUpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcHJvbWlzZS5fdiA9IHZhbHVlO1xuICAgICAgcHJvbWlzZS5fcyA9IDE7XG4gICAgICBub3RpZnkocHJvbWlzZSwgZmFsc2UpO1xuICAgIH1cbiAgfSBjYXRjaChlKXtcbiAgICAkcmVqZWN0LmNhbGwoe193OiBwcm9taXNlLCBfZDogZmFsc2V9LCBlKTsgLy8gd3JhcFxuICB9XG59O1xuXG4vLyBjb25zdHJ1Y3RvciBwb2x5ZmlsbFxuaWYoIVVTRV9OQVRJVkUpe1xuICAvLyAyNS40LjMuMSBQcm9taXNlKGV4ZWN1dG9yKVxuICAkUHJvbWlzZSA9IGZ1bmN0aW9uIFByb21pc2UoZXhlY3V0b3Ipe1xuICAgIGFuSW5zdGFuY2UodGhpcywgJFByb21pc2UsIFBST01JU0UsICdfaCcpO1xuICAgIGFGdW5jdGlvbihleGVjdXRvcik7XG4gICAgSW50ZXJuYWwuY2FsbCh0aGlzKTtcbiAgICB0cnkge1xuICAgICAgZXhlY3V0b3IoY3R4KCRyZXNvbHZlLCB0aGlzLCAxKSwgY3R4KCRyZWplY3QsIHRoaXMsIDEpKTtcbiAgICB9IGNhdGNoKGVycil7XG4gICAgICAkcmVqZWN0LmNhbGwodGhpcywgZXJyKTtcbiAgICB9XG4gIH07XG4gIEludGVybmFsID0gZnVuY3Rpb24gUHJvbWlzZShleGVjdXRvcil7XG4gICAgdGhpcy5fYyA9IFtdOyAgICAgICAgICAgICAvLyA8LSBhd2FpdGluZyByZWFjdGlvbnNcbiAgICB0aGlzLl9hID0gdW5kZWZpbmVkOyAgICAgIC8vIDwtIGNoZWNrZWQgaW4gaXNVbmhhbmRsZWQgcmVhY3Rpb25zXG4gICAgdGhpcy5fcyA9IDA7ICAgICAgICAgICAgICAvLyA8LSBzdGF0ZVxuICAgIHRoaXMuX2QgPSBmYWxzZTsgICAgICAgICAgLy8gPC0gZG9uZVxuICAgIHRoaXMuX3YgPSB1bmRlZmluZWQ7ICAgICAgLy8gPC0gdmFsdWVcbiAgICB0aGlzLl9oID0gMDsgICAgICAgICAgICAgIC8vIDwtIHJlamVjdGlvbiBzdGF0ZSwgMCAtIGRlZmF1bHQsIDEgLSBoYW5kbGVkLCAyIC0gdW5oYW5kbGVkXG4gICAgdGhpcy5fbiA9IGZhbHNlOyAgICAgICAgICAvLyA8LSBub3RpZnlcbiAgfTtcbiAgSW50ZXJuYWwucHJvdG90eXBlID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUtYWxsJykoJFByb21pc2UucHJvdG90eXBlLCB7XG4gICAgLy8gMjUuNC41LjMgUHJvbWlzZS5wcm90b3R5cGUudGhlbihvbkZ1bGZpbGxlZCwgb25SZWplY3RlZClcbiAgICB0aGVuOiBmdW5jdGlvbiB0aGVuKG9uRnVsZmlsbGVkLCBvblJlamVjdGVkKXtcbiAgICAgIHZhciByZWFjdGlvbiAgICA9IG5ld1Byb21pc2VDYXBhYmlsaXR5KHNwZWNpZXNDb25zdHJ1Y3Rvcih0aGlzLCAkUHJvbWlzZSkpO1xuICAgICAgcmVhY3Rpb24ub2sgICAgID0gdHlwZW9mIG9uRnVsZmlsbGVkID09ICdmdW5jdGlvbicgPyBvbkZ1bGZpbGxlZCA6IHRydWU7XG4gICAgICByZWFjdGlvbi5mYWlsICAgPSB0eXBlb2Ygb25SZWplY3RlZCA9PSAnZnVuY3Rpb24nICYmIG9uUmVqZWN0ZWQ7XG4gICAgICByZWFjdGlvbi5kb21haW4gPSBpc05vZGUgPyBwcm9jZXNzLmRvbWFpbiA6IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2MucHVzaChyZWFjdGlvbik7XG4gICAgICBpZih0aGlzLl9hKXRoaXMuX2EucHVzaChyZWFjdGlvbik7XG4gICAgICBpZih0aGlzLl9zKW5vdGlmeSh0aGlzLCBmYWxzZSk7XG4gICAgICByZXR1cm4gcmVhY3Rpb24ucHJvbWlzZTtcbiAgICB9LFxuICAgIC8vIDI1LjQuNS4xIFByb21pc2UucHJvdG90eXBlLmNhdGNoKG9uUmVqZWN0ZWQpXG4gICAgJ2NhdGNoJzogZnVuY3Rpb24ob25SZWplY3RlZCl7XG4gICAgICByZXR1cm4gdGhpcy50aGVuKHVuZGVmaW5lZCwgb25SZWplY3RlZCk7XG4gICAgfVxuICB9KTtcbiAgUHJvbWlzZUNhcGFiaWxpdHkgPSBmdW5jdGlvbigpe1xuICAgIHZhciBwcm9taXNlICA9IG5ldyBJbnRlcm5hbDtcbiAgICB0aGlzLnByb21pc2UgPSBwcm9taXNlO1xuICAgIHRoaXMucmVzb2x2ZSA9IGN0eCgkcmVzb2x2ZSwgcHJvbWlzZSwgMSk7XG4gICAgdGhpcy5yZWplY3QgID0gY3R4KCRyZWplY3QsIHByb21pc2UsIDEpO1xuICB9O1xufVxuXG4kZXhwb3J0KCRleHBvcnQuRyArICRleHBvcnQuVyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCB7UHJvbWlzZTogJFByb21pc2V9KTtcbnJlcXVpcmUoJy4vX3NldC10by1zdHJpbmctdGFnJykoJFByb21pc2UsIFBST01JU0UpO1xucmVxdWlyZSgnLi9fc2V0LXNwZWNpZXMnKShQUk9NSVNFKTtcbldyYXBwZXIgPSByZXF1aXJlKCcuL19jb3JlJylbUFJPTUlTRV07XG5cbi8vIHN0YXRpY3NcbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIVVTRV9OQVRJVkUsIFBST01JU0UsIHtcbiAgLy8gMjUuNC40LjUgUHJvbWlzZS5yZWplY3QocilcbiAgcmVqZWN0OiBmdW5jdGlvbiByZWplY3Qocil7XG4gICAgdmFyIGNhcGFiaWxpdHkgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eSh0aGlzKVxuICAgICAgLCAkJHJlamVjdCAgID0gY2FwYWJpbGl0eS5yZWplY3Q7XG4gICAgJCRyZWplY3Qocik7XG4gICAgcmV0dXJuIGNhcGFiaWxpdHkucHJvbWlzZTtcbiAgfVxufSk7XG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqIChMSUJSQVJZIHx8ICFVU0VfTkFUSVZFKSwgUFJPTUlTRSwge1xuICAvLyAyNS40LjQuNiBQcm9taXNlLnJlc29sdmUoeClcbiAgcmVzb2x2ZTogZnVuY3Rpb24gcmVzb2x2ZSh4KXtcbiAgICAvLyBpbnN0YW5jZW9mIGluc3RlYWQgb2YgaW50ZXJuYWwgc2xvdCBjaGVjayBiZWNhdXNlIHdlIHNob3VsZCBmaXggaXQgd2l0aG91dCByZXBsYWNlbWVudCBuYXRpdmUgUHJvbWlzZSBjb3JlXG4gICAgaWYoeCBpbnN0YW5jZW9mICRQcm9taXNlICYmIHNhbWVDb25zdHJ1Y3Rvcih4LmNvbnN0cnVjdG9yLCB0aGlzKSlyZXR1cm4geDtcbiAgICB2YXIgY2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5KHRoaXMpXG4gICAgICAsICQkcmVzb2x2ZSAgPSBjYXBhYmlsaXR5LnJlc29sdmU7XG4gICAgJCRyZXNvbHZlKHgpO1xuICAgIHJldHVybiBjYXBhYmlsaXR5LnByb21pc2U7XG4gIH1cbn0pO1xuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhKFVTRV9OQVRJVkUgJiYgcmVxdWlyZSgnLi9faXRlci1kZXRlY3QnKShmdW5jdGlvbihpdGVyKXtcbiAgJFByb21pc2UuYWxsKGl0ZXIpWydjYXRjaCddKGVtcHR5KTtcbn0pKSwgUFJPTUlTRSwge1xuICAvLyAyNS40LjQuMSBQcm9taXNlLmFsbChpdGVyYWJsZSlcbiAgYWxsOiBmdW5jdGlvbiBhbGwoaXRlcmFibGUpe1xuICAgIHZhciBDICAgICAgICAgID0gdGhpc1xuICAgICAgLCBjYXBhYmlsaXR5ID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkoQylcbiAgICAgICwgcmVzb2x2ZSAgICA9IGNhcGFiaWxpdHkucmVzb2x2ZVxuICAgICAgLCByZWplY3QgICAgID0gY2FwYWJpbGl0eS5yZWplY3Q7XG4gICAgdmFyIGFicnVwdCA9IHBlcmZvcm0oZnVuY3Rpb24oKXtcbiAgICAgIHZhciB2YWx1ZXMgICAgPSBbXVxuICAgICAgICAsIGluZGV4ICAgICA9IDBcbiAgICAgICAgLCByZW1haW5pbmcgPSAxO1xuICAgICAgZm9yT2YoaXRlcmFibGUsIGZhbHNlLCBmdW5jdGlvbihwcm9taXNlKXtcbiAgICAgICAgdmFyICRpbmRleCAgICAgICAgPSBpbmRleCsrXG4gICAgICAgICAgLCBhbHJlYWR5Q2FsbGVkID0gZmFsc2U7XG4gICAgICAgIHZhbHVlcy5wdXNoKHVuZGVmaW5lZCk7XG4gICAgICAgIHJlbWFpbmluZysrO1xuICAgICAgICBDLnJlc29sdmUocHJvbWlzZSkudGhlbihmdW5jdGlvbih2YWx1ZSl7XG4gICAgICAgICAgaWYoYWxyZWFkeUNhbGxlZClyZXR1cm47XG4gICAgICAgICAgYWxyZWFkeUNhbGxlZCAgPSB0cnVlO1xuICAgICAgICAgIHZhbHVlc1skaW5kZXhdID0gdmFsdWU7XG4gICAgICAgICAgLS1yZW1haW5pbmcgfHwgcmVzb2x2ZSh2YWx1ZXMpO1xuICAgICAgICB9LCByZWplY3QpO1xuICAgICAgfSk7XG4gICAgICAtLXJlbWFpbmluZyB8fCByZXNvbHZlKHZhbHVlcyk7XG4gICAgfSk7XG4gICAgaWYoYWJydXB0KXJlamVjdChhYnJ1cHQuZXJyb3IpO1xuICAgIHJldHVybiBjYXBhYmlsaXR5LnByb21pc2U7XG4gIH0sXG4gIC8vIDI1LjQuNC40IFByb21pc2UucmFjZShpdGVyYWJsZSlcbiAgcmFjZTogZnVuY3Rpb24gcmFjZShpdGVyYWJsZSl7XG4gICAgdmFyIEMgICAgICAgICAgPSB0aGlzXG4gICAgICAsIGNhcGFiaWxpdHkgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eShDKVxuICAgICAgLCByZWplY3QgICAgID0gY2FwYWJpbGl0eS5yZWplY3Q7XG4gICAgdmFyIGFicnVwdCA9IHBlcmZvcm0oZnVuY3Rpb24oKXtcbiAgICAgIGZvck9mKGl0ZXJhYmxlLCBmYWxzZSwgZnVuY3Rpb24ocHJvbWlzZSl7XG4gICAgICAgIEMucmVzb2x2ZShwcm9taXNlKS50aGVuKGNhcGFiaWxpdHkucmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIGlmKGFicnVwdClyZWplY3QoYWJydXB0LmVycm9yKTtcbiAgICByZXR1cm4gY2FwYWJpbGl0eS5wcm9taXNlO1xuICB9XG59KTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vLm5wbWluc3RhbGwvY29yZS1qcy8yLjQuMC9jb3JlLWpzL21vZHVsZXMvZXM2LnByb21pc2UuanNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0LCBDb25zdHJ1Y3RvciwgbmFtZSwgZm9yYmlkZGVuRmllbGQpe1xuICBpZighKGl0IGluc3RhbmNlb2YgQ29uc3RydWN0b3IpIHx8IChmb3JiaWRkZW5GaWVsZCAhPT0gdW5kZWZpbmVkICYmIGZvcmJpZGRlbkZpZWxkIGluIGl0KSl7XG4gICAgdGhyb3cgVHlwZUVycm9yKG5hbWUgKyAnOiBpbmNvcnJlY3QgaW52b2NhdGlvbiEnKTtcbiAgfSByZXR1cm4gaXQ7XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi8ubnBtaW5zdGFsbC9jb3JlLWpzLzIuNC4wL2NvcmUtanMvbW9kdWxlcy9fYW4taW5zdGFuY2UuanNcbiAqKi8iLCJ2YXIgY3R4ICAgICAgICAgPSByZXF1aXJlKCcuL19jdHgnKVxuICAsIGNhbGwgICAgICAgID0gcmVxdWlyZSgnLi9faXRlci1jYWxsJylcbiAgLCBpc0FycmF5SXRlciA9IHJlcXVpcmUoJy4vX2lzLWFycmF5LWl0ZXInKVxuICAsIGFuT2JqZWN0ICAgID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0JylcbiAgLCB0b0xlbmd0aCAgICA9IHJlcXVpcmUoJy4vX3RvLWxlbmd0aCcpXG4gICwgZ2V0SXRlckZuICAgPSByZXF1aXJlKCcuL2NvcmUuZ2V0LWl0ZXJhdG9yLW1ldGhvZCcpXG4gICwgQlJFQUsgICAgICAgPSB7fVxuICAsIFJFVFVSTiAgICAgID0ge307XG52YXIgZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXRlcmFibGUsIGVudHJpZXMsIGZuLCB0aGF0LCBJVEVSQVRPUil7XG4gIHZhciBpdGVyRm4gPSBJVEVSQVRPUiA/IGZ1bmN0aW9uKCl7IHJldHVybiBpdGVyYWJsZTsgfSA6IGdldEl0ZXJGbihpdGVyYWJsZSlcbiAgICAsIGYgICAgICA9IGN0eChmbiwgdGhhdCwgZW50cmllcyA/IDIgOiAxKVxuICAgICwgaW5kZXggID0gMFxuICAgICwgbGVuZ3RoLCBzdGVwLCBpdGVyYXRvciwgcmVzdWx0O1xuICBpZih0eXBlb2YgaXRlckZuICE9ICdmdW5jdGlvbicpdGhyb3cgVHlwZUVycm9yKGl0ZXJhYmxlICsgJyBpcyBub3QgaXRlcmFibGUhJyk7XG4gIC8vIGZhc3QgY2FzZSBmb3IgYXJyYXlzIHdpdGggZGVmYXVsdCBpdGVyYXRvclxuICBpZihpc0FycmF5SXRlcihpdGVyRm4pKWZvcihsZW5ndGggPSB0b0xlbmd0aChpdGVyYWJsZS5sZW5ndGgpOyBsZW5ndGggPiBpbmRleDsgaW5kZXgrKyl7XG4gICAgcmVzdWx0ID0gZW50cmllcyA/IGYoYW5PYmplY3Qoc3RlcCA9IGl0ZXJhYmxlW2luZGV4XSlbMF0sIHN0ZXBbMV0pIDogZihpdGVyYWJsZVtpbmRleF0pO1xuICAgIGlmKHJlc3VsdCA9PT0gQlJFQUsgfHwgcmVzdWx0ID09PSBSRVRVUk4pcmV0dXJuIHJlc3VsdDtcbiAgfSBlbHNlIGZvcihpdGVyYXRvciA9IGl0ZXJGbi5jYWxsKGl0ZXJhYmxlKTsgIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lOyApe1xuICAgIHJlc3VsdCA9IGNhbGwoaXRlcmF0b3IsIGYsIHN0ZXAudmFsdWUsIGVudHJpZXMpO1xuICAgIGlmKHJlc3VsdCA9PT0gQlJFQUsgfHwgcmVzdWx0ID09PSBSRVRVUk4pcmV0dXJuIHJlc3VsdDtcbiAgfVxufTtcbmV4cG9ydHMuQlJFQUsgID0gQlJFQUs7XG5leHBvcnRzLlJFVFVSTiA9IFJFVFVSTjtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vLm5wbWluc3RhbGwvY29yZS1qcy8yLjQuMC9jb3JlLWpzL21vZHVsZXMvX2Zvci1vZi5qc1xuICoqLyIsIi8vIGNhbGwgc29tZXRoaW5nIG9uIGl0ZXJhdG9yIHN0ZXAgd2l0aCBzYWZlIGNsb3Npbmcgb24gZXJyb3JcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdGVyYXRvciwgZm4sIHZhbHVlLCBlbnRyaWVzKXtcbiAgdHJ5IHtcbiAgICByZXR1cm4gZW50cmllcyA/IGZuKGFuT2JqZWN0KHZhbHVlKVswXSwgdmFsdWVbMV0pIDogZm4odmFsdWUpO1xuICAvLyA3LjQuNiBJdGVyYXRvckNsb3NlKGl0ZXJhdG9yLCBjb21wbGV0aW9uKVxuICB9IGNhdGNoKGUpe1xuICAgIHZhciByZXQgPSBpdGVyYXRvclsncmV0dXJuJ107XG4gICAgaWYocmV0ICE9PSB1bmRlZmluZWQpYW5PYmplY3QocmV0LmNhbGwoaXRlcmF0b3IpKTtcbiAgICB0aHJvdyBlO1xuICB9XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi8ubnBtaW5zdGFsbC9jb3JlLWpzLzIuNC4wL2NvcmUtanMvbW9kdWxlcy9faXRlci1jYWxsLmpzXG4gKiovIiwiLy8gY2hlY2sgb24gZGVmYXVsdCBBcnJheSBpdGVyYXRvclxudmFyIEl0ZXJhdG9ycyAgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKVxuICAsIElURVJBVE9SICAgPSByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKVxuICAsIEFycmF5UHJvdG8gPSBBcnJheS5wcm90b3R5cGU7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gaXQgIT09IHVuZGVmaW5lZCAmJiAoSXRlcmF0b3JzLkFycmF5ID09PSBpdCB8fCBBcnJheVByb3RvW0lURVJBVE9SXSA9PT0gaXQpO1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vLm5wbWluc3RhbGwvY29yZS1qcy8yLjQuMC9jb3JlLWpzL21vZHVsZXMvX2lzLWFycmF5LWl0ZXIuanNcbiAqKi8iLCJ2YXIgY2xhc3NvZiAgID0gcmVxdWlyZSgnLi9fY2xhc3NvZicpXG4gICwgSVRFUkFUT1IgID0gcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJylcbiAgLCBJdGVyYXRvcnMgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fY29yZScpLmdldEl0ZXJhdG9yTWV0aG9kID0gZnVuY3Rpb24oaXQpe1xuICBpZihpdCAhPSB1bmRlZmluZWQpcmV0dXJuIGl0W0lURVJBVE9SXVxuICAgIHx8IGl0WydAQGl0ZXJhdG9yJ11cbiAgICB8fCBJdGVyYXRvcnNbY2xhc3NvZihpdCldO1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vLm5wbWluc3RhbGwvY29yZS1qcy8yLjQuMC9jb3JlLWpzL21vZHVsZXMvY29yZS5nZXQtaXRlcmF0b3ItbWV0aG9kLmpzXG4gKiovIiwiLy8gV29ya3Mgd2l0aCBfX3Byb3RvX18gb25seS4gT2xkIHY4IGNhbid0IHdvcmsgd2l0aCBudWxsIHByb3RvIG9iamVjdHMuXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1wcm90byAqL1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0JylcbiAgLCBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIGNoZWNrID0gZnVuY3Rpb24oTywgcHJvdG8pe1xuICBhbk9iamVjdChPKTtcbiAgaWYoIWlzT2JqZWN0KHByb3RvKSAmJiBwcm90byAhPT0gbnVsbCl0aHJvdyBUeXBlRXJyb3IocHJvdG8gKyBcIjogY2FuJ3Qgc2V0IGFzIHByb3RvdHlwZSFcIik7XG59O1xubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHNldDogT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8ICgnX19wcm90b19fJyBpbiB7fSA/IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgICBmdW5jdGlvbih0ZXN0LCBidWdneSwgc2V0KXtcbiAgICAgIHRyeSB7XG4gICAgICAgIHNldCA9IHJlcXVpcmUoJy4vX2N0eCcpKEZ1bmN0aW9uLmNhbGwsIHJlcXVpcmUoJy4vX29iamVjdC1nb3BkJykuZihPYmplY3QucHJvdG90eXBlLCAnX19wcm90b19fJykuc2V0LCAyKTtcbiAgICAgICAgc2V0KHRlc3QsIFtdKTtcbiAgICAgICAgYnVnZ3kgPSAhKHRlc3QgaW5zdGFuY2VvZiBBcnJheSk7XG4gICAgICB9IGNhdGNoKGUpeyBidWdneSA9IHRydWU7IH1cbiAgICAgIHJldHVybiBmdW5jdGlvbiBzZXRQcm90b3R5cGVPZihPLCBwcm90byl7XG4gICAgICAgIGNoZWNrKE8sIHByb3RvKTtcbiAgICAgICAgaWYoYnVnZ3kpTy5fX3Byb3RvX18gPSBwcm90bztcbiAgICAgICAgZWxzZSBzZXQoTywgcHJvdG8pO1xuICAgICAgICByZXR1cm4gTztcbiAgICAgIH07XG4gICAgfSh7fSwgZmFsc2UpIDogdW5kZWZpbmVkKSxcbiAgY2hlY2s6IGNoZWNrXG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi8ubnBtaW5zdGFsbC9jb3JlLWpzLzIuNC4wL2NvcmUtanMvbW9kdWxlcy9fc2V0LXByb3RvLmpzXG4gKiovIiwidmFyIHBJRSAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LXBpZScpXHJcbiAgLCBjcmVhdGVEZXNjICAgICA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKVxyXG4gICwgdG9JT2JqZWN0ICAgICAgPSByZXF1aXJlKCcuL190by1pb2JqZWN0JylcclxuICAsIHRvUHJpbWl0aXZlICAgID0gcmVxdWlyZSgnLi9fdG8tcHJpbWl0aXZlJylcclxuICAsIGhhcyAgICAgICAgICAgID0gcmVxdWlyZSgnLi9faGFzJylcclxuICAsIElFOF9ET01fREVGSU5FID0gcmVxdWlyZSgnLi9faWU4LWRvbS1kZWZpbmUnKVxyXG4gICwgZ09QRCAgICAgICAgICAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xyXG5cclxuZXhwb3J0cy5mID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IGdPUEQgOiBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTywgUCl7XHJcbiAgTyA9IHRvSU9iamVjdChPKTtcclxuICBQID0gdG9QcmltaXRpdmUoUCwgdHJ1ZSk7XHJcbiAgaWYoSUU4X0RPTV9ERUZJTkUpdHJ5IHtcclxuICAgIHJldHVybiBnT1BEKE8sIFApO1xyXG4gIH0gY2F0Y2goZSl7IC8qIGVtcHR5ICovIH1cclxuICBpZihoYXMoTywgUCkpcmV0dXJuIGNyZWF0ZURlc2MoIXBJRS5mLmNhbGwoTywgUCksIE9bUF0pO1xyXG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi8ubnBtaW5zdGFsbC9jb3JlLWpzLzIuNC4wL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWdvcGQuanNcbiAqKi8iLCJleHBvcnRzLmYgPSB7fS5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vLm5wbWluc3RhbGwvY29yZS1qcy8yLjQuMC9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1waWUuanNcbiAqKi8iLCIvLyA3LjMuMjAgU3BlY2llc0NvbnN0cnVjdG9yKE8sIGRlZmF1bHRDb25zdHJ1Y3RvcilcbnZhciBhbk9iamVjdCAgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKVxuICAsIGFGdW5jdGlvbiA9IHJlcXVpcmUoJy4vX2EtZnVuY3Rpb24nKVxuICAsIFNQRUNJRVMgICA9IHJlcXVpcmUoJy4vX3drcycpKCdzcGVjaWVzJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKE8sIEQpe1xuICB2YXIgQyA9IGFuT2JqZWN0KE8pLmNvbnN0cnVjdG9yLCBTO1xuICByZXR1cm4gQyA9PT0gdW5kZWZpbmVkIHx8IChTID0gYW5PYmplY3QoQylbU1BFQ0lFU10pID09IHVuZGVmaW5lZCA/IEQgOiBhRnVuY3Rpb24oUyk7XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi8ubnBtaW5zdGFsbC9jb3JlLWpzLzIuNC4wL2NvcmUtanMvbW9kdWxlcy9fc3BlY2llcy1jb25zdHJ1Y3Rvci5qc1xuICoqLyIsInZhciBjdHggICAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19jdHgnKVxuICAsIGludm9rZSAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2ludm9rZScpXG4gICwgaHRtbCAgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9faHRtbCcpXG4gICwgY2VsICAgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fZG9tLWNyZWF0ZScpXG4gICwgZ2xvYmFsICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fZ2xvYmFsJylcbiAgLCBwcm9jZXNzICAgICAgICAgICAgPSBnbG9iYWwucHJvY2Vzc1xuICAsIHNldFRhc2sgICAgICAgICAgICA9IGdsb2JhbC5zZXRJbW1lZGlhdGVcbiAgLCBjbGVhclRhc2sgICAgICAgICAgPSBnbG9iYWwuY2xlYXJJbW1lZGlhdGVcbiAgLCBNZXNzYWdlQ2hhbm5lbCAgICAgPSBnbG9iYWwuTWVzc2FnZUNoYW5uZWxcbiAgLCBjb3VudGVyICAgICAgICAgICAgPSAwXG4gICwgcXVldWUgICAgICAgICAgICAgID0ge31cbiAgLCBPTlJFQURZU1RBVEVDSEFOR0UgPSAnb25yZWFkeXN0YXRlY2hhbmdlJ1xuICAsIGRlZmVyLCBjaGFubmVsLCBwb3J0O1xudmFyIHJ1biA9IGZ1bmN0aW9uKCl7XG4gIHZhciBpZCA9ICt0aGlzO1xuICBpZihxdWV1ZS5oYXNPd25Qcm9wZXJ0eShpZCkpe1xuICAgIHZhciBmbiA9IHF1ZXVlW2lkXTtcbiAgICBkZWxldGUgcXVldWVbaWRdO1xuICAgIGZuKCk7XG4gIH1cbn07XG52YXIgbGlzdGVuZXIgPSBmdW5jdGlvbihldmVudCl7XG4gIHJ1bi5jYWxsKGV2ZW50LmRhdGEpO1xufTtcbi8vIE5vZGUuanMgMC45KyAmIElFMTArIGhhcyBzZXRJbW1lZGlhdGUsIG90aGVyd2lzZTpcbmlmKCFzZXRUYXNrIHx8ICFjbGVhclRhc2spe1xuICBzZXRUYXNrID0gZnVuY3Rpb24gc2V0SW1tZWRpYXRlKGZuKXtcbiAgICB2YXIgYXJncyA9IFtdLCBpID0gMTtcbiAgICB3aGlsZShhcmd1bWVudHMubGVuZ3RoID4gaSlhcmdzLnB1c2goYXJndW1lbnRzW2krK10pO1xuICAgIHF1ZXVlWysrY291bnRlcl0gPSBmdW5jdGlvbigpe1xuICAgICAgaW52b2tlKHR5cGVvZiBmbiA9PSAnZnVuY3Rpb24nID8gZm4gOiBGdW5jdGlvbihmbiksIGFyZ3MpO1xuICAgIH07XG4gICAgZGVmZXIoY291bnRlcik7XG4gICAgcmV0dXJuIGNvdW50ZXI7XG4gIH07XG4gIGNsZWFyVGFzayA9IGZ1bmN0aW9uIGNsZWFySW1tZWRpYXRlKGlkKXtcbiAgICBkZWxldGUgcXVldWVbaWRdO1xuICB9O1xuICAvLyBOb2RlLmpzIDAuOC1cbiAgaWYocmVxdWlyZSgnLi9fY29mJykocHJvY2VzcykgPT0gJ3Byb2Nlc3MnKXtcbiAgICBkZWZlciA9IGZ1bmN0aW9uKGlkKXtcbiAgICAgIHByb2Nlc3MubmV4dFRpY2soY3R4KHJ1biwgaWQsIDEpKTtcbiAgICB9O1xuICAvLyBCcm93c2VycyB3aXRoIE1lc3NhZ2VDaGFubmVsLCBpbmNsdWRlcyBXZWJXb3JrZXJzXG4gIH0gZWxzZSBpZihNZXNzYWdlQ2hhbm5lbCl7XG4gICAgY2hhbm5lbCA9IG5ldyBNZXNzYWdlQ2hhbm5lbDtcbiAgICBwb3J0ICAgID0gY2hhbm5lbC5wb3J0MjtcbiAgICBjaGFubmVsLnBvcnQxLm9ubWVzc2FnZSA9IGxpc3RlbmVyO1xuICAgIGRlZmVyID0gY3R4KHBvcnQucG9zdE1lc3NhZ2UsIHBvcnQsIDEpO1xuICAvLyBCcm93c2VycyB3aXRoIHBvc3RNZXNzYWdlLCBza2lwIFdlYldvcmtlcnNcbiAgLy8gSUU4IGhhcyBwb3N0TWVzc2FnZSwgYnV0IGl0J3Mgc3luYyAmIHR5cGVvZiBpdHMgcG9zdE1lc3NhZ2UgaXMgJ29iamVjdCdcbiAgfSBlbHNlIGlmKGdsb2JhbC5hZGRFdmVudExpc3RlbmVyICYmIHR5cGVvZiBwb3N0TWVzc2FnZSA9PSAnZnVuY3Rpb24nICYmICFnbG9iYWwuaW1wb3J0U2NyaXB0cyl7XG4gICAgZGVmZXIgPSBmdW5jdGlvbihpZCl7XG4gICAgICBnbG9iYWwucG9zdE1lc3NhZ2UoaWQgKyAnJywgJyonKTtcbiAgICB9O1xuICAgIGdsb2JhbC5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgbGlzdGVuZXIsIGZhbHNlKTtcbiAgLy8gSUU4LVxuICB9IGVsc2UgaWYoT05SRUFEWVNUQVRFQ0hBTkdFIGluIGNlbCgnc2NyaXB0Jykpe1xuICAgIGRlZmVyID0gZnVuY3Rpb24oaWQpe1xuICAgICAgaHRtbC5hcHBlbmRDaGlsZChjZWwoJ3NjcmlwdCcpKVtPTlJFQURZU1RBVEVDSEFOR0VdID0gZnVuY3Rpb24oKXtcbiAgICAgICAgaHRtbC5yZW1vdmVDaGlsZCh0aGlzKTtcbiAgICAgICAgcnVuLmNhbGwoaWQpO1xuICAgICAgfTtcbiAgICB9O1xuICAvLyBSZXN0IG9sZCBicm93c2Vyc1xuICB9IGVsc2Uge1xuICAgIGRlZmVyID0gZnVuY3Rpb24oaWQpe1xuICAgICAgc2V0VGltZW91dChjdHgocnVuLCBpZCwgMSksIDApO1xuICAgIH07XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0ge1xuICBzZXQ6ICAgc2V0VGFzayxcbiAgY2xlYXI6IGNsZWFyVGFza1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vLm5wbWluc3RhbGwvY29yZS1qcy8yLjQuMC9jb3JlLWpzL21vZHVsZXMvX3Rhc2suanNcbiAqKi8iLCIvLyBmYXN0IGFwcGx5LCBodHRwOi8vanNwZXJmLmxua2l0LmNvbS9mYXN0LWFwcGx5LzVcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZm4sIGFyZ3MsIHRoYXQpe1xuICB2YXIgdW4gPSB0aGF0ID09PSB1bmRlZmluZWQ7XG4gIHN3aXRjaChhcmdzLmxlbmd0aCl7XG4gICAgY2FzZSAwOiByZXR1cm4gdW4gPyBmbigpXG4gICAgICAgICAgICAgICAgICAgICAgOiBmbi5jYWxsKHRoYXQpO1xuICAgIGNhc2UgMTogcmV0dXJuIHVuID8gZm4oYXJnc1swXSlcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCwgYXJnc1swXSk7XG4gICAgY2FzZSAyOiByZXR1cm4gdW4gPyBmbihhcmdzWzBdLCBhcmdzWzFdKVxuICAgICAgICAgICAgICAgICAgICAgIDogZm4uY2FsbCh0aGF0LCBhcmdzWzBdLCBhcmdzWzFdKTtcbiAgICBjYXNlIDM6IHJldHVybiB1biA/IGZuKGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0pXG4gICAgICAgICAgICAgICAgICAgICAgOiBmbi5jYWxsKHRoYXQsIGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0pO1xuICAgIGNhc2UgNDogcmV0dXJuIHVuID8gZm4oYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSwgYXJnc1szXSlcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCwgYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSwgYXJnc1szXSk7XG4gIH0gcmV0dXJuICAgICAgICAgICAgICBmbi5hcHBseSh0aGF0LCBhcmdzKTtcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+Ly5ucG1pbnN0YWxsL2NvcmUtanMvMi40LjAvY29yZS1qcy9tb2R1bGVzL19pbnZva2UuanNcbiAqKi8iLCJ2YXIgZ2xvYmFsICAgID0gcmVxdWlyZSgnLi9fZ2xvYmFsJylcbiAgLCBtYWNyb3Rhc2sgPSByZXF1aXJlKCcuL190YXNrJykuc2V0XG4gICwgT2JzZXJ2ZXIgID0gZ2xvYmFsLk11dGF0aW9uT2JzZXJ2ZXIgfHwgZ2xvYmFsLldlYktpdE11dGF0aW9uT2JzZXJ2ZXJcbiAgLCBwcm9jZXNzICAgPSBnbG9iYWwucHJvY2Vzc1xuICAsIFByb21pc2UgICA9IGdsb2JhbC5Qcm9taXNlXG4gICwgaXNOb2RlICAgID0gcmVxdWlyZSgnLi9fY29mJykocHJvY2VzcykgPT0gJ3Byb2Nlc3MnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCl7XG4gIHZhciBoZWFkLCBsYXN0LCBub3RpZnk7XG5cbiAgdmFyIGZsdXNoID0gZnVuY3Rpb24oKXtcbiAgICB2YXIgcGFyZW50LCBmbjtcbiAgICBpZihpc05vZGUgJiYgKHBhcmVudCA9IHByb2Nlc3MuZG9tYWluKSlwYXJlbnQuZXhpdCgpO1xuICAgIHdoaWxlKGhlYWQpe1xuICAgICAgZm4gICA9IGhlYWQuZm47XG4gICAgICBoZWFkID0gaGVhZC5uZXh0O1xuICAgICAgdHJ5IHtcbiAgICAgICAgZm4oKTtcbiAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIGlmKGhlYWQpbm90aWZ5KCk7XG4gICAgICAgIGVsc2UgbGFzdCA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhyb3cgZTtcbiAgICAgIH1cbiAgICB9IGxhc3QgPSB1bmRlZmluZWQ7XG4gICAgaWYocGFyZW50KXBhcmVudC5lbnRlcigpO1xuICB9O1xuXG4gIC8vIE5vZGUuanNcbiAgaWYoaXNOb2RlKXtcbiAgICBub3RpZnkgPSBmdW5jdGlvbigpe1xuICAgICAgcHJvY2Vzcy5uZXh0VGljayhmbHVzaCk7XG4gICAgfTtcbiAgLy8gYnJvd3NlcnMgd2l0aCBNdXRhdGlvbk9ic2VydmVyXG4gIH0gZWxzZSBpZihPYnNlcnZlcil7XG4gICAgdmFyIHRvZ2dsZSA9IHRydWVcbiAgICAgICwgbm9kZSAgID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJycpO1xuICAgIG5ldyBPYnNlcnZlcihmbHVzaCkub2JzZXJ2ZShub2RlLCB7Y2hhcmFjdGVyRGF0YTogdHJ1ZX0pOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLW5ld1xuICAgIG5vdGlmeSA9IGZ1bmN0aW9uKCl7XG4gICAgICBub2RlLmRhdGEgPSB0b2dnbGUgPSAhdG9nZ2xlO1xuICAgIH07XG4gIC8vIGVudmlyb25tZW50cyB3aXRoIG1heWJlIG5vbi1jb21wbGV0ZWx5IGNvcnJlY3QsIGJ1dCBleGlzdGVudCBQcm9taXNlXG4gIH0gZWxzZSBpZihQcm9taXNlICYmIFByb21pc2UucmVzb2x2ZSl7XG4gICAgdmFyIHByb21pc2UgPSBQcm9taXNlLnJlc29sdmUoKTtcbiAgICBub3RpZnkgPSBmdW5jdGlvbigpe1xuICAgICAgcHJvbWlzZS50aGVuKGZsdXNoKTtcbiAgICB9O1xuICAvLyBmb3Igb3RoZXIgZW52aXJvbm1lbnRzIC0gbWFjcm90YXNrIGJhc2VkIG9uOlxuICAvLyAtIHNldEltbWVkaWF0ZVxuICAvLyAtIE1lc3NhZ2VDaGFubmVsXG4gIC8vIC0gd2luZG93LnBvc3RNZXNzYWdcbiAgLy8gLSBvbnJlYWR5c3RhdGVjaGFuZ2VcbiAgLy8gLSBzZXRUaW1lb3V0XG4gIH0gZWxzZSB7XG4gICAgbm90aWZ5ID0gZnVuY3Rpb24oKXtcbiAgICAgIC8vIHN0cmFuZ2UgSUUgKyB3ZWJwYWNrIGRldiBzZXJ2ZXIgYnVnIC0gdXNlIC5jYWxsKGdsb2JhbClcbiAgICAgIG1hY3JvdGFzay5jYWxsKGdsb2JhbCwgZmx1c2gpO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24oZm4pe1xuICAgIHZhciB0YXNrID0ge2ZuOiBmbiwgbmV4dDogdW5kZWZpbmVkfTtcbiAgICBpZihsYXN0KWxhc3QubmV4dCA9IHRhc2s7XG4gICAgaWYoIWhlYWQpe1xuICAgICAgaGVhZCA9IHRhc2s7XG4gICAgICBub3RpZnkoKTtcbiAgICB9IGxhc3QgPSB0YXNrO1xuICB9O1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vLm5wbWluc3RhbGwvY29yZS1qcy8yLjQuMC9jb3JlLWpzL21vZHVsZXMvX21pY3JvdGFzay5qc1xuICoqLyIsInZhciByZWRlZmluZSA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHRhcmdldCwgc3JjLCBzYWZlKXtcbiAgZm9yKHZhciBrZXkgaW4gc3JjKXJlZGVmaW5lKHRhcmdldCwga2V5LCBzcmNba2V5XSwgc2FmZSk7XG4gIHJldHVybiB0YXJnZXQ7XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi8ubnBtaW5zdGFsbC9jb3JlLWpzLzIuNC4wL2NvcmUtanMvbW9kdWxlcy9fcmVkZWZpbmUtYWxsLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGdsb2JhbCAgICAgID0gcmVxdWlyZSgnLi9fZ2xvYmFsJylcbiAgLCBkUCAgICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpXG4gICwgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpXG4gICwgU1BFQ0lFUyAgICAgPSByZXF1aXJlKCcuL193a3MnKSgnc3BlY2llcycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKEtFWSl7XG4gIHZhciBDID0gZ2xvYmFsW0tFWV07XG4gIGlmKERFU0NSSVBUT1JTICYmIEMgJiYgIUNbU1BFQ0lFU10pZFAuZihDLCBTUEVDSUVTLCB7XG4gICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24oKXsgcmV0dXJuIHRoaXM7IH1cbiAgfSk7XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi8ubnBtaW5zdGFsbC9jb3JlLWpzLzIuNC4wL2NvcmUtanMvbW9kdWxlcy9fc2V0LXNwZWNpZXMuanNcbiAqKi8iLCJ2YXIgSVRFUkFUT1IgICAgID0gcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJylcbiAgLCBTQUZFX0NMT1NJTkcgPSBmYWxzZTtcblxudHJ5IHtcbiAgdmFyIHJpdGVyID0gWzddW0lURVJBVE9SXSgpO1xuICByaXRlclsncmV0dXJuJ10gPSBmdW5jdGlvbigpeyBTQUZFX0NMT1NJTkcgPSB0cnVlOyB9O1xuICBBcnJheS5mcm9tKHJpdGVyLCBmdW5jdGlvbigpeyB0aHJvdyAyOyB9KTtcbn0gY2F0Y2goZSl7IC8qIGVtcHR5ICovIH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihleGVjLCBza2lwQ2xvc2luZyl7XG4gIGlmKCFza2lwQ2xvc2luZyAmJiAhU0FGRV9DTE9TSU5HKXJldHVybiBmYWxzZTtcbiAgdmFyIHNhZmUgPSBmYWxzZTtcbiAgdHJ5IHtcbiAgICB2YXIgYXJyICA9IFs3XVxuICAgICAgLCBpdGVyID0gYXJyW0lURVJBVE9SXSgpO1xuICAgIGl0ZXIubmV4dCA9IGZ1bmN0aW9uKCl7IHJldHVybiB7ZG9uZTogc2FmZSA9IHRydWV9OyB9O1xuICAgIGFycltJVEVSQVRPUl0gPSBmdW5jdGlvbigpeyByZXR1cm4gaXRlcjsgfTtcbiAgICBleGVjKGFycik7XG4gIH0gY2F0Y2goZSl7IC8qIGVtcHR5ICovIH1cbiAgcmV0dXJuIHNhZmU7XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi8ubnBtaW5zdGFsbC9jb3JlLWpzLzIuNC4wL2NvcmUtanMvbW9kdWxlcy9faXRlci1kZXRlY3QuanNcbiAqKi8iLCJjb25zdCB7IGNvbnNvbGUsIG5hdGl2ZUxvZyB9ID0gZ2xvYmFsXG5jb25zdCBMRVZFTFMgPSBbJ2Vycm9yJywgJ3dhcm4nLCAnaW5mbycsICdsb2cnLCAnZGVidWcnXVxuY29uc3QgbGV2ZWxNYXAgPSB7fVxuXG5nZW5lcmF0ZUxldmVsTWFwKClcblxuLyogaXN0YW5idWwgaWdub3JlIGlmICovXG5pZiAoXG4gIHR5cGVvZiBjb25zb2xlID09PSAndW5kZWZpbmVkJyB8fCAvLyBBbmRyb2lkXG4gIChnbG9iYWwuV1hFbnZpcm9ubWVudCAmJiBnbG9iYWwuV1hFbnZpcm9ubWVudC5wbGF0Zm9ybSA9PT0gJ2lPUycpIC8vIGlPU1xuKSB7XG4gIGdsb2JhbC5jb25zb2xlID0ge1xuICAgIGRlYnVnOiAoLi4uYXJncykgPT4ge1xuICAgICAgaWYgKGNoZWNrTGV2ZWwoJ2RlYnVnJykpIHsgbmF0aXZlTG9nKC4uLmZvcm1hdChhcmdzKSwgJ19fREVCVUcnKSB9XG4gICAgfSxcbiAgICBsb2c6ICguLi5hcmdzKSA9PiB7XG4gICAgICBpZiAoY2hlY2tMZXZlbCgnbG9nJykpIHsgbmF0aXZlTG9nKC4uLmZvcm1hdChhcmdzKSwgJ19fTE9HJykgfVxuICAgIH0sXG4gICAgaW5mbzogKC4uLmFyZ3MpID0+IHtcbiAgICAgIGlmIChjaGVja0xldmVsKCdpbmZvJykpIHsgbmF0aXZlTG9nKC4uLmZvcm1hdChhcmdzKSwgJ19fSU5GTycpIH1cbiAgICB9LFxuICAgIHdhcm46ICguLi5hcmdzKSA9PiB7XG4gICAgICBpZiAoY2hlY2tMZXZlbCgnd2FybicpKSB7IG5hdGl2ZUxvZyguLi5mb3JtYXQoYXJncyksICdfX1dBUk4nKSB9XG4gICAgfSxcbiAgICBlcnJvcjogKC4uLmFyZ3MpID0+IHtcbiAgICAgIGlmIChjaGVja0xldmVsKCdlcnJvcicpKSB7IG5hdGl2ZUxvZyguLi5mb3JtYXQoYXJncyksICdfX0VSUk9SJykgfVxuICAgIH1cbiAgfVxufVxuZWxzZSB7IC8vIEhUTUw1XG4gIGNvbnN0IHsgZGVidWcsIGxvZywgaW5mbywgd2FybiwgZXJyb3IgfSA9IGNvbnNvbGVcbiAgY29uc29sZS5fX29yaV9fID0geyBkZWJ1ZywgbG9nLCBpbmZvLCB3YXJuLCBlcnJvciB9XG4gIGNvbnNvbGUuZGVidWcgPSAoLi4uYXJncykgPT4ge1xuICAgIGlmIChjaGVja0xldmVsKCdkZWJ1ZycpKSB7IGNvbnNvbGUuX19vcmlfXy5kZWJ1Zy5hcHBseShjb25zb2xlLCBhcmdzKSB9XG4gIH1cbiAgY29uc29sZS5sb2cgPSAoLi4uYXJncykgPT4ge1xuICAgIGlmIChjaGVja0xldmVsKCdsb2cnKSkgeyBjb25zb2xlLl9fb3JpX18ubG9nLmFwcGx5KGNvbnNvbGUsIGFyZ3MpIH1cbiAgfVxuICBjb25zb2xlLmluZm8gPSAoLi4uYXJncykgPT4ge1xuICAgIGlmIChjaGVja0xldmVsKCdpbmZvJykpIHsgY29uc29sZS5fX29yaV9fLmluZm8uYXBwbHkoY29uc29sZSwgYXJncykgfVxuICB9XG4gIGNvbnNvbGUud2FybiA9ICguLi5hcmdzKSA9PiB7XG4gICAgaWYgKGNoZWNrTGV2ZWwoJ3dhcm4nKSkgeyBjb25zb2xlLl9fb3JpX18ud2Fybi5hcHBseShjb25zb2xlLCBhcmdzKSB9XG4gIH1cbiAgY29uc29sZS5lcnJvciA9ICguLi5hcmdzKSA9PiB7XG4gICAgaWYgKGNoZWNrTGV2ZWwoJ2Vycm9yJykpIHsgY29uc29sZS5fX29yaV9fLmVycm9yLmFwcGx5KGNvbnNvbGUsIGFyZ3MpIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBnZW5lcmF0ZUxldmVsTWFwICgpIHtcbiAgTEVWRUxTLmZvckVhY2gobGV2ZWwgPT4ge1xuICAgIGNvbnN0IGxldmVsSW5kZXggPSBMRVZFTFMuaW5kZXhPZihsZXZlbClcbiAgICBsZXZlbE1hcFtsZXZlbF0gPSB7fVxuICAgIExFVkVMUy5mb3JFYWNoKHR5cGUgPT4ge1xuICAgICAgY29uc3QgdHlwZUluZGV4ID0gTEVWRUxTLmluZGV4T2YodHlwZSlcbiAgICAgIGlmICh0eXBlSW5kZXggPD0gbGV2ZWxJbmRleCkge1xuICAgICAgICBsZXZlbE1hcFtsZXZlbF1bdHlwZV0gPSB0cnVlXG4gICAgICB9XG4gICAgfSlcbiAgfSlcbn1cblxuZnVuY3Rpb24gY2hlY2tMZXZlbCAodHlwZSkge1xuICBjb25zdCBsb2dMZXZlbCA9IChnbG9iYWwuV1hFbnZpcm9ubWVudCAmJiBnbG9iYWwuV1hFbnZpcm9ubWVudC5sb2dMZXZlbCkgfHwgJ2xvZydcbiAgcmV0dXJuIGxldmVsTWFwW2xvZ0xldmVsXSAmJiBsZXZlbE1hcFtsb2dMZXZlbF1bdHlwZV1cbn1cblxuZnVuY3Rpb24gZm9ybWF0IChhcmdzKSB7XG4gIHJldHVybiBhcmdzLm1hcCgodikgPT4ge1xuICAgIGNvbnN0IHR5cGUgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodilcbiAgICBpZiAodHlwZS50b0xvd2VyQ2FzZSgpID09PSAnW29iamVjdCBvYmplY3RdJykge1xuICAgICAgdiA9IEpTT04uc3RyaW5naWZ5KHYpXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdiA9IFN0cmluZyh2KVxuICAgIH1cbiAgICByZXR1cm4gdlxuICB9KVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9odG1sNS9zaGFyZWQvY29uc29sZS5qc1xuICoqLyIsImltcG9ydCBmcmFtZXdvcmtzIGZyb20gJy4vY29uZmlnJ1xuXG5pbXBvcnQgeyBEb2N1bWVudCwgRWxlbWVudCwgQ29tbWVudCB9IGZyb20gJy4uL3Zkb20nXG5cbmNvbnN0IGNvbmZpZyA9IHtcbiAgRG9jdW1lbnQsIEVsZW1lbnQsIENvbW1lbnQsXG4gIHNlbmRUYXNrcyAoLi4uYXJncykge1xuICAgIHJldHVybiBnbG9iYWwuY2FsbE5hdGl2ZSguLi5hcmdzKVxuICB9XG59XG5cbmZvciAoY29uc3QgbmFtZSBpbiBmcmFtZXdvcmtzKSB7XG4gIGNvbnN0IGZyYW1ld29yayA9IGZyYW1ld29ya3NbbmFtZV1cbiAgZnJhbWV3b3JrLmluaXQoY29uZmlnKVxufVxuXG5jb25zdCB2ZXJzaW9uUmVnRXhwID0gL15cXC9cXC8gKihcXHtbXlxcfV0qXFx9KSAqXFxyP1xcbi9cblxuZnVuY3Rpb24gY2hlY2tWZXJzaW9uIChjb2RlKSB7XG4gIGxldCBpbmZvXG4gIGNvbnN0IHJlc3VsdCA9IHZlcnNpb25SZWdFeHAuZXhlYyhjb2RlKVxuICBpZiAocmVzdWx0KSB7XG4gICAgdHJ5IHtcbiAgICAgIGluZm8gPSBKU09OLnBhcnNlKHJlc3VsdFsxXSlcbiAgICB9XG4gICAgY2F0Y2ggKGUpIHt9XG4gIH1cbiAgcmV0dXJuIGluZm9cbn1cblxuY29uc3QgaW5zdGFuY2VNYXAgPSB7fVxuXG5nbG9iYWwuaW5zdGFuY2VNYXAgPSB7fVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlSW5zdGFuY2UgKGlkLCBjb2RlLCBjb25maWcsIGRhdGEpIHtcbiAgbGV0IGluZm8gPSBpbnN0YW5jZU1hcFtpZF1cbiAgaWYgKCFpbmZvKSB7XG4gICAgaW5mbyA9IGNoZWNrVmVyc2lvbihjb2RlKSB8fCB7fVxuICAgIGlmICghZnJhbWV3b3Jrc1tpbmZvLmZyYW1ld29ya10pIHtcbiAgICAgIGluZm8uZnJhbWV3b3JrID0gJ1dlZXgnXG4gICAgfVxuICAgIGluc3RhbmNlTWFwW2lkXSA9IGluZm9cbiAgICBjb25maWcgPSBjb25maWcgfHwge31cbiAgICBjb25maWcuYnVuZGxlVmVyc2lvbiA9IGluZm8udmVyc2lvblxuICAgIGNvbnNvbGUuZGVidWcoYFtKUyBGcmFtZXdvcmtdIGNyZWF0ZSBhbiAke2luZm8uZnJhbWV3b3JrfUAke2NvbmZpZy5idW5kbGVWZXJzaW9ufSBpbnN0YW5jZSBmcm9tICR7Y29uZmlnLmJ1bmRsZVZlcnNpb259YClcbiAgICByZXR1cm4gZnJhbWV3b3Jrc1tpbmZvLmZyYW1ld29ya10uY3JlYXRlSW5zdGFuY2UoaWQsIGNvZGUsIGNvbmZpZywgZGF0YSlcbiAgfVxuICByZXR1cm4gbmV3IEVycm9yKGBpbnZhbGlkIGluc3RhbmNlIGlkIFwiJHtpZH1cImApXG59XG5cbmNvbnN0IG1ldGhvZHMgPSB7XG4gIGNyZWF0ZUluc3RhbmNlXG59XG5cbmZ1bmN0aW9uIGdlbkluaXQgKG1ldGhvZE5hbWUpIHtcbiAgbWV0aG9kc1ttZXRob2ROYW1lXSA9IGZ1bmN0aW9uICguLi5hcmdzKSB7XG4gICAgZm9yIChjb25zdCBuYW1lIGluIGZyYW1ld29ya3MpIHtcbiAgICAgIGNvbnN0IGZyYW1ld29yayA9IGZyYW1ld29ya3NbbmFtZV1cbiAgICAgIGlmIChmcmFtZXdvcmsgJiYgZnJhbWV3b3JrW21ldGhvZE5hbWVdKSB7XG4gICAgICAgIGZyYW1ld29ya1ttZXRob2ROYW1lXSguLi5hcmdzKVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5bJ3JlZ2lzdGVyQ29tcG9uZW50cycsICdyZWdpc3Rlck1vZHVsZXMnLCAncmVnaXN0ZXJNZXRob2RzJ10uZm9yRWFjaChnZW5Jbml0KVxuXG5mdW5jdGlvbiBnZW5JbnN0YW5jZSAobWV0aG9kTmFtZSkge1xuICBtZXRob2RzW21ldGhvZE5hbWVdID0gZnVuY3Rpb24gKC4uLmFyZ3MpIHtcbiAgICBjb25zdCBpZCA9IGFyZ3NbMF1cbiAgICBjb25zdCBpbmZvID0gaW5zdGFuY2VNYXBbaWRdXG4gICAgaWYgKGluZm8gJiYgZnJhbWV3b3Jrc1tpbmZvLmZyYW1ld29ya10pIHtcbiAgICAgIHJldHVybiBmcmFtZXdvcmtzW2luZm8uZnJhbWV3b3JrXVttZXRob2ROYW1lXSguLi5hcmdzKVxuICAgIH1cbiAgICByZXR1cm4gbmV3IEVycm9yKGBpbnZhbGlkIGluc3RhbmNlIGlkIFwiJHtpZH1cImApXG4gIH1cbn1cblxuWydkZXN0cm95SW5zdGFuY2UnLCAncmVmcmVzaEluc3RhbmNlJywgJ3JlY2VpdmVUYXNrcycsICdnZXRSb290J10uZm9yRWFjaChnZW5JbnN0YW5jZSlcblxuZnVuY3Rpb24gYWRhcHRJbnN0YW5jZSAobWV0aG9kTmFtZSwgbmF0aXZlTWV0aG9kTmFtZSkge1xuICBtZXRob2RzW25hdGl2ZU1ldGhvZE5hbWVdID0gZnVuY3Rpb24gKC4uLmFyZ3MpIHtcbiAgICBjb25zdCBpZCA9IGFyZ3NbMF1cbiAgICBjb25zdCBpbmZvID0gaW5zdGFuY2VNYXBbaWRdXG4gICAgaWYgKGluZm8gJiYgZnJhbWV3b3Jrc1tpbmZvLmZyYW1ld29ya10pIHtcbiAgICAgIHJldHVybiBmcmFtZXdvcmtzW2luZm8uZnJhbWV3b3JrXVttZXRob2ROYW1lXSguLi5hcmdzKVxuICAgIH1cbiAgICByZXR1cm4gbmV3IEVycm9yKGBpbnZhbGlkIGluc3RhbmNlIGlkIFwiJHtpZH1cImApXG4gIH1cbn1cblxuYWRhcHRJbnN0YW5jZSgncmVjZWl2ZVRhc2tzJywgJ2NhbGxKUycpXG5cbmV4cG9ydCBkZWZhdWx0IG1ldGhvZHNcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vaHRtbDUvcnVudGltZS9pbmRleC5qc1xuICoqLyIsIi8vIGJ1aWx0IGJ5IG5wbSBydW4gYnVpbGQ6Y29uZmlnXG5cbmltcG9ydCAqIGFzIFdlZXggZnJvbSAnLi4vZGVmYXVsdCdcblxuZXhwb3J0IGRlZmF1bHQge1xuICBXZWV4XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2h0bWw1L3J1bnRpbWUvY29uZmlnLmpzXG4gKiovIiwiLyoqXG4gKiBAZmlsZU92ZXJ2aWV3IE1haW4gZW50cnksIGluc3RhbmNlIG1hbmFnZXJcbiAqXG4gKiAtIGNyZWF0ZUluc3RhbmNlKGluc3RhbmNlSWQsIGNvZGUsIG9wdGlvbnMsIGRhdGEpXG4gKiAtIHJlZnJlc2hJbnN0YW5jZShpbnN0YW5jZUlkLCBkYXRhKVxuICogLSBkZXN0cm95SW5zdGFuY2UoaW5zdGFuY2VJZClcbiAqIC0gcmVnaXN0ZXJDb21wb25lbnRzKGNvbXBvbmVudHMpXG4gKiAtIHJlZ2lzdGVyTW9kdWxlcyhtb2R1bGVzKVxuICogLSBnZXRSb290KGluc3RhbmNlSWQpXG4gKiAtIGluc3RhbmNlTWFwXG4gKiAtIGNhbGxKUyhpbnN0YW5jZUlkLCB0YXNrcylcbiAqICAgLSBmaXJlRXZlbnQocmVmLCB0eXBlLCBkYXRhKVxuICogICAtIGNhbGxiYWNrKGZ1bmNJZCwgZGF0YSlcbiAqL1xuXG4vKipcblxuICBhbm90aGVyIHdheSB0byBjcmVhdGVJbnN0YW5jZShpZCwgY29kZSwgb3B0aW9ucywgZGF0YSlcblxuICAtLS0tXG5cbiAgLy8gZmlyc3Q6XG4gIGdsb2JhbC5jcmVhdGVJbnN0YW5jZShpZCwgJycsIG9wdGlvbnMsIGRhdGEpXG5cbiAgLS0tLVxuXG4gIC8vIHNlY29uZDpcbiAgdmFyIGluc3RhbmNlID0gZ2xvYmFsLmluc3RhbmNlTWFwW2lkXVxuICB2YXIgZW52ID0gaW5zdGFuY2UuZW52XG5cbiAgOyhmdW5jdGlvbiAoXG4gICAgX193ZWV4X2RlZmluZV9fLFxuICAgIF9fd2VleF9ib290c3RyYXBfXyxcbiAgICBfX3dlZXhfZG9jdW1lbnRfXyxcbiAgICBzZXRUaW1lb3V0LFxuICAgIGNsZWFyVGltZW91dCxcbiAgICBzZXRJbnRlcnZhbCxcbiAgICBjbGVhckludGVydmFsXG4gICkge1xuICAgIC8vIHt7Y29kZX19XG4gIH0pKFxuICAgIGVudi5idW5kbGVEZWZpbmUsXG4gICAgZW52LmJ1bmRsZUJvb3RzdHJhcCxcbiAgICBlbnYuYnVuZGxlRG9jdW1lbnQsXG4gICAgZW52LnNldFRpbWVvdXQsXG4gICAgZW52LmNsZWFyVGltZW91dCxcbiAgICBlbnYuc2V0SW50ZXJ2YWwsXG4gICAgZW52LmNsZWFySW50ZXJ2YWxcbiAgKVxuXG4gKi9cblxuaW1wb3J0IGNvbmZpZyBmcm9tICcuL2NvbmZpZydcbmltcG9ydCBBcHBJbnN0YW5jZSBmcm9tICcuL2FwcCdcbmltcG9ydCBWbSBmcm9tICcuL3ZtJ1xuXG5jb25zdCB7XG4gIG5hdGl2ZUNvbXBvbmVudE1hcFxufSA9IGNvbmZpZ1xuY29uc3QgaW5zdGFuY2VNYXAgPSB7fVxuXG5leHBvcnQgZnVuY3Rpb24gaW5pdCAoY2ZnKSB7XG4gIGNvbmZpZy5Eb2N1bWVudCA9IGNmZy5Eb2N1bWVudFxuICBjb25maWcuRWxlbWVudCA9IGNmZy5FbGVtZW50XG4gIGNvbmZpZy5Db21tZW50ID0gY2ZnLkNvbW1lbnRcbiAgY29uZmlnLnNlbmRUYXNrcyA9IGNmZy5zZW5kVGFza3Ncbn1cblxuLyoqXG4gKiBjcmVhdGUgYSBXZWV4IGluc3RhbmNlXG4gKlxuICogQHBhcmFtICB7c3RyaW5nfSBpbnN0YW5jZUlkXG4gKiBAcGFyYW0gIHtzdHJpbmd9IGNvZGVcbiAqIEBwYXJhbSAge29iamVjdH0gW29wdGlvbnNdIG9wdGlvbiBgSEFTX0xPR2AgZW5hYmxlIHByaW50IGxvZ1xuICogQHBhcmFtICB7b2JqZWN0fSBbZGF0YV1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUluc3RhbmNlIChpbnN0YW5jZUlkLCBjb2RlLCBvcHRpb25zLCBkYXRhKSB7XG4gIGxldCBpbnN0YW5jZSA9IGluc3RhbmNlTWFwW2luc3RhbmNlSWRdXG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9XG5cbiAgbGV0IHJlc3VsdFxuICBpZiAoIWluc3RhbmNlKSB7XG4gICAgaW5zdGFuY2UgPSBuZXcgQXBwSW5zdGFuY2UoaW5zdGFuY2VJZCwgb3B0aW9ucylcbiAgICBpbnN0YW5jZU1hcFtpbnN0YW5jZUlkXSA9IGluc3RhbmNlXG4gICAgcmVzdWx0ID0gaW5zdGFuY2UuaW5pdChjb2RlLCBkYXRhKVxuICAgIGdsb2JhbC5pbnN0YW5jZU1hcFtpbnN0YW5jZUlkXSA9IGluc3RhbmNlXG4gIH1cbiAgZWxzZSB7XG4gICAgcmVzdWx0ID0gbmV3IEVycm9yKGBpbnZhbGlkIGluc3RhbmNlIGlkIFwiJHtpbnN0YW5jZUlkfVwiYClcbiAgfVxuXG4gIHJldHVybiByZXN1bHRcbn1cblxuLyoqXG4gKiByZWZyZXNoIGEgV2VleCBpbnN0YW5jZVxuICpcbiAqIEBwYXJhbSAge3N0cmluZ30gaW5zdGFuY2VJZFxuICogQHBhcmFtICB7b2JqZWN0fSBkYXRhXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZWZyZXNoSW5zdGFuY2UgKGluc3RhbmNlSWQsIGRhdGEpIHtcbiAgY29uc3QgaW5zdGFuY2UgPSBpbnN0YW5jZU1hcFtpbnN0YW5jZUlkXVxuICBsZXQgcmVzdWx0XG4gIGlmIChpbnN0YW5jZSkge1xuICAgIHJlc3VsdCA9IGluc3RhbmNlLnJlZnJlc2hEYXRhKGRhdGEpXG4gIH1cbiAgZWxzZSB7XG4gICAgcmVzdWx0ID0gbmV3IEVycm9yKGBpbnZhbGlkIGluc3RhbmNlIGlkIFwiJHtpbnN0YW5jZUlkfVwiYClcbiAgfVxuICByZXR1cm4gcmVzdWx0XG59XG5cbi8qKlxuICogZGVzdHJveSBhIFdlZXggaW5zdGFuY2VcbiAqIEBwYXJhbSAge3N0cmluZ30gaW5zdGFuY2VJZFxuICovXG5leHBvcnQgZnVuY3Rpb24gZGVzdHJveUluc3RhbmNlIChpbnN0YW5jZUlkKSB7XG4gIGNvbnN0IGluc3RhbmNlID0gaW5zdGFuY2VNYXBbaW5zdGFuY2VJZF1cbiAgaWYgKCFpbnN0YW5jZSkge1xuICAgIHJldHVybiBuZXcgRXJyb3IoYGludmFsaWQgaW5zdGFuY2UgaWQgXCIke2luc3RhbmNlSWR9XCJgKVxuICB9XG5cbiAgaW5zdGFuY2UuZGVzdHJveSgpXG4gIGRlbGV0ZSBpbnN0YW5jZU1hcFtpbnN0YW5jZUlkXVxuICByZXR1cm4gaW5zdGFuY2VNYXBcbn1cblxuLyoqXG4gKiByZWdpc3RlciB0aGUgbmFtZSBvZiBlYWNoIG5hdGl2ZSBjb21wb25lbnRcbiAqIEBwYXJhbSAge2FycmF5fSBjb21wb25lbnRzIGFycmF5IG9mIG5hbWVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlZ2lzdGVyQ29tcG9uZW50cyAoY29tcG9uZW50cykge1xuICBpZiAoQXJyYXkuaXNBcnJheShjb21wb25lbnRzKSkge1xuICAgIGNvbXBvbmVudHMuZm9yRWFjaChmdW5jdGlvbiByZWdpc3RlciAobmFtZSkge1xuICAgICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgICBpZiAoIW5hbWUpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIG5hbWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIG5hdGl2ZUNvbXBvbmVudE1hcFtuYW1lXSA9IHRydWVcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKHR5cGVvZiBuYW1lID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbmFtZS50eXBlID09PSAnc3RyaW5nJykge1xuICAgICAgICBuYXRpdmVDb21wb25lbnRNYXBbbmFtZS50eXBlXSA9IG5hbWVcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG5cbi8qKlxuICogcmVnaXN0ZXIgdGhlIG5hbWUgYW5kIG1ldGhvZHMgb2YgZWFjaCBtb2R1bGVcbiAqIEBwYXJhbSAge29iamVjdH0gbW9kdWxlcyBhIG9iamVjdCBvZiBtb2R1bGVzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZWdpc3Rlck1vZHVsZXMgKG1vZHVsZXMpIHtcbiAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSAnb2JqZWN0Jykge1xuICAgIFZtLnJlZ2lzdGVyTW9kdWxlcyhtb2R1bGVzKVxuICB9XG59XG5cbi8qKlxuICogcmVnaXN0ZXIgdGhlIG5hbWUgYW5kIG1ldGhvZHMgb2YgZWFjaCBhcGlcbiAqIEBwYXJhbSAge29iamVjdH0gYXBpcyBhIG9iamVjdCBvZiBhcGlzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZWdpc3Rlck1ldGhvZHMgKGFwaXMpIHtcbiAgaWYgKHR5cGVvZiBhcGlzID09PSAnb2JqZWN0Jykge1xuICAgIFZtLnJlZ2lzdGVyTWV0aG9kcyhhcGlzKVxuICB9XG59XG5nbG9iYWwucmVnaXN0ZXJNZXRob2RzID0gcmVnaXN0ZXJNZXRob2RzXG5cbi8qKlxuICogZ2V0IGEgd2hvbGUgZWxlbWVudCB0cmVlIG9mIGFuIGluc3RhbmNlXG4gKiBmb3IgZGVidWdnaW5nXG4gKiBAcGFyYW0gIHtzdHJpbmd9IGluc3RhbmNlSWRcbiAqIEByZXR1cm4ge29iamVjdH0gYSB2aXJ0dWFsIGRvbSB0cmVlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRSb290IChpbnN0YW5jZUlkKSB7XG4gIGNvbnN0IGluc3RhbmNlID0gaW5zdGFuY2VNYXBbaW5zdGFuY2VJZF1cbiAgbGV0IHJlc3VsdFxuICBpZiAoaW5zdGFuY2UpIHtcbiAgICByZXN1bHQgPSBpbnN0YW5jZS5nZXRSb290RWxlbWVudCgpXG4gIH1cbiAgZWxzZSB7XG4gICAgcmVzdWx0ID0gbmV3IEVycm9yKGBpbnZhbGlkIGluc3RhbmNlIGlkIFwiJHtpbnN0YW5jZUlkfVwiYClcbiAgfVxuICByZXR1cm4gcmVzdWx0XG59XG5cbmNvbnN0IGpzSGFuZGxlcnMgPSB7XG4gIGZpcmVFdmVudDogZnVuY3Rpb24gZmlyZUV2ZW50IChpbnN0YW5jZUlkLCByZWYsIHR5cGUsIGRhdGEsIGRvbUNoYW5nZXMpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IGluc3RhbmNlTWFwW2luc3RhbmNlSWRdXG4gICAgcmV0dXJuIGluc3RhbmNlLmZpcmVFdmVudChyZWYsIHR5cGUsIGRhdGEsIGRvbUNoYW5nZXMpXG4gIH0sXG5cbiAgY2FsbGJhY2s6IGZ1bmN0aW9uIGNhbGxiYWNrIChpbnN0YW5jZUlkLCBmdW5jSWQsIGRhdGEsIGlmTGFzdCkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gaW5zdGFuY2VNYXBbaW5zdGFuY2VJZF1cbiAgICByZXR1cm4gaW5zdGFuY2UuY2FsbGJhY2soZnVuY0lkLCBkYXRhLCBpZkxhc3QpXG4gIH1cbn1cblxuLyoqXG4gKiBhY2NlcHQgY2FsbHMgZnJvbSBuYXRpdmUgKGV2ZW50IG9yIGNhbGxiYWNrKVxuICpcbiAqIEBwYXJhbSAge3N0cmluZ30gaW5zdGFuY2VJZFxuICogQHBhcmFtICB7YXJyYXl9IHRhc2tzIGxpc3Qgd2l0aCBgbWV0aG9kYCBhbmQgYGFyZ3NgXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZWNlaXZlVGFza3MgKGluc3RhbmNlSWQsIHRhc2tzKSB7XG4gIGNvbnN0IGluc3RhbmNlID0gaW5zdGFuY2VNYXBbaW5zdGFuY2VJZF1cbiAgaWYgKGluc3RhbmNlICYmIEFycmF5LmlzQXJyYXkodGFza3MpKSB7XG4gICAgY29uc3QgcmVzdWx0cyA9IFtdXG4gICAgdGFza3MuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgICAgY29uc3QgaGFuZGxlciA9IGpzSGFuZGxlcnNbdGFzay5tZXRob2RdXG4gICAgICBjb25zdCBhcmdzID0gWy4uLnRhc2suYXJnc11cbiAgICAgIGlmICh0eXBlb2YgaGFuZGxlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBhcmdzLnVuc2hpZnQoaW5zdGFuY2VJZClcbiAgICAgICAgcmVzdWx0cy5wdXNoKGhhbmRsZXIoLi4uYXJncykpXG4gICAgICB9XG4gICAgfSlcbiAgICByZXR1cm4gcmVzdWx0c1xuICB9XG4gIHJldHVybiBuZXcgRXJyb3IoYGludmFsaWQgaW5zdGFuY2UgaWQgXCIke2luc3RhbmNlSWR9XCIgb3IgdGFza3NgKVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9odG1sNS9kZWZhdWx0L2luZGV4LmpzXG4gKiovIiwiZXhwb3J0IGRlZmF1bHQge1xuICBuYXRpdmVDb21wb25lbnRNYXA6IHtcbiAgICB0ZXh0OiB0cnVlLFxuICAgIGltYWdlOiB0cnVlLFxuICAgIGNvbnRhaW5lcjogdHJ1ZSxcbiAgICBzbGlkZXI6IHtcbiAgICAgIHR5cGU6ICdzbGlkZXInLFxuICAgICAgYXBwZW5kOiAndHJlZSdcbiAgICB9LFxuICAgIGNlbGw6IHtcbiAgICAgIHR5cGU6ICdjZWxsJyxcbiAgICAgIGFwcGVuZDogJ3RyZWUnXG4gICAgfVxuICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2h0bWw1L2RlZmF1bHQvY29uZmlnLmpzXG4gKiovIiwiLyoqXG4gKiBAZmlsZU92ZXJ2aWV3XG4gKiBXZWV4IGluc3RhbmNlIGNvbnN0cnVjdG9yICYgZGVmaW5pdGlvblxuICovXG5cbmltcG9ydCB7IGV4dGVuZCwgdHlwb2YgfSBmcm9tICcuLi91dGlsJ1xuaW1wb3J0ICogYXMgY3RybCBmcm9tICcuL2N0cmwnXG5pbXBvcnQgRGlmZmVyIGZyb20gJy4vZGlmZmVyJ1xuXG5pbXBvcnQgcmVuZGVyZXIgZnJvbSAnLi4vY29uZmlnJ1xuaW1wb3J0IHsgcmVnaXN0ZXJDb21wb25lbnQsIHJlcXVpcmVDb21wb25lbnQsIHJlcXVpcmVNb2R1bGUgfSBmcm9tICcuL3JlZ2lzdGVyJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHBJbnN0YW5jZSAoaW5zdGFuY2VJZCwgb3B0aW9ucykge1xuICB0aGlzLmlkID0gaW5zdGFuY2VJZFxuICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zIHx8IHt9XG4gIHRoaXMudm0gPSBudWxsXG4gIHRoaXMuY3VzdG9tQ29tcG9uZW50TWFwID0ge31cbiAgdGhpcy5jYWxsYmFja3MgPSB7fVxuICB0aGlzLmRvYyA9IG5ldyByZW5kZXJlci5Eb2N1bWVudChcbiAgICBpbnN0YW5jZUlkLFxuICAgIHRoaXMub3B0aW9ucy5idW5kbGVVcmxcbiAgKVxuICB0aGlzLmRpZmZlciA9IG5ldyBEaWZmZXIoaW5zdGFuY2VJZClcbiAgdGhpcy51aWQgPSAwXG59XG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZSAoYXBwLCB2KSB7XG4gIGNvbnN0IHR5cGUgPSB0eXBvZih2KVxuXG4gIHN3aXRjaCAodHlwZSkge1xuICAgIGNhc2UgJ3VuZGVmaW5lZCc6XG4gICAgY2FzZSAnbnVsbCc6XG4gICAgICByZXR1cm4gJydcbiAgICBjYXNlICdyZWdleHAnOlxuICAgICAgcmV0dXJuIHYudG9TdHJpbmcoKVxuICAgIGNhc2UgJ2RhdGUnOlxuICAgICAgcmV0dXJuIHYudG9JU09TdHJpbmcoKVxuICAgIGNhc2UgJ251bWJlcic6XG4gICAgY2FzZSAnc3RyaW5nJzpcbiAgICBjYXNlICdib29sZWFuJzpcbiAgICBjYXNlICdhcnJheSc6XG4gICAgY2FzZSAnb2JqZWN0JzpcbiAgICAgIGlmICh2IGluc3RhbmNlb2YgcmVuZGVyZXIuRWxlbWVudCkge1xuICAgICAgICByZXR1cm4gdi5yZWZcbiAgICAgIH1cbiAgICAgIHJldHVybiB2XG4gICAgY2FzZSAnZnVuY3Rpb24nOlxuICAgICAgYXBwLmNhbGxiYWNrc1srK2FwcC51aWRdID0gdlxuICAgICAgcmV0dXJuIGFwcC51aWQudG9TdHJpbmcoKVxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodilcbiAgfVxufVxuXG5BcHBJbnN0YW5jZS5wcm90b3R5cGUuY2FsbFRhc2tzID0gZnVuY3Rpb24gKHRhc2tzKSB7XG4gIGlmICh0eXBvZih0YXNrcykgIT09ICdhcnJheScpIHtcbiAgICB0YXNrcyA9IFt0YXNrc11cbiAgfVxuXG4gIHRhc2tzLmZvckVhY2goKHRhc2spID0+IHtcbiAgICB0YXNrLmFyZ3MgPSB0YXNrLmFyZ3MubWFwKGFyZyA9PiBub3JtYWxpemUodGhpcywgYXJnKSlcbiAgfSlcblxuICByZXR1cm4gcmVuZGVyZXIuc2VuZFRhc2tzKHRoaXMuaWQsIHRhc2tzLCAnLTEnKVxufVxuXG5leHRlbmQoQXBwSW5zdGFuY2UucHJvdG90eXBlLCBjdHJsLCB7XG4gIHJlZ2lzdGVyQ29tcG9uZW50LFxuICByZXF1aXJlQ29tcG9uZW50LFxuICByZXF1aXJlTW9kdWxlXG59KVxuXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2h0bWw1L2RlZmF1bHQvYXBwL2luZGV4LmpzXG4gKiovIiwiZXhwb3J0IHtcbiAgZXh0ZW5kLFxuICBkZWYsXG4gIHJlbW92ZSxcbiAgaGFzT3duLFxuICBiaW5kLFxuICB0b0FycmF5LFxuICBpc09iamVjdCxcbiAgaXNQbGFpbk9iamVjdFxufSBmcm9tICcuLi8uLi9zaGFyZWQnXG5cbi8qKlxuICogQ2hlY2sgaWYgYSBzdHJpbmcgc3RhcnRzIHdpdGggJCBvciBfXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0clxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gaXNSZXNlcnZlZCAoc3RyKSB7XG4gIGNvbnN0IGMgPSAoc3RyICsgJycpLmNoYXJDb2RlQXQoMClcbiAgcmV0dXJuIGMgPT09IDB4MjQgfHwgYyA9PT0gMHg1RlxufVxuXG4vLyBjYW4gd2UgdXNlIF9fcHJvdG9fXz9cbmV4cG9ydCBjb25zdCBoYXNQcm90byA9ICdfX3Byb3RvX18nIGluIHt9XG5cbmxldCBfU2V0XG4vKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbmlmICh0eXBlb2YgU2V0ICE9PSAndW5kZWZpbmVkJyAmJiBTZXQudG9TdHJpbmcoKS5tYXRjaCgvbmF0aXZlIGNvZGUvKSkge1xuICAvLyB1c2UgbmF0aXZlIFNldCB3aGVuIGF2YWlsYWJsZS5cbiAgX1NldCA9IFNldFxufVxuZWxzZSB7XG4gIC8vIGEgbm9uLXN0YW5kYXJkIFNldCBwb2x5ZmlsbCB0aGF0IG9ubHkgd29ya3Mgd2l0aCBwcmltaXRpdmUga2V5cy5cbiAgX1NldCA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLnNldCA9IE9iamVjdC5jcmVhdGUobnVsbClcbiAgfVxuICBfU2V0LnByb3RvdHlwZS5oYXMgPSBmdW5jdGlvbiAoa2V5KSB7XG4gICAgcmV0dXJuIHRoaXMuc2V0W2tleV0gIT09IHVuZGVmaW5lZFxuICB9XG4gIF9TZXQucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgICB0aGlzLnNldFtrZXldID0gMVxuICB9XG4gIF9TZXQucHJvdG90eXBlLmNsZWFyID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuc2V0ID0gT2JqZWN0LmNyZWF0ZShudWxsKVxuICB9XG59XG5cbmV4cG9ydCB7IF9TZXQgfVxuXG4vKipcbiAqIENyZWF0ZSBhIGNhY2hlZCB2ZXJzaW9uIG9mIGEgcHVyZSBmdW5jdGlvbi5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmblxuICogQHJldHVybiB7RnVuY3Rpb259XG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGNhY2hlZCAoZm4pIHtcbiAgY29uc3QgY2FjaGUgPSBPYmplY3QuY3JlYXRlKG51bGwpXG4gIHJldHVybiBmdW5jdGlvbiBjYWNoZWRGbiAoc3RyKSB7XG4gICAgY29uc3QgaGl0ID0gY2FjaGVbc3RyXVxuICAgIHJldHVybiBoaXQgfHwgKGNhY2hlW3N0cl0gPSBmbihzdHIpKVxuICB9XG59XG5cbi8qKlxuICogQ2FtZWxpemUgYSBoeXBoZW4tZGVsbWl0ZWQgc3RyaW5nLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHJcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqL1xuXG5jb25zdCBjYW1lbGl6ZVJFID0gLy0oXFx3KS9nXG5leHBvcnQgY29uc3QgY2FtZWxpemUgPSBjYWNoZWQoc3RyID0+IHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKGNhbWVsaXplUkUsIHRvVXBwZXIpXG59KVxuXG5mdW5jdGlvbiB0b1VwcGVyIChfLCBjKSB7XG4gIHJldHVybiBjID8gYy50b1VwcGVyQ2FzZSgpIDogJydcbn1cblxuLyoqXG4gKiBIeXBoZW5hdGUgYSBjYW1lbENhc2Ugc3RyaW5nLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHJcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqL1xuXG5jb25zdCBoeXBoZW5hdGVSRSA9IC8oW2EtelxcZF0pKFtBLVpdKS9nXG5leHBvcnQgY29uc3QgaHlwaGVuYXRlID0gY2FjaGVkKHN0ciA9PiB7XG4gIHJldHVybiBzdHJcbiAgICAucmVwbGFjZShoeXBoZW5hdGVSRSwgJyQxLSQyJylcbiAgICAudG9Mb3dlckNhc2UoKVxufSlcblxuZXhwb3J0IGZ1bmN0aW9uIHR5cG9mICh2KSB7XG4gIGNvbnN0IHMgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodilcbiAgcmV0dXJuIHMuc3Vic3RyaW5nKDgsIHMubGVuZ3RoIC0gMSkudG9Mb3dlckNhc2UoKVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9odG1sNS9kZWZhdWx0L3V0aWwvaW5kZXguanNcbiAqKi8iLCIvKipcbiAqIEBmaWxlT3ZlcnZpZXdcbiAqIGluc3RhbmNlIGNvbnRyb2xzIGZyb20gbmF0aXZlXG4gKlxuICogLSBpbml0IGJ1bmRsZVxuICogLSBmaXJlIGV2ZW50XG4gKiAtIGNhbGxiYWNrXG4gKiAtIGRlc3Ryb3lcbiAqXG4gKiBjb3JyZXNwb25kZWQgd2l0aCB0aGUgQVBJIG9mIGluc3RhbmNlIG1hbmFnZXIgKGZyYW1ld29yay5qcylcbiAqL1xuXG5pbXBvcnQgeyBleHRlbmQsIGJpbmQgfSBmcm9tICcuLi91dGlsJ1xuaW1wb3J0IHtcbiAgZGVmaW5lLFxuICBib290c3RyYXAsXG4gIHJlZ2lzdGVyXG59IGZyb20gJy4vYnVuZGxlJ1xuXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlQWN0aW9ucyAoKSB7XG4gIHRoaXMuZGlmZmVyLmZsdXNoKClcbiAgY29uc3QgdGFza3MgPSBbXVxuICBpZiAodGhpcy5kb2MgJiYgdGhpcy5kb2MubGlzdGVuZXIgJiYgdGhpcy5kb2MubGlzdGVuZXIudXBkYXRlcy5sZW5ndGgpIHtcbiAgICB0YXNrcy5wdXNoKC4uLnRoaXMuZG9jLmxpc3RlbmVyLnVwZGF0ZXMpXG4gICAgdGhpcy5kb2MubGlzdGVuZXIudXBkYXRlcyA9IFtdXG4gIH1cbiAgaWYgKHRhc2tzLmxlbmd0aCkge1xuICAgIHJldHVybiB0aGlzLmNhbGxUYXNrcyh0YXNrcylcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaW5pdCAoY29kZSwgZGF0YSkge1xuICBjb25zb2xlLmRlYnVnKCdbSlMgRnJhbWV3b3JrXSBJbnRpYWxpemUgYW4gaW5zdGFuY2Ugd2l0aDpcXG4nLCBkYXRhKVxuXG4gIGxldCByZXN1bHRcbiAgLy8gQHNlZTogbGliL2FwcC9idW5kbGUuanNcbiAgY29uc3QgYnVuZGxlRGVmaW5lID0gYmluZChkZWZpbmUsIHRoaXMpXG4gIGNvbnN0IGJ1bmRsZUJvb3RzdHJhcCA9IChuYW1lLCBjb25maWcsIF9kYXRhKSA9PiB7XG4gICAgcmVzdWx0ID0gYm9vdHN0cmFwKHRoaXMsIG5hbWUsIGNvbmZpZywgX2RhdGEgfHwgZGF0YSlcbiAgICB0aGlzLnVwZGF0ZUFjdGlvbnMoKVxuICAgIHRoaXMuZG9jLmxpc3RlbmVyLmNyZWF0ZUZpbmlzaCgpXG4gICAgY29uc29sZS5kZWJ1ZyhgW0pTIEZyYW1ld29ya10gQWZ0ZXIgaW50aWFsaXplZCBhbiBpbnN0YW5jZSgke3RoaXMuaWR9KWApXG4gIH1cblxuICAvLyBiYWNrd2FyZChyZWdpc3Rlci9yZW5kZXIpXG4gIGNvbnN0IGJ1bmRsZVJlZ2lzdGVyID0gYmluZChyZWdpc3RlciwgdGhpcylcbiAgY29uc3QgYnVuZGxlUmVuZGVyID0gKG5hbWUsIF9kYXRhKSA9PiB7XG4gICAgcmVzdWx0ID0gYm9vdHN0cmFwKHRoaXMsIG5hbWUsIHt9LCBfZGF0YSlcbiAgfVxuXG4gIGNvbnN0IGJ1bmRsZVJlcXVpcmUgPSBuYW1lID0+IF9kYXRhID0+IHtcbiAgICByZXN1bHQgPSBib290c3RyYXAodGhpcywgbmFtZSwge30sIF9kYXRhKVxuICB9XG5cbiAgY29uc3QgYnVuZGxlRG9jdW1lbnQgPSB0aGlzLmRvY1xuXG4gIGxldCBmdW5jdGlvbkJvZHlcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gIGlmICh0eXBlb2YgY29kZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIC8vIGBmdW5jdGlvbiAoKSB7Li4ufWAgLT4gYHsuLi59YFxuICAgIC8vIG5vdCB2ZXJ5IHN0cmljdFxuICAgIGZ1bmN0aW9uQm9keSA9IGNvZGUudG9TdHJpbmcoKS5zdWJzdHIoMTIpXG4gIH1cbiAgZWxzZSBpZiAoY29kZSkge1xuICAgIGZ1bmN0aW9uQm9keSA9IGNvZGUudG9TdHJpbmcoKVxuICB9XG5cbiAgY29uc3QgeyBXWEVudmlyb25tZW50IH0gPSBnbG9iYWxcbiAgaWYgKFdYRW52aXJvbm1lbnQgJiYgV1hFbnZpcm9ubWVudC5wbGF0Zm9ybSAhPT0gJ1dlYicpIHtcbiAgICBjb25zdCB0aW1lciA9IHRoaXMucmVxdWlyZU1vZHVsZSgndGltZXInKVxuICAgIGNvbnN0IHRpbWVyQVBJcyA9IHtcbiAgICAgIHNldFRpbWVvdXQ6ICguLi5hcmdzKSA9PiB7XG4gICAgICAgIGNvbnN0IGhhbmRsZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgYXJnc1swXSguLi5hcmdzLnNsaWNlKDIpKVxuICAgICAgICB9XG4gICAgICAgIHRpbWVyLnNldFRpbWVvdXQoaGFuZGxlciwgYXJnc1sxXSlcbiAgICAgICAgcmV0dXJuIHRoaXMudWlkLnRvU3RyaW5nKClcbiAgICAgIH0sXG4gICAgICBzZXRJbnRlcnZhbDogKC4uLmFyZ3MpID0+IHtcbiAgICAgICAgY29uc3QgaGFuZGxlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBhcmdzWzBdKC4uLmFyZ3Muc2xpY2UoMikpXG4gICAgICAgIH1cbiAgICAgICAgdGltZXIuc2V0SW50ZXJ2YWwoaGFuZGxlciwgYXJnc1sxXSlcbiAgICAgICAgcmV0dXJuIHRoaXMudWlkLnRvU3RyaW5nKClcbiAgICAgIH0sXG4gICAgICBjbGVhclRpbWVvdXQ6IChuKSA9PiB7XG4gICAgICAgIHRpbWVyLmNsZWFyVGltZW91dChuKVxuICAgICAgfSxcbiAgICAgIGNsZWFySW50ZXJ2YWw6IChuKSA9PiB7XG4gICAgICAgIHRpbWVyLmNsZWFySW50ZXJ2YWwobilcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIWZ1bmN0aW9uQm9keSkge1xuICAgICAgdGhpcy5lbnYgPSB7XG4gICAgICAgIGJ1bmRsZURlZmluZSxcbiAgICAgICAgYnVuZGxlQm9vdHN0cmFwLFxuICAgICAgICBidW5kbGVEb2N1bWVudCxcbiAgICAgICAgc2V0VGltZW91dDogdGltZXJBUElzLnNldFRpbWVvdXQsXG4gICAgICAgIHNldEludGVydmFsOiB0aW1lckFQSXMuc2V0SW50ZXJ2YWwsXG4gICAgICAgIGNsZWFyVGltZW91dDogdGltZXJBUElzLmNsZWFyVGltZW91dCxcbiAgICAgICAgY2xlYXJJbnRlcnZhbDogdGltZXJBUElzLmNsZWFySW50ZXJ2YWxcbiAgICAgIH1cbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IGZuID0gbmV3IEZ1bmN0aW9uKFxuICAgICAgJ2RlZmluZScsXG4gICAgICAncmVxdWlyZScsXG4gICAgICAnZG9jdW1lbnQnLFxuICAgICAgJ2Jvb3RzdHJhcCcsXG4gICAgICAncmVnaXN0ZXInLFxuICAgICAgJ3JlbmRlcicsXG4gICAgICAnX193ZWV4X2RlZmluZV9fJywgLy8gYWxpYXMgZm9yIGRlZmluZVxuICAgICAgJ19fd2VleF9ib290c3RyYXBfXycsIC8vIGFsaWFzIGZvciBib290c3RyYXBcbiAgICAgICdzZXRUaW1lb3V0JyxcbiAgICAgICdzZXRJbnRlcnZhbCcsXG4gICAgICAnY2xlYXJUaW1lb3V0JyxcbiAgICAgICdjbGVhckludGVydmFsJyxcbiAgICAgIGZ1bmN0aW9uQm9keVxuICAgIClcblxuICAgIGZuKFxuICAgICAgYnVuZGxlRGVmaW5lLFxuICAgICAgYnVuZGxlUmVxdWlyZSxcbiAgICAgIGJ1bmRsZURvY3VtZW50LFxuICAgICAgYnVuZGxlQm9vdHN0cmFwLFxuICAgICAgYnVuZGxlUmVnaXN0ZXIsXG4gICAgICBidW5kbGVSZW5kZXIsXG4gICAgICBidW5kbGVEZWZpbmUsXG4gICAgICBidW5kbGVCb290c3RyYXAsXG4gICAgICB0aW1lckFQSXMuc2V0VGltZW91dCxcbiAgICAgIHRpbWVyQVBJcy5zZXRJbnRlcnZhbCxcbiAgICAgIHRpbWVyQVBJcy5jbGVhclRpbWVvdXQsXG4gICAgICB0aW1lckFQSXMuY2xlYXJJbnRlcnZhbClcbiAgfVxuICBlbHNlIHtcbiAgICBpZiAoIWZ1bmN0aW9uQm9keSkge1xuICAgICAgdGhpcy5lbnYgPSB7XG4gICAgICAgIGJ1bmRsZURlZmluZSxcbiAgICAgICAgYnVuZGxlQm9vdHN0cmFwLFxuICAgICAgICBidW5kbGVEb2N1bWVudCxcbiAgICAgICAgc2V0VGltZW91dCxcbiAgICAgICAgc2V0SW50ZXJ2YWwsXG4gICAgICAgIGNsZWFyVGltZW91dCxcbiAgICAgICAgY2xlYXJJbnRlcnZhbFxuICAgICAgfVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgZm4gPSBuZXcgRnVuY3Rpb24oXG4gICAgICAnZGVmaW5lJyxcbiAgICAgICdyZXF1aXJlJyxcbiAgICAgICdkb2N1bWVudCcsXG4gICAgICAnYm9vdHN0cmFwJyxcbiAgICAgICdyZWdpc3RlcicsXG4gICAgICAncmVuZGVyJyxcbiAgICAgICdfX3dlZXhfZGVmaW5lX18nLCAvLyBhbGlhcyBmb3IgZGVmaW5lXG4gICAgICAnX193ZWV4X2Jvb3RzdHJhcF9fJywgLy8gYWxpYXMgZm9yIGJvb3RzdHJhcFxuICAgICAgZnVuY3Rpb25Cb2R5XG4gICAgKVxuXG4gICAgZm4oXG4gICAgICBidW5kbGVEZWZpbmUsXG4gICAgICBidW5kbGVSZXF1aXJlLFxuICAgICAgYnVuZGxlRG9jdW1lbnQsXG4gICAgICBidW5kbGVCb290c3RyYXAsXG4gICAgICBidW5kbGVSZWdpc3RlcixcbiAgICAgIGJ1bmRsZVJlbmRlcixcbiAgICAgIGJ1bmRsZURlZmluZSxcbiAgICAgIGJ1bmRsZUJvb3RzdHJhcClcbiAgfVxuXG4gIHJldHVybiByZXN1bHRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlc3Ryb3kgKCkge1xuICBjb25zb2xlLmRlYnVnKGBbSlMgRnJhbWV3b3JrXSBEZXN0b3J5IGFuIGluc3RhbmNlKCR7dGhpcy5pZH0pYClcblxuICB0aGlzLmlkID0gJydcbiAgdGhpcy5vcHRpb25zID0gbnVsbFxuICB0aGlzLmJsb2NrcyA9IG51bGxcbiAgdGhpcy52bSA9IG51bGxcbiAgdGhpcy5kb2MgPSBudWxsXG4gIHRoaXMuY3VzdG9tQ29tcG9uZW50TWFwID0gbnVsbFxuICB0aGlzLmNhbGxiYWNrcyA9IG51bGxcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJvb3RFbGVtZW50ICgpIHtcbiAgY29uc3QgZG9jID0gdGhpcy5kb2MgfHwge31cbiAgY29uc3QgYm9keSA9IGRvYy5ib2R5IHx8IHt9XG4gIHJldHVybiBib2R5LnRvSlNPTiA/IGJvZHkudG9KU09OKCkgOiB7fVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZmlyZUV2ZW50IChyZWYsIHR5cGUsIGUsIGRvbUNoYW5nZXMpIHtcbiAgY29uc29sZS5kZWJ1ZyhgW0pTIEZyYW1ld29ya10gRmlyZSBhIFwiJHt0eXBlfVwiIGV2ZW50IG9uIGFuIGVsZW1lbnQoJHtyZWZ9KSBpbiBpbnN0YW5jZSgke3RoaXMuaWR9KWApXG4gIGlmIChBcnJheS5pc0FycmF5KHJlZikpIHtcbiAgICByZWYuc29tZSgocmVmKSA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5maXJlRXZlbnQocmVmLCB0eXBlLCBlKSAhPT0gZmFsc2VcbiAgICB9KVxuICAgIHJldHVyblxuICB9XG5cbiAgY29uc3QgZWwgPSB0aGlzLmRvYy5nZXRSZWYocmVmKVxuXG4gIGlmIChlbCkge1xuICAgIHRoaXMuZG9jLmNsb3NlKClcbiAgICBjb25zdCByZXN1bHQgPSB0aGlzLmRvYy5maXJlRXZlbnQoZWwsIHR5cGUsIGUsIGRvbUNoYW5nZXMpXG4gICAgdGhpcy51cGRhdGVBY3Rpb25zKClcbiAgICB0aGlzLmRvYy5saXN0ZW5lci51cGRhdGVGaW5pc2goKVxuICAgIHRoaXMuZG9jLm9wZW4oKVxuICAgIHJldHVybiByZXN1bHRcbiAgfVxuXG4gIHJldHVybiBuZXcgRXJyb3IoYGludmFsaWQgZWxlbWVudCByZWZlcmVuY2UgXCIke3JlZn1cImApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjYWxsYmFjayAoY2FsbGJhY2tJZCwgZGF0YSwgaWZLZWVwQWxpdmUpIHtcbiAgY29uc29sZS5kZWJ1ZyhgW0pTIEZyYW1ld29ya10gSW52b2tlIGEgY2FsbGJhY2soJHtjYWxsYmFja0lkfSkgd2l0aGAsIGRhdGEsXG4gICAgICAgICAgICBgaW4gaW5zdGFuY2UoJHt0aGlzLmlkfSlgKVxuXG4gIGNvbnN0IGNhbGxiYWNrID0gdGhpcy5jYWxsYmFja3NbY2FsbGJhY2tJZF1cblxuICBpZiAodHlwZW9mIGNhbGxiYWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhpcy5kb2MuY2xvc2UoKVxuICAgIGNhbGxiYWNrKGRhdGEpIC8vIGRhdGEgaXMgYWxyZWFkeSBhIG9iamVjdCwgQHNlZTogbGliL3J1bnRpbWUvaW5kZXguanNcblxuICAgIGlmICh0eXBlb2YgaWZLZWVwQWxpdmUgPT09ICd1bmRlZmluZWQnIHx8IGlmS2VlcEFsaXZlID09PSBmYWxzZSkge1xuICAgICAgdGhpcy5jYWxsYmFja3NbY2FsbGJhY2tJZF0gPSB1bmRlZmluZWRcbiAgICB9XG5cbiAgICB0aGlzLnVwZGF0ZUFjdGlvbnMoKVxuICAgIHRoaXMuZG9jLmxpc3RlbmVyLnVwZGF0ZUZpbmlzaCgpXG4gICAgdGhpcy5kb2Mub3BlbigpXG4gICAgcmV0dXJuXG4gIH1cblxuICByZXR1cm4gbmV3IEVycm9yKGBpbnZhbGlkIGNhbGxiYWNrIGlkIFwiJHtjYWxsYmFja0lkfVwiYClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlZnJlc2hEYXRhIChkYXRhKSB7XG4gIGNvbnNvbGUuZGVidWcoYFtKUyBGcmFtZXdvcmtdIFJlZnJlc2ggd2l0aGAsIGRhdGEsXG4gICAgICAgICAgICBgaW4gaW5zdGFuY2VbJHt0aGlzLmlkfV1gKVxuXG4gIGNvbnN0IHZtID0gdGhpcy52bVxuXG4gIGlmICh2bSAmJiBkYXRhKSB7XG4gICAgdGhpcy5kb2MuY2xvc2UoKVxuICAgIGlmICh0eXBlb2Ygdm0ucmVmcmVzaERhdGEgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHZtLnJlZnJlc2hEYXRhKGRhdGEpXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgZXh0ZW5kKHZtLCBkYXRhKVxuICAgIH1cbiAgICB0aGlzLnVwZGF0ZUFjdGlvbnMoKVxuICAgIHRoaXMuZG9jLmxpc3RlbmVyLnJlZnJlc2hGaW5pc2goKVxuICAgIHRoaXMuZG9jLm9wZW4oKVxuICAgIHJldHVyblxuICB9XG5cbiAgcmV0dXJuIG5ldyBFcnJvcihgaW52YWxpZCBkYXRhIFwiJHtkYXRhfVwiYClcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vaHRtbDUvZGVmYXVsdC9hcHAvY3RybC5qc1xuICoqLyIsIi8qKlxuICogQGZpbGVPdmVydmlld1xuICogYXBpIHRoYXQgaW52b2tlZCBieSBqcyBidW5kbGUgY29kZVxuICpcbiAqIC0gZGVmaW5lKG5hbWUsIGZhY3RvcnkpOiBkZWZpbmUgYSBuZXcgY29tcG9zZWQgY29tcG9uZW50IHR5cGVcbiAqIC0gYm9vdHN0cmFwKHR5cGUsIGNvbmZpZywgZGF0YSk6IHJlcXVpcmUgYSBjZXJ0YWluIHR5cGUgJlxuICogICAgICAgICByZW5kZXIgd2l0aCAob3B0aW9uYWwpIGRhdGFcbiAqXG4gKiBkZXByZWNhdGVkOlxuICogLSByZWdpc3Rlcih0eXBlLCBvcHRpb25zKTogcmVnaXN0ZXIgYSBuZXcgY29tcG9zZWQgY29tcG9uZW50IHR5cGVcbiAqIC0gcmVuZGVyKHR5cGUsIGRhdGEpOiByZW5kZXIgYnkgYSBjZXJ0YWluIHR5cGUgd2l0aCAob3B0aW9uYWwpIGRhdGFcbiAqIC0gcmVxdWlyZSh0eXBlKShkYXRhKTogcmVxdWlyZSBhIHR5cGUgdGhlbiByZW5kZXIgd2l0aCBkYXRhXG4gKi9cblxuaW1wb3J0IHNlbXZlciBmcm9tICdzZW12ZXInXG5pbXBvcnQgeyB0eXBvZiwgaXNQbGFpbk9iamVjdCB9IGZyb20gJy4uL3V0aWwnXG5pbXBvcnQgVm0gZnJvbSAnLi4vdm0nXG5pbXBvcnQgKiBhcyBkb3duZ3JhZGUgZnJvbSAnLi9kb3duZ3JhZGUnXG5cbmNvbnN0IFdFRVhfQ09NUE9ORU5UX1JFRyA9IC9eQHdlZXgtY29tcG9uZW50XFwvL1xuY29uc3QgV0VFWF9NT0RVTEVfUkVHID0gL15Ad2VleC1tb2R1bGVcXC8vXG5jb25zdCBOT1JNQUxfTU9EVUxFX1JFRyA9IC9eXFwuezEsMn1cXC8vXG5jb25zdCBKU19TVVJGSVhfUkVHID0gL1xcLmpzJC9cblxuY29uc3QgaXNXZWV4Q29tcG9uZW50ID0gbmFtZSA9PiAhIW5hbWUubWF0Y2goV0VFWF9DT01QT05FTlRfUkVHKVxuY29uc3QgaXNXZWV4TW9kdWxlID0gbmFtZSA9PiAhIW5hbWUubWF0Y2goV0VFWF9NT0RVTEVfUkVHKVxuY29uc3QgaXNOb3JtYWxNb2R1bGUgPSBuYW1lID0+ICEhbmFtZS5tYXRjaChOT1JNQUxfTU9EVUxFX1JFRylcbmNvbnN0IGlzTnBtTW9kdWxlID0gbmFtZSA9PiAhaXNXZWV4Q29tcG9uZW50KG5hbWUpICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhaXNXZWV4TW9kdWxlKG5hbWUpICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhaXNOb3JtYWxNb2R1bGUobmFtZSlcblxuZnVuY3Rpb24gcmVtb3ZlV2VleFByZWZpeCAoc3RyKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZShXRUVYX0NPTVBPTkVOVF9SRUcsICcnKVxuICAgICAgICAgIC5yZXBsYWNlKFdFRVhfTU9EVUxFX1JFRywgJycpXG59XG5cbmZ1bmN0aW9uIHJlbW92ZUpTU3VyZml4IChzdHIpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKEpTX1NVUkZJWF9SRUcsICcnKVxufVxuXG5sZXQgY29tbW9uTW9kdWxlcyA9IHt9XG5cbmV4cG9ydCBmdW5jdGlvbiBjbGVhckNvbW1vbk1vZHVsZXMgKCkge1xuICBjb21tb25Nb2R1bGVzID0ge31cbn1cblxuLy8gZGVmaW5lKG5hbWUsIGZhY3RvcnkpIGZvciBwcmltYXJ5IHVzYWdlXG4vLyBvclxuLy8gZGVmaW5lKG5hbWUsIGRlcHMsIGZhY3RvcnkpIGZvciBjb21wYXRpYmlsaXR5XG4vLyBOb3RpY2U6IERPIE5PVCB1c2UgZnVuY3Rpb24gZGVmaW5lKCkge30sXG4vLyBpdCB3aWxsIGNhdXNlIGVycm9yIGFmdGVyIGJ1aWxkZWQgYnkgd2VicGFja1xuZXhwb3J0IGNvbnN0IGRlZmluZSA9IGZ1bmN0aW9uIChuYW1lLCBkZXBzLCBmYWN0b3J5KSB7XG4gIGNvbnNvbGUuZGVidWcoYFtKUyBGcmFtZXdvcmtdIGRlZmluZSBhIGNvbXBvbmVudCAke25hbWV9YClcblxuICBpZiAodHlwb2YoZGVwcykgPT09ICdmdW5jdGlvbicpIHtcbiAgICBmYWN0b3J5ID0gZGVwc1xuICAgIGRlcHMgPSBbXVxuICB9XG5cbiAgY29uc3QgX3JlcXVpcmUgPSAobmFtZSkgPT4ge1xuICAgIGxldCBjbGVhbk5hbWVcblxuICAgIGlmIChpc1dlZXhDb21wb25lbnQobmFtZSkpIHtcbiAgICAgIGNsZWFuTmFtZSA9IHJlbW92ZVdlZXhQcmVmaXgobmFtZSlcbiAgICAgIHJldHVybiB0aGlzLnJlcXVpcmVDb21wb25lbnQoY2xlYW5OYW1lKVxuICAgIH1cbiAgICBpZiAoaXNXZWV4TW9kdWxlKG5hbWUpKSB7XG4gICAgICBjbGVhbk5hbWUgPSByZW1vdmVXZWV4UHJlZml4KG5hbWUpXG4gICAgICByZXR1cm4gdGhpcy5yZXF1aXJlTW9kdWxlKGNsZWFuTmFtZSlcbiAgICB9XG4gICAgaWYgKGlzTm9ybWFsTW9kdWxlKG5hbWUpKSB7XG4gICAgICBjbGVhbk5hbWUgPSByZW1vdmVKU1N1cmZpeChuYW1lKVxuICAgICAgcmV0dXJuIGNvbW1vbk1vZHVsZXNbbmFtZV1cbiAgICB9XG4gICAgaWYgKGlzTnBtTW9kdWxlKG5hbWUpKSB7XG4gICAgICBjbGVhbk5hbWUgPSByZW1vdmVKU1N1cmZpeChuYW1lKVxuICAgICAgcmV0dXJuIGNvbW1vbk1vZHVsZXNbbmFtZV1cbiAgICB9XG4gIH1cbiAgY29uc3QgX21vZHVsZSA9IHsgZXhwb3J0czoge319XG5cbiAgbGV0IGNsZWFuTmFtZVxuICBpZiAoaXNXZWV4Q29tcG9uZW50KG5hbWUpKSB7XG4gICAgY2xlYW5OYW1lID0gcmVtb3ZlV2VleFByZWZpeChuYW1lKVxuXG4gICAgZmFjdG9yeShfcmVxdWlyZSwgX21vZHVsZS5leHBvcnRzLCBfbW9kdWxlKVxuXG4gICAgdGhpcy5yZWdpc3RlckNvbXBvbmVudChjbGVhbk5hbWUsIF9tb2R1bGUuZXhwb3J0cylcbiAgfVxuICBlbHNlIGlmIChpc1dlZXhNb2R1bGUobmFtZSkpIHtcbiAgICBjbGVhbk5hbWUgPSByZW1vdmVXZWV4UHJlZml4KG5hbWUpXG5cbiAgICBmYWN0b3J5KF9yZXF1aXJlLCBfbW9kdWxlLmV4cG9ydHMsIF9tb2R1bGUpXG5cbiAgICBWbS5yZWdpc3Rlck1vZHVsZXMoe1xuICAgICAgW2NsZWFuTmFtZV06IF9tb2R1bGUuZXhwb3J0c1xuICAgIH0pXG4gIH1cbiAgZWxzZSBpZiAoaXNOb3JtYWxNb2R1bGUobmFtZSkpIHtcbiAgICBjbGVhbk5hbWUgPSByZW1vdmVKU1N1cmZpeChuYW1lKVxuXG4gICAgZmFjdG9yeShfcmVxdWlyZSwgX21vZHVsZS5leHBvcnRzLCBfbW9kdWxlKVxuXG4gICAgY29tbW9uTW9kdWxlc1tjbGVhbk5hbWVdID0gX21vZHVsZS5leHBvcnRzXG4gIH1cbiAgZWxzZSBpZiAoaXNOcG1Nb2R1bGUobmFtZSkpIHtcbiAgICBjbGVhbk5hbWUgPSByZW1vdmVKU1N1cmZpeChuYW1lKVxuXG4gICAgZmFjdG9yeShfcmVxdWlyZSwgX21vZHVsZS5leHBvcnRzLCBfbW9kdWxlKVxuXG4gICAgY29uc3QgZXhwb3J0cyA9IF9tb2R1bGUuZXhwb3J0c1xuICAgIGlmIChleHBvcnRzLnRlbXBsYXRlIHx8XG4gICAgICAgIGV4cG9ydHMuc3R5bGUgfHxcbiAgICAgICAgZXhwb3J0cy5tZXRob2RzKSB7XG4gICAgICAvLyBkb3duZ3JhZGUgdG8gb2xkIGRlZmluZSBtZXRob2QgKGRlZmluZSgnY29tcG9uZW50TmFtZScsIGZhY3RvcnkpKVxuICAgICAgLy8gdGhlIGV4cG9ydHMgY29udGFpbiBvbmUga2V5IG9mIHRlbXBsYXRlLCBzdHlsZSBvciBtZXRob2RzXG4gICAgICAvLyBidXQgaXQgaGFzIHJpc2shISFcbiAgICAgIHRoaXMucmVnaXN0ZXJDb21wb25lbnQoY2xlYW5OYW1lLCBleHBvcnRzKVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGNvbW1vbk1vZHVsZXNbY2xlYW5OYW1lXSA9IF9tb2R1bGUuZXhwb3J0c1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYm9vdHN0cmFwIChhcHAsIG5hbWUsIGNvbmZpZywgZGF0YSkge1xuICBjb25zb2xlLmRlYnVnKGBbSlMgRnJhbWV3b3JrXSBib290c3RyYXAgZm9yICR7bmFtZX1gKVxuXG4gIGxldCBjbGVhbk5hbWVcblxuICBpZiAoaXNXZWV4Q29tcG9uZW50KG5hbWUpKSB7XG4gICAgY2xlYW5OYW1lID0gcmVtb3ZlV2VleFByZWZpeChuYW1lKVxuICB9XG4gIGVsc2UgaWYgKGlzTnBtTW9kdWxlKG5hbWUpKSB7XG4gICAgY2xlYW5OYW1lID0gcmVtb3ZlSlNTdXJmaXgobmFtZSlcbiAgICAvLyBjaGVjayBpZiBkZWZpbmUgYnkgb2xkICdkZWZpbmUnIG1ldGhvZFxuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgIGlmICghYXBwLmN1c3RvbUNvbXBvbmVudE1hcFtjbGVhbk5hbWVdKSB7XG4gICAgICByZXR1cm4gbmV3IEVycm9yKGBJdCdzIG5vdCBhIGNvbXBvbmVudDogJHtuYW1lfWApXG4gICAgfVxuICB9XG4gIGVsc2Uge1xuICAgIHJldHVybiBuZXcgRXJyb3IoYFdyb25nIGNvbXBvbmVudCBuYW1lOiAke25hbWV9YClcbiAgfVxuXG4gIGNvbmZpZyA9IGlzUGxhaW5PYmplY3QoY29uZmlnKSA/IGNvbmZpZyA6IHt9XG5cbiAgaWYgKHR5cGVvZiBjb25maWcudHJhbnNmb3JtZXJWZXJzaW9uID09PSAnc3RyaW5nJyAmJlxuICAgIHR5cGVvZiBnbG9iYWwudHJhbnNmb3JtZXJWZXJzaW9uID09PSAnc3RyaW5nJyAmJlxuICAgICFzZW12ZXIuc2F0aXNmaWVzKGNvbmZpZy50cmFuc2Zvcm1lclZlcnNpb24sXG4gICAgICBnbG9iYWwudHJhbnNmb3JtZXJWZXJzaW9uKSkge1xuICAgIHJldHVybiBuZXcgRXJyb3IoYEpTIEJ1bmRsZSB2ZXJzaW9uOiAke2NvbmZpZy50cmFuc2Zvcm1lclZlcnNpb259IGAgK1xuICAgICAgYG5vdCBjb21wYXRpYmxlIHdpdGggJHtnbG9iYWwudHJhbnNmb3JtZXJWZXJzaW9ufWApXG4gIH1cblxuICBjb25zdCBfY2hlY2tEb3duZ3JhZGUgPSBkb3duZ3JhZGUuY2hlY2soY29uZmlnLmRvd25ncmFkZSlcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gIGlmIChfY2hlY2tEb3duZ3JhZGUuaXNEb3duZ3JhZGUpIHtcbiAgICBhcHAuY2FsbFRhc2tzKFt7XG4gICAgICBtb2R1bGU6ICdpbnN0YW5jZVdyYXAnLFxuICAgICAgbWV0aG9kOiAnZXJyb3InLFxuICAgICAgYXJnczogW1xuICAgICAgICBfY2hlY2tEb3duZ3JhZGUuZXJyb3JUeXBlLFxuICAgICAgICBfY2hlY2tEb3duZ3JhZGUuY29kZSxcbiAgICAgICAgX2NoZWNrRG93bmdyYWRlLmVycm9yTWVzc2FnZVxuICAgICAgXVxuICAgIH1dKVxuICAgIHJldHVybiBuZXcgRXJyb3IoYERvd25ncmFkZVske19jaGVja0Rvd25ncmFkZS5jb2RlfV06ICR7X2NoZWNrRG93bmdyYWRlLmVycm9yTWVzc2FnZX1gKVxuICB9XG5cbiAgYXBwLnZtID0gbmV3IFZtKGNsZWFuTmFtZSwgbnVsbCwgeyBfYXBwOiBhcHAgfSwgbnVsbCwgZGF0YSlcbn1cblxuLyoqXG4gKiBAZGVwcmVjYXRlZFxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVnaXN0ZXIgKHR5cGUsIG9wdGlvbnMpIHtcbiAgY29uc29sZS53YXJuKCdbSlMgRnJhbWV3b3JrXSBSZWdpc3RlciBpcyBkZXByZWNhdGVkLCBwbGVhc2UgaW5zdGFsbCBsYXN0ZXN0IHRyYW5zZm9ybWVyLicpXG4gIHRoaXMucmVnaXN0ZXJDb21wb25lbnQodHlwZSwgb3B0aW9ucylcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vaHRtbDUvZGVmYXVsdC9hcHAvYnVuZGxlLmpzXG4gKiovIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gU2VtVmVyO1xuXG4vLyBUaGUgZGVidWcgZnVuY3Rpb24gaXMgZXhjbHVkZWQgZW50aXJlbHkgZnJvbSB0aGUgbWluaWZpZWQgdmVyc2lvbi5cbi8qIG5vbWluICovIHZhciBkZWJ1Zztcbi8qIG5vbWluICovIGlmICh0eXBlb2YgcHJvY2VzcyA9PT0gJ29iamVjdCcgJiZcbiAgICAvKiBub21pbiAqLyBwcm9jZXNzLmVudiAmJlxuICAgIC8qIG5vbWluICovIHByb2Nlc3MuZW52Lk5PREVfREVCVUcgJiZcbiAgICAvKiBub21pbiAqLyAvXFxic2VtdmVyXFxiL2kudGVzdChwcm9jZXNzLmVudi5OT0RFX0RFQlVHKSlcbiAgLyogbm9taW4gKi8gZGVidWcgPSBmdW5jdGlvbigpIHtcbiAgICAvKiBub21pbiAqLyB2YXIgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMCk7XG4gICAgLyogbm9taW4gKi8gYXJncy51bnNoaWZ0KCdTRU1WRVInKTtcbiAgICAvKiBub21pbiAqLyBjb25zb2xlLmxvZy5hcHBseShjb25zb2xlLCBhcmdzKTtcbiAgICAvKiBub21pbiAqLyB9O1xuLyogbm9taW4gKi8gZWxzZVxuICAvKiBub21pbiAqLyBkZWJ1ZyA9IGZ1bmN0aW9uKCkge307XG5cbi8vIE5vdGU6IHRoaXMgaXMgdGhlIHNlbXZlci5vcmcgdmVyc2lvbiBvZiB0aGUgc3BlYyB0aGF0IGl0IGltcGxlbWVudHNcbi8vIE5vdCBuZWNlc3NhcmlseSB0aGUgcGFja2FnZSB2ZXJzaW9uIG9mIHRoaXMgY29kZS5cbmV4cG9ydHMuU0VNVkVSX1NQRUNfVkVSU0lPTiA9ICcyLjAuMCc7XG5cbnZhciBNQVhfTEVOR1RIID0gMjU2O1xudmFyIE1BWF9TQUZFX0lOVEVHRVIgPSBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUiB8fCA5MDA3MTk5MjU0NzQwOTkxO1xuXG4vLyBUaGUgYWN0dWFsIHJlZ2V4cHMgZ28gb24gZXhwb3J0cy5yZVxudmFyIHJlID0gZXhwb3J0cy5yZSA9IFtdO1xudmFyIHNyYyA9IGV4cG9ydHMuc3JjID0gW107XG52YXIgUiA9IDA7XG5cbi8vIFRoZSBmb2xsb3dpbmcgUmVndWxhciBFeHByZXNzaW9ucyBjYW4gYmUgdXNlZCBmb3IgdG9rZW5pemluZyxcbi8vIHZhbGlkYXRpbmcsIGFuZCBwYXJzaW5nIFNlbVZlciB2ZXJzaW9uIHN0cmluZ3MuXG5cbi8vICMjIE51bWVyaWMgSWRlbnRpZmllclxuLy8gQSBzaW5nbGUgYDBgLCBvciBhIG5vbi16ZXJvIGRpZ2l0IGZvbGxvd2VkIGJ5IHplcm8gb3IgbW9yZSBkaWdpdHMuXG5cbnZhciBOVU1FUklDSURFTlRJRklFUiA9IFIrKztcbnNyY1tOVU1FUklDSURFTlRJRklFUl0gPSAnMHxbMS05XVxcXFxkKic7XG52YXIgTlVNRVJJQ0lERU5USUZJRVJMT09TRSA9IFIrKztcbnNyY1tOVU1FUklDSURFTlRJRklFUkxPT1NFXSA9ICdbMC05XSsnO1xuXG5cbi8vICMjIE5vbi1udW1lcmljIElkZW50aWZpZXJcbi8vIFplcm8gb3IgbW9yZSBkaWdpdHMsIGZvbGxvd2VkIGJ5IGEgbGV0dGVyIG9yIGh5cGhlbiwgYW5kIHRoZW4gemVybyBvclxuLy8gbW9yZSBsZXR0ZXJzLCBkaWdpdHMsIG9yIGh5cGhlbnMuXG5cbnZhciBOT05OVU1FUklDSURFTlRJRklFUiA9IFIrKztcbnNyY1tOT05OVU1FUklDSURFTlRJRklFUl0gPSAnXFxcXGQqW2EtekEtWi1dW2EtekEtWjAtOS1dKic7XG5cblxuLy8gIyMgTWFpbiBWZXJzaW9uXG4vLyBUaHJlZSBkb3Qtc2VwYXJhdGVkIG51bWVyaWMgaWRlbnRpZmllcnMuXG5cbnZhciBNQUlOVkVSU0lPTiA9IFIrKztcbnNyY1tNQUlOVkVSU0lPTl0gPSAnKCcgKyBzcmNbTlVNRVJJQ0lERU5USUZJRVJdICsgJylcXFxcLicgK1xuICAgICAgICAgICAgICAgICAgICcoJyArIHNyY1tOVU1FUklDSURFTlRJRklFUl0gKyAnKVxcXFwuJyArXG4gICAgICAgICAgICAgICAgICAgJygnICsgc3JjW05VTUVSSUNJREVOVElGSUVSXSArICcpJztcblxudmFyIE1BSU5WRVJTSU9OTE9PU0UgPSBSKys7XG5zcmNbTUFJTlZFUlNJT05MT09TRV0gPSAnKCcgKyBzcmNbTlVNRVJJQ0lERU5USUZJRVJMT09TRV0gKyAnKVxcXFwuJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAnKCcgKyBzcmNbTlVNRVJJQ0lERU5USUZJRVJMT09TRV0gKyAnKVxcXFwuJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAnKCcgKyBzcmNbTlVNRVJJQ0lERU5USUZJRVJMT09TRV0gKyAnKSc7XG5cbi8vICMjIFByZS1yZWxlYXNlIFZlcnNpb24gSWRlbnRpZmllclxuLy8gQSBudW1lcmljIGlkZW50aWZpZXIsIG9yIGEgbm9uLW51bWVyaWMgaWRlbnRpZmllci5cblxudmFyIFBSRVJFTEVBU0VJREVOVElGSUVSID0gUisrO1xuc3JjW1BSRVJFTEVBU0VJREVOVElGSUVSXSA9ICcoPzonICsgc3JjW05VTUVSSUNJREVOVElGSUVSXSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3wnICsgc3JjW05PTk5VTUVSSUNJREVOVElGSUVSXSArICcpJztcblxudmFyIFBSRVJFTEVBU0VJREVOVElGSUVSTE9PU0UgPSBSKys7XG5zcmNbUFJFUkVMRUFTRUlERU5USUZJRVJMT09TRV0gPSAnKD86JyArIHNyY1tOVU1FUklDSURFTlRJRklFUkxPT1NFXSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnfCcgKyBzcmNbTk9OTlVNRVJJQ0lERU5USUZJRVJdICsgJyknO1xuXG5cbi8vICMjIFByZS1yZWxlYXNlIFZlcnNpb25cbi8vIEh5cGhlbiwgZm9sbG93ZWQgYnkgb25lIG9yIG1vcmUgZG90LXNlcGFyYXRlZCBwcmUtcmVsZWFzZSB2ZXJzaW9uXG4vLyBpZGVudGlmaWVycy5cblxudmFyIFBSRVJFTEVBU0UgPSBSKys7XG5zcmNbUFJFUkVMRUFTRV0gPSAnKD86LSgnICsgc3JjW1BSRVJFTEVBU0VJREVOVElGSUVSXSArXG4gICAgICAgICAgICAgICAgICAnKD86XFxcXC4nICsgc3JjW1BSRVJFTEVBU0VJREVOVElGSUVSXSArICcpKikpJztcblxudmFyIFBSRVJFTEVBU0VMT09TRSA9IFIrKztcbnNyY1tQUkVSRUxFQVNFTE9PU0VdID0gJyg/Oi0/KCcgKyBzcmNbUFJFUkVMRUFTRUlERU5USUZJRVJMT09TRV0gK1xuICAgICAgICAgICAgICAgICAgICAgICAnKD86XFxcXC4nICsgc3JjW1BSRVJFTEVBU0VJREVOVElGSUVSTE9PU0VdICsgJykqKSknO1xuXG4vLyAjIyBCdWlsZCBNZXRhZGF0YSBJZGVudGlmaWVyXG4vLyBBbnkgY29tYmluYXRpb24gb2YgZGlnaXRzLCBsZXR0ZXJzLCBvciBoeXBoZW5zLlxuXG52YXIgQlVJTERJREVOVElGSUVSID0gUisrO1xuc3JjW0JVSUxESURFTlRJRklFUl0gPSAnWzAtOUEtWmEtei1dKyc7XG5cbi8vICMjIEJ1aWxkIE1ldGFkYXRhXG4vLyBQbHVzIHNpZ24sIGZvbGxvd2VkIGJ5IG9uZSBvciBtb3JlIHBlcmlvZC1zZXBhcmF0ZWQgYnVpbGQgbWV0YWRhdGFcbi8vIGlkZW50aWZpZXJzLlxuXG52YXIgQlVJTEQgPSBSKys7XG5zcmNbQlVJTERdID0gJyg/OlxcXFwrKCcgKyBzcmNbQlVJTERJREVOVElGSUVSXSArXG4gICAgICAgICAgICAgJyg/OlxcXFwuJyArIHNyY1tCVUlMRElERU5USUZJRVJdICsgJykqKSknO1xuXG5cbi8vICMjIEZ1bGwgVmVyc2lvbiBTdHJpbmdcbi8vIEEgbWFpbiB2ZXJzaW9uLCBmb2xsb3dlZCBvcHRpb25hbGx5IGJ5IGEgcHJlLXJlbGVhc2UgdmVyc2lvbiBhbmRcbi8vIGJ1aWxkIG1ldGFkYXRhLlxuXG4vLyBOb3RlIHRoYXQgdGhlIG9ubHkgbWFqb3IsIG1pbm9yLCBwYXRjaCwgYW5kIHByZS1yZWxlYXNlIHNlY3Rpb25zIG9mXG4vLyB0aGUgdmVyc2lvbiBzdHJpbmcgYXJlIGNhcHR1cmluZyBncm91cHMuICBUaGUgYnVpbGQgbWV0YWRhdGEgaXMgbm90IGFcbi8vIGNhcHR1cmluZyBncm91cCwgYmVjYXVzZSBpdCBzaG91bGQgbm90IGV2ZXIgYmUgdXNlZCBpbiB2ZXJzaW9uXG4vLyBjb21wYXJpc29uLlxuXG52YXIgRlVMTCA9IFIrKztcbnZhciBGVUxMUExBSU4gPSAndj8nICsgc3JjW01BSU5WRVJTSU9OXSArXG4gICAgICAgICAgICAgICAgc3JjW1BSRVJFTEVBU0VdICsgJz8nICtcbiAgICAgICAgICAgICAgICBzcmNbQlVJTERdICsgJz8nO1xuXG5zcmNbRlVMTF0gPSAnXicgKyBGVUxMUExBSU4gKyAnJCc7XG5cbi8vIGxpa2UgZnVsbCwgYnV0IGFsbG93cyB2MS4yLjMgYW5kID0xLjIuMywgd2hpY2ggcGVvcGxlIGRvIHNvbWV0aW1lcy5cbi8vIGFsc28sIDEuMC4wYWxwaGExIChwcmVyZWxlYXNlIHdpdGhvdXQgdGhlIGh5cGhlbikgd2hpY2ggaXMgcHJldHR5XG4vLyBjb21tb24gaW4gdGhlIG5wbSByZWdpc3RyeS5cbnZhciBMT09TRVBMQUlOID0gJ1t2PVxcXFxzXSonICsgc3JjW01BSU5WRVJTSU9OTE9PU0VdICtcbiAgICAgICAgICAgICAgICAgc3JjW1BSRVJFTEVBU0VMT09TRV0gKyAnPycgK1xuICAgICAgICAgICAgICAgICBzcmNbQlVJTERdICsgJz8nO1xuXG52YXIgTE9PU0UgPSBSKys7XG5zcmNbTE9PU0VdID0gJ14nICsgTE9PU0VQTEFJTiArICckJztcblxudmFyIEdUTFQgPSBSKys7XG5zcmNbR1RMVF0gPSAnKCg/Ojx8Pik/PT8pJztcblxuLy8gU29tZXRoaW5nIGxpa2UgXCIyLipcIiBvciBcIjEuMi54XCIuXG4vLyBOb3RlIHRoYXQgXCJ4LnhcIiBpcyBhIHZhbGlkIHhSYW5nZSBpZGVudGlmZXIsIG1lYW5pbmcgXCJhbnkgdmVyc2lvblwiXG4vLyBPbmx5IHRoZSBmaXJzdCBpdGVtIGlzIHN0cmljdGx5IHJlcXVpcmVkLlxudmFyIFhSQU5HRUlERU5USUZJRVJMT09TRSA9IFIrKztcbnNyY1tYUkFOR0VJREVOVElGSUVSTE9PU0VdID0gc3JjW05VTUVSSUNJREVOVElGSUVSTE9PU0VdICsgJ3x4fFh8XFxcXConO1xudmFyIFhSQU5HRUlERU5USUZJRVIgPSBSKys7XG5zcmNbWFJBTkdFSURFTlRJRklFUl0gPSBzcmNbTlVNRVJJQ0lERU5USUZJRVJdICsgJ3x4fFh8XFxcXConO1xuXG52YXIgWFJBTkdFUExBSU4gPSBSKys7XG5zcmNbWFJBTkdFUExBSU5dID0gJ1t2PVxcXFxzXSooJyArIHNyY1tYUkFOR0VJREVOVElGSUVSXSArICcpJyArXG4gICAgICAgICAgICAgICAgICAgJyg/OlxcXFwuKCcgKyBzcmNbWFJBTkdFSURFTlRJRklFUl0gKyAnKScgK1xuICAgICAgICAgICAgICAgICAgICcoPzpcXFxcLignICsgc3JjW1hSQU5HRUlERU5USUZJRVJdICsgJyknICtcbiAgICAgICAgICAgICAgICAgICAnKD86JyArIHNyY1tQUkVSRUxFQVNFXSArICcpPycgK1xuICAgICAgICAgICAgICAgICAgIHNyY1tCVUlMRF0gKyAnPycgK1xuICAgICAgICAgICAgICAgICAgICcpPyk/JztcblxudmFyIFhSQU5HRVBMQUlOTE9PU0UgPSBSKys7XG5zcmNbWFJBTkdFUExBSU5MT09TRV0gPSAnW3Y9XFxcXHNdKignICsgc3JjW1hSQU5HRUlERU5USUZJRVJMT09TRV0gKyAnKScgK1xuICAgICAgICAgICAgICAgICAgICAgICAgJyg/OlxcXFwuKCcgKyBzcmNbWFJBTkdFSURFTlRJRklFUkxPT1NFXSArICcpJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAnKD86XFxcXC4oJyArIHNyY1tYUkFOR0VJREVOVElGSUVSTE9PU0VdICsgJyknICtcbiAgICAgICAgICAgICAgICAgICAgICAgICcoPzonICsgc3JjW1BSRVJFTEVBU0VMT09TRV0gKyAnKT8nICtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyY1tCVUlMRF0gKyAnPycgK1xuICAgICAgICAgICAgICAgICAgICAgICAgJyk/KT8nO1xuXG52YXIgWFJBTkdFID0gUisrO1xuc3JjW1hSQU5HRV0gPSAnXicgKyBzcmNbR1RMVF0gKyAnXFxcXHMqJyArIHNyY1tYUkFOR0VQTEFJTl0gKyAnJCc7XG52YXIgWFJBTkdFTE9PU0UgPSBSKys7XG5zcmNbWFJBTkdFTE9PU0VdID0gJ14nICsgc3JjW0dUTFRdICsgJ1xcXFxzKicgKyBzcmNbWFJBTkdFUExBSU5MT09TRV0gKyAnJCc7XG5cbi8vIFRpbGRlIHJhbmdlcy5cbi8vIE1lYW5pbmcgaXMgXCJyZWFzb25hYmx5IGF0IG9yIGdyZWF0ZXIgdGhhblwiXG52YXIgTE9ORVRJTERFID0gUisrO1xuc3JjW0xPTkVUSUxERV0gPSAnKD86fj4/KSc7XG5cbnZhciBUSUxERVRSSU0gPSBSKys7XG5zcmNbVElMREVUUklNXSA9ICcoXFxcXHMqKScgKyBzcmNbTE9ORVRJTERFXSArICdcXFxccysnO1xucmVbVElMREVUUklNXSA9IG5ldyBSZWdFeHAoc3JjW1RJTERFVFJJTV0sICdnJyk7XG52YXIgdGlsZGVUcmltUmVwbGFjZSA9ICckMX4nO1xuXG52YXIgVElMREUgPSBSKys7XG5zcmNbVElMREVdID0gJ14nICsgc3JjW0xPTkVUSUxERV0gKyBzcmNbWFJBTkdFUExBSU5dICsgJyQnO1xudmFyIFRJTERFTE9PU0UgPSBSKys7XG5zcmNbVElMREVMT09TRV0gPSAnXicgKyBzcmNbTE9ORVRJTERFXSArIHNyY1tYUkFOR0VQTEFJTkxPT1NFXSArICckJztcblxuLy8gQ2FyZXQgcmFuZ2VzLlxuLy8gTWVhbmluZyBpcyBcImF0IGxlYXN0IGFuZCBiYWNrd2FyZHMgY29tcGF0aWJsZSB3aXRoXCJcbnZhciBMT05FQ0FSRVQgPSBSKys7XG5zcmNbTE9ORUNBUkVUXSA9ICcoPzpcXFxcXiknO1xuXG52YXIgQ0FSRVRUUklNID0gUisrO1xuc3JjW0NBUkVUVFJJTV0gPSAnKFxcXFxzKiknICsgc3JjW0xPTkVDQVJFVF0gKyAnXFxcXHMrJztcbnJlW0NBUkVUVFJJTV0gPSBuZXcgUmVnRXhwKHNyY1tDQVJFVFRSSU1dLCAnZycpO1xudmFyIGNhcmV0VHJpbVJlcGxhY2UgPSAnJDFeJztcblxudmFyIENBUkVUID0gUisrO1xuc3JjW0NBUkVUXSA9ICdeJyArIHNyY1tMT05FQ0FSRVRdICsgc3JjW1hSQU5HRVBMQUlOXSArICckJztcbnZhciBDQVJFVExPT1NFID0gUisrO1xuc3JjW0NBUkVUTE9PU0VdID0gJ14nICsgc3JjW0xPTkVDQVJFVF0gKyBzcmNbWFJBTkdFUExBSU5MT09TRV0gKyAnJCc7XG5cbi8vIEEgc2ltcGxlIGd0L2x0L2VxIHRoaW5nLCBvciBqdXN0IFwiXCIgdG8gaW5kaWNhdGUgXCJhbnkgdmVyc2lvblwiXG52YXIgQ09NUEFSQVRPUkxPT1NFID0gUisrO1xuc3JjW0NPTVBBUkFUT1JMT09TRV0gPSAnXicgKyBzcmNbR1RMVF0gKyAnXFxcXHMqKCcgKyBMT09TRVBMQUlOICsgJykkfF4kJztcbnZhciBDT01QQVJBVE9SID0gUisrO1xuc3JjW0NPTVBBUkFUT1JdID0gJ14nICsgc3JjW0dUTFRdICsgJ1xcXFxzKignICsgRlVMTFBMQUlOICsgJykkfF4kJztcblxuXG4vLyBBbiBleHByZXNzaW9uIHRvIHN0cmlwIGFueSB3aGl0ZXNwYWNlIGJldHdlZW4gdGhlIGd0bHQgYW5kIHRoZSB0aGluZ1xuLy8gaXQgbW9kaWZpZXMsIHNvIHRoYXQgYD4gMS4yLjNgID09PiBgPjEuMi4zYFxudmFyIENPTVBBUkFUT1JUUklNID0gUisrO1xuc3JjW0NPTVBBUkFUT1JUUklNXSA9ICcoXFxcXHMqKScgKyBzcmNbR1RMVF0gK1xuICAgICAgICAgICAgICAgICAgICAgICdcXFxccyooJyArIExPT1NFUExBSU4gKyAnfCcgKyBzcmNbWFJBTkdFUExBSU5dICsgJyknO1xuXG4vLyB0aGlzIG9uZSBoYXMgdG8gdXNlIHRoZSAvZyBmbGFnXG5yZVtDT01QQVJBVE9SVFJJTV0gPSBuZXcgUmVnRXhwKHNyY1tDT01QQVJBVE9SVFJJTV0sICdnJyk7XG52YXIgY29tcGFyYXRvclRyaW1SZXBsYWNlID0gJyQxJDIkMyc7XG5cblxuLy8gU29tZXRoaW5nIGxpa2UgYDEuMi4zIC0gMS4yLjRgXG4vLyBOb3RlIHRoYXQgdGhlc2UgYWxsIHVzZSB0aGUgbG9vc2UgZm9ybSwgYmVjYXVzZSB0aGV5J2xsIGJlXG4vLyBjaGVja2VkIGFnYWluc3QgZWl0aGVyIHRoZSBzdHJpY3Qgb3IgbG9vc2UgY29tcGFyYXRvciBmb3JtXG4vLyBsYXRlci5cbnZhciBIWVBIRU5SQU5HRSA9IFIrKztcbnNyY1tIWVBIRU5SQU5HRV0gPSAnXlxcXFxzKignICsgc3JjW1hSQU5HRVBMQUlOXSArICcpJyArXG4gICAgICAgICAgICAgICAgICAgJ1xcXFxzKy1cXFxccysnICtcbiAgICAgICAgICAgICAgICAgICAnKCcgKyBzcmNbWFJBTkdFUExBSU5dICsgJyknICtcbiAgICAgICAgICAgICAgICAgICAnXFxcXHMqJCc7XG5cbnZhciBIWVBIRU5SQU5HRUxPT1NFID0gUisrO1xuc3JjW0hZUEhFTlJBTkdFTE9PU0VdID0gJ15cXFxccyooJyArIHNyY1tYUkFOR0VQTEFJTkxPT1NFXSArICcpJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAnXFxcXHMrLVxcXFxzKycgK1xuICAgICAgICAgICAgICAgICAgICAgICAgJygnICsgc3JjW1hSQU5HRVBMQUlOTE9PU0VdICsgJyknICtcbiAgICAgICAgICAgICAgICAgICAgICAgICdcXFxccyokJztcblxuLy8gU3RhciByYW5nZXMgYmFzaWNhbGx5IGp1c3QgYWxsb3cgYW55dGhpbmcgYXQgYWxsLlxudmFyIFNUQVIgPSBSKys7XG5zcmNbU1RBUl0gPSAnKDx8Pik/PT9cXFxccypcXFxcKic7XG5cbi8vIENvbXBpbGUgdG8gYWN0dWFsIHJlZ2V4cCBvYmplY3RzLlxuLy8gQWxsIGFyZSBmbGFnLWZyZWUsIHVubGVzcyB0aGV5IHdlcmUgY3JlYXRlZCBhYm92ZSB3aXRoIGEgZmxhZy5cbmZvciAodmFyIGkgPSAwOyBpIDwgUjsgaSsrKSB7XG4gIGRlYnVnKGksIHNyY1tpXSk7XG4gIGlmICghcmVbaV0pXG4gICAgcmVbaV0gPSBuZXcgUmVnRXhwKHNyY1tpXSk7XG59XG5cbmV4cG9ydHMucGFyc2UgPSBwYXJzZTtcbmZ1bmN0aW9uIHBhcnNlKHZlcnNpb24sIGxvb3NlKSB7XG4gIGlmICh2ZXJzaW9uIGluc3RhbmNlb2YgU2VtVmVyKVxuICAgIHJldHVybiB2ZXJzaW9uO1xuXG4gIGlmICh0eXBlb2YgdmVyc2lvbiAhPT0gJ3N0cmluZycpXG4gICAgcmV0dXJuIG51bGw7XG5cbiAgaWYgKHZlcnNpb24ubGVuZ3RoID4gTUFYX0xFTkdUSClcbiAgICByZXR1cm4gbnVsbDtcblxuICB2YXIgciA9IGxvb3NlID8gcmVbTE9PU0VdIDogcmVbRlVMTF07XG4gIGlmICghci50ZXN0KHZlcnNpb24pKVxuICAgIHJldHVybiBudWxsO1xuXG4gIHRyeSB7XG4gICAgcmV0dXJuIG5ldyBTZW1WZXIodmVyc2lvbiwgbG9vc2UpO1xuICB9IGNhdGNoIChlcikge1xuICAgIHJldHVybiBudWxsO1xuICB9XG59XG5cbmV4cG9ydHMudmFsaWQgPSB2YWxpZDtcbmZ1bmN0aW9uIHZhbGlkKHZlcnNpb24sIGxvb3NlKSB7XG4gIHZhciB2ID0gcGFyc2UodmVyc2lvbiwgbG9vc2UpO1xuICByZXR1cm4gdiA/IHYudmVyc2lvbiA6IG51bGw7XG59XG5cblxuZXhwb3J0cy5jbGVhbiA9IGNsZWFuO1xuZnVuY3Rpb24gY2xlYW4odmVyc2lvbiwgbG9vc2UpIHtcbiAgdmFyIHMgPSBwYXJzZSh2ZXJzaW9uLnRyaW0oKS5yZXBsYWNlKC9eWz12XSsvLCAnJyksIGxvb3NlKTtcbiAgcmV0dXJuIHMgPyBzLnZlcnNpb24gOiBudWxsO1xufVxuXG5leHBvcnRzLlNlbVZlciA9IFNlbVZlcjtcblxuZnVuY3Rpb24gU2VtVmVyKHZlcnNpb24sIGxvb3NlKSB7XG4gIGlmICh2ZXJzaW9uIGluc3RhbmNlb2YgU2VtVmVyKSB7XG4gICAgaWYgKHZlcnNpb24ubG9vc2UgPT09IGxvb3NlKVxuICAgICAgcmV0dXJuIHZlcnNpb247XG4gICAgZWxzZVxuICAgICAgdmVyc2lvbiA9IHZlcnNpb24udmVyc2lvbjtcbiAgfSBlbHNlIGlmICh0eXBlb2YgdmVyc2lvbiAhPT0gJ3N0cmluZycpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdJbnZhbGlkIFZlcnNpb246ICcgKyB2ZXJzaW9uKTtcbiAgfVxuXG4gIGlmICh2ZXJzaW9uLmxlbmd0aCA+IE1BWF9MRU5HVEgpXG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcigndmVyc2lvbiBpcyBsb25nZXIgdGhhbiAnICsgTUFYX0xFTkdUSCArICcgY2hhcmFjdGVycycpXG5cbiAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIFNlbVZlcikpXG4gICAgcmV0dXJuIG5ldyBTZW1WZXIodmVyc2lvbiwgbG9vc2UpO1xuXG4gIGRlYnVnKCdTZW1WZXInLCB2ZXJzaW9uLCBsb29zZSk7XG4gIHRoaXMubG9vc2UgPSBsb29zZTtcbiAgdmFyIG0gPSB2ZXJzaW9uLnRyaW0oKS5tYXRjaChsb29zZSA/IHJlW0xPT1NFXSA6IHJlW0ZVTExdKTtcblxuICBpZiAoIW0pXG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignSW52YWxpZCBWZXJzaW9uOiAnICsgdmVyc2lvbik7XG5cbiAgdGhpcy5yYXcgPSB2ZXJzaW9uO1xuXG4gIC8vIHRoZXNlIGFyZSBhY3R1YWxseSBudW1iZXJzXG4gIHRoaXMubWFqb3IgPSArbVsxXTtcbiAgdGhpcy5taW5vciA9ICttWzJdO1xuICB0aGlzLnBhdGNoID0gK21bM107XG5cbiAgaWYgKHRoaXMubWFqb3IgPiBNQVhfU0FGRV9JTlRFR0VSIHx8IHRoaXMubWFqb3IgPCAwKVxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0ludmFsaWQgbWFqb3IgdmVyc2lvbicpXG5cbiAgaWYgKHRoaXMubWlub3IgPiBNQVhfU0FGRV9JTlRFR0VSIHx8IHRoaXMubWlub3IgPCAwKVxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0ludmFsaWQgbWlub3IgdmVyc2lvbicpXG5cbiAgaWYgKHRoaXMucGF0Y2ggPiBNQVhfU0FGRV9JTlRFR0VSIHx8IHRoaXMucGF0Y2ggPCAwKVxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0ludmFsaWQgcGF0Y2ggdmVyc2lvbicpXG5cbiAgLy8gbnVtYmVyaWZ5IGFueSBwcmVyZWxlYXNlIG51bWVyaWMgaWRzXG4gIGlmICghbVs0XSlcbiAgICB0aGlzLnByZXJlbGVhc2UgPSBbXTtcbiAgZWxzZVxuICAgIHRoaXMucHJlcmVsZWFzZSA9IG1bNF0uc3BsaXQoJy4nKS5tYXAoZnVuY3Rpb24oaWQpIHtcbiAgICAgIGlmICgvXlswLTldKyQvLnRlc3QoaWQpKSB7XG4gICAgICAgIHZhciBudW0gPSAraWRcbiAgICAgICAgaWYgKG51bSA+PSAwICYmIG51bSA8IE1BWF9TQUZFX0lOVEVHRVIpXG4gICAgICAgICAgcmV0dXJuIG51bVxuICAgICAgfVxuICAgICAgcmV0dXJuIGlkO1xuICAgIH0pO1xuXG4gIHRoaXMuYnVpbGQgPSBtWzVdID8gbVs1XS5zcGxpdCgnLicpIDogW107XG4gIHRoaXMuZm9ybWF0KCk7XG59XG5cblNlbVZlci5wcm90b3R5cGUuZm9ybWF0ID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMudmVyc2lvbiA9IHRoaXMubWFqb3IgKyAnLicgKyB0aGlzLm1pbm9yICsgJy4nICsgdGhpcy5wYXRjaDtcbiAgaWYgKHRoaXMucHJlcmVsZWFzZS5sZW5ndGgpXG4gICAgdGhpcy52ZXJzaW9uICs9ICctJyArIHRoaXMucHJlcmVsZWFzZS5qb2luKCcuJyk7XG4gIHJldHVybiB0aGlzLnZlcnNpb247XG59O1xuXG5TZW1WZXIucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0aGlzLnZlcnNpb247XG59O1xuXG5TZW1WZXIucHJvdG90eXBlLmNvbXBhcmUgPSBmdW5jdGlvbihvdGhlcikge1xuICBkZWJ1ZygnU2VtVmVyLmNvbXBhcmUnLCB0aGlzLnZlcnNpb24sIHRoaXMubG9vc2UsIG90aGVyKTtcbiAgaWYgKCEob3RoZXIgaW5zdGFuY2VvZiBTZW1WZXIpKVxuICAgIG90aGVyID0gbmV3IFNlbVZlcihvdGhlciwgdGhpcy5sb29zZSk7XG5cbiAgcmV0dXJuIHRoaXMuY29tcGFyZU1haW4ob3RoZXIpIHx8IHRoaXMuY29tcGFyZVByZShvdGhlcik7XG59O1xuXG5TZW1WZXIucHJvdG90eXBlLmNvbXBhcmVNYWluID0gZnVuY3Rpb24ob3RoZXIpIHtcbiAgaWYgKCEob3RoZXIgaW5zdGFuY2VvZiBTZW1WZXIpKVxuICAgIG90aGVyID0gbmV3IFNlbVZlcihvdGhlciwgdGhpcy5sb29zZSk7XG5cbiAgcmV0dXJuIGNvbXBhcmVJZGVudGlmaWVycyh0aGlzLm1ham9yLCBvdGhlci5tYWpvcikgfHxcbiAgICAgICAgIGNvbXBhcmVJZGVudGlmaWVycyh0aGlzLm1pbm9yLCBvdGhlci5taW5vcikgfHxcbiAgICAgICAgIGNvbXBhcmVJZGVudGlmaWVycyh0aGlzLnBhdGNoLCBvdGhlci5wYXRjaCk7XG59O1xuXG5TZW1WZXIucHJvdG90eXBlLmNvbXBhcmVQcmUgPSBmdW5jdGlvbihvdGhlcikge1xuICBpZiAoIShvdGhlciBpbnN0YW5jZW9mIFNlbVZlcikpXG4gICAgb3RoZXIgPSBuZXcgU2VtVmVyKG90aGVyLCB0aGlzLmxvb3NlKTtcblxuICAvLyBOT1QgaGF2aW5nIGEgcHJlcmVsZWFzZSBpcyA+IGhhdmluZyBvbmVcbiAgaWYgKHRoaXMucHJlcmVsZWFzZS5sZW5ndGggJiYgIW90aGVyLnByZXJlbGVhc2UubGVuZ3RoKVxuICAgIHJldHVybiAtMTtcbiAgZWxzZSBpZiAoIXRoaXMucHJlcmVsZWFzZS5sZW5ndGggJiYgb3RoZXIucHJlcmVsZWFzZS5sZW5ndGgpXG4gICAgcmV0dXJuIDE7XG4gIGVsc2UgaWYgKCF0aGlzLnByZXJlbGVhc2UubGVuZ3RoICYmICFvdGhlci5wcmVyZWxlYXNlLmxlbmd0aClcbiAgICByZXR1cm4gMDtcblxuICB2YXIgaSA9IDA7XG4gIGRvIHtcbiAgICB2YXIgYSA9IHRoaXMucHJlcmVsZWFzZVtpXTtcbiAgICB2YXIgYiA9IG90aGVyLnByZXJlbGVhc2VbaV07XG4gICAgZGVidWcoJ3ByZXJlbGVhc2UgY29tcGFyZScsIGksIGEsIGIpO1xuICAgIGlmIChhID09PSB1bmRlZmluZWQgJiYgYiA9PT0gdW5kZWZpbmVkKVxuICAgICAgcmV0dXJuIDA7XG4gICAgZWxzZSBpZiAoYiA9PT0gdW5kZWZpbmVkKVxuICAgICAgcmV0dXJuIDE7XG4gICAgZWxzZSBpZiAoYSA9PT0gdW5kZWZpbmVkKVxuICAgICAgcmV0dXJuIC0xO1xuICAgIGVsc2UgaWYgKGEgPT09IGIpXG4gICAgICBjb250aW51ZTtcbiAgICBlbHNlXG4gICAgICByZXR1cm4gY29tcGFyZUlkZW50aWZpZXJzKGEsIGIpO1xuICB9IHdoaWxlICgrK2kpO1xufTtcblxuLy8gcHJlbWlub3Igd2lsbCBidW1wIHRoZSB2ZXJzaW9uIHVwIHRvIHRoZSBuZXh0IG1pbm9yIHJlbGVhc2UsIGFuZCBpbW1lZGlhdGVseVxuLy8gZG93biB0byBwcmUtcmVsZWFzZS4gcHJlbWFqb3IgYW5kIHByZXBhdGNoIHdvcmsgdGhlIHNhbWUgd2F5LlxuU2VtVmVyLnByb3RvdHlwZS5pbmMgPSBmdW5jdGlvbihyZWxlYXNlLCBpZGVudGlmaWVyKSB7XG4gIHN3aXRjaCAocmVsZWFzZSkge1xuICAgIGNhc2UgJ3ByZW1ham9yJzpcbiAgICAgIHRoaXMucHJlcmVsZWFzZS5sZW5ndGggPSAwO1xuICAgICAgdGhpcy5wYXRjaCA9IDA7XG4gICAgICB0aGlzLm1pbm9yID0gMDtcbiAgICAgIHRoaXMubWFqb3IrKztcbiAgICAgIHRoaXMuaW5jKCdwcmUnLCBpZGVudGlmaWVyKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ3ByZW1pbm9yJzpcbiAgICAgIHRoaXMucHJlcmVsZWFzZS5sZW5ndGggPSAwO1xuICAgICAgdGhpcy5wYXRjaCA9IDA7XG4gICAgICB0aGlzLm1pbm9yKys7XG4gICAgICB0aGlzLmluYygncHJlJywgaWRlbnRpZmllcik7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdwcmVwYXRjaCc6XG4gICAgICAvLyBJZiB0aGlzIGlzIGFscmVhZHkgYSBwcmVyZWxlYXNlLCBpdCB3aWxsIGJ1bXAgdG8gdGhlIG5leHQgdmVyc2lvblxuICAgICAgLy8gZHJvcCBhbnkgcHJlcmVsZWFzZXMgdGhhdCBtaWdodCBhbHJlYWR5IGV4aXN0LCBzaW5jZSB0aGV5IGFyZSBub3RcbiAgICAgIC8vIHJlbGV2YW50IGF0IHRoaXMgcG9pbnQuXG4gICAgICB0aGlzLnByZXJlbGVhc2UubGVuZ3RoID0gMDtcbiAgICAgIHRoaXMuaW5jKCdwYXRjaCcsIGlkZW50aWZpZXIpO1xuICAgICAgdGhpcy5pbmMoJ3ByZScsIGlkZW50aWZpZXIpO1xuICAgICAgYnJlYWs7XG4gICAgLy8gSWYgdGhlIGlucHV0IGlzIGEgbm9uLXByZXJlbGVhc2UgdmVyc2lvbiwgdGhpcyBhY3RzIHRoZSBzYW1lIGFzXG4gICAgLy8gcHJlcGF0Y2guXG4gICAgY2FzZSAncHJlcmVsZWFzZSc6XG4gICAgICBpZiAodGhpcy5wcmVyZWxlYXNlLmxlbmd0aCA9PT0gMClcbiAgICAgICAgdGhpcy5pbmMoJ3BhdGNoJywgaWRlbnRpZmllcik7XG4gICAgICB0aGlzLmluYygncHJlJywgaWRlbnRpZmllcik7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgJ21ham9yJzpcbiAgICAgIC8vIElmIHRoaXMgaXMgYSBwcmUtbWFqb3IgdmVyc2lvbiwgYnVtcCB1cCB0byB0aGUgc2FtZSBtYWpvciB2ZXJzaW9uLlxuICAgICAgLy8gT3RoZXJ3aXNlIGluY3JlbWVudCBtYWpvci5cbiAgICAgIC8vIDEuMC4wLTUgYnVtcHMgdG8gMS4wLjBcbiAgICAgIC8vIDEuMS4wIGJ1bXBzIHRvIDIuMC4wXG4gICAgICBpZiAodGhpcy5taW5vciAhPT0gMCB8fCB0aGlzLnBhdGNoICE9PSAwIHx8IHRoaXMucHJlcmVsZWFzZS5sZW5ndGggPT09IDApXG4gICAgICAgIHRoaXMubWFqb3IrKztcbiAgICAgIHRoaXMubWlub3IgPSAwO1xuICAgICAgdGhpcy5wYXRjaCA9IDA7XG4gICAgICB0aGlzLnByZXJlbGVhc2UgPSBbXTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ21pbm9yJzpcbiAgICAgIC8vIElmIHRoaXMgaXMgYSBwcmUtbWlub3IgdmVyc2lvbiwgYnVtcCB1cCB0byB0aGUgc2FtZSBtaW5vciB2ZXJzaW9uLlxuICAgICAgLy8gT3RoZXJ3aXNlIGluY3JlbWVudCBtaW5vci5cbiAgICAgIC8vIDEuMi4wLTUgYnVtcHMgdG8gMS4yLjBcbiAgICAgIC8vIDEuMi4xIGJ1bXBzIHRvIDEuMy4wXG4gICAgICBpZiAodGhpcy5wYXRjaCAhPT0gMCB8fCB0aGlzLnByZXJlbGVhc2UubGVuZ3RoID09PSAwKVxuICAgICAgICB0aGlzLm1pbm9yKys7XG4gICAgICB0aGlzLnBhdGNoID0gMDtcbiAgICAgIHRoaXMucHJlcmVsZWFzZSA9IFtdO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAncGF0Y2gnOlxuICAgICAgLy8gSWYgdGhpcyBpcyBub3QgYSBwcmUtcmVsZWFzZSB2ZXJzaW9uLCBpdCB3aWxsIGluY3JlbWVudCB0aGUgcGF0Y2guXG4gICAgICAvLyBJZiBpdCBpcyBhIHByZS1yZWxlYXNlIGl0IHdpbGwgYnVtcCB1cCB0byB0aGUgc2FtZSBwYXRjaCB2ZXJzaW9uLlxuICAgICAgLy8gMS4yLjAtNSBwYXRjaGVzIHRvIDEuMi4wXG4gICAgICAvLyAxLjIuMCBwYXRjaGVzIHRvIDEuMi4xXG4gICAgICBpZiAodGhpcy5wcmVyZWxlYXNlLmxlbmd0aCA9PT0gMClcbiAgICAgICAgdGhpcy5wYXRjaCsrO1xuICAgICAgdGhpcy5wcmVyZWxlYXNlID0gW107XG4gICAgICBicmVhaztcbiAgICAvLyBUaGlzIHByb2JhYmx5IHNob3VsZG4ndCBiZSB1c2VkIHB1YmxpY2x5LlxuICAgIC8vIDEuMC4wIFwicHJlXCIgd291bGQgYmVjb21lIDEuMC4wLTAgd2hpY2ggaXMgdGhlIHdyb25nIGRpcmVjdGlvbi5cbiAgICBjYXNlICdwcmUnOlxuICAgICAgaWYgKHRoaXMucHJlcmVsZWFzZS5sZW5ndGggPT09IDApXG4gICAgICAgIHRoaXMucHJlcmVsZWFzZSA9IFswXTtcbiAgICAgIGVsc2Uge1xuICAgICAgICB2YXIgaSA9IHRoaXMucHJlcmVsZWFzZS5sZW5ndGg7XG4gICAgICAgIHdoaWxlICgtLWkgPj0gMCkge1xuICAgICAgICAgIGlmICh0eXBlb2YgdGhpcy5wcmVyZWxlYXNlW2ldID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgdGhpcy5wcmVyZWxlYXNlW2ldKys7XG4gICAgICAgICAgICBpID0gLTI7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChpID09PSAtMSkgLy8gZGlkbid0IGluY3JlbWVudCBhbnl0aGluZ1xuICAgICAgICAgIHRoaXMucHJlcmVsZWFzZS5wdXNoKDApO1xuICAgICAgfVxuICAgICAgaWYgKGlkZW50aWZpZXIpIHtcbiAgICAgICAgLy8gMS4yLjAtYmV0YS4xIGJ1bXBzIHRvIDEuMi4wLWJldGEuMixcbiAgICAgICAgLy8gMS4yLjAtYmV0YS5mb29ibHogb3IgMS4yLjAtYmV0YSBidW1wcyB0byAxLjIuMC1iZXRhLjBcbiAgICAgICAgaWYgKHRoaXMucHJlcmVsZWFzZVswXSA9PT0gaWRlbnRpZmllcikge1xuICAgICAgICAgIGlmIChpc05hTih0aGlzLnByZXJlbGVhc2VbMV0pKVxuICAgICAgICAgICAgdGhpcy5wcmVyZWxlYXNlID0gW2lkZW50aWZpZXIsIDBdO1xuICAgICAgICB9IGVsc2VcbiAgICAgICAgICB0aGlzLnByZXJlbGVhc2UgPSBbaWRlbnRpZmllciwgMF07XG4gICAgICB9XG4gICAgICBicmVhaztcblxuICAgIGRlZmF1bHQ6XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2ludmFsaWQgaW5jcmVtZW50IGFyZ3VtZW50OiAnICsgcmVsZWFzZSk7XG4gIH1cbiAgdGhpcy5mb3JtYXQoKTtcbiAgdGhpcy5yYXcgPSB0aGlzLnZlcnNpb247XG4gIHJldHVybiB0aGlzO1xufTtcblxuZXhwb3J0cy5pbmMgPSBpbmM7XG5mdW5jdGlvbiBpbmModmVyc2lvbiwgcmVsZWFzZSwgbG9vc2UsIGlkZW50aWZpZXIpIHtcbiAgaWYgKHR5cGVvZihsb29zZSkgPT09ICdzdHJpbmcnKSB7XG4gICAgaWRlbnRpZmllciA9IGxvb3NlO1xuICAgIGxvb3NlID0gdW5kZWZpbmVkO1xuICB9XG5cbiAgdHJ5IHtcbiAgICByZXR1cm4gbmV3IFNlbVZlcih2ZXJzaW9uLCBsb29zZSkuaW5jKHJlbGVhc2UsIGlkZW50aWZpZXIpLnZlcnNpb247XG4gIH0gY2F0Y2ggKGVyKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cblxuZXhwb3J0cy5kaWZmID0gZGlmZjtcbmZ1bmN0aW9uIGRpZmYodmVyc2lvbjEsIHZlcnNpb24yKSB7XG4gIGlmIChlcSh2ZXJzaW9uMSwgdmVyc2lvbjIpKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHYxID0gcGFyc2UodmVyc2lvbjEpO1xuICAgIHZhciB2MiA9IHBhcnNlKHZlcnNpb24yKTtcbiAgICBpZiAodjEucHJlcmVsZWFzZS5sZW5ndGggfHwgdjIucHJlcmVsZWFzZS5sZW5ndGgpIHtcbiAgICAgIGZvciAodmFyIGtleSBpbiB2MSkge1xuICAgICAgICBpZiAoa2V5ID09PSAnbWFqb3InIHx8IGtleSA9PT0gJ21pbm9yJyB8fCBrZXkgPT09ICdwYXRjaCcpIHtcbiAgICAgICAgICBpZiAodjFba2V5XSAhPT0gdjJba2V5XSkge1xuICAgICAgICAgICAgcmV0dXJuICdwcmUnK2tleTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiAncHJlcmVsZWFzZSc7XG4gICAgfVxuICAgIGZvciAodmFyIGtleSBpbiB2MSkge1xuICAgICAgaWYgKGtleSA9PT0gJ21ham9yJyB8fCBrZXkgPT09ICdtaW5vcicgfHwga2V5ID09PSAncGF0Y2gnKSB7XG4gICAgICAgIGlmICh2MVtrZXldICE9PSB2MltrZXldKSB7XG4gICAgICAgICAgcmV0dXJuIGtleTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnRzLmNvbXBhcmVJZGVudGlmaWVycyA9IGNvbXBhcmVJZGVudGlmaWVycztcblxudmFyIG51bWVyaWMgPSAvXlswLTldKyQvO1xuZnVuY3Rpb24gY29tcGFyZUlkZW50aWZpZXJzKGEsIGIpIHtcbiAgdmFyIGFudW0gPSBudW1lcmljLnRlc3QoYSk7XG4gIHZhciBibnVtID0gbnVtZXJpYy50ZXN0KGIpO1xuXG4gIGlmIChhbnVtICYmIGJudW0pIHtcbiAgICBhID0gK2E7XG4gICAgYiA9ICtiO1xuICB9XG5cbiAgcmV0dXJuIChhbnVtICYmICFibnVtKSA/IC0xIDpcbiAgICAgICAgIChibnVtICYmICFhbnVtKSA/IDEgOlxuICAgICAgICAgYSA8IGIgPyAtMSA6XG4gICAgICAgICBhID4gYiA/IDEgOlxuICAgICAgICAgMDtcbn1cblxuZXhwb3J0cy5yY29tcGFyZUlkZW50aWZpZXJzID0gcmNvbXBhcmVJZGVudGlmaWVycztcbmZ1bmN0aW9uIHJjb21wYXJlSWRlbnRpZmllcnMoYSwgYikge1xuICByZXR1cm4gY29tcGFyZUlkZW50aWZpZXJzKGIsIGEpO1xufVxuXG5leHBvcnRzLm1ham9yID0gbWFqb3I7XG5mdW5jdGlvbiBtYWpvcihhLCBsb29zZSkge1xuICByZXR1cm4gbmV3IFNlbVZlcihhLCBsb29zZSkubWFqb3I7XG59XG5cbmV4cG9ydHMubWlub3IgPSBtaW5vcjtcbmZ1bmN0aW9uIG1pbm9yKGEsIGxvb3NlKSB7XG4gIHJldHVybiBuZXcgU2VtVmVyKGEsIGxvb3NlKS5taW5vcjtcbn1cblxuZXhwb3J0cy5wYXRjaCA9IHBhdGNoO1xuZnVuY3Rpb24gcGF0Y2goYSwgbG9vc2UpIHtcbiAgcmV0dXJuIG5ldyBTZW1WZXIoYSwgbG9vc2UpLnBhdGNoO1xufVxuXG5leHBvcnRzLmNvbXBhcmUgPSBjb21wYXJlO1xuZnVuY3Rpb24gY29tcGFyZShhLCBiLCBsb29zZSkge1xuICByZXR1cm4gbmV3IFNlbVZlcihhLCBsb29zZSkuY29tcGFyZShiKTtcbn1cblxuZXhwb3J0cy5jb21wYXJlTG9vc2UgPSBjb21wYXJlTG9vc2U7XG5mdW5jdGlvbiBjb21wYXJlTG9vc2UoYSwgYikge1xuICByZXR1cm4gY29tcGFyZShhLCBiLCB0cnVlKTtcbn1cblxuZXhwb3J0cy5yY29tcGFyZSA9IHJjb21wYXJlO1xuZnVuY3Rpb24gcmNvbXBhcmUoYSwgYiwgbG9vc2UpIHtcbiAgcmV0dXJuIGNvbXBhcmUoYiwgYSwgbG9vc2UpO1xufVxuXG5leHBvcnRzLnNvcnQgPSBzb3J0O1xuZnVuY3Rpb24gc29ydChsaXN0LCBsb29zZSkge1xuICByZXR1cm4gbGlzdC5zb3J0KGZ1bmN0aW9uKGEsIGIpIHtcbiAgICByZXR1cm4gZXhwb3J0cy5jb21wYXJlKGEsIGIsIGxvb3NlKTtcbiAgfSk7XG59XG5cbmV4cG9ydHMucnNvcnQgPSByc29ydDtcbmZ1bmN0aW9uIHJzb3J0KGxpc3QsIGxvb3NlKSB7XG4gIHJldHVybiBsaXN0LnNvcnQoZnVuY3Rpb24oYSwgYikge1xuICAgIHJldHVybiBleHBvcnRzLnJjb21wYXJlKGEsIGIsIGxvb3NlKTtcbiAgfSk7XG59XG5cbmV4cG9ydHMuZ3QgPSBndDtcbmZ1bmN0aW9uIGd0KGEsIGIsIGxvb3NlKSB7XG4gIHJldHVybiBjb21wYXJlKGEsIGIsIGxvb3NlKSA+IDA7XG59XG5cbmV4cG9ydHMubHQgPSBsdDtcbmZ1bmN0aW9uIGx0KGEsIGIsIGxvb3NlKSB7XG4gIHJldHVybiBjb21wYXJlKGEsIGIsIGxvb3NlKSA8IDA7XG59XG5cbmV4cG9ydHMuZXEgPSBlcTtcbmZ1bmN0aW9uIGVxKGEsIGIsIGxvb3NlKSB7XG4gIHJldHVybiBjb21wYXJlKGEsIGIsIGxvb3NlKSA9PT0gMDtcbn1cblxuZXhwb3J0cy5uZXEgPSBuZXE7XG5mdW5jdGlvbiBuZXEoYSwgYiwgbG9vc2UpIHtcbiAgcmV0dXJuIGNvbXBhcmUoYSwgYiwgbG9vc2UpICE9PSAwO1xufVxuXG5leHBvcnRzLmd0ZSA9IGd0ZTtcbmZ1bmN0aW9uIGd0ZShhLCBiLCBsb29zZSkge1xuICByZXR1cm4gY29tcGFyZShhLCBiLCBsb29zZSkgPj0gMDtcbn1cblxuZXhwb3J0cy5sdGUgPSBsdGU7XG5mdW5jdGlvbiBsdGUoYSwgYiwgbG9vc2UpIHtcbiAgcmV0dXJuIGNvbXBhcmUoYSwgYiwgbG9vc2UpIDw9IDA7XG59XG5cbmV4cG9ydHMuY21wID0gY21wO1xuZnVuY3Rpb24gY21wKGEsIG9wLCBiLCBsb29zZSkge1xuICB2YXIgcmV0O1xuICBzd2l0Y2ggKG9wKSB7XG4gICAgY2FzZSAnPT09JzpcbiAgICAgIGlmICh0eXBlb2YgYSA9PT0gJ29iamVjdCcpIGEgPSBhLnZlcnNpb247XG4gICAgICBpZiAodHlwZW9mIGIgPT09ICdvYmplY3QnKSBiID0gYi52ZXJzaW9uO1xuICAgICAgcmV0ID0gYSA9PT0gYjtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJyE9PSc6XG4gICAgICBpZiAodHlwZW9mIGEgPT09ICdvYmplY3QnKSBhID0gYS52ZXJzaW9uO1xuICAgICAgaWYgKHR5cGVvZiBiID09PSAnb2JqZWN0JykgYiA9IGIudmVyc2lvbjtcbiAgICAgIHJldCA9IGEgIT09IGI7XG4gICAgICBicmVhaztcbiAgICBjYXNlICcnOiBjYXNlICc9JzogY2FzZSAnPT0nOiByZXQgPSBlcShhLCBiLCBsb29zZSk7IGJyZWFrO1xuICAgIGNhc2UgJyE9JzogcmV0ID0gbmVxKGEsIGIsIGxvb3NlKTsgYnJlYWs7XG4gICAgY2FzZSAnPic6IHJldCA9IGd0KGEsIGIsIGxvb3NlKTsgYnJlYWs7XG4gICAgY2FzZSAnPj0nOiByZXQgPSBndGUoYSwgYiwgbG9vc2UpOyBicmVhaztcbiAgICBjYXNlICc8JzogcmV0ID0gbHQoYSwgYiwgbG9vc2UpOyBicmVhaztcbiAgICBjYXNlICc8PSc6IHJldCA9IGx0ZShhLCBiLCBsb29zZSk7IGJyZWFrO1xuICAgIGRlZmF1bHQ6IHRocm93IG5ldyBUeXBlRXJyb3IoJ0ludmFsaWQgb3BlcmF0b3I6ICcgKyBvcCk7XG4gIH1cbiAgcmV0dXJuIHJldDtcbn1cblxuZXhwb3J0cy5Db21wYXJhdG9yID0gQ29tcGFyYXRvcjtcbmZ1bmN0aW9uIENvbXBhcmF0b3IoY29tcCwgbG9vc2UpIHtcbiAgaWYgKGNvbXAgaW5zdGFuY2VvZiBDb21wYXJhdG9yKSB7XG4gICAgaWYgKGNvbXAubG9vc2UgPT09IGxvb3NlKVxuICAgICAgcmV0dXJuIGNvbXA7XG4gICAgZWxzZVxuICAgICAgY29tcCA9IGNvbXAudmFsdWU7XG4gIH1cblxuICBpZiAoISh0aGlzIGluc3RhbmNlb2YgQ29tcGFyYXRvcikpXG4gICAgcmV0dXJuIG5ldyBDb21wYXJhdG9yKGNvbXAsIGxvb3NlKTtcblxuICBkZWJ1ZygnY29tcGFyYXRvcicsIGNvbXAsIGxvb3NlKTtcbiAgdGhpcy5sb29zZSA9IGxvb3NlO1xuICB0aGlzLnBhcnNlKGNvbXApO1xuXG4gIGlmICh0aGlzLnNlbXZlciA9PT0gQU5ZKVxuICAgIHRoaXMudmFsdWUgPSAnJztcbiAgZWxzZVxuICAgIHRoaXMudmFsdWUgPSB0aGlzLm9wZXJhdG9yICsgdGhpcy5zZW12ZXIudmVyc2lvbjtcblxuICBkZWJ1ZygnY29tcCcsIHRoaXMpO1xufVxuXG52YXIgQU5ZID0ge307XG5Db21wYXJhdG9yLnByb3RvdHlwZS5wYXJzZSA9IGZ1bmN0aW9uKGNvbXApIHtcbiAgdmFyIHIgPSB0aGlzLmxvb3NlID8gcmVbQ09NUEFSQVRPUkxPT1NFXSA6IHJlW0NPTVBBUkFUT1JdO1xuICB2YXIgbSA9IGNvbXAubWF0Y2gocik7XG5cbiAgaWYgKCFtKVxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0ludmFsaWQgY29tcGFyYXRvcjogJyArIGNvbXApO1xuXG4gIHRoaXMub3BlcmF0b3IgPSBtWzFdO1xuICBpZiAodGhpcy5vcGVyYXRvciA9PT0gJz0nKVxuICAgIHRoaXMub3BlcmF0b3IgPSAnJztcblxuICAvLyBpZiBpdCBsaXRlcmFsbHkgaXMganVzdCAnPicgb3IgJycgdGhlbiBhbGxvdyBhbnl0aGluZy5cbiAgaWYgKCFtWzJdKVxuICAgIHRoaXMuc2VtdmVyID0gQU5ZO1xuICBlbHNlXG4gICAgdGhpcy5zZW12ZXIgPSBuZXcgU2VtVmVyKG1bMl0sIHRoaXMubG9vc2UpO1xufTtcblxuQ29tcGFyYXRvci5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRoaXMudmFsdWU7XG59O1xuXG5Db21wYXJhdG9yLnByb3RvdHlwZS50ZXN0ID0gZnVuY3Rpb24odmVyc2lvbikge1xuICBkZWJ1ZygnQ29tcGFyYXRvci50ZXN0JywgdmVyc2lvbiwgdGhpcy5sb29zZSk7XG5cbiAgaWYgKHRoaXMuc2VtdmVyID09PSBBTlkpXG4gICAgcmV0dXJuIHRydWU7XG5cbiAgaWYgKHR5cGVvZiB2ZXJzaW9uID09PSAnc3RyaW5nJylcbiAgICB2ZXJzaW9uID0gbmV3IFNlbVZlcih2ZXJzaW9uLCB0aGlzLmxvb3NlKTtcblxuICByZXR1cm4gY21wKHZlcnNpb24sIHRoaXMub3BlcmF0b3IsIHRoaXMuc2VtdmVyLCB0aGlzLmxvb3NlKTtcbn07XG5cblxuZXhwb3J0cy5SYW5nZSA9IFJhbmdlO1xuZnVuY3Rpb24gUmFuZ2UocmFuZ2UsIGxvb3NlKSB7XG4gIGlmICgocmFuZ2UgaW5zdGFuY2VvZiBSYW5nZSkgJiYgcmFuZ2UubG9vc2UgPT09IGxvb3NlKVxuICAgIHJldHVybiByYW5nZTtcblxuICBpZiAoISh0aGlzIGluc3RhbmNlb2YgUmFuZ2UpKVxuICAgIHJldHVybiBuZXcgUmFuZ2UocmFuZ2UsIGxvb3NlKTtcblxuICB0aGlzLmxvb3NlID0gbG9vc2U7XG5cbiAgLy8gRmlyc3QsIHNwbGl0IGJhc2VkIG9uIGJvb2xlYW4gb3IgfHxcbiAgdGhpcy5yYXcgPSByYW5nZTtcbiAgdGhpcy5zZXQgPSByYW5nZS5zcGxpdCgvXFxzKlxcfFxcfFxccyovKS5tYXAoZnVuY3Rpb24ocmFuZ2UpIHtcbiAgICByZXR1cm4gdGhpcy5wYXJzZVJhbmdlKHJhbmdlLnRyaW0oKSk7XG4gIH0sIHRoaXMpLmZpbHRlcihmdW5jdGlvbihjKSB7XG4gICAgLy8gdGhyb3cgb3V0IGFueSB0aGF0IGFyZSBub3QgcmVsZXZhbnQgZm9yIHdoYXRldmVyIHJlYXNvblxuICAgIHJldHVybiBjLmxlbmd0aDtcbiAgfSk7XG5cbiAgaWYgKCF0aGlzLnNldC5sZW5ndGgpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdJbnZhbGlkIFNlbVZlciBSYW5nZTogJyArIHJhbmdlKTtcbiAgfVxuXG4gIHRoaXMuZm9ybWF0KCk7XG59XG5cblJhbmdlLnByb3RvdHlwZS5mb3JtYXQgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5yYW5nZSA9IHRoaXMuc2V0Lm1hcChmdW5jdGlvbihjb21wcykge1xuICAgIHJldHVybiBjb21wcy5qb2luKCcgJykudHJpbSgpO1xuICB9KS5qb2luKCd8fCcpLnRyaW0oKTtcbiAgcmV0dXJuIHRoaXMucmFuZ2U7XG59O1xuXG5SYW5nZS5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRoaXMucmFuZ2U7XG59O1xuXG5SYW5nZS5wcm90b3R5cGUucGFyc2VSYW5nZSA9IGZ1bmN0aW9uKHJhbmdlKSB7XG4gIHZhciBsb29zZSA9IHRoaXMubG9vc2U7XG4gIHJhbmdlID0gcmFuZ2UudHJpbSgpO1xuICBkZWJ1ZygncmFuZ2UnLCByYW5nZSwgbG9vc2UpO1xuICAvLyBgMS4yLjMgLSAxLjIuNGAgPT4gYD49MS4yLjMgPD0xLjIuNGBcbiAgdmFyIGhyID0gbG9vc2UgPyByZVtIWVBIRU5SQU5HRUxPT1NFXSA6IHJlW0hZUEhFTlJBTkdFXTtcbiAgcmFuZ2UgPSByYW5nZS5yZXBsYWNlKGhyLCBoeXBoZW5SZXBsYWNlKTtcbiAgZGVidWcoJ2h5cGhlbiByZXBsYWNlJywgcmFuZ2UpO1xuICAvLyBgPiAxLjIuMyA8IDEuMi41YCA9PiBgPjEuMi4zIDwxLjIuNWBcbiAgcmFuZ2UgPSByYW5nZS5yZXBsYWNlKHJlW0NPTVBBUkFUT1JUUklNXSwgY29tcGFyYXRvclRyaW1SZXBsYWNlKTtcbiAgZGVidWcoJ2NvbXBhcmF0b3IgdHJpbScsIHJhbmdlLCByZVtDT01QQVJBVE9SVFJJTV0pO1xuXG4gIC8vIGB+IDEuMi4zYCA9PiBgfjEuMi4zYFxuICByYW5nZSA9IHJhbmdlLnJlcGxhY2UocmVbVElMREVUUklNXSwgdGlsZGVUcmltUmVwbGFjZSk7XG5cbiAgLy8gYF4gMS4yLjNgID0+IGBeMS4yLjNgXG4gIHJhbmdlID0gcmFuZ2UucmVwbGFjZShyZVtDQVJFVFRSSU1dLCBjYXJldFRyaW1SZXBsYWNlKTtcblxuICAvLyBub3JtYWxpemUgc3BhY2VzXG4gIHJhbmdlID0gcmFuZ2Uuc3BsaXQoL1xccysvKS5qb2luKCcgJyk7XG5cbiAgLy8gQXQgdGhpcyBwb2ludCwgdGhlIHJhbmdlIGlzIGNvbXBsZXRlbHkgdHJpbW1lZCBhbmRcbiAgLy8gcmVhZHkgdG8gYmUgc3BsaXQgaW50byBjb21wYXJhdG9ycy5cblxuICB2YXIgY29tcFJlID0gbG9vc2UgPyByZVtDT01QQVJBVE9STE9PU0VdIDogcmVbQ09NUEFSQVRPUl07XG4gIHZhciBzZXQgPSByYW5nZS5zcGxpdCgnICcpLm1hcChmdW5jdGlvbihjb21wKSB7XG4gICAgcmV0dXJuIHBhcnNlQ29tcGFyYXRvcihjb21wLCBsb29zZSk7XG4gIH0pLmpvaW4oJyAnKS5zcGxpdCgvXFxzKy8pO1xuICBpZiAodGhpcy5sb29zZSkge1xuICAgIC8vIGluIGxvb3NlIG1vZGUsIHRocm93IG91dCBhbnkgdGhhdCBhcmUgbm90IHZhbGlkIGNvbXBhcmF0b3JzXG4gICAgc2V0ID0gc2V0LmZpbHRlcihmdW5jdGlvbihjb21wKSB7XG4gICAgICByZXR1cm4gISFjb21wLm1hdGNoKGNvbXBSZSk7XG4gICAgfSk7XG4gIH1cbiAgc2V0ID0gc2V0Lm1hcChmdW5jdGlvbihjb21wKSB7XG4gICAgcmV0dXJuIG5ldyBDb21wYXJhdG9yKGNvbXAsIGxvb3NlKTtcbiAgfSk7XG5cbiAgcmV0dXJuIHNldDtcbn07XG5cbi8vIE1vc3RseSBqdXN0IGZvciB0ZXN0aW5nIGFuZCBsZWdhY3kgQVBJIHJlYXNvbnNcbmV4cG9ydHMudG9Db21wYXJhdG9ycyA9IHRvQ29tcGFyYXRvcnM7XG5mdW5jdGlvbiB0b0NvbXBhcmF0b3JzKHJhbmdlLCBsb29zZSkge1xuICByZXR1cm4gbmV3IFJhbmdlKHJhbmdlLCBsb29zZSkuc2V0Lm1hcChmdW5jdGlvbihjb21wKSB7XG4gICAgcmV0dXJuIGNvbXAubWFwKGZ1bmN0aW9uKGMpIHtcbiAgICAgIHJldHVybiBjLnZhbHVlO1xuICAgIH0pLmpvaW4oJyAnKS50cmltKCkuc3BsaXQoJyAnKTtcbiAgfSk7XG59XG5cbi8vIGNvbXByaXNlZCBvZiB4cmFuZ2VzLCB0aWxkZXMsIHN0YXJzLCBhbmQgZ3RsdCdzIGF0IHRoaXMgcG9pbnQuXG4vLyBhbHJlYWR5IHJlcGxhY2VkIHRoZSBoeXBoZW4gcmFuZ2VzXG4vLyB0dXJuIGludG8gYSBzZXQgb2YgSlVTVCBjb21wYXJhdG9ycy5cbmZ1bmN0aW9uIHBhcnNlQ29tcGFyYXRvcihjb21wLCBsb29zZSkge1xuICBkZWJ1ZygnY29tcCcsIGNvbXApO1xuICBjb21wID0gcmVwbGFjZUNhcmV0cyhjb21wLCBsb29zZSk7XG4gIGRlYnVnKCdjYXJldCcsIGNvbXApO1xuICBjb21wID0gcmVwbGFjZVRpbGRlcyhjb21wLCBsb29zZSk7XG4gIGRlYnVnKCd0aWxkZXMnLCBjb21wKTtcbiAgY29tcCA9IHJlcGxhY2VYUmFuZ2VzKGNvbXAsIGxvb3NlKTtcbiAgZGVidWcoJ3hyYW5nZScsIGNvbXApO1xuICBjb21wID0gcmVwbGFjZVN0YXJzKGNvbXAsIGxvb3NlKTtcbiAgZGVidWcoJ3N0YXJzJywgY29tcCk7XG4gIHJldHVybiBjb21wO1xufVxuXG5mdW5jdGlvbiBpc1goaWQpIHtcbiAgcmV0dXJuICFpZCB8fCBpZC50b0xvd2VyQ2FzZSgpID09PSAneCcgfHwgaWQgPT09ICcqJztcbn1cblxuLy8gfiwgfj4gLS0+ICogKGFueSwga2luZGEgc2lsbHkpXG4vLyB+MiwgfjIueCwgfjIueC54LCB+PjIsIH4+Mi54IH4+Mi54LnggLS0+ID49Mi4wLjAgPDMuMC4wXG4vLyB+Mi4wLCB+Mi4wLngsIH4+Mi4wLCB+PjIuMC54IC0tPiA+PTIuMC4wIDwyLjEuMFxuLy8gfjEuMiwgfjEuMi54LCB+PjEuMiwgfj4xLjIueCAtLT4gPj0xLjIuMCA8MS4zLjBcbi8vIH4xLjIuMywgfj4xLjIuMyAtLT4gPj0xLjIuMyA8MS4zLjBcbi8vIH4xLjIuMCwgfj4xLjIuMCAtLT4gPj0xLjIuMCA8MS4zLjBcbmZ1bmN0aW9uIHJlcGxhY2VUaWxkZXMoY29tcCwgbG9vc2UpIHtcbiAgcmV0dXJuIGNvbXAudHJpbSgpLnNwbGl0KC9cXHMrLykubWFwKGZ1bmN0aW9uKGNvbXApIHtcbiAgICByZXR1cm4gcmVwbGFjZVRpbGRlKGNvbXAsIGxvb3NlKTtcbiAgfSkuam9pbignICcpO1xufVxuXG5mdW5jdGlvbiByZXBsYWNlVGlsZGUoY29tcCwgbG9vc2UpIHtcbiAgdmFyIHIgPSBsb29zZSA/IHJlW1RJTERFTE9PU0VdIDogcmVbVElMREVdO1xuICByZXR1cm4gY29tcC5yZXBsYWNlKHIsIGZ1bmN0aW9uKF8sIE0sIG0sIHAsIHByKSB7XG4gICAgZGVidWcoJ3RpbGRlJywgY29tcCwgXywgTSwgbSwgcCwgcHIpO1xuICAgIHZhciByZXQ7XG5cbiAgICBpZiAoaXNYKE0pKVxuICAgICAgcmV0ID0gJyc7XG4gICAgZWxzZSBpZiAoaXNYKG0pKVxuICAgICAgcmV0ID0gJz49JyArIE0gKyAnLjAuMCA8JyArICgrTSArIDEpICsgJy4wLjAnO1xuICAgIGVsc2UgaWYgKGlzWChwKSlcbiAgICAgIC8vIH4xLjIgPT0gPj0xLjIuMCA8MS4zLjBcbiAgICAgIHJldCA9ICc+PScgKyBNICsgJy4nICsgbSArICcuMCA8JyArIE0gKyAnLicgKyAoK20gKyAxKSArICcuMCc7XG4gICAgZWxzZSBpZiAocHIpIHtcbiAgICAgIGRlYnVnKCdyZXBsYWNlVGlsZGUgcHInLCBwcik7XG4gICAgICBpZiAocHIuY2hhckF0KDApICE9PSAnLScpXG4gICAgICAgIHByID0gJy0nICsgcHI7XG4gICAgICByZXQgPSAnPj0nICsgTSArICcuJyArIG0gKyAnLicgKyBwICsgcHIgK1xuICAgICAgICAgICAgJyA8JyArIE0gKyAnLicgKyAoK20gKyAxKSArICcuMCc7XG4gICAgfSBlbHNlXG4gICAgICAvLyB+MS4yLjMgPT0gPj0xLjIuMyA8MS4zLjBcbiAgICAgIHJldCA9ICc+PScgKyBNICsgJy4nICsgbSArICcuJyArIHAgK1xuICAgICAgICAgICAgJyA8JyArIE0gKyAnLicgKyAoK20gKyAxKSArICcuMCc7XG5cbiAgICBkZWJ1ZygndGlsZGUgcmV0dXJuJywgcmV0KTtcbiAgICByZXR1cm4gcmV0O1xuICB9KTtcbn1cblxuLy8gXiAtLT4gKiAoYW55LCBraW5kYSBzaWxseSlcbi8vIF4yLCBeMi54LCBeMi54LnggLS0+ID49Mi4wLjAgPDMuMC4wXG4vLyBeMi4wLCBeMi4wLnggLS0+ID49Mi4wLjAgPDMuMC4wXG4vLyBeMS4yLCBeMS4yLnggLS0+ID49MS4yLjAgPDIuMC4wXG4vLyBeMS4yLjMgLS0+ID49MS4yLjMgPDIuMC4wXG4vLyBeMS4yLjAgLS0+ID49MS4yLjAgPDIuMC4wXG5mdW5jdGlvbiByZXBsYWNlQ2FyZXRzKGNvbXAsIGxvb3NlKSB7XG4gIHJldHVybiBjb21wLnRyaW0oKS5zcGxpdCgvXFxzKy8pLm1hcChmdW5jdGlvbihjb21wKSB7XG4gICAgcmV0dXJuIHJlcGxhY2VDYXJldChjb21wLCBsb29zZSk7XG4gIH0pLmpvaW4oJyAnKTtcbn1cblxuZnVuY3Rpb24gcmVwbGFjZUNhcmV0KGNvbXAsIGxvb3NlKSB7XG4gIGRlYnVnKCdjYXJldCcsIGNvbXAsIGxvb3NlKTtcbiAgdmFyIHIgPSBsb29zZSA/IHJlW0NBUkVUTE9PU0VdIDogcmVbQ0FSRVRdO1xuICByZXR1cm4gY29tcC5yZXBsYWNlKHIsIGZ1bmN0aW9uKF8sIE0sIG0sIHAsIHByKSB7XG4gICAgZGVidWcoJ2NhcmV0JywgY29tcCwgXywgTSwgbSwgcCwgcHIpO1xuICAgIHZhciByZXQ7XG5cbiAgICBpZiAoaXNYKE0pKVxuICAgICAgcmV0ID0gJyc7XG4gICAgZWxzZSBpZiAoaXNYKG0pKVxuICAgICAgcmV0ID0gJz49JyArIE0gKyAnLjAuMCA8JyArICgrTSArIDEpICsgJy4wLjAnO1xuICAgIGVsc2UgaWYgKGlzWChwKSkge1xuICAgICAgaWYgKE0gPT09ICcwJylcbiAgICAgICAgcmV0ID0gJz49JyArIE0gKyAnLicgKyBtICsgJy4wIDwnICsgTSArICcuJyArICgrbSArIDEpICsgJy4wJztcbiAgICAgIGVsc2VcbiAgICAgICAgcmV0ID0gJz49JyArIE0gKyAnLicgKyBtICsgJy4wIDwnICsgKCtNICsgMSkgKyAnLjAuMCc7XG4gICAgfSBlbHNlIGlmIChwcikge1xuICAgICAgZGVidWcoJ3JlcGxhY2VDYXJldCBwcicsIHByKTtcbiAgICAgIGlmIChwci5jaGFyQXQoMCkgIT09ICctJylcbiAgICAgICAgcHIgPSAnLScgKyBwcjtcbiAgICAgIGlmIChNID09PSAnMCcpIHtcbiAgICAgICAgaWYgKG0gPT09ICcwJylcbiAgICAgICAgICByZXQgPSAnPj0nICsgTSArICcuJyArIG0gKyAnLicgKyBwICsgcHIgK1xuICAgICAgICAgICAgICAgICcgPCcgKyBNICsgJy4nICsgbSArICcuJyArICgrcCArIDEpO1xuICAgICAgICBlbHNlXG4gICAgICAgICAgcmV0ID0gJz49JyArIE0gKyAnLicgKyBtICsgJy4nICsgcCArIHByICtcbiAgICAgICAgICAgICAgICAnIDwnICsgTSArICcuJyArICgrbSArIDEpICsgJy4wJztcbiAgICAgIH0gZWxzZVxuICAgICAgICByZXQgPSAnPj0nICsgTSArICcuJyArIG0gKyAnLicgKyBwICsgcHIgK1xuICAgICAgICAgICAgICAnIDwnICsgKCtNICsgMSkgKyAnLjAuMCc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRlYnVnKCdubyBwcicpO1xuICAgICAgaWYgKE0gPT09ICcwJykge1xuICAgICAgICBpZiAobSA9PT0gJzAnKVxuICAgICAgICAgIHJldCA9ICc+PScgKyBNICsgJy4nICsgbSArICcuJyArIHAgK1xuICAgICAgICAgICAgICAgICcgPCcgKyBNICsgJy4nICsgbSArICcuJyArICgrcCArIDEpO1xuICAgICAgICBlbHNlXG4gICAgICAgICAgcmV0ID0gJz49JyArIE0gKyAnLicgKyBtICsgJy4nICsgcCArXG4gICAgICAgICAgICAgICAgJyA8JyArIE0gKyAnLicgKyAoK20gKyAxKSArICcuMCc7XG4gICAgICB9IGVsc2VcbiAgICAgICAgcmV0ID0gJz49JyArIE0gKyAnLicgKyBtICsgJy4nICsgcCArXG4gICAgICAgICAgICAgICcgPCcgKyAoK00gKyAxKSArICcuMC4wJztcbiAgICB9XG5cbiAgICBkZWJ1ZygnY2FyZXQgcmV0dXJuJywgcmV0KTtcbiAgICByZXR1cm4gcmV0O1xuICB9KTtcbn1cblxuZnVuY3Rpb24gcmVwbGFjZVhSYW5nZXMoY29tcCwgbG9vc2UpIHtcbiAgZGVidWcoJ3JlcGxhY2VYUmFuZ2VzJywgY29tcCwgbG9vc2UpO1xuICByZXR1cm4gY29tcC5zcGxpdCgvXFxzKy8pLm1hcChmdW5jdGlvbihjb21wKSB7XG4gICAgcmV0dXJuIHJlcGxhY2VYUmFuZ2UoY29tcCwgbG9vc2UpO1xuICB9KS5qb2luKCcgJyk7XG59XG5cbmZ1bmN0aW9uIHJlcGxhY2VYUmFuZ2UoY29tcCwgbG9vc2UpIHtcbiAgY29tcCA9IGNvbXAudHJpbSgpO1xuICB2YXIgciA9IGxvb3NlID8gcmVbWFJBTkdFTE9PU0VdIDogcmVbWFJBTkdFXTtcbiAgcmV0dXJuIGNvbXAucmVwbGFjZShyLCBmdW5jdGlvbihyZXQsIGd0bHQsIE0sIG0sIHAsIHByKSB7XG4gICAgZGVidWcoJ3hSYW5nZScsIGNvbXAsIHJldCwgZ3RsdCwgTSwgbSwgcCwgcHIpO1xuICAgIHZhciB4TSA9IGlzWChNKTtcbiAgICB2YXIgeG0gPSB4TSB8fCBpc1gobSk7XG4gICAgdmFyIHhwID0geG0gfHwgaXNYKHApO1xuICAgIHZhciBhbnlYID0geHA7XG5cbiAgICBpZiAoZ3RsdCA9PT0gJz0nICYmIGFueVgpXG4gICAgICBndGx0ID0gJyc7XG5cbiAgICBpZiAoeE0pIHtcbiAgICAgIGlmIChndGx0ID09PSAnPicgfHwgZ3RsdCA9PT0gJzwnKSB7XG4gICAgICAgIC8vIG5vdGhpbmcgaXMgYWxsb3dlZFxuICAgICAgICByZXQgPSAnPDAuMC4wJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIG5vdGhpbmcgaXMgZm9yYmlkZGVuXG4gICAgICAgIHJldCA9ICcqJztcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGd0bHQgJiYgYW55WCkge1xuICAgICAgLy8gcmVwbGFjZSBYIHdpdGggMFxuICAgICAgaWYgKHhtKVxuICAgICAgICBtID0gMDtcbiAgICAgIGlmICh4cClcbiAgICAgICAgcCA9IDA7XG5cbiAgICAgIGlmIChndGx0ID09PSAnPicpIHtcbiAgICAgICAgLy8gPjEgPT4gPj0yLjAuMFxuICAgICAgICAvLyA+MS4yID0+ID49MS4zLjBcbiAgICAgICAgLy8gPjEuMi4zID0+ID49IDEuMi40XG4gICAgICAgIGd0bHQgPSAnPj0nO1xuICAgICAgICBpZiAoeG0pIHtcbiAgICAgICAgICBNID0gK00gKyAxO1xuICAgICAgICAgIG0gPSAwO1xuICAgICAgICAgIHAgPSAwO1xuICAgICAgICB9IGVsc2UgaWYgKHhwKSB7XG4gICAgICAgICAgbSA9ICttICsgMTtcbiAgICAgICAgICBwID0gMDtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChndGx0ID09PSAnPD0nKSB7XG4gICAgICAgIC8vIDw9MC43LnggaXMgYWN0dWFsbHkgPDAuOC4wLCBzaW5jZSBhbnkgMC43Lnggc2hvdWxkXG4gICAgICAgIC8vIHBhc3MuICBTaW1pbGFybHksIDw9Ny54IGlzIGFjdHVhbGx5IDw4LjAuMCwgZXRjLlxuICAgICAgICBndGx0ID0gJzwnXG4gICAgICAgIGlmICh4bSlcbiAgICAgICAgICBNID0gK00gKyAxXG4gICAgICAgIGVsc2VcbiAgICAgICAgICBtID0gK20gKyAxXG4gICAgICB9XG5cbiAgICAgIHJldCA9IGd0bHQgKyBNICsgJy4nICsgbSArICcuJyArIHA7XG4gICAgfSBlbHNlIGlmICh4bSkge1xuICAgICAgcmV0ID0gJz49JyArIE0gKyAnLjAuMCA8JyArICgrTSArIDEpICsgJy4wLjAnO1xuICAgIH0gZWxzZSBpZiAoeHApIHtcbiAgICAgIHJldCA9ICc+PScgKyBNICsgJy4nICsgbSArICcuMCA8JyArIE0gKyAnLicgKyAoK20gKyAxKSArICcuMCc7XG4gICAgfVxuXG4gICAgZGVidWcoJ3hSYW5nZSByZXR1cm4nLCByZXQpO1xuXG4gICAgcmV0dXJuIHJldDtcbiAgfSk7XG59XG5cbi8vIEJlY2F1c2UgKiBpcyBBTkQtZWQgd2l0aCBldmVyeXRoaW5nIGVsc2UgaW4gdGhlIGNvbXBhcmF0b3IsXG4vLyBhbmQgJycgbWVhbnMgXCJhbnkgdmVyc2lvblwiLCBqdXN0IHJlbW92ZSB0aGUgKnMgZW50aXJlbHkuXG5mdW5jdGlvbiByZXBsYWNlU3RhcnMoY29tcCwgbG9vc2UpIHtcbiAgZGVidWcoJ3JlcGxhY2VTdGFycycsIGNvbXAsIGxvb3NlKTtcbiAgLy8gTG9vc2VuZXNzIGlzIGlnbm9yZWQgaGVyZS4gIHN0YXIgaXMgYWx3YXlzIGFzIGxvb3NlIGFzIGl0IGdldHMhXG4gIHJldHVybiBjb21wLnRyaW0oKS5yZXBsYWNlKHJlW1NUQVJdLCAnJyk7XG59XG5cbi8vIFRoaXMgZnVuY3Rpb24gaXMgcGFzc2VkIHRvIHN0cmluZy5yZXBsYWNlKHJlW0hZUEhFTlJBTkdFXSlcbi8vIE0sIG0sIHBhdGNoLCBwcmVyZWxlYXNlLCBidWlsZFxuLy8gMS4yIC0gMy40LjUgPT4gPj0xLjIuMCA8PTMuNC41XG4vLyAxLjIuMyAtIDMuNCA9PiA+PTEuMi4wIDwzLjUuMCBBbnkgMy40Lnggd2lsbCBkb1xuLy8gMS4yIC0gMy40ID0+ID49MS4yLjAgPDMuNS4wXG5mdW5jdGlvbiBoeXBoZW5SZXBsYWNlKCQwLFxuICAgICAgICAgICAgICAgICAgICAgICBmcm9tLCBmTSwgZm0sIGZwLCBmcHIsIGZiLFxuICAgICAgICAgICAgICAgICAgICAgICB0bywgdE0sIHRtLCB0cCwgdHByLCB0Yikge1xuXG4gIGlmIChpc1goZk0pKVxuICAgIGZyb20gPSAnJztcbiAgZWxzZSBpZiAoaXNYKGZtKSlcbiAgICBmcm9tID0gJz49JyArIGZNICsgJy4wLjAnO1xuICBlbHNlIGlmIChpc1goZnApKVxuICAgIGZyb20gPSAnPj0nICsgZk0gKyAnLicgKyBmbSArICcuMCc7XG4gIGVsc2VcbiAgICBmcm9tID0gJz49JyArIGZyb207XG5cbiAgaWYgKGlzWCh0TSkpXG4gICAgdG8gPSAnJztcbiAgZWxzZSBpZiAoaXNYKHRtKSlcbiAgICB0byA9ICc8JyArICgrdE0gKyAxKSArICcuMC4wJztcbiAgZWxzZSBpZiAoaXNYKHRwKSlcbiAgICB0byA9ICc8JyArIHRNICsgJy4nICsgKCt0bSArIDEpICsgJy4wJztcbiAgZWxzZSBpZiAodHByKVxuICAgIHRvID0gJzw9JyArIHRNICsgJy4nICsgdG0gKyAnLicgKyB0cCArICctJyArIHRwcjtcbiAgZWxzZVxuICAgIHRvID0gJzw9JyArIHRvO1xuXG4gIHJldHVybiAoZnJvbSArICcgJyArIHRvKS50cmltKCk7XG59XG5cblxuLy8gaWYgQU5ZIG9mIHRoZSBzZXRzIG1hdGNoIEFMTCBvZiBpdHMgY29tcGFyYXRvcnMsIHRoZW4gcGFzc1xuUmFuZ2UucHJvdG90eXBlLnRlc3QgPSBmdW5jdGlvbih2ZXJzaW9uKSB7XG4gIGlmICghdmVyc2lvbilcbiAgICByZXR1cm4gZmFsc2U7XG5cbiAgaWYgKHR5cGVvZiB2ZXJzaW9uID09PSAnc3RyaW5nJylcbiAgICB2ZXJzaW9uID0gbmV3IFNlbVZlcih2ZXJzaW9uLCB0aGlzLmxvb3NlKTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuc2V0Lmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHRlc3RTZXQodGhpcy5zZXRbaV0sIHZlcnNpb24pKVxuICAgICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuZnVuY3Rpb24gdGVzdFNldChzZXQsIHZlcnNpb24pIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzZXQubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoIXNldFtpXS50ZXN0KHZlcnNpb24pKVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYgKHZlcnNpb24ucHJlcmVsZWFzZS5sZW5ndGgpIHtcbiAgICAvLyBGaW5kIHRoZSBzZXQgb2YgdmVyc2lvbnMgdGhhdCBhcmUgYWxsb3dlZCB0byBoYXZlIHByZXJlbGVhc2VzXG4gICAgLy8gRm9yIGV4YW1wbGUsIF4xLjIuMy1wci4xIGRlc3VnYXJzIHRvID49MS4yLjMtcHIuMSA8Mi4wLjBcbiAgICAvLyBUaGF0IHNob3VsZCBhbGxvdyBgMS4yLjMtcHIuMmAgdG8gcGFzcy5cbiAgICAvLyBIb3dldmVyLCBgMS4yLjQtYWxwaGEubm90cmVhZHlgIHNob3VsZCBOT1QgYmUgYWxsb3dlZCxcbiAgICAvLyBldmVuIHRob3VnaCBpdCdzIHdpdGhpbiB0aGUgcmFuZ2Ugc2V0IGJ5IHRoZSBjb21wYXJhdG9ycy5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNldC5sZW5ndGg7IGkrKykge1xuICAgICAgZGVidWcoc2V0W2ldLnNlbXZlcik7XG4gICAgICBpZiAoc2V0W2ldLnNlbXZlciA9PT0gQU5ZKVxuICAgICAgICBjb250aW51ZTtcblxuICAgICAgaWYgKHNldFtpXS5zZW12ZXIucHJlcmVsZWFzZS5sZW5ndGggPiAwKSB7XG4gICAgICAgIHZhciBhbGxvd2VkID0gc2V0W2ldLnNlbXZlcjtcbiAgICAgICAgaWYgKGFsbG93ZWQubWFqb3IgPT09IHZlcnNpb24ubWFqb3IgJiZcbiAgICAgICAgICAgIGFsbG93ZWQubWlub3IgPT09IHZlcnNpb24ubWlub3IgJiZcbiAgICAgICAgICAgIGFsbG93ZWQucGF0Y2ggPT09IHZlcnNpb24ucGF0Y2gpXG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gVmVyc2lvbiBoYXMgYSAtcHJlLCBidXQgaXQncyBub3Qgb25lIG9mIHRoZSBvbmVzIHdlIGxpa2UuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59XG5cbmV4cG9ydHMuc2F0aXNmaWVzID0gc2F0aXNmaWVzO1xuZnVuY3Rpb24gc2F0aXNmaWVzKHZlcnNpb24sIHJhbmdlLCBsb29zZSkge1xuICB0cnkge1xuICAgIHJhbmdlID0gbmV3IFJhbmdlKHJhbmdlLCBsb29zZSk7XG4gIH0gY2F0Y2ggKGVyKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHJldHVybiByYW5nZS50ZXN0KHZlcnNpb24pO1xufVxuXG5leHBvcnRzLm1heFNhdGlzZnlpbmcgPSBtYXhTYXRpc2Z5aW5nO1xuZnVuY3Rpb24gbWF4U2F0aXNmeWluZyh2ZXJzaW9ucywgcmFuZ2UsIGxvb3NlKSB7XG4gIHJldHVybiB2ZXJzaW9ucy5maWx0ZXIoZnVuY3Rpb24odmVyc2lvbikge1xuICAgIHJldHVybiBzYXRpc2ZpZXModmVyc2lvbiwgcmFuZ2UsIGxvb3NlKTtcbiAgfSkuc29ydChmdW5jdGlvbihhLCBiKSB7XG4gICAgcmV0dXJuIHJjb21wYXJlKGEsIGIsIGxvb3NlKTtcbiAgfSlbMF0gfHwgbnVsbDtcbn1cblxuZXhwb3J0cy52YWxpZFJhbmdlID0gdmFsaWRSYW5nZTtcbmZ1bmN0aW9uIHZhbGlkUmFuZ2UocmFuZ2UsIGxvb3NlKSB7XG4gIHRyeSB7XG4gICAgLy8gUmV0dXJuICcqJyBpbnN0ZWFkIG9mICcnIHNvIHRoYXQgdHJ1dGhpbmVzcyB3b3Jrcy5cbiAgICAvLyBUaGlzIHdpbGwgdGhyb3cgaWYgaXQncyBpbnZhbGlkIGFueXdheVxuICAgIHJldHVybiBuZXcgUmFuZ2UocmFuZ2UsIGxvb3NlKS5yYW5nZSB8fCAnKic7XG4gIH0gY2F0Y2ggKGVyKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cblxuLy8gRGV0ZXJtaW5lIGlmIHZlcnNpb24gaXMgbGVzcyB0aGFuIGFsbCB0aGUgdmVyc2lvbnMgcG9zc2libGUgaW4gdGhlIHJhbmdlXG5leHBvcnRzLmx0ciA9IGx0cjtcbmZ1bmN0aW9uIGx0cih2ZXJzaW9uLCByYW5nZSwgbG9vc2UpIHtcbiAgcmV0dXJuIG91dHNpZGUodmVyc2lvbiwgcmFuZ2UsICc8JywgbG9vc2UpO1xufVxuXG4vLyBEZXRlcm1pbmUgaWYgdmVyc2lvbiBpcyBncmVhdGVyIHRoYW4gYWxsIHRoZSB2ZXJzaW9ucyBwb3NzaWJsZSBpbiB0aGUgcmFuZ2UuXG5leHBvcnRzLmd0ciA9IGd0cjtcbmZ1bmN0aW9uIGd0cih2ZXJzaW9uLCByYW5nZSwgbG9vc2UpIHtcbiAgcmV0dXJuIG91dHNpZGUodmVyc2lvbiwgcmFuZ2UsICc+JywgbG9vc2UpO1xufVxuXG5leHBvcnRzLm91dHNpZGUgPSBvdXRzaWRlO1xuZnVuY3Rpb24gb3V0c2lkZSh2ZXJzaW9uLCByYW5nZSwgaGlsbywgbG9vc2UpIHtcbiAgdmVyc2lvbiA9IG5ldyBTZW1WZXIodmVyc2lvbiwgbG9vc2UpO1xuICByYW5nZSA9IG5ldyBSYW5nZShyYW5nZSwgbG9vc2UpO1xuXG4gIHZhciBndGZuLCBsdGVmbiwgbHRmbiwgY29tcCwgZWNvbXA7XG4gIHN3aXRjaCAoaGlsbykge1xuICAgIGNhc2UgJz4nOlxuICAgICAgZ3RmbiA9IGd0O1xuICAgICAgbHRlZm4gPSBsdGU7XG4gICAgICBsdGZuID0gbHQ7XG4gICAgICBjb21wID0gJz4nO1xuICAgICAgZWNvbXAgPSAnPj0nO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnPCc6XG4gICAgICBndGZuID0gbHQ7XG4gICAgICBsdGVmbiA9IGd0ZTtcbiAgICAgIGx0Zm4gPSBndDtcbiAgICAgIGNvbXAgPSAnPCc7XG4gICAgICBlY29tcCA9ICc8PSc7XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignTXVzdCBwcm92aWRlIGEgaGlsbyB2YWwgb2YgXCI8XCIgb3IgXCI+XCInKTtcbiAgfVxuXG4gIC8vIElmIGl0IHNhdGlzaWZlcyB0aGUgcmFuZ2UgaXQgaXMgbm90IG91dHNpZGVcbiAgaWYgKHNhdGlzZmllcyh2ZXJzaW9uLCByYW5nZSwgbG9vc2UpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLy8gRnJvbSBub3cgb24sIHZhcmlhYmxlIHRlcm1zIGFyZSBhcyBpZiB3ZSdyZSBpbiBcImd0clwiIG1vZGUuXG4gIC8vIGJ1dCBub3RlIHRoYXQgZXZlcnl0aGluZyBpcyBmbGlwcGVkIGZvciB0aGUgXCJsdHJcIiBmdW5jdGlvbi5cblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHJhbmdlLnNldC5sZW5ndGg7ICsraSkge1xuICAgIHZhciBjb21wYXJhdG9ycyA9IHJhbmdlLnNldFtpXTtcblxuICAgIHZhciBoaWdoID0gbnVsbDtcbiAgICB2YXIgbG93ID0gbnVsbDtcblxuICAgIGNvbXBhcmF0b3JzLmZvckVhY2goZnVuY3Rpb24oY29tcGFyYXRvcikge1xuICAgICAgaWYgKGNvbXBhcmF0b3Iuc2VtdmVyID09PSBBTlkpIHtcbiAgICAgICAgY29tcGFyYXRvciA9IG5ldyBDb21wYXJhdG9yKCc+PTAuMC4wJylcbiAgICAgIH1cbiAgICAgIGhpZ2ggPSBoaWdoIHx8IGNvbXBhcmF0b3I7XG4gICAgICBsb3cgPSBsb3cgfHwgY29tcGFyYXRvcjtcbiAgICAgIGlmIChndGZuKGNvbXBhcmF0b3Iuc2VtdmVyLCBoaWdoLnNlbXZlciwgbG9vc2UpKSB7XG4gICAgICAgIGhpZ2ggPSBjb21wYXJhdG9yO1xuICAgICAgfSBlbHNlIGlmIChsdGZuKGNvbXBhcmF0b3Iuc2VtdmVyLCBsb3cuc2VtdmVyLCBsb29zZSkpIHtcbiAgICAgICAgbG93ID0gY29tcGFyYXRvcjtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIElmIHRoZSBlZGdlIHZlcnNpb24gY29tcGFyYXRvciBoYXMgYSBvcGVyYXRvciB0aGVuIG91ciB2ZXJzaW9uXG4gICAgLy8gaXNuJ3Qgb3V0c2lkZSBpdFxuICAgIGlmIChoaWdoLm9wZXJhdG9yID09PSBjb21wIHx8IGhpZ2gub3BlcmF0b3IgPT09IGVjb21wKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIGxvd2VzdCB2ZXJzaW9uIGNvbXBhcmF0b3IgaGFzIGFuIG9wZXJhdG9yIGFuZCBvdXIgdmVyc2lvblxuICAgIC8vIGlzIGxlc3MgdGhhbiBpdCB0aGVuIGl0IGlzbid0IGhpZ2hlciB0aGFuIHRoZSByYW5nZVxuICAgIGlmICgoIWxvdy5vcGVyYXRvciB8fCBsb3cub3BlcmF0b3IgPT09IGNvbXApICYmXG4gICAgICAgIGx0ZWZuKHZlcnNpb24sIGxvdy5zZW12ZXIpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSBlbHNlIGlmIChsb3cub3BlcmF0b3IgPT09IGVjb21wICYmIGx0Zm4odmVyc2lvbiwgbG93LnNlbXZlcikpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59XG5cbmV4cG9ydHMucHJlcmVsZWFzZSA9IHByZXJlbGVhc2U7XG5mdW5jdGlvbiBwcmVyZWxlYXNlKHZlcnNpb24sIGxvb3NlKSB7XG4gIHZhciBwYXJzZWQgPSBwYXJzZSh2ZXJzaW9uLCBsb29zZSk7XG4gIHJldHVybiAocGFyc2VkICYmIHBhcnNlZC5wcmVyZWxlYXNlLmxlbmd0aCkgPyBwYXJzZWQucHJlcmVsZWFzZSA6IG51bGw7XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vLm5wbWluc3RhbGwvc2VtdmVyLzUuMi4wL3NlbXZlci9zZW12ZXIuanNcbiAqKi8iLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcblxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG4vLyBjYWNoZWQgZnJvbSB3aGF0ZXZlciBnbG9iYWwgaXMgcHJlc2VudCBzbyB0aGF0IHRlc3QgcnVubmVycyB0aGF0IHN0dWIgaXRcbi8vIGRvbid0IGJyZWFrIHRoaW5ncy4gIEJ1dCB3ZSBuZWVkIHRvIHdyYXAgaXQgaW4gYSB0cnkgY2F0Y2ggaW4gY2FzZSBpdCBpc1xuLy8gd3JhcHBlZCBpbiBzdHJpY3QgbW9kZSBjb2RlIHdoaWNoIGRvZXNuJ3QgZGVmaW5lIGFueSBnbG9iYWxzLiAgSXQncyBpbnNpZGUgYVxuLy8gZnVuY3Rpb24gYmVjYXVzZSB0cnkvY2F0Y2hlcyBkZW9wdGltaXplIGluIGNlcnRhaW4gZW5naW5lcy5cblxudmFyIGNhY2hlZFNldFRpbWVvdXQ7XG52YXIgY2FjaGVkQ2xlYXJUaW1lb3V0O1xuXG4oZnVuY3Rpb24gKCkge1xuICB0cnkge1xuICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICB9IGNhdGNoIChlKSB7XG4gICAgY2FjaGVkU2V0VGltZW91dCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignc2V0VGltZW91dCBpcyBub3QgZGVmaW5lZCcpO1xuICAgIH1cbiAgfVxuICB0cnkge1xuICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgfSBjYXRjaCAoZSkge1xuICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignY2xlYXJUaW1lb3V0IGlzIG5vdCBkZWZpbmVkJyk7XG4gICAgfVxuICB9XG59ICgpKVxudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgaWYgKCFkcmFpbmluZyB8fCAhY3VycmVudFF1ZXVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gY2FjaGVkU2V0VGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgY2FjaGVkQ2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dChkcmFpblF1ZXVlLCAwKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi8ubnBtaW5zdGFsbC9wcm9jZXNzLzAuMTEuNS9wcm9jZXNzL2Jyb3dzZXIuanNcbiAqKi8iLCIvKipcbiAqIEBmaWxlT3ZlcnZpZXdcbiAqIFZpZXdNb2RlbCBDb25zdHJ1Y3RvciAmIGRlZmluaXRpb25cbiAqL1xuXG5pbXBvcnQgeyBleHRlbmQgfSBmcm9tICcuLi91dGlsJ1xuaW1wb3J0IHtcbiAgaW5pdFN0YXRlXG59IGZyb20gJy4uL2NvcmUvc3RhdGUnXG5pbXBvcnQge1xuICBidWlsZFxufSBmcm9tICcuL2NvbXBpbGVyJ1xuaW1wb3J0IHtcbiAgaW5pdEV2ZW50cyxcbiAgbWl4aW5FdmVudHNcbn0gZnJvbSAnLi9ldmVudHMnXG5pbXBvcnQge1xuICByZWdpc3Rlck1vZHVsZXMsXG4gIHJlZ2lzdGVyTWV0aG9kc1xufSBmcm9tICcuLi9hcHAvcmVnaXN0ZXInXG5cbi8qKlxuICogVmlld01vZGVsIGNvbnN0cnVjdG9yXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHR5cGVcbiAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zICAgIGNvbXBvbmVudCBvcHRpb25zXG4gKiBAcGFyYW0ge29iamVjdH0gcGFyZW50Vm0gICB3aGljaCBjb250YWlucyBfYXBwXG4gKiBAcGFyYW0ge29iamVjdH0gcGFyZW50RWwgICByb290IGVsZW1lbnQgb3IgZnJhZyBibG9ja1xuICogQHBhcmFtIHtvYmplY3R9IG1lcmdlZERhdGEgZXh0ZXJuYWwgZGF0YVxuICogQHBhcmFtIHtvYmplY3R9IGV4dGVybmFsRXZlbnRzIGV4dGVybmFsIGV2ZW50c1xuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBWbSAoXG4gIHR5cGUsXG4gIG9wdGlvbnMsXG4gIHBhcmVudFZtLFxuICBwYXJlbnRFbCxcbiAgbWVyZ2VkRGF0YSxcbiAgZXh0ZXJuYWxFdmVudHNcbikge1xuICB0aGlzLl9wYXJlbnQgPSBwYXJlbnRWbS5fcmVhbFBhcmVudCA/IHBhcmVudFZtLl9yZWFsUGFyZW50IDogcGFyZW50Vm1cbiAgdGhpcy5fYXBwID0gcGFyZW50Vm0uX2FwcFxuICBwYXJlbnRWbS5fY2hpbGRyZW5WbXMgJiYgcGFyZW50Vm0uX2NoaWxkcmVuVm1zLnB1c2godGhpcylcblxuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0gdGhpcy5fYXBwLmN1c3RvbUNvbXBvbmVudE1hcFt0eXBlXSB8fCB7fVxuICB9XG4gIGNvbnN0IGRhdGEgPSBvcHRpb25zLmRhdGEgfHwge31cblxuICB0aGlzLl9vcHRpb25zID0gb3B0aW9uc1xuICB0aGlzLl9tZXRob2RzID0gb3B0aW9ucy5tZXRob2RzIHx8IHt9XG4gIHRoaXMuX2NvbXB1dGVkID0gb3B0aW9ucy5jb21wdXRlZCB8fCB7fVxuICB0aGlzLl9jc3MgPSBvcHRpb25zLnN0eWxlIHx8IHt9XG4gIHRoaXMuX2lkcyA9IHt9XG4gIHRoaXMuX3ZtRXZlbnRzID0ge31cbiAgdGhpcy5fY2hpbGRyZW5WbXMgPSBbXVxuICB0aGlzLl90eXBlID0gdHlwZVxuXG4gIC8vIGJpbmQgZXZlbnRzIGFuZCBsaWZlY3ljbGVzXG4gIGluaXRFdmVudHModGhpcywgZXh0ZXJuYWxFdmVudHMpXG5cbiAgY29uc29sZS5kZWJ1ZyhgW0pTIEZyYW1ld29ya10gXCJpbml0XCIgbGlmZWN5Y2xlIGluIFZtKCR7dGhpcy5fdHlwZX0pYClcbiAgdGhpcy4kZW1pdCgnaG9vazppbml0JylcbiAgdGhpcy5faW5pdGVkID0gdHJ1ZVxuXG4gIC8vIHByb3h5IGRhdGEgYW5kIG1ldGhvZHNcbiAgLy8gb2JzZXJ2ZSBkYXRhIGFuZCBhZGQgdGhpcyB0byB2bXNcbiAgdGhpcy5fZGF0YSA9IHR5cGVvZiBkYXRhID09PSAnZnVuY3Rpb24nID8gZGF0YSgpIDogZGF0YVxuICBpZiAobWVyZ2VkRGF0YSkge1xuICAgIGV4dGVuZCh0aGlzLl9kYXRhLCBtZXJnZWREYXRhKVxuICB9XG4gIGluaXRTdGF0ZSh0aGlzKVxuXG4gIGNvbnNvbGUuZGVidWcoYFtKUyBGcmFtZXdvcmtdIFwiY3JlYXRlZFwiIGxpZmVjeWNsZSBpbiBWbSgke3RoaXMuX3R5cGV9KWApXG4gIHRoaXMuJGVtaXQoJ2hvb2s6Y3JlYXRlZCcpXG4gIHRoaXMuX2NyZWF0ZWQgPSB0cnVlXG5cbiAgLy8gYmFja3dhcmQgb2xkIHJlYWR5IGVudHJ5XG4gIGlmIChvcHRpb25zLm1ldGhvZHMgJiYgb3B0aW9ucy5tZXRob2RzLnJlYWR5KSB7XG4gICAgY29uc29sZS53YXJuKCdcImV4cG9ydHMubWV0aG9kcy5yZWFkeVwiIGlzIGRlcHJlY2F0ZWQsICcgK1xuICAgICAgJ3BsZWFzZSB1c2UgXCJleHBvcnRzLmNyZWF0ZWRcIiBpbnN0ZWFkJylcbiAgICBvcHRpb25zLm1ldGhvZHMucmVhZHkuY2FsbCh0aGlzKVxuICB9XG5cbiAgLy8gaWYgbm8gcGFyZW50RWxlbWVudCB0aGVuIHNwZWNpZnkgdGhlIGRvY3VtZW50RWxlbWVudFxuICB0aGlzLl9wYXJlbnRFbCA9IHBhcmVudEVsIHx8IHRoaXMuX2FwcC5kb2MuZG9jdW1lbnRFbGVtZW50XG4gIGJ1aWxkKHRoaXMpXG59XG5cbm1peGluRXZlbnRzKFZtLnByb3RvdHlwZSlcblxuZXh0ZW5kKFZtLCB7XG4gIHJlZ2lzdGVyTW9kdWxlcyxcbiAgcmVnaXN0ZXJNZXRob2RzXG59KVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9odG1sNS9kZWZhdWx0L3ZtL2luZGV4LmpzXG4gKiovIiwiLyogZXNsaW50LWRpc2FibGUgKi9cblxuaW1wb3J0IFdhdGNoZXIgZnJvbSAnLi93YXRjaGVyJ1xuaW1wb3J0IERlcCBmcm9tICcuL2RlcCdcbmltcG9ydCB7XG4gIG9ic2VydmUsXG4gIHByb3h5LFxuICB1bnByb3h5XG59IGZyb20gJy4vb2JzZXJ2ZXInXG5pbXBvcnQge1xuICBpc1BsYWluT2JqZWN0LFxuICBiaW5kXG59IGZyb20gJy4uL3V0aWwnXG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0U3RhdGUgKHZtKSB7XG4gIHZtLl93YXRjaGVycyA9IFtdXG4gIGluaXREYXRhKHZtKVxuICBpbml0Q29tcHV0ZWQodm0pXG4gIGluaXRNZXRob2RzKHZtKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaW5pdERhdGEgKHZtKSB7XG4gIGxldCBkYXRhID0gdm0uX2RhdGFcblxuICBpZiAoIWlzUGxhaW5PYmplY3QoZGF0YSkpIHtcbiAgICBkYXRhID0ge31cbiAgfVxuICAvLyBwcm94eSBkYXRhIG9uIGluc3RhbmNlXG4gIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhkYXRhKVxuICBsZXQgaSA9IGtleXMubGVuZ3RoXG4gIHdoaWxlIChpLS0pIHtcbiAgICBwcm94eSh2bSwga2V5c1tpXSlcbiAgfVxuICAvLyBvYnNlcnZlIGRhdGFcbiAgb2JzZXJ2ZShkYXRhLCB2bSlcbn1cblxuZnVuY3Rpb24gbm9vcCAoKSB7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0Q29tcHV0ZWQgKHZtKSB7XG4gIGNvbnN0IGNvbXB1dGVkID0gdm0uX2NvbXB1dGVkXG4gIGlmIChjb21wdXRlZCkge1xuICAgIGZvciAobGV0IGtleSBpbiBjb21wdXRlZCkge1xuICAgICAgY29uc3QgdXNlckRlZiA9IGNvbXB1dGVkW2tleV1cbiAgICAgIGNvbnN0IGRlZiA9IHtcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIHVzZXJEZWYgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgZGVmLmdldCA9IG1ha2VDb21wdXRlZEdldHRlcih1c2VyRGVmLCB2bSlcbiAgICAgICAgZGVmLnNldCA9IG5vb3BcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRlZi5nZXQgPSB1c2VyRGVmLmdldFxuICAgICAgICAgID8gdXNlckRlZi5jYWNoZSAhPT0gZmFsc2VcbiAgICAgICAgICAgID8gbWFrZUNvbXB1dGVkR2V0dGVyKHVzZXJEZWYuZ2V0LCB2bSlcbiAgICAgICAgICAgIDogYmluZCh1c2VyRGVmLmdldCwgdm0pXG4gICAgICAgICAgOiBub29wXG4gICAgICAgIGRlZi5zZXQgPSB1c2VyRGVmLnNldFxuICAgICAgICAgID8gYmluZCh1c2VyRGVmLnNldCwgdm0pXG4gICAgICAgICAgOiBub29wXG4gICAgICB9XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodm0sIGtleSwgZGVmKVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBtYWtlQ29tcHV0ZWRHZXR0ZXIgKGdldHRlciwgb3duZXIpIHtcbiAgY29uc3Qgd2F0Y2hlciA9IG5ldyBXYXRjaGVyKG93bmVyLCBnZXR0ZXIsIG51bGwsIHtcbiAgICBsYXp5OiB0cnVlXG4gIH0pXG4gIHJldHVybiBmdW5jdGlvbiBjb21wdXRlZEdldHRlciAoKSB7XG4gICAgaWYgKHdhdGNoZXIuZGlydHkpIHtcbiAgICAgIHdhdGNoZXIuZXZhbHVhdGUoKVxuICAgIH1cbiAgICBpZiAoRGVwLnRhcmdldCkge1xuICAgICAgd2F0Y2hlci5kZXBlbmQoKVxuICAgIH1cbiAgICByZXR1cm4gd2F0Y2hlci52YWx1ZVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0TWV0aG9kcyAodm0pIHtcbiAgY29uc3QgbWV0aG9kcyA9IHZtLl9tZXRob2RzXG4gIGlmIChtZXRob2RzKSB7XG4gICAgZm9yIChsZXQga2V5IGluIG1ldGhvZHMpIHtcbiAgICAgIHZtW2tleV0gPSBiaW5kKG1ldGhvZHNba2V5XSwgdm0pXG4gICAgfVxuICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2h0bWw1L2RlZmF1bHQvY29yZS9zdGF0ZS5qc1xuICoqLyIsIi8qIGVzbGludC1kaXNhYmxlICovXG5cbmltcG9ydCBEZXAgZnJvbSAnLi9kZXAnXG4vLyBpbXBvcnQgeyBwdXNoV2F0Y2hlciB9IGZyb20gJy4vYmF0Y2hlcidcbmltcG9ydCB7XG4gIHdhcm4sXG4gIHJlbW92ZSxcbiAgZXh0ZW5kLFxuICBpc09iamVjdCxcbiAgcGFyc2VQYXRoLFxuICBfU2V0IGFzIFNldFxufSBmcm9tICcuLi91dGlsJ1xuXG5sZXQgdWlkID0gMFxubGV0IHByZXZUYXJnZXRcblxuLyoqXG4gKiBBIHdhdGNoZXIgcGFyc2VzIGFuIGV4cHJlc3Npb24sIGNvbGxlY3RzIGRlcGVuZGVuY2llcyxcbiAqIGFuZCBmaXJlcyBjYWxsYmFjayB3aGVuIHRoZSBleHByZXNzaW9uIHZhbHVlIGNoYW5nZXMuXG4gKiBUaGlzIGlzIHVzZWQgZm9yIGJvdGggdGhlICR3YXRjaCgpIGFwaSBhbmQgZGlyZWN0aXZlcy5cbiAqXG4gKiBAcGFyYW0ge1Z1ZX0gdm1cbiAqIEBwYXJhbSB7U3RyaW5nfEZ1bmN0aW9ufSBleHBPckZuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYlxuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAqICAgICAgICAgICAgICAgICAtIHtBcnJheX0gZmlsdGVyc1xuICogICAgICAgICAgICAgICAgIC0ge0Jvb2xlYW59IHR3b1dheVxuICogICAgICAgICAgICAgICAgIC0ge0Jvb2xlYW59IGRlZXBcbiAqICAgICAgICAgICAgICAgICAtIHtCb29sZWFufSB1c2VyXG4gKiAgICAgICAgICAgICAgICAgLSB7Qm9vbGVhbn0gc3luY1xuICogICAgICAgICAgICAgICAgIC0ge0Jvb2xlYW59IGxhenlcbiAqICAgICAgICAgICAgICAgICAtIHtGdW5jdGlvbn0gW3ByZVByb2Nlc3NdXG4gKiAgICAgICAgICAgICAgICAgLSB7RnVuY3Rpb259IFtwb3N0UHJvY2Vzc11cbiAqIEBjb25zdHJ1Y3RvclxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFdhdGNoZXIgKHZtLCBleHBPckZuLCBjYiwgb3B0aW9ucykge1xuICAvLyBtaXggaW4gb3B0aW9uc1xuICBpZiAob3B0aW9ucykge1xuICAgIGV4dGVuZCh0aGlzLCBvcHRpb25zKVxuICB9XG4gIGNvbnN0IGlzRm4gPSB0eXBlb2YgZXhwT3JGbiA9PT0gJ2Z1bmN0aW9uJ1xuICB0aGlzLnZtID0gdm1cbiAgdm0uX3dhdGNoZXJzLnB1c2godGhpcylcbiAgdGhpcy5leHByZXNzaW9uID0gZXhwT3JGblxuICB0aGlzLmNiID0gY2JcbiAgdGhpcy5pZCA9ICsrdWlkIC8vIHVpZCBmb3IgYmF0Y2hpbmdcbiAgdGhpcy5hY3RpdmUgPSB0cnVlXG4gIHRoaXMuZGlydHkgPSB0aGlzLmxhenkgLy8gZm9yIGxhenkgd2F0Y2hlcnNcbiAgdGhpcy5kZXBzID0gW11cbiAgdGhpcy5uZXdEZXBzID0gW11cbiAgdGhpcy5kZXBJZHMgPSBuZXcgU2V0KClcbiAgdGhpcy5uZXdEZXBJZHMgPSBuZXcgU2V0KClcbiAgLy8gcGFyc2UgZXhwcmVzc2lvbiBmb3IgZ2V0dGVyXG4gIGlmIChpc0ZuKSB7XG4gICAgdGhpcy5nZXR0ZXIgPSBleHBPckZuXG4gIH0gZWxzZSB7XG4gICAgdGhpcy5nZXR0ZXIgPSBwYXJzZVBhdGgoZXhwT3JGbilcbiAgICBpZiAoIXRoaXMuZ2V0dGVyKSB7XG4gICAgICB0aGlzLmdldHRlciA9IGZ1bmN0aW9uICgpIHt9XG4gICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIHdhcm4oXG4gICAgICAgICdGYWlsZWQgd2F0Y2hpbmcgcGF0aDogJyArIGV4cE9yRm4gK1xuICAgICAgICAnV2F0Y2hlciBvbmx5IGFjY2VwdHMgc2ltcGxlIGRvdC1kZWxpbWl0ZWQgcGF0aHMuICcgK1xuICAgICAgICAnRm9yIGZ1bGwgY29udHJvbCwgdXNlIGEgZnVuY3Rpb24gaW5zdGVhZC4nLFxuICAgICAgICB2bVxuICAgICAgKVxuICAgIH1cbiAgfVxuICB0aGlzLnZhbHVlID0gdGhpcy5sYXp5XG4gICAgPyB1bmRlZmluZWRcbiAgICA6IHRoaXMuZ2V0KClcbiAgLy8gc3RhdGUgZm9yIGF2b2lkaW5nIGZhbHNlIHRyaWdnZXJzIGZvciBkZWVwIGFuZCBBcnJheVxuICAvLyB3YXRjaGVycyBkdXJpbmcgdm0uX2RpZ2VzdCgpXG4gIHRoaXMucXVldWVkID0gdGhpcy5zaGFsbG93ID0gZmFsc2Vcbn1cblxuLyoqXG4gKiBFdmFsdWF0ZSB0aGUgZ2V0dGVyLCBhbmQgcmUtY29sbGVjdCBkZXBlbmRlbmNpZXMuXG4gKi9cblxuV2F0Y2hlci5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLmJlZm9yZUdldCgpXG4gIGNvbnN0IHZhbHVlID0gdGhpcy5nZXR0ZXIuY2FsbCh0aGlzLnZtLCB0aGlzLnZtKVxuICAvLyBcInRvdWNoXCIgZXZlcnkgcHJvcGVydHkgc28gdGhleSBhcmUgYWxsIHRyYWNrZWQgYXNcbiAgLy8gZGVwZW5kZW5jaWVzIGZvciBkZWVwIHdhdGNoaW5nXG4gIGlmICh0aGlzLmRlZXApIHtcbiAgICB0cmF2ZXJzZSh2YWx1ZSlcbiAgfVxuICB0aGlzLmFmdGVyR2V0KClcbiAgcmV0dXJuIHZhbHVlXG59XG5cbi8qKlxuICogUHJlcGFyZSBmb3IgZGVwZW5kZW5jeSBjb2xsZWN0aW9uLlxuICovXG5cbldhdGNoZXIucHJvdG90eXBlLmJlZm9yZUdldCA9IGZ1bmN0aW9uICgpIHtcbiAgcHJldlRhcmdldCA9IERlcC50YXJnZXRcbiAgRGVwLnRhcmdldCA9IHRoaXNcbn1cblxuLyoqXG4gKiBBZGQgYSBkZXBlbmRlbmN5IHRvIHRoaXMgZGlyZWN0aXZlLlxuICpcbiAqIEBwYXJhbSB7RGVwfSBkZXBcbiAqL1xuXG5XYXRjaGVyLnByb3RvdHlwZS5hZGREZXAgPSBmdW5jdGlvbiAoZGVwKSB7XG4gIGNvbnN0IGlkID0gZGVwLmlkXG4gIGlmICghdGhpcy5uZXdEZXBJZHMuaGFzKGlkKSkge1xuICAgIHRoaXMubmV3RGVwSWRzLmFkZChpZClcbiAgICB0aGlzLm5ld0RlcHMucHVzaChkZXApXG4gICAgaWYgKCF0aGlzLmRlcElkcy5oYXMoaWQpKSB7XG4gICAgICBkZXAuYWRkU3ViKHRoaXMpXG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogQ2xlYW4gdXAgZm9yIGRlcGVuZGVuY3kgY29sbGVjdGlvbi5cbiAqL1xuXG5XYXRjaGVyLnByb3RvdHlwZS5hZnRlckdldCA9IGZ1bmN0aW9uICgpIHtcbiAgRGVwLnRhcmdldCA9IHByZXZUYXJnZXRcbiAgbGV0IGkgPSB0aGlzLmRlcHMubGVuZ3RoXG4gIHdoaWxlIChpLS0pIHtcbiAgICBjb25zdCBkZXAgPSB0aGlzLmRlcHNbaV1cbiAgICBpZiAoIXRoaXMubmV3RGVwSWRzLmhhcyhkZXAuaWQpKSB7XG4gICAgICBkZXAucmVtb3ZlU3ViKHRoaXMpXG4gICAgfVxuICB9XG4gIGxldCB0bXAgPSB0aGlzLmRlcElkc1xuICB0aGlzLmRlcElkcyA9IHRoaXMubmV3RGVwSWRzXG4gIHRoaXMubmV3RGVwSWRzID0gdG1wXG4gIHRoaXMubmV3RGVwSWRzLmNsZWFyKClcbiAgdG1wID0gdGhpcy5kZXBzXG4gIHRoaXMuZGVwcyA9IHRoaXMubmV3RGVwc1xuICB0aGlzLm5ld0RlcHMgPSB0bXBcbiAgdGhpcy5uZXdEZXBzLmxlbmd0aCA9IDBcbn1cblxuLyoqXG4gKiBTdWJzY3JpYmVyIGludGVyZmFjZS5cbiAqIFdpbGwgYmUgY2FsbGVkIHdoZW4gYSBkZXBlbmRlbmN5IGNoYW5nZXMuXG4gKlxuICogQHBhcmFtIHtCb29sZWFufSBzaGFsbG93XG4gKi9cblxuV2F0Y2hlci5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24gKHNoYWxsb3cpIHtcbiAgaWYgKHRoaXMubGF6eSkge1xuICAgIHRoaXMuZGlydHkgPSB0cnVlXG4gIH0gZWxzZSB7XG4gICAgdGhpcy5ydW4oKVxuICB9XG4gIC8vIH0gZWxzZSBpZiAodGhpcy5zeW5jKSB7XG4gIC8vICAgdGhpcy5ydW4oKVxuICAvLyB9IGVsc2Uge1xuICAvLyAgIC8vIGlmIHF1ZXVlZCwgb25seSBvdmVyd3JpdGUgc2hhbGxvdyB3aXRoIG5vbi1zaGFsbG93LFxuICAvLyAgIC8vIGJ1dCBub3QgdGhlIG90aGVyIHdheSBhcm91bmQuXG4gIC8vICAgdGhpcy5zaGFsbG93ID0gdGhpcy5xdWV1ZWRcbiAgLy8gICAgID8gc2hhbGxvd1xuICAvLyAgICAgICA/IHRoaXMuc2hhbGxvd1xuICAvLyAgICAgICA6IGZhbHNlXG4gIC8vICAgICA6ICEhc2hhbGxvd1xuICAvLyAgIHRoaXMucXVldWVkID0gdHJ1ZVxuICAvLyAgIHB1c2hXYXRjaGVyKHRoaXMpXG4gIC8vIH1cbn1cblxuLyoqXG4gKiBCYXRjaGVyIGpvYiBpbnRlcmZhY2UuXG4gKiBXaWxsIGJlIGNhbGxlZCBieSB0aGUgYmF0Y2hlci5cbiAqL1xuXG5XYXRjaGVyLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gIGlmICh0aGlzLmFjdGl2ZSkge1xuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5nZXQoKVxuICAgIGlmIChcbiAgICAgIHZhbHVlICE9PSB0aGlzLnZhbHVlIHx8XG4gICAgICAvLyBEZWVwIHdhdGNoZXJzIGFuZCB3YXRjaGVycyBvbiBPYmplY3QvQXJyYXlzIHNob3VsZCBmaXJlIGV2ZW5cbiAgICAgIC8vIHdoZW4gdGhlIHZhbHVlIGlzIHRoZSBzYW1lLCBiZWNhdXNlIHRoZSB2YWx1ZSBtYXlcbiAgICAgIC8vIGhhdmUgbXV0YXRlZDsgYnV0IG9ubHkgZG8gc28gaWYgdGhpcyBpcyBhXG4gICAgICAvLyBub24tc2hhbGxvdyB1cGRhdGUgKGNhdXNlZCBieSBhIHZtIGRpZ2VzdCkuXG4gICAgICAoKGlzT2JqZWN0KHZhbHVlKSB8fCB0aGlzLmRlZXApICYmICF0aGlzLnNoYWxsb3cpXG4gICAgKSB7XG4gICAgICAvLyBzZXQgbmV3IHZhbHVlXG4gICAgICBjb25zdCBvbGRWYWx1ZSA9IHRoaXMudmFsdWVcbiAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZVxuICAgICAgdGhpcy5jYi5jYWxsKHRoaXMudm0sIHZhbHVlLCBvbGRWYWx1ZSlcbiAgICB9XG4gICAgdGhpcy5xdWV1ZWQgPSB0aGlzLnNoYWxsb3cgPSBmYWxzZVxuICB9XG59XG5cbi8qKlxuICogRXZhbHVhdGUgdGhlIHZhbHVlIG9mIHRoZSB3YXRjaGVyLlxuICogVGhpcyBvbmx5IGdldHMgY2FsbGVkIGZvciBsYXp5IHdhdGNoZXJzLlxuICovXG5cbldhdGNoZXIucHJvdG90eXBlLmV2YWx1YXRlID0gZnVuY3Rpb24gKCkge1xuICAvLyBhdm9pZCBvdmVyd3JpdGluZyBhbm90aGVyIHdhdGNoZXIgdGhhdCBpcyBiZWluZ1xuICAvLyBjb2xsZWN0ZWQuXG4gIGNvbnN0IGN1cnJlbnQgPSBEZXAudGFyZ2V0XG4gIHRoaXMudmFsdWUgPSB0aGlzLmdldCgpXG4gIHRoaXMuZGlydHkgPSBmYWxzZVxuICBEZXAudGFyZ2V0ID0gY3VycmVudFxufVxuXG4vKipcbiAqIERlcGVuZCBvbiBhbGwgZGVwcyBjb2xsZWN0ZWQgYnkgdGhpcyB3YXRjaGVyLlxuICovXG5cbldhdGNoZXIucHJvdG90eXBlLmRlcGVuZCA9IGZ1bmN0aW9uICgpIHtcbiAgbGV0IGkgPSB0aGlzLmRlcHMubGVuZ3RoXG4gIHdoaWxlIChpLS0pIHtcbiAgICB0aGlzLmRlcHNbaV0uZGVwZW5kKClcbiAgfVxufVxuXG4vKipcbiAqIFJlbW92ZSBzZWxmIGZyb20gYWxsIGRlcGVuZGVuY2llcycgc3ViY3JpYmVyIGxpc3QuXG4gKi9cblxuV2F0Y2hlci5wcm90b3R5cGUudGVhcmRvd24gPSBmdW5jdGlvbiAoKSB7XG4gIGlmICh0aGlzLmFjdGl2ZSkge1xuICAgIC8vIHJlbW92ZSBzZWxmIGZyb20gdm0ncyB3YXRjaGVyIGxpc3RcbiAgICAvLyB0aGlzIGlzIGEgc29tZXdoYXQgZXhwZW5zaXZlIG9wZXJhdGlvbiBzbyB3ZSBza2lwIGl0XG4gICAgLy8gaWYgdGhlIHZtIGlzIGJlaW5nIGRlc3Ryb3llZCBvciBpcyBwZXJmb3JtaW5nIGEgdi1mb3JcbiAgICAvLyByZS1yZW5kZXIgKHRoZSB3YXRjaGVyIGxpc3QgaXMgdGhlbiBmaWx0ZXJlZCBieSB2LWZvcikuXG4gICAgaWYgKCF0aGlzLnZtLl9pc0JlaW5nRGVzdHJveWVkICYmICF0aGlzLnZtLl92Rm9yUmVtb3ZpbmcpIHtcbiAgICAgIHJlbW92ZSh0aGlzLnZtLl93YXRjaGVycywgdGhpcylcbiAgICB9XG4gICAgbGV0IGkgPSB0aGlzLmRlcHMubGVuZ3RoXG4gICAgd2hpbGUgKGktLSkge1xuICAgICAgdGhpcy5kZXBzW2ldLnJlbW92ZVN1Yih0aGlzKVxuICAgIH1cbiAgICB0aGlzLmFjdGl2ZSA9IGZhbHNlXG4gICAgdGhpcy52bSA9IHRoaXMuY2IgPSB0aGlzLnZhbHVlID0gbnVsbFxuICB9XG59XG5cbi8qKlxuICogUmVjcnVzaXZlbHkgdHJhdmVyc2UgYW4gb2JqZWN0IHRvIGV2b2tlIGFsbCBjb252ZXJ0ZWRcbiAqIGdldHRlcnMsIHNvIHRoYXQgZXZlcnkgbmVzdGVkIHByb3BlcnR5IGluc2lkZSB0aGUgb2JqZWN0XG4gKiBpcyBjb2xsZWN0ZWQgYXMgYSBcImRlZXBcIiBkZXBlbmRlbmN5LlxuICpcbiAqIEBwYXJhbSB7Kn0gdmFsXG4gKiBAcGFyYW0ge1NldH0gc2VlblxuICovXG5cbmNvbnN0IHNlZW5PYmplY3RzID0gbmV3IFNldCgpXG5mdW5jdGlvbiB0cmF2ZXJzZSAodmFsLCBzZWVuKSB7XG4gIGxldCBpLCBrZXlzLCBpc0EsIGlzT1xuICBpZiAoIXNlZW4pIHtcbiAgICBzZWVuID0gc2Vlbk9iamVjdHNcbiAgICBzZWVuLmNsZWFyKClcbiAgfVxuICBpc0EgPSBBcnJheS5pc0FycmF5KHZhbClcbiAgaXNPID0gaXNPYmplY3QodmFsKVxuICBpZiAoaXNBIHx8IGlzTykge1xuICAgIGlmICh2YWwuX19vYl9fKSB7XG4gICAgICBjb25zdCBkZXBJZCA9IHZhbC5fX29iX18uZGVwLmlkXG4gICAgICBpZiAoc2Vlbi5oYXMoZGVwSWQpKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2Vlbi5hZGQoZGVwSWQpXG4gICAgICB9XG4gICAgfVxuICAgIGlmIChpc0EpIHtcbiAgICAgIGkgPSB2YWwubGVuZ3RoXG4gICAgICB3aGlsZSAoaS0tKSB0cmF2ZXJzZSh2YWxbaV0sIHNlZW4pXG4gICAgfSBlbHNlIGlmIChpc08pIHtcbiAgICAgIGtleXMgPSBPYmplY3Qua2V5cyh2YWwpXG4gICAgICBpID0ga2V5cy5sZW5ndGhcbiAgICAgIHdoaWxlIChpLS0pIHRyYXZlcnNlKHZhbFtrZXlzW2ldXSwgc2VlbilcbiAgICB9XG4gIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vaHRtbDUvZGVmYXVsdC9jb3JlL3dhdGNoZXIuanNcbiAqKi8iLCIvKiBlc2xpbnQtZGlzYWJsZSAqL1xuXG5pbXBvcnQgeyByZW1vdmUgfSBmcm9tICcuLi91dGlsJ1xuXG5sZXQgdWlkID0gMFxuXG4vKipcbiAqIEEgZGVwIGlzIGFuIG9ic2VydmFibGUgdGhhdCBjYW4gaGF2ZSBtdWx0aXBsZVxuICogZGlyZWN0aXZlcyBzdWJzY3JpYmluZyB0byBpdC5cbiAqXG4gKiBAY29uc3RydWN0b3JcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZXAgKCkge1xuICB0aGlzLmlkID0gdWlkKytcbiAgdGhpcy5zdWJzID0gW11cbn1cblxuLy8gdGhlIGN1cnJlbnQgdGFyZ2V0IHdhdGNoZXIgYmVpbmcgZXZhbHVhdGVkLlxuLy8gdGhpcyBpcyBnbG9iYWxseSB1bmlxdWUgYmVjYXVzZSB0aGVyZSBjb3VsZCBiZSBvbmx5IG9uZVxuLy8gd2F0Y2hlciBiZWluZyBldmFsdWF0ZWQgYXQgYW55IHRpbWUuXG5EZXAudGFyZ2V0ID0gbnVsbFxuXG4vKipcbiAqIEFkZCBhIGRpcmVjdGl2ZSBzdWJzY3JpYmVyLlxuICpcbiAqIEBwYXJhbSB7RGlyZWN0aXZlfSBzdWJcbiAqL1xuXG5EZXAucHJvdG90eXBlLmFkZFN1YiA9IGZ1bmN0aW9uIChzdWIpIHtcbiAgdGhpcy5zdWJzLnB1c2goc3ViKVxufVxuXG4vKipcbiAqIFJlbW92ZSBhIGRpcmVjdGl2ZSBzdWJzY3JpYmVyLlxuICpcbiAqIEBwYXJhbSB7RGlyZWN0aXZlfSBzdWJcbiAqL1xuXG5EZXAucHJvdG90eXBlLnJlbW92ZVN1YiA9IGZ1bmN0aW9uIChzdWIpIHtcbiAgcmVtb3ZlKHRoaXMuc3Vicywgc3ViKVxufVxuXG4vKipcbiAqIEFkZCBzZWxmIGFzIGEgZGVwZW5kZW5jeSB0byB0aGUgdGFyZ2V0IHdhdGNoZXIuXG4gKi9cblxuRGVwLnByb3RvdHlwZS5kZXBlbmQgPSBmdW5jdGlvbiAoKSB7XG4gIERlcC50YXJnZXQuYWRkRGVwKHRoaXMpXG59XG5cbi8qKlxuICogTm90aWZ5IGFsbCBzdWJzY3JpYmVycyBvZiBhIG5ldyB2YWx1ZS5cbiAqL1xuXG5EZXAucHJvdG90eXBlLm5vdGlmeSA9IGZ1bmN0aW9uICgpIHtcbiAgLy8gc3RhYmxpemUgdGhlIHN1YnNjcmliZXIgbGlzdCBmaXJzdFxuICBjb25zdCBzdWJzID0gdGhpcy5zdWJzLnNsaWNlKClcbiAgZm9yIChsZXQgaSA9IDAsIGwgPSBzdWJzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIHN1YnNbaV0udXBkYXRlKClcbiAgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9odG1sNS9kZWZhdWx0L2NvcmUvZGVwLmpzXG4gKiovIiwiLyogZXNsaW50LWRpc2FibGUgKi9cblxuaW1wb3J0IERlcCBmcm9tICcuL2RlcCdcbmltcG9ydCB7IGFycmF5TWV0aG9kcyB9IGZyb20gJy4vYXJyYXknXG5pbXBvcnQge1xuICBkZWYsXG4gIHJlbW92ZSxcbiAgaXNPYmplY3QsXG4gIGlzUGxhaW5PYmplY3QsXG4gIGhhc1Byb3RvLFxuICBoYXNPd24sXG4gIGlzUmVzZXJ2ZWRcbn0gZnJvbSAnLi4vdXRpbCdcblxuY29uc3QgYXJyYXlLZXlzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoYXJyYXlNZXRob2RzKVxuXG4vKipcbiAqIE9ic2VydmVyIGNsYXNzIHRoYXQgYXJlIGF0dGFjaGVkIHRvIGVhY2ggb2JzZXJ2ZWRcbiAqIG9iamVjdC4gT25jZSBhdHRhY2hlZCwgdGhlIG9ic2VydmVyIGNvbnZlcnRzIHRhcmdldFxuICogb2JqZWN0J3MgcHJvcGVydHkga2V5cyBpbnRvIGdldHRlci9zZXR0ZXJzIHRoYXRcbiAqIGNvbGxlY3QgZGVwZW5kZW5jaWVzIGFuZCBkaXNwYXRjaGVzIHVwZGF0ZXMuXG4gKlxuICogQHBhcmFtIHtBcnJheXxPYmplY3R9IHZhbHVlXG4gKiBAY29uc3RydWN0b3JcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gT2JzZXJ2ZXIgKHZhbHVlKSB7XG4gIHRoaXMudmFsdWUgPSB2YWx1ZVxuICB0aGlzLmRlcCA9IG5ldyBEZXAoKVxuICBkZWYodmFsdWUsICdfX29iX18nLCB0aGlzKVxuICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICBjb25zdCBhdWdtZW50ID0gaGFzUHJvdG9cbiAgICAgID8gcHJvdG9BdWdtZW50XG4gICAgICA6IGNvcHlBdWdtZW50XG4gICAgYXVnbWVudCh2YWx1ZSwgYXJyYXlNZXRob2RzLCBhcnJheUtleXMpXG4gICAgdGhpcy5vYnNlcnZlQXJyYXkodmFsdWUpXG4gIH0gZWxzZSB7XG4gICAgdGhpcy53YWxrKHZhbHVlKVxuICB9XG59XG5cbi8vIEluc3RhbmNlIG1ldGhvZHNcblxuLyoqXG4gKiBXYWxrIHRocm91Z2ggZWFjaCBwcm9wZXJ0eSBhbmQgY29udmVydCB0aGVtIGludG9cbiAqIGdldHRlci9zZXR0ZXJzLiBUaGlzIG1ldGhvZCBzaG91bGQgb25seSBiZSBjYWxsZWQgd2hlblxuICogdmFsdWUgdHlwZSBpcyBPYmplY3QuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9ialxuICovXG5cbk9ic2VydmVyLnByb3RvdHlwZS53YWxrID0gZnVuY3Rpb24gKG9iaikge1xuICBmb3IgKGxldCBrZXkgaW4gb2JqKSB7XG4gICAgdGhpcy5jb252ZXJ0KGtleSwgb2JqW2tleV0pXG4gIH1cbn1cblxuLyoqXG4gKiBPYnNlcnZlIGEgbGlzdCBvZiBBcnJheSBpdGVtcy5cbiAqXG4gKiBAcGFyYW0ge0FycmF5fSBpdGVtc1xuICovXG5cbk9ic2VydmVyLnByb3RvdHlwZS5vYnNlcnZlQXJyYXkgPSBmdW5jdGlvbiAoaXRlbXMpIHtcbiAgZm9yIChsZXQgaSA9IDAsIGwgPSBpdGVtcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBvYnNlcnZlKGl0ZW1zW2ldKVxuICB9XG59XG5cbi8qKlxuICogQ29udmVydCBhIHByb3BlcnR5IGludG8gZ2V0dGVyL3NldHRlciBzbyB3ZSBjYW4gZW1pdFxuICogdGhlIGV2ZW50cyB3aGVuIHRoZSBwcm9wZXJ0eSBpcyBhY2Nlc3NlZC9jaGFuZ2VkLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBrZXlcbiAqIEBwYXJhbSB7Kn0gdmFsXG4gKi9cblxuT2JzZXJ2ZXIucHJvdG90eXBlLmNvbnZlcnQgPSBmdW5jdGlvbiAoa2V5LCB2YWwpIHtcbiAgZGVmaW5lUmVhY3RpdmUodGhpcy52YWx1ZSwga2V5LCB2YWwpXG59XG5cbi8qKlxuICogQWRkIGFuIG93bmVyIHZtLCBzbyB0aGF0IHdoZW4gJHNldC8kZGVsZXRlIG11dGF0aW9uc1xuICogaGFwcGVuIHdlIGNhbiBub3RpZnkgb3duZXIgdm1zIHRvIHByb3h5IHRoZSBrZXlzIGFuZFxuICogZGlnZXN0IHRoZSB3YXRjaGVycy4gVGhpcyBpcyBvbmx5IGNhbGxlZCB3aGVuIHRoZSBvYmplY3RcbiAqIGlzIG9ic2VydmVkIGFzIGFuIGluc3RhbmNlJ3Mgcm9vdCAkZGF0YS5cbiAqXG4gKiBAcGFyYW0ge1Z1ZX0gdm1cbiAqL1xuXG5PYnNlcnZlci5wcm90b3R5cGUuYWRkVm0gPSBmdW5jdGlvbiAodm0pIHtcbiAgKHRoaXMudm1zIHx8ICh0aGlzLnZtcyA9IFtdKSkucHVzaCh2bSlcbn1cblxuLyoqXG4gKiBSZW1vdmUgYW4gb3duZXIgdm0uIFRoaXMgaXMgY2FsbGVkIHdoZW4gdGhlIG9iamVjdCBpc1xuICogc3dhcHBlZCBvdXQgYXMgYW4gaW5zdGFuY2UncyAkZGF0YSBvYmplY3QuXG4gKlxuICogQHBhcmFtIHtWdWV9IHZtXG4gKi9cblxuT2JzZXJ2ZXIucHJvdG90eXBlLnJlbW92ZVZtID0gZnVuY3Rpb24gKHZtKSB7XG4gIHJlbW92ZSh0aGlzLnZtcywgdm0pXG59XG5cbi8vIGhlbHBlcnNcblxuLyoqXG4gKiBBdWdtZW50IGFuIHRhcmdldCBPYmplY3Qgb3IgQXJyYXkgYnkgaW50ZXJjZXB0aW5nXG4gKiB0aGUgcHJvdG90eXBlIGNoYWluIHVzaW5nIF9fcHJvdG9fX1xuICpcbiAqIEBwYXJhbSB7T2JqZWN0fEFycmF5fSB0YXJnZXRcbiAqIEBwYXJhbSB7T2JqZWN0fSBzcmNcbiAqL1xuXG5mdW5jdGlvbiBwcm90b0F1Z21lbnQgKHRhcmdldCwgc3JjKSB7XG4gIC8qIGVzbGludC1kaXNhYmxlIG5vLXByb3RvICovXG4gIHRhcmdldC5fX3Byb3RvX18gPSBzcmNcbiAgLyogZXNsaW50LWVuYWJsZSBuby1wcm90byAqL1xufVxuXG4vKipcbiAqIEF1Z21lbnQgYW4gdGFyZ2V0IE9iamVjdCBvciBBcnJheSBieSBkZWZpbmluZ1xuICogaGlkZGVuIHByb3BlcnRpZXMuXG4gKlxuICogQHBhcmFtIHtPYmplY3R8QXJyYXl9IHRhcmdldFxuICogQHBhcmFtIHtPYmplY3R9IHByb3RvXG4gKi9cblxuZnVuY3Rpb24gY29weUF1Z21lbnQgKHRhcmdldCwgc3JjLCBrZXlzKSB7XG4gIGZvciAobGV0IGkgPSAwLCBsID0ga2V5cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBjb25zdCBrZXkgPSBrZXlzW2ldXG4gICAgZGVmKHRhcmdldCwga2V5LCBzcmNba2V5XSlcbiAgfVxufVxuXG4vKipcbiAqIEF0dGVtcHQgdG8gY3JlYXRlIGFuIG9ic2VydmVyIGluc3RhbmNlIGZvciBhIHZhbHVlLFxuICogcmV0dXJucyB0aGUgbmV3IG9ic2VydmVyIGlmIHN1Y2Nlc3NmdWxseSBvYnNlcnZlZCxcbiAqIG9yIHRoZSBleGlzdGluZyBvYnNlcnZlciBpZiB0aGUgdmFsdWUgYWxyZWFkeSBoYXMgb25lLlxuICpcbiAqIEBwYXJhbSB7Kn0gdmFsdWVcbiAqIEBwYXJhbSB7VnVlfSBbdm1dXG4gKiBAcmV0dXJuIHtPYnNlcnZlcnx1bmRlZmluZWR9XG4gKiBAc3RhdGljXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIG9ic2VydmUgKHZhbHVlLCB2bSkge1xuICBpZiAoIWlzT2JqZWN0KHZhbHVlKSkge1xuICAgIHJldHVyblxuICB9XG4gIGxldCBvYlxuICBpZiAoaGFzT3duKHZhbHVlLCAnX19vYl9fJykgJiYgdmFsdWUuX19vYl9fIGluc3RhbmNlb2YgT2JzZXJ2ZXIpIHtcbiAgICBvYiA9IHZhbHVlLl9fb2JfX1xuICB9IGVsc2UgaWYgKFxuICAgIChBcnJheS5pc0FycmF5KHZhbHVlKSB8fCBpc1BsYWluT2JqZWN0KHZhbHVlKSkgJiZcbiAgICBPYmplY3QuaXNFeHRlbnNpYmxlKHZhbHVlKSAmJlxuICAgICF2YWx1ZS5faXNWdWVcbiAgKSB7XG4gICAgb2IgPSBuZXcgT2JzZXJ2ZXIodmFsdWUpXG4gIH1cbiAgaWYgKG9iICYmIHZtKSB7XG4gICAgb2IuYWRkVm0odm0pXG4gIH1cbiAgcmV0dXJuIG9iXG59XG5cbi8qKlxuICogRGVmaW5lIGEgcmVhY3RpdmUgcHJvcGVydHkgb24gYW4gT2JqZWN0LlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmpcbiAqIEBwYXJhbSB7U3RyaW5nfSBrZXlcbiAqIEBwYXJhbSB7Kn0gdmFsXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGRlZmluZVJlYWN0aXZlIChvYmosIGtleSwgdmFsKSB7XG4gIGNvbnN0IGRlcCA9IG5ldyBEZXAoKVxuXG4gIGNvbnN0IHByb3BlcnR5ID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSlcbiAgaWYgKHByb3BlcnR5ICYmIHByb3BlcnR5LmNvbmZpZ3VyYWJsZSA9PT0gZmFsc2UpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIC8vIGNhdGVyIGZvciBwcmUtZGVmaW5lZCBnZXR0ZXIvc2V0dGVyc1xuICBjb25zdCBnZXR0ZXIgPSBwcm9wZXJ0eSAmJiBwcm9wZXJ0eS5nZXRcbiAgY29uc3Qgc2V0dGVyID0gcHJvcGVydHkgJiYgcHJvcGVydHkuc2V0XG5cbiAgbGV0IGNoaWxkT2IgPSBvYnNlcnZlKHZhbClcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbiByZWFjdGl2ZUdldHRlciAoKSB7XG4gICAgICBjb25zdCB2YWx1ZSA9IGdldHRlciA/IGdldHRlci5jYWxsKG9iaikgOiB2YWxcbiAgICAgIGlmIChEZXAudGFyZ2V0KSB7XG4gICAgICAgIGRlcC5kZXBlbmQoKVxuICAgICAgICBpZiAoY2hpbGRPYikge1xuICAgICAgICAgIGNoaWxkT2IuZGVwLmRlcGVuZCgpXG4gICAgICAgIH1cbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgICAgZm9yIChsZXQgZSwgaSA9IDAsIGwgPSB2YWx1ZS5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICAgIGUgPSB2YWx1ZVtpXVxuICAgICAgICAgICAgZSAmJiBlLl9fb2JfXyAmJiBlLl9fb2JfXy5kZXAuZGVwZW5kKClcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB2YWx1ZVxuICAgIH0sXG4gICAgc2V0OiBmdW5jdGlvbiByZWFjdGl2ZVNldHRlciAobmV3VmFsKSB7XG4gICAgICBjb25zdCB2YWx1ZSA9IGdldHRlciA/IGdldHRlci5jYWxsKG9iaikgOiB2YWxcbiAgICAgIGlmIChuZXdWYWwgPT09IHZhbHVlKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgaWYgKHNldHRlcikge1xuICAgICAgICBzZXR0ZXIuY2FsbChvYmosIG5ld1ZhbClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhbCA9IG5ld1ZhbFxuICAgICAgfVxuICAgICAgY2hpbGRPYiA9IG9ic2VydmUobmV3VmFsKVxuICAgICAgZGVwLm5vdGlmeSgpXG4gICAgfVxuICB9KVxufVxuXG4vKipcbiAqIFNldCBhIHByb3BlcnR5IG9uIGFuIG9iamVjdC4gQWRkcyB0aGUgbmV3IHByb3BlcnR5IGFuZFxuICogdHJpZ2dlcnMgY2hhbmdlIG5vdGlmaWNhdGlvbiBpZiB0aGUgcHJvcGVydHkgZG9lc24ndFxuICogYWxyZWFkeSBleGlzdC5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqXG4gKiBAcGFyYW0ge1N0cmluZ30ga2V5XG4gKiBAcGFyYW0geyp9IHZhbFxuICogQHB1YmxpY1xuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBzZXQgKG9iaiwga2V5LCB2YWwpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkob2JqKSkge1xuICAgIHJldHVybiBvYmouc3BsaWNlKGtleSwgMSwgdmFsKVxuICB9XG4gIGlmIChoYXNPd24ob2JqLCBrZXkpKSB7XG4gICAgb2JqW2tleV0gPSB2YWxcbiAgICByZXR1cm5cbiAgfVxuICBpZiAob2JqLl9pc1Z1ZSkge1xuICAgIHNldChvYmouX2RhdGEsIGtleSwgdmFsKVxuICAgIHJldHVyblxuICB9XG4gIGNvbnN0IG9iID0gb2JqLl9fb2JfX1xuICBpZiAoIW9iKSB7XG4gICAgb2JqW2tleV0gPSB2YWxcbiAgICByZXR1cm5cbiAgfVxuICBvYi5jb252ZXJ0KGtleSwgdmFsKVxuICBvYi5kZXAubm90aWZ5KClcbiAgaWYgKG9iLnZtcykge1xuICAgIGxldCBpID0gb2Iudm1zLmxlbmd0aFxuICAgIHdoaWxlIChpLS0pIHtcbiAgICAgIGNvbnN0IHZtID0gb2Iudm1zW2ldXG4gICAgICBwcm94eSh2bSwga2V5KVxuICAgICAgdm0uJGZvcmNlVXBkYXRlKClcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHZhbFxufVxuXG4vKipcbiAqIERlbGV0ZSBhIHByb3BlcnR5IGFuZCB0cmlnZ2VyIGNoYW5nZSBpZiBuZWNlc3NhcnkuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9ialxuICogQHBhcmFtIHtTdHJpbmd9IGtleVxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBkZWwgKG9iaiwga2V5KSB7XG4gIGlmICghaGFzT3duKG9iaiwga2V5KSkge1xuICAgIHJldHVyblxuICB9XG4gIGRlbGV0ZSBvYmpba2V5XVxuICBjb25zdCBvYiA9IG9iai5fX29iX19cblxuICBpZiAoIW9iKSB7XG4gICAgaWYgKG9iai5faXNWdWUpIHtcbiAgICAgIGRlbGV0ZSBvYmouX2RhdGFba2V5XVxuICAgICAgb2JqLiRmb3JjZVVwZGF0ZSgpXG4gICAgfVxuICAgIHJldHVyblxuICB9XG4gIG9iLmRlcC5ub3RpZnkoKVxuICBpZiAob2Iudm1zKSB7XG4gICAgbGV0IGkgPSBvYi52bXMubGVuZ3RoXG4gICAgd2hpbGUgKGktLSkge1xuICAgICAgY29uc3Qgdm0gPSBvYi52bXNbaV1cbiAgICAgIHVucHJveHkodm0sIGtleSlcbiAgICAgIHZtLiRmb3JjZVVwZGF0ZSgpXG4gICAgfVxuICB9XG59XG5cbmNvbnN0IEtFWV9XT1JEUyA9IFsnJGluZGV4JywgJyR2YWx1ZScsICckZXZlbnQnXVxuZXhwb3J0IGZ1bmN0aW9uIHByb3h5ICh2bSwga2V5KSB7XG4gIGlmIChLRVlfV09SRFMuaW5kZXhPZihrZXkpID4gLTEgfHwgIWlzUmVzZXJ2ZWQoa2V5KSkge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh2bSwga2V5LCB7XG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgZ2V0OiBmdW5jdGlvbiBwcm94eUdldHRlciAoKSB7XG4gICAgICAgIHJldHVybiB2bS5fZGF0YVtrZXldXG4gICAgICB9LFxuICAgICAgc2V0OiBmdW5jdGlvbiBwcm94eVNldHRlciAodmFsKSB7XG4gICAgICAgIHZtLl9kYXRhW2tleV0gPSB2YWxcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1bnByb3h5ICh2bSwga2V5KSB7XG4gIGlmICghaXNSZXNlcnZlZChrZXkpKSB7XG4gICAgZGVsZXRlIHZtW2tleV1cbiAgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9odG1sNS9kZWZhdWx0L2NvcmUvb2JzZXJ2ZXIuanNcbiAqKi8iLCIvKiBlc2xpbnQtZGlzYWJsZSAqL1xuXG5pbXBvcnQgeyBkZWYgfSBmcm9tICcuLi91dGlsJ1xuXG5jb25zdCBhcnJheVByb3RvID0gQXJyYXkucHJvdG90eXBlXG5leHBvcnQgY29uc3QgYXJyYXlNZXRob2RzID0gT2JqZWN0LmNyZWF0ZShhcnJheVByb3RvKVxuXG4vKipcbiAqIEludGVyY2VwdCBtdXRhdGluZyBtZXRob2RzIGFuZCBlbWl0IGV2ZW50c1xuICovXG5cbjtbXG4gICdwdXNoJyxcbiAgJ3BvcCcsXG4gICdzaGlmdCcsXG4gICd1bnNoaWZ0JyxcbiAgJ3NwbGljZScsXG4gICdzb3J0JyxcbiAgJ3JldmVyc2UnXG5dXG4uZm9yRWFjaChmdW5jdGlvbiAobWV0aG9kKSB7XG4gIC8vIGNhY2hlIG9yaWdpbmFsIG1ldGhvZFxuICBjb25zdCBvcmlnaW5hbCA9IGFycmF5UHJvdG9bbWV0aG9kXVxuICBkZWYoYXJyYXlNZXRob2RzLCBtZXRob2QsIGZ1bmN0aW9uIG11dGF0b3IgKCkge1xuICAgIC8vIGF2b2lkIGxlYWtpbmcgYXJndW1lbnRzOlxuICAgIC8vIGh0dHA6Ly9qc3BlcmYuY29tL2Nsb3N1cmUtd2l0aC1hcmd1bWVudHNcbiAgICBsZXQgaSA9IGFyZ3VtZW50cy5sZW5ndGhcbiAgICBjb25zdCBhcmdzID0gbmV3IEFycmF5KGkpXG4gICAgd2hpbGUgKGktLSkge1xuICAgICAgYXJnc1tpXSA9IGFyZ3VtZW50c1tpXVxuICAgIH1cbiAgICBjb25zdCByZXN1bHQgPSBvcmlnaW5hbC5hcHBseSh0aGlzLCBhcmdzKVxuICAgIGNvbnN0IG9iID0gdGhpcy5fX29iX19cbiAgICBsZXQgaW5zZXJ0ZWRcbiAgICBzd2l0Y2ggKG1ldGhvZCkge1xuICAgICAgY2FzZSAncHVzaCc6XG4gICAgICAgIGluc2VydGVkID0gYXJnc1xuICAgICAgICBicmVha1xuICAgICAgY2FzZSAndW5zaGlmdCc6XG4gICAgICAgIGluc2VydGVkID0gYXJnc1xuICAgICAgICBicmVha1xuICAgICAgY2FzZSAnc3BsaWNlJzpcbiAgICAgICAgaW5zZXJ0ZWQgPSBhcmdzLnNsaWNlKDIpXG4gICAgICAgIGJyZWFrXG4gICAgfVxuICAgIGlmIChpbnNlcnRlZCkgb2Iub2JzZXJ2ZUFycmF5KGluc2VydGVkKVxuICAgIC8vIG5vdGlmeSBjaGFuZ2VcbiAgICBvYi5kZXAubm90aWZ5KClcbiAgICByZXR1cm4gcmVzdWx0XG4gIH0pXG59KVxuXG4vKipcbiAqIFN3YXAgdGhlIGVsZW1lbnQgYXQgdGhlIGdpdmVuIGluZGV4IHdpdGggYSBuZXcgdmFsdWVcbiAqIGFuZCBlbWl0cyBjb3JyZXNwb25kaW5nIGV2ZW50LlxuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSBpbmRleFxuICogQHBhcmFtIHsqfSB2YWxcbiAqIEByZXR1cm4geyp9IC0gcmVwbGFjZWQgZWxlbWVudFxuICovXG5cbmRlZihcbiAgYXJyYXlQcm90byxcbiAgJyRzZXQnLFxuICBmdW5jdGlvbiAkc2V0IChpbmRleCwgdmFsKSB7XG4gICAgaWYgKGluZGV4ID49IHRoaXMubGVuZ3RoKSB7XG4gICAgICB0aGlzLmxlbmd0aCA9IGluZGV4ICsgMVxuICAgIH1cbiAgICByZXR1cm4gdGhpcy5zcGxpY2UoaW5kZXgsIDEsIHZhbClbMF1cbiAgfVxuKVxuXG4vKipcbiAqIENvbnZlbmllbmNlIG1ldGhvZCB0byByZW1vdmUgdGhlIGVsZW1lbnQgYXQgZ2l2ZW4gaW5kZXguXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IGluZGV4XG4gKiBAcGFyYW0geyp9IHZhbFxuICovXG5cbmRlZihcbiAgYXJyYXlQcm90byxcbiAgJyRyZW1vdmUnLFxuICBmdW5jdGlvbiAkcmVtb3ZlIChpbmRleCkge1xuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgIGlmICghdGhpcy5sZW5ndGgpIHJldHVyblxuICAgIGlmICh0eXBlb2YgaW5kZXggIT09ICdudW1iZXInKSB7XG4gICAgICBpbmRleCA9IHRoaXMuaW5kZXhPZihpbmRleClcbiAgICB9XG4gICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgIHRoaXMuc3BsaWNlKGluZGV4LCAxKVxuICAgIH1cbiAgfVxuKVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9odG1sNS9kZWZhdWx0L2NvcmUvYXJyYXkuanNcbiAqKi8iLCIvKipcbiAqIEBmaWxlT3ZlcnZpZXdcbiAqIFZpZXdNb2RlbCB0ZW1wbGF0ZSBwYXJzZXIgJiBkYXRhLWJpbmRpbmcgcHJvY2Vzc1xuICpcbiAqIHJlcXVpcmVkOlxuICogaW5kZXguanM6IFZtXG4gKiBkb20taGVscGVyLmpzOiBjcmVhdGVFbGVtZW50LCBjcmVhdGVCbG9ja1xuICogZG9tLWhlbHBlci5qczogYXR0YWNoVGFyZ2V0LCBtb3ZlVGFyZ2V0LCByZW1vdmVUYXJnZXRcbiAqIGRpcmVjdGl2ZS5qczogYmluZEVsZW1lbnQsIGJpbmRTdWJWbSwgc2V0SWQsIHdhdGNoXG4gKiBldmVudHMuanM6ICRvblxuICovXG5cbmltcG9ydCB7XG4gIGV4dGVuZCxcbiAgYmluZFxufSBmcm9tICcuLi91dGlsJ1xuaW1wb3J0IHtcbiAgaW5pdERhdGEsXG4gIGluaXRDb21wdXRlZFxufSBmcm9tICcuLi9jb3JlL3N0YXRlJ1xuaW1wb3J0IHtcbiAgYmluZEVsZW1lbnQsXG4gIHNldElkLFxuICBiaW5kU3ViVm0sXG4gIGJpbmRTdWJWbUFmdGVySW5pdGlhbGl6ZWQsXG4gIGFwcGx5TmFpdHZlQ29tcG9uZW50T3B0aW9ucyxcbiAgd2F0Y2hcbn0gZnJvbSAnLi9kaXJlY3RpdmUnXG5pbXBvcnQge1xuICBjcmVhdGVCbG9jayxcbiAgY3JlYXRlQm9keSxcbiAgY3JlYXRlRWxlbWVudCxcbiAgYXR0YWNoVGFyZ2V0LFxuICBtb3ZlVGFyZ2V0LFxuICByZW1vdmVUYXJnZXRcbn0gZnJvbSAnLi9kb20taGVscGVyJ1xuXG4vKipcbiAqIGJ1aWxkKGV4dGVybmFsRGlycylcbiAqICAgY3JlYXRlVm0oKVxuICogICBtZXJnZShleHRlcm5hbERpcnMsIGRpcnMpXG4gKiAgIGNvbXBpbGUodGVtcGxhdGUsIHBhcmVudE5vZGUpXG4gKiAgICAgaWYgKHR5cGUgaXMgY29udGVudCkgY3JlYXRlIGNvbnRlbnROb2RlXG4gKiAgICAgZWxzZSBpZiAoZGlycyBoYXZlIHYtZm9yKSBmb3JlYWNoIC0+IGNyZWF0ZSBjb250ZXh0XG4gKiAgICAgICAtPiBjb21waWxlKHRlbXBsYXRlV2l0aG91dEZvciwgcGFyZW50Tm9kZSk6IGRpZmYobGlzdCkgb25jaGFuZ2VcbiAqICAgICBlbHNlIGlmIChkaXJzIGhhdmUgdi1pZikgYXNzZXJ0XG4gKiAgICAgICAtPiBjb21waWxlKHRlbXBsYXRlV2l0aG91dElmLCBwYXJlbnROb2RlKTogdG9nZ2xlKHNob3duKSBvbmNoYW5nZVxuICogICAgIGVsc2UgaWYgKHR5cGUgaXMgZHluYW1pYylcbiAqICAgICAgIC0+IGNvbXBpbGUodGVtcGxhdGVXaXRob3V0RHluYW1pY1R5cGUsIHBhcmVudE5vZGUpOiB3YXRjaCh0eXBlKSBvbmNoYW5nZVxuICogICAgIGVsc2UgaWYgKHR5cGUgaXMgY3VzdG9tKVxuICogICAgICAgYWRkQ2hpbGRWbSh2bSwgcGFyZW50Vm0pXG4gKiAgICAgICBidWlsZChleHRlcm5hbERpcnMpXG4gKiAgICAgICBmb3JlYWNoIGNoaWxkTm9kZXMgLT4gY29tcGlsZShjaGlsZE5vZGUsIHRlbXBsYXRlKVxuICogICAgIGVsc2UgaWYgKHR5cGUgaXMgbmF0aXZlKVxuICogICAgICAgc2V0KGRpcnMpOiB1cGRhdGUoaWQvYXR0ci9zdHlsZS9jbGFzcykgb25jaGFuZ2VcbiAqICAgICAgIGFwcGVuZCh0ZW1wbGF0ZSwgcGFyZW50Tm9kZSlcbiAqICAgICAgIGZvcmVhY2ggY2hpbGROb2RlcyAtPiBjb21waWxlKGNoaWxkTm9kZSwgdGVtcGxhdGUpXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBidWlsZCAodm0pIHtcbiAgY29uc3Qgb3B0ID0gdm0uX29wdGlvbnMgfHwge31cbiAgY29uc3QgdGVtcGxhdGUgPSBvcHQudGVtcGxhdGUgfHwge31cblxuICBpZiAob3B0LnJlcGxhY2UpIHtcbiAgICBpZiAodGVtcGxhdGUuY2hpbGRyZW4gJiYgdGVtcGxhdGUuY2hpbGRyZW4ubGVuZ3RoID09PSAxKSB7XG4gICAgICBjb21waWxlKHZtLCB0ZW1wbGF0ZS5jaGlsZHJlblswXSwgdm0uX3BhcmVudEVsKVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGNvbXBpbGUodm0sIHRlbXBsYXRlLmNoaWxkcmVuLCB2bS5fcGFyZW50RWwpXG4gICAgfVxuICB9XG4gIGVsc2Uge1xuICAgIGNvbXBpbGUodm0sIHRlbXBsYXRlLCB2bS5fcGFyZW50RWwpXG4gIH1cblxuICBjb25zb2xlLmRlYnVnKGBbSlMgRnJhbWV3b3JrXSBcInJlYWR5XCIgbGlmZWN5Y2xlIGluIFZtKCR7dm0uX3R5cGV9KWApXG4gIHZtLiRlbWl0KCdob29rOnJlYWR5JylcbiAgdm0uX3JlYWR5ID0gdHJ1ZVxufVxuXG4vKipcbiAqIEdlbmVyYXRlIGVsZW1lbnRzIGJ5IGNoaWxkIG9yIGNoaWxkcmVuIGFuZCBhcHBlbmQgdG8gcGFyZW50IGVsZW1lbnRzLlxuICogUm9vdCBlbGVtZW50IGluZm8gd291bGQgYmUgbWVyZ2VkIGlmIGhhcy4gVGhlIGZpcnN0IGFyZ3VtZW50IG1heSBiZSBhbiBhcnJheVxuICogaWYgdGhlIHJvb3QgZWxlbWVudCB3aXRoIG9wdGlvbnMucmVwbGFjZSBoYXMgbm90IG9ubHkgb25lIGNoaWxkLlxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fGFycmF5fSB0YXJnZXRcbiAqIEBwYXJhbSB7b2JqZWN0fSAgICAgICBkZXN0XG4gKiBAcGFyYW0ge29iamVjdH0gICAgICAgbWV0YVxuICovXG5mdW5jdGlvbiBjb21waWxlICh2bSwgdGFyZ2V0LCBkZXN0LCBtZXRhKSB7XG4gIGNvbnN0IGFwcCA9IHZtLl9hcHAgfHwge31cblxuICBpZiAoYXBwLmxhc3RTaWduYWwgPT09IC0xKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICBpZiAodGFyZ2V0SXNGcmFnbWVudCh0YXJnZXQpKSB7XG4gICAgY29tcGlsZUZyYWdtZW50KHZtLCB0YXJnZXQsIGRlc3QsIG1ldGEpXG4gICAgcmV0dXJuXG4gIH1cbiAgbWV0YSA9IG1ldGEgfHwge31cbiAgaWYgKHRhcmdldElzQ29udGVudCh0YXJnZXQpKSB7XG4gICAgY29uc29sZS5kZWJ1ZygnW0pTIEZyYW1ld29ya10gY29tcGlsZSBcImNvbnRlbnRcIiBibG9jayBieScsIHRhcmdldClcbiAgICB2bS5fY29udGVudCA9IGNyZWF0ZUJsb2NrKHZtLCBkZXN0KVxuICAgIHJldHVyblxuICB9XG5cbiAgaWYgKHRhcmdldE5lZWRDaGVja1JlcGVhdCh0YXJnZXQsIG1ldGEpKSB7XG4gICAgY29uc29sZS5kZWJ1ZygnW0pTIEZyYW1ld29ya10gY29tcGlsZSBcInJlcGVhdFwiIGxvZ2ljIGJ5JywgdGFyZ2V0KVxuICAgIGNvbXBpbGVSZXBlYXQodm0sIHRhcmdldCwgZGVzdClcbiAgICByZXR1cm5cbiAgfVxuICBpZiAodGFyZ2V0TmVlZENoZWNrU2hvd24odGFyZ2V0LCBtZXRhKSkge1xuICAgIGNvbnNvbGUuZGVidWcoJ1tKUyBGcmFtZXdvcmtdIGNvbXBpbGUgXCJpZlwiIGxvZ2ljIGJ5JywgdGFyZ2V0KVxuICAgIGNvbXBpbGVTaG93bih2bSwgdGFyZ2V0LCBkZXN0LCBtZXRhKVxuICAgIHJldHVyblxuICB9XG4gIGNvbnN0IHR5cGVHZXR0ZXIgPSBtZXRhLnR5cGUgfHwgdGFyZ2V0LnR5cGVcbiAgaWYgKHRhcmdldE5lZWRDaGVja1R5cGUodHlwZUdldHRlciwgbWV0YSkpIHtcbiAgICBjb21waWxlVHlwZSh2bSwgdGFyZ2V0LCBkZXN0LCB0eXBlR2V0dGVyLCBtZXRhKVxuICAgIHJldHVyblxuICB9XG4gIGNvbnN0IHR5cGUgPSB0eXBlR2V0dGVyXG4gIGNvbnN0IGNvbXBvbmVudCA9IHRhcmdldElzQ29tcG9zZWQodm0sIHRhcmdldCwgdHlwZSlcbiAgaWYgKGNvbXBvbmVudCkge1xuICAgIGNvbnNvbGUuZGVidWcoJ1tKUyBGcmFtZXdvcmtdIGNvbXBpbGUgY29tcG9zZWQgY29tcG9uZW50IGJ5JywgdGFyZ2V0KVxuICAgIGNvbXBpbGVDdXN0b21Db21wb25lbnQodm0sIGNvbXBvbmVudCwgdGFyZ2V0LCBkZXN0LCB0eXBlLCBtZXRhKVxuICAgIHJldHVyblxuICB9XG4gIGNvbnNvbGUuZGVidWcoJ1tKUyBGcmFtZXdvcmtdIGNvbXBpbGUgbmF0aXZlIGNvbXBvbmVudCBieScsIHRhcmdldClcbiAgY29tcGlsZU5hdGl2ZUNvbXBvbmVudCh2bSwgdGFyZ2V0LCBkZXN0LCB0eXBlKVxufVxuXG4vKipcbiAqIENoZWNrIGlmIHRhcmdldCBpcyBhIGZyYWdtZW50IChhbiBhcnJheSkuXG4gKlxuICogQHBhcmFtICB7b2JqZWN0fSAgdGFyZ2V0XG4gKiBAcmV0dXJuIHtib29sZWFufVxuICovXG5mdW5jdGlvbiB0YXJnZXRJc0ZyYWdtZW50ICh0YXJnZXQpIHtcbiAgcmV0dXJuIEFycmF5LmlzQXJyYXkodGFyZ2V0KVxufVxuXG4vKipcbiAqIENoZWNrIGlmIHRhcmdldCB0eXBlIGlzIGNvbnRlbnQvc2xvdC5cbiAqXG4gKiBAcGFyYW0gIHtvYmplY3R9ICB0YXJnZXRcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKi9cbmZ1bmN0aW9uIHRhcmdldElzQ29udGVudCAodGFyZ2V0KSB7XG4gIHJldHVybiB0YXJnZXQudHlwZSA9PT0gJ2NvbnRlbnQnIHx8IHRhcmdldC50eXBlID09PSAnc2xvdCdcbn1cblxuLyoqXG4gKiBDaGVjayBpZiB0YXJnZXQgbmVlZCB0byBjb21waWxlIGJ5IGEgbGlzdC5cbiAqXG4gKiBAcGFyYW0gIHtvYmplY3R9ICB0YXJnZXRcbiAqIEBwYXJhbSAge29iamVjdH0gIG1ldGFcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKi9cbmZ1bmN0aW9uIHRhcmdldE5lZWRDaGVja1JlcGVhdCAodGFyZ2V0LCBtZXRhKSB7XG4gIHJldHVybiAhbWV0YS5oYXNPd25Qcm9wZXJ0eSgncmVwZWF0JykgJiYgdGFyZ2V0LnJlcGVhdFxufVxuXG4vKipcbiAqIENoZWNrIGlmIHRhcmdldCBuZWVkIHRvIGNvbXBpbGUgYnkgYSBib29sZWFuIHZhbHVlLlxuICpcbiAqIEBwYXJhbSAge29iamVjdH0gIHRhcmdldFxuICogQHBhcmFtICB7b2JqZWN0fSAgbWV0YVxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqL1xuZnVuY3Rpb24gdGFyZ2V0TmVlZENoZWNrU2hvd24gKHRhcmdldCwgbWV0YSkge1xuICByZXR1cm4gIW1ldGEuaGFzT3duUHJvcGVydHkoJ3Nob3duJykgJiYgdGFyZ2V0LnNob3duXG59XG5cbi8qKlxuICogQ2hlY2sgaWYgdGFyZ2V0IG5lZWQgdG8gY29tcGlsZSBieSBhIGR5bmFtaWMgdHlwZS5cbiAqXG4gKiBAcGFyYW0gIHtzdHJpbmd8ZnVuY3Rpb259IHR5cGVHZXR0ZXJcbiAqIEBwYXJhbSAge29iamVjdH0gICAgICAgICAgbWV0YVxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqL1xuZnVuY3Rpb24gdGFyZ2V0TmVlZENoZWNrVHlwZSAodHlwZUdldHRlciwgbWV0YSkge1xuICByZXR1cm4gKHR5cGVvZiB0eXBlR2V0dGVyID09PSAnZnVuY3Rpb24nKSAmJiAhbWV0YS5oYXNPd25Qcm9wZXJ0eSgndHlwZScpXG59XG5cbi8qKlxuICogQ2hlY2sgaWYgdGhpcyBraW5kIG9mIGNvbXBvbmVudCBpcyBjb21wb3NlZC5cbiAqXG4gKiBAcGFyYW0gIHtzdHJpbmd9ICB0eXBlXG4gKiBAcmV0dXJuIHtib29sZWFufVxuICovXG5mdW5jdGlvbiB0YXJnZXRJc0NvbXBvc2VkICh2bSwgdGFyZ2V0LCB0eXBlKSB7XG4gIGxldCBjb21wb25lbnRcbiAgaWYgKHZtLl9hcHAgJiYgdm0uX2FwcC5jdXN0b21Db21wb25lbnRNYXApIHtcbiAgICBjb21wb25lbnQgPSB2bS5fYXBwLmN1c3RvbUNvbXBvbmVudE1hcFt0eXBlXVxuICB9XG4gIGlmICh2bS5fb3B0aW9ucyAmJiB2bS5fb3B0aW9ucy5jb21wb25lbnRzKSB7XG4gICAgY29tcG9uZW50ID0gdm0uX29wdGlvbnMuY29tcG9uZW50c1t0eXBlXVxuICB9XG4gIGlmICh0YXJnZXQuY29tcG9uZW50KSB7XG4gICAgY29tcG9uZW50ID0gY29tcG9uZW50IHx8IHt9XG4gIH1cbiAgcmV0dXJuIGNvbXBvbmVudFxufVxuXG4vKipcbiAqIENvbXBpbGUgYSBsaXN0IG9mIHRhcmdldHMuXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IHRhcmdldFxuICogQHBhcmFtIHtvYmplY3R9IGRlc3RcbiAqIEBwYXJhbSB7b2JqZWN0fSBtZXRhXG4gKi9cbmZ1bmN0aW9uIGNvbXBpbGVGcmFnbWVudCAodm0sIHRhcmdldCwgZGVzdCwgbWV0YSkge1xuICBjb25zdCBmcmFnQmxvY2sgPSBjcmVhdGVCbG9jayh2bSwgZGVzdClcbiAgdGFyZ2V0LmZvckVhY2goKGNoaWxkKSA9PiB7XG4gICAgY29tcGlsZSh2bSwgY2hpbGQsIGZyYWdCbG9jaywgbWV0YSlcbiAgfSlcbn1cblxuLyoqXG4gKiBDb21waWxlIGEgdGFyZ2V0IHdpdGggcmVwZWF0IGRpcmVjdGl2ZS5cbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gdGFyZ2V0XG4gKiBAcGFyYW0ge29iamVjdH0gZGVzdFxuICovXG5mdW5jdGlvbiBjb21waWxlUmVwZWF0ICh2bSwgdGFyZ2V0LCBkZXN0KSB7XG4gIGNvbnN0IHJlcGVhdCA9IHRhcmdldC5yZXBlYXRcbiAgY29uc3Qgb2xkU3R5bGUgPSB0eXBlb2YgcmVwZWF0ID09PSAnZnVuY3Rpb24nXG4gIGxldCBnZXR0ZXIgPSByZXBlYXQuZ2V0dGVyIHx8IHJlcGVhdC5leHByZXNzaW9uIHx8IHJlcGVhdFxuICBpZiAodHlwZW9mIGdldHRlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIGdldHRlciA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIFtdIH1cbiAgfVxuICBjb25zdCBrZXkgPSByZXBlYXQua2V5IHx8ICckaW5kZXgnXG4gIGNvbnN0IHZhbHVlID0gcmVwZWF0LnZhbHVlIHx8ICckdmFsdWUnXG4gIGNvbnN0IHRyYWNrQnkgPSByZXBlYXQudHJhY2tCeSB8fCB0YXJnZXQudHJhY2tCeSB8fFxuICAgICh0YXJnZXQuYXR0ciAmJiB0YXJnZXQuYXR0ci50cmFja0J5KVxuXG4gIGNvbnN0IGZyYWdCbG9jayA9IGNyZWF0ZUJsb2NrKHZtLCBkZXN0KVxuICBmcmFnQmxvY2suY2hpbGRyZW4gPSBbXVxuICBmcmFnQmxvY2suZGF0YSA9IFtdXG4gIGZyYWdCbG9jay52bXMgPSBbXVxuXG4gIGJpbmRSZXBlYXQodm0sIHRhcmdldCwgZnJhZ0Jsb2NrLCB7IGdldHRlciwga2V5LCB2YWx1ZSwgdHJhY2tCeSwgb2xkU3R5bGUgfSlcbn1cblxuLyoqXG4gKiBDb21waWxlIGEgdGFyZ2V0IHdpdGggaWYgZGlyZWN0aXZlLlxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSB0YXJnZXRcbiAqIEBwYXJhbSB7b2JqZWN0fSBkZXN0XG4gKiBAcGFyYW0ge29iamVjdH0gbWV0YVxuICovXG5mdW5jdGlvbiBjb21waWxlU2hvd24gKHZtLCB0YXJnZXQsIGRlc3QsIG1ldGEpIHtcbiAgY29uc3QgbmV3TWV0YSA9IHsgc2hvd246IHRydWUgfVxuICBjb25zdCBmcmFnQmxvY2sgPSBjcmVhdGVCbG9jayh2bSwgZGVzdClcblxuICBpZiAoZGVzdC5lbGVtZW50ICYmIGRlc3QuY2hpbGRyZW4pIHtcbiAgICBkZXN0LmNoaWxkcmVuLnB1c2goZnJhZ0Jsb2NrKVxuICB9XG5cbiAgaWYgKG1ldGEucmVwZWF0KSB7XG4gICAgbmV3TWV0YS5yZXBlYXQgPSBtZXRhLnJlcGVhdFxuICB9XG5cbiAgYmluZFNob3duKHZtLCB0YXJnZXQsIGZyYWdCbG9jaywgbmV3TWV0YSlcbn1cblxuLyoqXG4gKiBDb21waWxlIGEgdGFyZ2V0IHdpdGggZHluYW1pYyBjb21wb25lbnQgdHlwZS5cbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gICB0YXJnZXRcbiAqIEBwYXJhbSB7b2JqZWN0fSAgIGRlc3RcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IHR5cGVHZXR0ZXJcbiAqL1xuZnVuY3Rpb24gY29tcGlsZVR5cGUgKHZtLCB0YXJnZXQsIGRlc3QsIHR5cGVHZXR0ZXIsIG1ldGEpIHtcbiAgY29uc3QgdHlwZSA9IHR5cGVHZXR0ZXIuY2FsbCh2bSlcbiAgY29uc3QgbmV3TWV0YSA9IGV4dGVuZCh7IHR5cGUgfSwgbWV0YSlcbiAgY29uc3QgZnJhZ0Jsb2NrID0gY3JlYXRlQmxvY2sodm0sIGRlc3QpXG5cbiAgaWYgKGRlc3QuZWxlbWVudCAmJiBkZXN0LmNoaWxkcmVuKSB7XG4gICAgZGVzdC5jaGlsZHJlbi5wdXNoKGZyYWdCbG9jaylcbiAgfVxuXG4gIHdhdGNoKHZtLCB0eXBlR2V0dGVyLCAodmFsdWUpID0+IHtcbiAgICBjb25zdCBuZXdNZXRhID0gZXh0ZW5kKHsgdHlwZTogdmFsdWUgfSwgbWV0YSlcbiAgICByZW1vdmVUYXJnZXQodm0sIGZyYWdCbG9jaywgdHJ1ZSlcbiAgICBjb21waWxlKHZtLCB0YXJnZXQsIGZyYWdCbG9jaywgbmV3TWV0YSlcbiAgfSlcblxuICBjb21waWxlKHZtLCB0YXJnZXQsIGZyYWdCbG9jaywgbmV3TWV0YSlcbn1cblxuLyoqXG4gKiBDb21waWxlIGEgY29tcG9zZWQgY29tcG9uZW50LlxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSB0YXJnZXRcbiAqIEBwYXJhbSB7b2JqZWN0fSBkZXN0XG4gKiBAcGFyYW0ge3N0cmluZ30gdHlwZVxuICovXG5mdW5jdGlvbiBjb21waWxlQ3VzdG9tQ29tcG9uZW50ICh2bSwgY29tcG9uZW50LCB0YXJnZXQsIGRlc3QsIHR5cGUsIG1ldGEpIHtcbiAgY29uc3QgQ3RvciA9IHZtLmNvbnN0cnVjdG9yXG4gIGNvbnN0IHN1YlZtID0gbmV3IEN0b3IodHlwZSwgY29tcG9uZW50LCB2bSwgZGVzdCwgdW5kZWZpbmVkLCB7XG4gICAgJ2hvb2s6aW5pdCc6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHNldElkKHZtLCBudWxsLCB0YXJnZXQuaWQsIHRoaXMpXG4gICAgICAvLyBiaW5kIHRlbXBsYXRlIGVhcmxpZXIgYmVjYXVzZSBvZiBsaWZlY3ljbGUgaXNzdWVzXG4gICAgICB0aGlzLl9leHRlcm5hbEJpbmRpbmcgPSB7XG4gICAgICAgIHBhcmVudDogdm0sXG4gICAgICAgIHRlbXBsYXRlOiB0YXJnZXRcbiAgICAgIH1cbiAgICB9LFxuICAgICdob29rOmNyZWF0ZWQnOiBmdW5jdGlvbiAoKSB7XG4gICAgICBiaW5kU3ViVm0odm0sIHRoaXMsIHRhcmdldCwgbWV0YS5yZXBlYXQpXG4gICAgfSxcbiAgICAnaG9vazpyZWFkeSc6IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICh0aGlzLl9jb250ZW50KSB7XG4gICAgICAgIGNvbXBpbGVDaGlsZHJlbih2bSwgdGFyZ2V0LCB0aGlzLl9jb250ZW50KVxuICAgICAgfVxuICAgIH1cbiAgfSlcbiAgYmluZFN1YlZtQWZ0ZXJJbml0aWFsaXplZCh2bSwgc3ViVm0sIHRhcmdldClcbn1cblxuLyoqXG4gKiBHZW5lcmF0ZSBlbGVtZW50IGZyb20gdGVtcGxhdGUgYW5kIGF0dGFjaCB0byB0aGUgZGVzdCBpZiBuZWVkZWQuXG4gKiBUaGUgdGltZSB0byBhdHRhY2ggZGVwZW5kcyBvbiB3aGV0aGVyIHRoZSBtb2RlIHN0YXR1cyBpcyBub2RlIG9yIHRyZWUuXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IHRlbXBsYXRlXG4gKiBAcGFyYW0ge29iamVjdH0gZGVzdFxuICogQHBhcmFtIHtzdHJpbmd9IHR5cGVcbiAqL1xuZnVuY3Rpb24gY29tcGlsZU5hdGl2ZUNvbXBvbmVudCAodm0sIHRlbXBsYXRlLCBkZXN0LCB0eXBlKSB7XG4gIGFwcGx5TmFpdHZlQ29tcG9uZW50T3B0aW9ucyh0ZW1wbGF0ZSlcblxuICBsZXQgZWxlbWVudFxuICBpZiAoZGVzdC5yZWYgPT09ICdfZG9jdW1lbnRFbGVtZW50Jykge1xuICAgIC8vIGlmIGl0cyBwYXJlbnQgaXMgZG9jdW1lbnRFbGVtZW50IHRoZW4gaXQncyBhIGJvZHlcbiAgICBjb25zb2xlLmRlYnVnKGBbSlMgRnJhbWV3b3JrXSBjb21waWxlIHRvIGNyZWF0ZSBib2R5IGZvciAke3R5cGV9YClcbiAgICBlbGVtZW50ID0gY3JlYXRlQm9keSh2bSwgdHlwZSlcbiAgfVxuICBlbHNlIHtcbiAgICBjb25zb2xlLmRlYnVnKGBbSlMgRnJhbWV3b3JrXSBjb21waWxlIHRvIGNyZWF0ZSBlbGVtZW50IGZvciAke3R5cGV9YClcbiAgICBlbGVtZW50ID0gY3JlYXRlRWxlbWVudCh2bSwgdHlwZSlcbiAgfVxuXG4gIGlmICghdm0uX3Jvb3RFbCkge1xuICAgIHZtLl9yb290RWwgPSBlbGVtZW50XG4gICAgLy8gYmluZCBldmVudCBlYXJsaWVyIGJlY2F1c2Ugb2YgbGlmZWN5Y2xlIGlzc3Vlc1xuICAgIGNvbnN0IGJpbmRpbmcgPSB2bS5fZXh0ZXJuYWxCaW5kaW5nIHx8IHt9XG4gICAgY29uc3QgdGFyZ2V0ID0gYmluZGluZy50ZW1wbGF0ZVxuICAgIGNvbnN0IHBhcmVudFZtID0gYmluZGluZy5wYXJlbnRcbiAgICBpZiAodGFyZ2V0ICYmIHRhcmdldC5ldmVudHMgJiYgcGFyZW50Vm0gJiYgZWxlbWVudCkge1xuICAgICAgZm9yIChjb25zdCB0eXBlIGluIHRhcmdldC5ldmVudHMpIHtcbiAgICAgICAgY29uc3QgaGFuZGxlciA9IHBhcmVudFZtW3RhcmdldC5ldmVudHNbdHlwZV1dXG4gICAgICAgIGlmIChoYW5kbGVyKSB7XG4gICAgICAgICAgZWxlbWVudC5hZGRFdmVudCh0eXBlLCBiaW5kKGhhbmRsZXIsIHBhcmVudFZtKSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGJpbmRFbGVtZW50KHZtLCBlbGVtZW50LCB0ZW1wbGF0ZSlcblxuICBpZiAodGVtcGxhdGUuYXR0ciAmJiB0ZW1wbGF0ZS5hdHRyLmFwcGVuZCkgeyAvLyBiYWNrd2FyZCwgYXBwZW5kIHByb3AgaW4gYXR0clxuICAgIHRlbXBsYXRlLmFwcGVuZCA9IHRlbXBsYXRlLmF0dHIuYXBwZW5kXG4gIH1cblxuICBpZiAodGVtcGxhdGUuYXBwZW5kKSB7IC8vIGdpdmUgdGhlIGFwcGVuZCBhdHRyaWJ1dGUgZm9yIGlvcyBhZGFwdGF0aW9uXG4gICAgZWxlbWVudC5hdHRyID0gZWxlbWVudC5hdHRyIHx8IHt9XG4gICAgZWxlbWVudC5hdHRyLmFwcGVuZCA9IHRlbXBsYXRlLmFwcGVuZFxuICB9XG5cbiAgY29uc3QgdHJlZU1vZGUgPSB0ZW1wbGF0ZS5hcHBlbmQgPT09ICd0cmVlJ1xuICBjb25zdCBhcHAgPSB2bS5fYXBwIHx8IHt9XG4gIGlmIChhcHAubGFzdFNpZ25hbCAhPT0gLTEgJiYgIXRyZWVNb2RlKSB7XG4gICAgY29uc29sZS5kZWJ1ZygnW0pTIEZyYW1ld29ya10gY29tcGlsZSB0byBhcHBlbmQgc2luZ2xlIG5vZGUgZm9yJywgZWxlbWVudClcbiAgICBhcHAubGFzdFNpZ25hbCA9IGF0dGFjaFRhcmdldCh2bSwgZWxlbWVudCwgZGVzdClcbiAgfVxuICBpZiAoYXBwLmxhc3RTaWduYWwgIT09IC0xKSB7XG4gICAgY29tcGlsZUNoaWxkcmVuKHZtLCB0ZW1wbGF0ZSwgZWxlbWVudClcbiAgfVxuICBpZiAoYXBwLmxhc3RTaWduYWwgIT09IC0xICYmIHRyZWVNb2RlKSB7XG4gICAgY29uc29sZS5kZWJ1ZygnW0pTIEZyYW1ld29ya10gY29tcGlsZSB0byBhcHBlbmQgd2hvbGUgdHJlZSBmb3InLCBlbGVtZW50KVxuICAgIGFwcC5sYXN0U2lnbmFsID0gYXR0YWNoVGFyZ2V0KHZtLCBlbGVtZW50LCBkZXN0KVxuICB9XG59XG5cbi8qKlxuICogU2V0IGFsbCBjaGlsZHJlbiB0byBhIGNlcnRhaW4gcGFyZW50IGVsZW1lbnQuXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IHRlbXBsYXRlXG4gKiBAcGFyYW0ge29iamVjdH0gZGVzdFxuICovXG5mdW5jdGlvbiBjb21waWxlQ2hpbGRyZW4gKHZtLCB0ZW1wbGF0ZSwgZGVzdCkge1xuICBjb25zdCBhcHAgPSB2bS5fYXBwIHx8IHt9XG4gIGNvbnN0IGNoaWxkcmVuID0gdGVtcGxhdGUuY2hpbGRyZW5cbiAgaWYgKGNoaWxkcmVuICYmIGNoaWxkcmVuLmxlbmd0aCkge1xuICAgIGNoaWxkcmVuLmV2ZXJ5KChjaGlsZCkgPT4ge1xuICAgICAgY29tcGlsZSh2bSwgY2hpbGQsIGRlc3QpXG4gICAgICByZXR1cm4gYXBwLmxhc3RTaWduYWwgIT09IC0xXG4gICAgfSlcbiAgfVxufVxuXG4vKipcbiAqIFdhdGNoIHRoZSBsaXN0IHVwZGF0ZSBhbmQgcmVmcmVzaCB0aGUgY2hhbmdlcy5cbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gdGFyZ2V0XG4gKiBAcGFyYW0ge29iamVjdH0gZnJhZ0Jsb2NrIHt2bXMsIGRhdGEsIGNoaWxkcmVufVxuICogQHBhcmFtIHtvYmplY3R9IGluZm8gICAgICB7Z2V0dGVyLCBrZXksIHZhbHVlLCB0cmFja0J5LCBvbGRTdHlsZX1cbiAqL1xuZnVuY3Rpb24gYmluZFJlcGVhdCAodm0sIHRhcmdldCwgZnJhZ0Jsb2NrLCBpbmZvKSB7XG4gIGNvbnN0IHZtcyA9IGZyYWdCbG9jay52bXNcbiAgY29uc3QgY2hpbGRyZW4gPSBmcmFnQmxvY2suY2hpbGRyZW5cbiAgY29uc3QgeyBnZXR0ZXIsIHRyYWNrQnksIG9sZFN0eWxlIH0gPSBpbmZvXG4gIGNvbnN0IGtleU5hbWUgPSBpbmZvLmtleVxuICBjb25zdCB2YWx1ZU5hbWUgPSBpbmZvLnZhbHVlXG5cbiAgZnVuY3Rpb24gY29tcGlsZUl0ZW0gKGl0ZW0sIGluZGV4LCBjb250ZXh0KSB7XG4gICAgbGV0IG1lcmdlZERhdGFcbiAgICBpZiAob2xkU3R5bGUpIHtcbiAgICAgIG1lcmdlZERhdGEgPSBpdGVtXG4gICAgICBpZiAodHlwZW9mIGl0ZW0gPT09ICdvYmplY3QnKSB7XG4gICAgICAgIG1lcmdlZERhdGFba2V5TmFtZV0gPSBpbmRleFxuICAgICAgICBpZiAoIW1lcmdlZERhdGEuaGFzT3duUHJvcGVydHkoJ0lOREVYJykpIHtcbiAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobWVyZ2VkRGF0YSwgJ0lOREVYJywge1xuICAgICAgICAgICAgdmFsdWU6ICgpID0+IHtcbiAgICAgICAgICAgICAgY29uc29sZS53YXJuKCdbSlMgRnJhbWV3b3JrXSBcIklOREVYXCIgaW4gcmVwZWF0IGlzIGRlcHJlY2F0ZWQsICcgK1xuICAgICAgICAgICAgICAgICdwbGVhc2UgdXNlIFwiJGluZGV4XCIgaW5zdGVhZCcpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIG1lcmdlZERhdGEgPSB7fVxuICAgICAgbWVyZ2VkRGF0YVtrZXlOYW1lXSA9IGluZGV4XG4gICAgICBtZXJnZWREYXRhW3ZhbHVlTmFtZV0gPSBpdGVtXG4gICAgfVxuICAgIGNvbnN0IG5ld0NvbnRleHQgPSBtZXJnZUNvbnRleHQoY29udGV4dCwgbWVyZ2VkRGF0YSlcbiAgICB2bXMucHVzaChuZXdDb250ZXh0KVxuICAgIGNvbXBpbGUobmV3Q29udGV4dCwgdGFyZ2V0LCBmcmFnQmxvY2ssIHsgcmVwZWF0OiBpdGVtIH0pXG4gIH1cblxuICBjb25zdCBsaXN0ID0gd2F0Y2hCbG9jayh2bSwgZnJhZ0Jsb2NrLCBnZXR0ZXIsICdyZXBlYXQnLFxuICAgIChkYXRhKSA9PiB7XG4gICAgICBjb25zb2xlLmRlYnVnKCdbSlMgRnJhbWV3b3JrXSB0aGUgXCJyZXBlYXRcIiBpdGVtIGhhcyBjaGFuZ2VkJywgZGF0YSlcbiAgICAgIGlmICghZnJhZ0Jsb2NrKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBjb25zdCBvbGRDaGlsZHJlbiA9IGNoaWxkcmVuLnNsaWNlKClcbiAgICAgIGNvbnN0IG9sZFZtcyA9IHZtcy5zbGljZSgpXG4gICAgICBjb25zdCBvbGREYXRhID0gZnJhZ0Jsb2NrLmRhdGEuc2xpY2UoKVxuICAgICAgLy8gMS4gY29sbGVjdCBhbGwgbmV3IHJlZnMgdHJhY2sgYnlcbiAgICAgIGNvbnN0IHRyYWNrTWFwID0ge31cbiAgICAgIGNvbnN0IHJldXNlZE1hcCA9IHt9XG4gICAgICBkYXRhLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IGtleSA9IHRyYWNrQnkgPyBpdGVtW3RyYWNrQnldIDogKG9sZFN0eWxlID8gaXRlbVtrZXlOYW1lXSA6IGluZGV4KVxuICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICAgICAgaWYgKGtleSA9PSBudWxsIHx8IGtleSA9PT0gJycpIHtcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICB0cmFja01hcFtrZXldID0gaXRlbVxuICAgICAgfSlcblxuICAgICAgLy8gMi4gcmVtb3ZlIHVudXNlZCBlbGVtZW50IGZvcmVhY2ggb2xkIGl0ZW1cbiAgICAgIGNvbnN0IHJldXNlZExpc3QgPSBbXVxuICAgICAgb2xkRGF0YS5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICBjb25zdCBrZXkgPSB0cmFja0J5ID8gaXRlbVt0cmFja0J5XSA6IChvbGRTdHlsZSA/IGl0ZW1ba2V5TmFtZV0gOiBpbmRleClcbiAgICAgICAgaWYgKHRyYWNrTWFwLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICByZXVzZWRNYXBba2V5XSA9IHtcbiAgICAgICAgICAgIGl0ZW0sIGluZGV4LCBrZXksXG4gICAgICAgICAgICB0YXJnZXQ6IG9sZENoaWxkcmVuW2luZGV4XSxcbiAgICAgICAgICAgIHZtOiBvbGRWbXNbaW5kZXhdXG4gICAgICAgICAgfVxuICAgICAgICAgIHJldXNlZExpc3QucHVzaChpdGVtKVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIHJlbW92ZVRhcmdldCh2bSwgb2xkQ2hpbGRyZW5baW5kZXhdKVxuICAgICAgICB9XG4gICAgICB9KVxuXG4gICAgICAvLyAzLiBjcmVhdGUgbmV3IGVsZW1lbnQgZm9yZWFjaCBuZXcgaXRlbVxuICAgICAgY2hpbGRyZW4ubGVuZ3RoID0gMFxuICAgICAgdm1zLmxlbmd0aCA9IDBcbiAgICAgIGZyYWdCbG9jay5kYXRhID0gZGF0YS5zbGljZSgpXG4gICAgICBmcmFnQmxvY2sudXBkYXRlTWFyayA9IGZyYWdCbG9jay5zdGFydFxuXG4gICAgICBkYXRhLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IGtleSA9IHRyYWNrQnkgPyBpdGVtW3RyYWNrQnldIDogKG9sZFN0eWxlID8gaXRlbVtrZXlOYW1lXSA6IGluZGV4KVxuICAgICAgICBjb25zdCByZXVzZWQgPSByZXVzZWRNYXBba2V5XVxuICAgICAgICBpZiAocmV1c2VkKSB7XG4gICAgICAgICAgaWYgKHJldXNlZC5pdGVtID09PSByZXVzZWRMaXN0WzBdKSB7XG4gICAgICAgICAgICByZXVzZWRMaXN0LnNoaWZ0KClcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXVzZWRMaXN0LiRyZW1vdmUocmV1c2VkLml0ZW0pXG4gICAgICAgICAgICBtb3ZlVGFyZ2V0KHZtLCByZXVzZWQudGFyZ2V0LCBmcmFnQmxvY2sudXBkYXRlTWFyaywgdHJ1ZSlcbiAgICAgICAgICB9XG4gICAgICAgICAgY2hpbGRyZW4ucHVzaChyZXVzZWQudGFyZ2V0KVxuICAgICAgICAgIHZtcy5wdXNoKHJldXNlZC52bSlcbiAgICAgICAgICBpZiAob2xkU3R5bGUpIHtcbiAgICAgICAgICAgIHJldXNlZC52bSA9IGl0ZW1cbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXVzZWQudm1bdmFsdWVOYW1lXSA9IGl0ZW1cbiAgICAgICAgICB9XG4gICAgICAgICAgcmV1c2VkLnZtW2tleU5hbWVdID0gaW5kZXhcbiAgICAgICAgICBmcmFnQmxvY2sudXBkYXRlTWFyayA9IHJldXNlZC50YXJnZXRcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBjb21waWxlSXRlbShpdGVtLCBpbmRleCwgdm0pXG4gICAgICAgIH1cbiAgICAgIH0pXG5cbiAgICAgIGRlbGV0ZSBmcmFnQmxvY2sudXBkYXRlTWFya1xuICAgIH1cbiAgKVxuXG4gIGZyYWdCbG9jay5kYXRhID0gbGlzdC5zbGljZSgwKVxuICBsaXN0LmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgY29tcGlsZUl0ZW0oaXRlbSwgaW5kZXgsIHZtKVxuICB9KVxufVxuXG4vKipcbiAqIFdhdGNoIHRoZSBkaXNwbGF5IHVwZGF0ZSBhbmQgYWRkL3JlbW92ZSB0aGUgZWxlbWVudC5cbiAqXG4gKiBAcGFyYW0gIHtvYmplY3R9IHRhcmdldFxuICogQHBhcmFtICB7b2JqZWN0fSBmcmFnQmxvY2tcbiAqIEBwYXJhbSAge29iamVjdH0gY29udGV4dFxuICovXG5mdW5jdGlvbiBiaW5kU2hvd24gKHZtLCB0YXJnZXQsIGZyYWdCbG9jaywgbWV0YSkge1xuICBjb25zdCBkaXNwbGF5ID0gd2F0Y2hCbG9jayh2bSwgZnJhZ0Jsb2NrLCB0YXJnZXQuc2hvd24sICdzaG93bicsXG4gICAgKGRpc3BsYXkpID0+IHtcbiAgICAgIGNvbnNvbGUuZGVidWcoJ1tKUyBGcmFtZXdvcmtdIHRoZSBcImlmXCIgaXRlbSB3YXMgY2hhbmdlZCcsIGRpc3BsYXkpXG5cbiAgICAgIGlmICghZnJhZ0Jsb2NrIHx8ICEhZnJhZ0Jsb2NrLmRpc3BsYXkgPT09ICEhZGlzcGxheSkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIGZyYWdCbG9jay5kaXNwbGF5ID0gISFkaXNwbGF5XG4gICAgICBpZiAoZGlzcGxheSkge1xuICAgICAgICBjb21waWxlKHZtLCB0YXJnZXQsIGZyYWdCbG9jaywgbWV0YSlcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICByZW1vdmVUYXJnZXQodm0sIGZyYWdCbG9jaywgdHJ1ZSlcbiAgICAgIH1cbiAgICB9XG4gIClcblxuICBmcmFnQmxvY2suZGlzcGxheSA9ICEhZGlzcGxheVxuICBpZiAoZGlzcGxheSkge1xuICAgIGNvbXBpbGUodm0sIHRhcmdldCwgZnJhZ0Jsb2NrLCBtZXRhKVxuICB9XG59XG5cbi8qKlxuICogV2F0Y2ggY2FsYyB2YWx1ZSBjaGFuZ2VzIGFuZCBhcHBlbmQgY2VydGFpbiB0eXBlIGFjdGlvbiB0byBkaWZmZXIuXG4gKiBJdCBpcyB1c2VkIGZvciBpZiBvciByZXBlYXQgZGF0YS1iaW5kaW5nIGdlbmVyYXRvci5cbiAqXG4gKiBAcGFyYW0gIHtvYmplY3R9ICAgZnJhZ0Jsb2NrXG4gKiBAcGFyYW0gIHtmdW5jdGlvbn0gY2FsY1xuICogQHBhcmFtICB7c3RyaW5nfSAgIHR5cGVcbiAqIEBwYXJhbSAge2Z1bmN0aW9ufSBoYW5kbGVyXG4gKiBAcmV0dXJuIHthbnl9ICAgICAgaW5pdCB2YWx1ZSBvZiBjYWxjXG4gKi9cbmZ1bmN0aW9uIHdhdGNoQmxvY2sgKHZtLCBmcmFnQmxvY2ssIGNhbGMsIHR5cGUsIGhhbmRsZXIpIHtcbiAgY29uc3QgZGlmZmVyID0gdm0gJiYgdm0uX2FwcCAmJiB2bS5fYXBwLmRpZmZlclxuICBjb25zdCBjb25maWcgPSB7fVxuICBjb25zdCBkZXB0aCA9IChmcmFnQmxvY2suZWxlbWVudC5kZXB0aCB8fCAwKSArIDFcblxuICByZXR1cm4gd2F0Y2godm0sIGNhbGMsICh2YWx1ZSkgPT4ge1xuICAgIGNvbmZpZy5sYXRlc3RWYWx1ZSA9IHZhbHVlXG4gICAgaWYgKGRpZmZlciAmJiAhY29uZmlnLnJlY29yZGVkKSB7XG4gICAgICBkaWZmZXIuYXBwZW5kKHR5cGUsIGRlcHRoLCBmcmFnQmxvY2suYmxvY2tJZCwgKCkgPT4ge1xuICAgICAgICBjb25zdCBsYXRlc3RWYWx1ZSA9IGNvbmZpZy5sYXRlc3RWYWx1ZVxuICAgICAgICBoYW5kbGVyKGxhdGVzdFZhbHVlKVxuICAgICAgICBjb25maWcucmVjb3JkZWQgPSBmYWxzZVxuICAgICAgICBjb25maWcubGF0ZXN0VmFsdWUgPSB1bmRlZmluZWRcbiAgICAgIH0pXG4gICAgfVxuICAgIGNvbmZpZy5yZWNvcmRlZCA9IHRydWVcbiAgfSlcbn1cblxuLyoqXG4gKiBDbG9uZSBhIGNvbnRleHQgYW5kIG1lcmdlIGNlcnRhaW4gZGF0YS5cbiAqXG4gKiBAcGFyYW0gIHtvYmplY3R9IG1lcmdlZERhdGFcbiAqIEByZXR1cm4ge29iamVjdH1cbiAqL1xuZnVuY3Rpb24gbWVyZ2VDb250ZXh0IChjb250ZXh0LCBtZXJnZWREYXRhKSB7XG4gIGNvbnN0IG5ld0NvbnRleHQgPSBPYmplY3QuY3JlYXRlKGNvbnRleHQpXG4gIG5ld0NvbnRleHQuX2RhdGEgPSBtZXJnZWREYXRhXG4gIGluaXREYXRhKG5ld0NvbnRleHQpXG4gIGluaXRDb21wdXRlZChuZXdDb250ZXh0KVxuICBuZXdDb250ZXh0Ll9yZWFsUGFyZW50ID0gY29udGV4dFxuICByZXR1cm4gbmV3Q29udGV4dFxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9odG1sNS9kZWZhdWx0L3ZtL2NvbXBpbGVyLmpzXG4gKiovIiwiLyoqXG4gKiBAZmlsZU92ZXJ2aWV3XG4gKiBEaXJlY3RpdmUgUGFyc2VyXG4gKi9cblxuaW1wb3J0IHsgYmluZCwgdHlwb2YgfSBmcm9tICcuLi91dGlsJ1xuXG5pbXBvcnQgV2F0Y2hlciBmcm9tICcuLi9jb3JlL3dhdGNoZXInXG5pbXBvcnQgY29uZmlnIGZyb20gJy4uL2NvbmZpZydcblxuY29uc3QgeyBuYXRpdmVDb21wb25lbnRNYXAgfSA9IGNvbmZpZ1xuXG5jb25zdCBTRVRURVJTID0ge1xuICBhdHRyOiAnc2V0QXR0cicsXG4gIHN0eWxlOiAnc2V0U3R5bGUnLFxuICBldmVudDogJ2FkZEV2ZW50J1xufVxuXG4vKipcbiAqIGFwcGx5IHRoZSBuYXRpdmUgY29tcG9uZW50J3Mgb3B0aW9ucyhzcGVjaWZpZWQgYnkgdGVtcGxhdGUudHlwZSlcbiAqIHRvIHRoZSB0ZW1wbGF0ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gYXBwbHlOYWl0dmVDb21wb25lbnRPcHRpb25zICh0ZW1wbGF0ZSkge1xuICBjb25zdCB7IHR5cGUgfSA9IHRlbXBsYXRlXG4gIGNvbnN0IG9wdGlvbnMgPSBuYXRpdmVDb21wb25lbnRNYXBbdHlwZV1cblxuICBpZiAodHlwZW9mIG9wdGlvbnMgPT09ICdvYmplY3QnKSB7XG4gICAgZm9yIChjb25zdCBrZXkgaW4gb3B0aW9ucykge1xuICAgICAgaWYgKHRlbXBsYXRlW2tleV0gPT0gbnVsbCkge1xuICAgICAgICB0ZW1wbGF0ZVtrZXldID0gb3B0aW9uc1trZXldXG4gICAgICB9XG4gICAgICBlbHNlIGlmICh0eXBvZih0ZW1wbGF0ZVtrZXldKSA9PT0gJ29iamVjdCcgJiZcbiAgICAgICAgdHlwb2Yob3B0aW9uc1trZXldKSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgZm9yIChjb25zdCBzdWJrZXkgaW4gb3B0aW9uc1trZXldKSB7XG4gICAgICAgICAgaWYgKHRlbXBsYXRlW2tleV1bc3Via2V5XSA9PSBudWxsKSB7XG4gICAgICAgICAgICB0ZW1wbGF0ZVtrZXldW3N1YmtleV0gPSBvcHRpb25zW2tleV1bc3Via2V5XVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIGJpbmQgYWxsIGlkLCBhdHRyLCBjbGFzc25hbWVzLCBzdHlsZSwgZXZlbnRzIHRvIGFuIGVsZW1lbnRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGJpbmRFbGVtZW50ICh2bSwgZWwsIHRlbXBsYXRlKSB7XG4gIHNldElkKHZtLCBlbCwgdGVtcGxhdGUuaWQsIHZtKVxuICBzZXRBdHRyKHZtLCBlbCwgdGVtcGxhdGUuYXR0cilcbiAgc2V0Q2xhc3Modm0sIGVsLCB0ZW1wbGF0ZS5jbGFzc0xpc3QpXG4gIHNldFN0eWxlKHZtLCBlbCwgdGVtcGxhdGUuc3R5bGUpXG4gIGJpbmRFdmVudHModm0sIGVsLCB0ZW1wbGF0ZS5ldmVudHMpXG59XG5cbi8qKlxuICogYmluZCBhbGwgcHJvcHMgdG8gc3ViIHZtIGFuZCBiaW5kIGFsbCBzdHlsZSwgZXZlbnRzIHRvIHRoZSByb290IGVsZW1lbnRcbiAqIG9mIHRoZSBzdWIgdm0gaWYgaXQgZG9lc24ndCBoYXZlIGEgcmVwbGFjZWQgbXVsdGktbm9kZSBmcmFnbWVudFxuICovXG5leHBvcnQgZnVuY3Rpb24gYmluZFN1YlZtICh2bSwgc3ViVm0sIHRlbXBsYXRlLCByZXBlYXRJdGVtKSB7XG4gIHN1YlZtID0gc3ViVm0gfHwge31cbiAgdGVtcGxhdGUgPSB0ZW1wbGF0ZSB8fCB7fVxuXG4gIGNvbnN0IG9wdGlvbnMgPSBzdWJWbS5fb3B0aW9ucyB8fCB7fVxuXG4gIC8vIGJpbmQgcHJvcHNcbiAgbGV0IHByb3BzID0gb3B0aW9ucy5wcm9wc1xuXG4gIGlmIChBcnJheS5pc0FycmF5KHByb3BzKSkge1xuICAgIHByb3BzID0gcHJvcHMucmVkdWNlKChyZXN1bHQsIHZhbHVlKSA9PiB7XG4gICAgICByZXN1bHRbdmFsdWVdID0gdHJ1ZVxuICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH0sIHt9KVxuICB9XG5cbiAgbWVyZ2VQcm9wcyhyZXBlYXRJdGVtLCBwcm9wcywgdm0sIHN1YlZtKVxuICBtZXJnZVByb3BzKHRlbXBsYXRlLmF0dHIsIHByb3BzLCB2bSwgc3ViVm0pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBiaW5kU3ViVm1BZnRlckluaXRpYWxpemVkICh2bSwgc3ViVm0sIHRlbXBsYXRlKSB7XG4gIG1lcmdlQ2xhc3NTdHlsZSh0ZW1wbGF0ZS5jbGFzc0xpc3QsIHZtLCBzdWJWbSlcbiAgbWVyZ2VTdHlsZSh0ZW1wbGF0ZS5zdHlsZSwgdm0sIHN1YlZtKVxufVxuXG5mdW5jdGlvbiBtZXJnZVByb3BzICh0YXJnZXQsIHByb3BzLCB2bSwgc3ViVm0pIHtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICByZXR1cm5cbiAgfVxuICBmb3IgKGNvbnN0IGtleSBpbiB0YXJnZXQpIHtcbiAgICBpZiAoIXByb3BzIHx8IHByb3BzW2tleV0pIHtcbiAgICAgIGNvbnN0IHZhbHVlID0gdGFyZ2V0W2tleV1cbiAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgY29uc3QgcmV0dXJuVmFsdWUgPSB3YXRjaCh2bSwgdmFsdWUsIGZ1bmN0aW9uICh2KSB7XG4gICAgICAgICAgc3ViVm1ba2V5XSA9IHZcbiAgICAgICAgfSlcbiAgICAgICAgc3ViVm1ba2V5XSA9IHJldHVyblZhbHVlXG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgc3ViVm1ba2V5XSA9IHZhbHVlXG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIG1lcmdlU3R5bGUgKHRhcmdldCwgdm0sIHN1YlZtKSB7XG4gIGZvciAoY29uc3Qga2V5IGluIHRhcmdldCkge1xuICAgIGNvbnN0IHZhbHVlID0gdGFyZ2V0W2tleV1cbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjb25zdCByZXR1cm5WYWx1ZSA9IHdhdGNoKHZtLCB2YWx1ZSwgZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgaWYgKHN1YlZtLl9yb290RWwpIHtcbiAgICAgICAgICBzdWJWbS5fcm9vdEVsLnNldFN0eWxlKGtleSwgdilcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIHN1YlZtLl9yb290RWwuc2V0U3R5bGUoa2V5LCByZXR1cm5WYWx1ZSlcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBpZiAoc3ViVm0uX3Jvb3RFbCkge1xuICAgICAgICBzdWJWbS5fcm9vdEVsLnNldFN0eWxlKGtleSwgdmFsdWUpXG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIG1lcmdlQ2xhc3NTdHlsZSAodGFyZ2V0LCB2bSwgc3ViVm0pIHtcbiAgY29uc3QgY3NzID0gdm0uX29wdGlvbnMgJiYgdm0uX29wdGlvbnMuc3R5bGUgfHwge31cblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgaWYgKCFzdWJWbS5fcm9vdEVsKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICBpZiAodHlwZW9mIHRhcmdldCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGNvbnN0IHZhbHVlID0gd2F0Y2godm0sIHRhcmdldCwgdiA9PiB7XG4gICAgICBzZXRDbGFzc1N0eWxlKHN1YlZtLl9yb290RWwsIGNzcywgdilcbiAgICB9KVxuICAgIHNldENsYXNzU3R5bGUoc3ViVm0uX3Jvb3RFbCwgY3NzLCB2YWx1ZSlcbiAgfVxuICBlbHNlIGlmICh0YXJnZXQgIT0gbnVsbCkge1xuICAgIHNldENsYXNzU3R5bGUoc3ViVm0uX3Jvb3RFbCwgY3NzLCB0YXJnZXQpXG4gIH1cbn1cblxuLyoqXG4gKiBiaW5kIGlkIHRvIGFuIGVsZW1lbnRcbiAqIGVhY2ggaWQgaXMgdW5pcXVlIGluIGEgd2hvbGUgdm1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNldElkICh2bSwgZWwsIGlkLCB0YXJnZXQpIHtcbiAgY29uc3QgbWFwID0gT2JqZWN0LmNyZWF0ZShudWxsKVxuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKG1hcCwge1xuICAgIHZtOiB7XG4gICAgICB2YWx1ZTogdGFyZ2V0LFxuICAgICAgd3JpdGFibGU6IGZhbHNlLFxuICAgICAgY29uZmlndXJhYmxlOiBmYWxzZVxuICAgIH0sXG4gICAgZWw6IHtcbiAgICAgIGdldDogKCkgPT4gZWwgfHwgdGFyZ2V0Ll9yb290RWwsXG4gICAgICBjb25maWd1cmFibGU6IGZhbHNlXG4gICAgfVxuICB9KVxuXG4gIGlmICh0eXBlb2YgaWQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBjb25zdCBoYW5kbGVyID0gaWRcbiAgICBpZCA9IGhhbmRsZXIuY2FsbCh2bSlcbiAgICBpZiAoaWQpIHtcbiAgICAgIHZtLl9pZHNbaWRdID0gbWFwXG4gICAgfVxuICAgIHdhdGNoKHZtLCBoYW5kbGVyLCAobmV3SWQpID0+IHtcbiAgICAgIGlmIChuZXdJZCkge1xuICAgICAgICB2bS5faWRzW25ld0lkXSA9IG1hcFxuICAgICAgfVxuICAgIH0pXG4gIH1cbiAgZWxzZSBpZiAoaWQgJiYgdHlwZW9mIGlkID09PSAnc3RyaW5nJykge1xuICAgIHZtLl9pZHNbaWRdID0gbWFwXG4gIH1cbn1cblxuLyoqXG4gKiBiaW5kIGF0dHIgdG8gYW4gZWxlbWVudFxuICovXG5mdW5jdGlvbiBzZXRBdHRyICh2bSwgZWwsIGF0dHIpIHtcbiAgYmluZERpcih2bSwgZWwsICdhdHRyJywgYXR0cilcbn1cblxuZnVuY3Rpb24gc2V0Q2xhc3NTdHlsZSAoZWwsIGNzcywgY2xhc3NMaXN0KSB7XG4gIGNvbnN0IGNsYXNzU3R5bGUgPSB7fVxuICBjb25zdCBsZW5ndGggPSBjbGFzc0xpc3QubGVuZ3RoXG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IHN0eWxlID0gY3NzW2NsYXNzTGlzdFtpXV1cbiAgICBpZiAoc3R5bGUpIHtcbiAgICAgIGZvciAoY29uc3Qga2V5IGluIHN0eWxlKSB7XG4gICAgICAgIGNsYXNzU3R5bGVba2V5XSA9IHN0eWxlW2tleV1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgZWwuc2V0Q2xhc3NTdHlsZShjbGFzc1N0eWxlKVxufVxuXG4vKipcbiAqIGJpbmQgY2xhc3NuYW1lcyB0byBhbiBlbGVtZW50XG4gKi9cbmZ1bmN0aW9uIHNldENsYXNzICh2bSwgZWwsIGNsYXNzTGlzdCkge1xuICBpZiAodHlwZW9mIGNsYXNzTGlzdCAhPT0gJ2Z1bmN0aW9uJyAmJiAhQXJyYXkuaXNBcnJheShjbGFzc0xpc3QpKSB7XG4gICAgcmV0dXJuXG4gIH1cbiAgaWYgKEFycmF5LmlzQXJyYXkoY2xhc3NMaXN0KSAmJiAhY2xhc3NMaXN0Lmxlbmd0aCkge1xuICAgIGVsLnNldENsYXNzU3R5bGUoe30pXG4gICAgcmV0dXJuXG4gIH1cblxuICBjb25zdCBzdHlsZSA9IHZtLl9vcHRpb25zICYmIHZtLl9vcHRpb25zLnN0eWxlIHx8IHt9XG4gIGlmICh0eXBlb2YgY2xhc3NMaXN0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgY29uc3QgdmFsdWUgPSB3YXRjaCh2bSwgY2xhc3NMaXN0LCB2ID0+IHtcbiAgICAgIHNldENsYXNzU3R5bGUoZWwsIHN0eWxlLCB2KVxuICAgIH0pXG4gICAgc2V0Q2xhc3NTdHlsZShlbCwgc3R5bGUsIHZhbHVlKVxuICB9XG4gIGVsc2Uge1xuICAgIHNldENsYXNzU3R5bGUoZWwsIHN0eWxlLCBjbGFzc0xpc3QpXG4gIH1cbn1cblxuLyoqXG4gKiBiaW5kIHN0eWxlIHRvIGFuIGVsZW1lbnRcbiAqL1xuZnVuY3Rpb24gc2V0U3R5bGUgKHZtLCBlbCwgc3R5bGUpIHtcbiAgYmluZERpcih2bSwgZWwsICdzdHlsZScsIHN0eWxlKVxufVxuXG4vKipcbiAqIGFkZCBhbiBldmVudCB0eXBlIGFuZCBoYW5kbGVyIHRvIGFuIGVsZW1lbnQgYW5kIGdlbmVyYXRlIGEgZG9tIHVwZGF0ZVxuICovXG5mdW5jdGlvbiBzZXRFdmVudCAodm0sIGVsLCB0eXBlLCBoYW5kbGVyKSB7XG4gIGVsLmFkZEV2ZW50KHR5cGUsIGJpbmQoaGFuZGxlciwgdm0pKVxufVxuXG4vKipcbiAqIGFkZCBhbGwgZXZlbnRzIG9mIGFuIGVsZW1lbnRcbiAqL1xuZnVuY3Rpb24gYmluZEV2ZW50cyAodm0sIGVsLCBldmVudHMpIHtcbiAgaWYgKCFldmVudHMpIHtcbiAgICByZXR1cm5cbiAgfVxuICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMoZXZlbnRzKVxuICBsZXQgaSA9IGtleXMubGVuZ3RoXG4gIHdoaWxlIChpLS0pIHtcbiAgICBjb25zdCBrZXkgPSBrZXlzW2ldXG4gICAgbGV0IGhhbmRsZXIgPSBldmVudHNba2V5XVxuICAgIGlmICh0eXBlb2YgaGFuZGxlciA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGhhbmRsZXIgPSB2bVtoYW5kbGVyXVxuICAgICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgICBpZiAoIWhhbmRsZXIpIHtcbiAgICAgICAgY29uc29sZS5kZWJ1ZyhgW0pTIEZyYW1ld29ya10gVGhlIG1ldGhvZCBcIiR7aGFuZGxlcn1cIiBpcyBub3QgZGVmaW5lZC5gKVxuICAgICAgfVxuICAgIH1cbiAgICBzZXRFdmVudCh2bSwgZWwsIGtleSwgaGFuZGxlcilcbiAgfVxufVxuXG4vKipcbiAqIHNldCBhIHNlcmllcyBvZiBtZW1iZXJzIGFzIGEga2luZCBvZiBhbiBlbGVtZW50XG4gKiBmb3IgZXhhbXBsZTogc3R5bGUsIGF0dHIsIC4uLlxuICogaWYgdGhlIHZhbHVlIGlzIGEgZnVuY3Rpb24gdGhlbiBiaW5kIHRoZSBkYXRhIGNoYW5nZXNcbiAqL1xuZnVuY3Rpb24gYmluZERpciAodm0sIGVsLCBuYW1lLCBkYXRhKSB7XG4gIGlmICghZGF0YSkge1xuICAgIHJldHVyblxuICB9XG4gIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhkYXRhKVxuICBsZXQgaSA9IGtleXMubGVuZ3RoXG4gIHdoaWxlIChpLS0pIHtcbiAgICBjb25zdCBrZXkgPSBrZXlzW2ldXG4gICAgY29uc3QgdmFsdWUgPSBkYXRhW2tleV1cbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBiaW5kS2V5KHZtLCBlbCwgbmFtZSwga2V5LCB2YWx1ZSlcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBlbFtTRVRURVJTW25hbWVdXShrZXksIHZhbHVlKVxuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIGJpbmQgZGF0YSBjaGFuZ2VzIHRvIGEgY2VydGFpbiBrZXkgdG8gYSBuYW1lIHNlcmllcyBpbiBhbiBlbGVtZW50XG4gKi9cbmZ1bmN0aW9uIGJpbmRLZXkgKHZtLCBlbCwgbmFtZSwga2V5LCBjYWxjKSB7XG4gIGNvbnN0IG1ldGhvZE5hbWUgPSBTRVRURVJTW25hbWVdXG4gIC8vIHdhdGNoIHRoZSBjYWxjLCBhbmQgcmV0dXJucyBhIHZhbHVlIGJ5IGNhbGMuY2FsbCgpXG4gIGNvbnN0IHZhbHVlID0gd2F0Y2godm0sIGNhbGMsICh2YWx1ZSkgPT4ge1xuICAgIGZ1bmN0aW9uIGhhbmRsZXIgKCkge1xuICAgICAgZWxbbWV0aG9kTmFtZV0oa2V5LCB2YWx1ZSlcbiAgICB9XG4gICAgY29uc3QgZGlmZmVyID0gdm0gJiYgdm0uX2FwcCAmJiB2bS5fYXBwLmRpZmZlclxuICAgIGlmIChkaWZmZXIpIHtcbiAgICAgIGRpZmZlci5hcHBlbmQoJ2VsZW1lbnQnLCBlbC5kZXB0aCwgZWwucmVmLCBoYW5kbGVyKVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGhhbmRsZXIoKVxuICAgIH1cbiAgfSlcblxuICBlbFttZXRob2ROYW1lXShrZXksIHZhbHVlKVxufVxuXG4vKipcbiAqIHdhdGNoIGEgY2FsYyBmdW5jdGlvbiBhbmQgY2FsbGJhY2sgaWYgdGhlIGNhbGMgdmFsdWUgY2hhbmdlc1xuICovXG5leHBvcnQgZnVuY3Rpb24gd2F0Y2ggKHZtLCBjYWxjLCBjYWxsYmFjaykge1xuICBjb25zdCB3YXRjaGVyID0gbmV3IFdhdGNoZXIodm0sIGNhbGMsIGZ1bmN0aW9uICh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICBpZiAodHlwZW9mIHZhbHVlICE9PSAnb2JqZWN0JyAmJiB2YWx1ZSA9PT0gb2xkVmFsdWUpIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBjYWxsYmFjayh2YWx1ZSlcbiAgfSlcblxuICByZXR1cm4gd2F0Y2hlci52YWx1ZVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9odG1sNS9kZWZhdWx0L3ZtL2RpcmVjdGl2ZS5qc1xuICoqLyIsIi8qKlxuICogQGZpbGVPdmVydmlldyBEb2N1bWVudCAmIEVsZW1lbnQgSGVscGVycy5cbiAqXG4gKiByZXF1aXJlZDpcbiAqIERvY3VtZW50IzogY3JlYXRlRWxlbWVudCwgY3JlYXRlQ29tbWVudCwgZ2V0UmVmXG4gKiBFbGVtZW50IzogYXBwZW5kQ2hpbGQsIGluc2VydEJlZm9yZSwgcmVtb3ZlQ2hpbGQsIG5leHRTaWJsaW5nXG4gKi9cblxuLyoqXG4gKiBDcmVhdGUgYSBib2R5IGJ5IHR5cGVcbiAqIFVzaW5nIHRoaXMuX2FwcC5kb2NcbiAqXG4gKiBAcGFyYW0gIHtzdHJpbmd9IHR5cGVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUJvZHkgKHZtLCB0eXBlKSB7XG4gIGNvbnN0IGRvYyA9IHZtLl9hcHAuZG9jXG4gIHJldHVybiBkb2MuY3JlYXRlQm9keSh0eXBlKVxufVxuXG4vKipcbiAqIENyZWF0ZSBhbiBlbGVtZW50IGJ5IHR5cGVcbiAqIFVzaW5nIHRoaXMuX2FwcC5kb2NcbiAqXG4gKiBAcGFyYW0gIHtzdHJpbmd9IHR5cGVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQgKHZtLCB0eXBlKSB7XG4gIGNvbnN0IGRvYyA9IHZtLl9hcHAuZG9jXG4gIHJldHVybiBkb2MuY3JlYXRlRWxlbWVudCh0eXBlKVxufVxuXG4vKipcbiAqIENyZWF0ZSBhbmQgcmV0dXJuIGEgZnJhZyBibG9jayBmb3IgYW4gZWxlbWVudC5cbiAqIFRoZSBmcmFnIGJsb2NrIGhhcyBhIHN0YXJ0ZXIsIGVuZGVyIGFuZCB0aGUgZWxlbWVudCBpdHNlbGYuXG4gKlxuICogQHBhcmFtICB7b2JqZWN0fSBlbGVtZW50XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVCbG9jayAodm0sIGVsZW1lbnQpIHtcbiAgY29uc3Qgc3RhcnQgPSBjcmVhdGVCbG9ja1N0YXJ0KHZtKVxuICBjb25zdCBlbmQgPSBjcmVhdGVCbG9ja0VuZCh2bSlcbiAgY29uc3QgYmxvY2tJZCA9IGxhc3Rlc3RCbG9ja0lkKytcbiAgaWYgKGVsZW1lbnQuZWxlbWVudCkge1xuICAgIGxldCB1cGRhdGVNYXJrID0gZWxlbWVudC51cGRhdGVNYXJrXG4gICAgaWYgKHVwZGF0ZU1hcmspIHtcbiAgICAgIGlmICh1cGRhdGVNYXJrLmVsZW1lbnQpIHtcbiAgICAgICAgdXBkYXRlTWFyayA9IHVwZGF0ZU1hcmsuZW5kXG4gICAgICB9XG4gICAgICBlbGVtZW50LmVsZW1lbnQuaW5zZXJ0QWZ0ZXIoZW5kLCB1cGRhdGVNYXJrKVxuICAgICAgZWxlbWVudC5lbGVtZW50Lmluc2VydEFmdGVyKHN0YXJ0LCB1cGRhdGVNYXJrKVxuICAgICAgZWxlbWVudC51cGRhdGVNYXJrID0gZW5kXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgZWxlbWVudC5lbGVtZW50Lmluc2VydEJlZm9yZShzdGFydCwgZWxlbWVudC5lbmQpXG4gICAgICBlbGVtZW50LmVsZW1lbnQuaW5zZXJ0QmVmb3JlKGVuZCwgZWxlbWVudC5lbmQpXG4gICAgfVxuICAgIGVsZW1lbnQgPSBlbGVtZW50LmVsZW1lbnRcbiAgfVxuICBlbHNlIHtcbiAgICBlbGVtZW50LmFwcGVuZENoaWxkKHN0YXJ0KVxuICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoZW5kKVxuICB9XG4gIHJldHVybiB7IHN0YXJ0LCBlbmQsIGVsZW1lbnQsIGJsb2NrSWQgfVxufVxuXG5sZXQgbGFzdGVzdEJsb2NrSWQgPSAxXG5cbi8qKlxuICogQ3JlYXRlIGFuZCByZXR1cm4gYSBibG9jayBzdGFydGVyLlxuICogVXNpbmcgdGhpcy5fYXBwLmRvY1xuICovXG5mdW5jdGlvbiBjcmVhdGVCbG9ja1N0YXJ0ICh2bSkge1xuICBjb25zdCBkb2MgPSB2bS5fYXBwLmRvY1xuICBjb25zdCBhbmNob3IgPSBkb2MuY3JlYXRlQ29tbWVudCgnc3RhcnQnKVxuICByZXR1cm4gYW5jaG9yXG59XG5cbi8qKlxuICogQ3JlYXRlIGFuZCByZXR1cm4gYSBibG9jayBlbmRlci5cbiAqIFVzaW5nIHRoaXMuX2FwcC5kb2NcbiAqL1xuZnVuY3Rpb24gY3JlYXRlQmxvY2tFbmQgKHZtKSB7XG4gIGNvbnN0IGRvYyA9IHZtLl9hcHAuZG9jXG4gIGNvbnN0IGFuY2hvciA9IGRvYy5jcmVhdGVDb21tZW50KCdlbmQnKVxuICByZXR1cm4gYW5jaG9yXG59XG5cbi8qKlxuICogQXR0YWNoIHRhcmdldCB0byBhIGNlcnRhaW4gZGVzdCB1c2luZyBhcHBlbmRDaGlsZCBieSBkZWZhdWx0LlxuICogSWYgdGhlIGRlc3QgaXMgYSBmcmFnIGJsb2NrIHRoZW4gaW5zZXJ0IGJlZm9yZSB0aGUgZW5kZXIuXG4gKiBJZiB0aGUgdGFyZ2V0IGlzIGEgZnJhZyBibG9jayB0aGVuIGF0dGFjaCB0aGUgc3RhcnRlciBhbmQgZW5kZXIgaW4gb3JkZXIuXG4gKlxuICogQHBhcmFtICB7b2JqZWN0fSB0YXJnZXRcbiAqIEBwYXJhbSAge29iamVjdH0gZGVzdFxuICovXG5leHBvcnQgZnVuY3Rpb24gYXR0YWNoVGFyZ2V0ICh2bSwgdGFyZ2V0LCBkZXN0KSB7XG4gIGlmIChkZXN0LmVsZW1lbnQpIHtcbiAgICBjb25zdCBiZWZvcmUgPSBkZXN0LmVuZFxuICAgIGNvbnN0IGFmdGVyID0gZGVzdC51cGRhdGVNYXJrXG4gICAgLy8gcHVzaCBuZXcgdGFyZ2V0IGZvciB3YXRjaCBsaXN0IHVwZGF0ZSBsYXRlclxuICAgIGlmIChkZXN0LmNoaWxkcmVuKSB7XG4gICAgICBkZXN0LmNoaWxkcmVuLnB1c2godGFyZ2V0KVxuICAgIH1cbiAgICAvLyBmb3IgY2hlY2sgcmVwZWF0IGNhc2VcbiAgICBpZiAoYWZ0ZXIpIHtcbiAgICAgIGNvbnN0IHNpZ25hbCA9IG1vdmVUYXJnZXQodm0sIHRhcmdldCwgYWZ0ZXIpXG4gICAgICBkZXN0LnVwZGF0ZU1hcmsgPSB0YXJnZXQuZWxlbWVudCA/IHRhcmdldC5lbmQgOiB0YXJnZXRcbiAgICAgIHJldHVybiBzaWduYWxcbiAgICB9XG4gICAgZWxzZSBpZiAodGFyZ2V0LmVsZW1lbnQpIHtcbiAgICAgIGRlc3QuZWxlbWVudC5pbnNlcnRCZWZvcmUodGFyZ2V0LnN0YXJ0LCBiZWZvcmUpXG4gICAgICBkZXN0LmVsZW1lbnQuaW5zZXJ0QmVmb3JlKHRhcmdldC5lbmQsIGJlZm9yZSlcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICByZXR1cm4gZGVzdC5lbGVtZW50Lmluc2VydEJlZm9yZSh0YXJnZXQsIGJlZm9yZSlcbiAgICB9XG4gIH1cbiAgZWxzZSB7XG4gICAgaWYgKHRhcmdldC5lbGVtZW50KSB7XG4gICAgICBkZXN0LmFwcGVuZENoaWxkKHRhcmdldC5zdGFydClcbiAgICAgIGRlc3QuYXBwZW5kQ2hpbGQodGFyZ2V0LmVuZClcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICByZXR1cm4gZGVzdC5hcHBlbmRDaGlsZCh0YXJnZXQpXG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogTW92ZSB0YXJnZXQgYmVmb3JlIGEgY2VydGFpbiBlbGVtZW50LiBUaGUgdGFyZ2V0IG1heWJlIGJsb2NrIG9yIGVsZW1lbnQuXG4gKlxuICogQHBhcmFtICB7b2JqZWN0fSB0YXJnZXRcbiAqIEBwYXJhbSAge29iamVjdH0gYmVmb3JlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtb3ZlVGFyZ2V0ICh2bSwgdGFyZ2V0LCBhZnRlcikge1xuICBpZiAodGFyZ2V0LmVsZW1lbnQpIHtcbiAgICByZXR1cm4gbW92ZUJsb2NrKHRhcmdldCwgYWZ0ZXIpXG4gIH1cbiAgcmV0dXJuIG1vdmVFbGVtZW50KHRhcmdldCwgYWZ0ZXIpXG59XG5cbi8qKlxuICogTW92ZSBlbGVtZW50IGJlZm9yZSBhIGNlcnRhaW4gZWxlbWVudC5cbiAqXG4gKiBAcGFyYW0gIHtvYmplY3R9IGVsZW1lbnRcbiAqIEBwYXJhbSAge29iamVjdH0gYmVmb3JlXG4gKi9cbmZ1bmN0aW9uIG1vdmVFbGVtZW50IChlbGVtZW50LCBhZnRlcikge1xuICBjb25zdCBwYXJlbnQgPSBhZnRlci5wYXJlbnROb2RlXG4gIGlmIChwYXJlbnQpIHtcbiAgICByZXR1cm4gcGFyZW50Lmluc2VydEFmdGVyKGVsZW1lbnQsIGFmdGVyKVxuICB9XG59XG5cbi8qKlxuICogTW92ZSBhbGwgZWxlbWVudHMgb2YgdGhlIGJsb2NrIGJlZm9yZSBhIGNlcnRhaW4gZWxlbWVudC5cbiAqXG4gKiBAcGFyYW0gIHtvYmplY3R9IGZyYWdCbG9ja1xuICogQHBhcmFtICB7b2JqZWN0fSBiZWZvcmVcbiAqL1xuZnVuY3Rpb24gbW92ZUJsb2NrIChmcmFnQmxvY2ssIGFmdGVyKSB7XG4gIGNvbnN0IHBhcmVudCA9IGFmdGVyLnBhcmVudE5vZGVcblxuICBpZiAocGFyZW50KSB7XG4gICAgbGV0IGVsID0gZnJhZ0Jsb2NrLnN0YXJ0XG4gICAgbGV0IHNpZ25hbFxuICAgIGNvbnN0IGdyb3VwID0gW2VsXVxuXG4gICAgd2hpbGUgKGVsICYmIGVsICE9PSBmcmFnQmxvY2suZW5kKSB7XG4gICAgICBlbCA9IGVsLm5leHRTaWJsaW5nXG4gICAgICBncm91cC5wdXNoKGVsKVxuICAgIH1cblxuICAgIGxldCB0ZW1wID0gYWZ0ZXJcbiAgICBncm91cC5ldmVyeSgoZWwpID0+IHtcbiAgICAgIHNpZ25hbCA9IHBhcmVudC5pbnNlcnRBZnRlcihlbCwgdGVtcClcbiAgICAgIHRlbXAgPSBlbFxuICAgICAgcmV0dXJuIHNpZ25hbCAhPT0gLTFcbiAgICB9KVxuXG4gICAgcmV0dXJuIHNpZ25hbFxuICB9XG59XG5cbi8qKlxuICogUmVtb3ZlIHRhcmdldCBmcm9tIERPTSB0cmVlLlxuICogSWYgdGhlIHRhcmdldCBpcyBhIGZyYWcgYmxvY2sgdGhlbiBjYWxsIF9yZW1vdmVCbG9ja1xuICpcbiAqIEBwYXJhbSAge29iamVjdH0gdGFyZ2V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVUYXJnZXQgKHZtLCB0YXJnZXQsIHByZXNlcnZlQmxvY2sgPSBmYWxzZSkge1xuICBpZiAodGFyZ2V0LmVsZW1lbnQpIHtcbiAgICByZW1vdmVCbG9jayh0YXJnZXQsIHByZXNlcnZlQmxvY2spXG4gIH1cbiAgZWxzZSB7XG4gICAgcmVtb3ZlRWxlbWVudCh0YXJnZXQpXG4gIH1cbn1cblxuLyoqXG4gKiBSZW1vdmUgYSBjZXJ0YWluIGVsZW1lbnQuXG4gKiBVc2luZyB0aGlzLl9hcHAuZG9jXG4gKlxuICogQHBhcmFtICB7b2JqZWN0fSB0YXJnZXRcbiAqL1xuZnVuY3Rpb24gcmVtb3ZlRWxlbWVudCAodGFyZ2V0KSB7XG4gIGNvbnN0IHBhcmVudCA9IHRhcmdldC5wYXJlbnROb2RlXG5cbiAgaWYgKHBhcmVudCkge1xuICAgIHBhcmVudC5yZW1vdmVDaGlsZCh0YXJnZXQpXG4gIH1cbn1cblxuLyoqXG4gKiBSZW1vdmUgYSBmcmFnIGJsb2NrLlxuICogVGhlIHNlY29uZCBwYXJhbSBkZWNpZGVzIHdoZXRoZXIgdGhlIGJsb2NrIHNlbGYgc2hvdWxkIGJlIHJlbW92ZWQgdG9vLlxuICpcbiAqIEBwYXJhbSAge29iamVjdH0gIGZyYWdCbG9ja1xuICogQHBhcmFtICB7Qm9vbGVhbn0gcHJlc2VydmVCbG9jaz1mYWxzZVxuICovXG5mdW5jdGlvbiByZW1vdmVCbG9jayAoZnJhZ0Jsb2NrLCBwcmVzZXJ2ZUJsb2NrID0gZmFsc2UpIHtcbiAgY29uc3QgcmVzdWx0ID0gW11cbiAgbGV0IGVsID0gZnJhZ0Jsb2NrLnN0YXJ0Lm5leHRTaWJsaW5nXG5cbiAgd2hpbGUgKGVsICYmIGVsICE9PSBmcmFnQmxvY2suZW5kKSB7XG4gICAgcmVzdWx0LnB1c2goZWwpXG4gICAgZWwgPSBlbC5uZXh0U2libGluZ1xuICB9XG5cbiAgaWYgKCFwcmVzZXJ2ZUJsb2NrKSB7XG4gICAgcmVtb3ZlRWxlbWVudChmcmFnQmxvY2suc3RhcnQpXG4gIH1cbiAgcmVzdWx0LmZvckVhY2goKGVsKSA9PiB7XG4gICAgcmVtb3ZlRWxlbWVudChlbClcbiAgfSlcbiAgaWYgKCFwcmVzZXJ2ZUJsb2NrKSB7XG4gICAgcmVtb3ZlRWxlbWVudChmcmFnQmxvY2suZW5kKVxuICB9XG59XG5cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vaHRtbDUvZGVmYXVsdC92bS9kb20taGVscGVyLmpzXG4gKiovIiwiZnVuY3Rpb24gRXZ0ICh0eXBlLCBkZXRhaWwpIHtcbiAgaWYgKGRldGFpbCBpbnN0YW5jZW9mIEV2dCkge1xuICAgIHJldHVybiBkZXRhaWxcbiAgfVxuXG4gIHRoaXMudGltZXN0YW1wID0gRGF0ZS5ub3coKVxuICB0aGlzLmRldGFpbCA9IGRldGFpbFxuICB0aGlzLnR5cGUgPSB0eXBlXG5cbiAgbGV0IHNob3VsZFN0b3AgPSBmYWxzZVxuICB0aGlzLnN0b3AgPSBmdW5jdGlvbiAoKSB7XG4gICAgc2hvdWxkU3RvcCA9IHRydWVcbiAgfVxuICB0aGlzLmhhc1N0b3BwZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHNob3VsZFN0b3BcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gJGVtaXQgKHR5cGUsIGRldGFpbCkge1xuICBjb25zdCBldmVudHMgPSB0aGlzLl92bUV2ZW50c1xuICBjb25zdCBoYW5kbGVyTGlzdCA9IGV2ZW50c1t0eXBlXVxuICBpZiAoaGFuZGxlckxpc3QpIHtcbiAgICBjb25zdCBldnQgPSBuZXcgRXZ0KHR5cGUsIGRldGFpbClcbiAgICBoYW5kbGVyTGlzdC5mb3JFYWNoKChoYW5kbGVyKSA9PiB7XG4gICAgICBoYW5kbGVyLmNhbGwodGhpcywgZXZ0KVxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uICRkaXNwYXRjaCAodHlwZSwgZGV0YWlsKSB7XG4gIGNvbnN0IGV2dCA9IG5ldyBFdnQodHlwZSwgZGV0YWlsKVxuICB0aGlzLiRlbWl0KHR5cGUsIGV2dClcblxuICBpZiAoIWV2dC5oYXNTdG9wcGVkKCkgJiYgdGhpcy5fcGFyZW50ICYmIHRoaXMuX3BhcmVudC4kZGlzcGF0Y2gpIHtcbiAgICB0aGlzLl9wYXJlbnQuJGRpc3BhdGNoKHR5cGUsIGV2dClcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gJGJyb2FkY2FzdCAodHlwZSwgZGV0YWlsKSB7XG4gIGNvbnN0IGV2dCA9IG5ldyBFdnQodHlwZSwgZGV0YWlsKVxuICB0aGlzLiRlbWl0KHR5cGUsIGV2dClcblxuICBpZiAoIWV2dC5oYXNTdG9wcGVkKCkgJiYgdGhpcy5fY2hpbGRyZW5WbXMpIHtcbiAgICB0aGlzLl9jaGlsZHJlblZtcy5mb3JFYWNoKChzdWJWbSkgPT4ge1xuICAgICAgc3ViVm0uJGJyb2FkY2FzdCh0eXBlLCBldnQpXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gJG9uICh0eXBlLCBoYW5kbGVyKSB7XG4gIGlmICghdHlwZSB8fCB0eXBlb2YgaGFuZGxlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVyblxuICB9XG4gIGNvbnN0IGV2ZW50cyA9IHRoaXMuX3ZtRXZlbnRzXG4gIGNvbnN0IGhhbmRsZXJMaXN0ID0gZXZlbnRzW3R5cGVdIHx8IFtdXG4gIGhhbmRsZXJMaXN0LnB1c2goaGFuZGxlcilcbiAgZXZlbnRzW3R5cGVdID0gaGFuZGxlckxpc3RcblxuICAvLyBmaXhlZCBvbGQgdmVyc2lvbiBsaWZlY3ljbGUgZGVzaWduXG4gIGlmICh0eXBlID09PSAnaG9vazpyZWFkeScgJiYgdGhpcy5fcmVhZHkpIHtcbiAgICB0aGlzLiRlbWl0KCdob29rOnJlYWR5JylcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gJG9mZiAodHlwZSwgaGFuZGxlcikge1xuICBpZiAoIXR5cGUpIHtcbiAgICByZXR1cm5cbiAgfVxuICBjb25zdCBldmVudHMgPSB0aGlzLl92bUV2ZW50c1xuICBpZiAoIWhhbmRsZXIpIHtcbiAgICBkZWxldGUgZXZlbnRzW3R5cGVdXG4gICAgcmV0dXJuXG4gIH1cbiAgY29uc3QgaGFuZGxlckxpc3QgPSBldmVudHNbdHlwZV1cbiAgaWYgKCFoYW5kbGVyTGlzdCkge1xuICAgIHJldHVyblxuICB9XG4gIGhhbmRsZXJMaXN0LiRyZW1vdmUoaGFuZGxlcilcbn1cblxuY29uc3QgTElGRV9DWUNMRV9UWVBFUyA9IFsnaW5pdCcsICdjcmVhdGVkJywgJ3JlYWR5J11cblxuZXhwb3J0IGZ1bmN0aW9uIGluaXRFdmVudHMgKHZtLCBleHRlcm5hbEV2ZW50cykge1xuICBjb25zdCBvcHRpb25zID0gdm0uX29wdGlvbnMgfHwge31cbiAgY29uc3QgZXZlbnRzID0gb3B0aW9ucy5ldmVudHMgfHwge31cbiAgZm9yIChjb25zdCB0eXBlMSBpbiBldmVudHMpIHtcbiAgICB2bS4kb24odHlwZTEsIGV2ZW50c1t0eXBlMV0pXG4gIH1cbiAgZm9yIChjb25zdCB0eXBlMiBpbiBleHRlcm5hbEV2ZW50cykge1xuICAgIHZtLiRvbih0eXBlMiwgZXh0ZXJuYWxFdmVudHNbdHlwZTJdKVxuICB9XG4gIExJRkVfQ1lDTEVfVFlQRVMuZm9yRWFjaCgodHlwZSkgPT4ge1xuICAgIHZtLiRvbihgaG9vazoke3R5cGV9YCwgb3B0aW9uc1t0eXBlXSlcbiAgfSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1peGluRXZlbnRzICh2bSkge1xuICB2bS4kZW1pdCA9ICRlbWl0XG4gIHZtLiRkaXNwYXRjaCA9ICRkaXNwYXRjaFxuICB2bS4kYnJvYWRjYXN0ID0gJGJyb2FkY2FzdFxuICB2bS4kb24gPSAkb25cbiAgdm0uJG9mZiA9ICRvZmZcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vaHRtbDUvZGVmYXVsdC92bS9ldmVudHMuanNcbiAqKi8iLCJsZXQgbmF0aXZlTW9kdWxlcyA9IHt9XG5cbmZ1bmN0aW9uIGFzc2lnbk1vZHVsZXMgKG1vZHVsZXMsIGlmUmVwbGFjZSkge1xuICBmb3IgKGNvbnN0IG1vZHVsZU5hbWUgaW4gbW9kdWxlcykge1xuICAgIC8vIGluaXQgYG1vZHVsZXNbbW9kdWxlTmFtZV1bXWBcbiAgICBsZXQgbWV0aG9kcyA9IG5hdGl2ZU1vZHVsZXNbbW9kdWxlTmFtZV1cbiAgICBpZiAoIW1ldGhvZHMpIHtcbiAgICAgIG1ldGhvZHMgPSB7fVxuICAgICAgbmF0aXZlTW9kdWxlc1ttb2R1bGVOYW1lXSA9IG1ldGhvZHNcbiAgICB9XG5cbiAgICAvLyBwdXNoIGVhY2ggbm9uLWV4aXN0ZWQgbmV3IG1ldGhvZFxuICAgIG1vZHVsZXNbbW9kdWxlTmFtZV0uZm9yRWFjaChmdW5jdGlvbiAobWV0aG9kKSB7XG4gICAgICBpZiAodHlwZW9mIG1ldGhvZCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgbWV0aG9kID0ge1xuICAgICAgICAgIG5hbWU6IG1ldGhvZFxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICghbWV0aG9kc1ttZXRob2QubmFtZV0gfHwgaWZSZXBsYWNlKSB7XG4gICAgICAgIG1ldGhvZHNbbWV0aG9kLm5hbWVdID0gbWV0aG9kXG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuXG5mdW5jdGlvbiBhc3NpZ25BcGlzIChDdG9yLCBhcGlzKSB7XG4gIGNvbnN0IHAgPSBDdG9yLnByb3RvdHlwZVxuXG4gIGZvciAoY29uc3QgYXBpTmFtZSBpbiBhcGlzKSB7XG4gICAgaWYgKCFwLmhhc093blByb3BlcnR5KGFwaU5hbWUpKSB7XG4gICAgICBwW2FwaU5hbWVdID0gYXBpc1thcGlOYW1lXVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY2xlYXJNb2R1bGVzICgpIHtcbiAgbmF0aXZlTW9kdWxlcyA9IHt9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRNb2R1bGUgKG1vZHVsZU5hbWUpIHtcbiAgcmV0dXJuIG5hdGl2ZU1vZHVsZXNbbW9kdWxlTmFtZV1cbn1cblxuLyoqXG4gKiBAY29udGV4dCBhIGluc3RhbmNlIG9mIEFwcEluc3RhbmNlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZXF1aXJlTW9kdWxlIChtb2R1bGVOYW1lKSB7XG4gIGNvbnN0IG1ldGhvZHMgPSBuYXRpdmVNb2R1bGVzW21vZHVsZU5hbWVdXG4gIGNvbnN0IHRhcmdldCA9IHt9XG5cbiAgZm9yIChjb25zdCBtZXRob2ROYW1lIGluIG1ldGhvZHMpIHtcbiAgICB0YXJnZXRbbWV0aG9kTmFtZV0gPSAoLi4uYXJncykgPT4gdGhpcy5jYWxsVGFza3Moe1xuICAgICAgbW9kdWxlOiBtb2R1bGVOYW1lLFxuICAgICAgbWV0aG9kOiBtZXRob2ROYW1lLFxuICAgICAgYXJnczogYXJnc1xuICAgIH0pXG4gIH1cblxuICByZXR1cm4gdGFyZ2V0XG59XG5cbi8qKlxuICogQGNvbnRleHQgVm1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlZ2lzdGVyTW9kdWxlcyAobW9kdWxlcywgaWZSZXBsYWNlKSB7XG4gIGFzc2lnbk1vZHVsZXMobW9kdWxlcywgaWZSZXBsYWNlKVxufVxuXG4vKipcbiAqIEBjb250ZXh0IFZtXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZWdpc3Rlck1ldGhvZHMgKGFwaXMpIHtcbiAgYXNzaWduQXBpcyh0aGlzLCBhcGlzKVxufVxuXG4vKipcbiAqIEBjb250ZXh0IGEgaW5zdGFuY2Ugb2YgQXBwSW5zdGFuY2VcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlcXVpcmVDb21wb25lbnQgKG5hbWUpIHtcbiAgY29uc3QgeyBjdXN0b21Db21wb25lbnRNYXAgfSA9IHRoaXNcbiAgcmV0dXJuIGN1c3RvbUNvbXBvbmVudE1hcFtuYW1lXVxufVxuXG4vKipcbiAqIEBjb250ZXh0IGEgaW5zdGFuY2Ugb2YgQXBwSW5zdGFuY2VcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlZ2lzdGVyQ29tcG9uZW50IChuYW1lLCBkZWYpIHtcbiAgY29uc3QgeyBjdXN0b21Db21wb25lbnRNYXAgfSA9IHRoaXNcblxuICBpZiAoY3VzdG9tQ29tcG9uZW50TWFwW25hbWVdKSB7XG4gICAgY29uc29sZS5lcnJvcihgW0pTIEZyYW1ld29ya10gZGVmaW5lIGEgY29tcG9uZW50KCR7bmFtZX0pIHRoYXQgYWxyZWFkeSBleGlzdHNgKVxuICAgIHJldHVyblxuICB9XG5cbiAgY3VzdG9tQ29tcG9uZW50TWFwW25hbWVdID0gZGVmXG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2h0bWw1L2RlZmF1bHQvYXBwL3JlZ2lzdGVyLmpzXG4gKiovIiwiaW1wb3J0IHNlbXZlciBmcm9tICdzZW12ZXInXG5pbXBvcnQgeyBpc1BsYWluT2JqZWN0LCB0eXBvZiB9IGZyb20gJy4uL3V0aWwnXG5cbi8qKlxuICogW25vcm1hbGl6ZVZlcnNpb24gZGVzY3JpcHRpb25dXG4gKiBAcGFyYW0gIHtTdHJpbmd9IFZlcnNpb24uIGllOiAxLCAxLjAsIDEuMC4wXG4gKiBAcmV0dXJuIHtTdHJpbmd9IFZlcnNpb25cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG5vcm1hbGl6ZVZlcnNpb24gKHYpIHtcbiAgY29uc3QgaXNWYWxpZCA9IHNlbXZlci52YWxpZCh2KVxuICBpZiAoaXNWYWxpZCkge1xuICAgIHJldHVybiB2XG4gIH1cblxuICB2ID0gdHlwZW9mICh2KSA9PT0gJ3N0cmluZycgPyB2IDogJydcbiAgY29uc3Qgc3BsaXQgPSB2LnNwbGl0KCcuJylcbiAgbGV0IGkgPSAwXG4gIGNvbnN0IHJlc3VsdCA9IFtdXG5cbiAgd2hpbGUgKGkgPCAzKSB7XG4gICAgY29uc3QgcyA9IHR5cGVvZiAoc3BsaXRbaV0pID09PSAnc3RyaW5nJyAmJiBzcGxpdFtpXSA/IHNwbGl0W2ldIDogJzAnXG4gICAgcmVzdWx0LnB1c2gocylcbiAgICBpKytcbiAgfVxuXG4gIHJldHVybiByZXN1bHQuam9pbignLicpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRFcnJvciAoa2V5LCB2YWwsIGNyaXRlcmlhKSB7XG4gIGNvbnN0IHJlc3VsdCA9IHtcbiAgICBpc0Rvd25ncmFkZTogdHJ1ZSxcbiAgICBlcnJvclR5cGU6IDEsXG4gICAgY29kZTogMTAwMFxuICB9XG4gIGNvbnN0IGdldE1zZyA9IGZ1bmN0aW9uIChrZXksIHZhbCwgY3JpdGVyaWEpIHtcbiAgICByZXR1cm4gJ0Rvd25ncmFkZVsnICsga2V5ICsgJ10gOjogZGV2aWNlSW5mbyAnXG4gICAgICArIHZhbCArICcgbWF0Y2hlZCBjcml0ZXJpYSAnICsgY3JpdGVyaWFcbiAgfVxuICBjb25zdCBfa2V5ID0ga2V5LnRvTG93ZXJDYXNlKClcblxuICByZXN1bHQuZXJyb3JNZXNzYWdlID0gZ2V0TXNnKGtleSwgdmFsLCBjcml0ZXJpYSlcblxuICBpZiAoX2tleS5pbmRleE9mKCdvc3ZlcnNpb24nKSA+PSAwKSB7XG4gICAgcmVzdWx0LmNvZGUgPSAxMDAxXG4gIH1cbiAgZWxzZSBpZiAoX2tleS5pbmRleE9mKCdhcHB2ZXJzaW9uJykgPj0gMCkge1xuICAgIHJlc3VsdC5jb2RlID0gMTAwMlxuICB9XG4gIGVsc2UgaWYgKF9rZXkuaW5kZXhPZignd2VleHZlcnNpb24nKSA+PSAwKSB7XG4gICAgcmVzdWx0LmNvZGUgPSAxMDAzXG4gIH1cbiAgZWxzZSBpZiAoX2tleS5pbmRleE9mKCdkZXZpY2Vtb2RlbCcpID49IDApIHtcbiAgICByZXN1bHQuY29kZSA9IDEwMDRcbiAgfVxuXG4gIHJldHVybiByZXN1bHRcbn1cblxuLyoqXG4gKiBXRUVYIGZyYW1ld29yayBpbnB1dChkZXZpY2VJbmZvKVxuICoge1xuICogICBwbGF0Zm9ybTogJ2lPUycgb3IgJ2FuZHJvaWQnXG4gKiAgIG9zVmVyc2lvbjogJzEuMC4wJyBvciAnMS4wJyBvciAnMSdcbiAqICAgYXBwVmVyc2lvbjogJzEuMC4wJyBvciAnMS4wJyBvciAnMSdcbiAqICAgd2VleFZlcnNpb246ICcxLjAuMCcgb3IgJzEuMCcgb3IgJzEnXG4gKiAgIGREZXZpY2VNb2RlbDogJ01PREVMX05BTUUnXG4gKiB9XG4gKlxuICogZG93bmdyYWRlIGNvbmZpZyhjb25maWcpXG4gKiB7XG4gKiAgIGlvczoge1xuICogICAgIG9zVmVyc2lvbjogJz4xLjAuMCcgb3IgJz49MS4wLjAnIG9yICc8MS4wLjAnIG9yICc8PTEuMC4wJyBvciAnMS4wLjAnXG4gKiAgICAgYXBwVmVyc2lvbjogJz4xLjAuMCcgb3IgJz49MS4wLjAnIG9yICc8MS4wLjAnIG9yICc8PTEuMC4wJyBvciAnMS4wLjAnXG4gKiAgICAgd2VleFZlcnNpb246ICc+MS4wLjAnIG9yICc+PTEuMC4wJyBvciAnPDEuMC4wJyBvciAnPD0xLjAuMCcgb3IgJzEuMC4wJ1xuICogICAgIGRldmljZU1vZGVsOiBbJ21vZGVsQScsICdtb2RlbEInLCAuLi5dXG4gKiAgIH0sXG4gKiAgIGFuZHJvaWQ6IHtcbiAqICAgICBvc1ZlcnNpb246ICc+MS4wLjAnIG9yICc+PTEuMC4wJyBvciAnPDEuMC4wJyBvciAnPD0xLjAuMCcgb3IgJzEuMC4wJ1xuICogICAgIGFwcFZlcnNpb246ICc+MS4wLjAnIG9yICc+PTEuMC4wJyBvciAnPDEuMC4wJyBvciAnPD0xLjAuMCcgb3IgJzEuMC4wJ1xuICogICAgIHdlZXhWZXJzaW9uOiAnPjEuMC4wJyBvciAnPj0xLjAuMCcgb3IgJzwxLjAuMCcgb3IgJzw9MS4wLjAnIG9yICcxLjAuMCdcbiAqICAgICBkZXZpY2VNb2RlbDogWydtb2RlbEEnLCAnbW9kZWxCJywgLi4uXVxuICogICB9XG4gKiB9XG4gKlxuICpcbiAqIEBwYXJhbSAge29iamVjdH0gZGV2aWNlSW5mbyBXZWV4IFNESyBmcmFtZXdvcmsgaW5wdXRcbiAqIEBwYXJhbSAge29iamVjdH0gY29uZmlnICAgICB1c2VyIGlucHV0XG4gKiBAcmV0dXJuIHtPYmplY3R9ICAgICAgICAgICAgeyBpc0Rvd25ncmFkZTogdHJ1ZS9mYWxzZSwgZXJyb3JNZXNzYWdlLi4uIH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrIChjb25maWcsIGRldmljZUluZm8pIHtcbiAgZGV2aWNlSW5mbyA9IGRldmljZUluZm8gfHwgZ2xvYmFsLldYRW52aXJvbm1lbnRcbiAgZGV2aWNlSW5mbyA9IGlzUGxhaW5PYmplY3QoZGV2aWNlSW5mbykgPyBkZXZpY2VJbmZvIDoge31cblxuICBsZXQgcmVzdWx0ID0ge1xuICAgIGlzRG93bmdyYWRlOiBmYWxzZSAvLyBkZWZhdXRsIGlzIHBhc3NcbiAgfVxuXG4gIGlmICh0eXBvZihjb25maWcpID09PSAnZnVuY3Rpb24nKSB7XG4gICAgbGV0IGN1c3RvbURvd25ncmFkZSA9IGNvbmZpZy5jYWxsKHRoaXMsIGRldmljZUluZm8sIHtcbiAgICAgIHNlbXZlcjogc2VtdmVyLFxuICAgICAgbm9ybWFsaXplVmVyc2lvbjogdGhpcy5ub3JtYWxpemVWZXJzaW9uXG4gICAgfSlcblxuICAgIGN1c3RvbURvd25ncmFkZSA9ICEhY3VzdG9tRG93bmdyYWRlXG5cbiAgICByZXN1bHQgPSBjdXN0b21Eb3duZ3JhZGUgPyB0aGlzLmdldEVycm9yKCdjdXN0b20nLCAnJywgJ2N1c3RvbSBwYXJhbXMnKSA6IHJlc3VsdFxuICB9XG4gIGVsc2Uge1xuICAgIGNvbmZpZyA9IGlzUGxhaW5PYmplY3QoY29uZmlnKSA/IGNvbmZpZyA6IHt9XG5cbiAgICBjb25zdCBwbGF0Zm9ybSA9IGRldmljZUluZm8ucGxhdGZvcm0gfHwgJ3Vua25vdydcbiAgICBjb25zdCBkUGxhdGZvcm0gPSBwbGF0Zm9ybS50b0xvd2VyQ2FzZSgpXG4gICAgY29uc3QgY09iaiA9IGNvbmZpZ1tkUGxhdGZvcm1dIHx8IHt9XG5cbiAgICBmb3IgKGNvbnN0IGkgaW4gZGV2aWNlSW5mbykge1xuICAgICAgY29uc3Qga2V5ID0gaVxuICAgICAgY29uc3Qga2V5TG93ZXIgPSBrZXkudG9Mb3dlckNhc2UoKVxuICAgICAgY29uc3QgdmFsID0gZGV2aWNlSW5mb1tpXVxuICAgICAgY29uc3QgaXNWZXJzaW9uID0ga2V5TG93ZXIuaW5kZXhPZigndmVyc2lvbicpID49IDBcbiAgICAgIGNvbnN0IGlzRGV2aWNlTW9kZWwgPSBrZXlMb3dlci5pbmRleE9mKCdkZXZpY2Vtb2RlbCcpID49IDBcbiAgICAgIGNvbnN0IGNyaXRlcmlhID0gY09ialtpXVxuXG4gICAgICBpZiAoY3JpdGVyaWEgJiYgaXNWZXJzaW9uKSB7XG4gICAgICAgIGNvbnN0IGMgPSB0aGlzLm5vcm1hbGl6ZVZlcnNpb24oY3JpdGVyaWEpXG4gICAgICAgIGNvbnN0IGQgPSB0aGlzLm5vcm1hbGl6ZVZlcnNpb24oZGV2aWNlSW5mb1tpXSlcblxuICAgICAgICBpZiAoc2VtdmVyLnNhdGlzZmllcyhkLCBjKSkge1xuICAgICAgICAgIHJlc3VsdCA9IHRoaXMuZ2V0RXJyb3Ioa2V5LCB2YWwsIGNyaXRlcmlhKVxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKGlzRGV2aWNlTW9kZWwpIHtcbiAgICAgICAgY29uc3QgX2NyaXRlcmlhID0gdHlwb2YoY3JpdGVyaWEpID09PSAnYXJyYXknID8gY3JpdGVyaWEgOiBbY3JpdGVyaWFdXG4gICAgICAgIGlmIChfY3JpdGVyaWEuaW5kZXhPZih2YWwpID49IDApIHtcbiAgICAgICAgICByZXN1bHQgPSB0aGlzLmdldEVycm9yKGtleSwgdmFsLCBjcml0ZXJpYSlcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdFxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9odG1sNS9kZWZhdWx0L2FwcC9kb3duZ3JhZGUuanNcbiAqKi8iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBEaWZmZXIge1xuICBjb25zdHJ1Y3RvciAoaWQpIHtcbiAgICB0aGlzLmlkID0gaWRcbiAgICB0aGlzLm1hcCA9IFtdXG4gICAgdGhpcy5ob29rcyA9IFtdXG4gIH1cbiAgaXNFbXB0eSAoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwLmxlbmd0aCA9PT0gMFxuICB9XG4gIGFwcGVuZCAodHlwZSwgZGVwdGgsIHJlZiwgaGFuZGxlcikge1xuICAgIGlmICghdGhpcy5oYXNUaW1lcikge1xuICAgICAgdGhpcy5oYXNUaW1lciA9IHRydWVcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLmhhc1RpbWVyID0gZmFsc2VcbiAgICAgICAgdGhpcy5mbHVzaCh0cnVlKVxuICAgICAgfSwgMClcbiAgICB9XG4gICAgY29uc3QgbWFwID0gdGhpcy5tYXBcbiAgICBpZiAoIW1hcFtkZXB0aF0pIHtcbiAgICAgIG1hcFtkZXB0aF0gPSB7fVxuICAgIH1cbiAgICBjb25zdCBncm91cCA9IG1hcFtkZXB0aF1cbiAgICBpZiAoIWdyb3VwW3R5cGVdKSB7XG4gICAgICBncm91cFt0eXBlXSA9IHt9XG4gICAgfVxuICAgIGlmICh0eXBlID09PSAnZWxlbWVudCcpIHtcbiAgICAgIGlmICghZ3JvdXBbdHlwZV1bcmVmXSkge1xuICAgICAgICBncm91cFt0eXBlXVtyZWZdID0gW11cbiAgICAgIH1cbiAgICAgIGdyb3VwW3R5cGVdW3JlZl0ucHVzaChoYW5kbGVyKVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGdyb3VwW3R5cGVdW3JlZl0gPSBoYW5kbGVyXG4gICAgfVxuICB9XG4gIGZsdXNoIChpc1RpbWVvdXQpIHtcbiAgICBjb25zdCBtYXAgPSB0aGlzLm1hcC5zbGljZSgpXG4gICAgdGhpcy5tYXAubGVuZ3RoID0gMFxuICAgIG1hcC5mb3JFYWNoKChncm91cCkgPT4ge1xuICAgICAgY2FsbFR5cGVNYXAoZ3JvdXAsICdyZXBlYXQnKVxuICAgICAgY2FsbFR5cGVNYXAoZ3JvdXAsICdzaG93bicpXG4gICAgICBjYWxsVHlwZUxpc3QoZ3JvdXAsICdlbGVtZW50JylcbiAgICB9KVxuXG4gICAgY29uc3QgaG9va3MgPSB0aGlzLmhvb2tzLnNsaWNlKClcbiAgICB0aGlzLmhvb2tzLmxlbmd0aCA9IDBcbiAgICBob29rcy5mb3JFYWNoKChmbikgPT4ge1xuICAgICAgZm4oKVxuICAgIH0pXG5cbiAgICBpZiAoIXRoaXMuaXNFbXB0eSgpKSB7XG4gICAgICB0aGlzLmZsdXNoKClcbiAgICB9XG4gIH1cbiAgdGhlbiAoZm4pIHtcbiAgICB0aGlzLmhvb2tzLnB1c2goZm4pXG4gIH1cbn1cblxuZnVuY3Rpb24gY2FsbFR5cGVNYXAgKGdyb3VwLCB0eXBlKSB7XG4gIGNvbnN0IG1hcCA9IGdyb3VwW3R5cGVdXG4gIGZvciAoY29uc3QgcmVmIGluIG1hcCkge1xuICAgIG1hcFtyZWZdKClcbiAgfVxufVxuXG5mdW5jdGlvbiBjYWxsVHlwZUxpc3QgKGdyb3VwLCB0eXBlKSB7XG4gIGNvbnN0IG1hcCA9IGdyb3VwW3R5cGVdXG4gIGZvciAoY29uc3QgcmVmIGluIG1hcCkge1xuICAgIGNvbnN0IGxpc3QgPSBtYXBbcmVmXVxuICAgIGxpc3QuZm9yRWFjaCgoaGFuZGxlcikgPT4geyBoYW5kbGVyKCkgfSlcbiAgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9odG1sNS9kZWZhdWx0L2FwcC9kaWZmZXIuanNcbiAqKi8iLCIvKipcbiAqIEBmaWxlT3ZlcnZpZXdcbiAqIEEgc2ltcGxlIHZpcnR1YWwgZG9tIGltcGxlbWVudGF0aW9uXG4gKi9cblxuaW1wb3J0IExpc3RlbmVyIGZyb20gJy4vbGlzdGVuZXInXG5pbXBvcnQgeyBleHRlbmQgfSBmcm9tICcuLi9zaGFyZWQnXG5cbmNvbnN0IERFRkFVTFRfVEFHX05BTUUgPSAnZGl2J1xuXG5leHBvcnQgY29uc3QgaW5zdGFuY2VNYXAgPSB7fVxubGV0IG5leHROb2RlUmVmID0gMVxuXG5leHBvcnQgZnVuY3Rpb24gRG9jdW1lbnQgKGlkLCB1cmwsIGhhbmRsZXIpIHtcbiAgaWQgPSBpZCA/IGlkLnRvU3RyaW5nKCkgOiAnJ1xuICB0aGlzLmlkID0gaWRcbiAgdGhpcy5VUkwgPSB1cmxcblxuICBpbnN0YW5jZU1hcFtpZF0gPSB0aGlzXG4gIHRoaXMubm9kZU1hcCA9IHt9XG4gIHRoaXMubGlzdGVuZXIgPSBuZXcgTGlzdGVuZXIoaWQsIGhhbmRsZXIgfHwgZ2VuQ2FsbFRhc2tzKGlkKSlcbiAgdGhpcy5jcmVhdGVEb2N1bWVudEVsZW1lbnQoKVxufVxuXG5mdW5jdGlvbiBnZW5DYWxsVGFza3MgKGlkKSB7XG4gIHJldHVybiAodGFza3MpID0+IHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkodGFza3MpKSB7XG4gICAgICB0YXNrcyA9IFt0YXNrc11cbiAgICB9XG4gICAgcmV0dXJuIGNhbGxOYXRpdmUoaWQsIHRhc2tzLCAnLTEnKVxuICB9XG59XG5cbkRvY3VtZW50LnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24gKCkge1xuICBkZWxldGUgdGhpcy5saXN0ZW5lclxuICBkZWxldGUgdGhpcy5ub2RlTWFwXG4gIGRlbGV0ZSBpbnN0YW5jZU1hcFt0aGlzLmlkXVxufVxuXG5Eb2N1bWVudC5wcm90b3R5cGUub3BlbiA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5saXN0ZW5lci5iYXRjaGVkID0gZmFsc2Vcbn1cblxuRG9jdW1lbnQucHJvdG90eXBlLmNsb3NlID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLmxpc3RlbmVyLmJhdGNoZWQgPSB0cnVlXG59XG5cbkRvY3VtZW50LnByb3RvdHlwZS5jcmVhdGVEb2N1bWVudEVsZW1lbnQgPSBmdW5jdGlvbiAoKSB7XG4gIGlmICghdGhpcy5kb2N1bWVudEVsZW1lbnQpIHtcbiAgICBjb25zdCBlbCA9IG5ldyBFbGVtZW50KCdkb2N1bWVudCcpXG4gICAgZWwuZG9jSWQgPSB0aGlzLmlkXG4gICAgZWwub3duZXJEb2N1bWVudCA9IHRoaXNcbiAgICBlbC5yb2xlID0gJ2RvY3VtZW50RWxlbWVudCdcbiAgICBlbC5kZXB0aCA9IDBcbiAgICBlbC5yZWYgPSAnX2RvY3VtZW50RWxlbWVudCdcbiAgICB0aGlzLm5vZGVNYXAuX2RvY3VtZW50RWxlbWVudCA9IGVsXG4gICAgdGhpcy5kb2N1bWVudEVsZW1lbnQgPSBlbFxuICAgIGVsLmFwcGVuZENoaWxkID0gKG5vZGUpID0+IHtcbiAgICAgIGFwcGVuZEJvZHkodGhpcywgbm9kZSlcbiAgICB9XG4gICAgZWwuaW5zZXJ0QmVmb3JlID0gKG5vZGUsIGJlZm9yZSkgPT4ge1xuICAgICAgYXBwZW5kQm9keSh0aGlzLCBub2RlLCBiZWZvcmUpXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRoaXMuZG9jdW1lbnRFbGVtZW50XG59XG5cbmZ1bmN0aW9uIGFwcGVuZEJvZHkgKGRvYywgbm9kZSwgYmVmb3JlKSB7XG4gIGNvbnN0IHsgZG9jdW1lbnRFbGVtZW50IH0gPSBkb2NcblxuICBpZiAoZG9jdW1lbnRFbGVtZW50LnB1cmVDaGlsZHJlbi5sZW5ndGggPiAwIHx8IG5vZGUucGFyZW50Tm9kZSkge1xuICAgIHJldHVyblxuICB9XG4gIGNvbnN0IGNoaWxkcmVuID0gZG9jdW1lbnRFbGVtZW50LmNoaWxkcmVuXG4gIGNvbnN0IGJlZm9yZUluZGV4ID0gY2hpbGRyZW4uaW5kZXhPZihiZWZvcmUpXG4gIGlmIChiZWZvcmVJbmRleCA8IDApIHtcbiAgICBjaGlsZHJlbi5wdXNoKG5vZGUpXG4gIH1cbiAgZWxzZSB7XG4gICAgY2hpbGRyZW4uc3BsaWNlKGJlZm9yZUluZGV4LCAwLCBub2RlKVxuICB9XG5cbiAgaWYgKG5vZGUubm9kZVR5cGUgPT09IDEpIHtcbiAgICBpZiAobm9kZS5yb2xlID09PSAnYm9keScpIHtcbiAgICAgIG5vZGUuZG9jSWQgPSBkb2MuaWRcbiAgICAgIG5vZGUub3duZXJEb2N1bWVudCA9IGRvY1xuICAgICAgbm9kZS5wYXJlbnROb2RlID0gZG9jdW1lbnRFbGVtZW50XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgbm9kZS5jaGlsZHJlbi5mb3JFYWNoKGNoaWxkID0+IHtcbiAgICAgICAgY2hpbGQucGFyZW50Tm9kZSA9IG5vZGVcbiAgICAgIH0pXG4gICAgICBzZXRCb2R5KGRvYywgbm9kZSlcbiAgICAgIG5vZGUuZG9jSWQgPSBkb2MuaWRcbiAgICAgIG5vZGUub3duZXJEb2N1bWVudCA9IGRvY1xuICAgICAgbGlua1BhcmVudChub2RlLCBkb2N1bWVudEVsZW1lbnQpXG4gICAgICBkZWxldGUgZG9jLm5vZGVNYXBbbm9kZS5ub2RlSWRdXG4gICAgfVxuICAgIGRvY3VtZW50RWxlbWVudC5wdXJlQ2hpbGRyZW4ucHVzaChub2RlKVxuICAgIGRvYy5saXN0ZW5lci5jcmVhdGVCb2R5KG5vZGUpXG4gIH1cbiAgZWxzZSB7XG4gICAgbm9kZS5wYXJlbnROb2RlID0gZG9jdW1lbnRFbGVtZW50XG4gICAgZG9jLm5vZGVNYXBbbm9kZS5yZWZdID0gbm9kZVxuICB9XG59XG5cbmZ1bmN0aW9uIHNldEJvZHkgKGRvYywgZWwpIHtcbiAgZWwucm9sZSA9ICdib2R5J1xuICBlbC5kZXB0aCA9IDFcbiAgZGVsZXRlIGRvYy5ub2RlTWFwW2VsLm5vZGVJZF1cbiAgZWwucmVmID0gJ19yb290J1xuICBkb2Mubm9kZU1hcC5fcm9vdCA9IGVsXG4gIGRvYy5ib2R5ID0gZWxcbn1cblxuRG9jdW1lbnQucHJvdG90eXBlLmNyZWF0ZUJvZHkgPSBmdW5jdGlvbiAodHlwZSwgcHJvcHMpIHtcbiAgaWYgKCF0aGlzLmJvZHkpIHtcbiAgICBjb25zdCBlbCA9IG5ldyBFbGVtZW50KHR5cGUsIHByb3BzKVxuICAgIHNldEJvZHkodGhpcywgZWwpXG4gIH1cblxuICByZXR1cm4gdGhpcy5ib2R5XG59XG5cbkRvY3VtZW50LnByb3RvdHlwZS5jcmVhdGVFbGVtZW50ID0gZnVuY3Rpb24gKHRhZ05hbWUsIHByb3BzKSB7XG4gIHJldHVybiBuZXcgRWxlbWVudCh0YWdOYW1lLCBwcm9wcylcbn1cblxuRG9jdW1lbnQucHJvdG90eXBlLmNyZWF0ZUNvbW1lbnQgPSBmdW5jdGlvbiAodGV4dCkge1xuICByZXR1cm4gbmV3IENvbW1lbnQodGV4dClcbn1cblxuRG9jdW1lbnQucHJvdG90eXBlLmZpcmVFdmVudCA9IGZ1bmN0aW9uIChlbCwgdHlwZSwgZSwgZG9tQ2hhbmdlcykge1xuICBpZiAoIWVsKSB7XG4gICAgcmV0dXJuXG4gIH1cbiAgZSA9IGUgfHwge31cbiAgZS50eXBlID0gdHlwZVxuICBlLnRhcmdldCA9IGVsXG4gIGUudGltZXN0YW1wID0gRGF0ZS5ub3coKVxuICBpZiAoZG9tQ2hhbmdlcykge1xuICAgIHVwZGF0ZUVsZW1lbnQoZWwsIGRvbUNoYW5nZXMpXG4gIH1cbiAgcmV0dXJuIGVsLmZpcmVFdmVudCh0eXBlLCBlKVxufVxuXG5Eb2N1bWVudC5wcm90b3R5cGUuZ2V0UmVmID0gZnVuY3Rpb24gKHJlZikge1xuICByZXR1cm4gdGhpcy5ub2RlTWFwW3JlZl1cbn1cblxuZnVuY3Rpb24gdXBkYXRlRWxlbWVudCAoZWwsIGNoYW5nZXMpIHtcbiAgY29uc3QgYXR0cnMgPSBjaGFuZ2VzLmF0dHJzIHx8IHt9XG4gIGZvciAoY29uc3QgbmFtZSBpbiBhdHRycykge1xuICAgIGVsLnNldEF0dHIobmFtZSwgYXR0cnNbbmFtZV0sIHRydWUpXG4gIH1cbiAgY29uc3Qgc3R5bGUgPSBjaGFuZ2VzLnN0eWxlIHx8IHt9XG4gIGZvciAoY29uc3QgbmFtZSBpbiBzdHlsZSkge1xuICAgIGVsLnNldFN0eWxlKG5hbWUsIHN0eWxlW25hbWVdLCB0cnVlKVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBOb2RlICgpIHtcbiAgdGhpcy5ub2RlSWQgPSAobmV4dE5vZGVSZWYrKykudG9TdHJpbmcoKVxuICB0aGlzLnJlZiA9IHRoaXMubm9kZUlkXG4gIHRoaXMuY2hpbGRyZW4gPSBbXVxuICB0aGlzLnB1cmVDaGlsZHJlbiA9IFtdXG4gIHRoaXMucGFyZW50Tm9kZSA9IG51bGxcbiAgdGhpcy5uZXh0U2libGluZyA9IG51bGxcbiAgdGhpcy5wcmV2aW91c1NpYmxpbmcgPSBudWxsXG59XG5cbk5vZGUucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IGRvYyA9IGluc3RhbmNlTWFwW3RoaXMuZG9jSWRdXG4gIGlmIChkb2MpIHtcbiAgICBkZWxldGUgdGhpcy5kb2NJZFxuICAgIGRlbGV0ZSBkb2Mubm9kZU1hcFt0aGlzLm5vZGVJZF1cbiAgfVxuICB0aGlzLmNoaWxkcmVuLmZvckVhY2goY2hpbGQgPT4ge1xuICAgIGNoaWxkLmRlc3Ryb3koKVxuICB9KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gRWxlbWVudCAodHlwZSA9IERFRkFVTFRfVEFHX05BTUUsIHByb3BzKSB7XG4gIHByb3BzID0gcHJvcHMgfHwge31cbiAgdGhpcy5ub2RlVHlwZSA9IDFcbiAgdGhpcy5ub2RlSWQgPSAobmV4dE5vZGVSZWYrKykudG9TdHJpbmcoKVxuICB0aGlzLnJlZiA9IHRoaXMubm9kZUlkXG4gIHRoaXMudHlwZSA9IHR5cGVcbiAgdGhpcy5hdHRyID0gcHJvcHMuYXR0ciB8fCB7fVxuICB0aGlzLmNsYXNzU3R5bGUgPSBwcm9wcy5jbGFzc1N0eWxlIHx8IHt9XG4gIHRoaXMuc3R5bGUgPSBwcm9wcy5zdHlsZSB8fCB7fVxuICB0aGlzLmV2ZW50ID0ge31cbiAgdGhpcy5jaGlsZHJlbiA9IFtdXG4gIHRoaXMucHVyZUNoaWxkcmVuID0gW11cbn1cblxuRWxlbWVudC5wcm90b3R5cGUgPSBuZXcgTm9kZSgpXG5cbkVsZW1lbnQucHJvdG90eXBlLmFwcGVuZENoaWxkID0gZnVuY3Rpb24gKG5vZGUpIHtcbiAgaWYgKG5vZGUucGFyZW50Tm9kZSAmJiBub2RlLnBhcmVudE5vZGUgIT09IHRoaXMpIHtcbiAgICByZXR1cm5cbiAgfVxuICBpZiAoIW5vZGUucGFyZW50Tm9kZSkge1xuICAgIGxpbmtQYXJlbnQobm9kZSwgdGhpcylcbiAgICBpbnNlcnRJbmRleChub2RlLCB0aGlzLmNoaWxkcmVuLCB0aGlzLmNoaWxkcmVuLmxlbmd0aCwgdHJ1ZSlcbiAgICBpZiAodGhpcy5kb2NJZCkge1xuICAgICAgcmVnaXN0ZXJOb2RlKHRoaXMuZG9jSWQsIG5vZGUpXG4gICAgfVxuICAgIGlmIChub2RlLm5vZGVUeXBlID09PSAxKSB7XG4gICAgICBpbnNlcnRJbmRleChub2RlLCB0aGlzLnB1cmVDaGlsZHJlbiwgdGhpcy5wdXJlQ2hpbGRyZW4ubGVuZ3RoKVxuICAgICAgaWYgKHRoaXMuZG9jSWQpIHtcbiAgICAgICAgY29uc3QgbGlzdGVuZXIgPSBpbnN0YW5jZU1hcFt0aGlzLmRvY0lkXS5saXN0ZW5lclxuICAgICAgICByZXR1cm4gbGlzdGVuZXIuYWRkRWxlbWVudChub2RlLCB0aGlzLnJlZiwgLTEpXG4gICAgICB9XG4gICAgfVxuICB9XG4gIGVsc2Uge1xuICAgIG1vdmVJbmRleChub2RlLCB0aGlzLmNoaWxkcmVuLCB0aGlzLmNoaWxkcmVuLmxlbmd0aCwgdHJ1ZSlcbiAgICBpZiAobm9kZS5ub2RlVHlwZSA9PT0gMSkge1xuICAgICAgY29uc3QgaW5kZXggPSBtb3ZlSW5kZXgobm9kZSwgdGhpcy5wdXJlQ2hpbGRyZW4sIHRoaXMucHVyZUNoaWxkcmVuLmxlbmd0aClcbiAgICAgIGlmICh0aGlzLmRvY0lkICYmIGluZGV4ID49IDApIHtcbiAgICAgICAgY29uc3QgbGlzdGVuZXIgPSBpbnN0YW5jZU1hcFt0aGlzLmRvY0lkXS5saXN0ZW5lclxuICAgICAgICByZXR1cm4gbGlzdGVuZXIubW92ZUVsZW1lbnQobm9kZS5yZWYsIHRoaXMucmVmLCBpbmRleClcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuRWxlbWVudC5wcm90b3R5cGUuaW5zZXJ0QmVmb3JlID0gZnVuY3Rpb24gKG5vZGUsIGJlZm9yZSkge1xuICBpZiAobm9kZS5wYXJlbnROb2RlICYmIG5vZGUucGFyZW50Tm9kZSAhPT0gdGhpcykge1xuICAgIHJldHVyblxuICB9XG4gIGlmIChub2RlID09PSBiZWZvcmUgfHwgbm9kZS5uZXh0U2libGluZyA9PT0gYmVmb3JlKSB7XG4gICAgcmV0dXJuXG4gIH1cbiAgaWYgKCFub2RlLnBhcmVudE5vZGUpIHtcbiAgICBsaW5rUGFyZW50KG5vZGUsIHRoaXMpXG4gICAgaW5zZXJ0SW5kZXgobm9kZSwgdGhpcy5jaGlsZHJlbiwgdGhpcy5jaGlsZHJlbi5pbmRleE9mKGJlZm9yZSksIHRydWUpXG4gICAgaWYgKHRoaXMuZG9jSWQpIHtcbiAgICAgIHJlZ2lzdGVyTm9kZSh0aGlzLmRvY0lkLCBub2RlKVxuICAgIH1cbiAgICBpZiAobm9kZS5ub2RlVHlwZSA9PT0gMSkge1xuICAgICAgY29uc3QgcHVyZUJlZm9yZSA9IG5leHRFbGVtZW50KGJlZm9yZSlcbiAgICAgIGNvbnN0IGluZGV4ID0gaW5zZXJ0SW5kZXgoXG4gICAgICAgIG5vZGUsXG4gICAgICAgIHRoaXMucHVyZUNoaWxkcmVuLFxuICAgICAgICBwdXJlQmVmb3JlXG4gICAgICAgICAgPyB0aGlzLnB1cmVDaGlsZHJlbi5pbmRleE9mKHB1cmVCZWZvcmUpXG4gICAgICAgICAgOiB0aGlzLnB1cmVDaGlsZHJlbi5sZW5ndGhcbiAgICAgIClcbiAgICAgIGlmICh0aGlzLmRvY0lkKSB7XG4gICAgICAgIGNvbnN0IGxpc3RlbmVyID0gaW5zdGFuY2VNYXBbdGhpcy5kb2NJZF0ubGlzdGVuZXJcbiAgICAgICAgcmV0dXJuIGxpc3RlbmVyLmFkZEVsZW1lbnQobm9kZSwgdGhpcy5yZWYsIGluZGV4KVxuICAgICAgfVxuICAgIH1cbiAgfVxuICBlbHNlIHtcbiAgICBtb3ZlSW5kZXgobm9kZSwgdGhpcy5jaGlsZHJlbiwgdGhpcy5jaGlsZHJlbi5pbmRleE9mKGJlZm9yZSksIHRydWUpXG4gICAgaWYgKG5vZGUubm9kZVR5cGUgPT09IDEpIHtcbiAgICAgIGNvbnN0IHB1cmVCZWZvcmUgPSBuZXh0RWxlbWVudChiZWZvcmUpXG4gICAgICBjb25zdCBpbmRleCA9IG1vdmVJbmRleChcbiAgICAgICAgbm9kZSxcbiAgICAgICAgdGhpcy5wdXJlQ2hpbGRyZW4sXG4gICAgICAgIHB1cmVCZWZvcmVcbiAgICAgICAgICA/IHRoaXMucHVyZUNoaWxkcmVuLmluZGV4T2YocHVyZUJlZm9yZSlcbiAgICAgICAgICA6IHRoaXMucHVyZUNoaWxkcmVuLmxlbmd0aFxuICAgICAgKVxuICAgICAgaWYgKHRoaXMuZG9jSWQgJiYgaW5kZXggPj0gMCkge1xuICAgICAgICBjb25zdCBsaXN0ZW5lciA9IGluc3RhbmNlTWFwW3RoaXMuZG9jSWRdLmxpc3RlbmVyXG4gICAgICAgIHJldHVybiBsaXN0ZW5lci5tb3ZlRWxlbWVudChub2RlLnJlZiwgdGhpcy5yZWYsIGluZGV4KVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5FbGVtZW50LnByb3RvdHlwZS5pbnNlcnRBZnRlciA9IGZ1bmN0aW9uIChub2RlLCBhZnRlcikge1xuICBpZiAobm9kZS5wYXJlbnROb2RlICYmIG5vZGUucGFyZW50Tm9kZSAhPT0gdGhpcykge1xuICAgIHJldHVyblxuICB9XG4gIGlmIChub2RlID09PSBhZnRlciB8fCBub2RlLnByZXZpb3VzU2libGluZyA9PT0gYWZ0ZXIpIHtcbiAgICByZXR1cm5cbiAgfVxuICBpZiAoIW5vZGUucGFyZW50Tm9kZSkge1xuICAgIGxpbmtQYXJlbnQobm9kZSwgdGhpcylcbiAgICBpbnNlcnRJbmRleChub2RlLCB0aGlzLmNoaWxkcmVuLCB0aGlzLmNoaWxkcmVuLmluZGV4T2YoYWZ0ZXIpICsgMSwgdHJ1ZSlcbiAgICBpZiAodGhpcy5kb2NJZCkge1xuICAgICAgcmVnaXN0ZXJOb2RlKHRoaXMuZG9jSWQsIG5vZGUpXG4gICAgfVxuICAgIGlmIChub2RlLm5vZGVUeXBlID09PSAxKSB7XG4gICAgICBjb25zdCBpbmRleCA9IGluc2VydEluZGV4KFxuICAgICAgICBub2RlLFxuICAgICAgICB0aGlzLnB1cmVDaGlsZHJlbixcbiAgICAgICAgdGhpcy5wdXJlQ2hpbGRyZW4uaW5kZXhPZihwcmV2aW91c0VsZW1lbnQoYWZ0ZXIpKSArIDFcbiAgICAgIClcbiAgICAgIGlmICh0aGlzLmRvY0lkKSB7XG4gICAgICAgIGNvbnN0IGxpc3RlbmVyID0gaW5zdGFuY2VNYXBbdGhpcy5kb2NJZF0ubGlzdGVuZXJcbiAgICAgICAgcmV0dXJuIGxpc3RlbmVyLmFkZEVsZW1lbnQobm9kZSwgdGhpcy5yZWYsIGluZGV4KVxuICAgICAgfVxuICAgIH1cbiAgfVxuICBlbHNlIHtcbiAgICBtb3ZlSW5kZXgobm9kZSwgdGhpcy5jaGlsZHJlbiwgdGhpcy5jaGlsZHJlbi5pbmRleE9mKGFmdGVyKSArIDEsIHRydWUpXG4gICAgaWYgKG5vZGUubm9kZVR5cGUgPT09IDEpIHtcbiAgICAgIGNvbnN0IGluZGV4ID0gbW92ZUluZGV4KFxuICAgICAgICBub2RlLFxuICAgICAgICB0aGlzLnB1cmVDaGlsZHJlbixcbiAgICAgICAgdGhpcy5wdXJlQ2hpbGRyZW4uaW5kZXhPZihwcmV2aW91c0VsZW1lbnQoYWZ0ZXIpKSArIDFcbiAgICAgIClcbiAgICAgIGlmICh0aGlzLmRvY0lkICYmIGluZGV4ID49IDApIHtcbiAgICAgICAgY29uc3QgbGlzdGVuZXIgPSBpbnN0YW5jZU1hcFt0aGlzLmRvY0lkXS5saXN0ZW5lclxuICAgICAgICByZXR1cm4gbGlzdGVuZXIubW92ZUVsZW1lbnQobm9kZS5yZWYsIHRoaXMucmVmLCBpbmRleClcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuRWxlbWVudC5wcm90b3R5cGUucmVtb3ZlQ2hpbGQgPSBmdW5jdGlvbiAobm9kZSwgcHJlc2VydmVkKSB7XG4gIGlmIChub2RlLnBhcmVudE5vZGUpIHtcbiAgICByZW1vdmVJbmRleChub2RlLCB0aGlzLmNoaWxkcmVuLCB0cnVlKVxuICAgIGlmIChub2RlLm5vZGVUeXBlID09PSAxKSB7XG4gICAgICByZW1vdmVJbmRleChub2RlLCB0aGlzLnB1cmVDaGlsZHJlbilcbiAgICAgIGlmICh0aGlzLmRvY0lkKSB7XG4gICAgICAgIGNvbnN0IGxpc3RlbmVyID0gaW5zdGFuY2VNYXBbdGhpcy5kb2NJZF0ubGlzdGVuZXJcbiAgICAgICAgbGlzdGVuZXIucmVtb3ZlRWxlbWVudChub2RlLnJlZilcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgaWYgKCFwcmVzZXJ2ZWQpIHtcbiAgICBub2RlLmRlc3Ryb3koKVxuICB9XG59XG5cbkVsZW1lbnQucHJvdG90eXBlLmNsZWFyID0gZnVuY3Rpb24gKCkge1xuICBpZiAodGhpcy5kb2NJZCkge1xuICAgIGNvbnN0IGxpc3RlbmVyID0gaW5zdGFuY2VNYXBbdGhpcy5kb2NJZF0ubGlzdGVuZXJcbiAgICB0aGlzLnB1cmVDaGlsZHJlbi5mb3JFYWNoKG5vZGUgPT4ge1xuICAgICAgbGlzdGVuZXIucmVtb3ZlRWxlbWVudChub2RlLnJlZilcbiAgICB9KVxuICB9XG4gIHRoaXMuY2hpbGRyZW4uZm9yRWFjaChub2RlID0+IHtcbiAgICBub2RlLmRlc3Ryb3koKVxuICB9KVxuICB0aGlzLmNoaWxkcmVuLmxlbmd0aCA9IDBcbiAgdGhpcy5wdXJlQ2hpbGRyZW4ubGVuZ3RoID0gMFxufVxuXG5mdW5jdGlvbiBuZXh0RWxlbWVudCAobm9kZSkge1xuICB3aGlsZSAobm9kZSkge1xuICAgIGlmIChub2RlLm5vZGVUeXBlID09PSAxKSB7XG4gICAgICByZXR1cm4gbm9kZVxuICAgIH1cbiAgICBub2RlID0gbm9kZS5uZXh0U2libGluZ1xuICB9XG59XG5cbmZ1bmN0aW9uIHByZXZpb3VzRWxlbWVudCAobm9kZSkge1xuICB3aGlsZSAobm9kZSkge1xuICAgIGlmIChub2RlLm5vZGVUeXBlID09PSAxKSB7XG4gICAgICByZXR1cm4gbm9kZVxuICAgIH1cbiAgICBub2RlID0gbm9kZS5wcmV2aW91c1NpYmxpbmdcbiAgfVxufVxuXG5mdW5jdGlvbiBsaW5rUGFyZW50IChub2RlLCBwYXJlbnQpIHtcbiAgbm9kZS5wYXJlbnROb2RlID0gcGFyZW50XG4gIGlmIChwYXJlbnQuZG9jSWQpIHtcbiAgICBub2RlLmRvY0lkID0gcGFyZW50LmRvY0lkXG4gICAgbm9kZS5vd25lckRvY3VtZW50ID0gcGFyZW50Lm93bmVyRG9jdW1lbnRcbiAgICBub2RlLm93bmVyRG9jdW1lbnQubm9kZU1hcFtub2RlLm5vZGVJZF0gPSBub2RlXG4gICAgbm9kZS5kZXB0aCA9IHBhcmVudC5kZXB0aCArIDFcbiAgfVxuICBub2RlLmNoaWxkcmVuLmZvckVhY2goY2hpbGQgPT4ge1xuICAgIGxpbmtQYXJlbnQoY2hpbGQsIG5vZGUpXG4gIH0pXG59XG5cbmZ1bmN0aW9uIHJlZ2lzdGVyTm9kZSAoZG9jSWQsIG5vZGUpIHtcbiAgY29uc3QgZG9jID0gaW5zdGFuY2VNYXBbZG9jSWRdXG4gIGRvYy5ub2RlTWFwW25vZGUubm9kZUlkXSA9IG5vZGVcbn1cblxuZnVuY3Rpb24gaW5zZXJ0SW5kZXggKHRhcmdldCwgbGlzdCwgbmV3SW5kZXgsIGNoYW5nZVNpYmxpbmcpIHtcbiAgaWYgKG5ld0luZGV4IDwgMCkge1xuICAgIG5ld0luZGV4ID0gMFxuICB9XG4gIGNvbnN0IGJlZm9yZSA9IGxpc3RbbmV3SW5kZXggLSAxXVxuICBjb25zdCBhZnRlciA9IGxpc3RbbmV3SW5kZXhdXG4gIGxpc3Quc3BsaWNlKG5ld0luZGV4LCAwLCB0YXJnZXQpXG4gIGlmIChjaGFuZ2VTaWJsaW5nKSB7XG4gICAgYmVmb3JlICYmIChiZWZvcmUubmV4dFNpYmxpbmcgPSB0YXJnZXQpXG4gICAgdGFyZ2V0LnByZXZpb3VzU2libGluZyA9IGJlZm9yZVxuICAgIHRhcmdldC5uZXh0U2libGluZyA9IGFmdGVyXG4gICAgYWZ0ZXIgJiYgKGFmdGVyLnByZXZpb3VzU2libGluZyA9IHRhcmdldClcbiAgfVxuICByZXR1cm4gbmV3SW5kZXhcbn1cblxuZnVuY3Rpb24gbW92ZUluZGV4ICh0YXJnZXQsIGxpc3QsIG5ld0luZGV4LCBjaGFuZ2VTaWJsaW5nKSB7XG4gIGNvbnN0IGluZGV4ID0gbGlzdC5pbmRleE9mKHRhcmdldClcbiAgaWYgKGluZGV4IDwgMCkge1xuICAgIHJldHVybiAtMVxuICB9XG4gIGlmIChjaGFuZ2VTaWJsaW5nKSB7XG4gICAgY29uc3QgYmVmb3JlID0gbGlzdFtpbmRleCAtIDFdXG4gICAgY29uc3QgYWZ0ZXIgPSBsaXN0W2luZGV4ICsgMV1cbiAgICBiZWZvcmUgJiYgKGJlZm9yZS5uZXh0U2libGluZyA9IGFmdGVyKVxuICAgIGFmdGVyICYmIChhZnRlci5wcmV2aW91c1NpYmxpbmcgPSBiZWZvcmUpXG4gIH1cbiAgbGlzdC5zcGxpY2UoaW5kZXgsIDEpXG4gIGxldCBuZXdJbmRleEFmdGVyID0gbmV3SW5kZXhcbiAgaWYgKGluZGV4IDw9IG5ld0luZGV4KSB7XG4gICAgbmV3SW5kZXhBZnRlciA9IG5ld0luZGV4IC0gMVxuICB9XG4gIGNvbnN0IGJlZm9yZU5ldyA9IGxpc3RbbmV3SW5kZXhBZnRlciAtIDFdXG4gIGNvbnN0IGFmdGVyTmV3ID0gbGlzdFtuZXdJbmRleEFmdGVyXVxuICBsaXN0LnNwbGljZShuZXdJbmRleEFmdGVyLCAwLCB0YXJnZXQpXG4gIGlmIChjaGFuZ2VTaWJsaW5nKSB7XG4gICAgYmVmb3JlTmV3ICYmIChiZWZvcmVOZXcubmV4dFNpYmxpbmcgPSB0YXJnZXQpXG4gICAgdGFyZ2V0LnByZXZpb3VzU2libGluZyA9IGJlZm9yZU5ld1xuICAgIHRhcmdldC5uZXh0U2libGluZyA9IGFmdGVyTmV3XG4gICAgYWZ0ZXJOZXcgJiYgKGFmdGVyTmV3LnByZXZpb3VzU2libGluZyA9IHRhcmdldClcbiAgfVxuICBpZiAoaW5kZXggPT09IG5ld0luZGV4QWZ0ZXIpIHtcbiAgICByZXR1cm4gLTFcbiAgfVxuICByZXR1cm4gbmV3SW5kZXhcbn1cblxuZnVuY3Rpb24gcmVtb3ZlSW5kZXggKHRhcmdldCwgbGlzdCwgY2hhbmdlU2libGluZykge1xuICBjb25zdCBpbmRleCA9IGxpc3QuaW5kZXhPZih0YXJnZXQpXG4gIGlmIChpbmRleCA8IDApIHtcbiAgICByZXR1cm5cbiAgfVxuICBpZiAoY2hhbmdlU2libGluZykge1xuICAgIGNvbnN0IGJlZm9yZSA9IGxpc3RbaW5kZXggLSAxXVxuICAgIGNvbnN0IGFmdGVyID0gbGlzdFtpbmRleCArIDFdXG4gICAgYmVmb3JlICYmIChiZWZvcmUubmV4dFNpYmxpbmcgPSBhZnRlcilcbiAgICBhZnRlciAmJiAoYWZ0ZXIucHJldmlvdXNTaWJsaW5nID0gYmVmb3JlKVxuICB9XG4gIGxpc3Quc3BsaWNlKGluZGV4LCAxKVxufVxuXG5FbGVtZW50LnByb3RvdHlwZS5zZXRBdHRyID0gZnVuY3Rpb24gKGtleSwgdmFsdWUsIHNpbGVudCkge1xuICBpZiAodGhpcy5hdHRyW2tleV0gPT09IHZhbHVlKSB7XG4gICAgcmV0dXJuXG4gIH1cbiAgdGhpcy5hdHRyW2tleV0gPSB2YWx1ZVxuICBpZiAoIXNpbGVudCAmJiB0aGlzLmRvY0lkKSB7XG4gICAgY29uc3QgbGlzdGVuZXIgPSBpbnN0YW5jZU1hcFt0aGlzLmRvY0lkXS5saXN0ZW5lclxuICAgIGxpc3RlbmVyLnNldEF0dHIodGhpcy5yZWYsIGtleSwgdmFsdWUpXG4gIH1cbn1cblxuRWxlbWVudC5wcm90b3R5cGUuc2V0U3R5bGUgPSBmdW5jdGlvbiAoa2V5LCB2YWx1ZSwgc2lsZW50KSB7XG4gIGlmICh0aGlzLnN0eWxlW2tleV0gPT09IHZhbHVlKSB7XG4gICAgcmV0dXJuXG4gIH1cbiAgdGhpcy5zdHlsZVtrZXldID0gdmFsdWVcbiAgaWYgKCFzaWxlbnQgJiYgdGhpcy5kb2NJZCkge1xuICAgIGNvbnN0IGxpc3RlbmVyID0gaW5zdGFuY2VNYXBbdGhpcy5kb2NJZF0ubGlzdGVuZXJcbiAgICBsaXN0ZW5lci5zZXRTdHlsZSh0aGlzLnJlZiwga2V5LCB2YWx1ZSlcbiAgfVxufVxuXG5FbGVtZW50LnByb3RvdHlwZS5zZXRDbGFzc1N0eWxlID0gZnVuY3Rpb24gKGNsYXNzU3R5bGUpIHtcbiAgdGhpcy5jbGFzc1N0eWxlID0gY2xhc3NTdHlsZVxuICBpZiAodGhpcy5kb2NJZCkge1xuICAgIGNvbnN0IGxpc3RlbmVyID0gaW5zdGFuY2VNYXBbdGhpcy5kb2NJZF0ubGlzdGVuZXJcbiAgICBsaXN0ZW5lci5zZXRTdHlsZXModGhpcy5yZWYsIHRoaXMudG9TdHlsZSgpKVxuICB9XG59XG5cbkVsZW1lbnQucHJvdG90eXBlLmFkZEV2ZW50ID0gZnVuY3Rpb24gKHR5cGUsIGhhbmRsZXIpIHtcbiAgaWYgKCF0aGlzLmV2ZW50W3R5cGVdKSB7XG4gICAgdGhpcy5ldmVudFt0eXBlXSA9IGhhbmRsZXJcbiAgICBpZiAodGhpcy5kb2NJZCkge1xuICAgICAgY29uc3QgbGlzdGVuZXIgPSBpbnN0YW5jZU1hcFt0aGlzLmRvY0lkXS5saXN0ZW5lclxuICAgICAgbGlzdGVuZXIuYWRkRXZlbnQodGhpcy5yZWYsIHR5cGUpXG4gICAgfVxuICB9XG59XG5cbkVsZW1lbnQucHJvdG90eXBlLnJlbW92ZUV2ZW50ID0gZnVuY3Rpb24gKHR5cGUpIHtcbiAgaWYgKHRoaXMuZXZlbnRbdHlwZV0pIHtcbiAgICBkZWxldGUgdGhpcy5ldmVudFt0eXBlXVxuICAgIGlmICh0aGlzLmRvY0lkKSB7XG4gICAgICBjb25zdCBsaXN0ZW5lciA9IGluc3RhbmNlTWFwW3RoaXMuZG9jSWRdLmxpc3RlbmVyXG4gICAgICBsaXN0ZW5lci5yZW1vdmVFdmVudCh0aGlzLnJlZiwgdHlwZSlcbiAgICB9XG4gIH1cbn1cblxuRWxlbWVudC5wcm90b3R5cGUuZmlyZUV2ZW50ID0gZnVuY3Rpb24gKHR5cGUsIGUpIHtcbiAgY29uc3QgaGFuZGxlciA9IHRoaXMuZXZlbnRbdHlwZV1cbiAgaWYgKGhhbmRsZXIpIHtcbiAgICByZXR1cm4gaGFuZGxlci5jYWxsKHRoaXMsIGUpXG4gIH1cbn1cblxuRWxlbWVudC5wcm90b3R5cGUudG9TdHlsZSA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIGV4dGVuZCh7fSwgdGhpcy5jbGFzc1N0eWxlLCB0aGlzLnN0eWxlKVxufVxuXG5FbGVtZW50LnByb3RvdHlwZS50b0pTT04gPSBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IHJlc3VsdCA9IHtcbiAgICByZWY6IHRoaXMucmVmLnRvU3RyaW5nKCksXG4gICAgdHlwZTogdGhpcy50eXBlLFxuICAgIGF0dHI6IHRoaXMuYXR0cixcbiAgICBzdHlsZTogdGhpcy50b1N0eWxlKClcbiAgfVxuICBjb25zdCBldmVudCA9IE9iamVjdC5rZXlzKHRoaXMuZXZlbnQpXG4gIGlmIChldmVudC5sZW5ndGgpIHtcbiAgICByZXN1bHQuZXZlbnQgPSBldmVudFxuICB9XG4gIGlmICh0aGlzLnB1cmVDaGlsZHJlbi5sZW5ndGgpIHtcbiAgICByZXN1bHQuY2hpbGRyZW4gPSB0aGlzLnB1cmVDaGlsZHJlbi5tYXAoKGNoaWxkKSA9PiBjaGlsZC50b0pTT04oKSlcbiAgfVxuICByZXR1cm4gcmVzdWx0XG59XG5cbkVsZW1lbnQucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gJzwnICsgdGhpcy50eXBlICtcbiAgICAnIGF0dHI9JyArIEpTT04uc3RyaW5naWZ5KHRoaXMuYXR0cikgK1xuICAgICcgc3R5bGU9JyArIEpTT04uc3RyaW5naWZ5KHRoaXMudG9TdHlsZSgpKSArICc+JyArXG4gICAgdGhpcy5wdXJlQ2hpbGRyZW4ubWFwKChjaGlsZCkgPT4gY2hpbGQudG9TdHJpbmcoKSkuam9pbignJykgK1xuICAgICc8LycgKyB0aGlzLnR5cGUgKyAnPidcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIENvbW1lbnQgKHZhbHVlKSB7XG4gIHRoaXMubm9kZVR5cGUgPSA4XG4gIHRoaXMubm9kZUlkID0gKG5leHROb2RlUmVmKyspLnRvU3RyaW5nKClcbiAgdGhpcy5yZWYgPSB0aGlzLm5vZGVJZFxuICB0aGlzLnR5cGUgPSAnY29tbWVudCdcbiAgdGhpcy52YWx1ZSA9IHZhbHVlXG4gIHRoaXMuY2hpbGRyZW4gPSBbXVxuICB0aGlzLnB1cmVDaGlsZHJlbiA9IFtdXG59XG5cbkNvbW1lbnQucHJvdG90eXBlID0gbmV3IE5vZGUoKVxuXG5Db21tZW50LnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuICc8IS0tICcgKyB0aGlzLnZhbHVlICsgJyAtLT4nXG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2h0bWw1L3Zkb20vaW5kZXguanNcbiAqKi8iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMaXN0ZW5lciAoaWQsIGhhbmRsZXIpIHtcbiAgdGhpcy5pZCA9IGlkXG4gIHRoaXMuYmF0Y2hlZCA9IGZhbHNlXG4gIHRoaXMudXBkYXRlcyA9IFtdXG4gIGlmICh0eXBlb2YgaGFuZGxlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHRoaXMuaGFuZGxlciA9IGhhbmRsZXJcbiAgfVxufVxuXG5MaXN0ZW5lci5wcm90b3R5cGUuY3JlYXRlRmluaXNoID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gIGNvbnN0IGhhbmRsZXIgPSB0aGlzLmhhbmRsZXJcbiAgcmV0dXJuIGhhbmRsZXIoW2NyZWF0ZUFjdGlvbignY3JlYXRlRmluaXNoJywgW10pXSwgY2FsbGJhY2spXG59XG5cbkxpc3RlbmVyLnByb3RvdHlwZS51cGRhdGVGaW5pc2ggPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgY29uc3QgaGFuZGxlciA9IHRoaXMuaGFuZGxlclxuICByZXR1cm4gaGFuZGxlcihbY3JlYXRlQWN0aW9uKCd1cGRhdGVGaW5pc2gnLCBbXSldLCBjYWxsYmFjaylcbn1cblxuTGlzdGVuZXIucHJvdG90eXBlLnJlZnJlc2hGaW5pc2ggPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgY29uc3QgaGFuZGxlciA9IHRoaXMuaGFuZGxlclxuICByZXR1cm4gaGFuZGxlcihbY3JlYXRlQWN0aW9uKCdyZWZyZXNoRmluaXNoJywgW10pXSwgY2FsbGJhY2spXG59XG5cbkxpc3RlbmVyLnByb3RvdHlwZS5jcmVhdGVCb2R5ID0gZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgY29uc3QgYm9keSA9IGVsZW1lbnQudG9KU09OKClcbiAgY29uc3QgY2hpbGRyZW4gPSBib2R5LmNoaWxkcmVuXG4gIGRlbGV0ZSBib2R5LmNoaWxkcmVuXG4gIGNvbnN0IGFjdGlvbnMgPSBbY3JlYXRlQWN0aW9uKCdjcmVhdGVCb2R5JywgW2JvZHldKV1cbiAgaWYgKGNoaWxkcmVuKSB7XG4gICAgYWN0aW9ucy5wdXNoLmFwcGx5KGFjdGlvbnMsIGNoaWxkcmVuLm1hcChjaGlsZCA9PiB7XG4gICAgICByZXR1cm4gY3JlYXRlQWN0aW9uKCdhZGRFbGVtZW50JywgW2JvZHkucmVmLCBjaGlsZCwgLTFdKVxuICAgIH0pKVxuICB9XG4gIHJldHVybiB0aGlzLmFkZEFjdGlvbnMoYWN0aW9ucylcbn1cblxuTGlzdGVuZXIucHJvdG90eXBlLmFkZEVsZW1lbnQgPSBmdW5jdGlvbiAoZWxlbWVudCwgcmVmLCBpbmRleCkge1xuICBpZiAoIShpbmRleCA+PSAwKSkge1xuICAgIGluZGV4ID0gLTFcbiAgfVxuICByZXR1cm4gdGhpcy5hZGRBY3Rpb25zKGNyZWF0ZUFjdGlvbignYWRkRWxlbWVudCcsIFtyZWYsIGVsZW1lbnQudG9KU09OKCksIGluZGV4XSkpXG59XG5cbkxpc3RlbmVyLnByb3RvdHlwZS5yZW1vdmVFbGVtZW50ID0gZnVuY3Rpb24gKHJlZikge1xuICBpZiAoQXJyYXkuaXNBcnJheShyZWYpKSB7XG4gICAgY29uc3QgYWN0aW9ucyA9IHJlZi5tYXAoKHIpID0+IGNyZWF0ZUFjdGlvbigncmVtb3ZlRWxlbWVudCcsIFtyXSkpXG4gICAgcmV0dXJuIHRoaXMuYWRkQWN0aW9ucyhhY3Rpb25zKVxuICB9XG4gIHJldHVybiB0aGlzLmFkZEFjdGlvbnMoY3JlYXRlQWN0aW9uKCdyZW1vdmVFbGVtZW50JywgW3JlZl0pKVxufVxuXG5MaXN0ZW5lci5wcm90b3R5cGUubW92ZUVsZW1lbnQgPSBmdW5jdGlvbiAodGFyZ2V0UmVmLCBwYXJlbnRSZWYsIGluZGV4KSB7XG4gIHJldHVybiB0aGlzLmFkZEFjdGlvbnMoY3JlYXRlQWN0aW9uKCdtb3ZlRWxlbWVudCcsIFt0YXJnZXRSZWYsIHBhcmVudFJlZiwgaW5kZXhdKSlcbn1cblxuTGlzdGVuZXIucHJvdG90eXBlLnNldEF0dHIgPSBmdW5jdGlvbiAocmVmLCBrZXksIHZhbHVlKSB7XG4gIGNvbnN0IHJlc3VsdCA9IHt9XG4gIHJlc3VsdFtrZXldID0gdmFsdWVcbiAgcmV0dXJuIHRoaXMuYWRkQWN0aW9ucyhjcmVhdGVBY3Rpb24oJ3VwZGF0ZUF0dHJzJywgW3JlZiwgcmVzdWx0XSkpXG59XG5cbkxpc3RlbmVyLnByb3RvdHlwZS5zZXRTdHlsZSA9IGZ1bmN0aW9uIChyZWYsIGtleSwgdmFsdWUpIHtcbiAgY29uc3QgcmVzdWx0ID0ge31cbiAgcmVzdWx0W2tleV0gPSB2YWx1ZVxuICByZXR1cm4gdGhpcy5hZGRBY3Rpb25zKGNyZWF0ZUFjdGlvbigndXBkYXRlU3R5bGUnLCBbcmVmLCByZXN1bHRdKSlcbn1cblxuTGlzdGVuZXIucHJvdG90eXBlLnNldFN0eWxlcyA9IGZ1bmN0aW9uIChyZWYsIHN0eWxlKSB7XG4gIHJldHVybiB0aGlzLmFkZEFjdGlvbnMoY3JlYXRlQWN0aW9uKCd1cGRhdGVTdHlsZScsIFtyZWYsIHN0eWxlXSkpXG59XG5cbkxpc3RlbmVyLnByb3RvdHlwZS5hZGRFdmVudCA9IGZ1bmN0aW9uIChyZWYsIHR5cGUpIHtcbiAgcmV0dXJuIHRoaXMuYWRkQWN0aW9ucyhjcmVhdGVBY3Rpb24oJ2FkZEV2ZW50JywgW3JlZiwgdHlwZV0pKVxufVxuXG5MaXN0ZW5lci5wcm90b3R5cGUucmVtb3ZlRXZlbnQgPSBmdW5jdGlvbiAocmVmLCB0eXBlKSB7XG4gIHJldHVybiB0aGlzLmFkZEFjdGlvbnMoY3JlYXRlQWN0aW9uKCdyZW1vdmVFdmVudCcsIFtyZWYsIHR5cGVdKSlcbn1cblxuTGlzdGVuZXIucHJvdG90eXBlLmhhbmRsZXIgPSBmdW5jdGlvbiAoYWN0aW9ucywgY2IpIHtcbiAgcmV0dXJuIGNiICYmIGNiKClcbn1cblxuTGlzdGVuZXIucHJvdG90eXBlLmFkZEFjdGlvbnMgPSBmdW5jdGlvbiAoYWN0aW9ucykge1xuICBjb25zdCB1cGRhdGVzID0gdGhpcy51cGRhdGVzXG4gIGNvbnN0IGhhbmRsZXIgPSB0aGlzLmhhbmRsZXJcblxuICBpZiAoIUFycmF5LmlzQXJyYXkoYWN0aW9ucykpIHtcbiAgICBhY3Rpb25zID0gW2FjdGlvbnNdXG4gIH1cblxuICBpZiAodGhpcy5iYXRjaGVkKSB7XG4gICAgdXBkYXRlcy5wdXNoLmFwcGx5KHVwZGF0ZXMsIGFjdGlvbnMpXG4gIH1cbiAgZWxzZSB7XG4gICAgcmV0dXJuIGhhbmRsZXIoYWN0aW9ucylcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQWN0aW9uIChuYW1lLCBhcmdzKSB7XG4gIHJldHVybiB7IG1vZHVsZTogJ2RvbScsIG1ldGhvZDogbmFtZSwgYXJnczogYXJncyB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2h0bWw1L3Zkb20vbGlzdGVuZXIuanNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJuYW1lXCI6IFwid2VleFwiLFxuXHRcInZlcnNpb25cIjogXCIwLjQuMFwiLFxuXHRcImRlc2NyaXB0aW9uXCI6IFwiQSBmcmFtZXdvcmsgZm9yIGJ1aWxkaW5nIE1vYmlsZSBjcm9zcy1wbGF0Zm9ybSBVSVwiLFxuXHRcImxpY2Vuc2VcIjogXCJBcGFjaGUtMi4wXCIsXG5cdFwicmVwb3NpdG9yeVwiOiB7XG5cdFx0XCJ0eXBlXCI6IFwiZ2l0XCIsXG5cdFx0XCJ1cmxcIjogXCJnaXRAZ2l0aHViLmNvbTphbGliYWJhL3dlZXguZ2l0XCJcblx0fSxcblx0XCJob21lcGFnZVwiOiBcImh0dHA6Ly9hbGliYWJhLmdpdGh1Yi5pby93ZWV4L1wiLFxuXHRcImJ1Z3NcIjoge1xuXHRcdFwidXJsXCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL2FsaWJhYmEvd2VleC9pc3N1ZXNcIlxuXHR9LFxuXHRcInByaXZhdGVcIjogXCJ0cnVlXCIsXG5cdFwia2V5d29yZHNcIjogW1xuXHRcdFwid2VleFwiLFxuXHRcdFwiaHlicmlkXCIsXG5cdFx0XCJ3ZWJjb21wb25lbnRcIixcblx0XHRcImFwcGZyYW1ld29ya1wiLFxuXHRcdFwibXZ2bVwiLFxuXHRcdFwiamF2YXNjcmlwdFwiLFxuXHRcdFwid2Via2l0XCIsXG5cdFx0XCJ2OFwiLFxuXHRcdFwianNjb3JlXCIsXG5cdFx0XCJodG1sNVwiLFxuXHRcdFwiYW5kcm9pZFwiLFxuXHRcdFwiaW9zXCIsXG5cdFx0XCJ5dW5vc1wiXG5cdF0sXG5cdFwiZW5naW5lc1wiOiB7XG5cdFx0XCJub2RlXCI6IFwiPj00XCJcblx0fSxcblx0XCJzY3JpcHRzXCI6IHtcblx0XHRcInBvc3RpbnN0YWxsXCI6IFwiYmFzaCAuL2Jpbi9pbnN0YWxsLWhvb2tzLnNoXCIsXG5cdFx0XCJidWlsZDpjb25maWdcIjogXCJub2RlIGJ1aWxkL2NvbmZpZy5mcmFtZXdvcmtzLmpzXCIsXG5cdFx0XCJidWlsZDpicm93c2VyXCI6IFwid2VicGFjayAtLWNvbmZpZyBidWlsZC93ZWJwYWNrLmJyb3dzZXIuY29uZmlnLmpzXCIsXG5cdFx0XCJidWlsZDpuYXRpdmVcIjogXCJ3ZWJwYWNrIC0tY29uZmlnIGJ1aWxkL3dlYnBhY2submF0aXZlLmNvbmZpZy5qc1wiLFxuXHRcdFwiYnVpbGQ6ZXhhbXBsZXNcIjogXCJ3ZWJwYWNrIC0tY29uZmlnIGJ1aWxkL3dlYnBhY2suZXhhbXBsZXMuY29uZmlnLmpzXCIsXG5cdFx0XCJidWlsZDp0ZXN0XCI6IFwid2VicGFjayAtLWNvbmZpZyBidWlsZC93ZWJwYWNrLnRlc3QuY29uZmlnLmpzXCIsXG5cdFx0XCJkaXN0OmJyb3dzZXJcIjogXCJucG0gcnVuIGJ1aWxkOmJyb3dzZXIgJiYgYmFzaCAuL2Jpbi9kaXN0LWJyb3dzZXIuc2hcIixcblx0XHRcImRpc3RcIjogXCJucG0gcnVuIGRpc3Q6YnJvd3NlclwiLFxuXHRcdFwiZGV2OmJyb3dzZXJcIjogXCJ3ZWJwYWNrIC0td2F0Y2ggLS1jb25maWcgYnVpbGQvd2VicGFjay5icm93c2VyLmNvbmZpZy5qc1wiLFxuXHRcdFwiZGV2Om5hdGl2ZVwiOiBcIndlYnBhY2sgLS13YXRjaCAtLWNvbmZpZyBidWlsZC93ZWJwYWNrLm5hdGl2ZS5jb25maWcuanNcIixcblx0XHRcImRldjpleGFtcGxlc1wiOiBcIndlYnBhY2sgLS13YXRjaCAtLWNvbmZpZyBidWlsZC93ZWJwYWNrLmV4YW1wbGVzLmNvbmZpZy5qc1wiLFxuXHRcdFwiZGV2OnRlc3RcIjogXCJ3ZWJwYWNrIC0td2F0Y2ggLS1jb25maWcgYnVpbGQvd2VicGFjay50ZXN0LmNvbmZpZy5qc1wiLFxuXHRcdFwiYnVpbGRcIjogXCJucG0gcnVuIGJ1aWxkOm5hdGl2ZSAmJiBucG0gcnVuIGJ1aWxkOmJyb3dzZXIgJiYgbnBtIHJ1biBidWlsZDpleGFtcGxlcyAmJiBucG0gcnVuIGJ1aWxkOnRlc3RcIixcblx0XHRcImxpbnRcIjogXCJlc2xpbnQgaHRtbDVcIixcblx0XHRcInRlc3Q6dW5pdFwiOiBcIm1vY2hhIC0tY29tcGlsZXJzIGpzOmJhYmVsLWNvcmUvcmVnaXN0ZXIgaHRtbDUvdGVzdC91bml0LyovKi5qcyBodG1sNS90ZXN0L3VuaXQvKi8qLyouanNcIixcblx0XHRcInRlc3Q6Y292ZXJcIjogXCJiYWJlbC1ub2RlIG5vZGVfbW9kdWxlcy9pc3BhcnRhL2Jpbi9pc3BhcnRhIGNvdmVyIC0tcmVwb3J0IHRleHQgbm9kZV9tb2R1bGVzL21vY2hhL2Jpbi9fbW9jaGEgLS0gLS1yZXBvcnRlciBkb3QgaHRtbDUvdGVzdC91bml0LyovKi5qcyBodG1sNS90ZXN0L3VuaXQvKi8qLyouanNcIixcblx0XHRcInRlc3Q6ZTJlXCI6IFwibnBtIHJ1biBidWlsZDpicm93c2VyICYmIG5vZGUgaHRtbDUvdGVzdC9lMmUvcnVubmVyLmpzXCIsXG5cdFx0XCJ0ZXN0XCI6IFwibnBtIHJ1biBidWlsZDpjb25maWcgJiYgbnBtIHJ1biBsaW50ICYmIG5wbSBydW4gdGVzdDpjb3ZlciAmJiBucG0gcnVuIHRlc3Q6ZTJlXCIsXG5cdFx0XCJzZXJ2ZVwiOiBcInNlcnZlIC4vIC1wIDEyNTgwXCIsXG5cdFx0XCJjbGVhbjpleGFtcGxlc1wiOiBcImVjaG8gXFxcIlxcXFwwMzNbMzY7MW1bQ2xlYW5dXFxcXDAzM1swbSBcXFxcMDMzWzMzbWV4YW1wbGVzXFxcXDAzM1swbVxcXCIgJiYgcm0gLXZyZiBleGFtcGxlcy9idWlsZC8qXCIsXG5cdFx0XCJjbGVhbjp0ZXN0XCI6IFwiZWNobyBcXFwiXFxcXDAzM1szNjsxbVtDbGVhbl1cXFxcMDMzWzBtIFxcXFwwMzNbMzNtdGVzdFxcXFwwMzNbMG1cXFwiICYmIHJtIC12cmYgdGVzdC9idWlsZC8qXCIsXG5cdFx0XCJjbGVhblwiOiBcIm5wbSBydW4gY2xlYW46ZXhhbXBsZXMgJiYgbnBtIHJ1biBjbGVhbjp0ZXN0XCIsXG5cdFx0XCJjb3B5OmpzXCI6IFwiY3AgLXZmIC4vZGlzdC9uYXRpdmUuanMgLi9hbmRyb2lkL3Nkay9hc3NldHMvbWFpbi5qc1wiLFxuXHRcdFwiY29weTpleGFtcGxlc1wiOiBcInJtIC1yZiAuL2FuZHJvaWQvcGxheWdyb3VuZC9hcHAvc3JjL21haW4vYXNzZXRzLyogJiYgY3AgLXZyZiAuL2V4YW1wbGVzL2J1aWxkLyogLi9hbmRyb2lkL3BsYXlncm91bmQvYXBwL3NyYy9tYWluL2Fzc2V0cy9cIixcblx0XHRcImNvcHlcIjogXCJucG0gcnVuIGNvcHk6anMgJiYgbnBtIHJ1biBjb3B5OmV4YW1wbGVzXCJcblx0fSxcblx0XCJzdWJ2ZXJzaW9uXCI6IHtcblx0XHRcImJyb3dzZXJcIjogXCIwLjIuMjNcIixcblx0XHRcImZyYW1ld29ya1wiOiBcIjAuMTUuMVwiLFxuXHRcdFwidHJhbnNmb3JtZXJcIjogXCI+PTAuMS41IDwwLjRcIlxuXHR9LFxuXHRcImRlcGVuZGVuY2llc1wiOiB7XG5cdFx0XCJhbmltYXRpb25qc1wiOiBcIl4wLjEuNVwiLFxuXHRcdFwiY2Fycm91c2VsXCI6IFwiXjAuMS4xMVwiLFxuXHRcdFwiY29yZS1qc1wiOiBcIl4yLjQuMFwiLFxuXHRcdFwiY3ViaWNiZXppZXJcIjogXCJeMC4xLjFcIixcblx0XHRcImVudmRcIjogXCJeMC4xLjFcIixcblx0XHRcImZpeGVkc3RpY2t5XCI6IFwiXjAuMS4wXCIsXG5cdFx0XCJodHRwdXJsXCI6IFwiXjAuMS4xXCIsXG5cdFx0XCJrb3VudGRvd25cIjogXCJeMC4xLjJcIixcblx0XHRcImxhenlpbWdcIjogXCJeMC4xLjJcIixcblx0XHRcImxpZVwiOiBcIl4zLjAuNFwiLFxuXHRcdFwibW9kYWxzXCI6IFwiXjAuMS41XCIsXG5cdFx0XCJzY3JvbGwtdG9cIjogXCIwLjAuMlwiLFxuXHRcdFwic2VtdmVyXCI6IFwiXjUuMS4wXCIsXG5cdFx0XCJ0cmFuc2l0aW9uaXplXCI6IFwiMC4wLjNcIixcblx0XHRcIndlZXgtY29tcG9uZW50c1wiOiBcIl4wLjEuM1wiXG5cdH0sXG5cdFwiZGV2RGVwZW5kZW5jaWVzXCI6IHtcblx0XHRcImJhYmVsLWNsaVwiOiBcIn42LjQuNVwiLFxuXHRcdFwiYmFiZWwtbG9hZGVyXCI6IFwiXjYuMi40XCIsXG5cdFx0XCJiYWJlbC1wcmVzZXQtZXMyMDE1XCI6IFwiXjYuOS4wXCIsXG5cdFx0XCJjaGFpXCI6IFwiXjMuNS4wXCIsXG5cdFx0XCJjaHJvbWVkcml2ZXJcIjogXCJeMi4yMS4yXCIsXG5cdFx0XCJjcm9zcy1zcGF3blwiOiBcIl40LjAuMFwiLFxuXHRcdFwiY3NzLWxvYWRlclwiOiBcIl4wLjIzLjFcIixcblx0XHRcImVzbGludFwiOiBcIl4yLjExLjFcIixcblx0XHRcImh0dHAtc2VydmVyXCI6IFwiXjAuOS4wXCIsXG5cdFx0XCJpc3BhcnRhXCI6IFwiXjQuMC4wXCIsXG5cdFx0XCJpc3RhbmJ1bFwiOiBcIl4wLjQuM1wiLFxuXHRcdFwianNvbi1sb2FkZXJcIjogXCJeMC41LjRcIixcblx0XHRcIm1vY2hhXCI6IFwiXjIuNS4zXCIsXG5cdFx0XCJuaWdodHdhdGNoXCI6IFwiXjAuOS40XCIsXG5cdFx0XCJwaGFudG9tanMtcHJlYnVpbHRcIjogXCJeMi4xLjdcIixcblx0XHRcInNlbGVuaXVtLXNlcnZlclwiOiBcIl4yLjUzLjBcIixcblx0XHRcInNlcnZlXCI6IFwiXjEuNC4wXCIsXG5cdFx0XCJzaW5vblwiOiBcIl4xLjE3LjRcIixcblx0XHRcInNpbm9uLWNoYWlcIjogXCJeMi44LjBcIixcblx0XHRcInN0eWxlLWxvYWRlclwiOiBcIl4wLjEzLjFcIixcblx0XHRcInVnbGlmeS1qc1wiOiBcIl4yLjYuNFwiLFxuXHRcdFwid2VicGFja1wiOiBcIl4xLjEzLjFcIixcblx0XHRcIndlZXgtbG9hZGVyXCI6IFwiXjAuMi4wXCJcblx0fVxufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vcGFja2FnZS5qc29uXG4gKiogbW9kdWxlIGlkID0gOTZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuICogQGZpbGVPdmVydmlldyBUaGUgYXBpIGZvciBpbnZva2luZyB3aXRoIFwiJFwiIHByZWZpeFxuICovXG5pbXBvcnQgeyBleHRlbmQsIHR5cG9mIH0gZnJvbSAnLi4vdXRpbCdcblxuLyoqXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKiBjb21tb25cbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqL1xuXG4vKipcbiAqIEBkZXByZWNhdGVkIHVzZSAkdm0gaW5zdGVhZFxuICogZmluZCB0aGUgdm0gYnkgaWRcbiAqIE5vdGU6IHRoZXJlIGlzIG9ubHkgb25lIGlkIGluIHdob2xlIGNvbXBvbmVudFxuICogQHBhcmFtICB7c3RyaW5nfSBpZFxuICogQHJldHVybiB7Vm19XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiAkIChpZCkge1xuICBjb25zb2xlLndhcm4oJ1tKUyBGcmFtZXdvcmtdIFZtIyQgaXMgZGVwcmVjYXRlZCwgcGxlYXNlIHVzZSBWbSMkdm0gaW5zdGVhZCcpXG4gIGNvbnN0IGluZm8gPSB0aGlzLl9pZHNbaWRdXG4gIGlmIChpbmZvKSB7XG4gICAgcmV0dXJuIGluZm8udm1cbiAgfVxufVxuXG4vKipcbiAqIGZpbmQgdGhlIGVsZW1lbnQgYnkgaWRcbiAqIE5vdGU6IHRoZXJlIGlzIG9ubHkgb25lIGlkIGluIHdob2xlIGNvbXBvbmVudFxuICogQHBhcmFtICB7c3RyaW5nfSBpZFxuICogQHJldHVybiB7RWxlbWVudH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uICRlbCAoaWQpIHtcbiAgY29uc3QgaW5mbyA9IHRoaXMuX2lkc1tpZF1cbiAgaWYgKGluZm8pIHtcbiAgICByZXR1cm4gaW5mby5lbFxuICB9XG59XG5cbi8qKlxuICogZmluZCB0aGUgdm0gb2YgdGhlIGN1c3RvbSBjb21wb25lbnQgYnkgaWRcbiAqIE5vdGU6IHRoZXJlIGlzIG9ubHkgb25lIGlkIGluIHdob2xlIGNvbXBvbmVudFxuICogQHBhcmFtICB7c3RyaW5nfSBpZFxuICogQHJldHVybiB7Vm19XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiAkdm0gKGlkKSB7XG4gIGNvbnN0IGluZm8gPSB0aGlzLl9pZHNbaWRdXG4gIGlmIChpbmZvKSB7XG4gICAgcmV0dXJuIGluZm8udm1cbiAgfVxufVxuXG4vKipcbiAqIEZpcmUgd2hlbiBkaWZmZXIgcmVuZGVyaW5nIGZpbmlzaGVkXG4gKlxuICogQHBhcmFtICB7RnVuY3Rpb259IGZuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiAkcmVuZGVyVGhlbiAoZm4pIHtcbiAgY29uc3QgYXBwID0gdGhpcy5fYXBwXG4gIGNvbnN0IGRpZmZlciA9IGFwcC5kaWZmZXJcbiAgcmV0dXJuIGRpZmZlci50aGVuKCgpID0+IHtcbiAgICBmbigpXG4gIH0pXG59XG5cbi8qKlxuICogc2Nyb2xsIGFuIGVsZW1lbnQgc3BlY2lmaWVkIGJ5IGlkIGludG8gdmlldyxcbiAqIG1vcmVvdmVyIHNwZWNpZnkgYSBudW1iZXIgb2Ygb2Zmc2V0IG9wdGlvbmFsbHlcbiAqIEBwYXJhbSAge3N0cmluZ30gaWRcbiAqIEBwYXJhbSAge251bWJlcn0gb2Zmc2V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiAkc2Nyb2xsVG8gKGlkLCBvZmZzZXQpIHtcbiAgY29uc29sZS53YXJuKCdbSlMgRnJhbWV3b3JrXSBWbSMkc2Nyb2xsVG8gaXMgZGVwcmVjYXRlZCwgJyArXG4gICAgICAgICAgJ3BsZWFzZSB1c2UgXCJyZXF1aXJlKFxcJ0B3ZWV4LW1vZHVsZS9kb21cXCcpJyArXG4gICAgICAgICAgJy5zY3JvbGxUbyhlbCwgb3B0aW9ucylcIiBpbnN0ZWFkJylcbiAgY29uc3QgZWwgPSB0aGlzLiRlbChpZClcbiAgaWYgKGVsKSB7XG4gICAgY29uc3QgZG9tID0gdGhpcy5fYXBwLnJlcXVpcmVNb2R1bGUoJ2RvbScpXG4gICAgZG9tLnNjcm9sbFRvRWxlbWVudChlbC5yZWYsIHsgb2Zmc2V0OiBvZmZzZXQgfSlcbiAgfVxufVxuXG4vKipcbiAqIHBlcmZvcm0gdHJhbnNpdGlvbiBhbmltYXRpb24gb24gYW4gZWxlbWVudCBzcGVjaWZpZWQgYnkgaWRcbiAqIEBwYXJhbSAge3N0cmluZ30gICBpZFxuICogQHBhcmFtICB7b2JqZWN0fSAgIG9wdGlvbnNcbiAqIEBwYXJhbSAge29iamVjdH0gICBvcHRpb25zLnN0eWxlc1xuICogQHBhcmFtICB7b2JqZWN0fSAgIG9wdGlvbnMuZHVyYXRpb24obXMpXG4gKiBAcGFyYW0gIHtvYmplY3R9ICAgW29wdGlvbnMudGltaW5nRnVuY3Rpb25dXG4gKiBAcGFyYW0gIHtvYmplY3R9ICAgW29wdGlvbnMuZGVsYXk9MChtcyldXG4gKiBAcGFyYW0gIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uICR0cmFuc2l0aW9uIChpZCwgb3B0aW9ucywgY2FsbGJhY2spIHtcbiAgY29uc3QgZWwgPSB0aGlzLiRlbChpZClcbiAgaWYgKGVsICYmIG9wdGlvbnMgJiYgb3B0aW9ucy5zdHlsZXMpIHtcbiAgICBjb25zdCBhbmltYXRpb24gPSB0aGlzLl9hcHAucmVxdWlyZU1vZHVsZSgnYW5pbWF0aW9uJylcbiAgICBhbmltYXRpb24udHJhbnNpdGlvbihlbC5yZWYsIG9wdGlvbnMsICguLi5hcmdzKSA9PiB7XG4gICAgICB0aGlzLl9zZXRTdHlsZShlbCwgb3B0aW9ucy5zdHlsZXMpXG4gICAgICBjYWxsYmFjayAmJiBjYWxsYmFjayguLi5hcmdzKVxuICAgIH0pXG4gIH1cbn1cblxuLyoqXG4gKiBnZXQgc29tZSBjb25maWdcbiAqIEByZXR1cm4ge29iamVjdH0gc29tZSBjb25maWcgZm9yIGFwcCBpbnN0YW5jZVxuICogQHByb3BlcnR5IHtzdHJpbmd9IGJ1bmRsZVVybFxuICogQHByb3BlcnR5IHtib29sZWFufSBkZWJ1Z1xuICogQHByb3BlcnR5IHtvYmplY3R9IGVudlxuICogQHByb3BlcnR5IHtzdHJpbmd9IGVudi53ZWV4VmVyc2lvbihleC4gMS4wLjApXG4gKiBAcHJvcGVydHkge3N0cmluZ30gZW52LmFwcE5hbWUoZXguIFRCL1RNKVxuICogQHByb3BlcnR5IHtzdHJpbmd9IGVudi5hcHBWZXJzaW9uKGV4LiA1LjAuMClcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBlbnYucGxhdGZvcm0oZXguIGlPUy9BbmRyb2lkKVxuICogQHByb3BlcnR5IHtzdHJpbmd9IGVudi5vc1ZlcnNpb24oZXguIDcuMC4wKVxuICogQHByb3BlcnR5IHtzdHJpbmd9IGVudi5kZXZpY2VNb2RlbCAqKm5hdGl2ZSBvbmx5KipcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBlbnYuW2RldmljZVdpZHRoPTc1MF1cbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBlbnYuZGV2aWNlSGVpZ2h0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiAkZ2V0Q29uZmlnIChjYWxsYmFjaykge1xuICBjb25zdCBjb25maWcgPSBleHRlbmQoe1xuICAgIGVudjogZ2xvYmFsLldYRW52aXJvbm1lbnQgfHwge31cbiAgfSwgdGhpcy5fYXBwLm9wdGlvbnMpXG4gIGlmICh0eXBvZihjYWxsYmFjaykgPT09ICdmdW5jdGlvbicpIHtcbiAgICBjb25zb2xlLndhcm4oJ1tKUyBGcmFtZXdvcmtdIHRoZSBjYWxsYmFjayBvZiBWbSMkZ2V0Q29uZmlnKGNhbGxiYWNrKSBpcyBkZXByZWNhdGVkLCAnICtcbiAgICAgICd0aGlzIGFwaSBub3cgY2FuIGRpcmVjdGx5IFJFVFVSTiBjb25maWcgaW5mby4nKVxuICAgIGNhbGxiYWNrKGNvbmZpZylcbiAgfVxuICByZXR1cm4gY29uZmlnXG59XG5cbi8qKlxuICogQGRlcHJlY2F0ZWRcbiAqIHJlcXVlc3QgbmV0d29yayB2aWEgaHR0cCBwcm90b2NvbFxuICogQHBhcmFtICB7b2JqZWN0fSAgIHBhcmFtc1xuICogQHBhcmFtICB7RnVuY3Rpb259IGNhbGxiYWNrXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiAkc2VuZEh0dHAgKHBhcmFtcywgY2FsbGJhY2spIHtcbiAgY29uc29sZS53YXJuKCdbSlMgRnJhbWV3b3JrXSBWbSMkc2VuZEh0dHAgaXMgZGVwcmVjYXRlZCwgJyArXG4gICAgICAgICAgJ3BsZWFzZSB1c2UgXCJyZXF1aXJlKFxcJ0B3ZWV4LW1vZHVsZS9zdHJlYW1cXCcpJyArXG4gICAgICAgICAgJy5zZW5kSHR0cChwYXJhbXMsIGNhbGxiYWNrKVwiIGluc3RlYWQnKVxuICBjb25zdCBzdHJlYW0gPSB0aGlzLl9hcHAucmVxdWlyZU1vZHVsZSgnc3RyZWFtJylcbiAgc3RyZWFtLnNlbmRIdHRwKHBhcmFtcywgY2FsbGJhY2spXG59XG5cbi8qKlxuICogQGRlcHJlY2F0ZWRcbiAqIG9wZW4gYSB1cmxcbiAqIEBwYXJhbSAge3N0cmluZ30gdXJsXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiAkb3BlblVSTCAodXJsKSB7XG4gIGNvbnNvbGUud2FybignW0pTIEZyYW1ld29ya10gVm0jJG9wZW5VUkwgaXMgZGVwcmVjYXRlZCwgJyArXG4gICAgICAgICAgJ3BsZWFzZSB1c2UgXCJyZXF1aXJlKFxcJ0B3ZWV4LW1vZHVsZS9ldmVudFxcJyknICtcbiAgICAgICAgICAnLm9wZW5VUkwodXJsKVwiIGluc3RlYWQnKVxuICBjb25zdCBldmVudCA9IHRoaXMuX2FwcC5yZXF1aXJlTW9kdWxlKCdldmVudCcpXG4gIGV2ZW50Lm9wZW5VUkwodXJsKVxufVxuXG4vKipcbiAqIEBkZXByZWNhdGVkXG4gKiBzZXQgYSB0aXRsZSBmb3IgcGFnZVxuICogQHBhcmFtICB7c3RyaW5nfSB0aXRsZVxuICovXG5leHBvcnQgZnVuY3Rpb24gJHNldFRpdGxlICh0aXRsZSkge1xuICBjb25zb2xlLndhcm4oJ1tKUyBGcmFtZXdvcmtdIFZtIyRzZXRUaXRsZSBpcyBkZXByZWNhdGVkLCAnICtcbiAgICAgICAgICAncGxlYXNlIHVzZSBcInJlcXVpcmUoXFwnQHdlZXgtbW9kdWxlL3BhZ2VJbmZvXFwnKScgK1xuICAgICAgICAgICcuc2V0VGl0bGUodGl0bGUpXCIgaW5zdGVhZCcpXG4gIGNvbnN0IHBhZ2VJbmZvID0gdGhpcy5fYXBwLnJlcXVpcmVNb2R1bGUoJ3BhZ2VJbmZvJylcbiAgcGFnZUluZm8uc2V0VGl0bGUodGl0bGUpXG59XG5cbi8qKlxuICogQGRlcHJlY2F0ZWQgdXNlIFwicmVxdWlyZSgnQHdlZXgtbW9kdWxlL21vZHVsZU5hbWUnKSBpbnN0ZWFkXCJcbiAqIGludm9rZSBhIG5hdGl2ZSBtZXRob2QgYnkgc3BlY2lmaW5nIHRoZSBuYW1lIG9mIG1vZHVsZSBhbmQgbWV0aG9kXG4gKiBAcGFyYW0gIHtzdHJpbmd9IG1vZHVsZU5hbWVcbiAqIEBwYXJhbSAge3N0cmluZ30gbWV0aG9kTmFtZVxuICogQHBhcmFtICB7Li4uKn0gdGhlIHJlc3QgYXJndW1lbnRzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiAkY2FsbCAobW9kdWxlTmFtZSwgbWV0aG9kTmFtZSwgLi4uYXJncykge1xuICBjb25zb2xlLndhcm4oJ1tKUyBGcmFtZXdvcmtdIFZtIyRjYWxsIGlzIGRlcHJlY2F0ZWQsICcgK1xuICAgICdwbGVhc2UgdXNlIFwicmVxdWlyZShcXCdAd2VleC1tb2R1bGUvbW9kdWxlTmFtZVxcJylcIiBpbnN0ZWFkJylcbiAgY29uc3QgbW9kdWxlID0gdGhpcy5fYXBwLnJlcXVpcmVNb2R1bGUobW9kdWxlTmFtZSlcbiAgaWYgKG1vZHVsZSAmJiBtb2R1bGVbbWV0aG9kTmFtZV0pIHtcbiAgICBtb2R1bGVbbWV0aG9kTmFtZV0oLi4uYXJncylcbiAgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9odG1sNS9kZWZhdWx0L2FwaS9tZXRob2RzLmpzXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==