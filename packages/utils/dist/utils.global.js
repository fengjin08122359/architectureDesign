var utilsApi = (function (exports, axios) {
  'use strict';

  axios = axios && Object.prototype.hasOwnProperty.call(axios, 'default') ? axios['default'] : axios;

  class HttpInstance {
      constructor(param) {
          this.baseURL = param.baseURL || "";
          this.init();
      }
      init() {
          axios.interceptors.request.use((config) => {
              return this.convertRequest(config);
          }, (error) => {
              return Promise.reject(error);
          });
          axios.interceptors.response.use((response) => {
              return this.convertResponse(response);
          }, (error) => {
              return Promise.reject(error);
          });
      }
      convertRequest(config) {
          return config;
      }
      convertResponse(config) {
          return config;
      }
      create(opts) {
          const publicParams = {
              ts: Date.now(),
          };
          const method = (opts.method || "get").toUpperCase();
          const httpDefaultOpts = {
              method,
              baseURL: this.baseURL,
              url: opts.url,
              responseType: opts.responseType || "",
              timeout: 20000,
          };
          if (opts["meta"]) {
              httpDefaultOpts.headers = opts["meta"];
          }
          const dataRequest = ["PUT", "POST", "PATCH"];
          if (dataRequest.includes(method)) {
              httpDefaultOpts.data = opts.data || {};
          }
          else {
              httpDefaultOpts.params = {
                  ...publicParams,
                  ...(opts.data || {}),
              };
          }
          // formData转换
          if (opts.formData) {
              httpDefaultOpts.transformRequest = [
                  (data) => {
                      const formData = new FormData();
                      if (data) {
                          Object.entries(data).forEach((item) => {
                              formData.append(item[0], item[1]);
                          });
                      }
                      return formData;
                  },
              ];
          }
          const promise = new Promise((resolve, reject) => {
              axios(httpDefaultOpts)
                  .then((response) => {
                  this.handleSuccess(response, resolve, opts);
              })
                  .catch((error) => {
                  this.handleError(error, reject, opts);
              });
          });
          return promise;
      }
      handleSuccess(response, resolve, opts) {
          resolve(response);
      }
      handleError(error, reject, opts) {
          reject(error);
      }
  }
  // example
  // {
  //   // `url` 是用于请求的服务器 URL
  //   url: '/user',
  //   // `method` 是创建请求时使用的方法
  //   method: 'get', // 默认是 get
  //   // `baseURL` 将自动加在 `url` 前面，除非 `url` 是一个绝对 URL。
  //   // 它可以通过设置一个 `baseURL` 便于为 axios 实例的方法传递相对 URL
  //   baseURL: 'https://some-domain.com/api/',
  //   // `transformRequest` 允许在向服务器发送前，修改请求数据
  //   // 只能用在 'PUT', 'POST' 和 'PATCH' 这几个请求方法
  //   // 后面数组中的函数必须返回一个字符串，或 ArrayBuffer，或 Stream
  //   transformRequest: [function (data) {
  //     // 对 data 进行任意转换处理
  //     return data;
  //   }],
  //   // `transformResponse` 在传递给 then/catch 前，允许修改响应数据
  //   transformResponse: [function (data) {
  //     // 对 data 进行任意转换处理
  //     return data;
  //   }],
  //   // `headers` 是即将被发送的自定义请求头
  //   headers: {'X-Requested-With': 'XMLHttpRequest'},
  //   // `params` 是即将与请求一起发送的 URL 参数
  //   // 必须是一个无格式对象(plain object)或 URLSearchParams 对象
  //   params: {
  //     ID: 12345
  //   },
  //   // `paramsSerializer` 是一个负责 `params` 序列化的函数
  //   // (e.g. https://www.npmjs.com/package/qs, http://api.jquery.com/jquery.param/)
  //   paramsSerializer: function(params) {
  //     return Qs.stringify(params, {arrayFormat: 'brackets'})
  //   },
  //   // `data` 是作为请求主体被发送的数据
  //   // 只适用于这些请求方法 'PUT', 'POST', 和 'PATCH'
  //   // 在没有设置 `transformRequest` 时，必须是以下类型之一：
  //   // - string, plain object, ArrayBuffer, ArrayBufferView, URLSearchParams
  //   // - 浏览器专属：FormData, File, Blob
  //   // - Node 专属： Stream
  //   data: {
  //     firstName: 'Fred'
  //   },
  //   // `timeout` 指定请求超时的毫秒数(0 表示无超时时间)
  //   // 如果请求话费了超过 `timeout` 的时间，请求将被中断
  //   timeout: 1000,
  //   // `withCredentials` 表示跨域请求时是否需要使用凭证
  //   withCredentials: false, // 默认的
  //   // `adapter` 允许自定义处理请求，以使测试更轻松
  //   // 返回一个 promise 并应用一个有效的响应 (查阅 [response docs](#response-api)).
  //   adapter: function (config) {
  //     /* ... */
  //   },
  //   // `auth` 表示应该使用 HTTP 基础验证，并提供凭据
  //   // 这将设置一个 `Authorization` 头，覆写掉现有的任意使用 `headers` 设置的自定义 `Authorization`头
  //   auth: {
  //     username: 'janedoe',
  //     password: 's00pers3cret'
  //   },
  //   // `responseType` 表示服务器响应的数据类型，可以是 'arraybuffer', 'blob', 'document', 'json', 'text', 'stream'
  //   responseType: 'json', // 默认的
  //   // `xsrfCookieName` 是用作 xsrf token 的值的cookie的名称
  //   xsrfCookieName: 'XSRF-TOKEN', // default
  //   // `xsrfHeaderName` 是承载 xsrf token 的值的 HTTP 头的名称
  //   xsrfHeaderName: 'X-XSRF-TOKEN', // 默认的
  //   // `onUploadProgress` 允许为上传处理进度事件
  //   onUploadProgress: function (progressEvent) {
  //     // 对原生进度事件的处理
  //   },
  //   // `onDownloadProgress` 允许为下载处理进度事件
  //   onDownloadProgress: function (progressEvent) {
  //     // 对原生进度事件的处理
  //   },
  //   // `maxContentLength` 定义允许的响应内容的最大尺寸
  //   maxContentLength: 2000,
  //   // `validateStatus` 定义对于给定的HTTP 响应状态码是 resolve 或 reject  promise 。如果 `validateStatus` 返回 `true` (或者设置为 `null` 或 `undefined`)，promise 将被 resolve; 否则，promise 将被 rejecte
  //   validateStatus: function (status) {
  //     return status >= 200 && status < 300; // 默认的
  //   },
  //   // `maxRedirects` 定义在 node.js 中 follow 的最大重定向数目
  //   // 如果设置为0，将不会 follow 任何重定向
  //   maxRedirects: 5, // 默认的
  //   // `httpAgent` 和 `httpsAgent` 分别在 node.js 中用于定义在执行 http 和 https 时使用的自定义代理。允许像这样配置选项：
  //   // `keepAlive` 默认没有启用
  //   httpAgent: new http.Agent({ keepAlive: true }),
  //   httpsAgent: new https.Agent({ keepAlive: true }),
  //   // 'proxy' 定义代理服务器的主机名称和端口
  //   // `auth` 表示 HTTP 基础验证应当用于连接代理，并提供凭据
  //   // 这将会设置一个 `Proxy-Authorization` 头，覆写掉已有的通过使用 `header` 设置的自定义 `Proxy-Authorization` 头。
  //   proxy: {
  //     host: '127.0.0.1',
  //     port: 9000,
  //     auth: : {
  //       username: 'mikeymike',
  //       password: 'rapunz3l'
  //     }
  //   },
  //   // `cancelToken` 指定用于取消请求的 cancel token
  //   // （查看后面的 Cancellation 这节了解更多）
  //   cancelToken: new CancelToken(function (cancel) {
  //   })
  // }

  /**
   * Returns an array of HTML elements located under the point specified by x, y.
   * If the native elementsFromPoint function does not exist, a polyfill will be used.
   *
   * @param  {number} x : X position
   * @param  {number} y : Y position
   * @return {array} : Array of the elements under the point (x, y)
   */
  function elementsFromPoint(x, y) {
      return (document.elementsFromPoint) ? document.elementsFromPoint(x, y) : elementsFromPointPolyfill(x, y);
  }
  /**
   * Polyfill that covers the functionality of the native document.elementsFromPoint
   * function, in case that the browser does not support it.
   *
   * @param  {number} x : X position
   * @param  {number} y : Y position
   * @return {array} : Array of the elements under the point (x, y)
   */
  function elementsFromPointPolyfill(x, y) {
      var parents = [];
      var parent = null;
      do {
          if (parent !== document.elementFromPoint(x, y)) {
              parent = document.elementFromPoint(x, y);
              parents.push(parent);
              parent.style.pointerEvents = 'none';
          }
          else {
              parent = false;
          }
      } while (parent);
      parents.forEach(function (parent) {
          return (parent.style.pointerEvents = 'all');
      });
      return parents;
  }
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
  let eventOptionsStr = "abort,animationcancel,animationend,animationiteration,animationstart,auxclick,blur,cancel,canplay,canplaythrough,change,click,close,contextmenu,cuechange,dblclick,drag,dragend,dragenter,dragexit,dragleave,dragover,dragstart,drop,durationchange,emptied,ended,error,focus,focusin,focusout,gotpointercapture,input,invalid,keydown,keypress,keyup,load,loadeddata,loadedmetadata,loadstart,lostpointercapture,mousedown,mouseenter,mouseleave,mousemove,mouseout,mouseover,mouseup,pause,play,playing,pointercancel,pointerdown,pointerenter,pointerleave,pointermove,pointerout,pointerover,pointerup,progress,ratechange,reset,resize,scroll,securitypolicyviolation,seeked,seeking,select,selectionchange,selectstart,stalled,submit,suspend,timeupdate,toggle,touchcancel,touchend,touchmove,touchstart,transitioncancel,transitionend,transitionrun,transitionstart,volumechange,waiting,wheel,fullscreenchange,fullscreenerror,copy,cut,paste";
  let eventOptions = eventOptionsStr.split(',');

  exports.HttpInstance = HttpInstance;
  exports.convertPx = convertPx;
  exports.elementsFromPoint = elementsFromPoint;
  exports.eventOptions = eventOptions;
  exports.gennerateUUID = gennerateUUID;
  exports.setPx = setPx;
  exports.styleOptions = styleOptions;

  return exports;

}({}, axios));
