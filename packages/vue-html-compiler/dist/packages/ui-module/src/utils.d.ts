/**
 * Returns an array of HTML elements located under the point specified by x, y.
 * If the native elementsFromPoint function does not exist, a polyfill will be used.
 *
 * @param  {number} x : X position
 * @param  {number} y : Y position
 * @return {array} : Array of the elements under the point (x, y)
 */
export declare function elementsFromPoint(x: number, y: number): any[];
export declare let setPx: (num: string | number, pre?: string) => string;
export declare let convertPx: (str: string) => any;
export declare let gennerateUUID: () => string;
export declare let styleOptions: string[];
export declare let eventOptions: string[];
//# sourceMappingURL=utils.d.ts.map