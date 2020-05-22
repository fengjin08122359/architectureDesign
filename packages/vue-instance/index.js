'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./dist/vue-instance.cjs.prod.js.js')
} else {
  module.exports = require('./dist/vue-instance.cjs.js.js')
}
