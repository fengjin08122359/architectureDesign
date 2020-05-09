import {
  EventDispatcher,
} from '../src/basic/data/manage/EventDispatcher'
import {
  ObserverSubject, Observer,
} from '../src/basic/data/manage/ObserverSubject'



describe('basic: data manage EventDispatcher', () => {  
  test('basic data manage EventDispatcher test add one', () => {
    var eventDispatcher = new EventDispatcher()
    var res = 1;
    eventDispatcher.addEventListener('test1', (data:number) => {
      res = res + 1 + data
    })
    eventDispatcher.addEventListener('test2', (data:number) => {
      res = res + 2 + data
    })
    eventDispatcher.dispatchEvent('test1', 0)
    expect(res).toStrictEqual(2)
    eventDispatcher.dispatchEvent('test1', 1)
    expect(res).toStrictEqual(4)
    eventDispatcher.dispatchEvent('test2', 0)
    expect(res).toStrictEqual(6)
    eventDispatcher.dispatchEvent('test2', 1)
    expect(res).toStrictEqual(9)
  })
  test('basic data manage EventDispatcher test remove', () => {
    var eventDispatcher = new EventDispatcher()
    var res = 1;
    eventDispatcher.addEventListener('test1', (data:number) => {
      res = res + 1 + data
    })
    eventDispatcher.addEventListener('test2', (data:number) => {
      res = res + 2 + data
    })
    eventDispatcher.dispatchEvent('test1', 0)
    expect(res).toStrictEqual(2)
    eventDispatcher.removeEventListener('test1')
    eventDispatcher.dispatchEvent('test1', 0)
    expect(res).toStrictEqual(2)

  })
})

describe('basic: data manage ObserverSubject', () => {  
  test('basic data manage ObserverSubject Observer add one ', () => {
    var result = 'noData'
    var observerSubject = new ObserverSubject()
    var observer1: Observer = {
      update (time:number = 0) {
        result = 'first observer' + time
      }
    }
    observerSubject.registerObserver(observer1)
    observerSubject.notifyObservers(1)
    expect(result).toStrictEqual('first observer1')
  })
  test('basic data manage ObserverSubject Observer add two ', () => {
    var obTime = 0
    var observerSubject = new ObserverSubject()
    var observer1: Observer = {
      update (time:number = 0) {
        obTime += time
      }
    }
    var observer2: Observer = {
      update (time:number = 0) {
        obTime += time
      }
    }
    observerSubject.registerObserver(observer1)
    observerSubject.registerObserver(observer2)
    observerSubject.notifyObservers(1)
    expect(obTime).toStrictEqual(2)
  })
  test('basic data manage ObserverSubject Observer remove ', () => {var obTime = 0
    var observerSubject = new ObserverSubject()
    var observer1: Observer = {
      update (time:number = 0) {
        obTime += time
      }
    }
    var observer2: Observer = {
      update (time:number = 0) {
        obTime += time * 2
      }
    }
    observerSubject.registerObserver(observer1)
    observerSubject.registerObserver(observer2)
    observerSubject.notifyObservers(1)
    expect(obTime).toStrictEqual(3)
    observerSubject.removeObserver(observer1);
    observerSubject.notifyObservers(1)
    expect(obTime).toStrictEqual(5)
  })
})