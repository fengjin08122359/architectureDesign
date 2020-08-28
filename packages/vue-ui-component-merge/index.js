'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./dist/vue-ui-component-merge.cjs.prod.js.js')
} else {
  module.exports = require('./dist/vue-ui-component-merge.cjs.js.js')
}
