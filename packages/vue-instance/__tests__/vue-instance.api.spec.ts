import {log} from '../src/api/basic/'

describe("vue-instance: api", () => {
  test("api log debug", () => {
    console.debug(1)
    expect(log.get('debug').length).toEqual(1)
  })
})