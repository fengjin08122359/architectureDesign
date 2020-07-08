/**
 * Returns an array of HTML elements located under the point specified by x, y.
 * If the native elementsFromPoint function does not exist, a polyfill will be used.
 *
 * @param  {number} x : X position
 * @param  {number} y : Y position
 * @return {array} : Array of the elements under the point (x, y)
 */
export function elementsFromPoint (x: number, y: number) {
  return (document.elementsFromPoint) ? document.elementsFromPoint(x, y) : elementsFromPointPolyfill(x, y)
}

/**
 * Polyfill that covers the functionality of the native document.elementsFromPoint
 * function, in case that the browser does not support it.
 *
 * @param  {number} x : X position
 * @param  {number} y : Y position
 * @return {array} : Array of the elements under the point (x, y)
 */
function elementsFromPointPolyfill (x: number, y: number) {
  var parents = []
  var parent:any = null
  do {
    if (parent !== document.elementFromPoint(x, y)) {
      parent = document.elementFromPoint(x, y)
      parents.push(parent)
      parent.style.pointerEvents = 'none'
    } else {
      parent = false
    }
  } while (parent)
  parents.forEach(function (parent) {
    return (parent.style.pointerEvents = 'all')
  })
  return parents
}



export let setPx = (num:number | string, pre = "px") => {
  if (typeof num == "number") {
    return  num + pre
  } else {
    return num
  }
}


export let convertPx = (str:string):any => {
  if (typeof str == "number") {
    return  str 
  } else if (typeof str == "undefined") {
    return 0
  } else if (str.indexOf('px') > -1) {
    return parseFloat(str); 
  } else {
    return str
  }
}

export let gennerateUUID = () => {
  return new Date().getTime().toString()
}
