'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./dist/instance.cjs.prod.js')
} else {
  module.exports = require('./dist/instance.cjs.js')
}
