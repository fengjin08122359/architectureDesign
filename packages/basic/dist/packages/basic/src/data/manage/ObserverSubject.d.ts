/**
 *Observer
 *
 * @interface Observer
 */
interface Observer {
    update(params?: any): void;
}
/**
 *Subject
 *
 * @interface Subject
 */
interface Subject {
    registerObserver(observer: Observer): void;
    removeObserver(observer: Observer): void;
    notifyObservers(observers?: Array<Observer>): void;
}
declare class ObserverSubject implements Subject {
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
export { ObserverSubject, Observer };
//# sourceMappingURL=ObserverSubject.d.ts.map