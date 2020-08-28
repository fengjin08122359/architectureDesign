'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./dist/vue-ui-component-merge-html.cjs.prod.js.js')
} else {
  module.exports = require('./dist/vue-ui-component-merge-html.cjs.js.js')
}
