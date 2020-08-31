'use strict';

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, '__esModule', {
  value: true
});

var basic = require('@mikefeng110808/basic');

require('axios');
/**
 * Returns an array of HTML elements located under the point specified by x, y.
 * If the native elementsFromPoint function does not exist, a polyfill will be used.
 *
 * @param  {number} x : X position
 * @param  {number} y : Y position
 * @return {array} : Array of the elements under the point (x, y)
 */


var setPx = function setPx(num) {
  var pre = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "px";

  if (typeof num == "number") {
    return num + pre;
  } else {
    return num;
  }
};

var convertPx = function convertPx(str) {
  if (typeof str == "number") {
    return str;
  } else if (typeof str == "undefined") {
    return 0;
  } else if (str == 'auto') {
    return 0;
  } else if (str.indexOf('px') > -1) {
    return parseFloat(str);
  } else if (str.indexOf('%') > -1) {
    return str;
  } else if (!isNaN(parseFloat(str))) {
    return parseFloat(str);
  } else {
    return str;
  }
};

var gennerateUUID = function gennerateUUID() {
  var d = new Date().getTime();
  var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = (d + Math.random() * 16) % 16 | 0;
    d = Math.floor(d / 16);
    return (c == 'x' ? r : r & 0x3 | 0x8).toString(16);
  });
  return uuid;
};

var styleOptionsStr = "alignContent,alignItems,alignSelf,alignmentBaseline,all,animation,animationDelay,animationDirection,animationDuration,animationFillMode,animationIterationCount,animationName,animationPlayState,animationTimingFunction,backdropFilter,backfaceVisibility,background,backgroundAttachment,backgroundBlendMode,backgroundClip,backgroundColor,backgroundImage,backgroundOrigin,backgroundPosition,backgroundPositionX,backgroundPositionY,backgroundRepeat,backgroundRepeatX,backgroundRepeatY,backgroundSize,baselineShift,blockSize,border,borderBlockEnd,borderBlockEndColor,borderBlockEndStyle,borderBlockEndWidth,borderBlockStart,borderBlockStartColor,borderBlockStartStyle,borderBlockStartWidth,borderBottom,borderBottomColor,borderBottomLeftRadius,borderBottomRightRadius,borderBottomStyle,borderBottomWidth,borderCollapse,borderColor,borderImage,borderImageOutset,borderImageRepeat,borderImageSlice,borderImageSource,borderImageWidth,borderInlineEnd,borderInlineEndColor,borderInlineEndStyle,borderInlineEndWidth,borderInlineStart,borderInlineStartColor,borderInlineStartStyle,borderInlineStartWidth,borderLeft,borderLeftColor,borderLeftStyle,borderLeftWidth,borderRadius,borderRight,borderRightColor,borderRightStyle,borderRightWidth,borderSpacing,borderStyle,borderTop,borderTopColor,borderTopLeftRadius,borderTopRightRadius,borderTopStyle,borderTopWidth,borderWidth,bottom,boxShadow,boxSizing,breakAfter,breakBefore,breakInside,bufferedRendering,captionSide,caretColor,clear,clip,clipPath,clipRule,color,colorInterpolation,colorInterpolationFilters,colorRendering,colorScheme,columnCount,columnFill,columnGap,columnRule,columnRuleColor,columnRuleStyle,columnRuleWidth,columnSpan,columnWidth,columns,contain,containIntrinsicSize,content,counterIncrement,counterReset,cursor,cx,cy,d,direction,display,dominantBaseline,emptyCells,fill,fillOpacity,fillRule,filter,flex,flexBasis,flexDirection,flexFlow,flexGrow,flexShrink,flexWrap,float,floodColor,floodOpacity,font,fontDisplay,fontFamily,fontFeatureSettings,fontKerning,fontOpticalSizing,fontSize,fontStretch,fontStyle,fontVariant,fontVariantCaps,fontVariantEastAsian,fontVariantLigatures,fontVariantNumeric,fontVariationSettings,fontWeight,gap,grid,gridArea,gridAutoColumns,gridAutoFlow,gridAutoRows,gridColumn,gridColumnEnd,gridColumnGap,gridColumnStart,gridGap,gridRow,gridRowEnd,gridRowGap,gridRowStart,gridTemplate,gridTemplateAreas,gridTemplateColumns,gridTemplateRows,height,hyphens,imageOrientation,imageRendering,inlineSize,isolation,justifyContent,justifyItems,justifySelf,left,letterSpacing,lightingColor,lineBreak,lineHeight,listStyle,listStyleImage,listStylePosition,listStyleType,margin,marginBlockEnd,marginBlockStart,marginBottom,marginInlineEnd,marginInlineStart,marginLeft,marginRight,marginTop,marker,markerEnd,markerMid,markerStart,mask,maskType,maxBlockSize,maxHeight,maxInlineSize,maxWidth,maxZoom,minBlockSize,minHeight,minInlineSize,minWidth,minZoom,mixBlendMode,objectFit,objectPosition,offset,offsetDistance,offsetPath,offsetRotate,opacity,order,orientation,orphans,outline,outlineColor,outlineOffset,outlineStyle,outlineWidth,overflow,overflowAnchor,overflowWrap,overflowX,overflowY,overscrollBehavior,overscrollBehaviorBlock,overscrollBehaviorInline,overscrollBehaviorX,overscrollBehaviorY,padding,paddingBlockEnd,paddingBlockStart,paddingBottom,paddingInlineEnd,paddingInlineStart,paddingLeft,paddingRight,paddingTop,pageBreakAfter,pageBreakBefore,pageBreakInside,paintOrder,perspective,perspectiveOrigin,placeContent,placeItems,placeSelf,pointerEvents,position,quotes,r,resize,right,rowGap,rx,ry,scrollBehavior,scrollMargin,scrollMarginBlock,scrollMarginBlockEnd,scrollMarginBlockStart,scrollMarginBottom,scrollMarginInline,scrollMarginInlineEnd,scrollMarginInlineStart,scrollMarginLeft,scrollMarginRight,scrollMarginTop,scrollPadding,scrollPaddingBlock,scrollPaddingBlockEnd,scrollPaddingBlockStart,scrollPaddingBottom,scrollPaddingInline,scrollPaddingInlineEnd,scrollPaddingInlineStart,scrollPaddingLeft,scrollPaddingRight,scrollPaddingTop,scrollSnapAlign,scrollSnapStop,scrollSnapType,shapeImageThreshold,shapeMargin,shapeOutside,shapeRendering,size,speak,src,stopColor,stopOpacity,stroke,strokeDasharray,strokeDashoffset,strokeLinecap,strokeLinejoin,strokeMiterlimit,strokeOpacity,strokeWidth,tabSize,tableLayout,textAlign,textAlignLast,textAnchor,textCombineUpright,textDecoration,textDecorationColor,textDecorationLine,textDecorationSkipInk,textDecorationStyle,textIndent,textOrientation,textOverflow,textRendering,textShadow,textSizeAdjust,textTransform,textUnderlinePosition,top,touchAction,transform,transformBox,transformOrigin,transformStyle,transition,transitionDelay,transitionDuration,transitionProperty,transitionTimingFunction,unicodeBidi,unicodeRange,userSelect,userZoom,vectorEffect,verticalAlign,visibility,webkitAlignContent,webkitAlignItems,webkitAlignSelf,webkitAnimation,webkitAnimationDelay,webkitAnimationDirection,webkitAnimationDuration,webkitAnimationFillMode,webkitAnimationIterationCount,webkitAnimationName,webkitAnimationPlayState,webkitAnimationTimingFunction,webkitAppRegion,webkitAppearance,webkitBackfaceVisibility,webkitBackgroundClip,webkitBackgroundOrigin,webkitBackgroundSize,webkitBorderAfter,webkitBorderAfterColor,webkitBorderAfterStyle,webkitBorderAfterWidth,webkitBorderBefore,webkitBorderBeforeColor,webkitBorderBeforeStyle,webkitBorderBeforeWidth,webkitBorderBottomLeftRadius,webkitBorderBottomRightRadius,webkitBorderEnd,webkitBorderEndColor,webkitBorderEndStyle,webkitBorderEndWidth,webkitBorderHorizontalSpacing,webkitBorderImage,webkitBorderRadius,webkitBorderStart,webkitBorderStartColor,webkitBorderStartStyle,webkitBorderStartWidth,webkitBorderTopLeftRadius,webkitBorderTopRightRadius,webkitBorderVerticalSpacing,webkitBoxAlign,webkitBoxDecorationBreak,webkitBoxDirection,webkitBoxFlex,webkitBoxOrdinalGroup,webkitBoxOrient,webkitBoxPack,webkitBoxReflect,webkitBoxShadow,webkitBoxSizing,webkitClipPath,webkitColumnBreakAfter,webkitColumnBreakBefore,webkitColumnBreakInside,webkitColumnCount,webkitColumnGap,webkitColumnRule,webkitColumnRuleColor,webkitColumnRuleStyle,webkitColumnRuleWidth,webkitColumnSpan,webkitColumnWidth,webkitColumns,webkitFilter,webkitFlex,webkitFlexBasis,webkitFlexDirection,webkitFlexFlow,webkitFlexGrow,webkitFlexShrink,webkitFlexWrap,webkitFontFeatureSettings,webkitFontSizeDelta,webkitFontSmoothing,webkitHighlight,webkitHyphenateCharacter,webkitJustifyContent,webkitLineBreak,webkitLineClamp,webkitLocale,webkitLogicalHeight,webkitLogicalWidth,webkitMarginAfter,webkitMarginBefore,webkitMarginEnd,webkitMarginStart,webkitMask,webkitMaskBoxImage,webkitMaskBoxImageOutset,webkitMaskBoxImageRepeat,webkitMaskBoxImageSlice,webkitMaskBoxImageSource,webkitMaskBoxImageWidth,webkitMaskClip,webkitMaskComposite,webkitMaskImage,webkitMaskOrigin,webkitMaskPosition,webkitMaskPositionX,webkitMaskPositionY,webkitMaskRepeat,webkitMaskRepeatX,webkitMaskRepeatY,webkitMaskSize,webkitMaxLogicalHeight,webkitMaxLogicalWidth,webkitMinLogicalHeight,webkitMinLogicalWidth,webkitOpacity,webkitOrder,webkitPaddingAfter,webkitPaddingBefore,webkitPaddingEnd,webkitPaddingStart,webkitPerspective,webkitPerspectiveOrigin,webkitPerspectiveOriginX,webkitPerspectiveOriginY,webkitPrintColorAdjust,webkitRtlOrdering,webkitRubyPosition,webkitShapeImageThreshold,webkitShapeMargin,webkitShapeOutside,webkitTapHighlightColor,webkitTextCombine,webkitTextDecorationsInEffect,webkitTextEmphasis,webkitTextEmphasisColor,webkitTextEmphasisPosition,webkitTextEmphasisStyle,webkitTextFillColor,webkitTextOrientation,webkitTextSecurity,webkitTextSizeAdjust,webkitTextStroke,webkitTextStrokeColor,webkitTextStrokeWidth,webkitTransform,webkitTransformOrigin,webkitTransformOriginX,webkitTransformOriginY,webkitTransformOriginZ,webkitTransformStyle,webkitTransition,webkitTransitionDelay,webkitTransitionDuration,webkitTransitionProperty,webkitTransitionTimingFunction,webkitUserDrag,webkitUserModify,webkitUserSelect,webkitWritingMode,whiteSpace,widows,width,willChange,wordBreak,wordSpacing,wordWrap,writingMode,x,y,zIndex,zoom";
var styleOptions = styleOptionsStr.split(',');

var InEventBind = /*#__PURE__*/function () {
  function InEventBind(opt) {
    _classCallCheck(this, InEventBind);

    this.opt = opt;
    this.id = gennerateUUID();
  }

  _createClass(InEventBind, [{
    key: "setValue",
    value: function setValue(val) {
      this.opt.tid = val.tid || '';
    }
  }, {
    key: "getValue",
    value: function getValue() {
      return this.opt;
    }
  }]);

  return InEventBind;
}();

var OutEventBind = /*#__PURE__*/function () {
  function OutEventBind(opt) {
    _classCallCheck(this, OutEventBind);

    this.opt = opt;
    this.id = gennerateUUID();
  }

  _createClass(OutEventBind, [{
    key: "setValue",
    value: function setValue(val) {
      this.opt.tid = val.tid || '';
      this.opt.key = val.key || '';
    }
  }, {
    key: "getValue",
    value: function getValue() {
      return this.opt;
    }
  }]);

  return OutEventBind;
}();

var EventBind = /*#__PURE__*/function () {
  function EventBind() {
    _classCallCheck(this, EventBind);

    this.inList = new basic.DataList();
    this.outList = new basic.DataList();
  }

  _createClass(EventBind, [{
    key: "addIn",
    value: function addIn(data) {
      var event = new InEventBind(data || {
        tid: ''
      });
      this.inList.add({
        name: event.id,
        data: event
      });
      return event;
    }
  }, {
    key: "addOut",
    value: function addOut(data) {
      var event = new OutEventBind(data || {
        tid: '',
        key: 'click'
      });
      this.outList.add({
        name: event.id,
        data: event
      });
      return event;
    }
  }, {
    key: "removeIn",
    value: function removeIn(id) {
      this.inList.remove(id);
    }
  }, {
    key: "removeOut",
    value: function removeOut(id) {
      this.outList.remove(id);
    }
  }, {
    key: "getInList",
    value: function getInList() {
      return this.inList.get('').map(function (item) {
        return item.data;
      });
    }
  }, {
    key: "getOutList",
    value: function getOutList() {
      return this.outList.get('').map(function (item) {
        return item.data;
      });
    }
  }, {
    key: "clearIn",
    value: function clearIn() {
      this.inList.clear();
    }
  }, {
    key: "clearOut",
    value: function clearOut() {
      this.outList.clear();
    }
  }, {
    key: "save",
    value: function save() {}
  }, {
    key: "getValue",
    value: function getValue() {
      return {
        inValue: this.getInList().map(function (item) {
          return item.getValue();
        }),
        outValue: this.getOutList().map(function (item) {
          return item.getValue();
        })
      };
    }
  }]);

  return EventBind;
}();

var Style = /*#__PURE__*/function () {
  function Style() {
    _classCallCheck(this, Style);

    this.changed = 0;
  }

  _createClass(Style, [{
    key: "setKeyValue",
    value: function setKeyValue(key, value) {
      this[key] = value;
      this.changed++;
    }
  }, {
    key: "getValue",
    value: function getValue() {
      return Object.assign({}, this);
    }
  }, {
    key: "setValue",
    value: function setValue(val) {
      for (var _i = 0, _Object$entries = Object.entries(val); _i < _Object$entries.length; _i++) {
        var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
            key = _Object$entries$_i[0],
            value = _Object$entries$_i[1];

        try {
          this.setKeyValue(key, value);
        } catch (error) {}
      }
    }
  }, {
    key: "clear",
    value: function clear() {
      var _this = this;

      var _loop = function _loop() {
        var key = _Object$keys[_i2];

        if (styleOptions.find(function (item) {
          return item == key;
        })) {
          delete _this[key];
        }
      };

      for (var _i2 = 0, _Object$keys = Object.keys(this); _i2 < _Object$keys.length; _i2++) {
        _loop();
      }
    }
  }, {
    key: "move",
    value: function move(x, y) {
      var left = convertPx(this.target.style.left) + x;
      var top = convertPx(this.target.style.top) + y;
      this.target.style.setKeyValue('left', setPx(left));
      this.target.style.setKeyValue('top', setPx(top));
    }
  }]);

  return Style;
}();

var UI = /*#__PURE__*/function () {
  function UI() {
    _classCallCheck(this, UI);

    this.eventBind = new EventBind();
    this.style = new Style();
    this.selfProp = new SelfProp();
  }

  _createClass(UI, [{
    key: "setSelfProp",
    value: function setSelfProp(selfProp) {
      this.selfProp = selfProp;
    }
  }, {
    key: "getValue",
    value: function getValue() {
      return {
        eventBind: {
          value: this.eventBind.getValue()
        },
        selfProp: {
          value: this.selfProp.getValue()
        },
        style: {
          value: this.style.getValue()
        }
      };
    }
  }]);

  return UI;
}();

var SelfProp = /*#__PURE__*/function () {
  function SelfProp() {
    _classCallCheck(this, SelfProp);

    this.opt = {};
    this.params = [];
  }

  _createClass(SelfProp, [{
    key: "setParam",
    value: function setParam() {
      var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      this.params = data;
    }
  }, {
    key: "getValue",
    value: function getValue() {
      return this.opt;
    }
  }, {
    key: "setValue",
    value: function setValue(value) {
      this.opt = value || {};
    }
  }]);

  return SelfProp;
}();

var Position = /*#__PURE__*/function () {
  function Position() {
    _classCallCheck(this, Position);

    this.left = '';
    this.right = '';
    this.top = '';
    this.bottom = '';
    this.position = 'static';
    this.display = 'block';
    this.zIndex = '0';
    this.width = '';
    this.height = '';
    this.overflow = 'auto';
  }

  _createClass(Position, [{
    key: "setKeyValue",
    value: function setKeyValue(key, value) {
      this[key] = value;
    }
  }]);

  return Position;
}();

var UIInstance = /*#__PURE__*/function () {
  function UIInstance() {
    _classCallCheck(this, UIInstance);

    this.moduleId = gennerateUUID();
    this.children = [];
    this.target = new UI();
    this.canDrag = true;
  }

  _createClass(UIInstance, [{
    key: "canDragFilter",
    value: function canDragFilter() {
      return this.canDrag && this.target.style.position && (this.target.style.position == 'absolute' || this.target.style.position == 'fixed');
    }
  }, {
    key: "setTarget",
    value: function setTarget(target) {
      this.target = target;
    }
  }, {
    key: "combi",
    value: function combi(target) {
      var module = new UIInstance();
      module.setTarget(target);
      this.children.push(module);
      return module;
    }
  }, {
    key: "unCombi",
    value: function unCombi(moduleId) {
      var module = this.findContainUI(this, moduleId);
      console.log(module);

      if (module) {
        module.children = module.children.filter(function (t) {
          return t.moduleId != moduleId;
        });
      }
    }
  }, {
    key: "findContainUI",
    value: function findContainUI(tree, moduleId) {
      var _this2 = this;

      if (tree.children.find(function (item) {
        return item.moduleId == moduleId;
      })) {
        return tree;
      } else if (tree.children.length > 0) {
        var target = null;
        tree.children.forEach(function (item) {
          target = _this2.findContainUI(item, moduleId) || target;
        });
        return target;
      } else {
        return null;
      }
    }
  }, {
    key: "move",
    value: function move(x, y) {
      this.target.style.move(x, y);
    }
  }, {
    key: "getValue",
    value: function getValue() {
      return {
        moduleId: this.moduleId,
        canDrag: this.canDrag,
        target: this.target.getValue(),
        children: this.children.map(function (item) {
          return item.getValue();
        })
      };
    }
  }, {
    key: "getChildren",
    value: function getChildren() {
      return this.children;
    }
  }]);

  return UIInstance;
}();

exports.EventBind = EventBind;
exports.Position = Position;
exports.SelfProp = SelfProp;
exports.Style = Style;
exports.UI = UI;
exports.UIInstance = UIInstance;
