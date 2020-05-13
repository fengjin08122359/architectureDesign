interface Observer {
  update(params?: any): void;
}

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
  public registerObserver(observer: Observer) {
    //注册观察者
    this.observers.push(observer);
  }
  public removeObserver(observer: Observer) {
    //注销观察者
    let index = this.observers.indexOf(observer);
    if (index !== -1) {
      this.observers.splice(index, 1);
    }
  }
  public notifyObservers(target: any, observers = this.observers) {
    // 通知观察者
    for (let observer of observers) {
      observer.update(target); // 更新
    }
  }
}

export { ObserverSubject, Observer };
