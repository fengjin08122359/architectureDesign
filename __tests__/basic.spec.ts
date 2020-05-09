import {
  Auth,
} from '../src/basic/control/Auth'

describe('basic: control auth init', () => {  
  test('basic auth judgeList init', () => {
    var auth = new Auth()
    expect(auth.judgeList).toStrictEqual([])
  })
  test('basic auth addList then match', () => {
    var auth = new Auth()
    auth.add({
      name: 'test1',
      fun: (res:any[]) => {
        return new Promise(resolve => {
          if (res.length == 1) {
            resolve(true)
          } else {
            resolve(false)
          }
        })
      }
    })
    auth.match('1').then(data => {
      expect(data).toBe('test1')
    })
    auth.match('1', '2').then(data => {
      expect(data).toBe('')
    })
    auth.add({
      name: 'test2',
      fun: (res:any[]) => {
        return new Promise(resolve => {
          if (res.length == 2) {
            resolve(true)
          } else {
            resolve(false)
          }
        })
      }
    })
    auth.match('1').then(data => {
      expect(data).toBe('test1')
    })
    auth.match('1', '2').then(data => {
      expect(data).toBe('test2')
    })
    auth.match('1', '2', '3').then(data => {
      expect(data).toBe('')
    })
  })
  test('basic auth removeList then match', () => {
    var auth = new Auth()
    auth.add({
      name: 'test1',
      fun: (res:any[]) => {
        return new Promise(resolve => {
          if (res.length == 1) {
            resolve(true)
          } else {
            resolve(false)
          }
        })
      }
    })
    auth.add({
      name: 'test2',
      fun: (res:any[]) => {
        return new Promise(resolve => {
          if (res.length == 2) {
            resolve(true)
          } else {
            resolve(false)
          }
        })
      }
    })
    auth.match('1').then(data => {
      expect(data).toBe('test1')
    })
    auth.match('1', '2').then(data => {
      expect(data).toBe('test2')
    })
    auth.match('1', '2', '3').then(data => {
      expect(data).toBe('')
    })
    auth.remove('test1')
    
    // auth.match('1').then(data => {
    //   expect(data).toBe('')
    // })
    // auth.match('1', '2').then(data => {
    //   expect(data).toBe('test2')
    // })
    // auth.match('1', '2', '3').then(data => {
    //   expect(data).toBe('')
    // })
  })
  test('basic auth mixin fun then match', () => {
    var auth = new Auth()
    auth.add({
      name: 'test1',
      fun: (res:any[]) => {
        return new Promise(resolve => {
          if (res.length == 1) {
            resolve(true)
          } else {
            resolve(false)
          }
        })
      }
    })
    auth.add({
      name: 'test2',
      fun: (res:any[]) => {
        if (res.length == 2) {
          return true
        } else {
          return false
        }
      }
    })
    auth.match('1').then(data => {
      expect(data).toBe('test1')
    })
    auth.match('1', '2').then(data => {
      expect(data).toBe('test2')
    })
    auth.match('1', '2', '3').then(data => {
      expect(data).toBe('')
    })
  })
})