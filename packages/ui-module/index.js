'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./dist/ui-module.cjs.prod.js')
} else {
  module.exports = require('./dist/ui-module.cjs.js')
}
