'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./dist/vue-html-compiler.cjs.prod.js.js')
} else {
  module.exports = require('./dist/vue-html-compiler.cjs.js.js')
}
