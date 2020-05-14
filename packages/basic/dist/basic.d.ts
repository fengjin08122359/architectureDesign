
export declare class Auth {
    judgeList: Judge[];
    constructor();
    /**
     *add
     *
     * @param {Judge} judge
     * @memberof Auth
     */
    add(judge: Judge): void;
    /**
     *add
     *
     * @param {string} name
     * @memberof Auth
     */
    remove(name: string): void;
    /**
     *match
     *
     * @param {any[]} res[]
     * @returns {Promise}
     * @memberof Auth
     */
    match(...res: any[]): Promise<unknown>;
}

/**
 *Data
 * @param {name} string
 * @param {data} any
 * @interface Data
 */
declare interface Data {
    name: string;
    data: any;
}

export declare class DataList {
    private datas;
    constructor();
    /**
     *add
     *
     * @param {Data} data
     * @memberof DataList
     */
    add(data: Data): void;
    /**
     *remove
     *
     * @param {string} name
     * @memberof DataList
     */
    remove(name: string): void;
    /**
     *get
     *
     * @param {string} name
     * @memberof DataList
     */
    get(name?: string): Data[];
}

export declare class ErrorCode {
    private dataList;
    constructor();
    /**
     *collect
     *
     * @param {any} data
     * @memberof ErrorCode
     */
    collect(data: any): void;
    /**
     *get
     *
     * @memberof ErrorCode
     */
    get(): any[];
}

export declare class EventDispatcher {
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
    addEventListener(name: string, listener: Listener_2): void;
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

export declare class HanderList {
    protected handlers: Array<Handler>;
    constructor();
    /**
     *add
     *
     * @param {Handler} handler
     * @memberof HanderList
     */
    add(handler: Handler): void;
    /**
     *remove
     *
     * @param {string} name
     * @memberof HanderList
     */
    remove(name: string): void;
    /**
     *get
     *
     * @param {any} input
     * @returns {HandlerRes[]}
     * @memberof HanderList
     */
    get(input?: any, name?: string): {
        name: string;
        res: any;
    }[];
}

/**
 *Handler
 * @param {string} name
 * @param {Listener} fun
 * @interface Handler
 */
declare interface Handler {
    name: string;
    fun: Listener;
}

export declare class Intercept extends HanderList {
    protected handlers: Array<InterceptHandler>;
    constructor();
    /**
     *addIntercept
     *
     * @param {InterceptHandler} handler
     * @memberof Intercept
     */
    addIntercept(handler: InterceptHandler): void;
    /**
     *removeIntercept
     *
     * @param {string} name
     * @memberof Intercept
     */
    removeIntercept(name: string): void;
    /**
     *getIntercept
     *
     * @param {any} input
     * @memberof Intercept
     */
    getIntercept(input: any, name?: string): string[];
}

/**
 *InterceptHandler
 * @param {string} name
 * @param {(message: any) => boolean;} fun
 * @interface InterceptHandler
 */
declare interface InterceptHandler {
    name: string;
    fun: (message: any) => boolean;
}

/**
 *Judge
 * @param {name} string
 * @param {(res: any[]) => Promise<boolean> | boolean;} fun
 * @interface Judge
 */
declare interface Judge {
    name: string;
    fun: (res: any[]) => Promise<boolean> | boolean;
}

/**
 *Listener
 * @param {any} message
 * @interface Listener
 */
declare interface Listener {
    (message?: any): any;
}

/**
 *Listener
 *
 * @interface Listener
 */
declare interface Listener_2 {
    (message?: any): void;
}

export declare class Log {
    private dataList;
    constructor();
    /**
     *log
     *
     * @param {any[]} rest[]
     * @memberof Log
     */
    log(...rest: any[]): void;
    /**
     *error
     *
     * @param {any[]} rest[]
     * @memberof Log
     */
    error(...rest: any[]): void;
    /**
     *debug
     *
     * @param {any[]} rest[]
     * @memberof Log
     */
    debug(...rest: any[]): void;
    /**
     *info
     *
     * @param {any[]} rest[]
     * @memberof Log
     */
    info(...rest: any[]): void;
    /**
     *warn
     *
     * @param {any[]} rest[]
     * @memberof Log
     */
    warn(...rest: any[]): void;
    /**
     *error
     *
     * @param {string} name
     * @memberof Log
     */
    get(name?: string): any[];
}

/**
 *Observer
 *
 * @interface Observer
 */
declare interface Observer {
    update(params?: any): void;
}

export declare class ObserverSubject implements Subject {
    private observers;
    constructor();
    /**
     *registerObserver
     *
     * @param {Observer} observer
     * @memberof ObserverSubject
     */
    registerObserver(observer: Observer): void;
    /**
     *removeObserver
     *
     * @param {Observer} observer
     * @memberof ObserverSubject
     */
    removeObserver(observer: Observer): void;
    /**
     *notifyObservers
     *
     * @param {any} target
     * @param {Array<Observer>} observers
     * @memberof ObserverSubject
     */
    notifyObservers(target: any, observers?: Observer[]): void;
}

declare class Storage_2 {
    storage: any;
    constructor();
    /**
     *get
     *
     * @param {string} key
     * @memberof Storage
     */
    get(key: string | number): any;
    /**
     *set
     *
     * @param {string} key
     * @param {any} value
     * @memberof Storage
     */
    set(key: string | number, value: any): void;
    /**
     *remove
     *
     * @param {string} key
     * @memberof Storage
     */
    remove(key: string | number): void;
    /**
     *clear
     *
     * @memberof Storage
     */
    clear(): void;
}
export { Storage_2 as Storage }

/**
 *Subject
 *
 * @interface Subject
 */
declare interface Subject {
    registerObserver(observer: Observer): void;
    removeObserver(observer: Observer): void;
    notifyObservers(observers?: Array<Observer>): void;
}

export { }
