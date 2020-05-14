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

class ObserverSubject implements Subject {
  private observers: Array<Observer>;
  constructor() {
    this.observers = [];
  }
  /**
   *registerObserver
   *
   * @param {Observer} observer
   * @memberof ObserverSubject
   */
  public registerObserver(observer: Observer) {
    //注册观察者
    this.observers.push(observer);
  }
  /**
   *removeObserver
   *
   * @param {Observer} observer
   * @memberof ObserverSubject
   */
  public removeObserver(observer: Observer) {
    //注销观察者
    let index = this.observers.indexOf(observer);
    if (index !== -1) {
      this.observers.splice(index, 1);
    }
  }
  /**
   *notifyObservers
   *
   * @param {any} target
   * @param {Array<Observer>} observers
   * @memberof ObserverSubject
   */
  public notifyObservers(target: any, observers = this.observers) {
    // 通知观察者
    for (let observer of observers) {
      observer.update(target); // 更新
    }
  }
}

export { ObserverSubject, Observer };
