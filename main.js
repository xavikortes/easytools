(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "../../../node_modules/css-loader/dist/cjs.js?!../../../node_modules/postcss-loader/dist/cjs.js?!./app/app.module.css":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** /home/javier/workspace/nx/easytools/node_modules/css-loader/dist/cjs.js??ref--5-oneOf-0-1!/home/javier/workspace/nx/easytools/node_modules/postcss-loader/dist/cjs.js??ref--5-oneOf-0-2!./app/app.module.css ***!
  \********************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "../../../node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "html, body, div, span, a, h1, h2, h3, h4, h5, h6, p,\nblockquote, img, ol, ul, li, input, label, select,\ntable, tbody, tfoot, thead, tr, th, td, footer, header,\nmenu, nav, section, video {\n  margin: 0; padding: 0; font-size: 100%; list-style: none; border: 0;\n}\n\n@font-face {\n  font-family: 'FreePixel';\n  src: local('FreePixel'), url('https://xavikortes.github.io/easytools/assets/fonts/FreePixel.ttf') format('truetype');\n}\n\n:root {\n  --menu-background: #deded6;\n  --menu-tags-background: #333d51;\n  --menu-tags-active: #ed7147;\n  --app-background: #566c86;\n  --canvas-background: #1a1c2c;\n  --canvas-border: 2px solid #deded6;\n  --canvas-shadow: 0px 0.25em 0.25em 0px #1a1c2c;\n  --canvas-item-border: 1px solid #333;\n  --palette-item-border: 2px solid #1a1c2c;\n}\n\n.app_container__2kNhW {\n  width: 100%;\n  min-height: 100%;\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  display: flex;\n  justify-content: center;\n  font-family: 'FreePixel';\n  font-weight: bold;\n  background-color: #304c6d;\n}\n\n.app_container__2kNhW > * {\n  max-width: 480px;\n}\n\n.app_wrapper__2ckbR {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n}\n\n.app_app__j3Q8W {\n  flex-grow: 1;\n  display: flex;\n  align-items: stretch;\n  background-color: var(--app-background);\n  overflow-y: auto;\n}\n\n.app_paletteEditor__Icvu8 {\n  flex-grow: 1;\n  padding: 10% 15%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\n.app_paletteListItem__JWw_N {\n  margin: 0% 0% 10%;\n}\n\n.app_spriteEditor__1pb48 {\n  flex-grow: 1;\n  min-height: 650px;\n  padding: 10% 15%;\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\n.app_blockTitle__2ZdBu {\n  max-height: 50px;\n  display: flex;\n  justify-content: center;\n  color: var(--menu-background);\n  font-size: 3em;\n  filter: drop-shadow(0.1em 0.25em 0.1em #140c1c);\n}\n\n.app_spriteSheetEditor__2H-ct {\n  flex-grow: 1;\n  min-height: 650px;\n  padding: 2%;\n  display: flex;\n  box-sizing: border-box;\n  flex-direction: column;\n  justify-content: center;\n}\n\n.app_spritesheet__--jAq {\n  display: flex;\n  flex-wrap: wrap;\n  background-color: var(--canvas-background);\n  border: var(--canvas-border);\n  box-shadow: var(--canvas-shadow);\n}\n\n.app_block__1jaU4 {\n  border: var(--canvas-item-border);\n  position: relative;\n  box-sizing: border-box;\n  height: 0;\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.app_block__1jaU4 .app_pixel__iXVnc {\n  border: none;\n}\n\n.app_selected__i5P3z {\n  box-shadow: 0px 0px 0px 0.1em white inset;\n}\n", ""]);
// Exports
exports.locals = {
	"container": "app_container__2kNhW",
	"wrapper": "app_wrapper__2ckbR",
	"app": "app_app__j3Q8W",
	"paletteEditor": "app_paletteEditor__Icvu8",
	"paletteListItem": "app_paletteListItem__JWw_N",
	"spriteEditor": "app_spriteEditor__1pb48",
	"blockTitle": "app_blockTitle__2ZdBu",
	"spriteSheetEditor": "app_spriteSheetEditor__2H-ct",
	"spritesheet": "app_spritesheet__--jAq",
	"block": "app_block__1jaU4",
	"pixel": "app_pixel__iXVnc",
	"selected": "app_selected__i5P3z"
};
module.exports = exports;


/***/ }),

/***/ "../../../node_modules/css-loader/dist/cjs.js?!../../../node_modules/postcss-loader/dist/cjs.js?!./app/components/canvas.module.css":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** /home/javier/workspace/nx/easytools/node_modules/css-loader/dist/cjs.js??ref--5-oneOf-0-1!/home/javier/workspace/nx/easytools/node_modules/postcss-loader/dist/cjs.js??ref--5-oneOf-0-2!./app/components/canvas.module.css ***!
  \**********************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "../../../node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".canvas_canvas__29xGa {\n  display: flex;\n  flex-wrap: wrap;\n  align-content: flex-start;\n  background-color: var(--canvas-background); \n  border: var(--canvas-border);\n  box-shadow: var(--canvas-shadow);\n}\n\n.canvas_pixel__FPrPI {\n  position: relative;\n  box-sizing: border-box;\n  height: 0;\n  border: var(--canvas-item-border);\n}\n", ""]);
// Exports
exports.locals = {
	"canvas": "canvas_canvas__29xGa",
	"pixel": "canvas_pixel__FPrPI"
};
module.exports = exports;


/***/ }),

/***/ "../../../node_modules/css-loader/dist/cjs.js?!../../../node_modules/postcss-loader/dist/cjs.js?!./app/components/menu.module.css":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** /home/javier/workspace/nx/easytools/node_modules/css-loader/dist/cjs.js??ref--5-oneOf-0-1!/home/javier/workspace/nx/easytools/node_modules/postcss-loader/dist/cjs.js??ref--5-oneOf-0-2!./app/components/menu.module.css ***!
  \********************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "../../../node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".menu_menu__iOrrw {\n  max-height: 30px;\n  flex-basis: 30px;\n  padding: 0px 4%;\n  display: flex;\n  align-items: center;\n  background-color: var(--menu-background);\n}\n\n.menu_spriteEditorModes__u40S_ {\n  flex-grow: 1;\n  display: flex;\n  justify-content: flex-end;\n}\n\n.menu_modeTag__1PI7m {\n  width: 45px;\n  height: 70px;\n  background-color: var(--menu-tags-background);\n  color: var(--menu-background);\n  margin-left: 1%;\n  border-radius: 0 0 20% 20%;\n  border: none;\n  z-index: 10;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n/* TODO - Duplicated */\n\n.menu_toolbuttonImg__1UdlC {\n  filter: drop-shadow(0.1em 0.25em 0.1em #140c1c);\n  width: 22px;\n  height: 22px;\n}\n\n.menu_active__10Me6 {\n  background-color: var(--menu-tags-active);\n}\n", ""]);
// Exports
exports.locals = {
	"menu": "menu_menu__iOrrw",
	"spriteEditorModes": "menu_spriteEditorModes__u40S_",
	"modeTag": "menu_modeTag__1PI7m",
	"toolbuttonImg": "menu_toolbuttonImg__1UdlC",
	"active": "menu_active__10Me6"
};
module.exports = exports;


/***/ }),

/***/ "../../../node_modules/css-loader/dist/cjs.js?!../../../node_modules/postcss-loader/dist/cjs.js?!./app/components/palette.module.css":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** /home/javier/workspace/nx/easytools/node_modules/css-loader/dist/cjs.js??ref--5-oneOf-0-1!/home/javier/workspace/nx/easytools/node_modules/postcss-loader/dist/cjs.js??ref--5-oneOf-0-2!./app/components/palette.module.css ***!
  \***********************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "../../../node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".palette_palette__vkntI {\n  display: flex;\n  flex-wrap: wrap;\n  box-shadow: var(--canvas-shadow);\n}\n\n.palette_paletteColor__OXMLg {\n  flex: 0 calc(100% / 8);\n  padding-bottom: calc(100% / 8);\n  box-sizing: border-box;\n  height: 0;\n  border: var(--palette-item-border);\n}\n\n.palette_active__2EAni {\n  box-shadow: 0px 0px 0px 0.3em white inset;\n}\n", ""]);
// Exports
exports.locals = {
	"palette": "palette_palette__vkntI",
	"paletteColor": "palette_paletteColor__OXMLg",
	"active": "palette_active__2EAni"
};
module.exports = exports;


/***/ }),

/***/ "../../../node_modules/css-loader/dist/cjs.js?!../../../node_modules/postcss-loader/dist/cjs.js?!./app/components/sprite-editor-tools.module.css":
/*!***********************************************************************************************************************************************************************************************************************************************!*\
  !*** /home/javier/workspace/nx/easytools/node_modules/css-loader/dist/cjs.js??ref--5-oneOf-0-1!/home/javier/workspace/nx/easytools/node_modules/postcss-loader/dist/cjs.js??ref--5-oneOf-0-2!./app/components/sprite-editor-tools.module.css ***!
  \***********************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "../../../node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".sprite-editor-tools_spriteEditorTools__1B-SY {\n  display: flex;\n  justify-content: space-around;\n}\n\n.sprite-editor-tools_toolButton__3TUcY {\n  background-color: transparent;\n  border: none;\n}\n\n.sprite-editor-tools_toolButtonImg__3C4GH {\n  filter: drop-shadow(0.1em 0.25em 0.1em #140c1c);\n  width: 22px;\n  height: 22px;\n}\n", ""]);
// Exports
exports.locals = {
	"spriteEditorTools": "sprite-editor-tools_spriteEditorTools__1B-SY",
	"toolButton": "sprite-editor-tools_toolButton__3TUcY",
	"toolButtonImg": "sprite-editor-tools_toolButtonImg__3C4GH"
};
module.exports = exports;


/***/ }),

/***/ "../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!**************************************************************************************************************!*\
  !*** /home/javier/workspace/nx/easytools/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stylesInDom = {};

var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

function listToStyles(list, options) {
  var styles = [];
  var newStyles = {};

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var css = item[1];
    var media = item[2];
    var sourceMap = item[3];
    var part = {
      css: css,
      media: media,
      sourceMap: sourceMap
    };

    if (!newStyles[id]) {
      styles.push(newStyles[id] = {
        id: id,
        parts: [part]
      });
    } else {
      newStyles[id].parts.push(part);
    }
  }

  return styles;
}

function addStylesToDom(styles, options) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i];
    var domStyle = stylesInDom[item.id];
    var j = 0;

    if (domStyle) {
      domStyle.refs++;

      for (; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j]);
      }

      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j], options));
      }
    } else {
      var parts = [];

      for (; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j], options));
      }

      stylesInDom[item.id] = {
        id: item.id,
        refs: 1,
        parts: parts
      };
    }
  }
}

function insertStyleElement(options) {
  var style = document.createElement('style');

  if (typeof options.attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      options.attributes.nonce = nonce;
    }
  }

  Object.keys(options.attributes).forEach(function (key) {
    style.setAttribute(key, options.attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  var styles = listToStyles(list, options);
  addStylesToDom(styles, options);
  return function update(newList) {
    var mayRemove = [];

    for (var i = 0; i < styles.length; i++) {
      var item = styles[i];
      var domStyle = stylesInDom[item.id];

      if (domStyle) {
        domStyle.refs--;
        mayRemove.push(domStyle);
      }
    }

    if (newList) {
      var newStyles = listToStyles(newList, options);
      addStylesToDom(newStyles, options);
    }

    for (var _i = 0; _i < mayRemove.length; _i++) {
      var _domStyle = mayRemove[_i];

      if (_domStyle.refs === 0) {
        for (var j = 0; j < _domStyle.parts.length; j++) {
          _domStyle.parts[j]();
        }

        delete stylesInDom[_domStyle.id];
      }
    }
  };
};

/***/ }),

/***/ "./app/app.module.css":
/*!****************************!*\
  !*** ./app/app.module.css ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-0-1!../../../../node_modules/postcss-loader/dist/cjs.js??ref--5-oneOf-0-2!./app.module.css */ "../../../node_modules/css-loader/dist/cjs.js?!../../../node_modules/postcss-loader/dist/cjs.js?!./app/app.module.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ "./app/app.tsx":
/*!*********************!*\
  !*** ./app/app.tsx ***!
  \*********************/
/*! exports provided: App, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "App", function() { return App; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.module.css */ "./app/app.module.css");
/* harmony import */ var _app_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_app_module_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config */ "./app/config.ts");
/* harmony import */ var _components_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/menu */ "./app/components/menu.tsx");
/* harmony import */ var _components_canvas__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/canvas */ "./app/components/canvas.tsx");
/* harmony import */ var _components_sprite_editor_tools__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/sprite-editor-tools */ "./app/components/sprite-editor-tools.tsx");
/* harmony import */ var _components_palette__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/palette */ "./app/components/palette.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ "../../../node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "/home/javier/workspace/nx/easytools/apps/sprite-editor/src/app/app.tsx";






 // TODO
// EditorTools -> SpriteEditorTools
// Numero del bloque visible
// Herramientas de sheet
// Ver rendimiento de sheet (cargar pngs en lugar de pixels?)
// Separar comps (lo mas eficaz posible)
// Spritesheet solo debe ser un canvas, que se pinta de otra manera
// Cambiar gestion de Palette en Editor
// Edicion de Colores (PaletteEditor???) (interconectados??)
// Cursores en general pixelados + pointer + colorpicker en palette?
// paletas, herramientas y comportamientos  (https://apps.lospec.com/pixel-editor)


const paletteList = [{
  name: 'Sweetie',
  colors: [[26, 28, 44, 1], [93, 39, 93, 1], [177, 62, 83, 1], [239, 125, 87, 1], [255, 205, 117, 1], [167, 240, 112, 1], [56, 183, 100, 1], [37, 113, 121, 1], [41, 54, 111, 1], [59, 93, 201, 1], [65, 166, 246, 1], [115, 239, 247, 1], [244, 244, 244, 1], [148, 176, 194, 1], [86, 108, 134, 1], [51, 60, 87, 1]]
}, {
  name: 'Island Joy',
  colors: [[255, 255, 255, 1], [109, 247, 193, 1], [17, 173, 193, 1], [96, 108, 129, 1], [57, 52, 87, 1], [30, 136, 117, 1], [91, 179, 97, 1], [161, 229, 90, 1], [247, 228, 118, 1], [249, 146, 82, 1], [203, 77, 104, 1], [106, 55, 113, 1], [201, 36, 100, 1], [244, 140, 182, 1], [247, 182, 158, 1], [155, 156, 130, 1]]
}, {
  name: 'Endesga',
  colors: [[228, 165, 114, 1], [184, 111, 80, 1], [116, 63, 57, 1], [63, 40, 50, 1], [158, 40, 53, 1], [229, 59, 68, 1], [251, 146, 43, 1], [255, 231, 98, 1], [99, 198, 77, 1], [50, 115, 69, 1], [25, 61, 63, 1], [79, 103, 129, 1], [175, 191, 210, 1], [255, 255, 255, 1], [44, 232, 244, 1], [4, 132, 209, 1]]
}, {
  name: 'Bubblegum',
  colors: [[22, 23, 26, 1], [127, 6, 34, 1], [214, 36, 17, 1], [255, 132, 38, 1], [255, 209, 0, 1], [250, 253, 255, 1], [255, 128, 164, 1], [255, 38, 116, 1], [148, 33, 106, 1], [67, 0, 103, 1], [35, 73, 117, 1], [104, 174, 212, 1], [191, 255, 60, 1], [16, 210, 117, 1], [0, 120, 153, 1], [0, 40, 89, 1]]
}, {
  name: 'Pico-8',
  colors: [[0, 0, 0, 1], [29, 43, 83, 1], [126, 37, 83, 1], [0, 135, 81, 1], [171, 82, 54, 1], [95, 87, 79, 1], [194, 195, 199, 1], [255, 241, 232, 1], [255, 0, 77, 1], [255, 163, 0, 1], [255, 236, 39, 1], [0, 228, 54, 1], [41, 173, 255, 1], [131, 118, 156, 1], [255, 119, 168, 1], [255, 204, 170, 1]]
}];

const PaletteEditor = ({}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
    className: _app_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.paletteEditor,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("ul", {
      className: _app_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.paletteList,
      children: paletteList.map((palette, idx) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("li", {
        className: _app_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.paletteListItem,
        children: [palette.name, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_components_palette__WEBPACK_IMPORTED_MODULE_6__["default"], {
          palette: palette.colors
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 147,
          columnNumber: 17
        }, undefined)]
      }, idx, true, {
        fileName: _jsxFileName,
        lineNumber: 143,
        columnNumber: 13
      }, undefined))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 139,
    columnNumber: 5
  }, undefined);
};

const SpriteEditor = ({
  sheet,
  setSheet,
  selectedBlock
}) => {
  const [selectedColor, setSelectedColor] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(_config__WEBPACK_IMPORTED_MODULE_2__["INITIAL_COLOR"]);

  const setBlock = block => {
    setSheet([...sheet.slice(0, selectedBlock), block, ...sheet.slice(selectedBlock + 1)]);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
    className: _app_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.spriteEditor,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("span", {
      className: _app_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.blockTitle,
      children: `#${selectedBlock.toString().padStart(3, '0')}`
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_components_canvas__WEBPACK_IMPORTED_MODULE_4__["default"], {
      block: sheet[selectedBlock],
      setBlock: setBlock,
      selectedColor: selectedColor
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 181,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_components_sprite_editor_tools__WEBPACK_IMPORTED_MODULE_5__["default"], {
      block: sheet[selectedBlock]
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 186,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_components_palette__WEBPACK_IMPORTED_MODULE_6__["default"], {
      palette: [[26, 28, 44, 1], [93, 39, 93, 1], [177, 62, 83, 1], [239, 125, 87, 1], [255, 205, 117, 1], [167, 240, 112, 1], [56, 183, 100, 1], [37, 113, 121, 1], [41, 54, 111, 1], [59, 93, 201, 1], [65, 166, 246, 1], [115, 239, 247, 1], [244, 244, 244, 1], [148, 176, 194, 1], [86, 108, 134, 1], [51, 60, 87, 1]],
      isColorActive: color => color.toString() === selectedColor.toString(),
      onColorClicked: color => setSelectedColor(color)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 177,
    columnNumber: 5
  }, undefined);
};

const SpriteSheet = ({
  sheet,
  selectedBlock,
  setSelectedBlock
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("ul", {
    className: _app_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.spritesheet,
    children: sheet.map((block, idx) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("ul", {
      className: `${_app_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.block} ${selectedBlock === idx ? _app_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.selected : ''}`,
      onClick: () => setSelectedBlock(idx),
      style: {
        width: `calc(100% / ${_config__WEBPACK_IMPORTED_MODULE_2__["SHEET_WIDTH"]})`,
        paddingBottom: `calc(100% / ${_config__WEBPACK_IMPORTED_MODULE_2__["SHEET_WIDTH"]})`
      },
      children: block.map((pixel, pixelIdx) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("li", {
        className: _app_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.pixel,
        style: {
          width: `calc(100% / ${_config__WEBPACK_IMPORTED_MODULE_2__["BLOCK_SIZE"]})`,
          paddingBottom: `calc(100% / ${_config__WEBPACK_IMPORTED_MODULE_2__["BLOCK_SIZE"]})`,
          backgroundColor: pixel ? `rgba(${pixel[0]}, ${pixel[1]}, ${pixel[2]}, ${pixel[3]})` : 'transparent'
        }
      }, pixelIdx, false, {
        fileName: _jsxFileName,
        lineNumber: 237,
        columnNumber: 17
      }, undefined))
    }, idx, false, {
      fileName: _jsxFileName,
      lineNumber: 226,
      columnNumber: 11
    }, undefined))
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 223,
    columnNumber: 5
  }, undefined);
};

const SpriteSheetEditor = ({
  sheet,
  selectedBlock,
  setSelectedBlock
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
    className: _app_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.spriteSheetEditor,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(SpriteSheet, {
      sheet: sheet,
      selectedBlock: selectedBlock,
      setSelectedBlock: setSelectedBlock
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 264,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 263,
    columnNumber: 5
  }, undefined);
};

const Container = ({
  children
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
    className: _app_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.container,
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 279,
    columnNumber: 5
  }, undefined);
};

const createSheet = () => {
  return new Array(_config__WEBPACK_IMPORTED_MODULE_2__["SHEET_WIDTH"] * _config__WEBPACK_IMPORTED_MODULE_2__["SHEET_HEIGHT"]).fill(null).map(() => new Array(_config__WEBPACK_IMPORTED_MODULE_2__["BLOCK_SIZE"] * _config__WEBPACK_IMPORTED_MODULE_2__["BLOCK_SIZE"]).fill(null));
};

function App() {
  const [sheet, setSheet] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(createSheet);
  const [selectedBlock, setSelectedBlock] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const [mode, setMode] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('sprite');
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(Container, {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
      className: _app_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.wrapper,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_components_menu__WEBPACK_IMPORTED_MODULE_3__["default"], {
        isModeActive: menuMode => menuMode === mode,
        onModeClicked: menuMode => setMode(menuMode)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 302,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
        className: _app_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.app,
        children: [mode === 'palette' && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(PaletteEditor, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 309,
          columnNumber: 13
        }, this), mode === 'sprite' && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(SpriteEditor, {
          sheet: sheet,
          setSheet: setSheet,
          selectedBlock: selectedBlock
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 313,
          columnNumber: 13
        }, this), mode === 'spritesheet' && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(SpriteSheetEditor, {
          sheet: sheet,
          selectedBlock: selectedBlock,
          setSelectedBlock: setSelectedBlock
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 321,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 306,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 301,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 300,
    columnNumber: 5
  }, this);
}
/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./app/components/canvas.module.css":
/*!******************************************!*\
  !*** ./app/components/canvas.module.css ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-0-1!../../../../../node_modules/postcss-loader/dist/cjs.js??ref--5-oneOf-0-2!./canvas.module.css */ "../../../node_modules/css-loader/dist/cjs.js?!../../../node_modules/postcss-loader/dist/cjs.js?!./app/components/canvas.module.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ "./app/components/canvas.tsx":
/*!***********************************!*\
  !*** ./app/components/canvas.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _canvas_module_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./canvas.module.css */ "./app/components/canvas.module.css");
/* harmony import */ var _canvas_module_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_canvas_module_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config */ "./app/config.ts");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "../../../node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/home/javier/workspace/nx/easytools/apps/sprite-editor/src/app/components/canvas.tsx";

 // TODO
// Canvas debe ser mucho mas generico
// Le dices el width/height
// Le dices si el tamaño debe calcularse en funcion del total
//  o de una manera fija
// Le dices que hacer cuando se haga click
// Le dices como pintarse



const Canvas = ({
  block,
  setBlock,
  selectedColor
}) => {
  const setPixel = (event, pixel, color) => {
    event.preventDefault();
    setBlock([...block.slice(0, pixel), color, ...block.slice(pixel + 1)]);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("ul", {
    className: _canvas_module_css__WEBPACK_IMPORTED_MODULE_0___default.a.canvas,
    children: block.map((pixel, idx) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("li", {
      className: _canvas_module_css__WEBPACK_IMPORTED_MODULE_0___default.a.pixel,
      onClick: event => setPixel(event, idx, selectedColor),
      style: {
        width: `calc(100% / ${_config__WEBPACK_IMPORTED_MODULE_1__["BLOCK_SIZE"]})`,
        paddingBottom: `calc(100% / ${_config__WEBPACK_IMPORTED_MODULE_1__["BLOCK_SIZE"]})`,
        backgroundColor: pixel && !!pixel.length ? `rgba(${pixel[0]}, ${pixel[1]}, ${pixel[2]}, ${pixel[3]})` : 'transparent'
      }
    }, idx, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 11
    }, undefined))
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 31,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Canvas);

/***/ }),

/***/ "./app/components/menu.module.css":
/*!****************************************!*\
  !*** ./app/components/menu.module.css ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-0-1!../../../../../node_modules/postcss-loader/dist/cjs.js??ref--5-oneOf-0-2!./menu.module.css */ "../../../node_modules/css-loader/dist/cjs.js?!../../../node_modules/postcss-loader/dist/cjs.js?!./app/components/menu.module.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ "./app/components/menu.tsx":
/*!*********************************!*\
  !*** ./app/components/menu.tsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _menu_module_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu.module.css */ "./app/components/menu.module.css");
/* harmony import */ var _menu_module_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_menu_module_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "../../../node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/home/javier/workspace/nx/easytools/apps/sprite-editor/src/app/components/menu.tsx";



const Menu = ({
  isModeActive,
  onModeClicked
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
    className: _menu_module_css__WEBPACK_IMPORTED_MODULE_0___default.a.menu,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
      children: "SPRITE EDITOR"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: _menu_module_css__WEBPACK_IMPORTED_MODULE_0___default.a.spriteEditorModes,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("button", {
        className: `${_menu_module_css__WEBPACK_IMPORTED_MODULE_0___default.a.modeTag} \
              ${isModeActive('palette') ? _menu_module_css__WEBPACK_IMPORTED_MODULE_0___default.a.active : ''}
            `,
        onClick: () => onModeClicked('palette'),
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
          children: "\xA0"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("img", {
          src: "https://xavikortes.github.io/easytools/assets/palette.png",
          className: _menu_module_css__WEBPACK_IMPORTED_MODULE_0___default.a.toolbuttonImg
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("button", {
        className: `${_menu_module_css__WEBPACK_IMPORTED_MODULE_0___default.a.modeTag} \
              ${isModeActive('sprite') ? _menu_module_css__WEBPACK_IMPORTED_MODULE_0___default.a.active : ''}
            `,
        onClick: () => onModeClicked('sprite'),
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
          children: "\xA0"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("img", {
          src: "https://xavikortes.github.io/easytools/assets/pikachu.png",
          className: _menu_module_css__WEBPACK_IMPORTED_MODULE_0___default.a.toolbuttonImg
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("button", {
        className: `${_menu_module_css__WEBPACK_IMPORTED_MODULE_0___default.a.modeTag} \
              ${isModeActive('spritesheet') ? _menu_module_css__WEBPACK_IMPORTED_MODULE_0___default.a.active : ''}
            ` // onClick={ () => onModeClicked('spritesheet') }
        ,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
          children: "\xA0"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("img", {
          src: "https://xavikortes.github.io/easytools/assets/caterpie.png",
          className: _menu_module_css__WEBPACK_IMPORTED_MODULE_0___default.a.toolbuttonImg
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Menu);

/***/ }),

/***/ "./app/components/palette.module.css":
/*!*******************************************!*\
  !*** ./app/components/palette.module.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-0-1!../../../../../node_modules/postcss-loader/dist/cjs.js??ref--5-oneOf-0-2!./palette.module.css */ "../../../node_modules/css-loader/dist/cjs.js?!../../../node_modules/postcss-loader/dist/cjs.js?!./app/components/palette.module.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ "./app/components/palette.tsx":
/*!************************************!*\
  !*** ./app/components/palette.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _palette_module_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./palette.module.css */ "./app/components/palette.module.css");
/* harmony import */ var _palette_module_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_palette_module_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "../../../node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/home/javier/workspace/nx/easytools/apps/sprite-editor/src/app/components/palette.tsx";



const Palette = ({
  palette,
  isColorActive,
  onColorClicked
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("ul", {
    className: _palette_module_css__WEBPACK_IMPORTED_MODULE_0___default.a.palette,
    children: palette.map((color, idx) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("li", {
      className: `${_palette_module_css__WEBPACK_IMPORTED_MODULE_0___default.a.paletteColor} \
              ${isColorActive && isColorActive(color) ? _palette_module_css__WEBPACK_IMPORTED_MODULE_0___default.a.active : ''}
            `,
      onClick: () => onColorClicked && onColorClicked(color),
      style: {
        backgroundColor: color ? `rgba(${color[0]}, ${color[1]}, ${color[2]}, ${color[3]})` : 'transparent'
      }
    }, idx, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }, undefined))
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Palette);

/***/ }),

/***/ "./app/components/sprite-editor-tools.module.css":
/*!*******************************************************!*\
  !*** ./app/components/sprite-editor-tools.module.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-0-1!../../../../../node_modules/postcss-loader/dist/cjs.js??ref--5-oneOf-0-2!./sprite-editor-tools.module.css */ "../../../node_modules/css-loader/dist/cjs.js?!../../../node_modules/postcss-loader/dist/cjs.js?!./app/components/sprite-editor-tools.module.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ "./app/components/sprite-editor-tools.tsx":
/*!************************************************!*\
  !*** ./app/components/sprite-editor-tools.tsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sprite_editor_tools_module_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sprite-editor-tools.module.css */ "./app/components/sprite-editor-tools.module.css");
/* harmony import */ var _sprite_editor_tools_module_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sprite_editor_tools_module_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config */ "./app/config.ts");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "../../../node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/home/javier/workspace/nx/easytools/apps/sprite-editor/src/app/components/sprite-editor-tools.tsx";

 // TODO
// Quitar pokemones chulos
// downloadPNG a una libreria de imagenes BlockToPng/PngToBlock
// Mejorar iconos?
// Herramienta seleccionada
// Herramienta lapiz / borrador
// Herramienta color picker
// Alguna herramienta mas (eliminar all, rellenar, espejar v/h)
// Subir png
// Mas iconos



const downloadPNG = block => {
  const canvas = document.createElement("canvas");
  canvas.width = _config__WEBPACK_IMPORTED_MODULE_1__["BLOCK_SIZE"];
  canvas.height = _config__WEBPACK_IMPORTED_MODULE_1__["BLOCK_SIZE"];
  const context = canvas.getContext("2d");
  const imageData = context.createImageData(_config__WEBPACK_IMPORTED_MODULE_1__["BLOCK_SIZE"], _config__WEBPACK_IMPORTED_MODULE_1__["BLOCK_SIZE"]);
  const data = imageData.data;
  block.forEach((item, idx) => {
    data[idx * 4 + 0] = item === null || item === void 0 ? void 0 : item[0];
    data[idx * 4 + 1] = item === null || item === void 0 ? void 0 : item[1];
    data[idx * 4 + 2] = item === null || item === void 0 ? void 0 : item[2];
    data[idx * 4 + 3] = (item === null || item === void 0 ? void 0 : item[3]) * 255;
    data[idx * 4 + 4] = item === null || item === void 0 ? void 0 : item[0];
  });
  context.putImageData(imageData, 0, 0);
  canvas.toBlob(blob => {
    var url = (URL || webkitURL).createObjectURL(blob);
    const a = document.createElement('a');
    a.style.display = 'none';
    a.href = url;
    a.download = 'sprite.png';
    document.body.appendChild(a);
    a.click();
  });
  return true;
};

const SpriteEditorTools = ({
  block
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
    className: _sprite_editor_tools_module_css__WEBPACK_IMPORTED_MODULE_0___default.a.spriteEditorTools,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("button", {
      className: _sprite_editor_tools_module_css__WEBPACK_IMPORTED_MODULE_0___default.a.toolButton,
      onClick: () => console.log('pencil'),
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("img", {
        src: "https://xavikortes.github.io/easytools/assets/pencil.png",
        className: _sprite_editor_tools_module_css__WEBPACK_IMPORTED_MODULE_0___default.a.toolButtonImg
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("button", {
      className: _sprite_editor_tools_module_css__WEBPACK_IMPORTED_MODULE_0___default.a.toolButton,
      onClick: () => console.log('picker'),
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("img", {
        src: "https://xavikortes.github.io/easytools/assets/picker.png",
        className: _sprite_editor_tools_module_css__WEBPACK_IMPORTED_MODULE_0___default.a.toolButtonImg
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("button", {
      className: _sprite_editor_tools_module_css__WEBPACK_IMPORTED_MODULE_0___default.a.toolButton,
      onClick: () => console.log('trash'),
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("img", {
        src: "https://xavikortes.github.io/easytools/assets/trash.png",
        className: _sprite_editor_tools_module_css__WEBPACK_IMPORTED_MODULE_0___default.a.toolButtonImg
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("button", {
      className: _sprite_editor_tools_module_css__WEBPACK_IMPORTED_MODULE_0___default.a.toolButton,
      onClick: () => console.log('pikachu'),
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("img", {
        src: "https://xavikortes.github.io/easytools/assets/pikachu.png",
        className: _sprite_editor_tools_module_css__WEBPACK_IMPORTED_MODULE_0___default.a.toolButtonImg
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("button", {
      className: _sprite_editor_tools_module_css__WEBPACK_IMPORTED_MODULE_0___default.a.toolButton,
      onClick: () => console.log('seta'),
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("img", {
        src: "https://xavikortes.github.io/easytools/assets/seta.png",
        className: _sprite_editor_tools_module_css__WEBPACK_IMPORTED_MODULE_0___default.a.toolButtonImg
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("button", {
      className: _sprite_editor_tools_module_css__WEBPACK_IMPORTED_MODULE_0___default.a.toolButton,
      onClick: () => console.log('caterpie'),
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("img", {
        src: "https://xavikortes.github.io/easytools/assets/caterpie.png",
        className: _sprite_editor_tools_module_css__WEBPACK_IMPORTED_MODULE_0___default.a.toolButtonImg
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("button", {
      className: _sprite_editor_tools_module_css__WEBPACK_IMPORTED_MODULE_0___default.a.toolButton,
      onClick: () => console.log('ash'),
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("img", {
        src: "https://xavikortes.github.io/easytools/assets/ash.png",
        className: _sprite_editor_tools_module_css__WEBPACK_IMPORTED_MODULE_0___default.a.toolButtonImg
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("button", {
      className: _sprite_editor_tools_module_css__WEBPACK_IMPORTED_MODULE_0___default.a.toolButton,
      onClick: () => downloadPNG(block),
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("img", {
        src: "https://xavikortes.github.io/easytools/assets/download.png",
        className: _sprite_editor_tools_module_css__WEBPACK_IMPORTED_MODULE_0___default.a.toolButtonImg
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 55,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (SpriteEditorTools);

/***/ }),

/***/ "./app/config.ts":
/*!***********************!*\
  !*** ./app/config.ts ***!
  \***********************/
/*! exports provided: SHEET_WIDTH, SHEET_HEIGHT, BLOCK_SIZE, INITIAL_COLOR */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SHEET_WIDTH", function() { return SHEET_WIDTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SHEET_HEIGHT", function() { return SHEET_HEIGHT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BLOCK_SIZE", function() { return BLOCK_SIZE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INITIAL_COLOR", function() { return INITIAL_COLOR; });
const SHEET_WIDTH = 8;
const SHEET_HEIGHT = 11;
const BLOCK_SIZE = 16;
const INITIAL_COLOR = [26, 28, 44, 1];

/***/ }),

/***/ "./main.tsx":
/*!******************!*\
  !*** ./main.tsx ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "../../../node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app */ "./app/app.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "../../../node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/home/javier/workspace/nx/easytools/apps/sprite-editor/src/main.tsx";




react_dom__WEBPACK_IMPORTED_MODULE_1__["render"]( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_0__["StrictMode"], {
  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_app_app__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 5
  }, undefined)
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 7,
  columnNumber: 3
}, undefined), document.getElementById('root'));

/***/ }),

/***/ 0:
/*!************************!*\
  !*** multi ./main.tsx ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/javier/workspace/nx/easytools/apps/sprite-editor/src/main.tsx */"./main.tsx");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map