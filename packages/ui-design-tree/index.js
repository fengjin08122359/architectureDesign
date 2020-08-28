'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./dist/ui-design-tree.cjs.prod.js')
} else {
  module.exports = require('./dist/ui-design-tree.cjs.js')
}
