/**
 *Listener
 *
 * @interface Listener
 */
interface Listener {
    (message?: any): void;
}
declare class EventDispatcher {
    constructor();
    private static instance;
    /**
     *EventDispatcher
     *
     * @static
     * @returns {EventDispatcher}
     * @memberof EventDispatcher
     */
    static getInstance(): EventDispatcher;
    /**
     *EventList
     *
     * @private
     * @type {Event[]}
     * @memberof EventDispatcher
     */
    private EventList;
    /**
     *addEventListener
     *
     * @param {string} name
     * @param {Listener} listener
     * @memberof EventDispatcher
     */
    addEventListener(name: string, listener: Listener): void;
    /**
     *removeEventListener
     *
     * @param {string} name
     * @memberof EventDispatcher
     */
    removeEventListener(name: string): void;
    /**
     *dispatchEvent
     *
     * @param {string} name
     * @param {*} [message]
     * @memberof EventDispatcher
     */
    dispatchEvent(name: string, message?: any): void;
}
export { EventDispatcher };
//# sourceMappingURL=EventDispatcher.d.ts.map