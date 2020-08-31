import 'axios';

class DataList {
    constructor() {
        this.datas = [];
    }
    /**
     *add
     *
     * @param {Data} data
     * @memberof DataList
     */
    add(data) {
        this.datas.push(data);
    }
    /**
     *remove
     *
     * @param {string} name
     * @memberof DataList
     */
    remove(name) {
        this.datas = this.datas.filter((data) => data.name !== name);
    }
    /**
     *clear
     *
     * @memberof DataList
     */
    clear() {
        this.datas = [];
    }
    /**
     *get
     *
     * @param {string} name
     * @memberof DataList
     */
    get(name = "") {
        return this.datas.filter((data) => name === "" || data.name === name);
    }
    /**
     *get
     *
     * @param {string} name
     * @return {any} any
     * @memberof DataList
     */
    find(name = "") {
        var target = this.datas.find((data) => data.name === name);
        var empty = this.datas.find((data) => data.name === '');
        return target ? target.data : empty ? empty.data : null;
    }
}

/**
 * Returns an array of HTML elements located under the point specified by x, y.
 * If the native elementsFromPoint function does not exist, a polyfill will be used.
 *
 * @param  {number} x : X position
 * @param  {number} y : Y position
 * @return {array} : Array of the elements under the point (x, y)
 */
let setPx = (num, pre = "px") => {
    if (typeof num == "number") {
        return num + pre;
    }
    else {
        return num;
    }
};
let convertPx = (str) => {
    if (typeof str == "number") {
        return str;
    }
    else if (typeof str == "undefined") {
        return 0;
    }
    else if (str == 'auto') {
        return 0;
    }
    else if (str.indexOf('px') > -1) {
        return parseFloat(str);
    }
    else if (str.indexOf('%') > -1) {
        return str;
    }
    else if (!isNaN(parseFloat(str))) {
        return parseFloat(str);
    }
    else {
        return str;
    }
};
let gennerateUUID = () => {
    var d = new Date().getTime();
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = (d + Math.random() * 16) % 16 | 0;
        d = Math.floor(d / 16);
        return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
    return uuid;
};
let styleOptionsStr = "alignContent,alignItems,alignSelf,alignmentBaseline,all,animation,animationDelay,animationDirection,animationDuration,animationFillMode,animationIterationCount,animationName,animationPlayState,animationTimingFunction,backdropFilter,backfaceVisibility,background,backgroundAttachment,backgroundBlendMode,backgroundClip,backgroundColor,backgroundImage,backgroundOrigin,backgroundPosition,backgroundPositionX,backgroundPositionY,backgroundRepeat,backgroundRepeatX,backgroundRepeatY,backgroundSize,baselineShift,blockSize,border,borderBlockEnd,borderBlockEndColor,borderBlockEndStyle,borderBlockEndWidth,borderBlockStart,borderBlockStartColor,borderBlockStartStyle,borderBlockStartWidth,borderBottom,borderBottomColor,borderBottomLeftRadius,borderBottomRightRadius,borderBottomStyle,borderBottomWidth,borderCollapse,borderColor,borderImage,borderImageOutset,borderImageRepeat,borderImageSlice,borderImageSource,borderImageWidth,borderInlineEnd,borderInlineEndColor,borderInlineEndStyle,borderInlineEndWidth,borderInlineStart,borderInlineStartColor,borderInlineStartStyle,borderInlineStartWidth,borderLeft,borderLeftColor,borderLeftStyle,borderLeftWidth,borderRadius,borderRight,borderRightColor,borderRightStyle,borderRightWidth,borderSpacing,borderStyle,borderTop,borderTopColor,borderTopLeftRadius,borderTopRightRadius,borderTopStyle,borderTopWidth,borderWidth,bottom,boxShadow,boxSizing,breakAfter,breakBefore,breakInside,bufferedRendering,captionSide,caretColor,clear,clip,clipPath,clipRule,color,colorInterpolation,colorInterpolationFilters,colorRendering,colorScheme,columnCount,columnFill,columnGap,columnRule,columnRuleColor,columnRuleStyle,columnRuleWidth,columnSpan,columnWidth,columns,contain,containIntrinsicSize,content,counterIncrement,counterReset,cursor,cx,cy,d,direction,display,dominantBaseline,emptyCells,fill,fillOpacity,fillRule,filter,flex,flexBasis,flexDirection,flexFlow,flexGrow,flexShrink,flexWrap,float,floodColor,floodOpacity,font,fontDisplay,fontFamily,fontFeatureSettings,fontKerning,fontOpticalSizing,fontSize,fontStretch,fontStyle,fontVariant,fontVariantCaps,fontVariantEastAsian,fontVariantLigatures,fontVariantNumeric,fontVariationSettings,fontWeight,gap,grid,gridArea,gridAutoColumns,gridAutoFlow,gridAutoRows,gridColumn,gridColumnEnd,gridColumnGap,gridColumnStart,gridGap,gridRow,gridRowEnd,gridRowGap,gridRowStart,gridTemplate,gridTemplateAreas,gridTemplateColumns,gridTemplateRows,height,hyphens,imageOrientation,imageRendering,inlineSize,isolation,justifyContent,justifyItems,justifySelf,left,letterSpacing,lightingColor,lineBreak,lineHeight,listStyle,listStyleImage,listStylePosition,listStyleType,margin,marginBlockEnd,marginBlockStart,marginBottom,marginInlineEnd,marginInlineStart,marginLeft,marginRight,marginTop,marker,markerEnd,markerMid,markerStart,mask,maskType,maxBlockSize,maxHeight,maxInlineSize,maxWidth,maxZoom,minBlockSize,minHeight,minInlineSize,minWidth,minZoom,mixBlendMode,objectFit,objectPosition,offset,offsetDistance,offsetPath,offsetRotate,opacity,order,orientation,orphans,outline,outlineColor,outlineOffset,outlineStyle,outlineWidth,overflow,overflowAnchor,overflowWrap,overflowX,overflowY,overscrollBehavior,overscrollBehaviorBlock,overscrollBehaviorInline,overscrollBehaviorX,overscrollBehaviorY,padding,paddingBlockEnd,paddingBlockStart,paddingBottom,paddingInlineEnd,paddingInlineStart,paddingLeft,paddingRight,paddingTop,pageBreakAfter,pageBreakBefore,pageBreakInside,paintOrder,perspective,perspectiveOrigin,placeContent,placeItems,placeSelf,pointerEvents,position,quotes,r,resize,right,rowGap,rx,ry,scrollBehavior,scrollMargin,scrollMarginBlock,scrollMarginBlockEnd,scrollMarginBlockStart,scrollMarginBottom,scrollMarginInline,scrollMarginInlineEnd,scrollMarginInlineStart,scrollMarginLeft,scrollMarginRight,scrollMarginTop,scrollPadding,scrollPaddingBlock,scrollPaddingBlockEnd,scrollPaddingBlockStart,scrollPaddingBottom,scrollPaddingInline,scrollPaddingInlineEnd,scrollPaddingInlineStart,scrollPaddingLeft,scrollPaddingRight,scrollPaddingTop,scrollSnapAlign,scrollSnapStop,scrollSnapType,shapeImageThreshold,shapeMargin,shapeOutside,shapeRendering,size,speak,src,stopColor,stopOpacity,stroke,strokeDasharray,strokeDashoffset,strokeLinecap,strokeLinejoin,strokeMiterlimit,strokeOpacity,strokeWidth,tabSize,tableLayout,textAlign,textAlignLast,textAnchor,textCombineUpright,textDecoration,textDecorationColor,textDecorationLine,textDecorationSkipInk,textDecorationStyle,textIndent,textOrientation,textOverflow,textRendering,textShadow,textSizeAdjust,textTransform,textUnderlinePosition,top,touchAction,transform,transformBox,transformOrigin,transformStyle,transition,transitionDelay,transitionDuration,transitionProperty,transitionTimingFunction,unicodeBidi,unicodeRange,userSelect,userZoom,vectorEffect,verticalAlign,visibility,webkitAlignContent,webkitAlignItems,webkitAlignSelf,webkitAnimation,webkitAnimationDelay,webkitAnimationDirection,webkitAnimationDuration,webkitAnimationFillMode,webkitAnimationIterationCount,webkitAnimationName,webkitAnimationPlayState,webkitAnimationTimingFunction,webkitAppRegion,webkitAppearance,webkitBackfaceVisibility,webkitBackgroundClip,webkitBackgroundOrigin,webkitBackgroundSize,webkitBorderAfter,webkitBorderAfterColor,webkitBorderAfterStyle,webkitBorderAfterWidth,webkitBorderBefore,webkitBorderBeforeColor,webkitBorderBeforeStyle,webkitBorderBeforeWidth,webkitBorderBottomLeftRadius,webkitBorderBottomRightRadius,webkitBorderEnd,webkitBorderEndColor,webkitBorderEndStyle,webkitBorderEndWidth,webkitBorderHorizontalSpacing,webkitBorderImage,webkitBorderRadius,webkitBorderStart,webkitBorderStartColor,webkitBorderStartStyle,webkitBorderStartWidth,webkitBorderTopLeftRadius,webkitBorderTopRightRadius,webkitBorderVerticalSpacing,webkitBoxAlign,webkitBoxDecorationBreak,webkitBoxDirection,webkitBoxFlex,webkitBoxOrdinalGroup,webkitBoxOrient,webkitBoxPack,webkitBoxReflect,webkitBoxShadow,webkitBoxSizing,webkitClipPath,webkitColumnBreakAfter,webkitColumnBreakBefore,webkitColumnBreakInside,webkitColumnCount,webkitColumnGap,webkitColumnRule,webkitColumnRuleColor,webkitColumnRuleStyle,webkitColumnRuleWidth,webkitColumnSpan,webkitColumnWidth,webkitColumns,webkitFilter,webkitFlex,webkitFlexBasis,webkitFlexDirection,webkitFlexFlow,webkitFlexGrow,webkitFlexShrink,webkitFlexWrap,webkitFontFeatureSettings,webkitFontSizeDelta,webkitFontSmoothing,webkitHighlight,webkitHyphenateCharacter,webkitJustifyContent,webkitLineBreak,webkitLineClamp,webkitLocale,webkitLogicalHeight,webkitLogicalWidth,webkitMarginAfter,webkitMarginBefore,webkitMarginEnd,webkitMarginStart,webkitMask,webkitMaskBoxImage,webkitMaskBoxImageOutset,webkitMaskBoxImageRepeat,webkitMaskBoxImageSlice,webkitMaskBoxImageSource,webkitMaskBoxImageWidth,webkitMaskClip,webkitMaskComposite,webkitMaskImage,webkitMaskOrigin,webkitMaskPosition,webkitMaskPositionX,webkitMaskPositionY,webkitMaskRepeat,webkitMaskRepeatX,webkitMaskRepeatY,webkitMaskSize,webkitMaxLogicalHeight,webkitMaxLogicalWidth,webkitMinLogicalHeight,webkitMinLogicalWidth,webkitOpacity,webkitOrder,webkitPaddingAfter,webkitPaddingBefore,webkitPaddingEnd,webkitPaddingStart,webkitPerspective,webkitPerspectiveOrigin,webkitPerspectiveOriginX,webkitPerspectiveOriginY,webkitPrintColorAdjust,webkitRtlOrdering,webkitRubyPosition,webkitShapeImageThreshold,webkitShapeMargin,webkitShapeOutside,webkitTapHighlightColor,webkitTextCombine,webkitTextDecorationsInEffect,webkitTextEmphasis,webkitTextEmphasisColor,webkitTextEmphasisPosition,webkitTextEmphasisStyle,webkitTextFillColor,webkitTextOrientation,webkitTextSecurity,webkitTextSizeAdjust,webkitTextStroke,webkitTextStrokeColor,webkitTextStrokeWidth,webkitTransform,webkitTransformOrigin,webkitTransformOriginX,webkitTransformOriginY,webkitTransformOriginZ,webkitTransformStyle,webkitTransition,webkitTransitionDelay,webkitTransitionDuration,webkitTransitionProperty,webkitTransitionTimingFunction,webkitUserDrag,webkitUserModify,webkitUserSelect,webkitWritingMode,whiteSpace,widows,width,willChange,wordBreak,wordSpacing,wordWrap,writingMode,x,y,zIndex,zoom";
let styleOptions = styleOptionsStr.split(',');

class InEventBind {
    constructor(opt) {
        this.opt = opt;
        this.id = gennerateUUID();
    }
    setValue(val) {
        this.opt.tid = val.tid || '';
    }
    getValue() {
        return this.opt;
    }
}
class OutEventBind {
    constructor(opt) {
        this.opt = opt;
        this.id = gennerateUUID();
    }
    setValue(val) {
        this.opt.tid = val.tid || '';
        this.opt.key = val.key || '';
    }
    getValue() {
        return this.opt;
    }
}
class EventBind {
    constructor() {
        this.inList = new DataList();
        this.outList = new DataList();
    }
    addIn(data) {
        var event = new InEventBind(data || {
            tid: ''
        });
        this.inList.add({
            name: event.id,
            data: event
        });
        return event;
    }
    addOut(data) {
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
    removeIn(id) {
        this.inList.remove(id);
    }
    removeOut(id) {
        this.outList.remove(id);
    }
    getInList() {
        return this.inList.get('').map(item => item.data);
    }
    getOutList() {
        return this.outList.get('').map(item => item.data);
    }
    clearIn() {
        this.inList.clear();
    }
    clearOut() {
        this.outList.clear();
    }
    save() {
    }
    getValue() {
        return {
            inValue: this.getInList().map(item => item.getValue()),
            outValue: this.getOutList().map(item => item.getValue())
        };
    }
}

class Style {
    constructor() {
        this.changed = 0;
    }
    setKeyValue(key, value) {
        this[key] = value;
        this.changed++;
    }
    getValue() {
        return Object.assign({}, this);
    }
    setValue(val) {
        for (let [key, value] of Object.entries(val)) {
            try {
                this.setKeyValue(key, value);
            }
            catch (error) { }
        }
    }
    clear() {
        for (let key of Object.keys(this)) {
            if (styleOptions.find((item) => item == key)) {
                delete this[key];
            }
        }
    }
    move(x, y) {
        var left = convertPx(this.target.style.left) + x;
        var top = convertPx(this.target.style.top) + y;
        this.target.style.setKeyValue('left', setPx(left));
        this.target.style.setKeyValue('top', setPx(top));
    }
}

class UI {
    constructor() {
        this.eventBind = new EventBind();
        this.style = new Style();
        this.selfProp = new SelfProp();
    }
    setSelfProp(selfProp) {
        this.selfProp = selfProp;
    }
    getValue() {
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
}
class SelfProp {
    constructor() {
        this.opt = {};
        this.params = [];
    }
    setParam(data = []) {
        this.params = data;
    }
    getValue() {
        return this.opt;
    }
    setValue(value) {
        this.opt = value || {};
    }
}

class Position {
    constructor() {
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
    setKeyValue(key, value) {
        this[key] = value;
    }
}

class UIInstance {
    constructor() {
        this.moduleId = gennerateUUID();
        this.children = [];
        this.target = new UI();
        this.canDrag = true;
    }
    canDragFilter() {
        return this.canDrag && (this.target.style.position && (this.target.style.position == 'absolute' || this.target.style.position == 'fixed'));
    }
    setTarget(target) {
        this.target = target;
    }
    combi(target) {
        var module = new UIInstance();
        module.setTarget(target);
        this.children.push(module);
        return module;
    }
    unCombi(moduleId) {
        var module = this.findContainUI(this, moduleId);
        console.log(module);
        if (module) {
            module.children = module.children.filter(t => t.moduleId != moduleId);
        }
    }
    findContainUI(tree, moduleId) {
        if (tree.children.find(item => item.moduleId == moduleId)) {
            return tree;
        }
        else if (tree.children.length > 0) {
            var target = null;
            tree.children.forEach(item => {
                target = this.findContainUI(item, moduleId) || target;
            });
            return target;
        }
        else {
            return null;
        }
    }
    move(x, y) {
        this.target.style.move(x, y);
    }
    getValue() {
        return {
            moduleId: this.moduleId,
            canDrag: this.canDrag,
            target: this.target.getValue(),
            children: this.children.map(item => item.getValue())
        };
    }
    getChildren() {
        return this.children;
    }
}

export { EventBind, Position, SelfProp, Style, UI, UIInstance };
